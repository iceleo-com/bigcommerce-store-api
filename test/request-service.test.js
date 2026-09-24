const {
    describe,
    test,
    expect,
    beforeEach,
    afterEach,
} = require('@jest/globals');
const { MockAgent, getGlobalDispatcher, setGlobalDispatcher } = require('undici');
const RequestService = require('../lib/helpers/request/request-service').default;

const config = {
    storeHash: 'abc123',
    accessToken: 'token',
    storeDomain: 'https://store.example.com/',
};

describe('RequestService', () => {
    let originalDispatcher;
    let agent;

    beforeEach(() => {
        originalDispatcher = getGlobalDispatcher();
        agent = new MockAgent();
        agent.disableNetConnect();
        setGlobalDispatcher(agent);
    });

    afterEach(async () => {
        setGlobalDispatcher(originalDispatcher);
        await agent.close();
    });

    // intercept one request and capture what was sent
    function intercept(origin, path, method, statusCode, data, headers = {}) {
        const captured = {};

        agent.get(origin).intercept({ path, method }).reply((options) => {
            Object.assign(captured, options);
            return { statusCode, data, responseOptions: { headers } };
        });

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

        expect(captured.headers['X-Auth-Token']).toBe('token');
        expect(response).toEqual({
            status: 'success',
            http_status: 200,
            data: [{ id: 1 }],
            meta: { pagination: {} },
            headers: { 'x-rate-limit-requests-left': '99' },
            response_text: '{"data":[{"id":1}],"meta":{"pagination":{}}}',
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
        expect(response.response_text).toBe('<html>Bad Gateway</html>');
    });

    test('sends string bodies as they are', async () => {
        const captured = intercept('https://api.bigcommerce.com', '/stores/abc123/v3/x', 'POST', 200, '{}');

        await new RequestService(config).post({ path: 'v3/x', contentType: 'application/json', body: '{"a":1}' });

        expect(captured.body).toBe('{"a":1}');
        expect(captured.headers['Content-Type']).toBe('application/json');
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
        expect(storefront.headers['X-Auth-Token']).toBeUndefined();
        expect(payments.headers['X-Auth-Token']).toBeUndefined();
    });

    test('fails without a request when a URL placeholder is not configured', async () => {
        const response = await new RequestService(config).post({ path: 'https://{app_domain}/rate', body: {} });

        expect(response.status).toBe('error');
        expect(response.errors.errors.message).toMatch('{app_domain}');
    });

    test('reports network errors', async () => {
        agent.get('https://api.bigcommerce.com').intercept({ path: '/stores/abc123/v3/x', method: 'GET' }).replyWithError(new Error('socket hang up'));

        const response = await new RequestService(config).get({ path: 'v3/x' });

        expect(response.status).toBe('error');
        expect(response.errors.errors.message).toBe('socket hang up');
        expect(response.headers).toEqual({});
        expect(response.response_text).toBe('');
    });
});
