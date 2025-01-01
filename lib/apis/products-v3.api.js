"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductsV3Api {
    constructor(request) {
        this.request = request;
    }
    getProducts(query) {
        return this.request.get({
            path: 'v3/catalog/products',
            query,
        });
    }
    createProduct(requestBody, query) {
        return this.request.post({
            path: 'v3/catalog/products',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateProducts(requestBody, query) {
        return this.request.put({
            path: 'v3/catalog/products',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    deleteProducts(query) {
        return this.request.delete({
            path: 'v3/catalog/products',
            query,
        });
    }
    getProduct(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}`,
            query,
        });
    }
    updateProduct(productId, requestBody, query) {
        return this.request.put({
            path: `v3/catalog/products/${productId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    deleteProduct(productId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}`,
        });
    }
    getProductImages(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/images`,
            query,
        });
    }
    createProductImage(productId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/images`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getProductImage(productId, imageId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/images/${imageId}`,
            query,
        });
    }
    updateProductImage(productId, imageId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/images/${imageId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductImage(productId, imageId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/images/${imageId}`,
        });
    }
    getProductVideos(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/videos`,
            query,
        });
    }
    createProductVideo(productId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/videos`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getProductVideo(productId, id, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/videos/${id}`,
            query,
        });
    }
    updateProductVideo(productId, id, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/videos/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductVideo(productId, id) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/videos/${id}`,
        });
    }
    getProductComplexRules(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/complex-rules`,
            query,
        });
    }
    createProductComplexRule(productId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/complex-rules`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getProductComplexRule(productId, complexRuleId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/complex-rules/${complexRuleId}`,
            query,
        });
    }
    updateProductComplexRule(productId, complexRuleId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/complex-rules/${complexRuleId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductComplexRule(productId, complexRuleId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/complex-rules/${complexRuleId}`,
        });
    }
    getProductCustomFields(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/custom-fields`,
            query,
        });
    }
    createProductCustomField(productId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/custom-fields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getProductCustomField(productId, customFieldId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/custom-fields/${customFieldId}`,
            query,
        });
    }
    updateProductCustomField(productId, customFieldId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/custom-fields/${customFieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductCustomField(productId, customFieldId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/custom-fields/${customFieldId}`,
        });
    }
    createBulkPricingRule(productId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getBulkPricingRule(productId, bulkPricingRuleId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules/${bulkPricingRuleId}`,
            query,
        });
    }
    updateBulkPricingRule(productId, bulkPricingRuleId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules/${bulkPricingRuleId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteBulkPricingRule(productId, bulkPricingRuleId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules/${bulkPricingRuleId}`,
        });
    }
    getProductMetafields(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/metafields`,
            query,
        });
    }
    createProductMetafield(productId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getProductMetafield(productId, metafieldId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/metafields/${metafieldId}`,
            query,
        });
    }
    updateProductMetafield(productId, metafieldId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductMetafield(productId, metafieldId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/metafields/${metafieldId}`,
        });
    }
    getProductReviews(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/reviews`,
            query,
        });
    }
    createProductReview(productId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/reviews`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getProductReview(productId, reviewId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/reviews/${reviewId}`,
            query,
        });
    }
    updateProductReview(productId, reviewId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/reviews/${reviewId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductReview(productId, reviewId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/reviews/${reviewId}`,
        });
    }
    getProductsChannelAssignments(query) {
        return this.request.get({
            path: 'v3/catalog/products/channel-assignments',
            query,
        });
    }
    createProductsChannelAssignments(requestBody) {
        return this.request.put({
            path: 'v3/catalog/products/channel-assignments',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductsChannelAssignments(query) {
        return this.request.delete({
            path: 'v3/catalog/products/channel-assignments',
            query,
        });
    }
    getProductsCategoryAssignments(query) {
        return this.request.get({
            path: 'v3/catalog/products/category-assignments',
            query,
        });
    }
    createProductsCategoryAssignments(requestBody) {
        return this.request.put({
            path: 'v3/catalog/products/category-assignments',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductsCategoryAssignments(query) {
        return this.request.delete({
            path: 'v3/catalog/products/category-assignments',
            query,
        });
    }
    getCatalogSummary() {
        return this.request.get({
            path: 'v3/catalog/summary',
        });
    }
    getProductsMetafields(query) {
        return this.request.get({
            path: 'v3/catalog/products/metafields',
            query,
        });
    }
    createProductsMetafields(requestBody) {
        return this.request.post({
            path: 'v3/catalog/products/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateProductsMetafields(requestBody) {
        return this.request.put({
            path: 'v3/catalog/products/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductsMetafields(requestBody) {
        return this.request.delete({
            path: 'v3/catalog/products/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = ProductsV3Api;
