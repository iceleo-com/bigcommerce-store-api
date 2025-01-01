"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShippingProviderApi {
    constructor(request) {
        this.request = request;
    }
    requestShippingRates(requestBody) {
        return this.request.post({
            path: 'https://{app_domain}/rate',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    validateConnectionOptions(requestBody) {
        return this.request.post({
            path: 'https://{app_domain}/check_connection_options',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = ShippingProviderApi;
