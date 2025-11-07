import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxCustomersV3ApiSpecs from '../generated/tax-customers-v3';
export * as TaxCustomersV3ApiSpecs from '../generated/tax-customers-v3';

export class TaxCustomersV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Tax Customers
     *
     * Retrieves a list of customer tax data.
     */
    getTaxCustomers(
        query?: TaxCustomersV3ApiSpecs.GetTaxCustomersData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<TaxCustomersV3ApiSpecs.GetTaxCustomersResponses[200]>>,RequestErrorResponse<400, Required<TaxCustomersV3ApiSpecs.GetTaxCustomersErrors[400]>>>({
            path: 'v3/tax/customers',
            query,
        });
    }

    /**
     * Update Tax Customers
     *
     * Update the tax data associated with one or more customers.
     This operation will be additive to any values already associated with the customer, overwriting any existing values.
     */
    updateTaxCustomers(
        requestBody: TaxCustomersV3ApiSpecs.UpdateTaxCustomersData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<TaxCustomersV3ApiSpecs.UpdateTaxCustomersResponses[200]>>,RequestErrorResponse<422, Required<TaxCustomersV3ApiSpecs.UpdateTaxCustomersErrors[422]>>>({
            path: 'v3/tax/customers',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Tax Customers
     *
     * Delete tax data that is associated with one or more customers.
     */
    deleteTaxCustomers(
        query?: TaxCustomersV3ApiSpecs.DeleteTaxCustomersData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<TaxCustomersV3ApiSpecs.DeleteTaxCustomersResponses[204]>>,RequestErrorResponse<400, Required<TaxCustomersV3ApiSpecs.DeleteTaxCustomersErrors[400]>>>({
            path: 'v3/tax/customers',
            query,
        });
    }
}
