export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2' | (string & {});
};
export type CountryFull = {
    id?: number;
} & CountryBase & {
    states?: CountriesStatesFull;
};
export type CountriesStatesFull = {
    url?: string;
    resource?: string;
};
export type CountriesStateFull = {
    id?: number;
    state?: string;
    state_abbreviation?: string;
    country_id?: number;
};
export type CountryBase = {
    country?: string;
    country_iso2?: string;
    country_iso3?: string;
};
export type CountFull = {
    count?: number;
};
export type GetAllCountriesData = {
    body?: never;
    headers: {
        Accept: string;
        'Content-Type': string;
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
export type GetAllCountriesResponses = {
    200: Array<CountryFull>;
};
export type GetAllCountriesResponse = GetAllCountriesResponses[keyof GetAllCountriesResponses];
export type GetACountryData = {
    body?: never;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/countries/{id}';
};
export type GetACountryResponses = {
    200: CountryFull;
};
export type GetACountryResponse = GetACountryResponses[keyof GetACountryResponses];
export type GetAllCountryStatesData = {
    body?: never;
    headers: {
        Accept: string;
        'Content-Type': string;
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
export type GetAllCountryStatesResponses = {
    200: Array<CountriesStateFull>;
};
export type GetAllCountryStatesResponse = GetAllCountryStatesResponses[keyof GetAllCountryStatesResponses];
export type GetAStateData = {
    body?: never;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        country_id: number;
        id: number;
    };
    query?: never;
    url: '/countries/{country_id}/states/{id}';
};
export type GetAStateResponses = {
    200: CountriesStateFull;
};
export type GetAStateResponse = GetAStateResponses[keyof GetAStateResponses];
export type GetCountCountriesData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/countries/count';
};
export type GetCountCountriesResponses = {
    200: CountFull;
};
export type GetCountCountriesResponse = GetCountCountriesResponses[keyof GetCountCountriesResponses];
export type GetCountStatesData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/countries/states/count';
};
export type GetCountStatesResponses = {
    200: CountFull;
};
export type GetCountStatesResponse = GetCountStatesResponses[keyof GetCountStatesResponses];
export type GetAllStatesData = {
    body?: never;
    path?: never;
    query?: {
        limit?: number;
        page?: number;
    };
    url: '/countries/states';
};
export type GetAllStatesResponses = {
    200: Array<CountriesStateFull>;
};
export type GetAllStatesResponse = GetAllStatesResponses[keyof GetAllStatesResponses];
export type GetCountCountryStatesData = {
    body?: never;
    path: {
        country_id: string;
    };
    query?: never;
    url: '/countries/{country_id}/states/count';
};
export type GetCountCountryStatesResponses = {
    200: CountFull;
};
export type GetCountCountryStatesResponse = GetCountCountryStatesResponses[keyof GetCountCountryStatesResponses];
