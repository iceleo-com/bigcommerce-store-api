export type Activate = {
    variation_id: string;
    which?: 'original' | 'last_activated' | 'last_created';
};
export type which = 'original' | 'last_activated' | 'last_created';
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CollectionMeta = {
    [key: string]: unknown;
};
export type DetailedErrors = {
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
export type status = 'COMPLETED' | 'QUEUED' | 'WORKING' | 'FAILED';
export type JobId = {
    job_id?: string;
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
export type Meta = {
    [key: string]: unknown;
};
export type NoContent = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type OpenMeta = {
    [key: string]: unknown;
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type ParameterJobIdParam = string;
export type ParameterLimitParam = number;
export type ParameterPageParam = number;
export type ParameterThemeIdParam = string;
export type RequestHeaders = {
    Accepts?: string;
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
export type themeConfiguration_Full = {
    uuid?: string;
    theme_uuid?: string;
    variation_id?: string;
    settings?: {
        [key: string]: unknown;
    };
    date_created?: string;
    site_id?: number;
};
export type themeConfiguration_Write = {
    variation_id?: string;
    settings?: {
        [key: string]: unknown;
    };
};
export type ThemeResponse = {
    data?: Theme;
    meta?: CollectionMeta;
};
export type ThemesCollectionMeta = {
    [key: string]: unknown;
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
export type Variation = {
    description?: string;
    external_id?: string;
    name?: string;
    uuid?: string;
};
export type WhichThemeToDownload = {
    which?: 'original' | 'last_activated' | 'last_created';
};
export type GetStoreThemesData = {
    headers: {
        Accept: string;
    };
};
export type GetStoreThemesResponse = (ThemesCollectionResponse);
export type GetStoreThemesError = unknown;
export type UploadStoreThemeData = {
    body: {
        file: (Blob | File);
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UploadStoreThemeResponse = (JobId);
export type UploadStoreThemeError = (({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} & {
    errors?: {
        [key: string]: unknown;
    };
}));
export type GetStoreThemeData = {
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
};
export type GetStoreThemeResponse = (ThemeResponse);
export type GetStoreThemeError = (({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} & {
    errors?: {
        [key: string]: unknown;
    };
}));
export type DeleteStoreThemeData = {
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
};
export type DeleteStoreThemeResponse = (void);
export type DeleteStoreThemeError = (({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} & {
    errors?: {
        [key: string]: unknown;
    };
}));
export type DownloadStoreThemeData = {
    body: WhichThemeToDownload;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        uuid: string;
    };
};
export type DownloadStoreThemeResponse = (JobId);
export type DownloadStoreThemeError = (({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} & {
    errors?: {
        [key: string]: unknown;
    };
}));
export type ActivateStoreThemeData = {
    body: Activate;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        channel_id?: number;
    };
};
export type ActivateStoreThemeResponse = (NoContent);
export type ActivateStoreThemeError = (({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} & {
    errors?: {
        [key: string]: unknown;
    };
}));
export type GetStoreThemeJobData = {
    headers: {
        Accept: string;
    };
    path: {
        job_id: string;
    };
};
export type GetStoreThemeJobResponse = (JobResponse);
export type GetStoreThemeJobError = (({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} & {
    errors?: {
        [key: string]: unknown;
    };
}));
export type GetThemeConfigurationData = {
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: {
        'channel_id:in'?: Array<(number)>;
        limit?: number;
        page?: number;
        'uuid:in'?: Array<(string)>;
        variation_uuid?: string;
    };
};
export type GetThemeConfigurationResponse = ({
    data?: Array<themeConfiguration_Full>;
    meta?: ThemesCollectionMeta;
});
export type GetThemeConfigurationError = unknown;
export type ValidateThemeConfigurationData = {
    body?: themeConfiguration_Write;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        uuid: string;
    };
};
export type ValidateThemeConfigurationResponse = ({
    [key: string]: unknown;
});
export type ValidateThemeConfigurationError = (ErrorResponse);
export type GetThemeCustomTemplatesData = {
    headers: {
        Accept: string;
    };
    path: {
        version_uuid: string;
    };
};
export type GetThemeCustomTemplatesResponse = ({
    data?: {
        product?: Array<(string)>;
        category?: Array<(string)>;
        brand?: Array<(string)>;
        page?: Array<(string)>;
    };
    meta?: OpenMeta;
});
export type GetThemeCustomTemplatesError = unknown;
