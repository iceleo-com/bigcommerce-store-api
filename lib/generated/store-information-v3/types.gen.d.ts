export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type StoreMetafieldsGetParametersIncludeFieldsSchemaItems = 'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date modified';
export type StoreMetafieldsGetParametersDirection = 'asc' | 'desc';
export type MetafieldBasePermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldBaseResourceType = 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'store';
export type Metafield = {
    permission_set: MetafieldBasePermissionSet;
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    resource_type?: MetafieldBaseResourceType;
    resource_id?: string;
    id?: string;
    date_created?: string;
    date_modified?: string;
    owner_client_id?: string;
};
export type PaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type Pagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: PaginationLinks;
};
export type CursorPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type CursorPagination = {
    count?: number;
    per_page?: number;
    start_cursor?: string;
    end_cursor?: string;
    links?: CursorPaginationLinks;
};
export type CollectionMeta = {
    pagination?: Pagination;
    cursor_pagination?: CursorPagination;
};
export type MetaFieldCollectionResponseBatch = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetafieldBasePostPutPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldBasePostPut = {
    permission_set: MetafieldBasePostPutPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionResponseBatchPostPut = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
export type _Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type WriteCollectionPartialSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionResponsePartialSuccessPostPut = {
    data?: Array<Metafield>;
    errors?: _Error;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type StoreMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type StoreMetafieldsPutRequestBodyContentApplicationJsonSchemaItems = {
    permission_set: StoreMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description?: string;
    id: number;
};
export type UpdateStoreMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccessDelete = {
    data?: Array<number>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaCollectionOpen = {
    [key: string]: unknown;
};
export type MetafieldResponse = {
    data?: Metafield;
    meta?: MetaCollectionOpen;
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
};
export type MetaFieldCollectionResponse = {
    data?: Metafield;
    meta?: MetaCollectionOpen;
};
export type DeleteStoreMetafieldsData = {
    body?: Array<number>;
    path?: never;
    query?: never;
    url: '/store/metafields';
};
export type DeleteStoreMetafieldsErrors = {
    422: MetaFieldCollectionResponsePartialSuccessDelete;
};
export type DeleteStoreMetafieldsError = DeleteStoreMetafieldsErrors[keyof DeleteStoreMetafieldsErrors];
export type DeleteStoreMetafieldsResponses = {
    200: MetaFieldCollectionDeleteResponseSuccess;
};
export type DeleteStoreMetafieldsResponse = DeleteStoreMetafieldsResponses[keyof DeleteStoreMetafieldsResponses];
export type GetStoreMetafieldsData = {
    body?: never;
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        key?: string;
        'key:in'?: Array<string>;
        namespace?: string;
        'namespace:in'?: Array<string>;
        include_fields?: Array<StoreMetafieldsGetParametersIncludeFieldsSchemaItems>;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
        'date_created:min'?: string;
        'date_created:max'?: string;
        direction?: StoreMetafieldsGetParametersDirection;
        before?: string;
        after?: string;
    };
    url: '/store/metafields';
};
export type GetStoreMetafieldsResponses = {
    200: MetaFieldCollectionResponseBatch;
};
export type GetStoreMetafieldsResponse = GetStoreMetafieldsResponses[keyof GetStoreMetafieldsResponses];
export type CreateStoresMetafieldsData = {
    body?: Array<MetafieldBasePostPut>;
    path?: never;
    query?: never;
    url: '/store/metafields';
};
export type CreateStoresMetafieldsErrors = {
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateStoresMetafieldsError = CreateStoresMetafieldsErrors[keyof CreateStoresMetafieldsErrors];
export type CreateStoresMetafieldsResponses = {
    200: MetaFieldCollectionResponseBatchPostPut;
};
export type CreateStoresMetafieldsResponse = CreateStoresMetafieldsResponses[keyof CreateStoresMetafieldsResponses];
export type UpdateStoreMetafieldsData = {
    body?: Array<StoreMetafieldsPutRequestBodyContentApplicationJsonSchemaItems>;
    path?: never;
    query?: never;
    url: '/store/metafields';
};
export type UpdateStoreMetafieldsErrors = {
    400: UpdateStoreMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateStoreMetafieldsError = UpdateStoreMetafieldsErrors[keyof UpdateStoreMetafieldsErrors];
export type UpdateStoreMetafieldsResponses = {
    200: MetaFieldCollectionResponseBatchPostPut;
};
export type UpdateStoreMetafieldsResponse = UpdateStoreMetafieldsResponses[keyof UpdateStoreMetafieldsResponses];
export type DeleteStoreMetafieldData = {
    body?: never;
    headers?: {
        Accept?: string;
    };
    path: {
        metafieldId: number;
    };
    query?: never;
    url: '/store/metafields/{metafieldId}';
};
export type DeleteStoreMetafieldErrors = {
    404: NotFound;
};
export type DeleteStoreMetafieldError = DeleteStoreMetafieldErrors[keyof DeleteStoreMetafieldErrors];
export type DeleteStoreMetafieldResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteStoreMetafieldResponse = DeleteStoreMetafieldResponses[keyof DeleteStoreMetafieldResponses];
export type GetStoreMetafieldData = {
    body?: never;
    headers?: {
        Accept?: string;
    };
    path: {
        metafieldId: number;
    };
    query?: never;
    url: '/store/metafields/{metafieldId}';
};
export type GetStoreMetafieldErrors = {
    404: NotFound;
};
export type GetStoreMetafieldError = GetStoreMetafieldErrors[keyof GetStoreMetafieldErrors];
export type GetStoreMetafieldResponses = {
    200: MetafieldResponse;
};
export type GetStoreMetafieldResponse = GetStoreMetafieldResponses[keyof GetStoreMetafieldResponses];
export type UpdateStoreMetafieldData = {
    body?: MetafieldBasePostPut;
    headers?: {
        Accept?: string;
    };
    path: {
        metafieldId: number;
    };
    query?: never;
    url: '/store/metafields/{metafieldId}';
};
export type UpdateStoreMetafieldErrors = {
    404: NotFound;
};
export type UpdateStoreMetafieldError = UpdateStoreMetafieldErrors[keyof UpdateStoreMetafieldErrors];
export type UpdateStoreMetafieldResponses = {
    200: MetaFieldCollectionResponse;
};
export type UpdateStoreMetafieldResponse = UpdateStoreMetafieldResponses[keyof UpdateStoreMetafieldResponses];
