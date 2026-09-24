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
exports.ProductsV3Api = exports.ProductsV3ApiSpecs = void 0;
exports.ProductsV3ApiSpecs = __importStar(require("../generated/products-v3"));
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
    getProductById(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}`,
            query,
        });
    }
    getProduct(...args) {
        return this.getProductById(...args);
    }
    updateProduct(productId, requestBody, query) {
        return this.request.put({
            path: `v3/catalog/products/${productId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    deleteProductById(productId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}`,
        });
    }
    deleteProduct(...args) {
        return this.deleteProductById(...args);
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
    getProductImageById(productId, imageId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/images/${imageId}`,
            query,
        });
    }
    getProductImage(...args) {
        return this.getProductImageById(...args);
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
    getProductVideoById(productId, id, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/videos/${id}`,
            query,
        });
    }
    getProductVideo(...args) {
        return this.getProductVideoById(...args);
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
    getComplexRules(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/complex-rules`,
            query,
        });
    }
    getProductComplexRules(...args) {
        return this.getComplexRules(...args);
    }
    createComplexRule(productId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/complex-rules`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createProductComplexRule(...args) {
        return this.createComplexRule(...args);
    }
    getComplexRuleById(productId, complexRuleId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/complex-rules/${complexRuleId}`,
            query,
        });
    }
    getProductComplexRule(...args) {
        return this.getComplexRuleById(...args);
    }
    updateComplexRule(productId, complexRuleId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/complex-rules/${complexRuleId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateProductComplexRule(...args) {
        return this.updateComplexRule(...args);
    }
    deleteComplexRuleById(productId, complexRuleId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/complex-rules/${complexRuleId}`,
        });
    }
    deleteProductComplexRule(...args) {
        return this.deleteComplexRuleById(...args);
    }
    getCustomFields(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/custom-fields`,
            query,
        });
    }
    getProductCustomFields(...args) {
        return this.getCustomFields(...args);
    }
    createCustomField(productId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/custom-fields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createProductCustomField(...args) {
        return this.createCustomField(...args);
    }
    getCustomFieldById(productId, customFieldId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/custom-fields/${customFieldId}`,
            query,
        });
    }
    getProductCustomField(...args) {
        return this.getCustomFieldById(...args);
    }
    updateCustomField(productId, customFieldId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/custom-fields/${customFieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateProductCustomField(...args) {
        return this.updateCustomField(...args);
    }
    deleteCustomFieldById(productId, customFieldId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/custom-fields/${customFieldId}`,
        });
    }
    deleteProductCustomField(...args) {
        return this.deleteCustomFieldById(...args);
    }
    getBulkPricingRules(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules`,
            query,
        });
    }
    getAllBulkPricingRules(...args) {
        return this.getBulkPricingRules(...args);
    }
    createBulkPricingRule(productId, requestBody, query) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    getBulkPricingRuleById(productId, bulkPricingRuleId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules/${bulkPricingRuleId}`,
            query,
        });
    }
    getBulkPricingRule(...args) {
        return this.getBulkPricingRuleById(...args);
    }
    updateBulkPricingRule(productId, bulkPricingRuleId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules/${bulkPricingRuleId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteBulkPricingRuleById(productId, bulkPricingRuleId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules/${bulkPricingRuleId}`,
        });
    }
    deleteBulkPricingRule(...args) {
        return this.deleteBulkPricingRuleById(...args);
    }
    getProductMetafieldsByProductId(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/metafields`,
            query,
        });
    }
    getProductMetafields(...args) {
        return this.getProductMetafieldsByProductId(...args);
    }
    createProductMetafield(productId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getProductMetafieldByProductId(productId, metafieldId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/metafields/${metafieldId}`,
            query,
        });
    }
    getProductMetafield(...args) {
        return this.getProductMetafieldByProductId(...args);
    }
    updateProductMetafield(productId, metafieldId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteProductMetafieldById(productId, metafieldId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/metafields/${metafieldId}`,
        });
    }
    deleteProductMetafield(...args) {
        return this.deleteProductMetafieldById(...args);
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
    getProductReviewById(productId, reviewId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/reviews/${reviewId}`,
            query,
        });
    }
    getProductReview(...args) {
        return this.getProductReviewById(...args);
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
}
exports.ProductsV3Api = ProductsV3Api;
