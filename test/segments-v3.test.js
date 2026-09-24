const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const segmentShape = {
    id: 'string',
    name: 'string',
    description: 'string',
    created_at: 'string',
    updated_at: 'string',
};

const shopperProfileShape = {
    id: 'string',
    customer_id: 'number',
    created_at: 'string',
    updated_at: 'string',
};

describe('Segments V3 API', () => {
    test('List segments, list segment shopper profiles', async () => {
        const response = await apiClient.v3.segments.getPaginatedSegmentsList({ limit: 5 });
        const segments = expectSuccess(response);

        expect(Array.isArray(segments)).toBe(true);
        expectPagination(response.meta);

        if (segments.length === 0) {
            return;
        }

        expectShape(segments[0], segmentShape);

        const profilesResponse = await apiClient.v3.segments.getSegmentProfiles(segments[0].id, { limit: 5 });
        const profiles = expectSuccess(profilesResponse);
        expect(Array.isArray(profiles)).toBe(true);
        expectPagination(profilesResponse.meta);

        if (profiles.length > 0) {
            expectShape(profiles[0], shopperProfileShape);
        }
    });

    test('List shopper profiles, list shopper profile segments', async () => {
        const response = await apiClient.v3.segments.getShopperList({ limit: 5 });
        const profiles = expectSuccess(response);

        expect(Array.isArray(profiles)).toBe(true);
        expectPagination(response.meta);

        if (profiles.length === 0) {
            return;
        }

        expectShape(profiles[0], shopperProfileShape);

        const segmentsResponse = await apiClient.v3.segments.getListShopperProfile(profiles[0].id, { limit: 5 });
        const segments = expectSuccess(segmentsResponse);
        expect(Array.isArray(segments)).toBe(true);
        expectPagination(segmentsResponse.meta);

        if (segments.length > 0) {
            expectShape(segments[0], segmentShape);
        }
    });
});
