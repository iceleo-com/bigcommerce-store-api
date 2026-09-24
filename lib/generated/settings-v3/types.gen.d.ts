export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type AddressTypeEnumValues = 'Home Office' | 'Commercial Office' | 'Retail' | 'Warehouse';
export type AnalyticsProvider = {
    code?: string;
    enabled?: boolean;
    id?: number;
    name?: string;
};
export type AnalyticsProviders = Array<AnalyticsProvider>;
export type AvailableFilter = AvailableNormalFilter | AvailablePriceFilter | AvailableOtherFilter;
export type AvailableNormalFilter = {
    id?: string;
    name?: string;
    product_count?: number;
    type?: 'category' | 'brand' | 'rating' | 'product';
};
export type AvailableOtherFilter = {
    id?: string;
    name?: string;
    type?: 'other';
};
export type AvailablePriceFilter = {
    id?: string;
    name?: string;
    price_range_max?: number;
    price_range_min?: number;
    type?: 'price';
};
export type BaseError = {
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CatalogSettings = {
    auto_approve_reviews?: boolean;
    enable_product_comparisons?: boolean;
};
export type CategoryListingModeEnumValues = 'current_category_only' | 'child_categories' | 'child_categories_if_category_empty';
export type ConfiguredFilter = EnabledProductFilter | EnabledPriceFilter | EnabledCategoryFilter | EnabledBrandFilter | EnabledRatingFilter | EnabledMiscFilter;
export type ConfiguredFilters = Array<ConfiguredFilter>;
export type ConfiguredFiltersOverride = {
    context?: SearchFilterOverrideContextIdentifier;
    data?: ConfiguredFilters;
};
export type ContentSortEnumValues = 'relevance' | 'alphaasc' | 'alphadesc';
export type DetailedErrors = {
    [key: string]: unknown;
};
export type EnabledBrandFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    display_product_count?: boolean;
    id?: string;
    is_enabled?: boolean;
    items_to_show?: 5 | 10 | 15;
    sort_by?: 'alpha' | 'item_count';
    type?: 'brand';
};
export type EnabledCategoryFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    display_product_count?: boolean;
    id?: string;
    is_enabled?: boolean;
    items_to_show?: 5 | 10 | 15;
    type?: 'category';
};
export type EnabledFilter = EnabledProductFilter | EnabledPriceFilter | EnabledCategoryFilter | EnabledBrandFilter | EnabledRatingFilter | EnabledMiscFilter;
export type EnabledFilters = Array<EnabledFilter>;
export type EnabledFiltersOverride = {
    data?: EnabledFilters;
    scope?: SearchFilterOverrideScopeIdentifier;
};
export type EnabledMiscFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    display_product_count?: boolean;
    id?: number;
    is_enabled?: boolean;
    show_free_shipping_filter?: boolean;
    show_in_stock_filter?: boolean;
    show_is_featured_filter?: boolean;
    show_product_count?: boolean;
    type?: 'other';
};
export type EnabledPriceFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    id?: string;
    is_enabled?: boolean;
    type?: 'price';
};
export type EnabledProductFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    display_product_count?: boolean;
    id?: string;
    is_enabled?: boolean;
    items_to_show?: 5 | 10 | 15;
    sort_by?: 'alpha' | 'option_values' | 'item_count';
    type?: 'product';
};
export type EnabledRatingFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    id?: string;
    is_enabled?: boolean;
    type?: 'rating';
};
export type EnabledTransactionalEmails = {
    abandoned_cart_email?: boolean;
    account_details_changed_email?: boolean;
    combined_order_status_email?: boolean;
    create_account_email?: boolean;
    create_guest_account_email?: boolean;
    gift_certificate_email?: boolean;
    invoice_email?: boolean;
    order_message_notification_email?: boolean;
    product_review_email?: boolean;
    return_confirmation_email?: boolean;
    return_statuschange_email?: boolean;
};
export type _Error = {
    code: string;
    message?: string;
};
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
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
export type HstsMaxAgeEnumValues = 'zero_seconds' | 'five_minutes' | 'one_year';
export type InventoryNotificationsSettings = {
    low_stock_notification_address?: Array<string>;
    out_of_stock_notification_address?: Array<string>;
};
export type InventorySettings = {
    product_out_of_stock_behavior?: 'do_nothing' | 'hide_product' | 'hide_product_and_accessible' | 'hide_product_and_redirect';
    option_out_of_stock_behavior?: 'do_nothing' | 'hide_option' | 'label_option';
    update_stock_behavior?: 'order_placed' | 'order_completed_or_shipped';
    edit_order_stock_adjustment?: boolean;
    refund_order_stock_adjustment?: boolean;
    stock_level_display?: 'dont_show' | 'show' | 'show_when_low';
    default_out_of_stock_message?: string;
    hide_in_product_filtering?: boolean;
    show_pre_order_stock_levels?: boolean;
    show_out_of_stock_message?: boolean;
};
export type Locale = {
    default_shopper_language: string;
    shopper_language_selection_method?: 'browser' | 'default_shopper_language';
    store_country?: string;
};
export type LogoSettings = {
    favicon_url?: string;
    logo_image_url?: string;
    logo_text?: string;
    type?: 'image' | 'text';
};
export type LogoSettingsUpdate = {
    logo_text?: string;
    type?: 'image' | 'text';
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type MetaPaginationObject = {
    pagination?: {
        count?: number;
        current_page?: number;
        links?: {
            current?: string;
            next?: string;
        };
        per_page?: number;
        total?: number;
        total_pages?: number;
    };
};
export type ProductSortEnumValues = 'featured' | 'bestselling' | 'newest' | 'alphaasc' | 'alphadesc' | 'pricedesc' | 'priceasc' | 'avgcustomerreview' | 'relevance';
export type RobotsTxtSettings = {
    robots_txt_ssl?: string;
};
export type SeoSettings = {
    meta_description?: string;
    meta_keywords?: string;
    page_title?: string;
    www_redirect?: 'www' | 'no-www' | 'none';
};
export type SearchFilterOverrideContextIdentifier = {
    category_id?: number;
    channel_id?: number;
};
export type SearchFilterOverrideScopeIdentifier = {
    category_id?: number;
    channel_id?: number;
};
export type StoreProfile = {
    store_address?: string;
    store_address_type?: AddressTypeEnumValues;
    store_email?: string;
    store_name?: string;
    store_phone?: string;
};
export type StorefrontCategorySettings = {
    category_tree_depth?: number;
    default_product_sort?: ProductSortEnumValues;
    listing_mode?: CategoryListingModeEnumValues;
};
export type StorefrontProductSettings = {
    show_product_price?: boolean;
    show_product_sku?: boolean;
    show_product_weight?: boolean;
    show_product_brand?: boolean;
    show_product_shipping?: boolean;
    show_product_rating?: boolean;
    show_add_to_cart_link?: boolean;
    default_preorder_message?: string;
    show_breadcrumbs_product_pages?: 'show_one' | 'show_none';
    show_add_to_cart_qty_box?: boolean;
    show_add_to_wishlist?: boolean;
    hide_price_from_guests?: boolean;
};
export type StorefrontSearchSettings = {
    content_product_sort: ContentSortEnumValues;
    default_product_sort: ProductSortEnumValues;
    product_filtering_enabled: boolean;
    search_suggest: boolean;
};
export type StorefrontSecuritySettings = {
    csp_header?: {
        enabled?: boolean;
        header_value?: string;
    };
    hsts?: {
        enabled?: boolean;
        include_preload?: boolean;
        include_subdomains?: boolean;
        max_age?: HstsMaxAgeEnumValues;
    };
    sitewide_https_enabled?: boolean;
    x_frame_options_header?: {
        allowed_url?: string;
        enabled?: boolean;
        setting?: 'deny' | 'same_origin' | 'allow_from_url';
    };
};
export type StorefrontStatus = {
    down_for_maintenance_message?: string;
    prelaunch_message?: string;
    prelaunch_password?: string;
};
export type MeasurementUnitsSettings = {
    weight_measurement?: 'LBS' | 'Ounces' | 'KGS' | 'Grams' | 'Tonnes';
    length_measurement?: 'Inches' | 'Centimeters';
    decimal_token?: string;
    thousands_token?: string;
    decimal_places?: number;
    factoring_dimension?: 'depth' | 'height' | 'width';
};
export type Accept = string;
export type ContentType = string;
export type ChannelIdParam = number;
export type KeysToDelete = Array<string>;
export type RequiredChannelIdParamForDelete = number;
export type GetSettingsAnalyticsData = {
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
export type GetSettingsAnalyticsResponses = {
    200: {
        data?: AnalyticsProviders;
        meta?: MetaOpen;
    };
};
export type GetSettingsAnalyticsResponse = GetSettingsAnalyticsResponses[keyof GetSettingsAnalyticsResponses];
export type GetSettingsAnalyticsByIdData = {
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
export type GetSettingsAnalyticsByIdErrors = {
    400: ErrorResponse400;
    404: ErrorResponse404;
};
export type GetSettingsAnalyticsByIdError = GetSettingsAnalyticsByIdErrors[keyof GetSettingsAnalyticsByIdErrors];
export type GetSettingsAnalyticsByIdResponses = {
    200: AnalyticsProvider;
};
export type GetSettingsAnalyticsByIdResponse = GetSettingsAnalyticsByIdResponses[keyof GetSettingsAnalyticsByIdResponses];
export type PutSettingsAnalyticsByIdData = {
    body?: {
        channel_id?: number;
        code?: string;
        data_tag_enabled?: boolean;
        enabled?: boolean;
        id?: number;
        is_oauth_connected?: unknown;
        name?: string;
        version?: number;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
    query?: {
        channel_id?: number;
    };
    url: '/settings/analytics/{id}';
};
export type PutSettingsAnalyticsByIdErrors = {
    400: ErrorResponse400;
    404: ErrorResponse404;
    409: ErrorResponse409;
    422: ErrorResponse422;
};
export type PutSettingsAnalyticsByIdError = PutSettingsAnalyticsByIdErrors[keyof PutSettingsAnalyticsByIdErrors];
export type PutSettingsAnalyticsByIdResponses = {
    200: AnalyticsProvider;
};
export type PutSettingsAnalyticsByIdResponse = PutSettingsAnalyticsByIdResponses[keyof PutSettingsAnalyticsByIdResponses];
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
    200: {
        data?: CatalogSettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsCatalogResponse = GetSettingsCatalogResponses[keyof GetSettingsCatalogResponses];
export type PutSettingsCatalogData = {
    body?: CatalogSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/catalog';
};
export type PutSettingsCatalogResponses = {
    200: {
        data?: CatalogSettings;
        meta?: MetaOpen;
    };
};
export type PutSettingsCatalogResponse = PutSettingsCatalogResponses[keyof PutSettingsCatalogResponses];
export type GetSettingsEmailsEnabledData = {
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
export type GetSettingsEmailsEnabledResponses = {
    200: {
        data?: EnabledTransactionalEmails;
        meta?: MetaOpen;
    };
};
export type GetSettingsEmailsEnabledResponse = GetSettingsEmailsEnabledResponses[keyof GetSettingsEmailsEnabledResponses];
export type PutSettingsTransactionalEmailsEnabledData = {
    body?: EnabledTransactionalEmails;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/email-statuses';
};
export type PutSettingsTransactionalEmailsEnabledResponses = {
    200: {
        data?: EnabledTransactionalEmails;
        meta?: MetaOpen;
    };
};
export type PutSettingsTransactionalEmailsEnabledResponse = PutSettingsTransactionalEmailsEnabledResponses[keyof PutSettingsTransactionalEmailsEnabledResponses];
export type PostFaviconLogoImageData = {
    body?: {
        FaviconFile?: Blob | File;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/favicon/image';
};
export type PostFaviconLogoImageResponses = {
    204: void;
};
export type PostFaviconLogoImageResponse = PostFaviconLogoImageResponses[keyof PostFaviconLogoImageResponses];
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
    200: {
        data?: InventoryNotificationsSettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsInventoryNotificationsResponse = GetSettingsInventoryNotificationsResponses[keyof GetSettingsInventoryNotificationsResponses];
export type PutSettingsInventoryNotificationsData = {
    body?: InventoryNotificationsSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/inventory/notifications';
};
export type PutSettingsInventoryNotificationsResponses = {
    200: unknown;
};
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
    200: {
        data?: LogoSettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsLogoResponse = GetSettingsLogoResponses[keyof GetSettingsLogoResponses];
export type PutSettingsLogoData = {
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
export type PutSettingsLogoResponses = {
    200: {
        data?: LogoSettings;
        meta?: MetaOpen;
    };
};
export type PutSettingsLogoResponse = PutSettingsLogoResponses[keyof PutSettingsLogoResponses];
export type PostSettingsLogoImageData = {
    body?: {
        LogoFile?: Blob | File;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/logo/image';
};
export type PostSettingsLogoImageResponses = {
    204: void;
};
export type PostSettingsLogoImageResponse = PostSettingsLogoImageResponses[keyof PostSettingsLogoImageResponses];
export type GetEnabledData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/settings/search/filters';
};
export type GetEnabledResponses = {
    200: {
        data?: ConfiguredFilters;
        meta?: MetaOpen;
    };
};
export type GetEnabledResponse = GetEnabledResponses[keyof GetEnabledResponses];
export type UpdateEnabledData = {
    body?: ConfiguredFilters;
    headers: {
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/settings/search/filters';
};
export type UpdateEnabledResponses = {
    200: {
        data?: ConfiguredFilters;
        meta?: MetaOpen;
    };
};
export type UpdateEnabledResponse = UpdateEnabledResponses[keyof UpdateEnabledResponses];
export type GetAvailableData = {
    body?: never;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
        category_id?: number;
    };
    url: '/settings/search/filters/available';
};
export type GetAvailableResponses = {
    200: {
        data?: Array<AvailableFilter>;
        meta?: MetaOpen;
    };
};
export type GetAvailableResponse = GetAvailableResponses[keyof GetAvailableResponses];
export type GetContextsData = {
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
export type GetContextsResponses = {
    200: {
        data?: Array<ConfiguredFiltersOverride>;
        meta?: MetaPaginationObject;
    };
};
export type GetContextsResponse = GetContextsResponses[keyof GetContextsResponses];
export type UpsertContextsData = {
    body?: Array<ConfiguredFiltersOverride>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/settings/search/filters/contexts';
};
export type UpsertContextsResponses = {
    200: {
        data?: Array<ConfiguredFiltersOverride>;
        meta?: MetaOpen;
    };
};
export type UpsertContextsResponse = UpsertContextsResponses[keyof UpsertContextsResponses];
export type GetSettingsStoreLocaleData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/store/locale';
};
export type GetSettingsStoreLocaleResponses = {
    200: {
        data?: Locale;
        meta?: MetaOpen;
    };
};
export type GetSettingsStoreLocaleResponse = GetSettingsStoreLocaleResponses[keyof GetSettingsStoreLocaleResponses];
export type PutSettingsStoreLocaleData = {
    body?: Locale;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/store/locale';
};
export type PutSettingsStoreLocaleErrors = {
    422: ErrorResponse;
};
export type PutSettingsStoreLocaleError = PutSettingsStoreLocaleErrors[keyof PutSettingsStoreLocaleErrors];
export type PutSettingsStoreLocaleResponses = {
    200: {
        data?: Locale;
        meta?: MetaOpen;
    };
};
export type PutSettingsStoreLocaleResponse = PutSettingsStoreLocaleResponses[keyof PutSettingsStoreLocaleResponses];
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
    200: {
        data?: StoreProfile;
        meta?: MetaOpen;
    };
};
export type GetSettingsStoreProfileResponse = GetSettingsStoreProfileResponses[keyof GetSettingsStoreProfileResponses];
export type PutSettingsStoreProfileData = {
    body?: StoreProfile;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/store/profile';
};
export type PutSettingsStoreProfileErrors = {
    422: ErrorResponse;
};
export type PutSettingsStoreProfileError = PutSettingsStoreProfileErrors[keyof PutSettingsStoreProfileErrors];
export type PutSettingsStoreProfileResponses = {
    200: {
        data?: StoreProfile;
        meta?: MetaOpen;
    };
};
export type PutSettingsStoreProfileResponse = PutSettingsStoreProfileResponses[keyof PutSettingsStoreProfileResponses];
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
    200: {
        data?: StorefrontCategorySettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsStorefrontCategoryResponse = GetSettingsStorefrontCategoryResponses[keyof GetSettingsStorefrontCategoryResponses];
export type PutSettingsStorefrontCategoryData = {
    body?: StorefrontCategorySettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/category';
};
export type PutSettingsStorefrontCategoryErrors = {
    422: {
        errors?: {
            ''?: string;
        };
        status?: number;
        title?: string;
        type?: string;
    };
};
export type PutSettingsStorefrontCategoryError = PutSettingsStorefrontCategoryErrors[keyof PutSettingsStorefrontCategoryErrors];
export type PutSettingsStorefrontCategoryResponses = {
    200: {
        data?: StorefrontCategorySettings;
        meta?: MetaOpen;
    };
};
export type PutSettingsStorefrontCategoryResponse = PutSettingsStorefrontCategoryResponses[keyof PutSettingsStorefrontCategoryResponses];
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
    200: {
        data?: StorefrontProductSettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsStorefrontProductResponse = GetSettingsStorefrontProductResponses[keyof GetSettingsStorefrontProductResponses];
export type PutSettingsStorefrontProductData = {
    body?: StorefrontProductSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/product';
};
export type PutSettingsStorefrontProductErrors = {
    422: {
        errors?: {
            ''?: string;
        };
        status?: number;
        title?: string;
        type?: string;
    };
};
export type PutSettingsStorefrontProductError = PutSettingsStorefrontProductErrors[keyof PutSettingsStorefrontProductErrors];
export type PutSettingsStorefrontProductResponses = {
    200: {
        data?: StorefrontProductSettings;
        meta?: MetaOpen;
    };
};
export type PutSettingsStorefrontProductResponse = PutSettingsStorefrontProductResponses[keyof PutSettingsStorefrontProductResponses];
export type GetSettingsStorefrontRobotstxtData = {
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
export type GetSettingsStorefrontRobotstxtResponses = {
    200: {
        data?: RobotsTxtSettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsStorefrontRobotstxtResponse = GetSettingsStorefrontRobotstxtResponses[keyof GetSettingsStorefrontRobotstxtResponses];
export type PutSettingsStorefrontRobotstxtData = {
    body?: RobotsTxtSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/robotstxt';
};
export type PutSettingsStorefrontRobotstxtResponses = {
    200: {
        data?: RobotsTxtSettings;
        meta?: MetaOpen;
    };
};
export type PutSettingsStorefrontRobotstxtResponse = PutSettingsStorefrontRobotstxtResponses[keyof PutSettingsStorefrontRobotstxtResponses];
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
    200: {
        data?: StorefrontSearchSettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsStorefrontSearchResponse = GetSettingsStorefrontSearchResponses[keyof GetSettingsStorefrontSearchResponses];
export type PutSettingsStorefrontSearchData = {
    body?: StorefrontSearchSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/search';
};
export type PutSettingsStorefrontSearchResponses = {
    200: {
        data?: StorefrontSearchSettings;
        meta?: MetaOpen;
    };
};
export type PutSettingsStorefrontSearchResponse = PutSettingsStorefrontSearchResponses[keyof PutSettingsStorefrontSearchResponses];
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
    200: {
        data?: StorefrontSecuritySettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsStorefrontSecurityResponse = GetSettingsStorefrontSecurityResponses[keyof GetSettingsStorefrontSecurityResponses];
export type PutSettingsStorefrontSecurityData = {
    body?: StorefrontSecuritySettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/security';
};
export type PutSettingsStorefrontSecurityResponses = {
    200: {
        data?: StorefrontSecuritySettings;
        meta?: MetaOpen;
    };
};
export type PutSettingsStorefrontSecurityResponse = PutSettingsStorefrontSecurityResponses[keyof PutSettingsStorefrontSecurityResponses];
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
    200: {
        data?: SeoSettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsStorefrontSeoResponse = GetSettingsStorefrontSeoResponses[keyof GetSettingsStorefrontSeoResponses];
export type PutSettingsStorefrontSeoData = {
    body?: SeoSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/seo';
};
export type PutSettingsStorefrontSeoErrors = {
    422: {
        errors?: {
            ''?: string;
        };
        status?: number;
        title?: string;
        type?: string;
    };
};
export type PutSettingsStorefrontSeoError = PutSettingsStorefrontSeoErrors[keyof PutSettingsStorefrontSeoErrors];
export type PutSettingsStorefrontSeoResponses = {
    200: {
        data?: SeoSettings;
        meta?: MetaOpen;
    };
};
export type PutSettingsStorefrontSeoResponse = PutSettingsStorefrontSeoResponses[keyof PutSettingsStorefrontSeoResponses];
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
    200: {
        data?: StorefrontStatus;
        meta?: MetaOpen;
    };
};
export type GetSettingsStorefrontStatusResponse = GetSettingsStorefrontStatusResponses[keyof GetSettingsStorefrontStatusResponses];
export type PutSettingsStorefrontStatusData = {
    body?: StorefrontStatus;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/storefront/status';
};
export type PutSettingsStorefrontStatusResponses = {
    200: {
        data?: StorefrontStatus;
        meta?: MetaOpen;
    };
};
export type PutSettingsStorefrontStatusResponse = PutSettingsStorefrontStatusResponses[keyof PutSettingsStorefrontStatusResponses];
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
    200: {
        data?: InventorySettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsInventoryResponse = GetSettingsInventoryResponses[keyof GetSettingsInventoryResponses];
export type PutSettingsInventoryData = {
    body?: InventorySettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/inventory';
};
export type PutSettingsInventoryResponses = {
    200: {
        data?: InventorySettings;
        meta?: MetaOpen;
    };
};
export type PutSettingsInventoryResponse = PutSettingsInventoryResponses[keyof PutSettingsInventoryResponses];
export type GetSettingsStoreUnitsOfMeasurementData = {
    body?: never;
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/store/units-of-measurement';
};
export type GetSettingsStoreUnitsOfMeasurementErrors = {
    422: ErrorResponse;
};
export type GetSettingsStoreUnitsOfMeasurementError = GetSettingsStoreUnitsOfMeasurementErrors[keyof GetSettingsStoreUnitsOfMeasurementErrors];
export type GetSettingsStoreUnitsOfMeasurementResponses = {
    200: {
        data?: MeasurementUnitsSettings;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type GetSettingsStoreUnitsOfMeasurementResponse = GetSettingsStoreUnitsOfMeasurementResponses[keyof GetSettingsStoreUnitsOfMeasurementResponses];
export type PutSettingsStoreUnitsOfMeasurementData = {
    body?: MeasurementUnitsSettings;
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/settings/store/units-of-measurement';
};
export type PutSettingsStoreUnitsOfMeasurementResponses = {
    200: {
        data?: MeasurementUnitsSettings;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type PutSettingsStoreUnitsOfMeasurementResponse = PutSettingsStoreUnitsOfMeasurementResponses[keyof PutSettingsStoreUnitsOfMeasurementResponses];
