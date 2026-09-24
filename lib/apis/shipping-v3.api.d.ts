import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ShippingV3ApiSpecs from '../generated/shipping-v3';
export * as ShippingV3ApiSpecs from '../generated/shipping-v3';
export declare class ShippingV3Api {
    private readonly request;
    constructor(request: RequestService);
    getCustomsInformation(query?: ShippingV3ApiSpecs.GetCustomsInformationData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ShippingV3ApiSpecs.CustomsInformation>;
        meta?: ShippingV3ApiSpecs.MetaCollection;
    }>>>;
    putCustomsInformation(requestBody: ShippingV3ApiSpecs.PutCustomsInformationData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ShippingV3ApiSpecs.CustomsInformation>;
    }>>>;
    updateCustomsInformation(...args: Parameters<ShippingV3Api['putCustomsInformation']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ShippingV3ApiSpecs.CustomsInformation>;
    }>>>;
    deleteCustomsInformation(query?: ShippingV3ApiSpecs.DeleteCustomsInformationData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
}
