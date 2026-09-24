import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ThemesV3ApiSpecs from '../generated/themes-v3';
export * as ThemesV3ApiSpecs from '../generated/themes-v3';

export class ThemesV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get all Themes
     *
     * Returns a list of store *Themes*.
     */
    getStoreThemes(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.GetStoreThemesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/themes',
        });
    }

    /**
     * Upload a Theme
     *
     * Uploads a new *Theme* to your BigCommerce store.

     **Required Fields**
     * file
     */
    uploadTheme(
        requestBody: ThemesV3ApiSpecs.UploadThemeData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<ThemesV3ApiSpecs.UploadThemeResponses[201]>>,RequestErrorResponse<400, void>>({
            path: 'v3/themes',
            contentType: 'multipart/form-data',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `uploadTheme` instead.
     */
    uploadStoreTheme(...args: Parameters<ThemesV3Api['uploadTheme']>) {
        return this.uploadTheme(...args);
    }

    /**
     * Get a Theme
     *
     * Returns a store *Theme*. The theme variation is not available at this endpoint.
     */
    getStoreTheme(
        uuid: ThemesV3ApiSpecs.GetStoreThemeData['path']['uuid'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.GetStoreThemeResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/themes/${uuid}`,
        });
    }

    /**
     * Delete a Theme
     *
     * Deletes a store *Theme*.
     Theme variations can not be deleted using this endpoint. This will delete the theme and all variations.
     */
    deleteStoreTheme(
        uuid: ThemesV3ApiSpecs.DeleteStoreThemeData['path']['uuid'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ThemesV3ApiSpecs.DeleteStoreThemeResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/themes/${uuid}`,
        });
    }

    /**
     * Download a Theme
     *
     * Downloads a stores *Theme*.
     */
    downloadTheme(
        uuid: ThemesV3ApiSpecs.DownloadThemeData['path']['uuid'],
        requestBody: ThemesV3ApiSpecs.DownloadThemeData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.DownloadThemeResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/themes/${uuid}/actions/download`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `downloadTheme` instead.
     */
    downloadStoreTheme(...args: Parameters<ThemesV3Api['downloadTheme']>) {
        return this.downloadTheme(...args);
    }

    /**
     * Activate a Theme
     *
     * Actives a store *Theme*.

     This returns a 204 response upon success.
     */
    activateStoreTheme(
        requestBody: ThemesV3ApiSpecs.ActivateStoreThemeData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<204, Required<ThemesV3ApiSpecs.ActivateStoreThemeResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/themes/actions/activate',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Theme Job
     *
     * Returns a theme *Job*. When the job is complete, the results array provides a generated link to access the theme. The link is active for 60 seconds.
     */
    getJob(
        jobId: ThemesV3ApiSpecs.GetJobData['path']['job_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.GetJobResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/themes/jobs/${jobId}`,
        });
    }

    /**
     * @deprecated Use `getJob` instead.
     */
    getStoreThemeJob(...args: Parameters<ThemesV3Api['getJob']>) {
        return this.getJob(...args);
    }

    /**
     * Get Theme Configuration
     *
     * Returns a list of theme's configurations.

     **Usage Notes**:
     * At least one filter must be provided.
     */
    getThemesByUuidConfigurations(
        uuid: ThemesV3ApiSpecs.GetThemesByUuidConfigurationsData['path']['uuid'],
        query?: ThemesV3ApiSpecs.GetThemesByUuidConfigurationsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.GetThemesByUuidConfigurationsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/themes/${uuid}/configurations`,
            query,
        });
    }

    /**
     * @deprecated Use `getThemesByUuidConfigurations` instead.
     */
    getThemeConfiguration(...args: Parameters<ThemesV3Api['getThemesByUuidConfigurations']>) {
        return this.getThemesByUuidConfigurations(...args);
    }

    /**
     * Validate Theme Configuration
     *
     * Validates a theme configuration against the theme's schema without creating it. Useful for testing schemas before creation.
     */
    postThemesByUuidConfigurationsValidate(
        uuid: ThemesV3ApiSpecs.PostThemesByUuidConfigurationsValidateData['path']['uuid'],
        requestBody: ThemesV3ApiSpecs.PostThemesByUuidConfigurationsValidateData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.PostThemesByUuidConfigurationsValidateResponses[200]>>,RequestErrorResponse<422, Required<ThemesV3ApiSpecs.PostThemesByUuidConfigurationsValidateErrors[422]>>>({
            path: `v3/themes/${uuid}/configurations/validate`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `postThemesByUuidConfigurationsValidate` instead.
     */
    validateThemeConfiguration(...args: Parameters<ThemesV3Api['postThemesByUuidConfigurationsValidate']>) {
        return this.postThemesByUuidConfigurationsValidate(...args);
    }

    /**
     * Get Custom Templates
     *
     * Enumerate available custom templates for in the theme files in a specific theme version for each supported entity type.
     */
    getThemesThemeUuidCustomTemplates(
        versionUuid: ThemesV3ApiSpecs.GetThemesThemeUuidCustomTemplatesData['path']['version_uuid'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.GetThemesThemeUuidCustomTemplatesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/themes/custom-templates/${versionUuid}`,
        });
    }

    /**
     * @deprecated Use `getThemesThemeUuidCustomTemplates` instead.
     */
    getThemeCustomTemplates(...args: Parameters<ThemesV3Api['getThemesThemeUuidCustomTemplates']>) {
        return this.getThemesThemeUuidCustomTemplates(...args);
    }
}
