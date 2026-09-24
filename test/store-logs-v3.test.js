const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

describe('Store Logs V3 API', () => {
    test('List store system logs', async () => {
        const response = await apiClient.v3.storeLogs.getStoreSystemLogs({ limit: 5 });
        const logs = expectSuccess(response);

        expect(Array.isArray(logs)).toBe(true);
        expectPagination(response.meta);

        if (logs.length > 0) {
            expectShape(logs[0], {
                id: 'number',
                type: 'string',
                module: 'string',
                severity: 'string',
                summary: 'string',
                message: 'string',
                date_created: 'string',
            });
        }
    });
});
