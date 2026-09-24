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
    getAnOrder(orderId, query) {
        return this.request.get({
            path: `v2/orders/${orderId}`,
            query,
        });
    }
    getOrder(...args) {
        return this.getAnOrder(...args);
    }
    updateAnOrder(orderId, requestBody) {
        return this.request.put({
            path: `v2/orders/${orderId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateOrder(...args) {
        return this.updateAnOrder(...args);
    }
    deleteAnOrder(orderId) {
        return this.request.delete({
            path: `v2/orders/${orderId}`,
        });
    }
    deleteOrder(...args) {
        return this.deleteAnOrder(...args);
    }
    getCountOrder() {
        return this.request.get({
            path: 'v2/orders/count',
        });
    }
    getOrdersCount(...args) {
        return this.getCountOrder(...args);
    }
    getAllOrders(query) {
        return this.request.get({
            path: 'v2/orders',
            query,
        });
    }
    getOrders(...args) {
        return this.getAllOrders(...args);
    }
    createAnOrder(requestBody, query) {
        return this.request.post({
            path: 'v2/orders',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    createOrder(...args) {
        return this.createAnOrder(...args);
    }
    deleteAllOrders(query) {
        return this.request.delete({
            path: 'v2/orders',
            query,
        });
    }
    deleteOrders(...args) {
        return this.deleteAllOrders(...args);
    }
    getAllOrderCoupons(orderId, query) {
        return this.request.get({
            path: `v2/orders/${orderId}/coupons`,
            query,
        });
    }
    getOrderCoupons(...args) {
        return this.getAllOrderCoupons(...args);
    }
    getAllOrderProducts(orderId, query) {
        return this.request.get({
            path: `v2/orders/${orderId}/products`,
            query,
        });
    }
    getOrderProducts(...args) {
        return this.getAllOrderProducts(...args);
    }
    getAllShippingAddresses(orderId, query) {
        return this.request.get({
            path: `v2/orders/${orderId}/shipping_addresses`,
            query,
        });
    }
    getOrderShippingAddresses(...args) {
        return this.getAllShippingAddresses(...args);
    }
    getOrderStatus() {
        return this.request.get({
            path: 'v2/order_statuses',
        });
    }
    getOrderStatuses(...args) {
        return this.getOrderStatus(...args);
    }
    getAorderStatus(statusId) {
        return this.request.get({
            path: `v2/order_statuses/${statusId}`,
        });
    }
    getOrderStatusesStatus(...args) {
        return this.getAorderStatus(...args);
    }
    getOrderTaxes(orderId, query) {
        return this.request.get({
            path: `v2/orders/${orderId}/taxes`,
            query,
        });
    }
    getAllOrderShipments(orderId, query) {
        return this.request.get({
            path: `v2/orders/${orderId}/shipments`,
            query,
        });
    }
    getOrderShipments(...args) {
        return this.getAllOrderShipments(...args);
    }
    createOrderShipments(orderId, requestBody) {
        return this.request.post({
            path: `v2/orders/${orderId}/shipments`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteAllOrderShipments(orderId) {
        return this.request.delete({
            path: `v2/orders/${orderId}/shipments`,
        });
    }
    deleteOrderShipments(...args) {
        return this.deleteAllOrderShipments(...args);
    }
    getCountShipments(orderId) {
        return this.request.get({
            path: `v2/orders/${orderId}/shipments/count`,
        });
    }
    getOrderShipmentsCount(...args) {
        return this.getCountShipments(...args);
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
    getAnOrderProduct(orderId, productId) {
        return this.request.get({
            path: `v2/orders/${orderId}/products/${productId}`,
        });
    }
    getOrderProduct(...args) {
        return this.getAnOrderProduct(...args);
    }
    getAshippingAddress(orderId, id) {
        return this.request.get({
            path: `v2/orders/${orderId}/shipping_addresses/${id}`,
        });
    }
    getOrderShippingAddress(...args) {
        return this.getAshippingAddress(...args);
    }
    updateAshippingAddress(orderId, id, requestBody) {
        return this.request.put({
            path: `v2/orders/${orderId}/shipping_addresses/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateOrderShippingAddress(...args) {
        return this.updateAshippingAddress(...args);
    }
    getShippingQuotes(orderId, shippingAddressId) {
        return this.request.get({
            path: `v2/orders/${orderId}/shipping_addresses/${shippingAddressId}/shipping_quotes`,
        });
    }
    getOrderShippingAddressShippingQuotes(...args) {
        return this.getShippingQuotes(...args);
    }
    getOrdersOrderIdConsignments(orderId, query) {
        return this.request.get({
            path: `v2/orders/${orderId}/consignments`,
            query,
        });
    }
    getOrderConsignments(...args) {
        return this.getOrdersOrderIdConsignments(...args);
    }
    getOrdersOrderIdConsignmentsShippingShippingIdShippingQuotes(orderId, shippingConsignmentId) {
        return this.request.get({
            path: `v2/orders/${orderId}/consignments/shipping/${shippingConsignmentId}/shipping_quotes`,
        });
    }
    getOrderConsignmentShippingQuotes(...args) {
        return this.getOrdersOrderIdConsignmentsShippingShippingIdShippingQuotes(...args);
    }
}
exports.OrdersV2Oas2Api = OrdersV2Oas2Api;
