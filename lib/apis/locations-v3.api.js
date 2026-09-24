"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsV3Api = exports.LocationsV3ApiSpecs = void 0;
exports.LocationsV3ApiSpecs = __importStar(require("../generated/locations-v3"));
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
    getLocationMetafields(locationId, query) {
        return this.request.get({
            path: `v3/inventory/locations/${locationId}/metafields`,
            query,
        });
    }
    createLocationMetafield(locationId, requestBody) {
        return this.request.post({
            path: `v3/inventory/locations/${locationId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getLocationMetafield(locationId, metafieldId) {
        return this.request.get({
            path: `v3/inventory/locations/${locationId}/metafields/${metafieldId}`,
        });
    }
    updateLocationMetafield(locationId, metafieldId, requestBody) {
        return this.request.put({
            path: `v3/inventory/locations/${locationId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteLocationMetafield(locationId, metafieldId) {
        return this.request.delete({
            path: `v3/inventory/locations/${locationId}/metafields/${metafieldId}`,
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
exports.LocationsV3Api = LocationsV3Api;
