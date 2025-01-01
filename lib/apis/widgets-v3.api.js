"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = WidgetsV3Api;
