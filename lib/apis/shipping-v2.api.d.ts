import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ShippingV2ApiSpecs from '../generated/shipping-v2';
export * as ShippingV2ApiSpecs from '../generated/shipping-v2';
export declare class ShippingV2Api {
    private readonly request;
    constructor(request: RequestService);
    getAllShippingZones(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, {
        id?: number;
        name?: string;
        type?: "zip" | "country" | "state" | "global";
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
    }[]>>;
    getShippingZones(...args: Parameters<ShippingV2Api['getAllShippingZones']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, {
        id?: number;
        name?: string;
        type?: "zip" | "country" | "state" | "global";
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
    }[]>>;
    createAshippingZones(requestBody: ShippingV2ApiSpecs.CreateAShippingZonesData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        id?: number;
        name?: string;
        type?: "zip" | "country" | "state" | "global";
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
    }>>>;
    createShippingZones(...args: Parameters<ShippingV2Api['createAshippingZones']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        id?: number;
        name?: string;
        type?: "zip" | "country" | "state" | "global";
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
    }>>>;
    getAshippingZone(id: ShippingV2ApiSpecs.GetAShippingZoneData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        id?: number;
        name?: string;
        type?: "zip" | "country" | "state" | "global";
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
    }>>>;
    getShippingZone(...args: Parameters<ShippingV2Api['getAshippingZone']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        id?: number;
        name?: string;
        type?: "zip" | "country" | "state" | "global";
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
    }>>>;
    updateAshippingZone(id: ShippingV2ApiSpecs.UpdateAShippingZoneData['path']['id'], requestBody: ShippingV2ApiSpecs.UpdateAShippingZoneData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        readonly id?: number;
        name: string;
        type?: "zip" | "country" | "state" | "global";
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
    }>>>;
    updateShippingZone(...args: Parameters<ShippingV2Api['updateAshippingZone']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        readonly id?: number;
        name: string;
        type?: "zip" | "country" | "state" | "global";
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
    }>>>;
    deleteAshippingZone(id: ShippingV2ApiSpecs.DeleteAShippingZoneData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteShippingZone(...args: Parameters<ShippingV2Api['deleteAshippingZone']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getShippingMethodsZone(zoneId: ShippingV2ApiSpecs.GetShippingMethodsZoneData['path']['zone_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, ShippingV2ApiSpecs.ShippingMethodFull[]>>;
    getShippingZoneMethods(...args: Parameters<ShippingV2Api['getShippingMethodsZone']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, ShippingV2ApiSpecs.ShippingMethodFull[]>>;
    createAshippingMethod(zoneId: ShippingV2ApiSpecs.CreateAShippingMethodData['path']['zone_id'], requestBody: ShippingV2ApiSpecs.CreateAShippingMethodData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ShippingV2ApiSpecs.ShippingMethodFull>>>;
    createShippingMethod(...args: Parameters<ShippingV2Api['createAshippingMethod']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ShippingV2ApiSpecs.ShippingMethodFull>>>;
    getAshippingMethod(zoneId: ShippingV2ApiSpecs.GetAShippingMethodData['path']['zone_id'], methodId: ShippingV2ApiSpecs.GetAShippingMethodData['path']['method_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        readonly id?: number;
        name?: string;
        type?: ShippingV2ApiSpecs.ShippingMethodType;
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
    }>>>;
    getShippingMethod(...args: Parameters<ShippingV2Api['getAshippingMethod']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        readonly id?: number;
        name?: string;
        type?: ShippingV2ApiSpecs.ShippingMethodType;
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
    }>>>;
    updateAshippingMethod(zoneId: ShippingV2ApiSpecs.UpdateAShippingMethodData['path']['zone_id'], methodId: ShippingV2ApiSpecs.UpdateAShippingMethodData['path']['method_id'], requestBody: ShippingV2ApiSpecs.UpdateAShippingMethodData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ShippingV2ApiSpecs.ShippingMethodFull>>>;
    updateShippingMethod(...args: Parameters<ShippingV2Api['updateAshippingMethod']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ShippingV2ApiSpecs.ShippingMethodFull>>>;
    deleteAshippingMethod(zoneId: ShippingV2ApiSpecs.DeleteAShippingMethodData['path']['zone_id'], methodId: ShippingV2ApiSpecs.DeleteAShippingMethodData['path']['method_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteShippingMethod(...args: Parameters<ShippingV2Api['deleteAshippingMethod']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    createAcarrierConnection(requestBody: ShippingV2ApiSpecs.CreateACarrierConnectionData['body']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<400, Required<unknown>>>;
    createCarrierConnection(...args: Parameters<ShippingV2Api['createAcarrierConnection']>): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<400, Required<unknown>>>;
    updateAcarrierConnection(requestBody: ShippingV2ApiSpecs.UpdateACarrierConnectionData['body']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<400, Required<unknown>>>;
    updateCarrierConnection(...args: Parameters<ShippingV2Api['updateAcarrierConnection']>): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<400, Required<unknown>>>;
    deleteCarrierConnection(requestBody: ShippingV2ApiSpecs.DeleteCarrierConnectionData['body']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<400, Required<unknown>>>;
}
