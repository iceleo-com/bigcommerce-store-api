const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const promotionShape = {
    id: 'number',
    name: 'string',
    display_name: 'string',
    redemption_type: 'string',
    channels: 'array',
    customer: 'object',
    rules: 'array',
    notifications: 'array',
    current_uses: 'number',
    max_uses: ['number', 'null'],
    status: 'string',
    start_date: 'string',
    end_date: ['string', 'null'],
    stop: 'boolean',
    can_be_used_with_other_promotions: 'boolean',
    currency_code: 'string',
    shipping_address: ['object', 'null'],
    schedule: ['object', 'null'],
    promotion_category: 'string',
    is_featured_promotion: 'boolean',
    featured_promotion_callout_message: 'string',
    created_from: 'string',
    is_archived: 'boolean',
};

const couponCodeShape = {
    id: 'number',
    code: 'string',
    current_uses: 'number',
    created: 'string',
};

describe('Promotions V3 API', () => {
    test('List promotions, get promotion', async () => {
        const response = await apiClient.v3.promotions.getPromotions({ limit: 5 });
        const promotions = expectSuccess(response);

        expect(Array.isArray(promotions)).toBe(true);
        expectPagination(response.meta);

        if (promotions.length === 0) {
            return;
        }

        const listed = promotions[0];
        expectShape(listed, promotionShape);
        expect(['AUTOMATIC', 'COUPON']).toContain(listed.redemption_type);
        expectShape(listed.customer, {
            group_ids: 'array',
            minimum_order_count: 'number',
            excluded_group_ids: 'array',
            segments: ['object', 'null'],
        });

        if (listed.rules.length > 0) {
            expectShape(listed.rules[0], { action: 'object', apply_once: 'boolean', stop: 'boolean' });
        }

        if (listed.notifications.length > 0) {
            expectShape(listed.notifications[0], { type: 'string', content: 'string', locations: 'array' });
        }

        const promotionResponse = await apiClient.v3.promotions.getPromotion(listed.id);
        const promotion = expectSuccess(promotionResponse);
        expectShape(promotion, promotionShape);
        expect(promotion.id).toBe(listed.id);
    });

    test('List coupon codes of a coupon promotion', async () => {
        const response = await apiClient.v3.promotions.getPromotions({ redemption_type: 'coupon', limit: 1 });
        const promotions = expectSuccess(response);

        if (promotions.length === 0) {
            return;
        }

        const codesResponse = await apiClient.v3.promotions.getPromotionCodes(promotions[0].id, { limit: 5 });
        const codes = expectSuccess(codesResponse);

        expect(Array.isArray(codes)).toBe(true);

        if (codes.length > 0) {
            expectShape(codes[0], couponCodeShape);
        }
    });

    test('Get coupon code by code', async () => {
        // use an existing (legacy) coupon code of the store, without asserting its value
        const couponsResponse = await apiClient.v2.marketing.getCoupons({ limit: 1 });

        if (couponsResponse.http_status === 204) {
            return;
        }

        const coupons = expectSuccess(couponsResponse);

        if (coupons.length === 0) {
            return;
        }

        const response = await apiClient.v3.promotions.getCouponCodeByCode({ code: coupons[0].code });
        const codes = expectSuccess(response);

        expect(Array.isArray(codes)).toBe(true);
        expectShape(response.meta, { pagination: ['object', 'undefined'], cursor_pagination: ['object', 'undefined'] });

        if (codes.length > 0) {
            expectShape(codes[0], couponCodeShape);
        }
    });
});
