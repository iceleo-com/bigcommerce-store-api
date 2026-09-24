import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxSettingsV3ApiSpecs from '../generated/tax-settings-v3';
export * as TaxSettingsV3ApiSpecs from '../generated/tax-settings-v3';
export declare class TaxSettingsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getTaxSettings(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: TaxSettingsV3ApiSpecs.TaxSettings;
        meta?: TaxSettingsV3ApiSpecs.MetaOpen;
    }>>>;
    setTaxSettings(requestBody: TaxSettingsV3ApiSpecs.SetTaxSettingsData['body']): Promise<RequestErrorResponse<422, Required<unknown>> | RequestSuccessResponse<200, Required<{
        data?: TaxSettingsV3ApiSpecs.TaxSettings;
        meta?: TaxSettingsV3ApiSpecs.MetaOpen;
    }>>>;
    updateTaxSettings(...args: Parameters<TaxSettingsV3Api['setTaxSettings']>): Promise<RequestErrorResponse<422, Required<unknown>> | RequestSuccessResponse<200, Required<{
        data?: TaxSettingsV3ApiSpecs.TaxSettings;
        meta?: TaxSettingsV3ApiSpecs.MetaOpen;
    }>>>;
}
