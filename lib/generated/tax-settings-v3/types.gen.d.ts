export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type TaxSettings = {
    tax_entered_with_prices?: boolean;
    price_display_settings?: {
        control_panel_price_display_strategy?: 'ZONE' | 'INCLUSIVE' | 'EXCLUSIVE';
        invoice_price_display_strategy?: 'ZONE' | 'INCLUSIVE' | 'EXCLUSIVE';
    };
    fallback_strategy?: 'FIXED' | 'BASIC' | 'DISABLE';
    should_subtract_store_tax?: boolean;
    should_use_geolocation_to_determine_guest_shopper_tax_zone?: boolean;
    guest_shopper_tax_zone_id?: number;
    store_tax_zone_id?: number;
    document_submission_strategy?: 'ON_PAYMENT_CAPTURE' | 'ON_ORDER_CREATION';
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type Accept = string;
export type ContentType = string;
export type GetTaxSettingsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/tax/settings';
};
export type GetTaxSettingsResponses = {
    200: {
        data?: TaxSettings;
        meta?: MetaOpen;
    };
};
export type GetTaxSettingsResponse = GetTaxSettingsResponses[keyof GetTaxSettingsResponses];
export type UpdateTaxSettingsData = {
    body: TaxSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/tax/settings';
};
export type UpdateTaxSettingsErrors = {
    422: unknown;
};
export type UpdateTaxSettingsResponses = {
    200: {
        data?: TaxSettings;
        meta?: MetaOpen;
    };
};
export type UpdateTaxSettingsResponse = UpdateTaxSettingsResponses[keyof UpdateTaxSettingsResponses];
