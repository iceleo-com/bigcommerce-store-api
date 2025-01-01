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

/**
 * Data about the response, including pagination and collection totals.
 */
export type CollectionMeta = {
    /**
     * Data about the response, including pagination and collection totals.
     */
    pagination?: {
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
};

export type DetailedErrors = {
    [key: string]: unknown;
};

export type ErrorResponse = {
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
} & {
    errors?: {
        [key: string]: unknown;
    };
};

/**
 * Response metadata.
 */
export type Meta = {
    [key: string]: unknown;
};

/**
 * No-content response for the BigCommerce API.
 */
export type NoContent = {
    /**
     * 204 HTTP status code.
     *
     */
    status?: number;
    /**
     * The error title describing the situation.
     */
    title?: string;
    type?: string;
    instance?: string;
};

/**
 * Error payload for the BigCommerce API.
 */
export type NotFound = {
    /**
     * 404 HTTP status code.
     *
     */
    status?: number;
    /**
     * The error title describing the particular error.
     */
    title?: string;
    type?: string;
    instance?: string;
};

/**
 * Data about the response, including pagination and collection totals.
 */
export type Pagination = {
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
 * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
 */
export type ParameterContentType = string;

/**
 * Sort direction. Acceptable values are: `asc`, `desc`.
 *
 */
export type ParameterDirectionParam = 'asc' | 'desc';

/**
 * Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
 */
export type ParameterFilterExcludeFieldsParam = Array<(string)>;

/**
 * Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
 */
export type ParameterFilterIncludeFieldsParam = Array<(string)>;

/**
 * The kind of widget template.
 */
export type ParameterFilterWidgetTemplateKindParam = string;

/**
 * The identifier for a specific widget template.
 */
export type ParameterFilterWidgetTemplateUUIDParam = string;

/**
 * The identifier for a specific widget.
 */
export type ParameterFilterWidgetUUIDParam = string;

/**
 * Controls the number of items per page in a limited (paginated) list of products.
 */
export type ParameterLimitParam = number;

/**
 * Specifies the page number in a limited (paginated) list of products.
 */
export type ParameterPageParam = number;

/**
 * The identifier for a specific placement.
 */
export type ParameterPlacementUUID = string;

/**
 * The query string associated with a widget's name and description.
 *
 */
export type ParameterQueryWidgetsParam = string;

/**
 * The template file, for example: `pages/home`.
 */
export type ParameterRequiredTemplateFile = string;

/**
 * Scripts field name to sort by.
 *
 */
export type ParameterScriptsSortKeyParam = 'name' | 'description' | 'date_created' | 'date_modified';

/**
 * The identifier for a specific script.
 */
export type ParameterScriptUUID = string;

/**
 * The identifier for a specific template.
 */
export type ParameterTemplateUUID = string;

/**
 * The identifier for a specific widget.
 */
export type ParameterWidgetUUID = string;

/**
 * Script properties common to `post`, `put`, and `get` requests.
 */
export type script_Base = {
    /**
     * The user-friendly description.
     */
    description?: string;
    /**
     * An HTML string containing exactly one `script` tag. Present when the script `kind` is `script_tag`.
     */
    html?: string;
    /**
     * The `src` attribute of the script to load. Only present if `kind` is `src`.
     */
    src?: string;
    /**
     * It will enable automatic cleanup of the script when the single click app is uninstalled or OAuth token is revoked.
     */
    auto_uninstall?: boolean;
    /**
     * The load method to use for the script. Values are `default`, `async`, or `defer`. It determines how the script should be loaded into the page.
     */
    load_method?: 'default' | 'async' | 'defer';
    /**
     * Where on the page to place the script. Values are `head` or `footer`.
     */
    location?: 'head' | 'footer';
    /**
     * Which set of pages the script should load on.
     *
     * Please note that you need to have `Checkout content` scope to use `all_pages` and `checkout`.
     *
     * - The current visibility options are `storefront`, `checkout`, `all_pages` and `order_confirmation`.
     *
     * `storefront`: All pages that are not `checkout` or `order_confirmation`.
     *
     *
     * For a list of all locations visit [Scripts Visibility](/docs/integrations/scripts#script-visibility-locations).
     */
    visibility?: 'storefront' | 'all_pages' | 'checkout' | 'order_confirmation';
    /**
     * What type of script this is.
     *
     * `src` - For scripts that use the src URL. A `script` tag will be generated with its `src` attribute set to the value of the `src` property. When your app provides a path to the script, we can optimize and add the script automatically for you. The load_method can vary.
     *
     * `script_tag` - For scripts that include a raw HTML `script` tag-enclosed block of JavaScript. The value of `html` is added directly to the page. The load_method must be default.
     */
    kind?: 'src' | 'script_tag';
    /**
     * The client id of the API user that created this script, or blank if created by other means.
     */
    api_client_id?: string;
    /**
     * Consent category for GDPR and CCPA compliance. Defaults to `unknown` when not specified. Scripts with an `unknown` consent category do not display on stores with customer cookie consent banners enabled.
     */
    consent_category?: 'essential' | 'functional' | 'analytics' | 'targeting';
    /**
     * Whether the script is enabled or disabled on the storefront.
     */
    enabled?: boolean;
    channel_id?: number;
    /**
     * Array of [Subresource integrity (SRI) hashes](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) for external SRC scripts that lets browsers validate the contents of the script.
     *
     * The hash is the `integrity` attribute on the `script` tag. You can add up to five hashes for a script and generate them using any SRI standard-supported algorithm, including SHA-256, SHA-384, and SHA-512. If you provide more than one hash, they will all be added to the `integrity` attribute in order, separated by whitespace.
     *
     */
    integrity_hashes?: Array<(string)>;
};

/**
 * The load method to use for the script. Values are `default`, `async`, or `defer`. It determines how the script should be loaded into the page.
 */
export type load_method = 'default' | 'async' | 'defer';

/**
 * Where on the page to place the script. Values are `head` or `footer`.
 */
export type location = 'head' | 'footer';

/**
 * Which set of pages the script should load on.
 *
 * Please note that you need to have `Checkout content` scope to use `all_pages` and `checkout`.
 *
 * - The current visibility options are `storefront`, `checkout`, `all_pages` and `order_confirmation`.
 *
 * `storefront`: All pages that are not `checkout` or `order_confirmation`.
 *
 *
 * For a list of all locations visit [Scripts Visibility](/docs/integrations/scripts#script-visibility-locations).
 */
export type visibility = 'storefront' | 'all_pages' | 'checkout' | 'order_confirmation';

/**
 * What type of script this is.
 *
 * `src` - For scripts that use the src URL. A `script` tag will be generated with its `src` attribute set to the value of the `src` property. When your app provides a path to the script, we can optimize and add the script automatically for you. The load_method can vary.
 *
 * `script_tag` - For scripts that include a raw HTML `script` tag-enclosed block of JavaScript. The value of `html` is added directly to the page. The load_method must be default.
 */
export type kind = 'src' | 'script_tag';

/**
 * Consent category for GDPR and CCPA compliance. Defaults to `unknown` when not specified. Scripts with an `unknown` consent category do not display on stores with customer cookie consent banners enabled.
 */
export type consent_category = 'essential' | 'functional' | 'analytics' | 'targeting';

export type script_Full = {
    /**
     * The user-friendly name.
     */
    name?: string;
    /**
     * The primary identifier.
     */
    uuid?: string;
    /**
     * The date on which this object was initially created.
     */
    date_created?: string;
    /**
     * The date on which this object was last updated.
     */
    date_modified?: string;
} & script_Base;

export type script_Post = {
    /**
     * The user-friendly name.
     */
    name: string;
} & script_Base;

export type script_Put = {
    /**
     * The user-friendly name.
     */
    name?: string;
} & script_Base;

/**
 * For a list of all locations visit [Scripts Visibility](/docs/integrations/scripts#script-visibility-locations).
 */
export type script_Response = {
    data?: script_Full;
    meta?: Meta;
};

/**
 * For a list of all locations visit [Scripts Visibility](/docs/integrations/scripts#script-visibility-locations).
 */
export type script_responseCollection = {
    data?: Array<script_Full>;
    meta?: CollectionMeta;
};

export type CreateScriptData = {
    body: script_Post;
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
         */
        'Content-Type': string;
    };
};

export type CreateScriptResponse = (script_Response);

export type CreateScriptError = (({
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
} & {
    errors?: {
        [key: string]: unknown;
    };
}));

export type GetScriptsData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    query?: {
        /**
         * Filters list of scripts by the associated channel ID.
         */
        'channel_id:in'?: Array<(number)>;
        /**
         * Sort direction. Acceptable values are: `asc`, `desc`.
         *
         */
        direction?: 'asc' | 'desc';
        /**
         * Controls the number of items per page in a limited (paginated) list of products.
         */
        limit?: number;
        /**
         * Specifies the page number in a limited (paginated) list of products.
         */
        page?: number;
        /**
         * Field name to sort the scripts by. Note: Since `id` increments when new scripts are added, you can use that field to sort by script create date.
         *
         */
        sort?: 'name' | 'description' | 'date_created' | 'date_modified';
    };
};

export type GetScriptsResponse = ({
    data?: Array<script_Full>;
    meta?: CollectionMeta;
});

export type GetScriptsError = (({
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
} & {
    errors?: {
        [key: string]: unknown;
    };
}));

export type GetScriptData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    path: {
        /**
         * The identifier for a specific script.
         */
        uuid: string;
    };
};

export type GetScriptResponse = (script_Response);

export type GetScriptError = (({
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
} & {
    errors?: {
        [key: string]: unknown;
    };
}));

export type UpdateScriptData = {
    body: script_Put;
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
         */
        'Content-Type': string;
    };
    path: {
        /**
         * The identifier for a specific script.
         */
        uuid: string;
    };
};

export type UpdateScriptResponse = (script_Response);

export type UpdateScriptError = (({
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
} & {
    errors?: {
        [key: string]: unknown;
    };
}));

export type DeleteScriptData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    path: {
        /**
         * The identifier for a specific script.
         */
        uuid: string;
    };
};

export type DeleteScriptResponse = (NoContent);

export type DeleteScriptError = (({
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
} & {
    errors?: {
        [key: string]: unknown;
    };
}));