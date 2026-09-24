const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const pageShape = {
    id: 'number',
    channel_id: 'number',
    name: 'string',
    is_visible: 'boolean',
    parent_id: 'number',
    sort_order: 'number',
    type: 'string',
    is_homepage: 'boolean',
    is_customers_only: 'boolean',
};

const typePageShape = {
    ...pageShape,
    url: 'string',
    meta_title: ['string', 'null'],
    meta_keywords: ['string', 'null'],
    meta_description: ['string', 'null'],
    search_keywords: ['string', 'null'],
};

describe('Pages V3 API', () => {
    test('List pages, get page', async () => {
        const response = await apiClient.v3.pages.getPages({ limit: 10 });
        const pages = expectSuccess(response);

        expect(Array.isArray(pages)).toBe(true);
        expectPagination(response.meta);

        if (pages.length === 0) {
            return;
        }

        for (const page of pages) {
            expectShape(page, pageShape);
            expect(['page', 'raw', 'contact_form', 'link', 'blog']).toContain(page.type);
            // body is returned only with include=body
            expect(page).not.toHaveProperty('body');
        }

        const pageResponse = await apiClient.v3.pages.getPage(pages[0].id);
        const page = expectSuccess(pageResponse);
        expectShape(page, pageShape);
        expect(page.id).toBe(pages[0].id);
    });

    test('List pages with body', async () => {
        const response = await apiClient.v3.pages.getPages({ limit: 50, include: ['body'] });
        const pages = expectSuccess(response);

        const page = pages.find((item) => item.type === 'page');

        if (!page) {
            return;
        }

        expectShape(page, { ...typePageShape, body: ['string', 'null'] });

        const link = pages.find((item) => item.type === 'link');

        if (link) {
            expectShape(link, { ...pageShape, link: 'string' });
        }
    });
});
