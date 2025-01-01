import RequestService from '../helpers/request/request-service';
import * as PickupV3ApiSpecs from '../generated/pickup-v3';

export default class PickupV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Pickups
     *
     * Retrieves a list of pickups.

     ## Examples

     You can filter the list to return pickup objects specific to a list of requested pickup or order IDs. 
     This is achieved by appending the query string `?order_id:in=100,103,202` or `pickup_id:in=1,4` to the 
     resource `/orders/pickups`.

     ```http
     GET /orders/pickups?order_id:in=100,300,500
     ```
     or
     ```http
     GET /orders/pickups?pickup_id:in=7,13,17
     ```
     */
    getPickup(
        query?: PickupV3ApiSpecs.GetPickupData['query'],
    ) {
        return this.request.get<PickupV3ApiSpecs.GetPickupResponse, any>({
            path: 'v3/orders/pickups',
            query,
        });
    }

    /**
     * Create Pickups
     *
     * Creates one or many pickups.

     This is a batch operation that can create up to 100 pickup objects in one request.

     ## Limits
     * Limit of creating 100 pickup objects per `POST` request.
     */
    postPickup(
        requestBody: PickupV3ApiSpecs.PostPickupData['body'],
    ) {
        return this.request.post<PickupV3ApiSpecs.PostPickupResponse, PickupV3ApiSpecs.PostPickupError>({
            path: 'v3/orders/pickups',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Pickups
     *
     * Update pickups by providing `pickup_id`, `collected_at`, and `ready_at` in the input.
     */
    putPickup(
        requestBody: PickupV3ApiSpecs.PutPickupData['body'],
    ) {
        return this.request.put<PickupV3ApiSpecs.PutPickupResponse, PickupV3ApiSpecs.PutPickupError>({
            path: 'v3/orders/pickups',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Pickups
     *
     * Delete pickups by providing a list of `pickup_id`s.

     ## Examples
     You can use the list of `pickup_ids` to delete the pickup items. This is achieved by appending the query string **?id:in=1,2,3** to the resource **\/pickup**.

     ```http
     DELETE /pickup?id:in=1,2,3
     ```
     */
    deletePickup(
        query?: PickupV3ApiSpecs.DeletePickupData['query'],
    ) {
        return this.request.delete<any, any>({
            path: 'v3/orders/pickups',
            query,
        });
    }
}
