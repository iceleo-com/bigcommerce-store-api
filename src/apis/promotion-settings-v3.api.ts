import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PromotionSettingsV3ApiSpecs from '../generated/promotion-settings-v3';
export * as PromotionSettingsV3ApiSpecs from '../generated/promotion-settings-v3';

export class PromotionSettingsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Global Promotion Settings
     *
     * Returns global promotion settings.
     */
    getGlobalPromotionSettings(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<PromotionSettingsV3ApiSpecs.GetGlobalPromotionSettingsResponses[200]>>,RequestErrorResponse<400, Required<PromotionSettingsV3ApiSpecs.GetGlobalPromotionSettingsErrors[400]>>>({
            path: 'v3/promotions/settings',
        });
    }

    /**
     * Update Global Promotion Settings
     *
     * - Updates global promotion settings.
     - Note: *promotions_apply_on_products_with_custom_product_price*, *number_of_coupons_allowed_at_checkout* and *promotions_triggered_by_products_with_zero_product_price* can only be modified by enterprise accounts.
     */
    updateGlobalPromotionSettings(
        requestBody: PromotionSettingsV3ApiSpecs.UpdateGlobalPromotionSettingsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<PromotionSettingsV3ApiSpecs.UpdateGlobalPromotionSettingsResponses[200]>>,(RequestErrorResponse<400, Required<PromotionSettingsV3ApiSpecs.UpdateGlobalPromotionSettingsErrors[400]>> | RequestErrorResponse<422, Required<PromotionSettingsV3ApiSpecs.UpdateGlobalPromotionSettingsErrors[422]>>)>({
            path: 'v3/promotions/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
