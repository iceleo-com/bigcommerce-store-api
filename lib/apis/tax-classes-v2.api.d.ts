import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxClassesV2ApiSpecs from '../generated/tax-classes-v2';
export * as TaxClassesV2ApiSpecs from '../generated/tax-classes-v2';
export declare class TaxClassesV2Api {
    private readonly request;
    constructor(request: RequestService);
    getTaxClasses(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, TaxClassesV2ApiSpecs.TaxClassFull[]>>;
    getTaxClass(id: TaxClassesV2ApiSpecs.GetTaxClassData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<TaxClassesV2ApiSpecs.TaxClassFull>>>;
}
