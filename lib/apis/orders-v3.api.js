"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrdersV3Api {
    constructor(request) {
        this.request = request;
    }
    captureOrderPayment(orderId) {
        return this.request.post({
            path: `v3/orders/${orderId}/payment_actions/capture`,
        });
    }
    voidOrderPayment(orderId) {
        return this.request.post({
            path: `v3/orders/${orderId}/payment_actions/void`,
        });
    }
    getOrderTransactions(orderId) {
        return this.request.get({
            path: `v3/orders/${orderId}/transactions`,
        });
    }
    createOrderRefundQuotes(orderId, requestBody) {
        return this.request.post({
            path: `v3/orders/${orderId}/payment_actions/refund_quotes`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getOrderRefunds(orderId) {
        return this.request.get({
            path: `v3/orders/${orderId}/payment_actions/refunds`,
        });
    }
    createOrderRefund(orderId, requestBody) {
        return this.request.post({
            path: `v3/orders/${orderId}/payment_actions/refunds`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getOrderRefund(refundId) {
        return this.request.get({
            path: `v3/orders/payment_actions/refunds/${refundId}`,
        });
    }
    getOrdersRefunds(query) {
        return this.request.get({
            path: 'v3/orders/payment_actions/refunds',
            query,
        });
    }
    getOrderMetafields(orderId, query) {
        return this.request.get({
            path: `v3/orders/${orderId}/metafields`,
            query,
        });
    }
    createOrderMetafield(orderId, requestBody) {
        return this.request.post({
            path: `v3/orders/${orderId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getOrderMetafield(orderId, metafieldId) {
        return this.request.get({
            path: `v3/orders/${orderId}/metafields/${metafieldId}`,
        });
    }
    updateOrderMetafield(orderId, metafieldId, requestBody) {
        return this.request.put({
            path: `v3/orders/${orderId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteOrderMetafield(orderId, metafieldId) {
        return this.request.delete({
            path: `v3/orders/${orderId}/metafields/${metafieldId}`,
        });
    }
    getGlobalOrderSettings() {
        return this.request.get({
            path: 'v3/orders/settings',
        });
    }
    updateGlobalOrderSettings(requestBody) {
        return this.request.put({
            path: 'v3/orders/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getChannelOrderSettings(channelId) {
        return this.request.get({
            path: `v3/orders/settings/channels/${channelId}`,
        });
    }
    updateChannelOrderSettings(channelId, requestBody) {
        return this.request.put({
            path: `v3/orders/settings/channels/${channelId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getOrdersMetafields(query) {
        return this.request.get({
            path: 'v3/orders/metafields',
            query,
        });
    }
    createOrdersMetafields(requestBody) {
        return this.request.post({
            path: 'v3/orders/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateOrdersMetafields(requestBody) {
        return this.request.put({
            path: 'v3/orders/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteOrdersMetafields(requestBody) {
        return this.request.delete({
            path: 'v3/orders/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = OrdersV3Api;
