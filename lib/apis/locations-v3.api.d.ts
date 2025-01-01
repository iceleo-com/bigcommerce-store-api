import RequestService from '../helpers/request/request-service';
import * as LocationsV3ApiSpecs from '../generated/locations-v3';
export default class LocationsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getLocations(query?: LocationsV3ApiSpecs.GetLocationsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<LocationsV3ApiSpecs.GetLocationsResponse, any>>;
    createLocations(requestBody: LocationsV3ApiSpecs.CreateLocationsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<LocationsV3ApiSpecs.SimpleTransactionResponse, LocationsV3ApiSpecs.ErrorResponse>>;
    updateLocations(requestBody: LocationsV3ApiSpecs.UpdateLocationsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<LocationsV3ApiSpecs.SimpleTransactionResponse, LocationsV3ApiSpecs.ErrorResponse>>;
    deleteLocations(query?: LocationsV3ApiSpecs.DeleteLocationsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<LocationsV3ApiSpecs.SimpleTransactionResponse, LocationsV3ApiSpecs.ErrorResponse>>;
    getLocationMetafields(): Promise<import("../helpers/request/request-service.type").RequestResponse<LocationsV3ApiSpecs.GetLocationMetafieldsResponse, any>>;
    createLocationMetafield(requestBody: LocationsV3ApiSpecs.CreateLocationMetafieldData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<LocationsV3ApiSpecs.CreateLocationMetafieldResponse, LocationsV3ApiSpecs.CreateLocationMetafieldError>>;
    getLocationMetafield(): Promise<import("../helpers/request/request-service.type").RequestResponse<LocationsV3ApiSpecs.GetLocationMetafieldResponse, LocationsV3ApiSpecs.ErrorResponse>>;
    updateLocationMetafield(requestBody: LocationsV3ApiSpecs.UpdateLocationMetafieldData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<LocationsV3ApiSpecs.UpdateLocationMetafieldResponse, LocationsV3ApiSpecs.UpdateLocationMetafieldError>>;
    deleteLocationMetafield(): Promise<import("../helpers/request/request-service.type").RequestResponse<any, LocationsV3ApiSpecs.ErrorResponse>>;
    getLocationsMetafields(query?: LocationsV3ApiSpecs.GetLocationsMetafieldsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<LocationsV3ApiSpecs.MetaFieldCollectionResponse, any>>;
    createLocationsMetafields(requestBody: LocationsV3ApiSpecs.CreateLocationsMetafieldsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<LocationsV3ApiSpecs.MetaFieldCollectionResponse_POST_PUT, LocationsV3ApiSpecs.CreateLocationsMetafieldsError>>;
    updateLocationsMetafields(requestBody: LocationsV3ApiSpecs.UpdateLocationsMetafieldsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<LocationsV3ApiSpecs.MetaFieldCollectionResponse_POST_PUT, LocationsV3ApiSpecs.UpdateLocationsMetafieldsError>>;
    deleteLocationsMetafields(requestBody: LocationsV3ApiSpecs.DeleteLocationsMetafieldsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<LocationsV3ApiSpecs.MetaFieldCollectionDeleteResponseSuccess, LocationsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccess_DELETE>>;
}
