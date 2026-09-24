const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const productShape = {
    id: 'number',
    name: 'string',
    type: 'string',
    sku: 'string',
    description: 'string',
    weight: 'number',
    width: 'number',
    depth: 'number',
    height: 'number',
    price: 'number',
    cost_price: 'number',
    retail_price: 'number',
    sale_price: 'number',
    map_price: 'number',
    calculated_price: 'number',
    tax_class_id: 'number',
    product_tax_code: 'string',
    categories: 'array',
    brand_id: 'number',
    option_set_id: ['number', 'null'],
    option_set_display: 'string',
    inventory_level: 'number',
    inventory_warning_level: 'number',
    inventory_tracking: 'string',
    reviews_rating_sum: 'number',
    reviews_count: 'number',
    total_sold: 'number',
    fixed_cost_shipping_price: 'number',
    is_free_shipping: 'boolean',
    is_visible: 'boolean',
    is_featured: 'boolean',
    related_products: 'array',
    upc: 'string',
    mpn: 'string',
    gtin: 'string',
    date_last_imported: ['string', 'null'],
    availability: 'string',
    gift_wrapping_options_type: 'string',
    gift_wrapping_options_list: 'array',
    sort_order: 'number',
    condition: 'string',
    order_quantity_minimum: 'number',
    order_quantity_maximum: 'number',
    meta_keywords: 'array',
    date_created: 'string',
    date_modified: 'string',
    view_count: 'number',
    preorder_release_date: ['string', 'null'],
    is_preorder_only: 'boolean',
    is_price_hidden: 'boolean',
    custom_url: 'object',
    base_variant_id: ['number', 'null'],
    open_graph_type: 'string',
};

const imageShape = {
    id: 'number',
    product_id: 'number',
    is_thumbnail: 'boolean',
    sort_order: 'number',
    description: 'string',
    image_file: 'string',
    url_zoom: 'string',
    url_standard: 'string',
    url_thumbnail: 'string',
    url_tiny: 'string',
    date_modified: 'string',
};

const customFieldShape = {
    id: 'number',
    name: 'string',
    value: 'string',
};

const bulkPricingRuleShape = {
    id: 'number',
    quantity_min: 'number',
    quantity_max: 'number',
    type: 'string',
    amount: ['number', 'string'],
};

const videoShape = {
    id: 'number',
    type: 'string',
    video_id: 'string',
    product_id: 'number',
    sort_order: 'number',
    title: 'string',
    description: 'string',
    length: 'string',
};

const metafieldShape = {
    id: 'number',
    key: 'string',
    value: 'string',
    namespace: 'string',
    permission_set: 'string',
    resource_type: 'string',
    resource_id: 'number',
    description: 'string',
    date_created: 'string',
    date_modified: 'string',
};

const reviewShape = {
    id: 'number',
    title: 'string',
    text: 'string',
    status: 'string',
    rating: 'number',
    email: 'string',
    name: 'string',
    date_reviewed: 'string',
    date_created: 'string',
    date_modified: 'string',
};

/**
 * Lists products with their sub-resources, to find products that have data for each sub-resource.
 */
async function listProductsWithSubResources() {
    const response = await apiClient.v3.products.getProducts({
        limit: 50,
        include: ['images', 'custom_fields', 'bulk_pricing_rules', 'videos'],
        include_fields: ['name'],
    });

    return expectSuccess(response);
}

describe('Products V3 API', () => {
    test('List products with includes and get a product', async () => {
        const response = await apiClient.v3.products.getProducts({
            limit: 5,
            include: ['variants', 'images', 'primary_image', 'custom_fields', 'bulk_pricing_rules', 'options', 'modifiers', 'videos'],
        });
        const products = expectSuccess(response);

        expect(Array.isArray(products)).toBe(true);
        expectPagination(response.meta);

        if (products.length === 0) {
            return;
        }

        const product = products[0];
        expectShape(product, productShape);
        expectShape(product.custom_url, { url: 'string', is_customized: 'boolean' });
        expectShape(product, {
            variants: 'array',
            images: 'array',
            primary_image: ['object', 'null'],
            custom_fields: 'array',
            bulk_pricing_rules: 'array',
            options: 'array',
            modifiers: 'array',
            videos: 'array',
        });

        if (product.variants.length > 0) {
            expectShape(product.variants[0], {
                id: 'number',
                product_id: 'number',
                sku: 'string',
                sku_id: ['number', 'null'],
                price: ['number', 'null'],
                calculated_price: 'number',
                map_price: ['number', 'null'],
                option_values: 'array',
            });
            expect(product.variants[0].product_id).toBe(product.id);
        }

        if (product.primary_image) {
            expectShape(product.primary_image, imageShape);
        }

        const productResponse = await apiClient.v3.products.getProduct(product.id);
        const productDetail = expectSuccess(productResponse);
        expectShape(productDetail, productShape);
        expect(productDetail.id).toBe(product.id);
        // sub-resources are only returned when included
        expect(productDetail.variants).toBeUndefined();
    });

    test('Get catalog summary', async () => {
        const response = await apiClient.v3.products.getCatalogSummary();
        const summary = expectSuccess(response);

        expectShape(summary, {
            inventory_count: 'number',
            variant_count: 'number',
            inventory_value: 'number',
            highest_variant_price: 'number',
            average_variant_price: 'number',
            lowest_variant_price: 'number',
            oldest_variant_date: 'string',
            newest_variant_date: 'string',
            primary_category_id: 'number',
            primary_category_name: 'string',
        });
    });

    test('List category and channel assignments', async () => {
        const categoryResponse = await apiClient.v3.products.getProductsCategoryAssignments({ limit: 5 });
        const categoryAssignments = expectSuccess(categoryResponse);

        expect(Array.isArray(categoryAssignments)).toBe(true);
        expectPagination(categoryResponse.meta);

        if (categoryAssignments.length > 0) {
            expectShape(categoryAssignments[0], { product_id: 'number', category_id: 'number' });
        }

        const channelResponse = await apiClient.v3.products.getProductsChannelAssignments({ limit: 5 });
        const channelAssignments = expectSuccess(channelResponse);

        expect(Array.isArray(channelAssignments)).toBe(true);
        expectPagination(channelResponse.meta);

        if (channelAssignments.length > 0) {
            expectShape(channelAssignments[0], { product_id: 'number', channel_id: 'number' });
        }
    });

    test('List product metafields and get a metafield', async () => {
        const response = await apiClient.v3.products.getProductsMetafields({ limit: 5 });
        const metafields = expectSuccess(response);

        expect(Array.isArray(metafields)).toBe(true);
        expectPagination(response.meta);

        if (metafields.length === 0) {
            return;
        }

        expectShape(metafields[0], metafieldShape);
        expect(metafields[0].resource_type).toBe('product');

        const productId = metafields[0].resource_id;

        const productMetafieldsResponse = await apiClient.v3.products.getProductMetafields(productId);
        const productMetafields = expectSuccess(productMetafieldsResponse);

        expect(Array.isArray(productMetafields)).toBe(true);
        expectPagination(productMetafieldsResponse.meta);
        expect(productMetafields.length).toBeGreaterThan(0);
        expectShape(productMetafields[0], metafieldShape);
        expect(productMetafields[0].resource_id).toBe(productId);

        const metafieldResponse = await apiClient.v3.products.getProductMetafield(productId, productMetafields[0].id);
        const metafield = expectSuccess(metafieldResponse);
        expectShape(metafield, metafieldShape);
        expect(metafield.id).toBe(productMetafields[0].id);
    });

    test('List and get product images, custom fields, bulk pricing rules and videos', async () => {
        const products = await listProductsWithSubResources();

        const withImages = products.find((product) => product.images.length > 0);
        if (withImages) {
            const imagesResponse = await apiClient.v3.products.getProductImages(withImages.id);
            const images = expectSuccess(imagesResponse);

            expectPagination(imagesResponse.meta);
            expect(images.length).toBeGreaterThan(0);
            expectShape(images[0], imageShape);
            expect(images[0].product_id).toBe(withImages.id);

            const imageResponse = await apiClient.v3.products.getProductImage(withImages.id, images[0].id);
            const image = expectSuccess(imageResponse);
            expectShape(image, imageShape);
            expect(image.id).toBe(images[0].id);
        }

        const withCustomFields = products.find((product) => product.custom_fields.length > 0);
        if (withCustomFields) {
            const customFieldsResponse = await apiClient.v3.products.getProductCustomFields(withCustomFields.id);
            const customFields = expectSuccess(customFieldsResponse);

            expectPagination(customFieldsResponse.meta);
            expect(customFields.length).toBeGreaterThan(0);
            expectShape(customFields[0], customFieldShape);

            const customFieldResponse = await apiClient.v3.products.getProductCustomField(withCustomFields.id, customFields[0].id);
            const customField = expectSuccess(customFieldResponse);
            expectShape(customField, customFieldShape);
            expect(customField.id).toBe(customFields[0].id);
        }

        const withBulkPricingRules = products.find((product) => product.bulk_pricing_rules.length > 0);
        if (withBulkPricingRules) {
            const rulesResponse = await apiClient.v3.products.getAllBulkPricingRules(withBulkPricingRules.id);
            const rules = expectSuccess(rulesResponse);

            expect(Array.isArray(rules)).toBe(true);
            expectPagination(rulesResponse.meta);
            expect(rules.length).toBeGreaterThan(0);
            expectShape(rules[0], bulkPricingRuleShape);

            const ruleResponse = await apiClient.v3.products.getBulkPricingRule(withBulkPricingRules.id, rules[0].id);
            const rule = expectSuccess(ruleResponse);
            expectShape(rule, bulkPricingRuleShape);
            expect(rule.id).toBe(rules[0].id);
        }

        const withVideos = products.find((product) => product.videos.length > 0);
        if (withVideos) {
            const videosResponse = await apiClient.v3.products.getProductVideos(withVideos.id);
            const videos = expectSuccess(videosResponse);

            expectPagination(videosResponse.meta);
            expect(videos.length).toBeGreaterThan(0);
            expectShape(videos[0], videoShape);
            expect(videos[0].product_id).toBe(withVideos.id);

            const videoResponse = await apiClient.v3.products.getProductVideo(withVideos.id, videos[0].id);
            const video = expectSuccess(videoResponse);
            expectShape(video, videoShape);
            expect(video.id).toBe(videos[0].id);
        }
    });

    test('List product complex rules', async () => {
        const productsResponse = await apiClient.v3.products.getProducts({ limit: 1, include_fields: ['name'] });
        const products = expectSuccess(productsResponse);

        if (products.length === 0) {
            return;
        }

        const response = await apiClient.v3.products.getProductComplexRules(products[0].id);
        const rules = expectSuccess(response);

        expect(Array.isArray(rules)).toBe(true);
        expectPagination(response.meta);

        if (rules.length === 0) {
            return;
        }

        expectShape(rules[0], {
            id: 'number',
            product_id: 'number',
            sort_order: 'number',
            enabled: 'boolean',
            stop: 'boolean',
            purchasing_disabled: 'boolean',
            conditions: 'array',
        });

        const ruleResponse = await apiClient.v3.products.getProductComplexRule(products[0].id, rules[0].id);
        const rule = expectSuccess(ruleResponse);
        expect(rule.id).toBe(rules[0].id);
    });

    test('List and get product reviews', async () => {
        const productsResponse = await apiClient.v3.products.getProducts({
            limit: 250,
            include_fields: ['reviews_count'],
        });
        const products = expectSuccess(productsResponse);

        if (products.length === 0) {
            return;
        }

        const reviewed = products.find((product) => product.reviews_count > 0) || products[0];

        const response = await apiClient.v3.products.getProductReviews(reviewed.id);
        const reviews = expectSuccess(response);

        expect(Array.isArray(reviews)).toBe(true);
        expectPagination(response.meta);

        if (reviews.length === 0) {
            return;
        }

        expectShape(reviews[0], reviewShape);

        const reviewResponse = await apiClient.v3.products.getProductReview(reviewed.id, reviews[0].id);
        const review = expectSuccess(reviewResponse);
        expectShape(review, reviewShape);
        expect(review.id).toBe(reviews[0].id);
    });
});
