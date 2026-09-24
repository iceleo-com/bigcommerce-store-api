import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxRatesZonesV3ApiSpecs from '../generated/tax-rates-zones-v3';
export * as TaxRatesZonesV3ApiSpecs from '../generated/tax-rates-zones-v3';
export declare class TaxRatesZonesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getTaxZones(query?: TaxRatesZonesV3ApiSpecs.GetTaxZonesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<TaxRatesZonesV3ApiSpecs.TaxZonesGetTaxZonesResponse200>>>;
    createTaxZones(requestBody: TaxRatesZonesV3ApiSpecs.CreateTaxZonesData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<TaxRatesZonesV3ApiSpecs.TaxZonesCreateTaxZonesResponse200>>>;
    updateTaxZones(requestBody: TaxRatesZonesV3ApiSpecs.UpdateTaxZonesData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<TaxRatesZonesV3ApiSpecs.TaxZonesUpdateTaxZonesResponse200>>>;
    deleteTaxZones(query?: TaxRatesZonesV3ApiSpecs.DeleteTaxZonesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getTaxRates(query?: TaxRatesZonesV3ApiSpecs.GetTaxRatesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<TaxRatesZonesV3ApiSpecs.TaxRatesGetTaxRatesResponse200>>>;
    createTaxRates(requestBody: TaxRatesZonesV3ApiSpecs.CreateTaxRatesData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<TaxRatesZonesV3ApiSpecs.TaxRatesCreateTaxRatesResponse200>>>;
    updateTaxRates(requestBody: TaxRatesZonesV3ApiSpecs.UpdateTaxRatesData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<TaxRatesZonesV3ApiSpecs.TaxRatesUpdateTaxRatesResponse200>>>;
    deleteTaxRates(query?: TaxRatesZonesV3ApiSpecs.DeleteTaxRatesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
}
