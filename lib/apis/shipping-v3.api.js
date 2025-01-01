"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShippingV3Api {
    constructor(request) {
        this.request = request;
    }
    getCustomsInformation(query) {
        return this.request.get({
            path: 'v3/shipping/products/customs-information',
            query,
        });
    }
    updateCustomsInformation(requestBody) {
        return this.request.put({
            path: 'v3/shipping/products/customs-information',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCustomsInformation(query) {
        return this.request.delete({
            path: 'v3/shipping/products/customs-information',
            query,
        });
    }
    getShippingSettings() {
        return this.request.get({
            path: 'v3/shipping/settings',
        });
    }
    updateShippingSettings(requestBody) {
        return this.request.post({
            path: 'v3/shipping/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = ShippingV3Api;
