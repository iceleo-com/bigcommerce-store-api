import RequestService from '../helpers/request/request-service';
import * as AbandonedCartsV3ApiSpecs from '../generated/abandoned-carts-v3';
export default class AbandonedCartsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getGlobalAbandonedCartSettings(query?: AbandonedCartsV3ApiSpecs.GetGlobalAbandonedCartSettingsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<AbandonedCartsV3ApiSpecs.GlobalAbandonedCartSettingsResponse, AbandonedCartsV3ApiSpecs.ErrorResponse>>;
    updateGlobalAbandonedCartSettings(requestBody: AbandonedCartsV3ApiSpecs.UpdateGlobalAbandonedCartSettingsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<AbandonedCartsV3ApiSpecs.GlobalAbandonedCartSettingsResponse, AbandonedCartsV3ApiSpecs.ErrorResponse>>;
    getChannelAbandonedCartSettings(): Promise<import("../helpers/request/request-service.type").RequestResponse<AbandonedCartsV3ApiSpecs.ChannelAbandonedCartSettingsResponse, AbandonedCartsV3ApiSpecs.ErrorResponse>>;
    updateChannelAbandonedCartSettings(requestBody: AbandonedCartsV3ApiSpecs.UpdateChannelAbandonedCartSettingsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<AbandonedCartsV3ApiSpecs.ChannelAbandonedCartSettingsResponse, AbandonedCartsV3ApiSpecs.ErrorResponse>>;
    getAbandonedCarts(token: AbandonedCartsV3ApiSpecs.GetAbandonedCartsData['path']['token']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, unknown>>;
}
