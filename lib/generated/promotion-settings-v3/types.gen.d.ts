export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type GlobalPromotionSettings = {
    promotions_apply_on_products_with_custom_product_price: boolean;
    promotions_triggered_by_products_with_zero_product_price: boolean;
    number_of_coupons_allowed_at_checkout: number;
    promotions_applied_on_original_product_price: boolean;
};
export type BetaErrorResponse400Error = {
    message?: string;
};
export type BetaErrorResponse400 = {
    status?: number;
    title?: string;
    error?: BetaErrorResponse400Error;
};
export type ErrorResponse400 = {
    schema?: BetaErrorResponse400;
};
export type BetaErrorResponse422ErrorsItems = {
    field?: string;
    message?: string;
};
export type BetaErrorResponse422 = {
    status?: number;
    title?: string;
    errors?: Array<BetaErrorResponse422ErrorsItems>;
};
export type ErrorResponse422 = {
    schema?: BetaErrorResponse422;
};
export type GetGlobalPromotionSettingsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/promotions/settings';
};
export type GetGlobalPromotionSettingsErrors = {
    400: ErrorResponse400;
};
export type GetGlobalPromotionSettingsError = GetGlobalPromotionSettingsErrors[keyof GetGlobalPromotionSettingsErrors];
export type GetGlobalPromotionSettingsResponses = {
    200: GlobalPromotionSettings;
};
export type GetGlobalPromotionSettingsResponse = GetGlobalPromotionSettingsResponses[keyof GetGlobalPromotionSettingsResponses];
export type UpdateGlobalPromotionSettingsData = {
    body?: GlobalPromotionSettings;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/promotions/settings';
};
export type UpdateGlobalPromotionSettingsErrors = {
    400: ErrorResponse400;
    422: ErrorResponse422;
};
export type UpdateGlobalPromotionSettingsError = UpdateGlobalPromotionSettingsErrors[keyof UpdateGlobalPromotionSettingsErrors];
export type UpdateGlobalPromotionSettingsResponses = {
    200: GlobalPromotionSettings;
};
export type UpdateGlobalPromotionSettingsResponse = UpdateGlobalPromotionSettingsResponses[keyof UpdateGlobalPromotionSettingsResponses];
