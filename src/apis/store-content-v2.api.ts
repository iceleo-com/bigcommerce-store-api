import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StoreContentV2ApiSpecs from '../generated/store-content-v2';
export * as StoreContentV2ApiSpecs from '../generated/store-content-v2';

export class StoreContentV2Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Blog Tags
     *
     * Returns a list of *Blog Tags*.
     */
    getAllBlogTags(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.GetAllBlogTagsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/blog/tags',
        });
    }

    /**
     * @deprecated Use `getAllBlogTags` instead.
     */
    getBlogTags(...args: Parameters<StoreContentV2Api['getAllBlogTags']>) {
        return this.getAllBlogTags(...args);
    }

    /**
     * Get All Blog Posts
     *
     * Returns all *Blog Posts*. Default sorting is by published_date, beginning with the most recent post.
     */
    getAllBlogPosts(
        query?: StoreContentV2ApiSpecs.GetAllBlogPostsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.GetAllBlogPostsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/blog/posts',
            query,
        });
    }

    /**
     * @deprecated Use `getAllBlogPosts` instead.
     */
    getBlogPosts(...args: Parameters<StoreContentV2Api['getAllBlogPosts']>) {
        return this.getAllBlogPosts(...args);
    }

    /**
     * Create a Blog Post
     *
     * Creates a *Blog Post*.

     **Required Fields**
     *   `title`
     *   `body`

     **Notes**

     * When including `published_date` in a request, supply it as a flat date string (not an object) in valid <a href="http://tools.ietf.org/html/rfc2822#section-3.3" target="_blank">RFC 2822</a>. The&#160;example request below includes a `published_date` in RFC 2822 format.
     * Blog posts default to draft status. To publish blog posts to the storefront, set the `is_published` property to `true`.
     * If a custom URL is not provided, the post’s URL will be generated based on the value of `title`.
     */
    createAblogPosts(
        requestBody: StoreContentV2ApiSpecs.CreateABlogPostsData['body'],
    ) {
        return this.request.post<(RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.CreateABlogPostsResponses[200]>> | RequestSuccessResponse<207, Required<StoreContentV2ApiSpecs.CreateABlogPostsResponses[207]>>),RequestErrorResponse<400, void>>({
            path: 'v2/blog/posts',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createAblogPosts` instead.
     */
    createBlogPosts(...args: Parameters<StoreContentV2Api['createAblogPosts']>) {
        return this.createAblogPosts(...args);
    }

    /**
     * Delete Blog Posts
     *
     * Deletes a page of `Blog Posts`.
     */
    deleteAllBlogPosts(
        query?: StoreContentV2ApiSpecs.DeleteAllBlogPostsData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<StoreContentV2ApiSpecs.DeleteAllBlogPostsResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v2/blog/posts',
            query,
        });
    }

    /**
     * @deprecated Use `deleteAllBlogPosts` instead.
     */
    deleteBlogPosts(...args: Parameters<StoreContentV2Api['deleteAllBlogPosts']>) {
        return this.deleteAllBlogPosts(...args);
    }

    /**
     * Get a Blog Post
     *
     * Returns a single *Blog Post*.
     */
    getAblogPost(
        id: StoreContentV2ApiSpecs.GetABlogPostData['path']['id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.GetABlogPostResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/blog/posts/${id}`,
        });
    }

    /**
     * @deprecated Use `getAblogPost` instead.
     */
    getBlogPost(...args: Parameters<StoreContentV2Api['getAblogPost']>) {
        return this.getAblogPost(...args);
    }

    /**
     * Update a Blog Post
     *
     * Updates a *Blog Post*.

     **Notes**

     * When including `published_date` in a request, supply it as a flat date string (not an object) in valid <a href="http://tools.ietf.org/html/rfc2822#section-3.3" target="_blank">RFC 2822</a>. The&#160;example request below includes a `published_date` in RFC 2822 format.

     * Blog posts default to draft status. To publish blog posts to the storefront, set the `is_published` property to `true`.
     */
    updateAblogPost(
        id: StoreContentV2ApiSpecs.UpdateABlogPostData['path']['id'],
        requestBody: StoreContentV2ApiSpecs.UpdateABlogPostData['body'],
    ) {
        return this.request.put<(RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.UpdateABlogPostResponses[200]>> | RequestSuccessResponse<207, Required<StoreContentV2ApiSpecs.UpdateABlogPostResponses[207]>>),RequestErrorResponse<400, void>>({
            path: `v2/blog/posts/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateAblogPost` instead.
     */
    updateBlogPost(...args: Parameters<StoreContentV2Api['updateAblogPost']>) {
        return this.updateAblogPost(...args);
    }

    /**
     * Delete a Blog Post
     *
     * Deletes a *Blog Post*.
     */
    deleteAblogPost(
        id: StoreContentV2ApiSpecs.DeleteABlogPostData['path']['id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<StoreContentV2ApiSpecs.DeleteABlogPostResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v2/blog/posts/${id}`,
        });
    }

    /**
     * @deprecated Use `deleteAblogPost` instead.
     */
    deleteBlogPost(...args: Parameters<StoreContentV2Api['deleteAblogPost']>) {
        return this.deleteAblogPost(...args);
    }

    /**
     * Get A Count of All Blog Posts
     *
     * Returns a count of all *Blog Posts*.
     */
    getAcountOfAllBlogPosts(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.GetACountOfAllBlogPostsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/blog/posts/count',
        });
    }

    /**
     * @deprecated Use `getAcountOfAllBlogPosts` instead.
     */
    getBlogPostsCount(...args: Parameters<StoreContentV2Api['getAcountOfAllBlogPosts']>) {
        return this.getAcountOfAllBlogPosts(...args);
    }

    /**
     * Get All Pages
     *
     * Returns a list of *Pages*. Default sorting is by auto-generated ID from oldest to newest.

     > #### Warning
     > **Deprecated**
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To get one or more pages, use Pages V3ʼs [Get pages](/docs/rest-content/pages#get-pages) endpoint. To get a single page, use Pages V3ʼs [Get a page](/docs/rest-content/pages#get-a-page) endpoint.

     */
    getAllPages(
        query?: StoreContentV2ApiSpecs.GetAllPagesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.GetAllPagesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/pages',
            query,
        });
    }

    /**
     * @deprecated Use `getAllPages` instead.
     */
    getPages(...args: Parameters<StoreContentV2Api['getAllPages']>) {
        return this.getAllPages(...args);
    }

    /**
     * Create a Page
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

     The default value for `content_type` is `text/html`; however, if `page_type` is set to `raw`, `content_type` can be changed to `text/javascript` or `application/json`. Updating this field allows you to place a JavaScript or a JSON file in the root directory.

     > #### Warning
     > **Deprecated**
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To create one or more pages, use Pages V3ʼs [Create pages](/docs/rest-content/pages#create-pages) endpoint. 
     */
    createApage(
        requestBody: StoreContentV2ApiSpecs.CreateAPageData['body'],
    ) {
        return this.request.post<(RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.CreateAPageResponses[200]>> | RequestSuccessResponse<207, Required<StoreContentV2ApiSpecs.CreateAPageResponses[207]>>),RequestErrorResponse<400, void>>({
            path: 'v2/pages',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createApage` instead.
     */
    createPage(...args: Parameters<StoreContentV2Api['createApage']>) {
        return this.createApage(...args);
    }

    /**
     * Get A Page
     *
     * Returns a *Page*. 

     > #### Warning
     > **Deprecated**
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To get a single page, use Pages V3ʼs [Get a page](/docs/rest-content/pages#get-a-page) endpoint.

     */
    getApage(
        id: StoreContentV2ApiSpecs.GetAPageData['path']['id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.GetAPageResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/pages/${id}`,
        });
    }

    /**
     * @deprecated Use `getApage` instead.
     */
    getPage(...args: Parameters<StoreContentV2Api['getApage']>) {
        return this.getApage(...args);
    }

    /**
     * Update a Page
     *
     * Updates a *Page*. The request payload limit is 1MB.

     **Read Only Fields**
     * id

     > #### Warning
     > **Deprecated**
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To update multiple pages, use Pages V3ʼs [Update pages](/docs/rest-content/pages#update-pages) endpoint. To update a single page, use Pages V3ʼs [Update a page](/docs/rest-content/pages#update-a-page) endpoint.
     */
    updateApage(
        id: StoreContentV2ApiSpecs.UpdateAPageData['path']['id'],
        requestBody: StoreContentV2ApiSpecs.UpdateAPageData['body'],
    ) {
        return this.request.put<(RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.UpdateAPageResponses[200]>> | RequestSuccessResponse<207, Required<StoreContentV2ApiSpecs.UpdateAPageResponses[207]>>),RequestErrorResponse<400, void>>({
            path: `v2/pages/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateApage` instead.
     */
    updatePage(...args: Parameters<StoreContentV2Api['updateApage']>) {
        return this.updateApage(...args);
    }

    /**
     * Delete a Page
     *
     * Deletes a *Page*.

     > #### Warning
     > **Deprecated**
     > * This API operation is deprecated. Avoid using this API operation if possible. It will be removed in a future version.
     > * To delete multiple pages, use Pages V3ʼs [Delete pages](/docs/rest-content/pages#delete-pages) endpoint. To delete a single page, use Pages V3ʼs [Delete a page](/docs/rest-content/pages#delete-a-page) endpoint. 

     */
    deleteApage(
        id: StoreContentV2ApiSpecs.DeleteAPageData['path']['id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<StoreContentV2ApiSpecs.DeleteAPageResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v2/pages/${id}`,
        });
    }

    /**
     * @deprecated Use `deleteApage` instead.
     */
    deletePage(...args: Parameters<StoreContentV2Api['deleteApage']>) {
        return this.deleteApage(...args);
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
    getAlistofRedirects(
        query?: StoreContentV2ApiSpecs.GetAListofRedirectsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.GetAListofRedirectsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/redirects',
            query,
        });
    }

    /**
     * @deprecated Use `getAlistofRedirects` instead.
     */
    getRedirects(...args: Parameters<StoreContentV2Api['getAlistofRedirects']>) {
        return this.getAlistofRedirects(...args);
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
    createAredirect(
        requestBody: StoreContentV2ApiSpecs.CreateARedirectData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.CreateARedirectResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/redirects',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createAredirect` instead.
     */
    createRedirect(...args: Parameters<StoreContentV2Api['createAredirect']>) {
        return this.createAredirect(...args);
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
    deleteAllRedirects(
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<StoreContentV2ApiSpecs.DeleteAllRedirectsResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v2/redirects',
        });
    }

    /**
     * @deprecated Use `deleteAllRedirects` instead.
     */
    deleteRedirects(...args: Parameters<StoreContentV2Api['deleteAllRedirects']>) {
        return this.deleteAllRedirects(...args);
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
    getAredirectUrl(
        id: StoreContentV2ApiSpecs.GetARedirectUrlData['path']['id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.GetARedirectUrlResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/redirects/${id}`,
        });
    }

    /**
     * @deprecated Use `getAredirectUrl` instead.
     */
    getRedirect(...args: Parameters<StoreContentV2Api['getAredirectUrl']>) {
        return this.getAredirectUrl(...args);
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
    updateAredirectUrl(
        id: StoreContentV2ApiSpecs.UpdateARedirectUrlData['path']['id'],
        requestBody: StoreContentV2ApiSpecs.UpdateARedirectUrlData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.UpdateARedirectUrlResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/redirects/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateAredirectUrl` instead.
     */
    updateRedirect(...args: Parameters<StoreContentV2Api['updateAredirectUrl']>) {
        return this.updateAredirectUrl(...args);
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
    deleteAredirect(
        id: StoreContentV2ApiSpecs.DeleteARedirectData['path']['id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<StoreContentV2ApiSpecs.DeleteARedirectResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v2/redirects/${id}`,
        });
    }

    /**
     * @deprecated Use `deleteAredirect` instead.
     */
    deleteRedirect(...args: Parameters<StoreContentV2Api['deleteAredirect']>) {
        return this.deleteAredirect(...args);
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
    getAcountOfRedirects(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.GetACountOfRedirectsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/redirects/count',
        });
    }

    /**
     * @deprecated Use `getAcountOfRedirects` instead.
     */
    getRedirectsCount(...args: Parameters<StoreContentV2Api['getAcountOfRedirects']>) {
        return this.getAcountOfRedirects(...args);
    }
}
