export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type dropzone = {
    configuration?: {
        [key: string]: unknown;
    };
    widgets?: Array<widget>;
};
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};
export type layout = {
    readonly layout_template_uuid?: string;
    configuration?: {
        [key: string]: unknown;
    };
    name?: string;
    dropzones?: Array<dropzone>;
    type?: 'layout';
};
export type type = 'layout';
export type metaCollection = {
    pagination?: pagination;
};
export type pagination = {
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
export type ParameterChannelId = number;
export type ParameterContent_Type = string;
export type ParameterEntityId = string;
export type ParameterTemplateFile = string;
export type ParameterUser_Agent = string;
export type ParameterX_Correlation_Id = string;
export type publish = {
    regions: Array<region>;
    template_file?: string;
    entity_id?: string;
    channel_id?: number;
};
export type region = {
    name?: string;
    children?: Array<(layout | widget)>;
};
export type widget = {
    readonly widget_template_uuid?: string;
    configuration?: {
        [key: string]: unknown;
    };
    storefront_api_query_params?: {
        [key: string]: unknown;
    };
    name?: string;
    description?: string;
    type?: 'widget';
};
export type type2 = 'widget';
export type GetPageWidgetsData = {
    headers: {
        Accept: string;
        'User-Agent': string;
        'X-Correlation-Id'?: string;
    };
    query?: {
        channel_id?: number;
        entity_id?: string;
        template_file?: string;
    };
};
export type GetPageWidgetsResponse = ({
    data?: {
        regions?: Array<region>;
    };
    meta?: metaCollection;
});
export type GetPageWidgetsError = (ErrorResponse);
export type CreatePageWidgetsData = {
    body?: publish;
    headers: {
        Accept: string;
        'Content-Type': string;
        'User-Agent': string;
        'X-Correlation-Id'?: string;
    };
};
export type CreatePageWidgetsResponse = (void);
export type CreatePageWidgetsError = (ErrorResponse);
