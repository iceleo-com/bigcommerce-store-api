"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CategoryTreesV3Api {
    constructor(request) {
        this.request = request;
    }
    getAllCategories(query) {
        return this.request.get({
            path: 'v3/catalog/trees/categories',
            query,
        });
    }
    createCategories(requestBody) {
        return this.request.post({
            path: 'v3/catalog/trees/categories',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCategories(requestBody) {
        return this.request.put({
            path: 'v3/catalog/trees/categories',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteTreeCategories(query) {
        return this.request.delete({
            path: 'v3/catalog/trees/categories',
            query,
        });
    }
    getCategoryTrees(query) {
        return this.request.get({
            path: 'v3/catalog/trees',
            query,
        });
    }
    upsertCategoryTrees(requestBody) {
        return this.request.put({
            path: 'v3/catalog/trees',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCategoryTrees(query) {
        return this.request.delete({
            path: 'v3/catalog/trees',
            query,
        });
    }
    getCategoryTree(treeId, query) {
        return this.request.get({
            path: `v3/catalog/trees/${treeId}/categories`,
            query,
        });
    }
}
exports.default = CategoryTreesV3Api;
