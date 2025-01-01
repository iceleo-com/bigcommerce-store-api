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
export type type = 'category' | 'brand' | 'rating' | 'product';
export type AvailableOtherFilter = {
    id?: string;
    name?: string;
    type?: 'other';
};
export type type2 = 'other';
export type AvailablePriceFilter = {
    id?: string;
    name?: string;
    price_range_max?: number;
    price_range_min?: number;
    type?: 'price';
};
export type type3 = 'price';
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
export type items_to_show = 5 | 10 | 15;
export type sort_by = 'alpha' | 'item_count';
export type type4 = 'brand';
export type EnabledCategoryFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    display_product_count?: boolean;
    id?: string;
    is_enabled?: boolean;
    items_to_show?: 5 | 10 | 15;
    type?: 'category';
};
export type type5 = 'category';
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
export type sort_by2 = 'alpha' | 'option_values' | 'item_count';
export type type6 = 'product';
export type EnabledRatingFilter = {
    collapsed_by_default?: boolean;
    display_name?: string;
    id?: string;
    is_enabled?: boolean;
    type?: 'rating';
};
export type type7 = 'rating';
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
export type Error = {
    code: string;
    message?: string;
};
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};
export type ErrorResponse400 = {
    schema?: Error;
};
export type ErrorResponse404 = {
    schema?: Error;
};
export type ErrorResponse409 = {
    schema?: Error;
};
export type ErrorResponse422 = {
    schema?: Error;
};
export type HSTSMaxAgeEnumValues = 'zero_seconds' | 'five_minutes' | 'one_year';
export type InventoryNotificationsSettings = {
    low_stock_notification_address?: Array<(string)>;
    out_of_stock_notification_address?: Array<(string)>;
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
export type product_out_of_stock_behavior = 'do_nothing' | 'hide_product' | 'hide_product_and_accessible' | 'hide_product_and_redirect';
export type option_out_of_stock_behavior = 'do_nothing' | 'hide_option' | 'label_option';
export type update_stock_behavior = 'order_placed' | 'order_completed_or_shipped';
export type stock_level_display = 'dont_show' | 'show' | 'show_when_low';
export type Locale = {
    default_shopper_language: string;
    shopper_language_selection_method?: 'browser' | 'default_shopper_language';
    store_country?: string;
};
export type shopper_language_selection_method = 'browser' | 'default_shopper_language';
export type LogoSettings = {
    favicon_url?: string;
    logo_image_url?: string;
    logo_text?: string;
    type?: 'image' | 'text';
};
export type type8 = 'image' | 'text';
export type LogoSettingsUpdate = {
    logo_text?: string;
    type?: 'image' | 'text';
};
export type MeasurementUnitsSettings = {
    weight_measurement?: 'LBS' | 'Ounces' | 'KGS' | 'Grams' | 'Tonnes';
    length_measurement?: 'Inches' | 'Centimeters';
    decimal_token?: string;
    thousands_token?: string;
    decimal_places?: number;
    factoring_dimension?: 'depth' | 'height' | 'width';
};
export type weight_measurement = 'LBS' | 'Ounces' | 'KGS' | 'Grams' | 'Tonnes';
export type length_measurement = 'Inches' | 'Centimeters';
export type factoring_dimension = 'depth' | 'height' | 'width';
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
export type ParameterAccept = string;
export type ParameterChannelIdParam = number;
export type ParameterContentType = string;
export type ProductSortEnumValues = 'featured' | 'bestselling' | 'newest' | 'alphaasc' | 'alphadesc' | 'pricedesc' | 'priceasc' | 'avgcustomerreview' | 'relevance';
export type RobotsTxtSettings = {
    robots_txt_ssl?: string;
};
export type SearchFilterOverrideContextIdentifier = {
    category_id?: number;
    channel_id?: number;
};
export type SEOSettings = {
    meta_description?: string;
    meta_keywords?: string;
    page_title?: string;
    www_redirect?: 'www' | 'no-www' | 'none';
};
export type www_redirect = 'www' | 'no-www' | 'none';
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
export type show_breadcrumbs_product_pages = 'show_one' | 'show_none';
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
        max_age?: HSTSMaxAgeEnumValues;
    };
    sitewide_https_enabled?: boolean;
    x_frame_options_header?: {
        allowed_url?: string;
        enabled?: boolean;
        setting?: 'deny' | 'same_origin' | 'allow_from_url';
    };
};
export type setting = 'deny' | 'same_origin' | 'allow_from_url';
export type StorefrontStatus = {
    down_for_maintenance_message?: string;
    prelaunch_message?: string;
    prelaunch_password?: string;
};
export type StoreProfile = {
    store_address?: string;
    store_address_type?: AddressTypeEnumValues;
    store_email?: string;
    store_name?: string;
    store_phone?: string;
};
export type GetAnalyticsProvidersData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetAnalyticsProvidersResponse = ({
    data?: AnalyticsProviders;
    meta?: MetaOpen;
});
export type GetAnalyticsProvidersError = unknown;
export type GetAnalyticsProviderData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetAnalyticsProviderResponse = (AnalyticsProvider);
export type GetAnalyticsProviderError = (ErrorResponse400 | ErrorResponse404);
export type UpdateAnalyticsProviderData = {
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
};
export type UpdateAnalyticsProviderResponse = (AnalyticsProvider);
export type UpdateAnalyticsProviderError = (ErrorResponse400 | ErrorResponse404 | ErrorResponse409 | ErrorResponse422);
export type GetSettingsCatalogData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetSettingsCatalogResponse = ({
    data?: CatalogSettings;
    meta?: MetaOpen;
});
export type GetSettingsCatalogError = unknown;
export type UpdateSettingsCatalogData = {
    body?: CatalogSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        channel_id?: number;
    };
};
export type UpdateSettingsCatalogResponse = ({
    data?: CatalogSettings;
    meta?: MetaOpen;
});
export type UpdateSettingsCatalogError = unknown;
export type GetSettingsEmailStatusesData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetSettingsEmailStatusesResponse = ({
    data?: EnabledTransactionalEmails;
    meta?: MetaOpen;
});
export type GetSettingsEmailStatusesError = unknown;
export type UpdateSettingsEmailStatusesData = {
    body?: EnabledTransactionalEmails;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        channel_id?: number;
    };
};
export type UpdateSettingsEmailStatusesResponse = ({
    data?: EnabledTransactionalEmails;
    meta?: MetaOpen;
});
export type UpdateSettingsEmailStatusesError = unknown;
export type CreateSettingsFaviconImageData = {
    body?: {
        FaviconFile?: (Blob | File);
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        channel_id?: number;
    };
};
export type CreateSettingsFaviconImageResponse = (void);
export type CreateSettingsFaviconImageError = unknown;
export type GetSettingsInventoryNotificationsData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetSettingsInventoryNotificationsResponse = ({
    data?: InventoryNotificationsSettings;
    meta?: MetaOpen;
});
export type GetSettingsInventoryNotificationsError = unknown;
export type UpdateSettingsInventoryNotificationsData = {
    body?: InventoryNotificationsSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        channel_id?: number;
    };
};
export type UpdateSettingsInventoryNotificationsResponse = (unknown);
export type UpdateSettingsInventoryNotificationsError = unknown;
export type GetSettingsLogoData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetSettingsLogoResponse = ({
    data?: LogoSettings;
    meta?: MetaOpen;
});
export type GetSettingsLogoError = unknown;
export type UpdateSettingsLogoData = {
    body?: LogoSettingsUpdate;
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
    };
};
export type UpdateSettingsLogoResponse = ({
    data?: LogoSettings;
    meta?: MetaOpen;
});
export type UpdateSettingsLogoError = unknown;
export type CreateSettingsLogoImageData = {
    body?: {
        LogoFile?: (Blob | File);
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        channel_id?: number;
    };
};
export type CreateSettingsLogoImageResponse = (void);
export type CreateSettingsLogoImageError = unknown;
export type GetSettingsEnabledSearchFiltersResponse = ({
    data?: ConfiguredFilters;
    meta?: MetaOpen;
});
export type GetSettingsEnabledSearchFiltersError = unknown;
export type UpdateSettingsEnabledSearchFiltersData = {
    body?: ConfiguredFilters;
    headers: {
        'Content-Type': string;
    };
};
export type UpdateSettingsEnabledSearchFiltersResponse = ({
    data?: ConfiguredFilters;
    meta?: MetaOpen;
});
export type UpdateSettingsEnabledSearchFiltersError = unknown;
export type GetSettingsAvailableFiltersData = {
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        category_id?: number;
        channel_id?: number;
    };
};
export type GetSettingsAvailableFiltersResponse = ({
    data?: Array<AvailableFilter>;
    meta?: MetaOpen;
});
export type GetSettingsAvailableFiltersError = unknown;
export type GetSettingsFiltersContextsData = {
    headers: {
        Accept: string;
    };
    query?: {
        category_id?: number;
        channel_id?: number;
    };
};
export type GetSettingsFiltersContextsResponse = ({
    data?: Array<ConfiguredFiltersOverride>;
    meta?: MetaPaginationObject;
});
export type GetSettingsFiltersContextsError = unknown;
export type UpsertSettingsFiltersContextsData = {
    body?: Array<ConfiguredFiltersOverride>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpsertSettingsFiltersContextsResponse = ({
    data?: Array<ConfiguredFiltersOverride>;
    meta?: MetaOpen;
});
export type UpsertSettingsFiltersContextsError = unknown;
export type GetSettingsLocaleData = {
    headers: {
        Accept: string;
    };
};
export type GetSettingsLocaleResponse = ({
    data?: Locale;
    meta?: MetaOpen;
});
export type GetSettingsLocaleError = unknown;
export type UpdateSettingsLocaleData = {
    body?: Locale;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateSettingsLocaleResponse = ({
    data?: Locale;
    meta?: MetaOpen;
});
export type UpdateSettingsLocaleError = (ErrorResponse);
export type GetSettingsStoreProfileData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetSettingsStoreProfileResponse = ({
    data?: StoreProfile;
    meta?: MetaOpen;
});
export type GetSettingsStoreProfileError = unknown;
export type UpdateSettingsStoreProfileData = {
    body?: StoreProfile;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        channel_id?: number;
    };
};
export type UpdateSettingsStoreProfileResponse = ({
    data?: StoreProfile;
    meta?: MetaOpen;
});
export type UpdateSettingsStoreProfileError = (ErrorResponse);
export type GetSettingsStorefrontCategoryData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetSettingsStorefrontCategoryResponse = ({
    data?: StorefrontCategorySettings;
    meta?: MetaOpen;
});
export type GetSettingsStorefrontCategoryError = unknown;
export type UpdateSettingsStorefrontCategoryData = {
    body?: StorefrontCategorySettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        channel_id?: number;
    };
};
export type UpdateSettingsStorefrontCategoryResponse = ({
    data?: StorefrontCategorySettings;
    meta?: MetaOpen;
});
export type UpdateSettingsStorefrontCategoryError = ({
    errors?: {
        ''?: string;
    };
    status?: number;
    title?: string;
    type?: string;
});
export type GetSettingsStorefrontProductData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetSettingsStorefrontProductResponse = ({
    data?: StorefrontProductSettings;
    meta?: MetaOpen;
});
export type GetSettingsStorefrontProductError = unknown;
export type UpdateSettingsStorefrontProductData = {
    body?: StorefrontProductSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        channel_id?: number;
    };
};
export type UpdateSettingsStorefrontProductResponse = ({
    data?: StorefrontProductSettings;
    meta?: MetaOpen;
});
export type UpdateSettingsStorefrontProductError = ({
    errors?: {
        ''?: string;
    };
    status?: number;
    title?: string;
    type?: string;
});
export type GetSettingsRobotsTxtData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetSettingsRobotsTxtResponse = ({
    data?: RobotsTxtSettings;
    meta?: MetaOpen;
});
export type GetSettingsRobotsTxtError = unknown;
export type UpdateSettingsRobotsTxtData = {
    body?: RobotsTxtSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        channel_id?: number;
    };
};
export type UpdateSettingsRobotsTxtResponse = ({
    data?: RobotsTxtSettings;
    meta?: MetaOpen;
});
export type UpdateSettingsRobotsTxtError = unknown;
export type GetSettingsStorefrontSearchData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetSettingsStorefrontSearchResponse = ({
    data?: StorefrontSearchSettings;
    meta?: MetaOpen;
});
export type GetSettingsStorefrontSearchError = unknown;
export type UpdateSettingsStorefrontSearchData = {
    body?: StorefrontSearchSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        channel_id?: number;
    };
};
export type UpdateSettingsStorefrontSearchResponse = ({
    data?: StorefrontSearchSettings;
    meta?: MetaOpen;
});
export type UpdateSettingsStorefrontSearchError = unknown;
export type GetSettingsStorefrontSecurityData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetSettingsStorefrontSecurityResponse = ({
    data?: StorefrontSecuritySettings;
    meta?: MetaOpen;
});
export type GetSettingsStorefrontSecurityError = unknown;
export type UpdateSettingsStorefrontSecurityData = {
    body?: StorefrontSecuritySettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        channel_id?: number;
    };
};
export type UpdateSettingsStorefrontSecurityResponse = ({
    data?: StorefrontSecuritySettings;
    meta?: MetaOpen;
});
export type UpdateSettingsStorefrontSecurityError = unknown;
export type GetSettingsStorefrontSeoData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetSettingsStorefrontSeoResponse = ({
    data?: SEOSettings;
    meta?: MetaOpen;
});
export type GetSettingsStorefrontSeoError = unknown;
export type UpdateSettingsStorefrontSeoData = {
    body?: SEOSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        channel_id?: number;
    };
};
export type UpdateSettingsStorefrontSeoResponse = ({
    data?: SEOSettings;
    meta?: MetaOpen;
});
export type UpdateSettingsStorefrontSeoError = ({
    errors?: {
        ''?: string;
    };
    status?: number;
    title?: string;
    type?: string;
});
export type GetSettingsStorefrontStatusData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetSettingsStorefrontStatusResponse = ({
    data?: StorefrontStatus;
    meta?: MetaOpen;
});
export type GetSettingsStorefrontStatusError = unknown;
export type UpdateSettingsStorefrontStatusData = {
    body?: StorefrontStatus;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        channel_id?: number;
    };
};
export type UpdateSettingsStorefrontStatusResponse = ({
    data?: StorefrontStatus;
    meta?: MetaOpen;
});
export type UpdateSettingsStorefrontStatusError = unknown;
export type GetSettingsInventoryData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
    };
};
export type GetSettingsInventoryResponse = ({
    data?: InventorySettings;
    meta?: MetaOpen;
});
export type GetSettingsInventoryError = (ErrorResponse);
export type UpdateSettingsInventoryData = {
    body?: InventorySettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        channel_id?: number;
    };
};
export type UpdateSettingsInventoryResponse = ({
    data?: InventorySettings;
    meta?: MetaOpen;
});
export type UpdateSettingsInventoryError = unknown;
export type GetSettingsMeasurementUnitsData = {
    query?: {
        channel_id?: number;
    };
};
export type GetSettingsMeasurementUnitsResponse = ({
    data?: MeasurementUnitsSettings;
    meta?: {
        [key: string]: unknown;
    };
});
export type GetSettingsMeasurementUnitsError = (ErrorResponse);
export type UpdateSettingsMeasurementUnitsData = {
    body?: MeasurementUnitsSettings;
    query?: {
        channel_id?: number;
    };
};
export type UpdateSettingsMeasurementUnitsResponse = ({
    data?: MeasurementUnitsSettings;
    meta?: {
        [key: string]: unknown;
    };
});
export type UpdateSettingsMeasurementUnitsError = unknown;
