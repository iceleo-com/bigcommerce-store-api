"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersV3Api = exports.OrdersV3ApiSpecs = void 0;
exports.OrdersV3ApiSpecs = __importStar(require("../generated/orders-v3"));
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
    getOrderRefunds(orderId, query) {
        return this.request.get({
            path: `v3/orders/${orderId}/payment_actions/refunds`,
            query,
        });
    }
    createOrderRefund(orderId, requestBody, query) {
        return this.request.post({
            path: `v3/orders/${orderId}/payment_actions/refunds`,
            contentType: 'application/json',
            body: requestBody,
            query,
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
exports.OrdersV3Api = OrdersV3Api;
