export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type AddressTypeEnumValues = 'Home Office' | 'Commercial Office' | 'Retail' | 'Warehouse';
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
    200: {
        data?: AnalyticsProviders;
        meta?: MetaOpen;
    };
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
    200: {
        data?: CatalogSettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsCatalogResponse = GetSettingsCatalogResponses[keyof GetSettingsCatalogResponses];
export type UpdateSettingsCatalogData = {
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
export type UpdateSettingsCatalogResponses = {
    200: {
        data?: CatalogSettings;
        meta?: MetaOpen;
    };
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
    200: {
        data?: EnabledTransactionalEmails;
        meta?: MetaOpen;
    };
};
export type GetSettingsEmailStatusesResponse = GetSettingsEmailStatusesResponses[keyof GetSettingsEmailStatusesResponses];
export type UpdateSettingsEmailStatusesData = {
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
export type UpdateSettingsEmailStatusesResponses = {
    200: {
        data?: EnabledTransactionalEmails;
        meta?: MetaOpen;
    };
};
export type UpdateSettingsEmailStatusesResponse = UpdateSettingsEmailStatusesResponses[keyof UpdateSettingsEmailStatusesResponses];
export type CreateSettingsFaviconImageData = {
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
export type CreateSettingsFaviconImageErrors = {
    422: unknown;
};
export type CreateSettingsFaviconImageResponses = {
    204: void;
};
export type CreateSettingsFaviconImageResponse = CreateSettingsFaviconImageResponses[keyof CreateSettingsFaviconImageResponses];
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
export type UpdateSettingsInventoryNotificationsData = {
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
export type UpdateSettingsInventoryNotificationsResponses = {
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
    200: {
        data?: LogoSettings;
        meta?: MetaOpen;
    };
};
export type UpdateSettingsLogoResponse = UpdateSettingsLogoResponses[keyof UpdateSettingsLogoResponses];
export type CreateSettingsLogoImageData = {
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
export type CreateSettingsLogoImageResponses = {
    204: void;
};
export type CreateSettingsLogoImageResponse = CreateSettingsLogoImageResponses[keyof CreateSettingsLogoImageResponses];
export type GetSettingsEnabledSearchFiltersData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/settings/search/filters';
};
export type GetSettingsEnabledSearchFiltersResponses = {
    200: {
        data?: ConfiguredFilters;
        meta?: MetaOpen;
    };
};
export type GetSettingsEnabledSearchFiltersResponse = GetSettingsEnabledSearchFiltersResponses[keyof GetSettingsEnabledSearchFiltersResponses];
export type UpdateSettingsEnabledSearchFiltersData = {
    body?: ConfiguredFilters;
    headers: {
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/settings/search/filters';
};
export type UpdateSettingsEnabledSearchFiltersResponses = {
    200: {
        data?: ConfiguredFilters;
        meta?: MetaOpen;
    };
};
export type UpdateSettingsEnabledSearchFiltersResponse = UpdateSettingsEnabledSearchFiltersResponses[keyof UpdateSettingsEnabledSearchFiltersResponses];
export type GetSettingsAvailableFiltersData = {
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
export type GetSettingsAvailableFiltersResponses = {
    200: {
        data?: Array<AvailableFilter>;
        meta?: MetaOpen;
    };
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
    200: {
        data?: Array<ConfiguredFiltersOverride>;
        meta?: MetaPaginationObject;
    };
};
export type GetSettingsFiltersContextsResponse = GetSettingsFiltersContextsResponses[keyof GetSettingsFiltersContextsResponses];
export type UpsertSettingsFiltersContextsData = {
    body?: Array<ConfiguredFiltersOverride>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/settings/search/filters/contexts';
};
export type UpsertSettingsFiltersContextsResponses = {
    200: {
        data?: Array<ConfiguredFiltersOverride>;
        meta?: MetaOpen;
    };
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
    200: {
        data?: Locale;
        meta?: MetaOpen;
    };
};
export type GetSettingsLocaleResponse = GetSettingsLocaleResponses[keyof GetSettingsLocaleResponses];
export type UpdateSettingsLocaleData = {
    body?: Locale;
    headers: {
        Accept: string;
        'Content-Type': string;
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
    200: {
        data?: Locale;
        meta?: MetaOpen;
    };
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
    200: {
        data?: StoreProfile;
        meta?: MetaOpen;
    };
};
export type GetSettingsStoreProfileResponse = GetSettingsStoreProfileResponses[keyof GetSettingsStoreProfileResponses];
export type UpdateSettingsStoreProfileData = {
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
export type UpdateSettingsStoreProfileErrors = {
    422: ErrorResponse;
};
export type UpdateSettingsStoreProfileError = UpdateSettingsStoreProfileErrors[keyof UpdateSettingsStoreProfileErrors];
export type UpdateSettingsStoreProfileResponses = {
    200: {
        data?: StoreProfile;
        meta?: MetaOpen;
    };
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
    200: {
        data?: StorefrontCategorySettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsStorefrontCategoryResponse = GetSettingsStorefrontCategoryResponses[keyof GetSettingsStorefrontCategoryResponses];
export type UpdateSettingsStorefrontCategoryData = {
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
export type UpdateSettingsStorefrontCategoryErrors = {
    422: {
        errors?: {
            ''?: string;
        };
        status?: number;
        title?: string;
        type?: string;
    };
};
export type UpdateSettingsStorefrontCategoryError = UpdateSettingsStorefrontCategoryErrors[keyof UpdateSettingsStorefrontCategoryErrors];
export type UpdateSettingsStorefrontCategoryResponses = {
    200: {
        data?: StorefrontCategorySettings;
        meta?: MetaOpen;
    };
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
    200: {
        data?: StorefrontProductSettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsStorefrontProductResponse = GetSettingsStorefrontProductResponses[keyof GetSettingsStorefrontProductResponses];
export type UpdateSettingsStorefrontProductData = {
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
export type UpdateSettingsStorefrontProductErrors = {
    422: {
        errors?: {
            ''?: string;
        };
        status?: number;
        title?: string;
        type?: string;
    };
};
export type UpdateSettingsStorefrontProductError = UpdateSettingsStorefrontProductErrors[keyof UpdateSettingsStorefrontProductErrors];
export type UpdateSettingsStorefrontProductResponses = {
    200: {
        data?: StorefrontProductSettings;
        meta?: MetaOpen;
    };
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
    200: {
        data?: RobotsTxtSettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsRobotsTxtResponse = GetSettingsRobotsTxtResponses[keyof GetSettingsRobotsTxtResponses];
export type UpdateSettingsRobotsTxtData = {
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
export type UpdateSettingsRobotsTxtResponses = {
    200: {
        data?: RobotsTxtSettings;
        meta?: MetaOpen;
    };
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
    200: {
        data?: StorefrontSearchSettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsStorefrontSearchResponse = GetSettingsStorefrontSearchResponses[keyof GetSettingsStorefrontSearchResponses];
export type UpdateSettingsStorefrontSearchData = {
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
export type UpdateSettingsStorefrontSearchResponses = {
    200: {
        data?: StorefrontSearchSettings;
        meta?: MetaOpen;
    };
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
    200: {
        data?: StorefrontSecuritySettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsStorefrontSecurityResponse = GetSettingsStorefrontSecurityResponses[keyof GetSettingsStorefrontSecurityResponses];
export type UpdateSettingsStorefrontSecurityData = {
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
export type UpdateSettingsStorefrontSecurityResponses = {
    200: {
        data?: StorefrontSecuritySettings;
        meta?: MetaOpen;
    };
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
    200: {
        data?: SeoSettings;
        meta?: MetaOpen;
    };
};
export type GetSettingsStorefrontSeoResponse = GetSettingsStorefrontSeoResponses[keyof GetSettingsStorefrontSeoResponses];
export type UpdateSettingsStorefrontSeoData = {
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
export type UpdateSettingsStorefrontSeoErrors = {
    422: {
        errors?: {
            ''?: string;
        };
        status?: number;
        title?: string;
        type?: string;
    };
};
export type UpdateSettingsStorefrontSeoError = UpdateSettingsStorefrontSeoErrors[keyof UpdateSettingsStorefrontSeoErrors];
export type UpdateSettingsStorefrontSeoResponses = {
    200: {
        data?: SeoSettings;
        meta?: MetaOpen;
    };
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
    200: {
        data?: StorefrontStatus;
        meta?: MetaOpen;
    };
};
export type GetSettingsStorefrontStatusResponse = GetSettingsStorefrontStatusResponses[keyof GetSettingsStorefrontStatusResponses];
export type UpdateSettingsStorefrontStatusData = {
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
export type UpdateSettingsStorefrontStatusResponses = {
    200: {
        data?: StorefrontStatus;
        meta?: MetaOpen;
    };
};
export type UpdateSettingsStorefrontStatusResponse = UpdateSettingsStorefrontStatusResponses[keyof UpdateSettingsStorefrontStatusResponses];
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
export type UpdateSettingsInventoryData = {
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
export type UpdateSettingsInventoryResponses = {
    200: {
        data?: InventorySettings;
        meta?: MetaOpen;
    };
};
export type UpdateSettingsInventoryResponse = UpdateSettingsInventoryResponses[keyof UpdateSettingsInventoryResponses];
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
    200: {
        data?: MeasurementUnitsSettings;
        meta?: {
            [key: string]: unknown;
        };
    };
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
    200: {
        data?: MeasurementUnitsSettings;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type UpdateSettingsMeasurementUnitsResponse = UpdateSettingsMeasurementUnitsResponses[keyof UpdateSettingsMeasurementUnitsResponses];
