export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type TokenPostImpersonation = {
    expires_at: number;
} & Channels & Channel;
export type TokenPostSimple = {
    allowed_cors_origins?: Array<string>;
};
export type TokenFull = {
    data?: TokenBase;
    meta?: {
        [key: string]: unknown;
    };
};
export type TokenBase = {
    token?: string;
};
export type Channel = {
    channel_id?: number;
};
export type Channels = {
    channel_ids?: Array<number>;
};
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
};
export type DetailedErrors = {
    [key: string]: string;
};
export type Accept = string;
export type ContentType = string;
export type RevokeTokenData = {
    body?: never;
    headers: {
        Accept: string;
        'Sf-Api-Token': string;
    };
    path?: never;
    query?: never;
    url: '/storefront/api-token';
};
export type RevokeTokenErrors = {
    401: unknown;
    403: unknown;
    422: unknown;
};
export type RevokeTokenResponses = {
    200: unknown;
};
export type CreateTokenData = {
    body?: TokenPostSimple & TokenPostImpersonation;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/storefront/api-token';
};
export type CreateTokenErrors = {
    401: unknown;
    403: unknown;
    422: unknown;
};
export type CreateTokenResponses = {
    200: TokenFull;
};
export type CreateTokenResponse = CreateTokenResponses[keyof CreateTokenResponses];
export type CreateTokenWithCustomerImpersonationData = {
    body?: TokenPostImpersonation;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/storefront/api-token-customer-impersonation';
};
export type CreateTokenWithCustomerImpersonationErrors = {
    401: unknown;
    403: unknown;
    422: unknown;
};
export type CreateTokenWithCustomerImpersonationResponses = {
    200: TokenFull;
};
export type CreateTokenWithCustomerImpersonationResponse = CreateTokenWithCustomerImpersonationResponses[keyof CreateTokenWithCustomerImpersonationResponses];
