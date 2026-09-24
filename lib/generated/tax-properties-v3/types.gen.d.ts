export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type ProductTaxProperty = {
    product_id: number;
    tax_properties: ProductTaxPropertyTaxProperties;
};
export type ProductTaxPropertyTaxProperties = {
    [key: string]: unknown;
};
export type ProductTaxPropertiesUpdateProductTaxPropertiesResponse200 = {
    data?: Array<ProductTaxProperty>;
    meta?: MetaOpen;
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type ProductTaxPropertiesGetProductsTaxPropertiesResponse200 = {
    data?: Array<ProductTaxProperty>;
    meta?: MetaOpen;
};
export type PropertyPut = {
    id: number;
    code?: string;
    display_name?: string;
    description?: string;
};
export type TaxPropertiesUpdateTaxPropertiesResponse200 = {
    data?: Array<Property>;
    meta?: MetaOpen;
};
export type Property = {
    id?: number;
    code?: string;
    display_name?: string;
    description?: string;
    created_at?: string;
    updated_at?: string;
    type?: PropertyType;
};
export type PropertyType = 'PRODUCT' | 'CUSTOMER';
export type PropertyPost = {
    code: string;
    display_name: string;
    description?: string;
    type: PropertyPostType;
};
export type PropertyPostType = 'PRODUCT' | 'CUSTOMER';
export type TaxPropertiesCreateTaxPropertiesResponse200 = {
    data?: Array<Property>;
    meta?: MetaOpen;
};
export type TaxPropertiesGetTaxPropertiesResponse200 = {
    data?: Array<Property>;
    meta?: MetaOpen;
};
export type DeleteTaxPropertiesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        'id:in': Array<number>;
    };
    url: '/tax/properties';
};
export type DeleteTaxPropertiesErrors = {
    400: unknown;
    409: unknown;
};
export type DeleteTaxPropertiesResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteTaxPropertiesResponse = DeleteTaxPropertiesResponses[keyof DeleteTaxPropertiesResponses];
export type GetTaxPropertiesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'id:in'?: Array<number>;
        'type:in'?: Array<string>;
    };
    url: '/tax/properties';
};
export type GetTaxPropertiesErrors = {
    400: unknown;
};
export type GetTaxPropertiesResponses = {
    200: TaxPropertiesGetTaxPropertiesResponse200;
};
export type GetTaxPropertiesResponse = GetTaxPropertiesResponses[keyof GetTaxPropertiesResponses];
export type CreateTaxPropertiesData = {
    body?: Array<PropertyPost>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/tax/properties';
};
export type CreateTaxPropertiesErrors = {
    422: unknown;
};
export type CreateTaxPropertiesResponses = {
    200: TaxPropertiesCreateTaxPropertiesResponse200;
};
export type CreateTaxPropertiesResponse = CreateTaxPropertiesResponses[keyof CreateTaxPropertiesResponses];
export type UpdateTaxPropertiesData = {
    body?: Array<PropertyPut>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/tax/properties';
};
export type UpdateTaxPropertiesErrors = {
    422: unknown;
};
export type UpdateTaxPropertiesResponses = {
    200: TaxPropertiesUpdateTaxPropertiesResponse200;
};
export type UpdateTaxPropertiesResponse = UpdateTaxPropertiesResponses[keyof UpdateTaxPropertiesResponses];
export type DeleteProductTaxPropertiesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        'product_id:in': Array<number>;
    };
    url: '/tax/products/properties';
};
export type DeleteProductTaxPropertiesErrors = {
    400: unknown;
};
export type DeleteProductTaxPropertiesResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteProductTaxPropertiesResponse = DeleteProductTaxPropertiesResponses[keyof DeleteProductTaxPropertiesResponses];
export type GetProductsTaxPropertiesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        'product_id:in': Array<number>;
    };
    url: '/tax/products/properties';
};
export type GetProductsTaxPropertiesErrors = {
    400: unknown;
};
export type GetProductsTaxPropertiesResponses = {
    200: ProductTaxPropertiesGetProductsTaxPropertiesResponse200;
};
export type GetProductsTaxPropertiesResponse = GetProductsTaxPropertiesResponses[keyof GetProductsTaxPropertiesResponses];
export type UpdateProductTaxPropertiesData = {
    body?: Array<ProductTaxProperty>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/tax/products/properties';
};
export type UpdateProductTaxPropertiesErrors = {
    422: unknown;
};
export type UpdateProductTaxPropertiesResponses = {
    200: ProductTaxPropertiesUpdateProductTaxPropertiesResponse200;
};
export type UpdateProductTaxPropertiesResponse = UpdateProductTaxPropertiesResponses[keyof UpdateProductTaxPropertiesResponses];
