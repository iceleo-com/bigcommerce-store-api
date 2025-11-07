export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type TaxCustomer = {
    customer_id: number;
    tax_properties: {
        [key: string]: unknown;
    };
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type Accept = string;
export type ContentType = string;
export type CustomerIdin = Array<number>;
export type DeleteTaxCustomersData = {
    body?: never;
    headers: {
        'Content-Type': string;
    };
    path?: never;
    query?: {
        'customer_id:in'?: Array<number>;
    };
    url: '/tax/customers';
};
export type DeleteTaxCustomersErrors = {
    400: unknown;
};
export type DeleteTaxCustomersResponses = {
    204: void;
};
export type DeleteTaxCustomersResponse = DeleteTaxCustomersResponses[keyof DeleteTaxCustomersResponses];
export type GetTaxCustomersData = {
    body?: never;
    headers: {
        'Content-Type': string;
    };
    path?: never;
    query?: {
        'customer_id:in'?: Array<number>;
    };
    url: '/tax/customers';
};
export type GetTaxCustomersErrors = {
    400: unknown;
};
export type GetTaxCustomersResponses = {
    200: {
        data?: Array<TaxCustomer>;
        meta?: MetaOpen;
    };
};
export type GetTaxCustomersResponse = GetTaxCustomersResponses[keyof GetTaxCustomersResponses];
export type UpdateTaxCustomersData = {
    body: Array<TaxCustomer>;
    headers: {
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/tax/customers';
};
export type UpdateTaxCustomersErrors = {
    422: unknown;
};
export type UpdateTaxCustomersResponses = {
    200: {
        data?: Array<TaxCustomer>;
        meta?: MetaOpen;
    };
};
export type UpdateTaxCustomersResponse = UpdateTaxCustomersResponses[keyof UpdateTaxCustomersResponses];
