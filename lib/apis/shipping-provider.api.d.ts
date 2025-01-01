import RequestService from '../helpers/request/request-service';
import * as ShippingProviderApiSpecs from '../generated/shipping-provider';
export default class ShippingProviderApi {
    private readonly request;
    constructor(request: RequestService);
    requestShippingRates(requestBody: ShippingProviderApiSpecs.RequestShippingRatesData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<ShippingProviderApiSpecs.RateResponsePayload, any>>;
    validateConnectionOptions(requestBody: ShippingProviderApiSpecs.ValidateConnectionOptionsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<ShippingProviderApiSpecs.CheckConnectionOptionsResponsePayload, any>>;
}
