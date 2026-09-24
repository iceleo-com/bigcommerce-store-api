const { describe, test } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

describe('Promotion Settings V3 API', () => {
    test('Get global promotion settings', async () => {
        const response = await apiClient.v3.promotionSettings.getGlobalPromotionSettings();
        const settings = expectSuccess(response);

        expectShape(settings, {
            promotions_triggered_by_products_with_zero_product_price: 'boolean',
            promotions_apply_on_products_with_custom_product_price: 'boolean',
            number_of_coupons_allowed_at_checkout: 'number',
            promotions_applied_on_original_product_price: 'boolean',
        });
    });
});
