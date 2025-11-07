import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxV3ApiSpecs from '../generated/tax-v3';
export * as TaxV3ApiSpecs from '../generated/tax-v3';
export declare class TaxV3Api {
    private readonly request;
    constructor(request: RequestService);
    getTaxProviderConnection(providerId: TaxV3ApiSpecs.GetTaxProviderConnectionData['path']['provider_id']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestSuccessResponse<200, Required<TaxV3ApiSpecs.ResponseConnection>>>;
    updateTaxProviderConnection(providerId: TaxV3ApiSpecs.UpdateTaxProviderConnectionData['path']['provider_id'], requestBody: TaxV3ApiSpecs.UpdateTaxProviderConnectionData['body']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestErrorResponse<422, Required<unknown>> | RequestSuccessResponse<200, Required<TaxV3ApiSpecs.ResponseConnection>>>;
    deleteTaxProviderConnection(providerId: TaxV3ApiSpecs.DeleteTaxProviderConnectionData['path']['provider_id']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestSuccessResponse<200, Required<TaxV3ApiSpecs.ResponseConnection>>>;
}
