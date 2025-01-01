"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaxPropertiesV3Api {
    constructor(request) {
        this.request = request;
    }
    getTaxProperties(query) {
        return this.request.get({
            path: 'v3/tax/properties',
            query,
        });
    }
    createTaxProperties(requestBody) {
        return this.request.post({
            path: 'v3/tax/properties',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateTaxProperties(requestBody) {
        return this.request.put({
            path: 'v3/tax/properties',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteTaxProperties(query) {
        return this.request.delete({
            path: 'v3/tax/properties',
            query,
        });
    }
    getProductsTaxProperties(query) {
        return this.request.get({
            path: 'v3/tax/products/properties',
            query,
        });
    }
    updateProductTaxProperties(requestBody) {
        return this.request.put({
            path: 'v3/tax/products/properties',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductTaxProperties(query) {
        return this.request.delete({
            path: 'v3/tax/products/properties',
            query,
        });
    }
}
exports.default = TaxPropertiesV3Api;
