export type ClientOptions = {
    baseUrl: 'https://{store_domain}' | (string & {});
};
export type CustomerLoginSso = {
    iss?: string;
    iat?: number;
    jti?: string;
    operation?: string;
    store_hash?: string;
    customer_id?: number;
    redirect_to?: string;
    request_ip?: string;
};
export type GetLoginTokenByJwtTokenData = {
    body?: never;
    path: {
        jwt_token: string;
    };
    query?: never;
    url: '/login/token/{jwt_token}';
};
export type GetLoginTokenByJwtTokenResponses = {
    200: {
        [key: string]: unknown;
    };
};
export type GetLoginTokenByJwtTokenResponse = GetLoginTokenByJwtTokenResponses[keyof GetLoginTokenByJwtTokenResponses];
