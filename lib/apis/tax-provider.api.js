"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaxProviderApi {
    constructor(request) {
        this.request = request;
    }
    estimateTaxes(requestBody) {
        return this.request.post({
            path: 'https://{app_domain}/estimate',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    voidTaxQuote(query) {
        return this.request.post({
            path: 'https://{app_domain}/void',
            query,
        });
    }
    commitTaxQuote(requestBody) {
        return this.request.post({
            path: 'https://{app_domain}/commit',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    adjustTaxQuote(requestBody, query) {
        return this.request.post({
            path: 'https://{app_domain}/adjust',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
}
exports.default = TaxProviderApi;
