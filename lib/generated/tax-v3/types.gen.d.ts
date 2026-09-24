export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type ResponseConnection = {
    data?: {
        username?: string;
        configured?: boolean;
    };
};
export type Accept = string;
export type ContentType = string;
export type ProviderId = string;
export type ProviderConnectionDeleteData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        provider_id: string;
    };
    query?: never;
    url: '/tax/providers/{provider_id}/connection';
};
export type ProviderConnectionDeleteErrors = {
    404: unknown;
};
export type ProviderConnectionDeleteResponses = {
    200: ResponseConnection;
};
export type ProviderConnectionDeleteResponse = ProviderConnectionDeleteResponses[keyof ProviderConnectionDeleteResponses];
export type ProviderConnectionGetData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        provider_id: string;
    };
    query?: never;
    url: '/tax/providers/{provider_id}/connection';
};
export type ProviderConnectionGetErrors = {
    404: unknown;
};
export type ProviderConnectionGetResponses = {
    200: ResponseConnection;
};
export type ProviderConnectionGetResponse = ProviderConnectionGetResponses[keyof ProviderConnectionGetResponses];
export type ProviderConnectionPutData = {
    body?: {
        username?: string;
        password?: string;
        profile?: string;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        provider_id: string;
    };
    query?: never;
    url: '/tax/providers/{provider_id}/connection';
};
export type ProviderConnectionPutErrors = {
    404: unknown;
    422: unknown;
};
export type ProviderConnectionPutResponses = {
    200: ResponseConnection;
};
export type ProviderConnectionPutResponse = ProviderConnectionPutResponses[keyof ProviderConnectionPutResponses];
