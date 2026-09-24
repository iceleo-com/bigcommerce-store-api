export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2' | (string & {});
};
export type PublishedDate = {
    timezone_type?: number;
    date?: string;
    timezone?: string;
};
export type BlogPostFull = {
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
    id?: number;
};
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
export type CountResponse = {
    count?: number;
};
export type BlogTagsItems = {
    tag?: string;
    post_ids?: Array<number>;
};
export type BlogTags = Array<BlogTagsItems>;
export type PageBaseResType = 'page' | 'contact_form' | 'raw' | 'link';
export type PageBaseResContentType = 'application/json' | 'text/javascript' | 'text/html';
export type PageFull = {
    channel_id?: number;
    name?: string;
    meta_title?: string;
    email?: string;
    body?: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    meta_keywords?: string;
    type?: PageBaseResType;
    contact_fields?: string;
    meta_description?: string;
    is_homepage?: boolean;
    layout_file?: string;
    is_customers_only?: boolean;
    search_keywords?: string;
    has_mobile_version?: boolean;
    mobile_body?: string;
    content_type?: PageBaseResContentType;
    url?: string;
    link?: string;
    id?: number;
};
export type PageBaseType = 'page' | 'contact_form' | 'raw' | 'link';
export type PageBaseContentType = 'application/json' | 'text/javascript' | 'text/html';
export type PageBase = {
    channel_id?: number;
    name: string;
    meta_title?: string;
    body: string;
    is_visible?: boolean;
    parent_id?: number;
    sort_order?: number;
    meta_keywords?: string;
    type: PageBaseType;
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
    content_type?: PageBaseContentType;
};
export type Forward = {
    type?: string;
    ref?: number;
};
export type Redirect = {
    id?: number;
    path: string;
    forward: Forward;
    url?: string;
};
export type RedirectsIdPutRequestBodyContentApplicationJsonSchemaForward = {
    type?: string;
    ref?: string;
};
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
    204: {
        [key: string]: unknown;
    };
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
    body?: BlogPostBasePost;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/blog/posts';
};
export type CreateBlogPostsResponses = {
    200: BlogPostBaseRes;
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
    204: {
        [key: string]: unknown;
    };
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
    body?: BlogPostBasePost;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/blog/posts/{id}';
};
export type UpdateBlogPostResponses = {
    200: BlogPostBaseRes;
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
    body?: PageBase;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/pages';
};
export type CreatePageResponses = {
    200: PageFull;
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
    body?: PageFull;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/pages/{id}';
};
export type UpdatePageResponses = {
    200: PageFull;
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
    204: {
        [key: string]: unknown;
    };
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
    body?: Redirect;
    headers: {
        Accept: string;
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
    204: {
        [key: string]: unknown;
    };
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
    body?: {
        id?: number;
        path: string;
        forward: RedirectsIdPutRequestBodyContentApplicationJsonSchemaForward;
        url?: string;
    };
    headers: {
        Accept: string;
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
