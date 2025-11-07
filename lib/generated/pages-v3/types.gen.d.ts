export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type ResponseErrorBrief = {
    status: number;
    title?: string;
    type?: string;
};
export type ResponseErrorDetailed = {
    status: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type ResponseErrorItemized = {
    status: number;
    title?: string;
    type?: string;
    errors?: Array<string>;
};
export type ResponseMeta = {
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
export type PagesCollectionResponse = {
    data?: Array<TypePage | TypeBlog | TypeContactForm | TypeRaw | TypeLink>;
    meta?: ResponseMeta;
};
export type SinglePageResponse = {
    data?: TypePage | TypeBlog | TypeContactForm | TypeRaw | TypeLink;
    meta?: ResponseMeta;
};
export type PagePutObj = {
    channel_id?: number;
    name?: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type?: 'page' | 'raw' | 'contact_form' | 'link' | 'blog';
    body?: string | null;
    is_homepage?: boolean;
    is_customers_only?: boolean;
    email?: string;
    meta_title?: string | null;
    link?: string;
    contact_fields?: string;
    meta_keywords?: string | null;
    meta_description?: string | null;
    search_keywords?: string | null;
    url?: string;
};
export type PagePutBulk = {
    id: number;
} & PagePutObj;
export type AnyTypePage = {
    readonly id?: number;
    readonly channel_id?: number;
    name: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type: 'page' | 'raw' | 'contact_form' | 'link' | 'blog';
    is_homepage?: boolean;
    is_customers_only?: boolean;
    url?: string;
};
export type TypePage = AnyTypePage & PageMeta & SearchKeywords;
export type TypeBlog = unknown & AnyTypePage & PageMeta & SearchKeywords & {
    url?: string;
};
export type TypeContactForm = AnyTypePage & PageMeta & SearchKeywords & {
    email?: string;
    contact_fields?: string;
};
export type TypeRaw = AnyTypePage & SearchKeywords & {
    body: string | null;
    content_type?: string;
};
export type TypeLink = AnyTypePage & {
    link: string;
};
export type PageMeta = {
    meta_title?: string | null;
    meta_keywords?: string | null;
    meta_description?: string | null;
};
export type SearchKeywords = {
    search_keywords?: string | null;
};
export type AnyTypePageWritable = {
    name: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type: 'page' | 'raw' | 'contact_form' | 'link' | 'blog';
    is_homepage?: boolean;
    is_customers_only?: boolean;
    url?: string;
};
export type TypeBlogWritable = AnyTypePageWritable & PageMeta & SearchKeywords & {
    url?: string;
};
export type Accept = string;
export type ContentType = string;
export type PageIdPath = string;
export type IncludeQuery = Array<'body'>;
export type ChannelIdQuery = number;
export type IdInQueryGet = Array<number>;
export type IdInQueryDelete = Array<number>;
export type DeleteChildrenQuery = boolean;
export type NameQuery = string;
export type NameLikeQuery = string;
export type LimitQuery = number;
export type PageQuery = number;
export type DeletePagesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        'id:in': Array<number>;
        delete_children?: boolean;
    };
    url: '/content/pages';
};
export type DeletePagesErrors = {
    404: ResponseErrorBrief;
    422: ResponseErrorDetailed;
};
export type DeletePagesError = DeletePagesErrors[keyof DeletePagesErrors];
export type DeletePagesResponses = {
    204: void;
};
export type DeletePagesResponse = DeletePagesResponses[keyof DeletePagesResponses];
export type GetPagesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
        'id:in'?: Array<number>;
        name?: string;
        'name:like'?: string;
        limit?: number;
        page?: number;
        include?: Array<'body'>;
    };
    url: '/content/pages';
};
export type GetPagesErrors = {
    400: ResponseErrorDetailed;
    422: ResponseErrorItemized;
};
export type GetPagesError = GetPagesErrors[keyof GetPagesErrors];
export type GetPagesResponses = {
    200: PagesCollectionResponse;
};
export type GetPagesResponse = GetPagesResponses[keyof GetPagesResponses];
export type CreatePagesData = {
    body: TypePage | TypeBlogWritable | TypeContactForm | TypeRaw | TypeLink | Array<TypePage | TypeBlogWritable | TypeContactForm | TypeRaw | TypeLink>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        include?: Array<'body'>;
    };
    url: '/content/pages';
};
export type CreatePagesErrors = {
    422: ResponseErrorDetailed;
};
export type CreatePagesError = CreatePagesErrors[keyof CreatePagesErrors];
export type CreatePagesResponses = {
    201: {
        data?: TypePage | TypeBlog | TypeContactForm | TypeRaw | TypeLink;
        meta?: ResponseMeta;
    };
    207: unknown;
};
export type CreatePagesResponse = CreatePagesResponses[keyof CreatePagesResponses];
export type UpdatePagesData = {
    body?: PagePutBulk | Array<PagePutBulk>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        include?: Array<'body'>;
    };
    url: '/content/pages';
};
export type UpdatePagesErrors = {
    404: ResponseErrorBrief;
    422: ResponseErrorDetailed;
};
export type UpdatePagesError = UpdatePagesErrors[keyof UpdatePagesErrors];
export type UpdatePagesResponses = {
    200: PagesCollectionResponse;
};
export type UpdatePagesResponse = UpdatePagesResponses[keyof UpdatePagesResponses];
export type DeletePageData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        pageId: string;
    };
    query?: never;
    url: '/content/pages/{pageId}';
};
export type DeletePageErrors = {
    404: ResponseErrorBrief;
};
export type DeletePageError = DeletePageErrors[keyof DeletePageErrors];
export type DeletePageResponses = {
    204: void;
};
export type DeletePageResponse = DeletePageResponses[keyof DeletePageResponses];
export type GetPageData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        pageId: string;
    };
    query?: {
        include?: Array<'body'>;
    };
    url: '/content/pages/{pageId}';
};
export type GetPageErrors = {
    404: ResponseErrorBrief;
    422: ResponseErrorItemized;
};
export type GetPageError = GetPageErrors[keyof GetPageErrors];
export type GetPageResponses = {
    200: SinglePageResponse;
};
export type GetPageResponse = GetPageResponses[keyof GetPageResponses];
export type UpdatePageData = {
    body: PagePutObj;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        pageId: string;
    };
    query?: {
        include?: Array<'body'>;
    };
    url: '/content/pages/{pageId}';
};
export type UpdatePageErrors = {
    400: ResponseErrorDetailed;
    404: ResponseErrorBrief;
    422: ResponseErrorDetailed;
};
export type UpdatePageError = UpdatePageErrors[keyof UpdatePageErrors];
export type UpdatePageResponses = {
    200: SinglePageResponse;
};
export type UpdatePageResponse = UpdatePageResponses[keyof UpdatePageResponses];
