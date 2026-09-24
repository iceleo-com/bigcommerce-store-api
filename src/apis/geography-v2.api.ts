import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as GeographyV2ApiSpecs from '../generated/geography-v2';
export * as GeographyV2ApiSpecs from '../generated/geography-v2';

export class GeographyV2Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Countries
     *
     * Get a list of all countries available. A country or territory, identifiable by an ISO 3166 country code.
     */
    getAllCountries(
        query?: GeographyV2ApiSpecs.GetAllCountriesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.GetAllCountriesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/countries',
            query,
        });
    }

    /**
     * @deprecated Use `getAllCountries` instead.
     */
    getCountries(...args: Parameters<GeographyV2Api['getAllCountries']>) {
        return this.getAllCountries(...args);
    }

    /**
     * Get a Country
     *
     * Returns a single *Country*.  Gets a country. A country or territory, identifiable by an ISO 3166 country code.
     */
    getAcountry(
        id: GeographyV2ApiSpecs.GetACountryData['path']['id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.GetACountryResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/countries/${id}`,
        });
    }

    /**
     * @deprecated Use `getAcountry` instead.
     */
    getCountry(...args: Parameters<GeographyV2Api['getAcountry']>) {
        return this.getAcountry(...args);
    }

    /**
     * Get All Country's States
     *
     * Returns a list of *States* belonging to a *Country*. 
     A state or province, identifiable by an ISO 3166 subdivision code.
     */
    getAllCountryStates(
        countryId: GeographyV2ApiSpecs.GetAllCountryStatesData['path']['country_id'],
        query?: GeographyV2ApiSpecs.GetAllCountryStatesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.GetAllCountryStatesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/countries/${countryId}/states`,
            query,
        });
    }

    /**
     * @deprecated Use `getAllCountryStates` instead.
     */
    getCountryStates(...args: Parameters<GeographyV2Api['getAllCountryStates']>) {
        return this.getAllCountryStates(...args);
    }

    /**
     * Get a Country's State
     *
     * Returns a *State*. 
     A state or province, identifiable by an ISO 3166 subdivision code.
     */
    getAstate(
        countryId: GeographyV2ApiSpecs.GetAStateData['path']['country_id'],
        id: GeographyV2ApiSpecs.GetAStateData['path']['id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.GetAStateResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/countries/${countryId}/states/${id}`,
        });
    }

    /**
     * @deprecated Use `getAstate` instead.
     */
    getCountryState(...args: Parameters<GeographyV2Api['getAstate']>) {
        return this.getAstate(...args);
    }

    /**
     * Get a Count of All Countries
     *
     * Returns a count of all countries.
     */
    getCountCountries(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.GetCountCountriesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/countries/count',
        });
    }

    /**
     * @deprecated Use `getCountCountries` instead.
     */
    getCountriesCount(...args: Parameters<GeographyV2Api['getCountCountries']>) {
        return this.getCountCountries(...args);
    }

    /**
     * Get a Count of All States
     *
     * Returns a count of all states.
     */
    getCountStates(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.GetCountStatesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/countries/states/count',
        });
    }

    /**
     * @deprecated Use `getCountStates` instead.
     */
    getStatesCount(...args: Parameters<GeographyV2Api['getCountStates']>) {
        return this.getCountStates(...args);
    }

    /**
     * Get All States
     *
     * Returns a list of all states.
     */
    getAllStates(
        query?: GeographyV2ApiSpecs.GetAllStatesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.GetAllStatesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/countries/states',
            query,
        });
    }

    /**
     * @deprecated Use `getAllStates` instead.
     */
    getStates(...args: Parameters<GeographyV2Api['getAllStates']>) {
        return this.getAllStates(...args);
    }

    /**
     * Get a Count of Country’s States
     *
     * Returns a count of a country's states.
     */
    getCountCountryStates(
        countryId: GeographyV2ApiSpecs.GetCountCountryStatesData['path']['country_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.GetCountCountryStatesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/countries/${countryId}/states/count`,
        });
    }

    /**
     * @deprecated Use `getCountCountryStates` instead.
     */
    getCountryStatesCount(...args: Parameters<GeographyV2Api['getCountCountryStates']>) {
        return this.getCountCountryStates(...args);
    }
}
