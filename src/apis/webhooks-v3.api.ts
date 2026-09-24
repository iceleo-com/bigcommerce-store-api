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
     * Get Webhooks
     *
     * Returns a list of all webhooks on a store associated to the `client_id` used to authenticate the request.

     *Note: BigCommerce determines the `client_id` from the `access_token`.*
     */
    getAllWebhooks(
        query?: WebhooksV3ApiSpecs.GetAllWebhooksData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.GetAllWebhooksResponses[200]>>,(RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.GetAllWebhooksErrors[400]>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.GetAllWebhooksErrors[401]>>)>({
            path: 'v3/hooks',
            query,
        });
    }

    /**
     * @deprecated Use `getAllWebhooks` instead.
     */
    getWebhooks(...args: Parameters<WebhooksV3Api['getAllWebhooks']>) {
        return this.getAllWebhooks(...args);
    }

    /**
     * Create a Webhook
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
     * Get a Webhook
     *
     * Return a webhook by ID.
     */
    getWebhook(
        webhookId: WebhooksV3ApiSpecs.GetWebhookData['path']['webhook_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.GetWebhookResponses[200]>>,(RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.GetWebhookErrors[400]>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.GetWebhookErrors[401]>> | RequestErrorResponse<404, Required<WebhooksV3ApiSpecs.GetWebhookErrors[404]>>)>({
            path: `v3/hooks/${webhookId}`,
        });
    }

    /**
     * Update a Webhook
     *
     * Updates a webhook. Custom headers can be added.
     */
    updateAwebhook(
        webhookId: WebhooksV3ApiSpecs.UpdateAWebhookData['path']['webhook_id'],
        requestBody: WebhooksV3ApiSpecs.UpdateAWebhookData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.UpdateAWebhookResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/hooks/${webhookId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateAwebhook` instead.
     */
    updateWebhook(...args: Parameters<WebhooksV3Api['updateAwebhook']>) {
        return this.updateAwebhook(...args);
    }

    /**
     * Delete a Webhook
     *
     * Deletes a webhook. Only one webhook at a time can be deleted. When a webhook is deleted, it is returned in the response as a 200 OK.
     */
    deleteAwebhook(
        webhookId: WebhooksV3ApiSpecs.DeleteAWebhookData['path']['webhook_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.DeleteAWebhookResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/hooks/${webhookId}`,
        });
    }

    /**
     * @deprecated Use `deleteAwebhook` instead.
     */
    deleteWebhook(...args: Parameters<WebhooksV3Api['deleteAwebhook']>) {
        return this.deleteAwebhook(...args);
    }

    /**
     * Get Admin Info
     *
     * List all notification emails, webhooks, and denylisted domains associated with the API account.
     */
    getHooksAdmin(
        query?: WebhooksV3ApiSpecs.GetHooksAdminData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.GetHooksAdminResponses[200]>>,(RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.GetHooksAdminErrors[400]>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.GetHooksAdminErrors[401]>>)>({
            path: 'v3/hooks/admin',
            query,
        });
    }

    /**
     * Upsert Email Notifications
     *
     * Update email addresses that are sent notification emails when any domain associated with the API account is denylisted or when a webhook is deactivated. Supports `upsert` functionality in the case that no email address exists yet.

     */
    putHooksAdmin(
        requestBody: WebhooksV3ApiSpecs.PutHooksAdminData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<204, Required<WebhooksV3ApiSpecs.PutHooksAdminResponses[204]>>,(RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.PutHooksAdminErrors[400]>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.PutHooksAdminErrors[401]>> | RequestErrorResponse<422, Required<WebhooksV3ApiSpecs.PutHooksAdminErrors[422]>>)>({
            path: 'v3/hooks/admin',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `putHooksAdmin` instead.
     */
    updateHooksAdmin(...args: Parameters<WebhooksV3Api['putHooksAdmin']>) {
        return this.putHooksAdmin(...args);
    }

    /**
     * Get Events
     *
     * Get a list of events that were sent but not successfully received. Events are stored for not less than one week.

     */
    getWebhookEvents(
        query?: WebhooksV3ApiSpecs.GetWebhookEventsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<WebhooksV3ApiSpecs.GetWebhookEventsResponses[200]>>,(RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.GetWebhookEventsErrors[400]>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.GetWebhookEventsErrors[401]>>)>({
            path: 'v3/hooks/events',
            query,
        });
    }
}
