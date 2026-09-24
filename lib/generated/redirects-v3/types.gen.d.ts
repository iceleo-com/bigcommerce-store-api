export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type _Error = {
    status?: number;
    message?: string;
};
export type ErrorResponse400 = {
    schema?: _Error;
};
export type ErrorResponse404 = {
    schema?: _Error;
};
export type ErrorResponse409 = {
    schema?: _Error;
};
export type ErrorResponse422 = {
    schema?: _Error;
};
export type _301RedirectUpsert = {
    from_path: string;
    site_id: number;
    to?: RedirectTo;
};
export type _301RedirectRead = {
    id?: number;
    site_id?: number;
    from_path?: string;
    to?: RedirectTo;
    to_url?: string;
};
export type ImportExportJobType = 'import' | 'export';
export type ImportExportJobStatus = 'new' | 'working' | 'complete' | 'aborted' | 'failed';
export type ImportErrors = Array<{
    row?: number;
    message?: string;
}>;
export type _301RedirectImportExportJobRead = {
    id?: string;
    type?: ImportExportJobType;
    status?: ImportExportJobStatus;
    completed_items?: number;
    failed_items?: number;
    total_items?: number;
    errors?: ImportErrors;
    created_at?: string;
    completed_at?: string;
};
export type MetaPaginationObject = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
        links?: {
            next?: string;
            current?: string;
        };
    };
};
export type RedirectTo = {
    type?: 'product' | 'brand' | 'category' | 'page' | 'post' | 'url';
    entity_id?: number;
    url?: string;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};
export type Accept = string;
export type AcceptEventStream = string;
export type ContentType = string;
export type ContentTypeFormData = string;
export type ContentTypeCsv = string;
export type ImportExportIdParam = string;
export type DeleteRedirectsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        'id:in': Array<number>;
        site_id?: number;
    };
    url: '/storefront/redirects';
};
export type DeleteRedirectsResponses = {
    204: void;
};
export type DeleteRedirectsResponse = DeleteRedirectsResponses[keyof DeleteRedirectsResponses];
export type GetRedirectsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        site_id?: number;
        'id:in'?: Array<string>;
        limit?: number;
        page?: number;
        sort?: 'from_path' | 'type' | 'site_id' | 'id';
        direction?: 'asc' | 'desc';
        include?: 'to_url';
        keyword?: string;
    };
    url: '/storefront/redirects';
};
export type GetRedirectsResponses = {
    200: {
        data?: Array<_301RedirectRead>;
        meta?: MetaPaginationObject;
    };
};
export type GetRedirectsResponse = GetRedirectsResponses[keyof GetRedirectsResponses];
export type UpsertRedirectsData = {
    body?: Array<_301RedirectUpsert>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/storefront/redirects';
};
export type UpsertRedirectsResponses = {
    201: {
        data?: Array<_301RedirectRead>;
        meta?: MetaPaginationObject;
    };
};
export type UpsertRedirectsResponse = UpsertRedirectsResponses[keyof UpsertRedirectsResponses];
export type GetRedirectImportExportJobsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        id?: string;
        type?: ImportExportJobType;
        status?: ImportExportJobStatus;
        limit?: number;
        page?: number;
    };
    url: '/storefront/redirects/imex/jobs';
};
export type GetRedirectImportExportJobsResponses = {
    200: {
        data?: Array<_301RedirectImportExportJobRead>;
        meta?: MetaPaginationObject;
    };
};
export type GetRedirectImportExportJobsResponse = GetRedirectImportExportJobsResponses[keyof GetRedirectImportExportJobsResponses];
export type CreateRedirectExportJobData = {
    body: {
        site_id?: number | null;
        redirect_ids?: Array<number>;
        include_dynamic_target_urls?: boolean;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/storefront/redirects/imex/export';
};
export type CreateRedirectExportJobErrors = {
    409: unknown;
    429: unknown;
};
export type CreateRedirectExportJobResponses = {
    201: {
        id?: string;
    };
};
export type CreateRedirectExportJobResponse = CreateRedirectExportJobResponses[keyof CreateRedirectExportJobResponses];
export type CreateRedirectImportJobData = {
    body: {
        import_file: Blob | File;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/storefront/redirects/imex/import';
};
export type CreateRedirectImportJobErrors = {
    400: unknown;
    413: unknown;
    429: unknown;
};
export type CreateRedirectImportJobResponses = {
    201: {
        id?: string;
    };
};
export type CreateRedirectImportJobResponse = CreateRedirectImportJobResponses[keyof CreateRedirectImportJobResponses];
export type GetRedirectExportEventsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/storefront/redirects/imex/export/{uuid}/events';
};
export type GetRedirectExportEventsErrors = {
    404: unknown;
};
export type GetRedirectExportEventsResponses = {
    200: string;
};
export type GetRedirectExportEventsResponse = GetRedirectExportEventsResponses[keyof GetRedirectExportEventsResponses];
export type GetRedirectImportEventsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/storefront/redirects/imex/import/{uuid}/events';
};
export type GetRedirectImportEventsErrors = {
    404: unknown;
};
export type GetRedirectImportEventsResponses = {
    200: string;
};
export type GetRedirectImportEventsResponse = GetRedirectImportEventsResponses[keyof GetRedirectImportEventsResponses];
export type GetRedirectExportDownloadData = {
    body?: never;
    headers: {
        'Content-Type': string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/storefront/redirects/imex/export/{uuid}/download';
};
export type GetRedirectExportDownloadErrors = {
    404: unknown;
};
export type GetRedirectExportDownloadResponses = {
    200: Blob | File;
};
export type GetRedirectExportDownloadResponse = GetRedirectExportDownloadResponses[keyof GetRedirectExportDownloadResponses];
