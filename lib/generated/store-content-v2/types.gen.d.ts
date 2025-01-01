export type addresses = {
    url?: string;
    resource?: string;
};
export type authentication = {
    force_reset?: string;
    password?: string;
    password_confirmation?: string;
};
export type blogPost_Base = {
    title: string;
    url?: string;
    readonly preview_url?: string;
    body: string;
    tags?: Array<(string)>;
    readonly summary?: string;
    is_published?: boolean;
    published_date?: publishedDate;
    published_date_iso8601?: string;
    meta_description?: string;
    meta_keywords?: string;
    author?: string;
    thumbnail_path?: string;
};
export type blogPost_Base_Post = {
    title: string;
    url?: string;
    body: string;
    tags?: Array<(string)>;
    is_published?: boolean;
    meta_description?: string;
    meta_keywords?: string;
    author?: string;
    thumbnail_path?: string;
    published_date?: string;
};
export type blogPost_Base_Res = {
    title?: string;
    url?: string;
    readonly preview_url?: string;
    body?: string;
    tags?: Array<(string)>;
    readonly summary?: string;
    is_published?: boolean;
    published_date?: publishedDate;
    published_date_iso8601?: string;
    meta_description?: (string) | null;
    meta_keywords?: (string) | null;
    author?: (string) | null;
    thumbnail_path?: (string) | null;
};
export type blogPost_Full = {
    readonly id?: number;
} & blogPost_Base_Res;
export type blogTags = Array<{
    tag?: string;
    post_ids?: Array<(number)>;
}>;
export type categoryAccessLevel = {
    type?: 'all' | 'specific' | 'none';
    categories?: Array<(number)>;
};
export type type = 'all' | 'specific' | 'none';
export type count_Response = {
    count?: number;
};
export type customer_Full = {
    readonly id?: number;
    _authentication?: {
        force_reset?: string;
        password?: string;
        password_confirmation?: string;
    };
    company?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    readonly date_created?: string;
    readonly date_modified?: string;
    store_credit?: string;
    registration_ip_address?: string;
    customer_group_id?: number;
    notes?: string;
    tax_exempt_category?: string;
    readonly accepts_marketing?: boolean;
    addresses?: addresses;
    readonly form_fields?: Array<formField>;
    reset_pass_on_login?: boolean;
};
export type dateFormat = {
    display?: string;
    export?: string;
    extended_display?: string;
};
export type formField = {
    name?: string;
    value?: string;
};
export type forward = {
    type?: string;
    ref?: number;
};
export type page_Base = {
    channel_id?: number;
    name: string;
    meta_title?: string;
    body: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    meta_keywords?: string;
    type: 'page' | 'rss_feed' | 'contact_form' | 'raw' | 'link';
    meta_description?: string;
    is_homepage?: boolean;
    is_customers_only?: boolean;
    search_keywords?: string;
    has_mobile_version?: boolean;
    mobile_body?: string;
    contact_fields?: string;
    email?: string;
    url?: string;
    layout_file?: string;
    feed?: string;
    link?: string;
    content_type?: 'application/json' | 'text/javascript' | 'text/html';
};
export type type2 = 'page' | 'rss_feed' | 'contact_form' | 'raw' | 'link';
export type content_type = 'application/json' | 'text/javascript' | 'text/html';
export type page_Base_Res = {
    channel_id?: number;
    name?: string;
    meta_title?: string;
    email?: string;
    body?: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    meta_keywords?: string;
    type?: 'page' | 'rss_feed' | 'contact_form' | 'raw' | 'link';
    contact_fields?: string;
    meta_description?: string;
    is_homepage?: boolean;
    layout_file?: string;
    is_customers_only?: boolean;
    search_keywords?: string;
    has_mobile_version?: boolean;
    mobile_body?: string;
    content_type?: 'application/json' | 'text/javascript' | 'text/html';
    url?: string;
    feed?: string;
    link?: string;
};
export type page_Full = {
    readonly id?: number;
} & page_Base_Res;
export type ParameterAccept = string;
export type ParameterContentType = string;
export type publishedDate = {
    timezone_type?: number;
    date?: string;
    timezone?: string;
};
export type redirect = {
    id?: number;
    path: string;
    forward: forward;
    readonly url?: string;
};
export type timeZone = {
    name?: string;
    raw_offset?: number;
    dst_offset?: number;
    dst_correction?: boolean;
    date_format?: dateFormat;
};
export type GetBlogTagsData = {
    headers: {
        Accept: string;
    };
};
export type GetBlogTagsResponse = (Array<blogTags>);
export type GetBlogTagsError = unknown;
export type GetBlogPostsData = {
    headers: {
        Accept: string;
    };
    query?: {
        is_published?: boolean;
        limit?: number;
        page?: number;
        published_date?: string;
        tag?: string;
        url?: string;
    };
};
export type GetBlogPostsResponse = (Array<blogPost_Full>);
export type GetBlogPostsError = unknown;
export type CreateBlogPostsData = {
    body: blogPost_Base_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateBlogPostsResponse = (blogPost_Base_Res | {
    [key: string]: unknown;
});
export type CreateBlogPostsError = unknown;
export type DeleteBlogPostsData = {
    headers: {
        Accept: string;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type DeleteBlogPostsResponse = (void);
export type DeleteBlogPostsError = unknown;
export type GetBlogPostData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
};
export type GetBlogPostResponse = (blogPost_Full);
export type GetBlogPostError = unknown;
export type UpdateBlogPostData = {
    body: blogPost_Base_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
};
export type UpdateBlogPostResponse = (blogPost_Base_Res | {
    [key: string]: unknown;
});
export type UpdateBlogPostError = unknown;
export type DeleteBlogPostData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
};
export type DeleteBlogPostResponse = (void);
export type DeleteBlogPostError = unknown;
export type GetBlogPostsCountData = {
    headers: {
        Accept: string;
    };
};
export type GetBlogPostsCountResponse = (count_Response);
export type GetBlogPostsCountError = unknown;
export type GetPagesData = {
    headers: {
        Accept: string;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type GetPagesResponse = (Array<page_Full>);
export type GetPagesError = unknown;
export type CreatePageData = {
    body: page_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreatePageResponse = (page_Full | {
    [key: string]: unknown;
});
export type CreatePageError = unknown;
export type GetPageData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
};
export type GetPageResponse = (page_Full);
export type GetPageError = unknown;
export type UpdatePageData = {
    body?: page_Full;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
};
export type UpdatePageResponse = (page_Full | {
    [key: string]: unknown;
});
export type UpdatePageError = unknown;
export type DeletePageData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
};
export type DeletePageResponse = (void);
export type DeletePageError = unknown;
export type GetRedirectsData = {
    headers: {
        Accept: string;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type GetRedirectsResponse = (Array<redirect>);
export type GetRedirectsError = unknown;
export type CreateRedirectData = {
    body: redirect;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateRedirectResponse = (redirect);
export type CreateRedirectError = unknown;
export type DeleteRedirectsData = {
    headers: {
        Accept: string;
    };
};
export type DeleteRedirectsResponse = (void);
export type DeleteRedirectsError = unknown;
export type GetRedirectData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
};
export type GetRedirectResponse = (redirect);
export type GetRedirectError = unknown;
export type UpdateRedirectData = {
    body: {
        id?: number;
        path: string;
        forward: {
            type?: string;
            ref?: string;
        };
        readonly url?: string;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
};
export type UpdateRedirectResponse = (redirect);
export type UpdateRedirectError = unknown;
export type DeleteRedirectData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
};
export type DeleteRedirectResponse = (void);
export type DeleteRedirectError = unknown;
export type GetRedirectsCountData = {
    headers: {
        Accept: string;
    };
};
export type GetRedirectsCountResponse = (count_Response);
export type GetRedirectsCountError = unknown;
