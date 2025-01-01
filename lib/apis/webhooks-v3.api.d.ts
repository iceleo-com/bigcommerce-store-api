import RequestService from '../helpers/request/request-service';
import * as WebhooksV3ApiSpecs from '../generated/webhooks-v3';
export default class WebhooksV3Api {
    private readonly request;
    constructor(request: RequestService);
    getWebhooks(query?: WebhooksV3ApiSpecs.GetWebhooksData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WebhooksV3ApiSpecs.error_Full>>;
    createWebhooks(requestBody: WebhooksV3ApiSpecs.CreateWebhooksData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<WebhooksV3ApiSpecs.CreateWebhooksResponse, WebhooksV3ApiSpecs.CreateWebhooksError>>;
    getWebhook(webhookId: WebhooksV3ApiSpecs.GetWebhookData['path']['webhook_id']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WebhooksV3ApiSpecs.error_Full>>;
    updateWebhook(webhookId: WebhooksV3ApiSpecs.UpdateWebhookData['path']['webhook_id'], requestBody: WebhooksV3ApiSpecs.UpdateWebhookData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    deleteWebhook(webhookId: WebhooksV3ApiSpecs.DeleteWebhookData['path']['webhook_id']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getHooksAdmin(query?: WebhooksV3ApiSpecs.GetHooksAdminData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<WebhooksV3ApiSpecs.GetHooksAdminResponse, WebhooksV3ApiSpecs.error_Full>>;
    updateHooksAdmin(requestBody: WebhooksV3ApiSpecs.UpdateHooksAdminData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, WebhooksV3ApiSpecs.UpdateHooksAdminError>>;
}
