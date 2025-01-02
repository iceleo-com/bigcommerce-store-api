import RequestService from '../helpers/request/request-service';
import * as TaxSettingsV3ApiSpecs from '../generated/tax-settings-v3';
export default class TaxSettingsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getTaxSettings(): Promise<import("../helpers/request/request-service.types").RequestResponse<TaxSettingsV3ApiSpecs.GetTaxSettingsResponse, any>>;
    updateTaxSettings(requestBody: TaxSettingsV3ApiSpecs.UpdateTaxSettingsData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<TaxSettingsV3ApiSpecs.UpdateTaxSettingsResponse, unknown>>;
}
