import RequestService from '../helpers/request/request-service';
import * as StoreInformationV2ApiSpecs from '../generated/store-information-v2';
export default class StoreInformationV2Api {
    private readonly request;
    constructor(request: RequestService);
    getStoreInformation(): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreInformationV2ApiSpecs.StoreInformation, any>>;
    getStoreMetafields(query?: StoreInformationV2ApiSpecs.GetStoreMetafieldsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreInformationV2ApiSpecs.MetaFieldCollectionResponse_Batch, any>>;
    createStoresMetafields(requestBody: StoreInformationV2ApiSpecs.CreateStoresMetafieldsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreInformationV2ApiSpecs.MetaFieldCollectionResponse_Batch_POST_PUT, StoreInformationV2ApiSpecs.MetaFieldCollectionResponsePartialSuccess_POST_PUT>>;
    updateStoreMetafields(requestBody: StoreInformationV2ApiSpecs.UpdateStoreMetafieldsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreInformationV2ApiSpecs.MetaFieldCollectionResponse_Batch_POST_PUT, StoreInformationV2ApiSpecs.UpdateStoreMetafieldsError>>;
    deleteStoreMetafields(requestBody: StoreInformationV2ApiSpecs.DeleteStoreMetafieldsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreInformationV2ApiSpecs.MetaFieldCollectionDeleteResponseSuccess, any>>;
    getStoreMetafield(metafieldId: StoreInformationV2ApiSpecs.GetStoreMetafieldData['path']['metafieldId']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreInformationV2ApiSpecs.MetafieldResponse, StoreInformationV2ApiSpecs.NotFound>>;
    updateStoreMetafield(metafieldId: StoreInformationV2ApiSpecs.UpdateStoreMetafieldData['path']['metafieldId'], requestBody: StoreInformationV2ApiSpecs.UpdateStoreMetafieldData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreInformationV2ApiSpecs.MetaFieldCollectionResponse, StoreInformationV2ApiSpecs.NotFound>>;
    deleteStoreMetafield(metafieldId: StoreInformationV2ApiSpecs.DeleteStoreMetafieldData['path']['metafieldId']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, StoreInformationV2ApiSpecs.NotFound>>;
    getSystemTimestamp(): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreInformationV2ApiSpecs.timeStamp_Full, any>>;
}
