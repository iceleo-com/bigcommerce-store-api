const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const siteShape = {
    id: 'number',
    url: 'string',
    channel_id: 'number',
    created_at: 'string',
    updated_at: 'string',
    urls: 'array',
    is_checkout_url_customized: 'boolean',
};

const certificateShape = {
    common_name: 'string',
    subject_alternative_names: 'array',
    validity_not_before: 'string',
    validity_not_after: 'string',
    signing_algorithm: 'string',
    issuer: 'string',
    certificate: 'string',
};

describe('Sites V3 API', () => {
    test('List sites, get site, certificate and routes', async () => {
        const response = await apiClient.v3.sites.getSites({ limit: 5 });
        const sites = expectSuccess(response);

        expect(Array.isArray(sites)).toBe(true);
        // the sites list uses offset pagination
        expectShape(response.meta, { pagination: 'object' });
        expectShape(response.meta.pagination, {
            limit: 'number',
            offset: 'number',
            total_items: 'number',
        });

        if (sites.length === 0) {
            return;
        }

        expectShape(sites[0], siteShape);

        if (sites[0].urls.length > 0) {
            expectShape(sites[0].urls[0], {
                url: 'string',
                type: 'string',
                created_at: 'string',
                updated_at: 'string',
            });
        }

        const siteId = sites[0].id;

        const siteResponse = await apiClient.v3.sites.getSite(siteId);
        const site = expectSuccess(siteResponse);
        expectShape(site, siteShape);
        expect(site.id).toBe(siteId);

        const certificateResponse = await apiClient.v3.sites.getSiteCertificate(siteId);
        // a site without a dedicated certificate may not return one
        if (certificateResponse.status === 'success') {
            expectShape(certificateResponse.data, certificateShape);
        }

        const routesResponse = await apiClient.v3.sites.getSiteRoutes(siteId);
        const routes = expectSuccess(routesResponse);

        expect(Array.isArray(routes)).toBe(true);
        expectPagination(routesResponse.meta);

        if (routes.length === 0) {
            return;
        }

        expectShape(routes[0], {
            id: 'number',
            type: 'string',
            matching: 'string',
            route: 'string',
        });

        const routeResponse = await apiClient.v3.sites.getSiteRoute(siteId, routes[0].id);
        expect(expectSuccess(routeResponse).id).toBe(routes[0].id);
    });

    test('List certificates', async () => {
        const response = await apiClient.v3.sites.getSitesCertificates();
        const certificates = expectSuccess(response);

        expect(Array.isArray(certificates)).toBe(true);

        if (certificates.length > 0) {
            expectShape(certificates[0], certificateShape);
        }
    });
});
