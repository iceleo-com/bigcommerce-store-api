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
exports.ProductModifiersV3Api = exports.ProductModifiersV3ApiSpecs = void 0;
exports.ProductModifiersV3ApiSpecs = __importStar(require("../generated/product-modifiers-v3"));
class ProductModifiersV3Api {
    constructor(request) {
        this.request = request;
    }
    getProductModifiers(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/modifiers`,
            query,
        });
    }
    createProductModifier(productId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/modifiers`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getProductModifier(productId, modifierId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}`,
            query,
        });
    }
    updateProductModifier(productId, modifierId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductModifier(productId, modifierId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}`,
        });
    }
    getProductModifierValues(productId, modifierId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values`,
            query,
        });
    }
    createProductModifierValue(productId, modifierId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getProductModifierValue(productId, modifierId, valueId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}`,
            query,
        });
    }
    updateProductModifierValue(productId, modifierId, valueId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductModifierValue(productId, modifierId, valueId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}`,
        });
    }
    createProductModifierImage(productId, modifierId, valueId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}/image`,
            contentType: 'multipart/form-data',
            body: requestBody,
        });
    }
}
exports.ProductModifiersV3Api = ProductModifiersV3Api;
