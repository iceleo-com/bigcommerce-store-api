const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

describe('Tax Rates & Zones V3 API', () => {
    test('List tax zones', async () => {
        const response = await apiClient.v3.taxRatesZones.getTaxZones();
        const zones = expectSuccess(response);

        expect(Array.isArray(zones)).toBe(true);
        expectPagination(response.meta);

        if (zones.length === 0) {
            return;
        }

        expectShape(zones[0], {
            id: 'number',
            name: 'string',
            enabled: 'boolean',
            price_display_settings: 'object',
            shopper_target_settings: 'object',
        });
        expectShape(zones[0].price_display_settings, {
            show_inclusive: 'boolean',
            show_both_on_detail_view: 'boolean',
            show_both_on_list_view: 'boolean',
        });
        expectShape(zones[0].shopper_target_settings, {
            locations: 'array',
            customer_groups: 'array',
        });
    });

    test('List tax rates', async () => {
        const response = await apiClient.v3.taxRatesZones.getTaxRates();
        const rates = expectSuccess(response);

        expect(Array.isArray(rates)).toBe(true);
        expectPagination(response.meta);

        if (rates.length > 0) {
            expectShape(rates[0], {
                id: 'number',
                tax_zone_id: 'number',
                name: 'string',
                enabled: 'boolean',
                priority: 'number',
                class_rates: 'array',
            });
        }
    });
});
