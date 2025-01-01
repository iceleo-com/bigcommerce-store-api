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
export type _301RedirectRead = {
    id?: number;
    site_id?: number;
    from_path?: string;
    to?: RedirectTo;
    to_url?: string;
};
export type _301RedirectUpsert = {
    from_path: string;
    site_id: number;
    to?: RedirectTo;
};
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type Error = {
    status?: number;
    message?: string;
};
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};
export type ErrorResponse400 = {
    schema?: Error;
};
export type ErrorResponse404 = {
    schema?: Error;
};
export type ErrorResponse409 = {
    schema?: Error;
};
export type ErrorResponse422 = {
    schema?: Error;
};
export type ImportErrors = Array<{
    row?: number;
    message?: string;
}>;
export type ImportExportJobStatus = 'new' | 'working' | 'complete' | 'aborted' | 'failed';
export type ImportExportJobType = 'import' | 'export';
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
export type ParameterAccept = string;
export type ParameterAcceptEventStream = string;
export type ParameterContentType = string;
export type ParameterContentTypeCsv = string;
export type ParameterContentTypeFormData = string;
export type ParameterImportExportIdParam = string;
export type RedirectTo = {
    type?: 'product' | 'brand' | 'category' | 'page' | 'post' | 'url';
    entity_id?: number;
    url?: string;
};
export type type = 'product' | 'brand' | 'category' | 'page' | 'post' | 'url';
export type GetRedirectsData = {
    headers: {
        Accept: string;
    };
    query?: {
        direction?: 'asc' | 'desc';
        'id:in'?: Array<(number)>;
        'id:max'?: number;
        'id:min'?: number;
        include?: Array<('to_url')>;
        keyword?: string;
        limit?: number;
        page?: number;
        site_id?: number;
        sort?: 'from_path' | 'type' | 'site_id' | 'id';
    };
};
export type GetRedirectsResponse = ({
    data?: Array<_301RedirectRead>;
    meta?: MetaPaginationObject;
});
export type GetRedirectsError = unknown;
export type UpsertRedirectsData = {
    body?: Array<_301RedirectUpsert>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpsertRedirectsResponse = ({
    data?: Array<_301RedirectRead>;
    meta?: MetaPaginationObject;
});
export type UpsertRedirectsError = unknown;
export type DeleteRedirectsData = {
    headers: {
        Accept: string;
    };
    query: {
        'id:in': Array<(number)>;
        site_id?: number;
    };
};
export type DeleteRedirectsResponse = (void);
export type DeleteRedirectsError = unknown;
export type GetRedirectImportExportJobsData = {
    headers: {
        Accept: string;
    };
    query?: {
        id?: string;
        limit?: number;
        page?: number;
        status?: ImportExportJobStatus;
        type?: ImportExportJobType;
    };
};
export type GetRedirectImportExportJobsResponse = ({
    data?: Array<_301RedirectImportExportJobRead>;
    meta?: MetaPaginationObject;
});
export type GetRedirectImportExportJobsError = unknown;
export type CreateRedirectExportJobData = {
    body: {
        site_id?: (number) | null;
        redirect_ids?: Array<(number)>;
        include_dynamic_target_urls?: boolean;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateRedirectExportJobResponse = ({
    id?: string;
});
export type CreateRedirectExportJobError = (unknown);
export type CreateRedirectImportJobData = {
    body: {
        import_file: (Blob | File);
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateRedirectImportJobResponse = ({
    id?: string;
});
export type CreateRedirectImportJobError = (unknown);
export type GetRedirectExportEventsData = {
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
};
export type GetRedirectExportEventsResponse = (string);
export type GetRedirectExportEventsError = (unknown);
export type GetRedirectImportEventsData = {
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
};
export type GetRedirectImportEventsResponse = (string);
export type GetRedirectImportEventsError = (unknown);
export type GetRedirectExportDownloadData = {
    headers: {
        'Content-Type': string;
    };
    path: {
        uuid: string;
    };
};
export type GetRedirectExportDownloadResponse = ((Blob | File));
export type GetRedirectExportDownloadError = (unknown);
