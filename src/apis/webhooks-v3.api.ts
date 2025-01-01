import RequestService from '../helpers/request/request-service';
import * as WebhooksV3ApiSpecs from '../generated/webhooks-v3';

export default class WebhooksV3Api {
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
    getWebhooks(
        query?: WebhooksV3ApiSpecs.GetWebhooksData['query'],
    ) {
        return this.request.get<any, WebhooksV3ApiSpecs.GetWebhooksError>({
            path: 'v3/hooks',
            query,
        });
    }

    /**
     * Create a Webhook
     *
     * Creates a webhook. Only one webhook at a time can be created. Custom headers can be added. Destination URL must be served on port 443 (custom ports are not currently supported).
     */
    createWebhooks(
        requestBody: WebhooksV3ApiSpecs.CreateWebhooksData['body'],
    ) {
        return this.request.post<WebhooksV3ApiSpecs.CreateWebhooksResponse, WebhooksV3ApiSpecs.CreateWebhooksError>({
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
        return this.request.get<any, WebhooksV3ApiSpecs.GetWebhookError>({
            path: `v3/hooks/${webhookId}`,
        });
    }

    /**
     * Update a Webhook
     *
     * Updates a webhook. You can add custom headers. At least one field is required to perform an update.
     */
    updateWebhook(
        webhookId: WebhooksV3ApiSpecs.UpdateWebhookData['path']['webhook_id'],
        requestBody: WebhooksV3ApiSpecs.UpdateWebhookData['body'],
    ) {
        return this.request.put<any, any>({
            path: `v3/hooks/${webhookId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Webhook
     *
     * Deletes a webhook. Only one webhook at a time can be deleted. When a webhook is deleted, it is returned in the response as a 200 OK.
     */
    deleteWebhook(
        webhookId: WebhooksV3ApiSpecs.DeleteWebhookData['path']['webhook_id'],
    ) {
        return this.request.delete<any, any>({
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
        return this.request.get<WebhooksV3ApiSpecs.GetHooksAdminResponse, WebhooksV3ApiSpecs.GetHooksAdminError>({
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
        return this.request.put<any, WebhooksV3ApiSpecs.UpdateHooksAdminError>({
            path: 'v3/hooks/admin',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
