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
    getAllCustomers(query) {
        return this.request.get({
            path: 'v2/customers',
            query,
        });
    }
    getCustomers(...args) {
        return this.getAllCustomers(...args);
    }
    createAnewCustomer(requestBody) {
        return this.request.post({
            path: 'v2/customers',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createCustomer(...args) {
        return this.createAnewCustomer(...args);
    }
    deleteAllCustomers() {
        return this.request.delete({
            path: 'v2/customers',
        });
    }
    deleteCustomers(...args) {
        return this.deleteAllCustomers(...args);
    }
    getAcustomer(customerId) {
        return this.request.get({
            path: `v2/customers/${customerId}`,
        });
    }
    getCustomer(...args) {
        return this.getAcustomer(...args);
    }
    updateAcustomer(customerId, requestBody) {
        return this.request.put({
            path: `v2/customers/${customerId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCustomer(...args) {
        return this.updateAcustomer(...args);
    }
    deleteAcustomer(customerId) {
        return this.request.delete({
            path: `v2/customers/${customerId}`,
        });
    }
    deleteCustomer(...args) {
        return this.deleteAcustomer(...args);
    }
    getAcountOfCustomers() {
        return this.request.get({
            path: 'v2/customers/count',
        });
    }
    getCustomersCount(...args) {
        return this.getAcountOfCustomers(...args);
    }
    validateCustomerPassword(customerId, requestBody) {
        return this.request.post({
            path: `v2/customers/${customerId}/validate`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getAllCustomerAddresses(customerId, query) {
        return this.request.get({
            path: `v2/customers/${customerId}/addresses`,
            query,
        });
    }
    getCustomerAddresses(...args) {
        return this.getAllCustomerAddresses(...args);
    }
    createAcustomerAddress(customerId, requestBody) {
        return this.request.post({
            path: `v2/customers/${customerId}/addresses`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createCustomerAddress(...args) {
        return this.createAcustomerAddress(...args);
    }
    deleteAllCustomerAddresses(customerId, query) {
        return this.request.delete({
            path: `v2/customers/${customerId}/addresses`,
            query,
        });
    }
    deleteCustomerAddresses(...args) {
        return this.deleteAllCustomerAddresses(...args);
    }
    getAcustomerAddress(customerId, customerAddressId, query) {
        return this.request.get({
            path: `v2/customers/${customerId}/addresses/${customerAddressId}`,
            query,
        });
    }
    getCustomerAddress(...args) {
        return this.getAcustomerAddress(...args);
    }
    updateAcustomerAddress(customerId, customerAddressId, requestBody) {
        return this.request.put({
            path: `v2/customers/${customerId}/addresses/${customerAddressId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCustomerAddress(...args) {
        return this.updateAcustomerAddress(...args);
    }
    deletesAcustomerAddress(customerId, customerAddressId) {
        return this.request.delete({
            path: `v2/customers/${customerId}/addresses/${customerAddressId}`,
        });
    }
    deletesCustomerAddress(...args) {
        return this.deletesAcustomerAddress(...args);
    }
    getAcountofCustomerAddresses(customerId, query) {
        return this.request.get({
            path: `v2/customers/${customerId}/addresses/count`,
            query,
        });
    }
    getCustomerAddressesCount(...args) {
        return this.getAcountofCustomerAddresses(...args);
    }
    getAllCustomerGroups(query) {
        return this.request.get({
            path: 'v2/customer_groups',
            query,
        });
    }
    getCustomerGroups(...args) {
        return this.getAllCustomerGroups(...args);
    }
    createAcustomerGroup(requestBody) {
        return this.request.post({
            path: 'v2/customer_groups',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createCustomerGroup(...args) {
        return this.createAcustomerGroup(...args);
    }
    deleteAllCustomerGroups() {
        return this.request.delete({
            path: 'v2/customer_groups',
        });
    }
    getAcustomerGroup(customerGroupId, query) {
        return this.request.get({
            path: `v2/customer_groups/${customerGroupId}`,
            query,
        });
    }
    getCustomerGroup(...args) {
        return this.getAcustomerGroup(...args);
    }
    updateAcustomerGroup(customerGroupId, requestBody) {
        return this.request.put({
            path: `v2/customer_groups/${customerGroupId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCustomerGroup(...args) {
        return this.updateAcustomerGroup(...args);
    }
    deleteAcustomerGroup(customerGroupId) {
        return this.request.delete({
            path: `v2/customer_groups/${customerGroupId}`,
        });
    }
    deleteCustomerGroup(...args) {
        return this.deleteAcustomerGroup(...args);
    }
    getAcountOfCustomerGroups() {
        return this.request.get({
            path: 'v2/customer_groups/count',
        });
    }
    getCustomerGroupsCount(...args) {
        return this.getAcountOfCustomerGroups(...args);
    }
}
exports.CustomersV2Api = CustomersV2Api;
