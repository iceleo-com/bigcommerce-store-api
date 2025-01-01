// This file is auto-generated by @hey-api/openapi-ts

/**
 * Error payload for the BigCommerce API.
 *
 */
export type BaseError = {
    /**
     * The HTTP status code.
     *
     */
    status?: number;
    /**
     * The error title describing the particular error.
     *
     */
    title?: string;
    type?: string;
    instance?: string;
};

export type DetailedErrors = {
    [key: string]: unknown;
};

export type dropzone = {
    /**
     * JSON object of necessary configuration to construct a dropzone.
     */
    configuration?: {
        [key: string]: unknown;
    };
    /**
     * Consists of [widget](#widgets) objects.
     */
    widgets?: Array<widget>;
};

export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};

export type layout = {
    /**
     * Set by BigCommerce. Read-only.
     */
    readonly layout_template_uuid?: string;
    /**
     * JSON object of necessary configuration to construct a layout.
     */
    configuration?: {
        [key: string]: unknown;
    };
    /**
     * A human-readable label for the layout; displays in Page Builder.
     */
    name?: string;
    /**
     * Consists of dropzone objects.
     */
    dropzones?: Array<dropzone>;
    type?: 'layout';
};

export type type = 'layout';

/**
 * Data about the response, including pagination and collection totals.
 */
export type metaCollection = {
    pagination?: pagination;
};

/**
 * Data about the response, including pagination and collection totals.
 *
 */
export type pagination = {
    /**
     * Total number of items in the result set.
     *
     */
    total?: number;
    /**
     * Total number of items in the collection response.
     *
     */
    count?: number;
    /**
     * The amount of items returned in the collection per page, controlled by the limit parameter.
     *
     */
    per_page?: number;
    /**
     * The page you are currently on within the collection.
     *
     */
    current_page?: number;
    /**
     * The total number of pages in the collection.
     *
     */
    total_pages?: number;
    /**
     * Pagination links for the previous and next parts of the whole collection.
     *
     */
    links?: {
        /**
         * Link to the previous page returned in the response.
         *
         */
        previous?: string;
        /**
         * Link to the current page returned in the response.
         *
         */
        current?: string;
        /**
         * Link to the next page returned in the response.
         *
         */
        next?: string;
    };
};

/**
 * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
 */
export type ParameterAccept = string;

/**
 * The ID of the channel for which you want to retrieve page widgets. Defaults to the first channel created on the store.
 */
export type ParameterChannelId = number;

/**
 * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
 */
export type ParameterContent_Type = string;

/**
 * The identifier of a page you would like to target. For product pages, choose product ID. For category pages, choose category ID. Home page does not support `entity_id`. Leave empty if the request is for global regions.
 */
export type ParameterEntityId = string;

/**
 * The template file that you would like to target. Leave it empty if the request is for Global regions.
 */
export type ParameterTemplateFile = string;

/**
 * Please specify a user agent to identify your integration or client.
 */
export type ParameterUser_Agent = string;

/**
 * An identifier unique to a set of related requests. For use on headless storefronts, excluding BigCommerce for WordPress. For more information, see [Best Practices](/docs/start/best-practices#correlating-requests) or the [Headless Guide](/docs/storefront/headless#correlating-requests).
 */
export type ParameterX_Correlation_Id = string;

export type publish = {
    regions: Array<region>;
    /**
     * The template file that you would like to target. Leave it empty if the request is for Global regions.
     */
    template_file?: string;
    /**
     * The identifier of a page you would like to target. For product pages, choose product ID. For category pages, choose category ID. Home page does not support `entity_id`. Leave it empty if the request is for Global regions.
     */
    entity_id?: string;
    /**
     * The id of the channel on which to create this placement. Defaults to the first channel created on the store.
     */
    channel_id?: number;
};

export type region = {
    /**
     * Matches the name specified as `{{{region_name="..."}}}` in a theme template file.
     */
    name?: string;
    /**
     * Consists of layout and widget objects.
     */
    children?: Array<(layout | widget)>;
};

export type widget = {
    /**
     * The unique identifier of the parent widget template; set by the store or channel where the widget template originated.
     */
    readonly widget_template_uuid?: string;
    /**
     * JSON object of necessary configuration to construct a widget.
     */
    configuration?: {
        [key: string]: unknown;
    };
    /**
     * A set of parameters used to query the GraphQL Storefront API. Used when the parent widget template is configured to request data directly from the GraphQL Storefront API; in this case, the parent widget template has the `storefront_api_query` property.
     */
    storefront_api_query_params?: {
        [key: string]: unknown;
    };
    /**
     * A human-readable label for the widget. Retrievable using either the [Get a widget](/docs/rest-content/widgets/widget#get-a-widget) or the [Get all widgets](/docs/rest-content/widgets/widget#get-all-widgets) endpoint.
     */
    name?: string;
    /**
     * A description of the widget. Retrievable using either the [Get a widget](/docs/rest-content/widgets/widget#get-a-widget) or the [Get all widgets](/docs/rest-content/widgets/widget#get-all-widgets) endpoint.
     */
    description?: string;
    type?: 'widget';
};

export type type2 = 'widget';

export type GetPageWidgetsData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
        /**
         * Please specify a user agent to identify your integration or client.
         */
        'User-Agent': string;
        /**
         * An identifier unique to a set of related requests. For use on headless storefronts, excluding BigCommerce for WordPress. For more information, see [Best Practices](/docs/start/best-practices#correlating-requests) or the [Headless Guide](/docs/storefront/headless#correlating-requests).
         */
        'X-Correlation-Id'?: string;
    };
    query?: {
        /**
         * The ID of the channel for which you want to retrieve page widgets. Defaults to the first channel created on the store.
         */
        channel_id?: number;
        /**
         * The identifier of a page you would like to target. For product pages, choose product ID. For category pages, choose category ID. Home page does not support `entity_id`. Leave empty if the request is for global regions.
         */
        entity_id?: string;
        /**
         * The template file that you would like to target. Leave it empty if the request is for Global regions.
         */
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
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
         */
        'Content-Type': string;
        /**
         * Please specify a user agent to identify your integration or client.
         */
        'User-Agent': string;
        /**
         * An identifier unique to a set of related requests. For use on headless storefronts, excluding BigCommerce for WordPress. For more information, see [Best Practices](/docs/start/best-practices#correlating-requests) or the [Headless Guide](/docs/storefront/headless#correlating-requests).
         */
        'X-Correlation-Id'?: string;
    };
};

export type CreatePageWidgetsResponse = (void);

export type CreatePageWidgetsError = (ErrorResponse);