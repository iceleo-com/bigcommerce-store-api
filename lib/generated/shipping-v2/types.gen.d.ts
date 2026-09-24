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
export type GetAllShippingZonesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/shipping/zones';
};
export type GetAllShippingZonesResponses = {
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
export type GetAllShippingZonesResponse = GetAllShippingZonesResponses[keyof GetAllShippingZonesResponses];
export type CreateAShippingZonesData = {
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
export type CreateAShippingZonesResponses = {
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
export type CreateAShippingZonesResponse = CreateAShippingZonesResponses[keyof CreateAShippingZonesResponses];
export type DeleteAShippingZoneData = {
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
export type DeleteAShippingZoneResponses = {
    204: void;
};
export type DeleteAShippingZoneResponse = DeleteAShippingZoneResponses[keyof DeleteAShippingZoneResponses];
export type GetAShippingZoneData = {
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
export type GetAShippingZoneResponses = {
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
export type GetAShippingZoneResponse = GetAShippingZoneResponses[keyof GetAShippingZoneResponses];
export type UpdateAShippingZoneData = {
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
export type UpdateAShippingZoneResponses = {
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
export type UpdateAShippingZoneResponse = UpdateAShippingZoneResponses[keyof UpdateAShippingZoneResponses];
export type GetShippingMethodsZoneData = {
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
export type GetShippingMethodsZoneResponses = {
    200: Array<ShippingMethodFull>;
};
export type GetShippingMethodsZoneResponse = GetShippingMethodsZoneResponses[keyof GetShippingMethodsZoneResponses];
export type CreateAShippingMethodData = {
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
export type CreateAShippingMethodResponses = {
    200: ShippingMethodFull;
};
export type CreateAShippingMethodResponse = CreateAShippingMethodResponses[keyof CreateAShippingMethodResponses];
export type DeleteAShippingMethodData = {
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
export type DeleteAShippingMethodResponses = {
    204: void;
};
export type DeleteAShippingMethodResponse = DeleteAShippingMethodResponses[keyof DeleteAShippingMethodResponses];
export type GetAShippingMethodData = {
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
export type GetAShippingMethodResponses = {
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
    };
};
export type GetAShippingMethodResponse = GetAShippingMethodResponses[keyof GetAShippingMethodResponses];
export type UpdateAShippingMethodData = {
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
export type UpdateAShippingMethodResponses = {
    200: ShippingMethodFull;
};
export type UpdateAShippingMethodResponse = UpdateAShippingMethodResponses[keyof UpdateAShippingMethodResponses];
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
export type CreateACarrierConnectionData = {
    body?: CarrierConnection;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/shipping/carrier/connection';
};
export type CreateACarrierConnectionErrors = {
    400: unknown;
};
export type CreateACarrierConnectionResponses = {
    204: void;
};
export type CreateACarrierConnectionResponse = CreateACarrierConnectionResponses[keyof CreateACarrierConnectionResponses];
export type UpdateACarrierConnectionData = {
    body?: CarrierConnection;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/shipping/carrier/connection';
};
export type UpdateACarrierConnectionErrors = {
    400: unknown;
};
export type UpdateACarrierConnectionResponses = {
    204: void;
};
export type UpdateACarrierConnectionResponse = UpdateACarrierConnectionResponses[keyof UpdateACarrierConnectionResponses];
