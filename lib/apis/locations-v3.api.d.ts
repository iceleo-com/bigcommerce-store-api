import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as LocationsV3ApiSpecs from '../generated/locations-v3';
export * as LocationsV3ApiSpecs from '../generated/locations-v3';
export declare class LocationsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getLocations(query?: LocationsV3ApiSpecs.GetLocationsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<LocationsV3ApiSpecs.LocationResponse>;
        meta?: LocationsV3ApiSpecs.Meta;
    }>>>;
    createLocations(requestBody: LocationsV3ApiSpecs.CreateLocationsData['body']): Promise<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.SimpleTransactionResponse>> | RequestErrorResponse<422, Required<LocationsV3ApiSpecs.ErrorResponse>>>;
    updateLocations(requestBody: LocationsV3ApiSpecs.UpdateLocationsData['body']): Promise<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.SimpleTransactionResponse>> | RequestErrorResponse<422, Required<LocationsV3ApiSpecs.ErrorResponse>>>;
    deleteLocations(query?: LocationsV3ApiSpecs.DeleteLocationsData['query']): Promise<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.SimpleTransactionResponse>> | RequestErrorResponse<422, Required<LocationsV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<404, Required<LocationsV3ApiSpecs.ErrorResponse>>>;
    getLocationMetafields(locationId: LocationsV3ApiSpecs.GetLocationMetafieldsData['path']['location_id'], query?: LocationsV3ApiSpecs.GetLocationMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<LocationsV3ApiSpecs.Metafield>;
        meta?: {
            pagination?: {
                total?: number;
                count?: number;
                per_page?: number;
                current_page?: number;
                total_pages?: number;
                links?: {
                    current?: string;
                };
            };
        };
    }>>>;
    createLocationMetafield(locationId: LocationsV3ApiSpecs.CreateLocationMetafieldData['path']['location_id'], requestBody: LocationsV3ApiSpecs.CreateLocationMetafieldData['body']): Promise<RequestErrorResponse<422, Required<LocationsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: LocationsV3ApiSpecs.Metafield;
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<409, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    getLocationMetafield(locationId: LocationsV3ApiSpecs.GetLocationMetafieldData['path']['location_id'], metafieldId: LocationsV3ApiSpecs.GetLocationMetafieldData['path']['metafield_id']): Promise<RequestErrorResponse<404, Required<LocationsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: LocationsV3ApiSpecs.Metafield;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    updateLocationMetafield(locationId: LocationsV3ApiSpecs.UpdateLocationMetafieldData['path']['location_id'], metafieldId: LocationsV3ApiSpecs.UpdateLocationMetafieldData['path']['metafield_id'], requestBody: LocationsV3ApiSpecs.UpdateLocationMetafieldData['body']): Promise<RequestErrorResponse<404, Required<LocationsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: LocationsV3ApiSpecs.Metafield;
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    deleteLocationMetafield(locationId: LocationsV3ApiSpecs.DeleteLocationMetafieldData['path']['location_id'], metafieldId: LocationsV3ApiSpecs.DeleteLocationMetafieldData['path']['metafield_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<LocationsV3ApiSpecs.ErrorResponse>>>;
    getLocationsMetafields(query?: LocationsV3ApiSpecs.GetLocationsMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.MetaFieldCollectionResponse>>>;
    createLocationsMetafields(requestBody: LocationsV3ApiSpecs.CreateLocationsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.MetaFieldCollectionResponsePostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<LocationsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>>>;
    updateLocationsMetafields(requestBody: LocationsV3ApiSpecs.UpdateLocationsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.MetaFieldCollectionResponsePostPut>> | RequestErrorResponse<422, Required<LocationsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    deleteLocationsMetafields(requestBody: LocationsV3ApiSpecs.DeleteLocationsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<LocationsV3ApiSpecs.MetaFieldCollectionDeleteResponseSuccess>> | RequestErrorResponse<422, Required<LocationsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessDelete>>>;
}
