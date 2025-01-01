export type count_Full = {
    count?: number;
};
export type countriesState_Full = {
    id?: number;
    state?: string;
    state_abbreviation?: string;
    country_id?: number;
};
export type countriesStates_Full = {
    url?: string;
    resource?: string;
};
export type country_Base = {
    country?: string;
    country_iso2?: string;
    country_iso3?: string;
};
export type country_Full = {
    id?: number;
} & country_Base & {
    states?: countriesStates_Full;
};
export type GetCountriesData = {
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        country?: string;
        country_iso2?: string;
        country_iso3?: string;
        limit?: number;
        page?: number;
    };
};
export type GetCountriesResponse = (Array<country_Full>);
export type GetCountriesError = unknown;
export type GetCountryData = {
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
};
export type GetCountryResponse = (country_Full);
export type GetCountryError = unknown;
export type GetCountryStatesData = {
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        country_id: number;
    };
    query?: {
        limit?: number;
        page?: number;
        state?: string;
        state_abbreviation?: string;
    };
};
export type GetCountryStatesResponse = (Array<countriesState_Full>);
export type GetCountryStatesError = unknown;
export type GetCountryStateData = {
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        country_id: number;
        id: number;
    };
};
export type GetCountryStateResponse = (countriesState_Full);
export type GetCountryStateError = unknown;
export type GetCountriesCountResponse = (count_Full);
export type GetCountriesCountError = unknown;
export type GetStatesCountResponse = (count_Full);
export type GetStatesCountError = unknown;
export type GetStatesData = {
    query?: {
        limit?: number;
        page?: number;
    };
};
export type GetStatesResponse = (Array<countriesState_Full>);
export type GetStatesError = unknown;
export type GetCountryStatesCountData = {
    path: {
        country_id: number;
    };
};
export type GetCountryStatesCountResponse = (count_Full);
export type GetCountryStatesCountError = unknown;
