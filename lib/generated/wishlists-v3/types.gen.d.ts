export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type WishlistItemFull = {
    id?: number;
    product_id?: number;
    variant_id?: number;
};
export type WishlistFull = {
    id?: number;
    customer_id?: number;
    name?: string;
    is_public?: boolean;
    token?: string;
    items?: Array<WishlistItemFull>;
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
export type WishlistsGetWishlistsResponse200 = {
    data?: Array<WishlistFull>;
    meta?: MetaCollection;
};
export type GetWishlistsRequestUnauthorizedError = {
    status?: number;
    title?: string;
    type?: string;
};
export type GetWishlistsRequestInternalServerError = {
    status?: number;
    title?: string;
    type?: string;
};
export type WishlistPostItemsItems = {
    product_id?: number;
    variant_id?: number;
};
export type WishlistPost = {
    customer_id: number;
    is_public?: boolean;
    name?: string;
    items?: Array<WishlistPostItemsItems>;
};
export type WishlistsPostResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type WishlistsCreateWishlistResponse201 = {
    data?: WishlistFull;
    meta?: WishlistsPostResponsesContentApplicationJsonSchemaMeta;
};
export type CreateWishlistRequestUnauthorizedError = {
    status?: number;
    title?: string;
    type?: string;
};
export type CreateWishlistRequestInternalServerError = {
    status?: number;
    title?: string;
    type?: string;
};
export type WishlistsWishlistIdGetResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type WishlistsGetWishlistResponse200 = {
    data?: WishlistFull;
    meta?: WishlistsWishlistIdGetResponsesContentApplicationJsonSchemaMeta;
};
export type GetWishlistRequestUnauthorizedError = {
    status?: number;
    title?: string;
    type?: string;
};
export type GetWishlistRequestNotFoundError = {
    [key: string]: unknown;
};
export type GetWishlistRequestInternalServerError = {
    status?: number;
    title?: string;
    type?: string;
};
export type WishlistPutItemsItems = {
    id?: number;
    product_id?: number;
    variant_id?: number;
};
export type WishlistPut = {
    customer_id: number;
    is_public?: boolean;
    name?: string;
    items: Array<WishlistPutItemsItems>;
};
export type WishlistsWishlistIdPutResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type WishlistsUpdateWishlistResponse201 = {
    data?: WishlistFull;
    meta?: WishlistsWishlistIdPutResponsesContentApplicationJsonSchemaMeta;
};
export type UpdateWishlistRequestUnauthorizedError = {
    status?: number;
    title?: string;
    type?: string;
};
export type UpdateWishlistRequestInternalServerError = {
    status?: number;
    title?: string;
    type?: string;
};
export type DeleteWishlistRequestUnauthorizedError = {
    status?: number;
    title?: string;
    type?: string;
};
export type DeleteWishlistRequestInternalServerError = {
    status?: number;
    title?: string;
    type?: string;
};
export type WishlistsWishlistIdItemsItemIdDeleteResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type WishlistsItemsDeleteWishlistItemResponse200 = {
    data?: WishlistFull;
    meta?: WishlistsWishlistIdItemsItemIdDeleteResponsesContentApplicationJsonSchemaMeta;
};
export type DeleteWishlistItemRequestUnauthorizedError = {
    status?: number;
    title?: string;
    type?: string;
};
export type DeleteWishlistItemRequestNotFoundError = {
    [key: string]: unknown;
};
export type DeleteWishlistItemRequestInternalServerError = {
    status?: number;
    title?: string;
    type?: string;
};
export type WishlistItemPostItemsItems = {
    product_id?: number;
    variant_id?: number;
};
export type WishlistItemPost = {
    items?: Array<WishlistItemPostItemsItems>;
};
export type WishlistsWishlistIdItemsPostResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type WishlistsItemsAddWishlistItemResponse201 = {
    data?: WishlistFull;
    meta?: WishlistsWishlistIdItemsPostResponsesContentApplicationJsonSchemaMeta;
};
export type AddWishlistItemRequestUnauthorizedError = {
    status?: number;
    title?: string;
    type?: string;
};
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
    401: GetWishlistsRequestUnauthorizedError;
    500: GetWishlistsRequestInternalServerError;
};
export type GetWishlistsError = GetWishlistsErrors[keyof GetWishlistsErrors];
export type GetWishlistsResponses = {
    200: WishlistsGetWishlistsResponse200;
};
export type GetWishlistsResponse = GetWishlistsResponses[keyof GetWishlistsResponses];
export type CreateWishlistData = {
    body?: WishlistPost;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/wishlists';
};
export type CreateWishlistErrors = {
    401: CreateWishlistRequestUnauthorizedError;
    500: CreateWishlistRequestInternalServerError;
};
export type CreateWishlistError = CreateWishlistErrors[keyof CreateWishlistErrors];
export type CreateWishlistResponses = {
    201: WishlistsCreateWishlistResponse201;
};
export type CreateWishlistResponse = CreateWishlistResponses[keyof CreateWishlistResponses];
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
    401: DeleteWishlistRequestUnauthorizedError;
    500: DeleteWishlistRequestInternalServerError;
};
export type DeleteWishlistError = DeleteWishlistErrors[keyof DeleteWishlistErrors];
export type DeleteWishlistResponses = {
    204: {
        [key: string]: unknown;
    };
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
    401: GetWishlistRequestUnauthorizedError;
    404: GetWishlistRequestNotFoundError;
    500: GetWishlistRequestInternalServerError;
};
export type GetWishlistError = GetWishlistErrors[keyof GetWishlistErrors];
export type GetWishlistResponses = {
    200: WishlistsGetWishlistResponse200;
};
export type GetWishlistResponse = GetWishlistResponses[keyof GetWishlistResponses];
export type UpdateWishlistData = {
    body?: WishlistPut;
    headers: {
        Accept: string;
    };
    path: {
        wishlist_id: number;
    };
    query?: never;
    url: '/wishlists/{wishlist_id}';
};
export type UpdateWishlistErrors = {
    401: UpdateWishlistRequestUnauthorizedError;
    500: UpdateWishlistRequestInternalServerError;
};
export type UpdateWishlistError = UpdateWishlistErrors[keyof UpdateWishlistErrors];
export type UpdateWishlistResponses = {
    201: WishlistsUpdateWishlistResponse201;
};
export type UpdateWishlistResponse = UpdateWishlistResponses[keyof UpdateWishlistResponses];
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
    401: DeleteWishlistItemRequestUnauthorizedError;
    404: DeleteWishlistItemRequestNotFoundError;
    500: DeleteWishlistItemRequestInternalServerError;
};
export type DeleteWishlistItemError = DeleteWishlistItemErrors[keyof DeleteWishlistItemErrors];
export type DeleteWishlistItemResponses = {
    200: WishlistsItemsDeleteWishlistItemResponse200;
};
export type DeleteWishlistItemResponse = DeleteWishlistItemResponses[keyof DeleteWishlistItemResponses];
export type AddWishlistItemData = {
    body?: WishlistItemPost;
    headers: {
        Accept: string;
    };
    path: {
        wishlist_id: number;
    };
    query?: never;
    url: '/wishlists/{wishlist_id}/items';
};
export type AddWishlistItemErrors = {
    401: AddWishlistItemRequestUnauthorizedError;
};
export type AddWishlistItemError = AddWishlistItemErrors[keyof AddWishlistItemErrors];
export type AddWishlistItemResponses = {
    201: WishlistsItemsAddWishlistItemResponse201;
};
export type AddWishlistItemResponse = AddWishlistItemResponses[keyof AddWishlistItemResponses];
