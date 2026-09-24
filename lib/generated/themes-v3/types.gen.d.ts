export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type ThemesCollectionResponseDataItemsVariationsItems = {
    description?: string;
    external_id?: string;
    name?: string;
    uuid?: string;
};
export type ThemesCollectionResponseDataItems = {
    variations?: Array<ThemesCollectionResponseDataItemsVariationsItems>;
    uuid?: string;
    name?: string;
    is_private?: boolean;
    is_active?: boolean;
    updated_at?: string;
};
export type ThemesCollectionResponseMeta = {
    [key: string]: unknown;
};
export type ThemesCollectionResponse = {
    data?: Array<ThemesCollectionResponseDataItems>;
    meta?: ThemesCollectionResponseMeta;
};
export type JobId = {
    job_id?: string;
};
export type ThemeVariationsItems = {
    description?: string;
    external_id?: string;
    name?: string;
    uuid?: string;
};
export type Theme = {
    variations?: Array<ThemeVariationsItems>;
    uuid?: string;
    name?: string;
    is_private?: boolean;
    is_active?: boolean;
    updated_at?: string;
};
export type CollectionMeta = {
    [key: string]: unknown;
};
export type ThemeResponse = {
    data?: Theme;
    meta?: CollectionMeta;
};
export type WhichThemeToDownloadWhich = 'original' | 'last_activated' | 'last_created';
export type WhichThemeToDownload = {
    which?: WhichThemeToDownloadWhich;
};
export type ActivateWhich = 'original' | 'last_activated' | 'last_created';
export type Activate = {
    variation_id: string;
    which?: ActivateWhich;
};
export type ThemeConfigurationFullSettings = {
    [key: string]: unknown;
};
export type ThemeConfigurationFull = {
    uuid?: string;
    theme_uuid?: string;
    variation_id?: string;
    settings?: ThemeConfigurationFullSettings;
    date_created?: string;
    site_id?: number;
};
export type ThemesCollectionMeta = {
    [key: string]: unknown;
};
export type ThemeConfigurationsGetThemeConfigurationResponse200 = {
    data?: Array<ThemeConfigurationFull>;
    meta?: ThemesCollectionMeta;
};
export type ThemeConfigurationWriteSettings = {
    [key: string]: unknown;
};
export type ThemeConfigurationWrite = {
    variation_id?: string;
    settings?: ThemeConfigurationWriteSettings;
};
export type ThemeConfigurationsValidateThemeConfigurationResponse200 = {
    [key: string]: unknown;
};
export type ErrorResponseErrors = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: ErrorResponseErrors;
};
export type ThemesCustomTemplatesVersionUuidGetResponsesContentApplicationJsonSchemaData = {
    product?: Array<string>;
    category?: Array<string>;
    brand?: Array<string>;
    page?: Array<string>;
};
export type OpenMeta = {
    [key: string]: unknown;
};
export type ThemeCustomTemplatesGetThemeCustomTemplatesResponse200 = {
    data?: ThemesCustomTemplatesVersionUuidGetResponsesContentApplicationJsonSchemaData;
    meta?: OpenMeta;
};
export type JobResponseDataErrorsItems = {
    error?: string;
    message?: string;
};
export type JobResponseDataResult = {
    [key: string]: unknown;
};
export type JobResponseDataStatus = 'COMPLETED' | 'QUEUED' | 'WORKING' | 'FAILED';
export type JobResponseDataWarningsItems = {
    message?: string;
    warning?: string;
};
export type JobResponseData = {
    errors?: Array<JobResponseDataErrorsItems>;
    id?: string;
    percent_complete?: number;
    result?: JobResponseDataResult;
    status?: JobResponseDataStatus;
    time?: string;
    warnings?: Array<JobResponseDataWarningsItems>;
};
export type JobResponse = {
    data?: JobResponseData;
    meta?: OpenMeta;
};
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
    body?: {
        file: Blob | File;
    };
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/themes';
};
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
export type DeleteStoreThemeResponses = {
    204: {
        [key: string]: unknown;
    };
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
export type GetStoreThemeResponses = {
    200: ThemeResponse;
};
export type GetStoreThemeResponse = GetStoreThemeResponses[keyof GetStoreThemeResponses];
export type DownloadStoreThemeData = {
    body?: WhichThemeToDownload;
    headers: {
        Accept: string;
    };
    path: {
        uuid: string;
    };
    query?: never;
    url: '/themes/{uuid}/actions/download';
};
export type DownloadStoreThemeResponses = {
    200: JobId;
};
export type DownloadStoreThemeResponse = DownloadStoreThemeResponses[keyof DownloadStoreThemeResponses];
export type ActivateStoreThemeData = {
    body?: Activate;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
    };
    url: '/themes/actions/activate';
};
export type ActivateStoreThemeResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type ActivateStoreThemeResponse = ActivateStoreThemeResponses[keyof ActivateStoreThemeResponses];
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
        'channel_id:in'?: Array<number>;
        page?: number;
        limit?: number;
        variation_uuid?: string;
    };
    url: '/themes/{uuid}/configurations';
};
export type GetThemeConfigurationResponses = {
    200: ThemeConfigurationsGetThemeConfigurationResponse200;
};
export type GetThemeConfigurationResponse = GetThemeConfigurationResponses[keyof GetThemeConfigurationResponses];
export type ValidateThemeConfigurationData = {
    body?: ThemeConfigurationWrite;
    headers: {
        Accept: string;
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
    200: ThemeConfigurationsValidateThemeConfigurationResponse200;
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
    200: ThemeCustomTemplatesGetThemeCustomTemplatesResponse200;
};
export type GetThemeCustomTemplatesResponse = GetThemeCustomTemplatesResponses[keyof GetThemeCustomTemplatesResponses];
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
export type GetStoreThemeJobResponses = {
    200: JobResponse;
};
export type GetStoreThemeJobResponse = GetStoreThemeJobResponses[keyof GetStoreThemeJobResponses];
