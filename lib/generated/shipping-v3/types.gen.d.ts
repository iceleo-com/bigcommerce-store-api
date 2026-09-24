export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type CustomsInformationRequest = {
    product_id: number;
    country_of_origin: string;
    commodity_description: string;
    international_shipping: true | false;
    hs_codes: HarmonizedSystemCodes;
};
export type CustomsInformation = {
    product_id?: number;
    country_of_origin?: string;
    commodity_description?: string;
    international_shipping?: true | false;
    hs_codes?: HarmonizedSystemCodes;
    readonly created_at?: string;
    readonly updated_at?: string;
};
export type HarmonizedSystemCodes = {
    [key: string]: unknown;
};
export type MetaCollection = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_page?: number;
        links?: {
            previous?: string;
            next?: string;
            current?: string;
        };
    };
};
export type ErrorFull = {
    [key: string]: unknown;
};
export type CustomsInformationWritable = {
    product_id?: number;
    country_of_origin?: string;
    commodity_description?: string;
    international_shipping?: true | false;
    hs_codes?: HarmonizedSystemCodesWritable;
};
export type HarmonizedSystemCodesWritable = {
    [key: string]: unknown;
};
export type StoreHash = string;
export type Accept = string;
export type ContentType = string;
export type DeleteCustomsInformationData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        'product_id:in': string;
    };
    url: '/shipping/products/customs-information';
};
export type DeleteCustomsInformationResponses = {
    204: void;
};
export type DeleteCustomsInformationResponse = DeleteCustomsInformationResponses[keyof DeleteCustomsInformationResponses];
export type GetCustomsInformationData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'product_id:in'?: Array<number>;
        page?: number;
        limit?: number;
    };
    url: '/shipping/products/customs-information';
};
export type GetCustomsInformationResponses = {
    200: {
        data?: Array<CustomsInformation>;
        meta?: MetaCollection;
    };
};
export type GetCustomsInformationResponse = GetCustomsInformationResponses[keyof GetCustomsInformationResponses];
export type PutCustomsInformationData = {
    body?: Array<CustomsInformationRequest>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/shipping/products/customs-information';
};
export type PutCustomsInformationResponses = {
    200: {
        data?: Array<CustomsInformation>;
    };
};
export type PutCustomsInformationResponse = PutCustomsInformationResponses[keyof PutCustomsInformationResponses];
