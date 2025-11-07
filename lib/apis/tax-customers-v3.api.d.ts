import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxCustomersV3ApiSpecs from '../generated/tax-customers-v3';
export * as TaxCustomersV3ApiSpecs from '../generated/tax-customers-v3';
export declare class TaxCustomersV3Api {
    private readonly request;
    constructor(request: RequestService);
    getTaxCustomers(query?: TaxCustomersV3ApiSpecs.GetTaxCustomersData['query']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestSuccessResponse<200, Required<{
        data?: Array<TaxCustomersV3ApiSpecs.TaxCustomer>;
        meta?: TaxCustomersV3ApiSpecs.MetaOpen;
    }>>>;
    updateTaxCustomers(requestBody: TaxCustomersV3ApiSpecs.UpdateTaxCustomersData['body']): Promise<RequestErrorResponse<422, Required<unknown>> | RequestSuccessResponse<200, Required<{
        data?: Array<TaxCustomersV3ApiSpecs.TaxCustomer>;
        meta?: TaxCustomersV3ApiSpecs.MetaOpen;
    }>>>;
    deleteTaxCustomers(query?: TaxCustomersV3ApiSpecs.DeleteTaxCustomersData['query']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<400, Required<unknown>>>;
}
