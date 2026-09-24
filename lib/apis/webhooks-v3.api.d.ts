import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as WebhooksV3ApiSpecs from '../generated/webhooks-v3';
export * as WebhooksV3ApiSpecs from '../generated/webhooks-v3';
export declare class WebhooksV3Api {
    private readonly request;
    constructor(request: RequestService);
    getAllWebhooks(query?: WebhooksV3ApiSpecs.GetAllWebhooksData['query']): Promise<RequestSuccessResponse<200, Required<{
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
    }>> | RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>>>;
    getWebhooks(...args: Parameters<WebhooksV3Api['getAllWebhooks']>): Promise<RequestSuccessResponse<200, Required<{
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
    }>> | RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>>>;
    createWebhooks(requestBody: WebhooksV3ApiSpecs.CreateWebhooksData['body']): Promise<RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestSuccessResponse<200, Required<{
        data?: WebhooksV3ApiSpecs.WebhookFull;
        meta?: {
            pagination?: WebhooksV3ApiSpecs.Pagination;
        };
    }>> | RequestErrorResponse<422, Required<WebhooksV3ApiSpecs.ErrorDetailedFull>>>;
    getWebhook(webhookId: WebhooksV3ApiSpecs.GetWebhookData['path']['webhook_id']): Promise<RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestSuccessResponse<200, Required<{
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
        meta?: {
            pagination?: WebhooksV3ApiSpecs.Pagination;
        };
    }>> | RequestErrorResponse<404, Required<WebhooksV3ApiSpecs.ErrorFull>>>;
    updateAwebhook(webhookId: WebhooksV3ApiSpecs.UpdateAWebhookData['path']['webhook_id'], requestBody: WebhooksV3ApiSpecs.UpdateAWebhookData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
        meta?: {
            pagination?: WebhooksV3ApiSpecs.Pagination;
        };
    }>>>;
    updateWebhook(...args: Parameters<WebhooksV3Api['updateAwebhook']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
        meta?: {
            pagination?: WebhooksV3ApiSpecs.Pagination;
        };
    }>>>;
    deleteAwebhook(webhookId: WebhooksV3ApiSpecs.DeleteAWebhookData['path']['webhook_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
        meta?: {
            pagination?: WebhooksV3ApiSpecs.Pagination;
        };
    }>>>;
    deleteWebhook(...args: Parameters<WebhooksV3Api['deleteAwebhook']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
        meta?: {
            pagination?: WebhooksV3ApiSpecs.Pagination;
        };
    }>>>;
    getHooksAdmin(query?: WebhooksV3ApiSpecs.GetHooksAdminData['query']): Promise<RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestSuccessResponse<200, Required<{
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
    putHooksAdmin(requestBody: WebhooksV3ApiSpecs.PutHooksAdminData['body']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestErrorResponse<422, Required<WebhooksV3ApiSpecs.ErrorDetailedFull>>>;
    updateHooksAdmin(...args: Parameters<WebhooksV3Api['putHooksAdmin']>): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestErrorResponse<422, Required<WebhooksV3ApiSpecs.ErrorDetailedFull>>>;
    getWebhookEvents(query?: WebhooksV3ApiSpecs.GetWebhookEventsData['query']): Promise<RequestErrorResponse<400, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestErrorResponse<401, Required<WebhooksV3ApiSpecs.ErrorFull>> | RequestSuccessResponse<200, Required<{
        data?: Array<WebhooksV3ApiSpecs.HistoryEvent>;
        meta?: {
            pagination?: WebhooksV3ApiSpecs.Pagination;
        };
    }>>>;
}
