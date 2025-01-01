export type brand_Full = {
    readonly id?: number;
    name: string;
    page_title?: string;
    meta_keywords?: Array<(string)>;
    meta_description?: string;
    search_keywords?: string;
    image_url?: string;
    custom_url?: customUrl_Full;
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
    [key: string]: unknown;
};
export type Conflict = {
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
    };
};
export type customUrl_Full = {
    url?: string;
    is_customized?: boolean;
};
export type Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type error_Base = {
    status?: number;
    title?: string;
    type?: string;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
export type metaCollection_Full = {
    pagination?: pagination_Full;
};
export type metaEmpty_Full = {
    [key: string]: unknown;
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
export type permission_set = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type resource_type = 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
export type metafield_Base = {
    key: string;
    value: string;
    namespace: string;
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type metafield_Full = {
    readonly id?: number;
} & metafield_Base & {
    resource_type?: 'category' | 'brand' | 'product' | 'variant';
    resource_id?: number;
    readonly date_created?: string;
    readonly date_modified?: string;
    readonly owner_client_id?: string;
};
export type resource_type2 = 'category' | 'brand' | 'product' | 'variant';
export type MetafieldBase_Post = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetafieldBase_Put = {
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<(number)>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponse_POST_PUT = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponsePartialSuccess_DELETE = {
    data?: Array<(number)>;
    errors?: Array<Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccess_POST_PUT = {
    data?: Array<Metafield>;
    errors?: Array<Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetafieldPost = MetafieldBase_Post & {
    resource_id: number;
};
export type NotFoundError = {
    status: number;
    title: string;
    type: string;
};
export type pagination_Full = {
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
export type ParameterAccept = string;
export type ParameterBrandIdPath = number;
export type ParameterContentType = string;
export type Parameterdate_created_max = string;
export type Parameterdate_created_min = string;
export type Parameterdate_modified_max = string;
export type Parameterdate_modified_min = string;
export type ParameterDirectionParam = 'asc' | 'desc';
export type ParameterExcludeFieldsQuery = Array<(string)>;
export type ParameterIdGreaterQuery = Array<(number)>;
export type ParameterIdInQuery = Array<(number)>;
export type ParameterIdLessQuery = Array<(number)>;
export type ParameterIdMaxQuery = Array<(number)>;
export type ParameterIdMinQuery = Array<(number)>;
export type ParameterIdNotInQuery = Array<(number)>;
export type ParameterIdQuery = number;
export type ParameterIncludeFieldsParamMetafields = Array<('resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified')>;
export type ParameterIncludeFieldsQuery = Array<(string)>;
export type ParameterLimitQuery = number;
export type ParameterMetafieldIdPath = number;
export type ParameterMetafieldKeyInParam = Array<(string)>;
export type ParameterMetafieldKeyParam = string;
export type ParameterMetafieldNamespaceInParam = Array<(string)>;
export type ParameterMetafieldNamespaceParam = string;
export type ParameterNameLikeQuery = string;
export type ParameterNameQuery = string;
export type ParameterNameRequired = string;
export type ParameterPageQuery = number;
export type ParameterPageTitleQuery = string;
export type ParameterSortQuery = 'name';
export type Total = number;
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
export type GetBrandsData = {
    headers: {
        Accept: string;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        id?: number;
        'id:greater'?: Array<(number)>;
        'id:in'?: Array<(number)>;
        'id:less'?: Array<(number)>;
        'id:max'?: Array<(number)>;
        'id:min'?: Array<(number)>;
        'id:not_in'?: Array<(number)>;
        include_fields?: Array<(string)>;
        limit?: number;
        name?: string;
        'name:like'?: string;
        page?: number;
        page_title?: string;
        sort?: 'name';
    };
};
export type GetBrandsResponse = ({
    data?: Array<brand_Full>;
    meta?: metaCollection_Full;
});
export type GetBrandsError = (string | error_Base);
export type CreateBrandData = {
    body: {
        name: string;
        page_title?: string;
        meta_keywords?: Array<(string)>;
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
};
export type CreateBrandResponse = ({
    data?: {
        readonly id?: number;
        name?: string;
        page_title?: string;
        meta_keywords?: Array<(string)>;
        meta_description?: string;
        search_keywords?: string;
        image_url?: string;
        custom_url?: {
            url?: string;
            is_customized?: boolean;
        };
    };
    meta?: metaEmpty_Full;
} | {
    data?: Array<brand_Full>;
    errors?: Error;
    meta?: WriteCollectionSuccessMeta;
});
export type CreateBrandError = (string | error_Base | NotFoundError | {
    errors?: {
        [key: string]: unknown;
    };
    status?: number;
    title?: string;
    type?: string;
});
export type DeleteBrandsData = {
    headers: {
        Accept: string;
    };
    query: {
        name: string;
        page_title?: string;
    };
};
export type DeleteBrandsResponse = (void);
export type DeleteBrandsError = (string | error_Base);
export type GetBrandData = {
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<(string)>;
    };
};
export type GetBrandResponse = ({
    data?: brand_Full;
    meta?: metaEmpty_Full;
} | {
    data?: Array<brand_Full>;
    errors?: Error;
    meta?: WriteCollectionSuccessMeta;
});
export type GetBrandError = (string | error_Base | {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} | Conflict | Error);
export type UpdateBrandData = {
    body: {
        readonly id?: number;
        name: string;
        page_title?: string;
        meta_keywords?: Array<(string)>;
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
};
export type UpdateBrandResponse = ({
    data?: {
        readonly id?: number;
        name: string;
        page_title?: string;
        meta_keywords?: Array<(string)>;
        meta_description?: string;
        search_keywords?: string;
        image_url?: string;
        custom_url?: {
            url?: string;
            is_customized?: boolean;
        };
    };
    meta?: metaEmpty_Full;
} | {
    data?: Array<brand_Full>;
    errors?: Error;
    meta?: WriteCollectionSuccessMeta;
});
export type UpdateBrandError = (string | error_Base | {
    status?: number;
    title?: string;
    type?: string;
} | {
    errors?: {
        [key: string]: unknown;
    };
    status?: number;
    title?: string;
    type?: string;
});
export type DeleteBrandData = {
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
    };
};
export type DeleteBrandResponse = (void);
export type DeleteBrandError = (string | error_Base | NotFoundError);
export type GetBrandMetafieldsData = {
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        id?: number;
        'id:greater'?: Array<(number)>;
        'id:in'?: Array<(number)>;
        'id:less'?: Array<(number)>;
        'id:max'?: Array<(number)>;
        'id:min'?: Array<(number)>;
        'id:not_in'?: Array<(number)>;
        include_fields?: Array<(string)>;
        key?: string;
        limit?: number;
        namespace?: string;
        page?: number;
    };
};
export type GetBrandMetafieldsResponse = ({
    data?: Array<metafield_Full>;
    meta?: metaCollection_Full;
});
export type GetBrandMetafieldsError = unknown;
export type CreateBrandMetafieldData = {
    body: metafield_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        brand_id: number;
    };
};
export type CreateBrandMetafieldResponse = ({
    data?: metafield_Full;
    meta?: {
        [key: string]: unknown;
    };
});
export type CreateBrandMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | {
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type GetBrandMetafieldData = {
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
        metafield_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<(string)>;
    };
};
export type GetBrandMetafieldResponse = ({
    data?: metafield_Full;
    meta?: metaEmpty_Full;
});
export type GetBrandMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type UpdateBrandMetafieldData = {
    body: MetafieldBase_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        brand_id: number;
        metafield_id: number;
    };
};
export type UpdateBrandMetafieldResponse = ({
    data?: metafield_Full;
    meta?: metaEmpty_Full;
});
export type UpdateBrandMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type DeleteBrandMetafieldData = {
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
        metafield_id: number;
    };
};
export type DeleteBrandMetafieldResponse = (void);
export type DeleteBrandMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type CreateBrandImageData = {
    body?: {
        image_file?: (Blob | File);
    };
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
    };
};
export type CreateBrandImageResponse = ({
    data?: {
        image_url?: string;
    };
    meta?: metaEmpty_Full;
});
export type CreateBrandImageError = ({
    [key: string]: unknown;
} | {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} | {
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type DeleteBrandImageData = {
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
    };
};
export type DeleteBrandImageResponse = (void);
export type DeleteBrandImageError = unknown;
export type GetBrandsMetafieldsData = {
    headers: {
        Accept: string;
    };
    query?: {
        direction?: 'asc' | 'desc';
        include_fields?: Array<('resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified')>;
        key?: string;
        'key:in'?: Array<(string)>;
        limit?: number;
        namespace?: string;
        'namespace:in'?: Array<(string)>;
        page?: number;
    };
};
export type GetBrandsMetafieldsResponse = (MetaFieldCollectionResponse);
export type GetBrandsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    errors?: unknown;
});
export type CreateBrandsMetafieldsData = {
    body?: Array<(MetafieldBase_Post & {
        resource_id: number;
    })>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateBrandsMetafieldsResponse = (MetaFieldCollectionResponse_POST_PUT);
export type CreateBrandsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type UpdateBrandsMetafieldsData = {
    body?: Array<(MetafieldBase_Put & {
        id: number;
    })>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateBrandsMetafieldsResponse = (MetaFieldCollectionResponse_POST_PUT);
export type UpdateBrandsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
    };
} | {
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
    };
});
export type DeleteBrandsMetafieldsData = {
    body?: Array<(number)>;
    headers: {
        Accept: string;
    };
};
export type DeleteBrandsMetafieldsResponse = (MetaFieldCollectionDeleteResponseSuccess);
export type DeleteBrandsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_DELETE);
