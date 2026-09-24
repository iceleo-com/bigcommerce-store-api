export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type CatalogBrandsGetParametersSort = 'name';
export type CatalogBrandsGetParametersDirection = 'asc' | 'desc';
export type CustomUrlFull = {
    url?: string;
    is_customized?: boolean;
};
export type BrandFull = {
    id?: number;
    name: string;
    page_title?: string;
    meta_keywords?: Array<string>;
    meta_description?: string;
    search_keywords?: string;
    image_url?: string;
    custom_url?: CustomUrlFull;
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
export type BrandsGetBrandsResponse200 = {
    data?: Array<BrandFull>;
    meta?: MetaCollectionFull;
};
export type ErrorBase = {
    status?: number;
    title?: string;
    type?: string;
};
export type CatalogBrandsPostRequestBodyContentApplicationJsonSchemaCustomUrl = {
    url?: string;
    is_customized?: boolean;
};
export type CatalogBrandsPostResponsesContentApplicationJsonSchemaDataCustomUrl = {
    url?: string;
    is_customized?: boolean;
};
export type CatalogBrandsPostResponsesContentApplicationJsonSchemaData = {
    id?: number;
    name?: string;
    page_title?: string;
    meta_keywords?: Array<string>;
    meta_description?: string;
    search_keywords?: string;
    image_url?: string;
    custom_url?: CatalogBrandsPostResponsesContentApplicationJsonSchemaDataCustomUrl;
};
export type MetaEmptyFull = {
    [key: string]: unknown;
};
export type BrandsCreateBrandResponse200 = {
    data?: CatalogBrandsPostResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type NotFoundError = {
    status: number;
    title: string;
    type: string;
};
export type CatalogBrandsPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateBrandRequestConflictError = {
    errors?: CatalogBrandsPostResponsesContentApplicationJsonSchemaErrors;
    status?: number;
    title?: string;
    type?: string;
};
export type CreateBrandRequestUnprocessableEntityError = {
    errors?: CatalogBrandsPostResponsesContentApplicationJsonSchemaErrors;
    status?: number;
    title?: string;
    type?: string;
};
export type BrandsGetBrandResponse200 = {
    data?: BrandFull;
    meta?: MetaEmptyFull;
};
export type GetBrandRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type ConflictErrors = {
    [key: string]: unknown;
};
export type Conflict = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ConflictErrors;
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
export type CatalogBrandsBrandIdPutRequestBodyContentApplicationJsonSchemaCustomUrl = {
    url?: string;
    is_customized?: boolean;
};
export type CatalogBrandsBrandIdPutResponsesContentApplicationJsonSchemaDataCustomUrl = {
    url?: string;
    is_customized?: boolean;
};
export type CatalogBrandsBrandIdPutResponsesContentApplicationJsonSchemaData = {
    id?: number;
    name: string;
    page_title?: string;
    meta_keywords?: Array<string>;
    meta_description?: string;
    search_keywords?: string;
    image_url?: string;
    custom_url?: CatalogBrandsBrandIdPutResponsesContentApplicationJsonSchemaDataCustomUrl;
};
export type BrandsUpdateBrandResponse200 = {
    data?: CatalogBrandsBrandIdPutResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type UpdateBrandRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
};
export type CatalogBrandsBrandIdPutResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type UpdateBrandRequestConflictError = {
    errors?: CatalogBrandsBrandIdPutResponsesContentApplicationJsonSchemaErrors;
    status?: number;
    title?: string;
    type?: string;
};
export type UpdateBrandRequestUnprocessableEntityError = {
    errors?: CatalogBrandsBrandIdPutResponsesContentApplicationJsonSchemaErrors;
    status?: number;
    title?: string;
    type?: string;
};
export type CatalogBrandsMetafieldsGetParametersDirection = 'asc' | 'desc';
export type CatalogBrandsMetafieldsGetParametersIncludeFieldsSchemaItems = 'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified';
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
    meta?: CollectionMeta;
};
export type GetBrandsMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    errors?: unknown;
};
export type CatalogBrandsMetafieldsPostRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type CatalogBrandsMetafieldsPostRequestBodyContentApplicationJsonSchemaItems = {
    permission_set: CatalogBrandsMetafieldsPostRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
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
export type CreateBrandsMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
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
export type CatalogBrandsMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type CatalogBrandsMetafieldsPutRequestBodyContentApplicationJsonSchemaItems = {
    permission_set?: CatalogBrandsMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    id: number;
};
export type CatalogBrandsMetafieldsPutResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type UpdateBrandsMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    errors?: CatalogBrandsMetafieldsPutResponsesContentApplicationJsonSchemaErrors;
};
export type UpdateBrandsMetafieldsRequestUnprocessableEntityError = {
    status?: number;
    title?: string;
    type?: string;
    errors?: CatalogBrandsMetafieldsPutResponsesContentApplicationJsonSchemaErrors;
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
export type DeleteBrandsMetafieldsRequestBadRequestError = {
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
export type CatalogBrandsBrandIdImagePostResponsesContentApplicationJsonSchemaData = {
    image_url?: string;
};
export type ImagesCreateBrandImageResponse200 = {
    data?: CatalogBrandsBrandIdImagePostResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type CreateBrandImageRequestBadRequestError = {
    [key: string]: unknown;
};
export type CreateBrandImageRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogBrandsBrandIdImagePostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateBrandImageRequestUnprocessableEntityError = {
    errors?: CatalogBrandsBrandIdImagePostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
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
    owner_client_id?: string;
};
export type MetafieldsGetBrandMetafieldsResponse200 = {
    data?: Array<MetafieldFull>;
    meta?: MetaCollectionFull;
};
export type MetafieldBase = {
    key: string;
    value: string;
    namespace: string;
    permission_set: MetafieldBasePermissionSet;
    description?: string;
};
export type CatalogBrandsBrandIdMetafieldsPostResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type MetafieldsCreateBrandMetafieldResponse200 = {
    data?: MetafieldFull;
    meta?: CatalogBrandsBrandIdMetafieldsPostResponsesContentApplicationJsonSchemaMeta;
};
export type CreateBrandMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type CatalogBrandsBrandIdMetafieldsPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateBrandMetafieldRequestConflictError = {
    errors?: CatalogBrandsBrandIdMetafieldsPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CreateBrandMetafieldRequestUnprocessableEntityError = {
    errors?: CatalogBrandsBrandIdMetafieldsPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type MetafieldsGetBrandMetafieldResponse200 = {
    data?: MetafieldFull;
    meta?: MetaEmptyFull;
};
export type GetBrandMetafieldRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type MetafieldBasePutPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldBasePut = {
    permission_set?: MetafieldBasePutPermissionSet;
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
};
export type MetafieldsUpdateBrandMetafieldResponse200 = {
    data?: MetafieldFull;
    meta?: MetaEmptyFull;
};
export type UpdateBrandMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type UpdateBrandMetafieldRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DeleteBrandMetafieldRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DeleteBrandsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        name: string;
        page_title?: string;
    };
    url: '/catalog/brands';
};
export type DeleteBrandsErrors = {
    403: ErrorBase;
    422: ErrorBase;
};
export type DeleteBrandsError = DeleteBrandsErrors[keyof DeleteBrandsErrors];
export type DeleteBrandsResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteBrandsResponse = DeleteBrandsResponses[keyof DeleteBrandsResponses];
export type GetBrandsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        id?: number;
        'id:in'?: Array<number>;
        'id:not_in'?: Array<number>;
        'id:min'?: Array<number>;
        'id:max'?: Array<number>;
        'id:greater'?: Array<number>;
        'id:less'?: Array<number>;
        name?: string;
        'name:like'?: string;
        page_title?: string;
        page?: number;
        limit?: number;
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
        sort?: CatalogBrandsGetParametersSort;
        direction?: CatalogBrandsGetParametersDirection;
    };
    url: '/catalog/brands';
};
export type GetBrandsErrors = {
    403: ErrorBase;
};
export type GetBrandsError = GetBrandsErrors[keyof GetBrandsErrors];
export type GetBrandsResponses = {
    200: BrandsGetBrandsResponse200;
};
export type GetBrandsResponse = GetBrandsResponses[keyof GetBrandsResponses];
export type CreateBrandData = {
    body?: {
        name: string;
        page_title?: string;
        meta_keywords?: Array<string>;
        meta_description?: string;
        search_keywords?: string;
        image_url?: string;
        custom_url?: CatalogBrandsPostRequestBodyContentApplicationJsonSchemaCustomUrl;
    };
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/catalog/brands';
};
export type CreateBrandErrors = {
    403: ErrorBase;
    404: NotFoundError;
    409: CreateBrandRequestConflictError;
    422: CreateBrandRequestUnprocessableEntityError;
};
export type CreateBrandError = CreateBrandErrors[keyof CreateBrandErrors];
export type CreateBrandResponses = {
    200: BrandsCreateBrandResponse200;
};
export type CreateBrandResponse = CreateBrandResponses[keyof CreateBrandResponses];
export type DeleteBrandData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
    };
    query?: never;
    url: '/catalog/brands/{brand_id}';
};
export type DeleteBrandErrors = {
    403: ErrorBase;
    404: NotFoundError;
};
export type DeleteBrandError = DeleteBrandErrors[keyof DeleteBrandErrors];
export type DeleteBrandResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteBrandResponse = DeleteBrandResponses[keyof DeleteBrandResponses];
export type GetBrandData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/brands/{brand_id}';
};
export type GetBrandErrors = {
    403: ErrorBase;
    404: GetBrandRequestNotFoundError;
    409: Conflict;
    422: _Error;
};
export type GetBrandError = GetBrandErrors[keyof GetBrandErrors];
export type GetBrandResponses = {
    200: BrandsGetBrandResponse200;
};
export type GetBrandResponse = GetBrandResponses[keyof GetBrandResponses];
export type UpdateBrandData = {
    body?: {
        id?: number;
        name: string;
        page_title?: string;
        meta_keywords?: Array<string>;
        meta_description?: string;
        search_keywords?: string;
        image_url?: string;
        custom_url?: CatalogBrandsBrandIdPutRequestBodyContentApplicationJsonSchemaCustomUrl;
    };
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
    };
    query?: never;
    url: '/catalog/brands/{brand_id}';
};
export type UpdateBrandErrors = {
    403: ErrorBase;
    404: UpdateBrandRequestNotFoundError;
    409: UpdateBrandRequestConflictError;
    422: UpdateBrandRequestUnprocessableEntityError;
};
export type UpdateBrandError = UpdateBrandErrors[keyof UpdateBrandErrors];
export type UpdateBrandResponses = {
    200: BrandsUpdateBrandResponse200;
};
export type UpdateBrandResponse = UpdateBrandResponses[keyof UpdateBrandResponses];
export type DeleteBrandsMetafieldsData = {
    body?: Array<number>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/catalog/brands/metafields';
};
export type DeleteBrandsMetafieldsErrors = {
    400: DeleteBrandsMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessDelete;
};
export type DeleteBrandsMetafieldsError = DeleteBrandsMetafieldsErrors[keyof DeleteBrandsMetafieldsErrors];
export type DeleteBrandsMetafieldsResponses = {
    200: MetaFieldCollectionDeleteResponseSuccess;
};
export type DeleteBrandsMetafieldsResponse = DeleteBrandsMetafieldsResponses[keyof DeleteBrandsMetafieldsResponses];
export type GetBrandsMetafieldsData = {
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
        direction?: CatalogBrandsMetafieldsGetParametersDirection;
        include_fields?: Array<CatalogBrandsMetafieldsGetParametersIncludeFieldsSchemaItems>;
    };
    url: '/catalog/brands/metafields';
};
export type GetBrandsMetafieldsErrors = {
    400: GetBrandsMetafieldsRequestBadRequestError;
};
export type GetBrandsMetafieldsError = GetBrandsMetafieldsErrors[keyof GetBrandsMetafieldsErrors];
export type GetBrandsMetafieldsResponses = {
    200: MetaFieldCollectionResponse;
};
export type GetBrandsMetafieldsResponse = GetBrandsMetafieldsResponses[keyof GetBrandsMetafieldsResponses];
export type CreateBrandsMetafieldsData = {
    body?: Array<CatalogBrandsMetafieldsPostRequestBodyContentApplicationJsonSchemaItems>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/catalog/brands/metafields';
};
export type CreateBrandsMetafieldsErrors = {
    400: CreateBrandsMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateBrandsMetafieldsError = CreateBrandsMetafieldsErrors[keyof CreateBrandsMetafieldsErrors];
export type CreateBrandsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type CreateBrandsMetafieldsResponse = CreateBrandsMetafieldsResponses[keyof CreateBrandsMetafieldsResponses];
export type UpdateBrandsMetafieldsData = {
    body?: Array<CatalogBrandsMetafieldsPutRequestBodyContentApplicationJsonSchemaItems>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/catalog/brands/metafields';
};
export type UpdateBrandsMetafieldsErrors = {
    400: UpdateBrandsMetafieldsRequestBadRequestError;
    422: UpdateBrandsMetafieldsRequestUnprocessableEntityError;
};
export type UpdateBrandsMetafieldsError = UpdateBrandsMetafieldsErrors[keyof UpdateBrandsMetafieldsErrors];
export type UpdateBrandsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type UpdateBrandsMetafieldsResponse = UpdateBrandsMetafieldsResponses[keyof UpdateBrandsMetafieldsResponses];
export type DeleteBrandImageData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
    };
    query?: never;
    url: '/catalog/brands/{brand_id}/image';
};
export type DeleteBrandImageResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteBrandImageResponse = DeleteBrandImageResponses[keyof DeleteBrandImageResponses];
export type CreateBrandImageData = {
    body?: {
        image_file?: Blob | File;
    };
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
    };
    query?: never;
    url: '/catalog/brands/{brand_id}/image';
};
export type CreateBrandImageErrors = {
    400: CreateBrandImageRequestBadRequestError;
    404: CreateBrandImageRequestNotFoundError;
    422: CreateBrandImageRequestUnprocessableEntityError;
};
export type CreateBrandImageError = CreateBrandImageErrors[keyof CreateBrandImageErrors];
export type CreateBrandImageResponses = {
    200: ImagesCreateBrandImageResponse200;
};
export type CreateBrandImageResponse = CreateBrandImageResponses[keyof CreateBrandImageResponses];
export type GetBrandMetafieldsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
    };
    query?: {
        id?: number;
        'id:in'?: Array<number>;
        'id:not_in'?: Array<number>;
        'id:min'?: Array<number>;
        'id:max'?: Array<number>;
        'id:greater'?: Array<number>;
        'id:less'?: Array<number>;
        page?: number;
        limit?: number;
        key?: string;
        namespace?: string;
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/brands/{brand_id}/metafields';
};
export type GetBrandMetafieldsResponses = {
    200: MetafieldsGetBrandMetafieldsResponse200;
};
export type GetBrandMetafieldsResponse = GetBrandMetafieldsResponses[keyof GetBrandMetafieldsResponses];
export type CreateBrandMetafieldData = {
    body?: MetafieldBase;
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
    };
    query?: never;
    url: '/catalog/brands/{brand_id}/metafields';
};
export type CreateBrandMetafieldErrors = {
    400: CreateBrandMetafieldRequestBadRequestError;
    409: CreateBrandMetafieldRequestConflictError;
    422: CreateBrandMetafieldRequestUnprocessableEntityError;
};
export type CreateBrandMetafieldError = CreateBrandMetafieldErrors[keyof CreateBrandMetafieldErrors];
export type CreateBrandMetafieldResponses = {
    200: MetafieldsCreateBrandMetafieldResponse200;
};
export type CreateBrandMetafieldResponse = CreateBrandMetafieldResponses[keyof CreateBrandMetafieldResponses];
export type DeleteBrandMetafieldData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
        metafield_id: number;
    };
    query?: never;
    url: '/catalog/brands/{brand_id}/metafields/{metafield_id}';
};
export type DeleteBrandMetafieldErrors = {
    404: DeleteBrandMetafieldRequestNotFoundError;
};
export type DeleteBrandMetafieldError = DeleteBrandMetafieldErrors[keyof DeleteBrandMetafieldErrors];
export type DeleteBrandMetafieldResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteBrandMetafieldResponse = DeleteBrandMetafieldResponses[keyof DeleteBrandMetafieldResponses];
export type GetBrandMetafieldData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
        metafield_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/brands/{brand_id}/metafields/{metafield_id}';
};
export type GetBrandMetafieldErrors = {
    404: GetBrandMetafieldRequestNotFoundError;
};
export type GetBrandMetafieldError = GetBrandMetafieldErrors[keyof GetBrandMetafieldErrors];
export type GetBrandMetafieldResponses = {
    200: MetafieldsGetBrandMetafieldResponse200;
};
export type GetBrandMetafieldResponse = GetBrandMetafieldResponses[keyof GetBrandMetafieldResponses];
export type UpdateBrandMetafieldData = {
    body?: MetafieldBasePut;
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
        metafield_id: number;
    };
    query?: never;
    url: '/catalog/brands/{brand_id}/metafields/{metafield_id}';
};
export type UpdateBrandMetafieldErrors = {
    400: UpdateBrandMetafieldRequestBadRequestError;
    404: UpdateBrandMetafieldRequestNotFoundError;
};
export type UpdateBrandMetafieldError = UpdateBrandMetafieldErrors[keyof UpdateBrandMetafieldErrors];
export type UpdateBrandMetafieldResponses = {
    200: MetafieldsUpdateBrandMetafieldResponse200;
};
export type UpdateBrandMetafieldResponse = UpdateBrandMetafieldResponses[keyof UpdateBrandMetafieldResponses];
