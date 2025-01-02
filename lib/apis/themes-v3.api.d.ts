import RequestService from '../helpers/request/request-service';
import * as ThemesV3ApiSpecs from '../generated/themes-v3';
export default class ThemesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getStoreThemes(): Promise<import("../helpers/request/request-service.types").RequestResponse<ThemesV3ApiSpecs.ThemesCollectionResponse, any>>;
    uploadStoreTheme(requestBody: ThemesV3ApiSpecs.UploadStoreThemeData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getStoreTheme(uuid: ThemesV3ApiSpecs.GetStoreThemeData['path']['uuid']): Promise<import("../helpers/request/request-service.types").RequestResponse<ThemesV3ApiSpecs.ThemeResponse, any>>;
    deleteStoreTheme(uuid: ThemesV3ApiSpecs.DeleteStoreThemeData['path']['uuid']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    downloadStoreTheme(uuid: ThemesV3ApiSpecs.DownloadStoreThemeData['path']['uuid'], requestBody: ThemesV3ApiSpecs.DownloadStoreThemeData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<ThemesV3ApiSpecs.JobId, any>>;
    activateStoreTheme(requestBody: ThemesV3ApiSpecs.ActivateStoreThemeData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getStoreThemeJob(jobId: ThemesV3ApiSpecs.GetStoreThemeJobData['path']['job_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<ThemesV3ApiSpecs.JobResponse, any>>;
    getThemeConfiguration(uuid: ThemesV3ApiSpecs.GetThemeConfigurationData['path']['uuid'], query?: ThemesV3ApiSpecs.GetThemeConfigurationData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    validateThemeConfiguration(uuid: ThemesV3ApiSpecs.ValidateThemeConfigurationData['path']['uuid'], requestBody: ThemesV3ApiSpecs.ValidateThemeConfigurationData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<ThemesV3ApiSpecs.ValidateThemeConfigurationResponse, ThemesV3ApiSpecs.ErrorResponse>>;
    getThemeCustomTemplates(versionUuid: ThemesV3ApiSpecs.GetThemeCustomTemplatesData['path']['version_uuid']): Promise<import("../helpers/request/request-service.types").RequestResponse<ThemesV3ApiSpecs.GetThemeCustomTemplatesResponse, any>>;
}
