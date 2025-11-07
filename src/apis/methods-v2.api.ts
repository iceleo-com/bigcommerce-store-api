import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as MethodsV2ApiSpecs from '../generated/methods-v2';
export * as MethodsV2ApiSpecs from '../generated/methods-v2';

export class MethodsV2Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Payment Methods
     *
     * Gets the list of enabled payment methods. Default sorting is by payment method, alphabetically from A to Z.

     > #### Note
     > Avoid using this API operation if possible. It is not supported; therefore, all enabled providers may not appear.

     */
    getAllPaymentMethods(
        query?: MethodsV2ApiSpecs.GetAllPaymentMethodsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<MethodsV2ApiSpecs.GetAllPaymentMethodsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/payments/methods',
            query,
        });
    }
}
