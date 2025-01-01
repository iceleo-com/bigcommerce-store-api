"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbandonedCartsV3Api {
    constructor(request) {
        this.request = request;
    }
    getGlobalAbandonedCartSettings(query) {
        return this.request.get({
            path: 'v3/abandoned-carts/settings',
            query,
        });
    }
    updateGlobalAbandonedCartSettings(requestBody) {
        return this.request.put({
            path: 'v3/abandoned-carts/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getChannelAbandonedCartSettings() {
        return this.request.get({
            path: 'v3/abandoned-carts/settings/channels/{channel_id}',
        });
    }
    updateChannelAbandonedCartSettings(requestBody) {
        return this.request.put({
            path: 'v3/abandoned-carts/settings/channels/{channel_id}',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getAbandonedCarts(token) {
        return this.request.get({
            path: `v3/abandoned-carts/${token}`,
        });
    }
}
exports.default = AbandonedCartsV3Api;
