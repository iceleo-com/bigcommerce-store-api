import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as InventoryV3ApiSpecs from '../generated/inventory-v3';
export * as InventoryV3ApiSpecs from '../generated/inventory-v3';
export declare class InventoryV3Api {
    private readonly request;
    constructor(request: RequestService);
    putAbsoluteAdjustment(requestBody: InventoryV3ApiSpecs.PutAbsoluteAdjustmentData['body']): Promise<RequestSuccessResponse<200, Required<InventoryV3ApiSpecs.SimpleTransactionResponse>> | RequestErrorResponse<422, Required<InventoryV3ApiSpecs.ErrorResponse>>>;
    postRelativeAdjustment(requestBody: InventoryV3ApiSpecs.PostRelativeAdjustmentData['body']): Promise<RequestSuccessResponse<200, Required<InventoryV3ApiSpecs.SimpleTransactionResponse>> | RequestErrorResponse<422, Required<InventoryV3ApiSpecs.ErrorResponse>>>;
    getInventoryItems(query?: InventoryV3ApiSpecs.GetInventoryItemsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<InventoryV3ApiSpecs.ItemResponse>;
        meta?: InventoryV3ApiSpecs.Meta;
    }>>>;
    getLocationInventoryItems(locationId: InventoryV3ApiSpecs.GetLocationInventoryItemsData['path']['location_id'], query?: InventoryV3ApiSpecs.GetLocationInventoryItemsData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<InventoryV3ApiSpecs.LocationItemsResponse>;
        meta?: InventoryV3ApiSpecs.Meta;
    }>> | RequestErrorResponse<404, Required<InventoryV3ApiSpecs.ErrorResponse>>>;
    putLocationInventoryItems(locationId: InventoryV3ApiSpecs.PutLocationInventoryItemsData['path']['location_id'], requestBody: InventoryV3ApiSpecs.PutLocationInventoryItemsData['body']): Promise<RequestSuccessResponse<200, Required<InventoryV3ApiSpecs.SimpleTransactionResponse>> | RequestErrorResponse<422, Required<InventoryV3ApiSpecs.ErrorResponse>>>;
}
