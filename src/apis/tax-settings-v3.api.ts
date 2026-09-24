import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxSettingsV3ApiSpecs from '../generated/tax-settings-v3';
export * as TaxSettingsV3ApiSpecs from '../generated/tax-settings-v3';

export class TaxSettingsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Tax Settings
     *
     * Retrieves global-level tax settings.
     */
    getTaxSettings(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<TaxSettingsV3ApiSpecs.GetTaxSettingsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/tax/settings',
        });
    }

    /**
     * Update Tax Settings
     *
     * Updates global-level tax settings.
     */
    updateTaxSettings(
        requestBody: TaxSettingsV3ApiSpecs.UpdateTaxSettingsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<TaxSettingsV3ApiSpecs.UpdateTaxSettingsResponses[200]>>,RequestErrorResponse<422, Required<TaxSettingsV3ApiSpecs.UpdateTaxSettingsErrors[422]>>>({
            path: 'v3/tax/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
