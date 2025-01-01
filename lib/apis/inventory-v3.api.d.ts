import RequestService from '../helpers/request/request-service';
import * as InventoryV3ApiSpecs from '../generated/inventory-v3';
export default class InventoryV3Api {
    private readonly request;
    constructor(request: RequestService);
    putAbsoluteAdjustment(requestBody: InventoryV3ApiSpecs.PutAbsoluteAdjustmentData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<InventoryV3ApiSpecs.SimpleTransactionResponse, InventoryV3ApiSpecs.ErrorResponse>>;
    postRelativeAdjustment(requestBody: InventoryV3ApiSpecs.PostRelativeAdjustmentData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<InventoryV3ApiSpecs.SimpleTransactionResponse, InventoryV3ApiSpecs.ErrorResponse>>;
    getInventoryItems(query?: InventoryV3ApiSpecs.GetInventoryItemsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<InventoryV3ApiSpecs.GetInventoryItemsResponse, any>>;
    getLocationInventoryItems(query?: InventoryV3ApiSpecs.GetLocationInventoryItemsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<InventoryV3ApiSpecs.GetLocationInventoryItemsResponse, InventoryV3ApiSpecs.ErrorResponse>>;
    putLocationInventoryItems(requestBody: InventoryV3ApiSpecs.PutLocationInventoryItemsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<InventoryV3ApiSpecs.SimpleTransactionResponse, InventoryV3ApiSpecs.ErrorResponse>>;
}
