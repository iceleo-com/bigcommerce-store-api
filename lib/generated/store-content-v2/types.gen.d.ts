export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2' | (string & {});
};
export type BlogPostFull = {
    id?: number;
} & BlogPostBaseRes;
export type Addresses = {
    url?: string;
    resource?: string;
};
export type FormField = {
    name?: string;
    value?: string;
};
export type PageFull = {
    id?: number;
} & PageBaseRes;
export type Redirect = {
    id?: number;
    path: string;
    forward: Forward;
    url?: string;
};
export type Forward = {
    type?: string;
    ref?: number;
};
export type CustomerFull = {
    id?: number;
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
    date_created?: string;
    date_modified?: string;
    store_credit?: string;
    registration_ip_address?: string;
    customer_group_id?: number;
    notes?: string;
    tax_exempt_category?: string;
    accepts_marketing?: boolean;
    addresses?: Addresses;
    form_fields?: Array<FormField>;
    reset_pass_on_login?: boolean;
};
export type CategoryAccessLevel = {
    type?: 'all' | 'specific' | 'none';
    categories?: Array<string>;
};
export type TimeZone = {
    name?: string;
    raw_offset?: number;
    dst_offset?: number;
    dst_correction?: boolean;
    date_format?: DateFormat;
};
export type CountResponse = {
    count?: number;
};
export type DateFormat = {
    display?: string;
    export?: string;
    extended_display?: string;
};
export type BlogTags = Array<{
    tag?: string;
    post_ids?: Array<number>;
}>;
export type BlogPostBasePost = {
    title: string;
    url?: string;
    body: string;
    tags?: Array<string>;
    is_published?: boolean;
    meta_description?: string;
    meta_keywords?: string;
    author?: string;
    thumbnail_path?: string;
    published_date?: string;
};
export type BlogPostBase = {
    title: string;
    url?: string;
    preview_url?: string;
    body: string;
    tags?: Array<string>;
    summary?: string;
    is_published?: boolean;
    published_date?: PublishedDate;
    published_date_iso8601?: string;
    meta_description?: string;
    meta_keywords?: string;
    author?: string;
    thumbnail_path?: string;
};
export type BlogPostBaseRes = {
    title?: string;
    url?: string;
    preview_url?: string;
    body?: string;
    tags?: Array<string>;
    summary?: string;
    is_published?: boolean;
    published_date?: PublishedDate;
    published_date_iso8601?: string;
    meta_description?: string | null;
    meta_keywords?: string | null;
    author?: string | null;
    thumbnail_path?: string | null;
};
export type PublishedDate = {
    timezone_type?: number;
    date?: string;
    timezone?: string;
};
export type Authentication = {
    force_reset?: string;
    password?: string;
    password_confirmation?: string;
};
export type CustomerBase = {
    [key: string]: unknown;
};
export type PageBase = {
    parent_id?: number;
    type: 'page' | 'rss_feed' | 'contact_form' | 'raw' | 'link';
    contact_fields?: string;
    email?: string;
    name: string;
    url?: string;
    meta_description?: string;
    body: string;
    mobile_body?: string;
    has_mobile_version?: boolean;
    is_visible?: boolean;
    is_homepage?: boolean;
    meta_title?: string;
    layout_file?: string;
    sort_order?: number;
    search_keywords?: string;
    meta_keywords?: string;
    feed?: string;
    link?: string;
    content_type?: 'application/json' | 'text/javascript' | 'text/html';
};
export type PageBaseRes = {
    parent_id?: number;
    type?: 'page' | 'rss_feed' | 'contact_form' | 'raw' | 'link';
    contact_fields?: string;
    email?: string;
    name?: string;
    url?: string;
    meta_description?: string;
    body?: string;
    mobile_body?: string;
    has_mobile_version?: boolean;
    is_visible?: boolean;
    is_homepage?: boolean;
    meta_title?: string;
    layout_file?: string;
    sort_order?: number;
    search_keywords?: string;
    meta_keywords?: string;
    feed?: string;
    link?: string;
    content_type?: 'application/json' | 'text/javascript' | 'text/html';
};
export type Accept = string;
export type ContentType = string;
export type GetAllBlogTagsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/blog/tags';
};
export type GetAllBlogTagsResponses = {
    200: Array<BlogTags>;
};
export type GetAllBlogTagsResponse = GetAllBlogTagsResponses[keyof GetAllBlogTagsResponses];
export type DeleteAllBlogPostsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/blog/posts';
};
export type DeleteAllBlogPostsResponses = {
    204: void;
};
export type DeleteAllBlogPostsResponse = DeleteAllBlogPostsResponses[keyof DeleteAllBlogPostsResponses];
export type GetAllBlogPostsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        is_published?: string;
        url?: string;
        tag?: string;
        published_date?: string;
        page?: number;
        limit?: number;
    };
    url: '/blog/posts';
};
export type GetAllBlogPostsResponses = {
    200: Array<BlogPostFull>;
};
export type GetAllBlogPostsResponse = GetAllBlogPostsResponses[keyof GetAllBlogPostsResponses];
export type CreateABlogPostsData = {
    body: BlogPostBasePost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/blog/posts';
};
export type CreateABlogPostsResponses = {
    200: BlogPostBaseRes;
    207: {
        [key: string]: unknown;
    };
};
export type CreateABlogPostsResponse = CreateABlogPostsResponses[keyof CreateABlogPostsResponses];
export type DeleteABlogPostData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/blog/posts/{id}';
};
export type DeleteABlogPostResponses = {
    204: void;
};
export type DeleteABlogPostResponse = DeleteABlogPostResponses[keyof DeleteABlogPostResponses];
export type GetABlogPostData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/blog/posts/{id}';
};
export type GetABlogPostResponses = {
    200: BlogPostFull;
};
export type GetABlogPostResponse = GetABlogPostResponses[keyof GetABlogPostResponses];
export type UpdateABlogPostData = {
    body: BlogPostBasePost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/blog/posts/{id}';
};
export type UpdateABlogPostResponses = {
    200: BlogPostBaseRes;
    207: {
        [key: string]: unknown;
    };
};
export type UpdateABlogPostResponse = UpdateABlogPostResponses[keyof UpdateABlogPostResponses];
export type GetACountOfAllBlogPostsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/blog/posts/count';
};
export type GetACountOfAllBlogPostsResponses = {
    200: CountResponse;
};
export type GetACountOfAllBlogPostsResponse = GetACountOfAllBlogPostsResponses[keyof GetACountOfAllBlogPostsResponses];
export type GetAllPagesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/pages';
};
export type GetAllPagesResponses = {
    200: Array<PageFull>;
};
export type GetAllPagesResponse = GetAllPagesResponses[keyof GetAllPagesResponses];
export type CreateAPageData = {
    body: PageBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/pages';
};
export type CreateAPageResponses = {
    200: PageFull;
    207: {
        [key: string]: unknown;
    };
};
export type CreateAPageResponse = CreateAPageResponses[keyof CreateAPageResponses];
export type DeleteAPageData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/pages/{id}';
};
export type DeleteAPageResponses = {
    204: void;
};
export type DeleteAPageResponse = DeleteAPageResponses[keyof DeleteAPageResponses];
export type GetAPageData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/pages/{id}';
};
export type GetAPageResponses = {
    200: PageFull;
};
export type GetAPageResponse = GetAPageResponses[keyof GetAPageResponses];
export type UpdateAPageData = {
    body?: PageBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/pages/{id}';
};
export type UpdateAPageResponses = {
    200: PageBase;
    207: {
        [key: string]: unknown;
    };
};
export type UpdateAPageResponse = UpdateAPageResponses[keyof UpdateAPageResponses];
export type DeleteAllRedirectsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/redirects';
};
export type DeleteAllRedirectsResponses = {
    204: void;
};
export type DeleteAllRedirectsResponse = DeleteAllRedirectsResponses[keyof DeleteAllRedirectsResponses];
export type GetAListofRedirectsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/redirects';
};
export type GetAListofRedirectsResponses = {
    200: Array<Redirect>;
};
export type GetAListofRedirectsResponse = GetAListofRedirectsResponses[keyof GetAListofRedirectsResponses];
export type CreateARedirectData = {
    body: Redirect;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/redirects';
};
export type CreateARedirectResponses = {
    200: Redirect;
};
export type CreateARedirectResponse = CreateARedirectResponses[keyof CreateARedirectResponses];
export type DeleteARedirectData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/redirects/{id}';
};
export type DeleteARedirectResponses = {
    204: void;
};
export type DeleteARedirectResponse = DeleteARedirectResponses[keyof DeleteARedirectResponses];
export type GetARedirectUrlData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/redirects/{id}';
};
export type GetARedirectUrlResponses = {
    200: Redirect;
};
export type GetARedirectUrlResponse = GetARedirectUrlResponses[keyof GetARedirectUrlResponses];
export type UpdateARedirectUrlData = {
    body: {
        id?: number;
        path: string;
        forward: {
            type?: string;
            ref?: string;
        };
        url?: string;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/redirects/{id}';
};
export type UpdateARedirectUrlResponses = {
    200: Redirect;
};
export type UpdateARedirectUrlResponse = UpdateARedirectUrlResponses[keyof UpdateARedirectUrlResponses];
export type GetACountOfRedirectsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/redirects/count';
};
export type GetACountOfRedirectsResponses = {
    200: CountResponse;
};
export type GetACountOfRedirectsResponse = GetACountOfRedirectsResponses[keyof GetACountOfRedirectsResponses];
