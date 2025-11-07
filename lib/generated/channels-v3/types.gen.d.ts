export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type ChannelId = number;
export type MetafieldBase = {
    id?: number;
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    resource_type?: 'category' | 'brand' | 'product' | 'variant';
    resource_id?: number;
    date_created?: string;
    date_modified?: string;
};
export type Metafield = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description: string;
    resource_type: 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
    readonly resource_id: number;
    id: number;
    date_created: string;
    date_modified: string;
    readonly owner_client_id?: string;
};
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponsePostPut = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponsePartialSuccessPostPut = {
    data?: Array<Metafield>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccessDelete = {
    data?: Array<number>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
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
export type Total = number;
export type Success = number;
export type Failed = number;
export type _Error = {
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
export type MetafieldBasePost = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetafieldPost = MetafieldBasePost & {
    resource_id: number;
};
export type MetafieldBasePut = {
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
};
export type MetafieldPut = MetafieldBasePut & {
    id: number;
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type PutCheckoutUrl = {
    url?: string;
};
export type ChannelIdForListing = number;
export type ListingId = number;
export type ProductId = number;
export type VariantId = number;
export type ExternalId = string;
export type IsListableFromUi = boolean;
export type IsVisible = boolean;
export type ChannelStatus = 'active' | 'prelaunch' | 'inactive' | 'connected' | 'disconnected' | 'archived' | 'deleted' | 'terminated';
export type ChannelName = string;
export type ChannelType = 'pos' | 'marketplace' | 'storefront' | 'marketing';
export type ChannelPlatform = string;
export type ChannelDateCreated = string;
export type ChannelDateModified = string;
export type IconUrl = string;
export type EnabledCurrencies = Array<string>;
export type DefaultCurrency = string;
export type ChannelProductName = string;
export type ChannelProductVariantName = string;
export type ChannelProductDescription = string;
export type ChannelProductVariantDescription = string;
export type ChannelListingDateCreated = string;
export type ChannelListingVariantDateCreated = string;
export type ChannelListingDateModified = string;
export type ChannelListingVariantDateModified = string;
export type ListingState = 'active' | 'disabled' | 'error' | 'pending' | 'pending_disable' | 'pending_delete' | 'partially_rejected' | 'queued' | 'rejected' | 'submitted' | 'deleted';
export type VariantState = 'active' | 'disabled' | 'error' | 'pending' | 'pending_disable' | 'pending_delete' | 'queued' | 'rejected' | 'submitted' | 'deleted';
export type CurrencyNotRequiredWithChannelId = {
    channel_id?: ChannelId;
    enabled_currencies?: EnabledCurrencies;
    default_currency?: DefaultCurrency;
};
export type CurrencyRequiredWithChannelId = {
    channel_id: ChannelId;
    enabled_currencies: EnabledCurrencies;
    default_currency: DefaultCurrency;
};
export type CurrencyRequiredWithoutChannelId = {
    enabled_currencies: EnabledCurrencies;
    default_currency: DefaultCurrency;
};
export type CreateChannelReq = {
    external_id?: ExternalId;
    is_listable_from_ui?: IsListableFromUi;
    is_visible?: IsVisible;
    status?: ChannelStatus;
    name: ChannelName;
    type: ChannelType;
    platform: ChannelPlatform;
};
export type UpdateChannelReq = {
    external_id?: ExternalId;
    is_listable_from_ui?: IsListableFromUi;
    is_visible?: IsVisible;
    name?: ChannelName;
    status?: ChannelStatus;
};
export type UpsertMultipleChannelsCurrencyAssignmentsReq = Array<CurrencyRequiredWithChannelId>;
export type CreateMultipleListingsReq = Array<UpsertListingWithoutListingIdReq>;
export type UpdateMultipleListingsReq = Array<UpsertListingWithListingIdReq>;
export type UpsertListingWithoutListingIdReq = {
    product_id: ProductId;
    external_id?: ExternalId;
    state: ListingState;
    name?: ChannelProductName;
    description?: ChannelProductDescription;
    variants: ChannelProductMultipleVariants;
};
export type UpsertListingWithListingIdReq = {
    listing_id: ListingId;
    product_id: ProductId;
    external_id?: ExternalId;
    state: ListingState;
    name?: ChannelProductName;
    description?: ChannelProductDescription;
    variants: ChannelProductMultipleVariants;
};
export type ChannelProductMultipleVariants = Array<ChannelProductVariantPartial>;
export type ChannelProductVariantPartial = {
    product_id: ProductId;
    variant_id: VariantId;
    external_id?: ExternalId;
    state: VariantState;
    name?: ChannelProductVariantName;
    description?: ChannelProductVariantDescription;
};
export type ChannelProductVariantFull = {
    channel_id?: ChannelIdForListing;
    product_id?: ProductId;
    variant_id?: VariantId;
    external_id?: ExternalId;
    state?: VariantState;
    name?: ChannelProductVariantName;
    description?: ChannelProductVariantDescription;
    date_created?: ChannelListingVariantDateCreated;
    date_modified?: ChannelListingVariantDateModified;
};
export type ChannelWithoutCurrencies = {
    id: ChannelId;
    external_id?: ExternalId;
    is_listable_from_ui?: IsListableFromUi;
    is_enabled?: boolean;
    is_visible?: IsVisible;
    status?: ChannelStatus;
    name: ChannelName;
    type?: ChannelType;
    platform?: ChannelPlatform;
    date_created?: ChannelDateCreated;
    date_modified?: ChannelDateModified;
    icon_url?: IconUrl;
};
export type ChannelWithCurrencies = {
    id?: ChannelId;
    external_id?: ExternalId;
    is_listable_from_ui?: IsListableFromUi;
    is_enabled?: boolean;
    is_visible?: IsVisible;
    status?: ChannelStatus;
    name?: ChannelName;
    type?: ChannelType;
    platform?: ChannelPlatform;
    date_created?: ChannelDateCreated;
    date_modified?: ChannelDateModified;
    icon_url?: IconUrl;
    currencies?: CurrencyNotRequiredWithChannelId;
};
export type ActiveTheme = {
    active_theme_uuid?: string;
    active_theme_configuration_uuid?: string;
    active_theme_version_uuid?: string;
    saved_theme_configuration_uuid?: string;
};
export type Listing = {
    channel_id?: ChannelIdForListing;
    listing_id?: ListingId;
    external_id?: ExternalId;
    product_id?: ProductId;
    state?: ListingState;
    name?: ChannelProductName;
    description?: ChannelProductDescription;
    date_created?: ChannelListingDateCreated;
    date_modified?: ChannelListingDateModified;
    variants?: Array<ChannelProductVariantFull>;
};
export type BigCommerceProtectedAppSections = Array<'overview' | 'storefront_settings' | 'localization' | 'carousel' | 'script_manager' | 'currencies' | 'payments' | 'checkout' | 'domains' | 'notifications' | 'social' | 'pages' | 'data_solutions'>;
export type ChannelMenusPost = {
    bigcommerce_protected_app_sections?: BigCommerceProtectedAppSections;
    custom_app_sections?: CustomAppSections;
};
export type CustomAppSections = Array<{
    title?: string;
    query_path?: string;
}>;
export type MetaWithFullPagination = {
    pagination?: PaginationFull;
};
export type MetaWithPartialPagination = {
    pagination?: PaginationPartial;
};
export type EmptyMeta = {
    [key: string]: unknown;
};
export type PaginationFull = {
    per_page?: number;
    total?: number;
    count?: number;
    total_pages?: number;
    current_page?: number;
    links?: {
        previous?: string;
        current?: string;
        next?: string;
    };
};
export type PaginationPartial = {
    count?: number;
    total?: number;
    links?: {
        previous?: string;
        current?: string;
        next?: string;
    };
    total_pages?: number;
};
export type Site = {
    id?: number;
    url?: string;
    channel_id?: number;
    created_at?: string;
    updated_at?: string;
    ssl_status?: 'dedicated' | 'shared';
    urls?: Array<Url>;
    is_checkout_url_customized?: boolean;
};
export type Url = {
    url?: string;
    type?: 'checkout' | 'primary' | 'canonical';
    created_at?: string;
    updated_at?: string;
};
export type SitePut = {
    url?: string;
};
export type SitePost = {
    url?: string;
    channel_id?: number;
};
export type SiteFull = {
    id?: number;
    url?: string;
    channel_id?: number;
    created_at?: string;
    updated_at?: string;
    routes?: Array<{
        id?: number;
        type?: 'product' | 'brand' | 'category' | 'page' | 'blog' | 'home' | 'cart' | 'checkout' | 'search' | 'account' | 'login' | 'returns' | 'static';
        matching?: string;
        route?: string;
    }>;
};
export type MetafieldPost2 = {
    namespace: string;
    key: string;
    value: string;
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type MetafieldPut2 = {
    namespace?: string;
    key?: string;
    value?: string;
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type MetafieldWritable = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description: string;
    resource_type: 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
    id: number;
    date_created: string;
    date_modified: string;
};
export type ErrorDetailWritable = {
    [key: string]: unknown;
};
export type EmptyMetaWritable = {
    [key: string]: unknown;
};
export type Accept = string;
export type ContentType = string;
export type PageParam = number;
export type MetafieldIdParam = number;
export type MetafieldKeyParam = string;
export type MetafieldKeyInParam = Array<string>;
export type MetafieldNamespaceParam = string;
export type MetafieldNamespaceInParam = Array<string>;
export type LimitParam = number;
export type DirectionParam = 'asc' | 'desc';
export type Include = 'currencies';
export type IncludeFieldsParamMetafields = Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified'>;
export type Available = boolean;
export type StatusIn = Array<'prelaunch' | 'active' | 'inactive' | 'connected' | 'disconnected' | 'archived' | 'deleted' | 'terminated'>;
export type TypeIn = Array<'marketplace' | 'marketing' | 'pos' | 'storefront'>;
export type PlatformIn = Array<string>;
export type DateCreated = string;
export type DateCreatedMin = string;
export type DateCreatedMax = string;
export type DateModified = string;
export type DateModifiedMin = string;
export type DateModifiedMax = string;
export type Limit = number;
export type Page = number;
export type After = number;
export type ProductIdIn = Array<number>;
export type ChannelIdPathParam = number;
export type ListingIdPathParam = number;
export type GetChannelsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        include?: 'currencies';
        available?: boolean;
        'status:in'?: Array<'prelaunch' | 'active' | 'inactive' | 'connected' | 'disconnected' | 'archived' | 'deleted' | 'terminated'>;
        'type:in'?: Array<'marketplace' | 'marketing' | 'pos' | 'storefront'>;
        'platform:in'?: Array<string>;
        date_created?: string;
        'date_created:min'?: string;
        'date_created:max'?: string;
        date_modified?: string;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
        limit?: number;
        page?: number;
    };
    url: '/channels';
};
export type GetChannelsErrors = {
    422: _Error;
};
export type GetChannelsError = GetChannelsErrors[keyof GetChannelsErrors];
export type GetChannelsResponses = {
    200: {
        data: Array<ChannelWithoutCurrencies>;
        meta: MetaWithFullPagination;
    };
};
export type GetChannelsResponse = GetChannelsResponses[keyof GetChannelsResponses];
export type CreateChannelData = {
    body: CreateChannelReq;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/channels';
};
export type CreateChannelErrors = {
    422: _Error;
};
export type CreateChannelError = CreateChannelErrors[keyof CreateChannelErrors];
export type CreateChannelResponses = {
    200: {
        data?: ChannelWithoutCurrencies;
        meta?: EmptyMeta;
    };
};
export type CreateChannelResponse = CreateChannelResponses[keyof CreateChannelResponses];
export type GetChannelData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: {
        include?: 'currencies';
    };
    url: '/channels/{channel_id}';
};
export type GetChannelErrors = {
    404: _Error;
};
export type GetChannelError = GetChannelErrors[keyof GetChannelErrors];
export type GetChannelResponses = {
    200: {
        data?: ChannelWithCurrencies;
        meta?: EmptyMeta;
    };
};
export type GetChannelResponse = GetChannelResponses[keyof GetChannelResponses];
export type UpdateChannelData = {
    body: UpdateChannelReq;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}';
};
export type UpdateChannelErrors = {
    404: _Error;
    409: _Error;
    422: _Error;
};
export type UpdateChannelError = UpdateChannelErrors[keyof UpdateChannelErrors];
export type UpdateChannelResponses = {
    200: {
        data?: ChannelWithoutCurrencies;
        meta?: EmptyMeta;
    };
};
export type UpdateChannelResponse = UpdateChannelResponses[keyof UpdateChannelResponses];
export type GetChannelActiveThemeData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/active-theme';
};
export type GetChannelActiveThemeErrors = {
    404: _Error;
};
export type GetChannelActiveThemeError = GetChannelActiveThemeErrors[keyof GetChannelActiveThemeErrors];
export type GetChannelActiveThemeResponses = {
    200: {
        data?: ActiveTheme;
        meta?: EmptyMeta;
    };
};
export type GetChannelActiveThemeResponse = GetChannelActiveThemeResponses[keyof GetChannelActiveThemeResponses];
export type GetAllCurrencyAssignmentsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/channels/currency-assignments';
};
export type GetAllCurrencyAssignmentsResponses = {
    200: {
        data?: Array<CurrencyNotRequiredWithChannelId>;
        meta?: EmptyMeta;
    };
};
export type GetAllCurrencyAssignmentsResponse = GetAllCurrencyAssignmentsResponses[keyof GetAllCurrencyAssignmentsResponses];
export type CreateMultipleChannelsCurrencyAssignmentsData = {
    body: UpsertMultipleChannelsCurrencyAssignmentsReq;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/channels/currency-assignments';
};
export type CreateMultipleChannelsCurrencyAssignmentsErrors = {
    422: _Error;
};
export type CreateMultipleChannelsCurrencyAssignmentsError = CreateMultipleChannelsCurrencyAssignmentsErrors[keyof CreateMultipleChannelsCurrencyAssignmentsErrors];
export type CreateMultipleChannelsCurrencyAssignmentsResponses = {
    200: {
        data?: Array<CurrencyNotRequiredWithChannelId>;
        meta?: EmptyMeta;
    };
};
export type CreateMultipleChannelsCurrencyAssignmentsResponse = CreateMultipleChannelsCurrencyAssignmentsResponses[keyof CreateMultipleChannelsCurrencyAssignmentsResponses];
export type UpdateMultipleChannelsCurrencyAssignmentsData = {
    body: UpsertMultipleChannelsCurrencyAssignmentsReq;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/channels/currency-assignments';
};
export type UpdateMultipleChannelsCurrencyAssignmentsErrors = {
    422: _Error;
};
export type UpdateMultipleChannelsCurrencyAssignmentsError = UpdateMultipleChannelsCurrencyAssignmentsErrors[keyof UpdateMultipleChannelsCurrencyAssignmentsErrors];
export type UpdateMultipleChannelsCurrencyAssignmentsResponses = {
    200: {
        data?: Array<CurrencyNotRequiredWithChannelId>;
        meta?: EmptyMeta;
    };
};
export type UpdateMultipleChannelsCurrencyAssignmentsResponse = UpdateMultipleChannelsCurrencyAssignmentsResponses[keyof UpdateMultipleChannelsCurrencyAssignmentsResponses];
export type DeleteSingleChannelCurrencyAssignmentsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/currency-assignments';
};
export type DeleteSingleChannelCurrencyAssignmentsErrors = {
    404: _Error;
};
export type DeleteSingleChannelCurrencyAssignmentsError = DeleteSingleChannelCurrencyAssignmentsErrors[keyof DeleteSingleChannelCurrencyAssignmentsErrors];
export type DeleteSingleChannelCurrencyAssignmentsResponses = {
    200: {
        data?: ChannelId;
        meta?: EmptyMeta;
    };
};
export type DeleteSingleChannelCurrencyAssignmentsResponse = DeleteSingleChannelCurrencyAssignmentsResponses[keyof DeleteSingleChannelCurrencyAssignmentsResponses];
export type GetSingleChannelCurrencyAssignmentsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/currency-assignments';
};
export type GetSingleChannelCurrencyAssignmentsErrors = {
    404: _Error;
};
export type GetSingleChannelCurrencyAssignmentsError = GetSingleChannelCurrencyAssignmentsErrors[keyof GetSingleChannelCurrencyAssignmentsErrors];
export type GetSingleChannelCurrencyAssignmentsResponses = {
    200: {
        data?: CurrencyNotRequiredWithChannelId;
        meta?: EmptyMeta;
    };
};
export type GetSingleChannelCurrencyAssignmentsResponse = GetSingleChannelCurrencyAssignmentsResponses[keyof GetSingleChannelCurrencyAssignmentsResponses];
export type CreateSingleChannelCurrencyAssignmentsData = {
    body: CurrencyRequiredWithoutChannelId;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/currency-assignments';
};
export type CreateSingleChannelCurrencyAssignmentsErrors = {
    422: _Error;
};
export type CreateSingleChannelCurrencyAssignmentsError = CreateSingleChannelCurrencyAssignmentsErrors[keyof CreateSingleChannelCurrencyAssignmentsErrors];
export type CreateSingleChannelCurrencyAssignmentsResponses = {
    200: {
        data?: CurrencyNotRequiredWithChannelId;
        meta?: EmptyMeta;
    };
};
export type CreateSingleChannelCurrencyAssignmentsResponse = CreateSingleChannelCurrencyAssignmentsResponses[keyof CreateSingleChannelCurrencyAssignmentsResponses];
export type UpdateSingleChannelCurrencyAssignmentsData = {
    body: CurrencyRequiredWithoutChannelId;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/currency-assignments';
};
export type UpdateSingleChannelCurrencyAssignmentsErrors = {
    422: _Error;
};
export type UpdateSingleChannelCurrencyAssignmentsError = UpdateSingleChannelCurrencyAssignmentsErrors[keyof UpdateSingleChannelCurrencyAssignmentsErrors];
export type UpdateSingleChannelCurrencyAssignmentsResponses = {
    200: {
        data?: CurrencyNotRequiredWithChannelId;
        meta?: EmptyMeta;
    };
};
export type UpdateSingleChannelCurrencyAssignmentsResponse = UpdateSingleChannelCurrencyAssignmentsResponses[keyof UpdateSingleChannelCurrencyAssignmentsResponses];
export type GetChannelListingsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: {
        limit?: number;
        after?: number;
        'product_id:in'?: Array<number>;
        date_created?: string;
        'date_created:min'?: string;
        'date_created:max'?: string;
        date_modified?: string;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
    };
    url: '/channels/{channel_id}/listings';
};
export type GetChannelListingsErrors = {
    400: _Error;
    422: _Error;
};
export type GetChannelListingsError = GetChannelListingsErrors[keyof GetChannelListingsErrors];
export type GetChannelListingsResponses = {
    200: {
        data?: Array<Listing>;
        meta?: MetaWithPartialPagination;
    };
};
export type GetChannelListingsResponse = GetChannelListingsResponses[keyof GetChannelListingsResponses];
export type CreateChannelListingsData = {
    body: CreateMultipleListingsReq;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/listings';
};
export type CreateChannelListingsErrors = {
    422: _Error;
};
export type CreateChannelListingsError = CreateChannelListingsErrors[keyof CreateChannelListingsErrors];
export type CreateChannelListingsResponses = {
    200: {
        data?: Array<Listing>;
        meta?: MetaWithPartialPagination;
    };
};
export type CreateChannelListingsResponse = CreateChannelListingsResponses[keyof CreateChannelListingsResponses];
export type UpdateChannelListingsData = {
    body: UpdateMultipleListingsReq;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/listings';
};
export type UpdateChannelListingsErrors = {
    422: _Error;
};
export type UpdateChannelListingsError = UpdateChannelListingsErrors[keyof UpdateChannelListingsErrors];
export type UpdateChannelListingsResponses = {
    200: {
        data?: Array<Listing>;
        meta?: MetaWithPartialPagination;
    };
};
export type UpdateChannelListingsResponse = UpdateChannelListingsResponses[keyof UpdateChannelListingsResponses];
export type GetChannelListingData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
        listing_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/listings/{listing_id}';
};
export type GetChannelListingErrors = {
    404: _Error;
};
export type GetChannelListingError = GetChannelListingErrors[keyof GetChannelListingErrors];
export type GetChannelListingResponses = {
    200: {
        data?: Listing;
        meta?: EmptyMeta;
    };
};
export type GetChannelListingResponse = GetChannelListingResponses[keyof GetChannelListingResponses];
export type DeleteCheckoutUrlData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/site/checkout-url';
};
export type DeleteCheckoutUrlResponses = {
    200: {
        data?: {
            [key: string]: unknown;
        };
        meta?: EmptyMeta;
    };
};
export type DeleteCheckoutUrlResponse = DeleteCheckoutUrlResponses[keyof DeleteCheckoutUrlResponses];
export type UpdateCheckoutUrlData = {
    body?: PutCheckoutUrl;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/site/checkout-url';
};
export type UpdateCheckoutUrlErrors = {
    422: {
        status?: number;
        title?: string;
        type?: string;
        errors?: {
            [key: string]: unknown;
        };
    };
};
export type UpdateCheckoutUrlError = UpdateCheckoutUrlErrors[keyof UpdateCheckoutUrlErrors];
export type UpdateCheckoutUrlResponses = {
    200: Site;
};
export type UpdateCheckoutUrlResponse = UpdateCheckoutUrlResponses[keyof UpdateCheckoutUrlResponses];
export type DeleteChannelSiteData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/site';
};
export type DeleteChannelSiteResponses = {
    200: {
        [key: string]: unknown;
    };
};
export type DeleteChannelSiteResponse = DeleteChannelSiteResponses[keyof DeleteChannelSiteResponses];
export type GetChannelSiteData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/site';
};
export type GetChannelSiteResponses = {
    200: {
        data?: Site;
        meta?: EmptyMeta;
    };
};
export type GetChannelSiteResponse = GetChannelSiteResponses[keyof GetChannelSiteResponses];
export type CreateChannelSiteData = {
    body?: SitePost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/site';
};
export type CreateChannelSiteResponses = {
    200: {
        data?: Site;
        meta?: EmptyMeta;
    };
};
export type CreateChannelSiteResponse = CreateChannelSiteResponses[keyof CreateChannelSiteResponses];
export type UpdateChannelSiteData = {
    body?: SitePut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/site';
};
export type UpdateChannelSiteResponses = {
    200: {
        data?: Site;
        meta?: EmptyMeta;
    };
};
export type UpdateChannelSiteResponse = UpdateChannelSiteResponses[keyof UpdateChannelSiteResponses];
export type DeleteChannelMenusData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/channel-menus';
};
export type DeleteChannelMenusResponses = {
    200: {
        data?: number;
        meta?: EmptyMeta;
    };
};
export type DeleteChannelMenusResponse = DeleteChannelMenusResponses[keyof DeleteChannelMenusResponses];
export type GetChannelMenusData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/channel-menus';
};
export type GetChannelMenusResponses = {
    200: {
        data?: {
            bigcommerce_protected_app_sections?: BigCommerceProtectedAppSections;
            custom_app_sections?: CustomAppSections;
        };
        meta?: EmptyMeta;
    };
};
export type GetChannelMenusResponse = GetChannelMenusResponses[keyof GetChannelMenusResponses];
export type CreateChannelMenusData = {
    body?: ChannelMenusPost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/channel-menus';
};
export type CreateChannelMenusErrors = {
    422: ErrorResponse;
};
export type CreateChannelMenusError = CreateChannelMenusErrors[keyof CreateChannelMenusErrors];
export type CreateChannelMenusResponses = {
    200: {
        data?: {
            bigcommerce_protected_app_sections?: BigCommerceProtectedAppSections;
            custom_app_sections?: CustomAppSections;
        };
        meta?: EmptyMeta;
    };
};
export type CreateChannelMenusResponse = CreateChannelMenusResponses[keyof CreateChannelMenusResponses];
export type GetChannelMetafieldsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
        key?: string;
        namespace?: string;
        direction?: 'asc' | 'desc';
    };
    url: '/channels/{channel_id}/metafields';
};
export type GetChannelMetafieldsResponses = {
    200: {
        id?: number;
        permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
        namespace?: string;
        key?: string;
        value?: string;
        description?: string;
        resource_type?: 'category' | 'brand' | 'product' | 'variant';
        resource_id?: number;
        date_created?: string;
        date_modified?: string;
    };
};
export type GetChannelMetafieldsResponse = GetChannelMetafieldsResponses[keyof GetChannelMetafieldsResponses];
export type CreateChannelMetafieldData = {
    body?: MetafieldPost2;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/metafields';
};
export type CreateChannelMetafieldErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    409: ErrorResponse;
    422: ErrorResponse;
};
export type CreateChannelMetafieldError = CreateChannelMetafieldErrors[keyof CreateChannelMetafieldErrors];
export type CreateChannelMetafieldResponses = {
    200: {
        id?: number;
        permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
        namespace?: string;
        key?: string;
        value?: string;
        description?: string;
        resource_type?: 'category' | 'brand' | 'product' | 'variant';
        resource_id?: number;
        date_created?: string;
        date_modified?: string;
    };
};
export type CreateChannelMetafieldResponse = CreateChannelMetafieldResponses[keyof CreateChannelMetafieldResponses];
export type DeleteChannelMetafieldData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
        metafield_id: string;
    };
    query?: never;
    url: '/channels/{channel_id}/metafields/{metafield_id}';
};
export type DeleteChannelMetafieldErrors = {
    404: NotFound;
};
export type DeleteChannelMetafieldError = DeleteChannelMetafieldErrors[keyof DeleteChannelMetafieldErrors];
export type DeleteChannelMetafieldResponses = {
    204: void;
};
export type DeleteChannelMetafieldResponse = DeleteChannelMetafieldResponses[keyof DeleteChannelMetafieldResponses];
export type GetChannelMetafieldData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
        metafield_id: string;
    };
    query?: never;
    url: '/channels/{channel_id}/metafields/{metafield_id}';
};
export type GetChannelMetafieldErrors = {
    404: NotFound;
};
export type GetChannelMetafieldError = GetChannelMetafieldErrors[keyof GetChannelMetafieldErrors];
export type GetChannelMetafieldResponses = {
    200: {
        id?: number;
        permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
        namespace?: string;
        key?: string;
        value?: string;
        description?: string;
        resource_type?: 'category' | 'brand' | 'product' | 'variant';
        resource_id?: number;
        date_created?: string;
        date_modified?: string;
    };
};
export type GetChannelMetafieldResponse = GetChannelMetafieldResponses[keyof GetChannelMetafieldResponses];
export type UpdateChannelMetafieldData = {
    body?: MetafieldPut2;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
        metafield_id: string;
    };
    query?: never;
    url: '/channels/{channel_id}/metafields/{metafield_id}';
};
export type UpdateChannelMetafieldErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    404: NotFound;
};
export type UpdateChannelMetafieldError = UpdateChannelMetafieldErrors[keyof UpdateChannelMetafieldErrors];
export type UpdateChannelMetafieldResponses = {
    200: {
        id?: number;
        permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
        namespace?: string;
        key?: string;
        value?: string;
        description?: string;
        resource_type?: 'category' | 'brand' | 'product' | 'variant';
        resource_id?: number;
        date_created?: string;
        date_modified?: string;
    };
};
export type UpdateChannelMetafieldResponse = UpdateChannelMetafieldResponses[keyof UpdateChannelMetafieldResponses];
export type DeleteChannelsMetafieldsData = {
    body?: Array<number>;
    path?: never;
    query?: never;
    url: '/channels/metafields';
};
export type DeleteChannelsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessDelete;
};
export type DeleteChannelsMetafieldsError = DeleteChannelsMetafieldsErrors[keyof DeleteChannelsMetafieldsErrors];
export type DeleteChannelsMetafieldsResponses = {
    200: MetaFieldCollectionDeleteResponseSuccess;
};
export type DeleteChannelsMetafieldsResponse = DeleteChannelsMetafieldsResponses[keyof DeleteChannelsMetafieldsResponses];
export type GetChannelsMetafieldsData = {
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
        include_fields?: Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified'>;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
        'date_created:min'?: string;
        'date_created:max'?: string;
    };
    url: '/channels/metafields';
};
export type GetChannelsMetafieldsResponses = {
    200: MetaFieldCollectionResponse;
};
export type GetChannelsMetafieldsResponse = GetChannelsMetafieldsResponses[keyof GetChannelsMetafieldsResponses];
export type CreateChannelsMetafieldsData = {
    body?: Array<MetafieldPost>;
    path?: never;
    query?: never;
    url: '/channels/metafields';
};
export type CreateChannelsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: ErrorResponse;
};
export type CreateChannelsMetafieldsError = CreateChannelsMetafieldsErrors[keyof CreateChannelsMetafieldsErrors];
export type CreateChannelsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type CreateChannelsMetafieldsResponse = CreateChannelsMetafieldsResponses[keyof CreateChannelsMetafieldsResponses];
export type UpdateChannelsMetafieldsData = {
    body?: Array<MetafieldPut>;
    path?: never;
    query?: never;
    url: '/channels/metafields';
};
export type UpdateChannelsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateChannelsMetafieldsError = UpdateChannelsMetafieldsErrors[keyof UpdateChannelsMetafieldsErrors];
export type UpdateChannelsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type UpdateChannelsMetafieldsResponse = UpdateChannelsMetafieldsResponses[keyof UpdateChannelsMetafieldsResponses];
