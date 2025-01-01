"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PickupMethodsV3Api {
    constructor(request) {
        this.request = request;
    }
    getPickupMethods(query) {
        return this.request.get({
            path: 'v3/pickup/methods',
            query,
        });
    }
    postPickupMethods(requestBody) {
        return this.request.post({
            path: 'v3/pickup/methods',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    putPickupMethods(requestBody) {
        return this.request.put({
            path: 'v3/pickup/methods',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletePickupMethods(query) {
        return this.request.delete({
            path: 'v3/pickup/methods',
            query,
        });
    }
}
exports.default = PickupMethodsV3Api;
