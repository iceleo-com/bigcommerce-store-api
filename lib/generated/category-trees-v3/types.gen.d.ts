export type BaseError = {
    status?: number;
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
export type category_id = number;
export type category_uuid = string;
export type CategoryBase = {
    description?: string;
    views?: number;
    sort_order?: number;
    page_title?: string;
    meta_keywords?: Array<(string)>;
    meta_description?: string;
    layout_file?: string;
    image_url?: string;
    is_visible?: boolean;
    search_keywords?: string;
    default_product_sort?: 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
};
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
export type DetailedErrors = {
    [key: string]: unknown;
};
export type ErrorAdditional = {
    errors?: DetailedErrors;
};
export type ErrorBasic = {
    status?: number;
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
export type name = string;
export type NotFoundError = {
    status: number;
    title: string;
    type: string;
};
export type ParameterAccept = string;
export type ParameterCategoryIdInParam = Array<(number)>;
export type ParameterCategoryIdNotInParam = Array<(number)>;
export type ParameterCategoryUuidInParam = Array<(string)>;
export type ParameterCategoryUuidNotInParam = Array<(string)>;
export type ParameterChannelIdInParam = Array<(number)>;
export type ParameterContentType = string;
export type ParameterExcludeFieldsParam = Array<(string)>;
export type ParameterIdInParam = Array<(number)>;
export type ParameterIncludeFieldsParam = Array<(string)>;
export type ParameterIsVisibleParam = boolean;
export type ParameterKeywordParam = string;
export type ParameterLimitParam = number;
export type ParameterNameLikeParam = string;
export type ParameterNameParam = string;
export type ParameterPageParam = number;
export type ParameterPageTitleLikeParam = string;
export type ParameterPageTitleParam = string;
export type ParameterParentIdInParam = Array<(number)>;
export type ParameterParentIdNotInParam = Array<(number)>;
export type ParameterTreeIdInParam = Array<(number)>;
export type ParameterTreeIdNotInParam = Array<(number)>;
export type ParameterTreeIdParam = number;
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
export type tree_id = number;
export type UpdateCategories = Array<({
    category_id: category_id;
    name?: name;
    tree_id?: tree_id;
    parent_id?: parent_id;
} & CategoryBase & {
    url?: url;
})>;
export type url = {
    path?: string;
    is_customized?: boolean;
};
export type GetAllCategoriesData = {
    headers: {
        Accept: string;
    };
    query?: {
        'category_id:in'?: Array<(number)>;
        'category_id:not_in'?: Array<(number)>;
        'category_uuid:in'?: Array<(string)>;
        'category_uuid:not_in'?: Array<(string)>;
        exclude_fields?: Array<(string)>;
        include_fields?: Array<(string)>;
        is_visible?: boolean;
        keyword?: string;
        limit?: number;
        name?: string;
        'name:like'?: string;
        page?: number;
        page_title?: string;
        'page_title:like'?: string;
        'parent_id:in'?: Array<(number)>;
        'parent_id:not_in'?: Array<(number)>;
        'tree_id:in'?: Array<(number)>;
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
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateCategoriesResponse = (SuccessResponse | PartialSuccessResponse);
export type CreateCategoriesError = (ErrorRequest | string | GeneralError | ErrorResponse);
export type UpdateCategoriesData = {
    body: UpdateCategories;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateCategoriesResponse = (SuccessNoContentResponse | PartialSuccessNoContentResponse);
export type UpdateCategoriesError = (ErrorRequest | string | GeneralError | ErrorResponse);
export type DeleteTreeCategoriesData = {
    headers: {
        Accept: string;
    };
    query?: {
        'category_id:in'?: Array<(number)>;
        'category_uuid:in'?: Array<(string)>;
        'parent_id:in'?: Array<(number)>;
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
        Accept: string;
    };
    query?: {
        'channel_id:in'?: Array<(number)>;
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
        Accept: string;
        'Content-Type': string;
    };
};
export type UpsertCategoryTreesResponse = (CategoryTree);
export type UpsertCategoryTreesError = (string | GeneralError | beta4ErrorResponse);
export type DeleteCategoryTreesData = {
    headers: {
        Accept: string;
    };
    query?: {
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
        Accept: string;
    };
    path: {
        tree_id: number;
    };
    query?: {
        depth?: number;
    };
};
export type GetCategoryTreeResponse = (CategoryNodeTree);
export type GetCategoryTreeError = (string | GeneralError | beta4ErrorResponse);
