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
exports.StorefrontTokensV3Api = exports.StorefrontTokensV3ApiSpecs = void 0;
exports.StorefrontTokensV3ApiSpecs = __importStar(require("../generated/storefront-tokens-v3"));
class StorefrontTokensV3Api {
    constructor(request) {
        this.request = request;
    }
    listTokens(query) {
        return this.request.get({
            path: 'v3/storefront/api-token',
            query,
        });
    }
    createToken(requestBody) {
        return this.request.post({
            path: 'v3/storefront/api-token',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    revokeToken() {
        return this.request.delete({
            path: 'v3/storefront/api-token',
        });
    }
    revokeTokenByJti(jti) {
        return this.request.delete({
            path: `v3/storefront/api-token/${jti}`,
        });
    }
    revokeAllTokens() {
        return this.request.post({
            path: 'v3/storefront/api-token/revoke-all',
        });
    }
    listCustomerImpersonationTokens(query) {
        return this.request.get({
            path: 'v3/storefront/api-token-customer-impersonation',
            query,
        });
    }
    createTokenWithCustomerImpersonation(requestBody) {
        return this.request.post({
            path: 'v3/storefront/api-token-customer-impersonation',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    revokeCustomerImpersonationTokenByJti(jti) {
        return this.request.delete({
            path: `v3/storefront/api-token-customer-impersonation/${jti}`,
        });
    }
    revokeAllCustomerImpersonationTokens() {
        return this.request.post({
            path: 'v3/storefront/api-token-customer-impersonation/revoke-all',
        });
    }
    listPrivateTokens(query) {
        return this.request.get({
            path: 'v3/storefront/api-token-private',
            query,
        });
    }
    createPrivateToken(requestBody) {
        return this.request.post({
            path: 'v3/storefront/api-token-private',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    revokePrivateTokenByJti(jti) {
        return this.request.delete({
            path: `v3/storefront/api-token-private/${jti}`,
        });
    }
    revokeAllPrivateTokens() {
        return this.request.post({
            path: 'v3/storefront/api-token-private/revoke-all',
        });
    }
}
exports.StorefrontTokensV3Api = StorefrontTokensV3Api;
