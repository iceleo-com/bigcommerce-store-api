import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as WebhooksV3ApiSpecs from '../generated/webhooks-v3';
export * as WebhooksV3ApiSpecs from '../generated/webhooks-v3';

export class WebhooksV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * List Webhooks
     *
     * Returns a list of all webhooks on a store associated to the `client_id` used to authenticate the request.

     *Note: BigCommerce determines the `client_id` from the `access_token`.*
     */
    getWebhooks(
        query?: WebhooksV3ApiSpecs.GetWebhooksData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.GetWebhooksResponses[200]>>,RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.GetWebhooksErrors[401]>>>({
            path: 'v3/hooks',
            query,
        });
    }

    /**
     * Create Webhook
     *
     * Creates a webhook. Only one webhook at a time can be created. Custom headers can be added. Destination URL must be served on port 443 (custom ports are not currently supported).
     */
    createWebhooks(
        requestBody: WebhooksV3ApiSpecs.CreateWebhooksData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.CreateWebhooksResponses[200]>>,(RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.CreateWebhooksErrors[400]>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.CreateWebhooksErrors[401]>> | RequestErrorResponse<422, Required<WebhooksV3ApiSpecs.CreateWebhooksErrors[422]>>)>({
            path: 'v3/hooks',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Webhook
     *
     * Return a webhook by ID.
     */
    getWebhook(
        webhookId: WebhooksV3ApiSpecs.GetWebhookData['path']['webhook_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.GetWebhookResponses[200]>>,(RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.GetWebhookErrors[401]>> | RequestErrorResponse<404, Required<WebhooksV3ApiSpecs.GetWebhookErrors[404]>>)>({
            path: `v3/hooks/${webhookId}`,
        });
    }

    /**
     * Update Webhook
     *
     * Updates a webhook. You can add custom headers. At least one field is required to perform an update.
     */
    updateWebhook(
        webhookId: WebhooksV3ApiSpecs.UpdateWebhookData['path']['webhook_id'],
        requestBody: WebhooksV3ApiSpecs.UpdateWebhookData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.UpdateWebhookResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/hooks/${webhookId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Webhook
     *
     * Deletes a webhook. Only one webhook at a time can be deleted. When a webhook is deleted, it is returned in the response as a 200 OK.
     */
    deleteWebhook(
        webhookId: WebhooksV3ApiSpecs.DeleteWebhookData['path']['webhook_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.DeleteWebhookResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/hooks/${webhookId}`,
        });
    }

    /**
     * Get Admin Info
     *
     * List all notification emails, webhooks, and denylisted domains associated with the API account.
     */
    getHooksAdmin(
        query?: WebhooksV3ApiSpecs.GetHooksAdminData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.GetHooksAdminResponses[200]>>,RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.GetHooksAdminErrors[401]>>>({
            path: 'v3/hooks/admin',
            query,
        });
    }

    /**
     * Upsert Email Notifications
     *
     * Update email addresses that are sent notification emails when any domain associated with the API account is denylisted or when a webhook is deactivated. Supports `upsert` functionality in the case that no email address exists yet.

     */
    updateHooksAdmin(
        requestBody: WebhooksV3ApiSpecs.UpdateHooksAdminData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<204, Required<WebhooksV3ApiSpecs.UpdateHooksAdminResponses[204]>>,(RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.UpdateHooksAdminErrors[400]>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.UpdateHooksAdminErrors[401]>> | RequestErrorResponse<422, Required<WebhooksV3ApiSpecs.UpdateHooksAdminErrors[422]>>)>({
            path: 'v3/hooks/admin',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
