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
exports.TaxProviderApi = exports.TaxProviderApiSpecs = void 0;
exports.TaxProviderApiSpecs = __importStar(require("../generated/tax-provider"));
class TaxProviderApi {
    constructor(request) {
        this.request = request;
    }
    estimate(requestBody) {
        return this.request.post({
            path: 'https://{app_domain}/estimate',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    estimateTaxes(...args) {
        return this.estimate(...args);
    }
    void(query) {
        return this.request.post({
            path: 'https://{app_domain}/void',
            query,
        });
    }
    voidTaxQuote(...args) {
        return this.void(...args);
    }
    commit(requestBody) {
        return this.request.post({
            path: 'https://{app_domain}/commit',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    commitTaxQuote(...args) {
        return this.commit(...args);
    }
    adjust(requestBody, query) {
        return this.request.post({
            path: 'https://{app_domain}/adjust',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    adjustTaxQuote(...args) {
        return this.adjust(...args);
    }
}
exports.TaxProviderApi = TaxProviderApi;
