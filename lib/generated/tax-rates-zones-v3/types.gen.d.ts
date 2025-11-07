export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type TaxZone = {
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
            subdivision_codes?: Array<string>;
            postal_codes?: Array<string>;
        }>;
        customer_groups?: Array<number>;
    };
};
export type TaxZonePut = {
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
            subdivision_codes?: Array<string>;
            postal_codes?: Array<string>;
        }>;
        customer_groups?: Array<number>;
    };
};
export type TaxZonePost = {
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
            subdivision_codes?: Array<string>;
            postal_codes?: Array<string>;
        }>;
        customer_groups?: Array<number>;
    };
};
export type TaxRate = {
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
export type TaxRatePut = {
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
export type TaxRatePost = {
    class_rates: Array<{
        rate: number;
        tax_class_id: number;
    }>;
    enabled?: boolean;
    name: string;
    priority?: number;
    tax_zone_id: number;
};
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
export type StoreHash = string;
export type Accept = string;
export type ContentType = string;
export type IdIn = Array<number>;
export type ZoneIdIn = Array<number>;
export type RateIdIn = Array<number>;
export type TaxZoneIdIn = Array<number>;
export type TaxRateArray = Array<TaxRatePut>;
export type TaxRateArrayPost = Array<TaxRatePost>;
export type TaxZoneArray = Array<TaxZonePut>;
export type TaxZoneArrayPost = Array<TaxZonePost>;
export type DeleteTaxZonesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'id:in'?: Array<number>;
    };
    url: '/tax/zones';
};
export type DeleteTaxZonesResponses = {
    204: void;
};
export type DeleteTaxZonesResponse = DeleteTaxZonesResponses[keyof DeleteTaxZonesResponses];
export type GetTaxZonesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'id:in'?: Array<number>;
    };
    url: '/tax/zones';
};
export type GetTaxZonesResponses = {
    200: {
        data?: Array<TaxZone>;
        meta?: MetaOpen;
    };
};
export type GetTaxZonesResponse = GetTaxZonesResponses[keyof GetTaxZonesResponses];
export type CreateTaxZonesData = {
    body: TaxZoneArrayPost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/tax/zones';
};
export type CreateTaxZonesResponses = {
    200: {
        data?: Array<TaxZone>;
        meta?: MetaOpen;
    };
};
export type CreateTaxZonesResponse = CreateTaxZonesResponses[keyof CreateTaxZonesResponses];
export type UpdateTaxZonesData = {
    body: TaxZoneArray;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/tax/zones';
};
export type UpdateTaxZonesResponses = {
    200: {
        data?: Array<TaxZone>;
        meta?: MetaOpen;
    };
};
export type UpdateTaxZonesResponse = UpdateTaxZonesResponses[keyof UpdateTaxZonesResponses];
export type DeleteTaxRatesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'id:in'?: Array<number>;
    };
    url: '/tax/rates';
};
export type DeleteTaxRatesResponses = {
    204: void;
};
export type DeleteTaxRatesResponse = DeleteTaxRatesResponses[keyof DeleteTaxRatesResponses];
export type GetTaxRatesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'id:in'?: Array<number>;
        'tax_zone_id:in'?: Array<number>;
    };
    url: '/tax/rates';
};
export type GetTaxRatesResponses = {
    200: {
        data?: Array<TaxRate>;
        meta?: Meta;
    };
};
export type GetTaxRatesResponse = GetTaxRatesResponses[keyof GetTaxRatesResponses];
export type CreateTaxRatesData = {
    body: TaxRateArrayPost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/tax/rates';
};
export type CreateTaxRatesResponses = {
    200: {
        data?: Array<TaxRate>;
        meta?: MetaOpen;
    };
};
export type CreateTaxRatesResponse = CreateTaxRatesResponses[keyof CreateTaxRatesResponses];
export type UpdateTaxRatesData = {
    body: TaxRateArray;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/tax/rates';
};
export type UpdateTaxRatesResponses = {
    200: {
        data?: Array<TaxRate>;
        meta?: MetaOpen;
    };
};
export type UpdateTaxRatesResponse = UpdateTaxRatesResponses[keyof UpdateTaxRatesResponses];
