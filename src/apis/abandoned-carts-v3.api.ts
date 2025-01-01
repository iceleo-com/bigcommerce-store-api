import RequestService from '../helpers/request/request-service';
import * as AbandonedCartsV3ApiSpecs from '../generated/abandoned-carts-v3';

export default class AbandonedCartsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get global abandoned cart settings
     *
     * Return the global abandoned cart settings of a store.
     */
    getGlobalAbandonedCartSettings(
        query?: AbandonedCartsV3ApiSpecs.GetGlobalAbandonedCartSettingsData['query'],
    ) {
        return this.request.get<AbandonedCartsV3ApiSpecs.GetGlobalAbandonedCartSettingsResponse, AbandonedCartsV3ApiSpecs.GetGlobalAbandonedCartSettingsError>({
            path: 'v3/abandoned-carts/settings',
            query,
        });
    }

    /**
     * Update global abandoned cart settings
     *
     * Update the global abandoned cart settings of a store.
     */
    updateGlobalAbandonedCartSettings(
        requestBody: AbandonedCartsV3ApiSpecs.UpdateGlobalAbandonedCartSettingsData['body'],
    ) {
        return this.request.put<AbandonedCartsV3ApiSpecs.UpdateGlobalAbandonedCartSettingsResponse, AbandonedCartsV3ApiSpecs.UpdateGlobalAbandonedCartSettingsError>({
            path: 'v3/abandoned-carts/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get channel abandoned cart settings
     *
     * Return the per-channel overrides for the abandoned cart settings of a store.
     */
    getChannelAbandonedCartSettings(
    ) {
        return this.request.get<AbandonedCartsV3ApiSpecs.GetChannelAbandonedCartSettingsResponse, AbandonedCartsV3ApiSpecs.GetChannelAbandonedCartSettingsError>({
            path: 'v3/abandoned-carts/settings/channels/{channel_id}',
        });
    }

    /**
     * Update channel abandoned cart settings
     *
     * Updates the per-channel overrides for the abandoned cart settings of a store.

     #### OAuth Scopes
     | UI Name                                      | Permission | Parameter                                     |
     |----------------------------------------------|------------|-----------------------------------------------|     
     | Information & Settings                       | modify     | `store_v2_information`                        |
     */
    updateChannelAbandonedCartSettings(
        requestBody: AbandonedCartsV3ApiSpecs.UpdateChannelAbandonedCartSettingsData['body'],
    ) {
        return this.request.put<AbandonedCartsV3ApiSpecs.UpdateChannelAbandonedCartSettingsResponse, AbandonedCartsV3ApiSpecs.UpdateChannelAbandonedCartSettingsError>({
            path: 'v3/abandoned-carts/settings/channels/{channel_id}',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get an abandoned cart
     *
     * Return the `cart_id` corresponding to the abandoned cart `{token}` passed in.

     **Usage Notes**:
     * `{token}` is the token in the query string of the abandoned cart link found in abandoned cart email notifications to shoppers
     */
    getAbandonedCarts(
        token: AbandonedCartsV3ApiSpecs.GetAbandonedCartsData['path']['token'],
    ) {
        return this.request.get<any, AbandonedCartsV3ApiSpecs.GetAbandonedCartsError>({
            path: `v3/abandoned-carts/${token}`,
        });
    }
}
