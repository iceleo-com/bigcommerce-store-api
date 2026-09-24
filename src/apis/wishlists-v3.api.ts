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
     * Get All Wishlists
     *
     * Returns a list of wishlists. Optional filter parameters can be passed in.
     */
    wishlistsGet(
        query?: WishlistsV3ApiSpecs.WishlistsGetData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<WishlistsV3ApiSpecs.WishlistsGetResponses[200]>>,(RequestErrorResponse<401, Required<WishlistsV3ApiSpecs.WishlistsGetErrors[401]>> | RequestErrorResponse<500, Required<WishlistsV3ApiSpecs.WishlistsGetErrors[500]>>)>({
            path: 'v3/wishlists',
            query,
        });
    }

    /**
     * @deprecated Use `wishlistsGet` instead.
     */
    getWishlists(...args: Parameters<WishlistsV3Api['wishlistsGet']>) {
        return this.wishlistsGet(...args);
    }

    /**
     * Create a Wishlist
     *
     * Creates a wishlist and wishlist item. More than one item can be added in the POST.

     **Required Fields**
     * name
     * customer_id
     */
    wishlistsPost(
        requestBody: WishlistsV3ApiSpecs.WishlistsPostData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<WishlistsV3ApiSpecs.WishlistsPostResponses[201]>>,(RequestErrorResponse<401, Required<WishlistsV3ApiSpecs.WishlistsPostErrors[401]>> | RequestErrorResponse<500, Required<WishlistsV3ApiSpecs.WishlistsPostErrors[500]>>)>({
            path: 'v3/wishlists',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `wishlistsPost` instead.
     */
    createWishlist(...args: Parameters<WishlistsV3Api['wishlistsPost']>) {
        return this.wishlistsPost(...args);
    }

    /**
     * Delete Wishlist Item
     *
     * Deletes a wishlist item.
     */
    wishlistsItemsByIdDelete(
        wishlistId: WishlistsV3ApiSpecs.WishlistsItemsByIdDeleteData['path']['wishlist_id'],
        itemId: WishlistsV3ApiSpecs.WishlistsItemsByIdDeleteData['path']['item_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<WishlistsV3ApiSpecs.WishlistsItemsByIdDeleteResponses[200]>>,(RequestErrorResponse<401, Required<WishlistsV3ApiSpecs.WishlistsItemsByIdDeleteErrors[401]>> | RequestErrorResponse<404, Required<WishlistsV3ApiSpecs.WishlistsItemsByIdDeleteErrors[404]>> | RequestErrorResponse<500, Required<WishlistsV3ApiSpecs.WishlistsItemsByIdDeleteErrors[500]>>)>({
            path: `v3/wishlists/${wishlistId}/items/${itemId}`,
        });
    }

    /**
     * @deprecated Use `wishlistsItemsByIdDelete` instead.
     */
    deleteWishlistItem(...args: Parameters<WishlistsV3Api['wishlistsItemsByIdDelete']>) {
        return this.wishlistsItemsByIdDelete(...args);
    }

    /**
     * Get a Wishlist
     *
     * Returns a single wishlist.
     */
    wishlistsByIdGet(
        wishlistId: WishlistsV3ApiSpecs.WishlistsByIdGetData['path']['wishlist_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<WishlistsV3ApiSpecs.WishlistsByIdGetResponses[200]>>,(RequestErrorResponse<401, Required<WishlistsV3ApiSpecs.WishlistsByIdGetErrors[401]>> | RequestErrorResponse<404, Required<WishlistsV3ApiSpecs.WishlistsByIdGetErrors[404]>> | RequestErrorResponse<500, Required<WishlistsV3ApiSpecs.WishlistsByIdGetErrors[500]>>)>({
            path: `v3/wishlists/${wishlistId}`,
        });
    }

    /**
     * @deprecated Use `wishlistsByIdGet` instead.
     */
    getWishlist(...args: Parameters<WishlistsV3Api['wishlistsByIdGet']>) {
        return this.wishlistsByIdGet(...args);
    }

    /**
     * Update a Wishlist
     *
     * Updates a wishlist.

     Use this endpoint to update existing wishlist items, change the wishlistʼs name and whether the wishlist is available publicly. To add or delete a wishlist item, see [Wishlist Items](/docs/rest-management/wishlists/wishlists-items).
     */
    wishlistsByIdPut(
        wishlistId: WishlistsV3ApiSpecs.WishlistsByIdPutData['path']['wishlist_id'],
        requestBody: WishlistsV3ApiSpecs.WishlistsByIdPutData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<201, Required<WishlistsV3ApiSpecs.WishlistsByIdPutResponses[201]>>,(RequestErrorResponse<401, Required<WishlistsV3ApiSpecs.WishlistsByIdPutErrors[401]>> | RequestErrorResponse<500, Required<WishlistsV3ApiSpecs.WishlistsByIdPutErrors[500]>>)>({
            path: `v3/wishlists/${wishlistId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `wishlistsByIdPut` instead.
     */
    updateWishlist(...args: Parameters<WishlistsV3Api['wishlistsByIdPut']>) {
        return this.wishlistsByIdPut(...args);
    }

    /**
     * Delete a Wishlist
     *
     * Deletes a wishlist.
     */
    wishlistsByIdDelete(
        wishlistId: WishlistsV3ApiSpecs.WishlistsByIdDeleteData['path']['wishlist_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<WishlistsV3ApiSpecs.WishlistsByIdDeleteResponses[204]>>,(RequestErrorResponse<401, Required<WishlistsV3ApiSpecs.WishlistsByIdDeleteErrors[401]>> | RequestErrorResponse<500, Required<WishlistsV3ApiSpecs.WishlistsByIdDeleteErrors[500]>>)>({
            path: `v3/wishlists/${wishlistId}`,
        });
    }

    /**
     * @deprecated Use `wishlistsByIdDelete` instead.
     */
    deleteWishlist(...args: Parameters<WishlistsV3Api['wishlistsByIdDelete']>) {
        return this.wishlistsByIdDelete(...args);
    }

    /**
     * Add Wishlist Item
     *
     * Adds a wishlist item. More than one item can be added at a time.
     */
    wishlistsItemsByIdPost(
        wishlistId: WishlistsV3ApiSpecs.WishlistsItemsByIdPostData['path']['wishlist_id'],
        requestBody: WishlistsV3ApiSpecs.WishlistsItemsByIdPostData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<WishlistsV3ApiSpecs.WishlistsItemsByIdPostResponses[201]>>,(RequestErrorResponse<401, Required<WishlistsV3ApiSpecs.WishlistsItemsByIdPostErrors[401]>> | RequestErrorResponse<404, Required<WishlistsV3ApiSpecs.WishlistsItemsByIdPostErrors[404]>> | RequestErrorResponse<500, Required<WishlistsV3ApiSpecs.WishlistsItemsByIdPostErrors[500]>>)>({
            path: `v3/wishlists/${wishlistId}/items`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `wishlistsItemsByIdPost` instead.
     */
    addWishlistItem(...args: Parameters<WishlistsV3Api['wishlistsItemsByIdPost']>) {
        return this.wishlistsItemsByIdPost(...args);
    }
}
