const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const customerShape = {
    id: 'number',
    email: 'string',
    first_name: 'string',
    last_name: 'string',
    company: 'string',
    phone: 'string',
    notes: 'string',
    tax_exempt_category: 'string',
    customer_group_id: 'number',
    registration_ip_address: 'string',
    date_created: 'string',
    date_modified: 'string',
    authentication: 'object',
    accepts_product_review_abandoned_cart_emails: 'boolean',
    origin_channel_id: 'number',
    channel_ids: ['array', 'null'],
};

const addressShape = {
    id: 'number',
    customer_id: 'number',
    first_name: 'string',
    last_name: 'string',
    company: 'string',
    address1: 'string',
    address2: 'string',
    city: 'string',
    state_or_province: 'string',
    postal_code: 'string',
    country: 'string',
    country_code: 'string',
    phone: 'string',
    address_type: 'string',
};

const privacySettingsShape = {
    ask_shopper_for_tracking_consent: 'boolean',
    policy_url: 'string',
    ask_shopper_for_tracking_consent_on_checkout: 'boolean',
};

const customerGroupSettingsShape = {
    guest_customer_group_id: 'number',
    default_customer_group_id: 'number',
};

/**
 * Makes every type of a shape nullable (channel settings are `null` when inherited).
 */
function nullable(shape) {
    return Object.fromEntries(Object.entries(shape).map(([key, type]) => [key, [type, 'null']]));
}

async function getFirstCustomerId() {
    const response = await apiClient.v3.customers.getCustomers({ limit: 1 });
    const customers = expectSuccess(response);

    return customers.length > 0 ? customers[0].id : null;
}

describe('Customers V3 API', () => {
    test('List customers', async () => {
        const response = await apiClient.v3.customers.getCustomers({ limit: 5 });
        const customers = expectSuccess(response);

        expect(Array.isArray(customers)).toBe(true);
        expectPagination(response.meta);

        if (customers.length === 0) {
            return;
        }

        expectShape(customers[0], customerShape);
        expectShape(customers[0].authentication, { force_password_reset: 'boolean' });
        // only returned with `include`
        expect(customers[0]).not.toHaveProperty('addresses');
        expect(customers[0]).not.toHaveProperty('address_count');
        expect(customers[0]).not.toHaveProperty('store_credit_amounts');
    });

    test('List customers with includes', async () => {
        const response = await apiClient.v3.customers.getCustomers({
            limit: 5,
            include: ['addresses', 'storecredit', 'attributes', 'formfields', 'shopper_profile_id', 'segment_ids'],
        });
        const customers = expectSuccess(response);

        expectPagination(response.meta);

        if (customers.length === 0) {
            return;
        }

        expectShape(customers[0], {
            ...customerShape,
            address_count: 'number',
            attribute_count: 'number',
            addresses: 'array',
            attributes: 'array',
            form_fields: 'array',
            store_credit_amounts: 'array',
            shopper_profile_id: 'string',
            segment_ids: 'array',
        });

        if (customers[0].store_credit_amounts.length > 0) {
            expectShape(customers[0].store_credit_amounts[0], { amount: 'number' });
        }

        const withAddress = customers.find((customer) => customer.addresses.length > 0);

        if (withAddress) {
            expectShape(withAddress.addresses[0], addressShape);
            expect(withAddress.addresses[0].customer_id).toBe(withAddress.id);
        }
    });

    test('List customer addresses', async () => {
        const response = await apiClient.v3.customers.getCustomersAddresses({ limit: 5 });
        const addresses = expectSuccess(response);

        expect(Array.isArray(addresses)).toBe(true);
        expectPagination(response.meta);

        if (addresses.length > 0) {
            expectShape(addresses[0], addressShape);
            // only returned with `include=formfields`
            expect(addresses[0]).not.toHaveProperty('form_fields');
        }
    });

    test('List customer attributes, attribute values, form field values', async () => {
        const attributesResponse = await apiClient.v3.customers.getCustomersAttributes({ limit: 5 });
        const attributes = expectSuccess(attributesResponse);
        expect(Array.isArray(attributes)).toBe(true);
        expectPagination(attributesResponse.meta);

        if (attributes.length > 0) {
            expectShape(attributes[0], {
                id: 'number',
                name: 'string',
                type: 'string',
                date_created: 'string',
                date_modified: 'string',
            });
        }

        const valuesResponse = await apiClient.v3.customers.getCustomersAttributeValues({ limit: 5 });
        const values = expectSuccess(valuesResponse);
        expect(Array.isArray(values)).toBe(true);
        expectPagination(valuesResponse.meta);

        if (values.length > 0) {
            expectShape(values[0], {
                id: 'number',
                attribute_id: 'number',
                attribute_value: 'string',
                customer_id: 'number',
            });
        }

        const formFieldsResponse = await apiClient.v3.customers.getCustomersFormFieldValues({ limit: 5 });
        const formFields = expectSuccess(formFieldsResponse);
        expect(Array.isArray(formFields)).toBe(true);
        expectPagination(formFieldsResponse.meta);
    });

    test('Get customer consent, stored instruments, metafields', async () => {
        const customerId = await getFirstCustomerId();

        if (!customerId) {
            return;
        }

        const consentResponse = await apiClient.v3.customers.getCustomerConsent(customerId);
        const consent = expectSuccess(consentResponse);
        expectShape(consent, {
            allow: 'array',
            deny: 'array',
            updated_at: ['string', 'undefined'],
        });

        const instrumentsResponse = await apiClient.v3.customers.getCustomerStoredInstruments(customerId);
        const instruments = expectSuccess(instrumentsResponse);
        expect(Array.isArray(instruments)).toBe(true);

        if (instruments.length > 0) {
            expectShape(instruments[0], {
                token: 'string',
                type: 'string',
                is_default: 'boolean',
            });
        }

        const metafieldsResponse = await apiClient.v3.customers.getCustomersMetafields(customerId);
        const metafields = expectSuccess(metafieldsResponse);
        expect(Array.isArray(metafields)).toBe(true);
        expectPagination(metafieldsResponse.meta);

        if (metafields.length === 0) {
            return;
        }

        const metafieldResponse = await apiClient.v3.customers.getMetafieldsCustomerId(customerId, metafields[0].id);
        const metafield = expectSuccess(metafieldResponse);
        expect(metafield.id).toBe(metafields[0].id);
    });

    test('List metafields of all customers', async () => {
        const response = await apiClient.v3.customers.getAllCustomersMetafields({ limit: 5 });
        const metafields = expectSuccess(response);

        expect(Array.isArray(metafields)).toBe(true);
        expectPagination(response.meta);
    });

    test('Get global and channel customer settings', async () => {
        const response = await apiClient.v3.customers.getCustomersSettings();
        const settings = expectSuccess(response);
        expectShape(settings, {
            privacy_settings: 'object',
            customer_group_settings: 'object',
        });
        expectShape(settings.privacy_settings, privacySettingsShape);
        expectShape(settings.customer_group_settings, customerGroupSettingsShape);

        const channelResponse = await apiClient.v3.customers.getCustomersSettingsChannel(1);
        const channelSettings = expectSuccess(channelResponse);
        expectShape(channelSettings, {
            privacy_settings: 'object',
            customer_group_settings: 'object',
            allow_global_logins: 'boolean',
        });
        expectShape(channelSettings.privacy_settings, nullable(privacySettingsShape));
        expectShape(channelSettings.customer_group_settings, nullable(customerGroupSettingsShape));
    });
});
