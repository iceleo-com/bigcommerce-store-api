export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type Property = {
    readonly id?: number;
    code?: string;
    display_name?: string;
    description?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
    type?: 'PRODUCT' | 'CUSTOMER';
};
export type PropertyPost = {
    code: string;
    display_name: string;
    description?: string;
    type: 'PRODUCT' | 'CUSTOMER';
};
export type PropertyPut = {
    id: number;
    code?: string;
    display_name?: string;
    description?: string;
};
export type ProductTaxProperty = {
    product_id: number;
    tax_properties: {
        [key: string]: unknown;
    };
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type PropertyWritable = {
    code?: string;
    display_name?: string;
    description?: string;
    type?: 'PRODUCT' | 'CUSTOMER';
};
export type MetaOpenWritable = {
    [key: string]: unknown;
};
export type Accept = string;
export type ContentType = string;
export type ProductIdin = Array<number>;
export type Idin = Array<number>;
export type IdinRequired = Array<number>;
export type Typein = Array<string>;
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
    204: void;
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
    200: {
        data?: Array<Property>;
        meta?: MetaOpen;
    };
};
export type GetTaxPropertiesResponse = GetTaxPropertiesResponses[keyof GetTaxPropertiesResponses];
export type CreateTaxPropertiesData = {
    body: Array<PropertyPost>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/tax/properties';
};
export type CreateTaxPropertiesErrors = {
    422: unknown;
};
export type CreateTaxPropertiesResponses = {
    200: {
        data?: Array<Property>;
        meta?: MetaOpen;
    };
};
export type CreateTaxPropertiesResponse = CreateTaxPropertiesResponses[keyof CreateTaxPropertiesResponses];
export type UpdateTaxPropertiesData = {
    body: Array<PropertyPut>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/tax/properties';
};
export type UpdateTaxPropertiesErrors = {
    422: unknown;
};
export type UpdateTaxPropertiesResponses = {
    200: {
        data?: Array<Property>;
        meta?: MetaOpen;
    };
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
    204: void;
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
    200: {
        data?: Array<ProductTaxProperty>;
        meta?: MetaOpen;
    };
};
export type GetProductsTaxPropertiesResponse = GetProductsTaxPropertiesResponses[keyof GetProductsTaxPropertiesResponses];
export type UpdateProductTaxPropertiesData = {
    body: Array<ProductTaxProperty>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/tax/products/properties';
};
export type UpdateProductTaxPropertiesErrors = {
    422: unknown;
};
export type UpdateProductTaxPropertiesResponses = {
    200: {
        data?: Array<ProductTaxProperty>;
        meta?: MetaOpen;
    };
};
export type UpdateProductTaxPropertiesResponse = UpdateProductTaxPropertiesResponses[keyof UpdateProductTaxPropertiesResponses];
