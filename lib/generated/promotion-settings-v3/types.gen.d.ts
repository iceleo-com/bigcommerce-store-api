export type BaseError = {
    status?: number;
    title?: string;
};
export type betaErrorResponse400 = BaseError & {
    error?: {
        message?: string;
    };
};
export type betaErrorResponse403 = BaseError & {
    error?: {
        message?: string;
    };
};
export type betaErrorResponse422 = BaseError & {
    errors?: Array<{
        field?: string;
        message?: string;
    }>;
};
export type ErrorResponse400 = {
    schema?: betaErrorResponse400;
};
export type ErrorResponse403 = {
    schema?: betaErrorResponse403;
};
export type ErrorResponse422 = {
    schema?: betaErrorResponse422;
};
export type GlobalPromotionSettings = {
    promotions_apply_on_products_with_custom_product_price: boolean;
    promotions_triggered_by_products_with_zero_product_price: boolean;
    number_of_coupons_allowed_at_checkout: number;
    promotions_applied_on_original_product_price: boolean;
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type GetGlobalPromotionSettingsData = {
    headers: {
        Accept: string;
    };
};
export type GetGlobalPromotionSettingsResponse = (GlobalPromotionSettings);
export type GetGlobalPromotionSettingsError = (ErrorResponse400);
export type UpdateGlobalPromotionSettingsData = {
    body: GlobalPromotionSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateGlobalPromotionSettingsResponse = ((GlobalPromotionSettings));
export type UpdateGlobalPromotionSettingsError = (ErrorResponse400 | ErrorResponse422);
