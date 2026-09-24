const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const priceListShape = {
    id: 'number',
    name: 'string',
    date_created: 'string',
    date_modified: 'string',
    active: 'boolean',
};

const recordShape = {
    price_list_id: 'number',
    variant_id: 'number',
    product_id: 'number',
    price: 'number',
    sale_price: ['number', 'null'],
    retail_price: ['number', 'null'],
    map_price: ['number', 'null'],
    calculated_price: 'number',
    date_created: 'string',
    date_modified: 'string',
    currency: 'string',
};

describe('Price Lists V3 API', () => {
    test('List and get price lists and price records', async () => {
        const response = await apiClient.v3.priceLists.getPriceLists({ limit: 5 });
        const priceLists = expectSuccess(response);

        expect(Array.isArray(priceLists)).toBe(true);
        expectPagination(response.meta);
        expectShape(response.meta, { cursor_pagination: ['object', 'undefined'] });

        if (priceLists.length === 0) {
            return;
        }

        expectShape(priceLists[0], priceListShape);

        const priceListId = priceLists[0].id;

        const priceListResponse = await apiClient.v3.priceLists.getPriceList(priceListId);
        const priceList = expectSuccess(priceListResponse);
        expectShape(priceList, priceListShape);
        expect(priceList.id).toBe(priceListId);

        const recordsResponse = await apiClient.v3.priceLists.getPriceListRecords(priceListId, {
            limit: 5,
            include: ['bulk_pricing_tiers', 'sku'],
        });
        const records = expectSuccess(recordsResponse);

        expect(Array.isArray(records)).toBe(true);
        expectPagination(recordsResponse.meta);

        if (records.length === 0) {
            return;
        }

        expectShape(records[0], {
            ...recordShape,
            sku: 'string',
            bulk_pricing_tiers: 'array',
        });
        expect(records[0].price_list_id).toBe(priceListId);

        const { variant_id: variantId, currency } = records[0];

        const variantRecordsResponse = await apiClient.v3.priceLists.getPriceListRecordsByVariantId(priceListId, variantId);
        const variantRecords = expectSuccess(variantRecordsResponse);

        expectPagination(variantRecordsResponse.meta);
        expect(variantRecords.length).toBeGreaterThan(0);
        expectShape(variantRecords[0], recordShape);
        expect(variantRecords[0].variant_id).toBe(variantId);
        // sub-resources are only returned when included
        expect(variantRecords[0].sku).toBeUndefined();

        const recordResponse = await apiClient.v3.priceLists.getPriceListRecord(priceListId, variantId, currency);
        const record = expectSuccess(recordResponse);
        expectShape(record, recordShape);
        expect(record.variant_id).toBe(variantId);
        expect(record.currency).toBe(currency);
    });

    test('List price list assignments', async () => {
        const response = await apiClient.v3.priceLists.getListOfPriceListAssignments({ limit: 5 });
        const assignments = expectSuccess(response);

        expect(Array.isArray(assignments)).toBe(true);
        expectPagination(response.meta);

        if (assignments.length === 0) {
            return;
        }

        expectShape(assignments[0], {
            id: 'number',
            price_list_id: 'number',
            customer_group_id: 'number',
            channel_id: ['number', 'null'],
        });
    });
});
