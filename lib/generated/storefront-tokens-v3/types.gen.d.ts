export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type StorefrontApiTokenGetParametersSort = 'issued_at' | 'expires_at';
export type StorefrontApiTokenGetParametersDirection = 'asc' | 'desc';
export type IssuedTokenType = 'simple' | 'private' | 'customer_impersonation';
export type IssuedTokenScopesItems = 'Unauthenticated' | 'Customer' | 'B2B';
export type IssuedTokenPrincipal = {
    id?: string;
    type?: string;
};
export type IssuedToken = {
    jti: string;
    type: IssuedTokenType;
    name?: string;
    channel_ids: Array<number>;
    allowed_cors_origins: Array<string>;
    scopes: Array<IssuedTokenScopesItems>;
    is_revoked: boolean;
    is_expired: boolean;
    principal?: IssuedTokenPrincipal;
    issued_at?: number;
    expires_at?: number;
    revoked_at?: number;
};
export type MetaPaginationObjectPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
};
export type MetaPaginationObject = {
    pagination?: MetaPaginationObjectPagination;
};
export type IssuedTokensResponse = {
    data?: Array<IssuedToken>;
    meta?: MetaPaginationObject;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    errors?: DetailedErrors;
};
export type TokenBase = {
    token?: string;
};
export type TokenFullMeta = {
    [key: string]: unknown;
};
export type TokenFull = {
    data?: TokenBase;
    meta?: TokenFullMeta;
};
export type ApiTokenRevokeTokenResponse200 = {
    [key: string]: unknown;
};
export type StorefrontApiTokenCustomerImpersonationGetParametersSort = 'issued_at' | 'expires_at';
export type StorefrontApiTokenCustomerImpersonationGetParametersDirection = 'asc' | 'desc';
export type TokenPostImpersonation = {
    channel_ids?: Array<number>;
    channel_id?: number;
    expires_at: number;
    name?: string;
};
export type StorefrontApiTokenPrivateGetParametersSort = 'issued_at' | 'expires_at';
export type StorefrontApiTokenPrivateGetParametersDirection = 'asc' | 'desc';
export type TokenPostPrivateScopesItems = 'Unauthenticated' | 'Customer' | 'B2B';
export type TokenPostPrivate = {
    expires_at: number;
    name?: string;
    channel_ids?: Array<number>;
    channel_id?: number;
    scopes: Array<TokenPostPrivateScopesItems>;
};
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
    422: ErrorResponse;
};
export type RevokeTokenError = RevokeTokenErrors[keyof RevokeTokenErrors];
export type RevokeTokenResponses = {
    200: ApiTokenRevokeTokenResponse200;
};
export type RevokeTokenResponse = RevokeTokenResponses[keyof RevokeTokenResponses];
export type ListTokensData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        sort?: StorefrontApiTokenGetParametersSort;
        direction?: StorefrontApiTokenGetParametersDirection;
    };
    url: '/storefront/api-token';
};
export type ListTokensErrors = {
    422: ErrorResponse;
};
export type ListTokensError = ListTokensErrors[keyof ListTokensErrors];
export type ListTokensResponses = {
    200: IssuedTokensResponse;
};
export type ListTokensResponse = ListTokensResponses[keyof ListTokensResponses];
export type CreateTokenData = {
    body?: {
        allowed_cors_origins?: Array<string>;
        expires_at: number;
        name?: string;
        channel_ids?: Array<number>;
        channel_id?: number;
    };
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/storefront/api-token';
};
export type CreateTokenResponses = {
    200: TokenFull;
};
export type CreateTokenResponse = CreateTokenResponses[keyof CreateTokenResponses];
export type RevokeTokenByJtiData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        jti: string;
    };
    query?: never;
    url: '/storefront/api-token/{jti}';
};
export type RevokeTokenByJtiErrors = {
    400: ErrorResponse;
    404: ErrorResponse;
    422: ErrorResponse;
};
export type RevokeTokenByJtiError = RevokeTokenByJtiErrors[keyof RevokeTokenByJtiErrors];
export type RevokeTokenByJtiResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type RevokeTokenByJtiResponse = RevokeTokenByJtiResponses[keyof RevokeTokenByJtiResponses];
export type RevokeAllTokensData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/storefront/api-token/revoke-all';
};
export type RevokeAllTokensResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type RevokeAllTokensResponse = RevokeAllTokensResponses[keyof RevokeAllTokensResponses];
export type ListCustomerImpersonationTokensData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        sort?: StorefrontApiTokenCustomerImpersonationGetParametersSort;
        direction?: StorefrontApiTokenCustomerImpersonationGetParametersDirection;
    };
    url: '/storefront/api-token-customer-impersonation';
};
export type ListCustomerImpersonationTokensErrors = {
    422: ErrorResponse;
};
export type ListCustomerImpersonationTokensError = ListCustomerImpersonationTokensErrors[keyof ListCustomerImpersonationTokensErrors];
export type ListCustomerImpersonationTokensResponses = {
    200: IssuedTokensResponse;
};
export type ListCustomerImpersonationTokensResponse = ListCustomerImpersonationTokensResponses[keyof ListCustomerImpersonationTokensResponses];
export type CreateTokenWithCustomerImpersonationData = {
    body?: TokenPostImpersonation;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/storefront/api-token-customer-impersonation';
};
export type CreateTokenWithCustomerImpersonationResponses = {
    200: TokenFull;
};
export type CreateTokenWithCustomerImpersonationResponse = CreateTokenWithCustomerImpersonationResponses[keyof CreateTokenWithCustomerImpersonationResponses];
export type RevokeCustomerImpersonationTokenByJtiData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        jti: string;
    };
    query?: never;
    url: '/storefront/api-token-customer-impersonation/{jti}';
};
export type RevokeCustomerImpersonationTokenByJtiErrors = {
    400: ErrorResponse;
    404: ErrorResponse;
    422: ErrorResponse;
};
export type RevokeCustomerImpersonationTokenByJtiError = RevokeCustomerImpersonationTokenByJtiErrors[keyof RevokeCustomerImpersonationTokenByJtiErrors];
export type RevokeCustomerImpersonationTokenByJtiResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type RevokeCustomerImpersonationTokenByJtiResponse = RevokeCustomerImpersonationTokenByJtiResponses[keyof RevokeCustomerImpersonationTokenByJtiResponses];
export type RevokeAllCustomerImpersonationTokensData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/storefront/api-token-customer-impersonation/revoke-all';
};
export type RevokeAllCustomerImpersonationTokensResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type RevokeAllCustomerImpersonationTokensResponse = RevokeAllCustomerImpersonationTokensResponses[keyof RevokeAllCustomerImpersonationTokensResponses];
export type ListPrivateTokensData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        sort?: StorefrontApiTokenPrivateGetParametersSort;
        direction?: StorefrontApiTokenPrivateGetParametersDirection;
    };
    url: '/storefront/api-token-private';
};
export type ListPrivateTokensErrors = {
    422: ErrorResponse;
};
export type ListPrivateTokensError = ListPrivateTokensErrors[keyof ListPrivateTokensErrors];
export type ListPrivateTokensResponses = {
    200: IssuedTokensResponse;
};
export type ListPrivateTokensResponse = ListPrivateTokensResponses[keyof ListPrivateTokensResponses];
export type CreatePrivateTokenData = {
    body?: TokenPostPrivate;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/storefront/api-token-private';
};
export type CreatePrivateTokenResponses = {
    200: TokenFull;
};
export type CreatePrivateTokenResponse = CreatePrivateTokenResponses[keyof CreatePrivateTokenResponses];
export type RevokePrivateTokenByJtiData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        jti: string;
    };
    query?: never;
    url: '/storefront/api-token-private/{jti}';
};
export type RevokePrivateTokenByJtiErrors = {
    400: ErrorResponse;
    404: ErrorResponse;
    422: ErrorResponse;
};
export type RevokePrivateTokenByJtiError = RevokePrivateTokenByJtiErrors[keyof RevokePrivateTokenByJtiErrors];
export type RevokePrivateTokenByJtiResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type RevokePrivateTokenByJtiResponse = RevokePrivateTokenByJtiResponses[keyof RevokePrivateTokenByJtiResponses];
export type RevokeAllPrivateTokensData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/storefront/api-token-private/revoke-all';
};
export type RevokeAllPrivateTokensResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type RevokeAllPrivateTokensResponse = RevokeAllPrivateTokensResponses[keyof RevokeAllPrivateTokensResponses];
