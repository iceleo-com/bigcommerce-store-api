const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const identityShape = {
    sku: 'string',
    variant_id: 'number',
    product_id: 'number',
};

const settingsShape = {
    safety_stock: 'number',
    is_in_stock: 'boolean',
    warning_level: 'number',
    bin_picking_number: 'string',
};

describe('Inventory V3 API', () => {
    test('List inventory items', async () => {
        const response = await apiClient.v3.inventory.getInventoryItems({ limit: 5 });
        const items = expectSuccess(response);

        expect(Array.isArray(items)).toBe(true);
        expectPagination(response.meta);

        if (items.length === 0) {
            return;
        }

        expectShape(items[0], {
            identity: 'object',
            locations: 'array',
        });
        expectShape(items[0].identity, {
            ...identityShape,
            sku_id: ['number', 'null'],
        });

        if (items[0].locations.length > 0) {
            expectShape(items[0].locations[0], {
                location_id: 'number',
                location_code: 'string',
                location_name: 'string',
                available_to_sell: 'number',
                total_inventory_onhand: 'number',
                location_enabled: 'boolean',
                settings: 'object',
            });
            expectShape(items[0].locations[0].settings, settingsShape);
        }
    });

    test('List inventory items at a location', async () => {
        const locationsResponse = await apiClient.v3.locations.getLocations({ limit: 1 });
        const locations = expectSuccess(locationsResponse);

        if (locations.length === 0) {
            return;
        }

        const response = await apiClient.v3.inventory.getLocationInventoryItems(locations[0].id, { limit: 5 });
        const items = expectSuccess(response);

        expect(Array.isArray(items)).toBe(true);
        expectPagination(response.meta);

        if (items.length === 0) {
            return;
        }

        expectShape(items[0], {
            identity: 'object',
            available_to_sell: 'number',
            total_inventory_onhand: 'number',
            settings: 'object',
        });
        expectShape(items[0].identity, identityShape);
        expectShape(items[0].settings, settingsShape);
    });
});
