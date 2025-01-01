import RequestService from '../helpers/request/request-service';
import * as PagesV3ApiSpecs from '../generated/pages-v3';
export default class PagesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPages(query?: PagesV3ApiSpecs.GetPagesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<PagesV3ApiSpecs.PagesCollectionResponse, PagesV3ApiSpecs.GetPagesError>>;
    createPages(requestBody: PagesV3ApiSpecs.CreatePagesData['body'], query?: PagesV3ApiSpecs.CreatePagesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, PagesV3ApiSpecs.ResponseErrorDetailed>>;
    updatePages(requestBody: PagesV3ApiSpecs.UpdatePagesData['body'], query?: PagesV3ApiSpecs.UpdatePagesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<PagesV3ApiSpecs.PagesCollectionResponse, PagesV3ApiSpecs.UpdatePagesError>>;
    deletePages(query?: PagesV3ApiSpecs.DeletePagesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, PagesV3ApiSpecs.DeletePagesError>>;
    getPage(pageId: PagesV3ApiSpecs.GetPageData['path']['pageId'], query?: PagesV3ApiSpecs.GetPageData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<PagesV3ApiSpecs.SinglePageResponse, PagesV3ApiSpecs.GetPageError>>;
    updatePage(pageId: PagesV3ApiSpecs.UpdatePageData['path']['pageId'], requestBody: PagesV3ApiSpecs.UpdatePageData['body'], query?: PagesV3ApiSpecs.UpdatePageData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<PagesV3ApiSpecs.SinglePageResponse, PagesV3ApiSpecs.UpdatePageError>>;
    deletePage(pageId: PagesV3ApiSpecs.DeletePageData['path']['pageId']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, PagesV3ApiSpecs.ResponseErrorBrief>>;
}
