export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type HooksGetResponsesContentApplicationJsonSchemaDataItemsHeaders = {
    [key: string]: unknown;
};
export type HooksGetResponsesContentApplicationJsonSchemaDataItems = {
    id?: number;
    client_id?: string;
    store_hash?: string;
    scope?: string;
    destination?: string;
    headers?: HooksGetResponsesContentApplicationJsonSchemaDataItemsHeaders | null;
    is_active?: boolean;
    created_at?: number;
    updated_at?: number;
};
export type PaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type Pagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: PaginationLinks;
};
export type HooksGetResponsesContentApplicationJsonSchemaMeta = {
    pagination?: Pagination;
};
export type ManageWebhooksGetWebhooksResponse200 = {
    data?: Array<HooksGetResponsesContentApplicationJsonSchemaDataItems>;
    meta?: HooksGetResponsesContentApplicationJsonSchemaMeta;
};
export type ErrorFull = {
    status?: number;
    title?: string;
    type?: string;
};
export type WebhookBaseHeaders = {
    [key: string]: unknown;
};
export type WebhookBase = {
    scope: string;
    destination: string;
    is_active?: boolean;
    headers?: WebhookBaseHeaders | null;
};
export type WebhookFullHeaders = {
    [key: string]: unknown;
};
export type WebhookFull = {
    id?: number;
    client_id?: string;
    store_hash?: string;
    created_at?: number;
    updated_at?: number;
    scope: string;
    destination: string;
    is_active?: boolean;
    headers?: WebhookFullHeaders | null;
};
export type ManageWebhooksCreateWebhooksResponse200 = {
    data?: WebhookFull;
    meta?: unknown;
};
export type ErrorDetailedFull = {
    status?: number;
    title?: string;
    type?: string;
    errors?: unknown;
};
export type HooksWebhookIdGetResponsesContentApplicationJsonSchemaDataHeaders = {
    [key: string]: unknown;
};
export type HooksWebhookIdGetResponsesContentApplicationJsonSchemaData = {
    id?: number;
    client_id?: string;
    store_hash?: string;
    scope?: string;
    destination?: string;
    headers?: HooksWebhookIdGetResponsesContentApplicationJsonSchemaDataHeaders | null;
    is_active?: boolean;
    created_at?: number;
    updated_at?: number;
};
export type ManageWebhooksGetWebhookResponse200 = {
    data?: HooksWebhookIdGetResponsesContentApplicationJsonSchemaData;
    meta?: unknown;
};
export type WebhookPutHeaders = {
    [key: string]: unknown;
};
export type WebhookPut = {
    scope?: string;
    destination?: string;
    is_active?: boolean;
    headers?: WebhookPutHeaders | null;
};
export type HooksWebhookIdPutResponsesContentApplicationJsonSchemaDataHeaders = {
    [key: string]: unknown;
};
export type HooksWebhookIdPutResponsesContentApplicationJsonSchemaData = {
    id?: number;
    client_id?: string;
    store_hash?: string;
    scope?: string;
    destination?: string;
    headers?: HooksWebhookIdPutResponsesContentApplicationJsonSchemaDataHeaders | null;
    is_active?: boolean;
    created_at?: number;
    updated_at?: number;
};
export type ManageWebhooksUpdateWebhookResponse200 = {
    data?: HooksWebhookIdPutResponsesContentApplicationJsonSchemaData;
    meta?: unknown;
};
export type HooksWebhookIdDeleteResponsesContentApplicationJsonSchemaDataHeaders = {
    [key: string]: unknown;
};
export type HooksWebhookIdDeleteResponsesContentApplicationJsonSchemaData = {
    id?: number;
    client_id?: string;
    store_hash?: string;
    scope?: string;
    destination?: string;
    headers?: HooksWebhookIdDeleteResponsesContentApplicationJsonSchemaDataHeaders | null;
    is_active?: boolean;
    created_at?: number;
    updated_at?: number;
};
export type ManageWebhooksDeleteWebhookResponse200 = {
    data?: HooksWebhookIdDeleteResponsesContentApplicationJsonSchemaData;
    meta?: unknown;
};
export type HooksAdminGetResponsesContentApplicationJsonSchemaDataHooksListItemsHeaders = {
    [key: string]: unknown;
};
export type HooksAdminGetResponsesContentApplicationJsonSchemaDataHooksListItemsStatus = 'inactive' | 'active' | 'deactivated';
export type HooksAdminGetResponsesContentApplicationJsonSchemaDataHooksListItems = {
    id?: number;
    client_id?: string;
    store_hash?: string;
    scope?: string;
    destination?: string;
    headers?: HooksAdminGetResponsesContentApplicationJsonSchemaDataHooksListItemsHeaders | null;
    is_active?: boolean;
    created_at?: number;
    updated_at?: number;
    status?: HooksAdminGetResponsesContentApplicationJsonSchemaDataHooksListItemsStatus;
};
export type HooksAdminGetResponsesContentApplicationJsonSchemaDataBlockedDomainsItemsReasonsItems = {
    failure_description?: string;
    count?: number;
    timestamp?: number;
};
export type HooksAdminGetResponsesContentApplicationJsonSchemaDataBlockedDomainsItems = {
    destination?: string;
    time_left?: number;
    reasons?: Array<HooksAdminGetResponsesContentApplicationJsonSchemaDataBlockedDomainsItemsReasonsItems>;
};
export type HooksAdminGetResponsesContentApplicationJsonSchemaData = {
    emails?: Array<string>;
    hooks_list?: Array<HooksAdminGetResponsesContentApplicationJsonSchemaDataHooksListItems>;
    blocked_domains?: Array<HooksAdminGetResponsesContentApplicationJsonSchemaDataBlockedDomainsItems>;
};
export type HooksAdminGetResponsesContentApplicationJsonSchemaMeta = {
    pagination?: Pagination;
};
export type ManageWebhooksGetHooksAdminResponse200 = {
    data?: HooksAdminGetResponsesContentApplicationJsonSchemaData;
    meta?: HooksAdminGetResponsesContentApplicationJsonSchemaMeta;
};
export type GetWebhooksData = {
    body?: never;
    headers?: {
        Accept?: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        is_active?: boolean;
        scope?: string;
        destination?: string;
    };
    url: '/hooks';
};
export type GetWebhooksErrors = {
    401: ErrorFull;
};
export type GetWebhooksError = GetWebhooksErrors[keyof GetWebhooksErrors];
export type GetWebhooksResponses = {
    200: ManageWebhooksGetWebhooksResponse200;
};
export type GetWebhooksResponse = GetWebhooksResponses[keyof GetWebhooksResponses];
export type CreateWebhooksData = {
    body?: WebhookBase;
    headers?: {
        Accept?: string;
    };
    path?: never;
    query?: never;
    url: '/hooks';
};
export type CreateWebhooksErrors = {
    400: ErrorFull;
    401: ErrorFull;
    422: ErrorDetailedFull;
};
export type CreateWebhooksError = CreateWebhooksErrors[keyof CreateWebhooksErrors];
export type CreateWebhooksResponses = {
    200: ManageWebhooksCreateWebhooksResponse200;
};
export type CreateWebhooksResponse = CreateWebhooksResponses[keyof CreateWebhooksResponses];
export type DeleteWebhookData = {
    body?: never;
    headers?: {
        Accept?: string;
    };
    path: {
        webhook_id: number;
    };
    query?: never;
    url: '/hooks/{webhook_id}';
};
export type DeleteWebhookResponses = {
    200: ManageWebhooksDeleteWebhookResponse200;
};
export type DeleteWebhookResponse = DeleteWebhookResponses[keyof DeleteWebhookResponses];
export type GetWebhookData = {
    body?: never;
    headers?: {
        Accept?: string;
    };
    path: {
        webhook_id: number;
    };
    query?: never;
    url: '/hooks/{webhook_id}';
};
export type GetWebhookErrors = {
    401: ErrorFull;
    404: ErrorFull;
};
export type GetWebhookError = GetWebhookErrors[keyof GetWebhookErrors];
export type GetWebhookResponses = {
    200: ManageWebhooksGetWebhookResponse200;
};
export type GetWebhookResponse = GetWebhookResponses[keyof GetWebhookResponses];
export type UpdateWebhookData = {
    body?: WebhookPut;
    headers?: {
        Accept?: string;
    };
    path: {
        webhook_id: number;
    };
    query?: never;
    url: '/hooks/{webhook_id}';
};
export type UpdateWebhookResponses = {
    200: ManageWebhooksUpdateWebhookResponse200;
};
export type UpdateWebhookResponse = UpdateWebhookResponses[keyof UpdateWebhookResponses];
export type GetHooksAdminData = {
    body?: never;
    path?: never;
    query?: {
        is_active?: boolean;
    };
    url: '/hooks/admin';
};
export type GetHooksAdminErrors = {
    401: ErrorFull;
};
export type GetHooksAdminError = GetHooksAdminErrors[keyof GetHooksAdminErrors];
export type GetHooksAdminResponses = {
    200: ManageWebhooksGetHooksAdminResponse200;
};
export type GetHooksAdminResponse = GetHooksAdminResponses[keyof GetHooksAdminResponses];
export type UpdateHooksAdminData = {
    body?: {
        emails?: Array<string>;
    };
    path?: never;
    query?: never;
    url: '/hooks/admin';
};
export type UpdateHooksAdminErrors = {
    400: ErrorFull;
    401: ErrorFull;
    422: ErrorDetailedFull;
};
export type UpdateHooksAdminError = UpdateHooksAdminErrors[keyof UpdateHooksAdminErrors];
export type UpdateHooksAdminResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type UpdateHooksAdminResponse = UpdateHooksAdminResponses[keyof UpdateHooksAdminResponses];
