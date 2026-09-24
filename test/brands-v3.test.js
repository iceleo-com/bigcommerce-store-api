const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const brandShape = {
    id: 'number',
    name: 'string',
    page_title: 'string',
    meta_keywords: 'array',
    meta_description: 'string',
    image_url: 'string',
    search_keywords: 'string',
    custom_url: 'object',
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

describe('Brands V3 API', () => {
    test('List and get brands and brand metafields', async () => {
        const response = await apiClient.v3.brands.getBrands({ limit: 5 });
        const brands = expectSuccess(response);

        expect(Array.isArray(brands)).toBe(true);
        expectPagination(response.meta);

        if (brands.length === 0) {
            return;
        }

        expectShape(brands[0], brandShape);
        expectShape(brands[0].custom_url, { url: 'string', is_customized: 'boolean' });

        const brandId = brands[0].id;

        const brandResponse = await apiClient.v3.brands.getBrand(brandId);
        const brand = expectSuccess(brandResponse);
        expectShape(brand, brandShape);
        expect(brand.id).toBe(brandId);

        const metafieldsResponse = await apiClient.v3.brands.getBrandMetafields(brandId);
        const metafields = expectSuccess(metafieldsResponse);

        expect(Array.isArray(metafields)).toBe(true);
        expectPagination(metafieldsResponse.meta);

        if (metafields.length === 0) {
            return;
        }

        expectShape(metafields[0], metafieldShape);

        const metafieldResponse = await apiClient.v3.brands.getBrandMetafield(brandId, metafields[0].id);
        const metafield = expectSuccess(metafieldResponse);
        expectShape(metafield, metafieldShape);
        expect(metafield.id).toBe(metafields[0].id);
    });

    test('List all brand metafields', async () => {
        const response = await apiClient.v3.brands.getBrandsMetafields({ limit: 5 });
        const metafields = expectSuccess(response);

        expect(Array.isArray(metafields)).toBe(true);
        expectPagination(response.meta);
        expectShape(response.meta, { cursor_pagination: ['object', 'undefined'] });

        if (metafields.length === 0) {
            return;
        }

        expectShape(metafields[0], metafieldShape);
        expect(metafields[0].resource_type).toBe('brand');
    });
});
