import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PageWidgetsV3ApiSpecs from '../generated/page-widgets-v3';
export * as PageWidgetsV3ApiSpecs from '../generated/page-widgets-v3';
export declare class PageWidgetsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPageWidgets(query?: PageWidgetsV3ApiSpecs.GetPageWidgetsData['query']): Promise<RequestSuccessResponse<200, Required<PageWidgetsV3ApiSpecs.PageWidgetsGetPageWidgetsResponse200>> | RequestErrorResponse<422, Required<PageWidgetsV3ApiSpecs.ErrorResponse>>>;
    createPageWidgets(requestBody: PageWidgetsV3ApiSpecs.CreatePageWidgetsData['body']): Promise<RequestErrorResponse<422, Required<PageWidgetsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
}
