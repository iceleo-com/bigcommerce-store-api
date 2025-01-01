import RequestService from '../helpers/request/request-service';
import * as StoreContentV2ApiSpecs from '../generated/store-content-v2';
export default class StoreContentV2Api {
    private readonly request;
    constructor(request: RequestService);
    getBlogTags(): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreContentV2ApiSpecs.GetBlogTagsResponse, any>>;
    getBlogPosts(query?: StoreContentV2ApiSpecs.GetBlogPostsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreContentV2ApiSpecs.GetBlogPostsResponse, any>>;
    createBlogPosts(requestBody: StoreContentV2ApiSpecs.CreateBlogPostsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreContentV2ApiSpecs.CreateBlogPostsResponse, any>>;
    deleteBlogPosts(query?: StoreContentV2ApiSpecs.DeleteBlogPostsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getBlogPost(id: StoreContentV2ApiSpecs.GetBlogPostData['path']['id']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreContentV2ApiSpecs.blogPost_Full, any>>;
    updateBlogPost(id: StoreContentV2ApiSpecs.UpdateBlogPostData['path']['id'], requestBody: StoreContentV2ApiSpecs.UpdateBlogPostData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreContentV2ApiSpecs.UpdateBlogPostResponse, any>>;
    deleteBlogPost(id: StoreContentV2ApiSpecs.DeleteBlogPostData['path']['id']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getBlogPostsCount(): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreContentV2ApiSpecs.count_Response, any>>;
    getPages(query?: StoreContentV2ApiSpecs.GetPagesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreContentV2ApiSpecs.GetPagesResponse, any>>;
    createPage(requestBody: StoreContentV2ApiSpecs.CreatePageData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreContentV2ApiSpecs.CreatePageResponse, any>>;
    getPage(id: StoreContentV2ApiSpecs.GetPageData['path']['id']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreContentV2ApiSpecs.page_Full, any>>;
    updatePage(id: StoreContentV2ApiSpecs.UpdatePageData['path']['id'], requestBody: StoreContentV2ApiSpecs.UpdatePageData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreContentV2ApiSpecs.UpdatePageResponse, any>>;
    deletePage(id: StoreContentV2ApiSpecs.DeletePageData['path']['id']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getRedirects(query?: StoreContentV2ApiSpecs.GetRedirectsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreContentV2ApiSpecs.GetRedirectsResponse, any>>;
    createRedirect(requestBody: StoreContentV2ApiSpecs.CreateRedirectData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreContentV2ApiSpecs.redirect, any>>;
    deleteRedirects(): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getRedirect(id: StoreContentV2ApiSpecs.GetRedirectData['path']['id']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreContentV2ApiSpecs.redirect, any>>;
    updateRedirect(id: StoreContentV2ApiSpecs.UpdateRedirectData['path']['id'], requestBody: StoreContentV2ApiSpecs.UpdateRedirectData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreContentV2ApiSpecs.redirect, any>>;
    deleteRedirect(id: StoreContentV2ApiSpecs.DeleteRedirectData['path']['id']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getRedirectsCount(): Promise<import("../helpers/request/request-service.type").RequestResponse<StoreContentV2ApiSpecs.count_Response, any>>;
}
