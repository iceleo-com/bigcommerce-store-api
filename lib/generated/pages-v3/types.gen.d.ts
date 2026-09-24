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
    data?: Array<TypePage | TypeBlog | TypeContactForm | TypeFeed | TypeRaw | TypeLink>;
    meta?: ResponseMeta;
};
export type PageResponse = {
    data?: {
        [key: string]: unknown;
    };
    meta?: ResponseMeta;
};
export type ContactFields = {
    fullname?: string;
    phone?: string;
    companyname?: string;
    orderno?: string;
    rma?: string;
};
export type PagePutBulk = {
    name?: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type?: 'page' | 'raw' | 'contact_form' | 'feed' | 'link' | 'blog';
    is_homepage?: boolean;
    is_customers_only?: boolean;
    id: number;
    email?: string;
    meta_title?: string | null;
    body?: string | null;
    feed?: string;
    link?: string;
    contact_fields?: string;
    meta_keywords?: string | null;
    meta_description?: string | null;
    search_keywords?: string | null;
    url?: string;
    channel_id?: number;
};
export type PagePut = {
    name?: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type?: 'page' | 'raw' | 'contact_form' | 'feed' | 'link' | 'blog';
    is_homepage?: boolean;
    is_customers_only?: boolean;
    email?: string;
    meta_title?: string | null;
    body?: string | null;
    feed?: string;
    link?: string;
    contact_fields?: string;
    meta_keywords?: string | null;
    meta_description?: string | null;
    search_keywords?: string | null;
    url?: string;
    channel_id?: number;
};
export type Page = {
    email?: string;
    meta_title?: string | null;
    body?: string | null;
    feed?: string;
    link?: string;
    contact_fields?: string;
    meta_keywords?: string | null;
    meta_description?: string | null;
    search_keywords?: string | null;
    url?: string;
    channel_id?: number;
} & PageBase;
export type PageBase = {
    name: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type: 'page' | 'raw' | 'contact_form' | 'feed' | 'link' | 'blog';
    is_homepage?: boolean;
    is_customers_only?: boolean;
};
export type AnyTypePage = {
    readonly id?: number;
    readonly channel_id?: number;
    name: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type: 'page' | 'raw' | 'contact_form' | 'feed' | 'link' | 'blog';
    is_homepage?: boolean;
    is_customers_only?: boolean;
    url?: string;
};
export type TypePage = AnyTypePage & PageMeta & SearchKeywords;
export type TypeBlog = AnyTypePage & PageMeta & SearchKeywords & {
    url?: string;
};
export type TypeContactForm = AnyTypePage & PageMeta & SearchKeywords & {
    email?: string;
    contact_fields?: string;
};
export type TypeFeed = AnyTypePage & PageMeta & SearchKeywords & {
    feed: string;
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
export type ReadShared = {
    name: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type: 'page' | 'contact_form' | 'raw' | 'blog' | 'feed' | 'link';
    is_homepage?: boolean;
    is_customers_only?: boolean;
};
export type AnyTypePageWritable = {
    name: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type: 'page' | 'raw' | 'contact_form' | 'feed' | 'link' | 'blog';
    is_homepage?: boolean;
    is_customers_only?: boolean;
    url?: string;
};
export type Accept = string;
export type ContentType = string;
export type StoreHashPath = string;
export type PageIdPath = string;
export type IncludeQuery = 'body';
export type ChannelIdQuery = number;
export type IdInQueryGet = string;
export type IdInQueryDelete = string;
export type NameQuery = string;
export type NameLikeQuery = string;
export type LimitQuery = number;
export type PageQuery = number;
export type ContentPagesDeleteData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        'id:in': string;
    };
    url: '/content/pages';
};
export type ContentPagesDeleteErrors = {
    404: ResponseErrorBrief;
    422: ResponseErrorDetailed;
};
export type ContentPagesDeleteError = ContentPagesDeleteErrors[keyof ContentPagesDeleteErrors];
export type ContentPagesDeleteResponses = {
    204: void;
};
export type ContentPagesDeleteResponse = ContentPagesDeleteResponses[keyof ContentPagesDeleteResponses];
export type ContentPagesGetData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
        'id:in'?: string;
        name?: string;
        'name:like'?: string;
        limit?: number;
        page?: number;
        include?: 'body';
    };
    url: '/content/pages';
};
export type ContentPagesGetErrors = {
    400: ResponseErrorDetailed;
    422: ResponseErrorItemized;
};
export type ContentPagesGetError = ContentPagesGetErrors[keyof ContentPagesGetErrors];
export type ContentPagesGetResponses = {
    200: PagesCollectionResponse;
};
export type ContentPagesGetResponse = ContentPagesGetResponses[keyof ContentPagesGetResponses];
export type ContentPagesPostData = {
    body: Page;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        include?: 'body';
    };
    url: '/content/pages';
};
export type ContentPagesPostErrors = {
    422: ResponseErrorDetailed;
};
export type ContentPagesPostError = ContentPagesPostErrors[keyof ContentPagesPostErrors];
export type ContentPagesPostResponses = {
    201: {
        data?: TypePage | TypeBlog | TypeContactForm | TypeFeed | TypeRaw | TypeLink;
        meta?: ResponseMeta;
    };
    207: unknown;
};
export type ContentPagesPostResponse = ContentPagesPostResponses[keyof ContentPagesPostResponses];
export type ContentPagesPutData = {
    body?: PagePutBulk | Array<PagePutBulk>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        include?: 'body';
    };
    url: '/content/pages';
};
export type ContentPagesPutErrors = {
    404: ResponseErrorBrief;
    422: ResponseErrorDetailed;
};
export type ContentPagesPutError = ContentPagesPutErrors[keyof ContentPagesPutErrors];
export type ContentPagesPutResponses = {
    200: PagesCollectionResponse;
};
export type ContentPagesPutResponse = ContentPagesPutResponses[keyof ContentPagesPutResponses];
export type ContentPageDeleteData = {
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
export type ContentPageDeleteErrors = {
    404: ResponseErrorBrief;
};
export type ContentPageDeleteError = ContentPageDeleteErrors[keyof ContentPageDeleteErrors];
export type ContentPageDeleteResponses = {
    204: void;
};
export type ContentPageDeleteResponse = ContentPageDeleteResponses[keyof ContentPageDeleteResponses];
export type ContentPageGetData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        pageId: string;
    };
    query?: {
        include?: 'body';
    };
    url: '/content/pages/{pageId}';
};
export type ContentPageGetErrors = {
    404: ResponseErrorBrief;
    422: ResponseErrorItemized;
};
export type ContentPageGetError = ContentPageGetErrors[keyof ContentPageGetErrors];
export type ContentPageGetResponses = {
    200: PageResponse;
};
export type ContentPageGetResponse = ContentPageGetResponses[keyof ContentPageGetResponses];
export type ContentPagePutData = {
    body: PagePut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        pageId: string;
    };
    query?: {
        include?: 'body';
    };
    url: '/content/pages/{pageId}';
};
export type ContentPagePutErrors = {
    400: ResponseErrorDetailed;
    404: ResponseErrorBrief;
    422: ResponseErrorDetailed;
};
export type ContentPagePutError = ContentPagePutErrors[keyof ContentPagePutErrors];
export type ContentPagePutResponses = {
    200: PageResponse;
};
export type ContentPagePutResponse = ContentPagePutResponses[keyof ContentPagePutResponses];
