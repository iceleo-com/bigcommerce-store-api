export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type WishlistPost = {
    customer_id: number;
    is_public?: boolean;
    name?: string;
    items?: Array<{
        product_id?: number;
        variant_id?: number;
    }>;
};
export type WishlistPut = {
    customer_id: number;
    is_public?: boolean;
    name?: string;
    items: Array<{
        id?: number;
        product_id?: number;
        variant_id?: number;
    }>;
};
export type WishlistFull = {
    id?: number;
    customer_id?: number;
    name?: string;
    is_public?: boolean;
    token?: string;
    items?: Array<WishlistItemFull>;
};
export type WishlistItemFull = {
    id?: number;
    product_id?: number;
    variant_id?: number;
};
export type WishlistItemPost = {
    items?: Array<{
        product_id?: number;
        variant_id?: number;
    }>;
};
export type Pagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
};
export type MetaCollection = {
    pagination?: Pagination;
};
export type WishlistId = number;
export type Accept = string;
export type ContentType = string;
export type WishlistsGetData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        customer_id?: number;
        page?: number;
        limit?: number;
    };
    url: '/wishlists';
};
export type WishlistsGetErrors = {
    401: {
        status?: number;
        title?: string;
        type?: string;
    };
    500: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type WishlistsGetError = WishlistsGetErrors[keyof WishlistsGetErrors];
export type WishlistsGetResponses = {
    200: {
        data?: Array<WishlistFull>;
        meta?: MetaCollection;
    };
};
export type WishlistsGetResponse = WishlistsGetResponses[keyof WishlistsGetResponses];
export type WishlistsPostData = {
    body: WishlistPost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/wishlists';
};
export type WishlistsPostErrors = {
    401: {
        status?: number;
        title?: string;
        type?: string;
    };
    500: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type WishlistsPostError = WishlistsPostErrors[keyof WishlistsPostErrors];
export type WishlistsPostResponses = {
    201: {
        data?: WishlistFull;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type WishlistsPostResponse = WishlistsPostResponses[keyof WishlistsPostResponses];
export type WishlistsItemsByIdDeleteData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        wishlist_id: number;
        item_id: number;
    };
    query?: never;
    url: '/wishlists/{wishlist_id}/items/{item_id}';
};
export type WishlistsItemsByIdDeleteErrors = {
    401: {
        status?: number;
        title?: string;
        type?: string;
    };
    404: {
        [key: string]: unknown;
    };
    500: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type WishlistsItemsByIdDeleteError = WishlistsItemsByIdDeleteErrors[keyof WishlistsItemsByIdDeleteErrors];
export type WishlistsItemsByIdDeleteResponses = {
    200: {
        data?: WishlistFull;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type WishlistsItemsByIdDeleteResponse = WishlistsItemsByIdDeleteResponses[keyof WishlistsItemsByIdDeleteResponses];
export type WishlistsByIdDeleteData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        wishlist_id: number;
    };
    query?: never;
    url: '/wishlists/{wishlist_id}';
};
export type WishlistsByIdDeleteErrors = {
    401: {
        status?: number;
        title?: string;
        type?: string;
    };
    500: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type WishlistsByIdDeleteError = WishlistsByIdDeleteErrors[keyof WishlistsByIdDeleteErrors];
export type WishlistsByIdDeleteResponses = {
    204: void;
};
export type WishlistsByIdDeleteResponse = WishlistsByIdDeleteResponses[keyof WishlistsByIdDeleteResponses];
export type WishlistsByIdGetData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        wishlist_id: number;
    };
    query?: never;
    url: '/wishlists/{wishlist_id}';
};
export type WishlistsByIdGetErrors = {
    401: {
        status?: number;
        title?: string;
        type?: string;
    };
    404: {
        [key: string]: unknown;
    };
    500: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type WishlistsByIdGetError = WishlistsByIdGetErrors[keyof WishlistsByIdGetErrors];
export type WishlistsByIdGetResponses = {
    200: {
        data?: WishlistFull;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type WishlistsByIdGetResponse = WishlistsByIdGetResponses[keyof WishlistsByIdGetResponses];
export type WishlistsByIdPutData = {
    body: WishlistPut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        wishlist_id: number;
    };
    query?: never;
    url: '/wishlists/{wishlist_id}';
};
export type WishlistsByIdPutErrors = {
    401: {
        status?: number;
        title?: string;
        type?: string;
    };
    500: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type WishlistsByIdPutError = WishlistsByIdPutErrors[keyof WishlistsByIdPutErrors];
export type WishlistsByIdPutResponses = {
    201: {
        data?: WishlistFull;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type WishlistsByIdPutResponse = WishlistsByIdPutResponses[keyof WishlistsByIdPutResponses];
export type WishlistsItemsByIdPostData = {
    body?: WishlistItemPost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        wishlist_id: number;
    };
    query?: never;
    url: '/wishlists/{wishlist_id}/items';
};
export type WishlistsItemsByIdPostErrors = {
    401: {
        status?: number;
        title?: string;
        type?: string;
    };
    404: unknown;
    500: unknown;
};
export type WishlistsItemsByIdPostError = WishlistsItemsByIdPostErrors[keyof WishlistsItemsByIdPostErrors];
export type WishlistsItemsByIdPostResponses = {
    201: {
        data?: WishlistFull;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type WishlistsItemsByIdPostResponse = WishlistsItemsByIdPostResponses[keyof WishlistsItemsByIdPostResponses];
