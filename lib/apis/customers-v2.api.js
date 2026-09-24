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
exports.CustomersV2Api = exports.CustomersV2ApiSpecs = void 0;
exports.CustomersV2ApiSpecs = __importStar(require("../generated/customers-v2"));
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
    validateCustomerPassword(customerId, requestBody) {
        return this.request.post({
            path: `v2/customers/${customerId}/validate`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.CustomersV2Api = CustomersV2Api;
