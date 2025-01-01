import RequestService from '../helpers/request/request-service';
import * as RedirectsV3ApiSpecs from '../generated/redirects-v3';
export default class RedirectsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getRedirects(query?: RedirectsV3ApiSpecs.GetRedirectsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<RedirectsV3ApiSpecs.GetRedirectsResponse, any>>;
    upsertRedirects(requestBody: RedirectsV3ApiSpecs.UpsertRedirectsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    deleteRedirects(query?: RedirectsV3ApiSpecs.DeleteRedirectsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getRedirectImportExportJobs(query?: RedirectsV3ApiSpecs.GetRedirectImportExportJobsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<RedirectsV3ApiSpecs.GetRedirectImportExportJobsResponse, any>>;
    createRedirectExportJob(requestBody: RedirectsV3ApiSpecs.CreateRedirectExportJobData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, unknown>>;
    createRedirectImportJob(requestBody: RedirectsV3ApiSpecs.CreateRedirectImportJobData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, unknown>>;
    getRedirectExportEvents(uuid: RedirectsV3ApiSpecs.GetRedirectExportEventsData['path']['uuid']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, unknown>>;
    getRedirectImportEvents(uuid: RedirectsV3ApiSpecs.GetRedirectImportEventsData['path']['uuid']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, unknown>>;
    getRedirectExportDownload(uuid: RedirectsV3ApiSpecs.GetRedirectExportDownloadData['path']['uuid']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, unknown>>;
}
