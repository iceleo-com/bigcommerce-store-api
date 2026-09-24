export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type CategoryFull = {
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
export type CategoryFullWritable = {
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
export type CategoryIdParam = number;
export type MetafieldIdParam = number;
export type Accept = string;
export type ContentType = string;
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
        'id:min'?: Array<number>;
        'id:max'?: Array<number>;
        'id:greater'?: Array<number>;
        'id:less'?: Array<number>;
        name?: string;
        parent_id?: number;
        page_title?: string;
        keyword?: string;
        is_visible?: boolean;
        'name:like'?: Array<string>;
        'parent_id:in'?: Array<number>;
        'parent_id:min'?: Array<number>;
        'parent_id:max'?: Array<number>;
        'parent_id:greater'?: Array<number>;
        'parent_id:less'?: Array<number>;
        'page_title:like'?: Array<string>;
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
        'id:min'?: Array<number>;
        'id:max'?: Array<number>;
        'id:greater'?: Array<number>;
        'id:less'?: Array<number>;
        name?: string;
        'name:like'?: Array<string>;
        parent_id?: number;
        'parent_id:in'?: Array<number>;
        'parent_id:min'?: Array<number>;
        'parent_id:max'?: Array<number>;
        'parent_id:greater'?: Array<number>;
        'parent_id:less'?: Array<number>;
        page_title?: string;
        'page_title:like'?: Array<string>;
        keyword?: string;
        is_visible?: boolean;
        page?: number;
        limit?: number;
        include_fields?: string;
        exclude_fields?: string;
        sort?: string;
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
export type DeleteCategoryByIdData = {
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
export type DeleteCategoryByIdResponses = {
    204: void;
};
export type DeleteCategoryByIdResponse = DeleteCategoryByIdResponses[keyof DeleteCategoryByIdResponses];
export type GetCategoryByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/categories/{category_id}';
};
export type GetCategoryByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetCategoryByIdError = GetCategoryByIdErrors[keyof GetCategoryByIdErrors];
export type GetCategoryByIdResponses = {
    200: {
        data?: CategoryFull;
        meta?: MetaEmptyFull;
    };
};
export type GetCategoryByIdResponse = GetCategoryByIdResponses[keyof GetCategoryByIdResponses];
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
        meta?: {
            [key: string]: unknown;
        };
    };
    207: ErrorBase;
};
export type UpdateCategoryResponse = UpdateCategoryResponses[keyof UpdateCategoryResponses];
export type GetCategoryMetafieldsByCategoryIdData = {
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
        'id:min'?: Array<number>;
        'id:max'?: Array<number>;
        'id:greater'?: Array<number>;
        'id:less'?: Array<number>;
        page?: number;
        limit?: number;
        key?: string;
        namespace?: string;
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/categories/{category_id}/metafields';
};
export type GetCategoryMetafieldsByCategoryIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetCategoryMetafieldsByCategoryIdError = GetCategoryMetafieldsByCategoryIdErrors[keyof GetCategoryMetafieldsByCategoryIdErrors];
export type GetCategoryMetafieldsByCategoryIdResponses = {
    200: {
        data?: Array<MetafieldFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetCategoryMetafieldsByCategoryIdResponse = GetCategoryMetafieldsByCategoryIdResponses[keyof GetCategoryMetafieldsByCategoryIdResponses];
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
export type DeleteCategoryMetafieldByIdData = {
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
export type DeleteCategoryMetafieldByIdResponses = {
    204: void;
};
export type DeleteCategoryMetafieldByIdResponse = DeleteCategoryMetafieldByIdResponses[keyof DeleteCategoryMetafieldByIdResponses];
export type GetCategoryMetafieldByCategoryIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
        metafield_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/categories/{category_id}/metafields/{metafield_id}';
};
export type GetCategoryMetafieldByCategoryIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetCategoryMetafieldByCategoryIdError = GetCategoryMetafieldByCategoryIdErrors[keyof GetCategoryMetafieldByCategoryIdErrors];
export type GetCategoryMetafieldByCategoryIdResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type GetCategoryMetafieldByCategoryIdResponse = GetCategoryMetafieldByCategoryIdResponses[keyof GetCategoryMetafieldByCategoryIdResponses];
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
        'Content-Type': string;
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
export type GetsortordersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        category_id: number;
    };
    query?: never;
    url: '/catalog/categories/{category_id}/products/sort-order';
};
export type GetsortordersErrors = {
    404: ErrorBase;
};
export type GetsortordersError = GetsortordersErrors[keyof GetsortordersErrors];
export type GetsortordersResponses = {
    200: Array<{
        product_id?: number;
        sort_order?: number;
    }>;
};
export type GetsortordersResponse = GetsortordersResponses[keyof GetsortordersResponses];
export type UpdatesortorderData = {
    body?: Array<ProductSortOrder>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        category_id: number;
    };
    query?: never;
    url: '/catalog/categories/{category_id}/products/sort-order';
};
export type UpdatesortorderErrors = {
    404: ErrorBase;
    422: ErrorBase;
};
export type UpdatesortorderError = UpdatesortorderErrors[keyof UpdatesortorderErrors];
export type UpdatesortorderResponses = {
    200: Array<ProductSortOrder>;
};
export type UpdatesortorderResponse = UpdatesortorderResponses[keyof UpdatesortorderResponses];
