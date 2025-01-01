"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomerLoginApi {
    constructor(request) {
        this.request = request;
    }
    getCustomerLogin() {
        return this.request.get({
            path: 'https://{store_domain}/login/token/{jwt_token}',
        });
    }
}
exports.default = CustomerLoginApi;
