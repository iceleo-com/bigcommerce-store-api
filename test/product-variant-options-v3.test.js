const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const optionShape = {
    id: 'number',
    product_id: 'number',
    name: 'string',
    display_name: 'string',
    type: 'string',
    sort_order: 'number',
    option_values: 'array',
    // an empty array when the option has no configuration
    config: ['object', 'array'],
};

const optionValueShape = {
    id: 'number',
    label: 'string',
    sort_order: 'number',
    value_data: ['object', 'null'],
    is_default: 'boolean',
};

describe('Product Variant Options V3 API', () => {
    test('List and get variant options and option values', async () => {
        const productsResponse = await apiClient.v3.products.getProducts({
            limit: 50,
            include: ['options'],
            include_fields: ['name'],
        });
        const products = expectSuccess(productsResponse);
        const product = products.find((item) => item.options.length > 0);

        if (!product) {
            return;
        }

        const response = await apiClient.v3.productVariantOptions.getProductVariantOptions(product.id);
        const options = expectSuccess(response);

        expectPagination(response.meta);
        expect(options.length).toBeGreaterThan(0);
        expectShape(options[0], optionShape);
        expect(options[0].product_id).toBe(product.id);

        if (options[0].option_values.length > 0) {
            expectShape(options[0].option_values[0], optionValueShape);
        }

        const optionResponse = await apiClient.v3.productVariantOptions.getProductVariantOption(product.id, options[0].id);
        const option = expectSuccess(optionResponse);
        expectShape(option, optionShape);
        expect(option.id).toBe(options[0].id);

        const valuesResponse = await apiClient.v3.productVariantOptions.getProductVariantOptionValues(product.id, option.id);
        const values = expectSuccess(valuesResponse);

        expect(Array.isArray(values)).toBe(true);
        expectPagination(valuesResponse.meta);

        if (values.length === 0) {
            return;
        }

        expectShape(values[0], optionValueShape);

        const valueResponse = await apiClient.v3.productVariantOptions.getProductVariantOptionValue(product.id, option.id, values[0].id);
        const value = expectSuccess(valueResponse);
        expectShape(value, optionValueShape);
        expect(value.id).toBe(values[0].id);
    });
});
