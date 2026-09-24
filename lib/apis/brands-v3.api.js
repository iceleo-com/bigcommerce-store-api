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
exports.BrandsV3Api = exports.BrandsV3ApiSpecs = void 0;
exports.BrandsV3ApiSpecs = __importStar(require("../generated/brands-v3"));
class BrandsV3Api {
    constructor(request) {
        this.request = request;
    }
    getBrands(query) {
        return this.request.get({
            path: 'v3/catalog/brands',
            query,
        });
    }
    createBrand(requestBody) {
        return this.request.post({
            path: 'v3/catalog/brands',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteBrands(query) {
        return this.request.delete({
            path: 'v3/catalog/brands',
            query,
        });
    }
    getBrand(brandId, query) {
        return this.request.get({
            path: `v3/catalog/brands/${brandId}`,
            query,
        });
    }
    updateBrand(brandId, requestBody) {
        return this.request.put({
            path: `v3/catalog/brands/${brandId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteBrand(brandId) {
        return this.request.delete({
            path: `v3/catalog/brands/${brandId}`,
        });
    }
    getBrandsMetafields(query) {
        return this.request.get({
            path: 'v3/catalog/brands/metafields',
            query,
        });
    }
    createBrandsMetafields(requestBody) {
        return this.request.post({
            path: 'v3/catalog/brands/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateBrandsMetafields(requestBody) {
        return this.request.put({
            path: 'v3/catalog/brands/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteBrandsMetafields(requestBody) {
        return this.request.delete({
            path: 'v3/catalog/brands/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createBrandImage(brandId, requestBody) {
        return this.request.post({
            path: `v3/catalog/brands/${brandId}/image`,
            contentType: 'multipart/form-data',
            body: requestBody,
        });
    }
    deleteBrandImage(brandId) {
        return this.request.delete({
            path: `v3/catalog/brands/${brandId}/image`,
        });
    }
    getBrandMetafields(brandId, query) {
        return this.request.get({
            path: `v3/catalog/brands/${brandId}/metafields`,
            query,
        });
    }
    createBrandMetafield(brandId, requestBody) {
        return this.request.post({
            path: `v3/catalog/brands/${brandId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getBrandMetafield(brandId, metafieldId, query) {
        return this.request.get({
            path: `v3/catalog/brands/${brandId}/metafields/${metafieldId}`,
            query,
        });
    }
    updateBrandMetafield(brandId, metafieldId, requestBody) {
        return this.request.put({
            path: `v3/catalog/brands/${brandId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteBrandMetafield(brandId, metafieldId) {
        return this.request.delete({
            path: `v3/catalog/brands/${brandId}/metafields/${metafieldId}`,
        });
    }
}
exports.BrandsV3Api = BrandsV3Api;
