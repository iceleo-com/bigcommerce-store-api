import RequestService from '../helpers/request/request-service';
import * as GeographyV2ApiSpecs from '../generated/geography-v2';
export default class GeographyV2Api {
    private readonly request;
    constructor(request: RequestService);
    getCountries(query?: GeographyV2ApiSpecs.GetCountriesData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getCountry(id: GeographyV2ApiSpecs.GetCountryData['path']['id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getCountryStates(countryId: GeographyV2ApiSpecs.GetCountryStatesData['path']['country_id'], query?: GeographyV2ApiSpecs.GetCountryStatesData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getCountryState(countryId: GeographyV2ApiSpecs.GetCountryStateData['path']['country_id'], id: GeographyV2ApiSpecs.GetCountryStateData['path']['id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getCountriesCount(): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getStatesCount(): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getStates(query?: GeographyV2ApiSpecs.GetStatesData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getCountryStatesCount(countryId: GeographyV2ApiSpecs.GetCountryStatesCountData['path']['country_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
}
