const { expect } = require('@jest/globals');
const BigCommerceStoreApi = require('../../lib/index').default;

const storeHash = process.env.STORE_HASH || '';
const accessToken = process.env.ACCESS_TOKEN || '';

if (!storeHash || !accessToken) {
    throw new Error('STORE_HASH and ACCESS_TOKEN are required, see jest/global-setup.js');
}

const apiClient = new BigCommerceStoreApi({
    storeHash,
    accessToken,
});

function typeOf(value) {
    if (value === null) {
        return 'null';
    }

    if (Array.isArray(value)) {
        return 'array';
    }

    return typeof value;
}

/**
 * Asserts a successful response and returns its data.
 */
function expectSuccess(response, httpStatus = 200) {
    if (response.status !== 'success') {
        // surface the API error in the test output
        expect(response.response_text).toBe('');
    }

    expect(response.status).toBe('success');
    expect(response.http_status).toBe(httpStatus);

    return response.data;
}

/**
 * Asserts the value types of an object, e.g. `{ id: 'number', name: 'string', parent_id: ['number', 'null'] }`.
 * Allowed types: string, number, boolean, object, array, null, undefined.
 */
function expectShape(object, shape) {
    expect(typeOf(object)).toBe('object');

    for (const [key, types] of Object.entries(shape)) {
        const allowed = Array.isArray(types) ? types : [types];

        if (!allowed.includes('undefined')) {
            expect(object).toHaveProperty([key]);
        }

        // show the key, the expected and the actual type on failure
        if (!allowed.includes(typeOf(object[key]))) {
            expect({ [key]: typeOf(object[key]) }).toEqual({ [key]: allowed.join(' | ') });
        }
    }
}

/**
 * Asserts the list pagination meta of the v3 API.
 */
function expectPagination(meta) {
    expectShape(meta, { pagination: 'object' });
    expectShape(meta.pagination, {
        total: 'number',
        count: 'number',
        per_page: 'number',
        current_page: 'number',
        total_pages: 'number',
    });
}

module.exports = {
    apiClient,
    expectSuccess,
    expectShape,
    expectPagination,
};
