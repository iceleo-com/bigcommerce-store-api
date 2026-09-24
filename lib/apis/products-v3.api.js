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
    getAllBulkPricingRules(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules`,
            query,
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
    getCatalogSummary() {
        return this.request.get({
            path: 'v3/catalog/summary',
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
}
exports.ProductsV3Api = ProductsV3Api;
