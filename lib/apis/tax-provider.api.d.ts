import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxProviderApiSpecs from '../generated/tax-provider';
export * as TaxProviderApiSpecs from '../generated/tax-provider';
export declare class TaxProviderApi {
    private readonly request;
    constructor(request: RequestService);
    estimateTaxes(requestBody: TaxProviderApiSpecs.EstimateTaxesData['body']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestSuccessResponse<200, Required<TaxProviderApiSpecs.ResponseQuote>> | RequestErrorResponse<401, Required<unknown>> | RequestErrorResponse<500, Required<unknown>>>;
    voidTaxQuote(query?: TaxProviderApiSpecs.VoidTaxQuoteData['query']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestErrorResponse<401, Required<unknown>> | RequestErrorResponse<500, Required<unknown>> | RequestSuccessResponse<200, Required<TaxProviderApiSpecs.TaxProviderVoidTaxQuoteResponse200>>>;
    commitTaxQuote(requestBody: TaxProviderApiSpecs.CommitTaxQuoteData['body']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestSuccessResponse<200, Required<TaxProviderApiSpecs.ResponseQuote>> | RequestErrorResponse<401, Required<unknown>> | RequestErrorResponse<500, Required<unknown>>>;
    adjustTaxQuote(requestBody: TaxProviderApiSpecs.AdjustTaxQuoteData['body'], query?: TaxProviderApiSpecs.AdjustTaxQuoteData['query']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestSuccessResponse<200, Required<TaxProviderApiSpecs.ResponseQuote>> | RequestErrorResponse<401, Required<unknown>> | RequestErrorResponse<500, Required<TaxProviderApiSpecs.ResponseQuote>>>;
}
