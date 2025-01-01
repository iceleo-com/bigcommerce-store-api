"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessApi {
    constructor(request) {
        this.request = request;
    }
    paymentsPost(requestBody) {
        return this.request.post({
            path: 'https://payments.bigcommerce.com/stores/{store_hash}/payments',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = ProcessApi;
