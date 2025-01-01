import RequestService from '../helpers/request/request-service';
import * as StoreContentV2ApiSpecs from '../generated/store-content-v2';

export default class StoreContentV2Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Blog Tags
     *
     * Returns a list of *Blog Tags*.
     */
    getBlogTags(
    ) {
        return this.request.get<StoreContentV2ApiSpecs.GetBlogTagsResponse, any>({
            path: 'v2/blog/tags',
        });
    }

    /**
     * Get All Blog Posts
     *
     * Returns all *Blog Posts*. Default sorting is by published_date, beginning with the most recent post.
     */
    getBlogPosts(
        query?: StoreContentV2ApiSpecs.GetBlogPostsData['query'],
    ) {
        return this.request.get<StoreContentV2ApiSpecs.GetBlogPostsResponse, any>({
            path: 'v2/blog/posts',
            query,
        });
    }

    /**
     * Create a Blog Post
     *
     * Creates a *Blog Post*.

     **Required Fields**
     *   `title`
     *   `body`

     **Notes**

     * When including `published_date` in a request, supply it as a flat date string (not an object) in valid <a href="http://tools.ietf.org/html/rfc2822#section-3.3" target="_blank">RFC 2822</a>. The following example request includes a `published_date` in RFC 2822 format.
     * Blog posts default to draft status. To publish blog posts to the storefront, set the `is_published` property to `true`.
     * If a custom URL is not provided, the post’s URL will be generated based on the value of `title`.
     */
    createBlogPosts(
        requestBody: StoreContentV2ApiSpecs.CreateBlogPostsData['body'],
    ) {
        return this.request.post<StoreContentV2ApiSpecs.CreateBlogPostsResponse, any>({
            path: 'v2/blog/posts',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Blog Posts
     *
     * Deletes a page of `Blog Posts`.
     */
    deleteBlogPosts(
        query?: StoreContentV2ApiSpecs.DeleteBlogPostsData['query'],
    ) {
        return this.request.delete<any, any>({
            path: 'v2/blog/posts',
            query,
        });
    }

    /**
     * Get a Blog Post
     *
     * Returns a single *Blog Post*.
     */
    getBlogPost(
        id: StoreContentV2ApiSpecs.GetBlogPostData['path']['id'],
    ) {
        return this.request.get<StoreContentV2ApiSpecs.GetBlogPostResponse, any>({
            path: `v2/blog/posts/${id}`,
        });
    }

    /**
     * Update a Blog Post
     *
     * Updates a *Blog Post*.

     **Notes**

     * To include `published_date` in a request, provide a flat date string (not an object) in valid <a href="http://tools.ietf.org/html/rfc2822#section-3.3" target="_blank">RFC 2822</a>. The following example request includes a `published_date` in RFC 2822 format.

     * Blog posts default to draft status. To publish blog posts to the storefront, set the `is_published` property to `true`.
     */
    updateBlogPost(
        id: StoreContentV2ApiSpecs.UpdateBlogPostData['path']['id'],
        requestBody: StoreContentV2ApiSpecs.UpdateBlogPostData['body'],
    ) {
        return this.request.put<StoreContentV2ApiSpecs.UpdateBlogPostResponse, any>({
            path: `v2/blog/posts/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Blog Post
     *
     * Deletes a *Blog Post*.
     */
    deleteBlogPost(
        id: StoreContentV2ApiSpecs.DeleteBlogPostData['path']['id'],
    ) {
        return this.request.delete<any, any>({
            path: `v2/blog/posts/${id}`,
        });
    }

    /**
     * Get A Count of All Blog Posts
     *
     * Returns a count of all *Blog Posts*.
     */
    getBlogPostsCount(
    ) {
        return this.request.get<StoreContentV2ApiSpecs.GetBlogPostsCountResponse, any>({
            path: 'v2/blog/posts/count',
        });
    }

    /**
     * Get All Pages (Deprecated)
     *
     * Returns a list of *Pages*. Default sorting is by auto-generated ID from oldest to newest.

     > #### Warning
     > **Deprecated**
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To get one or more pages, use Pages V3ʼs [Get pages](/docs/rest-content/pages#get-pages) endpoint. To get a single page, use Pages V3ʼs [Get a page](/docs/rest-content/pages#get-a-page) endpoint.

     */
    getPages(
        query?: StoreContentV2ApiSpecs.GetPagesData['query'],
    ) {
        return this.request.get<StoreContentV2ApiSpecs.GetPagesResponse, any>({
            path: 'v2/pages',
            query,
        });
    }

    /**
     * Create a Page (Deprecated)
     *
     * Creates a *Page*. The request payload limit is 1MB.

     **Required Fields**
     *   `type`
     *   `name`
     *   `link` (for a page of `type: link`)
     *   `feed` (for a page of `type: rss_feed`)
     *   `body` (for a page of `type: raw`)

     **Read Only Fields**
     *   `id`

     ## Content Type

     The default value for `content_type` is `text/html`; however, if `page_type` is set to `raw`, `content_type` can be changed to `text/javascript` or `application/json`. Updating this field lets you place a JavaScript or a JSON file in the root directory.

     > #### Warning
     > **Deprecated**
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To create one or more pages, use Pages V3ʼs [Create pages](/docs/rest-content/pages#create-pages) endpoint. 
     */
    createPage(
        requestBody: StoreContentV2ApiSpecs.CreatePageData['body'],
    ) {
        return this.request.post<StoreContentV2ApiSpecs.CreatePageResponse, any>({
            path: 'v2/pages',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get A Page (Deprecated)
     *
     * Returns a *Page*. 

     > #### Warning
     > **Deprecated**
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To get a single page, use Pages V3ʼs [Get a page](/docs/rest-content/pages#get-a-page) endpoint.

     */
    getPage(
        id: StoreContentV2ApiSpecs.GetPageData['path']['id'],
    ) {
        return this.request.get<StoreContentV2ApiSpecs.GetPageResponse, any>({
            path: `v2/pages/${id}`,
        });
    }

    /**
     * Update a Page (Deprecated)
     *
     * Updates a *Page*. The request payload limit is 1MB.

     **Read Only Fields**
     * id

     > #### Warning
     > **Deprecated**
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To update multiple pages, use Pages V3ʼs [Update pages](/docs/rest-content/pages#update-pages) endpoint. To update a single page, use Pages V3ʼs [Update a page](/docs/rest-content/pages#update-a-page) endpoint.
     > * Updating the channel ID for a page is not supported.
     */
    updatePage(
        id: StoreContentV2ApiSpecs.UpdatePageData['path']['id'],
        requestBody: StoreContentV2ApiSpecs.UpdatePageData['body'],
    ) {
        return this.request.put<StoreContentV2ApiSpecs.UpdatePageResponse, any>({
            path: `v2/pages/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Page (Deprecated)
     *
     * Deletes a *Page*.

     > #### Warning
     > **Deprecated**
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To delete multiple pages, use Pages V3ʼs [Delete pages](/docs/rest-content/pages#delete-pages) endpoint. To delete a single page, use Pages V3ʼs [Delete a page](/docs/rest-content/pages#delete-a-page) endpoint. 

     */
    deletePage(
        id: StoreContentV2ApiSpecs.DeletePageData['path']['id'],
    ) {
        return this.request.delete<any, any>({
            path: `v2/pages/${id}`,
        });
    }

    /**
     * Get All Redirects
     *
     * Returns a list all *Redirect URLs*. 

     > #### Warning
     > **Deprecated**
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To get redirect URLs, use Redirects V3ʼs [Get redirects](/docs/rest-management/redirects#get-redirects) endpoint.
     */
    getRedirects(
        query?: StoreContentV2ApiSpecs.GetRedirectsData['query'],
    ) {
        return this.request.get<StoreContentV2ApiSpecs.GetRedirectsResponse, any>({
            path: 'v2/redirects',
            query,
        });
    }

    /**
     * Create a Redirect
     *
     * Creates a *Redirect URL*.

     **Required Fields**
     *   path
     *   forward

     **Read Only**
     *   url

     > #### Warning
     > **Deprecated**
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To upsert new redirect data, use Redirects V3ʼs [Upsert redirects](/docs/rest-management/redirects#upsert-redirects) endpoint.
     */
    createRedirect(
        requestBody: StoreContentV2ApiSpecs.CreateRedirectData['body'],
    ) {
        return this.request.post<StoreContentV2ApiSpecs.CreateRedirectResponse, any>({
            path: 'v2/redirects',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete All Redirects
     *
     * By default, it deletes all *Redirect URLs* in a store. 

     > #### Warning
     > **Deprecated**
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To delete redirect URLs, use Redirects V3ʼs [Delete redirects](/docs/rest-management/redirects#delete-redirects) endpoint.
     */
    deleteRedirects(
    ) {
        return this.request.delete<any, any>({
            path: 'v2/redirects',
        });
    }

    /**
     * Get a Redirect
     *
     * Returns a single *Redirect URL*.

     > #### Warning
     > **Deprecated** 
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To get a redirect URL, use Redirects V3ʼs [Get redirects](/docs/rest-management/redirects#get-redirects) endpoint.
     */
    getRedirect(
        id: StoreContentV2ApiSpecs.GetRedirectData['path']['id'],
    ) {
        return this.request.get<StoreContentV2ApiSpecs.GetRedirectResponse, any>({
            path: `v2/redirects/${id}`,
        });
    }

    /**
     * Update a Redirect
     *
     * Updates a *Redirect URL*.

     **Required Fields**
     *   path
     *   forward

     **Read Only Fields**
     *   url

     > #### Warning
     > **Deprecated**
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To update redirect data, use Redirects V3ʼs [Upsert redirects](/docs/rest-management/redirects#upsert-redirects) endpoint.
     */
    updateRedirect(
        id: StoreContentV2ApiSpecs.UpdateRedirectData['path']['id'],
        requestBody: StoreContentV2ApiSpecs.UpdateRedirectData['body'],
    ) {
        return this.request.put<StoreContentV2ApiSpecs.UpdateRedirectResponse, any>({
            path: `v2/redirects/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Redirect
     *
     * Deletes a *Redirect URL*.

     > #### Warning
     > **Deprecated** 
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To delete a redirect URL, use Redirects V3ʼs [Delete redirects](/docs/rest-management/redirects#delete-redirects) endpoint.
     */
    deleteRedirect(
        id: StoreContentV2ApiSpecs.DeleteRedirectData['path']['id'],
    ) {
        return this.request.delete<any, any>({
            path: `v2/redirects/${id}`,
        });
    }

    /**
     * Get a Count of Redirects
     *
     * Gets a count of *Redirect URLs* in a store.

     > #### Warning
     > **Deprecated**
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To get a count of redirects, use the `meta` object data returned with the Redirects V3ʼs [Get redirects](/docs/rest-management/redirects#get-redirects) endpoint.
     */
    getRedirectsCount(
    ) {
        return this.request.get<StoreContentV2ApiSpecs.GetRedirectsCountResponse, any>({
            path: 'v2/redirects/count',
        });
    }
}
