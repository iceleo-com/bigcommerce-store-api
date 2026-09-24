import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as WishlistsV3ApiSpecs from '../generated/wishlists-v3';
export * as WishlistsV3ApiSpecs from '../generated/wishlists-v3';
export declare class WishlistsV3Api {
    private readonly request;
    constructor(request: RequestService);
    wishlistsGet(query?: WishlistsV3ApiSpecs.WishlistsGetData['query']): Promise<RequestSuccessResponse<200, Required<{
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
    getWishlists(...args: Parameters<WishlistsV3Api['wishlistsGet']>): Promise<RequestSuccessResponse<200, Required<{
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
    wishlistsPost(requestBody: WishlistsV3ApiSpecs.WishlistsPostData['body']): Promise<RequestSuccessResponse<201, Required<{
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
    createWishlist(...args: Parameters<WishlistsV3Api['wishlistsPost']>): Promise<RequestSuccessResponse<201, Required<{
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
    wishlistsItemsByIdDelete(wishlistId: WishlistsV3ApiSpecs.WishlistsItemsByIdDeleteData['path']['wishlist_id'], itemId: WishlistsV3ApiSpecs.WishlistsItemsByIdDeleteData['path']['item_id']): Promise<RequestSuccessResponse<200, Required<{
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
    deleteWishlistItem(...args: Parameters<WishlistsV3Api['wishlistsItemsByIdDelete']>): Promise<RequestSuccessResponse<200, Required<{
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
    wishlistsByIdGet(wishlistId: WishlistsV3ApiSpecs.WishlistsByIdGetData['path']['wishlist_id']): Promise<RequestSuccessResponse<200, Required<{
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
    getWishlist(...args: Parameters<WishlistsV3Api['wishlistsByIdGet']>): Promise<RequestSuccessResponse<200, Required<{
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
    wishlistsByIdPut(wishlistId: WishlistsV3ApiSpecs.WishlistsByIdPutData['path']['wishlist_id'], requestBody: WishlistsV3ApiSpecs.WishlistsByIdPutData['body']): Promise<RequestSuccessResponse<201, Required<{
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
    updateWishlist(...args: Parameters<WishlistsV3Api['wishlistsByIdPut']>): Promise<RequestSuccessResponse<201, Required<{
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
    wishlistsByIdDelete(wishlistId: WishlistsV3ApiSpecs.WishlistsByIdDeleteData['path']['wishlist_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<401, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<500, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    deleteWishlist(...args: Parameters<WishlistsV3Api['wishlistsByIdDelete']>): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<401, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<500, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    wishlistsItemsByIdPost(wishlistId: WishlistsV3ApiSpecs.WishlistsItemsByIdPostData['path']['wishlist_id'], requestBody: WishlistsV3ApiSpecs.WishlistsItemsByIdPostData['body']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestErrorResponse<500, Required<unknown>> | RequestSuccessResponse<201, Required<{
        data?: WishlistsV3ApiSpecs.WishlistFull;
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<401, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    addWishlistItem(...args: Parameters<WishlistsV3Api['wishlistsItemsByIdPost']>): Promise<RequestErrorResponse<404, Required<unknown>> | RequestErrorResponse<500, Required<unknown>> | RequestSuccessResponse<201, Required<{
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
