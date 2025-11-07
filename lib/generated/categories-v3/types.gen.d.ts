export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type CategoryFull = {
    readonly id?: number;
    parent_id?: number;
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
    default_product_sort?: 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
    image_url?: string;
    custom_url?: CustomUrlFull;
};
export type MetafieldBase = {
    key: string;
    value: string;
    namespace: string;
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type CustomUrlFull = {
    url?: string;
    is_customized?: boolean;
};
export type MetaCollectionFull = {
    pagination?: PaginationFull;
};
export type PaginationFull = {
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
export type MetaEmptyFull = {
    [key: string]: unknown;
};
export type ErrorBase = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type MetafieldFull = {
    readonly id?: number;
} & MetafieldBase & {
    resource_type?: 'category' | 'brand' | 'product' | 'variant';
    resource_id?: number;
    readonly date_created?: string;
    readonly date_modified?: string;
};
export type ProductSortOrder = {
    product_id: number;
    sort_order: number;
};
export type Category = Id & ParentId & Name & Description & Views & SortOrder & PageTitle & MetaKeywords & MetaDescription & LayoutFile & ImageUrl & IsVisible & SearchKeywords & DefaultProductSort & {
    custom_url?: Url;
};
export type Url = {
    url?: string;
    is_customized?: boolean;
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
export type Metafield = {
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    resource_type?: 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
    readonly resource_id?: number;
    id?: number;
    date_created?: string;
    date_modified?: string;
    readonly owner_client_id?: string;
};
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponsePostPut = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponsePartialSuccessPostPut = {
    data?: Array<Metafield>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccessDelete = {
    data?: Array<number>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type WriteCollectionPartialSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type _Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
export type CollectionMeta = {
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
    [key: string]: unknown | {
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
    } | undefined;
};
export type MetafieldBasePost = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetafieldBasePut = {
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
};
export type CategoryFullWritable = {
    parent_id?: number;
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
    default_product_sort?: 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
    image_url?: string;
    custom_url?: CustomUrlFull;
};
export type MetaEmptyFullWritable = {
    [key: string]: unknown;
};
export type MetafieldFullWritable = MetafieldBase & {
    resource_type?: 'category' | 'brand' | 'product' | 'variant';
    resource_id?: number;
};
export type CategoryWritable = ParentId & Name & Description & Views & SortOrder & PageTitle & MetaKeywords & MetaDescription & LayoutFile & ImageUrl & IsVisible & SearchKeywords & DefaultProductSort & {
    custom_url?: Url;
};
export type MetafieldWritable = {
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    resource_type?: 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
    id?: number;
    date_created?: string;
    date_modified?: string;
};
export type ErrorDetailWritable = {
    [key: string]: unknown;
};
export type CategoryIdParam = number;
export type MetafieldIdParam = number;
export type IdMetafieldQueryParam = number;
export type Accept = string;
export type ContentType = string;
export type PageParam = number;
export type SortParam = 'name' | 'id' | 'parent_id' | 'sort_order';
export type MetafieldKeyParam = string;
export type MetafieldKeyInParam = Array<string>;
export type MetafieldNamespaceParam = string;
export type MetafieldNamespaceInParam = Array<string>;
export type LimitParam = number;
export type DirectionParam = 'asc' | 'desc';
export type DateCreatedMin = string;
export type DateCreatedMax = string;
export type DateModifiedMax = string;
export type DateModifiedMin = string;
export type IncludeFieldsParam = Array<string>;
export type IncludeFieldsParamMetafields = Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified'>;
export type ExcludeFieldsParam = Array<string>;
export type KeywordParam = string;
export type IsVisibleParam = boolean;
export type NameParam = string;
export type NameLikeParam = string;
export type PageTitleLikeParam = string;
export type PageTitleParam = string;
export type ParentIdInParam = Array<number>;
export type ParentIdParam = number;
export type ParentIdMinParam = number;
export type ParentIdMaxParam = number;
export type ParentIdGreaterParam = number;
export type ParentIdLessParam = number;
export type IdCategoryQueryParam = number;
export type IdInParam = Array<number>;
export type IdNotInParam = Array<number>;
export type IdMinParam = number;
export type IdMaxParam = number;
export type IdGreaterParam = number;
export type IdLessParam = number;
export type DeleteCategoriesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        id?: number;
        'id:in'?: Array<number>;
        'id:not_in'?: Array<number>;
        'id:min'?: number;
        'id:max'?: number;
        'id:greater'?: number;
        'id:less'?: number;
        name?: string;
        parent_id?: number;
        page_title?: string;
        keyword?: string;
        is_visible?: boolean;
        'name:like'?: string;
        'parent_id:in'?: Array<number>;
        'parent_id:min'?: number;
        'parent_id:max'?: number;
        'parent_id:greater'?: number;
        'parent_id:less'?: number;
        'page_title:like'?: string;
    };
    url: '/catalog/categories';
};
export type DeleteCategoriesResponses = {
    204: void;
};
export type DeleteCategoriesResponse = DeleteCategoriesResponses[keyof DeleteCategoriesResponses];
export type GetCategoriesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        id?: number;
        'id:in'?: Array<number>;
        'id:not_in'?: Array<number>;
        'id:min'?: number;
        'id:max'?: number;
        'id:greater'?: number;
        'id:less'?: number;
        name?: string;
        'name:like'?: string;
        parent_id?: number;
        'parent_id:in'?: Array<number>;
        'parent_id:min'?: number;
        'parent_id:max'?: number;
        'parent_id:greater'?: number;
        'parent_id:less'?: number;
        page_title?: string;
        'page_title:like'?: string;
        keyword?: string;
        is_visible?: boolean;
        sort?: 'name' | 'id' | 'parent_id' | 'sort_order';
        page?: number;
        limit?: number;
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/categories';
};
export type GetCategoriesResponses = {
    200: {
        data?: Array<Category>;
        meta?: MetaCollectionFull;
    };
};
export type GetCategoriesResponse = GetCategoriesResponses[keyof GetCategoriesResponses];
export type CreateCategoryData = {
    body: {
        parent_id: number;
        name: string;
        description?: string;
        views?: number;
        sort_order?: number;
        page_title?: string;
        search_keywords?: string;
        meta_keywords?: Array<string>;
        meta_description?: string;
        layout_file?: string;
        is_visible?: boolean;
        default_product_sort?: 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
        image_url?: string;
        custom_url?: {
            url?: string;
            is_customized?: boolean;
        };
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/catalog/categories';
};
export type CreateCategoryErrors = {
    409: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
    422: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
};
export type CreateCategoryError = CreateCategoryErrors[keyof CreateCategoryErrors];
export type CreateCategoryResponses = {
    200: {
        data?: CategoryFull;
        meta?: MetaEmptyFull;
    };
    207: ErrorBase;
};
export type CreateCategoryResponse = CreateCategoryResponses[keyof CreateCategoryResponses];
export type DeleteCategoryData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
    };
    query?: never;
    url: '/catalog/categories/{category_id}';
};
export type DeleteCategoryResponses = {
    204: void;
};
export type DeleteCategoryResponse = DeleteCategoryResponses[keyof DeleteCategoryResponses];
export type GetCategoryData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/categories/{category_id}';
};
export type GetCategoryErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetCategoryError = GetCategoryErrors[keyof GetCategoryErrors];
export type GetCategoryResponses = {
    200: {
        data?: CategoryFull;
        meta?: MetaEmptyFull;
    };
};
export type GetCategoryResponse = GetCategoryResponses[keyof GetCategoryResponses];
export type UpdateCategoryData = {
    body: {
        readonly id?: number;
        parent_id: number;
        name: string;
        description?: string;
        views?: number;
        sort_order?: number;
        page_title?: string;
        search_keywords?: string;
        meta_keywords?: Array<string>;
        meta_description?: string;
        layout_file?: string;
        is_visible?: boolean;
        default_product_sort?: 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
        image_url?: string;
        custom_url?: {
            url?: string;
            is_customized?: boolean;
        };
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        category_id: number;
    };
    query?: never;
    url: '/catalog/categories/{category_id}';
};
export type UpdateCategoryErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
    409: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
    422: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
};
export type UpdateCategoryError = UpdateCategoryErrors[keyof UpdateCategoryErrors];
export type UpdateCategoryResponses = {
    200: {
        data?: {
            readonly id?: number;
            parent_id?: number;
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
            default_product_sort?: 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
            image_url?: string;
            custom_url?: {
                url?: string;
                is_customized?: boolean;
            };
        };
        meta?: {
            [key: string]: unknown;
        };
    };
    207: ErrorBase;
};
export type UpdateCategoryResponse = UpdateCategoryResponses[keyof UpdateCategoryResponses];
export type GetCategoryMetafieldsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
    };
    query?: {
        id?: number;
        'id:in'?: Array<number>;
        'id:not_in'?: Array<number>;
        'id:min'?: number;
        'id:max'?: number;
        'id:greater'?: number;
        'id:less'?: number;
        key?: string;
        namespace?: string;
        page?: number;
        limit?: number;
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/categories/{category_id}/metafields';
};
export type GetCategoryMetafieldsResponses = {
    200: {
        data?: Array<MetafieldFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetCategoryMetafieldsResponse = GetCategoryMetafieldsResponses[keyof GetCategoryMetafieldsResponses];
export type CreateCategoryMetafieldData = {
    body: MetafieldBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        category_id: number;
    };
    query?: never;
    url: '/catalog/categories/{category_id}/metafields';
};
export type CreateCategoryMetafieldErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    409: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
    422: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
};
export type CreateCategoryMetafieldError = CreateCategoryMetafieldErrors[keyof CreateCategoryMetafieldErrors];
export type CreateCategoryMetafieldResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type CreateCategoryMetafieldResponse = CreateCategoryMetafieldResponses[keyof CreateCategoryMetafieldResponses];
export type DeleteCategoryMetafieldData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
        metafield_id: number;
    };
    query?: never;
    url: '/catalog/categories/{category_id}/metafields/{metafield_id}';
};
export type DeleteCategoryMetafieldErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type DeleteCategoryMetafieldError = DeleteCategoryMetafieldErrors[keyof DeleteCategoryMetafieldErrors];
export type DeleteCategoryMetafieldResponses = {
    204: void;
};
export type DeleteCategoryMetafieldResponse = DeleteCategoryMetafieldResponses[keyof DeleteCategoryMetafieldResponses];
export type GetCategoryMetafieldData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
        metafield_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/categories/{category_id}/metafields/{metafield_id}';
};
export type GetCategoryMetafieldErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetCategoryMetafieldError = GetCategoryMetafieldErrors[keyof GetCategoryMetafieldErrors];
export type GetCategoryMetafieldResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type GetCategoryMetafieldResponse = GetCategoryMetafieldResponses[keyof GetCategoryMetafieldResponses];
export type UpdateCategoryMetafieldData = {
    body: MetafieldBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        category_id: number;
        metafield_id: number;
    };
    query?: never;
    url: '/catalog/categories/{category_id}/metafields/{metafield_id}';
};
export type UpdateCategoryMetafieldErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type UpdateCategoryMetafieldError = UpdateCategoryMetafieldErrors[keyof UpdateCategoryMetafieldErrors];
export type UpdateCategoryMetafieldResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type UpdateCategoryMetafieldResponse = UpdateCategoryMetafieldResponses[keyof UpdateCategoryMetafieldResponses];
export type DeleteCategoryImageData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
    };
    query?: never;
    url: '/catalog/categories/{category_id}/image';
};
export type DeleteCategoryImageErrors = {
    401: string;
    403: _Error;
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type DeleteCategoryImageError = DeleteCategoryImageErrors[keyof DeleteCategoryImageErrors];
export type DeleteCategoryImageResponses = {
    204: void;
};
export type DeleteCategoryImageResponse = DeleteCategoryImageResponses[keyof DeleteCategoryImageResponses];
export type CreateCategoryImageData = {
    body?: {
        image_file?: Blob | File;
    };
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
    };
    query?: never;
    url: '/catalog/categories/{category_id}/image';
};
export type CreateCategoryImageErrors = {
    400: {
        [key: string]: unknown;
    };
    401: string;
    403: _Error;
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
    422: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
};
export type CreateCategoryImageError = CreateCategoryImageErrors[keyof CreateCategoryImageErrors];
export type CreateCategoryImageResponses = {
    200: {
        data?: {
            image_url?: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type CreateCategoryImageResponse = CreateCategoryImageResponses[keyof CreateCategoryImageResponses];
export type GetCategorySortOrdersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
    };
    query?: {
        page?: number;
    };
    url: '/catalog/categories/{category_id}/products/sort-order';
};
export type GetCategorySortOrdersErrors = {
    401: string;
    403: _Error;
    404: ErrorBase;
};
export type GetCategorySortOrdersError = GetCategorySortOrdersErrors[keyof GetCategorySortOrdersErrors];
export type GetCategorySortOrdersResponses = {
    200: {
        data?: Array<ProductSortOrder>;
        meta?: MetaCollectionFull;
    };
};
export type GetCategorySortOrdersResponse = GetCategorySortOrdersResponses[keyof GetCategorySortOrdersResponses];
export type UpdateCategorySortOrdersData = {
    body?: Array<ProductSortOrder>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        category_id: number;
    };
    query?: {
        page?: number;
    };
    url: '/catalog/categories/{category_id}/products/sort-order';
};
export type UpdateCategorySortOrdersErrors = {
    401: string;
    403: _Error;
    404: ErrorBase;
    415: string;
    422: ErrorBase;
};
export type UpdateCategorySortOrdersError = UpdateCategorySortOrdersErrors[keyof UpdateCategorySortOrdersErrors];
export type UpdateCategorySortOrdersResponses = {
    200: Array<ProductSortOrder>;
};
export type UpdateCategorySortOrdersResponse = UpdateCategorySortOrdersResponses[keyof UpdateCategorySortOrdersResponses];
export type DeleteCategoriesMetafieldsData = {
    body?: Array<number>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/catalog/categories/metafields';
};
export type DeleteCategoriesMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessDelete;
};
export type DeleteCategoriesMetafieldsError = DeleteCategoriesMetafieldsErrors[keyof DeleteCategoriesMetafieldsErrors];
export type DeleteCategoriesMetafieldsResponses = {
    200: MetaFieldCollectionDeleteResponseSuccess;
};
export type DeleteCategoriesMetafieldsResponse = DeleteCategoriesMetafieldsResponses[keyof DeleteCategoriesMetafieldsResponses];
export type GetCategoriesMetafieldsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        key?: string;
        'key:in'?: Array<string>;
        namespace?: string;
        'namespace:in'?: Array<string>;
        direction?: 'asc' | 'desc';
        include_fields?: Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified'>;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
        'date_created:min'?: string;
        'date_created:max'?: string;
    };
    url: '/catalog/categories/metafields';
};
export type GetCategoriesMetafieldsResponses = {
    200: MetaFieldCollectionResponse;
};
export type GetCategoriesMetafieldsResponse = GetCategoriesMetafieldsResponses[keyof GetCategoriesMetafieldsResponses];
export type CreateCategoriesMetafieldsData = {
    body?: Array<MetafieldBasePost & {
        resource_id: number;
    }>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/catalog/categories/metafields';
};
export type CreateCategoriesMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateCategoriesMetafieldsError = CreateCategoriesMetafieldsErrors[keyof CreateCategoriesMetafieldsErrors];
export type CreateCategoriesMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type CreateCategoriesMetafieldsResponse = CreateCategoriesMetafieldsResponses[keyof CreateCategoriesMetafieldsResponses];
export type UpdateCategoriesMetafieldsData = {
    body?: Array<MetafieldBasePut & {
        id: number;
    }>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/catalog/categories/metafields';
};
export type UpdateCategoriesMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateCategoriesMetafieldsError = UpdateCategoriesMetafieldsErrors[keyof UpdateCategoriesMetafieldsErrors];
export type UpdateCategoriesMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type UpdateCategoriesMetafieldsResponse = UpdateCategoriesMetafieldsResponses[keyof UpdateCategoriesMetafieldsResponses];
