import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as AcceptedMethodsV3ApiSpecs from '../generated/accepted-methods-v3';
export * as AcceptedMethodsV3ApiSpecs from '../generated/accepted-methods-v3';

export class AcceptedMethodsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * List Accepted Payment Methods
     *
     * Returns a list of accepted payment methods based on the `order_id` or `checkout_id`.

     **Notes**
     * Use the [Create an Order](/developer/api-reference/rest/admin/management/orders/create-order) endpoint to generate the `order_id`.
     * Orders created will be set to incomplete order status.
     * The cart ID and checkout ID are the same.

     **Required Fields**
     * `order_id` or `checkout_id`
     */
    getPaymentMethods(
        query?: AcceptedMethodsV3ApiSpecs.GetPaymentMethodsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<AcceptedMethodsV3ApiSpecs.GetPaymentMethodsResponses[200]>>,(RequestErrorResponse<400, Required<AcceptedMethodsV3ApiSpecs.GetPaymentMethodsErrors[400]>> | RequestErrorResponse<401, Required<AcceptedMethodsV3ApiSpecs.GetPaymentMethodsErrors[401]>> | RequestErrorResponse<404, Required<AcceptedMethodsV3ApiSpecs.GetPaymentMethodsErrors[404]>> | RequestErrorResponse<409, Required<AcceptedMethodsV3ApiSpecs.GetPaymentMethodsErrors[409]>> | RequestErrorResponse<422, Required<AcceptedMethodsV3ApiSpecs.GetPaymentMethodsErrors[422]>>)>({
            path: 'v3/payments/methods',
            query,
        });
    }
}
