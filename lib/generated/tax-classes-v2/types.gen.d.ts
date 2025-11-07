export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2' | (string & {});
};
export type TaxClassFull = {
    id?: string;
    name?: string;
    created_at?: string;
    updated_at?: string;
};
export type Accept = string;
export type ContentType = string;
export type GetTaxClassesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/tax_classes';
};
export type GetTaxClassesResponses = {
    200: Array<TaxClassFull>;
};
export type GetTaxClassesResponse = GetTaxClassesResponses[keyof GetTaxClassesResponses];
export type GetTaxClassData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/tax_classes/{id}';
};
export type GetTaxClassResponses = {
    200: TaxClassFull;
};
export type GetTaxClassResponse = GetTaxClassResponses[keyof GetTaxClassResponses];
