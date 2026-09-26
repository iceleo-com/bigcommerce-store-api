const {
    describe,
    test,
    expect,
    beforeAll,
    afterEach,
    afterAll,
} = require('@jest/globals');
const { http, HttpResponse } = require('msw');
const { setupServer } = require('msw/node');
const RequestService = require('../lib/helpers/request/request-service').default;

const config = {
    storeHash: 'abc123',
    accessToken: 'token',
    storeDomain: 'https://store.example.com/',
};

describe('RequestService', () => {
    // any request without a handler fails, so nothing reaches the network
    const server = setupServer();

    beforeAll(() => {
        server.listen({ onUnhandledRequest: 'error' });
    });

    afterEach(() => {
        server.resetHandlers();
    });

    afterAll(() => {
        server.close();
    });

    // intercept one request and capture what was sent
    function intercept(origin, path, method, statusCode, data, headers = {}) {
        const captured = {};
        const [pathname, query] = path.split('?');

        server.use(http[method.toLowerCase()](`${origin}${pathname}`, async ({ request }) => {
            // msw ignores the query when matching, so check it here; a mismatch falls through as unhandled
            if (new URL(request.url).search !== (query ? `?${query}` : '')) {
                return undefined;
            }

            Object.assign(captured, { headers: Object.fromEntries(request.headers), body: await request.text() });
            return new HttpResponse(data, { status: statusCode, headers });
        }, { once: true }));

        return captured;
    }

    test('sends API gateway requests with the token and a clean query', async () => {
        const captured = intercept(
            'https://api.bigcommerce.com',
            '/stores/abc123/v3/catalog/products?id%3Ain=1%2C2&page=1',
            'GET',
            200,
            JSON.stringify({ data: [{ id: 1 }], meta: { pagination: {} } }),
            { 'x-rate-limit-requests-left': '99' },
        );

        const response = await new RequestService(config).get({
            path: 'v3/catalog/products',
            query: { 'id:in': [1, 2], page: 1, limit: undefined, name: null },
        });

        expect(captured.headers['x-auth-token']).toBe('token');
        expect(response).toEqual({
            status: 'success',
            http_status: 200,
            data: [{ id: 1 }],
            meta: { pagination: {} },
            headers: { 'x-rate-limit-requests-left': '99' },
        });
    });

    test('keeps falsy data and survives a null body', async () => {
        intercept('https://api.bigcommerce.com', '/stores/abc123/v2/a', 'GET', 200, '{"data":null}');
        intercept('https://api.bigcommerce.com', '/stores/abc123/v2/b', 'GET', 200, 'null');

        const service = new RequestService(config);

        expect((await service.get({ path: 'v2/a' })).data).toBeNull();
        expect((await service.get({ path: 'v2/b' })).data).toBeNull();
    });

    test('returns the raw body of a non-JSON error', async () => {
        intercept('https://api.bigcommerce.com', '/stores/abc123/v3/x', 'GET', 502, '<html>Bad Gateway</html>');

        const response = await new RequestService(config).get({ path: 'v3/x' });

        expect(response.status).toBe('error');
        expect(response.http_status).toBe(502);
        expect(response.errors).toEqual({ status: 502, title: '<html>Bad Gateway</html>', type: 'http_error' });
    });

    test('includes response_text only when enabled', async () => {
        intercept('https://api.bigcommerce.com', '/stores/abc123/v3/a', 'GET', 200, '{"data":{"id":1}}');
        intercept('https://api.bigcommerce.com', '/stores/abc123/v3/b', 'GET', 200, '{"data":{"id":1}}');
        intercept('https://api.bigcommerce.com', '/stores/abc123/v3/c', 'GET', 404, '{"title":"Not Found"}');

        const debugService = new RequestService({ ...config, includeResponseText: true });

        expect(await new RequestService(config).get({ path: 'v3/a' })).not.toHaveProperty('response_text');
        expect((await debugService.get({ path: 'v3/b' })).response_text).toBe('{"data":{"id":1}}');
        expect((await debugService.get({ path: 'v3/c' })).response_text).toBe('{"title":"Not Found"}');
    });

    test('sends string bodies as they are', async () => {
        const captured = intercept('https://api.bigcommerce.com', '/stores/abc123/v3/x', 'POST', 200, '{}');

        await new RequestService(config).post({ path: 'v3/x', contentType: 'application/json', body: '{"a":1}' });

        expect(captured.body).toBe('{"a":1}');
        expect(captured.headers['content-type']).toBe('application/json');
    });

    test('sends multipart bodies with files', async () => {
        const captured = intercept('https://api.bigcommerce.com', '/stores/abc123/v3/x', 'POST', 200, '{}');

        await new RequestService(config).post({
            path: 'v3/x',
            contentType: 'multipart/form-data',
            body: { name: 'logo', file: new Blob(['file-content'], { type: 'image/png' }) },
        });

        expect(captured.headers['content-type']).toMatch(/^multipart\/form-data; boundary=/);
        expect(captured.body).toContain('name="name"\r\n\r\nlogo');
        expect(captured.body).toContain('Content-Type: image/png\r\n\r\nfile-content');
    });

    test('resolves absolute URLs from the config without sending the token', async () => {
        const storefront = intercept('https://store.example.com', '/customer/current.jwt?app_client_id=id', 'GET', 200, '{"token":"jwt"}');
        const payments = intercept('https://payments.bigcommerce.com', '/stores/abc123/payments', 'POST', 200, '{}');

        const service = new RequestService(config);
        const response = await service.get({
            path: 'https://{store_domain}/customer/current.jwt',
            query: { app_client_id: 'id' },
        });
        await service.post({ path: 'https://payments.bigcommerce.com/stores/{store_hash}/payments', body: {} });

        expect(response.data).toEqual({ token: 'jwt' });
        expect(storefront.headers['x-auth-token']).toBeUndefined();
        expect(payments.headers['x-auth-token']).toBeUndefined();
    });

    test('fails without a request when a URL placeholder is not configured', async () => {
        const response = await new RequestService(config).post({ path: 'https://{app_domain}/rate', body: {} });

        expect(response.status).toBe('error');
        expect(response.errors.errors.message).toMatch('{app_domain}');
    });

    test('reports network errors', async () => {
        server.use(http.get('https://api.bigcommerce.com/stores/abc123/v3/x', () => HttpResponse.error()));

        const response = await new RequestService(config).get({ path: 'v3/x' });

        expect(response.status).toBe('error');
        expect(response.errors.errors.message).toBe('Network error');
        expect(response.headers).toEqual({});
        expect(response).not.toHaveProperty('response_text');
    });
});
