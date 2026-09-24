import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as SubscribersV3ApiSpecs from '../generated/subscribers-v3';
export * as SubscribersV3ApiSpecs from '../generated/subscribers-v3';
export declare class SubscribersV3Api {
    private readonly request;
    constructor(request: RequestService);
    getSubscribers(query?: SubscribersV3ApiSpecs.GetSubscribersData['query']): Promise<RequestSuccessResponse<200, Required<SubscribersV3ApiSpecs.SubscribersGetSubscribersResponse200>> | RequestErrorResponse<422, Required<SubscribersV3ApiSpecs.GetSubscribersRequestUnprocessableEntityError>>>;
    createSubscriber(requestBody: SubscribersV3ApiSpecs.CreateSubscriberData['body']): Promise<RequestSuccessResponse<200, Required<SubscribersV3ApiSpecs.SubscribersCreateSubscriberResponse200>> | RequestErrorResponse<409, Required<SubscribersV3ApiSpecs.CreateSubscriberRequestConflictError>> | RequestErrorResponse<422, Required<SubscribersV3ApiSpecs.CreateSubscriberRequestUnprocessableEntityError>>>;
    deleteSubscribers(query?: SubscribersV3ApiSpecs.DeleteSubscribersData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getSubscriber(subscriberId: SubscribersV3ApiSpecs.GetSubscriberData['path']['subscriber_id']): Promise<RequestSuccessResponse<200, Required<SubscribersV3ApiSpecs.SubscribersGetSubscriberResponse200>> | RequestErrorResponse<404, Required<SubscribersV3ApiSpecs.GetSubscriberRequestNotFoundError>>>;
    updateSubscriber(subscriberId: SubscribersV3ApiSpecs.UpdateSubscriberData['path']['subscriber_id'], requestBody: SubscribersV3ApiSpecs.UpdateSubscriberData['body']): Promise<RequestSuccessResponse<200, Required<SubscribersV3ApiSpecs.SubscribersUpdateSubscriberResponse200>> | RequestErrorResponse<404, Required<SubscribersV3ApiSpecs.UpdateSubscriberRequestNotFoundError>> | RequestErrorResponse<409, Required<SubscribersV3ApiSpecs.UpdateSubscriberRequestConflictError>> | RequestErrorResponse<422, Required<SubscribersV3ApiSpecs.UpdateSubscriberRequestUnprocessableEntityError>>>;
    deleteSubscriber(subscriberId: SubscribersV3ApiSpecs.DeleteSubscriberData['path']['subscriber_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
}
