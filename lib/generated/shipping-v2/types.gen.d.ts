export type carrierConnection = {
    carrier_id?: string;
    connection?: {
        [key: string]: unknown;
    };
};
export type HandlingFees = {
    fixed_surcharge?: string;
    display_separately?: boolean;
} | {
    percentage_surcharge?: string;
    display_separately?: boolean;
};
export type metaCollection = {
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
export type ParameterAccept = string;
export type ParameterContentType = string;
export type shippingMethod_Base = {
    name?: string;
    type?: ShippingMethodType;
    settings?: {
        rate?: number;
    };
    enabled?: boolean;
    handling_fees?: ({
        fixed_surcharge?: number;
    } | {
        percentage_surcharge?: number;
    });
    is_fallback?: boolean;
    channel_ids?: Array<(number)>;
};
export type shippingMethod_Full = {
    readonly id?: number;
} & shippingMethod_Base;
export type ShippingMethodType = 'perorder' | 'peritem' | 'weight' | 'total' | 'auspost' | 'canadapost' | 'endicia' | 'usps' | 'fedex' | 'royalmail' | 'upsready' | 'freeshipping';
export type ShippingProvider = 'fedex' | 'auspost' | 'canadapost' | 'endicia' | 'usps' | 'royalmail' | 'ups' | 'upsready' | 'upsonline' | 'shipperhq';
export type ShippingResponse = {
    [key: string]: unknown;
};
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
    handling_fees?: ({
        fixed_surcharge?: string;
        display_separately?: boolean;
    } | {
        percentage_surcharge?: string;
        display_separately?: boolean;
    });
    enabled?: boolean;
};
export type type = 'zip' | 'country' | 'state' | 'global';
export type ShippingZoneLocations = {
    id?: number;
    zip?: string;
    country_iso2?: string;
    state_iso2?: string;
};
export type TrackingCarrier = 'auspost' | 'canadapost' | 'endicia' | 'usps' | 'fedex' | 'royalmail' | 'ups' | 'upsready' | 'shipperhq';
export type GetShippingZonesData = {
    headers: {
        Accept: string;
    };
};
export type GetShippingZonesResponse = (Array<{
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
    handling_fees?: ({
        fixed_surcharge?: string;
        display_separately?: boolean;
    } | {
        percentage_surcharge?: string;
        display_separately?: boolean;
    });
    enabled?: boolean;
}>);
export type GetShippingZonesError = unknown;
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
        handling_fees?: ({
            fixed_surcharge?: string;
            display_separately?: boolean;
        } | {
            percentage_surcharge?: string;
            display_separately?: boolean;
        });
        enabled?: boolean;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateShippingZonesResponse = ({
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
    handling_fees?: ({
        fixed_surcharge?: string;
        display_separately?: boolean;
    } | {
        percentage_surcharge?: string;
        display_separately?: boolean;
    });
    enabled?: boolean;
});
export type CreateShippingZonesError = unknown;
export type GetShippingZoneData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
};
export type GetShippingZoneResponse = ({
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
    handling_fees?: ({
        fixed_surcharge?: string;
        display_separately?: boolean;
    } | {
        percentage_surcharge?: string;
        display_separately?: boolean;
    });
    enabled?: boolean;
});
export type GetShippingZoneError = unknown;
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
        handling_fees?: ({
            fixed_surcharge?: string;
            display_separately?: boolean;
        } | {
            percentage_surcharge?: string;
            display_separately?: boolean;
        });
        enabled?: boolean;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
};
export type UpdateShippingZoneResponse = ({
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
    handling_fees?: ({
        fixed_surcharge?: string;
        display_separately?: boolean;
    } | {
        percentage_surcharge?: string;
        display_separately?: boolean;
    });
    enabled?: boolean;
});
export type UpdateShippingZoneError = unknown;
export type DeleteShippingZoneData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
};
export type DeleteShippingZoneResponse = (void);
export type DeleteShippingZoneError = unknown;
export type GetShippingZoneMethodsData = {
    headers: {
        Accept: string;
    };
    path: {
        zone_id: number;
    };
};
export type GetShippingZoneMethodsResponse = (Array<shippingMethod_Full>);
export type GetShippingZoneMethodsError = unknown;
export type CreateShippingMethodData = {
    body: shippingMethod_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        zone_id: number;
    };
};
export type CreateShippingMethodResponse = (shippingMethod_Full);
export type CreateShippingMethodError = unknown;
export type GetShippingMethodData = {
    headers: {
        Accept: string;
    };
    path: {
        method_id: number;
        zone_id: number;
    };
};
export type GetShippingMethodResponse = ({
    readonly id?: number;
    name?: string;
    type?: ShippingMethodType;
    settings?: {
        [key: string]: unknown;
    };
    enabled?: boolean;
    handling_fees?: ({
        fixed_surcharge?: number;
    } | {
        percentage_surcharge?: number;
    });
    is_fallback?: boolean;
    channel_ids?: Array<(number)>;
});
export type GetShippingMethodError = unknown;
export type UpdateShippingMethodData = {
    body: shippingMethod_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        method_id: number;
        zone_id: number;
    };
};
export type UpdateShippingMethodResponse = (shippingMethod_Full);
export type UpdateShippingMethodError = unknown;
export type DeleteShippingMethodData = {
    headers: {
        Accept: string;
    };
    path: {
        method_id: number;
        zone_id: number;
    };
};
export type DeleteShippingMethodResponse = (void);
export type DeleteShippingMethodError = unknown;
export type UpdateCarrierConnectionData = {
    body?: carrierConnection;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateCarrierConnectionResponse = (void);
export type UpdateCarrierConnectionError = (unknown);
export type CreateCarrierConnectionData = {
    body?: carrierConnection;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateCarrierConnectionResponse = (void);
export type CreateCarrierConnectionError = (unknown);
export type DeleteCarrierConnectionData = {
    body: {
        carrier_id?: string;
    };
    headers: {
        Accept: string;
    };
};
export type DeleteCarrierConnectionResponse = (void);
export type DeleteCarrierConnectionError = (unknown);
