import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CustomerLoginApiSpecs from '../generated/customer-login';
export * as CustomerLoginApiSpecs from '../generated/customer-login';
export declare class CustomerLoginApi {
    private readonly request;
    constructor(request: RequestService);
    getLoginTokenByJwtToken(storeDomain: string, jwtToken: CustomerLoginApiSpecs.GetLoginTokenByJwtTokenData['path']['jwt_token']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        [key: string]: unknown;
    }>>>;
    getCustomerLogin(...args: Parameters<CustomerLoginApi['getLoginTokenByJwtToken']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        [key: string]: unknown;
    }>>>;
}
