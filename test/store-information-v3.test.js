const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

describe('Store Information V3 API', () => {
    test('List store metafields, get metafield', async () => {
        const response = await apiClient.v3.storeInformation.getStoreMetafields({ limit: 5 });
        const metafields = expectSuccess(response);

        expect(Array.isArray(metafields)).toBe(true);
        expectPagination(response.meta);

        if (metafields.length === 0) {
            return;
        }

        expectShape(metafields[0], {
            id: 'number',
            key: 'string',
            value: 'string',
            namespace: 'string',
            permission_set: 'string',
            resource_type: 'string',
            date_created: 'string',
            date_modified: 'string',
        });

        const metafieldResponse = await apiClient.v3.storeInformation.getStoreMetafield(metafields[0].id);
        expect(expectSuccess(metafieldResponse).id).toBe(metafields[0].id);
    });
});
