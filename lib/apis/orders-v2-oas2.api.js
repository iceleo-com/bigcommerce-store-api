"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    getOrdersCount() {
        return this.request.get({
            path: 'v2/orders/count',
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
    getOrderConsignments() {
        return this.request.get({
            path: 'v2/orders/{order_id}/consignments',
        });
    }
    getOrderConsignmentShippingQuotes() {
        return this.request.get({
            path: 'v2/orders/{order_id}/consignments/shipping/{shipping_consignment_id}/shipping_quotes',
        });
    }
    getOrderFees() {
        return this.request.get({
            path: 'v2/orders/{order_id}/fees',
        });
    }
}
exports.default = OrdersV2Oas2Api;
