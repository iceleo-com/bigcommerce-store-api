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
exports.EmailTemplatesV3Api = exports.EmailTemplatesV3ApiSpecs = void 0;
exports.EmailTemplatesV3ApiSpecs = __importStar(require("../generated/email-templates-v3"));
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
exports.EmailTemplatesV3Api = EmailTemplatesV3Api;
