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

export type beta4DetailedErrors = {
    [key: string]: unknown;
};

export type beta4ErrorResponse = BaseError & {
    errors?: beta4DetailedErrors;
};

/**
 * Unique ID of the *Category*. Increments sequentially.
 */
export type category_id = number;

/**
 * An additional unique identifier for the category. Read-Only.
 */
export type category_uuid = string;

export type CategoryBase = {
    /**
     * The product description, which can include HTML formatting.
     *
     */
    description?: string;
    /**
     * Number of views the category has on the storefront.
     *
     */
    views?: number;
    /**
     * Priority this category will be given when included in the menu and category pages. The lower the number, the closer to the top of the results the category will be.
     *
     */
    sort_order?: number;
    /**
     * Custom title for the category page. If not defined, the category name will be used as the meta title.
     *
     */
    page_title?: string;
    /**
     * Custom meta keywords for the category page. If not defined, the storeʼs default keywords will be used. Must post as an array like: ["awesome","sauce"].
     *
     */
    meta_keywords?: Array<(string)>;
    /**
     * Custom meta description for the category page. If not defined, the storeʼs default meta description will be used.
     *
     */
    meta_description?: string;
    /**
     * A valid layout file. (Please refer to [this article](https://support.bigcommerce.com/articles/Public/Creating-Custom-Template-Files/) on creating category files.) This field is writable only for stores with a Blueprint theme applied.
     *
     */
    layout_file?: string;
    /**
     * Image URL used for this category on the storefront. Images can be uploaded via form file post to `/categories/{categoryId}/image`, or by providing a publicly accessible URL in this field. Must be either a full-qualified URL or an empty string.
     *
     */
    image_url?: string;
    /**
     * Flag to determine whether the product should be displayed to customers browsing the store. If `true`, the category will be displayed. If `false`, the category will be hidden from view.
     *
     */
    is_visible?: boolean;
    /**
     * A comma-separated list of keywords that can be used to locate the category when searching the store.
     *
     */
    search_keywords?: string;
    /**
     * Determines how the products are sorted on category page load.
     *
     */
    default_product_sort?: 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
};

/**
 * Determines how the products are sorted on category page load.
 *
 */
export type default_product_sort = 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';

export type CategoryList = {
    data?: Array<GetCategories>;
    meta?: MetaPagination;
};

export type CategoryNode = {
    id?: number;
    parent_id?: number;
    depth?: number;
    path?: Array<(number)>;
    name?: string;
    is_visible?: boolean;
    children?: Array<CategoryNode>;
};

export type CategoryNodeTree = {
    data?: Array<CategoryNode>;
    meta?: metaEmpty_Full;
};

export type CategoryTree = {
    data?: Array<Tree>;
    meta?: metaEmpty_Full;
};

export type CategoryTreeList = {
    data?: Array<Tree>;
    meta?: MetaPaginationObject;
};

export type CategoryTreeListRequest = Array<Tree>;

export type CreateCategories = Array<({
    name: name;
    url?: url;
    parent_id: parent_id;
    tree_id: tree_id;
} & CategoryBase)>;

/**
 * Each key-value pair describes a failure or partial success case.
 */
export type DetailedErrors = {
    [key: string]: unknown;
};

export type ErrorAdditional = {
    errors?: DetailedErrors;
};

export type ErrorBasic = {
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
};

export type ErrorRequest = {
    errors?: Array<ErrorBasic>;
};

export type ErrorResponse = {
    errors?: MetaError;
    meta?: MetaData;
};

export type GeneralError = {
    /**
     * The HTTP status code.
     */
    status: number;
    /**
     * The error title describes the particular error.
     */
    title: string;
    type: string;
    /**
     * The custom code of the error.
     */
    code?: number;
};

export type GeneralErrorWithErrors = {
    /**
     * The HTTP status code.
     */
    status: number;
    /**
     * The error title describing the particular error.
     */
    title: string;
    type: string;
    errors: {
        [key: string]: unknown;
    };
};

export type GetCategories = {
    name?: name;
    category_id?: category_id;
    category_uuid?: category_uuid;
    tree_id?: tree_id;
    parent_id?: parent_id;
} & CategoryBase & {
    url?: url;
};

export type MetaData = {
    total?: number;
    success?: number;
    failed?: number;
};

/**
 * Response metadata.
 */
export type metaEmpty_Full = {
    [key: string]: unknown;
};

export type MetaError = ErrorBasic & ErrorAdditional;

export type MetaPagination = {
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

export type MetaPaginationObject = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
        links?: {
            next?: string;
            current?: string;
        };
    };
};

/**
 * The name displayed for the category. Name is unique with respect to the categoryʼs siblings.
 * Required in a POST.
 */
export type name = string;

export type NotFoundError = {
    /**
     * The HTTP status code.
     */
    status: number;
    /**
     * The error title describing the particular error.
     */
    title: string;
    type: string;
};

/**
 * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
 */
export type ParameterAccept = string;

/**
 * Filter using a comma-separated list of one or more category IDs. To use category UUIDs, use the `category_uuid:in` parameter.
 */
export type ParameterCategoryIdInParam = Array<(number)>;

/**
 * Filter using a comma-separated list to exclude one or more category IDs. To exclude using category UUIDs, use the `category_uuid:not_in` parameter.
 */
export type ParameterCategoryIdNotInParam = Array<(number)>;

/**
 * Filter using a comma-separated list of one or more category UUIDs. To use category IDs, use the `category_id:in` parameter.
 */
export type ParameterCategoryUuidInParam = Array<(string)>;

/**
 * Filter using a comma-separated list to exclude one or more category UUIDs. To exclude using category IDs, use the `category_id:not_in` parameter.
 */
export type ParameterCategoryUuidNotInParam = Array<(string)>;

/**
 * Filter by supplying a comma-separated list of channel IDs.
 */
export type ParameterChannelIdInParam = Array<(number)>;

/**
 * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
 */
export type ParameterContentType = string;

/**
 * Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
 */
export type ParameterExcludeFieldsParam = Array<(string)>;

/**
 * Filter by supplying a comma-separated list of category tree IDs.
 */
export type ParameterIdInParam = Array<(number)>;

/**
 * Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
 */
export type ParameterIncludeFieldsParam = Array<(string)>;

/**
 * Filter items based on whether the product is currently visible on the storefront.
 */
export type ParameterIsVisibleParam = boolean;

/**
 * Filter items by keywords found in the `name`, `description`, or `sku` fields, or in the brand name.
 */
export type ParameterKeywordParam = string;

/**
 * Controls the number of items per page in a limited (paginated) list of products.
 *
 */
export type ParameterLimitParam = number;

/**
 * Filter items by substring in the name property. `name:like=stick` returns both `Stickers` and `Lipstick colors`.
 */
export type ParameterNameLikeParam = string;

/**
 * Filter items by name.
 *
 */
export type ParameterNameParam = string;

/**
 * Specifies the page number in a limited (paginated) list of products.
 *
 */
export type ParameterPageParam = number;

/**
 * Filter items by substring in the page title property. `page_title:like=oil` returns both `Soil and mulch` and `Oil pastels`.
 */
export type ParameterPageTitleLikeParam = string;

/**
 * Filter items by page_title.
 *
 */
export type ParameterPageTitleParam = string;

export type ParameterParentIdInParam = Array<(number)>;

export type ParameterParentIdNotInParam = Array<(number)>;

/**
 * Filter using a comma-separated list of one or more category tree IDs.
 */
export type ParameterTreeIdInParam = Array<(number)>;

/**
 * Filter using a comma-separated list to exclude one or more category tree IDs.
 */
export type ParameterTreeIdNotInParam = Array<(number)>;

/**
 * The ID of the category tree.
 */
export type ParameterTreeIdParam = number;

/**
 * The unique numeric ID of the category parent. To create a top-level category, specify the `tree_id`. Otherwise, you can specify the `parent_id`. Required in a POST if creating a child category.
 */
export type parent_id = number;

export type PartialSuccessNoContentResponse = {
    errors?: MetaError;
    meta?: MetaData;
};

export type PartialSuccessResponse = {
    data?: Array<GetCategories>;
    errors?: MetaError;
    meta?: MetaData;
};

export type SuccessNoContentResponse = {
    meta?: MetaData;
};

export type SuccessResponse = {
    data?: Array<GetCategories>;
    meta?: MetaData;
};

export type Tree = {
    id?: number;
    name?: string;
    channels?: Array<(number)>;
};

/**
 * The ID of the category tree. To create a top-level category, specify the `tree_id`. Otherwise, you can specify the `parent_id`.
 */
export type tree_id = number;

export type UpdateCategories = Array<({
    category_id: category_id;
    name?: name;
    tree_id?: tree_id;
    parent_id?: parent_id;
} & CategoryBase & {
    url?: url;
})>;

/**
 * If not provided in POST request, the URL is autogenerated from the category name.
 *
 */
export type url = {
    path?: string;
    is_customized?: boolean;
};

export type GetAllCategoriesData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    query?: {
        /**
         * Filter using a comma-separated list of one or more category IDs. To use category UUIDs, use the `category_uuid:in` parameter.
         */
        'category_id:in'?: Array<(number)>;
        /**
         * Filter using a comma-separated list to exclude one or more category IDs. To exclude using category UUIDs, use the `category_uuid:not_in` parameter.
         */
        'category_id:not_in'?: Array<(number)>;
        /**
         * Filter using a comma-separated list of one or more category UUIDs. To use category IDs, use the `category_id:in` parameter.
         */
        'category_uuid:in'?: Array<(string)>;
        /**
         * Filter using a comma-separated list to exclude one or more category UUIDs. To exclude using category IDs, use the `category_id:not_in` parameter.
         */
        'category_uuid:not_in'?: Array<(string)>;
        /**
         * Fields to exclude, in a comma-separated list. The specified fields will be excluded from a response. The ID cannot be excluded.
         */
        exclude_fields?: Array<(string)>;
        /**
         * Fields to include, in a comma-separated list. The ID and the specified fields will be returned.
         */
        include_fields?: Array<(string)>;
        /**
         * Filter items based on whether the product is currently visible on the storefront.
         */
        is_visible?: boolean;
        /**
         * Filter items by keywords found in the `name`, `description`, or `sku` fields, or in the brand name.
         */
        keyword?: string;
        /**
         * Controls the number of items per page in a limited (paginated) list of products.
         *
         */
        limit?: number;
        /**
         * Filter items by name.
         *
         */
        name?: string;
        /**
         * Filter items by substring in the name property. `name:like=stick` returns both `Stickers` and `Lipstick colors`.
         */
        'name:like'?: string;
        /**
         * Specifies the page number in a limited (paginated) list of products.
         *
         */
        page?: number;
        /**
         * Filter items by page_title.
         *
         */
        page_title?: string;
        /**
         * Filter items by substring in the page title property. `page_title:like=oil` returns both `Soil and mulch` and `Oil pastels`.
         */
        'page_title:like'?: string;
        'parent_id:in'?: Array<(number)>;
        'parent_id:not_in'?: Array<(number)>;
        /**
         * Filter using a comma-separated list of one or more category tree IDs.
         */
        'tree_id:in'?: Array<(number)>;
        /**
         * Filter using a comma-separated list to exclude one or more category tree IDs.
         */
        'tree_id:not_in'?: Array<(number)>;
    };
};

export type GetAllCategoriesResponse = (CategoryList);

export type GetAllCategoriesError = (string | GeneralError | {
    errors?: GeneralErrorWithErrors;
    meta?: MetaData;
});

export type CreateCategoriesData = {
    body: CreateCategories;
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

export type CreateCategoriesResponse = (SuccessResponse | PartialSuccessResponse);

export type CreateCategoriesError = (ErrorRequest | string | GeneralError | ErrorResponse);

export type UpdateCategoriesData = {
    body: UpdateCategories;
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

export type UpdateCategoriesResponse = (SuccessNoContentResponse | PartialSuccessNoContentResponse);

export type UpdateCategoriesError = (ErrorRequest | string | GeneralError | ErrorResponse);

export type DeleteTreeCategoriesData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    query?: {
        /**
         * Filter using a comma-separated list of one or more category IDs. To use category UUIDs, use the `category_uuid:in` parameter.
         */
        'category_id:in'?: Array<(number)>;
        /**
         * Filter using a comma-separated list of one or more category UUIDs. To use category IDs, use the `category_id:in` parameter.
         */
        'category_uuid:in'?: Array<(string)>;
        'parent_id:in'?: Array<(number)>;
        /**
         * Filter using a comma-separated list of one or more category tree IDs.
         */
        'tree_id:in'?: Array<(number)>;
    };
};

export type DeleteTreeCategoriesResponse = (SuccessNoContentResponse);

export type DeleteTreeCategoriesError = (ErrorRequest | string | GeneralError | {
    errors?: GeneralErrorWithErrors;
    meta?: MetaData;
});

export type GetCategoryTreesData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    query?: {
        /**
         * Filter by supplying a comma-separated list of channel IDs.
         */
        'channel_id:in'?: Array<(number)>;
        /**
         * Filter by supplying a comma-separated list of category tree IDs.
         */
        'id:in'?: Array<(number)>;
    };
};

export type GetCategoryTreesResponse = (CategoryTreeList);

export type GetCategoryTreesError = (string | GeneralError | {
    errors?: GeneralErrorWithErrors;
    meta?: MetaData;
});

export type UpsertCategoryTreesData = {
    body: CategoryTreeListRequest;
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

export type UpsertCategoryTreesResponse = (CategoryTree);

export type UpsertCategoryTreesError = (string | GeneralError | beta4ErrorResponse);

export type DeleteCategoryTreesData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    query?: {
        /**
         * Filter by supplying a comma-separated list of category tree IDs.
         */
        'id:in'?: Array<(number)>;
    };
};

export type DeleteCategoryTreesResponse = (void);

export type DeleteCategoryTreesError = (string | GeneralError | {
    errors?: GeneralErrorWithErrors;
    meta?: MetaData;
});

export type GetCategoryTreeData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    path: {
        /**
         * The ID of the category tree.
         */
        tree_id: number;
    };
    query?: {
        /**
         * Max depth for a tree of categories.
         */
        depth?: number;
    };
};

export type GetCategoryTreeResponse = (CategoryNodeTree);

export type GetCategoryTreeError = (string | GeneralError | beta4ErrorResponse);