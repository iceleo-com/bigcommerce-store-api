// This file is auto-generated by @hey-api/openapi-ts

export type abandonedCartInfo_Full = {
    /**
     * The `cart_id` of the abandoned cart. Can be used to display the abandoned cart to the customer using storefront cart or server-to-server cart APIs
     */
    cart_id?: string;
};

/**
 * Represents all settings related to the abandoned cart functionality of a store
 */
export type AbandonedCartSettings = {
    /**
     * Indicates whether or not abandoned cart notification is on
     */
    enable_notification?: boolean;
    /**
     * Indicates whether or not a customer should continue to receive abandoned cart emails until their cart is recovered
     */
    email_customer_until_cart_is_recovered?: boolean;
    /**
     * Indicates whether or not a customer should receive abandoned cart emails based on their consent. By default customers will not receive emails
     */
    marketing_emails_require_customer_consent?: boolean;
    /**
     * Indicates whether or not a merchant should receive a notification email when a cart is converted into an order
     */
    email_merchant_when_cart_is_converted?: boolean;
    /**
     * Indicates whether or not a merchant should receive a notification email when a cart is abandoned
     */
    email_merchant_when_cart_is_abandoned?: boolean;
    /**
     * The email address for receiving merchant notifications
     */
    merchant_email_address?: string;
    /**
     * Indicates whether to send an email for every abandoned cart, or to send a digest email after X number of abandoned carts
     */
    merchant_abandoned_cart_email_frequency_type?: 'digest' | 'individual';
    /**
     * The number of abandoned carts to accumulate before a digest email is sent to a merchant
     */
    merchant_abandoned_cart_digest_email_frequency?: number;
};

/**
 * Indicates whether to send an email for every abandoned cart, or to send a digest email after X number of abandoned carts
 */
export type merchant_abandoned_cart_email_frequency_type = 'digest' | 'individual';

/**
 * Represents all settings overrides related to the abandoned cart functionality of a store for a channel
 */
export type ChannelAbandonedCartSettings = {
    /**
     * Indicates whether or not abandoned cart notification is on. If it is null, it means there is no override for the specified channel.
     */
    enable_notification?: (boolean) | null;
    /**
     * Indicates whether or not a customer should continue to receive abandoned cart emails until their cart is recovered. If it is null, it means there is no override for the specified channel.
     */
    email_customer_until_cart_is_recovered?: (boolean) | null;
    /**
     * Indicates whether or not a customer should receive abandoned cart emails based on their consent. If it is null, it means there is no override for the specified channel. By default customers will not receive emails.
     */
    marketing_emails_require_customer_consent?: (boolean) | null;
    /**
     * Indicates whether or not a merchant should receive a notification email when a cart is converted into an order. If it is null, it means there is no override for the specified channel.
     */
    email_merchant_when_cart_is_converted?: (boolean) | null;
    /**
     * Indicates whether or not a merchant should receive a notification email when a cart is abandoned. If it is null, it means there is no override for the specified channel.
     */
    email_merchant_when_cart_is_abandoned?: (boolean) | null;
    /**
     * The email address for receiving merchant notifications. If it is null, it means there is no override for the specified channel.
     */
    merchant_email_address?: (string) | null;
    /**
     * Indicates whether to send an email for every abandoned cart or to send a digest email after X number of abandoned carts. If it is null, it means there is no override for the specified channel.
     */
    merchant_abandoned_cart_email_frequency_type?: ('digest' | 'individual') | null;
    /**
     * The number of abandoned carts to accumulate before a digest email is sent to a merchant. If it is null, it means there is no override for the specified channel.
     */
    merchant_abandoned_cart_digest_email_frequency?: (number) | null;
};

export type ChannelAbandonedCartSettingsRequest = ChannelAbandonedCartSettings & unknown;

/**
 * The response object of abandoned cart settings overrides for a channel
 */
export type ChannelAbandonedCartSettingsResponse = {
    data?: ChannelAbandonedCartSettings;
    meta?: metaEmpty_Full;
};

export type error_Full = {
    /**
     * The HTTP status code
     *
     */
    status?: number;
    /**
     * The error title describing the particular error
     *
     */
    title?: string;
    type?: string;
};

export type errorDetailed_Full = {
    errors?: {
        [key: string]: (string);
    };
};

/**
 * The response object containing details of an error
 */
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

/**
 * The response object of abandoned cart settings at the global level
 */
export type GlobalAbandonedCartSettingsResponse = {
    data?: AbandonedCartSettings;
    meta?: metaEmpty_Full;
};

/**
 * Response metadata
 */
export type metaEmpty_Full = {
    [key: string]: unknown;
};

/**
 * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
 */
export type ParameterAccept = string;

/**
 * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
 */
export type ParameterContentType = string;

export type GetGlobalAbandonedCartSettingsData = {
    query?: {
        /**
         * How many pages to return
         */
        pagination?: number;
    };
};

export type GetGlobalAbandonedCartSettingsResponse = (GlobalAbandonedCartSettingsResponse);

export type GetGlobalAbandonedCartSettingsError = (ErrorResponse);

export type UpdateGlobalAbandonedCartSettingsData = {
    body: GlobalAbandonedCartSettingsRequest;
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
         */
        'Content-Type': string;
    };
};

export type UpdateGlobalAbandonedCartSettingsResponse = (GlobalAbandonedCartSettingsResponse);

export type UpdateGlobalAbandonedCartSettingsError = (ErrorResponse);

export type GetChannelAbandonedCartSettingsData = {
    path: {
        /**
         * The channel ID of the settings overrides
         */
        channel_id: number;
    };
};

export type GetChannelAbandonedCartSettingsResponse = (ChannelAbandonedCartSettingsResponse);

export type GetChannelAbandonedCartSettingsError = (ErrorResponse);

export type UpdateChannelAbandonedCartSettingsData = {
    body: ChannelAbandonedCartSettingsRequest;
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the request body.
         */
        'Content-Type': string;
    };
    path: {
        /**
         * The channel ID of the settings overrides
         */
        channel_id: number;
    };
};

export type UpdateChannelAbandonedCartSettingsResponse = (ChannelAbandonedCartSettingsResponse);

export type UpdateChannelAbandonedCartSettingsError = (ErrorResponse);

export type GetAbandonedCartsData = {
    headers: {
        /**
         * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of the response body.
         */
        Accept: string;
    };
    path: {
        /**
         * Unique cart `UUID`.
         *
         * Unique cart `UUID` token that is generated for abandoned cart emails.
         */
        token: string;
    };
};

export type GetAbandonedCartsResponse = ({
    data?: abandonedCartInfo_Full;
    meta?: metaEmpty_Full;
});

export type GetAbandonedCartsError = (error_Full | errorDetailed_Full | unknown);