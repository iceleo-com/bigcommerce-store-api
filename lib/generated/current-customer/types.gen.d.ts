export type ParameterAccept = string;
export type ParameterAppClientId = string;
export type GetCurrentCustomerData = {
    headers: {
        Accept: string;
    };
    query: {
        app_client_id: string;
    };
};
export type GetCurrentCustomerResponse = (string);
export type GetCurrentCustomerError = unknown;
