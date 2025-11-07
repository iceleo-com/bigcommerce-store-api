export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type Publish = {
    regions: Array<Region>;
    template_file?: string;
    entity_id?: string;
    channel_id?: number;
};
export type Region = {
    name?: string;
    children?: Array<Layout | Widget>;
};
export type Layout = {
    readonly layout_template_uuid?: string;
    name?: string;
    dropzones?: Array<Dropzone>;
    type?: 'layout';
};
export type Dropzone = {
    widgets?: Array<Widget>;
};
export type Widget = {
    readonly widget_template_uuid?: string;
    storefront_api_query_params?: {
        [key: string]: unknown;
    };
    name?: string;
    description?: string;
    type?: 'widget';
};
export type MetaCollection = {
    pagination?: Pagination;
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
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
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
export type LayoutWritable = {
    name?: string;
    dropzones?: Array<DropzoneWritable>;
    type?: 'layout';
};
export type DropzoneWritable = {
    widgets?: Array<WidgetWritable>;
};
export type WidgetWritable = {
    storefront_api_query_params?: {
        [key: string]: unknown;
    };
    name?: string;
    description?: string;
    type?: 'widget';
};
export type DetailedErrorsWritable = {
    [key: string]: unknown;
};
export type Accept = string;
export type ContentType = string;
export type UserAgent = string;
export type XCorrelationId = string;
export type ChannelId = number;
export type TemplateFile = string;
export type EntityId = string;
export type PublishOrOverwriteRequest = Publish;
export type GetPageWidgetsData = {
    body?: never;
    headers: {
        Accept: string;
        'User-Agent': string;
        'X-Correlation-Id'?: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
        template_file?: string;
        entity_id?: string;
    };
    url: '/content/page-widgets';
};
export type GetPageWidgetsErrors = {
    422: ErrorResponse;
};
export type GetPageWidgetsError = GetPageWidgetsErrors[keyof GetPageWidgetsErrors];
export type GetPageWidgetsResponses = {
    200: {
        data?: {
            regions?: Array<Region>;
        };
        meta?: MetaCollection;
    };
};
export type GetPageWidgetsResponse = GetPageWidgetsResponses[keyof GetPageWidgetsResponses];
export type CreatePageWidgetsData = {
    body?: PublishOrOverwriteRequest;
    headers: {
        Accept: string;
        'User-Agent': string;
        'X-Correlation-Id'?: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/content/page-widgets';
};
export type CreatePageWidgetsErrors = {
    422: ErrorResponse;
};
export type CreatePageWidgetsError = CreatePageWidgetsErrors[keyof CreatePageWidgetsErrors];
export type CreatePageWidgetsResponses = {
    204: void;
};
export type CreatePageWidgetsResponse = CreatePageWidgetsResponses[keyof CreatePageWidgetsResponses];
