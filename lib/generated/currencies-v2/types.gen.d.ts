export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2' | (string & {});
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
export type CurrencyBase = {
    is_default?: boolean;
    country_iso2?: string;
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
};
export type CurrencyFull = CurrencyBase & {
    readonly id?: number;
    readonly last_updated?: string;
};
export type CurrencyFullWritable = CurrencyBase;
export type StoreHash = string;
export type CurrencyIdPath = string;
export type PageNumberQuery = number;
export type LimitQuery = number;
export type Accept = string;
export type ContentType = string;
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
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/currencies';
};
export type CreateCurrencyResponses = {
    200: CurrencyFull;
};
export type CreateCurrencyResponse = CreateCurrencyResponses[keyof CreateCurrencyResponses];
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
        'Content-Type': string;
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
