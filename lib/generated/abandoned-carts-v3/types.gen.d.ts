export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type AbandonedCartInfoFull = {
    cart_id?: string;
};
export type MetaEmptyFull = {
    [key: string]: unknown;
};
export type AbandonedCartsGetAbandonedCartResponse200 = {
    data?: AbandonedCartInfoFull;
    meta?: MetaEmptyFull;
};
export type ErrorFull = {
    status?: number;
    title?: string;
    type?: string;
};
export type ErrorDetailedFullErrors = {
    [key: string]: unknown;
};
export type ErrorDetailedFull = {
    errors?: ErrorDetailedFullErrors;
};
export type AbandonedCartSettingsMerchantAbandonedCartEmailFrequencyType = 'digest' | 'individual';
export type AbandonedCartSettings = {
    enable_notification?: boolean;
    email_customer_until_cart_is_recovered?: boolean;
    marketing_emails_require_customer_consent?: boolean;
    email_merchant_when_cart_is_converted?: boolean;
    email_merchant_when_cart_is_abandoned?: boolean;
    merchant_email_address?: string;
    merchant_abandoned_cart_email_frequency_type?: AbandonedCartSettingsMerchantAbandonedCartEmailFrequencyType;
    merchant_abandoned_cart_digest_email_frequency?: number;
};
export type GlobalAbandonedCartSettingsResponse = {
    data?: AbandonedCartSettings;
    meta?: MetaEmptyFull;
};
export type ErrorResponseErrors = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: ErrorResponseErrors;
};
export type GlobalAbandonedCartSettingsRequestMerchantAbandonedCartEmailFrequencyType = 'digest' | 'individual';
export type GlobalAbandonedCartSettingsRequest = {
    enable_notification?: boolean;
    email_customer_until_cart_is_recovered: boolean;
    marketing_emails_require_customer_consent: boolean;
    email_merchant_when_cart_is_converted: boolean;
    email_merchant_when_cart_is_abandoned: boolean;
    merchant_email_address: string;
    merchant_abandoned_cart_email_frequency_type: GlobalAbandonedCartSettingsRequestMerchantAbandonedCartEmailFrequencyType;
    merchant_abandoned_cart_digest_email_frequency: number;
};
export type ChannelAbandonedCartSettingsMerchantAbandonedCartEmailFrequencyType = 'digest' | 'individual';
export type ChannelAbandonedCartSettings = {
    enable_notification?: boolean | null;
    email_customer_until_cart_is_recovered?: boolean | null;
    marketing_emails_require_customer_consent?: boolean | null;
    email_merchant_when_cart_is_converted?: boolean | null;
    email_merchant_when_cart_is_abandoned?: boolean | null;
    merchant_email_address?: string | null;
    merchant_abandoned_cart_email_frequency_type?: ChannelAbandonedCartSettingsMerchantAbandonedCartEmailFrequencyType | null;
    merchant_abandoned_cart_digest_email_frequency?: number | null;
};
export type ChannelAbandonedCartSettingsResponse = {
    data?: ChannelAbandonedCartSettings;
    meta?: MetaEmptyFull;
};
export type ChannelAbandonedCartSettingsRequestMerchantAbandonedCartEmailFrequencyType = 'digest' | 'individual';
export type ChannelAbandonedCartSettingsRequest = {
    enable_notification?: boolean | null;
    email_customer_until_cart_is_recovered?: boolean | null;
    marketing_emails_require_customer_consent?: boolean | null;
    email_merchant_when_cart_is_converted?: boolean | null;
    email_merchant_when_cart_is_abandoned?: boolean | null;
    merchant_email_address?: string | null;
    merchant_abandoned_cart_email_frequency_type?: ChannelAbandonedCartSettingsRequestMerchantAbandonedCartEmailFrequencyType | null;
    merchant_abandoned_cart_digest_email_frequency?: number | null;
};
export type GetAbandonedCartData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        token: string;
    };
    query?: never;
    url: '/abandoned-carts/{token}';
};
export type GetAbandonedCartErrors = {
    400: ErrorFull;
    404: ErrorFull;
    422: ErrorDetailedFull;
    502: ErrorFull;
    503: ErrorFull;
    504: ErrorDetailedFull;
};
export type GetAbandonedCartError = GetAbandonedCartErrors[keyof GetAbandonedCartErrors];
export type GetAbandonedCartResponses = {
    200: AbandonedCartsGetAbandonedCartResponse200;
};
export type GetAbandonedCartResponse = GetAbandonedCartResponses[keyof GetAbandonedCartResponses];
export type GetGlobalAbandonedCartSettingsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/abandoned-carts/settings';
};
export type GetGlobalAbandonedCartSettingsErrors = {
    401: ErrorResponse;
};
export type GetGlobalAbandonedCartSettingsError = GetGlobalAbandonedCartSettingsErrors[keyof GetGlobalAbandonedCartSettingsErrors];
export type GetGlobalAbandonedCartSettingsResponses = {
    200: GlobalAbandonedCartSettingsResponse;
};
export type GetGlobalAbandonedCartSettingsResponse = GetGlobalAbandonedCartSettingsResponses[keyof GetGlobalAbandonedCartSettingsResponses];
export type UpdateGlobalAbandonedCartSettingsData = {
    body?: GlobalAbandonedCartSettingsRequest;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/abandoned-carts/settings';
};
export type UpdateGlobalAbandonedCartSettingsErrors = {
    401: ErrorResponse;
    422: ErrorResponse;
};
export type UpdateGlobalAbandonedCartSettingsError = UpdateGlobalAbandonedCartSettingsErrors[keyof UpdateGlobalAbandonedCartSettingsErrors];
export type UpdateGlobalAbandonedCartSettingsResponses = {
    200: GlobalAbandonedCartSettingsResponse;
};
export type UpdateGlobalAbandonedCartSettingsResponse = UpdateGlobalAbandonedCartSettingsResponses[keyof UpdateGlobalAbandonedCartSettingsResponses];
export type GetChannelAbandonedCartSettingsData = {
    body?: never;
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/abandoned-carts/settings/channels/{channel_id}';
};
export type GetChannelAbandonedCartSettingsErrors = {
    401: ErrorResponse;
};
export type GetChannelAbandonedCartSettingsError = GetChannelAbandonedCartSettingsErrors[keyof GetChannelAbandonedCartSettingsErrors];
export type GetChannelAbandonedCartSettingsResponses = {
    200: ChannelAbandonedCartSettingsResponse;
};
export type GetChannelAbandonedCartSettingsResponse = GetChannelAbandonedCartSettingsResponses[keyof GetChannelAbandonedCartSettingsResponses];
export type UpdateChannelAbandonedCartSettingsData = {
    body?: ChannelAbandonedCartSettingsRequest;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/abandoned-carts/settings/channels/{channel_id}';
};
export type UpdateChannelAbandonedCartSettingsErrors = {
    401: ErrorResponse;
    422: ErrorResponse;
};
export type UpdateChannelAbandonedCartSettingsError = UpdateChannelAbandonedCartSettingsErrors[keyof UpdateChannelAbandonedCartSettingsErrors];
export type UpdateChannelAbandonedCartSettingsResponses = {
    200: ChannelAbandonedCartSettingsResponse;
};
export type UpdateChannelAbandonedCartSettingsResponse = UpdateChannelAbandonedCartSettingsResponses[keyof UpdateChannelAbandonedCartSettingsResponses];
