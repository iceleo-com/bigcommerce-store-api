export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type CollectionMeta = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
        links?: {
            previous?: string;
            current?: string;
            next?: string;
        };
    };
};
export type Pagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: {
        previous?: string;
        current?: string;
        next?: string;
    };
};
export type Meta = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} & {
    errors?: {
        [key: string]: unknown;
    };
};
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type NoContent = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type ScriptFull = {
    name?: string;
    uuid?: string;
    date_created?: string;
    date_modified?: string;
} & ScriptBase;
export type ScriptPost = {
    name: string;
} & ScriptBase;
export type ScriptPut = {
    name?: string;
} & ScriptBase;
export type ScriptResponse = {
    data?: ScriptFull;
    meta?: Meta;
};
export type ScriptResponseCollection = {
    data?: Array<ScriptFull>;
    meta?: CollectionMeta;
};
export type ScriptBase = {
    description?: string;
    html?: string;
    src?: string;
    auto_uninstall?: boolean;
    load_method?: 'default' | 'async' | 'defer';
    location?: 'head' | 'footer';
    visibility?: 'storefront' | 'all_pages' | 'checkout' | 'order_confirmation';
    kind?: 'src' | 'script_tag';
    api_client_id?: string;
    consent_category?: 'essential' | 'functional' | 'analytics' | 'targeting';
    enabled?: boolean;
    channel_id?: number;
    integrity_hashes?: Array<string>;
};
export type FilterWidgetTemplateUuidParam = string;
export type FilterWidgetTemplateKindParam = string;
export type PlacementUuid = string;
export type WidgetUuid = string;
export type ScriptUuid = string;
export type FilterWidgetUuidParam = string;
export type FilterIncludeFieldsParam = Array<string>;
export type FilterExcludeFieldsParam = Array<string>;
export type PageParam = number;
export type LimitParam = number;
export type ScriptsSortKeyParam = 'name' | 'description' | 'date_created' | 'date_modified';
export type DirectionParam = 'asc' | 'desc';
export type TemplateUuid = string;
export type RequiredTemplateFile = string;
export type QueryWidgetsParam = string;
export type Accept = string;
export type ContentType = string;
export type GetScriptsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        sort?: 'name' | 'description' | 'date_created' | 'date_modified';
        direction?: 'asc' | 'desc';
        'channel_id:in'?: Array<number>;
    };
    url: '/content/scripts';
};
export type GetScriptsErrors = {
    422: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    };
};
export type GetScriptsError = GetScriptsErrors[keyof GetScriptsErrors];
export type GetScriptsResponses = {
    200: {
        data?: Array<ScriptFull>;
        meta?: CollectionMeta;
    };
};
export type GetScriptsResponse = GetScriptsResponses[keyof GetScriptsResponses];
export type CreateScriptData = {
    body: ScriptPost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/content/scripts';
};
export type CreateScriptErrors = {
    422: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    };
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
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    };
    422: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    };
};
export type DeleteScriptError = DeleteScriptErrors[keyof DeleteScriptErrors];
export type DeleteScriptResponses = {
    204: NoContent;
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
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    };
    422: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    };
};
export type GetScriptError = GetScriptErrors[keyof GetScriptErrors];
export type GetScriptResponses = {
    200: ScriptResponse;
};
export type GetScriptResponse = GetScriptResponses[keyof GetScriptResponses];
export type UpdateScriptData = {
    body: ScriptPut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/content/scripts/{uuid}';
};
export type UpdateScriptErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    };
    422: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    };
};
export type UpdateScriptError = UpdateScriptErrors[keyof UpdateScriptErrors];
export type UpdateScriptResponses = {
    200: ScriptResponse;
};
export type UpdateScriptResponse = UpdateScriptResponses[keyof UpdateScriptResponses];
