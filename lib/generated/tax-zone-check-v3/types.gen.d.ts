export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type ZoneCheck = {
    country_code: string;
    subdivision_codes?: string;
    postal_code?: string;
    customer_group_id?: number;
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
export type Accept = string;
export type ContentType = string;
export type ZoneCheckData = {
    body: Array<ZoneCheck>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/tax/zonecheck';
};
export type ZoneCheckErrors = {
    422: unknown;
};
export type ZoneCheckResponses = {
    200: {
        data?: Array<TaxZone>;
    };
};
export type ZoneCheckResponse = ZoneCheckResponses[keyof ZoneCheckResponses];
