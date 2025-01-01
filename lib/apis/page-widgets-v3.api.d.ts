import RequestService from '../helpers/request/request-service';
import * as PageWidgetsV3ApiSpecs from '../generated/page-widgets-v3';
export default class PageWidgetsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPageWidgets(query?: PageWidgetsV3ApiSpecs.GetPageWidgetsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, PageWidgetsV3ApiSpecs.ErrorResponse>>;
    createPageWidgets(requestBody: PageWidgetsV3ApiSpecs.CreatePageWidgetsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, PageWidgetsV3ApiSpecs.ErrorResponse>>;
}
