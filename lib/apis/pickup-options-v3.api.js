"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PickupOptionsV3Api {
    constructor(request) {
        this.request = request;
    }
    postPickupOptions(requestBody) {
        return this.request.post({
            path: 'v3/pickup/options',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = PickupOptionsV3Api;
