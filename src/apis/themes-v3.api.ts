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
     * List Themes
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
     * Upload Theme
     *
     * Uploads a new *Theme* to your BigCommerce store.

     **Required Fields**
     * file
     */
    uploadStoreTheme(
        requestBody: ThemesV3ApiSpecs.UploadStoreThemeData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<ThemesV3ApiSpecs.UploadStoreThemeResponses[201]>>,RequestErrorResponse<400, void>>({
            path: 'v3/themes',
            contentType: 'multipart/form-data',
            body: requestBody,
        });
    }

    /**
     * Get Theme
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
     * Delete Theme
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
     * Download Theme
     *
     * Downloads a stores *Theme*.
     */
    downloadStoreTheme(
        uuid: ThemesV3ApiSpecs.DownloadStoreThemeData['path']['uuid'],
        requestBody: ThemesV3ApiSpecs.DownloadStoreThemeData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.DownloadStoreThemeResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/themes/${uuid}/actions/download`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Activate Theme
     *
     * Actives a store *Theme*.

     This returns a 204 response upon success.
     */
    activateStoreTheme(
        requestBody: ThemesV3ApiSpecs.ActivateStoreThemeData['body'],
        query?: ThemesV3ApiSpecs.ActivateStoreThemeData['query'],
    ) {
        return this.request.post<RequestSuccessResponse<204, Required<ThemesV3ApiSpecs.ActivateStoreThemeResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/themes/actions/activate',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Get Theme Configuration
     *
     * Returns a list of theme's configurations.

     **Usage Notes**:
     * At least one filter must be provided.
     */
    getThemeConfiguration(
        uuid: ThemesV3ApiSpecs.GetThemeConfigurationData['path']['uuid'],
        query?: ThemesV3ApiSpecs.GetThemeConfigurationData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.GetThemeConfigurationResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/themes/${uuid}/configurations`,
            query,
        });
    }

    /**
     * Validate Theme Configuration
     *
     * Validates a theme configuration against the theme's schema without creating it. Useful for testing schemas before creation.
     */
    validateThemeConfiguration(
        uuid: ThemesV3ApiSpecs.ValidateThemeConfigurationData['path']['uuid'],
        requestBody: ThemesV3ApiSpecs.ValidateThemeConfigurationData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.ValidateThemeConfigurationResponses[200]>>,RequestErrorResponse<422, Required<ThemesV3ApiSpecs.ValidateThemeConfigurationErrors[422]>>>({
            path: `v3/themes/${uuid}/configurations/validate`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * List Custom Templates
     *
     * Enumerate available custom templates for in the theme files in a specific theme version for each supported entity type.
     */
    getThemeCustomTemplates(
        versionUuid: ThemesV3ApiSpecs.GetThemeCustomTemplatesData['path']['version_uuid'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.GetThemeCustomTemplatesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/themes/custom-templates/${versionUuid}`,
        });
    }

    /**
     * Get Theme Job
     *
     * Returns a theme *Job*. When the job is complete, the results array provides a generated link to access the theme. The link is active for 60 seconds.
     */
    getStoreThemeJob(
        jobId: ThemesV3ApiSpecs.GetStoreThemeJobData['path']['job_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ThemesV3ApiSpecs.GetStoreThemeJobResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/themes/jobs/${jobId}`,
        });
    }
}
