const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

const currencyShape = {
    id: 'number',
    currency_code: 'string',
    name: 'string',
    enabled: 'boolean',
    is_transactional: 'boolean',
    is_default: 'boolean',
    auto_update: 'boolean',
    currency_exchange_rate: 'string',
    token: 'string',
    token_location: 'string',
    decimal_places: 'number',
    decimal_token: 'string',
    thousands_token: 'string',
    default_for_country_codes: 'array',
    country_iso2: ['string', 'null'],
    last_updated: 'string',
    use_default_name: 'boolean',
};

describe('Currencies V2 API', () => {
    test('List currencies, get currency', async () => {
        const response = await apiClient.v2.currencies.getCurrencies();
        const currencies = expectSuccess(response);

        expect(Array.isArray(currencies)).toBe(true);

        if (currencies.length === 0) {
            return;
        }

        expectShape(currencies[0], currencyShape);
        expect(currencies.filter((currency) => currency.is_default)).toHaveLength(1);

        const currencyResponse = await apiClient.v2.currencies.getCurrency(currencies[0].id);
        const currency = expectSuccess(currencyResponse);
        expectShape(currency, currencyShape);
        expect(currency.id).toBe(currencies[0].id);
    });
});
