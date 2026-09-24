const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

describe('Webhooks V3 API', () => {
    test('List webhooks, get webhook', async () => {
        const response = await apiClient.v3.webhooks.getWebhooks({ limit: 5 });
        const webhooks = expectSuccess(response);

        expect(Array.isArray(webhooks)).toBe(true);
        expectPagination(response.meta);

        if (webhooks.length === 0) {
            return;
        }

        const shape = {
            id: 'number',
            client_id: 'string',
            store_hash: 'string',
            scope: 'string',
            destination: 'string',
            is_active: 'boolean',
            created_at: 'number',
            updated_at: 'number',
        };
        expectShape(webhooks[0], shape);

        const webhookResponse = await apiClient.v3.webhooks.getWebhook(webhooks[0].id);
        const webhook = expectSuccess(webhookResponse);
        expectShape(webhook, shape);
        expect(webhook.id).toBe(webhooks[0].id);
    });

    test('Get admin webhook info', async () => {
        const response = await apiClient.v3.webhooks.getHooksAdmin();
        expectShape(expectSuccess(response), {
            emails: 'array',
            hooks_list: 'array',
            blocked_domains: 'array',
        });
    });
});
