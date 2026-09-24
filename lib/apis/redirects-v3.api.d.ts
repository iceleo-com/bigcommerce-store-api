import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as RedirectsV3ApiSpecs from '../generated/redirects-v3';
export * as RedirectsV3ApiSpecs from '../generated/redirects-v3';
export declare class RedirectsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getRedirects(query?: RedirectsV3ApiSpecs.GetRedirectsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<RedirectsV3ApiSpecs.RedirectsGetRedirectsResponse200>>>;
    upsertRedirects(requestBody: RedirectsV3ApiSpecs.UpsertRedirectsData['body']): Promise<RequestSuccessResponse<201, Required<RedirectsV3ApiSpecs.RedirectsUpsertRedirectsResponse201>> | RequestErrorResponse<422, Required<RedirectsV3ApiSpecs.ErrorResponse>>>;
    deleteRedirects(query?: RedirectsV3ApiSpecs.DeleteRedirectsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getRedirectImportExportJobs(query?: RedirectsV3ApiSpecs.GetRedirectImportExportJobsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<RedirectsV3ApiSpecs.ImportExportGetRedirectImportExportJobsResponse200>>>;
    createRedirectExportJob(requestBody: RedirectsV3ApiSpecs.CreateRedirectExportJobData['body']): Promise<RequestSuccessResponse<201, Required<RedirectsV3ApiSpecs.ImportExportCreateRedirectExportJobResponse201>> | RequestErrorResponse<409, Required<unknown>> | RequestErrorResponse<429, Required<unknown>>>;
    createRedirectImportJob(requestBody: RedirectsV3ApiSpecs.CreateRedirectImportJobData['body']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestErrorResponse<413, Required<unknown>> | RequestErrorResponse<429, Required<unknown>> | RequestSuccessResponse<201, Required<RedirectsV3ApiSpecs.ImportExportCreateRedirectImportJobResponse201>>>;
    getRedirectExportEvents(uuid: RedirectsV3ApiSpecs.GetRedirectExportEventsData['path']['uuid']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestSuccessResponse<200, string>>;
    getRedirectImportEvents(uuid: RedirectsV3ApiSpecs.GetRedirectImportEventsData['path']['uuid']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestSuccessResponse<200, string>>;
    getRedirectExportDownload(uuid: RedirectsV3ApiSpecs.GetRedirectExportDownloadData['path']['uuid']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestSuccessResponse<200, Required<Blob | File>>>;
}
