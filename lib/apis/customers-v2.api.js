"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomersV2Api {
    constructor(request) {
        this.request = request;
    }
    getCustomers(query) {
        return this.request.get({
            path: 'v2/customers',
            query,
        });
    }
    createCustomer(requestBody) {
        return this.request.post({
            path: 'v2/customers',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCustomers() {
        return this.request.delete({
            path: 'v2/customers',
        });
    }
    getCustomer(customerId) {
        return this.request.get({
            path: `v2/customers/${customerId}`,
        });
    }
    updateCustomer(customerId, requestBody) {
        return this.request.put({
            path: `v2/customers/${customerId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCustomer(customerId) {
        return this.request.delete({
            path: `v2/customers/${customerId}`,
        });
    }
    getCustomersCount() {
        return this.request.get({
            path: 'v2/customers/count',
        });
    }
    validateCustomerPassword(customerId, requestBody) {
        return this.request.post({
            path: `v2/customers/${customerId}/validate`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getCustomerAddresses(customerId, query) {
        return this.request.get({
            path: `v2/customers/${customerId}/addresses`,
            query,
        });
    }
    createCustomerAddress(customerId, requestBody) {
        return this.request.post({
            path: `v2/customers/${customerId}/addresses`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCustomerAddresses(customerId, query) {
        return this.request.delete({
            path: `v2/customers/${customerId}/addresses`,
            query,
        });
    }
    getCustomerAddress(customerId, customerAddressId, query) {
        return this.request.get({
            path: `v2/customers/${customerId}/addresses/${customerAddressId}`,
            query,
        });
    }
    updateCustomerAddress(customerId, customerAddressId, requestBody) {
        return this.request.put({
            path: `v2/customers/${customerId}/addresses/${customerAddressId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletesCustomerAddress(customerId, customerAddressId) {
        return this.request.delete({
            path: `v2/customers/${customerId}/addresses/${customerAddressId}`,
        });
    }
    getCustomerAddressesCount(customerId, query) {
        return this.request.get({
            path: `v2/customers/${customerId}/addresses/count`,
            query,
        });
    }
    getCustomerGroups(query) {
        return this.request.get({
            path: 'v2/customer_groups',
            query,
        });
    }
    createCustomerGroup(requestBody) {
        return this.request.post({
            path: 'v2/customer_groups',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getCustomerGroup(customerGroupId, query) {
        return this.request.get({
            path: `v2/customer_groups/${customerGroupId}`,
            query,
        });
    }
    updateCustomerGroup(customerGroupId, requestBody) {
        return this.request.put({
            path: `v2/customer_groups/${customerGroupId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCustomerGroup(customerGroupId) {
        return this.request.delete({
            path: `v2/customer_groups/${customerGroupId}`,
        });
    }
    getCustomerGroupsCount() {
        return this.request.get({
            path: 'v2/customer_groups/count',
        });
    }
}
exports.default = CustomersV2Api;
