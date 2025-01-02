import RequestService from '../helpers/request/request-service';
import * as CurrentCustomerApiSpecs from '../generated/current-customer';
export default class CurrentCustomerApi {
    private readonly request;
    constructor(request: RequestService);
    getCurrentCustomer(query?: CurrentCustomerApiSpecs.GetCurrentCustomerData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<string, any>>;
}
