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
     * Get Subscribers
     *
     * Returns a list of *Subscribers*. Optional filter parameters can be passed in.
     */
    getSubscribers(
        query?: SubscribersV3ApiSpecs.GetSubscribersData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SubscribersV3ApiSpecs.GetSubscribersResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/customers/subscribers',
            query,
        });
    }

    /**
     * Create a Subscriber
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
     * By default, it deletes all *Subscribers*. A filter should be added to avoid deleting all subscribers in a store.
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
     * Get a Subscriber
     *
     * Returns a *Subscriber*.
     */
    getSubscriberById(
        subscriberId: SubscribersV3ApiSpecs.GetSubscriberByIdData['path']['subscriber_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SubscribersV3ApiSpecs.GetSubscriberByIdResponses[200]>>,RequestErrorResponse<404, Required<SubscribersV3ApiSpecs.GetSubscriberByIdErrors[404]>>>({
            path: `v3/customers/subscribers/${subscriberId}`,
        });
    }

    /**
     * @deprecated Use `getSubscriberById` instead.
     */
    getSubscriber(...args: Parameters<SubscribersV3Api['getSubscriberById']>) {
        return this.getSubscriberById(...args);
    }

    /**
     * Update a Subscriber
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
     * Delete a Subscriber
     *
     * Deletes a *Subscriber*.
     */
    deleteSubscriberById(
        subscriberId: SubscribersV3ApiSpecs.DeleteSubscriberByIdData['path']['subscriber_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<SubscribersV3ApiSpecs.DeleteSubscriberByIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/customers/subscribers/${subscriberId}`,
        });
    }

    /**
     * @deprecated Use `deleteSubscriberById` instead.
     */
    deleteSubscriber(...args: Parameters<SubscribersV3Api['deleteSubscriberById']>) {
        return this.deleteSubscriberById(...args);
    }
}
