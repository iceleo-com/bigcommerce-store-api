import RequestService from '../helpers/request/request-service';
import * as ShippingV2ApiSpecs from '../generated/shipping-v2';
export default class ShippingV2Api {
    private readonly request;
    constructor(request: RequestService);
    getShippingZones(): Promise<import("../helpers/request/request-service.types").RequestResponse<ShippingV2ApiSpecs.GetShippingZonesResponse, any>>;
    createShippingZones(requestBody: ShippingV2ApiSpecs.CreateShippingZonesData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getShippingZone(id: ShippingV2ApiSpecs.GetShippingZoneData['path']['id']): Promise<import("../helpers/request/request-service.types").RequestResponse<ShippingV2ApiSpecs.GetShippingZoneResponse, any>>;
    updateShippingZone(id: ShippingV2ApiSpecs.UpdateShippingZoneData['path']['id'], requestBody: ShippingV2ApiSpecs.UpdateShippingZoneData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<ShippingV2ApiSpecs.UpdateShippingZoneResponse, any>>;
    deleteShippingZone(id: ShippingV2ApiSpecs.DeleteShippingZoneData['path']['id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getShippingZoneMethods(zoneId: ShippingV2ApiSpecs.GetShippingZoneMethodsData['path']['zone_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<ShippingV2ApiSpecs.GetShippingZoneMethodsResponse, any>>;
    createShippingMethod(zoneId: ShippingV2ApiSpecs.CreateShippingMethodData['path']['zone_id'], requestBody: ShippingV2ApiSpecs.CreateShippingMethodData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<ShippingV2ApiSpecs.shippingMethod_Full, any>>;
    getShippingMethod(zoneId: ShippingV2ApiSpecs.GetShippingMethodData['path']['zone_id'], methodId: ShippingV2ApiSpecs.GetShippingMethodData['path']['method_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<ShippingV2ApiSpecs.GetShippingMethodResponse, any>>;
    updateShippingMethod(zoneId: ShippingV2ApiSpecs.UpdateShippingMethodData['path']['zone_id'], methodId: ShippingV2ApiSpecs.UpdateShippingMethodData['path']['method_id'], requestBody: ShippingV2ApiSpecs.UpdateShippingMethodData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<ShippingV2ApiSpecs.shippingMethod_Full, any>>;
    deleteShippingMethod(zoneId: ShippingV2ApiSpecs.DeleteShippingMethodData['path']['zone_id'], methodId: ShippingV2ApiSpecs.DeleteShippingMethodData['path']['method_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    createCarrierConnection(requestBody: ShippingV2ApiSpecs.CreateCarrierConnectionData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, unknown>>;
    updateCarrierConnection(requestBody: ShippingV2ApiSpecs.UpdateCarrierConnectionData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, unknown>>;
    deleteCarrierConnection(requestBody: ShippingV2ApiSpecs.DeleteCarrierConnectionData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, unknown>>;
}
