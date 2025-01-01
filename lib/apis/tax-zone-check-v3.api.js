"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaxZoneCheckV3Api {
    constructor(request) {
        this.request = request;
    }
    zoneCheck(requestBody) {
        return this.request.post({
            path: 'v3/tax/zonecheck',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = TaxZoneCheckV3Api;
