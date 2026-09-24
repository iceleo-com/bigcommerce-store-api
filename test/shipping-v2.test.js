const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

const zoneShape = {
    id: 'number',
    name: 'string',
    type: 'string',
    locations: 'array',
    free_shipping: 'object',
    handling_fees: 'object',
    enabled: 'boolean',
};

const methodShape = {
    id: 'number',
    name: 'string',
    type: 'string',
    settings: ['object', 'array'],
    enabled: 'boolean',
    handling_fees: 'object',
    is_fallback: 'boolean',
    channel_ids: 'array',
};

describe('Shipping V2 API', () => {
    test('List shipping zones, get zone, methods and method', async () => {
        const response = await apiClient.v2.shipping.getShippingZones();
        const zones = expectSuccess(response);

        expect(Array.isArray(zones)).toBe(true);

        if (zones.length === 0) {
            return;
        }

        expectShape(zones[0], zoneShape);
        expectShape(zones[0].free_shipping, {
            enabled: 'boolean',
            minimum_sub_total: ['string', 'number'],
            exclude_fixed_shipping_products: 'boolean',
        });

        if (zones[0].locations.length > 0) {
            expectShape(zones[0].locations[0], {
                id: 'number',
                country_iso2: 'string',
            });
        }

        const zoneId = zones[0].id;

        const zoneResponse = await apiClient.v2.shipping.getShippingZone(zoneId);
        const zone = expectSuccess(zoneResponse);
        expectShape(zone, zoneShape);
        expect(zone.id).toBe(zoneId);

        const methodsResponse = await apiClient.v2.shipping.getShippingZoneMethods(zoneId);
        const methods = expectSuccess(methodsResponse);

        expect(Array.isArray(methods)).toBe(true);

        if (methods.length === 0) {
            return;
        }

        expectShape(methods[0], methodShape);

        const methodResponse = await apiClient.v2.shipping.getShippingMethod(zoneId, methods[0].id);
        const method = expectSuccess(methodResponse);
        expectShape(method, methodShape);
        expect(method.id).toBe(methods[0].id);
    });
});
