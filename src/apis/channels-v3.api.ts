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
    listChannels(
        query?: ChannelsV3ApiSpecs.ListChannelsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.ListChannelsResponses[200]>>,RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.ListChannelsErrors[422]>>>({
            path: 'v3/channels',
            query,
        });
    }

    /**
     * @deprecated Use `listChannels` instead.
     */
    getChannels(...args: Parameters<ChannelsV3Api['listChannels']>) {
        return this.listChannels(...args);
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
    listAllCurrencyAssignments(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.ListAllCurrencyAssignmentsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/channels/currency-assignments',
        });
    }

    /**
     * @deprecated Use `listAllCurrencyAssignments` instead.
     */
    getAllCurrencyAssignments(...args: Parameters<ChannelsV3Api['listAllCurrencyAssignments']>) {
        return this.listAllCurrencyAssignments(...args);
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
     * Returns a list of all *Channel Listings* for a specific channel. Note that if the *Channel* is not found or there is no listing associated to the *Channel*, it will return a 200 response with empty data.
     */
    listChannelListings(
        channelId: ChannelsV3ApiSpecs.ListChannelListingsData['path']['channel_id'],
        query?: ChannelsV3ApiSpecs.ListChannelListingsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.ListChannelListingsResponses[200]>>,(RequestErrorResponse<400, Required<ChannelsV3ApiSpecs.ListChannelListingsErrors[400]>> | RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.ListChannelListingsErrors[422]>>)>({
            path: `v3/channels/${channelId}/listings`,
            query,
        });
    }

    /**
     * @deprecated Use `listChannelListings` instead.
     */
    getChannelListings(...args: Parameters<ChannelsV3Api['listChannelListings']>) {
        return this.listChannelListings(...args);
    }

    /**
     * Create Channel Listings
     *
     * Creates one or more *Channel Listings* for a specific channel.
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
     * Updates one or more *Channel Listings* for a specific channel.

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
     * Returns a *Channel Listing* for a specific channel.
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
     * Upsert a Site's Checkout URL
     *
     * Creates or updates (upserts) a site's checkout URL
     */
    putCheckoutUrl(
        channelId: ChannelsV3ApiSpecs.PutCheckoutUrlData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.PutCheckoutUrlData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.PutCheckoutUrlResponses[200]>>,RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.PutCheckoutUrlErrors[422]>>>({
            path: `v3/channels/${channelId}/site/checkout-url`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `putCheckoutUrl` instead.
     */
    updateCheckoutUrl(...args: Parameters<ChannelsV3Api['putCheckoutUrl']>) {
        return this.putCheckoutUrl(...args);
    }

    /**
     * Delete a Site's Checkout URL
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
     */
    postChannelSite(
        channelId: ChannelsV3ApiSpecs.PostChannelSiteData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.PostChannelSiteData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.PostChannelSiteResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/channels/${channelId}/site`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `postChannelSite` instead.
     */
    createChannelSite(...args: Parameters<ChannelsV3Api['postChannelSite']>) {
        return this.postChannelSite(...args);
    }

    /**
     * Update a Channel Site
     *
     * Updates a site for provided channel.
     */
    putChannelSite(
        channelId: ChannelsV3ApiSpecs.PutChannelSiteData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.PutChannelSiteData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.PutChannelSiteResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/channels/${channelId}/site`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `putChannelSite` instead.
     */
    updateChannelSite(...args: Parameters<ChannelsV3Api['putChannelSite']>) {
        return this.putChannelSite(...args);
    }

    /**
     * Delete a Channel Site
     *
     * Deletes the Channel's site.
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
    postChannelMenus(
        channelId: ChannelsV3ApiSpecs.PostChannelMenusData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.PostChannelMenusData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.PostChannelMenusResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/channels/${channelId}/channel-menus`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `postChannelMenus` instead.
     */
    createChannelMenus(...args: Parameters<ChannelsV3Api['postChannelMenus']>) {
        return this.postChannelMenus(...args);
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
    getChannelsChannelIdMetafields(
        channelId: ChannelsV3ApiSpecs.GetChannelsChannelIdMetafieldsData['path']['channel_id'],
        query?: ChannelsV3ApiSpecs.GetChannelsChannelIdMetafieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.GetChannelsChannelIdMetafieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/channels/${channelId}/metafields`,
            query,
        });
    }

    /**
     * @deprecated Use `getChannelsChannelIdMetafields` instead.
     */
    getChannelMetafields(...args: Parameters<ChannelsV3Api['getChannelsChannelIdMetafields']>) {
        return this.getChannelsChannelIdMetafields(...args);
    }

    /**
     * Create a Channel Metafield
     *
     * Creates a channel metafield.

     **Note:** The maxiumum number of metafields allowed on each order, product, category, variant, channel, or brand is 250 per client ID. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
     */
    postChannelsChannelIdMetafields(
        channelId: ChannelsV3ApiSpecs.PostChannelsChannelIdMetafieldsData['path']['channel_id'],
        requestBody: ChannelsV3ApiSpecs.PostChannelsChannelIdMetafieldsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.PostChannelsChannelIdMetafieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/channels/${channelId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `postChannelsChannelIdMetafields` instead.
     */
    createChannelMetafield(...args: Parameters<ChannelsV3Api['postChannelsChannelIdMetafields']>) {
        return this.postChannelsChannelIdMetafields(...args);
    }

    /**
     * Get a Channel Metafield
     *
     * Returns a single channel metafield.
     */
    getChannelsChannelIdMetafieldsMetafieldId(
        channelId: ChannelsV3ApiSpecs.GetChannelsChannelIdMetafieldsMetafieldIdData['path']['channel_id'],
        metafieldId: ChannelsV3ApiSpecs.GetChannelsChannelIdMetafieldsMetafieldIdData['path']['metafield_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.GetChannelsChannelIdMetafieldsMetafieldIdResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/channels/${channelId}/metafields/${metafieldId}`,
        });
    }

    /**
     * @deprecated Use `getChannelsChannelIdMetafieldsMetafieldId` instead.
     */
    getChannelMetafield(...args: Parameters<ChannelsV3Api['getChannelsChannelIdMetafieldsMetafieldId']>) {
        return this.getChannelsChannelIdMetafieldsMetafieldId(...args);
    }

    /**
     * Update a Channel Metafield
     *
     * Updates a single channel metafield.

     **Usage Notes**
     * Attempting to modify `namespace`, `key`, and `permission_set` fields using a client ID different from the one used to create those metafields will result in a `403` error message. 
     */
    putChannelsChannelIdMetafieldsMetafieldId(
        channelId: ChannelsV3ApiSpecs.PutChannelsChannelIdMetafieldsMetafieldIdData['path']['channel_id'],
        metafieldId: ChannelsV3ApiSpecs.PutChannelsChannelIdMetafieldsMetafieldIdData['path']['metafield_id'],
        requestBody: ChannelsV3ApiSpecs.PutChannelsChannelIdMetafieldsMetafieldIdData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.PutChannelsChannelIdMetafieldsMetafieldIdResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/channels/${channelId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `putChannelsChannelIdMetafieldsMetafieldId` instead.
     */
    updateChannelMetafield(...args: Parameters<ChannelsV3Api['putChannelsChannelIdMetafieldsMetafieldId']>) {
        return this.putChannelsChannelIdMetafieldsMetafieldId(...args);
    }

    /**
     * Delete a Channel Metafield
     *
     * Deletes a single channel metafield.
     */
    deleteChannelsChannelIdMetafieldsMetafieldId(
        channelId: ChannelsV3ApiSpecs.DeleteChannelsChannelIdMetafieldsMetafieldIdData['path']['channel_id'],
        metafieldId: ChannelsV3ApiSpecs.DeleteChannelsChannelIdMetafieldsMetafieldIdData['path']['metafield_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ChannelsV3ApiSpecs.DeleteChannelsChannelIdMetafieldsMetafieldIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/channels/${channelId}/metafields/${metafieldId}`,
        });
    }

    /**
     * @deprecated Use `deleteChannelsChannelIdMetafieldsMetafieldId` instead.
     */
    deleteChannelMetafield(...args: Parameters<ChannelsV3Api['deleteChannelsChannelIdMetafieldsMetafieldId']>) {
        return this.deleteChannelsChannelIdMetafieldsMetafieldId(...args);
    }
}
