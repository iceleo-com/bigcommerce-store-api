import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ShippingV3ApiSpecs from '../generated/shipping-v3';
export * as ShippingV3ApiSpecs from '../generated/shipping-v3';

export class ShippingV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Customs Information
     *
     * Get customs information for products.

     This list can be filtered to return customs information objects specific to a list of requested product_ids. This is achieved by appending the query string `?product_id:in=4,5,6` to the resource `/shipping/products/customs-information`.

     ```http
     GET /shipping/products/customs-information?product_id:in=4,5,6
     ```
     */
    getCustomsInformation(
        query?: ShippingV3ApiSpecs.GetCustomsInformationData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ShippingV3ApiSpecs.GetCustomsInformationResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/shipping/products/customs-information',
            query,
        });
    }

    /**
     * Upsert Customs Information
     *
     * Creates and updates product customs information.

     This is a batch operation where the creation of multiple customs information objects can be done with one `PUT` request.

     **Limits**
     * Limit of 50 customs information objects per `PUT` request.
     */
    putCustomsInformation(
        requestBody: ShippingV3ApiSpecs.PutCustomsInformationData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ShippingV3ApiSpecs.PutCustomsInformationResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/shipping/products/customs-information',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `putCustomsInformation` instead.
     */
    updateCustomsInformation(...args: Parameters<ShippingV3Api['putCustomsInformation']>) {
        return this.putCustomsInformation(...args);
    }

    /**
     * Delete Customs Information
     *
     * Deletes customs information objects for a product.

     ## Example

     This is a batch operation. The `product_id:in` query parameter is required.

     ```http
     DELETE /shipping/products/customs-information?product_id:in=4,5,6
     ```
     */
    deleteCustomsInformation(
        query?: ShippingV3ApiSpecs.DeleteCustomsInformationData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ShippingV3ApiSpecs.DeleteCustomsInformationResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/shipping/products/customs-information',
            query,
        });
    }
}
