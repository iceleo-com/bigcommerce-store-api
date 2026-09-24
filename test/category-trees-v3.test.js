const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape, expectPagination } = require('./helpers/api-client');

const nodeShape = {
    id: 'number',
    parent_id: 'number',
    name: 'string',
    is_visible: 'boolean',
    depth: 'number',
    path: 'array',
    children: 'array',
    url: ['string', 'undefined'],
};

describe('Category Trees V3 API', () => {
    test('List category trees, get a tree and its categories', async () => {
        const response = await apiClient.v3.categoryTrees.getCategoryTrees();
        const trees = expectSuccess(response);

        expect(Array.isArray(trees)).toBe(true);
        expectPagination(response.meta);

        if (trees.length === 0) {
            return;
        }

        expectShape(trees[0], {
            id: 'number',
            name: 'string',
            channels: 'array',
        });

        const treeId = trees[0].id;

        const treeResponse = await apiClient.v3.categoryTrees.getCategoryTree(treeId);
        const nodes = expectSuccess(treeResponse);

        expect(Array.isArray(nodes)).toBe(true);

        if (nodes.length > 0) {
            expectShape(nodes[0], nodeShape);
            expect(nodes[0].parent_id).toBe(0);

            if (nodes[0].children.length > 0) {
                expectShape(nodes[0].children[0], nodeShape);
                expect(nodes[0].children[0].parent_id).toBe(nodes[0].id);
                expect(nodes[0].children[0].depth).toBe(nodes[0].depth + 1);
            }
        }

        const categoriesResponse = await apiClient.v3.categoryTrees.getAllCategories({
            limit: 5,
            'tree_id:in': [treeId],
        });
        const categories = expectSuccess(categoriesResponse);

        expect(Array.isArray(categories)).toBe(true);
        expectPagination(categoriesResponse.meta);

        if (categories.length === 0) {
            return;
        }

        expectShape(categories[0], {
            category_id: 'number',
            // not returned by all stores
            category_uuid: ['string', 'undefined'],
            parent_id: 'number',
            tree_id: 'number',
            name: 'string',
            description: 'string',
            views: 'number',
            sort_order: 'number',
            page_title: 'string',
            search_keywords: 'string',
            meta_keywords: 'array',
            meta_description: 'string',
            layout_file: 'string',
            is_visible: 'boolean',
            default_product_sort: 'string',
            url: 'object',
            image_url: 'string',
        });
        expect(categories[0].tree_id).toBe(treeId);
        expectShape(categories[0].url, { path: 'string', is_customized: 'boolean' });
    });
});
