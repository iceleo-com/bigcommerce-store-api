const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const wishlistShape = {
    id: 'number',
    customer_id: 'number',
    name: 'string',
    is_public: 'boolean',
    token: 'string',
    items: 'array',
};

describe('Wishlists V3 API', () => {
    test('List wishlists, get wishlist', async () => {
        const response = await apiClient.v3.wishlists.getWishlists({ limit: 5 });
        const wishlists = expectSuccess(response);

        expect(Array.isArray(wishlists)).toBe(true);
        expectPagination(response.meta);

        if (wishlists.length === 0) {
            return;
        }

        expectShape(wishlists[0], wishlistShape);

        const withItems = wishlists.find((wishlist) => wishlist.items.length > 0);

        if (withItems) {
            expectShape(withItems.items[0], {
                id: 'number',
                product_id: 'number',
            });
        }

        const wishlistResponse = await apiClient.v3.wishlists.getWishlist(wishlists[0].id);
        const wishlist = expectSuccess(wishlistResponse);
        expectShape(wishlist, wishlistShape);
        expect(wishlist.id).toBe(wishlists[0].id);
        expect(wishlist.customer_id).toBe(wishlists[0].customer_id);
    });
});
