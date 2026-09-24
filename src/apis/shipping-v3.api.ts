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
     * List Customs Information
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
        return this.request.get<RequestSuccessResponse<200, Required<ShippingV3ApiSpecs.GetCustomsInformationResponses[200]>>,RequestErrorResponse<400, Required<ShippingV3ApiSpecs.GetCustomsInformationErrors[400]>>>({
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
    updateCustomsInformation(
        requestBody: ShippingV3ApiSpecs.UpdateCustomsInformationData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ShippingV3ApiSpecs.UpdateCustomsInformationResponses[200]>>,(RequestErrorResponse<400, Required<ShippingV3ApiSpecs.UpdateCustomsInformationErrors[400]>> | RequestErrorResponse<413, Required<ShippingV3ApiSpecs.UpdateCustomsInformationErrors[413]>> | RequestErrorResponse<422, Required<ShippingV3ApiSpecs.UpdateCustomsInformationErrors[422]>>)>({
            path: 'v3/shipping/products/customs-information',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Customs Information
     *
     * Deletes customs information objects for a product.

     ## Example

     This is a batch operation. Pass the product IDs to delete in the `product_id:in` query parameter. `product_id:in` is the only filter this endpoint accepts; other operators return `400`. A request with no `product_id:in` filter returns `204` and deletes nothing.

     ```http
     DELETE /shipping/products/customs-information?product_id:in=4,5,6
     ```
     */
    deleteCustomsInformation(
        query?: ShippingV3ApiSpecs.DeleteCustomsInformationData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ShippingV3ApiSpecs.DeleteCustomsInformationResponses[204]>>,RequestErrorResponse<400, Required<ShippingV3ApiSpecs.DeleteCustomsInformationErrors[400]>>>({
            path: 'v3/shipping/products/customs-information',
            query,
        });
    }

    /**
     * Get Shipping Settings
     *
     * Returns the global-level shipping settings.
     */
    getShippingSettings(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ShippingV3ApiSpecs.GetShippingSettingsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/shipping/settings',
        });
    }

    /**
     * Update Shipping Settings
     *
     * Updates the global-level shipping settings.
     */
    updateShippingSettings(
        requestBody: ShippingV3ApiSpecs.UpdateShippingSettingsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ShippingV3ApiSpecs.UpdateShippingSettingsResponses[200]>>,(RequestErrorResponse<400, Required<ShippingV3ApiSpecs.UpdateShippingSettingsErrors[400]>> | RequestErrorResponse<422, Required<ShippingV3ApiSpecs.UpdateShippingSettingsErrors[422]>>)>({
            path: 'v3/shipping/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Shipping Settings per Channel
     *
     * Returns shipping settings for a specific channel. A `channel_id` that does not exist returns `200` with the default channel settings.
     */
    getChannelShippingSettings(
        channelId: ShippingV3ApiSpecs.GetChannelShippingSettingsData['path']['channel_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ShippingV3ApiSpecs.GetChannelShippingSettingsResponses[200]>>,RequestErrorResponse<400, Required<ShippingV3ApiSpecs.GetChannelShippingSettingsErrors[400]>>>({
            path: `v3/shipping/settings/channels/${channelId}`,
        });
    }

    /**
     * Update Shipping Settings per Channel
     *
     * Updates shipping settings for a specific channel.
     */
    updateChannelShippingSettings(
        channelId: ShippingV3ApiSpecs.UpdateChannelShippingSettingsData['path']['channel_id'],
        requestBody: ShippingV3ApiSpecs.UpdateChannelShippingSettingsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ShippingV3ApiSpecs.UpdateChannelShippingSettingsResponses[200]>>,(RequestErrorResponse<400, Required<ShippingV3ApiSpecs.UpdateChannelShippingSettingsErrors[400]>> | RequestErrorResponse<422, Required<ShippingV3ApiSpecs.UpdateChannelShippingSettingsErrors[422]>>)>({
            path: `v3/shipping/settings/channels/${channelId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
