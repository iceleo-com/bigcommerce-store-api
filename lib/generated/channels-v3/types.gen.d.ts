export type ActiveTheme = {
    active_theme_uuid?: string;
    active_theme_configuration_uuid?: string;
    active_theme_version_uuid?: string;
    saved_theme_configuration_uuid?: string;
};
export type BigCommerceProtectedAppSections = Array<('overview' | 'storefront_settings' | 'localization' | 'carousel' | 'script_manager' | 'currencies' | 'payments' | 'checkout' | 'domains' | 'notifications' | 'social' | 'pages' | 'data_solutions')>;
export type channel_menus_Post = {
    bigcommerce_protected_app_sections?: BigCommerceProtectedAppSections;
    custom_app_sections?: CustomAppSections;
};
export type ChannelConfigMeta = {
    app?: {
        id?: number;
        sections?: Array<{
            title?: string;
            query_path?: string;
        }>;
    };
};
export type ChannelDateCreated = string;
export type ChannelDateModified = string;
export type ChannelId = number;
export type ChannelIdForListing = number;
export type ChannelListingDateCreated = string;
export type ChannelListingDateModified = string;
export type ChannelListingVariantDateCreated = string;
export type ChannelListingVariantDateModified = string;
export type ChannelName = string;
export type ChannelPlatform = string;
export type ChannelProductDescription = string;
export type ChannelProductMultipleVariants = Array<ChannelProductVariantPartial>;
export type ChannelProductName = string;
export type ChannelProductVariantDescription = string;
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
export type ChannelProductVariantName = string;
export type ChannelProductVariantPartial = {
    product_id: ProductId;
    variant_id: VariantId;
    external_id?: ExternalId;
    state: VariantState;
    name?: ChannelProductVariantName;
    description?: ChannelProductVariantDescription;
};
export type ChannelStatus = 'active' | 'prelaunch' | 'inactive' | 'connected' | 'disconnected' | 'archived' | 'deleted' | 'terminated';
export type ChannelType = 'pos' | 'marketplace' | 'storefront' | 'marketing';
export type ChannelWithCurrencies = {
    config_meta?: ChannelConfigMeta;
    id?: ChannelId;
    external_id?: ExternalId;
    is_listable_from_ui?: IsListableFromUI;
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
export type ChannelWithoutCurrencies = {
    config_meta?: ChannelConfigMeta;
    id: ChannelId;
    external_id?: ExternalId;
    is_listable_from_ui?: IsListableFromUI;
    is_visible?: IsVisible;
    status?: ChannelStatus;
    name: ChannelName;
    type?: ChannelType;
    platform?: ChannelPlatform;
    date_created?: ChannelDateCreated;
    date_modified?: ChannelDateModified;
    icon_url?: IconUrl;
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
    [key: string]: unknown;
};
export type CreateChannelReq = {
    config_meta?: ChannelConfigMeta;
    external_id?: ExternalId;
    is_listable_from_ui?: IsListableFromUI;
    is_visible?: IsVisible;
    status?: ChannelStatus;
    name: ChannelName;
    type: ChannelType;
    platform: ChannelPlatform;
};
export type CreateMultipleListingsReq = Array<UpsertListingWithoutListingIdReq>;
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
export type CustomAppSections = Array<{
    title?: string;
    query_path?: string;
}>;
export type DefaultCurrency = string;
export type EmptyMeta = {
    [key: string]: unknown;
};
export type EnabledCurrencies = Array<(string)>;
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
export type ExternalId = string;
export type Failed = number;
export type IconUrl = string;
export type IsListableFromUI = boolean;
export type IsVisible = boolean;
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
export type ListingId = number;
export type ListingState = 'active' | 'disabled' | 'error' | 'pending' | 'pending_disable' | 'pending_delete' | 'partially_rejected' | 'queued' | 'rejected' | 'submitted' | 'deleted';
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
export type permission_set = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type resource_type = 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
export type metafield_Base = {
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
export type resource_type2 = 'category' | 'brand' | 'product' | 'variant';
export type metafield_Post = {
    namespace: string;
    key: string;
    value: string;
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type metafield_Put = {
    namespace?: string;
    key?: string;
    value?: string;
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type MetafieldBase_Post = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetafieldBase_Put = {
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<(number)>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponse_POST_PUT = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponsePartialSuccess_DELETE = {
    data?: Array<(number)>;
    errors?: Array<Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccess_POST_PUT = {
    data?: Array<Metafield>;
    errors?: Array<Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetafieldPost = MetafieldBase_Post & {
    resource_id: number;
};
export type MetafieldPut = MetafieldBase_Put & {
    id: number;
};
export type MetaWithFullPagination = {
    pagination?: pagination_Full;
};
export type MetaWithPartialPagination = {
    pagination?: pagination_Partial;
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type pagination_Full = {
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
export type pagination_Partial = {
    count?: number;
    total?: number;
    links?: {
        previous?: string;
        current?: string;
        next?: string;
    };
    total_pages?: number;
};
export type ParameterAccept = string;
export type Parameterafter = number;
export type Parameteravailable = boolean;
export type Parameterchannel_id_path_param = number;
export type ParameterContentType = string;
export type Parameterdate_created = string;
export type Parameterdate_created_max = string;
export type Parameterdate_created_min = string;
export type Parameterdate_modified = string;
export type Parameterdate_modified_max = string;
export type Parameterdate_modified_min = string;
export type ParameterDirectionParam = 'asc' | 'desc';
export type Parameterinclude = 'currencies';
export type ParameterIncludeFieldsParamMetafields = Array<('resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified')>;
export type Parameterlimit = number;
export type ParameterLimitParam = number;
export type Parameterlisting_id_path_param = number;
export type ParameterMetafieldIdParam = number;
export type ParameterMetafieldKeyInParam = Array<(string)>;
export type ParameterMetafieldKeyParam = string;
export type ParameterMetafieldNamespaceInParam = Array<(string)>;
export type ParameterMetafieldNamespaceParam = string;
export type Parameterpage = number;
export type ParameterPageParam = number;
export type Parameterplatform_in = Array<(string)>;
export type Parameterproduct_id_in = Array<(number)>;
export type Parameterstatus_in = Array<('prelaunch' | 'active' | 'inactive' | 'connected' | 'disconnected' | 'archived' | 'deleted' | 'terminated')>;
export type Parametertype_in = Array<('marketplace' | 'marketing' | 'pos' | 'storefront')>;
export type ProductId = number;
export type PutCheckoutUrl = {
    url?: string;
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
export type ssl_status = 'dedicated' | 'shared';
export type site_Full = {
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
export type site_Post = {
    url?: string;
    channel_id?: number;
};
export type site_Put = {
    url?: string;
};
export type Success = number;
export type Total = number;
export type UpdateChannelReq = {
    config_meta?: ChannelConfigMeta;
    external_id?: ExternalId;
    is_listable_from_ui?: IsListableFromUI;
    is_visible?: IsVisible;
    name?: ChannelName;
    status?: ChannelStatus;
};
export type UpdateMultipleListingsReq = Array<UpsertListingWithListingIdReq>;
export type UpsertListingWithListingIdReq = {
    listing_id: ListingId;
    product_id: ProductId;
    external_id?: ExternalId;
    state: ListingState;
    name?: ChannelProductName;
    description?: ChannelProductDescription;
    variants: ChannelProductMultipleVariants;
};
export type UpsertListingWithoutListingIdReq = {
    product_id: ProductId;
    external_id?: ExternalId;
    state: ListingState;
    name?: ChannelProductName;
    description?: ChannelProductDescription;
    variants: ChannelProductMultipleVariants;
};
export type UpsertMultipleChannelsCurrencyAssignmentsReq = Array<CurrencyRequiredWithChannelId>;
export type Url = {
    url?: string;
    type?: 'checkout' | 'primary' | 'canonical';
    created_at?: string;
    updated_at?: string;
};
export type type = 'checkout' | 'primary' | 'canonical';
export type VariantId = number;
export type VariantState = 'active' | 'disabled' | 'error' | 'pending' | 'pending_disable' | 'pending_delete' | 'queued' | 'rejected' | 'submitted' | 'deleted';
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
export type GetChannelsData = {
    headers: {
        Accept: string;
    };
    query?: {
        available?: boolean;
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        include?: 'currencies';
        limit?: number;
        page?: number;
        'platform:in'?: Array<(string)>;
        'status:in'?: Array<('prelaunch' | 'active' | 'inactive' | 'connected' | 'disconnected' | 'archived' | 'deleted' | 'terminated')>;
        'type:in'?: Array<('marketplace' | 'marketing' | 'pos' | 'storefront')>;
    };
};
export type GetChannelsResponse = ({
    data: Array<ChannelWithoutCurrencies>;
    meta: MetaWithFullPagination;
});
export type GetChannelsError = (Error);
export type CreateChannelData = {
    body: CreateChannelReq;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateChannelResponse = ({
    data?: ChannelWithoutCurrencies;
    meta?: EmptyMeta;
});
export type CreateChannelError = (Error);
export type GetChannelData = {
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: {
        include?: 'currencies';
    };
};
export type GetChannelResponse = ({
    data?: ChannelWithCurrencies;
    meta?: EmptyMeta;
});
export type GetChannelError = (Error);
export type UpdateChannelData = {
    body: UpdateChannelReq;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
};
export type UpdateChannelResponse = ({
    data?: ChannelWithoutCurrencies;
    meta?: EmptyMeta;
});
export type UpdateChannelError = (Error);
export type GetChannelActiveThemeData = {
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
};
export type GetChannelActiveThemeResponse = ({
    data?: ActiveTheme;
    meta?: EmptyMeta;
});
export type GetChannelActiveThemeError = (Error);
export type GetAllCurrencyAssignmentsData = {
    headers: {
        Accept: string;
    };
};
export type GetAllCurrencyAssignmentsResponse = ({
    data?: Array<CurrencyNotRequiredWithChannelId>;
    meta?: EmptyMeta;
});
export type GetAllCurrencyAssignmentsError = unknown;
export type CreateMultipleChannelsCurrencyAssignmentsData = {
    body: UpsertMultipleChannelsCurrencyAssignmentsReq;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateMultipleChannelsCurrencyAssignmentsResponse = ({
    data?: Array<CurrencyNotRequiredWithChannelId>;
    meta?: EmptyMeta;
});
export type CreateMultipleChannelsCurrencyAssignmentsError = (Error);
export type UpdateMultipleChannelsCurrencyAssignmentsData = {
    body: UpsertMultipleChannelsCurrencyAssignmentsReq;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateMultipleChannelsCurrencyAssignmentsResponse = ({
    data?: Array<CurrencyNotRequiredWithChannelId>;
    meta?: EmptyMeta;
});
export type UpdateMultipleChannelsCurrencyAssignmentsError = (Error);
export type GetSingleChannelCurrencyAssignmentsData = {
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
};
export type GetSingleChannelCurrencyAssignmentsResponse = ({
    data?: CurrencyNotRequiredWithChannelId;
    meta?: EmptyMeta;
});
export type GetSingleChannelCurrencyAssignmentsError = (Error);
export type CreateSingleChannelCurrencyAssignmentsData = {
    body: CurrencyRequiredWithoutChannelId;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
};
export type CreateSingleChannelCurrencyAssignmentsResponse = ({
    data?: CurrencyNotRequiredWithChannelId;
    meta?: EmptyMeta;
});
export type CreateSingleChannelCurrencyAssignmentsError = (Error);
export type UpdateSingleChannelCurrencyAssignmentsData = {
    body: CurrencyRequiredWithoutChannelId;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
};
export type UpdateSingleChannelCurrencyAssignmentsResponse = ({
    data?: CurrencyNotRequiredWithChannelId;
    meta?: EmptyMeta;
});
export type UpdateSingleChannelCurrencyAssignmentsError = (Error);
export type DeleteSingleChannelCurrencyAssignmentsData = {
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
};
export type DeleteSingleChannelCurrencyAssignmentsResponse = ({
    data?: ChannelId;
    meta?: EmptyMeta;
});
export type DeleteSingleChannelCurrencyAssignmentsError = (Error);
export type GetChannelListingsData = {
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: {
        after?: number;
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        limit?: number;
        'product_id:in'?: Array<(number)>;
    };
};
export type GetChannelListingsResponse = ({
    data?: Array<Listing>;
    meta?: MetaWithPartialPagination;
});
export type GetChannelListingsError = (Error);
export type CreateChannelListingsData = {
    body: CreateMultipleListingsReq;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
};
export type CreateChannelListingsResponse = ({
    data?: Array<Listing>;
    meta?: MetaWithPartialPagination;
});
export type CreateChannelListingsError = (Error);
export type UpdateChannelListingsData = {
    body: UpdateMultipleListingsReq;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
};
export type UpdateChannelListingsResponse = ({
    data?: Array<Listing>;
    meta?: MetaWithPartialPagination;
});
export type UpdateChannelListingsError = (Error);
export type GetChannelListingData = {
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
        listing_id: number;
    };
};
export type GetChannelListingResponse = ({
    data?: Listing;
    meta?: EmptyMeta;
});
export type GetChannelListingError = (Error);
export type UpdateCheckoutUrlData = {
    body?: PutCheckoutUrl;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
};
export type UpdateCheckoutUrlResponse = (Site);
export type UpdateCheckoutUrlError = ({
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
    };
});
export type DeleteCheckoutUrlData = {
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
};
export type DeleteCheckoutUrlResponse = ({
    data?: {
        [key: string]: unknown;
    };
    meta?: EmptyMeta;
});
export type DeleteCheckoutUrlError = unknown;
export type GetChannelSiteData = {
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
};
export type GetChannelSiteResponse = ({
    data?: Site;
    meta?: EmptyMeta;
});
export type GetChannelSiteError = unknown;
export type UpdateChannelSiteData = {
    body?: site_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
};
export type UpdateChannelSiteResponse = ({
    data?: Site;
    meta?: EmptyMeta;
});
export type UpdateChannelSiteError = unknown;
export type CreateChannelSiteData = {
    body?: site_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
};
export type CreateChannelSiteResponse = ({
    data?: Site;
    meta?: EmptyMeta;
});
export type CreateChannelSiteError = unknown;
export type DeleteChannelSiteData = {
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
};
export type DeleteChannelSiteResponse = ({
    [key: string]: unknown;
});
export type DeleteChannelSiteError = unknown;
export type GetChannelMenusData = {
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
};
export type GetChannelMenusResponse = ({
    data?: {
        bigcommerce_protected_app_sections?: BigCommerceProtectedAppSections;
        custom_app_sections?: CustomAppSections;
    };
    meta?: EmptyMeta;
});
export type GetChannelMenusError = unknown;
export type CreateChannelMenusData = {
    body?: channel_menus_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
};
export type CreateChannelMenusResponse = ({
    data?: {
        bigcommerce_protected_app_sections?: BigCommerceProtectedAppSections;
        custom_app_sections?: CustomAppSections;
    };
    meta?: EmptyMeta;
});
export type CreateChannelMenusError = (ErrorResponse);
export type DeleteChannelMenusData = {
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
};
export type DeleteChannelMenusResponse = ({
    data?: number;
    meta?: EmptyMeta;
});
export type DeleteChannelMenusError = unknown;
export type GetChannelMetafieldsData = {
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: {
        direction?: 'asc' | 'desc';
        key?: string;
        limit?: number;
        namespace?: string;
        page?: number;
    };
};
export type GetChannelMetafieldsResponse = ({
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
});
export type GetChannelMetafieldsError = unknown;
export type CreateChannelMetafieldData = {
    body?: metafield_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
};
export type CreateChannelMetafieldResponse = ({
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
});
export type CreateChannelMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | ErrorResponse);
export type GetChannelMetafieldData = {
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
        metafield_id: string;
    };
};
export type GetChannelMetafieldResponse = ({
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
});
export type GetChannelMetafieldError = (NotFound);
export type UpdateChannelMetafieldData = {
    body?: metafield_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
        metafield_id: string;
    };
};
export type UpdateChannelMetafieldResponse = ({
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
});
export type UpdateChannelMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | NotFound);
export type DeleteChannelMetafieldData = {
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
        metafield_id: string;
    };
};
export type DeleteChannelMetafieldResponse = (void);
export type DeleteChannelMetafieldError = (NotFound);
export type GetChannelsMetafieldsData = {
    query?: {
        'date_created:max'?: string;
        'date_created:min'?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        direction?: 'asc' | 'desc';
        include_fields?: Array<('resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified')>;
        key?: string;
        'key:in'?: Array<(string)>;
        limit?: number;
        namespace?: string;
        'namespace:in'?: Array<(string)>;
        page?: number;
    };
};
export type GetChannelsMetafieldsResponse = (MetaFieldCollectionResponse);
export type GetChannelsMetafieldsError = unknown;
export type CreateChannelsMetafieldsData = {
    body?: Array<MetafieldPost>;
};
export type CreateChannelsMetafieldsResponse = (MetaFieldCollectionResponse_POST_PUT);
export type CreateChannelsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | ErrorResponse);
export type UpdateChannelsMetafieldsData = {
    body?: Array<MetafieldPut>;
};
export type UpdateChannelsMetafieldsResponse = (MetaFieldCollectionResponse_POST_PUT);
export type UpdateChannelsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type DeleteChannelsMetafieldsData = {
    body?: Array<(number)>;
};
export type DeleteChannelsMetafieldsResponse = (MetaFieldCollectionDeleteResponseSuccess);
export type DeleteChannelsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_DELETE);
