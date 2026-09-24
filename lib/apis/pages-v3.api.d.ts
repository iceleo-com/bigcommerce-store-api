import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PagesV3ApiSpecs from '../generated/pages-v3';
export * as PagesV3ApiSpecs from '../generated/pages-v3';
export declare class PagesV3Api {
    private readonly request;
    constructor(request: RequestService);
    contentPagesGet(query?: PagesV3ApiSpecs.ContentPagesGetData['query']): Promise<RequestSuccessResponse<200, Required<PagesV3ApiSpecs.PagesCollectionResponse>> | RequestErrorResponse<400, Required<PagesV3ApiSpecs.ResponseErrorDetailed>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorItemized>>>;
    getPages(...args: Parameters<PagesV3Api['contentPagesGet']>): Promise<RequestSuccessResponse<200, Required<PagesV3ApiSpecs.PagesCollectionResponse>> | RequestErrorResponse<400, Required<PagesV3ApiSpecs.ResponseErrorDetailed>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorItemized>>>;
    contentPagesPost(requestBody: PagesV3ApiSpecs.ContentPagesPostData['body'], query?: PagesV3ApiSpecs.ContentPagesPostData['query']): Promise<RequestSuccessResponse<201, Required<{
        data?: PagesV3ApiSpecs.TypePage | PagesV3ApiSpecs.TypeBlog | PagesV3ApiSpecs.TypeContactForm | PagesV3ApiSpecs.TypeFeed | PagesV3ApiSpecs.TypeRaw | PagesV3ApiSpecs.TypeLink;
        meta?: PagesV3ApiSpecs.ResponseMeta;
    }>> | RequestSuccessResponse<207, Required<unknown>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorDetailed>>>;
    createPages(...args: Parameters<PagesV3Api['contentPagesPost']>): Promise<RequestSuccessResponse<201, Required<{
        data?: PagesV3ApiSpecs.TypePage | PagesV3ApiSpecs.TypeBlog | PagesV3ApiSpecs.TypeContactForm | PagesV3ApiSpecs.TypeFeed | PagesV3ApiSpecs.TypeRaw | PagesV3ApiSpecs.TypeLink;
        meta?: PagesV3ApiSpecs.ResponseMeta;
    }>> | RequestSuccessResponse<207, Required<unknown>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorDetailed>>>;
    contentPagesPut(requestBody: PagesV3ApiSpecs.ContentPagesPutData['body'], query?: PagesV3ApiSpecs.ContentPagesPutData['query']): Promise<RequestSuccessResponse<200, Required<PagesV3ApiSpecs.PagesCollectionResponse>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorDetailed>> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.ResponseErrorBrief>>>;
    updatePages(...args: Parameters<PagesV3Api['contentPagesPut']>): Promise<RequestSuccessResponse<200, Required<PagesV3ApiSpecs.PagesCollectionResponse>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorDetailed>> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.ResponseErrorBrief>>>;
    contentPagesDelete(query?: PagesV3ApiSpecs.ContentPagesDeleteData['query']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorDetailed>> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.ResponseErrorBrief>>>;
    deletePages(...args: Parameters<PagesV3Api['contentPagesDelete']>): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorDetailed>> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.ResponseErrorBrief>>>;
    contentPageGet(pageId: PagesV3ApiSpecs.ContentPageGetData['path']['pageId'], query?: PagesV3ApiSpecs.ContentPageGetData['query']): Promise<RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorItemized>> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.ResponseErrorBrief>> | RequestSuccessResponse<200, Required<PagesV3ApiSpecs.PageResponse>>>;
    getPage(...args: Parameters<PagesV3Api['contentPageGet']>): Promise<RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorItemized>> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.ResponseErrorBrief>> | RequestSuccessResponse<200, Required<PagesV3ApiSpecs.PageResponse>>>;
    contentPagePut(pageId: PagesV3ApiSpecs.ContentPagePutData['path']['pageId'], requestBody: PagesV3ApiSpecs.ContentPagePutData['body'], query?: PagesV3ApiSpecs.ContentPagePutData['query']): Promise<RequestErrorResponse<400, Required<PagesV3ApiSpecs.ResponseErrorDetailed>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorDetailed>> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.ResponseErrorBrief>> | RequestSuccessResponse<200, Required<PagesV3ApiSpecs.PageResponse>>>;
    updatePage(...args: Parameters<PagesV3Api['contentPagePut']>): Promise<RequestErrorResponse<400, Required<PagesV3ApiSpecs.ResponseErrorDetailed>> | RequestErrorResponse<422, Required<PagesV3ApiSpecs.ResponseErrorDetailed>> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.ResponseErrorBrief>> | RequestSuccessResponse<200, Required<PagesV3ApiSpecs.PageResponse>>>;
    contentPageDelete(pageId: PagesV3ApiSpecs.ContentPageDeleteData['path']['pageId']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.ResponseErrorBrief>>>;
    deletePage(...args: Parameters<PagesV3Api['contentPageDelete']>): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<PagesV3ApiSpecs.ResponseErrorBrief>>>;
}
