const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

const bannerShape = {
    id: 'number',
    name: 'string',
    content: 'string',
    page: 'string',
    item_id: 'string',
    location: 'string',
    date_created: 'string',
    date_type: 'string',
    date_from: 'string',
    date_to: 'string',
    visible: 'string',
};

// coupons and gift certificates contain codes and personal data: assert types only
const couponShape = {
    id: 'number',
    name: 'string',
    type: 'string',
    amount: 'string',
    min_purchase: 'string',
    expires: 'string',
    enabled: 'boolean',
    code: 'string',
    applies_to: 'object',
    num_uses: 'number',
    max_uses: 'number',
    max_uses_per_customer: 'number',
    restricted_to: ['object', 'array'],
    shipping_methods: ['array', 'null'],
    date_created: 'string',
};

const giftCertificateShape = {
    id: 'number',
    customer_id: 'string',
    order_id: 'string',
    code: 'string',
    to_name: 'string',
    to_email: 'string',
    from_name: 'string',
    from_email: 'string',
    amount: 'string',
    balance: 'string',
    status: 'string',
    template: 'string',
    message: 'string',
    purchase_date: 'string',
    expiry_date: 'string',
    currency_code: 'string',
};

/**
 * v2 lists return 204 when empty.
 */
function expectList(response) {
    if (response.http_status === 204) {
        return [];
    }

    const items = expectSuccess(response);
    expect(Array.isArray(items)).toBe(true);

    return items;
}

describe('Marketing V2 API', () => {
    test('List banners, get banner', async () => {
        const banners = expectList(await apiClient.v2.marketing.getBanners({ limit: 5 }));

        if (banners.length === 0) {
            return;
        }

        expectShape(banners[0], bannerShape);
        expect(['home_page', 'category_page', 'brand_page', 'search_page']).toContain(banners[0].page);

        const banner = expectSuccess(await apiClient.v2.marketing.getBanner(banners[0].id));
        expectShape(banner, bannerShape);
        expect(banner.id).toBe(banners[0].id);
    });

    test('Count banners', async () => {
        const count = expectSuccess(await apiClient.v2.marketing.getBannersCount());
        expectShape(count, { count: 'number' });
    });

    test('List coupons', async () => {
        const coupons = expectList(await apiClient.v2.marketing.getCoupons({ limit: 5 }));

        if (coupons.length === 0) {
            return;
        }

        expectShape(coupons[0], couponShape);
        expectShape(coupons[0].applies_to, { entity: 'string', ids: 'array' });
    });

    test('Count coupons', async () => {
        const count = expectSuccess(await apiClient.v2.marketing.getCouponsCount());
        expectShape(count, { count: 'number' });
    });

    test('List gift certificates, get gift certificate', async () => {
        const certificates = expectList(await apiClient.v2.marketing.getGiftCertificates({ limit: 5 }));

        if (certificates.length === 0) {
            return;
        }

        expectShape(certificates[0], giftCertificateShape);

        const certificate = expectSuccess(await apiClient.v2.marketing.getGiftCertificate(certificates[0].id));
        expectShape(certificate, giftCertificateShape);
        expect(certificate.id).toBe(certificates[0].id);
    });
});
