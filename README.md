# bigcommerce-store-api

A typed BigCommerce REST API client for Node.js and Bun, written in TypeScript.

- **668 methods across 63 API groups**, covering the v2 and v3 Management APIs plus the Payments, Current Customer, Shipping Provider and Tax Provider APIs.
- **Fully typed** request bodies, query parameters and responses, generated from BigCommerce's official OpenAPI specs.
- **Never throws on API errors.** Every call resolves to a `success` or `error` result you can narrow with TypeScript.
- **Small footprint.** The only runtime dependency is [axios](https://www.npmjs.com/package/axios).

## Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Making Requests](#making-requests)
  - [Method arguments](#method-arguments)
  - [Filtering and query parameters](#filtering-and-query-parameters)
  - [Create, update and delete](#create-update-and-delete)
  - [Pagination](#pagination)
  - [File uploads](#file-uploads)
  - [APIs outside the API gateway](#apis-outside-the-api-gateway)
- [Responses](#responses)
- [Error Handling](#error-handling)
  - [Rate limits](#rate-limits)
- [TypeScript](#typescript)
- [Low-Level Requests](#low-level-requests)
- [API Reference](#api-reference)
- [Development](#development)
- [License](#license)

## Installation

```sh
npm install bigcommerce-store-api
```

Requires **Node.js 20.18.1 or newer**, or **Bun**.

## Quick Start

Create a [store-level API account](https://support.bigcommerce.com/s/article/Store-API-Accounts) in your BigCommerce control panel to get an access token. The store hash is the part after `/stores/` in the API path it shows (`https://api.bigcommerce.com/stores/{store_hash}/v3/`).

```typescript
import BigCommerceStoreApi from 'bigcommerce-store-api';

const apiClient = new BigCommerceStoreApi({
    storeHash: 'abc123',
    accessToken: 'your-access-token',
});

const response = await apiClient.v3.products.getProducts({ limit: 10 });

if (response.status === 'success') {
    console.log(response.data); // the products
} else {
    console.log(response.http_status, response.errors);
}
```

With CommonJS:

```javascript
const BigCommerceStoreApi = require('bigcommerce-store-api').default;
```

## Configuration

```typescript
const apiClient = new BigCommerceStoreApi({
    storeHash: 'abc123',
    accessToken: 'your-access-token',
    storeDomain: 'store.example.com',
    appDomain: 'app.example.com',
    includeResponseText: false,
});
```

| Option | Type | Required | Description |
|---|---|---|---|
| `storeHash` | `string` | Yes | Your store's hash, e.g. `abc123`. |
| `accessToken` | `string` | Yes | A store-level API account access token. It's sent as the `X-Auth-Token` header, **only** to `api.bigcommerce.com`. |
| `storeDomain` | `string` | No | Your storefront domain, e.g. `store.example.com`. Only needed by the [Current Customer API](#apis-outside-the-api-gateway). |
| `appDomain` | `string` | No | Your app's domain, e.g. `app.example.com`. Only needed by the [Shipping Provider and Tax Provider APIs](#apis-outside-the-api-gateway). |
| `includeResponseText` | `boolean` | No | Add the raw response body to every response as `response_text`, for debugging. Defaults to `false`. |

Domains can be given with or without `https://` and a trailing slash.

## Making Requests

API groups are organized by BigCommerce API version, under `apiClient.v2` and `apiClient.v3`:

```typescript
await apiClient.v2.storeInformation.getStoreInformation();
await apiClient.v3.customers.getCustomers({ 'email:in': ['jane@example.com'] });
```

Method names follow the BigCommerce docs: `getProducts`, `getProduct`, `createProduct`, `updateProduct`, `deleteProduct`, and so on. Every method has JSDoc copied from the BigCommerce reference, so your editor shows the endpoint's description, required fields and limits as you type. See the [API Reference](#api-reference) for the full list of groups.

### Method arguments

Arguments always come in the same order:

1. **Path parameters**, such as IDs, in the order they appear in the URL.
2. **Request body**, for methods that send one.
3. **Query parameters**, always last and optional.

```typescript
// GET /v3/catalog/products/{product_id}/variants/{variant_id}
await apiClient.v3.productVariants.getProductVariant(123, 456);

// PUT /v3/catalog/products/{product_id}?include_fields=name,price
await apiClient.v3.products.updateProduct(123, { price: '19.99' }, { include_fields: ['name', 'price'] });
```

### Filtering and query parameters

Pass query parameters as an object. Arrays become BigCommerce's comma-separated lists, `Date` values become ISO strings, and `undefined` or `null` values are left out:

```typescript
const response = await apiClient.v3.products.getProducts({
    'id:in': [1, 2, 3],                 // ?id:in=1,2,3
    is_visible: true,
    include_fields: ['name', 'price'],
    limit: 50,
    sort: undefined,                    // left out
});
```

### Create, update and delete

```typescript
const created = await apiClient.v3.products.createProduct({
    name: 'Linen Fabric',
    type: 'physical',
    weight: '1',
    price: '12.50',
});

if (created.status === 'success') {
    const productId = created.data.id;

    await apiClient.v3.products.updateProduct(productId, { price: '14.00' });
    await apiClient.v3.products.deleteProduct(productId);
}
```

Many v3 endpoints also accept batches. For example, `updateProducts` updates up to 10 products in one call:

```typescript
await apiClient.v3.products.updateProducts([
    { id: 1, price: '10.00' },
    { id: 2, price: '20.00' },
]);
```

### Pagination

v3 list endpoints return pagination details in `meta.pagination`:

```typescript
const products = [];
let page = 1;
let totalPages = 1;

do {
    const response = await apiClient.v3.products.getProducts({ page, limit: 250 });

    if (response.status === 'error') {
        throw new Error(`Failed to load page ${page}: HTTP ${response.http_status}`);
    }

    products.push(...response.data);
    totalPages = response.meta?.pagination?.total_pages ?? 1;
    page++;
} while (page <= totalPages);
```

`meta.pagination` contains `total`, `count`, `per_page`, `current_page`, `total_pages` and `links`.

v2 list endpoints return a plain array without `meta`. Use the `page` and `limit` query parameters, and stop when a page comes back with fewer items than `limit`.

### File uploads

Methods that upload files, such as `createBrandImage`, `createCategoryImage`, `createSettingsLogoImage` and `uploadStoreTheme`, take a standard `File` or `Blob`. The request is sent as `multipart/form-data` for you:

```typescript
import { readFile } from 'node:fs/promises';

const image = new File([await readFile('./logo.png')], 'logo.png', { type: 'image/png' });

await apiClient.v3.brands.createBrandImage(12, { image_file: image });
```

### APIs outside the API gateway

Most methods call `https://api.bigcommerce.com/stores/{store_hash}/`. A few BigCommerce APIs live on other hosts:

| API group | Host | Needs |
|---|---|---|
| `v3.process` | `payments.bigcommerce.com` | A payment access token, from `v3.accessTokens.createPaymentAccessToken` |
| `v3.currentCustomer` | Your storefront | `storeDomain` |
| `v3.customerLogin` | Your storefront | The storefront domain, passed as the first argument |
| `v3.shippingProvider` | Your app | `appDomain` |
| `v3.taxProvider` | Your app | `appDomain` |

Your `accessToken` is **never** sent to these hosts. Calling one of them without the domain it needs returns an error response instead of making a request.

## Responses

Every method resolves to one of two shapes.

**Success** (HTTP status below 400):

```typescript
{
    status: 'success',
    http_status: 200,
    data: { /* the response's `data` field, or the whole body if it has none */ },
    meta: { /* the response's `meta` field, e.g. pagination, if any */ },
    headers: { 'x-rate-limit-requests-left': '149', /* ... */ },
}
```

**Error** (HTTP status 400 or above, or a network failure):

```typescript
{
    status: 'error',
    http_status: 404,
    errors: {
        status: 404,
        title: 'A product with the id of 999 was not found',
        type: 'https://developer.bigcommerce.com/api-docs/getting-started/api-status-codes',
    },
    headers: { /* ... */ },
}
```

| Field | Description |
|---|---|
| `status` | `'success'` or `'error'`. |
| `http_status` | The HTTP status code. `500` for network failures. |
| `data` | Success only. The `data` field of the response body, or the whole body for endpoints that don't wrap their results (most v2 endpoints). `{}` for empty responses such as `204 No Content`. |
| `meta` | Success only. The `meta` field of the response body, if any. |
| `errors` | Error only. The error body BigCommerce returned. |
| `headers` | The response headers, with lowercase names. |
| `response_text` | The raw response body. Only included when the client is created with `includeResponseText: true`. |

## Error Handling

The client doesn't throw for HTTP errors or network failures. Check `status` instead:

```typescript
const response = await apiClient.v3.products.getProduct(999);

if (response.status === 'error') {
    console.log(response.http_status); // 404
    console.log(response.errors);      // BigCommerce's error details
}
```

Some failures happen before BigCommerce sends a response, such as DNS errors, refused or dropped connections, or a missing `storeDomain`/`appDomain`. These come back with `http_status: 500` and the underlying message:

```typescript
{
    status: 'error',
    http_status: 500,
    errors: {
        status: 500,
        title: 'Internal Server Error',
        type: 'internal_server_error',
        errors: { message: 'getaddrinfo ENOTFOUND api.bigcommerce.com' },
    },
    headers: {},
}
```

If BigCommerce returns an error page that isn't JSON (e.g. a `502 Bad Gateway` HTML page), `errors` is `{ status, title, type: 'http_error' }`, with the page text as `title`.

To see the exact body BigCommerce sent, create the client with `includeResponseText: true` and log `response.response_text`.

### Rate limits

BigCommerce limits how many requests an API account can make per time window. Every response includes the current limits in its headers:

| Header | Meaning |
|---|---|
| `x-rate-limit-requests-left` | Requests left in the current window. |
| `x-rate-limit-requests-quota` | Requests allowed per window. |
| `x-rate-limit-time-window-ms` | Length of the window, in milliseconds. |
| `x-rate-limit-time-reset-ms` | Time until the window resets, in milliseconds. |

When you go over the limit, BigCommerce responds with `429`. A simple retry wrapper:

```typescript
async function withRateLimitRetry<T extends { http_status: number; headers: Record<string, unknown> }>(
    call: () => Promise<T>,
    retries = 3,
): Promise<T> {
    let response = await call();

    for (let attempt = 0; attempt < retries && response.http_status === 429; attempt++) {
        const waitMs = Number(response.headers['x-rate-limit-time-reset-ms']) || 1000;
        await new Promise((resolve) => setTimeout(resolve, waitMs));
        response = await call();
    }

    return response;
}

const response = await withRateLimitRetry(() => apiClient.v3.products.getProducts());
```

## TypeScript

Responses are typed per endpoint. Checking `status` narrows the result to success or error, and checking `http_status` narrows `errors` to the error body for that status code:

```typescript
const response = await apiClient.v3.products.createProduct({
    name: 'Linen Fabric',
    type: 'physical',
    weight: '1',
    price: '12.50',
});

if (response.status === 'success') {
    response.data.id; // number
} else if (response.http_status === 422) {
    response.errors; // the 422 validation error body
}
```

The request and response types for each API group are exported as a `...ApiSpecs` namespace, useful for typing your own code:

```typescript
import { ProductsV3ApiSpecs } from 'bigcommerce-store-api';

type NewProduct = ProductsV3ApiSpecs.CreateProductData['body'];
type ProductQuery = ProductsV3ApiSpecs.GetProductsData['query'];
```

The API classes are exported too (`ProductsV3Api`, `OrdersV3Api`, ...), as is the `BigCommerceStoreApiConfig` type.

Fields in `data` are typed as always present, to save you from checking every field. BigCommerce can still leave fields out, for example when you use `include_fields`, so check any field you didn't explicitly ask for.

## Low-Level Requests

For endpoints the client doesn't cover yet, or to control the request yourself, use `apiClient.request`. It has `get`, `post`, `put`, `patch`, `delete`, `head`, `options` and `trace` methods, all taking the same options and returning the same [response shape](#responses), with `data` typed as `any`:

```typescript
const response = await apiClient.request.put({
    path: 'v3/catalog/products',
    contentType: 'application/json',
    body: [
        { id: 123, name: 'New Product Name' },
        { id: 456, name: 'Another Product Name' },
    ],
    query: {
        include_fields: ['name'],
    },
});
```

| Option | Type | Description |
|---|---|---|
| `path` | `string` | A path relative to `https://api.bigcommerce.com/stores/{store_hash}/`, such as `v3/catalog/products`. Or a full `https://` URL, where `{store_hash}`, `{store_domain}` and `{app_domain}` are filled in from the config. |
| `query` | `object`, `URLSearchParams` or `string` | Query parameters, handled as described in [Filtering and query parameters](#filtering-and-query-parameters). |
| `body` | `object`, `FormData` or `string` | The request body. A string is sent as-is. |
| `contentType` | `'application/json'`, `'application/x-www-form-urlencoded'` or `'multipart/form-data'` | How to encode an object `body`. Defaults to `application/json`. |

For example, the typed `createProductImage` method only accepts an `image_url`. To upload an image file instead:

```typescript
const image = new File([await readFile('./photo.jpg')], 'photo.jpg', { type: 'image/jpeg' });

await apiClient.request.post({
    path: 'v3/catalog/products/123/images',
    contentType: 'multipart/form-data',
    body: { image_file: image },
});
```

## API Reference

Method names and arguments match the [BigCommerce API reference](https://docs.bigcommerce.com/developer/api-reference), and your editor shows each method's documentation as you type.

### Catalog

| Property | Covers |
|---|---|
| `v3.products` | Products, plus their images, videos, custom fields, bulk pricing rules, complex rules, reviews, category and channel assignments, metafields, and the catalog summary |
| `v3.productVariants` | Product variants, variant images and variant metafields |
| `v3.productVariantOptions` | Variant options and option values |
| `v3.productModifiers` | Product modifiers, modifier values and modifier images |
| `v3.categories` | Categories, category images, product sort order and metafields |
| `v3.categoryTrees` | Category trees and the categories in them |
| `v3.brands` | Brands, brand images and metafields |
| `v3.priceLists` | Price lists, price list records and assignments |
| `v3.inventory` | Inventory adjustments and inventory levels by location |
| `v3.locations` | Locations and location metafields |

### Orders and checkout

| Property | Covers |
|---|---|
| `v2.ordersV2Oas2` | Orders, order products, shipments, shipping addresses, consignments, shipping quotes, coupons, fees, taxes, messages and order statuses |
| `v3.orders` | Order transactions, refunds, payment capture and void, order settings and order metafields |
| `v3.carts` | Carts, line items, redirect URLs, cart settings and cart metafields |
| `v3.checkouts` | Checkouts, billing addresses, consignments, coupons, discounts, fees, creating orders from checkouts, checkout settings and checkout tokens |
| `v3.abandonedCarts` | Abandoned carts and abandoned cart settings |

### Customers

| Property | Covers |
|---|---|
| `v3.customers` | Customers, addresses, attributes and attribute values, form field values, consent, stored instruments, credential validation, customer settings and metafields |
| `v2.customers` | Customers, addresses, customer groups and password validation (v2) |
| `v3.segments` | Customer segments and shopper profiles |
| `v3.subscribers` | Newsletter subscribers |
| `v3.wishlists` | Wishlists and wishlist items |
| `v3.currentCustomer` | The signed-in storefront customer, as a JWT |
| `v3.customerLogin` | Customer single sign-on login URLs |
| `v3.storefrontTokens` | Storefront API tokens, customer impersonation tokens and private tokens |

### Payments

| Property | Covers |
|---|---|
| `v3.accessTokens` | Payment access tokens, stored payment instruments and the store's payment methods |
| `v3.process` | Processing payments and attaching stored instruments to customers |
| `v3.acceptedMethods` | Payment methods accepted for an order |
| `v2.methods` | The store's enabled payment methods |

### Shipping and pickup

| Property | Covers |
|---|---|
| `v2.shipping` | Shipping zones, shipping methods and carrier connections |
| `v3.shipping` | Customs information and shipping settings |
| `v3.shippingProvider` | Requests your shipping provider app receives (rates, connection checks) |
| `v3.pickup` | In-store pickups for orders |
| `v3.pickupMethods` | Pickup methods |
| `v3.pickupOptions` | Available pickup options |

### Tax

| Property | Covers |
|---|---|
| `v2.taxClasses` | Tax classes |
| `v3.taxRatesZones` | Tax zones and tax rates |
| `v3.taxSettings` | Store tax settings |
| `v3.taxProperties` | Tax properties and product tax properties |
| `v3.taxCustomers` | Customer tax settings |
| `v3.tax` | Tax provider connections |
| `v3.taxProvider` | Requests your tax provider app receives (estimate, commit, adjust, void) |
| `v3.taxZoneCheck` | Checking which tax zones an address falls in |

### Marketing and promotions

| Property | Covers |
|---|---|
| `v3.promotions` | Promotions and coupon codes |
| `v3.promotionSettings` | Global promotion settings |
| `v2.marketing` | Banners, coupons and gift certificates |

### Storefront and content

| Property | Covers |
|---|---|
| `v3.channels` | Channels, channel sites, listings, menus, currency assignments, checkout URLs, active themes and metafields |
| `v3.sites` | Sites, routes and SSL certificates |
| `v3.themes` | Themes: upload, download, activation, configuration and custom templates |
| `v3.widgets` | Widgets, widget templates, placements and content regions |
| `v3.pages` | Content pages |
| `v3.pageWidgets` | Widgets on pages |
| `v2.storeContent` | Blog posts, blog tags, pages and redirects (v2) |
| `v3.redirects` | Redirects and redirect import/export jobs |
| `v3.scripts` | Scripts (Script Manager) |
| `v3.customTemplateAssociations` | Custom template associations |
| `v3.emailTemplates` | Email templates |

### Store settings and information

| Property | Covers |
|---|---|
| `v3.settings` | Store settings: analytics, catalog, email, favicon, logo, inventory, locale, store profile, search filters, storefront, SEO, robots.txt, security and measurement units |
| `v2.storeInformation` | Store profile and system time |
| `v3.storeInformation` | Store metafields |
| `v2.currencies` | Currencies |
| `v2.geography` | Countries and states |
| `v3.storeLogs` | Store system logs |
| `v3.webhooks` | Webhooks and webhook admin settings |

### Deprecated methods

These old names still work, but will be removed in a future version:

| Method | Use instead |
|---|---|
| `v3.abandonedCarts.getAbandonedCarts` | `v3.abandonedCarts.getAbandonedCart` |

## Development

```sh
npm install
npm run build        # compile src/ to lib/
npm test             # run the tests with Jest (requires Node.js 24.9 or newer)
npm run test:bun     # run the tests with Bun, in parallel
```

Most tests call a real BigCommerce store, and only read data from it. Put its credentials in `bigcommerce-credentials.json` in the project root (it's ignored by git), or enter them when the tests ask:

```json
{
    "storeHash": "abc123",
    "accessToken": "your-access-token"
}
```

The API classes in `src/apis/` and types in `src/generated/` are maintained by hand, using BigCommerce's OpenAPI specs in `reference/` as the source of truth. To pull the latest specs and compare, run `npm run pull:references`.

## License

[MIT](LICENSE)
