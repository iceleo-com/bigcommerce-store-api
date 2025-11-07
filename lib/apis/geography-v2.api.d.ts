import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as GeographyV2ApiSpecs from '../generated/geography-v2';
export * as GeographyV2ApiSpecs from '../generated/geography-v2';
export declare class GeographyV2Api {
    private readonly request;
    constructor(request: RequestService);
    getCountries(query?: GeographyV2ApiSpecs.GetCountriesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, GeographyV2ApiSpecs.CountryFull[]>>;
    getCountry(id: GeographyV2ApiSpecs.GetCountryData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.CountryFull>>>;
    getCountryStates(countryId: GeographyV2ApiSpecs.GetCountryStatesData['path']['country_id'], query?: GeographyV2ApiSpecs.GetCountryStatesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, GeographyV2ApiSpecs.CountriesStateFull[]>>;
    getCountryState(countryId: GeographyV2ApiSpecs.GetCountryStateData['path']['country_id'], id: GeographyV2ApiSpecs.GetCountryStateData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.CountriesStateFull>>>;
    getCountriesCount(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.CountFull>>>;
    getStatesCount(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.CountFull>>>;
    getStates(query?: GeographyV2ApiSpecs.GetStatesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, GeographyV2ApiSpecs.CountriesStateFull[]>>;
    getCountryStatesCount(countryId: GeographyV2ApiSpecs.GetCountryStatesCountData['path']['country_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.CountFull>>>;
}
