import RequestService from '../helpers/request/request-service';
import * as AcceptedMethodsV3ApiSpecs from '../generated/accepted-methods-v3';

export default class AcceptedMethodsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Accepted Payment Methods
     *
     * Returns a list of accepted payment methods based on the `order_id` or `checkout_id`.

     **Notes**
     * Use the [Create an Order](/docs/rest-management/orders#create-an-order) endpoint to generate the `order_id`.
     * Orders created will be set to incomplete order status.
     * The cart ID and checkout ID are the same.

     **Required Fields**
     * `order_id` or `checkout_id`
     */
    getPaymentMethods(
        query?: AcceptedMethodsV3ApiSpecs.GetPaymentMethodsData['query'],
    ) {
        return this.request.get<any, AcceptedMethodsV3ApiSpecs.GetPaymentMethodsError>({
            path: 'v3/payments/methods',
            query,
        });
    }
}
