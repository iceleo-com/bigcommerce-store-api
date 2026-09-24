const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const instrumentShape = {
    customer_id: 'number',
    token: 'string',
    type: 'string',
    is_default: 'boolean',
};

describe('Payment Access Tokens V3 API', () => {
    // listMethodsForStore needs a scope the test token does not have

    test('List stored instruments', async () => {
        const response = await apiClient.v3.accessTokens.listInstrumentsForStore({ limit: 20 });
        const instruments = expectSuccess(response);

        expect(Array.isArray(instruments)).toBe(true);
        expectPagination(response.meta);

        if (instruments.length === 0) {
            return;
        }

        expectShape(instruments[0], instrumentShape);

        const card = instruments.find((instrument) => instrument.type === 'credit_card');

        if (card) {
            expectShape(card, {
                ...instrumentShape,
                brand: 'string',
                expiry_month: 'number',
                expiry_year: 'number',
                iin: 'string',
                last_4: 'string',
                billing_address: 'object',
            });
            expectShape(card.billing_address, {
                first_name: 'string',
                last_name: 'string',
                address1: 'string',
                city: 'string',
                postal_code: 'string',
                country_code: 'string',
            });
        }

        const paypal = instruments.find((instrument) => instrument.type === 'paypal_account');

        if (paypal) {
            expectShape(paypal, {
                ...instrumentShape,
                email: 'string',
            });
        }
    });
});
