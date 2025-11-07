import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StoreContentV2ApiSpecs from '../generated/store-content-v2';
export * as StoreContentV2ApiSpecs from '../generated/store-content-v2';
export declare class StoreContentV2Api {
    private readonly request;
    constructor(request: RequestService);
    getBlogTags(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, StoreContentV2ApiSpecs.BlogTags[]>>;
    getBlogPosts(query?: StoreContentV2ApiSpecs.GetBlogPostsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, StoreContentV2ApiSpecs.BlogPostFull[]>>;
    createBlogPosts(requestBody: StoreContentV2ApiSpecs.CreateBlogPostsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.BlogPostBaseRes>> | RequestSuccessResponse<207, Required<{
        [key: string]: unknown;
    }>>>;
    deleteBlogPosts(query?: StoreContentV2ApiSpecs.DeleteBlogPostsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getBlogPost(id: StoreContentV2ApiSpecs.GetBlogPostData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.BlogPostFull>>>;
    updateBlogPost(id: StoreContentV2ApiSpecs.UpdateBlogPostData['path']['id'], requestBody: StoreContentV2ApiSpecs.UpdateBlogPostData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.BlogPostBaseRes>> | RequestSuccessResponse<207, Required<{
        [key: string]: unknown;
    }>>>;
    deleteBlogPost(id: StoreContentV2ApiSpecs.DeleteBlogPostData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getBlogPostsCount(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.CountResponse>>>;
    getPages(query?: StoreContentV2ApiSpecs.GetPagesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, StoreContentV2ApiSpecs.PageFull[]>>;
    createPage(requestBody: StoreContentV2ApiSpecs.CreatePageData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.PageFull>> | RequestSuccessResponse<207, Required<{
        [key: string]: unknown;
    }>>>;
    getPage(id: StoreContentV2ApiSpecs.GetPageData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.PageFull>>>;
    updatePage(id: StoreContentV2ApiSpecs.UpdatePageData['path']['id'], requestBody: StoreContentV2ApiSpecs.UpdatePageData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.PageFull>> | RequestSuccessResponse<207, Required<{
        [key: string]: unknown;
    }>>>;
    deletePage(id: StoreContentV2ApiSpecs.DeletePageData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getRedirects(query?: StoreContentV2ApiSpecs.GetRedirectsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, StoreContentV2ApiSpecs.Redirect[]>>;
    createRedirect(requestBody: StoreContentV2ApiSpecs.CreateRedirectData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.Redirect>>>;
    deleteRedirects(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getRedirect(id: StoreContentV2ApiSpecs.GetRedirectData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.Redirect>>>;
    updateRedirect(id: StoreContentV2ApiSpecs.UpdateRedirectData['path']['id'], requestBody: StoreContentV2ApiSpecs.UpdateRedirectData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.Redirect>>>;
    deleteRedirect(id: StoreContentV2ApiSpecs.DeleteRedirectData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getRedirectsCount(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.CountResponse>>>;
}
