import RequestService from '../helpers/request/request-service';
import * as ShippingV3ApiSpecs from '../generated/shipping-v3';
export default class ShippingV3Api {
    private readonly request;
    constructor(request: RequestService);
    getCustomsInformation(query?: ShippingV3ApiSpecs.GetCustomsInformationData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<ShippingV3ApiSpecs.GetCustomsInformationResponse, any>>;
    updateCustomsInformation(requestBody: ShippingV3ApiSpecs.UpdateCustomsInformationData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<ShippingV3ApiSpecs.UpdateCustomsInformationResponse, any>>;
    deleteCustomsInformation(query?: ShippingV3ApiSpecs.DeleteCustomsInformationData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getShippingSettings(): Promise<import("../helpers/request/request-service.type").RequestResponse<ShippingV3ApiSpecs.GetShippingSettingsResponse, any>>;
    updateShippingSettings(requestBody: ShippingV3ApiSpecs.UpdateShippingSettingsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<ShippingV3ApiSpecs.UpdateShippingSettingsResponse, any>>;
}
