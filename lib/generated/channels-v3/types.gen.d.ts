export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type ChannelsGetParametersInclude = 'currencies';
export type ChannelsGetParametersStatusInSchemaItems = 'prelaunch' | 'active' | 'inactive' | 'connected' | 'disconnected' | 'archived' | 'deleted' | 'terminated';
export type ChannelsGetParametersTypeInSchemaItems = 'marketplace' | 'marketing' | 'pos' | 'storefront';
export type ChannelId = number;
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
export type PaginationFullLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type PaginationFull = {
    per_page?: number;
    total?: number;
    count?: number;
    total_pages?: number;
    current_page?: number;
    links?: PaginationFullLinks;
};
export type MetaWithFullPagination = {
    pagination?: PaginationFull;
};
export type ChannelsGetChannelsResponse200 = {
    data: Array<ChannelWithoutCurrencies>;
    meta: MetaWithFullPagination;
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
export type CreateChannelReq = {
    external_id?: ExternalId;
    is_listable_from_ui?: IsListableFromUi;
    is_visible?: IsVisible;
    status?: ChannelStatus;
    name: ChannelName;
    type: ChannelType;
    platform: ChannelPlatform;
};
export type EmptyMeta = {
    [key: string]: unknown;
};
export type ChannelsCreateChannelResponse200 = {
    data?: ChannelWithoutCurrencies;
    meta?: EmptyMeta;
};
export type ChannelsChannelIdGetParametersInclude = 'currencies';
export type EnabledCurrencies = Array<string>;
export type DefaultCurrency = string;
export type CurrencyNotRequiredWithChannelId = {
    channel_id?: ChannelId;
    enabled_currencies?: EnabledCurrencies;
    default_currency?: DefaultCurrency;
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
    currencies: CurrencyNotRequiredWithChannelId | undefined;
};
export type ChannelsGetChannelResponse200 = {
    data?: ChannelWithCurrencies;
    meta?: EmptyMeta;
};
export type UpdateChannelReq = {
    external_id?: ExternalId;
    is_listable_from_ui?: IsListableFromUi;
    is_visible?: IsVisible;
    name?: ChannelName;
    status?: ChannelStatus;
};
export type ChannelsUpdateChannelResponse200 = {
    data?: ChannelWithoutCurrencies;
    meta?: EmptyMeta;
};
export type ActiveTheme = {
    active_theme_uuid?: string;
    active_theme_configuration_uuid?: string;
    active_theme_version_uuid?: string;
    saved_theme_configuration_uuid?: string;
};
export type ActiveThemeGetChannelActiveThemeResponse200 = {
    data?: ActiveTheme;
    meta?: EmptyMeta;
};
export type ChannelsMetafieldsGetParametersDirection = 'asc' | 'desc';
export type ChannelsMetafieldsGetParametersIncludeFieldsSchemaItems = 'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified';
export type MetafieldPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldResourceType = 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
export type Metafield = {
    permission_set: MetafieldPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description: string;
    resource_type: MetafieldResourceType;
    resource_id: number;
    id: number;
    date_created: string;
    date_modified: string;
    owner_client_id?: string;
};
export type CollectionMetaPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type CollectionMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: CollectionMetaPaginationLinks;
};
export type CollectionMeta = {
    pagination?: CollectionMetaPagination;
    cursor_pagination?: CursorPagination;
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
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetafieldBasePostPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldPost = {
    permission_set: MetafieldBasePostPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description?: string;
    resource_id: number;
};
export type MetaFieldCollectionResponsePostPut = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: CollectionMeta;
};
export type CreateChannelsMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type ErrorResponseErrors = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: ErrorResponseErrors;
};
export type MetafieldBasePutPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldPut = {
    permission_set?: MetafieldBasePutPermissionSet;
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    id: number;
};
export type UpdateChannelsMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type WriteCollectionPartialSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionResponsePartialSuccessPostPut = {
    data?: Array<Metafield>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type DeleteChannelsMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type MetaFieldCollectionResponsePartialSuccessDelete = {
    data?: Array<number>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type CurrencyAssignmentsGetAllCurrencyAssignmentsResponse200 = {
    data?: Array<CurrencyNotRequiredWithChannelId>;
    meta?: EmptyMeta;
};
export type CurrencyRequiredWithChannelId = {
    channel_id: ChannelId;
    enabled_currencies: EnabledCurrencies;
    default_currency: DefaultCurrency;
};
export type UpsertMultipleChannelsCurrencyAssignmentsReq = Array<CurrencyRequiredWithChannelId>;
export type CurrencyAssignmentsCreateMultipleChannelsCurrencyAssignmentsResponse200 = {
    data?: Array<CurrencyNotRequiredWithChannelId>;
    meta?: EmptyMeta;
};
export type CurrencyAssignmentsUpdateMultipleChannelsCurrencyAssignmentsResponse200 = {
    data?: Array<CurrencyNotRequiredWithChannelId>;
    meta?: EmptyMeta;
};
export type CurrencyAssignmentsGetSingleChannelCurrencyAssignmentsResponse200 = {
    data?: CurrencyNotRequiredWithChannelId;
    meta?: EmptyMeta;
};
export type CurrencyRequiredWithoutChannelId = {
    enabled_currencies: EnabledCurrencies;
    default_currency: DefaultCurrency;
};
export type CurrencyAssignmentsCreateSingleChannelCurrencyAssignmentsResponse200 = {
    data?: CurrencyNotRequiredWithChannelId;
    meta?: EmptyMeta;
};
export type CurrencyAssignmentsUpdateSingleChannelCurrencyAssignmentsResponse200 = {
    data?: CurrencyNotRequiredWithChannelId;
    meta?: EmptyMeta;
};
export type CurrencyAssignmentsDeleteSingleChannelCurrencyAssignmentsResponse200 = {
    data?: ChannelId;
    meta?: EmptyMeta;
};
export type ChannelIdForListing = number;
export type ListingId = number;
export type ProductId = number;
export type ListingState = 'active' | 'disabled' | 'error' | 'pending' | 'pending_disable' | 'pending_delete' | 'partially_rejected' | 'queued' | 'rejected' | 'submitted' | 'deleted';
export type ChannelProductName = string;
export type ChannelProductDescription = string;
export type ChannelListingDateCreated = string;
export type ChannelListingDateModified = string;
export type VariantId = number;
export type VariantState = 'active' | 'disabled' | 'error' | 'pending' | 'pending_disable' | 'pending_delete' | 'queued' | 'rejected' | 'submitted' | 'deleted';
export type ChannelProductVariantName = string;
export type ChannelProductVariantDescription = string;
export type ChannelListingVariantDateCreated = string;
export type ChannelListingVariantDateModified = string;
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
export type PaginationPartialLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type PaginationPartial = {
    count?: number;
    total?: number;
    links?: PaginationPartialLinks;
    total_pages?: number;
};
export type MetaWithPartialPagination = {
    pagination?: PaginationPartial;
};
export type ListingsGetChannelListingsResponse200 = {
    data?: Array<Listing>;
    meta?: MetaWithPartialPagination;
};
export type ChannelProductVariantPartial = {
    product_id: ProductId;
    variant_id: VariantId;
    external_id?: ExternalId;
    state: VariantState;
    name?: ChannelProductVariantName;
    description?: ChannelProductVariantDescription;
};
export type ChannelProductMultipleVariants = Array<ChannelProductVariantPartial>;
export type UpsertListingWithoutListingIdReq = {
    product_id: ProductId;
    external_id?: ExternalId;
    state: ListingState;
    name?: ChannelProductName;
    description?: ChannelProductDescription;
    variants: ChannelProductMultipleVariants;
};
export type CreateMultipleListingsReq = Array<UpsertListingWithoutListingIdReq>;
export type ListingsCreateChannelListingsResponse200 = {
    data?: Array<Listing>;
    meta?: MetaWithPartialPagination;
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
export type UpdateMultipleListingsReq = Array<UpsertListingWithListingIdReq>;
export type ListingsUpdateChannelListingsResponse200 = {
    data?: Array<Listing>;
    meta?: MetaWithPartialPagination;
};
export type ListingsGetChannelListingResponse200 = {
    data?: Listing;
    meta?: EmptyMeta;
};
export type BigCommerceProtectedAppSectionsItems = 'overview' | 'storefront_settings' | 'localization' | 'carousel' | 'script_manager' | 'currencies' | 'payments' | 'checkout' | 'domains' | 'notifications' | 'social' | 'pages' | 'data_solutions';
export type BigCommerceProtectedAppSections = Array<BigCommerceProtectedAppSectionsItems>;
export type CustomAppSectionsItems = {
    title?: string;
    query_path?: string;
};
export type CustomAppSections = Array<CustomAppSectionsItems>;
export type ChannelsChannelIdChannelMenusGetResponsesContentApplicationJsonSchemaData = {
    bigcommerce_protected_app_sections?: BigCommerceProtectedAppSections;
    custom_app_sections?: CustomAppSections;
    protected_app_section_customization?: {
        [key: string]: unknown;
    };
};
export type MenusGetChannelMenusResponse200 = {
    data?: ChannelsChannelIdChannelMenusGetResponsesContentApplicationJsonSchemaData;
    meta?: EmptyMeta;
};
export type ChannelMenusPost = {
    bigcommerce_protected_app_sections?: BigCommerceProtectedAppSections;
    custom_app_sections?: CustomAppSections;
};
export type ChannelsChannelIdChannelMenusPostResponsesContentApplicationJsonSchemaData = {
    bigcommerce_protected_app_sections?: BigCommerceProtectedAppSections;
    custom_app_sections?: CustomAppSections;
};
export type MenusCreateChannelMenusResponse200 = {
    data?: ChannelsChannelIdChannelMenusPostResponsesContentApplicationJsonSchemaData;
    meta?: EmptyMeta;
};
export type MenusDeleteChannelMenusResponse200 = {
    data?: number;
    meta?: EmptyMeta;
};
export type ChannelsChannelIdMetafieldsGetParametersDirection = 'asc' | 'desc';
export type MetafieldBasePermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldBaseResourceType = 'category' | 'brand' | 'product' | 'variant';
export type MetafieldBase = {
    id?: number;
    permission_set?: MetafieldBasePermissionSet;
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    resource_type?: MetafieldBaseResourceType;
    resource_id?: number;
    date_created?: string;
    date_modified?: string;
};
export type MetafieldsGetChannelMetafieldsResponse200 = {
    data?: Array<MetafieldBase>;
    meta?: CollectionMeta;
};
export type MetafieldPostPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldPost2 = {
    namespace: string;
    key: string;
    value: string;
    permission_set: MetafieldPostPermissionSet;
    description?: string;
};
export type MetafieldsCreateChannelMetafieldResponse200 = {
    data?: Metafield;
    meta?: EmptyMeta;
};
export type CreateChannelMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type MetafieldsGetChannelMetafieldResponse200 = {
    data?: Metafield;
    meta?: EmptyMeta;
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type MetafieldPutPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldPut2 = {
    namespace?: string;
    key?: string;
    value?: string;
    permission_set?: MetafieldPutPermissionSet;
    description?: string;
};
export type MetafieldsUpdateChannelMetafieldResponse200 = {
    data?: Metafield;
    meta?: EmptyMeta;
};
export type UpdateChannelMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type SiteSslStatus = 'dedicated' | 'shared';
export type UrlType = 'checkout' | 'primary' | 'canonical';
export type Url = {
    url?: string;
    type?: UrlType;
    created_at?: string;
    updated_at?: string;
};
export type Site = {
    id?: number;
    url?: string;
    channel_id?: number;
    created_at?: string;
    updated_at?: string;
    ssl_status: SiteSslStatus | undefined;
    urls?: Array<Url>;
    is_checkout_url_customized?: boolean;
};
export type SiteGetChannelSiteResponse200 = {
    data?: Site;
    meta?: EmptyMeta;
};
export type SitePost = {
    url?: string;
    channel_id?: number;
};
export type SiteCreateChannelSiteResponse200 = {
    data?: Site;
    meta?: EmptyMeta;
};
export type SitePut = {
    url?: string;
};
export type SiteUpdateChannelSiteResponse200 = {
    data?: Site;
    meta?: EmptyMeta;
};
export type SiteDeleteChannelSiteResponse200 = {
    [key: string]: unknown;
};
export type PutCheckoutUrl = {
    url?: string;
};
export type ChannelsChannelIdSiteCheckoutUrlPutResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type UpdateCheckoutUrlRequestUnprocessableEntityError = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ChannelsChannelIdSiteCheckoutUrlPutResponsesContentApplicationJsonSchemaErrors;
};
export type ChannelsChannelIdSiteCheckoutUrlDeleteResponsesContentApplicationJsonSchemaData = {
    [key: string]: unknown;
};
export type SiteCheckoutUrlDeleteCheckoutUrlResponse200 = {
    data?: ChannelsChannelIdSiteCheckoutUrlDeleteResponsesContentApplicationJsonSchemaData;
    meta?: EmptyMeta;
};
export type GetChannelsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        include?: ChannelsGetParametersInclude;
        available?: boolean;
        'status:in'?: Array<ChannelsGetParametersStatusInSchemaItems>;
        'type:in'?: Array<ChannelsGetParametersTypeInSchemaItems>;
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
    200: ChannelsGetChannelsResponse200;
};
export type GetChannelsResponse = GetChannelsResponses[keyof GetChannelsResponses];
export type CreateChannelData = {
    body?: CreateChannelReq;
    headers: {
        Accept: string;
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
    200: ChannelsCreateChannelResponse200;
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
        include?: ChannelsChannelIdGetParametersInclude;
    };
    url: '/channels/{channel_id}';
};
export type GetChannelErrors = {
    404: _Error;
};
export type GetChannelError = GetChannelErrors[keyof GetChannelErrors];
export type GetChannelResponses = {
    200: ChannelsGetChannelResponse200;
};
export type GetChannelResponse = GetChannelResponses[keyof GetChannelResponses];
export type UpdateChannelData = {
    body?: UpdateChannelReq;
    headers: {
        Accept: string;
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
    200: ChannelsUpdateChannelResponse200;
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
    200: ActiveThemeGetChannelActiveThemeResponse200;
};
export type GetChannelActiveThemeResponse = GetChannelActiveThemeResponses[keyof GetChannelActiveThemeResponses];
export type DeleteChannelsMetafieldsData = {
    body?: Array<number>;
    path?: never;
    query?: never;
    url: '/channels/metafields';
};
export type DeleteChannelsMetafieldsErrors = {
    400: DeleteChannelsMetafieldsRequestBadRequestError;
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
        direction?: ChannelsMetafieldsGetParametersDirection;
        include_fields?: Array<ChannelsMetafieldsGetParametersIncludeFieldsSchemaItems>;
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
    400: CreateChannelsMetafieldsRequestBadRequestError;
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
    400: UpdateChannelsMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateChannelsMetafieldsError = UpdateChannelsMetafieldsErrors[keyof UpdateChannelsMetafieldsErrors];
export type UpdateChannelsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type UpdateChannelsMetafieldsResponse = UpdateChannelsMetafieldsResponses[keyof UpdateChannelsMetafieldsResponses];
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
    200: CurrencyAssignmentsGetAllCurrencyAssignmentsResponse200;
};
export type GetAllCurrencyAssignmentsResponse = GetAllCurrencyAssignmentsResponses[keyof GetAllCurrencyAssignmentsResponses];
export type CreateMultipleChannelsCurrencyAssignmentsData = {
    body?: UpsertMultipleChannelsCurrencyAssignmentsReq;
    headers: {
        Accept: string;
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
    200: CurrencyAssignmentsCreateMultipleChannelsCurrencyAssignmentsResponse200;
};
export type CreateMultipleChannelsCurrencyAssignmentsResponse = CreateMultipleChannelsCurrencyAssignmentsResponses[keyof CreateMultipleChannelsCurrencyAssignmentsResponses];
export type UpdateMultipleChannelsCurrencyAssignmentsData = {
    body?: UpsertMultipleChannelsCurrencyAssignmentsReq;
    headers: {
        Accept: string;
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
    200: CurrencyAssignmentsUpdateMultipleChannelsCurrencyAssignmentsResponse200;
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
    200: CurrencyAssignmentsDeleteSingleChannelCurrencyAssignmentsResponse200;
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
    200: CurrencyAssignmentsGetSingleChannelCurrencyAssignmentsResponse200;
};
export type GetSingleChannelCurrencyAssignmentsResponse = GetSingleChannelCurrencyAssignmentsResponses[keyof GetSingleChannelCurrencyAssignmentsResponses];
export type CreateSingleChannelCurrencyAssignmentsData = {
    body?: CurrencyRequiredWithoutChannelId;
    headers: {
        Accept: string;
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
    200: CurrencyAssignmentsCreateSingleChannelCurrencyAssignmentsResponse200;
};
export type CreateSingleChannelCurrencyAssignmentsResponse = CreateSingleChannelCurrencyAssignmentsResponses[keyof CreateSingleChannelCurrencyAssignmentsResponses];
export type UpdateSingleChannelCurrencyAssignmentsData = {
    body?: CurrencyRequiredWithoutChannelId;
    headers: {
        Accept: string;
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
    200: CurrencyAssignmentsUpdateSingleChannelCurrencyAssignmentsResponse200;
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
    200: ListingsGetChannelListingsResponse200;
};
export type GetChannelListingsResponse = GetChannelListingsResponses[keyof GetChannelListingsResponses];
export type CreateChannelListingsData = {
    body?: CreateMultipleListingsReq;
    headers: {
        Accept: string;
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
    200: ListingsCreateChannelListingsResponse200;
};
export type CreateChannelListingsResponse = CreateChannelListingsResponses[keyof CreateChannelListingsResponses];
export type UpdateChannelListingsData = {
    body?: UpdateMultipleListingsReq;
    headers: {
        Accept: string;
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
    200: ListingsUpdateChannelListingsResponse200;
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
    200: ListingsGetChannelListingResponse200;
};
export type GetChannelListingResponse = GetChannelListingResponses[keyof GetChannelListingResponses];
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
    200: MenusDeleteChannelMenusResponse200;
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
    200: MenusGetChannelMenusResponse200;
};
export type GetChannelMenusResponse = GetChannelMenusResponses[keyof GetChannelMenusResponses];
export type CreateChannelMenusData = {
    body?: ChannelMenusPost;
    headers: {
        Accept: string;
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
    200: MenusCreateChannelMenusResponse200;
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
        direction?: ChannelsChannelIdMetafieldsGetParametersDirection;
    };
    url: '/channels/{channel_id}/metafields';
};
export type GetChannelMetafieldsResponses = {
    200: MetafieldsGetChannelMetafieldsResponse200;
};
export type GetChannelMetafieldsResponse = GetChannelMetafieldsResponses[keyof GetChannelMetafieldsResponses];
export type CreateChannelMetafieldData = {
    body?: MetafieldPost2;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/metafields';
};
export type CreateChannelMetafieldErrors = {
    400: CreateChannelMetafieldRequestBadRequestError;
    409: ErrorResponse;
    422: ErrorResponse;
};
export type CreateChannelMetafieldError = CreateChannelMetafieldErrors[keyof CreateChannelMetafieldErrors];
export type CreateChannelMetafieldResponses = {
    200: MetafieldsCreateChannelMetafieldResponse200;
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
    204: {
        [key: string]: unknown;
    };
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
    200: MetafieldsGetChannelMetafieldResponse200;
};
export type GetChannelMetafieldResponse = GetChannelMetafieldResponses[keyof GetChannelMetafieldResponses];
export type UpdateChannelMetafieldData = {
    body?: MetafieldPut2;
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
export type UpdateChannelMetafieldErrors = {
    400: UpdateChannelMetafieldRequestBadRequestError;
    404: NotFound;
};
export type UpdateChannelMetafieldError = UpdateChannelMetafieldErrors[keyof UpdateChannelMetafieldErrors];
export type UpdateChannelMetafieldResponses = {
    200: MetafieldsUpdateChannelMetafieldResponse200;
};
export type UpdateChannelMetafieldResponse = UpdateChannelMetafieldResponses[keyof UpdateChannelMetafieldResponses];
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
    200: SiteDeleteChannelSiteResponse200;
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
    200: SiteGetChannelSiteResponse200;
};
export type GetChannelSiteResponse = GetChannelSiteResponses[keyof GetChannelSiteResponses];
export type CreateChannelSiteData = {
    body?: SitePost;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/site';
};
export type CreateChannelSiteResponses = {
    200: SiteCreateChannelSiteResponse200;
};
export type CreateChannelSiteResponse = CreateChannelSiteResponses[keyof CreateChannelSiteResponses];
export type UpdateChannelSiteData = {
    body?: SitePut;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/site';
};
export type UpdateChannelSiteResponses = {
    200: SiteUpdateChannelSiteResponse200;
};
export type UpdateChannelSiteResponse = UpdateChannelSiteResponses[keyof UpdateChannelSiteResponses];
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
    200: SiteCheckoutUrlDeleteCheckoutUrlResponse200;
};
export type DeleteCheckoutUrlResponse = DeleteCheckoutUrlResponses[keyof DeleteCheckoutUrlResponses];
export type UpdateCheckoutUrlData = {
    body?: PutCheckoutUrl;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/channels/{channel_id}/site/checkout-url';
};
export type UpdateCheckoutUrlErrors = {
    422: UpdateCheckoutUrlRequestUnprocessableEntityError;
};
export type UpdateCheckoutUrlError = UpdateCheckoutUrlErrors[keyof UpdateCheckoutUrlErrors];
export type UpdateCheckoutUrlResponses = {
    200: Site;
};
export type UpdateCheckoutUrlResponse = UpdateCheckoutUrlResponses[keyof UpdateCheckoutUrlResponses];
