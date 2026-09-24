export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type StorefrontRedirectsGetParametersSort = 'from_path' | 'type' | 'site_id' | 'id';
export type StorefrontRedirectsGetParametersDirection = 'asc' | 'desc';
export type StorefrontRedirectsGetParametersIncludeSchemaItems = 'to_url';
export type RedirectToType = 'product' | 'brand' | 'category' | 'page' | 'post' | 'url';
export type RedirectTo = {
    type?: RedirectToType;
    entity_id?: number;
    url?: string;
};
export type _301RedirectRead = {
    id?: number;
    site_id?: number;
    from_path?: string;
    to?: RedirectTo;
    to_url: string | undefined;
};
export type MetaPaginationObjectPaginationLinks = {
    previous?: string;
    next?: string;
    current?: string;
};
export type MetaPaginationObjectPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: MetaPaginationObjectPaginationLinks;
};
export type MetaPaginationObject = {
    pagination?: MetaPaginationObjectPagination;
};
export type RedirectsGetRedirectsResponse200 = {
    data?: Array<_301RedirectRead>;
    meta?: MetaPaginationObject;
};
export type _301RedirectUpsert = {
    from_path: string;
    site_id: number;
    to?: RedirectTo;
};
export type RedirectsUpsertRedirectsResponse201 = {
    data?: Array<_301RedirectRead>;
    meta?: MetaPaginationObject;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: DetailedErrors;
};
export type ImportExportJobType = 'import' | 'export';
export type ImportExportJobStatus = 'new' | 'working' | 'complete' | 'aborted' | 'failed';
export type ImportErrorsItems = {
    row?: number;
    message?: string;
};
export type ImportErrors = Array<ImportErrorsItems>;
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
export type ImportExportGetRedirectImportExportJobsResponse200 = {
    data?: Array<_301RedirectImportExportJobRead>;
    meta?: MetaPaginationObject;
};
export type ImportExportCreateRedirectExportJobResponse201 = {
    id?: string;
};
export type ImportExportCreateRedirectImportJobResponse201 = {
    id?: string;
};
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
    204: {
        [key: string]: unknown;
    };
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
        'id:in'?: Array<number>;
        'id:min'?: number;
        'id:max'?: number;
        limit?: number;
        page?: number;
        sort?: StorefrontRedirectsGetParametersSort;
        direction?: StorefrontRedirectsGetParametersDirection;
        include?: Array<StorefrontRedirectsGetParametersIncludeSchemaItems>;
        keyword?: string;
    };
    url: '/storefront/redirects';
};
export type GetRedirectsResponses = {
    200: RedirectsGetRedirectsResponse200;
};
export type GetRedirectsResponse = GetRedirectsResponses[keyof GetRedirectsResponses];
export type UpsertRedirectsData = {
    body?: Array<_301RedirectUpsert>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/storefront/redirects';
};
export type UpsertRedirectsErrors = {
    422: ErrorResponse;
};
export type UpsertRedirectsError = UpsertRedirectsErrors[keyof UpsertRedirectsErrors];
export type UpsertRedirectsResponses = {
    201: RedirectsUpsertRedirectsResponse201;
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
    200: ImportExportGetRedirectImportExportJobsResponse200;
};
export type GetRedirectImportExportJobsResponse = GetRedirectImportExportJobsResponses[keyof GetRedirectImportExportJobsResponses];
export type CreateRedirectExportJobData = {
    body?: {
        site_id?: number | null;
        redirect_ids?: Array<number>;
        include_dynamic_target_urls?: boolean;
    };
    headers: {
        Accept: string;
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
    201: ImportExportCreateRedirectExportJobResponse201;
};
export type CreateRedirectExportJobResponse = CreateRedirectExportJobResponses[keyof CreateRedirectExportJobResponses];
export type CreateRedirectImportJobData = {
    body?: {
        import_file: Blob | File;
    };
    headers: {
        Accept: string;
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
    201: ImportExportCreateRedirectImportJobResponse201;
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
