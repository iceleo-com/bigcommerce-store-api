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
exports.WidgetsV3Api = exports.WidgetsV3ApiSpecs = void 0;
exports.WidgetsV3ApiSpecs = __importStar(require("../generated/widgets-v3"));
class WidgetsV3Api {
    constructor(request) {
        this.request = request;
    }
    getWidgetTemplates(query) {
        return this.request.get({
            path: 'v3/content/widget-templates',
            query,
        });
    }
    createWidgetTemplate(requestBody) {
        return this.request.post({
            path: 'v3/content/widget-templates',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    previewWidget(requestBody) {
        return this.request.post({
            path: 'v3/content/widget-templates/{uuid}/preview',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getWidgetTemplate(uuid, query) {
        return this.request.get({
            path: `v3/content/widget-templates/${uuid}`,
            query,
        });
    }
    updateWidgetTemplate(uuid, requestBody) {
        return this.request.put({
            path: `v3/content/widget-templates/${uuid}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteWidgetTemplate(uuid) {
        return this.request.delete({
            path: `v3/content/widget-templates/${uuid}`,
        });
    }
    getWidgets(query) {
        return this.request.get({
            path: 'v3/content/widgets',
            query,
        });
    }
    createWidget(requestBody) {
        return this.request.post({
            path: 'v3/content/widgets',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getWidget(uuid) {
        return this.request.get({
            path: `v3/content/widgets/${uuid}`,
        });
    }
    updateWidget(uuid, requestBody) {
        return this.request.put({
            path: `v3/content/widgets/${uuid}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteWidget(uuid) {
        return this.request.delete({
            path: `v3/content/widgets/${uuid}`,
        });
    }
    getPlacements(query) {
        return this.request.get({
            path: 'v3/content/placements',
            query,
        });
    }
    createPlacement(requestBody) {
        return this.request.post({
            path: 'v3/content/placements',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getPlacement(uuid) {
        return this.request.get({
            path: `v3/content/placements/${uuid}`,
        });
    }
    updatePlacement(uuid, requestBody) {
        return this.request.put({
            path: `v3/content/placements/${uuid}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletePlacement(uuid) {
        return this.request.delete({
            path: `v3/content/placements/${uuid}`,
        });
    }
    getContentRegions(query) {
        return this.request.get({
            path: 'v3/content/regions',
            query,
        });
    }
}
exports.WidgetsV3Api = WidgetsV3Api;
