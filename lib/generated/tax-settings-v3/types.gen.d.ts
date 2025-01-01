export type MetaOpen = {
    [key: string]: unknown;
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type Tax_Settings = {
    tax_entered_with_prices?: boolean;
    price_display_settings?: {
        show_inclusive_in_control_panel?: boolean;
        invoice_price_display_strategy?: 'ZONE' | 'INCLUSIVE' | 'EXCLUSIVE';
    };
    fallback_strategy?: 'FIXED' | 'BASIC' | 'DISABLE';
    should_subtract_store_tax?: boolean;
    should_use_geolocation_to_determine_guest_shopper_tax_zone?: boolean;
    guest_shopper_tax_zone_id?: number;
    store_tax_zone_id?: number;
    document_submission_strategy?: 'ON_PAYMENT_CAPTURE' | 'ON_ORDER_CREATION';
};
export type invoice_price_display_strategy = 'ZONE' | 'INCLUSIVE' | 'EXCLUSIVE';
export type fallback_strategy = 'FIXED' | 'BASIC' | 'DISABLE';
export type document_submission_strategy = 'ON_PAYMENT_CAPTURE' | 'ON_ORDER_CREATION';
export type GetTaxSettingsData = {
    headers: {
        Accept: string;
    };
};
export type GetTaxSettingsResponse = ({
    data?: Tax_Settings;
    meta?: MetaOpen;
});
export type GetTaxSettingsError = unknown;
export type UpdateTaxSettingsData = {
    body: Tax_Settings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateTaxSettingsResponse = ({
    data?: Tax_Settings;
    meta?: MetaOpen;
});
export type UpdateTaxSettingsError = (unknown);
