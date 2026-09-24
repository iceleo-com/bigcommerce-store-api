const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

describe('Custom Template Associations V3 API', () => {
    test('List custom template associations', async () => {
        const response = await apiClient.v3.customTemplateAssociations.getCustomTemplateAssociations({ limit: 5 });
        const associations = expectSuccess(response);

        expect(Array.isArray(associations)).toBe(true);
        expectPagination(response.meta);

        if (associations.length === 0) {
            return;
        }

        expectShape(associations[0], {
            id: 'number',
            channel_id: 'number',
            entity_type: 'string',
            entity_id: 'number',
            file_name: 'string',
            is_valid: 'boolean',
            date_created: 'string',
            date_modified: 'string',
        });
        expect(['product', 'category', 'brand', 'page']).toContain(associations[0].entity_type);
    });
});
