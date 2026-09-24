export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type TaxSettings = {
    tax_entered_with_prices?: boolean;
    price_display_settings?: TaxSettingsPriceDisplaySettings;
    fallback_strategy?: TaxSettingsFallbackStrategy;
    should_subtract_store_tax?: boolean;
    should_use_geolocation_to_determine_guest_shopper_tax_zone?: boolean;
    guest_shopper_tax_zone_id?: number;
    store_tax_zone_id?: number;
    document_submission_strategy?: TaxSettingsDocumentSubmissionStrategy;
    rounding_strategy?: TaxSettingsRoundingStrategy;
};
export type TaxSettingsRoundingStrategy = 'NO_ROUNDING' | 'RATE_RESULT_ROUNDING' | 'UNIT_LEVEL_ROUNDING';
export type TaxSettingsDocumentSubmissionStrategy = 'ON_PAYMENT_CAPTURE' | 'ON_ORDER_CREATION';
export type TaxSettingsFallbackStrategy = 'FIXED' | 'BASIC' | 'DISABLE';
export type TaxSettingsPriceDisplaySettings = {
    control_panel_price_display_strategy?: TaxSettingsPriceDisplaySettingsControlPanelPriceDisplayStrategy;
    invoice_price_display_strategy?: TaxSettingsPriceDisplaySettingsInvoicePriceDisplayStrategy;
};
export type TaxSettingsPriceDisplaySettingsInvoicePriceDisplayStrategy = 'ZONE' | 'INCLUSIVE' | 'EXCLUSIVE';
export type TaxSettingsPriceDisplaySettingsControlPanelPriceDisplayStrategy = 'ZONE' | 'INCLUSIVE' | 'EXCLUSIVE';
export type TaxSettingsUpdateTaxSettingsResponse200 = {
    data?: TaxSettings;
    meta?: MetaOpen;
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type TaxSettingsGetTaxSettingsResponse200 = {
    data?: TaxSettings;
    meta?: MetaOpen;
};
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
    200: TaxSettingsGetTaxSettingsResponse200;
};
export type GetTaxSettingsResponse = GetTaxSettingsResponses[keyof GetTaxSettingsResponses];
export type UpdateTaxSettingsData = {
    body?: TaxSettings;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/tax/settings';
};
export type UpdateTaxSettingsErrors = {
    422: unknown;
};
export type UpdateTaxSettingsResponses = {
    200: TaxSettingsUpdateTaxSettingsResponse200;
};
export type UpdateTaxSettingsResponse = UpdateTaxSettingsResponses[keyof UpdateTaxSettingsResponses];
