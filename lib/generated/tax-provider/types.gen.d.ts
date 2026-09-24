export type ClientOptions = {
    baseUrl: 'https://{app_domain}' | (string & {});
};
export type RequestItem = {
    id: string;
    item_code?: string;
    item_reference?: string;
    name?: string;
    price: {
        amount: number;
        tax_inclusive: boolean;
    };
    quantity: number;
    tax_class?: TaxClass;
    tax_exempt?: boolean;
    tax_properties?: Array<RequestItemTaxProperty>;
};
export type RequestItemTaxProperty = {
    code: string;
    value: string;
};
export type RequestDocument = {
    id: string;
    billing_address?: Address;
    destination_address: Address;
    origin_address: Address;
    shipping: RequestItem & {
        type: ShippingType;
    };
    handling: RequestItem & {
        type: HandlingType;
    };
    items: Array<RequestItem & {
        type: ItemType;
        wrapping?: (RequestItem & {
            type: WrappingType;
        }) | null;
    }>;
};
export type RequestQuote = {
    id: string;
    currency_code: string;
    customer: {
        customer_id: string;
        customer_group_id: string;
        taxability_code?: string;
    };
    transaction_date: string;
    documents: Array<RequestDocument>;
};
export type RequestAdjust = {
    adjust_description?: string;
} & RequestQuote;
export type Address = {
    line1?: string;
    line2?: string;
    city?: string;
    region_name?: string;
    region_code?: string;
    country_name?: string;
    country_code?: string;
    postal_code?: string;
    company_name?: string;
    type?: 'RESIDENTIAL' | 'COMMERCIAL';
};
export type TaxClass = {
    code: string;
    class_id: string;
    name: string;
};
export type ResponseQuote = {
    id: string;
    documents: Array<ResponseDocument>;
};
export type ResponseDocument = {
    id: string;
    external_id?: string;
    items: Array<ResponseItem & {
        type: ItemType;
        wrapping?: (ResponseItem & {
            type: WrappingType;
        }) | null;
    }>;
    shipping: ResponseItem & {
        type: ShippingType;
    };
    handling: ResponseItem & {
        type: HandlingType;
    };
};
export type ResponseItem = {
    id: string;
    price: ResponseTaxprice;
};
export type ResponseTaxprice = {
    amount_inclusive: number;
    amount_exclusive: number;
    total_tax: number;
    tax_rate: number;
    sales_tax_summary: Array<SalesTax>;
};
export type SalesTax = {
    name: string;
    rate: number;
    amount: number;
    tax_class?: TaxClass;
    id?: string;
};
export type ItemType = 'item' | 'refund';
export type ShippingType = 'shipping';
export type HandlingType = 'handling';
export type WrappingType = 'wrapping';
export type HeaderStorehash = string;
export type EstimateData = {
    body: RequestQuote;
    headers: {
        'X-BC-Store-Hash': string;
    };
    path?: never;
    query?: never;
    url: '/estimate';
};
export type EstimateErrors = {
    400: unknown;
    401: unknown;
    500: unknown;
};
export type EstimateResponses = {
    200: ResponseQuote;
};
export type EstimateResponse = EstimateResponses[keyof EstimateResponses];
export type VoidData = {
    body?: never;
    headers: {
        'X-BC-Store-Hash': string;
    };
    path?: never;
    query: {
        id: string;
    };
    url: '/void';
};
export type VoidErrors = {
    400: unknown;
    401: unknown;
    500: unknown;
};
export type VoidResponses = {
    200: unknown;
};
export type CommitData = {
    body: RequestQuote;
    headers: {
        'X-BC-Store-Hash': string;
    };
    path?: never;
    query?: never;
    url: '/commit';
};
export type CommitErrors = {
    400: unknown;
    401: unknown;
    500: unknown;
};
export type CommitResponses = {
    200: ResponseQuote;
};
export type CommitResponse = CommitResponses[keyof CommitResponses];
export type AdjustData = {
    body?: RequestAdjust;
    headers: {
        'X-BC-Store-Hash': string;
    };
    path?: never;
    query: {
        id: string;
    };
    url: '/adjust';
};
export type AdjustErrors = {
    400: unknown;
    401: unknown;
    500: ResponseQuote;
};
export type AdjustError = AdjustErrors[keyof AdjustErrors];
export type AdjustResponses = {
    200: RequestAdjust;
};
export type AdjustResponse = AdjustResponses[keyof AdjustResponses];
