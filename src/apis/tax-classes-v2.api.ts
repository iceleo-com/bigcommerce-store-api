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
    getAllTaxClasses(
        query?: TaxClassesV2ApiSpecs.GetAllTaxClassesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<TaxClassesV2ApiSpecs.GetAllTaxClassesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/tax_classes',
            query,
        });
    }

    /**
     * @deprecated Use `getAllTaxClasses` instead.
     */
    getTaxClasses(...args: Parameters<TaxClassesV2Api['getAllTaxClasses']>) {
        return this.getAllTaxClasses(...args);
    }

    /**
     * Get a Tax Class
     *
     * Returns a single *Tax Class*.
     */
    getAtaxClass(
        id: TaxClassesV2ApiSpecs.GetATaxClassData['path']['id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<TaxClassesV2ApiSpecs.GetATaxClassResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/tax_classes/${id}`,
        });
    }

    /**
     * @deprecated Use `getAtaxClass` instead.
     */
    getTaxClass(...args: Parameters<TaxClassesV2Api['getAtaxClass']>) {
        return this.getAtaxClass(...args);
    }
}
