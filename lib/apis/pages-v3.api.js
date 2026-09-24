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
exports.PagesV3Api = exports.PagesV3ApiSpecs = void 0;
exports.PagesV3ApiSpecs = __importStar(require("../generated/pages-v3"));
class PagesV3Api {
    constructor(request) {
        this.request = request;
    }
    contentPagesGet(query) {
        return this.request.get({
            path: 'v3/content/pages',
            query,
        });
    }
    getPages(...args) {
        return this.contentPagesGet(...args);
    }
    contentPagesPost(requestBody, query) {
        return this.request.post({
            path: 'v3/content/pages',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    createPages(...args) {
        return this.contentPagesPost(...args);
    }
    contentPagesPut(requestBody, query) {
        return this.request.put({
            path: 'v3/content/pages',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updatePages(...args) {
        return this.contentPagesPut(...args);
    }
    contentPagesDelete(query) {
        return this.request.delete({
            path: 'v3/content/pages',
            query,
        });
    }
    deletePages(...args) {
        return this.contentPagesDelete(...args);
    }
    contentPageGet(pageId, query) {
        return this.request.get({
            path: `v3/content/pages/${pageId}`,
            query,
        });
    }
    getPage(...args) {
        return this.contentPageGet(...args);
    }
    contentPagePut(pageId, requestBody, query) {
        return this.request.put({
            path: `v3/content/pages/${pageId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updatePage(...args) {
        return this.contentPagePut(...args);
    }
    contentPageDelete(pageId) {
        return this.request.delete({
            path: `v3/content/pages/${pageId}`,
        });
    }
    deletePage(...args) {
        return this.contentPageDelete(...args);
    }
}
exports.PagesV3Api = PagesV3Api;
