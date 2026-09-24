const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

describe('Payment Methods V2 API', () => {
    test('List payment methods', async () => {
        const response = await apiClient.v2.methods.getAllPaymentMethods();
        const methods = expectSuccess(response);

        expect(Array.isArray(methods)).toBe(true);

        if (methods.length > 0) {
            expectShape(methods[0], {
                code: 'string',
                name: 'string',
                test_mode: 'boolean',
            });
        }
    });
});
