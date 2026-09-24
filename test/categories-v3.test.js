const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const categoryShape = {
    id: 'number',
    parent_id: 'number',
    name: 'string',
    description: 'string',
    views: 'number',
    sort_order: 'number',
    page_title: 'string',
    search_keywords: 'string',
    meta_keywords: 'array',
    meta_description: 'string',
    layout_file: 'string',
    is_visible: 'boolean',
    default_product_sort: 'string',
    custom_url: 'object',
    image_url: 'string',
};

const metafieldShape = {
    id: 'number',
    key: 'string',
    value: 'string',
    namespace: 'string',
    permission_set: 'string',
    resource_type: 'string',
    resource_id: 'number',
    date_created: 'string',
    date_modified: 'string',
};

describe('Categories V3 API', () => {
    test('List and get categories, metafields and sort orders', async () => {
        const response = await apiClient.v3.categories.getCategories({ limit: 5 });
        const categories = expectSuccess(response);

        expect(Array.isArray(categories)).toBe(true);
        expectPagination(response.meta);

        if (categories.length === 0) {
            return;
        }

        expectShape(categories[0], categoryShape);
        expectShape(categories[0].custom_url, { url: 'string', is_customized: 'boolean' });

        const categoryId = categories[0].id;

        const categoryResponse = await apiClient.v3.categories.getCategory(categoryId);
        const category = expectSuccess(categoryResponse);
        expectShape(category, categoryShape);
        expect(category.id).toBe(categoryId);

        const sortOrdersResponse = await apiClient.v3.categories.getCategorySortOrders(categoryId, { limit: 5 });
        const sortOrders = expectSuccess(sortOrdersResponse);

        expect(Array.isArray(sortOrders)).toBe(true);
        expectPagination(sortOrdersResponse.meta);

        if (sortOrders.length > 0) {
            expectShape(sortOrders[0], {
                product_id: 'number',
                sort_order: ['number', 'null'],
            });
        }

        const metafieldsResponse = await apiClient.v3.categories.getCategoryMetafields(categoryId);
        const metafields = expectSuccess(metafieldsResponse);

        expect(Array.isArray(metafields)).toBe(true);
        expectPagination(metafieldsResponse.meta);

        if (metafields.length === 0) {
            return;
        }

        expectShape(metafields[0], metafieldShape);

        const metafieldResponse = await apiClient.v3.categories.getCategoryMetafield(categoryId, metafields[0].id);
        const metafield = expectSuccess(metafieldResponse);
        expectShape(metafield, metafieldShape);
        expect(metafield.id).toBe(metafields[0].id);
    });

    test('List all category metafields', async () => {
        const response = await apiClient.v3.categories.getCategoriesMetafields({ limit: 5 });
        const metafields = expectSuccess(response);

        expect(Array.isArray(metafields)).toBe(true);
        expectPagination(response.meta);
        expectShape(response.meta, { cursor_pagination: ['object', 'undefined'] });

        if (metafields.length === 0) {
            return;
        }

        expectShape(metafields[0], metafieldShape);
        expect(metafields[0].resource_type).toBe('category');
    });
});
