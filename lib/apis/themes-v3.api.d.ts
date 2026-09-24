import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ThemesV3ApiSpecs from '../generated/themes-v3';
export * as ThemesV3ApiSpecs from '../generated/themes-v3';
export declare class ThemesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getStoreThemes(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.ThemesCollectionResponse>>>;
    uploadTheme(requestBody: ThemesV3ApiSpecs.UploadThemeData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<ThemesV3ApiSpecs.JobId>>>;
    uploadStoreTheme(...args: Parameters<ThemesV3Api['uploadTheme']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<ThemesV3ApiSpecs.JobId>>>;
    getStoreTheme(uuid: ThemesV3ApiSpecs.GetStoreThemeData['path']['uuid']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.ThemeResponse>>>;
    deleteStoreTheme(uuid: ThemesV3ApiSpecs.DeleteStoreThemeData['path']['uuid']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    downloadTheme(uuid: ThemesV3ApiSpecs.DownloadThemeData['path']['uuid'], requestBody: ThemesV3ApiSpecs.DownloadThemeData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.JobId>>>;
    downloadStoreTheme(...args: Parameters<ThemesV3Api['downloadTheme']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.JobId>>>;
    activateStoreTheme(requestBody: ThemesV3ApiSpecs.ActivateStoreThemeData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<ThemesV3ApiSpecs.NoContent>>>;
    getJob(jobId: ThemesV3ApiSpecs.GetJobData['path']['job_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.JobResponse>>>;
    getStoreThemeJob(...args: Parameters<ThemesV3Api['getJob']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.JobResponse>>>;
    getThemesByUuidConfigurations(uuid: ThemesV3ApiSpecs.GetThemesByUuidConfigurationsData['path']['uuid'], query?: ThemesV3ApiSpecs.GetThemesByUuidConfigurationsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ThemesV3ApiSpecs.ThemeConfigurationFull>;
        meta?: ThemesV3ApiSpecs.ThemesCollectionMeta;
    }>>>;
    getThemeConfiguration(...args: Parameters<ThemesV3Api['getThemesByUuidConfigurations']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ThemesV3ApiSpecs.ThemeConfigurationFull>;
        meta?: ThemesV3ApiSpecs.ThemesCollectionMeta;
    }>>>;
    postThemesByUuidConfigurationsValidate(uuid: ThemesV3ApiSpecs.PostThemesByUuidConfigurationsValidateData['path']['uuid'], requestBody: ThemesV3ApiSpecs.PostThemesByUuidConfigurationsValidateData['body']): Promise<RequestSuccessResponse<200, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<422, Required<ThemesV3ApiSpecs.ErrorResponse>>>;
    validateThemeConfiguration(...args: Parameters<ThemesV3Api['postThemesByUuidConfigurationsValidate']>): Promise<RequestSuccessResponse<200, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<422, Required<ThemesV3ApiSpecs.ErrorResponse>>>;
    getThemesThemeUuidCustomTemplates(versionUuid: ThemesV3ApiSpecs.GetThemesThemeUuidCustomTemplatesData['path']['version_uuid']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: {
            product?: Array<string>;
            category?: Array<string>;
            brand?: Array<string>;
            page?: Array<string>;
        };
        meta?: ThemesV3ApiSpecs.OpenMeta;
    }>>>;
    getThemeCustomTemplates(...args: Parameters<ThemesV3Api['getThemesThemeUuidCustomTemplates']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: {
            product?: Array<string>;
            category?: Array<string>;
            brand?: Array<string>;
            page?: Array<string>;
        };
        meta?: ThemesV3ApiSpecs.OpenMeta;
    }>>>;
}
