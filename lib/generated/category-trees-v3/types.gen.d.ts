export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type MetaEmptyFull = {
    [key: string]: unknown;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type GetCategories = {
    name?: Name;
    category_id?: CategoryId;
    category_uuid?: CategoryUuid;
    tree_id?: TreeId;
    parent_id?: ParentId;
} & CategoryBase & {
    url?: Url;
};
export type CreateCategories = Array<{
    name?: Name;
    url?: Url;
    parent_id?: ParentId;
    tree_id?: TreeId;
} & CategoryBase & unknown>;
export type UpdateCategories = Array<{
    category_id: CategoryId;
    name?: Name;
    tree_id?: TreeId;
    parent_id?: ParentId;
} & CategoryBase & {
    url?: Url;
}>;
export type CategoryBase = {
    description?: string;
    views?: number;
    sort_order?: number;
    page_title?: string;
    meta_keywords?: Array<string>;
    meta_description?: string;
    layout_file?: string;
    image_url?: string;
    is_visible?: boolean;
    search_keywords?: string;
    default_product_sort?: 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
};
export type CategoryList = {
    data?: Array<GetCategories>;
    meta?: MetaPagination;
};
export type CategoryNodeTree = {
    data?: Array<CategoryNode>;
    meta?: MetaEmptyFull;
};
export type CategoryTreeList = {
    data?: Array<Tree>;
    meta?: MetaPaginationObject;
};
export type CategoryTree = {
    data?: Array<Tree>;
    meta?: MetaEmptyFull;
};
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
export type ErrorRequest = {
    errors?: Array<ErrorBasic>;
};
export type ErrorBasic = {
    status?: number;
    title?: string;
    type?: string;
};
export type ErrorAdditional = {
    errors?: DetailedErrors;
};
export type MetaError = ErrorBasic & ErrorAdditional;
export type MetaData = {
    total?: number;
    success?: number;
    failed?: number;
};
export type SuccessNoContentResponse = {
    meta?: MetaData;
};
export type PartialSuccessNoContentResponse = {
    errors?: MetaError;
    meta?: MetaData;
};
export type PartialSuccessResponse = {
    data?: Array<GetCategories>;
    errors?: MetaError;
    meta?: MetaData;
};
export type SuccessResponse = {
    data?: Array<GetCategories>;
    meta?: MetaData;
};
export type ErrorResponse = {
    errors?: MetaError;
    meta?: MetaData;
};
export type Tree = {
    id?: number;
    name?: string;
    channels?: Array<number>;
};
export type CategoryTreeListRequest = Array<Tree>;
export type CategoryNode = {
    id?: number;
    parent_id?: number;
    depth?: number;
    path?: Array<number>;
    name?: string;
    is_visible?: boolean;
    children?: Array<CategoryNode>;
    url?: string;
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
export type Beta4DetailedErrors = {
    [key: string]: unknown;
};
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type Beta4ErrorResponse = BaseError & {
    errors?: Beta4DetailedErrors;
};
export type Url = {
    path?: string;
    is_customized?: boolean;
};
export type CategoryUuid = string;
export type CategoryId = number;
export type ParentId = number;
export type TreeId = number;
export type Name = string;
export type NotFoundError = {
    status: number;
    title: string;
    type: string;
};
export type GeneralError = {
    status: number;
    title: string;
    type: string;
    code?: number;
};
export type GeneralErrorWithErrors = {
    status: number;
    title: string;
    type: string;
    errors: {
        [key: string]: unknown;
    };
};
export type MetaEmptyFullWritable = {
    [key: string]: unknown;
};
export type DetailedErrorsWritable = {
    [key: string]: unknown;
};
export type GetCategoriesWritable = {
    name?: Name;
    category_id?: CategoryId;
    tree_id?: TreeId;
    parent_id?: ParentId;
} & CategoryBase & {
    url?: Url;
};
export type Beta4DetailedErrorsWritable = {
    [key: string]: unknown;
};
export type Accept = string;
export type ContentType = string;
export type PageParam = number;
export type LimitParam = number;
export type IncludeFieldsParam = Array<string>;
export type ExcludeFieldsParam = Array<string>;
export type KeywordParam = string;
export type IsVisibleParam = boolean;
export type NameParam = string;
export type NameLikeParam = string;
export type PageTitleLikeParam = string;
export type PageTitleParam = string;
export type TreeIdParam = number;
export type IdInParam = Array<number>;
export type ChannelIdInParam = Array<number>;
export type CategoryUuidInParam = Array<string>;
export type CategoryIdInParam = Array<number>;
export type TreeIdInParam = Array<number>;
export type ParentIdInParam = Array<number>;
export type CategoryUuidNotInParam = Array<string>;
export type CategoryIdNotInParam = Array<number>;
export type TreeIdNotInParam = Array<number>;
export type ParentIdNotInParam = Array<number>;
export type DeleteTreeCategoriesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'category_uuid:in'?: Array<string>;
        'category_id:in'?: Array<number>;
        'tree_id:in'?: Array<number>;
        'parent_id:in'?: Array<number>;
    };
    url: '/catalog/trees/categories';
};
export type DeleteTreeCategoriesErrors = {
    400: ErrorRequest;
    401: string;
    403: GeneralError;
    422: {
        errors?: GeneralErrorWithErrors;
        meta?: MetaData;
    };
};
export type DeleteTreeCategoriesError = DeleteTreeCategoriesErrors[keyof DeleteTreeCategoriesErrors];
export type DeleteTreeCategoriesResponses = {
    202: SuccessNoContentResponse;
};
export type DeleteTreeCategoriesResponse = DeleteTreeCategoriesResponses[keyof DeleteTreeCategoriesResponses];
export type GetAllCategoriesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'category_uuid:in'?: Array<string>;
        'category_uuid:not_in'?: Array<string>;
        'category_id:in'?: Array<number>;
        'category_id:not_in'?: Array<number>;
        'tree_id:in'?: Array<number>;
        'tree_id:not_in'?: Array<number>;
        'parent_id:in'?: Array<number>;
        'parent_id:not_in'?: Array<number>;
        page_title?: string;
        'page_title:like'?: string;
        name?: string;
        'name:like'?: string;
        keyword?: string;
        is_visible?: boolean;
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
        page?: number;
        limit?: number;
    };
    url: '/catalog/trees/categories';
};
export type GetAllCategoriesErrors = {
    400: string;
    401: string;
    403: GeneralError;
    422: {
        errors?: GeneralErrorWithErrors;
        meta?: MetaData;
    };
};
export type GetAllCategoriesError = GetAllCategoriesErrors[keyof GetAllCategoriesErrors];
export type GetAllCategoriesResponses = {
    200: CategoryList;
};
export type GetAllCategoriesResponse = GetAllCategoriesResponses[keyof GetAllCategoriesResponses];
export type CreateCategoriesData = {
    body: CreateCategories;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/catalog/trees/categories';
};
export type CreateCategoriesErrors = {
    400: ErrorRequest;
    401: string;
    403: GeneralError;
    422: ErrorResponse;
};
export type CreateCategoriesError = CreateCategoriesErrors[keyof CreateCategoriesErrors];
export type CreateCategoriesResponses = {
    201: SuccessResponse;
    207: PartialSuccessResponse;
};
export type CreateCategoriesResponse = CreateCategoriesResponses[keyof CreateCategoriesResponses];
export type UpdateCategoriesData = {
    body: UpdateCategories;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/catalog/trees/categories';
};
export type UpdateCategoriesErrors = {
    400: ErrorRequest;
    401: string;
    403: GeneralError;
    422: ErrorResponse;
};
export type UpdateCategoriesError = UpdateCategoriesErrors[keyof UpdateCategoriesErrors];
export type UpdateCategoriesResponses = {
    200: SuccessNoContentResponse;
    207: PartialSuccessNoContentResponse;
};
export type UpdateCategoriesResponse = UpdateCategoriesResponses[keyof UpdateCategoriesResponses];
export type DeleteCategoryTreesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'id:in'?: Array<number>;
    };
    url: '/catalog/trees';
};
export type DeleteCategoryTreesErrors = {
    401: string;
    403: GeneralError;
    422: {
        errors?: GeneralErrorWithErrors;
        meta?: MetaData;
    };
};
export type DeleteCategoryTreesError = DeleteCategoryTreesErrors[keyof DeleteCategoryTreesErrors];
export type DeleteCategoryTreesResponses = {
    204: void;
};
export type DeleteCategoryTreesResponse = DeleteCategoryTreesResponses[keyof DeleteCategoryTreesResponses];
export type GetCategoryTreesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'id:in'?: Array<number>;
        'channel_id:in'?: Array<number>;
    };
    url: '/catalog/trees';
};
export type GetCategoryTreesErrors = {
    401: string;
    403: GeneralError;
    422: {
        errors?: GeneralErrorWithErrors;
        meta?: MetaData;
    };
};
export type GetCategoryTreesError = GetCategoryTreesErrors[keyof GetCategoryTreesErrors];
export type GetCategoryTreesResponses = {
    200: CategoryTreeList;
};
export type GetCategoryTreesResponse = GetCategoryTreesResponses[keyof GetCategoryTreesResponses];
export type UpsertCategoryTreesData = {
    body: CategoryTreeListRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/catalog/trees';
};
export type UpsertCategoryTreesErrors = {
    401: string;
    403: GeneralError;
    422: Beta4ErrorResponse;
};
export type UpsertCategoryTreesError = UpsertCategoryTreesErrors[keyof UpsertCategoryTreesErrors];
export type UpsertCategoryTreesResponses = {
    200: CategoryTree;
};
export type UpsertCategoryTreesResponse = UpsertCategoryTreesResponses[keyof UpsertCategoryTreesResponses];
export type GetCategoryTreeData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        tree_id: number;
    };
    query?: {
        depth?: number;
    };
    url: '/catalog/trees/{tree_id}/categories';
};
export type GetCategoryTreeErrors = {
    401: string;
    403: GeneralError;
    404: Beta4ErrorResponse;
};
export type GetCategoryTreeError = GetCategoryTreeErrors[keyof GetCategoryTreeErrors];
export type GetCategoryTreeResponses = {
    200: CategoryNodeTree;
};
export type GetCategoryTreeResponse = GetCategoryTreeResponses[keyof GetCategoryTreeResponses];
