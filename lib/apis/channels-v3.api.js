"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChannelsV3Api {
    constructor(request) {
        this.request = request;
    }
    getChannels(query) {
        return this.request.get({
            path: 'v3/channels',
            query,
        });
    }
    createChannel(requestBody) {
        return this.request.post({
            path: 'v3/channels',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getChannel(channelId, query) {
        return this.request.get({
            path: `v3/channels/${channelId}`,
            query,
        });
    }
    updateChannel(channelId, requestBody) {
        return this.request.put({
            path: `v3/channels/${channelId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getChannelActiveTheme(channelId) {
        return this.request.get({
            path: `v3/channels/${channelId}/active-theme`,
        });
    }
    getAllCurrencyAssignments() {
        return this.request.get({
            path: 'v3/channels/currency-assignments',
        });
    }
    createMultipleChannelsCurrencyAssignments(requestBody) {
        return this.request.post({
            path: 'v3/channels/currency-assignments',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateMultipleChannelsCurrencyAssignments(requestBody) {
        return this.request.put({
            path: 'v3/channels/currency-assignments',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getSingleChannelCurrencyAssignments(channelId) {
        return this.request.get({
            path: `v3/channels/${channelId}/currency-assignments`,
        });
    }
    createSingleChannelCurrencyAssignments(channelId, requestBody) {
        return this.request.post({
            path: `v3/channels/${channelId}/currency-assignments`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateSingleChannelCurrencyAssignments(channelId, requestBody) {
        return this.request.put({
            path: `v3/channels/${channelId}/currency-assignments`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteSingleChannelCurrencyAssignments(channelId) {
        return this.request.delete({
            path: `v3/channels/${channelId}/currency-assignments`,
        });
    }
    getChannelListings(channelId, query) {
        return this.request.get({
            path: `v3/channels/${channelId}/listings`,
            query,
        });
    }
    createChannelListings(channelId, requestBody) {
        return this.request.post({
            path: `v3/channels/${channelId}/listings`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateChannelListings(channelId, requestBody) {
        return this.request.put({
            path: `v3/channels/${channelId}/listings`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getChannelListing(channelId, listingId) {
        return this.request.get({
            path: `v3/channels/${channelId}/listings/${listingId}`,
        });
    }
    updateCheckoutUrl(channelId, requestBody) {
        return this.request.put({
            path: `v3/channels/${channelId}/site/checkout-url`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCheckoutUrl(channelId) {
        return this.request.delete({
            path: `v3/channels/${channelId}/site/checkout-url`,
        });
    }
    getChannelSite(channelId) {
        return this.request.get({
            path: `v3/channels/${channelId}/site`,
        });
    }
    createChannelSite(channelId, requestBody) {
        return this.request.post({
            path: `v3/channels/${channelId}/site`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateChannelSite(channelId, requestBody) {
        return this.request.put({
            path: `v3/channels/${channelId}/site`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteChannelSite(channelId) {
        return this.request.delete({
            path: `v3/channels/${channelId}/site`,
        });
    }
    getChannelMenus(channelId) {
        return this.request.get({
            path: `v3/channels/${channelId}/channel-menus`,
        });
    }
    createChannelMenus(channelId, requestBody) {
        return this.request.post({
            path: `v3/channels/${channelId}/channel-menus`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteChannelMenus(channelId) {
        return this.request.delete({
            path: `v3/channels/${channelId}/channel-menus`,
        });
    }
    getChannelMetafields(channelId, query) {
        return this.request.get({
            path: `v3/channels/${channelId}/metafields`,
            query,
        });
    }
    createChannelMetafield(channelId, requestBody) {
        return this.request.post({
            path: `v3/channels/${channelId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getChannelMetafield(channelId, metafieldId) {
        return this.request.get({
            path: `v3/channels/${channelId}/metafields/${metafieldId}`,
        });
    }
    updateChannelMetafield(channelId, metafieldId, requestBody) {
        return this.request.put({
            path: `v3/channels/${channelId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteChannelMetafield(channelId, metafieldId) {
        return this.request.delete({
            path: `v3/channels/${channelId}/metafields/${metafieldId}`,
        });
    }
    getChannelsMetafields(query) {
        return this.request.get({
            path: 'v3/channels/metafields',
            query,
        });
    }
    createChannelsMetafields(requestBody) {
        return this.request.post({
            path: 'v3/channels/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateChannelsMetafields(requestBody) {
        return this.request.put({
            path: 'v3/channels/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteChannelsMetafields(requestBody) {
        return this.request.delete({
            path: 'v3/channels/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = ChannelsV3Api;
