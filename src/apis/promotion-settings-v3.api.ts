import RequestService from '../helpers/request/request-service';
import * as PromotionSettingsV3ApiSpecs from '../generated/promotion-settings-v3';

export default class PromotionSettingsV3Api {
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
        return this.request.get<PromotionSettingsV3ApiSpecs.GetGlobalPromotionSettingsResponse, PromotionSettingsV3ApiSpecs.GetGlobalPromotionSettingsError>({
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
        return this.request.put<PromotionSettingsV3ApiSpecs.UpdateGlobalPromotionSettingsResponse, PromotionSettingsV3ApiSpecs.UpdateGlobalPromotionSettingsError>({
            path: 'v3/promotions/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
