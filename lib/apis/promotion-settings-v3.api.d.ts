import RequestService from '../helpers/request/request-service';
import * as PromotionSettingsV3ApiSpecs from '../generated/promotion-settings-v3';
export * as PromotionSettingsV3ApiSpecs from '../generated/promotion-settings-v3';
export declare class PromotionSettingsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getGlobalPromotionSettings(): Promise<import("../helpers/request/request-service.types").RequestResponse<PromotionSettingsV3ApiSpecs.GlobalPromotionSettings, PromotionSettingsV3ApiSpecs.ErrorResponse400>>;
    updateGlobalPromotionSettings(requestBody: PromotionSettingsV3ApiSpecs.UpdateGlobalPromotionSettingsData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<PromotionSettingsV3ApiSpecs.GlobalPromotionSettings, PromotionSettingsV3ApiSpecs.UpdateGlobalPromotionSettingsError>>;
}
