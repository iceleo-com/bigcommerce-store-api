import RequestService from '../helpers/request/request-service';
export * as CustomerLoginApiSpecs from '../generated/customer-login';
export declare class CustomerLoginApi {
    private readonly request;
    constructor(request: RequestService);
    getCustomerLogin(): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
}
