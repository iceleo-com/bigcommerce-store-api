const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const channelShape = {
    id: 'number',
    name: 'string',
    platform: 'string',
    type: 'string',
    status: 'string',
    external_id: 'string',
    icon_url: 'string',
    is_listable_from_ui: 'boolean',
    is_enabled: 'boolean',
    is_visible: 'boolean',
    date_created: 'string',
    date_modified: 'string',
};

const currencyAssignmentShape = {
    channel_id: 'number',
    enabled_currencies: 'array',
    default_currency: 'string',
};

async function getActiveStorefrontChannel() {
    const response = await apiClient.v3.channels.getChannels({ limit: 50 });
    const channels = expectSuccess(response);

    return channels.find((channel) => channel.type === 'storefront' && channel.status === 'active');
}

describe('Channels V3 API', () => {
    test('List channels, get channel', async () => {
        const response = await apiClient.v3.channels.getChannels({ limit: 50 });
        const channels = expectSuccess(response);

        expect(Array.isArray(channels)).toBe(true);
        expectPagination(response.meta);

        if (channels.length === 0) {
            return;
        }

        expectShape(channels[0], channelShape);

        const channelResponse = await apiClient.v3.channels.getChannel(channels[0].id);
        const channel = expectSuccess(channelResponse);
        expectShape(channel, channelShape);
        expect(channel.id).toBe(channels[0].id);
    });

    test('Get channel with currencies', async () => {
        const storefront = await getActiveStorefrontChannel();

        if (!storefront) {
            return;
        }

        const response = await apiClient.v3.channels.getChannel(storefront.id, { include: 'currencies' });
        const channel = expectSuccess(response);
        expectShape(channel, { ...channelShape, currencies: 'object' });
        expectShape(channel.currencies, currencyAssignmentShape);
        expect(channel.currencies.channel_id).toBe(storefront.id);
    });

    test('List all currency assignments', async () => {
        const response = await apiClient.v3.channels.getAllCurrencyAssignments();
        const assignments = expectSuccess(response);

        expect(Array.isArray(assignments)).toBe(true);

        if (assignments.length > 0) {
            expectShape(assignments[0], currencyAssignmentShape);
        }
    });

    test('List channel metafields (all channels)', async () => {
        const response = await apiClient.v3.channels.getChannelsMetafields({ limit: 5 });
        const metafields = expectSuccess(response);

        expect(Array.isArray(metafields)).toBe(true);
        expectPagination(response.meta);
    });

    test('Get storefront channel sub-resources', async () => {
        const storefront = await getActiveStorefrontChannel();

        if (!storefront) {
            return;
        }

        const channelId = storefront.id;

        const themeResponse = await apiClient.v3.channels.getChannelActiveTheme(channelId);
        expectShape(expectSuccess(themeResponse), {
            active_theme_uuid: 'string',
            active_theme_configuration_uuid: 'string',
            active_theme_version_uuid: 'string',
            saved_theme_configuration_uuid: 'string',
        });

        const currencyResponse = await apiClient.v3.channels.getSingleChannelCurrencyAssignments(channelId);
        const currencies = expectSuccess(currencyResponse);
        expectShape(currencies, currencyAssignmentShape);
        expect(currencies.channel_id).toBe(channelId);

        const menusResponse = await apiClient.v3.channels.getChannelMenus(channelId);
        expectShape(expectSuccess(menusResponse), {
            bigcommerce_protected_app_sections: 'array',
            custom_app_sections: 'array',
        });

        const siteResponse = await apiClient.v3.channels.getChannelSite(channelId);
        const site = expectSuccess(siteResponse);
        expectShape(site, {
            id: 'number',
            url: 'string',
            channel_id: 'number',
            created_at: 'string',
            updated_at: 'string',
            urls: 'array',
            is_checkout_url_customized: 'boolean',
        });
        expect(site.channel_id).toBe(channelId);
    });

    test('List channel listings', async () => {
        const storefront = await getActiveStorefrontChannel();

        if (!storefront) {
            return;
        }

        const response = await apiClient.v3.channels.getChannelListings(storefront.id, { limit: 5 });
        const listings = expectSuccess(response);

        expect(Array.isArray(listings)).toBe(true);
        expectShape(response.meta, { pagination: 'object' });

        if (listings.length === 0) {
            return;
        }

        expectShape(listings[0], {
            listing_id: 'number',
            channel_id: 'number',
            product_id: 'number',
            state: 'string',
            variants: 'array',
        });

        const listingResponse = await apiClient.v3.channels.getChannelListing(storefront.id, listings[0].listing_id);
        const listing = expectSuccess(listingResponse);
        expect(listing.listing_id).toBe(listings[0].listing_id);
    });

    test('List channel metafields, get metafield', async () => {
        const storefront = await getActiveStorefrontChannel();

        if (!storefront) {
            return;
        }

        const response = await apiClient.v3.channels.getChannelMetafields(storefront.id, { limit: 5 });
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
            resource_id: 'number',
            date_created: 'string',
            date_modified: 'string',
        });

        const metafieldResponse = await apiClient.v3.channels.getChannelMetafield(storefront.id, metafields[0].id);
        expect(expectSuccess(metafieldResponse).id).toBe(metafields[0].id);
    });
});
