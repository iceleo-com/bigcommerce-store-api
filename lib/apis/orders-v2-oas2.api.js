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
exports.OrdersV2Oas2Api = exports.OrdersV2Oas2ApiSpecs = void 0;
exports.OrdersV2Oas2ApiSpecs = __importStar(require("../generated/orders-v2-oas2"));
class OrdersV2Oas2Api {
    constructor(request) {
        this.request = request;
    }
    getOrder(orderId, query) {
        return this.request.get({
            path: `v2/orders/${orderId}`,
            query,
        });
    }
    updateOrder(orderId, requestBody) {
        return this.request.put({
            path: `v2/orders/${orderId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteOrder(orderId) {
        return this.request.delete({
            path: `v2/orders/${orderId}`,
        });
    }
    getOrdersCount(query) {
        return this.request.get({
            path: 'v2/orders/count',
            query,
        });
    }
    getOrders(query) {
        return this.request.get({
            path: 'v2/orders',
            query,
        });
    }
    createOrder(requestBody, query) {
        return this.request.post({
            path: 'v2/orders',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    deleteOrders(query) {
        return this.request.delete({
            path: 'v2/orders',
            query,
        });
    }
    getOrderCoupons(orderId, query) {
        return this.request.get({
            path: `v2/orders/${orderId}/coupons`,
            query,
        });
    }
    getOrderProducts(orderId, query) {
        return this.request.get({
            path: `v2/orders/${orderId}/products`,
            query,
        });
    }
    getOrderShippingAddresses(orderId, query) {
        return this.request.get({
            path: `v2/orders/${orderId}/shipping_addresses`,
            query,
        });
    }
    getOrderStatuses() {
        return this.request.get({
            path: 'v2/order_statuses',
        });
    }
    getOrderStatusesStatus(statusId) {
        return this.request.get({
            path: `v2/order_statuses/${statusId}`,
        });
    }
    getOrderTaxes(orderId, query) {
        return this.request.get({
            path: `v2/orders/${orderId}/taxes`,
            query,
        });
    }
    getOrderShipments(orderId, query) {
        return this.request.get({
            path: `v2/orders/${orderId}/shipments`,
            query,
        });
    }
    createOrderShipments(orderId, requestBody) {
        return this.request.post({
            path: `v2/orders/${orderId}/shipments`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteOrderShipments(orderId) {
        return this.request.delete({
            path: `v2/orders/${orderId}/shipments`,
        });
    }
    getOrderShipmentsCount(orderId) {
        return this.request.get({
            path: `v2/orders/${orderId}/shipments/count`,
        });
    }
    getOrderShipment(orderId, shipmentId) {
        return this.request.get({
            path: `v2/orders/${orderId}/shipments/${shipmentId}`,
        });
    }
    updateOrderShipment(orderId, shipmentId, requestBody) {
        return this.request.put({
            path: `v2/orders/${orderId}/shipments/${shipmentId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteOrderShipment(orderId, shipmentId) {
        return this.request.delete({
            path: `v2/orders/${orderId}/shipments/${shipmentId}`,
        });
    }
    getOrderMessages(orderId, query) {
        return this.request.get({
            path: `v2/orders/${orderId}/messages`,
            query,
        });
    }
    getOrderProduct(orderId, productId) {
        return this.request.get({
            path: `v2/orders/${orderId}/products/${productId}`,
        });
    }
    getOrderShippingAddress(orderId, id) {
        return this.request.get({
            path: `v2/orders/${orderId}/shipping_addresses/${id}`,
        });
    }
    updateOrderShippingAddress(orderId, id, requestBody) {
        return this.request.put({
            path: `v2/orders/${orderId}/shipping_addresses/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getOrderShippingAddressShippingQuotes(orderId, shippingAddressId) {
        return this.request.get({
            path: `v2/orders/${orderId}/shipping_addresses/${shippingAddressId}/shipping_quotes`,
        });
    }
    getOrderConsignments(orderId, query) {
        return this.request.get({
            path: `v2/orders/${orderId}/consignments`,
            query,
        });
    }
    getOrderConsignmentShippingQuotes(orderId, shippingConsignmentId) {
        return this.request.get({
            path: `v2/orders/${orderId}/consignments/shipping/${shippingConsignmentId}/shipping_quotes`,
        });
    }
    getOrderFees(orderId) {
        return this.request.get({
            path: `v2/orders/${orderId}/fees`,
        });
    }
}
exports.OrdersV2Oas2Api = OrdersV2Oas2Api;
