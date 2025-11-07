import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PageWidgetsV3ApiSpecs from '../generated/page-widgets-v3';
export * as PageWidgetsV3ApiSpecs from '../generated/page-widgets-v3';

export class PageWidgetsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get a page snapshot
     *
     * Get a snapshot of all the page widget regions for a given channel, template file, or entity.
     */
    getPageWidgets(
        query?: PageWidgetsV3ApiSpecs.GetPageWidgetsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<PageWidgetsV3ApiSpecs.GetPageWidgetsResponses[200]>>,RequestErrorResponse<422, Required<PageWidgetsV3ApiSpecs.GetPageWidgetsErrors[422]>>>({
            path: 'v3/content/page-widgets',
            query,
        });
    }

    /**
     * Publish or overwrite page content
     *
     * Publish or overwrite the content of a page that uses page widgets.
     */
    createPageWidgets(
        requestBody: PageWidgetsV3ApiSpecs.CreatePageWidgetsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<204, Required<PageWidgetsV3ApiSpecs.CreatePageWidgetsResponses[204]>>,RequestErrorResponse<422, Required<PageWidgetsV3ApiSpecs.CreatePageWidgetsErrors[422]>>>({
            path: 'v3/content/page-widgets',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
