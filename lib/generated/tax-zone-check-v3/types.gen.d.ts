export type ParameterAccept = string;
export type ParameterContentType = string;
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
            subdivision_codes?: Array<(string)>;
            postal_codes?: Array<(string)>;
        }>;
        customer_groups?: Array<(number)>;
    };
};
export type ZoneCheck = {
    country_code: string;
    subdivision_codes?: string;
    postal_code?: string;
    customer_group_id?: number;
};
export type ZoneCheckData = {
    body: Array<ZoneCheck>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type ZoneCheckResponse = ({
    data?: Array<TaxZone>;
});
export type ZoneCheckError = (unknown);
