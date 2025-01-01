"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WishlistsV3Api {
    constructor(request) {
        this.request = request;
    }
    getWishlists(query) {
        return this.request.get({
            path: 'v3/wishlists',
            query,
        });
    }
    createWishlist(requestBody) {
        return this.request.post({
            path: 'v3/wishlists',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteWishlistItem(wishlistId, itemId) {
        return this.request.delete({
            path: `v3/wishlists/${wishlistId}/items/${itemId}`,
        });
    }
    getWishlist(wishlistId) {
        return this.request.get({
            path: `v3/wishlists/${wishlistId}`,
        });
    }
    updateWishlist(wishlistId, requestBody) {
        return this.request.put({
            path: `v3/wishlists/${wishlistId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteWishlist(wishlistId) {
        return this.request.delete({
            path: `v3/wishlists/${wishlistId}`,
        });
    }
    addWishlistItem(wishlistId, requestBody) {
        return this.request.post({
            path: `v3/wishlists/${wishlistId}/items`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = WishlistsV3Api;
