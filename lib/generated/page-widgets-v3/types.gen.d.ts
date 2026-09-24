export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type LayoutConfiguration = {
    [key: string]: unknown;
};
export type DropzoneConfiguration = {
    [key: string]: unknown;
};
export type WidgetConfiguration = {
    [key: string]: unknown;
};
export type WidgetStorefrontApiQueryParams = {
    [key: string]: unknown;
};
export type WidgetType = 'widget';
export type Widget = {
    widget_template_uuid?: string;
    configuration?: WidgetConfiguration;
    storefront_api_query_params?: WidgetStorefrontApiQueryParams;
    name?: string;
    description?: string;
    type?: WidgetType;
};
export type Dropzone = {
    configuration?: DropzoneConfiguration;
    widgets?: Array<Widget>;
};
export type LayoutType = 'layout';
export type Layout = {
    layout_template_uuid?: string;
    configuration?: LayoutConfiguration;
    name?: string;
    dropzones?: Array<Dropzone>;
    type?: LayoutType;
};
export type RegionChildrenItems = Layout | Widget;
export type Region = {
    name?: string;
    children?: Array<RegionChildrenItems>;
};
export type ContentPageWidgetsGetResponsesContentApplicationJsonSchemaData = {
    regions?: Array<Region>;
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
export type MetaCollection = {
    pagination?: Pagination;
};
export type PageWidgetsGetPageWidgetsResponse200 = {
    data?: ContentPageWidgetsGetResponsesContentApplicationJsonSchemaData;
    meta?: MetaCollection;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: DetailedErrors;
};
export type Publish = {
    regions: Array<Region>;
    template_file?: string;
    entity_id?: string;
    channel_id?: number;
};
export type GetPageWidgetsData = {
    body?: never;
    headers: {
        Accept: string;
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
    200: PageWidgetsGetPageWidgetsResponse200;
};
export type GetPageWidgetsResponse = GetPageWidgetsResponses[keyof GetPageWidgetsResponses];
export type CreatePageWidgetsData = {
    body?: Publish;
    headers: {
        Accept: string;
        'X-Correlation-Id'?: string;
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
    204: {
        [key: string]: unknown;
    };
};
export type CreatePageWidgetsResponse = CreatePageWidgetsResponses[keyof CreatePageWidgetsResponses];
