import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PickupV3ApiSpecs from '../generated/pickup-v3';
export * as PickupV3ApiSpecs from '../generated/pickup-v3';

export class PickupV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * List Pickups
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
        return this.request.get<RequestSuccessResponse<200, Required<PickupV3ApiSpecs.GetPickupResponses[200]>>,RequestErrorResponse<400, void>>({
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
        return this.request.post<RequestSuccessResponse<200, Required<PickupV3ApiSpecs.PostPickupResponses[200]>>,RequestErrorResponse<422, Required<PickupV3ApiSpecs.PostPickupErrors[422]>>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<PickupV3ApiSpecs.PutPickupResponses[200]>>,RequestErrorResponse<422, Required<PickupV3ApiSpecs.PutPickupErrors[422]>>>({
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
        return this.request.delete<RequestSuccessResponse<204, Required<PickupV3ApiSpecs.DeletePickupResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/orders/pickups',
            query,
        });
    }
}
