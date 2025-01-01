import RequestService from '../helpers/request/request-service';
import * as TaxSettingsV3ApiSpecs from '../generated/tax-settings-v3';

export default class TaxSettingsV3Api {
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
        return this.request.get<TaxSettingsV3ApiSpecs.GetTaxSettingsResponse, any>({
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
        return this.request.put<TaxSettingsV3ApiSpecs.UpdateTaxSettingsResponse, TaxSettingsV3ApiSpecs.UpdateTaxSettingsError>({
            path: 'v3/tax/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
