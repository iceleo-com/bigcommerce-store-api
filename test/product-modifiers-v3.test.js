const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const modifierShape = {
    id: 'number',
    product_id: 'number',
    name: 'string',
    display_name: 'string',
    type: 'string',
    required: 'boolean',
    sort_order: 'number',
    option_values: 'array',
};

const modifierValueShape = {
    id: 'number',
    label: 'string',
    sort_order: 'number',
    is_default: 'boolean',
};

describe('Product Modifiers V3 API', () => {
    test('List and get product modifiers and modifier values', async () => {
        const productsResponse = await apiClient.v3.products.getProducts({
            limit: 50,
            include: ['modifiers'],
            include_fields: ['name'],
        });
        const products = expectSuccess(productsResponse);

        if (products.length === 0) {
            return;
        }

        const product = products.find((item) => item.modifiers.length > 0) || products[0];

        const response = await apiClient.v3.productModifiers.getProductModifiers(product.id);
        const modifiers = expectSuccess(response);

        expect(Array.isArray(modifiers)).toBe(true);
        expectPagination(response.meta);

        if (modifiers.length === 0) {
            return;
        }

        expectShape(modifiers[0], modifierShape);
        expect(modifiers[0].product_id).toBe(product.id);

        const modifierResponse = await apiClient.v3.productModifiers.getProductModifier(product.id, modifiers[0].id);
        const modifier = expectSuccess(modifierResponse);
        expectShape(modifier, modifierShape);
        expect(modifier.id).toBe(modifiers[0].id);

        const valuesResponse = await apiClient.v3.productModifiers.getProductModifierValues(product.id, modifier.id);
        const values = expectSuccess(valuesResponse);

        expect(Array.isArray(values)).toBe(true);

        if (values.length === 0) {
            return;
        }

        expectShape(values[0], modifierValueShape);

        const valueResponse = await apiClient.v3.productModifiers.getProductModifierValue(product.id, modifier.id, values[0].id);
        const value = expectSuccess(valueResponse);
        expectShape(value, modifierValueShape);
        expect(value.id).toBe(values[0].id);
    });
});
