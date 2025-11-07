import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PagesV3ApiSpecs from '../generated/pages-v3';
export * as PagesV3ApiSpecs from '../generated/pages-v3';
export declare class PagesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPages(query?: PagesV3ApiSpecs.GetPagesData['query']): Promise<RequestSuccessResponse<200, Required<PagesV3ApiSpecs.PagesCollectionResponse>> | RequestErrorResponse<400, Required<PagesV3ApiSpecs.ResponseErrorDetailed>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorItemized>>>;
    createPages(requestBody: PagesV3ApiSpecs.CreatePagesData['body'], query?: PagesV3ApiSpecs.CreatePagesData['query']): Promise<RequestSuccessResponse<201, Required<{
        data?: PagesV3ApiSpecs.TypePage | PagesV3ApiSpecs.TypeBlog | PagesV3ApiSpecs.TypeContactForm | PagesV3ApiSpecs.TypeRaw | PagesV3ApiSpecs.TypeLink;
        meta?: PagesV3ApiSpecs.ResponseMeta;
    }>> | RequestSuccessResponse<207, Required<unknown>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorDetailed>>>;
    updatePages(requestBody: PagesV3ApiSpecs.UpdatePagesData['body'], query?: PagesV3ApiSpecs.UpdatePagesData['query']): Promise<RequestSuccessResponse<200, Required<PagesV3ApiSpecs.PagesCollectionResponse>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorDetailed>> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.ResponseErrorBrief>>>;
    deletePages(query?: PagesV3ApiSpecs.DeletePagesData['query']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorDetailed>> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.ResponseErrorBrief>>>;
    getPage(pageId: PagesV3ApiSpecs.GetPageData['path']['pageId'], query?: PagesV3ApiSpecs.GetPageData['query']): Promise<RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorItemized>> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.ResponseErrorBrief>> | RequestSuccessResponse<200, Required<PagesV3ApiSpecs.SinglePageResponse>>>;
    updatePage(pageId: PagesV3ApiSpecs.UpdatePageData['path']['pageId'], requestBody: PagesV3ApiSpecs.UpdatePageData['body'], query?: PagesV3ApiSpecs.UpdatePageData['query']): Promise<RequestErrorResponse<400, Required<PagesV3ApiSpecs.ResponseErrorDetailed>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorDetailed>> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.ResponseErrorBrief>> | RequestSuccessResponse<200, Required<PagesV3ApiSpecs.SinglePageResponse>>>;
    deletePage(pageId: PagesV3ApiSpecs.DeletePageData['path']['pageId']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.ResponseErrorBrief>>>;
}
