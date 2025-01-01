"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ThemesV3Api {
    constructor(request) {
        this.request = request;
    }
    getStoreThemes() {
        return this.request.get({
            path: 'v3/themes',
        });
    }
    uploadStoreTheme(requestBody) {
        return this.request.post({
            path: 'v3/themes',
            contentType: 'multipart/form-data',
            body: requestBody,
        });
    }
    getStoreTheme(uuid) {
        return this.request.get({
            path: `v3/themes/${uuid}`,
        });
    }
    deleteStoreTheme(uuid) {
        return this.request.delete({
            path: `v3/themes/${uuid}`,
        });
    }
    downloadStoreTheme(uuid, requestBody) {
        return this.request.post({
            path: `v3/themes/${uuid}/actions/download`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    activateStoreTheme(requestBody) {
        return this.request.post({
            path: 'v3/themes/actions/activate',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getStoreThemeJob(jobId) {
        return this.request.get({
            path: `v3/themes/jobs/${jobId}`,
        });
    }
    getThemeConfiguration(uuid, query) {
        return this.request.get({
            path: `v3/themes/${uuid}/configurations`,
            query,
        });
    }
    validateThemeConfiguration(uuid, requestBody) {
        return this.request.post({
            path: `v3/themes/${uuid}/configurations/validate`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getThemeCustomTemplates(versionUuid) {
        return this.request.get({
            path: `v3/themes/custom-templates/${versionUuid}`,
        });
    }
}
exports.default = ThemesV3Api;
