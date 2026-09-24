import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as SubscribersV3ApiSpecs from '../generated/subscribers-v3';
export * as SubscribersV3ApiSpecs from '../generated/subscribers-v3';
export declare class SubscribersV3Api {
    private readonly request;
    constructor(request: RequestService);
    getSubscribers(query?: SubscribersV3ApiSpecs.GetSubscribersData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<SubscribersV3ApiSpecs.SubscriberFull>;
        meta?: SubscribersV3ApiSpecs.CollectionMeta;
    }>>>;
    createSubscriber(requestBody: SubscribersV3ApiSpecs.CreateSubscriberData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: SubscribersV3ApiSpecs.SubscriberFull;
        meta?: SubscribersV3ApiSpecs.OpenMeta;
    }>> | RequestErrorResponse<409, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    deleteSubscribers(query?: SubscribersV3ApiSpecs.DeleteSubscribersData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getSubscriberById(subscriberId: SubscribersV3ApiSpecs.GetSubscriberByIdData['path']['subscriber_id']): Promise<RequestSuccessResponse<200, Required<{
        data?: SubscribersV3ApiSpecs.SubscriberFull;
        meta?: SubscribersV3ApiSpecs.OpenMeta;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getSubscriber(...args: Parameters<SubscribersV3Api['getSubscriberById']>): Promise<RequestSuccessResponse<200, Required<{
        data?: SubscribersV3ApiSpecs.SubscriberFull;
        meta?: SubscribersV3ApiSpecs.OpenMeta;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateSubscriber(subscriberId: SubscribersV3ApiSpecs.UpdateSubscriberData['path']['subscriber_id'], requestBody: SubscribersV3ApiSpecs.UpdateSubscriberData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: SubscribersV3ApiSpecs.SubscriberFull;
        meta?: SubscribersV3ApiSpecs.OpenMeta;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>> | RequestErrorResponse<409, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            additionalProperties?: string;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    deleteSubscriberById(subscriberId: SubscribersV3ApiSpecs.DeleteSubscriberByIdData['path']['subscriber_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteSubscriber(...args: Parameters<SubscribersV3Api['deleteSubscriberById']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
}
