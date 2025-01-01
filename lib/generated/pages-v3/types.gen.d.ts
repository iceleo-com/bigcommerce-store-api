export type anyTypePage = {
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
export type type = 'page' | 'raw' | 'contact_form' | 'feed' | 'link' | 'blog';
export type pageMeta = {
    meta_title?: (string) | null;
    meta_keywords?: (string) | null;
    meta_description?: (string) | null;
};
export type PagePutBulk = {
    id?: number;
} & PagePutObj & {
    id: number;
};
export type PagePutObj = {
    channel_id?: number;
    name?: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    type?: 'page' | 'raw' | 'contact_form' | 'feed' | 'link' | 'blog';
    body?: (string) | null;
    is_homepage?: boolean;
    is_customers_only?: boolean;
    email?: string;
    meta_title?: (string) | null;
    feed?: string;
    link?: string;
    contact_fields?: string;
    meta_keywords?: (string) | null;
    meta_description?: (string) | null;
    search_keywords?: (string) | null;
    url?: string;
};
export type PagesCollectionResponse = {
    data?: Array<(typePage | typeBlog | typeContactForm | typeFeed | typeRaw | typeLink)>;
    meta?: ResponseMeta;
};
export type ParameterAccept = string;
export type ParameterchannelIdQuery = number;
export type ParameterContentType = string;
export type ParameterdeleteChildrenQuery = boolean;
export type ParameteridInQueryDelete = Array<(number)>;
export type ParameteridInQueryGet = Array<(number)>;
export type ParameterincludeQuery = Array<('body')>;
export type ParameterlimitQuery = number;
export type ParameternameLikeQuery = string;
export type ParameternameQuery = string;
export type ParameterpageIdPath = string;
export type ParameterpageQuery = number;
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
    errors?: Array<(string)>;
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
export type searchKeywords = {
    search_keywords?: (string) | null;
};
export type SinglePageResponse = {
    data?: (typePage | typeBlog | typeContactForm | typeFeed | typeRaw | typeLink);
    meta?: ResponseMeta;
};
export type typeBlog = unknown & anyTypePage & pageMeta & searchKeywords & {
    url?: string;
};
export type typeContactForm = anyTypePage & pageMeta & searchKeywords & {
    email?: string;
    contact_fields?: string;
};
export type typeFeed = anyTypePage & pageMeta & searchKeywords & {
    feed: string;
};
export type typeLink = anyTypePage & {
    link: string;
};
export type typePage = anyTypePage & pageMeta & searchKeywords;
export type typeRaw = anyTypePage & searchKeywords & {
    body: (string) | null;
    content_type?: string;
};
export type GetPagesData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
        'id:in'?: Array<(number)>;
        include?: Array<('body')>;
        limit?: number;
        name?: string;
        'name:like'?: string;
        page?: number;
    };
};
export type GetPagesResponse = (PagesCollectionResponse);
export type GetPagesError = (ResponseErrorDetailed | ResponseErrorItemized);
export type CreatePagesData = {
    body: ((typePage | typeBlog | typeContactForm | typeFeed | typeRaw | typeLink) | Array<(typePage | typeBlog | typeContactForm | typeFeed | typeRaw | typeLink)>);
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        include?: Array<('body')>;
    };
};
export type CreatePagesResponse = ({
    data?: (typePage | typeBlog | typeContactForm | typeFeed | typeRaw | typeLink);
    meta?: ResponseMeta;
} | unknown);
export type CreatePagesError = (ResponseErrorDetailed);
export type UpdatePagesData = {
    body?: (PagePutBulk | Array<PagePutBulk>);
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        include?: Array<('body')>;
    };
};
export type UpdatePagesResponse = (PagesCollectionResponse);
export type UpdatePagesError = (ResponseErrorBrief | ResponseErrorDetailed);
export type DeletePagesData = {
    headers: {
        Accept: string;
    };
    query: {
        delete_children?: boolean;
        'id:in': Array<(number)>;
    };
};
export type DeletePagesResponse = (void);
export type DeletePagesError = (ResponseErrorBrief | ResponseErrorDetailed);
export type GetPageData = {
    headers: {
        Accept: string;
    };
    path: {
        pageId: string;
    };
    query?: {
        include?: Array<('body')>;
    };
};
export type GetPageResponse = (SinglePageResponse);
export type GetPageError = (ResponseErrorBrief | ResponseErrorItemized);
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
        include?: Array<('body')>;
    };
};
export type UpdatePageResponse = (SinglePageResponse);
export type UpdatePageError = (ResponseErrorDetailed | ResponseErrorBrief);
export type DeletePageData = {
    headers: {
        Accept: string;
    };
    path: {
        pageId: string;
    };
};
export type DeletePageResponse = (void);
export type DeletePageError = (ResponseErrorBrief);
