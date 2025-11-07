import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CurrentCustomerApiSpecs from '../generated/current-customer';
export * as CurrentCustomerApiSpecs from '../generated/current-customer';

export class CurrentCustomerApi {
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
        return this.request.get<RequestSuccessResponse<200, Required<CurrentCustomerApiSpecs.GetCurrentCustomerResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'https://{store_domain}/customer/current.jwt',
            query,
        });
    }
}
