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
    getCustomerStoredInstruments(customerId) {
        return this.request.get({
            path: `v3/customers/${customerId}/stored-instruments`,
        });
    }
    getCustomersMetafields(customerId) {
        return this.request.get({
            path: `v3/customers/${customerId}/metafields`,
        });
    }
    createCustomerMetafields(customerId, requestBody) {
        return this.request.post({
            path: `v3/customers/${customerId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getMetafieldsCustomerId(customerId, metafieldId) {
        return this.request.get({
            path: `v3/customers/${customerId}/metafields/${metafieldId}`,
        });
    }
    updateCustomerMetafield(metafieldId, customerId, requestBody, query) {
        return this.request.put({
            path: `v3/customers/${customerId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    deleteCustomerMetafieldsId(customerId, metafieldId) {
        return this.request.delete({
            path: `v3/customers/${customerId}/metafields/${metafieldId}`,
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
exports.CustomersV3Api = CustomersV3Api;
