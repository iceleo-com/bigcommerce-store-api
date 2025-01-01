"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ScriptsV3Api {
    constructor(request) {
        this.request = request;
    }
    getScripts(query) {
        return this.request.get({
            path: 'v3/content/scripts',
            query,
        });
    }
    createScript(requestBody) {
        return this.request.post({
            path: 'v3/content/scripts',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getScript(uuid) {
        return this.request.get({
            path: `v3/content/scripts/${uuid}`,
        });
    }
    updateScript(uuid, requestBody) {
        return this.request.put({
            path: `v3/content/scripts/${uuid}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteScript(uuid) {
        return this.request.delete({
            path: `v3/content/scripts/${uuid}`,
        });
    }
}
exports.default = ScriptsV3Api;
