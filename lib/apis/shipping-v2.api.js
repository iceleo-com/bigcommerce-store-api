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
exports.ShippingV2Api = exports.ShippingV2ApiSpecs = void 0;
exports.ShippingV2ApiSpecs = __importStar(require("../generated/shipping-v2"));
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
exports.ShippingV2Api = ShippingV2Api;
