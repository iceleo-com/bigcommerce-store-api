import RequestService from '../helpers/request/request-service';
export default class CustomerLoginApi {
    private readonly request;
    constructor(request: RequestService);
    getCustomerLogin(): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
}
