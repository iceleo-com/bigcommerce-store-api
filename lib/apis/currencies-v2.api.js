"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CurrenciesV2Api {
    constructor(request) {
        this.request = request;
    }
    getCurrencies(query) {
        return this.request.get({
            path: 'v2/currencies',
            query,
        });
    }
    createCurrency(requestBody) {
        return this.request.post({
            path: 'v2/currencies',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCurrencies() {
        return this.request.delete({
            path: 'v2/currencies',
        });
    }
    getCurrency(id) {
        return this.request.get({
            path: `v2/currencies/${id}`,
        });
    }
    updateCurrency(id, requestBody) {
        return this.request.put({
            path: `v2/currencies/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCurrency(id) {
        return this.request.delete({
            path: `v2/currencies/${id}`,
        });
    }
}
exports.default = CurrenciesV2Api;
