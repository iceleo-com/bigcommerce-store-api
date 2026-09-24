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
exports.WishlistsV3Api = exports.WishlistsV3ApiSpecs = void 0;
exports.WishlistsV3ApiSpecs = __importStar(require("../generated/wishlists-v3"));
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
    deleteWishlistItem(wishlistId, itemId) {
        return this.request.delete({
            path: `v3/wishlists/${wishlistId}/items/${itemId}`,
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
exports.WishlistsV3Api = WishlistsV3Api;
