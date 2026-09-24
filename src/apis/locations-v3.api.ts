import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as LocationsV3ApiSpecs from '../generated/locations-v3';
export * as LocationsV3ApiSpecs from '../generated/locations-v3';

export class LocationsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Locations
     *
     * List locations. You can use optional filter parameters.

     **Limits**
     * Limit of 50 concurrent requests.
     * Limit of 1000 items for payload length.

     */
    getLocations(
        query?: LocationsV3ApiSpecs.GetLocationsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.GetLocationsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/inventory/locations',
            query,
        });
    }

    /**
     * Create Locations
     *
     * Create new locations.

     **Limits**
     * Limit of 50 concurrent requests.
     * Limit of 100 active locations.

     */
    createLocations(
        requestBody: LocationsV3ApiSpecs.CreateLocationsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.CreateLocationsResponses[200]>>,RequestErrorResponse<422, Required<LocationsV3ApiSpecs.CreateLocationsErrors[422]>>>({
            path: 'v3/inventory/locations',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Locations
     *
     * 
     Update existing locations.

     **Limits**
     * Limit of 50 concurrent requests.
     * Limit of 100 active locations.

     */
    updateLocations(
        requestBody: LocationsV3ApiSpecs.UpdateLocationsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.UpdateLocationsResponses[200]>>,RequestErrorResponse<422, Required<LocationsV3ApiSpecs.UpdateLocationsErrors[422]>>>({
            path: 'v3/inventory/locations',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Locations
     *
     * Delete existing locations. 

     You cannot delete locations that are shipping origins or have open order transactions. The location with a `location_id` of 1 is the storeʼs default shipping origin, and you cannot change the shipping origin.

     You can delete locations assigned to pickup methods.

     > Warning:
     >
     > Deleting locations that have inventory also deletes its stock.

     */
    deleteLocations(
        query?: LocationsV3ApiSpecs.DeleteLocationsData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.DeleteLocationsResponses[200]>>,(RequestErrorResponse<404, Required<LocationsV3ApiSpecs.DeleteLocationsErrors[404]>> | RequestErrorResponse<422, Required<LocationsV3ApiSpecs.DeleteLocationsErrors[422]>>)>({
            path: 'v3/inventory/locations',
            query,
        });
    }

    /**
     * Get Metafields
     *
     * Retrieve metafields for a location.
     */
    getLocationMetafields(
        locationId: LocationsV3ApiSpecs.GetLocationMetafieldsData['path']['location_id'],
        query?: LocationsV3ApiSpecs.GetLocationMetafieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.GetLocationMetafieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/inventory/locations/${locationId}/metafields`,
            query,
        });
    }

    /**
     * Create a Metafield
     *
     * Create a location metafield.
     */
    createLocationMetafield(
        locationId: LocationsV3ApiSpecs.CreateLocationMetafieldData['path']['location_id'],
        requestBody: LocationsV3ApiSpecs.CreateLocationMetafieldData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.CreateLocationMetafieldResponses[200]>>,(RequestErrorResponse<400, Required<LocationsV3ApiSpecs.CreateLocationMetafieldErrors[400]>> | RequestErrorResponse<409, Required<LocationsV3ApiSpecs.CreateLocationMetafieldErrors[409]>> | RequestErrorResponse<422, Required<LocationsV3ApiSpecs.CreateLocationMetafieldErrors[422]>>)>({
            path: `v3/inventory/locations/${locationId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Metafield
     *
     * Get a metafield by location.
     */
    getLocationMetafield(
        locationId: LocationsV3ApiSpecs.GetLocationMetafieldData['path']['location_id'],
        metafieldId: LocationsV3ApiSpecs.GetLocationMetafieldData['path']['metafield_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.GetLocationMetafieldResponses[200]>>,RequestErrorResponse<404, Required<LocationsV3ApiSpecs.GetLocationMetafieldErrors[404]>>>({
            path: `v3/inventory/locations/${locationId}/metafields/${metafieldId}`,
        });
    }

    /**
     * Update a Metafield
     *
     * Update a metafield.
     */
    updateLocationMetafield(
        locationId: LocationsV3ApiSpecs.UpdateLocationMetafieldData['path']['location_id'],
        metafieldId: LocationsV3ApiSpecs.UpdateLocationMetafieldData['path']['metafield_id'],
        requestBody: LocationsV3ApiSpecs.UpdateLocationMetafieldData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.UpdateLocationMetafieldResponses[200]>>,(RequestErrorResponse<400, Required<LocationsV3ApiSpecs.UpdateLocationMetafieldErrors[400]>> | RequestErrorResponse<404, Required<LocationsV3ApiSpecs.UpdateLocationMetafieldErrors[404]>>)>({
            path: `v3/inventory/locations/${locationId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Metafield
     *
     * Delete a metafield.
     */
    deleteLocationMetafield(
        locationId: LocationsV3ApiSpecs.DeleteLocationMetafieldData['path']['location_id'],
        metafieldId: LocationsV3ApiSpecs.DeleteLocationMetafieldData['path']['metafield_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<LocationsV3ApiSpecs.DeleteLocationMetafieldResponses[204]>>,RequestErrorResponse<404, Required<LocationsV3ApiSpecs.DeleteLocationMetafieldErrors[404]>>>({
            path: `v3/inventory/locations/${locationId}/metafields/${metafieldId}`,
        });
    }

    /**
     * Get All Metafields
     *
     * Get all location metafields.
     */
    getLocationsMetafields(
        query?: LocationsV3ApiSpecs.GetLocationsMetafieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.GetLocationsMetafieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/inventory/locations/metafields',
            query,
        });
    }

    /**
     * Create multiple Metafields
     *
     * Create multiple metafields.
     */
    createLocationsMetafields(
        requestBody: LocationsV3ApiSpecs.CreateLocationsMetafieldsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.CreateLocationsMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<LocationsV3ApiSpecs.CreateLocationsMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<LocationsV3ApiSpecs.CreateLocationsMetafieldsErrors[422]>>)>({
            path: 'v3/inventory/locations/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update multiple Metafields
     *
     * Create multiple metafields.
     */
    updateLocationsMetafields(
        requestBody: LocationsV3ApiSpecs.UpdateLocationsMetafieldsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.UpdateLocationsMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<LocationsV3ApiSpecs.UpdateLocationsMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<LocationsV3ApiSpecs.UpdateLocationsMetafieldsErrors[422]>>)>({
            path: 'v3/inventory/locations/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Multiple Metafields
     *
     * Delete all location metafields.
     */
    deleteLocationsMetafields(
        requestBody: LocationsV3ApiSpecs.DeleteLocationsMetafieldsData['body'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.DeleteLocationsMetafieldsResponses[200]>>,RequestErrorResponse<422, Required<LocationsV3ApiSpecs.DeleteLocationsMetafieldsErrors[422]>>>({
            path: 'v3/inventory/locations/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
