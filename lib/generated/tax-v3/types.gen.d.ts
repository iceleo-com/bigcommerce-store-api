export type ParameterAccept = string;
export type ParameterContentType = string;
export type Parameterprovider_id = string;
export type response_connection = {
    data?: {
        username?: string;
        configured?: boolean;
        target?: {
            country_codes?: Array<(string)>;
            subdivision_codes?: Array<(string)>;
        };
    };
};
export type GetTaxProviderConnectionData = {
    headers: {
        Accept: string;
    };
    path: {
        provider_id: string;
    };
};
export type GetTaxProviderConnectionResponse = (response_connection);
export type GetTaxProviderConnectionError = (unknown);
export type DeleteTaxProviderConnectionData = {
    headers: {
        Accept: string;
    };
    path: {
        provider_id: string;
    };
};
export type DeleteTaxProviderConnectionResponse = (response_connection);
export type DeleteTaxProviderConnectionError = (unknown);
export type UpdateTaxProviderConnectionData = {
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
};
export type UpdateTaxProviderConnectionResponse = (response_connection);
export type UpdateTaxProviderConnectionError = (unknown);
