export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type ResponseConnectionDataTarget = {
    country_codes?: Array<string>;
    subdivision_codes?: Array<string>;
};
export type ResponseConnectionData = {
    username?: string;
    configured?: boolean;
    profile?: string;
    target?: ResponseConnectionDataTarget;
};
export type ResponseConnection = {
    data?: ResponseConnectionData;
};
export type DeleteTaxProviderConnectionData = {
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
export type DeleteTaxProviderConnectionErrors = {
    404: unknown;
};
export type DeleteTaxProviderConnectionResponses = {
    200: ResponseConnection;
};
export type DeleteTaxProviderConnectionResponse = DeleteTaxProviderConnectionResponses[keyof DeleteTaxProviderConnectionResponses];
export type GetTaxProviderConnectionData = {
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
export type GetTaxProviderConnectionErrors = {
    404: unknown;
};
export type GetTaxProviderConnectionResponses = {
    200: ResponseConnection;
};
export type GetTaxProviderConnectionResponse = GetTaxProviderConnectionResponses[keyof GetTaxProviderConnectionResponses];
export type UpdateTaxProviderConnectionData = {
    body?: {
        username?: string;
        password?: string;
        profile?: string;
    };
    headers: {
        Accept: string;
    };
    path: {
        provider_id: string;
    };
    query?: never;
    url: '/tax/providers/{provider_id}/connection';
};
export type UpdateTaxProviderConnectionErrors = {
    404: unknown;
    422: unknown;
};
export type UpdateTaxProviderConnectionResponses = {
    200: ResponseConnection;
};
export type UpdateTaxProviderConnectionResponse = UpdateTaxProviderConnectionResponses[keyof UpdateTaxProviderConnectionResponses];
