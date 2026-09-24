import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ShippingV2ApiSpecs from '../generated/shipping-v2';
export * as ShippingV2ApiSpecs from '../generated/shipping-v2';
export declare class ShippingV2Api {
    private readonly request;
    constructor(request: RequestService);
    createCarrierConnection(requestBody: ShippingV2ApiSpecs.CreateCarrierConnectionData['body']): Promise<RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<400, Required<unknown>>>;
    updateCarrierConnection(requestBody: ShippingV2ApiSpecs.UpdateCarrierConnectionData['body']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    deleteCarrierConnection(requestBody: ShippingV2ApiSpecs.DeleteCarrierConnectionData['body']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getShippingZoneMethods(zoneId: ShippingV2ApiSpecs.GetShippingZoneMethodsData['path']['zone_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, ShippingV2ApiSpecs.ShippingMethodFull[]>>;
    createShippingMethod(zoneId: ShippingV2ApiSpecs.CreateShippingMethodData['path']['zone_id'], requestBody: ShippingV2ApiSpecs.CreateShippingMethodData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ShippingV2ApiSpecs.ShippingMethodFull>>>;
    getShippingMethod(zoneId: ShippingV2ApiSpecs.GetShippingMethodData['path']['zone_id'], methodId: ShippingV2ApiSpecs.GetShippingMethodData['path']['method_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ShippingV2ApiSpecs.ShippingMethodGetShippingMethodResponse200>>>;
    updateShippingMethod(zoneId: ShippingV2ApiSpecs.UpdateShippingMethodData['path']['zone_id'], methodId: ShippingV2ApiSpecs.UpdateShippingMethodData['path']['method_id'], requestBody: ShippingV2ApiSpecs.UpdateShippingMethodData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ShippingV2ApiSpecs.ShippingMethodFull>>>;
    deleteShippingMethod(zoneId: ShippingV2ApiSpecs.DeleteShippingMethodData['path']['zone_id'], methodId: ShippingV2ApiSpecs.DeleteShippingMethodData['path']['method_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getShippingZones(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, ShippingV2ApiSpecs.ShippingZonesGetResponsesContentApplicationJsonSchemaItems[]>>;
    createShippingZones(requestBody: ShippingV2ApiSpecs.CreateShippingZonesData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<ShippingV2ApiSpecs.ShippingZonesCreateShippingZonesResponse201>>>;
    getShippingZone(id: ShippingV2ApiSpecs.GetShippingZoneData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ShippingV2ApiSpecs.ShippingZonesGetShippingZoneResponse200>>>;
    updateShippingZone(id: ShippingV2ApiSpecs.UpdateShippingZoneData['path']['id'], requestBody: ShippingV2ApiSpecs.UpdateShippingZoneData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ShippingV2ApiSpecs.ShippingZonesUpdateShippingZoneResponse200>>>;
    deleteShippingZone(id: ShippingV2ApiSpecs.DeleteShippingZoneData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
}
