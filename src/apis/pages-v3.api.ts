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
     * List Pages
     *
     * Returns one or more content pages. This endpoint supports bulk operations.
     */
    getPages(
        query?: PagesV3ApiSpecs.GetPagesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<PagesV3ApiSpecs.GetPagesResponses[200]>>,(RequestErrorResponse<400, Required<PagesV3ApiSpecs.GetPagesErrors[400]>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.GetPagesErrors[422]>>)>({
            path: 'v3/content/pages',
            query,
        });
    }

    /**
     * Create Pages
     *
     * Creates one or more content pages. This endpoint supports bulk operations.

     Web pages created via this endpoint are subject to the 4000 web page platform limit. Attempting to create pages over the limit will return an error. For more information on platform limits, see [Platform Limits (Help Center)](https://support.bigcommerce.com/s/article/Platform-Limits).
     */
    createPages(
        requestBody: PagesV3ApiSpecs.CreatePagesData['body'],
        query?: PagesV3ApiSpecs.CreatePagesData['query'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<PagesV3ApiSpecs.CreatePagesResponses[201]>>,RequestErrorResponse<422, Required<PagesV3ApiSpecs.CreatePagesErrors[422]>>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<PagesV3ApiSpecs.UpdatePagesResponses[200]>>,(RequestErrorResponse<404, Required<PagesV3ApiSpecs.UpdatePagesErrors[404]>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.UpdatePagesErrors[422]>>)>({
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
        return this.request.delete<RequestSuccessResponse<204, Required<PagesV3ApiSpecs.DeletePagesResponses[204]>>,(RequestErrorResponse<404, Required<PagesV3ApiSpecs.DeletePagesErrors[404]>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.DeletePagesErrors[422]>>)>({
            path: 'v3/content/pages',
            query,
        });
    }

    /**
     * Get Page
     *
     * Returns one content page.

     > #### Warning
     > **Pay attention to query parameters**
     > This endpoint recognizes the same query parameters as [Get Multiple Pages](/developer/api-reference/rest/admin/content/pages/get-pages). If the requested page does not meet the query parameters you specify, you will receive a 404 response even if the requested `pageId` does exist.
     */
    getPage(
        pageId: PagesV3ApiSpecs.GetPageData['path']['pageId'],
        query?: PagesV3ApiSpecs.GetPageData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<PagesV3ApiSpecs.GetPageResponses[200]>>,(RequestErrorResponse<404, Required<PagesV3ApiSpecs.GetPageErrors[404]>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.GetPageErrors[422]>>)>({
            path: `v3/content/pages/${pageId}`,
            query,
        });
    }

    /**
     * Update Page
     *
     * Updates one content page.
     */
    updatePage(
        pageId: PagesV3ApiSpecs.UpdatePageData['path']['pageId'],
        requestBody: PagesV3ApiSpecs.UpdatePageData['body'],
        query?: PagesV3ApiSpecs.UpdatePageData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<PagesV3ApiSpecs.UpdatePageResponses[200]>>,(RequestErrorResponse<400, Required<PagesV3ApiSpecs.UpdatePageErrors[400]>> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.UpdatePageErrors[404]>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.UpdatePageErrors[422]>>)>({
            path: `v3/content/pages/${pageId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Delete Page
     *
     * Deletes one content page.

     > #### Warning
     > **Query parameters not recognized**
     > This endpoint does not recognize query parameters.
     */
    deletePage(
        pageId: PagesV3ApiSpecs.DeletePageData['path']['pageId'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<PagesV3ApiSpecs.DeletePageResponses[204]>>,RequestErrorResponse<404, Required<PagesV3ApiSpecs.DeletePageErrors[404]>>>({
            path: `v3/content/pages/${pageId}`,
        });
    }
}
