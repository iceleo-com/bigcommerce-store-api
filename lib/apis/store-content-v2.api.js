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
exports.StoreContentV2Api = exports.StoreContentV2ApiSpecs = void 0;
exports.StoreContentV2ApiSpecs = __importStar(require("../generated/store-content-v2"));
class StoreContentV2Api {
    constructor(request) {
        this.request = request;
    }
    getBlogTags() {
        return this.request.get({
            path: 'v2/blog/tags',
        });
    }
    getBlogPosts(query) {
        return this.request.get({
            path: 'v2/blog/posts',
            query,
        });
    }
    createBlogPosts(requestBody) {
        return this.request.post({
            path: 'v2/blog/posts',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteBlogPosts(query) {
        return this.request.delete({
            path: 'v2/blog/posts',
            query,
        });
    }
    getBlogPost(id) {
        return this.request.get({
            path: `v2/blog/posts/${id}`,
        });
    }
    updateBlogPost(id, requestBody) {
        return this.request.put({
            path: `v2/blog/posts/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteBlogPost(id) {
        return this.request.delete({
            path: `v2/blog/posts/${id}`,
        });
    }
    getBlogPostsCount() {
        return this.request.get({
            path: 'v2/blog/posts/count',
        });
    }
    getPages(query) {
        return this.request.get({
            path: 'v2/pages',
            query,
        });
    }
    createPage(requestBody) {
        return this.request.post({
            path: 'v2/pages',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getPage(id) {
        return this.request.get({
            path: `v2/pages/${id}`,
        });
    }
    updatePage(id, requestBody) {
        return this.request.put({
            path: `v2/pages/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletePage(id) {
        return this.request.delete({
            path: `v2/pages/${id}`,
        });
    }
    getRedirects(query) {
        return this.request.get({
            path: 'v2/redirects',
            query,
        });
    }
    createRedirect(requestBody) {
        return this.request.post({
            path: 'v2/redirects',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteRedirects() {
        return this.request.delete({
            path: 'v2/redirects',
        });
    }
    getRedirect(id) {
        return this.request.get({
            path: `v2/redirects/${id}`,
        });
    }
    updateRedirect(id, requestBody) {
        return this.request.put({
            path: `v2/redirects/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteRedirect(id) {
        return this.request.delete({
            path: `v2/redirects/${id}`,
        });
    }
    getRedirectsCount() {
        return this.request.get({
            path: 'v2/redirects/count',
        });
    }
}
exports.StoreContentV2Api = StoreContentV2Api;
