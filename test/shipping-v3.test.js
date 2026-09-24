const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

describe('Shipping V3 API', () => {
    test('List customs information', async () => {
        const response = await apiClient.v3.shipping.getCustomsInformation({ limit: 5 });
        const items = expectSuccess(response);

        expect(Array.isArray(items)).toBe(true);
        expectPagination(response.meta);

        if (items.length > 0) {
            expectShape(items[0], {
                product_id: 'number',
                country_of_origin: 'string',
                commodity_description: 'string',
                international_shipping: 'boolean',
                hs_codes: 'object',
                created_at: 'string',
                updated_at: 'string',
            });
        }
    });

    test('Get shipping settings', async () => {
        const response = await apiClient.v3.shipping.getShippingSettings();
        const settings = expectSuccess(response);

        expectShape(settings, { checkout: 'object' });
        expectShape(settings.checkout, {
            country_list_strategy: 'string',
            out_of_delivery_zone_message: 'string',
        });
    });

    test('Get channel shipping settings', async () => {
        const channelsResponse = await apiClient.v3.channels.getChannels({ limit: 50 });
        const channels = expectSuccess(channelsResponse);
        const storefront = channels.find((channel) => channel.type === 'storefront' && channel.status === 'active');

        if (!storefront) {
            return;
        }

        const response = await apiClient.v3.shipping.getChannelShippingSettings(storefront.id);
        const settings = expectSuccess(response);

        expectShape(settings, { checkout: 'object' });
        expectShape(settings.checkout, {
            out_of_delivery_zone_message: ['string', 'null'],
        });
    });
});
