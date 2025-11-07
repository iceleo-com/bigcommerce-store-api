import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxClassesV2ApiSpecs from '../generated/tax-classes-v2';
export * as TaxClassesV2ApiSpecs from '../generated/tax-classes-v2';

export class TaxClassesV2Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Tax Classes
     *
     * Returns a list of all *Tax Classes* in a store.

     Default sorting is by tax-class id, from lowest to highest.
     */
    getTaxClasses(
        query?: TaxClassesV2ApiSpecs.GetTaxClassesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<TaxClassesV2ApiSpecs.GetTaxClassesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/tax_classes',
            query,
        });
    }

    /**
     * Get a Tax Class
     *
     * Returns a single *Tax Class*.
     */
    getTaxClass(
        id: TaxClassesV2ApiSpecs.GetTaxClassData['path']['id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<TaxClassesV2ApiSpecs.GetTaxClassResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/tax_classes/${id}`,
        });
    }
}
