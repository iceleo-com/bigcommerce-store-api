export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type ContentPagesGetParametersIncludeSchemaItems = 'body';
export type TypePageType = 'page' | 'raw' | 'contact_form' | 'link' | 'blog';
export type TypePage = {
    id?: number;
    channel_id?: number;
    name: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type: TypePageType;
    is_homepage?: boolean;
    is_customers_only?: boolean;
    url?: string;
    meta_title?: string | null;
    meta_keywords?: string | null;
    meta_description?: string | null;
    search_keywords?: string | null;
};
export type TypeBlogType = 'page' | 'raw' | 'contact_form' | 'link' | 'blog';
export type TypeBlog = {
    id?: number;
    channel_id?: number;
    name: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type: TypeBlogType;
    is_homepage?: boolean;
    is_customers_only?: boolean;
    url?: string;
    meta_title?: string | null;
    meta_keywords?: string | null;
    meta_description?: string | null;
    search_keywords?: string | null;
};
export type TypeContactFormType = 'page' | 'raw' | 'contact_form' | 'link' | 'blog';
export type TypeContactForm = {
    id?: number;
    channel_id?: number;
    name: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type: TypeContactFormType;
    is_homepage?: boolean;
    is_customers_only?: boolean;
    url?: string;
    meta_title?: string | null;
    meta_keywords?: string | null;
    meta_description?: string | null;
    search_keywords?: string | null;
    email?: string;
    contact_fields?: string;
};
export type TypeRawType = 'page' | 'raw' | 'contact_form' | 'link' | 'blog';
export type TypeRaw = {
    id?: number;
    channel_id?: number;
    name: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type: TypeRawType;
    is_homepage?: boolean;
    is_customers_only?: boolean;
    url?: string;
    search_keywords?: string | null;
    body: string | null;
    content_type?: string;
};
export type TypeLinkType = 'page' | 'raw' | 'contact_form' | 'link' | 'blog';
export type TypeLink = {
    id?: number;
    channel_id?: number;
    name: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type: TypeLinkType;
    is_homepage?: boolean;
    is_customers_only?: boolean;
    url?: string;
    link: string;
};
export type PagesCollectionResponseDataItems = TypePage | TypeBlog | TypeContactForm | TypeRaw | TypeLink;
export type ResponseMetaPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type ResponseMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: ResponseMetaPaginationLinks;
};
export type ResponseMeta = {
    pagination?: ResponseMetaPagination;
};
export type PagesCollectionResponse = {
    data?: Array<PagesCollectionResponseDataItems>;
    meta?: ResponseMeta;
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
export type ContentPagesPostParametersIncludeSchemaItems = 'body';
export type PagesBulkCreatePagesRequest0 = TypePage | TypeBlog | TypeContactForm | TypeRaw | TypeLink;
export type ContentPagesPostRequestBodyContentApplicationJsonSchemaOneOf1Items = TypePage | TypeBlog | TypeContactForm | TypeRaw | TypeLink;
export type PagesBulkCreatePagesRequest1 = Array<ContentPagesPostRequestBodyContentApplicationJsonSchemaOneOf1Items>;
export type PagesBulkCreatePagesRequest = PagesBulkCreatePagesRequest0 | PagesBulkCreatePagesRequest1;
export type ContentPagesPostResponsesContentApplicationJsonSchemaData = TypePage | TypeBlog | TypeContactForm | TypeRaw | TypeLink;
export type PagesBulkCreatePagesResponse201 = {
    data?: ContentPagesPostResponsesContentApplicationJsonSchemaData;
    meta?: ResponseMeta;
};
export type ContentPagesPutParametersIncludeSchemaItems = 'body';
export type PagePutObjType = 'page' | 'raw' | 'contact_form' | 'link' | 'blog';
export type PagePutBulk = {
    channel_id?: number;
    name?: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type?: PagePutObjType;
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
    id: number;
};
export type PagesBulkUpdatePagesRequest1 = Array<PagePutBulk>;
export type PagesBulkUpdatePagesRequest = PagePutBulk | PagesBulkUpdatePagesRequest1;
export type ResponseErrorBrief = {
    status: number;
    title?: string;
    type?: string;
};
export type ContentPagesPageIdGetParametersIncludeSchemaItems = 'body';
export type SinglePageResponseData = TypePage | TypeBlog | TypeContactForm | TypeRaw | TypeLink;
export type SinglePageResponse = {
    data?: SinglePageResponseData;
    meta?: ResponseMeta;
};
export type ContentPagesPageIdPutParametersIncludeSchemaItems = 'body';
export type PagePutObj = {
    channel_id?: number;
    name?: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type?: PagePutObjType;
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
    204: {
        [key: string]: unknown;
    };
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
        include?: Array<ContentPagesGetParametersIncludeSchemaItems>;
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
    body?: PagesBulkCreatePagesRequest;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        include?: Array<ContentPagesPostParametersIncludeSchemaItems>;
    };
    url: '/content/pages';
};
export type CreatePagesErrors = {
    422: ResponseErrorDetailed;
};
export type CreatePagesError = CreatePagesErrors[keyof CreatePagesErrors];
export type CreatePagesResponses = {
    201: PagesBulkCreatePagesResponse201;
};
export type CreatePagesResponse = CreatePagesResponses[keyof CreatePagesResponses];
export type UpdatePagesData = {
    body?: PagesBulkUpdatePagesRequest;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        include?: Array<ContentPagesPutParametersIncludeSchemaItems>;
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
    204: {
        [key: string]: unknown;
    };
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
        include?: Array<ContentPagesPageIdGetParametersIncludeSchemaItems>;
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
    body?: PagePutObj;
    headers: {
        Accept: string;
    };
    path: {
        pageId: string;
    };
    query?: {
        include?: Array<ContentPagesPageIdPutParametersIncludeSchemaItems>;
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
