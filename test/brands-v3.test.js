const {
    describe,
    test,
    expect,
} = require('@jest/globals');
const BigCommerceStoreApi = require('../lib/index').default;

let storeHash = '';
let accessToken = '';

if (typeof process.env.STORE_HASH === 'string') {
    storeHash = process.env.STORE_HASH;
}

if (typeof process.env.ACCESS_TOKEN === 'string') {
    accessToken = process.env.ACCESS_TOKEN;
}

describe('Store Hash and Access Token', () => {
    test('should be provided as arguments', () => {
        expect(storeHash).toBeTruthy();
        expect(accessToken).toBeTruthy();
    });
});

if (!storeHash || !accessToken) {
    process.exit(1);
}

const apiClient = new BigCommerceStoreApi({
    storeHash,
    accessToken,
});

describe('Brand API', () => {
    test('Get brands', async () => {
        const response = await apiClient.v3.brands.getBrands({
            limit: 1,
        });

        expect(response.http_status).toBe(200);
        expect(response).toHaveProperty('status');
        expect(response.status).toBe('success');

        if (response.status === 'success') {
            expect(response).toHaveProperty('data');
            expect(response.data).toBeInstanceOf(Array);

            const brands = response.data;
            if (Array.isArray(brands)
                && brands.length > 0
            ) {
                const brand = brands[0];
                expect(brand).toHaveProperty('id');
                expect(brand).toHaveProperty('name');

                const responseBrand = await apiClient.v3.brands.getBrand(brand.id);
                expect(responseBrand.http_status).toBe(200);
                expect(responseBrand).toHaveProperty('status');

                if (responseBrand.status === 'success') {
                    expect(responseBrand).toHaveProperty('data');

                    const brandData = responseBrand.data;
                    if (brandData) {
                        expect(brandData.id).toBe(brand.id);
                    }
                } else {
                    expect(responseBrand).toHaveProperty('errors');
                }
            }
        }
    });
});
