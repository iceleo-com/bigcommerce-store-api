import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxProviderApiSpecs from '../generated/tax-provider';
export * as TaxProviderApiSpecs from '../generated/tax-provider';
export declare class TaxProviderApi {
    private readonly request;
    constructor(request: RequestService);
    estimate(requestBody: TaxProviderApiSpecs.EstimateData['body']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestErrorResponse<500, Required<unknown>> | RequestErrorResponse<401, Required<unknown>> | RequestSuccessResponse<200, Required<TaxProviderApiSpecs.ResponseQuote>>>;
    estimateTaxes(...args: Parameters<TaxProviderApi['estimate']>): Promise<RequestErrorResponse<400, Required<unknown>> | RequestErrorResponse<500, Required<unknown>> | RequestErrorResponse<401, Required<unknown>> | RequestSuccessResponse<200, Required<TaxProviderApiSpecs.ResponseQuote>>>;
    void(query?: TaxProviderApiSpecs.VoidData['query']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestSuccessResponse<200, Required<unknown>> | RequestErrorResponse<500, Required<unknown>> | RequestErrorResponse<401, Required<unknown>>>;
    voidTaxQuote(...args: Parameters<TaxProviderApi['void']>): Promise<RequestErrorResponse<400, Required<unknown>> | RequestSuccessResponse<200, Required<unknown>> | RequestErrorResponse<500, Required<unknown>> | RequestErrorResponse<401, Required<unknown>>>;
    commit(requestBody: TaxProviderApiSpecs.CommitData['body']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestErrorResponse<500, Required<unknown>> | RequestErrorResponse<401, Required<unknown>> | RequestSuccessResponse<200, Required<TaxProviderApiSpecs.ResponseQuote>>>;
    commitTaxQuote(...args: Parameters<TaxProviderApi['commit']>): Promise<RequestErrorResponse<400, Required<unknown>> | RequestErrorResponse<500, Required<unknown>> | RequestErrorResponse<401, Required<unknown>> | RequestSuccessResponse<200, Required<TaxProviderApiSpecs.ResponseQuote>>>;
    adjust(requestBody: TaxProviderApiSpecs.AdjustData['body'], query?: TaxProviderApiSpecs.AdjustData['query']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestErrorResponse<401, Required<unknown>> | RequestSuccessResponse<200, Required<TaxProviderApiSpecs.RequestAdjust>> | RequestErrorResponse<500, Required<TaxProviderApiSpecs.ResponseQuote>>>;
    adjustTaxQuote(...args: Parameters<TaxProviderApi['adjust']>): Promise<RequestErrorResponse<400, Required<unknown>> | RequestErrorResponse<401, Required<unknown>> | RequestSuccessResponse<200, Required<TaxProviderApiSpecs.RequestAdjust>> | RequestErrorResponse<500, Required<TaxProviderApiSpecs.ResponseQuote>>>;
}
