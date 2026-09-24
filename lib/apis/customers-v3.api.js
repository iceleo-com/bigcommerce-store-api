"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersV3Api = exports.CustomersV3ApiSpecs = void 0;
exports.CustomersV3ApiSpecs = __importStar(require("../generated/customers-v3"));
class CustomersV3Api {
    constructor(request) {
        this.request = request;
    }
    customersGet(query) {
        return this.request.get({
            path: 'v3/customers',
            query,
        });
    }
    getCustomers(...args) {
        return this.customersGet(...args);
    }
    customersPost(requestBody) {
        return this.request.post({
            path: 'v3/customers',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createCustomers(...args) {
        return this.customersPost(...args);
    }
    customersPut(requestBody) {
        return this.request.put({
            path: 'v3/customers',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCustomers(...args) {
        return this.customersPut(...args);
    }
    customersDelete(query) {
        return this.request.delete({
            path: 'v3/customers',
            query,
        });
    }
    deleteCustomers(...args) {
        return this.customersDelete(...args);
    }
    customersAddressesGet(query) {
        return this.request.get({
            path: 'v3/customers/addresses',
            query,
        });
    }
    getCustomersAddresses(...args) {
        return this.customersAddressesGet(...args);
    }
    customersAddressesPost(requestBody) {
        return this.request.post({
            path: 'v3/customers/addresses',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createCustomersAddresses(...args) {
        return this.customersAddressesPost(...args);
    }
    customersAddressesPut(requestBody) {
        return this.request.put({
            path: 'v3/customers/addresses',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCustomersAddresses(...args) {
        return this.customersAddressesPut(...args);
    }
    customersAddressesDelete(query) {
        return this.request.delete({
            path: 'v3/customers/addresses',
            query,
        });
    }
    deleteCustomersAddresses(...args) {
        return this.customersAddressesDelete(...args);
    }
    customerValidateCredentials(requestBody) {
        return this.request.post({
            path: 'v3/customers/validate-credentials',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    validateCustomerCredentials(...args) {
        return this.customerValidateCredentials(...args);
    }
    customerSettingsGet() {
        return this.request.get({
            path: 'v3/customers/settings',
        });
    }
    getCustomersSettings(...args) {
        return this.customerSettingsGet(...args);
    }
    customerSettingsPut(requestBody) {
        return this.request.put({
            path: 'v3/customers/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCustomersSettings(...args) {
        return this.customerSettingsPut(...args);
    }
    customerSettingsChannelGet(channelId) {
        return this.request.get({
            path: `v3/customers/settings/channels/${channelId}`,
        });
    }
    getCustomersSettingsChannel(...args) {
        return this.customerSettingsChannelGet(...args);
    }
    customerSettingsChannelPut(channelId, requestBody) {
        return this.request.put({
            path: `v3/customers/settings/channels/${channelId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCustomersSettingsChannel(...args) {
        return this.customerSettingsChannelPut(...args);
    }
    customersAttributesGet(query) {
        return this.request.get({
            path: 'v3/customers/attributes',
            query,
        });
    }
    getCustomersAttributes(...args) {
        return this.customersAttributesGet(...args);
    }
    customersAttributesPost(requestBody) {
        return this.request.post({
            path: 'v3/customers/attributes',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createCustomersAttributes(...args) {
        return this.customersAttributesPost(...args);
    }
    customersAttributesPut(requestBody) {
        return this.request.put({
            path: 'v3/customers/attributes',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCustomersAttributes(...args) {
        return this.customersAttributesPut(...args);
    }
    customersAttributesDelete(query) {
        return this.request.delete({
            path: 'v3/customers/attributes',
            query,
        });
    }
    deleteCustomersAttributes(...args) {
        return this.customersAttributesDelete(...args);
    }
    customersAttributeValuesGet(query) {
        return this.request.get({
            path: 'v3/customers/attribute-values',
            query,
        });
    }
    getCustomersAttributeValues(...args) {
        return this.customersAttributeValuesGet(...args);
    }
    customersAttributeValuesPut(requestBody) {
        return this.request.put({
            path: 'v3/customers/attribute-values',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    upsertCustomersAttributeValues(...args) {
        return this.customersAttributeValuesPut(...args);
    }
    customersAttributeValuesDelete(query) {
        return this.request.delete({
            path: 'v3/customers/attribute-values',
            query,
        });
    }
    deleteCustomersAttributeValues(...args) {
        return this.customersAttributeValuesDelete(...args);
    }
    customerFormFieldsGet(query) {
        return this.request.get({
            path: 'v3/customers/form-field-values',
            query,
        });
    }
    getCustomersFormFieldValues(...args) {
        return this.customerFormFieldsGet(...args);
    }
    customerFormFieldValuePut(requestBody) {
        return this.request.put({
            path: 'v3/customers/form-field-values',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCustomerFormFieldValues(...args) {
        return this.customerFormFieldValuePut(...args);
    }
    customersConsentByCustomerIdGet(customerId) {
        return this.request.get({
            path: `v3/customers/${customerId}/consent`,
        });
    }
    getCustomerConsent(...args) {
        return this.customersConsentByCustomerIdGet(...args);
    }
    customersConsentByCustomerIdPut(customerId, requestBody) {
        return this.request.put({
            path: `v3/customers/${customerId}/consent`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCustomerConsent(...args) {
        return this.customersConsentByCustomerIdPut(...args);
    }
    liststoredinstruments(customerId) {
        return this.request.get({
            path: `v3/customers/${customerId}/stored-instruments`,
        });
    }
    getCustomerStoredInstruments(...args) {
        return this.liststoredinstruments(...args);
    }
}
exports.CustomersV3Api = CustomersV3Api;
