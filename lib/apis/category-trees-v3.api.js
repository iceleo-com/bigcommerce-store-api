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
exports.CategoryTreesV3Api = exports.CategoryTreesV3ApiSpecs = void 0;
exports.CategoryTreesV3ApiSpecs = __importStar(require("../generated/category-trees-v3"));
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
exports.CategoryTreesV3Api = CategoryTreesV3Api;
