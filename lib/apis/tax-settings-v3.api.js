"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaxSettingsV3Api {
    constructor(request) {
        this.request = request;
    }
    getTaxSettings() {
        return this.request.get({
            path: 'v3/tax/settings',
        });
    }
    updateTaxSettings(requestBody) {
        return this.request.put({
            path: 'v3/tax/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = TaxSettingsV3Api;
