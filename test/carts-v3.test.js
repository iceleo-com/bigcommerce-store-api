const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

describe('Carts V3 API', () => {
    // carts are short-lived and cannot be listed, so getCart and the cart metafield endpoints are not tested

    test('List metafields of all carts', async () => {
        const response = await apiClient.v3.carts.getCartsMetafields({ limit: 5 });
        const metafields = expectSuccess(response);

        expect(Array.isArray(metafields)).toBe(true);
        expectPagination(response.meta);

        if (metafields.length > 0) {
            expectShape(metafields[0], {
                id: 'number',
                key: 'string',
                value: 'string',
                namespace: 'string',
                permission_set: 'string',
                resource_type: 'string',
                resource_id: ['string', 'number'],
            });
        }
    });

    test('Get global and channel cart settings', async () => {
        const response = await apiClient.v3.carts.getGlobalCartSettings();
        const settings = expectSuccess(response);
        expectShape(settings, { allow_purchasing: 'boolean' });

        const channelResponse = await apiClient.v3.carts.getChannelCartSettings(1);
        const channelSettings = expectSuccess(channelResponse);
        // null when inherited from the global settings
        expectShape(channelSettings, { allow_purchasing: ['boolean', 'null'] });
    });
});
