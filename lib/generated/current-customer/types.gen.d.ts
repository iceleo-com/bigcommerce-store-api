export type ClientOptions = {
    baseUrl: 'https://{store_domain}' | (string & {});
};
export type GetCurrentCustomerData = {
    body?: never;
    path?: never;
    query: {
        app_client_id: string;
    };
    url: '/customer/current.jwt';
};
export type GetCurrentCustomerResponses = {
    default: {
        customer?: {
            id?: number;
            email?: string;
            group_id?: string;
        };
        iss?: string;
        sub?: string;
        iat?: number;
        exp?: number;
        version?: number;
        aud?: string;
        application_id?: string;
        store_hash?: string;
        operation?: string;
    };
};
export type GetCurrentCustomerResponse = GetCurrentCustomerResponses[keyof GetCurrentCustomerResponses];
