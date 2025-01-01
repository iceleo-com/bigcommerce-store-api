"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PageWidgetsV3Api {
    constructor(request) {
        this.request = request;
    }
    getPageWidgets(query) {
        return this.request.get({
            path: 'v3/content/page-widgets',
            query,
        });
    }
    createPageWidgets(requestBody) {
        return this.request.post({
            path: 'v3/content/page-widgets',
            body: requestBody,
        });
    }
}
exports.default = PageWidgetsV3Api;
