"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SubscribersV3Api {
    constructor(request) {
        this.request = request;
    }
    getSubscribers(query) {
        return this.request.get({
            path: 'v3/customers/subscribers',
            query,
        });
    }
    createSubscriber(requestBody) {
        return this.request.post({
            path: 'v3/customers/subscribers',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteSubscribers(query) {
        return this.request.delete({
            path: 'v3/customers/subscribers',
            query,
        });
    }
    getSubscriber() {
        return this.request.get({
            path: 'v3/customers/subscribers/{subscriber_id}',
        });
    }
    updateSubscriber(requestBody) {
        return this.request.put({
            path: 'v3/customers/subscribers/{subscriber_id}',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteSubscriber() {
        return this.request.delete({
            path: 'v3/customers/subscribers/{subscriber_id}',
        });
    }
}
exports.default = SubscribersV3Api;
