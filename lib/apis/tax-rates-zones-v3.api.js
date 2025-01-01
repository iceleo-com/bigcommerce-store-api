"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaxRatesZonesV3Api {
    constructor(request) {
        this.request = request;
    }
    getTaxZones(query) {
        return this.request.get({
            path: 'v3/tax/zones',
            query,
        });
    }
    createTaxZones(requestBody) {
        return this.request.post({
            path: 'v3/tax/zones',
            body: requestBody,
        });
    }
    updateTaxZones(requestBody) {
        return this.request.put({
            path: 'v3/tax/zones',
            body: requestBody,
        });
    }
    deleteTaxZones(query) {
        return this.request.delete({
            path: 'v3/tax/zones',
            query,
        });
    }
    getTaxRates(query) {
        return this.request.get({
            path: 'v3/tax/rates',
            query,
        });
    }
    createTaxRates(requestBody) {
        return this.request.post({
            path: 'v3/tax/rates',
            body: requestBody,
        });
    }
    updateTaxRates(requestBody) {
        return this.request.put({
            path: 'v3/tax/rates',
            body: requestBody,
        });
    }
    deleteTaxRates(query) {
        return this.request.delete({
            path: 'v3/tax/rates',
            query,
        });
    }
}
exports.default = TaxRatesZonesV3Api;
