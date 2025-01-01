"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PickupV3Api {
    constructor(request) {
        this.request = request;
    }
    getPickup(query) {
        return this.request.get({
            path: 'v3/orders/pickups',
            query,
        });
    }
    postPickup(requestBody) {
        return this.request.post({
            path: 'v3/orders/pickups',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    putPickup(requestBody) {
        return this.request.put({
            path: 'v3/orders/pickups',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletePickup(query) {
        return this.request.delete({
            path: 'v3/orders/pickups',
            query,
        });
    }
}
exports.default = PickupV3Api;
