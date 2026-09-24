const { describe, test } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

const settingsShape = {
    enable_notification: 'boolean',
    email_customer_until_cart_is_recovered: 'boolean',
    email_merchant_when_cart_is_converted: 'boolean',
    email_merchant_when_cart_is_abandoned: 'boolean',
    marketing_emails_require_customer_consent: 'boolean',
    merchant_email_address: 'string',
    merchant_abandoned_cart_email_frequency_type: 'string',
    merchant_abandoned_cart_digest_email_frequency: 'number',
};

describe('Abandoned Carts V3 API', () => {
    // abandoned cart tokens only come from abandoned cart emails, so getAbandonedCart is not tested

    test('Get global abandoned cart settings', async () => {
        const response = await apiClient.v3.abandonedCarts.getGlobalAbandonedCartSettings();
        const settings = expectSuccess(response);
        expectShape(settings, settingsShape);
    });

    test('Get channel abandoned cart settings', async () => {
        const response = await apiClient.v3.abandonedCarts.getChannelAbandonedCartSettings(1);
        const settings = expectSuccess(response);
        // every value is null when inherited from the global settings
        expectShape(settings, Object.fromEntries(Object.entries(settingsShape).map(([key, type]) => [key, [type, 'null']])));
    });
});
