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

describe('Product API', () => {
    test('Get products', async () => {
        const response = await apiClient.v3.products.getProducts({
            limit: 1,
        });

        expect(response.http_status).toBe(200);
        expect(response).toHaveProperty('status');
        expect(response.status).toBe('success');

        if (response.status === 'success') {
            expect(response).toHaveProperty('data');
            expect(response.data).toBeInstanceOf(Array);
            
            const products = response.data;
            if (Array.isArray(products)
                && products.length > 0
            ) {
                const product = products[0];
                expect(product).toHaveProperty('id');
                expect(product).toHaveProperty('name');
                expect(product).toHaveProperty('sku');

                const responseProduct = await apiClient.v3.products.getProduct(product.id);
                expect(responseProduct.http_status).toBe(200);
                expect(responseProduct).toHaveProperty('status');

                if (responseProduct.status === 'success') {
                    expect(responseProduct).toHaveProperty('data');

                    const productData = responseProduct.data;
                    if (productData) {
                        expect(productData.id).toBe(product.id);
                    }
                } else {
                    expect(responseProduct).toHaveProperty('errors');
                }
            }
        }
    });
});
