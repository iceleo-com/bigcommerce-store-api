"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductVariantsV3Api {
    constructor(request) {
        this.request = request;
    }
    getProductVariants(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/variants`,
            query,
        });
    }
    createProductVariant(productId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/variants`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getProductVariant(productId, variantId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/variants/${variantId}`,
            query,
        });
    }
    updateProductVariant(productId, variantId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/variants/${variantId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductVariant(productId, variantId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/variants/${variantId}`,
        });
    }
    getProductVariantMetafields(productId, variantId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields`,
            query,
        });
    }
    createProductVariantMetafield(productId, variantId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getProductVariantMetafield(productId, variantId, metafieldId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`,
            query,
        });
    }
    updateProductVariantMetafield(productId, variantId, metafieldId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductVariantMetafield(productId, variantId, metafieldId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`,
        });
    }
    createProductVariantImage(productId, variantId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/variants/${variantId}/image`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getVariants(query) {
        return this.request.get({
            path: 'v3/catalog/variants',
            query,
        });
    }
    updateVariantsBatch(requestBody) {
        return this.request.put({
            path: 'v3/catalog/variants',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getVariantsMetafields(query) {
        return this.request.get({
            path: 'v3/catalog/variants/metafields',
            query,
        });
    }
    createVariantsMetafields(requestBody) {
        return this.request.post({
            path: 'v3/catalog/variants/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateVariantsMetafields(requestBody) {
        return this.request.put({
            path: 'v3/catalog/variants/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteVariantsMetafields(requestBody) {
        return this.request.delete({
            path: 'v3/catalog/variants/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = ProductVariantsV3Api;
