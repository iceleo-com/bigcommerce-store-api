"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CurrentCustomerApi {
    constructor(request) {
        this.request = request;
    }
    getCurrentCustomer(query) {
        return this.request.get({
            path: 'https://{store_domain}/customer/current.jwt',
            query,
        });
    }
}
exports.default = CurrentCustomerApi;
