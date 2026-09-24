export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type ScriptBaseLoadMethod = 'default' | 'async' | 'defer';
export type ScriptBaseLocation = 'head' | 'footer';
export type ScriptBaseVisibility = 'storefront' | 'all_pages' | 'checkout' | 'order_confirmation';
export type ScriptBaseKind = 'src' | 'script_tag';
export type ScriptBaseConsentCategory = 'essential' | 'functional' | 'analytics' | 'targeting';
export type ScriptPost = {
    description?: string;
    html?: string;
    src?: string;
    auto_uninstall?: boolean;
    load_method?: ScriptBaseLoadMethod;
    location?: ScriptBaseLocation;
    visibility?: ScriptBaseVisibility;
    kind?: ScriptBaseKind;
    api_client_id?: string;
    consent_category?: ScriptBaseConsentCategory;
    enabled?: boolean;
    channel_id?: number;
    integrity_hashes?: Array<string>;
    name: string;
};
export type ScriptFull = {
    description?: string;
    html?: string;
    src?: string;
    auto_uninstall?: boolean;
    load_method?: ScriptBaseLoadMethod;
    location?: ScriptBaseLocation;
    visibility?: ScriptBaseVisibility;
    kind?: ScriptBaseKind;
    api_client_id?: string;
    consent_category?: ScriptBaseConsentCategory;
    enabled?: boolean;
    channel_id?: number;
    integrity_hashes?: Array<string>;
    name?: string;
    uuid?: string;
    date_created?: string;
    date_modified?: string;
};
export type Meta = {
    [key: string]: unknown;
};
export type ScriptResponse = {
    data?: ScriptFull;
    meta?: Meta;
};
export type ContentScriptsPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateScriptRequestUnprocessableEntityError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: ContentScriptsPostResponsesContentApplicationJsonSchemaErrors;
};
export type ContentScriptsGetParametersSort = 'name' | 'description' | 'date_created' | 'date_modified';
export type ContentScriptsGetParametersDirection = 'asc' | 'desc';
export type CollectionMetaPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type CollectionMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: CollectionMetaPaginationLinks;
};
export type CollectionMeta = {
    pagination?: CollectionMetaPagination;
};
export type ScriptsGetScriptsResponse200 = {
    data?: Array<ScriptFull>;
    meta?: CollectionMeta;
};
export type ContentScriptsGetResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type GetScriptsRequestUnprocessableEntityError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: ContentScriptsGetResponsesContentApplicationJsonSchemaErrors;
};
export type ContentScriptsUuidGetResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type GetScriptRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: ContentScriptsUuidGetResponsesContentApplicationJsonSchemaErrors;
};
export type GetScriptRequestUnprocessableEntityError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: ContentScriptsUuidGetResponsesContentApplicationJsonSchemaErrors;
};
export type ScriptPut = {
    description?: string;
    html?: string;
    src?: string;
    auto_uninstall?: boolean;
    load_method?: ScriptBaseLoadMethod;
    location?: ScriptBaseLocation;
    visibility?: ScriptBaseVisibility;
    kind?: ScriptBaseKind;
    api_client_id?: string;
    consent_category?: ScriptBaseConsentCategory;
    enabled?: boolean;
    channel_id?: number;
    integrity_hashes?: Array<string>;
    name?: string;
};
export type ContentScriptsUuidPutResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type UpdateScriptRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: ContentScriptsUuidPutResponsesContentApplicationJsonSchemaErrors;
};
export type UpdateScriptRequestUnprocessableEntityError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: ContentScriptsUuidPutResponsesContentApplicationJsonSchemaErrors;
};
export type ContentScriptsUuidDeleteResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type DeleteScriptRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: ContentScriptsUuidDeleteResponsesContentApplicationJsonSchemaErrors;
};
export type DeleteScriptRequestUnprocessableEntityError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: ContentScriptsUuidDeleteResponsesContentApplicationJsonSchemaErrors;
};
export type GetScriptsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        sort?: ContentScriptsGetParametersSort;
        direction?: ContentScriptsGetParametersDirection;
        'channel_id:in'?: Array<number>;
    };
    url: '/content/scripts';
};
export type GetScriptsErrors = {
    422: GetScriptsRequestUnprocessableEntityError;
};
export type GetScriptsError = GetScriptsErrors[keyof GetScriptsErrors];
export type GetScriptsResponses = {
    200: ScriptsGetScriptsResponse200;
};
export type GetScriptsResponse = GetScriptsResponses[keyof GetScriptsResponses];
export type CreateScriptData = {
    body?: ScriptPost;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/content/scripts';
};
export type CreateScriptErrors = {
    422: CreateScriptRequestUnprocessableEntityError;
};
export type CreateScriptError = CreateScriptErrors[keyof CreateScriptErrors];
export type CreateScriptResponses = {
    200: ScriptResponse;
};
export type CreateScriptResponse = CreateScriptResponses[keyof CreateScriptResponses];
export type DeleteScriptData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/content/scripts/{uuid}';
};
export type DeleteScriptErrors = {
    404: DeleteScriptRequestNotFoundError;
    422: DeleteScriptRequestUnprocessableEntityError;
};
export type DeleteScriptError = DeleteScriptErrors[keyof DeleteScriptErrors];
export type DeleteScriptResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteScriptResponse = DeleteScriptResponses[keyof DeleteScriptResponses];
export type GetScriptData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/content/scripts/{uuid}';
};
export type GetScriptErrors = {
    404: GetScriptRequestNotFoundError;
    422: GetScriptRequestUnprocessableEntityError;
};
export type GetScriptError = GetScriptErrors[keyof GetScriptErrors];
export type GetScriptResponses = {
    200: ScriptResponse;
};
export type GetScriptResponse = GetScriptResponses[keyof GetScriptResponses];
export type UpdateScriptData = {
    body?: ScriptPut;
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/content/scripts/{uuid}';
};
export type UpdateScriptErrors = {
    404: UpdateScriptRequestNotFoundError;
    422: UpdateScriptRequestUnprocessableEntityError;
};
export type UpdateScriptError = UpdateScriptErrors[keyof UpdateScriptErrors];
export type UpdateScriptResponses = {
    200: ScriptResponse;
};
export type UpdateScriptResponse = UpdateScriptResponses[keyof UpdateScriptResponses];
