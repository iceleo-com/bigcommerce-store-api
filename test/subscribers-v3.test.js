const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const subscriberShape = {
    id: 'number',
    email: 'string',
    first_name: 'string',
    last_name: 'string',
    source: 'string',
    order_id: ['number', 'null'],
    date_created: 'string',
    date_modified: 'string',
    channel_id: 'number',
    consents: 'array',
};

describe('Subscribers V3 API', () => {
    test('List subscribers, get subscriber', async () => {
        const response = await apiClient.v3.subscribers.getSubscribers({ limit: 5 });
        const subscribers = expectSuccess(response);

        expect(Array.isArray(subscribers)).toBe(true);
        expectPagination(response.meta);

        if (subscribers.length === 0) {
            return;
        }

        expectShape(subscribers[0], subscriberShape);

        const subscriberResponse = await apiClient.v3.subscribers.getSubscriber(subscribers[0].id);
        const subscriber = expectSuccess(subscriberResponse);
        expectShape(subscriber, subscriberShape);
        expect(subscriber.id).toBe(subscribers[0].id);
    });
});
