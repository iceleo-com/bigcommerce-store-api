import RequestService from '../helpers/request/request-service';
import * as TaxRatesZonesV3ApiSpecs from '../generated/tax-rates-zones-v3';
export default class TaxRatesZonesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getTaxZones(query?: TaxRatesZonesV3ApiSpecs.GetTaxZonesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<TaxRatesZonesV3ApiSpecs.GetTaxZonesResponse, any>>;
    createTaxZones(requestBody: TaxRatesZonesV3ApiSpecs.CreateTaxZonesData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<TaxRatesZonesV3ApiSpecs.CreateTaxZonesResponse, any>>;
    updateTaxZones(requestBody: TaxRatesZonesV3ApiSpecs.UpdateTaxZonesData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<TaxRatesZonesV3ApiSpecs.UpdateTaxZonesResponse, any>>;
    deleteTaxZones(query?: TaxRatesZonesV3ApiSpecs.DeleteTaxZonesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getTaxRates(query?: TaxRatesZonesV3ApiSpecs.GetTaxRatesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<TaxRatesZonesV3ApiSpecs.GetTaxRatesResponse, any>>;
    createTaxRates(requestBody: TaxRatesZonesV3ApiSpecs.CreateTaxRatesData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<TaxRatesZonesV3ApiSpecs.CreateTaxRatesResponse, any>>;
    updateTaxRates(requestBody: TaxRatesZonesV3ApiSpecs.UpdateTaxRatesData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<TaxRatesZonesV3ApiSpecs.UpdateTaxRatesResponse, any>>;
    deleteTaxRates(query?: TaxRatesZonesV3ApiSpecs.DeleteTaxRatesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
}
