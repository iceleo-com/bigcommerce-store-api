export type Meta = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
        links?: {
            current?: string;
        };
    };
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type ParameterAccept = string;
export type ParameterContent_Type = string;
export type ParameteridIn = Array<(number)>;
export type ParameterrateIdIn = Array<(number)>;
export type ParameterstoreHash = string;
export type ParametertaxZoneIdIn = Array<(number)>;
export type ParameterzoneIdIn = Array<(number)>;
export type Tax_Rate = {
    class_rates?: Array<{
        rate?: number;
        tax_class_id?: number;
    }>;
    enabled?: boolean;
    id?: number;
    name?: string;
    priority?: number;
    tax_zone_id?: number;
};
export type Tax_RatePOST = {
    class_rates: Array<{
        rate: number;
        tax_class_id: number;
    }>;
    enabled?: boolean;
    name: string;
    priority?: number;
    tax_zone_id: number;
};
export type Tax_RatePUT = {
    class_rates?: Array<{
        rate?: number;
        tax_class_id?: number;
    }>;
    enabled?: boolean;
    id: number;
    name?: string;
    priority?: number;
    tax_zone_id?: number;
};
export type Tax_Zone = {
    id?: number;
    name?: string;
    enabled?: boolean;
    price_display_settings?: {
        show_inclusive?: boolean;
        show_both_on_detail_view?: boolean;
        show_both_on_list_view?: boolean;
    };
    shopper_target_settings?: {
        locations?: Array<{
            country_code?: string;
            subdivision_codes?: Array<(string)>;
            postal_codes?: Array<(string)>;
        }>;
        customer_groups?: Array<(number)>;
    };
};
export type Tax_ZonePOST = {
    name: string;
    enabled?: boolean;
    price_display_settings?: {
        show_inclusive: boolean;
        show_both_on_detail_view?: boolean;
        show_both_on_list_view?: boolean;
    };
    shopper_target_settings?: {
        locations: Array<{
            country_code?: string;
            subdivision_codes?: Array<(string)>;
            postal_codes?: Array<(string)>;
        }>;
        customer_groups?: Array<(number)>;
    };
};
export type Tax_ZonePUT = {
    id: number;
    name?: string;
    enabled?: boolean;
    price_display_settings?: {
        show_inclusive?: boolean;
        show_both_on_detail_view?: boolean;
        show_both_on_list_view?: boolean;
    };
    shopper_target_settings?: {
        locations?: Array<{
            country_code?: string;
            subdivision_codes?: Array<(string)>;
            postal_codes?: Array<(string)>;
        }>;
        customer_groups?: Array<(number)>;
    };
};
export type GetTaxZonesData = {
    headers: {
        Accept: string;
    };
    query?: {
        'id:in'?: Array<(number)>;
    };
};
export type GetTaxZonesResponse = ({
    data?: Array<Tax_Zone>;
    meta?: MetaOpen;
});
export type GetTaxZonesError = unknown;
export type UpdateTaxZonesData = {
    body: Array<Tax_ZonePUT>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateTaxZonesResponse = ({
    data?: Array<Tax_Zone>;
    meta?: MetaOpen;
});
export type UpdateTaxZonesError = unknown;
export type CreateTaxZonesData = {
    body: Array<Tax_ZonePOST>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateTaxZonesResponse = ({
    data?: Array<Tax_Zone>;
    meta?: MetaOpen;
});
export type CreateTaxZonesError = unknown;
export type DeleteTaxZonesData = {
    headers: {
        Accept: string;
    };
    query?: {
        'id:in'?: Array<(number)>;
    };
};
export type DeleteTaxZonesResponse = (void);
export type DeleteTaxZonesError = unknown;
export type GetTaxRatesData = {
    headers: {
        Accept: string;
    };
    query?: {
        'id:in'?: Array<(number)>;
        'tax_zone_id:in'?: Array<(number)>;
    };
};
export type GetTaxRatesResponse = ({
    data?: Array<Tax_Rate>;
    meta?: Meta;
});
export type GetTaxRatesError = unknown;
export type UpdateTaxRatesData = {
    body: Array<Tax_RatePUT>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateTaxRatesResponse = ({
    data?: Array<Tax_Rate>;
    meta?: MetaOpen;
});
export type UpdateTaxRatesError = unknown;
export type CreateTaxRatesData = {
    body: Array<Tax_RatePOST>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateTaxRatesResponse = ({
    data?: Array<Tax_Rate>;
    meta?: MetaOpen;
});
export type CreateTaxRatesError = unknown;
export type DeleteTaxRatesData = {
    headers: {
        Accept: string;
    };
    query?: {
        'id:in'?: Array<(number)>;
    };
};
export type DeleteTaxRatesResponse = (void);
export type DeleteTaxRatesError = unknown;
