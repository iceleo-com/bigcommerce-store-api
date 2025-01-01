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
    [key: string]: unknown;
};
export type DateFormat = {
    display?: string;
    export?: string;
    extended_display?: string;
};
export type Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type ErrorDetail = {
    [key: string]: unknown;
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
export type metaCollection_open = {
    [key: string]: unknown;
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
export type permission_set = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type resource_type = 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'store';
export type MetafieldBase_Post_Put = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<(number)>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type MetaFieldCollectionResponse = {
    data?: Metafield;
    meta?: metaCollection_open;
};
export type MetaFieldCollectionResponse_Batch = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponse_Batch_POST_PUT = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccess_DELETE = {
    data?: Array<(number)>;
    errors?: Array<Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccess_POST_PUT = {
    data?: Array<Metafield>;
    errors?: Error;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetafieldResponse = {
    data?: Metafield;
    meta?: metaCollection_open;
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type ParameterDirectionParam = 'asc' | 'desc';
export type ParameterLimitParam = number;
export type ParameterMetafieldIdParam = number;
export type ParameterMetafieldKeyInParam = Array<(string)>;
export type ParameterMetafieldKeyParam = string;
export type ParameterMetafieldNamespaceInParam = Array<(string)>;
export type ParameterMetafieldNamespaceParam = string;
export type ParameterPageParam = number;
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
    logo?: ({
        url?: string;
    } | Array<unknown>);
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
export type checkout_type = 'optimized' | 'single' | 'single_customizable' | 'klarna';
export type timeStamp_Full = {
    time?: number;
};
export type Timezone = {
    name?: string;
    raw_offset?: number;
    dst_offset?: number;
    dst_correction?: boolean;
    date_format?: DateFormat;
};
export type WriteCollectionPartialSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type GetStoreInformationData = {
    headers?: {
        Accept?: string;
    };
};
export type GetStoreInformationResponse = (StoreInformation);
export type GetStoreInformationError = unknown;
export type GetStoreMetafieldsData = {
    query?: {
        direction?: 'asc' | 'desc';
        key?: string;
        'key:in'?: Array<(string)>;
        limit?: number;
        namespace?: string;
        'namespace:in'?: Array<(string)>;
        page?: number;
    };
};
export type GetStoreMetafieldsResponse = (MetaFieldCollectionResponse_Batch);
export type GetStoreMetafieldsError = unknown;
export type CreateStoresMetafieldsData = {
    body: Array<(MetafieldBase_Post_Put)>;
};
export type CreateStoresMetafieldsResponse = (MetaFieldCollectionResponse_Batch_POST_PUT);
export type CreateStoresMetafieldsError = (MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type UpdateStoreMetafieldsData = {
    body?: Array<(MetafieldBase_Post_Put & {
        id: number;
    })>;
};
export type UpdateStoreMetafieldsResponse = (MetaFieldCollectionResponse_Batch_POST_PUT);
export type UpdateStoreMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type DeleteStoreMetafieldsData = {
    body?: Array<(number)>;
};
export type DeleteStoreMetafieldsResponse = (MetaFieldCollectionDeleteResponseSuccess);
export type DeleteStoreMetafieldsError = unknown;
export type GetStoreMetafieldData = {
    headers?: {
        Accept?: string;
    };
    path: {
        metafieldId: number;
    };
};
export type GetStoreMetafieldResponse = (MetafieldResponse);
export type GetStoreMetafieldError = (NotFound);
export type UpdateStoreMetafieldData = {
    body?: MetafieldBase_Post_Put;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path: {
        metafieldId: number;
    };
};
export type UpdateStoreMetafieldResponse = (MetaFieldCollectionResponse);
export type UpdateStoreMetafieldError = (NotFound);
export type DeleteStoreMetafieldData = {
    headers?: {
        Accept?: string;
    };
    path: {
        metafieldId: number;
    };
};
export type DeleteStoreMetafieldResponse = (void);
export type DeleteStoreMetafieldError = (NotFound);
export type GetSystemTimestampData = {
    headers?: {
        Accept?: string;
    };
};
export type GetSystemTimestampResponse = (timeStamp_Full);
export type GetSystemTimestampError = unknown;
