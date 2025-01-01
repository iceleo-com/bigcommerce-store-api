"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StorefrontTokensV3Api {
    constructor(request) {
        this.request = request;
    }
    createToken(requestBody) {
        return this.request.post({
            path: 'v3/storefront/api-token',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    revokeToken() {
        return this.request.delete({
            path: 'v3/storefront/api-token',
        });
    }
    createTokenWithCustomerImpersonation(requestBody) {
        return this.request.post({
            path: 'v3/storefront/api-token-customer-impersonation',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = StorefrontTokensV3Api;
