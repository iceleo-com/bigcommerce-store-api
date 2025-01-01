import RequestService from '../helpers/request/request-service';
import * as TaxClassesV2ApiSpecs from '../generated/tax-classes-v2';

export default class TaxClassesV2Api {
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
        return this.request.get<TaxClassesV2ApiSpecs.GetTaxClassesResponse, any>({
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
    ) {
        return this.request.get<TaxClassesV2ApiSpecs.GetTaxClassResponse, any>({
            path: 'v2/tax_classes/{id}',
        });
    }
}
