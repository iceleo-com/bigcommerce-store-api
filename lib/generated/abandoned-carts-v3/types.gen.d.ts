export type abandonedCartInfo_Full = {
    cart_id?: string;
};
export type AbandonedCartSettings = {
    enable_notification?: boolean;
    email_customer_until_cart_is_recovered?: boolean;
    marketing_emails_require_customer_consent?: boolean;
    email_merchant_when_cart_is_converted?: boolean;
    email_merchant_when_cart_is_abandoned?: boolean;
    merchant_email_address?: string;
    merchant_abandoned_cart_email_frequency_type?: 'digest' | 'individual';
    merchant_abandoned_cart_digest_email_frequency?: number;
};
export type merchant_abandoned_cart_email_frequency_type = 'digest' | 'individual';
export type ChannelAbandonedCartSettings = {
    enable_notification?: (boolean) | null;
    email_customer_until_cart_is_recovered?: (boolean) | null;
    marketing_emails_require_customer_consent?: (boolean) | null;
    email_merchant_when_cart_is_converted?: (boolean) | null;
    email_merchant_when_cart_is_abandoned?: (boolean) | null;
    merchant_email_address?: (string) | null;
    merchant_abandoned_cart_email_frequency_type?: ('digest' | 'individual') | null;
    merchant_abandoned_cart_digest_email_frequency?: (number) | null;
};
export type ChannelAbandonedCartSettingsRequest = ChannelAbandonedCartSettings & unknown;
export type ChannelAbandonedCartSettingsResponse = {
    data?: ChannelAbandonedCartSettings;
    meta?: metaEmpty_Full;
};
export type error_Full = {
    status?: number;
    title?: string;
    type?: string;
};
export type errorDetailed_Full = {
    errors?: {
        [key: string]: (string);
    };
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: {
        [key: string]: unknown;
    };
};
export type GlobalAbandonedCartSettingsRequest = AbandonedCartSettings & unknown;
export type GlobalAbandonedCartSettingsResponse = {
    data?: AbandonedCartSettings;
    meta?: metaEmpty_Full;
};
export type metaEmpty_Full = {
    [key: string]: unknown;
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type GetGlobalAbandonedCartSettingsData = {
    query?: {
        pagination?: number;
    };
};
export type GetGlobalAbandonedCartSettingsResponse = (GlobalAbandonedCartSettingsResponse);
export type GetGlobalAbandonedCartSettingsError = (ErrorResponse);
export type UpdateGlobalAbandonedCartSettingsData = {
    body: GlobalAbandonedCartSettingsRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateGlobalAbandonedCartSettingsResponse = (GlobalAbandonedCartSettingsResponse);
export type UpdateGlobalAbandonedCartSettingsError = (ErrorResponse);
export type GetChannelAbandonedCartSettingsData = {
    path: {
        channel_id: number;
    };
};
export type GetChannelAbandonedCartSettingsResponse = (ChannelAbandonedCartSettingsResponse);
export type GetChannelAbandonedCartSettingsError = (ErrorResponse);
export type UpdateChannelAbandonedCartSettingsData = {
    body: ChannelAbandonedCartSettingsRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
};
export type UpdateChannelAbandonedCartSettingsResponse = (ChannelAbandonedCartSettingsResponse);
export type UpdateChannelAbandonedCartSettingsError = (ErrorResponse);
export type GetAbandonedCartsData = {
    headers: {
        Accept: string;
    };
    path: {
        token: string;
    };
};
export type GetAbandonedCartsResponse = ({
    data?: abandonedCartInfo_Full;
    meta?: metaEmpty_Full;
});
export type GetAbandonedCartsError = (error_Full | errorDetailed_Full | unknown);
