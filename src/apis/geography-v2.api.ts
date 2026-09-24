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
     * List Countries
     *
     * Get a list of all countries available. A country or territory, identifiable by an ISO 3166 country code.
     */
    getCountries(
        query?: GeographyV2ApiSpecs.GetCountriesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.GetCountriesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/countries',
            query,
        });
    }

    /**
     * Get Country
     *
     * Returns a single *Country*.  Gets a country. A country or territory, identifiable by an ISO 3166 country code.
     */
    getCountry(
        id: GeographyV2ApiSpecs.GetCountryData['path']['id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.GetCountryResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/countries/${id}`,
        });
    }

    /**
     * Get Count of Countries
     *
     * Returns a count of all countries.
     */
    getCountriesCount(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.GetCountriesCountResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/countries/count',
        });
    }

    /**
     * List Countryʼs States
     *
     * Returns a list of *States* belonging to a *Country*. 
     A state or province, identifiable by an ISO 3166 subdivision code.
     */
    getCountryStates(
        countryId: GeographyV2ApiSpecs.GetCountryStatesData['path']['country_id'],
        query?: GeographyV2ApiSpecs.GetCountryStatesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.GetCountryStatesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/countries/${countryId}/states`,
            query,
        });
    }

    /**
     * Get Countryʼs State
     *
     * Returns a *State*. 
     A state or province, identifiable by an ISO 3166 subdivision code.
     */
    getCountryState(
        countryId: GeographyV2ApiSpecs.GetCountryStateData['path']['country_id'],
        id: GeographyV2ApiSpecs.GetCountryStateData['path']['id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.GetCountryStateResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/countries/${countryId}/states/${id}`,
        });
    }

    /**
     * Get Count of States
     *
     * Returns a count of all states.
     */
    getStatesCount(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.GetStatesCountResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/countries/states/count',
        });
    }

    /**
     * List States
     *
     * Returns a list of all states.
     */
    getStates(
        query?: GeographyV2ApiSpecs.GetStatesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.GetStatesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/countries/states',
            query,
        });
    }

    /**
     * Get Count of Country’s States
     *
     * Returns a count of a countryʼs states.
     */
    getCountryStatesCount(
        countryId: GeographyV2ApiSpecs.GetCountryStatesCountData['path']['country_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.GetCountryStatesCountResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/countries/${countryId}/states/count`,
        });
    }
}
