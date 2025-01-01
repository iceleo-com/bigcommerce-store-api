"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SitesV3Api {
    constructor(request) {
        this.request = request;
    }
    getSites(query) {
        return this.request.get({
            path: 'v3/sites',
            query,
        });
    }
    createSite(requestBody) {
        return this.request.post({
            path: 'v3/sites',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getSite(siteId) {
        return this.request.get({
            path: `v3/sites/${siteId}`,
        });
    }
    updateSite(siteId, requestBody) {
        return this.request.put({
            path: `v3/sites/${siteId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteSite(siteId) {
        return this.request.delete({
            path: `v3/sites/${siteId}`,
        });
    }
    getSiteRoutes(siteId, query) {
        return this.request.get({
            path: `v3/sites/${siteId}/routes`,
            query,
        });
    }
    createSiteRoute(siteId, requestBody) {
        return this.request.post({
            path: `v3/sites/${siteId}/routes`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateSiteRoutes(siteId, requestBody) {
        return this.request.put({
            path: `v3/sites/${siteId}/routes`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getSiteRoute(siteId, routeId) {
        return this.request.get({
            path: `v3/sites/${siteId}/routes/${routeId}`,
        });
    }
    updateSiteRoute(siteId, routeId, requestBody) {
        return this.request.put({
            path: `v3/sites/${siteId}/routes/${routeId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteSiteRoute(siteId, routeId) {
        return this.request.delete({
            path: `v3/sites/${siteId}/routes/${routeId}`,
        });
    }
    getSiteCertificate(siteId) {
        return this.request.get({
            path: `v3/sites/${siteId}/certificate`,
        });
    }
    upsertSiteCertificate(siteId, requestBody) {
        return this.request.put({
            path: `v3/sites/${siteId}/certificate`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getSitesCertificates(query) {
        return this.request.get({
            path: 'v3/sites/certificates',
            query,
        });
    }
}
exports.default = SitesV3Api;
