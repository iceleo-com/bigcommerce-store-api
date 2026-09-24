import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StoreContentV2ApiSpecs from '../generated/store-content-v2';
export * as StoreContentV2ApiSpecs from '../generated/store-content-v2';
export declare class StoreContentV2Api {
    private readonly request;
    constructor(request: RequestService);
    getBlogPosts(query?: StoreContentV2ApiSpecs.GetBlogPostsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, StoreContentV2ApiSpecs.BlogPostFull[]>>;
    createBlogPosts(requestBody: StoreContentV2ApiSpecs.CreateBlogPostsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.BlogPostBaseRes>>>;
    deleteBlogPosts(query?: StoreContentV2ApiSpecs.DeleteBlogPostsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getBlogPost(id: StoreContentV2ApiSpecs.GetBlogPostData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.BlogPostFull>>>;
    updateBlogPost(id: StoreContentV2ApiSpecs.UpdateBlogPostData['path']['id'], requestBody: StoreContentV2ApiSpecs.UpdateBlogPostData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.BlogPostBaseRes>>>;
    deleteBlogPost(id: StoreContentV2ApiSpecs.DeleteBlogPostData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getBlogPostsCount(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.CountResponse>>>;
    getBlogTags(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, StoreContentV2ApiSpecs.BlogTagsItems[]>>;
    getPages(query?: StoreContentV2ApiSpecs.GetPagesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, StoreContentV2ApiSpecs.PageFullRes[]>>;
    createPage(requestBody: StoreContentV2ApiSpecs.CreatePageData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.PageFullRes>>>;
    getPage(id: StoreContentV2ApiSpecs.GetPageData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.PageFullRes>>>;
    updatePage(id: StoreContentV2ApiSpecs.UpdatePageData['path']['id'], requestBody: StoreContentV2ApiSpecs.UpdatePageData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.PageFullRes>>>;
    deletePage(id: StoreContentV2ApiSpecs.DeletePageData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getRedirects(query?: StoreContentV2ApiSpecs.GetRedirectsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, StoreContentV2ApiSpecs.Redirect[]>>;
    createRedirect(requestBody: StoreContentV2ApiSpecs.CreateRedirectData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.Redirect>>>;
    deleteRedirects(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getRedirect(id: StoreContentV2ApiSpecs.GetRedirectData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.Redirect>>>;
    updateRedirect(id: StoreContentV2ApiSpecs.UpdateRedirectData['path']['id'], requestBody: StoreContentV2ApiSpecs.UpdateRedirectData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.Redirect>>>;
    deleteRedirect(id: StoreContentV2ApiSpecs.DeleteRedirectData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getRedirectsCount(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.CountResponse>>>;
}
