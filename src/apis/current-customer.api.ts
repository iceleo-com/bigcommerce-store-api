import RequestService from '../helpers/request/request-service';
import * as CurrentCustomerApiSpecs from '../generated/current-customer';

export default class CurrentCustomerApi {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Current Customer
     *
     * Identify signed-in customers securely by requesting and decoding a BigCommerce-generated JWT.

     The response body will contain a JWT.

     > #### Note
     > The Send a Test Request feature is not currently supported for this endpoint.
     */
    getCurrentCustomer(
        query?: CurrentCustomerApiSpecs.GetCurrentCustomerData['query'],
    ) {
        return this.request.get<CurrentCustomerApiSpecs.GetCurrentCustomerResponse, any>({
            path: 'https://{store_domain}/customer/current.jwt',
            query,
        });
    }
}
