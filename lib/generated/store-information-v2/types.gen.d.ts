export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2' | (string & {});
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: {
        [key: string]: unknown;
    };
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
    pagination?: {
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
    [key: string]: unknown | {
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
    } | undefined;
};
export type MetaCollectionOpen = {
    [key: string]: unknown;
};
export type StoreInformation = {
    id?: string;
    account_uuid?: string;
    domain?: string;
    secure_url?: string;
    control_panel_base_url?: string;
    status?: string;
    name?: string;
    first_name?: string;
    last_name?: string;
    address?: string;
    country?: string;
    country_code?: string;
    infrastructure_region?: string;
    phone?: string;
    admin_email?: string;
    order_email?: string;
    favicon_url?: string;
    timezone?: Timezone;
    language?: string;
    currency?: string;
    currency_symbol?: string;
    decimal_separator?: string;
    thousands_separator?: string;
    decimal_places?: number;
    currency_symbol_location?: string;
    weight_units?: string;
    dimension_units?: string;
    dimension_decimal_places?: number;
    dimension_decimal_token?: string;
    dimension_thousands_token?: string;
    plan_name?: string;
    plan_level?: string;
    plan_is_trial?: boolean;
    industry?: string;
    logo?: {
        url?: string;
    } | Array<unknown>;
    is_price_entered_with_tax?: boolean;
    store_id?: number;
    default_channel_id?: number;
    default_site_id?: number;
    active_comparison_modules?: Array<unknown>;
    features?: {
        stencil_enabled?: boolean;
        sitewidehttps_enabled?: boolean;
        facebook_catalog_id?: string;
        checkout_type?: 'optimized' | 'single' | 'single_customizable' | 'klarna';
        wishlists_enabled?: boolean;
        graphql_storefront_api_enabled?: boolean;
        shopper_consent_tracking_enabled?: boolean;
        multi_storefront_enabled?: boolean;
        storefront_limits?: {
            active?: number;
            total_including_inactive?: number;
        };
    };
};
export type Timezone = {
    name?: string;
    raw_offset?: number;
    dst_offset?: number;
    dst_correction?: boolean;
    date_format?: DateFormat;
};
export type DateFormat = {
    display?: string;
    export?: string;
    extended_display?: string;
};
export type TimeStampFull = {
    time?: number;
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
export type GetStoreInformationData = {
    body?: never;
    headers?: {
        Accept?: string;
    };
    path?: never;
    query?: never;
    url: '/store';
};
export type GetStoreInformationResponses = {
    200: StoreInformation;
};
export type GetStoreInformationResponse = GetStoreInformationResponses[keyof GetStoreInformationResponses];
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
        direction?: 'asc' | 'desc';
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
export type GetSystemTimestampData = {
    body?: never;
    headers?: {
        Accept?: string;
    };
    path?: never;
    query?: never;
    url: '/time';
};
export type GetSystemTimestampResponses = {
    200: TimeStampFull;
};
export type GetSystemTimestampResponse = GetSystemTimestampResponses[keyof GetSystemTimestampResponses];
