import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as WebhooksV3ApiSpecs from '../generated/webhooks-v3';
export * as WebhooksV3ApiSpecs from '../generated/webhooks-v3';
export declare class WebhooksV3Api {
    private readonly request;
    constructor(request: RequestService);
    getWebhooks(query?: WebhooksV3ApiSpecs.GetWebhooksData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<{
            id?: number;
            client_id?: string;
            store_hash?: string;
            scope?: string;
            destination?: string;
            headers?: {
                [key: string]: string;
            } | null;
            is_active?: boolean;
            created_at?: number;
            updated_at?: number;
        }>;
        meta?: {
            pagination?: WebhooksV3ApiSpecs.Pagination;
        };
    }>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>>>;
    createWebhooks(requestBody: WebhooksV3ApiSpecs.CreateWebhooksData['body']): Promise<RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestSuccessResponse<200, Required<{
        data?: WebhooksV3ApiSpecs.WebhookFull;
        meta?: unknown;
    }>> | RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestErrorResponse<422, Required<WebhooksV3ApiSpecs.ErrorDetailedFull>>>;
    getWebhook(webhookId: WebhooksV3ApiSpecs.GetWebhookData['path']['webhook_id']): Promise<RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            client_id?: string;
            store_hash?: string;
            scope?: string;
            destination?: string;
            headers?: {
                [key: string]: string;
            } | null;
            is_active?: boolean;
            created_at?: number;
            updated_at?: number;
        };
        meta?: unknown;
    }>> | RequestErrorResponse<404, Required<WebhooksV3ApiSpecs.ErrorFull>>>;
    updateWebhook(webhookId: WebhooksV3ApiSpecs.UpdateWebhookData['path']['webhook_id'], requestBody: WebhooksV3ApiSpecs.UpdateWebhookData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            client_id?: string;
            store_hash?: string;
            scope?: string;
            destination?: string;
            headers?: {
                [key: string]: string;
            } | null;
            is_active?: boolean;
            created_at?: number;
            updated_at?: number;
        };
        meta?: unknown;
    }>>>;
    deleteWebhook(webhookId: WebhooksV3ApiSpecs.DeleteWebhookData['path']['webhook_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            client_id?: string;
            store_hash?: string;
            scope?: string;
            destination?: string;
            headers?: {
                [key: string]: string;
            } | null;
            is_active?: boolean;
            created_at?: number;
            updated_at?: number;
        };
        meta?: unknown;
    }>>>;
    getHooksAdmin(query?: WebhooksV3ApiSpecs.GetHooksAdminData['query']): Promise<RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestSuccessResponse<200, Required<{
        data?: {
            emails?: Array<string>;
            hooks_list?: Array<{
                id?: number;
                client_id?: string;
                store_hash?: string;
                scope?: string;
                destination?: string;
                headers?: {
                    [key: string]: string;
                } | null;
                is_active?: boolean;
                created_at?: number;
                updated_at?: number;
                status?: "inactive" | "active" | "deactivated";
            }>;
            blocked_domains?: Array<{
                destination?: string;
                time_left?: number;
                reasons?: Array<{
                    failure_description?: string;
                    count?: number;
                    timestamp?: number;
                }>;
            }>;
        };
        meta?: {
            pagination?: WebhooksV3ApiSpecs.Pagination;
        };
    }>>>;
    updateHooksAdmin(requestBody: WebhooksV3ApiSpecs.UpdateHooksAdminData['body']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestErrorResponse<422, Required<WebhooksV3ApiSpecs.ErrorDetailedFull>>>;
}
