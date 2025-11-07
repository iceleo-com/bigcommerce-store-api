export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type BrandFull = {
    readonly id?: number;
    name: string;
    page_title?: string;
    meta_keywords?: Array<string>;
    meta_description?: string;
    search_keywords?: string;
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
};
export type MetafieldFull = {
    readonly id?: number;
} & MetafieldBase & {
    resource_type?: 'category' | 'brand' | 'product' | 'variant';
    resource_id?: number;
    readonly date_created?: string;
    readonly date_modified?: string;
    readonly owner_client_id?: string;
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
export type Total = number;
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
export type MetafieldPost = MetafieldBasePost & {
    resource_id: number;
};
export type MetafieldBasePut = {
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
};
export type NotFoundError = {
    status: number;
    title: string;
    type: string;
};
export type Conflict = {
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
    };
};
export type BrandFullWritable = {
    name: string;
    page_title?: string;
    meta_keywords?: Array<string>;
    meta_description?: string;
    search_keywords?: string;
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
export type DirectionQuery = 'asc' | 'desc';
export type BrandIdPath = number;
export type MetafieldIdPath = number;
export type MetafieldKeyParam = string;
export type MetafieldKeyInParam = Array<string>;
export type MetafieldNamespaceParam = string;
export type MetafieldNamespaceInParam = Array<string>;
export type DateCreatedMin = string;
export type DateCreatedMax = string;
export type DateModifiedMax = string;
export type DateModifiedMin = string;
export type DirectionParam = 'asc' | 'desc';
export type IdQuery = number;
export type IdInQuery = Array<number>;
export type IdNotInQuery = Array<number>;
export type IdMinQuery = Array<number>;
export type IdMaxQuery = Array<number>;
export type IdGreaterQuery = Array<number>;
export type IdLessQuery = Array<number>;
export type NameQuery = string;
export type NameRequired = string;
export type NameLikeQuery = string;
export type PageTitleQuery = string;
export type PageQuery = number;
export type LimitQuery = number;
export type IncludeFieldsQuery = Array<string>;
export type ExcludeFieldsQuery = Array<string>;
export type SortQuery = 'name';
export type IncludeFieldsParamMetafields = Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified'>;
export type Accept = string;
export type ContentType = string;
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
    401: string;
    403: ErrorBase;
    422: ErrorBase;
};
export type DeleteBrandsError = DeleteBrandsErrors[keyof DeleteBrandsErrors];
export type DeleteBrandsResponses = {
    204: void;
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
        sort?: 'name';
        direction?: 'asc' | 'desc';
    };
    url: '/catalog/brands';
};
export type GetBrandsErrors = {
    401: string;
    403: ErrorBase;
};
export type GetBrandsError = GetBrandsErrors[keyof GetBrandsErrors];
export type GetBrandsResponses = {
    200: {
        data?: Array<BrandFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetBrandsResponse = GetBrandsResponses[keyof GetBrandsResponses];
export type CreateBrandData = {
    body: {
        name: string;
        page_title?: string;
        meta_keywords?: Array<string>;
        meta_description?: string;
        search_keywords?: string;
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
    url: '/catalog/brands';
};
export type CreateBrandErrors = {
    401: string;
    403: ErrorBase;
    404: NotFoundError;
    409: {
        errors?: {
            [key: string]: unknown;
        };
        status?: number;
        title?: string;
        type?: string;
    };
    422: {
        errors?: {
            [key: string]: unknown;
        };
        status?: number;
        title?: string;
        type?: string;
    };
};
export type CreateBrandError = CreateBrandErrors[keyof CreateBrandErrors];
export type CreateBrandResponses = {
    200: {
        data?: {
            readonly id?: number;
            name?: string;
            page_title?: string;
            meta_keywords?: Array<string>;
            meta_description?: string;
            search_keywords?: string;
            image_url?: string;
            custom_url?: {
                url?: string;
                is_customized?: boolean;
            };
        };
        meta?: MetaEmptyFull;
    };
    207: {
        data?: Array<BrandFull>;
        errors?: _Error;
        meta?: WriteCollectionSuccessMeta;
    };
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
    401: string;
    403: ErrorBase;
    404: NotFoundError;
};
export type DeleteBrandError = DeleteBrandErrors[keyof DeleteBrandErrors];
export type DeleteBrandResponses = {
    204: void;
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
    401: string;
    403: ErrorBase;
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
    409: Conflict;
    422: _Error;
};
export type GetBrandError = GetBrandErrors[keyof GetBrandErrors];
export type GetBrandResponses = {
    200: {
        data?: BrandFull;
        meta?: MetaEmptyFull;
    };
    207: {
        data?: Array<BrandFull>;
        errors?: _Error;
        meta?: WriteCollectionSuccessMeta;
    };
};
export type GetBrandResponse = GetBrandResponses[keyof GetBrandResponses];
export type UpdateBrandData = {
    body: {
        readonly id?: number;
        name: string;
        page_title?: string;
        meta_keywords?: Array<string>;
        meta_description?: string;
        search_keywords?: string;
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
        brand_id: number;
    };
    query?: never;
    url: '/catalog/brands/{brand_id}';
};
export type UpdateBrandErrors = {
    401: string;
    403: ErrorBase;
    404: {
        status?: number;
        title?: string;
        type?: string;
    };
    409: {
        errors?: {
            [key: string]: unknown;
        };
        status?: number;
        title?: string;
        type?: string;
    };
    422: {
        errors?: {
            [key: string]: unknown;
        };
        status?: number;
        title?: string;
        type?: string;
    };
};
export type UpdateBrandError = UpdateBrandErrors[keyof UpdateBrandErrors];
export type UpdateBrandResponses = {
    200: {
        data?: {
            readonly id?: number;
            name: string;
            page_title?: string;
            meta_keywords?: Array<string>;
            meta_description?: string;
            search_keywords?: string;
            image_url?: string;
            custom_url?: {
                url?: string;
                is_customized?: boolean;
            };
        };
        meta?: MetaEmptyFull;
    };
    207: {
        data?: Array<BrandFull>;
        errors?: _Error;
        meta?: WriteCollectionSuccessMeta;
    };
};
export type UpdateBrandResponse = UpdateBrandResponses[keyof UpdateBrandResponses];
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
    200: {
        data?: Array<MetafieldFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetBrandMetafieldsResponse = GetBrandMetafieldsResponses[keyof GetBrandMetafieldsResponses];
export type CreateBrandMetafieldData = {
    body: MetafieldBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        brand_id: number;
    };
    query?: never;
    url: '/catalog/brands/{brand_id}/metafields';
};
export type CreateBrandMetafieldErrors = {
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
export type CreateBrandMetafieldError = CreateBrandMetafieldErrors[keyof CreateBrandMetafieldErrors];
export type CreateBrandMetafieldResponses = {
    200: {
        data?: MetafieldFull;
        meta?: {
            [key: string]: unknown;
        };
    };
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
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type DeleteBrandMetafieldError = DeleteBrandMetafieldErrors[keyof DeleteBrandMetafieldErrors];
export type DeleteBrandMetafieldResponses = {
    204: void;
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
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetBrandMetafieldError = GetBrandMetafieldErrors[keyof GetBrandMetafieldErrors];
export type GetBrandMetafieldResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type GetBrandMetafieldResponse = GetBrandMetafieldResponses[keyof GetBrandMetafieldResponses];
export type UpdateBrandMetafieldData = {
    body: MetafieldBasePut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        brand_id: number;
        metafield_id: number;
    };
    query?: never;
    url: '/catalog/brands/{brand_id}/metafields/{metafield_id}';
};
export type UpdateBrandMetafieldErrors = {
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
export type UpdateBrandMetafieldError = UpdateBrandMetafieldErrors[keyof UpdateBrandMetafieldErrors];
export type UpdateBrandMetafieldResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type UpdateBrandMetafieldResponse = UpdateBrandMetafieldResponses[keyof UpdateBrandMetafieldResponses];
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
    204: void;
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
    400: {
        [key: string]: unknown;
    };
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
export type CreateBrandImageError = CreateBrandImageErrors[keyof CreateBrandImageErrors];
export type CreateBrandImageResponses = {
    200: {
        data?: {
            image_url?: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type CreateBrandImageResponse = CreateBrandImageResponses[keyof CreateBrandImageResponses];
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
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
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
        direction?: 'asc' | 'desc';
        include_fields?: Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified'>;
    };
    url: '/catalog/brands/metafields';
};
export type GetBrandsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        errors?: unknown;
    };
};
export type GetBrandsMetafieldsError = GetBrandsMetafieldsErrors[keyof GetBrandsMetafieldsErrors];
export type GetBrandsMetafieldsResponses = {
    200: MetaFieldCollectionResponse;
};
export type GetBrandsMetafieldsResponse = GetBrandsMetafieldsResponses[keyof GetBrandsMetafieldsResponses];
export type CreateBrandsMetafieldsData = {
    body?: Array<MetafieldBasePost & {
        resource_id: number;
    }>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/catalog/brands/metafields';
};
export type CreateBrandsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateBrandsMetafieldsError = CreateBrandsMetafieldsErrors[keyof CreateBrandsMetafieldsErrors];
export type CreateBrandsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type CreateBrandsMetafieldsResponse = CreateBrandsMetafieldsResponses[keyof CreateBrandsMetafieldsResponses];
export type UpdateBrandsMetafieldsData = {
    body?: Array<MetafieldBasePut & {
        id: number;
    }>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/catalog/brands/metafields';
};
export type UpdateBrandsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        errors?: {
            [key: string]: unknown;
        };
    };
    422: {
        status?: number;
        title?: string;
        type?: string;
        errors?: {
            [key: string]: unknown;
        };
    };
};
export type UpdateBrandsMetafieldsError = UpdateBrandsMetafieldsErrors[keyof UpdateBrandsMetafieldsErrors];
export type UpdateBrandsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type UpdateBrandsMetafieldsResponse = UpdateBrandsMetafieldsResponses[keyof UpdateBrandsMetafieldsResponses];
