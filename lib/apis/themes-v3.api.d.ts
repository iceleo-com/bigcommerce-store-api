import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ThemesV3ApiSpecs from '../generated/themes-v3';
export * as ThemesV3ApiSpecs from '../generated/themes-v3';
export declare class ThemesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getStoreThemes(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.ThemesCollectionResponse>>>;
    uploadStoreTheme(requestBody: ThemesV3ApiSpecs.UploadStoreThemeData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<ThemesV3ApiSpecs.JobId>>>;
    getStoreTheme(uuid: ThemesV3ApiSpecs.GetStoreThemeData['path']['uuid']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.ThemeResponse>>>;
    deleteStoreTheme(uuid: ThemesV3ApiSpecs.DeleteStoreThemeData['path']['uuid']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    downloadStoreTheme(uuid: ThemesV3ApiSpecs.DownloadStoreThemeData['path']['uuid'], requestBody: ThemesV3ApiSpecs.DownloadStoreThemeData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.JobId>>>;
    activateStoreTheme(requestBody: ThemesV3ApiSpecs.ActivateStoreThemeData['body'], query?: ThemesV3ApiSpecs.ActivateStoreThemeData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getThemeConfiguration(uuid: ThemesV3ApiSpecs.GetThemeConfigurationData['path']['uuid'], query?: ThemesV3ApiSpecs.GetThemeConfigurationData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.ThemeConfigurationsGetThemeConfigurationResponse200>>>;
    validateThemeConfiguration(uuid: ThemesV3ApiSpecs.ValidateThemeConfigurationData['path']['uuid'], requestBody: ThemesV3ApiSpecs.ValidateThemeConfigurationData['body']): Promise<RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.ThemeConfigurationsValidateThemeConfigurationResponse200>> | RequestErrorResponse<422, Required<ThemesV3ApiSpecs.ErrorResponse>>>;
    getThemeCustomTemplates(versionUuid: ThemesV3ApiSpecs.GetThemeCustomTemplatesData['path']['version_uuid']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.ThemeCustomTemplatesGetThemeCustomTemplatesResponse200>>>;
    getStoreThemeJob(jobId: ThemesV3ApiSpecs.GetStoreThemeJobData['path']['job_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.JobResponse>>>;
}
