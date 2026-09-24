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
export type BrandIdParam = number;
export type MetafieldIdParam = number;
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
        include_fields?: string;
        exclude_fields?: string;
        sort?: 'name';
    };
    url: '/catalog/brands';
};
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
    207: ErrorBase;
};
export type CreateBrandResponse = CreateBrandResponses[keyof CreateBrandResponses];
export type DeleteBrandByIdData = {
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
export type DeleteBrandByIdResponses = {
    204: void;
};
export type DeleteBrandByIdResponse = DeleteBrandByIdResponses[keyof DeleteBrandByIdResponses];
export type GetBrandByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/brands/{brand_id}';
};
export type GetBrandByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetBrandByIdError = GetBrandByIdErrors[keyof GetBrandByIdErrors];
export type GetBrandByIdResponses = {
    200: {
        data?: BrandFull;
        meta?: MetaEmptyFull;
    };
};
export type GetBrandByIdResponse = GetBrandByIdResponses[keyof GetBrandByIdResponses];
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
    207: ErrorBase;
};
export type UpdateBrandResponse = UpdateBrandResponses[keyof UpdateBrandResponses];
export type GetBrandMetafieldsByBrandIdData = {
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
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/brands/{brand_id}/metafields';
};
export type GetBrandMetafieldsByBrandIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetBrandMetafieldsByBrandIdError = GetBrandMetafieldsByBrandIdErrors[keyof GetBrandMetafieldsByBrandIdErrors];
export type GetBrandMetafieldsByBrandIdResponses = {
    200: {
        data?: Array<MetafieldFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetBrandMetafieldsByBrandIdResponse = GetBrandMetafieldsByBrandIdResponses[keyof GetBrandMetafieldsByBrandIdResponses];
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
export type DeleteBrandMetafieldByIdData = {
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
export type DeleteBrandMetafieldByIdResponses = {
    204: void;
};
export type DeleteBrandMetafieldByIdResponse = DeleteBrandMetafieldByIdResponses[keyof DeleteBrandMetafieldByIdResponses];
export type GetBrandMetafieldByBrandIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        brand_id: number;
        metafield_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/brands/{brand_id}/metafields/{metafield_id}';
};
export type GetBrandMetafieldByBrandIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetBrandMetafieldByBrandIdError = GetBrandMetafieldByBrandIdErrors[keyof GetBrandMetafieldByBrandIdErrors];
export type GetBrandMetafieldByBrandIdResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type GetBrandMetafieldByBrandIdResponse = GetBrandMetafieldByBrandIdResponses[keyof GetBrandMetafieldByBrandIdResponses];
export type UpdateBrandMetafieldData = {
    body: MetafieldBase;
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
        'Content-Type': string;
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
