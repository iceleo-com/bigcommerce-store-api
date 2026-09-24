const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

const countryShape = {
    id: 'number',
    country: 'string',
    country_iso2: 'string',
    country_iso3: 'string',
    states: 'object',
};

const stateShape = {
    id: 'number',
    state: 'string',
    state_abbreviation: 'string',
    country_id: 'number',
};

describe('Geography V2 API', () => {
    test('List countries, get country', async () => {
        const response = await apiClient.v2.geography.getCountries({ limit: 5 });
        const countries = expectSuccess(response);

        expect(Array.isArray(countries)).toBe(true);
        expect(countries.length).toBeGreaterThan(0);
        expectShape(countries[0], countryShape);
        expectShape(countries[0].states, { url: 'string', resource: 'string' });

        const countryResponse = await apiClient.v2.geography.getCountry(countries[0].id);
        const country = expectSuccess(countryResponse);
        expectShape(country, countryShape);
        expect(country.id).toBe(countries[0].id);
    });

    test('Count countries and states', async () => {
        const countriesCount = expectSuccess(await apiClient.v2.geography.getCountriesCount());
        expectShape(countriesCount, { count: 'number' });

        const statesCount = expectSuccess(await apiClient.v2.geography.getStatesCount());
        expectShape(statesCount, { count: 'number' });
    });

    test('List states', async () => {
        const response = await apiClient.v2.geography.getStates({ limit: 5 });
        const states = expectSuccess(response);

        expect(Array.isArray(states)).toBe(true);

        if (states.length > 0) {
            expectShape(states[0], stateShape);
        }
    });

    test('List country states, get state, count', async () => {
        // find a country that has states through the states list
        const statesResponse = await apiClient.v2.geography.getStates({ limit: 1 });
        const states = expectSuccess(statesResponse);

        if (states.length === 0) {
            return;
        }

        const countryId = states[0].country_id;

        const response = await apiClient.v2.geography.getCountryStates(countryId, { limit: 5 });
        const countryStates = expectSuccess(response);

        expect(Array.isArray(countryStates)).toBe(true);
        expect(countryStates.length).toBeGreaterThan(0);
        expectShape(countryStates[0], stateShape);
        expect(countryStates[0].country_id).toBe(countryId);

        const stateResponse = await apiClient.v2.geography.getCountryState(countryId, countryStates[0].id);
        const state = expectSuccess(stateResponse);
        expectShape(state, stateShape);
        expect(state.id).toBe(countryStates[0].id);

        const countResponse = await apiClient.v2.geography.getCountryStatesCount(countryId);
        expectShape(expectSuccess(countResponse), { count: 'number' });
    });
});
