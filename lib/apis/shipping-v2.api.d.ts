import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ShippingV2ApiSpecs from '../generated/shipping-v2';
export * as ShippingV2ApiSpecs from '../generated/shipping-v2';
export declare class ShippingV2Api {
    private readonly request;
    constructor(request: RequestService);
    getShippingZones(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, {
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
    createShippingZones(requestBody: ShippingV2ApiSpecs.CreateShippingZonesData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<{
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
    getShippingZone(id: ShippingV2ApiSpecs.GetShippingZoneData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
    updateShippingZone(id: ShippingV2ApiSpecs.UpdateShippingZoneData['path']['id'], requestBody: ShippingV2ApiSpecs.UpdateShippingZoneData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
    deleteShippingZone(id: ShippingV2ApiSpecs.DeleteShippingZoneData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getShippingZoneMethods(zoneId: ShippingV2ApiSpecs.GetShippingZoneMethodsData['path']['zone_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, ShippingV2ApiSpecs.ShippingMethodFull[]>>;
    createShippingMethod(zoneId: ShippingV2ApiSpecs.CreateShippingMethodData['path']['zone_id'], requestBody: ShippingV2ApiSpecs.CreateShippingMethodData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ShippingV2ApiSpecs.ShippingMethodFull>>>;
    getShippingMethod(zoneId: ShippingV2ApiSpecs.GetShippingMethodData['path']['zone_id'], methodId: ShippingV2ApiSpecs.GetShippingMethodData['path']['method_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
        channel_ids?: Array<number>;
    }>>>;
    updateShippingMethod(zoneId: ShippingV2ApiSpecs.UpdateShippingMethodData['path']['zone_id'], methodId: ShippingV2ApiSpecs.UpdateShippingMethodData['path']['method_id'], requestBody: ShippingV2ApiSpecs.UpdateShippingMethodData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ShippingV2ApiSpecs.ShippingMethodFull>>>;
    deleteShippingMethod(zoneId: ShippingV2ApiSpecs.DeleteShippingMethodData['path']['zone_id'], methodId: ShippingV2ApiSpecs.DeleteShippingMethodData['path']['method_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    createCarrierConnection(requestBody: ShippingV2ApiSpecs.CreateCarrierConnectionData['body']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<400, Required<unknown>>>;
    updateCarrierConnection(requestBody: ShippingV2ApiSpecs.UpdateCarrierConnectionData['body']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<400, Required<unknown>>>;
    deleteCarrierConnection(requestBody: ShippingV2ApiSpecs.DeleteCarrierConnectionData['body']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<400, Required<unknown>>>;
}
