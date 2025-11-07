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
export type GetCustomerLoginData = {
    body?: never;
    path: {
        jwt_token: string;
    };
    query?: never;
    url: '/login/token/{jwt_token}';
};
export type GetCustomerLoginResponses = {
    200: {
        [key: string]: unknown;
    };
};
export type GetCustomerLoginResponse = GetCustomerLoginResponses[keyof GetCustomerLoginResponses];
