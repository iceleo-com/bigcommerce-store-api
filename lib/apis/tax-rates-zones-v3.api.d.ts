import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxRatesZonesV3ApiSpecs from '../generated/tax-rates-zones-v3';
export * as TaxRatesZonesV3ApiSpecs from '../generated/tax-rates-zones-v3';
export declare class TaxRatesZonesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getTaxZones(query?: TaxRatesZonesV3ApiSpecs.GetTaxZonesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<TaxRatesZonesV3ApiSpecs.TaxZone>;
        meta?: TaxRatesZonesV3ApiSpecs.MetaOpen;
    }>>>;
    createTaxZones(requestBody: TaxRatesZonesV3ApiSpecs.CreateTaxZonesData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<TaxRatesZonesV3ApiSpecs.TaxZone>;
        meta?: TaxRatesZonesV3ApiSpecs.MetaOpen;
    }>>>;
    updateTaxZones(requestBody: TaxRatesZonesV3ApiSpecs.UpdateTaxZonesData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<TaxRatesZonesV3ApiSpecs.TaxZone>;
        meta?: TaxRatesZonesV3ApiSpecs.MetaOpen;
    }>>>;
    deleteTaxZones(query?: TaxRatesZonesV3ApiSpecs.DeleteTaxZonesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getTaxRates(query?: TaxRatesZonesV3ApiSpecs.GetTaxRatesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<TaxRatesZonesV3ApiSpecs.TaxRate>;
        meta?: TaxRatesZonesV3ApiSpecs.Meta;
    }>>>;
    createTaxRates(requestBody: TaxRatesZonesV3ApiSpecs.CreateTaxRatesData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<TaxRatesZonesV3ApiSpecs.TaxRate>;
        meta?: TaxRatesZonesV3ApiSpecs.MetaOpen;
    }>>>;
    updateTaxRates(requestBody: TaxRatesZonesV3ApiSpecs.UpdateTaxRatesData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<TaxRatesZonesV3ApiSpecs.TaxRate>;
        meta?: TaxRatesZonesV3ApiSpecs.MetaOpen;
    }>>>;
    deleteTaxRates(query?: TaxRatesZonesV3ApiSpecs.DeleteTaxRatesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
}
