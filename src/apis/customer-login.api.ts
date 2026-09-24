import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CustomerLoginApiSpecs from '../generated/customer-login';
export * as CustomerLoginApiSpecs from '../generated/customer-login';

export class CustomerLoginApi {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Login Token
     *
     * The customer login access point URL.

     [Learn more about the Customer Login API](/developer/docs/storefront/guides/customer-authentication/customer-login).

     ## Example

     ```
     https://yourstore.example.com/login/token/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ7Y2xpZW50X2lkfSIsImlhdCI6MTUzNTM5MzExMywianRpIjoie3V1aWR9Iiwib3BlcmF0aW9uIjoiY3VzdG9tZXJfbG9naW4iLCJzdG9yZV9oYXNoIjoie3N0b3JlX2hhc2h9IiwiY3VzdG9tZXJfaWQiOjJ9.J-fAtbjRFGdLsT744DhoprFEDqIfVq72HbDzrbFy6Is
     ```
     */
    getCustomerLogin(
        storeDomain: string,
        jwtToken: CustomerLoginApiSpecs.GetCustomerLoginData['path']['jwt_token'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CustomerLoginApiSpecs.GetCustomerLoginResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `https://${storeDomain}/login/token/${jwtToken}`,
        });
    }
}
