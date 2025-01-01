import RequestService from '../helpers/request/request-service';
import * as SubscribersV3ApiSpecs from '../generated/subscribers-v3';

export default class SubscribersV3Api {
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
        return this.request.get<SubscribersV3ApiSpecs.GetSubscribersResponse, any>({
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
        return this.request.post<SubscribersV3ApiSpecs.CreateSubscriberResponse, SubscribersV3ApiSpecs.CreateSubscriberError>({
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
        return this.request.delete<any, any>({
            path: 'v3/customers/subscribers',
            query,
        });
    }

    /**
     * Get a Subscriber
     *
     * Returns a *Subscriber*.
     */
    getSubscriber(
    ) {
        return this.request.get<SubscribersV3ApiSpecs.GetSubscriberResponse, SubscribersV3ApiSpecs.GetSubscriberError>({
            path: 'v3/customers/subscribers/{subscriber_id}',
        });
    }

    /**
     * Update a Subscriber
     *
     * Updates a *Subscriber*.

     **Read Only Fields**
     * id
     */
    updateSubscriber(
        requestBody: SubscribersV3ApiSpecs.UpdateSubscriberData['body'],
    ) {
        return this.request.put<SubscribersV3ApiSpecs.UpdateSubscriberResponse, SubscribersV3ApiSpecs.UpdateSubscriberError>({
            path: 'v3/customers/subscribers/{subscriber_id}',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Subscriber
     *
     * Deletes a *Subscriber*.
     */
    deleteSubscriber(
    ) {
        return this.request.delete<any, any>({
            path: 'v3/customers/subscribers/{subscriber_id}',
        });
    }
}
