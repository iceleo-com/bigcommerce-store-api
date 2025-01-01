"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PagesV3Api {
    constructor(request) {
        this.request = request;
    }
    getPages(query) {
        return this.request.get({
            path: 'v3/content/pages',
            query,
        });
    }
    createPages(requestBody, query) {
        return this.request.post({
            path: 'v3/content/pages',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updatePages(requestBody, query) {
        return this.request.put({
            path: 'v3/content/pages',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    deletePages(query) {
        return this.request.delete({
            path: 'v3/content/pages',
            query,
        });
    }
    getPage(pageId, query) {
        return this.request.get({
            path: `v3/content/pages/${pageId}`,
            query,
        });
    }
    updatePage(pageId, requestBody, query) {
        return this.request.put({
            path: `v3/content/pages/${pageId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    deletePage(pageId) {
        return this.request.delete({
            path: `v3/content/pages/${pageId}`,
        });
    }
}
exports.default = PagesV3Api;
