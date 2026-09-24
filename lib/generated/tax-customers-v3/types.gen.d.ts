export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type TaxCustomer = {
    customer_id: number;
    tax_properties: TaxCustomerTaxProperties;
};
export type TaxCustomerTaxProperties = {
    [key: string]: unknown;
};
export type TaxCustomersUpdateTaxCustomersResponse200 = {
    data?: Array<TaxCustomer>;
    meta?: MetaOpen;
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type TaxCustomersGetTaxCustomersResponse200 = {
    data?: Array<TaxCustomer>;
    meta?: MetaOpen;
};
export type DeleteTaxCustomersData = {
    body?: never;
    headers: {
        Accept: string;
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
    204: {
        [key: string]: unknown;
    };
};
export type DeleteTaxCustomersResponse = DeleteTaxCustomersResponses[keyof DeleteTaxCustomersResponses];
export type GetTaxCustomersData = {
    body?: never;
    headers: {
        Accept: string;
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
    200: TaxCustomersGetTaxCustomersResponse200;
};
export type GetTaxCustomersResponse = GetTaxCustomersResponses[keyof GetTaxCustomersResponses];
export type UpdateTaxCustomersData = {
    body?: Array<TaxCustomer>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/tax/customers';
};
export type UpdateTaxCustomersErrors = {
    422: unknown;
};
export type UpdateTaxCustomersResponses = {
    200: TaxCustomersUpdateTaxCustomersResponse200;
};
export type UpdateTaxCustomersResponse = UpdateTaxCustomersResponses[keyof UpdateTaxCustomersResponses];
