const {
    describe,
    test,
    expect,
} = require('@jest/globals');
const BigCommerceStoreApi = require('../lib/index').default;

describe('BigCommerceStoreApi', () => {
    test('should be a function', () => {
        expect(typeof BigCommerceStoreApi).toBe('function');

        const apiClient = new BigCommerceStoreApi({
            storeHash: 'storeHash',
            accessToken: 'accessToken',
        });

        expect(typeof apiClient).toBe('object');

        expect(typeof apiClient.v2).toBe('object');
        if (apiClient.v2) {
            expect(apiClient.v2).toHaveProperty('currencies');
            expect(apiClient.v2).toHaveProperty('customers');
            expect(apiClient.v2).toHaveProperty('geography');
            expect(apiClient.v2).toHaveProperty('marketing');
            expect(apiClient.v2).toHaveProperty('ordersV2Oas2');
            expect(apiClient.v2).toHaveProperty('methods');
            expect(apiClient.v2).toHaveProperty('shipping');
            expect(apiClient.v2).toHaveProperty('storeContent');
            expect(apiClient.v2).toHaveProperty('storeInformation');
            expect(apiClient.v2).toHaveProperty('taxClasses');
        }

        expect(typeof apiClient.v3).toBe('object');
        if (apiClient.v3) {
            expect(apiClient.v3).toHaveProperty('abandonedCarts');
            expect(apiClient.v3).toHaveProperty('carts');
            expect(apiClient.v3).toHaveProperty('brands');
            expect(apiClient.v3).toHaveProperty('categories');
            expect(apiClient.v3).toHaveProperty('categoryTrees');
            expect(apiClient.v3).toHaveProperty('productModifiers');
            expect(apiClient.v3).toHaveProperty('productVariantOptions');
            expect(apiClient.v3).toHaveProperty('productVariants');
            expect(apiClient.v3).toHaveProperty('products');
            expect(apiClient.v3).toHaveProperty('channels');
            expect(apiClient.v3).toHaveProperty('checkouts');
            expect(apiClient.v3).toHaveProperty('currentCustomer');
            expect(apiClient.v3).toHaveProperty('customTemplateAssociations');
            expect(apiClient.v3).toHaveProperty('customerLogin');
            expect(apiClient.v3).toHaveProperty('customers');
            expect(apiClient.v3).toHaveProperty('emailTemplates');
            expect(apiClient.v3).toHaveProperty('inventory');
            expect(apiClient.v3).toHaveProperty('locations');
            expect(apiClient.v3).toHaveProperty('orders');
            expect(apiClient.v3).toHaveProperty('pageWidgets');
            expect(apiClient.v3).toHaveProperty('pages');
            expect(apiClient.v3).toHaveProperty('acceptedMethods');
            expect(apiClient.v3).toHaveProperty('accessTokens');
            expect(apiClient.v3).toHaveProperty('process');
            expect(apiClient.v3).toHaveProperty('pickup');
            expect(apiClient.v3).toHaveProperty('pickupMethods');
            expect(apiClient.v3).toHaveProperty('pickupOptions');
            expect(apiClient.v3).toHaveProperty('priceLists');
            expect(apiClient.v3).toHaveProperty('promotionSettings');
            expect(apiClient.v3).toHaveProperty('promotions');
            expect(apiClient.v3).toHaveProperty('redirects');
            expect(apiClient.v3).toHaveProperty('scripts');
            expect(apiClient.v3).toHaveProperty('segments');
            expect(apiClient.v3).toHaveProperty('settings');
            expect(apiClient.v3).toHaveProperty('shipping');
            expect(apiClient.v3).toHaveProperty('shippingProvider');
            expect(apiClient.v3).toHaveProperty('sites');
            expect(apiClient.v3).toHaveProperty('storeLogs');
            expect(apiClient.v3).toHaveProperty('storefrontTokens');
            expect(apiClient.v3).toHaveProperty('subscribers');
            expect(apiClient.v3).toHaveProperty('tax');
            expect(apiClient.v3).toHaveProperty('taxProperties');
            expect(apiClient.v3).toHaveProperty('taxProvider');
            expect(apiClient.v3).toHaveProperty('taxRatesZones');
            expect(apiClient.v3).toHaveProperty('taxSettings');
            expect(apiClient.v3).toHaveProperty('taxZoneCheck');
            expect(apiClient.v3).toHaveProperty('themes');
            expect(apiClient.v3).toHaveProperty('webhooks');
            expect(apiClient.v3).toHaveProperty('widgets');
            expect(apiClient.v3).toHaveProperty('wishlists');
        }
    });
});
