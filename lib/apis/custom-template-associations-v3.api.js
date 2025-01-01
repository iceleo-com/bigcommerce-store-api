"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomTemplateAssociationsV3Api {
    constructor(request) {
        this.request = request;
    }
    getCustomTemplateAssociations(query) {
        return this.request.get({
            path: 'v3/storefront/custom-template-associations',
            query,
        });
    }
    upsertCustomTemplateAssociations(requestBody) {
        return this.request.put({
            path: 'v3/storefront/custom-template-associations',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCustomTemplateAssociations(query) {
        return this.request.delete({
            path: 'v3/storefront/custom-template-associations',
            query,
        });
    }
}
exports.default = CustomTemplateAssociationsV3Api;
