"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartsV3Api {
    constructor(request) {
        this.request = request;
    }
    createCart(requestBody, query) {
        return this.request.post({
            path: 'v3/carts',
            contentType: 'application/json',
            body: requestBody,
            query,
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
    createCartRedirectUrl(cartId, requestBody) {
        return this.request.post({
            path: `v3/carts/${cartId}/redirect_urls`,
            contentType: 'application/json',
            body: requestBody,
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
}
exports.default = CartsV3Api;
