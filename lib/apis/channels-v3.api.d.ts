import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ChannelsV3ApiSpecs from '../generated/channels-v3';
export * as ChannelsV3ApiSpecs from '../generated/channels-v3';
export declare class ChannelsV3Api {
    private readonly request;
    constructor(request: RequestService);
    listChannels(query?: ChannelsV3ApiSpecs.ListChannelsData['query']): Promise<RequestSuccessResponse<200, Required<{
        data: Array<ChannelsV3ApiSpecs.ChannelWithoutCurrencies>;
        meta: ChannelsV3ApiSpecs.MetaWithFullPagination;
    }>> | RequestErrorResponse<422, Required<ChannelsV3ApiSpecs._Error>>>;
    getChannels(...args: Parameters<ChannelsV3Api['listChannels']>): Promise<RequestSuccessResponse<200, Required<{
        data: Array<ChannelsV3ApiSpecs.ChannelWithoutCurrencies>;
        meta: ChannelsV3ApiSpecs.MetaWithFullPagination;
    }>> | RequestErrorResponse<422, Required<ChannelsV3ApiSpecs._Error>>>;
    createChannel(requestBody: ChannelsV3ApiSpecs.CreateChannelData['body']): Promise<RequestErrorResponse<422, Required<ChannelsV3ApiSpecs._Error>> | RequestSuccessResponse<200, Required<{
        data?: ChannelsV3ApiSpecs.ChannelWithoutCurrencies;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    getChannel(channelId: ChannelsV3ApiSpecs.GetChannelData['path']['channel_id'], query?: ChannelsV3ApiSpecs.GetChannelData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ChannelsV3ApiSpecs.ChannelWithCurrencies;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>> | RequestErrorResponse<404, Required<ChannelsV3ApiSpecs._Error>>>;
    updateChannel(channelId: ChannelsV3ApiSpecs.UpdateChannelData['path']['channel_id'], requestBody: ChannelsV3ApiSpecs.UpdateChannelData['body']): Promise<RequestErrorResponse<422, Required<ChannelsV3ApiSpecs._Error>> | RequestErrorResponse<404, Required<ChannelsV3ApiSpecs._Error>> | RequestSuccessResponse<200, Required<{
        data?: ChannelsV3ApiSpecs.ChannelWithoutCurrencies;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>> | RequestErrorResponse<409, Required<ChannelsV3ApiSpecs._Error>>>;
    getChannelActiveTheme(channelId: ChannelsV3ApiSpecs.GetChannelActiveThemeData['path']['channel_id']): Promise<RequestErrorResponse<404, Required<ChannelsV3ApiSpecs._Error>> | RequestSuccessResponse<200, Required<{
        data?: ChannelsV3ApiSpecs.ActiveTheme;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    listAllCurrencyAssignments(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ChannelsV3ApiSpecs.CurrencyNotRequiredWithChannelId>;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    getAllCurrencyAssignments(...args: Parameters<ChannelsV3Api['listAllCurrencyAssignments']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ChannelsV3ApiSpecs.CurrencyNotRequiredWithChannelId>;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    createMultipleChannelsCurrencyAssignments(requestBody: ChannelsV3ApiSpecs.CreateMultipleChannelsCurrencyAssignmentsData['body']): Promise<RequestErrorResponse<422, Required<ChannelsV3ApiSpecs._Error>> | RequestSuccessResponse<200, Required<{
        data?: Array<ChannelsV3ApiSpecs.CurrencyNotRequiredWithChannelId>;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    updateMultipleChannelsCurrencyAssignments(requestBody: ChannelsV3ApiSpecs.UpdateMultipleChannelsCurrencyAssignmentsData['body']): Promise<RequestErrorResponse<422, Required<ChannelsV3ApiSpecs._Error>> | RequestSuccessResponse<200, Required<{
        data?: Array<ChannelsV3ApiSpecs.CurrencyNotRequiredWithChannelId>;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    getSingleChannelCurrencyAssignments(channelId: ChannelsV3ApiSpecs.GetSingleChannelCurrencyAssignmentsData['path']['channel_id']): Promise<RequestErrorResponse<404, Required<ChannelsV3ApiSpecs._Error>> | RequestSuccessResponse<200, Required<{
        data?: ChannelsV3ApiSpecs.CurrencyNotRequiredWithChannelId;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    createSingleChannelCurrencyAssignments(channelId: ChannelsV3ApiSpecs.CreateSingleChannelCurrencyAssignmentsData['path']['channel_id'], requestBody: ChannelsV3ApiSpecs.CreateSingleChannelCurrencyAssignmentsData['body']): Promise<RequestErrorResponse<422, Required<ChannelsV3ApiSpecs._Error>> | RequestSuccessResponse<200, Required<{
        data?: ChannelsV3ApiSpecs.CurrencyNotRequiredWithChannelId;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    updateSingleChannelCurrencyAssignments(channelId: ChannelsV3ApiSpecs.UpdateSingleChannelCurrencyAssignmentsData['path']['channel_id'], requestBody: ChannelsV3ApiSpecs.UpdateSingleChannelCurrencyAssignmentsData['body']): Promise<RequestErrorResponse<422, Required<ChannelsV3ApiSpecs._Error>> | RequestSuccessResponse<200, Required<{
        data?: ChannelsV3ApiSpecs.CurrencyNotRequiredWithChannelId;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    deleteSingleChannelCurrencyAssignments(channelId: ChannelsV3ApiSpecs.DeleteSingleChannelCurrencyAssignmentsData['path']['channel_id']): Promise<RequestErrorResponse<404, Required<ChannelsV3ApiSpecs._Error>> | RequestSuccessResponse<200, Required<{
        data?: ChannelsV3ApiSpecs.ChannelId;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    listChannelListings(channelId: ChannelsV3ApiSpecs.ListChannelListingsData['path']['channel_id'], query?: ChannelsV3ApiSpecs.ListChannelListingsData['query']): Promise<RequestErrorResponse<422, Required<ChannelsV3ApiSpecs._Error>> | RequestSuccessResponse<200, Required<{
        data?: Array<ChannelsV3ApiSpecs.Listing>;
        meta?: ChannelsV3ApiSpecs.MetaWithPartialPagination;
    }>> | RequestErrorResponse<400, Required<ChannelsV3ApiSpecs._Error>>>;
    getChannelListings(...args: Parameters<ChannelsV3Api['listChannelListings']>): Promise<RequestErrorResponse<422, Required<ChannelsV3ApiSpecs._Error>> | RequestSuccessResponse<200, Required<{
        data?: Array<ChannelsV3ApiSpecs.Listing>;
        meta?: ChannelsV3ApiSpecs.MetaWithPartialPagination;
    }>> | RequestErrorResponse<400, Required<ChannelsV3ApiSpecs._Error>>>;
    createChannelListings(channelId: ChannelsV3ApiSpecs.CreateChannelListingsData['path']['channel_id'], requestBody: ChannelsV3ApiSpecs.CreateChannelListingsData['body']): Promise<RequestErrorResponse<422, Required<ChannelsV3ApiSpecs._Error>> | RequestSuccessResponse<200, Required<{
        data?: Array<ChannelsV3ApiSpecs.Listing>;
        meta?: ChannelsV3ApiSpecs.MetaWithPartialPagination;
    }>>>;
    updateChannelListings(channelId: ChannelsV3ApiSpecs.UpdateChannelListingsData['path']['channel_id'], requestBody: ChannelsV3ApiSpecs.UpdateChannelListingsData['body']): Promise<RequestErrorResponse<422, Required<ChannelsV3ApiSpecs._Error>> | RequestSuccessResponse<200, Required<{
        data?: Array<ChannelsV3ApiSpecs.Listing>;
        meta?: ChannelsV3ApiSpecs.MetaWithPartialPagination;
    }>>>;
    getChannelListing(channelId: ChannelsV3ApiSpecs.GetChannelListingData['path']['channel_id'], listingId: ChannelsV3ApiSpecs.GetChannelListingData['path']['listing_id']): Promise<RequestErrorResponse<404, Required<ChannelsV3ApiSpecs._Error>> | RequestSuccessResponse<200, Required<{
        data?: ChannelsV3ApiSpecs.Listing;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    putCheckoutUrl(channelId: ChannelsV3ApiSpecs.PutCheckoutUrlData['path']['channel_id'], requestBody: ChannelsV3ApiSpecs.PutCheckoutUrlData['body']): Promise<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.Site>> | RequestErrorResponse<422, Required<{
        status?: number;
        title?: string;
        type?: string;
        errors?: {
            [key: string]: unknown;
        };
    }>>>;
    updateCheckoutUrl(...args: Parameters<ChannelsV3Api['putCheckoutUrl']>): Promise<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.Site>> | RequestErrorResponse<422, Required<{
        status?: number;
        title?: string;
        type?: string;
        errors?: {
            [key: string]: unknown;
        };
    }>>>;
    deleteCheckoutUrl(channelId: ChannelsV3ApiSpecs.DeleteCheckoutUrlData['path']['channel_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: {
            [key: string]: unknown;
        };
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    getChannelSite(channelId: ChannelsV3ApiSpecs.GetChannelSiteData['path']['channel_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: ChannelsV3ApiSpecs.Site;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    postChannelSite(channelId: ChannelsV3ApiSpecs.PostChannelSiteData['path']['channel_id'], requestBody: ChannelsV3ApiSpecs.PostChannelSiteData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: ChannelsV3ApiSpecs.Site;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    createChannelSite(...args: Parameters<ChannelsV3Api['postChannelSite']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: ChannelsV3ApiSpecs.Site;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    putChannelSite(channelId: ChannelsV3ApiSpecs.PutChannelSiteData['path']['channel_id'], requestBody: ChannelsV3ApiSpecs.PutChannelSiteData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: ChannelsV3ApiSpecs.Site;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    updateChannelSite(...args: Parameters<ChannelsV3Api['putChannelSite']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: ChannelsV3ApiSpecs.Site;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    deleteChannelSite(channelId: ChannelsV3ApiSpecs.DeleteChannelSiteData['path']['channel_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        [key: string]: unknown;
    }>>>;
    getChannelMenus(channelId: ChannelsV3ApiSpecs.GetChannelMenusData['path']['channel_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: {
            bigcommerce_protected_app_sections?: ChannelsV3ApiSpecs.BigCommerceProtectedAppSections;
            custom_app_sections?: ChannelsV3ApiSpecs.CustomAppSections;
        };
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    postChannelMenus(channelId: ChannelsV3ApiSpecs.PostChannelMenusData['path']['channel_id'], requestBody: ChannelsV3ApiSpecs.PostChannelMenusData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: {
            bigcommerce_protected_app_sections?: ChannelsV3ApiSpecs.BigCommerceProtectedAppSections;
            custom_app_sections?: ChannelsV3ApiSpecs.CustomAppSections;
        };
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    createChannelMenus(...args: Parameters<ChannelsV3Api['postChannelMenus']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: {
            bigcommerce_protected_app_sections?: ChannelsV3ApiSpecs.BigCommerceProtectedAppSections;
            custom_app_sections?: ChannelsV3ApiSpecs.CustomAppSections;
        };
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    deleteChannelMenus(channelId: ChannelsV3ApiSpecs.DeleteChannelMenusData['path']['channel_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: number;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    getChannelsChannelIdMetafields(channelId: ChannelsV3ApiSpecs.GetChannelsChannelIdMetafieldsData['path']['channel_id'], query?: ChannelsV3ApiSpecs.GetChannelsChannelIdMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        id?: number;
        permission_set?: "app_only" | "read" | "write" | "read_and_sf_access" | "write_and_sf_access";
        namespace?: string;
        key?: string;
        value?: string;
        description?: string;
        resource_type?: "category" | "brand" | "product" | "variant";
        resource_id?: number;
        date_created?: string;
        date_modified?: string;
    }>>>;
    getChannelMetafields(...args: Parameters<ChannelsV3Api['getChannelsChannelIdMetafields']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        id?: number;
        permission_set?: "app_only" | "read" | "write" | "read_and_sf_access" | "write_and_sf_access";
        namespace?: string;
        key?: string;
        value?: string;
        description?: string;
        resource_type?: "category" | "brand" | "product" | "variant";
        resource_id?: number;
        date_created?: string;
        date_modified?: string;
    }>>>;
    postChannelsChannelIdMetafields(channelId: ChannelsV3ApiSpecs.PostChannelsChannelIdMetafieldsData['path']['channel_id'], requestBody: ChannelsV3ApiSpecs.PostChannelsChannelIdMetafieldsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        id?: number;
        permission_set?: "app_only" | "read" | "write" | "read_and_sf_access" | "write_and_sf_access";
        namespace?: string;
        key?: string;
        value?: string;
        description?: string;
        resource_type?: "category" | "brand" | "product" | "variant";
        resource_id?: number;
        date_created?: string;
        date_modified?: string;
    }>>>;
    createChannelMetafield(...args: Parameters<ChannelsV3Api['postChannelsChannelIdMetafields']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        id?: number;
        permission_set?: "app_only" | "read" | "write" | "read_and_sf_access" | "write_and_sf_access";
        namespace?: string;
        key?: string;
        value?: string;
        description?: string;
        resource_type?: "category" | "brand" | "product" | "variant";
        resource_id?: number;
        date_created?: string;
        date_modified?: string;
    }>>>;
    getChannelsChannelIdMetafieldsMetafieldId(channelId: ChannelsV3ApiSpecs.GetChannelsChannelIdMetafieldsMetafieldIdData['path']['channel_id'], metafieldId: ChannelsV3ApiSpecs.GetChannelsChannelIdMetafieldsMetafieldIdData['path']['metafield_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        id?: number;
        permission_set?: "app_only" | "read" | "write" | "read_and_sf_access" | "write_and_sf_access";
        namespace?: string;
        key?: string;
        value?: string;
        description?: string;
        resource_type?: "category" | "brand" | "product" | "variant";
        resource_id?: number;
        date_created?: string;
        date_modified?: string;
    }>>>;
    getChannelMetafield(...args: Parameters<ChannelsV3Api['getChannelsChannelIdMetafieldsMetafieldId']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        id?: number;
        permission_set?: "app_only" | "read" | "write" | "read_and_sf_access" | "write_and_sf_access";
        namespace?: string;
        key?: string;
        value?: string;
        description?: string;
        resource_type?: "category" | "brand" | "product" | "variant";
        resource_id?: number;
        date_created?: string;
        date_modified?: string;
    }>>>;
    putChannelsChannelIdMetafieldsMetafieldId(channelId: ChannelsV3ApiSpecs.PutChannelsChannelIdMetafieldsMetafieldIdData['path']['channel_id'], metafieldId: ChannelsV3ApiSpecs.PutChannelsChannelIdMetafieldsMetafieldIdData['path']['metafield_id'], requestBody: ChannelsV3ApiSpecs.PutChannelsChannelIdMetafieldsMetafieldIdData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        id?: number;
        permission_set?: "app_only" | "read" | "write" | "read_and_sf_access" | "write_and_sf_access";
        namespace?: string;
        key?: string;
        value?: string;
        description?: string;
        resource_type?: "category" | "brand" | "product" | "variant";
        resource_id?: number;
        date_created?: string;
        date_modified?: string;
    }>>>;
    updateChannelMetafield(...args: Parameters<ChannelsV3Api['putChannelsChannelIdMetafieldsMetafieldId']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        id?: number;
        permission_set?: "app_only" | "read" | "write" | "read_and_sf_access" | "write_and_sf_access";
        namespace?: string;
        key?: string;
        value?: string;
        description?: string;
        resource_type?: "category" | "brand" | "product" | "variant";
        resource_id?: number;
        date_created?: string;
        date_modified?: string;
    }>>>;
    deleteChannelsChannelIdMetafieldsMetafieldId(channelId: ChannelsV3ApiSpecs.DeleteChannelsChannelIdMetafieldsMetafieldIdData['path']['channel_id'], metafieldId: ChannelsV3ApiSpecs.DeleteChannelsChannelIdMetafieldsMetafieldIdData['path']['metafield_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteChannelMetafield(...args: Parameters<ChannelsV3Api['deleteChannelsChannelIdMetafieldsMetafieldId']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
}
