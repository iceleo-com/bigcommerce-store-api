import RequestService from '../helpers/request/request-service';
import * as TaxClassesV2ApiSpecs from '../generated/tax-classes-v2';
export default class TaxClassesV2Api {
    private readonly request;
    constructor(request: RequestService);
    getTaxClasses(query?: TaxClassesV2ApiSpecs.GetTaxClassesData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<TaxClassesV2ApiSpecs.GetTaxClassesResponse, any>>;
    getTaxClass(): Promise<import("../helpers/request/request-service.types").RequestResponse<TaxClassesV2ApiSpecs.taxClass_Full, any>>;
}
