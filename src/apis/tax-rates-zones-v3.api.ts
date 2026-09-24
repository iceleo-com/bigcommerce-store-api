import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxRatesZonesV3ApiSpecs from '../generated/tax-rates-zones-v3';
export * as TaxRatesZonesV3ApiSpecs from '../generated/tax-rates-zones-v3';

export class TaxRatesZonesV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * List Tax Zones
     *
     * Retrieve a selection of tax zones when you provide a list of tax zone IDs. Otherwise, retrieve all tax zones defined on the store.
     */
    getTaxZones(
        query?: TaxRatesZonesV3ApiSpecs.GetTaxZonesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<TaxRatesZonesV3ApiSpecs.GetTaxZonesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/tax/zones',
            query,
        });
    }

    /**
     * Create Tax Zones
     *
     * Create one or more tax zones.

     > #### Note
     > You cannot create a default tax zone.
     */
    createTaxZones(
        requestBody: TaxRatesZonesV3ApiSpecs.CreateTaxZonesData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<TaxRatesZonesV3ApiSpecs.CreateTaxZonesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/tax/zones',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Tax Zones
     *
     * Update one or more tax zones. Only the tax zone `id` field is required. Fields unspecified by the request will retain their current state.
     */
    updateTaxZones(
        requestBody: TaxRatesZonesV3ApiSpecs.UpdateTaxZonesData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<TaxRatesZonesV3ApiSpecs.UpdateTaxZonesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/tax/zones',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Tax Zones
     *
     * Delete one or more tax zones. Deleting a tax zone removes all associated tax rates.

     > You must specify which zone(s) to delete using the `id:in` query parameter.
     */
    deleteTaxZones(
        query?: TaxRatesZonesV3ApiSpecs.DeleteTaxZonesData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<TaxRatesZonesV3ApiSpecs.DeleteTaxZonesResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/tax/zones',
            query,
        });
    }

    /**
     * List Tax Rates
     *
     * Retrieve a list of tax rates.
     */
    getTaxRates(
        query?: TaxRatesZonesV3ApiSpecs.GetTaxRatesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<TaxRatesZonesV3ApiSpecs.GetTaxRatesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/tax/rates',
            query,
        });
    }

    /**
     * Create Tax Rates
     *
     * Create one or more tax rates. Tax rates must be associated with a `tax_zone_id`.
     */
    createTaxRates(
        requestBody: TaxRatesZonesV3ApiSpecs.CreateTaxRatesData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<TaxRatesZonesV3ApiSpecs.CreateTaxRatesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/tax/rates',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Tax Rates
     *
     * Update one or more tax rates. Only the tax rate `id` field is required. Fields unspecified by the request will retain their current state.
     */
    updateTaxRates(
        requestBody: TaxRatesZonesV3ApiSpecs.UpdateTaxRatesData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<TaxRatesZonesV3ApiSpecs.UpdateTaxRatesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/tax/rates',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Tax Rates
     *
     * Delete one or more tax rates.

     > You must specify which rate(s) to delete using the `id:in` query parameter.
     */
    deleteTaxRates(
        query?: TaxRatesZonesV3ApiSpecs.DeleteTaxRatesData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<TaxRatesZonesV3ApiSpecs.DeleteTaxRatesResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/tax/rates',
            query,
        });
    }
}
