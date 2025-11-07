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
export type WishlistIdPath = number;
export type ItemIdPath = number;
export type CustomerIdQuery = number;
export type PageQuery = number;
export type LimitQuery = number;
export type Accept = string;
export type ContentType = string;
export type GetWishlistsData = {
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
export type GetWishlistsErrors = {
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
export type GetWishlistsError = GetWishlistsErrors[keyof GetWishlistsErrors];
export type GetWishlistsResponses = {
    200: {
        data?: Array<WishlistFull>;
        meta?: MetaCollection;
    };
};
export type GetWishlistsResponse = GetWishlistsResponses[keyof GetWishlistsResponses];
export type CreateWishlistData = {
    body: WishlistPost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/wishlists';
};
export type CreateWishlistErrors = {
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
export type CreateWishlistError = CreateWishlistErrors[keyof CreateWishlistErrors];
export type CreateWishlistResponses = {
    201: {
        data?: WishlistFull;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type CreateWishlistResponse = CreateWishlistResponses[keyof CreateWishlistResponses];
export type DeleteWishlistItemData = {
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
export type DeleteWishlistItemErrors = {
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
export type DeleteWishlistItemError = DeleteWishlistItemErrors[keyof DeleteWishlistItemErrors];
export type DeleteWishlistItemResponses = {
    200: {
        data?: WishlistFull;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type DeleteWishlistItemResponse = DeleteWishlistItemResponses[keyof DeleteWishlistItemResponses];
export type DeleteWishlistData = {
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
export type DeleteWishlistErrors = {
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
export type DeleteWishlistError = DeleteWishlistErrors[keyof DeleteWishlistErrors];
export type DeleteWishlistResponses = {
    204: void;
};
export type DeleteWishlistResponse = DeleteWishlistResponses[keyof DeleteWishlistResponses];
export type GetWishlistData = {
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
export type GetWishlistErrors = {
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
export type GetWishlistError = GetWishlistErrors[keyof GetWishlistErrors];
export type GetWishlistResponses = {
    200: {
        data?: WishlistFull;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type GetWishlistResponse = GetWishlistResponses[keyof GetWishlistResponses];
export type UpdateWishlistData = {
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
export type UpdateWishlistErrors = {
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
export type UpdateWishlistError = UpdateWishlistErrors[keyof UpdateWishlistErrors];
export type UpdateWishlistResponses = {
    201: {
        data?: WishlistFull;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type UpdateWishlistResponse = UpdateWishlistResponses[keyof UpdateWishlistResponses];
export type AddWishlistItemData = {
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
export type AddWishlistItemErrors = {
    401: {
        status?: number;
        title?: string;
        type?: string;
    };
    404: unknown;
    500: unknown;
};
export type AddWishlistItemError = AddWishlistItemErrors[keyof AddWishlistItemErrors];
export type AddWishlistItemResponses = {
    201: {
        data?: WishlistFull;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type AddWishlistItemResponse = AddWishlistItemResponses[keyof AddWishlistItemResponses];
