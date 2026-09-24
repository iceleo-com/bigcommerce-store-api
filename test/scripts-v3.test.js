const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

// no scripts in the test store: only the core fields documented by the spec
const scriptShape = {
    uuid: 'string',
    name: 'string',
    kind: 'string',
    location: 'string',
    visibility: 'string',
    enabled: 'boolean',
    channel_id: 'number',
    date_created: 'string',
    date_modified: 'string',
};

describe('Scripts V3 API', () => {
    test('List scripts, get script', async () => {
        const response = await apiClient.v3.scripts.getScripts({ limit: 5 });
        const scripts = expectSuccess(response);

        expect(Array.isArray(scripts)).toBe(true);
        expectPagination(response.meta);

        if (scripts.length === 0) {
            return;
        }

        expectShape(scripts[0], scriptShape);

        const scriptResponse = await apiClient.v3.scripts.getScript(scripts[0].uuid);
        const script = expectSuccess(scriptResponse);
        expectShape(script, scriptShape);
        expect(script.uuid).toBe(scripts[0].uuid);
    });
});
