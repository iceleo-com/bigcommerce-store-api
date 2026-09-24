export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type CatalogCategoriesGetParametersSort = 'name' | 'id' | 'parent_id' | 'sort_order';
export type CategoryDefaultProductSort = 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
export type Url = {
    url?: string;
    is_customized?: boolean;
};
export type Category = {
    id?: number;
    parent_id?: number;
    name?: string;
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
    default_product_sort?: CategoryDefaultProductSort;
    custom_url?: Url;
};
export type PaginationFullLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type PaginationFull = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: PaginationFullLinks;
};
export type MetaCollectionFull = {
    pagination?: PaginationFull;
};
export type CategoriesGetCategoriesResponse200 = {
    data?: Array<Category>;
    meta?: MetaCollectionFull;
};
export type CatalogCategoriesPostRequestBodyContentApplicationJsonSchemaDefaultProductSort = 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
export type CatalogCategoriesPostRequestBodyContentApplicationJsonSchemaCustomUrl = {
    url?: string;
    is_customized?: boolean;
};
export type CategoryFullDefaultProductSort = 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
export type CustomUrlFull = {
    url?: string;
    is_customized?: boolean;
};
export type CategoryFull = {
    id?: number;
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
    default_product_sort?: CategoryFullDefaultProductSort;
    image_url?: string;
    custom_url?: CustomUrlFull;
};
export type MetaEmptyFull = {
    [key: string]: unknown;
};
export type CategoriesCreateCategoryResponse200 = {
    data?: CategoryFull;
    meta?: MetaEmptyFull;
};
export type CatalogCategoriesPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateCategoryRequestConflictError = {
    errors?: CatalogCategoriesPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CreateCategoryRequestUnprocessableEntityError = {
    errors?: CatalogCategoriesPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CategoriesGetCategoryResponse200 = {
    data?: CategoryFull;
    meta?: MetaEmptyFull;
};
export type GetCategoryRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogCategoriesCategoryIdPutRequestBodyContentApplicationJsonSchemaDefaultProductSort = 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
export type CatalogCategoriesCategoryIdPutRequestBodyContentApplicationJsonSchemaCustomUrl = {
    url?: string;
    is_customized?: boolean;
};
export type CatalogCategoriesCategoryIdPutResponsesContentApplicationJsonSchemaDataDefaultProductSort = 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
export type CatalogCategoriesCategoryIdPutResponsesContentApplicationJsonSchemaDataCustomUrl = {
    url?: string;
    is_customized?: boolean;
};
export type CatalogCategoriesCategoryIdPutResponsesContentApplicationJsonSchemaData = {
    id?: number;
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
    default_product_sort?: CatalogCategoriesCategoryIdPutResponsesContentApplicationJsonSchemaDataDefaultProductSort;
    image_url?: string;
    custom_url?: CatalogCategoriesCategoryIdPutResponsesContentApplicationJsonSchemaDataCustomUrl;
};
export type CatalogCategoriesCategoryIdPutResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type CategoriesUpdateCategoryResponse200 = {
    data?: CatalogCategoriesCategoryIdPutResponsesContentApplicationJsonSchemaData;
    meta?: CatalogCategoriesCategoryIdPutResponsesContentApplicationJsonSchemaMeta;
};
export type UpdateCategoryRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogCategoriesCategoryIdPutResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type UpdateCategoryRequestConflictError = {
    errors?: CatalogCategoriesCategoryIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type UpdateCategoryRequestUnprocessableEntityError = {
    errors?: CatalogCategoriesCategoryIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CatalogCategoriesMetafieldsGetParametersDirection = 'asc' | 'desc';
export type CatalogCategoriesMetafieldsGetParametersIncludeFieldsSchemaItems = 'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified';
export type MetafieldPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldResourceType = 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
export type Metafield = {
    permission_set?: MetafieldPermissionSet;
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    resource_type?: MetafieldResourceType;
    resource_id?: number;
    id?: number;
    date_created?: string;
    date_modified?: string;
    owner_client_id?: string;
};
export type CollectionMetaPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type CollectionMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: CollectionMetaPaginationLinks;
};
export type CollectionMeta = {
    pagination?: CollectionMetaPagination;
};
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta & MetafieldCursorPaginationMeta;
};
export type CatalogCategoriesMetafieldsPostRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type CatalogCategoriesMetafieldsPostRequestBodyContentApplicationJsonSchemaItems = {
    permission_set: CatalogCategoriesMetafieldsPostRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description?: string;
    resource_id: number;
};
export type MetaFieldCollectionResponsePostPut = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: CollectionMeta;
};
export type CreateCategoriesMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
export type _Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type WriteCollectionPartialSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionResponsePartialSuccessPostPut = {
    data?: Array<Metafield>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type CatalogCategoriesMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type CatalogCategoriesMetafieldsPutRequestBodyContentApplicationJsonSchemaItems = {
    permission_set?: CatalogCategoriesMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    id: number;
};
export type UpdateCategoriesMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type DeleteCategoriesMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type MetaFieldCollectionResponsePartialSuccessDelete = {
    data?: Array<number>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type CatalogCategoriesCategoryIdImagePostResponsesContentApplicationJsonSchemaData = {
    image_url?: string;
};
export type ImagesCreateCategoryImageResponse200 = {
    data?: CatalogCategoriesCategoryIdImagePostResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type CreateCategoryImageRequestBadRequestError = {
    [key: string]: unknown;
};
export type CreateCategoryImageRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogCategoriesCategoryIdImagePostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateCategoryImageRequestUnprocessableEntityError = {
    errors?: CatalogCategoriesCategoryIdImagePostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type DeleteCategoryImageRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type MetafieldBasePermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldFullResourceType = 'category' | 'brand' | 'product' | 'variant';
export type MetafieldFull = {
    key: string;
    value: string;
    namespace: string;
    permission_set: MetafieldBasePermissionSet;
    description?: string;
    id?: number;
    resource_type?: MetafieldFullResourceType;
    resource_id?: number;
    date_created?: string;
    date_modified?: string;
};
export type MetafieldsGetCategoryMetafieldsResponse200 = {
    data?: Array<MetafieldFull>;
    meta?: MetaCollectionFull & MetafieldCursorPaginationMeta;
};
export type MetafieldBase = {
    key: string;
    value: string;
    namespace: string;
    permission_set: MetafieldBasePermissionSet;
    description?: string;
};
export type MetafieldsCreateCategoryMetafieldResponse200 = {
    data?: MetafieldFull;
    meta?: MetaEmptyFull;
};
export type CreateCategoryMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type CatalogCategoriesCategoryIdMetafieldsPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateCategoryMetafieldRequestConflictError = {
    errors?: CatalogCategoriesCategoryIdMetafieldsPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CreateCategoryMetafieldRequestUnprocessableEntityError = {
    errors?: CatalogCategoriesCategoryIdMetafieldsPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type MetafieldsGetCategoryMetafieldResponse200 = {
    data?: MetafieldFull;
    meta?: MetaEmptyFull;
};
export type GetCategoryMetafieldRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type MetafieldsUpdateCategoryMetafieldResponse200 = {
    data?: MetafieldFull;
    meta?: MetaEmptyFull;
};
export type UpdateCategoryMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type UpdateCategoryMetafieldRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DeleteCategoryMetafieldRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type ProductSortOrder = {
    product_id: number;
    sort_order: number;
};
export type ProductSortOrderFull = {
    product_id: number;
    sort_order: number | null;
};
export type SortOrderGetCategorySortOrdersResponse200 = {
    data?: Array<ProductSortOrderFull>;
    meta?: MetaCollectionFull;
};
export type ErrorBase = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
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
    204: {
        [key: string]: unknown;
    };
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
        sort?: CatalogCategoriesGetParametersSort;
        page?: number;
        limit?: number;
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/categories';
};
export type GetCategoriesResponses = {
    200: CategoriesGetCategoriesResponse200;
};
export type GetCategoriesResponse = GetCategoriesResponses[keyof GetCategoriesResponses];
export type CreateCategoryData = {
    body?: {
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
        default_product_sort?: CatalogCategoriesPostRequestBodyContentApplicationJsonSchemaDefaultProductSort;
        image_url?: string;
        custom_url?: CatalogCategoriesPostRequestBodyContentApplicationJsonSchemaCustomUrl;
    };
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/catalog/categories';
};
export type CreateCategoryErrors = {
    409: CreateCategoryRequestConflictError;
    422: CreateCategoryRequestUnprocessableEntityError;
};
export type CreateCategoryError = CreateCategoryErrors[keyof CreateCategoryErrors];
export type CreateCategoryResponses = {
    200: CategoriesCreateCategoryResponse200;
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
    204: {
        [key: string]: unknown;
    };
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
    404: GetCategoryRequestNotFoundError;
};
export type GetCategoryError = GetCategoryErrors[keyof GetCategoryErrors];
export type GetCategoryResponses = {
    200: CategoriesGetCategoryResponse200;
};
export type GetCategoryResponse = GetCategoryResponses[keyof GetCategoryResponses];
export type UpdateCategoryData = {
    body?: {
        id?: number;
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
        default_product_sort?: CatalogCategoriesCategoryIdPutRequestBodyContentApplicationJsonSchemaDefaultProductSort;
        image_url?: string;
        custom_url?: CatalogCategoriesCategoryIdPutRequestBodyContentApplicationJsonSchemaCustomUrl;
    };
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
    };
    query?: never;
    url: '/catalog/categories/{category_id}';
};
export type UpdateCategoryErrors = {
    404: UpdateCategoryRequestNotFoundError;
    409: UpdateCategoryRequestConflictError;
    422: UpdateCategoryRequestUnprocessableEntityError;
};
export type UpdateCategoryError = UpdateCategoryErrors[keyof UpdateCategoryErrors];
export type UpdateCategoryResponses = {
    200: CategoriesUpdateCategoryResponse200;
};
export type UpdateCategoryResponse = UpdateCategoryResponses[keyof UpdateCategoryResponses];
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
    400: DeleteCategoriesMetafieldsRequestBadRequestError;
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
        direction?: CatalogCategoriesMetafieldsGetParametersDirection;
        include_fields?: Array<CatalogCategoriesMetafieldsGetParametersIncludeFieldsSchemaItems>;
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
    body?: Array<CatalogCategoriesMetafieldsPostRequestBodyContentApplicationJsonSchemaItems>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/catalog/categories/metafields';
};
export type CreateCategoriesMetafieldsErrors = {
    400: CreateCategoriesMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateCategoriesMetafieldsError = CreateCategoriesMetafieldsErrors[keyof CreateCategoriesMetafieldsErrors];
export type CreateCategoriesMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type CreateCategoriesMetafieldsResponse = CreateCategoriesMetafieldsResponses[keyof CreateCategoriesMetafieldsResponses];
export type UpdateCategoriesMetafieldsData = {
    body?: Array<CatalogCategoriesMetafieldsPutRequestBodyContentApplicationJsonSchemaItems>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/catalog/categories/metafields';
};
export type UpdateCategoriesMetafieldsErrors = {
    400: UpdateCategoriesMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateCategoriesMetafieldsError = UpdateCategoriesMetafieldsErrors[keyof UpdateCategoriesMetafieldsErrors];
export type UpdateCategoriesMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type UpdateCategoriesMetafieldsResponse = UpdateCategoriesMetafieldsResponses[keyof UpdateCategoriesMetafieldsResponses];
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
    403: _Error;
    404: DeleteCategoryImageRequestNotFoundError;
};
export type DeleteCategoryImageError = DeleteCategoryImageErrors[keyof DeleteCategoryImageErrors];
export type DeleteCategoryImageResponses = {
    204: {
        [key: string]: unknown;
    };
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
    400: CreateCategoryImageRequestBadRequestError;
    403: _Error;
    404: CreateCategoryImageRequestNotFoundError;
    422: CreateCategoryImageRequestUnprocessableEntityError;
};
export type CreateCategoryImageError = CreateCategoryImageErrors[keyof CreateCategoryImageErrors];
export type CreateCategoryImageResponses = {
    200: ImagesCreateCategoryImageResponse200;
};
export type CreateCategoryImageResponse = CreateCategoryImageResponses[keyof CreateCategoryImageResponses];
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
    200: MetafieldsGetCategoryMetafieldsResponse200;
};
export type GetCategoryMetafieldsResponse = GetCategoryMetafieldsResponses[keyof GetCategoryMetafieldsResponses];
export type CreateCategoryMetafieldData = {
    body?: MetafieldBase;
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
    };
    query?: never;
    url: '/catalog/categories/{category_id}/metafields';
};
export type CreateCategoryMetafieldErrors = {
    400: CreateCategoryMetafieldRequestBadRequestError;
    409: CreateCategoryMetafieldRequestConflictError;
    422: CreateCategoryMetafieldRequestUnprocessableEntityError;
};
export type CreateCategoryMetafieldError = CreateCategoryMetafieldErrors[keyof CreateCategoryMetafieldErrors];
export type CreateCategoryMetafieldResponses = {
    200: MetafieldsCreateCategoryMetafieldResponse200;
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
    404: DeleteCategoryMetafieldRequestNotFoundError;
};
export type DeleteCategoryMetafieldError = DeleteCategoryMetafieldErrors[keyof DeleteCategoryMetafieldErrors];
export type DeleteCategoryMetafieldResponses = {
    204: {
        [key: string]: unknown;
    };
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
    404: GetCategoryMetafieldRequestNotFoundError;
};
export type GetCategoryMetafieldError = GetCategoryMetafieldErrors[keyof GetCategoryMetafieldErrors];
export type GetCategoryMetafieldResponses = {
    200: MetafieldsGetCategoryMetafieldResponse200;
};
export type GetCategoryMetafieldResponse = GetCategoryMetafieldResponses[keyof GetCategoryMetafieldResponses];
export type UpdateCategoryMetafieldData = {
    body?: MetafieldBase;
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
export type UpdateCategoryMetafieldErrors = {
    400: UpdateCategoryMetafieldRequestBadRequestError;
    404: UpdateCategoryMetafieldRequestNotFoundError;
};
export type UpdateCategoryMetafieldError = UpdateCategoryMetafieldErrors[keyof UpdateCategoryMetafieldErrors];
export type UpdateCategoryMetafieldResponses = {
    200: MetafieldsUpdateCategoryMetafieldResponse200;
};
export type UpdateCategoryMetafieldResponse = UpdateCategoryMetafieldResponses[keyof UpdateCategoryMetafieldResponses];
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
    403: _Error;
    404: ErrorBase;
};
export type GetCategorySortOrdersError = GetCategorySortOrdersErrors[keyof GetCategorySortOrdersErrors];
export type GetCategorySortOrdersResponses = {
    200: SortOrderGetCategorySortOrdersResponse200;
};
export type GetCategorySortOrdersResponse = GetCategorySortOrdersResponses[keyof GetCategorySortOrdersResponses];
export type UpdateCategorySortOrdersData = {
    body?: Array<ProductSortOrder>;
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
export type UpdateCategorySortOrdersErrors = {
    403: _Error;
    404: ErrorBase;
    422: ErrorBase;
};
export type UpdateCategorySortOrdersError = UpdateCategorySortOrdersErrors[keyof UpdateCategorySortOrdersErrors];
export type UpdateCategorySortOrdersResponses = {
    200: Array<ProductSortOrderFull>;
};
export type UpdateCategorySortOrdersResponse = UpdateCategorySortOrdersResponses[keyof UpdateCategorySortOrdersResponses];
export type MetafieldCursorPaginationLinks = {
    previous?: string;
    next?: string;
};
export type MetafieldCursorPagination = {
    count?: number;
    per_page?: number;
    start_cursor?: string;
    end_cursor?: string;
    links?: MetafieldCursorPaginationLinks;
};
export type MetafieldCursorPaginationMeta = {
    cursor_pagination?: MetafieldCursorPagination;
};
