import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StoreInformationV3ApiSpecs from '../generated/store-information-v3';
export * as StoreInformationV3ApiSpecs from '../generated/store-information-v3';

export class StoreInformationV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * List Store Metafields
     *
     * Gets all store `metafields`.
     */
    getStoreMetafields(
        query?: StoreInformationV3ApiSpecs.GetStoreMetafieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreInformationV3ApiSpecs.GetStoreMetafieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/store/metafields',
            query,
        });
    }

    /**
     * Create Multiple Metafields
     *
     * Create multiple `metafields`.
     */
    createStoresMetafields(
        requestBody: StoreInformationV3ApiSpecs.CreateStoresMetafieldsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<StoreInformationV3ApiSpecs.CreateStoresMetafieldsResponses[200]>>,RequestErrorResponse<422, Required<StoreInformationV3ApiSpecs.CreateStoresMetafieldsErrors[422]>>>({
            path: 'v3/store/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Multiple Metafields
     *
     * Update multiple metafields.
     */
    updateStoreMetafields(
        requestBody: StoreInformationV3ApiSpecs.UpdateStoreMetafieldsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<StoreInformationV3ApiSpecs.UpdateStoreMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<StoreInformationV3ApiSpecs.UpdateStoreMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<StoreInformationV3ApiSpecs.UpdateStoreMetafieldsErrors[422]>>)>({
            path: 'v3/store/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Multiple Metafields
     *
     * Delete all store metafields.
     */
    deleteStoreMetafields(
        requestBody: StoreInformationV3ApiSpecs.DeleteStoreMetafieldsData['body'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<StoreInformationV3ApiSpecs.DeleteStoreMetafieldsResponses[200]>>,RequestErrorResponse<422, Required<StoreInformationV3ApiSpecs.DeleteStoreMetafieldsErrors[422]>>>({
            path: 'v3/store/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Store Metafield
     *
     * Gets a store `metafield`.
     */
    getStoreMetafield(
        metafieldId: StoreInformationV3ApiSpecs.GetStoreMetafieldData['path']['metafieldId'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreInformationV3ApiSpecs.GetStoreMetafieldResponses[200]>>,RequestErrorResponse<404, Required<StoreInformationV3ApiSpecs.GetStoreMetafieldErrors[404]>>>({
            path: `v3/store/metafields/${metafieldId}`,
        });
    }

    /**
     * Update Store Metafield
     *
     * Update a store `Metafield`.

     */
    updateStoreMetafield(
        metafieldId: StoreInformationV3ApiSpecs.UpdateStoreMetafieldData['path']['metafieldId'],
        requestBody: StoreInformationV3ApiSpecs.UpdateStoreMetafieldData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<StoreInformationV3ApiSpecs.UpdateStoreMetafieldResponses[200]>>,RequestErrorResponse<404, Required<StoreInformationV3ApiSpecs.UpdateStoreMetafieldErrors[404]>>>({
            path: `v3/store/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Metafield
     *
     * Deletes a store `Metafield`.

     */
    deleteStoreMetafield(
        metafieldId: StoreInformationV3ApiSpecs.DeleteStoreMetafieldData['path']['metafieldId'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<StoreInformationV3ApiSpecs.DeleteStoreMetafieldResponses[204]>>,RequestErrorResponse<404, Required<StoreInformationV3ApiSpecs.DeleteStoreMetafieldErrors[404]>>>({
            path: `v3/store/metafields/${metafieldId}`,
        });
    }
}
