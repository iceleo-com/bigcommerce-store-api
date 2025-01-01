import RequestService from '../helpers/request/request-service';
import * as StoreInformationV2ApiSpecs from '../generated/store-information-v2';

export default class StoreInformationV2Api {
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
        return this.request.get<StoreInformationV2ApiSpecs.GetStoreInformationResponse, any>({
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
        return this.request.get<StoreInformationV2ApiSpecs.GetStoreMetafieldsResponse, any>({
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
        return this.request.post<StoreInformationV2ApiSpecs.CreateStoresMetafieldsResponse, StoreInformationV2ApiSpecs.CreateStoresMetafieldsError>({
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
        return this.request.put<StoreInformationV2ApiSpecs.UpdateStoreMetafieldsResponse, StoreInformationV2ApiSpecs.UpdateStoreMetafieldsError>({
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
        return this.request.delete<StoreInformationV2ApiSpecs.DeleteStoreMetafieldsResponse, any>({
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
        return this.request.get<StoreInformationV2ApiSpecs.GetStoreMetafieldResponse, StoreInformationV2ApiSpecs.GetStoreMetafieldError>({
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
        return this.request.put<StoreInformationV2ApiSpecs.UpdateStoreMetafieldResponse, StoreInformationV2ApiSpecs.UpdateStoreMetafieldError>({
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
        return this.request.delete<any, StoreInformationV2ApiSpecs.DeleteStoreMetafieldError>({
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
        return this.request.get<StoreInformationV2ApiSpecs.GetSystemTimestampResponse, any>({
            path: 'v2/time',
        });
    }
}
