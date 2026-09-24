const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

const customerShape = {
    id: 'number',
    company: 'string',
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    phone: 'string',
    form_fields: ['array', 'null'],
    date_created: 'string',
    date_modified: 'string',
    store_credit: 'string',
    registration_ip_address: 'string',
    customer_group_id: 'number',
    notes: 'string',
    tax_exempt_category: 'string',
    reset_pass_on_login: 'boolean',
    accepts_marketing: 'boolean',
    addresses: 'object',
};

const addressShape = {
    id: 'number',
    customer_id: 'number',
    first_name: 'string',
    last_name: 'string',
    company: 'string',
    street_1: 'string',
    street_2: 'string',
    city: 'string',
    state: 'string',
    zip: 'string',
    country: 'string',
    country_iso2: 'string',
    phone: 'string',
    address_type: 'string',
    form_fields: ['array', 'null'],
};

const customerGroupShape = {
    id: 'number',
    name: 'string',
    category_access: 'object',
    discount_rules: 'array',
    date_created: ['string', 'null'],
    date_modified: ['string', 'null'],
    is_group_for_guests: 'boolean',
    is_default: 'boolean',
};

/**
 * Asserts a successful response that is either `200` with data or `204` (empty).
 */
function expectSuccessOrEmpty(response) {
    if (response.status !== 'success') {
        expect(response.response_text).toBe('');
    }

    expect(response.status).toBe('success');
    expect([200, 204]).toContain(response.http_status);

    return response.http_status === 200 ? response.data : null;
}

describe('Customers V2 API', () => {
    test('List customers, get customer', async () => {
        const response = await apiClient.v2.customers.getCustomers({ limit: 5 });
        const customers = expectSuccessOrEmpty(response);

        if (!customers || customers.length === 0) {
            return;
        }

        expectShape(customers[0], customerShape);
        expectShape(customers[0].addresses, { url: 'string', resource: 'string' });
        // write-only
        expect(customers[0]).not.toHaveProperty('_authentication');

        const customerResponse = await apiClient.v2.customers.getCustomer(customers[0].id);
        const customer = expectSuccess(customerResponse);
        expectShape(customer, customerShape);
        expect(customer.id).toBe(customers[0].id);
    });

    test('Get customers count', async () => {
        const response = await apiClient.v2.customers.getCustomersCount();
        const count = expectSuccess(response);
        expectShape(count, { count: 'number' });
    });

    test('List customer addresses, get address, addresses count', async () => {
        const customersResponse = await apiClient.v2.customers.getCustomers({ limit: 10 });
        const customers = expectSuccessOrEmpty(customersResponse);

        if (!customers || customers.length === 0) {
            return;
        }

        // prefer a customer that has addresses
        let customerId = customers[0].id;

        for (const customer of customers) {
            const countResponse = await apiClient.v2.customers.getCustomerAddressesCount(customer.id);
            const count = expectSuccess(countResponse);
            expectShape(count, { count: 'number' });

            if (count.count > 0) {
                customerId = customer.id;
                break;
            }
        }

        const response = await apiClient.v2.customers.getCustomerAddresses(customerId, { limit: 5 });
        const addresses = expectSuccessOrEmpty(response);

        if (!addresses || addresses.length === 0) {
            return;
        }

        expectShape(addresses[0], addressShape);
        expect(addresses[0].customer_id).toBe(customerId);

        const addressResponse = await apiClient.v2.customers.getCustomerAddress(customerId, addresses[0].id);
        const address = expectSuccess(addressResponse);
        expectShape(address, addressShape);
        expect(address.id).toBe(addresses[0].id);
    });

    test('List customer groups, get group, groups count', async () => {
        const countResponse = await apiClient.v2.customers.getCustomerGroupsCount();
        const count = expectSuccess(countResponse);
        expectShape(count, { count: 'number' });

        const response = await apiClient.v2.customers.getCustomerGroups({ limit: 5 });
        const groups = expectSuccessOrEmpty(response);

        if (!groups || groups.length === 0) {
            return;
        }

        expectShape(groups[0], customerGroupShape);
        expectShape(groups[0].category_access, { type: 'string' });

        const groupResponse = await apiClient.v2.customers.getCustomerGroup(groups[0].id);
        const group = expectSuccess(groupResponse);
        expectShape(group, customerGroupShape);
        expect(group.id).toBe(groups[0].id);
    });
});
