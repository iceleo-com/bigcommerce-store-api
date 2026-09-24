const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

describe('Tax Properties V3 API', () => {
    test('List tax properties', async () => {
        const response = await apiClient.v3.taxProperties.getTaxProperties();
        const properties = expectSuccess(response);

        expect(Array.isArray(properties)).toBe(true);
        expectPagination(response.meta);

        if (properties.length > 0) {
            expectShape(properties[0], {
                id: 'number',
                code: 'string',
                display_name: 'string',
                description: 'string',
                created_at: 'string',
                updated_at: 'string',
            });
        }
    });

    test('List product tax properties', async () => {
        const productsResponse = await apiClient.v3.products.getProducts({ limit: 1 });
        const products = expectSuccess(productsResponse);

        if (products.length === 0) {
            return;
        }

        const response = await apiClient.v3.taxProperties.getProductsTaxProperties({ 'product_id:in': [products[0].id] });
        const items = expectSuccess(response);

        expect(Array.isArray(items)).toBe(true);
        expectPagination(response.meta);

        if (items.length > 0) {
            expectShape(items[0], {
                product_id: 'number',
                tax_properties: 'object',
            });
            expect(items[0].product_id).toBe(products[0].id);
        }
    });
});
