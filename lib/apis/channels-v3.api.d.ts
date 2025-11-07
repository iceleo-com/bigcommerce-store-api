import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ChannelsV3ApiSpecs from '../generated/channels-v3';
export * as ChannelsV3ApiSpecs from '../generated/channels-v3';
export declare class ChannelsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getChannels(query?: ChannelsV3ApiSpecs.GetChannelsData['query']): Promise<RequestSuccessResponse<200, Required<{
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
    getAllCurrencyAssignments(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
    getChannelListings(channelId: ChannelsV3ApiSpecs.GetChannelListingsData['path']['channel_id'], query?: ChannelsV3ApiSpecs.GetChannelListingsData['query']): Promise<RequestErrorResponse<422, Required<ChannelsV3ApiSpecs._Error>> | RequestSuccessResponse<200, Required<{
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
    updateCheckoutUrl(channelId: ChannelsV3ApiSpecs.UpdateCheckoutUrlData['path']['channel_id'], requestBody: ChannelsV3ApiSpecs.UpdateCheckoutUrlData['body']): Promise<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.Site>> | RequestErrorResponse<422, Required<{
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
    createChannelSite(channelId: ChannelsV3ApiSpecs.CreateChannelSiteData['path']['channel_id'], requestBody: ChannelsV3ApiSpecs.CreateChannelSiteData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: ChannelsV3ApiSpecs.Site;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    updateChannelSite(channelId: ChannelsV3ApiSpecs.UpdateChannelSiteData['path']['channel_id'], requestBody: ChannelsV3ApiSpecs.UpdateChannelSiteData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
    createChannelMenus(channelId: ChannelsV3ApiSpecs.CreateChannelMenusData['path']['channel_id'], requestBody: ChannelsV3ApiSpecs.CreateChannelMenusData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            bigcommerce_protected_app_sections?: ChannelsV3ApiSpecs.BigCommerceProtectedAppSections;
            custom_app_sections?: ChannelsV3ApiSpecs.CustomAppSections;
        };
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>> | RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.ErrorResponse>>>;
    deleteChannelMenus(channelId: ChannelsV3ApiSpecs.DeleteChannelMenusData['path']['channel_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: number;
        meta?: ChannelsV3ApiSpecs.EmptyMeta;
    }>>>;
    getChannelMetafields(channelId: ChannelsV3ApiSpecs.GetChannelMetafieldsData['path']['channel_id'], query?: ChannelsV3ApiSpecs.GetChannelMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
    createChannelMetafield(channelId: ChannelsV3ApiSpecs.CreateChannelMetafieldData['path']['channel_id'], requestBody: ChannelsV3ApiSpecs.CreateChannelMetafieldData['body']): Promise<RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
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
    }>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<409, Required<ChannelsV3ApiSpecs.ErrorResponse>>>;
    getChannelMetafield(channelId: ChannelsV3ApiSpecs.GetChannelMetafieldData['path']['channel_id'], metafieldId: ChannelsV3ApiSpecs.GetChannelMetafieldData['path']['metafield_id']): Promise<RequestSuccessResponse<200, Required<{
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
    }>> | RequestErrorResponse<404, Required<ChannelsV3ApiSpecs.NotFound>>>;
    updateChannelMetafield(channelId: ChannelsV3ApiSpecs.UpdateChannelMetafieldData['path']['channel_id'], metafieldId: ChannelsV3ApiSpecs.UpdateChannelMetafieldData['path']['metafield_id'], requestBody: ChannelsV3ApiSpecs.UpdateChannelMetafieldData['body']): Promise<RequestErrorResponse<404, Required<ChannelsV3ApiSpecs.NotFound>> | RequestSuccessResponse<200, Required<{
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
    }>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    deleteChannelMetafield(channelId: ChannelsV3ApiSpecs.DeleteChannelMetafieldData['path']['channel_id'], metafieldId: ChannelsV3ApiSpecs.DeleteChannelMetafieldData['path']['metafield_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<ChannelsV3ApiSpecs.NotFound>>>;
    getChannelsMetafields(query?: ChannelsV3ApiSpecs.GetChannelsMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.MetaFieldCollectionResponse>>>;
    createChannelsMetafields(requestBody: ChannelsV3ApiSpecs.CreateChannelsMetafieldsData['body']): Promise<RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.MetaFieldCollectionResponsePostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    updateChannelsMetafields(requestBody: ChannelsV3ApiSpecs.UpdateChannelsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.MetaFieldCollectionResponsePostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>>>;
    deleteChannelsMetafields(requestBody: ChannelsV3ApiSpecs.DeleteChannelsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<ChannelsV3ApiSpecs.MetaFieldCollectionDeleteResponseSuccess>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<ChannelsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessDelete>>>;
}
