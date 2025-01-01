"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaxV3Api {
    constructor(request) {
        this.request = request;
    }
    getTaxProviderConnection(providerId) {
        return this.request.get({
            path: `v3/tax/providers/${providerId}/connection`,
        });
    }
    updateTaxProviderConnection(providerId, requestBody) {
        return this.request.put({
            path: `v3/tax/providers/${providerId}/connection`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteTaxProviderConnection(providerId) {
        return this.request.delete({
            path: `v3/tax/providers/${providerId}/connection`,
        });
    }
}
exports.default = TaxV3Api;
