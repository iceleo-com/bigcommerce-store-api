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
exports.ProductVariantOptionsV3Api = exports.ProductVariantOptionsV3ApiSpecs = void 0;
exports.ProductVariantOptionsV3ApiSpecs = __importStar(require("../generated/product-variant-options-v3"));
class ProductVariantOptionsV3Api {
    constructor(request) {
        this.request = request;
    }
    getOptions(productId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/options`,
            query,
        });
    }
    getProductVariantOptions(...args) {
        return this.getOptions(...args);
    }
    createOption(productId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/options`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createProductVariantOption(...args) {
        return this.createOption(...args);
    }
    getOptionById(productId, optionId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/options/${optionId}`,
            query,
        });
    }
    getProductVariantOption(...args) {
        return this.getOptionById(...args);
    }
    updateOption(productId, optionId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/options/${optionId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateProductVariantOption(...args) {
        return this.updateOption(...args);
    }
    deleteOptionById(productId, optionId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/options/${optionId}`,
        });
    }
    deleteProductVariantOption(...args) {
        return this.deleteOptionById(...args);
    }
    getOptionValues(productId, optionId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/options/${optionId}/values`,
            query,
        });
    }
    getProductVariantOptionValues(...args) {
        return this.getOptionValues(...args);
    }
    createOptionValue(productId, optionId, requestBody) {
        return this.request.post({
            path: `v3/catalog/products/${productId}/options/${optionId}/values`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createProductVariantOptionValue(...args) {
        return this.createOptionValue(...args);
    }
    getOptionValueById(productId, optionId, valueId, query) {
        return this.request.get({
            path: `v3/catalog/products/${productId}/options/${optionId}/values/${valueId}`,
            query,
        });
    }
    getProductVariantOptionValue(...args) {
        return this.getOptionValueById(...args);
    }
    updateOptionValue(productId, optionId, valueId, requestBody) {
        return this.request.put({
            path: `v3/catalog/products/${productId}/options/${optionId}/values/${valueId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateProductVariantOptionValue(...args) {
        return this.updateOptionValue(...args);
    }
    deleteOptionValueById(productId, optionId, valueId) {
        return this.request.delete({
            path: `v3/catalog/products/${productId}/options/${optionId}/values/${valueId}`,
        });
    }
    deleteProductVariantOptionValue(...args) {
        return this.deleteOptionValueById(...args);
    }
}
exports.ProductVariantOptionsV3Api = ProductVariantOptionsV3Api;
