import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CurrentCustomerApiSpecs from '../generated/current-customer';
export * as CurrentCustomerApiSpecs from '../generated/current-customer';
export declare class CurrentCustomerApi {
    private readonly request;
    constructor(request: RequestService);
    getCurrentCustomer(query?: CurrentCustomerApiSpecs.GetCurrentCustomerData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, string>>;
}
