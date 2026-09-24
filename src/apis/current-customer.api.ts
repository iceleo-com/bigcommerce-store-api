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
     * Identify logged-in customers securely via JavaScript.

     > #### Note
     > The Send a Test Request feature is not currently supported for this endpoint.
     */
    getCurrentCustomer(
        query?: CurrentCustomerApiSpecs.GetCurrentCustomerData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, void>,RequestErrorResponse<400, void>>({
            path: 'https://{store_domain}/customer/current.jwt',
            query,
        });
    }
}
