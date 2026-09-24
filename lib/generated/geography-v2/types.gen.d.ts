export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2' | (string & {});
};
export type CountriesStatesFull = {
    url?: string;
    resource?: string;
};
export type CountryFull = {
    country?: string;
    country_iso2?: string;
    country_iso3?: string;
    id?: number;
    states?: CountriesStatesFull;
};
export type CountFull = {
    count?: number;
};
export type CountriesStateFull = {
    id?: number;
    state?: string;
    state_abbreviation?: string;
    country_id?: number;
};
export type GetCountriesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        country?: string;
        country_iso2?: string;
        country_iso3?: string;
    };
    url: '/countries';
};
export type GetCountriesResponses = {
    200: Array<CountryFull>;
};
export type GetCountriesResponse = GetCountriesResponses[keyof GetCountriesResponses];
export type GetCountryData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/countries/{id}';
};
export type GetCountryResponses = {
    200: CountryFull;
};
export type GetCountryResponse = GetCountryResponses[keyof GetCountryResponses];
export type GetCountriesCountData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/countries/count';
};
export type GetCountriesCountResponses = {
    200: CountFull;
};
export type GetCountriesCountResponse = GetCountriesCountResponses[keyof GetCountriesCountResponses];
export type GetCountryStatesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        country_id: number;
    };
    query?: {
        state?: string;
        state_abbreviation?: string;
        page?: number;
        limit?: number;
    };
    url: '/countries/{country_id}/states';
};
export type GetCountryStatesResponses = {
    200: Array<CountriesStateFull>;
};
export type GetCountryStatesResponse = GetCountryStatesResponses[keyof GetCountryStatesResponses];
export type GetCountryStateData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        country_id: number;
        id: number;
    };
    query?: never;
    url: '/countries/{country_id}/states/{id}';
};
export type GetCountryStateResponses = {
    200: CountriesStateFull;
};
export type GetCountryStateResponse = GetCountryStateResponses[keyof GetCountryStateResponses];
export type GetStatesCountData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/countries/states/count';
};
export type GetStatesCountResponses = {
    200: CountFull;
};
export type GetStatesCountResponse = GetStatesCountResponses[keyof GetStatesCountResponses];
export type GetStatesData = {
    body?: never;
    path?: never;
    query?: {
        limit?: number;
        page?: number;
    };
    url: '/countries/states';
};
export type GetStatesResponses = {
    200: Array<CountriesStateFull>;
};
export type GetStatesResponse = GetStatesResponses[keyof GetStatesResponses];
export type GetCountryStatesCountData = {
    body?: never;
    path: {
        country_id: number;
    };
    query?: never;
    url: '/countries/{country_id}/states/count';
};
export type GetCountryStatesCountResponses = {
    200: CountFull;
};
export type GetCountryStatesCountResponse = GetCountryStatesCountResponses[keyof GetCountryStatesCountResponses];
