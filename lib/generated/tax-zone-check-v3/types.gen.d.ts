export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type ZoneCheck = {
    country_code: string;
    subdivision_code?: string;
    postal_code?: string;
    customer_group_id?: number;
};
export type TaxZoneCheckZoneCheckResponse200 = {
    data?: Array<TaxZone>;
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
export type ZoneCheckData = {
    body?: Array<ZoneCheck>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/tax/zonecheck';
};
export type ZoneCheckErrors = {
    422: unknown;
};
export type ZoneCheckResponses = {
    200: TaxZoneCheckZoneCheckResponse200;
};
export type ZoneCheckResponse = ZoneCheckResponses[keyof ZoneCheckResponses];
