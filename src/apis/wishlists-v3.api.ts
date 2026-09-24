import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as WishlistsV3ApiSpecs from '../generated/wishlists-v3';
export * as WishlistsV3ApiSpecs from '../generated/wishlists-v3';

export class WishlistsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * List Wishlists
     *
     * Returns a list of wishlists. Optional filter parameters can be passed in.
     */
    getWishlists(
        query?: WishlistsV3ApiSpecs.GetWishlistsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<WishlistsV3ApiSpecs.GetWishlistsResponses[200]>>,(RequestErrorResponse<401, Required<WishlistsV3ApiSpecs.GetWishlistsErrors[401]>> | RequestErrorResponse<500, Required<WishlistsV3ApiSpecs.GetWishlistsErrors[500]>>)>({
            path: 'v3/wishlists',
            query,
        });
    }

    /**
     * Create Wishlist
     *
     * Creates a wishlist and wishlist item. More than one item can be added in the POST.

     **Required Fields**
     * name
     * customer_id
     */
    createWishlist(
        requestBody: WishlistsV3ApiSpecs.CreateWishlistData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<WishlistsV3ApiSpecs.CreateWishlistResponses[201]>>,(RequestErrorResponse<401, Required<WishlistsV3ApiSpecs.CreateWishlistErrors[401]>> | RequestErrorResponse<500, Required<WishlistsV3ApiSpecs.CreateWishlistErrors[500]>>)>({
            path: 'v3/wishlists',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Wishlist
     *
     * Returns a single wishlist.
     */
    getWishlist(
        wishlistId: WishlistsV3ApiSpecs.GetWishlistData['path']['wishlist_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<WishlistsV3ApiSpecs.GetWishlistResponses[200]>>,(RequestErrorResponse<401, Required<WishlistsV3ApiSpecs.GetWishlistErrors[401]>> | RequestErrorResponse<404, Required<WishlistsV3ApiSpecs.GetWishlistErrors[404]>> | RequestErrorResponse<500, Required<WishlistsV3ApiSpecs.GetWishlistErrors[500]>>)>({
            path: `v3/wishlists/${wishlistId}`,
        });
    }

    /**
     * Update Wishlist
     *
     * Updates a wishlist.

     Use this endpoint to update existing wishlist items, change the wishlistʼs name and whether the wishlist is available publicly. To add or delete a wishlist item, see [Wishlist Items](/developer/api-reference/rest/admin/management/wishlists/wishlists-items).
     */
    updateWishlist(
        wishlistId: WishlistsV3ApiSpecs.UpdateWishlistData['path']['wishlist_id'],
        requestBody: WishlistsV3ApiSpecs.UpdateWishlistData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<201, Required<WishlistsV3ApiSpecs.UpdateWishlistResponses[201]>>,(RequestErrorResponse<401, Required<WishlistsV3ApiSpecs.UpdateWishlistErrors[401]>> | RequestErrorResponse<500, Required<WishlistsV3ApiSpecs.UpdateWishlistErrors[500]>>)>({
            path: `v3/wishlists/${wishlistId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Wishlist
     *
     * Deletes a wishlist.
     */
    deleteWishlist(
        wishlistId: WishlistsV3ApiSpecs.DeleteWishlistData['path']['wishlist_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<WishlistsV3ApiSpecs.DeleteWishlistResponses[204]>>,(RequestErrorResponse<401, Required<WishlistsV3ApiSpecs.DeleteWishlistErrors[401]>> | RequestErrorResponse<500, Required<WishlistsV3ApiSpecs.DeleteWishlistErrors[500]>>)>({
            path: `v3/wishlists/${wishlistId}`,
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
        return this.request.delete<RequestSuccessResponse<200, Required<WishlistsV3ApiSpecs.DeleteWishlistItemResponses[200]>>,(RequestErrorResponse<401, Required<WishlistsV3ApiSpecs.DeleteWishlistItemErrors[401]>> | RequestErrorResponse<404, Required<WishlistsV3ApiSpecs.DeleteWishlistItemErrors[404]>> | RequestErrorResponse<500, Required<WishlistsV3ApiSpecs.DeleteWishlistItemErrors[500]>>)>({
            path: `v3/wishlists/${wishlistId}/items/${itemId}`,
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
        return this.request.post<RequestSuccessResponse<201, Required<WishlistsV3ApiSpecs.AddWishlistItemResponses[201]>>,RequestErrorResponse<401, Required<WishlistsV3ApiSpecs.AddWishlistItemErrors[401]>>>({
            path: `v3/wishlists/${wishlistId}/items`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
