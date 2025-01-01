"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomersV3Api {
    constructor(request) {
        this.request = request;
    }
    getCustomers(query) {
        return this.request.get({
            path: 'v3/customers',
            query,
        });
    }
    createCustomers(requestBody) {
        return this.request.post({
            path: 'v3/customers',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCustomers(requestBody) {
        return this.request.put({
            path: 'v3/customers',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCustomers(query) {
        return this.request.delete({
            path: 'v3/customers',
            query,
        });
    }
    getCustomersAddresses(query) {
        return this.request.get({
            path: 'v3/customers/addresses',
            query,
        });
    }
    createCustomersAddresses(requestBody) {
        return this.request.post({
            path: 'v3/customers/addresses',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCustomersAddresses(requestBody) {
        return this.request.put({
            path: 'v3/customers/addresses',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCustomersAddresses(query) {
        return this.request.delete({
            path: 'v3/customers/addresses',
            query,
        });
    }
    validateCustomerCredentials(requestBody) {
        return this.request.post({
            path: 'v3/customers/validate-credentials',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getCustomersSettings() {
        return this.request.get({
            path: 'v3/customers/settings',
        });
    }
    updateCustomersSettings(requestBody) {
        return this.request.put({
            path: 'v3/customers/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getCustomersSettingsChannel(channelId) {
        return this.request.get({
            path: `v3/customers/settings/channels/${channelId}`,
        });
    }
    updateCustomersSettingsChannel(channelId, requestBody) {
        return this.request.put({
            path: `v3/customers/settings/channels/${channelId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getCustomersAttributes(query) {
        return this.request.get({
            path: 'v3/customers/attributes',
            query,
        });
    }
    createCustomersAttributes(requestBody) {
        return this.request.post({
            path: 'v3/customers/attributes',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCustomersAttributes(requestBody) {
        return this.request.put({
            path: 'v3/customers/attributes',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCustomersAttributes(query) {
        return this.request.delete({
            path: 'v3/customers/attributes',
            query,
        });
    }
    getCustomersAttributeValues(query) {
        return this.request.get({
            path: 'v3/customers/attribute-values',
            query,
        });
    }
    upsertCustomersAttributeValues(requestBody) {
        return this.request.put({
            path: 'v3/customers/attribute-values',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCustomersAttributeValues(query) {
        return this.request.delete({
            path: 'v3/customers/attribute-values',
            query,
        });
    }
    getCustomersFormFieldValues(query) {
        return this.request.get({
            path: 'v3/customers/form-field-values',
            query,
        });
    }
    updateCustomerFormFieldValues(requestBody) {
        return this.request.put({
            path: 'v3/customers/form-field-values',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getCustomerConsent(customerId) {
        return this.request.get({
            path: `v3/customers/${customerId}/consent`,
        });
    }
    updateCustomerConsent(customerId, requestBody) {
        return this.request.put({
            path: `v3/customers/${customerId}/consent`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getCustomerStoredInstruments() {
        return this.request.get({
            path: 'v3/customers/{customerId}/stored-instruments',
        });
    }
    getCustomersMetafields() {
        return this.request.get({
            path: 'v3/customers/{customerId}/metafields',
        });
    }
    createCustomerMetafields(requestBody) {
        return this.request.post({
            path: 'v3/customers/{customerId}/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getMetafieldsCustomerId() {
        return this.request.get({
            path: 'v3/customers/{customerId}/metafields/{metafieldId}',
        });
    }
    updateCustomerMetafield(requestBody, query) {
        return this.request.put({
            path: 'v3/customers/{customerId}/metafields/{metafieldId}',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    deleteCustomerMetafieldsId() {
        return this.request.delete({
            path: 'v3/customers/{customerId}/metafields/{metafieldId}',
        });
    }
    getAllCustomersMetafields(query) {
        return this.request.get({
            path: 'v3/customers/metafields',
            query,
        });
    }
    createCustomersMetafields(requestBody) {
        return this.request.post({
            path: 'v3/customers/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCustomersMetafields(requestBody) {
        return this.request.put({
            path: 'v3/customers/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCustomersMetafields() {
        return this.request.delete({
            path: 'v3/customers/metafields',
        });
    }
}
exports.default = CustomersV3Api;
