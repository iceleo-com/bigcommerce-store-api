const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const variantShape = {
    id: 'number',
    product_id: 'number',
    sku: 'string',
    sku_id: ['number', 'null'],
    price: ['number', 'null'],
    calculated_price: 'number',
    sale_price: ['number', 'null'],
    retail_price: ['number', 'null'],
    map_price: ['number', 'null'],
    cost_price: ['number', 'null'],
    weight: ['number', 'null'],
    calculated_weight: 'number',
    fixed_cost_shipping_price: ['number', 'null'],
    is_free_shipping: 'boolean',
    purchasing_disabled: 'boolean',
    purchasing_disabled_message: 'string',
    image_url: 'string',
    upc: ['string', 'null'],
    mpn: ['string', 'null'],
    gtin: ['string', 'null'],
    inventory_level: ['number', 'null'],
    inventory_warning_level: ['number', 'null'],
    bin_picking_number: ['string', 'null'],
    option_values: 'array',
};

const optionValueShape = {
    id: 'number',
    label: 'string',
    option_id: 'number',
    option_display_name: 'string',
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

describe('Product Variants V3 API', () => {
    test('List all variants', async () => {
        const response = await apiClient.v3.productVariants.getVariants({ limit: 5 });
        const variants = expectSuccess(response);

        expect(Array.isArray(variants)).toBe(true);
        expectPagination(response.meta);

        if (variants.length === 0) {
            return;
        }

        expectShape(variants[0], variantShape);
    });

    test('List product variants, get a variant and its metafields', async () => {
        const productsResponse = await apiClient.v3.products.getProducts({
            limit: 50,
            include: ['options'],
            include_fields: ['name'],
        });
        const products = expectSuccess(productsResponse);

        if (products.length === 0) {
            return;
        }

        // prefer a product with options, so its variants have option values
        const product = products.find((item) => item.options.length > 0) || products[0];

        const response = await apiClient.v3.productVariants.getProductVariants(product.id, { limit: 5 });
        const variants = expectSuccess(response);

        expectPagination(response.meta);
        expect(variants.length).toBeGreaterThan(0);
        expectShape(variants[0], variantShape);
        expect(variants[0].product_id).toBe(product.id);

        if (variants[0].option_values.length > 0) {
            expectShape(variants[0].option_values[0], optionValueShape);
        }

        const variantResponse = await apiClient.v3.productVariants.getProductVariant(product.id, variants[0].id);
        const variant = expectSuccess(variantResponse);
        expectShape(variant, variantShape);
        expect(variant.id).toBe(variants[0].id);

        const metafieldsResponse = await apiClient.v3.productVariants.getProductVariantMetafields(product.id, variant.id);
        const metafields = expectSuccess(metafieldsResponse);

        expect(Array.isArray(metafields)).toBe(true);
        expectPagination(metafieldsResponse.meta);

        if (metafields.length === 0) {
            return;
        }

        expectShape(metafields[0], metafieldShape);

        const metafieldResponse = await apiClient.v3.productVariants.getProductVariantMetafield(product.id, variant.id, metafields[0].id);
        const metafield = expectSuccess(metafieldResponse);
        expectShape(metafield, metafieldShape);
        expect(metafield.id).toBe(metafields[0].id);
    });

    test('List all variant metafields', async () => {
        const response = await apiClient.v3.productVariants.getVariantsMetafields({ limit: 5 });
        const metafields = expectSuccess(response);

        expect(Array.isArray(metafields)).toBe(true);
        expectPagination(response.meta);
        expectShape(response.meta, { cursor_pagination: ['object', 'undefined'] });

        if (metafields.length === 0) {
            return;
        }

        expectShape(metafields[0], metafieldShape);
    });
});
