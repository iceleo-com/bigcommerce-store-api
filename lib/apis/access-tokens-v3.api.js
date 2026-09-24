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
exports.AccessTokensV3Api = exports.AccessTokensV3ApiSpecs = void 0;
exports.AccessTokensV3ApiSpecs = __importStar(require("../generated/access-tokens-v3"));
class AccessTokensV3Api {
    constructor(request) {
        this.request = request;
    }
    createPaymentAccessToken(requestBody) {
        return this.request.post({
            path: 'v3/payments/access_tokens',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createToken() {
        return this.request.post({
            path: 'v3/payments/stored-instruments/access-tokens',
        });
    }
    listInstrumentsForStore(query) {
        return this.request.get({
            path: 'v3/payments/stored-instruments',
            query,
        });
    }
    bulkImportInstruments(requestBody) {
        return this.request.post({
            path: 'v3/payments/stored-instruments',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateInstrument(requestBody) {
        return this.request.put({
            path: 'v3/payments/stored-instruments',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    bulkDeleteInstruments(query) {
        return this.request.delete({
            path: 'v3/payments/stored-instruments',
            query,
        });
    }
    unvaultInstrument(instrumentToken) {
        return this.request.delete({
            path: `v3/payments/stored-instruments/${instrumentToken}`,
        });
    }
    listMethodsForStore(query) {
        return this.request.get({
            path: 'v3/payments/stored-instruments/methods',
            query,
        });
    }
}
exports.AccessTokensV3Api = AccessTokensV3Api;
