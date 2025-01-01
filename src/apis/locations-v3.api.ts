import RequestService from '../helpers/request/request-service';
import * as LocationsV3ApiSpecs from '../generated/locations-v3';

export default class LocationsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Locations
     *
     * List locations. You can use optional filter parameters.
     */
    getLocations(
        query?: LocationsV3ApiSpecs.GetLocationsData['query'],
    ) {
        return this.request.get<LocationsV3ApiSpecs.GetLocationsResponse, any>({
            path: 'v3/inventory/locations',
            query,
        });
    }

    /**
     * Create Locations
     *
     * Create new locations.
     */
    createLocations(
        requestBody: LocationsV3ApiSpecs.CreateLocationsData['body'],
    ) {
        return this.request.post<LocationsV3ApiSpecs.CreateLocationsResponse, LocationsV3ApiSpecs.CreateLocationsError>({
            path: 'v3/inventory/locations',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Locations
     *
     * Update existing locations.
     */
    updateLocations(
        requestBody: LocationsV3ApiSpecs.UpdateLocationsData['body'],
    ) {
        return this.request.put<LocationsV3ApiSpecs.UpdateLocationsResponse, LocationsV3ApiSpecs.UpdateLocationsError>({
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
        return this.request.delete<LocationsV3ApiSpecs.DeleteLocationsResponse, LocationsV3ApiSpecs.DeleteLocationsError>({
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
    ) {
        return this.request.get<LocationsV3ApiSpecs.GetLocationMetafieldsResponse, any>({
            path: 'v3/inventory/locations/{location_id}/metafields',
        });
    }

    /**
     * Create a Metafield
     *
     * Create a location metafield.
     */
    createLocationMetafield(
        requestBody: LocationsV3ApiSpecs.CreateLocationMetafieldData['body'],
    ) {
        return this.request.post<LocationsV3ApiSpecs.CreateLocationMetafieldResponse, LocationsV3ApiSpecs.CreateLocationMetafieldError>({
            path: 'v3/inventory/locations/{location_id}/metafields',
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
    ) {
        return this.request.get<LocationsV3ApiSpecs.GetLocationMetafieldResponse, LocationsV3ApiSpecs.GetLocationMetafieldError>({
            path: 'v3/inventory/locations/{location_id}/metafields/{metafield_id}',
        });
    }

    /**
     * Update a Metafield
     *
     * Update a metafield.
     */
    updateLocationMetafield(
        requestBody: LocationsV3ApiSpecs.UpdateLocationMetafieldData['body'],
    ) {
        return this.request.put<LocationsV3ApiSpecs.UpdateLocationMetafieldResponse, LocationsV3ApiSpecs.UpdateLocationMetafieldError>({
            path: 'v3/inventory/locations/{location_id}/metafields/{metafield_id}',
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
    ) {
        return this.request.delete<any, LocationsV3ApiSpecs.DeleteLocationMetafieldError>({
            path: 'v3/inventory/locations/{location_id}/metafields/{metafield_id}',
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
        return this.request.get<LocationsV3ApiSpecs.GetLocationsMetafieldsResponse, any>({
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
        return this.request.post<LocationsV3ApiSpecs.CreateLocationsMetafieldsResponse, LocationsV3ApiSpecs.CreateLocationsMetafieldsError>({
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
        return this.request.put<LocationsV3ApiSpecs.UpdateLocationsMetafieldsResponse, LocationsV3ApiSpecs.UpdateLocationsMetafieldsError>({
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
        return this.request.delete<LocationsV3ApiSpecs.DeleteLocationsMetafieldsResponse, LocationsV3ApiSpecs.DeleteLocationsMetafieldsError>({
            path: 'v3/inventory/locations/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
