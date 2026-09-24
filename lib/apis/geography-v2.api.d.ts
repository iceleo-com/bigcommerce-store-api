import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as GeographyV2ApiSpecs from '../generated/geography-v2';
export * as GeographyV2ApiSpecs from '../generated/geography-v2';
export declare class GeographyV2Api {
    private readonly request;
    constructor(request: RequestService);
    getAllCountries(query?: GeographyV2ApiSpecs.GetAllCountriesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, GeographyV2ApiSpecs.CountryFull[]>>;
    getCountries(...args: Parameters<GeographyV2Api['getAllCountries']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, GeographyV2ApiSpecs.CountryFull[]>>;
    getAcountry(id: GeographyV2ApiSpecs.GetACountryData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.CountryFull>>>;
    getCountry(...args: Parameters<GeographyV2Api['getAcountry']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.CountryFull>>>;
    getAllCountryStates(countryId: GeographyV2ApiSpecs.GetAllCountryStatesData['path']['country_id'], query?: GeographyV2ApiSpecs.GetAllCountryStatesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, GeographyV2ApiSpecs.CountriesStateFull[]>>;
    getCountryStates(...args: Parameters<GeographyV2Api['getAllCountryStates']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, GeographyV2ApiSpecs.CountriesStateFull[]>>;
    getAstate(countryId: GeographyV2ApiSpecs.GetAStateData['path']['country_id'], id: GeographyV2ApiSpecs.GetAStateData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.CountriesStateFull>>>;
    getCountryState(...args: Parameters<GeographyV2Api['getAstate']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.CountriesStateFull>>>;
    getCountCountries(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.CountFull>>>;
    getCountriesCount(...args: Parameters<GeographyV2Api['getCountCountries']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.CountFull>>>;
    getCountStates(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.CountFull>>>;
    getStatesCount(...args: Parameters<GeographyV2Api['getCountStates']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.CountFull>>>;
    getAllStates(query?: GeographyV2ApiSpecs.GetAllStatesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, GeographyV2ApiSpecs.CountriesStateFull[]>>;
    getStates(...args: Parameters<GeographyV2Api['getAllStates']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, GeographyV2ApiSpecs.CountriesStateFull[]>>;
    getCountCountryStates(countryId: GeographyV2ApiSpecs.GetCountCountryStatesData['path']['country_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.CountFull>>>;
    getCountryStatesCount(...args: Parameters<GeographyV2Api['getCountCountryStates']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<GeographyV2ApiSpecs.CountFull>>>;
}
