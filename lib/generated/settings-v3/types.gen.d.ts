export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type AnalyticsProvider = {
    id?: number;
    channel_id?: number;
    name?: string;
    code?: string;
    enabled?: boolean;
    data_tag_enabled?: boolean;
    version?: number;
    api_secret?: string;
};
export type AnalyticsProviders = Array<AnalyticsProvider>;
export type MetaOpen = {
    [key: string]: unknown;
};
export type AnalyticsGetAnalyticsProvidersResponse200 = {
    data?: AnalyticsProviders;
    meta?: MetaOpen;
};
export type _Error = {
    code: string;
    message?: string;
};
export type ErrorResponse400 = {
    schema?: _Error;
};
export type ErrorResponse404 = {
    schema?: _Error;
};
export type ErrorResponse409 = {
    schema?: _Error;
};
export type ErrorResponse422 = {
    schema?: _Error;
};
export type CatalogSettings = {
    auto_approve_reviews?: boolean;
    enable_product_comparisons?: boolean;
};
export type CatalogGetSettingsCatalogResponse200 = {
    data?: CatalogSettings;
    meta?: MetaOpen;
};
export type CatalogUpdateSettingsCatalogResponse200 = {
    data?: CatalogSettings;
    meta?: MetaOpen;
};
export type EnabledTransactionalEmails = {
    abandoned_cart_email?: boolean;
    account_details_changed_email?: boolean;
    combined_order_status_email?: boolean;
    createaccount_email?: boolean;
    createguestaccount_email?: boolean;
    giftcertificate_email?: boolean;
    invoice_email?: boolean;
    ordermessage_notification?: boolean;
    order_ready_for_pickup?: boolean;
    product_review_email?: boolean;
    guest_order_access_email?: boolean;
    return_confirmation_email?: boolean;
    return_statuschange_email?: boolean;
    return_created_email?: boolean;
    return_cancelled_email?: boolean;
    return_updated_email?: boolean;
    return_resolved_email?: boolean;
};
export type EmailStatusesGetSettingsEmailStatusesResponse200 = {
    data?: EnabledTransactionalEmails;
    meta?: MetaOpen;
};
export type EmailStatusesUpdateSettingsEmailStatusesResponse200 = {
    data?: EnabledTransactionalEmails;
    meta?: MetaOpen;
};
export type InventorySettingsProductOutOfStockBehavior = 'do_nothing' | 'hide_product' | 'hide_product_and_accessible' | 'hide_product_and_redirect';
export type InventorySettingsOptionOutOfStockBehavior = 'do_nothing' | 'hide_option' | 'label_option';
export type InventorySettingsUpdateStockBehavior = 'order_placed' | 'order_completed_or_shipped';
export type InventorySettingsStockLevelDisplay = 'dont_show' | 'show' | 'show_when_low';
export type InventorySettings = {
    product_out_of_stock_behavior?: InventorySettingsProductOutOfStockBehavior;
    option_out_of_stock_behavior?: InventorySettingsOptionOutOfStockBehavior;
    update_stock_behavior?: InventorySettingsUpdateStockBehavior;
    edit_order_stock_adjustment?: boolean;
    refund_order_stock_adjustment?: boolean;
    stock_level_display?: InventorySettingsStockLevelDisplay;
    default_out_of_stock_message?: string;
    hide_in_product_filtering?: boolean;
    show_pre_order_stock_levels?: boolean;
    show_out_of_stock_message?: boolean;
    show_quantity_on_backorder?: boolean;
    show_quantity_on_hand?: boolean;
    show_backorder_message?: boolean;
    show_backorder_availability_prompt?: boolean;
    backorder_availability_prompt?: string;
    show_default_shipping_expectation_prompt?: boolean;
    default_shipping_expectation_prompt?: string;
};
export type InventoryGetSettingsInventoryResponse200 = {
    data?: InventorySettings;
    meta?: MetaOpen;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
    errors?: DetailedErrors;
};
export type InventoryUpdateSettingsInventoryResponse200 = {
    data?: InventorySettings;
    meta?: MetaOpen;
};
export type InventoryNotificationsSettings = {
    low_stock_notification_address?: Array<string>;
    out_of_stock_notification_address?: Array<string>;
};
export type InventoryNotificationsGetSettingsInventoryNotificationsResponse200 = {
    data?: InventoryNotificationsSettings;
    meta?: MetaOpen;
};
export type InventoryNotificationsUpdateSettingsInventoryNotificationsResponse200 = {
    [key: string]: unknown;
};
export type LogoSettingsType = 'image' | 'text';
export type LogoSettings = {
    favicon_url?: string;
    logo_image_url?: string;
    logo_text?: string;
    type?: LogoSettingsType;
};
export type LogoGetSettingsLogoResponse200 = {
    data?: LogoSettings;
    meta?: MetaOpen;
};
export type LogoSettingsUpdateType = 'image' | 'text';
export type LogoSettingsUpdate = {
    logo_text?: string;
    type?: LogoSettingsUpdateType;
};
export type LogoUpdateSettingsLogoResponse200 = {
    data?: LogoSettings;
    meta?: MetaOpen;
};
export type EnabledProductFilterItemsToShow = 5 | 10 | 15 | '5' | '10' | '15';
export type EnabledProductFilterSortBy = 'alpha' | 'option_values' | 'item_count';
export type EnabledProductFilterType = 'product';
export type EnabledProductFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    display_product_count?: boolean;
    id?: string;
    is_enabled?: boolean;
    items_to_show?: EnabledProductFilterItemsToShow;
    sort_by?: EnabledProductFilterSortBy;
    type?: EnabledProductFilterType;
    facet_id?: number | null;
    facet?: string;
};
export type EnabledPriceFilterType = 'price';
export type EnabledPriceFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    id?: string;
    is_enabled?: boolean;
    type?: EnabledPriceFilterType;
    facet_id?: number | null;
    facet?: string;
};
export type EnabledCategoryFilterItemsToShow = 5 | 10 | 15 | '5' | '10' | '15';
export type EnabledCategoryFilterType = 'category';
export type EnabledCategoryFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    display_product_count?: boolean;
    id?: string;
    is_enabled?: boolean;
    items_to_show?: EnabledCategoryFilterItemsToShow;
    type?: EnabledCategoryFilterType;
    facet_id?: number | null;
    facet?: string;
};
export type EnabledBrandFilterItemsToShow = 5 | 10 | 15 | '5' | '10' | '15';
export type EnabledBrandFilterSortBy = 'alpha' | 'item_count';
export type EnabledBrandFilterType = 'brand';
export type EnabledBrandFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    display_product_count?: boolean;
    id?: string;
    is_enabled?: boolean;
    items_to_show?: EnabledBrandFilterItemsToShow;
    sort_by?: EnabledBrandFilterSortBy;
    type?: EnabledBrandFilterType;
    facet_id?: number | null;
    facet?: string;
};
export type EnabledRatingFilterType = 'rating';
export type EnabledRatingFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    id?: string;
    is_enabled?: boolean;
    type?: EnabledRatingFilterType;
    facet_id?: number | null;
    facet?: string;
};
export type EnabledMiscFilterType = 'other';
export type EnabledMiscFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    display_product_count?: boolean;
    id?: string;
    is_enabled?: boolean;
    show_free_shipping_filter?: boolean;
    show_in_stock_filter?: boolean;
    show_is_featured_filter?: boolean;
    show_product_count?: boolean;
    type?: EnabledMiscFilterType;
    facet_id?: number | null;
    facet?: string;
};
export type ConfiguredFilter = EnabledProductFilter | EnabledPriceFilter | EnabledCategoryFilter | EnabledBrandFilter | EnabledRatingFilter | EnabledMiscFilter;
export type ConfiguredFilters = Array<ConfiguredFilter>;
export type EnabledMiscFilterResponse = Omit<EnabledMiscFilter, 'show_product_count'> & {
    show_product_count: boolean | undefined;
};
export type ConfiguredFiltersResponse = Array<EnabledProductFilter | EnabledPriceFilter | EnabledCategoryFilter | EnabledBrandFilter | EnabledRatingFilter | EnabledMiscFilterResponse>;
export type SearchFiltersGetSettingsEnabledSearchFiltersResponse200 = {
    data?: ConfiguredFiltersResponse;
    meta?: MetaOpen;
};
export type SearchFiltersUpdateSettingsEnabledSearchFiltersResponse200 = {
    data?: ConfiguredFiltersResponse;
    meta?: MetaOpen;
};
export type AvailableNormalFilterType = 'category' | 'brand' | 'rating' | 'product';
export type AvailableNormalFilter = {
    id?: string;
    name?: string;
    product_count?: number;
    type?: AvailableNormalFilterType;
};
export type AvailablePriceFilterType = 'price';
export type AvailablePriceFilter = {
    id?: string;
    name?: string;
    price_range_max?: number;
    price_range_min?: number;
    type?: AvailablePriceFilterType;
};
export type AvailableOtherFilterType = 'other';
export type AvailableOtherFilter = {
    id?: string;
    name?: string;
    type?: AvailableOtherFilterType;
};
export type AvailableFilter = AvailableNormalFilter | AvailablePriceFilter | AvailableOtherFilter;
export type SearchFiltersGetSettingsAvailableFiltersResponse200 = {
    data?: Array<AvailableFilter>;
    meta?: MetaOpen;
};
export type SearchFilterOverrideContextIdentifier = {
    category_id?: number;
    channel_id?: number;
};
export type ConfiguredFiltersOverride = {
    context?: SearchFilterOverrideContextIdentifier;
    data?: ConfiguredFilters;
};
export type MetaPaginationObjectPaginationLinks = {
    current?: string;
    next?: string;
};
export type MetaPaginationObjectPagination = {
    count?: number;
    current_page?: number;
    links?: MetaPaginationObjectPaginationLinks;
    per_page?: number;
    total?: number;
    total_pages?: number;
};
export type MetaPaginationObject = {
    pagination?: MetaPaginationObjectPagination;
};
export type SearchFiltersGetSettingsFiltersContextsResponse200 = {
    data?: Array<ConfiguredFiltersOverride>;
    meta?: MetaPaginationObject;
};
export type SearchFiltersUpsertSettingsFiltersContextsResponse200 = {
    data?: Array<ConfiguredFiltersOverride>;
    meta?: MetaOpen;
};
export type LocaleShopperLanguageSelectionMethod = 'browser' | 'default_shopper_language';
export type Locale = {
    default_shopper_language: string;
    shopper_language_selection_method?: LocaleShopperLanguageSelectionMethod;
    store_country?: string;
};
export type StoreLocaleGetSettingsLocaleResponse200 = {
    data?: Locale;
    meta?: MetaOpen;
};
export type StoreLocaleUpdateSettingsLocaleResponse200 = {
    data?: Locale;
    meta?: MetaOpen;
};
export type AddressTypeEnumValues = 'Home Office' | 'Commercial Office' | 'Retail' | 'Warehouse';
export type StoreProfile = {
    store_address?: string;
    store_address_type?: AddressTypeEnumValues;
    store_email?: string;
    store_name?: string;
    store_phone?: string;
    pending_confirmation_email?: string | null;
};
export type StoreProfileGetSettingsStoreProfileResponse200 = {
    data?: StoreProfile;
    meta?: MetaOpen;
};
export type StoreProfileUpdateSettingsStoreProfileResponse200 = {
    data?: StoreProfile;
    meta?: MetaOpen;
};
export type ProductSortEnumValues = 'featured' | 'bestselling' | 'newest' | 'alphaasc' | 'alphadesc' | 'pricedesc' | 'priceasc' | 'avgcustomerreview' | 'relevance';
export type CategoryListingModeEnumValues = 'current_category_only' | 'child_categories' | 'child_categories_if_category_empty';
export type StorefrontCategorySettings = {
    category_tree_depth?: number;
    default_product_sort?: ProductSortEnumValues;
    listing_mode?: CategoryListingModeEnumValues;
};
export type StorefrontCategoryGetSettingsStorefrontCategoryResponse200 = {
    data?: StorefrontCategorySettings;
    meta?: MetaOpen;
};
export type StorefrontCategoryUpdateSettingsStorefrontCategoryResponse200 = {
    data?: StorefrontCategorySettings;
    meta?: MetaOpen;
};
export type SettingsStorefrontCategoryPutResponsesContentApplicationJsonSchemaErrors = {
    ''?: string;
};
export type UpdateSettingsStorefrontCategoryRequestUnprocessableEntityError = {
    errors?: SettingsStorefrontCategoryPutResponsesContentApplicationJsonSchemaErrors;
    status?: number;
    title?: string;
    type?: string;
};
export type StorefrontProductSettingsShowBreadcrumbsProductPages = 'show_one' | 'show_none';
export type StorefrontProductSettings = {
    show_product_price?: boolean;
    show_product_sku?: boolean;
    show_product_weight?: boolean;
    show_product_brand?: boolean;
    show_product_shipping?: boolean;
    show_product_rating?: boolean;
    show_add_to_cart_link?: boolean;
    default_preorder_message?: string;
    show_breadcrumbs_product_pages?: StorefrontProductSettingsShowBreadcrumbsProductPages;
    show_add_to_cart_qty_box?: boolean;
    show_add_to_wishlist?: boolean;
    hide_price_from_guests?: boolean;
};
export type StorefrontProductGetSettingsStorefrontProductResponse200 = {
    data?: StorefrontProductSettings;
    meta?: MetaOpen;
};
export type StorefrontProductUpdateSettingsStorefrontProductResponse200 = {
    data?: StorefrontProductSettings;
    meta?: MetaOpen;
};
export type SettingsStorefrontProductPutResponsesContentApplicationJsonSchemaErrors = {
    ''?: string;
};
export type UpdateSettingsStorefrontProductRequestUnprocessableEntityError = {
    errors?: SettingsStorefrontProductPutResponsesContentApplicationJsonSchemaErrors;
    status?: number;
    title?: string;
    type?: string;
};
export type RobotsTxtSettings = {
    robots_txt_ssl?: string;
};
export type StorefrontRobotstxtGetSettingsRobotsTxtResponse200 = {
    data?: RobotsTxtSettings;
    meta?: MetaOpen;
};
export type StorefrontRobotstxtUpdateSettingsRobotsTxtResponse200 = {
    data?: RobotsTxtSettings;
    meta?: MetaOpen;
};
export type ContentSortEnumValues = 'relevance' | 'alphaasc' | 'alphadesc';
export type StorefrontSearchSettings = {
    content_product_sort: ContentSortEnumValues;
    default_product_sort: ProductSortEnumValues;
    product_filtering_enabled: boolean;
    search_suggest: boolean;
};
export type StorefrontSearchGetSettingsStorefrontSearchResponse200 = {
    data?: StorefrontSearchSettings;
    meta?: MetaOpen;
};
export type StorefrontSearchUpdateSettingsStorefrontSearchResponse200 = {
    data?: StorefrontSearchSettings;
    meta?: MetaOpen;
};
export type StorefrontSecuritySettingsCspHeader = {
    enabled?: boolean;
    header_value?: string;
};
export type HstsMaxAgeEnumValues = 'zero_seconds' | 'five_minutes' | 'one_year';
export type StorefrontSecuritySettingsHsts = {
    enabled?: boolean;
    include_preload?: boolean;
    include_subdomains?: boolean;
    max_age?: HstsMaxAgeEnumValues;
};
export type StorefrontSecuritySettingsXFrameOptionsHeaderSetting = 'deny' | 'same_origin' | 'allow_from_url';
export type StorefrontSecuritySettingsXFrameOptionsHeader = {
    allowed_url?: string;
    enabled?: boolean;
    setting?: StorefrontSecuritySettingsXFrameOptionsHeaderSetting;
};
export type StorefrontSecuritySettings = {
    csp_header?: StorefrontSecuritySettingsCspHeader;
    hsts?: StorefrontSecuritySettingsHsts;
    sitewide_https_enabled?: boolean;
    x_frame_options_header?: StorefrontSecuritySettingsXFrameOptionsHeader;
};
export type StorefrontSecurityGetSettingsStorefrontSecurityResponse200 = {
    data?: StorefrontSecuritySettings;
    meta?: MetaOpen;
};
export type StorefrontSecurityUpdateSettingsStorefrontSecurityResponse200 = {
    data?: StorefrontSecuritySettings;
    meta?: MetaOpen;
};
export type SeoSettingsWwwRedirect = 'www' | 'no-www' | 'none';
export type SeoSettings = {
    meta_description?: string;
    meta_keywords?: string;
    page_title?: string;
    www_redirect?: SeoSettingsWwwRedirect;
};
export type StorefrontSeoGetSettingsStorefrontSeoResponse200 = {
    data?: SeoSettings;
    meta?: MetaOpen;
};
export type StorefrontSeoUpdateSettingsStorefrontSeoResponse200 = {
    data?: SeoSettings;
    meta?: MetaOpen;
};
export type SettingsStorefrontSeoPutResponsesContentApplicationJsonSchemaErrors = {
    ''?: string;
};
export type UpdateSettingsStorefrontSeoRequestUnprocessableEntityError = {
    errors?: SettingsStorefrontSeoPutResponsesContentApplicationJsonSchemaErrors;
    status?: number;
    title?: string;
    type?: string;
};
export type StorefrontStatus = {
    down_for_maintenance_message?: string;
    prelaunch_message?: string;
    prelaunch_password?: string;
};
export type StorefrontStatusGetSettingsStorefrontStatusResponse200 = {
    data?: StorefrontStatus;
    meta?: MetaOpen;
};
export type StorefrontStatusUpdateSettingsStorefrontStatusResponse200 = {
    data?: StorefrontStatus;
    meta?: MetaOpen;
};
export type MeasurementUnitsSettingsWeightMeasurement = 'LBS' | 'Ounces' | 'KGS' | 'Grams' | 'Tonnes';
export type MeasurementUnitsSettingsLengthMeasurement = 'Inches' | 'Centimeters';
export type MeasurementUnitsSettingsFactoringDimension = 'depth' | 'height' | 'width';
export type MeasurementUnitsSettings = {
    weight_measurement?: MeasurementUnitsSettingsWeightMeasurement;
    length_measurement?: MeasurementUnitsSettingsLengthMeasurement;
    decimal_token?: string;
    thousands_token?: string;
    decimal_places?: number;
    factoring_dimension?: MeasurementUnitsSettingsFactoringDimension;
};
export type SettingsStoreUnitsOfMeasurementGetResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type UnitsOfMeasurementGetSettingsMeasurementUnitsResponse200 = {
    data?: MeasurementUnitsSettings;
    meta?: SettingsStoreUnitsOfMeasurementGetResponsesContentApplicationJsonSchemaMeta;
};
export type SettingsStoreUnitsOfMeasurementPutResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type UnitsOfMeasurementUpdateSettingsMeasurementUnitsResponse200 = {
    data?: MeasurementUnitsSettings;
    meta?: SettingsStoreUnitsOfMeasurementPutResponsesContentApplicationJsonSchemaMeta;
};
export type GetAnalyticsProvidersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/analytics';
};
export type GetAnalyticsProvidersResponses = {
    200: AnalyticsGetAnalyticsProvidersResponse200;
};
export type GetAnalyticsProvidersResponse = GetAnalyticsProvidersResponses[keyof GetAnalyticsProvidersResponses];
export type GetAnalyticsProviderData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: {
        channel_id?: number;
    };
    url: '/settings/analytics/{id}';
};
export type GetAnalyticsProviderErrors = {
    400: ErrorResponse400;
    404: ErrorResponse404;
};
export type GetAnalyticsProviderError = GetAnalyticsProviderErrors[keyof GetAnalyticsProviderErrors];
export type GetAnalyticsProviderResponses = {
    200: AnalyticsProvider;
};
export type GetAnalyticsProviderResponse = GetAnalyticsProviderResponses[keyof GetAnalyticsProviderResponses];
export type UpdateAnalyticsProviderData = {
    body?: {
        code?: string;
        data_tag_enabled?: boolean;
        enabled?: boolean;
        is_oauth_connected?: unknown;
        name?: string;
        version?: number;
    };
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: {
        channel_id?: number;
    };
    url: '/settings/analytics/{id}';
};
export type UpdateAnalyticsProviderErrors = {
    400: ErrorResponse400;
    404: ErrorResponse404;
    409: ErrorResponse409;
    422: ErrorResponse422;
};
export type UpdateAnalyticsProviderError = UpdateAnalyticsProviderErrors[keyof UpdateAnalyticsProviderErrors];
export type UpdateAnalyticsProviderResponses = {
    200: AnalyticsProvider;
};
export type UpdateAnalyticsProviderResponse = UpdateAnalyticsProviderResponses[keyof UpdateAnalyticsProviderResponses];
export type GetSettingsCatalogData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/catalog';
};
export type GetSettingsCatalogResponses = {
    200: CatalogGetSettingsCatalogResponse200;
};
export type GetSettingsCatalogResponse = GetSettingsCatalogResponses[keyof GetSettingsCatalogResponses];
export type UpdateSettingsCatalogData = {
    body?: CatalogSettings;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/catalog';
};
export type UpdateSettingsCatalogResponses = {
    200: CatalogUpdateSettingsCatalogResponse200;
};
export type UpdateSettingsCatalogResponse = UpdateSettingsCatalogResponses[keyof UpdateSettingsCatalogResponses];
export type GetSettingsEmailStatusesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/email-statuses';
};
export type GetSettingsEmailStatusesResponses = {
    200: EmailStatusesGetSettingsEmailStatusesResponse200;
};
export type GetSettingsEmailStatusesResponse = GetSettingsEmailStatusesResponses[keyof GetSettingsEmailStatusesResponses];
export type UpdateSettingsEmailStatusesData = {
    body?: EnabledTransactionalEmails;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/email-statuses';
};
export type UpdateSettingsEmailStatusesResponses = {
    200: EmailStatusesUpdateSettingsEmailStatusesResponse200;
};
export type UpdateSettingsEmailStatusesResponse = UpdateSettingsEmailStatusesResponses[keyof UpdateSettingsEmailStatusesResponses];
export type CreateSettingsFaviconImageData = {
    body?: {
        FaviconFile?: Blob | File;
    };
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/favicon/image';
};
export type CreateSettingsFaviconImageErrors = {
    422: unknown;
};
export type CreateSettingsFaviconImageResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type CreateSettingsFaviconImageResponse = CreateSettingsFaviconImageResponses[keyof CreateSettingsFaviconImageResponses];
export type GetSettingsInventoryData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/inventory';
};
export type GetSettingsInventoryErrors = {
    422: ErrorResponse;
};
export type GetSettingsInventoryError = GetSettingsInventoryErrors[keyof GetSettingsInventoryErrors];
export type GetSettingsInventoryResponses = {
    200: InventoryGetSettingsInventoryResponse200;
};
export type GetSettingsInventoryResponse = GetSettingsInventoryResponses[keyof GetSettingsInventoryResponses];
export type UpdateSettingsInventoryData = {
    body?: InventorySettings;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/inventory';
};
export type UpdateSettingsInventoryResponses = {
    200: InventoryUpdateSettingsInventoryResponse200;
};
export type UpdateSettingsInventoryResponse = UpdateSettingsInventoryResponses[keyof UpdateSettingsInventoryResponses];
export type GetSettingsInventoryNotificationsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/inventory/notifications';
};
export type GetSettingsInventoryNotificationsResponses = {
    200: InventoryNotificationsGetSettingsInventoryNotificationsResponse200;
};
export type GetSettingsInventoryNotificationsResponse = GetSettingsInventoryNotificationsResponses[keyof GetSettingsInventoryNotificationsResponses];
export type UpdateSettingsInventoryNotificationsData = {
    body?: InventoryNotificationsSettings;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/inventory/notifications';
};
export type UpdateSettingsInventoryNotificationsResponses = {
    200: InventoryNotificationsUpdateSettingsInventoryNotificationsResponse200;
};
export type UpdateSettingsInventoryNotificationsResponse = UpdateSettingsInventoryNotificationsResponses[keyof UpdateSettingsInventoryNotificationsResponses];
export type GetSettingsLogoData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/logo';
};
export type GetSettingsLogoResponses = {
    200: LogoGetSettingsLogoResponse200;
};
export type GetSettingsLogoResponse = GetSettingsLogoResponses[keyof GetSettingsLogoResponses];
export type UpdateSettingsLogoData = {
    body?: LogoSettingsUpdate;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/logo';
};
export type UpdateSettingsLogoResponses = {
    200: LogoUpdateSettingsLogoResponse200;
};
export type UpdateSettingsLogoResponse = UpdateSettingsLogoResponses[keyof UpdateSettingsLogoResponses];
export type CreateSettingsLogoImageData = {
    body?: {
        LogoFile?: Blob | File;
    };
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/logo/image';
};
export type CreateSettingsLogoImageResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type CreateSettingsLogoImageResponse = CreateSettingsLogoImageResponses[keyof CreateSettingsLogoImageResponses];
export type GetSettingsEnabledSearchFiltersData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/settings/search/filters';
};
export type GetSettingsEnabledSearchFiltersResponses = {
    200: SearchFiltersGetSettingsEnabledSearchFiltersResponse200;
};
export type GetSettingsEnabledSearchFiltersResponse = GetSettingsEnabledSearchFiltersResponses[keyof GetSettingsEnabledSearchFiltersResponses];
export type UpdateSettingsEnabledSearchFiltersData = {
    body?: ConfiguredFilters;
    path?: never;
    query?: never;
    url: '/settings/search/filters';
};
export type UpdateSettingsEnabledSearchFiltersResponses = {
    200: SearchFiltersUpdateSettingsEnabledSearchFiltersResponse200;
};
export type UpdateSettingsEnabledSearchFiltersResponse = UpdateSettingsEnabledSearchFiltersResponses[keyof UpdateSettingsEnabledSearchFiltersResponses];
export type GetSettingsAvailableFiltersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
        category_id?: number;
    };
    url: '/settings/search/filters/available';
};
export type GetSettingsAvailableFiltersResponses = {
    200: SearchFiltersGetSettingsAvailableFiltersResponse200;
};
export type GetSettingsAvailableFiltersResponse = GetSettingsAvailableFiltersResponses[keyof GetSettingsAvailableFiltersResponses];
export type GetSettingsFiltersContextsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
        category_id?: number;
    };
    url: '/settings/search/filters/contexts';
};
export type GetSettingsFiltersContextsResponses = {
    200: SearchFiltersGetSettingsFiltersContextsResponse200;
};
export type GetSettingsFiltersContextsResponse = GetSettingsFiltersContextsResponses[keyof GetSettingsFiltersContextsResponses];
export type UpsertSettingsFiltersContextsData = {
    body?: Array<ConfiguredFiltersOverride>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/settings/search/filters/contexts';
};
export type UpsertSettingsFiltersContextsResponses = {
    200: SearchFiltersUpsertSettingsFiltersContextsResponse200;
};
export type UpsertSettingsFiltersContextsResponse = UpsertSettingsFiltersContextsResponses[keyof UpsertSettingsFiltersContextsResponses];
export type GetSettingsLocaleData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/settings/store/locale';
};
export type GetSettingsLocaleResponses = {
    200: StoreLocaleGetSettingsLocaleResponse200;
};
export type GetSettingsLocaleResponse = GetSettingsLocaleResponses[keyof GetSettingsLocaleResponses];
export type UpdateSettingsLocaleData = {
    body?: Locale;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/settings/store/locale';
};
export type UpdateSettingsLocaleErrors = {
    422: ErrorResponse;
};
export type UpdateSettingsLocaleError = UpdateSettingsLocaleErrors[keyof UpdateSettingsLocaleErrors];
export type UpdateSettingsLocaleResponses = {
    200: StoreLocaleUpdateSettingsLocaleResponse200;
};
export type UpdateSettingsLocaleResponse = UpdateSettingsLocaleResponses[keyof UpdateSettingsLocaleResponses];
export type GetSettingsStoreProfileData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/store/profile';
};
export type GetSettingsStoreProfileResponses = {
    200: StoreProfileGetSettingsStoreProfileResponse200;
};
export type GetSettingsStoreProfileResponse = GetSettingsStoreProfileResponses[keyof GetSettingsStoreProfileResponses];
export type UpdateSettingsStoreProfileData = {
    body?: StoreProfile;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/store/profile';
};
export type UpdateSettingsStoreProfileErrors = {
    422: ErrorResponse;
};
export type UpdateSettingsStoreProfileError = UpdateSettingsStoreProfileErrors[keyof UpdateSettingsStoreProfileErrors];
export type UpdateSettingsStoreProfileResponses = {
    200: StoreProfileUpdateSettingsStoreProfileResponse200;
};
export type UpdateSettingsStoreProfileResponse = UpdateSettingsStoreProfileResponses[keyof UpdateSettingsStoreProfileResponses];
export type GetSettingsStorefrontCategoryData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/category';
};
export type GetSettingsStorefrontCategoryResponses = {
    200: StorefrontCategoryGetSettingsStorefrontCategoryResponse200;
};
export type GetSettingsStorefrontCategoryResponse = GetSettingsStorefrontCategoryResponses[keyof GetSettingsStorefrontCategoryResponses];
export type UpdateSettingsStorefrontCategoryData = {
    body?: StorefrontCategorySettings;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/category';
};
export type UpdateSettingsStorefrontCategoryErrors = {
    422: UpdateSettingsStorefrontCategoryRequestUnprocessableEntityError;
};
export type UpdateSettingsStorefrontCategoryError = UpdateSettingsStorefrontCategoryErrors[keyof UpdateSettingsStorefrontCategoryErrors];
export type UpdateSettingsStorefrontCategoryResponses = {
    200: StorefrontCategoryUpdateSettingsStorefrontCategoryResponse200;
};
export type UpdateSettingsStorefrontCategoryResponse = UpdateSettingsStorefrontCategoryResponses[keyof UpdateSettingsStorefrontCategoryResponses];
export type GetSettingsStorefrontProductData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/product';
};
export type GetSettingsStorefrontProductResponses = {
    200: StorefrontProductGetSettingsStorefrontProductResponse200;
};
export type GetSettingsStorefrontProductResponse = GetSettingsStorefrontProductResponses[keyof GetSettingsStorefrontProductResponses];
export type UpdateSettingsStorefrontProductData = {
    body?: StorefrontProductSettings;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/product';
};
export type UpdateSettingsStorefrontProductErrors = {
    422: UpdateSettingsStorefrontProductRequestUnprocessableEntityError;
};
export type UpdateSettingsStorefrontProductError = UpdateSettingsStorefrontProductErrors[keyof UpdateSettingsStorefrontProductErrors];
export type UpdateSettingsStorefrontProductResponses = {
    200: StorefrontProductUpdateSettingsStorefrontProductResponse200;
};
export type UpdateSettingsStorefrontProductResponse = UpdateSettingsStorefrontProductResponses[keyof UpdateSettingsStorefrontProductResponses];
export type GetSettingsRobotsTxtData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/robotstxt';
};
export type GetSettingsRobotsTxtResponses = {
    200: StorefrontRobotstxtGetSettingsRobotsTxtResponse200;
};
export type GetSettingsRobotsTxtResponse = GetSettingsRobotsTxtResponses[keyof GetSettingsRobotsTxtResponses];
export type UpdateSettingsRobotsTxtData = {
    body?: RobotsTxtSettings;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/robotstxt';
};
export type UpdateSettingsRobotsTxtResponses = {
    200: StorefrontRobotstxtUpdateSettingsRobotsTxtResponse200;
};
export type UpdateSettingsRobotsTxtResponse = UpdateSettingsRobotsTxtResponses[keyof UpdateSettingsRobotsTxtResponses];
export type GetSettingsStorefrontSearchData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/search';
};
export type GetSettingsStorefrontSearchResponses = {
    200: StorefrontSearchGetSettingsStorefrontSearchResponse200;
};
export type GetSettingsStorefrontSearchResponse = GetSettingsStorefrontSearchResponses[keyof GetSettingsStorefrontSearchResponses];
export type UpdateSettingsStorefrontSearchData = {
    body?: StorefrontSearchSettings;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/search';
};
export type UpdateSettingsStorefrontSearchResponses = {
    200: StorefrontSearchUpdateSettingsStorefrontSearchResponse200;
};
export type UpdateSettingsStorefrontSearchResponse = UpdateSettingsStorefrontSearchResponses[keyof UpdateSettingsStorefrontSearchResponses];
export type GetSettingsStorefrontSecurityData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/security';
};
export type GetSettingsStorefrontSecurityResponses = {
    200: StorefrontSecurityGetSettingsStorefrontSecurityResponse200;
};
export type GetSettingsStorefrontSecurityResponse = GetSettingsStorefrontSecurityResponses[keyof GetSettingsStorefrontSecurityResponses];
export type UpdateSettingsStorefrontSecurityData = {
    body?: StorefrontSecuritySettings;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/security';
};
export type UpdateSettingsStorefrontSecurityResponses = {
    200: StorefrontSecurityUpdateSettingsStorefrontSecurityResponse200;
};
export type UpdateSettingsStorefrontSecurityResponse = UpdateSettingsStorefrontSecurityResponses[keyof UpdateSettingsStorefrontSecurityResponses];
export type GetSettingsStorefrontSeoData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/seo';
};
export type GetSettingsStorefrontSeoResponses = {
    200: StorefrontSeoGetSettingsStorefrontSeoResponse200;
};
export type GetSettingsStorefrontSeoResponse = GetSettingsStorefrontSeoResponses[keyof GetSettingsStorefrontSeoResponses];
export type UpdateSettingsStorefrontSeoData = {
    body?: SeoSettings;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/seo';
};
export type UpdateSettingsStorefrontSeoErrors = {
    422: UpdateSettingsStorefrontSeoRequestUnprocessableEntityError;
};
export type UpdateSettingsStorefrontSeoError = UpdateSettingsStorefrontSeoErrors[keyof UpdateSettingsStorefrontSeoErrors];
export type UpdateSettingsStorefrontSeoResponses = {
    200: StorefrontSeoUpdateSettingsStorefrontSeoResponse200;
};
export type UpdateSettingsStorefrontSeoResponse = UpdateSettingsStorefrontSeoResponses[keyof UpdateSettingsStorefrontSeoResponses];
export type GetSettingsStorefrontStatusData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/status';
};
export type GetSettingsStorefrontStatusResponses = {
    200: StorefrontStatusGetSettingsStorefrontStatusResponse200;
};
export type GetSettingsStorefrontStatusResponse = GetSettingsStorefrontStatusResponses[keyof GetSettingsStorefrontStatusResponses];
export type UpdateSettingsStorefrontStatusData = {
    body?: StorefrontStatus;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/status';
};
export type UpdateSettingsStorefrontStatusResponses = {
    200: StorefrontStatusUpdateSettingsStorefrontStatusResponse200;
};
export type UpdateSettingsStorefrontStatusResponse = UpdateSettingsStorefrontStatusResponses[keyof UpdateSettingsStorefrontStatusResponses];
export type GetSettingsMeasurementUnitsData = {
    body?: never;
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/store/units-of-measurement';
};
export type GetSettingsMeasurementUnitsErrors = {
    422: ErrorResponse;
};
export type GetSettingsMeasurementUnitsError = GetSettingsMeasurementUnitsErrors[keyof GetSettingsMeasurementUnitsErrors];
export type GetSettingsMeasurementUnitsResponses = {
    200: UnitsOfMeasurementGetSettingsMeasurementUnitsResponse200;
};
export type GetSettingsMeasurementUnitsResponse = GetSettingsMeasurementUnitsResponses[keyof GetSettingsMeasurementUnitsResponses];
export type UpdateSettingsMeasurementUnitsData = {
    body?: MeasurementUnitsSettings;
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/store/units-of-measurement';
};
export type UpdateSettingsMeasurementUnitsResponses = {
    200: UnitsOfMeasurementUpdateSettingsMeasurementUnitsResponse200;
};
export type UpdateSettingsMeasurementUnitsResponse = UpdateSettingsMeasurementUnitsResponses[keyof UpdateSettingsMeasurementUnitsResponses];
