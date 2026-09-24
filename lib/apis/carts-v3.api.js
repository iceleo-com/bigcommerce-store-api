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
exports.CartsV3Api = exports.CartsV3ApiSpecs = void 0;
exports.CartsV3ApiSpecs = __importStar(require("../generated/carts-v3"));
class CartsV3Api {
    constructor(request) {
        this.request = request;
    }
    getCartsMetafields(query) {
        return this.request.get({
            path: 'v3/carts/metafields',
            query,
        });
    }
    createCartsMetafields(requestBody) {
        return this.request.post({
            path: 'v3/carts/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCartsMetafields(requestBody) {
        return this.request.put({
            path: 'v3/carts/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCartsMetafields(requestBody) {
        return this.request.delete({
            path: 'v3/carts/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createCart(requestBody, query) {
        return this.request.post({
            path: 'v3/carts',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    getCart(cartId, query) {
        return this.request.get({
            path: `v3/carts/${cartId}`,
            query,
        });
    }
    updateCart(cartId, requestBody, query) {
        return this.request.put({
            path: `v3/carts/${cartId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    deleteCart(cartId) {
        return this.request.delete({
            path: `v3/carts/${cartId}`,
        });
    }
    addCartLineItems(cartId, requestBody, query) {
        return this.request.post({
            path: `v3/carts/${cartId}/items`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    updateCartLineItem(cartId, itemId, requestBody, query) {
        return this.request.put({
            path: `v3/carts/${cartId}/items/${itemId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    deleteCartLineItem(cartId, itemId, requestBody, query) {
        return this.request.delete({
            path: `v3/carts/${cartId}/items/${itemId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
    getCartMetafields(cartId, query) {
        return this.request.get({
            path: `v3/carts/${cartId}/metafields`,
            query,
        });
    }
    createCartMetafield(cartId, requestBody) {
        return this.request.post({
            path: `v3/carts/${cartId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getCartMetafield(cartId, metafieldId, query) {
        return this.request.get({
            path: `v3/carts/${cartId}/metafields/${metafieldId}`,
            query,
        });
    }
    updateCartMetafield(cartId, metafieldId, requestBody) {
        return this.request.put({
            path: `v3/carts/${cartId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCartMetafield(cartId, metafieldId) {
        return this.request.delete({
            path: `v3/carts/${cartId}/metafields/${metafieldId}`,
        });
    }
    createCartRedirectUrl(cartId, requestBody) {
        return this.request.post({
            path: `v3/carts/${cartId}/redirect_urls`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getGlobalCartSettings() {
        return this.request.get({
            path: 'v3/carts/settings',
        });
    }
    updateGlobalCartSettings(requestBody) {
        return this.request.put({
            path: 'v3/carts/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getChannelCartSettings(channelId) {
        return this.request.get({
            path: `v3/carts/settings/channels/${channelId}`,
        });
    }
    updateChannelCartSettings(channelId, requestBody) {
        return this.request.put({
            path: `v3/carts/settings/channels/${channelId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.CartsV3Api = CartsV3Api;
