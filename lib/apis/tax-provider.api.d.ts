import RequestService from '../helpers/request/request-service';
import * as TaxProviderApiSpecs from '../generated/tax-provider';
export default class TaxProviderApi {
    private readonly request;
    constructor(request: RequestService);
    estimateTaxes(requestBody: TaxProviderApiSpecs.EstimateTaxesData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<TaxProviderApiSpecs.response_quote, unknown>>;
    voidTaxQuote(query?: TaxProviderApiSpecs.VoidTaxQuoteData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, unknown>>;
    commitTaxQuote(requestBody: TaxProviderApiSpecs.CommitTaxQuoteData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<TaxProviderApiSpecs.response_quote, unknown>>;
    adjustTaxQuote(requestBody: TaxProviderApiSpecs.AdjustTaxQuoteData['body'], query?: TaxProviderApiSpecs.AdjustTaxQuoteData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<TaxProviderApiSpecs.response_quote, unknown>>;
}
