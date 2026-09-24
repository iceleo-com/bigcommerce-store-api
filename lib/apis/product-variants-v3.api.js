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
exports.ProductVariantsV3Api = exports.ProductVariantsV3ApiSpecs = void 0;
exports.ProductVariantsV3ApiSpecs = __importStar(require("../generated/product-variants-v3"));
class ProductVariantsV3Api {
    constructor(request) {
        this.request = request;
    }
    getVariantsByProductId(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/variants`,
            query,
        });
    }
    getProductVariants(...args) {
        return this.getVariantsByProductId(...args);
    }
    createVariant(productId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/variants`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createProductVariant(...args) {
        return this.createVariant(...args);
    }
    getVariantById(productId, variantId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/variants/${variantId}`,
            query,
        });
    }
    getProductVariant(...args) {
        return this.getVariantById(...args);
    }
    updateVariant(productId, variantId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/variants/${variantId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateProductVariant(...args) {
        return this.updateVariant(...args);
    }
    deleteVariantById(productId, variantId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/variants/${variantId}`,
        });
    }
    deleteProductVariant(...args) {
        return this.deleteVariantById(...args);
    }
    getVariantMetafieldsByProductIdAndVariantId(productId, variantId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields`,
            query,
        });
    }
    getProductVariantMetafields(...args) {
        return this.getVariantMetafieldsByProductIdAndVariantId(...args);
    }
    createVariantMetafield(productId, variantId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createProductVariantMetafield(...args) {
        return this.createVariantMetafield(...args);
    }
    getVariantMetafieldByProductIdAndVariantId(productId, variantId, metafieldId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`,
            query,
        });
    }
    getProductVariantMetafield(...args) {
        return this.getVariantMetafieldByProductIdAndVariantId(...args);
    }
    updateVariantMetafield(productId, variantId, metafieldId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateProductVariantMetafield(...args) {
        return this.updateVariantMetafield(...args);
    }
    deleteVariantMetafieldById(productId, variantId, metafieldId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`,
        });
    }
    deleteProductVariantMetafield(...args) {
        return this.deleteVariantMetafieldById(...args);
    }
    createVariantImage(productId, variantId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/variants/${variantId}/image`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createProductVariantImage(...args) {
        return this.createVariantImage(...args);
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
}
exports.ProductVariantsV3Api = ProductVariantsV3Api;
