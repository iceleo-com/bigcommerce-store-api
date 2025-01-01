"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WebhooksV3Api {
    constructor(request) {
        this.request = request;
    }
    getWebhooks(query) {
        return this.request.get({
            path: 'v3/hooks',
            query,
        });
    }
    createWebhooks(requestBody) {
        return this.request.post({
            path: 'v3/hooks',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getWebhook(webhookId) {
        return this.request.get({
            path: `v3/hooks/${webhookId}`,
        });
    }
    updateWebhook(webhookId, requestBody) {
        return this.request.put({
            path: `v3/hooks/${webhookId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteWebhook(webhookId) {
        return this.request.delete({
            path: `v3/hooks/${webhookId}`,
        });
    }
    getHooksAdmin(query) {
        return this.request.get({
            path: 'v3/hooks/admin',
            query,
        });
    }
    updateHooksAdmin(requestBody) {
        return this.request.put({
            path: 'v3/hooks/admin',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = WebhooksV3Api;
