const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

describe('Pickup Methods V3 API', () => {
    test('List pickup methods', async () => {
        const response = await apiClient.v3.pickupMethods.getPickupMethods({ limit: 5 });
        const methods = expectSuccess(response);

        expect(Array.isArray(methods)).toBe(true);
        expectPagination(response.meta);

        if (methods.length > 0) {
            expectShape(methods[0], {
                id: 'number',
                location_id: 'number',
                display_name: 'string',
                collection_instructions: 'string',
                collection_time_description: 'string',
            });
        }
    });
});
