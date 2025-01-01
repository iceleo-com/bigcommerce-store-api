"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LocationsV3Api {
    constructor(request) {
        this.request = request;
    }
    getLocations(query) {
        return this.request.get({
            path: 'v3/inventory/locations',
            query,
        });
    }
    createLocations(requestBody) {
        return this.request.post({
            path: 'v3/inventory/locations',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateLocations(requestBody) {
        return this.request.put({
            path: 'v3/inventory/locations',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteLocations(query) {
        return this.request.delete({
            path: 'v3/inventory/locations',
            query,
        });
    }
    getLocationMetafields() {
        return this.request.get({
            path: 'v3/inventory/locations/{location_id}/metafields',
        });
    }
    createLocationMetafield(requestBody) {
        return this.request.post({
            path: 'v3/inventory/locations/{location_id}/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getLocationMetafield() {
        return this.request.get({
            path: 'v3/inventory/locations/{location_id}/metafields/{metafield_id}',
        });
    }
    updateLocationMetafield(requestBody) {
        return this.request.put({
            path: 'v3/inventory/locations/{location_id}/metafields/{metafield_id}',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteLocationMetafield() {
        return this.request.delete({
            path: 'v3/inventory/locations/{location_id}/metafields/{metafield_id}',
        });
    }
    getLocationsMetafields(query) {
        return this.request.get({
            path: 'v3/inventory/locations/metafields',
            query,
        });
    }
    createLocationsMetafields(requestBody) {
        return this.request.post({
            path: 'v3/inventory/locations/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateLocationsMetafields(requestBody) {
        return this.request.put({
            path: 'v3/inventory/locations/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteLocationsMetafields(requestBody) {
        return this.request.delete({
            path: 'v3/inventory/locations/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = LocationsV3Api;
