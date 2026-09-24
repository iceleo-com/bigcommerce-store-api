import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as LocationsV3ApiSpecs from '../generated/locations-v3';
export * as LocationsV3ApiSpecs from '../generated/locations-v3';
export declare class LocationsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getLocations(query?: LocationsV3ApiSpecs.GetLocationsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.LocationsGetLocationsResponse200>>>;
    createLocations(requestBody: LocationsV3ApiSpecs.CreateLocationsData['body']): Promise<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.SimpleTransactionResponse>> | RequestErrorResponse<422, Required<LocationsV3ApiSpecs.ErrorResponse>>>;
    updateLocations(requestBody: LocationsV3ApiSpecs.UpdateLocationsData['body']): Promise<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.SimpleTransactionResponse>> | RequestErrorResponse<422, Required<LocationsV3ApiSpecs.ErrorResponse>>>;
    deleteLocations(query?: LocationsV3ApiSpecs.DeleteLocationsData['query']): Promise<RequestErrorResponse<422, Required<LocationsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<404, Required<LocationsV3ApiSpecs.ErrorResponse>>>;
    getLocationMetafields(locationId: LocationsV3ApiSpecs.GetLocationMetafieldsData['path']['location_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.MetafieldsGetLocationMetafieldsResponse200>>>;
    createLocationMetafield(locationId: LocationsV3ApiSpecs.CreateLocationMetafieldData['path']['location_id'], requestBody: LocationsV3ApiSpecs.CreateLocationMetafieldData['body']): Promise<RequestErrorResponse<422, Required<LocationsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.MetafieldsCreateLocationMetafieldResponse200>> | RequestErrorResponse<400, Required<LocationsV3ApiSpecs.CreateLocationMetafieldRequestBadRequestError>> | RequestErrorResponse<409, Required<LocationsV3ApiSpecs.CreateLocationMetafieldRequestConflictError>>>;
    getLocationMetafield(locationId: LocationsV3ApiSpecs.GetLocationMetafieldData['path']['location_id'], metafieldId: LocationsV3ApiSpecs.GetLocationMetafieldData['path']['metafield_id']): Promise<RequestErrorResponse<404, Required<LocationsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.MetafieldsGetLocationMetafieldResponse200>>>;
    updateLocationMetafield(locationId: LocationsV3ApiSpecs.UpdateLocationMetafieldData['path']['location_id'], metafieldId: LocationsV3ApiSpecs.UpdateLocationMetafieldData['path']['metafield_id'], requestBody: LocationsV3ApiSpecs.UpdateLocationMetafieldData['body']): Promise<RequestErrorResponse<404, Required<LocationsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.MetafieldsUpdateLocationMetafieldResponse200>> | RequestErrorResponse<400, Required<LocationsV3ApiSpecs.UpdateLocationMetafieldRequestBadRequestError>>>;
    deleteLocationMetafield(locationId: LocationsV3ApiSpecs.DeleteLocationMetafieldData['path']['location_id'], metafieldId: LocationsV3ApiSpecs.DeleteLocationMetafieldData['path']['metafield_id']): Promise<RequestErrorResponse<404, Required<LocationsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getLocationsMetafields(query?: LocationsV3ApiSpecs.GetLocationsMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.MetaFieldCollectionResponse>>>;
    createLocationsMetafields(requestBody: LocationsV3ApiSpecs.CreateLocationsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.MetaFieldCollectionResponsePostPut>> | RequestErrorResponse<400, Required<LocationsV3ApiSpecs.CreateLocationsMetafieldsRequestBadRequestError>> | RequestErrorResponse<422, Required<LocationsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>>>;
    updateLocationsMetafields(requestBody: LocationsV3ApiSpecs.UpdateLocationsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.MetaFieldCollectionResponsePostPut>> | RequestErrorResponse<422, Required<LocationsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>> | RequestErrorResponse<400, Required<LocationsV3ApiSpecs.UpdateLocationsMetafieldsRequestBadRequestError>>>;
    deleteLocationsMetafields(requestBody: LocationsV3ApiSpecs.DeleteLocationsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.MetaFieldCollectionDeleteResponseSuccess>> | RequestErrorResponse<422, Required<LocationsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessDelete>>>;
}
