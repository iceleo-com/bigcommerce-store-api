export type Category = id & parent_id & name & description & views & sort_order & page_title & meta_keywords & meta_description & layout_file & image_url & is_visible & search_keywords & default_product_sort & {
    custom_url?: Url;
};
export type category_Full = {
    readonly id?: number;
    parent_id?: number;
    name?: string;
    description?: string;
    views?: number;
    sort_order?: number;
    page_title?: string;
    search_keywords?: string;
    meta_keywords?: Array<(string)>;
    meta_description?: string;
    layout_file?: string;
    is_visible?: boolean;
    default_product_sort?: 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
    image_url?: string;
    custom_url?: customUrl_Full;
};
export type default_product_sort = 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
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
export type customUrl_Full = {
    url?: string;
    is_customized?: boolean;
};
export type default_product_sort2 = {
    default_product_sort?: 'use_store_settings' | 'featured' | 'newest' | 'best_selling' | 'alpha_asc' | 'alpha_desc' | 'avg_customer_review' | 'price_asc' | 'price_desc';
};
export type description = {
    description?: string;
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
    instance?: string;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
export type id = {
    readonly id?: number;
};
export type image_url = {
    image_url?: string;
};
export type is_visible = {
    is_visible?: boolean;
};
export type layout_file = {
    layout_file?: string;
};
export type meta_description = {
    meta_description?: string;
};
export type meta_keywords = {
    meta_keywords?: Array<(string)>;
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
export type name = {
    name?: string;
};
export type page_title = {
    page_title?: string;
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
export type ParameterCategoryIdParam = number;
export type ParameterContentType = string;
export type Parameterdate_created_max = string;
export type Parameterdate_created_min = string;
export type Parameterdate_modified_max = string;
export type Parameterdate_modified_min = string;
export type ParameterDirectionParam = 'asc' | 'desc';
export type ParameterExcludeFieldsParam = Array<(string)>;
export type ParameterIdCategoryQueryParam = number;
export type ParameterIdGreaterParam = number;
export type ParameterIdInParam = Array<(number)>;
export type ParameterIdLessParam = number;
export type ParameterIdMaxParam = number;
export type ParameterIdMetafieldQueryParam = number;
export type ParameterIdMinParam = number;
export type ParameterIdNotInParam = Array<(number)>;
export type ParameterIncludeFieldsParam = Array<(string)>;
export type ParameterIncludeFieldsParamMetafields = Array<('resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified')>;
export type ParameterIsVisibleParam = boolean;
export type ParameterKeywordParam = string;
export type ParameterLimitParam = number;
export type ParameterMetafieldIdParam = number;
export type ParameterMetafieldKeyInParam = Array<(string)>;
export type ParameterMetafieldKeyParam = string;
export type ParameterMetafieldNamespaceInParam = Array<(string)>;
export type ParameterMetafieldNamespaceParam = string;
export type ParameterNameLikeParam = string;
export type ParameterNameParam = string;
export type ParameterPageParam = number;
export type ParameterPageTitleLikeParam = string;
export type ParameterPageTitleParam = string;
export type ParameterParentIdGreaterParam = number;
export type ParameterParentIdInParam = Array<(number)>;
export type ParameterParentIdLessParam = number;
export type ParameterParentIdMaxParam = number;
export type ParameterParentIdMinParam = number;
export type ParameterParentIdParam = number;
export type ParameterSortParam = 'name' | 'id' | 'parent_id' | 'sort_order';
export type parent_id = {
    parent_id?: number;
};
export type productSortOrder = {
    product_id: number;
    sort_order: number;
};
export type search_keywords = {
    search_keywords?: string;
};
export type sort_order = {
    sort_order?: number;
};
export type Url = {
    url?: string;
    is_customized?: boolean;
};
export type views = {
    views?: number;
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
export type GetCategoriesData = {
    headers: {
        Accept: string;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        id?: number;
        'id:greater'?: number;
        'id:in'?: Array<(number)>;
        'id:less'?: number;
        'id:max'?: number;
        'id:min'?: number;
        'id:not_in'?: Array<(number)>;
        include_fields?: Array<(string)>;
        is_visible?: boolean;
        keyword?: string;
        limit?: number;
        name?: string;
        'name:like'?: string;
        page?: number;
        page_title?: string;
        'page_title:like'?: string;
        parent_id?: number;
        'parent_id:greater'?: number;
        'parent_id:in'?: Array<(number)>;
        'parent_id:less'?: number;
        'parent_id:max'?: number;
        'parent_id:min'?: number;
        sort?: 'name' | 'id' | 'parent_id' | 'sort_order';
    };
};
export type GetCategoriesResponse = ({
    data?: Array<Category>;
    meta?: metaCollection_Full;
});
export type GetCategoriesError = unknown;
export type CreateCategoryData = {
    body: {
        parent_id: number;
        name: string;
        description?: string;
        views?: number;
        sort_order?: number;
        page_title?: string;
        search_keywords?: string;
        meta_keywords?: Array<(string)>;
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
};
export type CreateCategoryResponse = ({
    data?: category_Full;
    meta?: metaEmpty_Full;
} | error_Base);
export type CreateCategoryError = ({
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type DeleteCategoriesData = {
    headers: {
        Accept: string;
    };
    query?: {
        id?: number;
        'id:greater'?: number;
        'id:in'?: Array<(number)>;
        'id:less'?: number;
        'id:max'?: number;
        'id:min'?: number;
        'id:not_in'?: Array<(number)>;
        is_visible?: boolean;
        keyword?: string;
        name?: string;
        'name:like'?: string;
        page_title?: string;
        'page_title:like'?: string;
        parent_id?: number;
        'parent_id:greater'?: number;
        'parent_id:in'?: Array<(number)>;
        'parent_id:less'?: number;
        'parent_id:max'?: number;
        'parent_id:min'?: number;
    };
};
export type DeleteCategoriesResponse = (void);
export type DeleteCategoriesError = unknown;
export type GetCategoryData = {
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<(string)>;
    };
};
export type GetCategoryResponse = ({
    data?: category_Full;
    meta?: metaEmpty_Full;
});
export type GetCategoryError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
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
        meta_keywords?: Array<(string)>;
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
};
export type UpdateCategoryResponse = ({
    data?: {
        readonly id?: number;
        parent_id?: number;
        name?: string;
        description?: string;
        views?: number;
        sort_order?: number;
        page_title?: string;
        search_keywords?: string;
        meta_keywords?: Array<(string)>;
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
} | error_Base);
export type UpdateCategoryError = ({
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
export type DeleteCategoryData = {
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
    };
};
export type DeleteCategoryResponse = (void);
export type DeleteCategoryError = unknown;
export type GetCategoryMetafieldsData = {
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        id?: number;
        'id:greater'?: number;
        'id:in'?: Array<(number)>;
        'id:less'?: number;
        'id:max'?: number;
        'id:min'?: number;
        'id:not_in'?: Array<(number)>;
        include_fields?: Array<(string)>;
        key?: string;
        limit?: number;
        namespace?: string;
        page?: number;
    };
};
export type GetCategoryMetafieldsResponse = ({
    data?: Array<metafield_Full>;
    meta?: metaCollection_Full;
});
export type GetCategoryMetafieldsError = unknown;
export type CreateCategoryMetafieldData = {
    body: metafield_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        category_id: number;
    };
};
export type CreateCategoryMetafieldResponse = ({
    data?: metafield_Full;
    meta?: metaEmpty_Full;
});
export type CreateCategoryMetafieldError = ({
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
export type GetCategoryMetafieldData = {
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
        metafield_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<(string)>;
    };
};
export type GetCategoryMetafieldResponse = ({
    data?: metafield_Full;
    meta?: metaEmpty_Full;
});
export type GetCategoryMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type UpdateCategoryMetafieldData = {
    body: metafield_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        category_id: number;
        metafield_id: number;
    };
};
export type UpdateCategoryMetafieldResponse = ({
    data?: metafield_Full;
    meta?: metaEmpty_Full;
});
export type UpdateCategoryMetafieldError = ({
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
export type DeleteCategoryMetafieldData = {
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
        metafield_id: number;
    };
};
export type DeleteCategoryMetafieldResponse = (void);
export type DeleteCategoryMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type CreateCategoryImageData = {
    body?: {
        image_file?: (Blob | File);
    };
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
    };
};
export type CreateCategoryImageResponse = ({
    data?: {
        image_url?: string;
    };
    meta?: metaEmpty_Full;
});
export type CreateCategoryImageError = ({
    [key: string]: unknown;
} | string | Error | {
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
export type DeleteCategoryImageData = {
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
    };
};
export type DeleteCategoryImageResponse = (void);
export type DeleteCategoryImageError = (string | Error | {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type GetCategorySortOrdersData = {
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
    };
    query?: {
        page?: number;
    };
};
export type GetCategorySortOrdersResponse = ({
    data?: Array<productSortOrder>;
    meta?: metaCollection_Full;
});
export type GetCategorySortOrdersError = (string | Error | error_Base);
export type UpdateCategorySortOrdersData = {
    body?: Array<productSortOrder>;
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
};
export type UpdateCategorySortOrdersResponse = (Array<productSortOrder>);
export type UpdateCategorySortOrdersError = (string | Error | error_Base);
export type GetCategoriesMetafieldsData = {
    headers: {
        Accept: string;
    };
    query?: {
        'date_created:max'?: string;
        'date_created:min'?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
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
export type GetCategoriesMetafieldsResponse = (MetaFieldCollectionResponse);
export type GetCategoriesMetafieldsError = unknown;
export type CreateCategoriesMetafieldsData = {
    body?: Array<(MetafieldBase_Post & {
        resource_id: number;
    })>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateCategoriesMetafieldsResponse = (MetaFieldCollectionResponse_POST_PUT);
export type CreateCategoriesMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type UpdateCategoriesMetafieldsData = {
    body?: Array<(MetafieldBase_Put & {
        id: number;
    })>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateCategoriesMetafieldsResponse = (MetaFieldCollectionResponse_POST_PUT);
export type UpdateCategoriesMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type DeleteCategoriesMetafieldsData = {
    body?: Array<(number)>;
    headers: {
        Accept: string;
    };
};
export type DeleteCategoriesMetafieldsResponse = (MetaFieldCollectionDeleteResponseSuccess);
export type DeleteCategoriesMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_DELETE);
