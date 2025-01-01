import RequestService from '../helpers/request/request-service';
import * as PagesV3ApiSpecs from '../generated/pages-v3';

export default class PagesV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Pages
     *
     * Returns one or more content pages. This endpoint supports bulk operations.
     */
    getPages(
        query?: PagesV3ApiSpecs.GetPagesData['query'],
    ) {
        return this.request.get<PagesV3ApiSpecs.GetPagesResponse, PagesV3ApiSpecs.GetPagesError>({
            path: 'v3/content/pages',
            query,
        });
    }

    /**
     * Create Pages
     *
     * Creates one or more content pages. This endpoint supports bulk operations.
     */
    createPages(
        requestBody: PagesV3ApiSpecs.CreatePagesData['body'],
        query?: PagesV3ApiSpecs.CreatePagesData['query'],
    ) {
        return this.request.post<any, PagesV3ApiSpecs.CreatePagesError>({
            path: 'v3/content/pages',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Update Pages
     *
     * Updates one or more content pages. This endpoint supports bulk operations.
     */
    updatePages(
        requestBody: PagesV3ApiSpecs.UpdatePagesData['body'],
        query?: PagesV3ApiSpecs.UpdatePagesData['query'],
    ) {
        return this.request.put<PagesV3ApiSpecs.UpdatePagesResponse, PagesV3ApiSpecs.UpdatePagesError>({
            path: 'v3/content/pages',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Delete Pages
     *
     * Deletes one or more content pages. This endpoint supports bulk operations.
     */
    deletePages(
        query?: PagesV3ApiSpecs.DeletePagesData['query'],
    ) {
        return this.request.delete<any, PagesV3ApiSpecs.DeletePagesError>({
            path: 'v3/content/pages',
            query,
        });
    }

    /**
     * Get a Page
     *
     * Returns one content page.

     > #### Warning
     > **Pay attention to query parameters**
     > This endpoint recognizes the same query parameters as [Get Multiple Pages](/docs/rest-content/pages#get-pages). If the requested page does not meet the query parameters you specify, you will receive a 404 response even if the requested `pageId` does exist.
     */
    getPage(
        pageId: PagesV3ApiSpecs.GetPageData['path']['pageId'],
        query?: PagesV3ApiSpecs.GetPageData['query'],
    ) {
        return this.request.get<PagesV3ApiSpecs.GetPageResponse, PagesV3ApiSpecs.GetPageError>({
            path: `v3/content/pages/${pageId}`,
            query,
        });
    }

    /**
     * Update a Page
     *
     * Updates one content page.
     */
    updatePage(
        pageId: PagesV3ApiSpecs.UpdatePageData['path']['pageId'],
        requestBody: PagesV3ApiSpecs.UpdatePageData['body'],
        query?: PagesV3ApiSpecs.UpdatePageData['query'],
    ) {
        return this.request.put<PagesV3ApiSpecs.UpdatePageResponse, PagesV3ApiSpecs.UpdatePageError>({
            path: `v3/content/pages/${pageId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Delete a Page
     *
     * Deletes one content page.

     > #### Warning
     > **Query parameters not recognized**
     > This endpoint does not recognize query parameters.
     */
    deletePage(
        pageId: PagesV3ApiSpecs.DeletePageData['path']['pageId'],
    ) {
        return this.request.delete<any, PagesV3ApiSpecs.DeletePageError>({
            path: `v3/content/pages/${pageId}`,
        });
    }
}
