const { describe, test, expect } = require('@jest/globals');
const { apiClient, expectSuccess, expectShape } = require('./helpers/api-client');

const blogPostShape = {
    id: 'number',
    title: 'string',
    url: 'string',
    preview_url: 'string',
    preview_code: 'string',
    body: 'string',
    tags: 'array',
    summary: 'string',
    is_published: 'boolean',
    published_date: 'object',
    published_date_iso8601: 'string',
    meta_description: ['string', 'null'],
    meta_keywords: ['string', 'null'],
    author: ['string', 'null'],
    thumbnail_path: ['string', 'null'],
};

const pageShape = {
    id: 'number',
    channel_id: 'number',
    name: 'string',
    is_visible: 'boolean',
    parent_id: 'number',
    sort_order: 'number',
    type: 'string',
    is_homepage: 'boolean',
    is_customers_only: 'boolean',
};

const typePageShape = {
    ...pageShape,
    meta_title: 'string',
    body: 'string',
    meta_keywords: ['string', 'null'],
    meta_description: 'string',
    layout_file: 'string',
    search_keywords: 'string',
    has_mobile_version: 'boolean',
    mobile_body: ['string', 'null'],
    url: 'string',
};

const redirectShape = {
    id: 'number',
    path: 'string',
    forward: 'object',
    url: 'string',
};

/**
 * v2 lists return 204 when empty.
 */
function expectList(response) {
    if (response.http_status === 204) {
        return [];
    }

    const items = expectSuccess(response);
    expect(Array.isArray(items)).toBe(true);

    return items;
}

describe('Store Content V2 API', () => {
    test('List blog posts, get blog post', async () => {
        const posts = expectList(await apiClient.v2.storeContent.getBlogPosts({ limit: 5 }));

        if (posts.length === 0) {
            return;
        }

        expectShape(posts[0], blogPostShape);
        expectShape(posts[0].published_date, { date: 'string', timezone_type: 'number', timezone: 'string' });

        const postResponse = await apiClient.v2.storeContent.getBlogPost(posts[0].id);
        const post = expectSuccess(postResponse);
        expectShape(post, { ...blogPostShape, tags_as_string: 'string' });
        expect(post.id).toBe(posts[0].id);
    });

    test('Count blog posts', async () => {
        const count = expectSuccess(await apiClient.v2.storeContent.getBlogPostsCount());
        expectShape(count, { count: 'number' });
    });

    test('List blog tags', async () => {
        const tags = expectList(await apiClient.v2.storeContent.getBlogTags());

        if (tags.length > 0) {
            expectShape(tags[0], { tag: 'string', post_ids: 'array' });
        }
    });

    test('List pages, get page', async () => {
        const pages = expectList(await apiClient.v2.storeContent.getPages({ limit: 50 }));

        if (pages.length === 0) {
            return;
        }

        for (const item of pages) {
            expectShape(item, pageShape);
        }

        const link = pages.find((item) => item.type === 'link');

        if (link) {
            expectShape(link, { ...pageShape, link: 'string' });
        }

        const listed = pages.find((item) => item.type === 'page');

        if (!listed) {
            return;
        }

        expectShape(listed, typePageShape);

        const page = expectSuccess(await apiClient.v2.storeContent.getPage(listed.id));
        expectShape(page, typePageShape);
        expect(page.id).toBe(listed.id);
    });

    test('List redirects, get redirect', async () => {
        const redirects = expectList(await apiClient.v2.storeContent.getRedirects({ limit: 5 }));

        if (redirects.length === 0) {
            return;
        }

        expectShape(redirects[0], redirectShape);
        // the reference is returned as a string
        expectShape(redirects[0].forward, { type: 'string', ref: 'string' });

        const redirect = expectSuccess(await apiClient.v2.storeContent.getRedirect(redirects[0].id));
        expectShape(redirect, redirectShape);
        expect(redirect.id).toBe(redirects[0].id);
    });

    test('Count redirects', async () => {
        const count = expectSuccess(await apiClient.v2.storeContent.getRedirectsCount());
        expectShape(count, { count: 'number' });
    });
});
