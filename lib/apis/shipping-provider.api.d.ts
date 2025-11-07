import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ShippingProviderApiSpecs from '../generated/shipping-provider';
export * as ShippingProviderApiSpecs from '../generated/shipping-provider';
export declare class ShippingProviderApi {
    private readonly request;
    constructor(request: RequestService);
    requestShippingRates(requestBody: ShippingProviderApiSpecs.RequestShippingRatesData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ShippingProviderApiSpecs.RateResponsePayload>>>;
    validateConnectionOptions(requestBody: ShippingProviderApiSpecs.ValidateConnectionOptionsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ShippingProviderApiSpecs.CheckConnectionOptionsResponsePayload>>>;
}
