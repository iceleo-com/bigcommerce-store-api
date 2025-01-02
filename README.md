# bigcommerce-store-api

This is a simple BigCommerce API client library written in Typescript, it allows developers to interact with the BigCommerce platform. By using this library, developers can easily integrate their applications with BigCommerce stores, enabling them to access and manipulate store data such as products, orders, customers, and more.

## Getting Started
- [Installation](#installation)
- [Basic Usage](#basic-usage)

## Installation

```sh
npm install bigcommerce-store-api
```

## Basic Usage

```typescript
import BigCommerceStoreApi from 'bigcommerce-store-api';

const apiClient = new BigCommerceStoreApi({
    storeHash: 'storeHash',
    accessToken: 'accessToken',
});

const response = await apiClient.v3.products.getProducts({
    limit: 10,
});

if (response.status === 'success') {
    console.log(response.data);
} else {
    console.log(response.errors);
}

const responseProduct = await apiClient.v3.products.getProduct(1234);

if (responseProduct.status === 'success') {
    console.log(responseProduct.data);
} else {
    console.log(responseProduct.errors);
}
```

### Low level API

If you need to directly call the `get`, `post` `put` `delete` methods with a custom URL and custom parameter, you can get the `apiClient.request` object and call the corresponding method. For example:

```typescript
apiClient.request.put({
    path: 'v3/catalog/products',
    contentType: 'application/json',
    body: [
        { id: 123, name: 'New Product Name' },
        { id: 456, name: 'New Product Name' }
    ],
    query: {
        include_fields: ['name'],
    },
});
```

## Error Handling

bigcommerce-store-api will not throw an error, instead it return error details in response

```typescript
const response = await apiClient.v3.products.getProduct(1234);

if (response.status === 'error') {
    console.log(response.errors);
}
```

But for program safety, I recommend implementing a try catch to ensure your code is not interrupted by a library bug. For example:

```typescript
const response = await productApi
    .getProducts()
    .catch(error => {
        console.log(error);
    });

if (response) {
    console.log(response);
}

// or
try {
    const response = await productApi.getProducts();
    console.log(response);
} catch (error) {
    console.log(error);
}
```
