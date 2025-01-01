// This file is auto-generated by @hey-api/openapi-ts

/**
 * Properties of all Pages V3 pages.
 *
 */
export type anyTypePage = {
    readonly id?: number;
    readonly channel_id?: number;
    /**
     * The name of the page. Must be unique.
     */
    name: string;
    /**
     * A boolean value that controls whether the page is available to users or visible in any navigation menus.
     */
    is_visible?: boolean;
    /**
     * ID of the parent page, if any.
     */
    parent_id?: number;
    /**
     * Determines the order in which the page is displayed in the parent page’s menu. Pages with lower integers display earlier.
     */
    sort_order?: number;
    /**
     * Determines the type of page. See [Pages V3 page types](/docs/rest-content/pages#page-types) for more about the differences.
     */
    type: 'page' | 'raw' | 'contact_form' | 'feed' | 'link' | 'blog';
    /**
     * Determines whether this page loads at the siteʼs root route. For example, at `https://example.com/`.
     */
    is_homepage?: boolean;
    /**
     * When `true`, this page is visible only to logged-in customers.
     */
    is_customers_only?: boolean;
    /**
     * Relative URL on the storefront for this page.
     *
     */
    url?: string;
};

/**
 * Determines the type of page. See [Pages V3 page types](/docs/rest-content/pages#page-types) for more about the differences.
 */
export type type = 'page' | 'raw' | 'contact_form' | 'feed' | 'link' | 'blog';

export type pageMeta = {
    meta_title?: (string) | null;
    /**
     * Comma-separated list of SEO-relevant keywords to include in the element of this page.
     *
     */
    meta_keywords?: (string) | null;
    /**
     * Description contained within the element of this page.
     *
     */
    meta_description?: (string) | null;
};

export type PagePutBulk = {
    /**
     * The ID of the target page.
     */
    id?: number;
} & PagePutObj & {
    /**
     * The ID of the target page.
     */
    id: number;
};

/**
 * Properties of the page modification request body.
 */
export type PagePutObj = {
    /**
     * The ID of the channel where this page should be shown.
     *
     */
    channel_id?: number;
    /**
     * The name of the page. Must be unique.
     *
     */
    name?: string;
    /**
     * Boolean value that specifies the visibility of the page in the storefront’s navigation menu.
     *
     * Indicates whether the page is available to users and visible in any menus.
     *
     */
    is_visible?: boolean;
    /**
     * ID of any parent Web page.
     *
     */
    parent_id?: number;
    /**
     * Specifies the order in which the page is displayed on the storefront. (Lower integers specify earlier display.)
     *
     */
    sort_order?: number;
    /**
     * Specifies the type of page. See [Pages V3 page types](/docs/rest-content/pages#page-types) for more about the differences.
     */
    type?: 'page' | 'raw' | 'contact_form' | 'feed' | 'link' | 'blog';
    /**
     * HTML or variable that populates the element of this page, in default/desktop view. Required in a `POST` request if the page type is `raw`.
     *
     */
    body?: (string) | null;
    /**
     * Boolean value that specifies whether this page is the storefront’s home page.
     *
     */
    is_homepage?: boolean;
    /**
     * Boolean value. When `true`, this page is visible only to logged-in customers.
     *
     */
    is_customers_only?: boolean;
    /**
     * Applicable when the page type is `contact_form`: contact email address that receives messages sent via the form. Must be unique.
     */
    email?: string;
    meta_title?: (string) | null;
    /**
     * The URL of the RSS feed. Required in a `POST` request if the page type is `feed`.
     *
     */
    feed?: string;
    /**
     * Required in a `POST` request to create a link if the page type is `link`.
     *
     */
    link?: string;
    /**
     * Applicable when the page type is `contact_form`: comma-separated list of keywords representing the fields enabled in the control panel for storefront display. Possible fields include:
     *
     * |Field|Description|
     * |-|-|
     * |`fullname`|Full name of the customer submitting the form|
     * |`phone`|Customer’s phone number, as submitted on the form|
     * |`companyname`|Customer’s submitted company name|
     * |`orderno`|Customer’s submitted order number|
     * |`rma`|Customer’s submitted RMA (Return Merchandise Authorization) number|
     *
     */
    contact_fields?: string;
    /**
     * Comma-separated list of SEO-relevant keywords to include in the element of this page.
     *
     */
    meta_keywords?: (string) | null;
    /**
     * Description contained within the element of this page.
     *
     */
    meta_description?: (string) | null;
    /**
     * Comma-separated list of keywords that shoppers can use to locate this page when searching the store.
     *
     */
    search_keywords?: (string) | null;
    /**
     * Relative URL on the storefront for this page.
     *
     */
    url?: string;
};

/**
 * Response payload for the BigCommerce API.
 *
 */
export type PagesCollectionResponse = {
    data?: Array<(typePage | typeBlog | typeContactForm | typeFeed | typeRaw | typeLink)>;
    meta?: ResponseMeta;
};

export type ParameterAccept = string;

/**
 * Return only pages associated with the specified channel.
 */
export type ParameterchannelIdQuery = number;

export type ParameterContentType = string;

/**
 * When you explicitly set this query parameter to `true`, deleting a parent page will recursively delete all its immediate children and their descendants.
 * Otherwise, if you set this query parameter to `false` or not provided, deleting a parent page will update its immediate children by setting their `parent_id` to `0` and their `is_visible` status to `false`.
 *
 */
export type ParameterdeleteChildrenQuery = boolean;

/**
 * Request deletion of multiple pages by passing a comma-separated string of corresponding page IDs. Supports bulk operations.
 */
export type ParameteridInQueryDelete = Array<(number)>;

/**
 * A comma-separated string of page IDs to fetch. Supports bulk operations. If none of the page IDs passed exist, the query will return an empty `data` array.
 */
export type ParameteridInQueryGet = Array<(number)>;

/**
 * Include the requested property in the response. The `body` property returns the page’s markup, text, or raw content.
 */
export type ParameterincludeQuery = Array<('body')>;

/**
 * The number of results to return per request. See `meta.pagination.per_page` in the response body.
 */
export type ParameterlimitQuery = number;

/**
 * Return only pages whose `name` or `body` contain the supplied string.
 */
export type ParameternameLikeQuery = string;

/**
 * Name of the page.
 */
export type ParameternameQuery = string;

/**
 * The ID of the page to be operated on.
 */
export type ParameterpageIdPath = string;

/**
 * The ordered grouping of results to return. See `meta.pagination.current_page` in the response body.
 */
export type ParameterpageQuery = number;

/**
 * Error payload for the BigCommerce API.
 *
 */
export type ResponseErrorBrief = {
    /**
     * The HTTP status code.
     *
     */
    status: number;
    /**
     * The error title describing the particular error.
     *
     */
    title?: string;
    type?: string;
};

/**
 * Error payload for the BigCommerce API.
 *
 */
export type ResponseErrorDetailed = {
    /**
     * The HTTP status code.
     *
     */
    status: number;
    /**
     * The error title describing the particular error.
     *
     */
    title?: string;
    type?: string;
    detail?: string;
};

/**
 * Error payload for the BigCommerce API.
 *
 */
export type ResponseErrorItemized = {
    /**
     * The HTTP status code.
     *
     */
    status: number;
    /**
     * The error title describing the particular error.
     *
     */
    title?: string;
    type?: string;
    errors?: Array<(string)>;
};

/**
 * Data about the response, including pagination and collection totals.
 *
 */
export type ResponseMeta = {
    /**
     * Data about the response, including pagination and collection totals.
     *
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

export type searchKeywords = {
    /**
     * Comma-separated list of keywords that shoppers can use to locate this page when searching the store.
     *
     */
    search_keywords?: (string) | null;
};

/**
 * Response payload for a single content page.
 *
 */
export type SinglePageResponse = {
    data?: (typePage | typeBlog | typeContactForm | typeFeed | typeRaw | typeLink);
    meta?: ResponseMeta;
};

/**
 * A page that contains blog posts. Use caution; `blog`-type pages can only be created in the store control panel, but you may be able to change the type of a blog page to something else with this API. Use the [blog feature of the REST Content API](/docs/rest-content/store-content/blog-posts#create-a-blog-post) to work with blog posts and tags.
 */
export type typeBlog = unknown & anyTypePage & pageMeta & searchKeywords & {
    /**
     * Relative URL on the storefront for this page.
     *
     */
    url?: string;
};

/**
 * `type: contact_form`. A user-customizable page that contains a contact form. Body content returns HTML.
 */
export type typeContactForm = anyTypePage & pageMeta & searchKeywords & {
    /**
     * Applicable when the page type is `contact_form`: contact email address that receives messages sent using the form. Must be unique.
     */
    email?: string;
    /**
     * A comma-separated list of the contact field forms that are enabled in the store control panel for display on the subject storefront. Possible fields include:
     *
     * | Field | Description |
     * |:------|:------------|
     * | `fullname` | The full name of the customer submitting the form. |
     * | `phone` | The customer’s phone number. |
     * | `companyname` | The customer’s company name. |
     * | `orderno` | A field that lets customers specify a subject order number. |
     * | `rma` | A customer’s submitted RMA (Return Merchandise Authorization) number. |
     *
     */
    contact_fields?: string;
};

/**
 * `type: feed`.  Makes RSS-syndicated content feeds available in the menu of other pages that contain markup. No page body.
 */
export type typeFeed = anyTypePage & pageMeta & searchKeywords & {
    /**
     * The URL of the RSS feed. Required in a `POST` request if the page type is `feed`.
     *
     */
    feed: string;
};

/**
 * `type: link`. A link to an external absolute URL. Displays in the menu of other pages that contain markup. Does not contain a body.
 */
export type typeLink = anyTypePage & {
    /**
     * The link for the page type `link`.
     */
    link: string;
};

/**
 * `type: page`. A user-defined plain-text page.
 *
 */
export type typePage = anyTypePage & pageMeta & searchKeywords;

/**
 * `type: raw`. A user-defined page with a body that contains HTML markup or other stringified code.
 */
export type typeRaw = anyTypePage & searchKeywords & {
    /**
     * HTML or variable that populates the element of this page, in default/desktop view. Required in a `POST` request if the page type is `raw`.
     *
     */
    body: (string) | null;
    /**
     * The MIME type of the page body.
     */
    content_type?: string;
};

export type GetPagesData = {
    headers: {
        Accept: string;
    };
    query?: {
        /**
         * Return only pages associated with the specified channel.
         */
        channel_id?: number;
        /**
         * A comma-separated string of page IDs to fetch. Supports bulk operations. If none of the page IDs passed exist, the query will return an empty `data` array.
         */
        'id:in'?: Array<(number)>;
        /**
         * Include the requested property in the response. The `body` property returns the page’s markup, text, or raw content.
         */
        include?: Array<('body')>;
        /**
         * The number of results to return per request. See `meta.pagination.per_page` in the response body.
         */
        limit?: number;
        /**
         * Name of the page.
         */
        name?: string;
        /**
         * Return only pages whose `name` or `body` contain the supplied string.
         */
        'name:like'?: string;
        /**
         * The ordered grouping of results to return. See `meta.pagination.current_page` in the response body.
         */
        page?: number;
    };
};

export type GetPagesResponse = (PagesCollectionResponse);

export type GetPagesError = (ResponseErrorDetailed | ResponseErrorItemized);

export type CreatePagesData = {
    body: ((typePage | typeBlog | typeContactForm | typeFeed | typeRaw | typeLink) | Array<(typePage | typeBlog | typeContactForm | typeFeed | typeRaw | typeLink)>);
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        /**
         * Include the requested property in the response. The `body` property returns the page’s markup, text, or raw content.
         */
        include?: Array<('body')>;
    };
};

export type CreatePagesResponse = ({
    data?: (typePage | typeBlog | typeContactForm | typeFeed | typeRaw | typeLink);
    meta?: ResponseMeta;
} | unknown);

export type CreatePagesError = (ResponseErrorDetailed);

export type UpdatePagesData = {
    body?: (PagePutBulk | Array<PagePutBulk>);
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        /**
         * Include the requested property in the response. The `body` property returns the page’s markup, text, or raw content.
         */
        include?: Array<('body')>;
    };
};

export type UpdatePagesResponse = (PagesCollectionResponse);

export type UpdatePagesError = (ResponseErrorBrief | ResponseErrorDetailed);

export type DeletePagesData = {
    headers: {
        Accept: string;
    };
    query: {
        /**
         * When you explicitly set this query parameter to `true`, deleting a parent page will recursively delete all its immediate children and their descendants.
         * Otherwise, if you set this query parameter to `false` or not provided, deleting a parent page will update its immediate children by setting their `parent_id` to `0` and their `is_visible` status to `false`.
         *
         */
        delete_children?: boolean;
        /**
         * Request deletion of multiple pages by passing a comma-separated string of corresponding page IDs. Supports bulk operations.
         */
        'id:in': Array<(number)>;
    };
};

export type DeletePagesResponse = (void);

export type DeletePagesError = (ResponseErrorBrief | ResponseErrorDetailed);

export type GetPageData = {
    headers: {
        Accept: string;
    };
    path: {
        /**
         * The ID of the page to be operated on.
         */
        pageId: string;
    };
    query?: {
        /**
         * Include the requested property in the response. The `body` property returns the page’s markup, text, or raw content.
         */
        include?: Array<('body')>;
    };
};

export type GetPageResponse = (SinglePageResponse);

export type GetPageError = (ResponseErrorBrief | ResponseErrorItemized);

export type UpdatePageData = {
    body: PagePutObj;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        /**
         * The ID of the page to be operated on.
         */
        pageId: string;
    };
    query?: {
        /**
         * Include the requested property in the response. The `body` property returns the page’s markup, text, or raw content.
         */
        include?: Array<('body')>;
    };
};

export type UpdatePageResponse = (SinglePageResponse);

export type UpdatePageError = (ResponseErrorDetailed | ResponseErrorBrief);

export type DeletePageData = {
    headers: {
        Accept: string;
    };
    path: {
        /**
         * The ID of the page to be operated on.
         */
        pageId: string;
    };
};

export type DeletePageResponse = (void);

export type DeletePageError = (ResponseErrorBrief);