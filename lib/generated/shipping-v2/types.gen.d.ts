export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2' | (string & {});
};
export type TrackingCarrier = 'auspost' | 'canadapost' | 'endicia' | 'usps' | 'fedex' | 'royalmail' | 'ups' | 'upsready' | 'shipperhq';
export type ShippingProvider = 'fedex' | 'auspost' | 'canadapost' | 'endicia' | 'usps' | 'royalmail' | 'ups' | 'upsready' | 'upsonline' | 'shipperhq';
export type ShippingZone = {
    readonly id?: number;
    name: string;
    type?: 'zip' | 'country' | 'state' | 'global';
    locations?: Array<{
        id?: number;
        zip?: string;
        country_iso2?: string;
        state_iso2?: string;
    }>;
    free_shipping?: {
        enabled?: boolean;
        minimum_sub_total?: string;
        exclude_fixed_shipping_products?: boolean;
    };
    handling_fees?: {
        fixed_surcharge?: string;
        display_separately?: boolean;
    } | {
        percentage_surcharge?: string;
        display_separately?: boolean;
    };
    enabled?: boolean;
};
export type ShippingZoneLocations = {
    id?: number;
    zip?: string;
    country_iso2?: string;
    state_iso2?: string;
};
export type HandlingFees = {
    fixed_surcharge?: string;
    display_separately?: boolean;
} | {
    percentage_surcharge?: string;
    display_separately?: boolean;
};
export type ShippingMethodFull = {
    readonly id?: number;
} & ShippingMethodBase;
export type ShippingMethodType = 'perorder' | 'peritem' | 'weight' | 'total' | 'auspost' | 'canadapost' | 'endicia' | 'usps' | 'fedex' | 'royalmail' | 'upsready' | 'freeshipping';
export type ShippingMethodBase = {
    name?: string;
    type?: ShippingMethodType;
    settings?: {
        rate?: number;
    };
    enabled?: boolean;
    handling_fees?: {
        fixed_surcharge?: number;
    } | {
        percentage_surcharge?: number;
    };
    is_fallback?: boolean;
    channel_ids?: Array<number>;
};
export type ShippingResponse = {
    [key: string]: unknown;
};
export type CarrierConnection = {
    carrier_id?: string;
    connection?: {
        [key: string]: unknown;
    };
};
export type MetaCollection = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_page?: number;
        links?: {
            previous?: string;
            next?: string;
            current?: string;
        };
    };
};
export type ShippingZoneWritable = {
    name: string;
    type?: 'zip' | 'country' | 'state' | 'global';
    locations?: Array<{
        id?: number;
        zip?: string;
        country_iso2?: string;
        state_iso2?: string;
    }>;
    free_shipping?: {
        enabled?: boolean;
        minimum_sub_total?: string;
        exclude_fixed_shipping_products?: boolean;
    };
    handling_fees?: {
        fixed_surcharge?: string;
        display_separately?: boolean;
    } | {
        percentage_surcharge?: string;
        display_separately?: boolean;
    };
    enabled?: boolean;
};
export type ShippingMethodFullWritable = ShippingMethodBase;
export type ShippingResponseWritable = {
    [key: string]: unknown;
};
export type Accept = string;
export type ContentType = string;
export type GetShippingZonesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/shipping/zones';
};
export type GetShippingZonesResponses = {
    200: Array<{
        id?: number;
        name?: string;
        type?: 'zip' | 'country' | 'state' | 'global';
        locations?: Array<{
            id?: number;
            zip?: string;
            country_iso2?: string;
            state_iso2?: string;
        }>;
        free_shipping?: {
            enabled?: boolean;
            minimum_sub_total?: string;
            exclude_fixed_shipping_products?: boolean;
        };
        handling_fees?: {
            fixed_surcharge?: string;
            display_separately?: boolean;
        } | {
            percentage_surcharge?: string;
            display_separately?: boolean;
        };
        enabled?: boolean;
    }>;
};
export type GetShippingZonesResponse = GetShippingZonesResponses[keyof GetShippingZonesResponses];
export type CreateShippingZonesData = {
    body?: {
        name: string;
        type: 'zip' | 'country' | 'state' | 'global';
        locations?: Array<{
            id?: number;
            zip?: string;
            country_iso2?: string;
            state_iso2?: string;
        }>;
        free_shipping?: {
            enabled?: boolean;
            minimum_sub_total?: string;
            exclude_fixed_shipping_products?: boolean;
        };
        handling_fees?: {
            fixed_surcharge?: string;
            display_separately?: boolean;
        } | {
            percentage_surcharge?: string;
            display_separately?: boolean;
        };
        enabled?: boolean;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/shipping/zones';
};
export type CreateShippingZonesResponses = {
    201: {
        id?: number;
        name?: string;
        type?: 'zip' | 'country' | 'state' | 'global';
        locations?: Array<{
            id?: number;
            zip?: string;
            country_iso2?: string;
            state_iso2?: string;
        }>;
        free_shipping?: {
            enabled?: boolean;
            minimum_sub_total?: string;
            exclude_fixed_shipping_products?: boolean;
        };
        handling_fees?: {
            fixed_surcharge?: string;
            display_separately?: boolean;
        } | {
            percentage_surcharge?: string;
            display_separately?: boolean;
        };
        enabled?: boolean;
    };
};
export type CreateShippingZonesResponse = CreateShippingZonesResponses[keyof CreateShippingZonesResponses];
export type DeleteShippingZoneData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/shipping/zones/{id}';
};
export type DeleteShippingZoneResponses = {
    204: void;
};
export type DeleteShippingZoneResponse = DeleteShippingZoneResponses[keyof DeleteShippingZoneResponses];
export type GetShippingZoneData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/shipping/zones/{id}';
};
export type GetShippingZoneResponses = {
    200: {
        id?: number;
        name?: string;
        type?: 'zip' | 'country' | 'state' | 'global';
        locations?: Array<{
            id?: number;
            zip?: string;
            country_iso2?: string;
            state_iso2?: string;
        }>;
        free_shipping?: {
            enabled?: boolean;
            minimum_sub_total?: string;
            exclude_fixed_shipping_products?: boolean;
        };
        handling_fees?: {
            fixed_surcharge?: string;
            display_separately?: boolean;
        } | {
            percentage_surcharge?: string;
            display_separately?: boolean;
        };
        enabled?: boolean;
    };
};
export type GetShippingZoneResponse = GetShippingZoneResponses[keyof GetShippingZoneResponses];
export type UpdateShippingZoneData = {
    body: {
        readonly id?: number;
        name: string;
        type?: 'zip' | 'country' | 'state' | 'global';
        locations?: Array<{
            id?: number;
            zip?: string;
            country_iso2?: string;
            state_iso2?: string;
        }>;
        free_shipping?: {
            enabled?: boolean;
            minimum_sub_total?: string;
            exclude_fixed_shipping_products?: boolean;
        };
        handling_fees?: {
            fixed_surcharge?: string;
            display_separately?: boolean;
        } | {
            percentage_surcharge?: string;
            display_separately?: boolean;
        };
        enabled?: boolean;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/shipping/zones/{id}';
};
export type UpdateShippingZoneResponses = {
    200: {
        readonly id?: number;
        name: string;
        type?: 'zip' | 'country' | 'state' | 'global';
        locations?: Array<{
            id?: number;
            zip?: string;
            country_iso2?: string;
            state_iso2?: string;
        }>;
        free_shipping?: {
            enabled?: boolean;
            minimum_sub_total?: string;
            exclude_fixed_shipping_products?: boolean;
        };
        handling_fees?: {
            fixed_surcharge?: string;
            display_separately?: boolean;
        } | {
            percentage_surcharge?: string;
            display_separately?: boolean;
        };
        enabled?: boolean;
    };
};
export type UpdateShippingZoneResponse = UpdateShippingZoneResponses[keyof UpdateShippingZoneResponses];
export type GetShippingZoneMethodsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        zone_id: number;
    };
    query?: never;
    url: '/shipping/zones/{zone_id}/methods';
};
export type GetShippingZoneMethodsResponses = {
    200: Array<ShippingMethodFull>;
};
export type GetShippingZoneMethodsResponse = GetShippingZoneMethodsResponses[keyof GetShippingZoneMethodsResponses];
export type CreateShippingMethodData = {
    body: ShippingMethodBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        zone_id: number;
    };
    query?: never;
    url: '/shipping/zones/{zone_id}/methods';
};
export type CreateShippingMethodResponses = {
    200: ShippingMethodFull;
};
export type CreateShippingMethodResponse = CreateShippingMethodResponses[keyof CreateShippingMethodResponses];
export type DeleteShippingMethodData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        zone_id: number;
        method_id: number;
    };
    query?: never;
    url: '/shipping/zones/{zone_id}/methods/{method_id}';
};
export type DeleteShippingMethodResponses = {
    204: void;
};
export type DeleteShippingMethodResponse = DeleteShippingMethodResponses[keyof DeleteShippingMethodResponses];
export type GetShippingMethodData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        zone_id: number;
        method_id: number;
    };
    query?: never;
    url: '/shipping/zones/{zone_id}/methods/{method_id}';
};
export type GetShippingMethodResponses = {
    200: {
        readonly id?: number;
        name?: string;
        type?: ShippingMethodType;
        settings?: {
            [key: string]: unknown;
        };
        enabled?: boolean;
        handling_fees?: {
            fixed_surcharge?: number;
        } | {
            percentage_surcharge?: number;
        };
        is_fallback?: boolean;
        channel_ids?: Array<number>;
    };
};
export type GetShippingMethodResponse = GetShippingMethodResponses[keyof GetShippingMethodResponses];
export type UpdateShippingMethodData = {
    body: ShippingMethodBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        zone_id: number;
        method_id: number;
    };
    query?: never;
    url: '/shipping/zones/{zone_id}/methods/{method_id}';
};
export type UpdateShippingMethodResponses = {
    200: ShippingMethodFull;
};
export type UpdateShippingMethodResponse = UpdateShippingMethodResponses[keyof UpdateShippingMethodResponses];
export type DeleteCarrierConnectionData = {
    body: {
        carrier_id?: string;
    };
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/shipping/carrier/connection';
};
export type DeleteCarrierConnectionErrors = {
    400: unknown;
};
export type DeleteCarrierConnectionResponses = {
    204: void;
};
export type DeleteCarrierConnectionResponse = DeleteCarrierConnectionResponses[keyof DeleteCarrierConnectionResponses];
export type CreateCarrierConnectionData = {
    body?: CarrierConnection;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/shipping/carrier/connection';
};
export type CreateCarrierConnectionErrors = {
    400: unknown;
};
export type CreateCarrierConnectionResponses = {
    204: void;
};
export type CreateCarrierConnectionResponse = CreateCarrierConnectionResponses[keyof CreateCarrierConnectionResponses];
export type UpdateCarrierConnectionData = {
    body?: CarrierConnection;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/shipping/carrier/connection';
};
export type UpdateCarrierConnectionErrors = {
    400: unknown;
};
export type UpdateCarrierConnectionResponses = {
    204: void;
};
export type UpdateCarrierConnectionResponse = UpdateCarrierConnectionResponses[keyof UpdateCarrierConnectionResponses];
