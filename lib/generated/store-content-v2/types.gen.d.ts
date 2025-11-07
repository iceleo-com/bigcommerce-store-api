export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2' | (string & {});
};
export type BlogPostFull = {
    readonly id?: number;
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
    readonly id?: number;
} & PageBaseRes;
export type Redirect = {
    id?: number;
    path: string;
    forward: Forward;
    readonly url?: string;
};
export type Forward = {
    type?: string;
    ref?: number;
};
export type CustomerFull = {
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
    addresses?: Addresses;
    readonly form_fields?: Array<FormField>;
    reset_pass_on_login?: boolean;
};
export type CategoryAccessLevel = {
    type?: 'all' | 'specific' | 'none';
    categories?: Array<number>;
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
    readonly preview_url?: string;
    body: string;
    tags?: Array<string>;
    readonly summary?: string;
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
    readonly preview_url?: string;
    body?: string;
    tags?: Array<string>;
    readonly summary?: string;
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
export type PageBase = {
    channel_id?: number;
    name: string;
    meta_title?: string;
    body: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    meta_keywords?: string;
    type: 'page' | 'contact_form' | 'raw' | 'link';
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
    link?: string;
    content_type?: 'application/json' | 'text/javascript' | 'text/html';
};
export type PageBaseRes = {
    channel_id?: number;
    name?: string;
    meta_title?: string;
    email?: string;
    body?: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    meta_keywords?: string;
    type?: 'page' | 'contact_form' | 'raw' | 'link';
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
    link?: string;
};
export type BlogPostFullWritable = BlogPostBaseResWritable;
export type PageFullWritable = PageBaseRes;
export type RedirectWritable = {
    id?: number;
    path: string;
    forward: Forward;
};
export type CustomerFullWritable = {
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
    store_credit?: string;
    registration_ip_address?: string;
    customer_group_id?: number;
    notes?: string;
    tax_exempt_category?: string;
    addresses?: Addresses;
    reset_pass_on_login?: boolean;
};
export type BlogPostBaseWritable = {
    title: string;
    url?: string;
    body: string;
    tags?: Array<string>;
    is_published?: boolean;
    published_date?: PublishedDate;
    published_date_iso8601?: string;
    meta_description?: string;
    meta_keywords?: string;
    author?: string;
    thumbnail_path?: string;
};
export type BlogPostBaseResWritable = {
    title?: string;
    url?: string;
    body?: string;
    tags?: Array<string>;
    is_published?: boolean;
    published_date?: PublishedDate;
    published_date_iso8601?: string;
    meta_description?: string | null;
    meta_keywords?: string | null;
    author?: string | null;
    thumbnail_path?: string | null;
};
export type Accept = string;
export type ContentType = string;
export type GetBlogTagsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/blog/tags';
};
export type GetBlogTagsResponses = {
    200: Array<BlogTags>;
};
export type GetBlogTagsResponse = GetBlogTagsResponses[keyof GetBlogTagsResponses];
export type DeleteBlogPostsData = {
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
export type DeleteBlogPostsResponses = {
    204: void;
};
export type DeleteBlogPostsResponse = DeleteBlogPostsResponses[keyof DeleteBlogPostsResponses];
export type GetBlogPostsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        is_published?: boolean;
        url?: string;
        tag?: string;
        published_date?: string;
        page?: number;
        limit?: number;
    };
    url: '/blog/posts';
};
export type GetBlogPostsResponses = {
    200: Array<BlogPostFull>;
};
export type GetBlogPostsResponse = GetBlogPostsResponses[keyof GetBlogPostsResponses];
export type CreateBlogPostsData = {
    body: BlogPostBasePost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/blog/posts';
};
export type CreateBlogPostsResponses = {
    200: BlogPostBaseRes;
    207: {
        [key: string]: unknown;
    };
};
export type CreateBlogPostsResponse = CreateBlogPostsResponses[keyof CreateBlogPostsResponses];
export type DeleteBlogPostData = {
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
export type DeleteBlogPostResponses = {
    204: void;
};
export type DeleteBlogPostResponse = DeleteBlogPostResponses[keyof DeleteBlogPostResponses];
export type GetBlogPostData = {
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
export type GetBlogPostResponses = {
    200: BlogPostFull;
};
export type GetBlogPostResponse = GetBlogPostResponses[keyof GetBlogPostResponses];
export type UpdateBlogPostData = {
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
export type UpdateBlogPostResponses = {
    200: BlogPostBaseRes;
    207: {
        [key: string]: unknown;
    };
};
export type UpdateBlogPostResponse = UpdateBlogPostResponses[keyof UpdateBlogPostResponses];
export type GetBlogPostsCountData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/blog/posts/count';
};
export type GetBlogPostsCountResponses = {
    200: CountResponse;
};
export type GetBlogPostsCountResponse = GetBlogPostsCountResponses[keyof GetBlogPostsCountResponses];
export type GetPagesData = {
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
export type GetPagesResponses = {
    200: Array<PageFull>;
};
export type GetPagesResponse = GetPagesResponses[keyof GetPagesResponses];
export type CreatePageData = {
    body: PageBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/pages';
};
export type CreatePageResponses = {
    200: PageFull;
    207: {
        [key: string]: unknown;
    };
};
export type CreatePageResponse = CreatePageResponses[keyof CreatePageResponses];
export type DeletePageData = {
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
        id: number;
    };
    query?: never;
    url: '/pages/{id}';
};
export type GetPageResponses = {
    200: PageFull;
};
export type GetPageResponse = GetPageResponses[keyof GetPageResponses];
export type UpdatePageData = {
    body?: PageFullWritable;
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
export type UpdatePageResponses = {
    200: PageFull;
    207: {
        [key: string]: unknown;
    };
};
export type UpdatePageResponse = UpdatePageResponses[keyof UpdatePageResponses];
export type DeleteRedirectsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/redirects';
};
export type DeleteRedirectsResponses = {
    204: void;
};
export type DeleteRedirectsResponse = DeleteRedirectsResponses[keyof DeleteRedirectsResponses];
export type GetRedirectsData = {
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
export type GetRedirectsResponses = {
    200: Array<Redirect>;
};
export type GetRedirectsResponse = GetRedirectsResponses[keyof GetRedirectsResponses];
export type CreateRedirectData = {
    body: RedirectWritable;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/redirects';
};
export type CreateRedirectResponses = {
    200: Redirect;
};
export type CreateRedirectResponse = CreateRedirectResponses[keyof CreateRedirectResponses];
export type DeleteRedirectData = {
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
export type DeleteRedirectResponses = {
    204: void;
};
export type DeleteRedirectResponse = DeleteRedirectResponses[keyof DeleteRedirectResponses];
export type GetRedirectData = {
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
export type GetRedirectResponses = {
    200: Redirect;
};
export type GetRedirectResponse = GetRedirectResponses[keyof GetRedirectResponses];
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
    query?: never;
    url: '/redirects/{id}';
};
export type UpdateRedirectResponses = {
    200: Redirect;
};
export type UpdateRedirectResponse = UpdateRedirectResponses[keyof UpdateRedirectResponses];
export type GetRedirectsCountData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/redirects/count';
};
export type GetRedirectsCountResponses = {
    200: CountResponse;
};
export type GetRedirectsCountResponse = GetRedirectsCountResponses[keyof GetRedirectsCountResponses];
