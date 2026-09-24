import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as StoreContentV2ApiSpecs from '../generated/store-content-v2';
export * as StoreContentV2ApiSpecs from '../generated/store-content-v2';
export declare class StoreContentV2Api {
    private readonly request;
    constructor(request: RequestService);
    getAllBlogTags(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, StoreContentV2ApiSpecs.BlogTags[]>>;
    getBlogTags(...args: Parameters<StoreContentV2Api['getAllBlogTags']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, StoreContentV2ApiSpecs.BlogTags[]>>;
    getAllBlogPosts(query?: StoreContentV2ApiSpecs.GetAllBlogPostsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, StoreContentV2ApiSpecs.BlogPostFull[]>>;
    getBlogPosts(...args: Parameters<StoreContentV2Api['getAllBlogPosts']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, StoreContentV2ApiSpecs.BlogPostFull[]>>;
    createAblogPosts(requestBody: StoreContentV2ApiSpecs.CreateABlogPostsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.BlogPostBaseRes>> | RequestSuccessResponse<207, Required<{
        [key: string]: unknown;
    }>>>;
    createBlogPosts(...args: Parameters<StoreContentV2Api['createAblogPosts']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.BlogPostBaseRes>> | RequestSuccessResponse<207, Required<{
        [key: string]: unknown;
    }>>>;
    deleteAllBlogPosts(query?: StoreContentV2ApiSpecs.DeleteAllBlogPostsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteBlogPosts(...args: Parameters<StoreContentV2Api['deleteAllBlogPosts']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getAblogPost(id: StoreContentV2ApiSpecs.GetABlogPostData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.BlogPostFull>>>;
    getBlogPost(...args: Parameters<StoreContentV2Api['getAblogPost']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.BlogPostFull>>>;
    updateAblogPost(id: StoreContentV2ApiSpecs.UpdateABlogPostData['path']['id'], requestBody: StoreContentV2ApiSpecs.UpdateABlogPostData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.BlogPostBaseRes>> | RequestSuccessResponse<207, Required<{
        [key: string]: unknown;
    }>>>;
    updateBlogPost(...args: Parameters<StoreContentV2Api['updateAblogPost']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.BlogPostBaseRes>> | RequestSuccessResponse<207, Required<{
        [key: string]: unknown;
    }>>>;
    deleteAblogPost(id: StoreContentV2ApiSpecs.DeleteABlogPostData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteBlogPost(...args: Parameters<StoreContentV2Api['deleteAblogPost']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getAcountOfAllBlogPosts(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.CountResponse>>>;
    getBlogPostsCount(...args: Parameters<StoreContentV2Api['getAcountOfAllBlogPosts']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.CountResponse>>>;
    getAllPages(query?: StoreContentV2ApiSpecs.GetAllPagesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, StoreContentV2ApiSpecs.PageFull[]>>;
    getPages(...args: Parameters<StoreContentV2Api['getAllPages']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, StoreContentV2ApiSpecs.PageFull[]>>;
    createApage(requestBody: StoreContentV2ApiSpecs.CreateAPageData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.PageFull>> | RequestSuccessResponse<207, Required<{
        [key: string]: unknown;
    }>>>;
    createPage(...args: Parameters<StoreContentV2Api['createApage']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.PageFull>> | RequestSuccessResponse<207, Required<{
        [key: string]: unknown;
    }>>>;
    getApage(id: StoreContentV2ApiSpecs.GetAPageData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.PageFull>>>;
    getPage(...args: Parameters<StoreContentV2Api['getApage']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.PageFull>>>;
    updateApage(id: StoreContentV2ApiSpecs.UpdateAPageData['path']['id'], requestBody: StoreContentV2ApiSpecs.UpdateAPageData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.PageBase>> | RequestSuccessResponse<207, Required<{
        [key: string]: unknown;
    }>>>;
    updatePage(...args: Parameters<StoreContentV2Api['updateApage']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.PageBase>> | RequestSuccessResponse<207, Required<{
        [key: string]: unknown;
    }>>>;
    deleteApage(id: StoreContentV2ApiSpecs.DeleteAPageData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deletePage(...args: Parameters<StoreContentV2Api['deleteApage']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getAlistofRedirects(query?: StoreContentV2ApiSpecs.GetAListofRedirectsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, StoreContentV2ApiSpecs.Redirect[]>>;
    getRedirects(...args: Parameters<StoreContentV2Api['getAlistofRedirects']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, StoreContentV2ApiSpecs.Redirect[]>>;
    createAredirect(requestBody: StoreContentV2ApiSpecs.CreateARedirectData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.Redirect>>>;
    createRedirect(...args: Parameters<StoreContentV2Api['createAredirect']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.Redirect>>>;
    deleteAllRedirects(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteRedirects(...args: Parameters<StoreContentV2Api['deleteAllRedirects']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getAredirectUrl(id: StoreContentV2ApiSpecs.GetARedirectUrlData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.Redirect>>>;
    getRedirect(...args: Parameters<StoreContentV2Api['getAredirectUrl']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.Redirect>>>;
    updateAredirectUrl(id: StoreContentV2ApiSpecs.UpdateARedirectUrlData['path']['id'], requestBody: StoreContentV2ApiSpecs.UpdateARedirectUrlData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.Redirect>>>;
    updateRedirect(...args: Parameters<StoreContentV2Api['updateAredirectUrl']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.Redirect>>>;
    deleteAredirect(id: StoreContentV2ApiSpecs.DeleteARedirectData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteRedirect(...args: Parameters<StoreContentV2Api['deleteAredirect']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getAcountOfRedirects(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.CountResponse>>>;
    getRedirectsCount(...args: Parameters<StoreContentV2Api['getAcountOfRedirects']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<StoreContentV2ApiSpecs.CountResponse>>>;
}
