"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailTemplatesV3Api {
    constructor(request) {
        this.request = request;
    }
    getEmailTemplates(query) {
        return this.request.get({
            path: 'v3/marketing/email-templates',
            query,
        });
    }
    getEmailTemplate(templateName, query) {
        return this.request.get({
            path: `v3/marketing/email-templates/${templateName}`,
            query,
        });
    }
    updateEmailTemplate(templateName, requestBody, query) {
        return this.request.put({
            path: `v3/marketing/email-templates/${templateName}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    deleteEmailTemplateOverride(templateName, query) {
        return this.request.delete({
            path: `v3/marketing/email-templates/${templateName}`,
            query,
        });
    }
}
exports.default = EmailTemplatesV3Api;
