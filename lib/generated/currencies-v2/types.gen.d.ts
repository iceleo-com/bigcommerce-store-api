export type currency_Base = {
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
export type currency_Full = currency_Base & {
    readonly id?: number;
    last_updated?: string;
};
export type currency_Post = currency_Base;
export type currency_Put = currency_Base;
export type ParameterAccept = string;
export type ParameterContentType = string;
export type ParameterCurrencyIdPath = string;
export type ParameterLimitQuery = number;
export type ParameterPageNumberQuery = number;
export type ParameterStoreHash = string;
export type GetCurrenciesData = {
    headers: {
        Accept: string;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type GetCurrenciesResponse = (Array<currency_Full>);
export type GetCurrenciesError = unknown;
export type CreateCurrencyData = {
    body?: currency_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateCurrencyResponse = (currency_Full);
export type CreateCurrencyError = unknown;
export type DeleteCurrenciesData = {
    headers: {
        Accept: string;
    };
};
export type DeleteCurrenciesResponse = ({
    [key: string]: unknown;
});
export type DeleteCurrenciesError = unknown;
export type GetCurrencyData = {
    headers: {
        Accept: string;
    };
    path: {
        id: string;
    };
};
export type GetCurrencyResponse = (currency_Full);
export type GetCurrencyError = unknown;
export type UpdateCurrencyData = {
    body?: currency_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: string;
    };
};
export type UpdateCurrencyResponse = (currency_Full);
export type UpdateCurrencyError = unknown;
export type DeleteCurrencyData = {
    headers: {
        Accept: string;
    };
    path: {
        id: string;
    };
};
export type DeleteCurrencyResponse = ({
    [key: string]: unknown;
});
export type DeleteCurrencyError = unknown;
