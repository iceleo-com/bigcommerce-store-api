export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2' | (string & {});
};
export type StoreInformation = {
    id?: string;
    domain?: string;
    secure_url?: string;
    control_panel_base_url?: string;
    name?: string;
    first_name?: string;
    last_name?: string;
    address?: string;
    country?: string;
    phone?: string;
    admin_email?: string;
    order_email?: string;
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
    'dimension_thousands_token:'?: string;
    plan_name?: string;
    plan_level?: string;
    industry?: string;
    logo?: {
        url?: string;
    };
    is_price_entered_with_tax?: boolean;
    active_comparison_modules?: Array<unknown>;
    features?: {
        checkout_type?: string;
        facebook_catalog_id?: string;
        graphql_storefront_api_enabled?: boolean;
        stencil_enabled?: boolean;
        sitewidehttps_enabled?: boolean;
        multi_storefront_enabled?: boolean;
        shopper_consent_tracking_enabled?: boolean;
        wishlists_enabled?: boolean;
    };
    account_uuid?: string;
    default_channel_id?: number;
    default_site_id?: number;
    plan_is_trial?: boolean;
    store_id?: number;
    status?: string;
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
export type GetStoreData = {
    body?: never;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/store';
};
export type GetStoreResponses = {
    200: unknown;
};
export type GetTimeData = {
    body?: never;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/time';
};
export type GetTimeResponses = {
    200: TimeStampFull;
};
export type GetTimeResponse = GetTimeResponses[keyof GetTimeResponses];
