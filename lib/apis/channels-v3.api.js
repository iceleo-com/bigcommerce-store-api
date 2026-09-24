"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelsV3Api = exports.ChannelsV3ApiSpecs = void 0;
exports.ChannelsV3ApiSpecs = __importStar(require("../generated/channels-v3"));
class ChannelsV3Api {
    constructor(request) {
        this.request = request;
    }
    listChannels(query) {
        return this.request.get({
            path: 'v3/channels',
            query,
        });
    }
    getChannels(...args) {
        return this.listChannels(...args);
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
    listAllCurrencyAssignments() {
        return this.request.get({
            path: 'v3/channels/currency-assignments',
        });
    }
    getAllCurrencyAssignments(...args) {
        return this.listAllCurrencyAssignments(...args);
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
    listChannelListings(channelId, query) {
        return this.request.get({
            path: `v3/channels/${channelId}/listings`,
            query,
        });
    }
    getChannelListings(...args) {
        return this.listChannelListings(...args);
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
    putCheckoutUrl(channelId, requestBody) {
        return this.request.put({
            path: `v3/channels/${channelId}/site/checkout-url`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCheckoutUrl(...args) {
        return this.putCheckoutUrl(...args);
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
    postChannelSite(channelId, requestBody) {
        return this.request.post({
            path: `v3/channels/${channelId}/site`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createChannelSite(...args) {
        return this.postChannelSite(...args);
    }
    putChannelSite(channelId, requestBody) {
        return this.request.put({
            path: `v3/channels/${channelId}/site`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateChannelSite(...args) {
        return this.putChannelSite(...args);
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
    postChannelMenus(channelId, requestBody) {
        return this.request.post({
            path: `v3/channels/${channelId}/channel-menus`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createChannelMenus(...args) {
        return this.postChannelMenus(...args);
    }
    deleteChannelMenus(channelId) {
        return this.request.delete({
            path: `v3/channels/${channelId}/channel-menus`,
        });
    }
    getChannelsChannelIdMetafields(channelId, query) {
        return this.request.get({
            path: `v3/channels/${channelId}/metafields`,
            query,
        });
    }
    getChannelMetafields(...args) {
        return this.getChannelsChannelIdMetafields(...args);
    }
    postChannelsChannelIdMetafields(channelId, requestBody) {
        return this.request.post({
            path: `v3/channels/${channelId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createChannelMetafield(...args) {
        return this.postChannelsChannelIdMetafields(...args);
    }
    getChannelsChannelIdMetafieldsMetafieldId(channelId, metafieldId) {
        return this.request.get({
            path: `v3/channels/${channelId}/metafields/${metafieldId}`,
        });
    }
    getChannelMetafield(...args) {
        return this.getChannelsChannelIdMetafieldsMetafieldId(...args);
    }
    putChannelsChannelIdMetafieldsMetafieldId(channelId, metafieldId, requestBody) {
        return this.request.put({
            path: `v3/channels/${channelId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateChannelMetafield(...args) {
        return this.putChannelsChannelIdMetafieldsMetafieldId(...args);
    }
    deleteChannelsChannelIdMetafieldsMetafieldId(channelId, metafieldId) {
        return this.request.delete({
            path: `v3/channels/${channelId}/metafields/${metafieldId}`,
        });
    }
    deleteChannelMetafield(...args) {
        return this.deleteChannelsChannelIdMetafieldsMetafieldId(...args);
    }
}
exports.ChannelsV3Api = ChannelsV3Api;
