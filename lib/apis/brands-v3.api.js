"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.default = BrandsV3Api;
