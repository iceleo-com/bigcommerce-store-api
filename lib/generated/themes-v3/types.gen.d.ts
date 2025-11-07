export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type CollectionMeta = {
    [key: string]: unknown;
};
export type ThemesCollectionMeta = {
    [key: string]: unknown;
};
export type Meta = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} & {
    errors?: {
        [key: string]: unknown;
    };
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
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type JobId = {
    job_id?: string;
};
export type NoContent = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type Job = {
    errors?: Array<{
        error?: string;
        message?: string;
    }>;
    id?: string;
    percent_complete?: number;
    result?: {
        [key: string]: unknown;
    };
    status?: 'COMPLETED' | 'QUEUED' | 'WORKING' | 'FAILED';
    time?: string;
    warnings?: Array<{
        message?: string;
        warning?: string;
    }>;
};
export type Theme = {
    variations?: Array<{
        description?: string;
        external_id?: string;
        name?: string;
        uuid?: string;
    }>;
    uuid?: string;
    name?: string;
    is_private?: boolean;
    is_active?: boolean;
    updated_at?: string;
};
export type Activate = {
    variation_id: string;
    which?: 'original' | 'last_activated' | 'last_created';
};
export type Variation = {
    description?: string;
    external_id?: string;
    name?: string;
    uuid?: string;
};
export type ThemesCollectionResponse = {
    data?: Array<{
        variations?: Array<{
            description?: string;
            external_id?: string;
            name?: string;
            uuid?: string;
        }>;
        uuid?: string;
        name?: string;
        is_private?: boolean;
        is_active?: boolean;
        updated_at?: string;
    }>;
    meta?: {
        [key: string]: unknown;
    };
};
export type ThemeResponse = {
    data?: Theme;
    meta?: CollectionMeta;
};
export type JobResponse = {
    data?: {
        errors?: Array<{
            error?: string;
            message?: string;
        }>;
        id?: string;
        percent_complete?: number;
        result?: {
            [key: string]: unknown;
        };
        status?: 'COMPLETED' | 'QUEUED' | 'WORKING' | 'FAILED';
        time?: string;
        warnings?: Array<{
            message?: string;
            warning?: string;
        }>;
    };
    meta?: OpenMeta;
};
export type WhichThemeToDownload = {
    which?: 'original' | 'last_activated' | 'last_created';
};
export type RequestHeaders = {
    Accepts?: string;
};
export type ThemeConfigurationFull = {
    uuid?: string;
    theme_uuid?: string;
    variation_id?: string;
    settings?: {
        [key: string]: unknown;
    };
    date_created?: string;
    site_id?: number;
};
export type ThemeConfigurationWrite = {
    variation_id?: string;
    settings?: {
        [key: string]: unknown;
    };
};
export type OpenMeta = {
    [key: string]: unknown;
};
export type JobIdParam = string;
export type ThemeIdParam = string;
export type Accept = string;
export type ContentType = string;
export type PageParam = number;
export type LimitParam = number;
export type GetStoreThemesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/themes';
};
export type GetStoreThemesResponses = {
    200: ThemesCollectionResponse;
};
export type GetStoreThemesResponse = GetStoreThemesResponses[keyof GetStoreThemesResponses];
export type UploadStoreThemeData = {
    body: {
        file: Blob | File;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/themes';
};
export type UploadStoreThemeErrors = {
    default: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    };
};
export type UploadStoreThemeError = UploadStoreThemeErrors[keyof UploadStoreThemeErrors];
export type UploadStoreThemeResponses = {
    201: JobId;
};
export type UploadStoreThemeResponse = UploadStoreThemeResponses[keyof UploadStoreThemeResponses];
export type DeleteStoreThemeData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/themes/{uuid}';
};
export type DeleteStoreThemeErrors = {
    default: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    };
};
export type DeleteStoreThemeError = DeleteStoreThemeErrors[keyof DeleteStoreThemeErrors];
export type DeleteStoreThemeResponses = {
    204: void;
};
export type DeleteStoreThemeResponse = DeleteStoreThemeResponses[keyof DeleteStoreThemeResponses];
export type GetStoreThemeData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/themes/{uuid}';
};
export type GetStoreThemeErrors = {
    default: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    };
};
export type GetStoreThemeError = GetStoreThemeErrors[keyof GetStoreThemeErrors];
export type GetStoreThemeResponses = {
    200: ThemeResponse;
};
export type GetStoreThemeResponse = GetStoreThemeResponses[keyof GetStoreThemeResponses];
export type DownloadStoreThemeData = {
    body: WhichThemeToDownload;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/themes/{uuid}/actions/download';
};
export type DownloadStoreThemeErrors = {
    default: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    };
};
export type DownloadStoreThemeError = DownloadStoreThemeErrors[keyof DownloadStoreThemeErrors];
export type DownloadStoreThemeResponses = {
    200: JobId;
};
export type DownloadStoreThemeResponse = DownloadStoreThemeResponses[keyof DownloadStoreThemeResponses];
export type ActivateStoreThemeData = {
    body: Activate;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/themes/actions/activate';
};
export type ActivateStoreThemeErrors = {
    default: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    };
};
export type ActivateStoreThemeError = ActivateStoreThemeErrors[keyof ActivateStoreThemeErrors];
export type ActivateStoreThemeResponses = {
    204: NoContent;
};
export type ActivateStoreThemeResponse = ActivateStoreThemeResponses[keyof ActivateStoreThemeResponses];
export type GetStoreThemeJobData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        job_id: string;
    };
    query?: never;
    url: '/themes/jobs/{job_id}';
};
export type GetStoreThemeJobErrors = {
    default: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    };
};
export type GetStoreThemeJobError = GetStoreThemeJobErrors[keyof GetStoreThemeJobErrors];
export type GetStoreThemeJobResponses = {
    200: JobResponse;
};
export type GetStoreThemeJobResponse = GetStoreThemeJobResponses[keyof GetStoreThemeJobResponses];
export type GetThemeConfigurationData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: {
        'uuid:in'?: Array<string>;
        variation_uuid?: string;
        'channel_id:in'?: Array<number>;
        page?: number;
        limit?: number;
    };
    url: '/themes/{uuid}/configurations';
};
export type GetThemeConfigurationResponses = {
    200: {
        data?: Array<ThemeConfigurationFull>;
        meta?: ThemesCollectionMeta;
    };
};
export type GetThemeConfigurationResponse = GetThemeConfigurationResponses[keyof GetThemeConfigurationResponses];
export type ValidateThemeConfigurationData = {
    body?: ThemeConfigurationWrite;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/themes/{uuid}/configurations/validate';
};
export type ValidateThemeConfigurationErrors = {
    422: ErrorResponse;
};
export type ValidateThemeConfigurationError = ValidateThemeConfigurationErrors[keyof ValidateThemeConfigurationErrors];
export type ValidateThemeConfigurationResponses = {
    200: {
        [key: string]: unknown;
    };
};
export type ValidateThemeConfigurationResponse = ValidateThemeConfigurationResponses[keyof ValidateThemeConfigurationResponses];
export type GetThemeCustomTemplatesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        version_uuid: string;
    };
    query?: never;
    url: '/themes/custom-templates/{version_uuid}';
};
export type GetThemeCustomTemplatesResponses = {
    200: {
        data?: {
            product?: Array<string>;
            category?: Array<string>;
            brand?: Array<string>;
            page?: Array<string>;
        };
        meta?: OpenMeta;
    };
};
export type GetThemeCustomTemplatesResponse = GetThemeCustomTemplatesResponses[keyof GetThemeCustomTemplatesResponses];
