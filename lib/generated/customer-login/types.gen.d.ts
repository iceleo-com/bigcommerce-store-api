export type ClientOptions = {
    baseUrl: 'https://{store_domain}' | (string & {});
};
export type LoginTokenGetCustomerLoginResponse200 = {
    [key: string]: unknown;
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
    200: LoginTokenGetCustomerLoginResponse200;
};
export type GetCustomerLoginResponse = GetCustomerLoginResponses[keyof GetCustomerLoginResponses];
