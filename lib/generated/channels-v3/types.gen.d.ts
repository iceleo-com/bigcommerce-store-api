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
export type ChannelConfigMeta = {
    app?: {
        id?: number;
        sections?: Array<{
            title?: string;
            query_path?: string;
        }>;
    };
};
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
    config_meta?: ChannelConfigMeta;
    external_id?: ExternalId;
    is_listable_from_ui?: IsListableFromUi;
    is_visible?: IsVisible;
    status?: ChannelStatus;
    name: ChannelName;
    type: ChannelType;
    platform: ChannelPlatform;
};
export type UpdateChannelReq = {
    config_meta?: ChannelConfigMeta;
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
    config_meta?: ChannelConfigMeta;
    id: ChannelId;
    external_id?: ExternalId;
    is_listable_from_ui?: IsListableFromUi;
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
    config_meta?: ChannelConfigMeta;
    id?: ChannelId;
    external_id?: ExternalId;
    is_listable_from_ui?: IsListableFromUi;
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
export type BigCommerceProtectedAppSections = Array<'storefront_settings' | 'social' | 'carousel' | 'domains' | 'currencies' | 'notifications'>;
export type ChannelMenusPost = {
    bigcommerce_protected_app_sections?: BigCommerceProtectedAppSections;
    custom_app_sections?: CustomAppSections;
};
export type CustomAppSections = Array<{
    title?: string;
    query_path?: string;
}>;
export type _Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
    };
};
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
    type?: 'primary' | 'canonical' | 'checkout';
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
export type MetafieldPost = {
    namespace: string;
    key: string;
    value: string;
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type MetafieldPut = {
    namespace?: string;
    key?: string;
    value?: string;
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type Accept = string;
export type ContentType = string;
export type PageParam = number;
export type MetafieldIdParam = number;
export type MetafieldKeyParam = string;
export type MetafieldNamespaceParam = string;
export type LimitParam = number;
export type DirectionParam = 'asc' | 'desc';
export type Include = 'currencies';
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
export type ListChannelsData = {
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
export type ListChannelsErrors = {
    422: _Error;
};
export type ListChannelsError = ListChannelsErrors[keyof ListChannelsErrors];
export type ListChannelsResponses = {
    200: {
        data: Array<ChannelWithoutCurrencies>;
        meta: MetaWithFullPagination;
    };
};
export type ListChannelsResponse = ListChannelsResponses[keyof ListChannelsResponses];
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
export type ListAllCurrencyAssignmentsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/channels/currency-assignments';
};
export type ListAllCurrencyAssignmentsResponses = {
    200: {
        data?: Array<CurrencyNotRequiredWithChannelId>;
        meta?: EmptyMeta;
    };
};
export type ListAllCurrencyAssignmentsResponse = ListAllCurrencyAssignmentsResponses[keyof ListAllCurrencyAssignmentsResponses];
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
export type ListChannelListingsData = {
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
export type ListChannelListingsErrors = {
    400: _Error;
    422: _Error;
};
export type ListChannelListingsError = ListChannelListingsErrors[keyof ListChannelListingsErrors];
export type ListChannelListingsResponses = {
    200: {
        data?: Array<Listing>;
        meta?: MetaWithPartialPagination;
    };
};
export type ListChannelListingsResponse = ListChannelListingsResponses[keyof ListChannelListingsResponses];
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
export type PutCheckoutUrlData = {
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
export type PutCheckoutUrlErrors = {
    422: {
        status?: number;
        title?: string;
        type?: string;
        errors?: {
            [key: string]: unknown;
        };
    };
};
export type PutCheckoutUrlError = PutCheckoutUrlErrors[keyof PutCheckoutUrlErrors];
export type PutCheckoutUrlResponses = {
    200: Site;
};
export type PutCheckoutUrlResponse = PutCheckoutUrlResponses[keyof PutCheckoutUrlResponses];
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
export type PostChannelSiteData = {
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
export type PostChannelSiteResponses = {
    200: {
        data?: Site;
        meta?: EmptyMeta;
    };
};
export type PostChannelSiteResponse = PostChannelSiteResponses[keyof PostChannelSiteResponses];
export type PutChannelSiteData = {
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
export type PutChannelSiteResponses = {
    200: {
        data?: Site;
        meta?: EmptyMeta;
    };
};
export type PutChannelSiteResponse = PutChannelSiteResponses[keyof PutChannelSiteResponses];
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
export type PostChannelMenusData = {
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
export type PostChannelMenusResponses = {
    200: {
        data?: {
            bigcommerce_protected_app_sections?: BigCommerceProtectedAppSections;
            custom_app_sections?: CustomAppSections;
        };
        meta?: EmptyMeta;
    };
};
export type PostChannelMenusResponse = PostChannelMenusResponses[keyof PostChannelMenusResponses];
export type GetChannelsChannelIdMetafieldsData = {
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
export type GetChannelsChannelIdMetafieldsResponses = {
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
export type GetChannelsChannelIdMetafieldsResponse = GetChannelsChannelIdMetafieldsResponses[keyof GetChannelsChannelIdMetafieldsResponses];
export type PostChannelsChannelIdMetafieldsData = {
    body?: MetafieldPost;
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
export type PostChannelsChannelIdMetafieldsResponses = {
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
export type PostChannelsChannelIdMetafieldsResponse = PostChannelsChannelIdMetafieldsResponses[keyof PostChannelsChannelIdMetafieldsResponses];
export type DeleteChannelsChannelIdMetafieldsMetafieldIdData = {
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
export type DeleteChannelsChannelIdMetafieldsMetafieldIdResponses = {
    204: void;
};
export type DeleteChannelsChannelIdMetafieldsMetafieldIdResponse = DeleteChannelsChannelIdMetafieldsMetafieldIdResponses[keyof DeleteChannelsChannelIdMetafieldsMetafieldIdResponses];
export type GetChannelsChannelIdMetafieldsMetafieldIdData = {
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
export type GetChannelsChannelIdMetafieldsMetafieldIdResponses = {
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
export type GetChannelsChannelIdMetafieldsMetafieldIdResponse = GetChannelsChannelIdMetafieldsMetafieldIdResponses[keyof GetChannelsChannelIdMetafieldsMetafieldIdResponses];
export type PutChannelsChannelIdMetafieldsMetafieldIdData = {
    body?: MetafieldPut;
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
export type PutChannelsChannelIdMetafieldsMetafieldIdResponses = {
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
export type PutChannelsChannelIdMetafieldsMetafieldIdResponse = PutChannelsChannelIdMetafieldsMetafieldIdResponses[keyof PutChannelsChannelIdMetafieldsMetafieldIdResponses];
