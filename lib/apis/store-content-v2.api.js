"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = StoreContentV2Api;
