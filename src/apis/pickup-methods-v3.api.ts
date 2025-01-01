import RequestService from '../helpers/request/request-service';
import * as PickupMethodsV3ApiSpecs from '../generated/pickup-methods-v3';

export default class PickupMethodsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Pickup Methods
     *
     * Retrieves a list of pickup methods.

     ## Examples

     You can filter this list to return pickup method objects specific to a list of requested pickup method IDs. This is achieved by appending the query string `?id:in=1,3,5` to the resource `/pickup/methods`.

     ```http
     GET /pickup/methods?id:in=1,3,5
     ```
     */
    getPickupMethods(
        query?: PickupMethodsV3ApiSpecs.GetPickupMethodsData['query'],
    ) {
        return this.request.get<PickupMethodsV3ApiSpecs.GetPickupMethodsResponse, any>({
            path: 'v3/pickup/methods',
            query,
        });
    }

    /**
     * Create Pickup Methods
     *
     * Creates one or many pickup methods.

     This is a batch operation that can create up to 100 pickup methods objects in one request.

     ## Limits
     * Limit of creating 100 pickup method objects per `POST` request.
     */
    postPickupMethods(
        requestBody: PickupMethodsV3ApiSpecs.PostPickupMethodsData['body'],
    ) {
        return this.request.post<PickupMethodsV3ApiSpecs.PostPickupMethodsResponse, any>({
            path: 'v3/pickup/methods',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Pickup Methods
     *
     * Update existing pickup methods.

     This batch operation can update 10 pickup method objects in one request.

     Only the `id` property of the pickup method object is required as part of the request. Pickup method properties that are not provided will maintain their existing values.

     ## Limits
     * Limit of updating 10 pickup method objects per `PUT` request.
     */
    putPickupMethods(
        requestBody: PickupMethodsV3ApiSpecs.PutPickupMethodsData['body'],
    ) {
        return this.request.put<PickupMethodsV3ApiSpecs.PutPickupMethodsResponse, any>({
            path: 'v3/pickup/methods',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Pickup Methods
     *
     * Delete existing pickup methods.
     */
    deletePickupMethods(
        query?: PickupMethodsV3ApiSpecs.DeletePickupMethodsData['query'],
    ) {
        return this.request.delete<any, any>({
            path: 'v3/pickup/methods',
            query,
        });
    }
}
