"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AcceptedMethodsV3Api {
    constructor(request) {
        this.request = request;
    }
    getPaymentMethods(query) {
        return this.request.get({
            path: 'v3/payments/methods',
            query,
        });
    }
}
exports.default = AcceptedMethodsV3Api;
