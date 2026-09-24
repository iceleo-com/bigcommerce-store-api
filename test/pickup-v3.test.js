const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

describe('Pickup V3 API', () => {
    test('List pickups of an order', async () => {
        const ordersResponse = await apiClient.v2.ordersV2Oas2.getOrders({
            limit: 1,
            sort: 'date_created:desc',
        });

        if (ordersResponse.http_status !== 200 || !Array.isArray(ordersResponse.data) || ordersResponse.data.length === 0) {
            return;
        }

        const orderId = ordersResponse.data[0].id;
        const response = await apiClient.v3.pickup.getPickup({ 'order_id:in': orderId });
        const pickups = expectSuccess(response);

        expect(Array.isArray(pickups)).toBe(true);

        if (pickups.length > 0) {
            expectShape(pickups[0], {
                id: 'number',
                order_id: 'number',
                pickup_method_id: 'number',
                ready_at: 'string',
                created_at: 'string',
                updated_at: 'string',
                pickup_items: 'array',
            });
            expect(pickups[0].order_id).toBe(orderId);
        }
    });
});
