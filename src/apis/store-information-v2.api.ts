import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StoreInformationV2ApiSpecs from '../generated/store-information-v2';
export * as StoreInformationV2ApiSpecs from '../generated/store-information-v2';

export class StoreInformationV2Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Store Information
     *
     * Returns metadata about the global settings for a store. Some of these values are independently configurable on a per-storefront or per-channel basis. For channel overrides, see [Store Settings](/docs/rest-management/settings).
     */
    getStoreInformation(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.GetStoreInformationResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/store',
        });
    }

    /**
     * Get All Store Metafields
     *
     * Gets all store `metafields`.
     */
    getStoreMetafields(
        query?: StoreInformationV2ApiSpecs.GetStoreMetafieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.GetStoreMetafieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/store/metafields',
            query,
        });
    }

    /**
     * Create multiple Metafields
     *
     * Create multiple `metafields`.
     */
    createStoresMetafields(
        requestBody: StoreInformationV2ApiSpecs.CreateStoresMetafieldsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.CreateStoresMetafieldsResponses[200]>>,RequestErrorResponse<422, Required<StoreInformationV2ApiSpecs.CreateStoresMetafieldsErrors[422]>>>({
            path: 'v2/store/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update multiple metafields
     *
     * Update multiple metafields.
     */
    updateStoreMetafields(
        requestBody: StoreInformationV2ApiSpecs.UpdateStoreMetafieldsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.UpdateStoreMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<StoreInformationV2ApiSpecs.UpdateStoreMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<StoreInformationV2ApiSpecs.UpdateStoreMetafieldsErrors[422]>>)>({
            path: 'v2/store/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete multiple metafields
     *
     * Delete all store metafields.
     */
    deleteStoreMetafields(
        requestBody: StoreInformationV2ApiSpecs.DeleteStoreMetafieldsData['body'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.DeleteStoreMetafieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/store/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Store Metafield
     *
     * Gets a store `metafield`.
     */
    getStoreMetafield(
        metafieldId: StoreInformationV2ApiSpecs.GetStoreMetafieldData['path']['metafieldId'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.GetStoreMetafieldResponses[200]>>,RequestErrorResponse<404, Required<StoreInformationV2ApiSpecs.GetStoreMetafieldErrors[404]>>>({
            path: `v2/store/metafields/${metafieldId}`,
        });
    }

    /**
     * Update a Store Metafield
     *
     * Update a store `Metafield`.

     */
    updateStoreMetafield(
        metafieldId: StoreInformationV2ApiSpecs.UpdateStoreMetafieldData['path']['metafieldId'],
        requestBody: StoreInformationV2ApiSpecs.UpdateStoreMetafieldData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.UpdateStoreMetafieldResponses[200]>>,RequestErrorResponse<404, Required<StoreInformationV2ApiSpecs.UpdateStoreMetafieldErrors[404]>>>({
            path: `v2/store/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Metafield
     *
     * Deletes a store `Metafield`.

     */
    deleteStoreMetafield(
        metafieldId: StoreInformationV2ApiSpecs.DeleteStoreMetafieldData['path']['metafieldId'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<StoreInformationV2ApiSpecs.DeleteStoreMetafieldResponses[204]>>,RequestErrorResponse<404, Required<StoreInformationV2ApiSpecs.DeleteStoreMetafieldErrors[404]>>>({
            path: `v2/store/metafields/${metafieldId}`,
        });
    }

    /**
     * Get System Timestamp
     *
     * Returns the system timestamp at the time of the request. The time resource is useful for validating API authentication details and testing client connections.
     */
    getSystemTimestamp(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.GetSystemTimestampResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/time',
        });
    }
}
