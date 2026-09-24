export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type TaxRatePut = {
    class_rates?: Array<TaxRatePutClassRatesItems>;
    enabled?: boolean;
    id: number;
    name?: string;
    priority?: number;
    tax_zone_id?: number;
};
export type TaxRatePutClassRatesItems = {
    rate?: number;
    tax_class_id?: number;
};
export type TaxRatesUpdateTaxRatesResponse200 = {
    data?: Array<TaxRate>;
    meta?: MetaOpen;
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type TaxRate = {
    class_rates?: Array<TaxRateClassRatesItems>;
    enabled?: boolean;
    id?: number;
    name?: string;
    priority?: number;
    tax_zone_id?: number;
};
export type TaxRateClassRatesItems = {
    rate?: number;
    tax_class_id?: number;
};
export type TaxRatePost = {
    class_rates: Array<TaxRatePostClassRatesItems>;
    enabled?: boolean;
    name: string;
    priority?: number;
    tax_zone_id: number;
};
export type TaxRatePostClassRatesItems = {
    rate: number;
    tax_class_id: number;
};
export type TaxRatesCreateTaxRatesResponse200 = {
    data?: Array<TaxRate>;
    meta?: MetaOpen;
};
export type TaxRatesGetTaxRatesResponse200 = {
    data?: Array<TaxRate>;
    meta?: Meta;
};
export type Meta = {
    pagination?: MetaPagination;
};
export type MetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: MetaPaginationLinks;
};
export type MetaPaginationLinks = {
    current?: string;
};
export type TaxZonePut = {
    id: number;
    name?: string;
    enabled?: boolean;
    price_display_settings?: TaxZonePutPriceDisplaySettings;
    shopper_target_settings?: TaxZonePutShopperTargetSettings;
};
export type TaxZonePutShopperTargetSettings = {
    locations?: Array<TaxZonePutShopperTargetSettingsLocationsItems>;
    customer_groups?: Array<number>;
};
export type TaxZonePutShopperTargetSettingsLocationsItems = {
    country_code?: string;
    subdivision_codes?: Array<string>;
    postal_codes?: Array<string>;
};
export type TaxZonePutPriceDisplaySettings = {
    show_inclusive?: boolean;
    show_both_on_detail_view?: boolean;
    show_both_on_list_view?: boolean;
};
export type TaxZonesUpdateTaxZonesResponse200 = {
    data?: Array<TaxZone>;
    meta?: MetaOpen;
};
export type TaxZone = {
    id?: number;
    name?: string;
    enabled?: boolean;
    price_display_settings?: TaxZonePriceDisplaySettings;
    shopper_target_settings?: TaxZoneShopperTargetSettings;
};
export type TaxZoneShopperTargetSettings = {
    locations?: Array<TaxZoneShopperTargetSettingsLocationsItems>;
    customer_groups?: Array<number>;
};
export type TaxZoneShopperTargetSettingsLocationsItems = {
    country_code?: string;
    subdivision_codes?: Array<string>;
    postal_codes?: Array<string>;
};
export type TaxZonePriceDisplaySettings = {
    show_inclusive?: boolean;
    show_both_on_detail_view?: boolean;
    show_both_on_list_view?: boolean;
};
export type TaxZonePost = {
    name: string;
    enabled?: boolean;
    price_display_settings?: TaxZonePostPriceDisplaySettings;
    shopper_target_settings?: TaxZonePostShopperTargetSettings;
};
export type TaxZonePostShopperTargetSettings = {
    locations: Array<TaxZonePostShopperTargetSettingsLocationsItems>;
    customer_groups?: Array<number>;
};
export type TaxZonePostShopperTargetSettingsLocationsItems = {
    country_code?: string;
    subdivision_codes?: Array<string>;
    postal_codes?: Array<string>;
};
export type TaxZonePostPriceDisplaySettings = {
    show_inclusive: boolean;
    show_both_on_detail_view?: boolean;
    show_both_on_list_view?: boolean;
};
export type TaxZonesCreateTaxZonesResponse200 = {
    data?: Array<TaxZone>;
    meta?: MetaOpen;
};
export type TaxZonesGetTaxZonesResponse200 = {
    data?: Array<TaxZone>;
    meta?: MetaOpen;
};
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
    204: {
        [key: string]: unknown;
    };
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
    200: TaxZonesGetTaxZonesResponse200;
};
export type GetTaxZonesResponse = GetTaxZonesResponses[keyof GetTaxZonesResponses];
export type CreateTaxZonesData = {
    body?: Array<TaxZonePost>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/tax/zones';
};
export type CreateTaxZonesResponses = {
    200: TaxZonesCreateTaxZonesResponse200;
};
export type CreateTaxZonesResponse = CreateTaxZonesResponses[keyof CreateTaxZonesResponses];
export type UpdateTaxZonesData = {
    body?: Array<TaxZonePut>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/tax/zones';
};
export type UpdateTaxZonesResponses = {
    200: TaxZonesUpdateTaxZonesResponse200;
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
    204: {
        [key: string]: unknown;
    };
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
    200: TaxRatesGetTaxRatesResponse200;
};
export type GetTaxRatesResponse = GetTaxRatesResponses[keyof GetTaxRatesResponses];
export type CreateTaxRatesData = {
    body?: Array<TaxRatePost>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/tax/rates';
};
export type CreateTaxRatesResponses = {
    200: TaxRatesCreateTaxRatesResponse200;
};
export type CreateTaxRatesResponse = CreateTaxRatesResponses[keyof CreateTaxRatesResponses];
export type UpdateTaxRatesData = {
    body?: Array<TaxRatePut>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/tax/rates';
};
export type UpdateTaxRatesResponses = {
    200: TaxRatesUpdateTaxRatesResponse200;
};
export type UpdateTaxRatesResponse = UpdateTaxRatesResponses[keyof UpdateTaxRatesResponses];
