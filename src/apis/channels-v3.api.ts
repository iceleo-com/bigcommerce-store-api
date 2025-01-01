import RequestService from '../helpers/request/request-service';
import * as ChannelsV3ApiSpecs from '../generated/channels-v3';

export default class ChannelsV3Api {
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
        return this.request.get<any, ChannelsV3ApiSpecs.GetChannelsError>({
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
        return this.request.post<any, ChannelsV3ApiSpecs.CreateChannelError>({
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
        return this.request.get<any, ChannelsV3ApiSpecs.GetChannelError>({
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
     * `config_meta`

     > #### Note
     > * Partial updates are supported. In most cases, if a field that *cannot* be updated is passed in, the API **will not** respond with an error. It returns a 200 response with the object, in which you will see the field(s) were not updated.
     > * `platform` and `type` cannot be updated after a channel is created.
     > * A channel with status `deleted` or `terminated` cannot be updated.
     */
    updateChannel(
        channelId: ChannelsV3ApiSpecs.UpdateChannelData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.UpdateChannelData['body'],
    ) {
        return this.request.put<any, ChannelsV3ApiSpecs.UpdateChannelError>({
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
        return this.request.get<any, ChannelsV3ApiSpecs.GetChannelActiveThemeError>({
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
        return this.request.get<any, any>({
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
        return this.request.post<any, ChannelsV3ApiSpecs.CreateMultipleChannelsCurrencyAssignmentsError>({
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
        return this.request.put<any, ChannelsV3ApiSpecs.UpdateMultipleChannelsCurrencyAssignmentsError>({
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
        return this.request.get<any, ChannelsV3ApiSpecs.GetSingleChannelCurrencyAssignmentsError>({
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
        return this.request.post<any, ChannelsV3ApiSpecs.CreateSingleChannelCurrencyAssignmentsError>({
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
        return this.request.put<any, ChannelsV3ApiSpecs.UpdateSingleChannelCurrencyAssignmentsError>({
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
        return this.request.delete<any, ChannelsV3ApiSpecs.DeleteSingleChannelCurrencyAssignmentsError>({
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
        return this.request.get<any, ChannelsV3ApiSpecs.GetChannelListingsError>({
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
        return this.request.post<any, ChannelsV3ApiSpecs.CreateChannelListingsError>({
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
        return this.request.put<any, ChannelsV3ApiSpecs.UpdateChannelListingsError>({
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
        return this.request.get<any, ChannelsV3ApiSpecs.GetChannelListingError>({
            path: `v3/channels/${channelId}/listings/${listingId}`,
        });
    }

    /**
     * Upsert a Siteʼs Checkout URL
     *
     * Creates or updates (upserts) a siteʼs checkout URL
     */
    updateCheckoutUrl(
        channelId: ChannelsV3ApiSpecs.UpdateCheckoutUrlData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.UpdateCheckoutUrlData['body'],
    ) {
        return this.request.put<ChannelsV3ApiSpecs.UpdateCheckoutUrlResponse, ChannelsV3ApiSpecs.UpdateCheckoutUrlError>({
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
        return this.request.delete<ChannelsV3ApiSpecs.DeleteCheckoutUrlResponse, any>({
            path: `v3/channels/${channelId}/site/checkout-url`,
        });
    }

    /**
     * Get a Channel Site
     *
     * Alias of `GET /sites?channel_id=channel_id`

     Returns site data for the specified channel.

     */
    getChannelSite(
        channelId: ChannelsV3ApiSpecs.GetChannelSiteData['path']['channel_id'],
    ) {
        return this.request.get<any, any>({
            path: `v3/channels/${channelId}/site`,
        });
    }

    /**
     * Create a Channel Site
     *
     * Alias of POST `/sites`. Creates a site for provided channel.
     */
    createChannelSite(
        channelId: ChannelsV3ApiSpecs.CreateChannelSiteData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.CreateChannelSiteData['body'],
    ) {
        return this.request.post<any, any>({
            path: `v3/channels/${channelId}/site`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update a Channel Site
     *
     * Updates a site for provided channel.
     */
    updateChannelSite(
        channelId: ChannelsV3ApiSpecs.UpdateChannelSiteData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.UpdateChannelSiteData['body'],
    ) {
        return this.request.put<any, any>({
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
        return this.request.delete<ChannelsV3ApiSpecs.DeleteChannelSiteResponse, any>({
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
        return this.request.get<any, any>({
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
        return this.request.post<any, ChannelsV3ApiSpecs.CreateChannelMenusError>({
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
        return this.request.delete<ChannelsV3ApiSpecs.DeleteChannelMenusResponse, any>({
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
        return this.request.get<any, any>({
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
        return this.request.post<any, ChannelsV3ApiSpecs.CreateChannelMetafieldError>({
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
        return this.request.get<any, ChannelsV3ApiSpecs.GetChannelMetafieldError>({
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
        return this.request.put<any, ChannelsV3ApiSpecs.UpdateChannelMetafieldError>({
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
        return this.request.delete<any, ChannelsV3ApiSpecs.DeleteChannelMetafieldError>({
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
        return this.request.get<ChannelsV3ApiSpecs.GetChannelsMetafieldsResponse, any>({
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
        return this.request.post<ChannelsV3ApiSpecs.CreateChannelsMetafieldsResponse, ChannelsV3ApiSpecs.CreateChannelsMetafieldsError>({
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
        return this.request.put<ChannelsV3ApiSpecs.UpdateChannelsMetafieldsResponse, ChannelsV3ApiSpecs.UpdateChannelsMetafieldsError>({
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
        return this.request.delete<ChannelsV3ApiSpecs.DeleteChannelsMetafieldsResponse, ChannelsV3ApiSpecs.DeleteChannelsMetafieldsError>({
            path: 'v3/channels/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
