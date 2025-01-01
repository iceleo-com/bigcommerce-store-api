"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MethodsV2Api {
    constructor(request) {
        this.request = request;
    }
    getAllPaymentMethods(query) {
        return this.request.get({
            path: 'v2/payments/methods',
            query,
        });
    }
}
exports.default = MethodsV2Api;
