import RequestService from '../helpers/request/request-service';
import * as WishlistsV3ApiSpecs from '../generated/wishlists-v3';

export default class WishlistsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Wishlists
     *
     * Returns a list of wishlists. Optional filter parameters can be passed in.
     */
    getWishlists(
        query?: WishlistsV3ApiSpecs.GetWishlistsData['query'],
    ) {
        return this.request.get<WishlistsV3ApiSpecs.GetWishlistsResponse, WishlistsV3ApiSpecs.GetWishlistsError>({
            path: 'v3/wishlists',
            query,
        });
    }

    /**
     * Create a Wishlist
     *
     * Creates a wishlist and wishlist item. More than one item can be added in the POST.

     **Required Fields**
     * name
     * customer_id
     */
    createWishlist(
        requestBody: WishlistsV3ApiSpecs.CreateWishlistData['body'],
    ) {
        return this.request.post<any, WishlistsV3ApiSpecs.CreateWishlistError>({
            path: 'v3/wishlists',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Wishlist Item
     *
     * Deletes a wishlist item.
     */
    deleteWishlistItem(
        wishlistId: WishlistsV3ApiSpecs.DeleteWishlistItemData['path']['wishlist_id'],
        itemId: WishlistsV3ApiSpecs.DeleteWishlistItemData['path']['item_id'],
    ) {
        return this.request.delete<WishlistsV3ApiSpecs.DeleteWishlistItemResponse, WishlistsV3ApiSpecs.DeleteWishlistItemError>({
            path: `v3/wishlists/${wishlistId}/items/${itemId}`,
        });
    }

    /**
     * Get a Wishlist
     *
     * Returns a single wishlist.
     */
    getWishlist(
        wishlistId: WishlistsV3ApiSpecs.GetWishlistData['path']['wishlist_id'],
    ) {
        return this.request.get<WishlistsV3ApiSpecs.GetWishlistResponse, WishlistsV3ApiSpecs.GetWishlistError>({
            path: `v3/wishlists/${wishlistId}`,
        });
    }

    /**
     * Update a Wishlist
     *
     * Updates a wishlist.

     Use this endpoint to update existing wishlist items, change the wishlistʼs name and whether the wishlist is available publicly. To add or delete a wishlist item, see [Wishlist Items](/docs/rest-management/wishlists/wishlists-items).
     */
    updateWishlist(
        wishlistId: WishlistsV3ApiSpecs.UpdateWishlistData['path']['wishlist_id'],
        requestBody: WishlistsV3ApiSpecs.UpdateWishlistData['body'],
    ) {
        return this.request.put<any, WishlistsV3ApiSpecs.UpdateWishlistError>({
            path: `v3/wishlists/${wishlistId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Wishlist
     *
     * Deletes a wishlist.
     */
    deleteWishlist(
        wishlistId: WishlistsV3ApiSpecs.DeleteWishlistData['path']['wishlist_id'],
    ) {
        return this.request.delete<any, WishlistsV3ApiSpecs.DeleteWishlistError>({
            path: `v3/wishlists/${wishlistId}`,
        });
    }

    /**
     * Add Wishlist Item
     *
     * Adds a wishlist item. More than one item can be added at a time.
     */
    addWishlistItem(
        wishlistId: WishlistsV3ApiSpecs.AddWishlistItemData['path']['wishlist_id'],
        requestBody: WishlistsV3ApiSpecs.AddWishlistItemData['body'],
    ) {
        return this.request.post<any, WishlistsV3ApiSpecs.AddWishlistItemError>({
            path: `v3/wishlists/${wishlistId}/items`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
