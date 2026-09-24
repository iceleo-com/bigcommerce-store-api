export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2' | (string & {});
};
export type CarrierConnectionConnection = {
    [key: string]: unknown;
};
export type CarrierConnection = {
    carrier_id?: string;
    connection?: CarrierConnectionConnection;
};
export type ShippingMethodType = 'perorder' | 'peritem' | 'weight' | 'total' | 'auspost' | 'canadapost' | 'endicia' | 'usps' | 'fedex' | 'royalmail' | 'upsready' | 'freeshipping' | 'pickupinstore' | `carrier_${number}`;
export type ShippingMethodBaseSettings = {
    rate?: number;
    default_cost?: number | null;
    default_cost_type?: 'fixed_amount' | 'percentage_of_total';
    range?: Array<ShippingMethodSettingsRange>;
    carrier_options?: {
        packaging?: Array<unknown>;
        [key: string]: unknown;
    };
};
export type ShippingMethodSettingsRange = {
    lower_limit?: number;
    upper_limit?: number;
    shipping_cost?: number;
};
export type ShippingMethodBaseHandlingFees0 = {
    fixed_surcharge?: number;
};
export type ShippingMethodBaseHandlingFees1 = {
    percentage_surcharge?: number;
};
export type ShippingMethodBaseHandlingFees = ShippingMethodBaseHandlingFees0 | ShippingMethodBaseHandlingFees1;
export type ShippingMethodFull = {
    name?: string;
    type?: ShippingMethodType;
    settings?: ShippingMethodBaseSettings | [];
    enabled?: boolean;
    handling_fees?: ShippingMethodBaseHandlingFees;
    is_fallback?: boolean;
    channel_ids?: Array<number>;
    id?: number;
};
export type ShippingMethodBase = {
    name?: string;
    type?: ShippingMethodType;
    settings?: ShippingMethodBaseSettings;
    enabled?: boolean;
    handling_fees?: ShippingMethodBaseHandlingFees;
    is_fallback?: boolean;
    channel_ids?: Array<number>;
};
export type ShippingZonesZoneIdMethodsMethodIdGetResponsesContentApplicationJsonSchemaSettings = {
    [key: string]: unknown;
};
export type ShippingZonesZoneIdMethodsMethodIdGetResponsesContentApplicationJsonSchemaHandlingFees0 = {
    fixed_surcharge?: number;
};
export type ShippingZonesZoneIdMethodsMethodIdGetResponsesContentApplicationJsonSchemaHandlingFees1 = {
    percentage_surcharge?: number;
};
export type ShippingZonesZoneIdMethodsMethodIdGetResponsesContentApplicationJsonSchemaHandlingFees = ShippingZonesZoneIdMethodsMethodIdGetResponsesContentApplicationJsonSchemaHandlingFees0 | ShippingZonesZoneIdMethodsMethodIdGetResponsesContentApplicationJsonSchemaHandlingFees1;
export type ShippingMethodGetShippingMethodResponse200 = {
    id?: number;
    name?: string;
    type?: ShippingMethodType;
    settings?: ShippingMethodBaseSettings | [];
    enabled?: boolean;
    handling_fees?: ShippingZonesZoneIdMethodsMethodIdGetResponsesContentApplicationJsonSchemaHandlingFees;
    is_fallback?: boolean;
    channel_ids?: Array<number>;
};
export type ShippingZonesGetResponsesContentApplicationJsonSchemaItemsType = 'zip' | 'country' | 'state' | 'global';
export type ShippingZonesGetResponsesContentApplicationJsonSchemaItemsLocationsItems = {
    id?: number;
    zip?: string;
    country_iso2?: string;
    state_iso2?: string;
};
export type ShippingZonesGetResponsesContentApplicationJsonSchemaItemsFreeShipping = {
    enabled?: boolean;
    minimum_sub_total?: string;
    exclude_fixed_shipping_products?: boolean;
};
export type ShippingZonesGetResponsesContentApplicationJsonSchemaItemsHandlingFees0 = {
    fixed_surcharge?: string;
    display_separately?: boolean;
};
export type ShippingZonesGetResponsesContentApplicationJsonSchemaItemsHandlingFees1 = {
    percentage_surcharge?: string;
    display_separately?: boolean;
};
export type ShippingZonesGetResponsesContentApplicationJsonSchemaItemsHandlingFees = ShippingZonesGetResponsesContentApplicationJsonSchemaItemsHandlingFees0 | ShippingZonesGetResponsesContentApplicationJsonSchemaItemsHandlingFees1;
export type ShippingZonesGetResponsesContentApplicationJsonSchemaItems = {
    id?: number;
    name?: string;
    type?: ShippingZonesGetResponsesContentApplicationJsonSchemaItemsType;
    locations?: Array<ShippingZonesGetResponsesContentApplicationJsonSchemaItemsLocationsItems>;
    free_shipping?: ShippingZonesGetResponsesContentApplicationJsonSchemaItemsFreeShipping;
    handling_fees?: ShippingZonesGetResponsesContentApplicationJsonSchemaItemsHandlingFees;
    enabled?: boolean;
};
export type ShippingZonesPostRequestBodyContentApplicationJsonSchemaType = 'zip' | 'country' | 'state' | 'global';
export type ShippingZonesPostRequestBodyContentApplicationJsonSchemaLocationsItems = {
    id?: number;
    zip?: string;
    country_iso2?: string;
    state_iso2?: string;
};
export type ShippingZonesPostRequestBodyContentApplicationJsonSchemaFreeShipping = {
    enabled?: boolean;
    minimum_sub_total?: string;
    exclude_fixed_shipping_products?: boolean;
};
export type ShippingZonesPostRequestBodyContentApplicationJsonSchemaHandlingFees0 = {
    fixed_surcharge?: string;
    display_separately?: boolean;
};
export type ShippingZonesPostRequestBodyContentApplicationJsonSchemaHandlingFees1 = {
    percentage_surcharge?: string;
    display_separately?: boolean;
};
export type ShippingZonesPostRequestBodyContentApplicationJsonSchemaHandlingFees = ShippingZonesPostRequestBodyContentApplicationJsonSchemaHandlingFees0 | ShippingZonesPostRequestBodyContentApplicationJsonSchemaHandlingFees1;
export type ShippingZonesPostResponsesContentApplicationJsonSchemaType = 'zip' | 'country' | 'state' | 'global';
export type ShippingZonesPostResponsesContentApplicationJsonSchemaLocationsItems = {
    id?: number;
    zip?: string;
    country_iso2?: string;
    state_iso2?: string;
};
export type ShippingZonesPostResponsesContentApplicationJsonSchemaFreeShipping = {
    enabled?: boolean;
    minimum_sub_total?: string;
    exclude_fixed_shipping_products?: boolean;
};
export type ShippingZonesPostResponsesContentApplicationJsonSchemaHandlingFees0 = {
    fixed_surcharge?: string;
    display_separately?: boolean;
};
export type ShippingZonesPostResponsesContentApplicationJsonSchemaHandlingFees1 = {
    percentage_surcharge?: string;
    display_separately?: boolean;
};
export type ShippingZonesPostResponsesContentApplicationJsonSchemaHandlingFees = ShippingZonesPostResponsesContentApplicationJsonSchemaHandlingFees0 | ShippingZonesPostResponsesContentApplicationJsonSchemaHandlingFees1;
export type ShippingZonesCreateShippingZonesResponse201 = {
    id?: number;
    name?: string;
    type?: ShippingZonesPostResponsesContentApplicationJsonSchemaType;
    locations?: Array<ShippingZonesPostResponsesContentApplicationJsonSchemaLocationsItems>;
    free_shipping?: ShippingZonesPostResponsesContentApplicationJsonSchemaFreeShipping;
    handling_fees?: ShippingZonesPostResponsesContentApplicationJsonSchemaHandlingFees;
    enabled?: boolean;
};
export type ShippingZonesIdGetResponsesContentApplicationJsonSchemaType = 'zip' | 'country' | 'state' | 'global';
export type ShippingZonesIdGetResponsesContentApplicationJsonSchemaLocationsItems = {
    id?: number;
    zip?: string;
    country_iso2?: string;
    state_iso2?: string;
};
export type ShippingZonesIdGetResponsesContentApplicationJsonSchemaFreeShipping = {
    enabled?: boolean;
    minimum_sub_total?: string;
    exclude_fixed_shipping_products?: boolean;
};
export type ShippingZonesIdGetResponsesContentApplicationJsonSchemaHandlingFees0 = {
    fixed_surcharge?: string;
    display_separately?: boolean;
};
export type ShippingZonesIdGetResponsesContentApplicationJsonSchemaHandlingFees1 = {
    percentage_surcharge?: string;
    display_separately?: boolean;
};
export type ShippingZonesIdGetResponsesContentApplicationJsonSchemaHandlingFees = ShippingZonesIdGetResponsesContentApplicationJsonSchemaHandlingFees0 | ShippingZonesIdGetResponsesContentApplicationJsonSchemaHandlingFees1;
export type ShippingZonesGetShippingZoneResponse200 = {
    id?: number;
    name?: string;
    type?: ShippingZonesIdGetResponsesContentApplicationJsonSchemaType;
    locations?: Array<ShippingZonesIdGetResponsesContentApplicationJsonSchemaLocationsItems>;
    free_shipping?: ShippingZonesIdGetResponsesContentApplicationJsonSchemaFreeShipping;
    handling_fees?: ShippingZonesIdGetResponsesContentApplicationJsonSchemaHandlingFees;
    enabled?: boolean;
};
export type ShippingZonesIdPutRequestBodyContentApplicationJsonSchemaType = 'zip' | 'country' | 'state' | 'global';
export type ShippingZonesIdPutRequestBodyContentApplicationJsonSchemaLocationsItems = {
    id?: number;
    zip?: string;
    country_iso2?: string;
    state_iso2?: string;
};
export type ShippingZonesIdPutRequestBodyContentApplicationJsonSchemaFreeShipping = {
    enabled?: boolean;
    minimum_sub_total?: string;
    exclude_fixed_shipping_products?: boolean;
};
export type ShippingZonesIdPutRequestBodyContentApplicationJsonSchemaHandlingFees0 = {
    fixed_surcharge?: string;
    display_separately?: boolean;
};
export type ShippingZonesIdPutRequestBodyContentApplicationJsonSchemaHandlingFees1 = {
    percentage_surcharge?: string;
    display_separately?: boolean;
};
export type ShippingZonesIdPutRequestBodyContentApplicationJsonSchemaHandlingFees = ShippingZonesIdPutRequestBodyContentApplicationJsonSchemaHandlingFees0 | ShippingZonesIdPutRequestBodyContentApplicationJsonSchemaHandlingFees1;
export type ShippingZonesIdPutResponsesContentApplicationJsonSchemaType = 'zip' | 'country' | 'state' | 'global';
export type ShippingZonesIdPutResponsesContentApplicationJsonSchemaLocationsItems = {
    id?: number;
    zip?: string;
    country_iso2?: string;
    state_iso2?: string;
};
export type ShippingZonesIdPutResponsesContentApplicationJsonSchemaFreeShipping = {
    enabled?: boolean;
    minimum_sub_total?: string;
    exclude_fixed_shipping_products?: boolean;
};
export type ShippingZonesIdPutResponsesContentApplicationJsonSchemaHandlingFees0 = {
    fixed_surcharge?: string;
    display_separately?: boolean;
};
export type ShippingZonesIdPutResponsesContentApplicationJsonSchemaHandlingFees1 = {
    percentage_surcharge?: string;
    display_separately?: boolean;
};
export type ShippingZonesIdPutResponsesContentApplicationJsonSchemaHandlingFees = ShippingZonesIdPutResponsesContentApplicationJsonSchemaHandlingFees0 | ShippingZonesIdPutResponsesContentApplicationJsonSchemaHandlingFees1;
export type ShippingZonesUpdateShippingZoneResponse200 = {
    id?: number;
    name: string;
    type?: ShippingZonesIdPutResponsesContentApplicationJsonSchemaType;
    locations?: Array<ShippingZonesIdPutResponsesContentApplicationJsonSchemaLocationsItems>;
    free_shipping?: ShippingZonesIdPutResponsesContentApplicationJsonSchemaFreeShipping;
    handling_fees?: ShippingZonesIdPutResponsesContentApplicationJsonSchemaHandlingFees;
    enabled?: boolean;
};
export type DeleteCarrierConnectionData = {
    body?: {
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
    204: {
        [key: string]: unknown;
    };
};
export type DeleteCarrierConnectionResponse = DeleteCarrierConnectionResponses[keyof DeleteCarrierConnectionResponses];
export type CreateCarrierConnectionData = {
    body?: CarrierConnection;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/shipping/carrier/connection';
};
export type CreateCarrierConnectionErrors = {
    400: unknown;
};
export type CreateCarrierConnectionResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type CreateCarrierConnectionResponse = CreateCarrierConnectionResponses[keyof CreateCarrierConnectionResponses];
export type UpdateCarrierConnectionData = {
    body?: CarrierConnection;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/shipping/carrier/connection';
};
export type UpdateCarrierConnectionErrors = {
    400: unknown;
};
export type UpdateCarrierConnectionResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type UpdateCarrierConnectionResponse = UpdateCarrierConnectionResponses[keyof UpdateCarrierConnectionResponses];
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
    body?: ShippingMethodBase;
    headers: {
        Accept: string;
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
    204: {
        [key: string]: unknown;
    };
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
    200: ShippingMethodGetShippingMethodResponse200;
};
export type GetShippingMethodResponse = GetShippingMethodResponses[keyof GetShippingMethodResponses];
export type UpdateShippingMethodData = {
    body?: ShippingMethodBase;
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
export type UpdateShippingMethodResponses = {
    200: ShippingMethodFull;
};
export type UpdateShippingMethodResponse = UpdateShippingMethodResponses[keyof UpdateShippingMethodResponses];
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
    200: Array<ShippingZonesGetResponsesContentApplicationJsonSchemaItems>;
};
export type GetShippingZonesResponse = GetShippingZonesResponses[keyof GetShippingZonesResponses];
export type CreateShippingZonesData = {
    body?: {
        name: string;
        type: ShippingZonesPostRequestBodyContentApplicationJsonSchemaType;
        locations?: Array<ShippingZonesPostRequestBodyContentApplicationJsonSchemaLocationsItems>;
        free_shipping?: ShippingZonesPostRequestBodyContentApplicationJsonSchemaFreeShipping;
        handling_fees?: ShippingZonesPostRequestBodyContentApplicationJsonSchemaHandlingFees;
        enabled?: boolean;
    };
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/shipping/zones';
};
export type CreateShippingZonesResponses = {
    201: ShippingZonesCreateShippingZonesResponse201;
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
    204: {
        [key: string]: unknown;
    };
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
    200: ShippingZonesGetShippingZoneResponse200;
};
export type GetShippingZoneResponse = GetShippingZoneResponses[keyof GetShippingZoneResponses];
export type UpdateShippingZoneData = {
    body?: {
        id?: number;
        name: string;
        type?: ShippingZonesIdPutRequestBodyContentApplicationJsonSchemaType;
        locations?: Array<ShippingZonesIdPutRequestBodyContentApplicationJsonSchemaLocationsItems>;
        free_shipping?: ShippingZonesIdPutRequestBodyContentApplicationJsonSchemaFreeShipping;
        handling_fees?: ShippingZonesIdPutRequestBodyContentApplicationJsonSchemaHandlingFees;
        enabled?: boolean;
    };
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/shipping/zones/{id}';
};
export type UpdateShippingZoneResponses = {
    200: ShippingZonesUpdateShippingZoneResponse200;
};
export type UpdateShippingZoneResponse = UpdateShippingZoneResponses[keyof UpdateShippingZoneResponses];
