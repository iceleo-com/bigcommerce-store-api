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
exports.ThemesV3Api = exports.ThemesV3ApiSpecs = void 0;
exports.ThemesV3ApiSpecs = __importStar(require("../generated/themes-v3"));
class ThemesV3Api {
    constructor(request) {
        this.request = request;
    }
    getStoreThemes() {
        return this.request.get({
            path: 'v3/themes',
        });
    }
    uploadTheme(requestBody) {
        return this.request.post({
            path: 'v3/themes',
            contentType: 'multipart/form-data',
            body: requestBody,
        });
    }
    uploadStoreTheme(...args) {
        return this.uploadTheme(...args);
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
    downloadTheme(uuid, requestBody) {
        return this.request.post({
            path: `v3/themes/${uuid}/actions/download`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    downloadStoreTheme(...args) {
        return this.downloadTheme(...args);
    }
    activateStoreTheme(requestBody) {
        return this.request.post({
            path: 'v3/themes/actions/activate',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getJob(jobId) {
        return this.request.get({
            path: `v3/themes/jobs/${jobId}`,
        });
    }
    getStoreThemeJob(...args) {
        return this.getJob(...args);
    }
    getThemesByUuidConfigurations(uuid, query) {
        return this.request.get({
            path: `v3/themes/${uuid}/configurations`,
            query,
        });
    }
    getThemeConfiguration(...args) {
        return this.getThemesByUuidConfigurations(...args);
    }
    postThemesByUuidConfigurationsValidate(uuid, requestBody) {
        return this.request.post({
            path: `v3/themes/${uuid}/configurations/validate`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    validateThemeConfiguration(...args) {
        return this.postThemesByUuidConfigurationsValidate(...args);
    }
    getThemesThemeUuidCustomTemplates(versionUuid) {
        return this.request.get({
            path: `v3/themes/custom-templates/${versionUuid}`,
        });
    }
    getThemeCustomTemplates(...args) {
        return this.getThemesThemeUuidCustomTemplates(...args);
    }
}
exports.ThemesV3Api = ThemesV3Api;
