import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as WishlistsV3ApiSpecs from '../generated/wishlists-v3';
export * as WishlistsV3ApiSpecs from '../generated/wishlists-v3';
export declare class WishlistsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getWishlists(query?: WishlistsV3ApiSpecs.GetWishlistsData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<WishlistsV3ApiSpecs.WishlistFull>;
        meta?: WishlistsV3ApiSpecs.MetaCollection;
    }>> | RequestErrorResponse<401, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<500, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    createWishlist(requestBody: WishlistsV3ApiSpecs.CreateWishlistData['body']): Promise<RequestSuccessResponse<201, Required<{
        data?: WishlistsV3ApiSpecs.WishlistFull;
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<401, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<500, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    deleteWishlistItem(wishlistId: WishlistsV3ApiSpecs.DeleteWishlistItemData['path']['wishlist_id'], itemId: WishlistsV3ApiSpecs.DeleteWishlistItemData['path']['item_id']): Promise<RequestSuccessResponse<200, Required<{
        data?: WishlistsV3ApiSpecs.WishlistFull;
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<401, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<404, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<500, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    getWishlist(wishlistId: WishlistsV3ApiSpecs.GetWishlistData['path']['wishlist_id']): Promise<RequestSuccessResponse<200, Required<{
        data?: WishlistsV3ApiSpecs.WishlistFull;
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<401, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<404, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<500, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    updateWishlist(wishlistId: WishlistsV3ApiSpecs.UpdateWishlistData['path']['wishlist_id'], requestBody: WishlistsV3ApiSpecs.UpdateWishlistData['body']): Promise<RequestSuccessResponse<201, Required<{
        data?: WishlistsV3ApiSpecs.WishlistFull;
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<401, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<500, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    deleteWishlist(wishlistId: WishlistsV3ApiSpecs.DeleteWishlistData['path']['wishlist_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<401, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<500, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    addWishlistItem(wishlistId: WishlistsV3ApiSpecs.AddWishlistItemData['path']['wishlist_id'], requestBody: WishlistsV3ApiSpecs.AddWishlistItemData['body']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestErrorResponse<500, Required<unknown>> | RequestSuccessResponse<201, Required<{
        data?: WishlistsV3ApiSpecs.WishlistFull;
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<401, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
}
