import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxV3ApiSpecs from '../generated/tax-v3';
export * as TaxV3ApiSpecs from '../generated/tax-v3';
export declare class TaxV3Api {
    private readonly request;
    constructor(request: RequestService);
    providerConnectionGet(providerId: TaxV3ApiSpecs.ProviderConnectionGetData['path']['provider_id']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestSuccessResponse<200, Required<TaxV3ApiSpecs.ResponseConnection>>>;
    getTaxProviderConnection(...args: Parameters<TaxV3Api['providerConnectionGet']>): Promise<RequestErrorResponse<404, Required<unknown>> | RequestSuccessResponse<200, Required<TaxV3ApiSpecs.ResponseConnection>>>;
    providerConnectionPut(providerId: TaxV3ApiSpecs.ProviderConnectionPutData['path']['provider_id'], requestBody: TaxV3ApiSpecs.ProviderConnectionPutData['body']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestErrorResponse<422, Required<unknown>> | RequestSuccessResponse<200, Required<TaxV3ApiSpecs.ResponseConnection>>>;
    updateTaxProviderConnection(...args: Parameters<TaxV3Api['providerConnectionPut']>): Promise<RequestErrorResponse<404, Required<unknown>> | RequestErrorResponse<422, Required<unknown>> | RequestSuccessResponse<200, Required<TaxV3ApiSpecs.ResponseConnection>>>;
    providerConnectionDelete(providerId: TaxV3ApiSpecs.ProviderConnectionDeleteData['path']['provider_id']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestSuccessResponse<200, Required<TaxV3ApiSpecs.ResponseConnection>>>;
    deleteTaxProviderConnection(...args: Parameters<TaxV3Api['providerConnectionDelete']>): Promise<RequestErrorResponse<404, Required<unknown>> | RequestSuccessResponse<200, Required<TaxV3ApiSpecs.ResponseConnection>>>;
}
