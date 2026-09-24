const { describe, test } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

describe('Store Information V2 API', () => {
    test('Get store information', async () => {
        const response = await apiClient.v2.storeInformation.getStoreInformation();
        const store = expectSuccess(response);

        expectShape(store, {
            id: 'string',
            account_uuid: 'string',
            domain: 'string',
            secure_url: 'string',
            control_panel_base_url: 'string',
            status: 'string',
            name: 'string',
            country: 'string',
            country_code: 'string',
            language: 'string',
            currency: 'string',
            currency_symbol: 'string',
            decimal_separator: 'string',
            thousands_separator: 'string',
            decimal_places: 'number',
            currency_symbol_location: 'string',
            weight_units: 'string',
            dimension_units: 'string',
            dimension_decimal_places: 'number',
            plan_name: 'string',
            plan_level: 'string',
            plan_is_trial: 'boolean',
            timezone: 'object',
            logo: ['object', 'array'],
            is_price_entered_with_tax: 'boolean',
            store_id: 'number',
            default_site_id: 'number',
            default_channel_id: 'number',
            active_comparison_modules: 'array',
            features: 'object',
        });
        expectShape(store.timezone, {
            name: 'string',
            raw_offset: 'number',
            dst_offset: 'number',
            dst_correction: 'boolean',
            date_format: 'object',
        });
        expectShape(store.features, {
            stencil_enabled: 'boolean',
            sitewidehttps_enabled: 'boolean',
            checkout_type: 'string',
            wishlists_enabled: 'boolean',
            graphql_storefront_api_enabled: 'boolean',
            shopper_consent_tracking_enabled: 'boolean',
            multi_storefront_enabled: 'boolean',
            storefront_limits: 'object',
        });
    });

    test('Get system timestamp', async () => {
        const response = await apiClient.v2.storeInformation.getSystemTimestamp();
        expectShape(expectSuccess(response), { time: 'number' });
    });
});
