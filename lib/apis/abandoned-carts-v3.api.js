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
exports.AbandonedCartsV3Api = exports.AbandonedCartsV3ApiSpecs = void 0;
exports.AbandonedCartsV3ApiSpecs = __importStar(require("../generated/abandoned-carts-v3"));
class AbandonedCartsV3Api {
    constructor(request) {
        this.request = request;
    }
    getAbandonedCart(token) {
        return this.request.get({
            path: `v3/abandoned-carts/${token}`,
        });
    }
    getAbandonedCarts(...args) {
        return this.getAbandonedCart(...args);
    }
    getGlobalAbandonedCartSettings() {
        return this.request.get({
            path: 'v3/abandoned-carts/settings',
        });
    }
    updateGlobalAbandonedCartSettings(requestBody) {
        return this.request.put({
            path: 'v3/abandoned-carts/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getChannelAbandonedCartSettings(channelId) {
        return this.request.get({
            path: `v3/abandoned-carts/settings/channels/${channelId}`,
        });
    }
    updateChannelAbandonedCartSettings(channelId, requestBody) {
        return this.request.put({
            path: `v3/abandoned-carts/settings/channels/${channelId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.AbandonedCartsV3Api = AbandonedCartsV3Api;
