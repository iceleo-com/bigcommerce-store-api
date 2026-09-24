export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type MetaEmptyFull = {
    [key: string]: unknown;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type CreateCategories = Array<TreeIdCreateData & ParentIdCreateData & CategoryDataPost>;
export type UpdateCategories = Array<TreeIdUpdateData & CategoryIdUpdateData & CategoryUuidData & ParentIdUpdateData & CategoryDataPut>;
export type Category = Id & ParentId & Name & Description & Views & SortOrder & PageTitle & MetaKeywords & MetaDescription & LayoutFile & ImageUrl & IsVisible & SearchKeywords & DefaultProductSort & {
    url?: Url;
};
export type CategoryUuidData = {
    category_uuid?: string;
};
export type CategoryIdUpdateData = {
    category_id: number;
};
export type ParentIdCreateData = {
    parent_id: number;
};
export type TreeIdCreateData = {
    tree_id: number;
};
export type ParentIdUpdateData = {
    parent_id?: number;
};
export type TreeIdUpdateData = {
    tree_id?: number;
};
export type CategoryData = {
    name?: string;
    description?: string;
    views?: number;
    sort_order?: number;
    page_title?: string;
    search_keywords?: string;
    meta_keywords?: Array<string>;
    meta_description?: string;
    layout_file?: string;
    is_visible?: boolean;
    image_url?: string;
    url?: Url;
};
export type CategoryDataPut = CategoryData & DefaultProductSort;
export type CategoryDataPost = CategoryData & DefaultProductSort;
export type Url = {
    path?: string;
    is_customized?: boolean;
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
    data?: Array<Category>;
    meta?: MetaData;
};
export type SuccessResponse = {
    data?: Array<Category>;
    errors?: MetaError;
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
export type TreeReq = {
    id?: number;
    name?: string;
    channels?: Array<number>;
};
export type CategoryNode = {
    id?: number;
    parent_id?: number;
    depth?: number;
    path?: Array<number>;
    name?: string;
    is_visible?: boolean;
    children?: Array<CategoryNode>;
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
export type DefaultProductSort = {
    default_product_sort?: 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
};
export type Name = {
    name?: string;
};
export type Description = {
    description?: string;
};
export type Views = {
    views?: number;
};
export type SortOrder = {
    sort_order?: number;
};
export type PageTitle = {
    page_title?: string;
};
export type SearchKeywords = {
    search_keywords?: string;
};
export type MetaKeywords = {
    meta_keywords?: Array<string>;
};
export type LayoutFile = {
    layout_file?: string;
};
export type IsVisible = {
    is_visible?: boolean;
};
export type ImageUrl = {
    image_url?: string;
};
export type MetaDescription = {
    meta_description?: string;
};
export type Id = {
    readonly id?: number;
};
export type ParentId = {
    parent_id?: number;
};
export type MetaEmptyFullWritable = {
    [key: string]: unknown;
};
export type DetailedErrorsWritable = {
    [key: string]: unknown;
};
export type CategoryWritable = ParentId & Name & Description & Views & SortOrder & PageTitle & MetaKeywords & MetaDescription & LayoutFile & ImageUrl & IsVisible & SearchKeywords & DefaultProductSort & {
    url?: Url;
};
export type Beta4DetailedErrorsWritable = {
    [key: string]: unknown;
};
export type Accept = string;
export type ContentType = string;
export type DeleteTreeCategoriesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'category_uuid:in'?: string;
        'category_id:in'?: string;
        'tree_id:in'?: string;
        'parent_id:in'?: string;
    };
    url: '/catalog/trees/categories';
};
export type DeleteTreeCategoriesErrors = {
    400: ErrorRequest;
    500: ErrorRequest;
};
export type DeleteTreeCategoriesError = DeleteTreeCategoriesErrors[keyof DeleteTreeCategoriesErrors];
export type DeleteTreeCategoriesResponses = {
    204: SuccessNoContentResponse;
};
export type DeleteTreeCategoriesResponse = DeleteTreeCategoriesResponses[keyof DeleteTreeCategoriesResponses];
export type GetAllCategoriesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'category_uuid:in'?: string;
        'category_uuid:not_in'?: string;
        'category_id:in'?: string;
        'category_id:not_in'?: string;
        'tree_id:in'?: string;
        'tree_id:not_in'?: string;
        'parent_id:in'?: string;
        'parent_id:not_in'?: string;
        name?: string;
        'name:like'?: string;
        page_title?: string;
        'page_title:like'?: string;
        keyword?: string;
        is_visible?: boolean;
        page?: number;
        limit?: number;
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/trees/categories';
};
export type GetAllCategoriesErrors = {
    400: ErrorRequest;
    500: ErrorRequest;
};
export type GetAllCategoriesError = GetAllCategoriesErrors[keyof GetAllCategoriesErrors];
export type GetAllCategoriesResponses = {
    200: {
        data?: Array<Category>;
        meta?: MetaPagination;
    };
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
    422: ErrorResponse;
    500: ErrorRequest;
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
    422: ErrorResponse;
    500: ErrorRequest;
};
export type UpdateCategoriesError = UpdateCategoriesErrors[keyof UpdateCategoriesErrors];
export type UpdateCategoriesResponses = {
    200: unknown;
    204: SuccessNoContentResponse;
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
        'id:in'?: string;
    };
    url: '/catalog/trees';
};
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
        'id:in'?: string;
        'channel_id:in'?: string;
    };
    url: '/catalog/trees';
};
export type GetCategoryTreesResponses = {
    200: {
        data?: Array<Tree>;
        meta?: MetaPaginationObject;
    };
};
export type GetCategoryTreesResponse = GetCategoryTreesResponses[keyof GetCategoryTreesResponses];
export type UpsertCategoryTreesData = {
    body: Array<TreeReq>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/catalog/trees';
};
export type UpsertCategoryTreesErrors = {
    422: Beta4ErrorResponse;
};
export type UpsertCategoryTreesError = UpsertCategoryTreesErrors[keyof UpsertCategoryTreesErrors];
export type UpsertCategoryTreesResponses = {
    200: {
        data?: Array<Tree>;
        meta?: MetaEmptyFull;
    };
};
export type UpsertCategoryTreesResponse = UpsertCategoryTreesResponses[keyof UpsertCategoryTreesResponses];
export type GetCategoryTreeByTreeIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        tree_id: string;
    };
    query?: {
        depth?: number;
    };
    url: '/catalog/trees/{tree_id}/categories';
};
export type GetCategoryTreeByTreeIdErrors = {
    404: Beta4ErrorResponse;
};
export type GetCategoryTreeByTreeIdError = GetCategoryTreeByTreeIdErrors[keyof GetCategoryTreeByTreeIdErrors];
export type GetCategoryTreeByTreeIdResponses = {
    200: {
        data?: Array<CategoryNode>;
        meta?: MetaEmptyFull;
    };
};
export type GetCategoryTreeByTreeIdResponse = GetCategoryTreeByTreeIdResponses[keyof GetCategoryTreeByTreeIdResponses];
