import RequestService from '../helpers/request/request-service';
import * as WishlistsV3ApiSpecs from '../generated/wishlists-v3';
export default class WishlistsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getWishlists(query?: WishlistsV3ApiSpecs.GetWishlistsData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<WishlistsV3ApiSpecs.GetWishlistsResponse, WishlistsV3ApiSpecs.GetWishlistsError>>;
    createWishlist(requestBody: WishlistsV3ApiSpecs.CreateWishlistData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, WishlistsV3ApiSpecs.CreateWishlistError>>;
    deleteWishlistItem(wishlistId: WishlistsV3ApiSpecs.DeleteWishlistItemData['path']['wishlist_id'], itemId: WishlistsV3ApiSpecs.DeleteWishlistItemData['path']['item_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<WishlistsV3ApiSpecs.DeleteWishlistItemResponse, WishlistsV3ApiSpecs.DeleteWishlistItemError>>;
    getWishlist(wishlistId: WishlistsV3ApiSpecs.GetWishlistData['path']['wishlist_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<WishlistsV3ApiSpecs.GetWishlistResponse, WishlistsV3ApiSpecs.GetWishlistError>>;
    updateWishlist(wishlistId: WishlistsV3ApiSpecs.UpdateWishlistData['path']['wishlist_id'], requestBody: WishlistsV3ApiSpecs.UpdateWishlistData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, WishlistsV3ApiSpecs.UpdateWishlistError>>;
    deleteWishlist(wishlistId: WishlistsV3ApiSpecs.DeleteWishlistData['path']['wishlist_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, WishlistsV3ApiSpecs.DeleteWishlistError>>;
    addWishlistItem(wishlistId: WishlistsV3ApiSpecs.AddWishlistItemData['path']['wishlist_id'], requestBody: WishlistsV3ApiSpecs.AddWishlistItemData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, unknown>>;
}
