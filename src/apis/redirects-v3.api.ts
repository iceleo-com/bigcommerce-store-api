import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as RedirectsV3ApiSpecs from '../generated/redirects-v3';
export * as RedirectsV3ApiSpecs from '../generated/redirects-v3';

export class RedirectsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Redirects
     *
     * Returns a collection of the store's 301 redirects across all sites.
     */
    getRedirects(
        query?: RedirectsV3ApiSpecs.GetRedirectsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<RedirectsV3ApiSpecs.GetRedirectsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/storefront/redirects',
            query,
        });
    }

    /**
     * Upsert Redirects
     *
     * Upserts new redirect data across all storefronts.
     */
    upsertRedirects(
        requestBody: RedirectsV3ApiSpecs.UpsertRedirectsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<201, Required<RedirectsV3ApiSpecs.UpsertRedirectsResponses[201]>>,RequestErrorResponse<400, void>>({
            path: 'v3/storefront/redirects',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Redirects
     *
     * Deletes redirects.
     */
    deleteRedirects(
        query?: RedirectsV3ApiSpecs.DeleteRedirectsData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<RedirectsV3ApiSpecs.DeleteRedirectsResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/storefront/redirects',
            query,
        });
    }

    /**
     * Get Redirect Import-Export Jobs
     *
     * Returns a collection of the storeʼs 301 redirects across all sites.
     */
    getRedirectImportExportJobs(
        query?: RedirectsV3ApiSpecs.GetRedirectImportExportJobsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<RedirectsV3ApiSpecs.GetRedirectImportExportJobsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/storefront/redirects/imex/jobs',
            query,
        });
    }

    /**
     * Create Redirects Export Job
     *
     * Creates a new 301 Redirects export job.
     */
    createRedirectExportJob(
        requestBody: RedirectsV3ApiSpecs.CreateRedirectExportJobData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<RedirectsV3ApiSpecs.CreateRedirectExportJobResponses[201]>>,(RequestErrorResponse<409, Required<RedirectsV3ApiSpecs.CreateRedirectExportJobErrors[409]>> | RequestErrorResponse<429, Required<RedirectsV3ApiSpecs.CreateRedirectExportJobErrors[429]>>)>({
            path: 'v3/storefront/redirects/imex/export',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Create Redirects Import Job
     *
     * Creates a new 301 Redirects import job.
     */
    createRedirectImportJob(
        requestBody: RedirectsV3ApiSpecs.CreateRedirectImportJobData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<RedirectsV3ApiSpecs.CreateRedirectImportJobResponses[201]>>,(RequestErrorResponse<400, Required<RedirectsV3ApiSpecs.CreateRedirectImportJobErrors[400]>> | RequestErrorResponse<413, Required<RedirectsV3ApiSpecs.CreateRedirectImportJobErrors[413]>> | RequestErrorResponse<429, Required<RedirectsV3ApiSpecs.CreateRedirectImportJobErrors[429]>>)>({
            path: 'v3/storefront/redirects/imex/import',
            contentType: 'multipart/form-data',
            body: requestBody,
        });
    }

    /**
     * Open Redirect Export Event Stream
     *
     * Opens an event stream to receive live updates from an export job.
     */
    getRedirectExportEvents(
        uuid: RedirectsV3ApiSpecs.GetRedirectExportEventsData['path']['uuid'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<RedirectsV3ApiSpecs.GetRedirectExportEventsResponses[200]>>,RequestErrorResponse<404, Required<RedirectsV3ApiSpecs.GetRedirectExportEventsErrors[404]>>>({
            path: `v3/storefront/redirects/imex/export/${uuid}/events`,
        });
    }

    /**
     * Open Redirect Import Event Stream
     *
     * Opens an event stream to receive live updates from an import job.
     */
    getRedirectImportEvents(
        uuid: RedirectsV3ApiSpecs.GetRedirectImportEventsData['path']['uuid'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<RedirectsV3ApiSpecs.GetRedirectImportEventsResponses[200]>>,RequestErrorResponse<404, Required<RedirectsV3ApiSpecs.GetRedirectImportEventsErrors[404]>>>({
            path: `v3/storefront/redirects/imex/import/${uuid}/events`,
        });
    }

    /**
     * Download Redirect Export
     *
     * Downloads the CSV file containing the results of an export job.
     */
    getRedirectExportDownload(
        uuid: RedirectsV3ApiSpecs.GetRedirectExportDownloadData['path']['uuid'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<RedirectsV3ApiSpecs.GetRedirectExportDownloadResponses[200]>>,RequestErrorResponse<404, Required<RedirectsV3ApiSpecs.GetRedirectExportDownloadErrors[404]>>>({
            path: `v3/storefront/redirects/imex/export/${uuid}/download`,
        });
    }
}
