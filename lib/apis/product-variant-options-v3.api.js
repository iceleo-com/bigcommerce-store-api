"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductVariantOptionsV3Api {
    constructor(request) {
        this.request = request;
    }
    getProductVariantOptions(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/options`,
            query,
        });
    }
    createProductVariantOption(productId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/options`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getProductVariantOption(productId, optionId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/options/${optionId}`,
            query,
        });
    }
    updateProductVariantOption(productId, optionId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/options/${optionId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductVariantOption(productId, optionId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/options/${optionId}`,
        });
    }
    getProductVariantOptionValues(productId, optionId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/options/${optionId}/values`,
            query,
        });
    }
    createProductVariantOptionValue(productId, optionId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/options/${optionId}/values`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getProductVariantOptionValue(productId, optionId, valueId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/options/${optionId}/values/${valueId}`,
            query,
        });
    }
    updateProductVariantOptionValue(productId, optionId, valueId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/options/${optionId}/values/${valueId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductVariantOptionValue(productId, optionId, valueId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/options/${optionId}/values/${valueId}`,
        });
    }
}
exports.default = ProductVariantOptionsV3Api;
