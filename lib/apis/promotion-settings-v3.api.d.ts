import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PromotionSettingsV3ApiSpecs from '../generated/promotion-settings-v3';
export * as PromotionSettingsV3ApiSpecs from '../generated/promotion-settings-v3';
export declare class PromotionSettingsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getGlobalPromotionSettings(): Promise<RequestSuccessResponse<200, Required<PromotionSettingsV3ApiSpecs.GlobalPromotionSettings>> | RequestErrorResponse<400, Required<PromotionSettingsV3ApiSpecs.ErrorResponse400>>>;
    updateGlobalPromotionSettings(requestBody: PromotionSettingsV3ApiSpecs.UpdateGlobalPromotionSettingsData['body']): Promise<RequestSuccessResponse<200, Required<PromotionSettingsV3ApiSpecs.GlobalPromotionSettings>> | RequestErrorResponse<400, Required<PromotionSettingsV3ApiSpecs.ErrorResponse400>> | RequestErrorResponse<422, Required<PromotionSettingsV3ApiSpecs.ErrorResponse422>>>;
}
