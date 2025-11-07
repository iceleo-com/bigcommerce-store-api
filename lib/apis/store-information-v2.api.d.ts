import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StoreInformationV2ApiSpecs from '../generated/store-information-v2';
export * as StoreInformationV2ApiSpecs from '../generated/store-information-v2';
export declare class StoreInformationV2Api {
    private readonly request;
    constructor(request: RequestService);
    getStoreInformation(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.StoreInformation>>>;
    getStoreMetafields(query?: StoreInformationV2ApiSpecs.GetStoreMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.MetaFieldCollectionResponseBatch>>>;
    createStoresMetafields(requestBody: StoreInformationV2ApiSpecs.CreateStoresMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.MetaFieldCollectionResponseBatchPostPut>> | RequestErrorResponse<422, Required<StoreInformationV2ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>>>;
    updateStoreMetafields(requestBody: StoreInformationV2ApiSpecs.UpdateStoreMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.MetaFieldCollectionResponseBatchPostPut>> | RequestErrorResponse<422, Required<StoreInformationV2ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    deleteStoreMetafields(requestBody: StoreInformationV2ApiSpecs.DeleteStoreMetafieldsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.MetaFieldCollectionDeleteResponseSuccess>>>;
    getStoreMetafield(metafieldId: StoreInformationV2ApiSpecs.GetStoreMetafieldData['path']['metafieldId']): Promise<RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.MetafieldResponse>> | RequestErrorResponse<404, Required<StoreInformationV2ApiSpecs.NotFound>>>;
    updateStoreMetafield(metafieldId: StoreInformationV2ApiSpecs.UpdateStoreMetafieldData['path']['metafieldId'], requestBody: StoreInformationV2ApiSpecs.UpdateStoreMetafieldData['body']): Promise<RequestErrorResponse<404, Required<StoreInformationV2ApiSpecs.NotFound>> | RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.MetaFieldCollectionResponse>>>;
    deleteStoreMetafield(metafieldId: StoreInformationV2ApiSpecs.DeleteStoreMetafieldData['path']['metafieldId']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<StoreInformationV2ApiSpecs.NotFound>>>;
    getSystemTimestamp(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreInformationV2ApiSpecs.TimeStampFull>>>;
}
