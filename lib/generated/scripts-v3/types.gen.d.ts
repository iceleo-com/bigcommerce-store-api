export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
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
export type DetailedErrors = {
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
export type Meta = {
    [key: string]: unknown;
};
export type NoContent = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
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
export type ParameterAccept = string;
export type ParameterContentType = string;
export type ParameterDirectionParam = 'asc' | 'desc';
export type ParameterFilterExcludeFieldsParam = Array<(string)>;
export type ParameterFilterIncludeFieldsParam = Array<(string)>;
export type ParameterFilterWidgetTemplateKindParam = string;
export type ParameterFilterWidgetTemplateUUIDParam = string;
export type ParameterFilterWidgetUUIDParam = string;
export type ParameterLimitParam = number;
export type ParameterPageParam = number;
export type ParameterPlacementUUID = string;
export type ParameterQueryWidgetsParam = string;
export type ParameterRequiredTemplateFile = string;
export type ParameterScriptsSortKeyParam = 'name' | 'description' | 'date_created' | 'date_modified';
export type ParameterScriptUUID = string;
export type ParameterTemplateUUID = string;
export type ParameterWidgetUUID = string;
export type script_Base = {
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
    integrity_hashes?: Array<(string)>;
};
export type load_method = 'default' | 'async' | 'defer';
export type location = 'head' | 'footer';
export type visibility = 'storefront' | 'all_pages' | 'checkout' | 'order_confirmation';
export type kind = 'src' | 'script_tag';
export type consent_category = 'essential' | 'functional' | 'analytics' | 'targeting';
export type script_Full = {
    name?: string;
    uuid?: string;
    date_created?: string;
    date_modified?: string;
} & script_Base;
export type script_Post = {
    name: string;
} & script_Base;
export type script_Put = {
    name?: string;
} & script_Base;
export type script_Response = {
    data?: script_Full;
    meta?: Meta;
};
export type script_responseCollection = {
    data?: Array<script_Full>;
    meta?: CollectionMeta;
};
export type CreateScriptData = {
    body: script_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateScriptResponse = (script_Response);
export type CreateScriptError = (({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} & {
    errors?: {
        [key: string]: unknown;
    };
}));
export type GetScriptsData = {
    headers: {
        Accept: string;
    };
    query?: {
        'channel_id:in'?: Array<(number)>;
        direction?: 'asc' | 'desc';
        limit?: number;
        page?: number;
        sort?: 'name' | 'description' | 'date_created' | 'date_modified';
    };
};
export type GetScriptsResponse = ({
    data?: Array<script_Full>;
    meta?: CollectionMeta;
});
export type GetScriptsError = (({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} & {
    errors?: {
        [key: string]: unknown;
    };
}));
export type GetScriptData = {
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
};
export type GetScriptResponse = (script_Response);
export type GetScriptError = (({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} & {
    errors?: {
        [key: string]: unknown;
    };
}));
export type UpdateScriptData = {
    body: script_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        uuid: string;
    };
};
export type UpdateScriptResponse = (script_Response);
export type UpdateScriptError = (({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} & {
    errors?: {
        [key: string]: unknown;
    };
}));
export type DeleteScriptData = {
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
};
export type DeleteScriptResponse = (NoContent);
export type DeleteScriptError = (({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} & {
    errors?: {
        [key: string]: unknown;
    };
}));
