"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PromotionSettingsV3Api {
    constructor(request) {
        this.request = request;
    }
    getGlobalPromotionSettings() {
        return this.request.get({
            path: 'v3/promotions/settings',
        });
    }
    updateGlobalPromotionSettings(requestBody) {
        return this.request.put({
            path: 'v3/promotions/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = PromotionSettingsV3Api;
