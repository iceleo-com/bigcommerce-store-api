export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type Tree = {
    id?: number;
    name?: string;
    channels?: Array<number>;
};
export type MetaPaginationObjectPaginationLinks = {
    next?: string;
    current?: string;
};
export type MetaPaginationObjectPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: MetaPaginationObjectPaginationLinks;
};
export type MetaPaginationObject = {
    pagination?: MetaPaginationObjectPagination;
};
export type CategoryTreeList = {
    data?: Array<Tree>;
    meta?: MetaPaginationObject;
};
export type GeneralError = {
    status: number;
    title: string;
    type: string;
    code?: number;
};
export type GeneralErrorWithErrorsErrors = {
    [key: string]: unknown;
};
export type GeneralErrorWithErrors = {
    status: number;
    title: string;
    type: string;
    errors: GeneralErrorWithErrorsErrors;
};
export type MetaData = {
    total?: number;
    success?: number;
    failed?: number;
};
export type GetCategoryTreesRequestUnprocessableEntityError = {
    errors?: GeneralErrorWithErrors;
    meta?: MetaData;
};
export type CategoryTreeListRequest = Array<Tree>;
export type MetaEmptyFull = {
    [key: string]: unknown;
};
export type CategoryTree = {
    data?: Array<Tree>;
    meta?: MetaEmptyFull;
};
export type Beta4DetailedErrors = {
    [key: string]: unknown;
};
export type Beta4ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: Beta4DetailedErrors;
};
export type DeleteCategoryTreesRequestUnprocessableEntityError = {
    errors?: GeneralErrorWithErrors;
    meta?: MetaData;
};
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
export type CategoryNodeTree = {
    data?: Array<CategoryNode>;
    meta?: MetaEmptyFull;
};
export type Name = string;
export type CategoryId = number;
export type CategoryUuid = string;
export type TreeId = number;
export type ParentId = number;
export type GetCategoriesDefaultProductSort = 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
export type Url = {
    path?: string;
    is_customized?: boolean;
};
export type GetCategories = {
    name?: Name;
    category_id?: CategoryId;
    category_uuid?: CategoryUuid;
    tree_id?: TreeId;
    parent_id?: ParentId;
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
    default_product_sort?: GetCategoriesDefaultProductSort;
    url?: Url;
};
export type MetaPaginationPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type MetaPaginationPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: MetaPaginationPaginationLinks;
};
export type MetaPagination = {
    pagination?: MetaPaginationPagination;
};
export type CategoryList = {
    data?: Array<GetCategories>;
    meta?: MetaPagination;
};
export type GetAllCategoriesRequestUnprocessableEntityError = {
    errors?: GeneralErrorWithErrors;
    meta?: MetaData;
};
export type CreateCategoriesItemsDefaultProductSort = 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
export type CreateCategoriesItems = {
    name: Name;
    url?: Url;
    parent_id?: ParentId;
    tree_id?: TreeId;
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
    default_product_sort?: CreateCategoriesItemsDefaultProductSort;
};
export type CreateCategories = Array<CreateCategoriesItems>;
export type SuccessResponse = {
    data?: Array<GetCategories>;
    meta?: MetaData;
};
export type ErrorBasic = {
    status?: number;
    title?: string;
    type?: string;
};
export type ErrorRequest = {
    errors?: Array<ErrorBasic>;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type MetaError = {
    status?: number;
    title?: string;
    type?: string;
    errors?: DetailedErrors;
};
export type ErrorResponse = {
    errors?: MetaError;
    meta?: MetaData;
};
export type UpdateCategoriesItemsDefaultProductSort = 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
export type UpdateCategoriesItems = {
    category_id: CategoryId;
    name?: Name;
    tree_id?: TreeId;
    parent_id?: ParentId;
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
    default_product_sort?: UpdateCategoriesItemsDefaultProductSort;
    url?: Url;
};
export type UpdateCategories = Array<UpdateCategoriesItems>;
export type SuccessNoContentResponse = {
    meta?: MetaData;
};
export type DeleteTreeCategoriesRequestUnprocessableEntityError = {
    errors?: GeneralErrorWithErrors;
    meta?: MetaData;
};
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
    403: GeneralError;
    422: DeleteCategoryTreesRequestUnprocessableEntityError;
};
export type DeleteCategoryTreesError = DeleteCategoryTreesErrors[keyof DeleteCategoryTreesErrors];
export type DeleteCategoryTreesResponses = {
    204: {
        [key: string]: unknown;
    };
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
    403: GeneralError;
    422: GetCategoryTreesRequestUnprocessableEntityError;
};
export type GetCategoryTreesError = GetCategoryTreesErrors[keyof GetCategoryTreesErrors];
export type GetCategoryTreesResponses = {
    200: CategoryTreeList;
};
export type GetCategoryTreesResponse = GetCategoryTreesResponses[keyof GetCategoryTreesResponses];
export type UpsertCategoryTreesData = {
    body?: CategoryTreeListRequest;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/catalog/trees';
};
export type UpsertCategoryTreesErrors = {
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
    403: GeneralError;
    404: Beta4ErrorResponse;
};
export type GetCategoryTreeError = GetCategoryTreeErrors[keyof GetCategoryTreeErrors];
export type GetCategoryTreeResponses = {
    200: CategoryNodeTree;
};
export type GetCategoryTreeResponse = GetCategoryTreeResponses[keyof GetCategoryTreeResponses];
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
    403: GeneralError;
    422: DeleteTreeCategoriesRequestUnprocessableEntityError;
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
    403: GeneralError;
    422: GetAllCategoriesRequestUnprocessableEntityError;
};
export type GetAllCategoriesError = GetAllCategoriesErrors[keyof GetAllCategoriesErrors];
export type GetAllCategoriesResponses = {
    200: CategoryList;
};
export type GetAllCategoriesResponse = GetAllCategoriesResponses[keyof GetAllCategoriesResponses];
export type CreateCategoriesData = {
    body?: CreateCategories;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/catalog/trees/categories';
};
export type CreateCategoriesErrors = {
    400: ErrorRequest;
    403: GeneralError;
    422: ErrorResponse;
};
export type CreateCategoriesError = CreateCategoriesErrors[keyof CreateCategoriesErrors];
export type CreateCategoriesResponses = {
    201: SuccessResponse;
};
export type CreateCategoriesResponse = CreateCategoriesResponses[keyof CreateCategoriesResponses];
export type UpdateCategoriesData = {
    body?: UpdateCategories;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/catalog/trees/categories';
};
export type UpdateCategoriesErrors = {
    400: ErrorRequest;
    403: GeneralError;
    422: ErrorResponse;
};
export type UpdateCategoriesError = UpdateCategoriesErrors[keyof UpdateCategoriesErrors];
export type UpdateCategoriesResponses = {
    200: SuccessNoContentResponse;
};
export type UpdateCategoriesResponse = UpdateCategoriesResponses[keyof UpdateCategoriesResponses];
