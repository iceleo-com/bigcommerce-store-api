export type ClientOptions = {
    baseUrl: 'https://{store_domain}' | (string & {});
};
export type Accept = string;
export type AppClientId = string;
export type GetCurrentCustomerData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        app_client_id: string;
    };
    url: '/customer/current.jwt';
};
export type GetCurrentCustomerResponses = {
    200: string;
};
export type GetCurrentCustomerResponse = GetCurrentCustomerResponses[keyof GetCurrentCustomerResponses];
