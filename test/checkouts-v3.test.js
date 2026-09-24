const { describe, test } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

const checkoutSettingsShape = {
    checkout_type: 'string',
    guest_checkout_type: 'string',
    guest_checkout_for_existing_accounts: 'string',
    custom_checkout_script_url: 'string',
    policy_consent: 'string',
    order_confirmation_contact_email: 'string',
    order_confirmation_use_custom_checkout_script: 'boolean',
    custom_order_confirmation_script_url: 'string',
    is_order_terms_and_conditions_enabled: 'boolean',
    order_terms_and_conditions_type: 'string',
    order_terms_and_conditions_link: 'string',
    order_terms_and_conditions_textarea: 'string',
    custom_checkout_supports_uco_settings: ['object', 'null'],
    custom_checkout_supports_data_hydration: 'boolean',
    should_redirect_to_storefront_for_auth: 'boolean',
    support_b2b_settings: 'boolean',
    custom_checkout_sri_hash: 'string',
    custom_order_confirmation_sri_hash: 'string',
};

describe('Checkouts V3 API', () => {
    // checkouts are short-lived and cannot be listed, so getCheckout is not tested

    test('Get global checkout settings', async () => {
        const response = await apiClient.v3.checkouts.getCheckoutSettings();
        const settings = expectSuccess(response);
        expectShape(settings, checkoutSettingsShape);
    });

    test('Get channel checkout settings', async () => {
        const response = await apiClient.v3.checkouts.getChannelCheckoutSettings(1);
        const settings = expectSuccess(response);
        // every value is null when inherited from the global settings
        expectShape(settings, Object.fromEntries(Object.entries(checkoutSettingsShape).map(([key, type]) => [key, [].concat(type, 'null')])));
    });
});
