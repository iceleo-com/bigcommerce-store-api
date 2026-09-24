import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as InventoryV3ApiSpecs from '../generated/inventory-v3';
export * as InventoryV3ApiSpecs from '../generated/inventory-v3';

export class InventoryV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Absolute Adjustment
     *
     * Override the existing inventory levels for an inventory item at a location. Use absolute adjustments as the default method for updating inventory. This endpoint batches requests, making them more resource friendly than the [Catalog API](/developer/api-reference/rest/admin/catalog/products/update-products). Absolute adjustments have lower complexity than [relative adjustments](/developer/api-reference/rest/admin/management/inventory/adjustments/post-relative-adjustment), which synchronize with orders.

     **Limits**
     * For maximum inventory levels, see [Inventory adjustments](/developer/docs/admin/catalog-and-inventory/inventory-adjustments#inventory-adjustments). 
     * Limit of 2000 items for payload length, see [Optimizing performance](/developer/docs/admin/catalog-and-inventory/inventory-adjustments#optimizing-performance) for more information.

     */
    putAbsoluteAdjustment(
        requestBody: InventoryV3ApiSpecs.PutAbsoluteAdjustmentData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<InventoryV3ApiSpecs.PutAbsoluteAdjustmentResponses[200]>>,RequestErrorResponse<422, Required<InventoryV3ApiSpecs.PutAbsoluteAdjustmentErrors[422]>>>({
            path: 'v3/inventory/adjustments/absolute',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Relative Adjustment
     *
     * Add or subtract inventory for an inventory item at a location. Use this endpoint only when you do not know absolute quantities. For example, making order-related inventory changes through a third-party may require relative adjustments. Otherwise, use the [Absolute adjustment](/developer/api-reference/rest/admin/management/inventory/adjustments/put-absolute-adjustment) endpoint for updating inventory.

     **Limits**
     * For maximum inventory levels, see [Inventory adjustments](/developer/docs/admin/catalog-and-inventory/inventory-adjustments#inventory-adjustments). 
     * Limit of 2000 items for payload length, see [Optimizing performance](/developer/docs/admin/catalog-and-inventory/inventory-adjustments#optimizing-performance) for more information.

     */
    postRelativeAdjustment(
        requestBody: InventoryV3ApiSpecs.PostRelativeAdjustmentData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<InventoryV3ApiSpecs.PostRelativeAdjustmentResponses[200]>>,RequestErrorResponse<422, Required<InventoryV3ApiSpecs.PostRelativeAdjustmentErrors[422]>>>({
            path: 'v3/inventory/adjustments/relative',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * List Inventory at Locations
     *
     * Return a list of inventory and inventory settings for all items in all locations.

     **Limits**
     * Limit of 1000 items for payload length.

     */
    getInventoryItems(
        query?: InventoryV3ApiSpecs.GetInventoryItemsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<InventoryV3ApiSpecs.GetInventoryItemsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/inventory/items',
            query,
        });
    }

    /**
     * Get Inventory at Location
     *
     * Return a list of inventory and inventory settings for all items in a location.

     **Limits**
     * Limit of 1000 items for payload length.

     */
    getLocationInventoryItems(
        locationId: InventoryV3ApiSpecs.GetLocationInventoryItemsData['path']['location_id'],
        query?: InventoryV3ApiSpecs.GetLocationInventoryItemsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<InventoryV3ApiSpecs.GetLocationInventoryItemsResponses[200]>>,RequestErrorResponse<404, Required<InventoryV3ApiSpecs.GetLocationInventoryItemsErrors[404]>>>({
            path: `v3/inventory/locations/${locationId}/items`,
            query,
        });
    }

    /**
     * Update Inventory Settings for Location
     *
     * 
     Update inventory settings for items at a location.

     **Limits**
     * Limit of 2000 items for payload length.

     */
    putLocationInventoryItems(
        locationId: InventoryV3ApiSpecs.PutLocationInventoryItemsData['path']['location_id'],
        requestBody: InventoryV3ApiSpecs.PutLocationInventoryItemsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<InventoryV3ApiSpecs.PutLocationInventoryItemsResponses[200]>>,RequestErrorResponse<422, Required<InventoryV3ApiSpecs.PutLocationInventoryItemsErrors[422]>>>({
            path: `v3/inventory/locations/${locationId}/items`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
