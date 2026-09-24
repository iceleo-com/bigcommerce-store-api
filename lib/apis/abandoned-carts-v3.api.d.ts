import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as AbandonedCartsV3ApiSpecs from '../generated/abandoned-carts-v3';
export * as AbandonedCartsV3ApiSpecs from '../generated/abandoned-carts-v3';
export declare class AbandonedCartsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getGlobalAbandonedCartSettings(): Promise<RequestSuccessResponse<200, Required<AbandonedCartsV3ApiSpecs.GlobalAbandonedCartSettingsResponse>> | RequestErrorResponse<401, Required<AbandonedCartsV3ApiSpecs.ErrorResponse>>>;
    updateGlobalAbandonedCartSettings(requestBody: AbandonedCartsV3ApiSpecs.UpdateGlobalAbandonedCartSettingsData['body']): Promise<RequestSuccessResponse<200, Required<AbandonedCartsV3ApiSpecs.GlobalAbandonedCartSettingsResponse>> | RequestErrorResponse<401, Required<AbandonedCartsV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<422, Required<AbandonedCartsV3ApiSpecs.ErrorResponse>>>;
    getChannelAbandonedCartSettings(channelId: AbandonedCartsV3ApiSpecs.GetChannelAbandonedCartSettingsData['path']['channel_id']): Promise<RequestErrorResponse<401, Required<AbandonedCartsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<AbandonedCartsV3ApiSpecs.ChannelAbandonedCartSettingsResponse>>>;
    updateChannelAbandonedCartSettings(channelId: AbandonedCartsV3ApiSpecs.UpdateChannelAbandonedCartSettingsData['path']['channel_id'], requestBody: AbandonedCartsV3ApiSpecs.UpdateChannelAbandonedCartSettingsData['body']): Promise<RequestErrorResponse<401, Required<AbandonedCartsV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<422, Required<AbandonedCartsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<AbandonedCartsV3ApiSpecs.ChannelAbandonedCartSettingsResponse>>>;
    getAbandonedCarts(token: AbandonedCartsV3ApiSpecs.GetAbandonedCartsData['path']['token']): Promise<RequestSuccessResponse<200, Required<{
        data?: AbandonedCartsV3ApiSpecs.AbandonedCartInfoFull;
        meta?: AbandonedCartsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<400, Required<AbandonedCartsV3ApiSpecs.ErrorFull>> | RequestErrorResponse<404, Required<AbandonedCartsV3ApiSpecs.ErrorFull>> | RequestErrorResponse<422, Required<AbandonedCartsV3ApiSpecs.ErrorDetailedFull>> | RequestErrorResponse<502, Required<AbandonedCartsV3ApiSpecs.ErrorFull>> | RequestErrorResponse<503, Required<AbandonedCartsV3ApiSpecs.ErrorFull>> | RequestErrorResponse<504, Required<AbandonedCartsV3ApiSpecs.ErrorDetailedFull>>>;
}
