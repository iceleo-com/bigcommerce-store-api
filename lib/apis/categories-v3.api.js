"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CategoriesV3Api {
    constructor(request) {
        this.request = request;
    }
    getCategories(query) {
        return this.request.get({
            path: 'v3/catalog/categories',
            query,
        });
    }
    createCategory(requestBody) {
        return this.request.post({
            path: 'v3/catalog/categories',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCategories(query) {
        return this.request.delete({
            path: 'v3/catalog/categories',
            query,
        });
    }
    getCategory(categoryId, query) {
        return this.request.get({
            path: `v3/catalog/categories/${categoryId}`,
            query,
        });
    }
    updateCategory(categoryId, requestBody) {
        return this.request.put({
            path: `v3/catalog/categories/${categoryId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCategory(categoryId) {
        return this.request.delete({
            path: `v3/catalog/categories/${categoryId}`,
        });
    }
    getCategoryMetafields(categoryId, query) {
        return this.request.get({
            path: `v3/catalog/categories/${categoryId}/metafields`,
            query,
        });
    }
    createCategoryMetafield(categoryId, requestBody) {
        return this.request.post({
            path: `v3/catalog/categories/${categoryId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getCategoryMetafield(categoryId, metafieldId, query) {
        return this.request.get({
            path: `v3/catalog/categories/${categoryId}/metafields/${metafieldId}`,
            query,
        });
    }
    updateCategoryMetafield(categoryId, metafieldId, requestBody) {
        return this.request.put({
            path: `v3/catalog/categories/${categoryId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCategoryMetafield(categoryId, metafieldId) {
        return this.request.delete({
            path: `v3/catalog/categories/${categoryId}/metafields/${metafieldId}`,
        });
    }
    createCategoryImage(categoryId, requestBody) {
        return this.request.post({
            path: `v3/catalog/categories/${categoryId}/image`,
            contentType: 'multipart/form-data',
            body: requestBody,
        });
    }
    deleteCategoryImage(categoryId) {
        return this.request.delete({
            path: `v3/catalog/categories/${categoryId}/image`,
        });
    }
    getCategorySortOrders(categoryId) {
        return this.request.get({
            path: `v3/catalog/categories/${categoryId}/products/sort-order`,
        });
    }
    updateCategorySortOrders(categoryId, requestBody) {
        return this.request.put({
            path: `v3/catalog/categories/${categoryId}/products/sort-order`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getCategoriesMetafields(query) {
        return this.request.get({
            path: 'v3/catalog/categories/metafields',
            query,
        });
    }
    createCategoriesMetafields(requestBody) {
        return this.request.post({
            path: 'v3/catalog/categories/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCategoriesMetafields(requestBody) {
        return this.request.put({
            path: 'v3/catalog/categories/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCategoriesMetafields(requestBody) {
        return this.request.delete({
            path: 'v3/catalog/categories/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = CategoriesV3Api;
