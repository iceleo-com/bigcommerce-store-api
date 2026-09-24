import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as WebhooksV3ApiSpecs from '../generated/webhooks-v3';
export * as WebhooksV3ApiSpecs from '../generated/webhooks-v3';
export declare class WebhooksV3Api {
    private readonly request;
    constructor(request: RequestService);
    getWebhooks(query?: WebhooksV3ApiSpecs.GetWebhooksData['query']): Promise<RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.ManageWebhooksGetWebhooksResponse200>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>>>;
    createWebhooks(requestBody: WebhooksV3ApiSpecs.CreateWebhooksData['body']): Promise<RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.ManageWebhooksCreateWebhooksResponse200>> | RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestErrorResponse<422, Required<WebhooksV3ApiSpecs.ErrorDetailedFull>>>;
    getWebhook(webhookId: WebhooksV3ApiSpecs.GetWebhookData['path']['webhook_id']): Promise<RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.ManageWebhooksGetWebhookResponse200>> | RequestErrorResponse<404, Required<WebhooksV3ApiSpecs.ErrorFull>>>;
    updateWebhook(webhookId: WebhooksV3ApiSpecs.UpdateWebhookData['path']['webhook_id'], requestBody: WebhooksV3ApiSpecs.UpdateWebhookData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.ManageWebhooksUpdateWebhookResponse200>>>;
    deleteWebhook(webhookId: WebhooksV3ApiSpecs.DeleteWebhookData['path']['webhook_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.ManageWebhooksDeleteWebhookResponse200>>>;
    getHooksAdmin(query?: WebhooksV3ApiSpecs.GetHooksAdminData['query']): Promise<RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.ManageWebhooksGetHooksAdminResponse200>>>;
    updateHooksAdmin(requestBody: WebhooksV3ApiSpecs.UpdateHooksAdminData['body']): Promise<RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestErrorResponse<422, Required<WebhooksV3ApiSpecs.ErrorDetailedFull>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
}
