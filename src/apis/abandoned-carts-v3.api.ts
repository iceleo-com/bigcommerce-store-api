import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as AbandonedCartsV3ApiSpecs from '../generated/abandoned-carts-v3';
export * as AbandonedCartsV3ApiSpecs from '../generated/abandoned-carts-v3';

export class AbandonedCartsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Abandoned Cart
     *
     * Return the `cart_id` corresponding to the abandoned cart `{token}` passed in.

     **Usage Notes**:
     * `{token}` is the token in the query string of the abandoned cart link found in abandoned cart email notifications to shoppers
     */
    getAbandonedCart(
        token: AbandonedCartsV3ApiSpecs.GetAbandonedCartData['path']['token'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<AbandonedCartsV3ApiSpecs.GetAbandonedCartResponses[200]>>,(RequestErrorResponse<400, Required<AbandonedCartsV3ApiSpecs.GetAbandonedCartErrors[400]>> | RequestErrorResponse<404, Required<AbandonedCartsV3ApiSpecs.GetAbandonedCartErrors[404]>> | RequestErrorResponse<422, Required<AbandonedCartsV3ApiSpecs.GetAbandonedCartErrors[422]>> | RequestErrorResponse<502, Required<AbandonedCartsV3ApiSpecs.GetAbandonedCartErrors[502]>> | RequestErrorResponse<503, Required<AbandonedCartsV3ApiSpecs.GetAbandonedCartErrors[503]>> | RequestErrorResponse<504, Required<AbandonedCartsV3ApiSpecs.GetAbandonedCartErrors[504]>>)>({
            path: `v3/abandoned-carts/${token}`,
        });
    }

    /**
     * @deprecated Use `getAbandonedCart` instead.
     */
    getAbandonedCarts(...args: Parameters<AbandonedCartsV3Api['getAbandonedCart']>) {
        return this.getAbandonedCart(...args);
    }

    /**
     * Get Global Abandoned Cart Settings
     *
     * Return the global abandoned cart settings of a store.
     */
    getGlobalAbandonedCartSettings(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<AbandonedCartsV3ApiSpecs.GetGlobalAbandonedCartSettingsResponses[200]>>,RequestErrorResponse<401, Required<AbandonedCartsV3ApiSpecs.GetGlobalAbandonedCartSettingsErrors[401]>>>({
            path: 'v3/abandoned-carts/settings',
        });
    }

    /**
     * Update Global Abandoned Cart Settings
     *
     * Update the global abandoned cart settings of a store.
     */
    updateGlobalAbandonedCartSettings(
        requestBody: AbandonedCartsV3ApiSpecs.UpdateGlobalAbandonedCartSettingsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<AbandonedCartsV3ApiSpecs.UpdateGlobalAbandonedCartSettingsResponses[200]>>,(RequestErrorResponse<401, Required<AbandonedCartsV3ApiSpecs.UpdateGlobalAbandonedCartSettingsErrors[401]>> | RequestErrorResponse<422, Required<AbandonedCartsV3ApiSpecs.UpdateGlobalAbandonedCartSettingsErrors[422]>>)>({
            path: 'v3/abandoned-carts/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Channel Abandoned Cart Settings
     *
     * Return the per-channel overrides for the abandoned cart settings of a store.
     */
    getChannelAbandonedCartSettings(
        channelId: AbandonedCartsV3ApiSpecs.GetChannelAbandonedCartSettingsData['path']['channel_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<AbandonedCartsV3ApiSpecs.GetChannelAbandonedCartSettingsResponses[200]>>,RequestErrorResponse<401, Required<AbandonedCartsV3ApiSpecs.GetChannelAbandonedCartSettingsErrors[401]>>>({
            path: `v3/abandoned-carts/settings/channels/${channelId}`,
        });
    }

    /**
     * Update Channel Abandoned Cart Settings
     *
     * Updates the per-channel overrides for the abandoned cart settings of a store.

     #### OAuth Scopes
     | UI Name                                      | Permission | Parameter                                     |
     |----------------------------------------------|------------|-----------------------------------------------|
     | Information & Settings                       | modify     | `store_v2_information`                        |
     */
    updateChannelAbandonedCartSettings(
        channelId: AbandonedCartsV3ApiSpecs.UpdateChannelAbandonedCartSettingsData['path']['channel_id'],
        requestBody: AbandonedCartsV3ApiSpecs.UpdateChannelAbandonedCartSettingsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<AbandonedCartsV3ApiSpecs.UpdateChannelAbandonedCartSettingsResponses[200]>>,(RequestErrorResponse<401, Required<AbandonedCartsV3ApiSpecs.UpdateChannelAbandonedCartSettingsErrors[401]>> | RequestErrorResponse<422, Required<AbandonedCartsV3ApiSpecs.UpdateChannelAbandonedCartSettingsErrors[422]>>)>({
            path: `v3/abandoned-carts/settings/channels/${channelId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
