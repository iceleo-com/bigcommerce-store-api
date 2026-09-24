const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

describe('Accepted Payment Methods V3 API', () => {
    test('List accepted payment methods of an incomplete order', async () => {
        // only incomplete orders (status 0) accept payments, other orders respond with 409
        const ordersResponse = await apiClient.v2.ordersV2Oas2.getOrders({
            limit: 1,
            status_id: 0,
            sort: 'date_created:desc',
        });

        if (ordersResponse.http_status !== 200 || !Array.isArray(ordersResponse.data) || ordersResponse.data.length === 0) {
            return;
        }

        const response = await apiClient.v3.acceptedMethods.getPaymentMethods({ order_id: ordersResponse.data[0].id });
        const methods = expectSuccess(response);

        expect(Array.isArray(methods)).toBe(true);

        if (methods.length > 0) {
            expectShape(methods[0], {
                id: 'string',
                name: 'string',
                test_mode: 'boolean',
                type: 'string',
                supported_instruments: 'array',
                stored_instruments: 'array',
            });
        }
    });

    test('Require an order or checkout id', async () => {
        const response = await apiClient.v3.acceptedMethods.getPaymentMethods();

        expect(response.status).toBe('error');
        expect(response.http_status).toBe(422);
    });
});
