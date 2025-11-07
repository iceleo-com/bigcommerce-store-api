import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ChannelsV3ApiSpecs from '../generated/channels-v3';
export * as ChannelsV3ApiSpecs from '../generated/channels-v3';

export class ChannelsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Channels
     *
     * Returns a list of *Channels*.

     Will always return the default BigCommerce storefront with an ID of `1`. This storefront is created by default when you provision a BigCommerce store.
     */
    getChannels(
        query?: ChannelsV3ApiSpecs.GetChannelsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.GetChannelsResponses[200]>>,RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.GetChannelsErrors[422]>>>({
            path: 'v3/channels',
            query,
        });
    }

    /**
     * Create a Channel
     *
     * Creates a *Channel*.
     */
    createChannel(
        requestBody: ChannelsV3ApiSpecs.CreateChannelData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.CreateChannelResponses[200]>>,RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.CreateChannelErrors[422]>>>({
            path: 'v3/channels',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Channel
     *
     * Returns a *Channel*. Channel ID `1` returns the default BigCommerce storefront.
     */
    getChannel(
        channelId: ChannelsV3ApiSpecs.GetChannelData['path']['channel_id'],
        query?: ChannelsV3ApiSpecs.GetChannelData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.GetChannelResponses[200]>>,RequestErrorResponse<404, Required<ChannelsV3ApiSpecs.GetChannelErrors[404]>>>({
            path: `v3/channels/${channelId}`,
            query,
        });
    }

    /**
     * Update a Channel
     *
     * Updates a *Channel*.

     ## Updatable Fields

     The following fields can be updated.
     * `name`
     * `external_id`
     * `status`
     * `is_listable_from_ui`
     * `is_visible`

     > #### Note
     > * Partial updates are supported. In most cases, if a field that *cannot* be updated is passed in, the API **will not** respond with an error. It returns a 200 response with the object, in which you will see the field(s) were not updated.
     > * `platform` and `type` cannot be updated after a channel is created.
     > * A channel with status `deleted` or `terminated` cannot be updated.
     */
    updateChannel(
        channelId: ChannelsV3ApiSpecs.UpdateChannelData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.UpdateChannelData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.UpdateChannelResponses[200]>>,(RequestErrorResponse<404, Required<ChannelsV3ApiSpecs.UpdateChannelErrors[404]>> | RequestErrorResponse<409, Required<ChannelsV3ApiSpecs.UpdateChannelErrors[409]>> | RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.UpdateChannelErrors[422]>>)>({
            path: `v3/channels/${channelId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Channel Active Theme
     *
     * Returns details of the theme active on the specified channel.
     Does not support active Blueprint (legacy) themes.
     */
    getChannelActiveTheme(
        channelId: ChannelsV3ApiSpecs.GetChannelActiveThemeData['path']['channel_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.GetChannelActiveThemeResponses[200]>>,RequestErrorResponse<404, Required<ChannelsV3ApiSpecs.GetChannelActiveThemeErrors[404]>>>({
            path: `v3/channels/${channelId}/active-theme`,
        });
    }

    /**
     * Get All Channels Currency Assignments
     *
     * Returns a list of currency assignments for all channels.
     */
    getAllCurrencyAssignments(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.GetAllCurrencyAssignmentsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/channels/currency-assignments',
        });
    }

    /**
     * Create Multiple Channels Currency Assignments
     *
     * Sets enabled currencies and default currency for multiple channels. Note that currencies must be added first in the **Settings > Setup > Currencies** settings from an active MSF-enabled BigCommerce store control panel before the currencies can be assigned to a channel.
     */
    createMultipleChannelsCurrencyAssignments(
        requestBody: ChannelsV3ApiSpecs.CreateMultipleChannelsCurrencyAssignmentsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.CreateMultipleChannelsCurrencyAssignmentsResponses[200]>>,RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.CreateMultipleChannelsCurrencyAssignmentsErrors[422]>>>({
            path: 'v3/channels/currency-assignments',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Multiple Channels Currency Assignments
     *
     * Updates enabled currencies and default currency for multiple channels. Note that currencies must be added first in the **Settings > Setup > Currencies** settings from an active MSF-enabled BigCommerce store control panel before the currencies can be assigned to a channel.
     */
    updateMultipleChannelsCurrencyAssignments(
        requestBody: ChannelsV3ApiSpecs.UpdateMultipleChannelsCurrencyAssignmentsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.UpdateMultipleChannelsCurrencyAssignmentsResponses[200]>>,RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.UpdateMultipleChannelsCurrencyAssignmentsErrors[422]>>>({
            path: 'v3/channels/currency-assignments',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Channel Currency Assignments
     *
     * Returns a list of currency assignments for a specific channel.
     */
    getSingleChannelCurrencyAssignments(
        channelId: ChannelsV3ApiSpecs.GetSingleChannelCurrencyAssignmentsData['path']['channel_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.GetSingleChannelCurrencyAssignmentsResponses[200]>>,RequestErrorResponse<404, Required<ChannelsV3ApiSpecs.GetSingleChannelCurrencyAssignmentsErrors[404]>>>({
            path: `v3/channels/${channelId}/currency-assignments`,
        });
    }

    /**
     * Create Channel Currency Assignments
     *
     * Sets enabled currencies and default currency for a specific channel. Note that currencies must be added first in the **Settings > Setup > Currencies** settings from an active MSF-enabled BigCommerce store control panel before the currencies can be assigned to a channel.
     */
    createSingleChannelCurrencyAssignments(
        channelId: ChannelsV3ApiSpecs.CreateSingleChannelCurrencyAssignmentsData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.CreateSingleChannelCurrencyAssignmentsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.CreateSingleChannelCurrencyAssignmentsResponses[200]>>,RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.CreateSingleChannelCurrencyAssignmentsErrors[422]>>>({
            path: `v3/channels/${channelId}/currency-assignments`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Channel Currency Assignments
     *
     * Updates enabled currencies and default currency for a specific channel. Note that currencies must be added first in the **Settings > Setup > Currencies** settings from an active MSF-enabled BigCommerce store control panel before the currencies can be assigned to a channel.
     */
    updateSingleChannelCurrencyAssignments(
        channelId: ChannelsV3ApiSpecs.UpdateSingleChannelCurrencyAssignmentsData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.UpdateSingleChannelCurrencyAssignmentsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.UpdateSingleChannelCurrencyAssignmentsResponses[200]>>,RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.UpdateSingleChannelCurrencyAssignmentsErrors[422]>>>({
            path: `v3/channels/${channelId}/currency-assignments`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Channel Currency Assignments
     *
     * Deletes currency assignments for a specific channel. Once done, this channel will inherit the store’s currency settings.
     */
    deleteSingleChannelCurrencyAssignments(
        channelId: ChannelsV3ApiSpecs.DeleteSingleChannelCurrencyAssignmentsData['path']['channel_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.DeleteSingleChannelCurrencyAssignmentsResponses[200]>>,RequestErrorResponse<404, Required<ChannelsV3ApiSpecs.DeleteSingleChannelCurrencyAssignmentsErrors[404]>>>({
            path: `v3/channels/${channelId}/currency-assignments`,
        });
    }

    /**
     * Get Channel Listings
     *
     * Returns a list of all *Channel Listings* for a specific channel. We recommend using this endpoint for non-storefront channels like marketplaces, marketing channels, and point of sale (POS) channels. Note that if the *Channel* is not found or there is no listing associated with the *Channel*, it will return a 200 response with empty data.
     */
    getChannelListings(
        channelId: ChannelsV3ApiSpecs.GetChannelListingsData['path']['channel_id'],
        query?: ChannelsV3ApiSpecs.GetChannelListingsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.GetChannelListingsResponses[200]>>,(RequestErrorResponse<400, Required<ChannelsV3ApiSpecs.GetChannelListingsErrors[400]>> | RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.GetChannelListingsErrors[422]>>)>({
            path: `v3/channels/${channelId}/listings`,
            query,
        });
    }

    /**
     * Create Channel Listings
     *
     * Creates one or more *Channel Listings* for a specific channel. We recommend using this endpoint for non-storefront channels like marketplaces, marketing channels, and point of sale (POS) channels.
     */
    createChannelListings(
        channelId: ChannelsV3ApiSpecs.CreateChannelListingsData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.CreateChannelListingsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.CreateChannelListingsResponses[200]>>,RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.CreateChannelListingsErrors[422]>>>({
            path: `v3/channels/${channelId}/listings`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Channel Listings
     *
     * Updates one or more *Channel Listings* for a specific channel. We recommend using this endpoint for non-storefront channels like marketplaces, marketing channels, and point of sale (POS) channels. 

     > #### Note
     > * Partial updates are supported. In most cases, if a field that *cannot* be updated is passed in, the API **will not** respond with an error. It returns a 200 response with the object, in which you will see the field(s) were not updated.
     > * If a new variant is provided, the API will append the variant to the list. If a variant already exists, the API will update the existing variant. Other variants that are not provided in the payload remains unchanged.
     > * If `listing_id` does not exist, the API will return a 200 response with empty data.
     > * `listing_id` is required and cannot be less than or equal to zero.
     > * `product_id` cannot be updated after a channel listing is created.
     > * `product_id` of a variant must match the `product_id` of the channel listing.
     */
    updateChannelListings(
        channelId: ChannelsV3ApiSpecs.UpdateChannelListingsData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.UpdateChannelListingsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.UpdateChannelListingsResponses[200]>>,RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.UpdateChannelListingsErrors[422]>>>({
            path: `v3/channels/${channelId}/listings`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Channel Listing
     *
     * Returns a *Channel Listing* for a specific channel. We recommend using this endpoint for non-storefront channels like marketplaces, marketing channels, and point of sale (POS) channels.
     */
    getChannelListing(
        channelId: ChannelsV3ApiSpecs.GetChannelListingData['path']['channel_id'],
        listingId: ChannelsV3ApiSpecs.GetChannelListingData['path']['listing_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.GetChannelListingResponses[200]>>,RequestErrorResponse<404, Required<ChannelsV3ApiSpecs.GetChannelListingErrors[404]>>>({
            path: `v3/channels/${channelId}/listings/${listingId}`,
        });
    }

    /**
     * Upsert a Siteʼs Checkout URL
     *
     * Creates or updates (upserts) a siteʼs checkout URL

     <Callout type="info">
         For the "urls" object, we no longer modify the `www` prefix of the primary URL. The API returns URLs exactly as the customer enters them, similar to the "url" field.

           * If the customer saves a URL with `www`, the API returns it with `www`.
           * If the customer saves a URL without `www`, the API returns it without `www`.
       </Callout>
     */
    updateCheckoutUrl(
        channelId: ChannelsV3ApiSpecs.UpdateCheckoutUrlData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.UpdateCheckoutUrlData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.UpdateCheckoutUrlResponses[200]>>,RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.UpdateCheckoutUrlErrors[422]>>>({
            path: `v3/channels/${channelId}/site/checkout-url`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Siteʼs Checkout URL
     *
     * Deletes a siteʼs checkout URL. After deletion, a shared checkout URL is used.
     */
    deleteCheckoutUrl(
        channelId: ChannelsV3ApiSpecs.DeleteCheckoutUrlData['path']['channel_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.DeleteCheckoutUrlResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/channels/${channelId}/site/checkout-url`,
        });
    }

    /**
     * Get a Channel Site
     *
     * Alias of `GET /sites?channel_id=channel_id`

     Returns site data for the specified channel.

     <Callout type="info">
       For the "urls" object, we no longer modify the `www` prefix of the primary URL. The API returns URLs exactly as the customer enters them, similar to the "url" field.

         * If the customer saves a URL with `www`, the API returns it with `www`.
         * If the customer saves a URL without `www`, the API returns it without `www`.
     </Callout>

     */
    getChannelSite(
        channelId: ChannelsV3ApiSpecs.GetChannelSiteData['path']['channel_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.GetChannelSiteResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/channels/${channelId}/site`,
        });
    }

    /**
     * Create a Channel Site
     *
     * Alias of POST `/sites`. Creates a site for provided channel.

      <Callout type="info">
         For the "urls" object, we no longer modify the `www` prefix of the primary URL. The API returns URLs exactly as the customer enters them, similar to the "url" field.

           * If the customer saves a URL with `www`, the API returns it with `www`.
           * If the customer saves a URL without `www`, the API returns it without `www`.
       </Callout>
     */
    createChannelSite(
        channelId: ChannelsV3ApiSpecs.CreateChannelSiteData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.CreateChannelSiteData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.CreateChannelSiteResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/channels/${channelId}/site`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update a Channel Site
     *
     * Updates a site for provided channel.

       <Callout type="info">
         For the "urls" object, we no longer modify the `www` prefix of the primary URL. The API returns URLs exactly as the customer enters them, similar to the "url" field.

           * If the customer saves a URL with `www`, the API returns it with `www`.
           * If the customer saves a URL without `www`, the API returns it without `www`.
       </Callout>
     */
    updateChannelSite(
        channelId: ChannelsV3ApiSpecs.UpdateChannelSiteData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.UpdateChannelSiteData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.UpdateChannelSiteResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/channels/${channelId}/site`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Channel Site
     *
     * Deletes the Channelʼs site.
     */
    deleteChannelSite(
        channelId: ChannelsV3ApiSpecs.DeleteChannelSiteData['path']['channel_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.DeleteChannelSiteResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/channels/${channelId}/site`,
        });
    }

    /**
     * Get Channel Menus
     *
     * Returns list of Control Panel side navigation menus for a channel.

     */
    getChannelMenus(
        channelId: ChannelsV3ApiSpecs.GetChannelMenusData['path']['channel_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.GetChannelMenusResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/channels/${channelId}/channel-menus`,
        });
    }

    /**
     * Create Channel Menus
     *
     * Creates or replaces list of control panel side navigation menus for a channel.
     */
    createChannelMenus(
        channelId: ChannelsV3ApiSpecs.CreateChannelMenusData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.CreateChannelMenusData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.CreateChannelMenusResponses[200]>>,RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.CreateChannelMenusErrors[422]>>>({
            path: `v3/channels/${channelId}/channel-menus`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Channel Menus
     *
     * Deletes control panel side navigation menus for a channel.
     */
    deleteChannelMenus(
        channelId: ChannelsV3ApiSpecs.DeleteChannelMenusData['path']['channel_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.DeleteChannelMenusResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/channels/${channelId}/channel-menus`,
        });
    }

    /**
     * Get Channel Metafields
     *
     * Returns a list of metafields on a channel. Optional filter parameters can be passed in.
     */
    getChannelMetafields(
        channelId: ChannelsV3ApiSpecs.GetChannelMetafieldsData['path']['channel_id'],
        query?: ChannelsV3ApiSpecs.GetChannelMetafieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.GetChannelMetafieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/channels/${channelId}/metafields`,
            query,
        });
    }

    /**
     * Create a Channel Metafield
     *
     * Creates a channel metafield.

     **Note:** The maxiumum number of metafields allowed on each order, product, category, variant, channel, or brand is 250 per client ID. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
     */
    createChannelMetafield(
        channelId: ChannelsV3ApiSpecs.CreateChannelMetafieldData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.CreateChannelMetafieldData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.CreateChannelMetafieldResponses[200]>>,(RequestErrorResponse<400, Required<ChannelsV3ApiSpecs.CreateChannelMetafieldErrors[400]>> | RequestErrorResponse<409, Required<ChannelsV3ApiSpecs.CreateChannelMetafieldErrors[409]>> | RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.CreateChannelMetafieldErrors[422]>>)>({
            path: `v3/channels/${channelId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Channel Metafield
     *
     * Returns a single channel metafield.
     */
    getChannelMetafield(
        channelId: ChannelsV3ApiSpecs.GetChannelMetafieldData['path']['channel_id'],
        metafieldId: ChannelsV3ApiSpecs.GetChannelMetafieldData['path']['metafield_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.GetChannelMetafieldResponses[200]>>,RequestErrorResponse<404, Required<ChannelsV3ApiSpecs.GetChannelMetafieldErrors[404]>>>({
            path: `v3/channels/${channelId}/metafields/${metafieldId}`,
        });
    }

    /**
     * Update a Channel Metafield
     *
     * Updates a single channel metafield.

     **Usage Notes**
     * Attempting to modify `namespace`, `key`, and `permission_set` fields using a client ID different from the one used to create those metafields will result in a `403` error message. 
     */
    updateChannelMetafield(
        channelId: ChannelsV3ApiSpecs.UpdateChannelMetafieldData['path']['channel_id'],
        metafieldId: ChannelsV3ApiSpecs.UpdateChannelMetafieldData['path']['metafield_id'],
        requestBody: ChannelsV3ApiSpecs.UpdateChannelMetafieldData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.UpdateChannelMetafieldResponses[200]>>,(RequestErrorResponse<400, Required<ChannelsV3ApiSpecs.UpdateChannelMetafieldErrors[400]>> | RequestErrorResponse<404, Required<ChannelsV3ApiSpecs.UpdateChannelMetafieldErrors[404]>>)>({
            path: `v3/channels/${channelId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Channel Metafield
     *
     * Deletes a single channel metafield.
     */
    deleteChannelMetafield(
        channelId: ChannelsV3ApiSpecs.DeleteChannelMetafieldData['path']['channel_id'],
        metafieldId: ChannelsV3ApiSpecs.DeleteChannelMetafieldData['path']['metafield_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ChannelsV3ApiSpecs.DeleteChannelMetafieldResponses[204]>>,RequestErrorResponse<404, Required<ChannelsV3ApiSpecs.DeleteChannelMetafieldErrors[404]>>>({
            path: `v3/channels/${channelId}/metafields/${metafieldId}`,
        });
    }

    /**
     * Get All Channel Metafields
     *
     * Get all channel metafields.
     */
    getChannelsMetafields(
        query?: ChannelsV3ApiSpecs.GetChannelsMetafieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.GetChannelsMetafieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/channels/metafields',
            query,
        });
    }

    /**
     * Create multiple Metafields
     *
     * Create multiple metafields.
     */
    createChannelsMetafields(
        requestBody: ChannelsV3ApiSpecs.CreateChannelsMetafieldsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.CreateChannelsMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<ChannelsV3ApiSpecs.CreateChannelsMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.CreateChannelsMetafieldsErrors[422]>>)>({
            path: 'v3/channels/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update multiple Metafields
     *
     * Update multiple metafields.
     */
    updateChannelsMetafields(
        requestBody: ChannelsV3ApiSpecs.UpdateChannelsMetafieldsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.UpdateChannelsMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<ChannelsV3ApiSpecs.UpdateChannelsMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.UpdateChannelsMetafieldsErrors[422]>>)>({
            path: 'v3/channels/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Multiple Metafields
     *
     * Delete all channel metafields.
     */
    deleteChannelsMetafields(
        requestBody: ChannelsV3ApiSpecs.DeleteChannelsMetafieldsData['body'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.DeleteChannelsMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<ChannelsV3ApiSpecs.DeleteChannelsMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.DeleteChannelsMetafieldsErrors[422]>>)>({
            path: 'v3/channels/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
