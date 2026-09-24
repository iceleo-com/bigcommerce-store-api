const { describe, test } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

describe('Tax Settings V3 API', () => {
    test('Get tax settings', async () => {
        const response = await apiClient.v3.taxSettings.getTaxSettings();
        const settings = expectSuccess(response);

        expectShape(settings, {
            tax_entered_with_prices: 'boolean',
            price_display_settings: 'object',
            fallback_strategy: 'string',
            should_subtract_store_tax: 'boolean',
            should_use_geolocation_to_determine_guest_shopper_tax_zone: 'boolean',
            guest_shopper_tax_zone_id: 'number',
            store_tax_zone_id: 'number',
            document_submission_strategy: 'string',
            rounding_strategy: 'string',
        });
        expectShape(settings.price_display_settings, {
            show_inclusive_in_control_panel: 'boolean',
            control_panel_price_display_strategy: 'string',
            invoice_price_display_strategy: 'string',
        });
    });
});
