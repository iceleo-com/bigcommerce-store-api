export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type Pagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: {
        previous?: string;
        current?: string;
        next?: string;
    };
};
export type CursorPagination = {
    count?: number;
    per_page?: number;
    start_cursor?: string;
    end_cursor?: string;
    links?: {
        previous?: string;
        current?: string;
        next?: string;
    };
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
};
export type MetafieldResponse = {
    data?: Metafield;
    meta?: MetaCollectionOpen;
};
export type Metafield = MetafieldBase & {
    id?: string;
    date_created?: string;
    date_modified?: string;
    readonly owner_client_id?: string;
};
export type MetafieldBase = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    resource_type?: 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'store';
    readonly resource_id?: string;
};
export type MetafieldBasePostPut = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetaFieldCollectionResponse = {
    data?: Metafield;
    meta?: MetaCollectionOpen;
};
export type MetaFieldCollectionResponseBatch = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponseBatchPostPut = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccessPostPut = {
    data?: Array<Metafield>;
    errors?: _Error;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccessDelete = {
    data?: Array<number>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type _Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type WriteCollectionPartialSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type CollectionMeta = {
    pagination?: Pagination;
    cursor_pagination?: CursorPagination;
    [key: string]: unknown | Pagination | CursorPagination | undefined;
};
export type MetaCollectionOpen = {
    [key: string]: unknown;
};
export type MetafieldWritable = MetafieldBaseWritable & {
    id?: string;
    date_created?: string;
    date_modified?: string;
};
export type MetafieldBaseWritable = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    resource_type?: 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'store';
};
export type ErrorDetailWritable = {
    [key: string]: unknown;
};
export type MetaCollectionOpenWritable = {
    [key: string]: unknown;
};
export type IncludeFieldsParamMetafields = Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date modified'>;
export type DateCreatedMin = string;
export type DateCreatedMax = string;
export type DateModifiedMax = string;
export type DateModifiedMin = string;
export type BeforeCursorParam = string;
export type AfterCursorParam = string;
export type ContentType = string;
export type PageParam = number;
export type MetafieldIdParam = number;
export type MetafieldKeyParam = string;
export type MetafieldKeyInParam = Array<string>;
export type MetafieldNamespaceParam = string;
export type MetafieldNamespaceInParam = Array<string>;
export type LimitParam = number;
export type DirectionParam = 'asc' | 'desc';
export type Accept = string;
export type DeleteStoreMetafieldsData = {
    body?: Array<number>;
    path?: never;
    query?: never;
    url: '/store/metafields';
};
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
        include_fields?: Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date modified'>;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
        'date_created:min'?: string;
        'date_created:max'?: string;
        direction?: 'asc' | 'desc';
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
    body: Array<MetafieldBasePostPut>;
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
    body?: Array<MetafieldBasePostPut & {
        id: number;
    }>;
    path?: never;
    query?: never;
    url: '/store/metafields';
};
export type UpdateStoreMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
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
    204: void;
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
        'Content-Type'?: string;
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
