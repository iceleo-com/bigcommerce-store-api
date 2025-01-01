"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryV3Api {
    constructor(request) {
        this.request = request;
    }
    putAbsoluteAdjustment(requestBody) {
        return this.request.put({
            path: 'v3/inventory/adjustments/absolute',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    postRelativeAdjustment(requestBody) {
        return this.request.post({
            path: 'v3/inventory/adjustments/relative',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getInventoryItems(query) {
        return this.request.get({
            path: 'v3/inventory/items',
            query,
        });
    }
    getLocationInventoryItems(query) {
        return this.request.get({
            path: 'v3/inventory/locations/{location_id}/items',
            query,
        });
    }
    putLocationInventoryItems(requestBody) {
        return this.request.put({
            path: 'v3/inventory/locations/{location_id}/items',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = InventoryV3Api;
