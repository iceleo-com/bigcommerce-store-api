const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

async function getActiveStorefrontChannel() {
    const response = await apiClient.v3.channels.getChannels({ limit: 50 });
    const channels = expectSuccess(response);

    return channels.find((channel) => channel.type === 'storefront' && channel.status === 'active');
}

describe('Page Widgets V3 API', () => {
    test('Get page widgets', async () => {
        const storefront = await getActiveStorefrontChannel();

        if (!storefront) {
            return;
        }

        const response = await apiClient.v3.pageWidgets.getPageWidgets({
            channel_id: storefront.id,
            template_file: 'pages/home',
        });
        const snapshot = expectSuccess(response);

        expectShape(snapshot, { regions: 'array' });

        if (snapshot.regions.length > 0) {
            expectShape(snapshot.regions[0], { name: 'string', children: 'array' });
        }
    });
});
