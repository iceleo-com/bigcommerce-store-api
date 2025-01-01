"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShippingV2Api {
    constructor(request) {
        this.request = request;
    }
    getShippingZones() {
        return this.request.get({
            path: 'v2/shipping/zones',
        });
    }
    createShippingZones(requestBody) {
        return this.request.post({
            path: 'v2/shipping/zones',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getShippingZone(id) {
        return this.request.get({
            path: `v2/shipping/zones/${id}`,
        });
    }
    updateShippingZone(id, requestBody) {
        return this.request.put({
            path: `v2/shipping/zones/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteShippingZone(id) {
        return this.request.delete({
            path: `v2/shipping/zones/${id}`,
        });
    }
    getShippingZoneMethods(zoneId) {
        return this.request.get({
            path: `v2/shipping/zones/${zoneId}/methods`,
        });
    }
    createShippingMethod(zoneId, requestBody) {
        return this.request.post({
            path: `v2/shipping/zones/${zoneId}/methods`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getShippingMethod(zoneId, methodId) {
        return this.request.get({
            path: `v2/shipping/zones/${zoneId}/methods/${methodId}`,
        });
    }
    updateShippingMethod(zoneId, methodId, requestBody) {
        return this.request.put({
            path: `v2/shipping/zones/${zoneId}/methods/${methodId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteShippingMethod(zoneId, methodId) {
        return this.request.delete({
            path: `v2/shipping/zones/${zoneId}/methods/${methodId}`,
        });
    }
    createCarrierConnection(requestBody) {
        return this.request.post({
            path: 'v2/shipping/carrier/connection',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCarrierConnection(requestBody) {
        return this.request.put({
            path: 'v2/shipping/carrier/connection',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCarrierConnection(requestBody) {
        return this.request.delete({
            path: 'v2/shipping/carrier/connection',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = ShippingV2Api;
