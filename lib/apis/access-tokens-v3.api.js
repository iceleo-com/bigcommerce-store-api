"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccessTokensV3Api {
    constructor(request) {
        this.request = request;
    }
    createPaymentAccessToken(requestBody) {
        return this.request.post({
            path: 'v3/payments/access_tokens',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = AccessTokensV3Api;
