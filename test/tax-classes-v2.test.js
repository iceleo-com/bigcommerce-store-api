const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

const taxClassShape = {
    id: 'string',
    name: 'string',
    date_created: 'string',
    date_modified: 'string',
};

describe('Tax Classes V2 API', () => {
    test('List tax classes, get tax class', async () => {
        const response = await apiClient.v2.taxClasses.getTaxClasses();
        const taxClasses = expectSuccess(response);

        expect(Array.isArray(taxClasses)).toBe(true);

        // tax class `0` (default) returns 204 on the detail endpoint
        const taxClass = taxClasses.find((item) => item.id !== '0');

        if (!taxClass) {
            return;
        }

        expectShape(taxClass, taxClassShape);

        const taxClassResponse = await apiClient.v2.taxClasses.getTaxClass(Number(taxClass.id));
        const detail = expectSuccess(taxClassResponse);
        expectShape(detail, taxClassShape);
        expect(detail.id).toBe(taxClass.id);
    });
});
