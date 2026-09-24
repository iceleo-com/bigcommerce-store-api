export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2' | (string & {});
};
export type CurrencyPost = CurrencyBase;
export type CurrencyBase = {
    is_default?: boolean;
    country_iso2?: string;
    currency_code: string;
    currency_exchange_rate: string;
    auto_update?: boolean;
    token_location: string;
    token: string;
    decimal_token: string;
    thousands_token: string;
    decimal_places: number;
    name: string;
    enabled?: boolean;
    is_transactional?: boolean;
};
export type CurrencyPut = CurrencyBase;
export type CurrencyFull = CurrencyBase & {
    readonly id?: number;
    last_updated?: string;
};
export type CurrencyFullWritable = CurrencyBase & {
    last_updated?: string;
};
export type StoreHash = string;
export type Accept = string;
export type ContentType = string;
export type DeleteAllCurrenciesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/currencies';
};
export type DeleteAllCurrenciesResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteAllCurrenciesResponse = DeleteAllCurrenciesResponses[keyof DeleteAllCurrenciesResponses];
export type GetAllCurrenciesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/currencies';
};
export type GetAllCurrenciesResponses = {
    200: Array<CurrencyFull>;
};
export type GetAllCurrenciesResponse = GetAllCurrenciesResponses[keyof GetAllCurrenciesResponses];
export type CreateACurrencyData = {
    body?: CurrencyBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/currencies';
};
export type CreateACurrencyResponses = {
    200: CurrencyFull;
};
export type CreateACurrencyResponse = CreateACurrencyResponses[keyof CreateACurrencyResponses];
export type DeleteACurrencyData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: string;
    };
    query?: never;
    url: '/currencies/{id}';
};
export type DeleteACurrencyResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteACurrencyResponse = DeleteACurrencyResponses[keyof DeleteACurrencyResponses];
export type GetACurrencyData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: string;
    };
    query?: never;
    url: '/currencies/{id}';
};
export type GetACurrencyResponses = {
    200: CurrencyFull;
};
export type GetACurrencyResponse = GetACurrencyResponses[keyof GetACurrencyResponses];
export type UpdateACurrencyData = {
    body?: CurrencyBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: string;
    };
    query?: never;
    url: '/currencies/{id}';
};
export type UpdateACurrencyResponses = {
    200: CurrencyFull;
};
export type UpdateACurrencyResponse = UpdateACurrencyResponses[keyof UpdateACurrencyResponses];
