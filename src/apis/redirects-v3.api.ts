import RequestService from '../helpers/request/request-service';
import * as RedirectsV3ApiSpecs from '../generated/redirects-v3';

export default class RedirectsV3Api {
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
        return this.request.get<RedirectsV3ApiSpecs.GetRedirectsResponse, any>({
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
        return this.request.put<any, any>({
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
        return this.request.delete<any, any>({
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
        return this.request.get<RedirectsV3ApiSpecs.GetRedirectImportExportJobsResponse, any>({
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
        return this.request.post<any, RedirectsV3ApiSpecs.CreateRedirectExportJobError>({
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
        return this.request.post<any, RedirectsV3ApiSpecs.CreateRedirectImportJobError>({
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
        return this.request.get<any, RedirectsV3ApiSpecs.GetRedirectExportEventsError>({
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
        return this.request.get<any, RedirectsV3ApiSpecs.GetRedirectImportEventsError>({
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
        return this.request.get<any, RedirectsV3ApiSpecs.GetRedirectExportDownloadError>({
            path: `v3/storefront/redirects/imex/export/${uuid}/download`,
        });
    }
}
