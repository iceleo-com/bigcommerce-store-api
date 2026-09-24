const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const metafieldShape = {
    id: 'number',
    key: 'string',
    value: 'string',
    namespace: 'string',
    permission_set: 'string',
    resource_type: 'string',
    resource_id: 'number',
    date_created: 'string',
    date_modified: 'string',
};

describe('Locations V3 API', () => {
    test('List locations and location metafields', async () => {
        const response = await apiClient.v3.locations.getLocations({ limit: 5 });
        const locations = expectSuccess(response);

        expect(Array.isArray(locations)).toBe(true);
        expectPagination(response.meta);

        if (locations.length === 0) {
            return;
        }

        expectShape(locations[0], {
            id: 'number',
            code: 'string',
            label: 'string',
            description: ['string', 'null'],
            managed_by_external_source: 'boolean',
            type_id: 'string',
            enabled: 'boolean',
            operating_hours: ['object', 'null'],
            time_zone: ['string', 'null'],
            created_at: 'string',
            updated_at: 'string',
            address: 'object',
            storefront_visibility: 'boolean',
            special_hours: 'array',
        });
        expectShape(locations[0].address, {
            address1: 'string',
            city: 'string',
            zip: 'string',
            country_code: 'string',
            geo_coordinates: 'object',
        });

        const locationId = locations[0].id;

        const metafieldsResponse = await apiClient.v3.locations.getLocationMetafields(locationId);
        const metafields = expectSuccess(metafieldsResponse);

        expect(Array.isArray(metafields)).toBe(true);
        expectPagination(metafieldsResponse.meta);

        if (metafields.length === 0) {
            return;
        }

        expectShape(metafields[0], metafieldShape);

        const metafieldResponse = await apiClient.v3.locations.getLocationMetafield(locationId, metafields[0].id);
        const metafield = expectSuccess(metafieldResponse);
        expectShape(metafield, metafieldShape);
        expect(metafield.id).toBe(metafields[0].id);
    });

    test('List all location metafields', async () => {
        const response = await apiClient.v3.locations.getLocationsMetafields({ limit: 5 });
        const metafields = expectSuccess(response);

        expect(Array.isArray(metafields)).toBe(true);
        expectPagination(response.meta);
        expectShape(response.meta, { cursor_pagination: ['object', 'undefined'] });

        if (metafields.length === 0) {
            return;
        }

        expectShape(metafields[0], metafieldShape);
    });
});
