"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RedirectsV3Api {
    constructor(request) {
        this.request = request;
    }
    getRedirects(query) {
        return this.request.get({
            path: 'v3/storefront/redirects',
            query,
        });
    }
    upsertRedirects(requestBody) {
        return this.request.put({
            path: 'v3/storefront/redirects',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteRedirects(query) {
        return this.request.delete({
            path: 'v3/storefront/redirects',
            query,
        });
    }
    getRedirectImportExportJobs(query) {
        return this.request.get({
            path: 'v3/storefront/redirects/imex/jobs',
            query,
        });
    }
    createRedirectExportJob(requestBody) {
        return this.request.post({
            path: 'v3/storefront/redirects/imex/export',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createRedirectImportJob(requestBody) {
        return this.request.post({
            path: 'v3/storefront/redirects/imex/import',
            contentType: 'multipart/form-data',
            body: requestBody,
        });
    }
    getRedirectExportEvents(uuid) {
        return this.request.get({
            path: `v3/storefront/redirects/imex/export/${uuid}/events`,
        });
    }
    getRedirectImportEvents(uuid) {
        return this.request.get({
            path: `v3/storefront/redirects/imex/import/${uuid}/events`,
        });
    }
    getRedirectExportDownload(uuid) {
        return this.request.get({
            path: `v3/storefront/redirects/imex/export/${uuid}/download`,
        });
    }
}
exports.default = RedirectsV3Api;
