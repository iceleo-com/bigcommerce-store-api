import RequestService from '../helpers/request/request-service';
import * as SubscribersV3ApiSpecs from '../generated/subscribers-v3';
export default class SubscribersV3Api {
    private readonly request;
    constructor(request: RequestService);
    getSubscribers(query?: SubscribersV3ApiSpecs.GetSubscribersData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<SubscribersV3ApiSpecs.GetSubscribersResponse, any>>;
    createSubscriber(requestBody: SubscribersV3ApiSpecs.CreateSubscriberData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<SubscribersV3ApiSpecs.CreateSubscriberResponse, SubscribersV3ApiSpecs.CreateSubscriberError>>;
    deleteSubscribers(query?: SubscribersV3ApiSpecs.DeleteSubscribersData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getSubscriber(): Promise<import("../helpers/request/request-service.type").RequestResponse<SubscribersV3ApiSpecs.GetSubscriberResponse, SubscribersV3ApiSpecs.GetSubscriberError>>;
    updateSubscriber(requestBody: SubscribersV3ApiSpecs.UpdateSubscriberData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<SubscribersV3ApiSpecs.UpdateSubscriberResponse, SubscribersV3ApiSpecs.UpdateSubscriberError>>;
    deleteSubscriber(): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
}
