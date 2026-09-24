import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PagesV3ApiSpecs from '../generated/pages-v3';
export * as PagesV3ApiSpecs from '../generated/pages-v3';

export class PagesV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Pages
     *
     * Returns one or more content pages. This endpoint supports bulk operations.
     */
    contentPagesGet(
        query?: PagesV3ApiSpecs.ContentPagesGetData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<PagesV3ApiSpecs.ContentPagesGetResponses[200]>>,(RequestErrorResponse<400, Required<PagesV3ApiSpecs.ContentPagesGetErrors[400]>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ContentPagesGetErrors[422]>>)>({
            path: 'v3/content/pages',
            query,
        });
    }

    /**
     * @deprecated Use `contentPagesGet` instead.
     */
    getPages(...args: Parameters<PagesV3Api['contentPagesGet']>) {
        return this.contentPagesGet(...args);
    }

    /**
     * Create Pages
     *
     * Creates one or more content pages. This endpoint supports bulk operations.
     */
    contentPagesPost(
        requestBody: PagesV3ApiSpecs.ContentPagesPostData['body'],
        query?: PagesV3ApiSpecs.ContentPagesPostData['query'],
    ) {
        return this.request.post<(RequestSuccessResponse<201, Required<PagesV3ApiSpecs.ContentPagesPostResponses[201]>> | RequestSuccessResponse<207, Required<PagesV3ApiSpecs.ContentPagesPostResponses[207]>>),RequestErrorResponse<422, Required<PagesV3ApiSpecs.ContentPagesPostErrors[422]>>>({
            path: 'v3/content/pages',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `contentPagesPost` instead.
     */
    createPages(...args: Parameters<PagesV3Api['contentPagesPost']>) {
        return this.contentPagesPost(...args);
    }

    /**
     * Update Pages
     *
     * Updates one or more content pages. This endpoint supports bulk operations.
     */
    contentPagesPut(
        requestBody: PagesV3ApiSpecs.ContentPagesPutData['body'],
        query?: PagesV3ApiSpecs.ContentPagesPutData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<PagesV3ApiSpecs.ContentPagesPutResponses[200]>>,(RequestErrorResponse<404, Required<PagesV3ApiSpecs.ContentPagesPutErrors[404]>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ContentPagesPutErrors[422]>>)>({
            path: 'v3/content/pages',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `contentPagesPut` instead.
     */
    updatePages(...args: Parameters<PagesV3Api['contentPagesPut']>) {
        return this.contentPagesPut(...args);
    }

    /**
     * Delete Pages
     *
     * Deletes one or more content pages. This endpoint supports bulk operations.

     > #### Warning
     > **Pay attention to query parameters**
     > If you attempt to delete multiple pages by passing more than one page ID to `id:in` and one or more of them does not exist, you will receive a 404 response. However, the pages corresponding to the page IDs that do exist will still be deleted.
     */
    contentPagesDelete(
        query?: PagesV3ApiSpecs.ContentPagesDeleteData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<PagesV3ApiSpecs.ContentPagesDeleteResponses[204]>>,(RequestErrorResponse<404, Required<PagesV3ApiSpecs.ContentPagesDeleteErrors[404]>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ContentPagesDeleteErrors[422]>>)>({
            path: 'v3/content/pages',
            query,
        });
    }

    /**
     * @deprecated Use `contentPagesDelete` instead.
     */
    deletePages(...args: Parameters<PagesV3Api['contentPagesDelete']>) {
        return this.contentPagesDelete(...args);
    }

    /**
     * Get a Page
     *
     * Returns one content page.

     > #### Warning
     > **Pay attention to query parameters**
     > This endpoint recognizes the same query parameters as [Get Multiple Pages](/docs/rest-content/pages#get-pages). If the requested page does not meet the query parameters you specify, you will receive a 404 response even if the requested `pageId` does exist.
     */
    contentPageGet(
        pageId: PagesV3ApiSpecs.ContentPageGetData['path']['pageId'],
        query?: PagesV3ApiSpecs.ContentPageGetData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<PagesV3ApiSpecs.ContentPageGetResponses[200]>>,(RequestErrorResponse<404, Required<PagesV3ApiSpecs.ContentPageGetErrors[404]>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ContentPageGetErrors[422]>>)>({
            path: `v3/content/pages/${pageId}`,
            query,
        });
    }

    /**
     * @deprecated Use `contentPageGet` instead.
     */
    getPage(...args: Parameters<PagesV3Api['contentPageGet']>) {
        return this.contentPageGet(...args);
    }

    /**
     * Update a Page
     *
     * Updates one content page.
     */
    contentPagePut(
        pageId: PagesV3ApiSpecs.ContentPagePutData['path']['pageId'],
        requestBody: PagesV3ApiSpecs.ContentPagePutData['body'],
        query?: PagesV3ApiSpecs.ContentPagePutData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<PagesV3ApiSpecs.ContentPagePutResponses[200]>>,(RequestErrorResponse<400, Required<PagesV3ApiSpecs.ContentPagePutErrors[400]>> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.ContentPagePutErrors[404]>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ContentPagePutErrors[422]>>)>({
            path: `v3/content/pages/${pageId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `contentPagePut` instead.
     */
    updatePage(...args: Parameters<PagesV3Api['contentPagePut']>) {
        return this.contentPagePut(...args);
    }

    /**
     * Delete a Page
     *
     * Deletes one content page.

     > #### Warning
     > **Query parameters not recognized**
     > This endpoint does not recognize query parameters.
     */
    contentPageDelete(
        pageId: PagesV3ApiSpecs.ContentPageDeleteData['path']['pageId'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<PagesV3ApiSpecs.ContentPageDeleteResponses[204]>>,RequestErrorResponse<404, Required<PagesV3ApiSpecs.ContentPageDeleteErrors[404]>>>({
            path: `v3/content/pages/${pageId}`,
        });
    }

    /**
     * @deprecated Use `contentPageDelete` instead.
     */
    deletePage(...args: Parameters<PagesV3Api['contentPageDelete']>) {
        return this.contentPageDelete(...args);
    }
}
