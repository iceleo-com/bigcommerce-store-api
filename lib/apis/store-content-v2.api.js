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
    getAllBlogTags() {
        return this.request.get({
            path: 'v2/blog/tags',
        });
    }
    getBlogTags(...args) {
        return this.getAllBlogTags(...args);
    }
    getAllBlogPosts(query) {
        return this.request.get({
            path: 'v2/blog/posts',
            query,
        });
    }
    getBlogPosts(...args) {
        return this.getAllBlogPosts(...args);
    }
    createAblogPosts(requestBody) {
        return this.request.post({
            path: 'v2/blog/posts',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createBlogPosts(...args) {
        return this.createAblogPosts(...args);
    }
    deleteAllBlogPosts(query) {
        return this.request.delete({
            path: 'v2/blog/posts',
            query,
        });
    }
    deleteBlogPosts(...args) {
        return this.deleteAllBlogPosts(...args);
    }
    getAblogPost(id) {
        return this.request.get({
            path: `v2/blog/posts/${id}`,
        });
    }
    getBlogPost(...args) {
        return this.getAblogPost(...args);
    }
    updateAblogPost(id, requestBody) {
        return this.request.put({
            path: `v2/blog/posts/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateBlogPost(...args) {
        return this.updateAblogPost(...args);
    }
    deleteAblogPost(id) {
        return this.request.delete({
            path: `v2/blog/posts/${id}`,
        });
    }
    deleteBlogPost(...args) {
        return this.deleteAblogPost(...args);
    }
    getAcountOfAllBlogPosts() {
        return this.request.get({
            path: 'v2/blog/posts/count',
        });
    }
    getBlogPostsCount(...args) {
        return this.getAcountOfAllBlogPosts(...args);
    }
    getAllPages(query) {
        return this.request.get({
            path: 'v2/pages',
            query,
        });
    }
    getPages(...args) {
        return this.getAllPages(...args);
    }
    createApage(requestBody) {
        return this.request.post({
            path: 'v2/pages',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createPage(...args) {
        return this.createApage(...args);
    }
    getApage(id) {
        return this.request.get({
            path: `v2/pages/${id}`,
        });
    }
    getPage(...args) {
        return this.getApage(...args);
    }
    updateApage(id, requestBody) {
        return this.request.put({
            path: `v2/pages/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updatePage(...args) {
        return this.updateApage(...args);
    }
    deleteApage(id) {
        return this.request.delete({
            path: `v2/pages/${id}`,
        });
    }
    deletePage(...args) {
        return this.deleteApage(...args);
    }
    getAlistofRedirects(query) {
        return this.request.get({
            path: 'v2/redirects',
            query,
        });
    }
    getRedirects(...args) {
        return this.getAlistofRedirects(...args);
    }
    createAredirect(requestBody) {
        return this.request.post({
            path: 'v2/redirects',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createRedirect(...args) {
        return this.createAredirect(...args);
    }
    deleteAllRedirects() {
        return this.request.delete({
            path: 'v2/redirects',
        });
    }
    deleteRedirects(...args) {
        return this.deleteAllRedirects(...args);
    }
    getAredirectUrl(id) {
        return this.request.get({
            path: `v2/redirects/${id}`,
        });
    }
    getRedirect(...args) {
        return this.getAredirectUrl(...args);
    }
    updateAredirectUrl(id, requestBody) {
        return this.request.put({
            path: `v2/redirects/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateRedirect(...args) {
        return this.updateAredirectUrl(...args);
    }
    deleteAredirect(id) {
        return this.request.delete({
            path: `v2/redirects/${id}`,
        });
    }
    deleteRedirect(...args) {
        return this.deleteAredirect(...args);
    }
    getAcountOfRedirects() {
        return this.request.get({
            path: 'v2/redirects/count',
        });
    }
    getRedirectsCount(...args) {
        return this.getAcountOfRedirects(...args);
    }
}
exports.StoreContentV2Api = StoreContentV2Api;
