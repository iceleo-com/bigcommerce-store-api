"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = ProductModifiersV3Api;
