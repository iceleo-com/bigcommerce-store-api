import RequestService from '../helpers/request/request-service';
import * as InventoryV3ApiSpecs from '../generated/inventory-v3';

export default class InventoryV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Absolute Adjustment
     *
     * Override the existing inventory levels for an inventory item at a location. For maximum inventory levels, see [Inventory adjustments](/docs/store-operations/catalog/inventory-adjustments#inventory-adjustments). For payload limits, see [Optimizing performance](/docs/store-operations/catalog/inventory-adjustments#optimizing-performance).

     Use absolute adjustments as the default method for updating inventory. This endpoint batches requests, making them more resource friendly than the [Catalog API](/docs/rest-catalog/products#update-products-batch). Absolute adjustments have lower complexity than [relative adjustments](/docs/rest-management/inventory/adjustments#relative-adjustment), which synchronize with orders.

     */
    putAbsoluteAdjustment(
        requestBody: InventoryV3ApiSpecs.PutAbsoluteAdjustmentData['body'],
    ) {
        return this.request.put<InventoryV3ApiSpecs.PutAbsoluteAdjustmentResponse, InventoryV3ApiSpecs.PutAbsoluteAdjustmentError>({
            path: 'v3/inventory/adjustments/absolute',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Relative Adjustment
     *
     * Add or subtract inventory for an inventory item at a location. For maximum inventory levels, see [Inventory adjustments](/docs/store-operations/catalog/inventory-adjustments#inventory-adjustments). For payload limits, see [Optimizing performance](/docs/store-operations/catalog/inventory-adjustments#optimizing-performance).

     Use this endpoint only when you do not know absolute quantities. For example, making order-related inventory changes through a third-party may require relative adjustments. Otherwise, use the [Absolute adjustment](/docs/rest-management/inventory/adjustments#absolute-adjustment) endpoint for updating inventory.

     */
    postRelativeAdjustment(
        requestBody: InventoryV3ApiSpecs.PostRelativeAdjustmentData['body'],
    ) {
        return this.request.post<InventoryV3ApiSpecs.PostRelativeAdjustmentResponse, InventoryV3ApiSpecs.PostRelativeAdjustmentError>({
            path: 'v3/inventory/adjustments/relative',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Inventory at Locations
     *
     * Return a list of inventory and inventory settings for all items in all locations.

     */
    getInventoryItems(
        query?: InventoryV3ApiSpecs.GetInventoryItemsData['query'],
    ) {
        return this.request.get<InventoryV3ApiSpecs.GetInventoryItemsResponse, any>({
            path: 'v3/inventory/items',
            query,
        });
    }

    /**
     * Get Inventory at a Location
     *
     * Return a list of inventory and inventory settings for all items in a location.
     */
    getLocationInventoryItems(
        query?: InventoryV3ApiSpecs.GetLocationInventoryItemsData['query'],
    ) {
        return this.request.get<InventoryV3ApiSpecs.GetLocationInventoryItemsResponse, InventoryV3ApiSpecs.GetLocationInventoryItemsError>({
            path: 'v3/inventory/locations/{location_id}/items',
            query,
        });
    }

    /**
     * Update Inventory Settings for a Location
     *
     * Update inventory settings for items at a location.
     */
    putLocationInventoryItems(
        requestBody: InventoryV3ApiSpecs.PutLocationInventoryItemsData['body'],
    ) {
        return this.request.put<InventoryV3ApiSpecs.PutLocationInventoryItemsResponse, InventoryV3ApiSpecs.PutLocationInventoryItemsError>({
            path: 'v3/inventory/locations/{location_id}/items',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
