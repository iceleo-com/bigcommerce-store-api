export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2/stores/{store_hash}/v2' | (string & {});
};
export type CurrencyFull = {
    is_default?: boolean;
    country_iso2?: string | null;
    default_for_country_codes?: Array<string>;
    currency_code?: string;
    currency_exchange_rate?: string;
    auto_update?: boolean;
    token_location?: string;
    token?: string;
    decimal_token?: string;
    thousands_token?: string;
    decimal_places?: number;
    name?: string;
    enabled?: boolean;
    is_transactional?: boolean;
    use_default_name?: boolean;
    id?: number;
    last_updated?: string;
};
export type CurrencyPut = {
    is_default?: boolean;
    country_iso2?: string;
    currency_exchange_rate?: string;
    auto_update?: boolean;
    token_location?: string;
    token?: string;
    decimal_token?: string;
    thousands_token?: string;
    decimal_places?: number;
    name?: string;
    enabled?: boolean;
    is_transactional?: boolean;
};
export type CurrencyPost = {
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
export type DeleteCurrencyData = {
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
export type DeleteCurrencyResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteCurrencyResponse = DeleteCurrencyResponses[keyof DeleteCurrencyResponses];
export type GetCurrencyData = {
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
export type GetCurrencyResponses = {
    200: CurrencyFull;
};
export type GetCurrencyResponse = GetCurrencyResponses[keyof GetCurrencyResponses];
export type UpdateCurrencyData = {
    body?: CurrencyPut;
    headers: {
        Accept: string;
    };
    path: {
        id: string;
    };
    query?: never;
    url: '/currencies/{id}';
};
export type UpdateCurrencyResponses = {
    200: CurrencyFull;
};
export type UpdateCurrencyResponse = UpdateCurrencyResponses[keyof UpdateCurrencyResponses];
export type DeleteCurrenciesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/currencies';
};
export type DeleteCurrenciesResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteCurrenciesResponse = DeleteCurrenciesResponses[keyof DeleteCurrenciesResponses];
export type GetCurrenciesData = {
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
export type GetCurrenciesResponses = {
    200: Array<CurrencyFull>;
};
export type GetCurrenciesResponse = GetCurrenciesResponses[keyof GetCurrenciesResponses];
export type CreateCurrencyData = {
    body?: CurrencyPost;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/currencies';
};
export type CreateCurrencyResponses = {
    200: CurrencyFull;
};
export type CreateCurrencyResponse = CreateCurrencyResponses[keyof CreateCurrencyResponses];
