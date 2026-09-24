const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const redirectShape = {
    id: 'number',
    site_id: 'number',
    from_path: 'string',
    to: 'object',
};

describe('Redirects V3 API', () => {
    test('List redirects', async () => {
        const response = await apiClient.v3.redirects.getRedirects({ limit: 5 });
        const redirects = expectSuccess(response);

        expect(Array.isArray(redirects)).toBe(true);
        expectPagination(response.meta);

        if (redirects.length === 0) {
            return;
        }

        expectShape(redirects[0], redirectShape);
        expectShape(redirects[0].to, {
            type: 'string',
            entity_id: ['number', 'undefined'],
            url: ['string', 'undefined'],
        });
        expect(['product', 'brand', 'category', 'page', 'post', 'url']).toContain(redirects[0].to.type);
        // to_url is returned only with include=to_url
        expect(redirects[0]).not.toHaveProperty('to_url');
    });

    test('List redirects with to_url', async () => {
        const response = await apiClient.v3.redirects.getRedirects({ limit: 5, include: ['to_url'] });
        const redirects = expectSuccess(response);

        if (redirects.length === 0) {
            return;
        }

        expectShape(redirects[0], { ...redirectShape, to_url: 'string' });
    });

    test('List redirect import-export jobs', async () => {
        const response = await apiClient.v3.redirects.getRedirectImportExportJobs({ limit: 5 });
        const jobs = expectSuccess(response);

        expect(Array.isArray(jobs)).toBe(true);
        expectPagination(response.meta);

        if (jobs.length > 0) {
            expectShape(jobs[0], {
                id: 'string',
                type: 'string',
                status: 'string',
                created_at: 'string',
            });
        }
    });
});
