import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StoreInformationV3ApiSpecs from '../generated/store-information-v3';
export * as StoreInformationV3ApiSpecs from '../generated/store-information-v3';
export declare class StoreInformationV3Api {
    private readonly request;
    constructor(request: RequestService);
    getStoreMetafields(query?: StoreInformationV3ApiSpecs.GetStoreMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreInformationV3ApiSpecs.MetaFieldCollectionResponseBatch>>>;
    createStoresMetafields(requestBody: StoreInformationV3ApiSpecs.CreateStoresMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<StoreInformationV3ApiSpecs.MetaFieldCollectionResponseBatchPostPut>> | RequestErrorResponse<422, Required<StoreInformationV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>>>;
    updateStoreMetafields(requestBody: StoreInformationV3ApiSpecs.UpdateStoreMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<StoreInformationV3ApiSpecs.MetaFieldCollectionResponseBatchPostPut>> | RequestErrorResponse<422, Required<StoreInformationV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    deleteStoreMetafields(requestBody: StoreInformationV3ApiSpecs.DeleteStoreMetafieldsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreInformationV3ApiSpecs.MetaFieldCollectionDeleteResponseSuccess>>>;
    getStoreMetafield(metafieldId: StoreInformationV3ApiSpecs.GetStoreMetafieldData['path']['metafieldId']): Promise<RequestSuccessResponse<200, Required<StoreInformationV3ApiSpecs.MetafieldResponse>> | RequestErrorResponse<404, Required<StoreInformationV3ApiSpecs.NotFound>>>;
    updateStoreMetafield(metafieldId: StoreInformationV3ApiSpecs.UpdateStoreMetafieldData['path']['metafieldId'], requestBody: StoreInformationV3ApiSpecs.UpdateStoreMetafieldData['body']): Promise<RequestErrorResponse<404, Required<StoreInformationV3ApiSpecs.NotFound>> | RequestSuccessResponse<200, Required<StoreInformationV3ApiSpecs.MetaFieldCollectionResponse>>>;
    deleteStoreMetafield(metafieldId: StoreInformationV3ApiSpecs.DeleteStoreMetafieldData['path']['metafieldId']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<StoreInformationV3ApiSpecs.NotFound>>>;
}
