import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as SubscribersV3ApiSpecs from '../generated/subscribers-v3';
export * as SubscribersV3ApiSpecs from '../generated/subscribers-v3';

export class SubscribersV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * List Subscribers
     *
     * Returns a list of *Subscribers*. Optional filter parameters can be passed in.
     */
    getSubscribers(
        query?: SubscribersV3ApiSpecs.GetSubscribersData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SubscribersV3ApiSpecs.GetSubscribersResponses[200]>>,RequestErrorResponse<422, Required<SubscribersV3ApiSpecs.GetSubscribersErrors[422]>>>({
            path: 'v3/customers/subscribers',
            query,
        });
    }

    /**
     * Create Subscriber
     *
     * Creates a *Subscriber*.

     **Required Fields**
     * email

     **Read Only Fields**
     * id
     */
    createSubscriber(
        requestBody: SubscribersV3ApiSpecs.CreateSubscriberData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<SubscribersV3ApiSpecs.CreateSubscriberResponses[200]>>,(RequestErrorResponse<409, Required<SubscribersV3ApiSpecs.CreateSubscriberErrors[409]>> | RequestErrorResponse<422, Required<SubscribersV3ApiSpecs.CreateSubscriberErrors[422]>>)>({
            path: 'v3/customers/subscribers',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Subscribers
     *
     * By default, it deletes all subscribers. Use a filter to avoid deleting all subscribers in a store.
     */
    deleteSubscribers(
        query?: SubscribersV3ApiSpecs.DeleteSubscribersData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<SubscribersV3ApiSpecs.DeleteSubscribersResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/customers/subscribers',
            query,
        });
    }

    /**
     * Get Subscriber
     *
     * Returns a *Subscriber*.
     */
    getSubscriber(
        subscriberId: SubscribersV3ApiSpecs.GetSubscriberData['path']['subscriber_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SubscribersV3ApiSpecs.GetSubscriberResponses[200]>>,RequestErrorResponse<404, Required<SubscribersV3ApiSpecs.GetSubscriberErrors[404]>>>({
            path: `v3/customers/subscribers/${subscriberId}`,
        });
    }

    /**
     * Update Subscriber
     *
     * Updates a *Subscriber*.

     **Read Only Fields**
     * id
     */
    updateSubscriber(
        subscriberId: SubscribersV3ApiSpecs.UpdateSubscriberData['path']['subscriber_id'],
        requestBody: SubscribersV3ApiSpecs.UpdateSubscriberData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<SubscribersV3ApiSpecs.UpdateSubscriberResponses[200]>>,(RequestErrorResponse<404, Required<SubscribersV3ApiSpecs.UpdateSubscriberErrors[404]>> | RequestErrorResponse<409, Required<SubscribersV3ApiSpecs.UpdateSubscriberErrors[409]>> | RequestErrorResponse<422, Required<SubscribersV3ApiSpecs.UpdateSubscriberErrors[422]>>)>({
            path: `v3/customers/subscribers/${subscriberId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Subscriber
     *
     * Deletes a *Subscriber*.
     */
    deleteSubscriber(
        subscriberId: SubscribersV3ApiSpecs.DeleteSubscriberData['path']['subscriber_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<SubscribersV3ApiSpecs.DeleteSubscriberResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/customers/subscribers/${subscriberId}`,
        });
    }
}
