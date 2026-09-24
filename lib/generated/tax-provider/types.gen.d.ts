export type ClientOptions = {
    baseUrl: 'https://{app_domain}' | (string & {});
};
export type RequestItemTaxProperty = {
    code: string;
    value: string;
};
export type RequestQuoteCustomer = {
    customer_id: string;
    customer_group_id: string;
    taxability_code?: string;
    tax_properties?: Array<RequestItemTaxProperty>;
};
export type AddressType = 'RESIDENTIAL' | 'COMMERCIAL';
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
    type?: AddressType;
};
export type RequestDocumentShippingPrice = {
    amount: number;
    tax_inclusive: boolean;
};
export type TaxClass = {
    code: string;
    class_id: string;
    name: string;
};
export type ShippingType = 'shipping';
export type RequestDocumentShipping = {
    id: string;
    item_code?: string;
    item_reference?: string;
    name?: string;
    price: RequestDocumentShippingPrice;
    quantity: number;
    tax_class?: TaxClass;
    tax_exempt?: boolean;
    tax_properties?: Array<RequestItemTaxProperty>;
    type: ShippingType;
};
export type RequestDocumentHandlingPrice = {
    amount: number;
    tax_inclusive: boolean;
};
export type HandlingType = 'handling';
export type RequestDocumentHandling = {
    id: string;
    item_code?: string;
    item_reference?: string;
    name?: string;
    price: RequestDocumentHandlingPrice;
    quantity: number;
    tax_class?: TaxClass;
    tax_exempt?: boolean;
    tax_properties?: Array<RequestItemTaxProperty>;
    type: HandlingType;
};
export type RequestDocumentItemsItemsPrice = {
    amount: number;
    tax_inclusive: boolean;
};
export type ItemType = 'item' | 'refund' | 'fee';
export type RequestDocumentItemsItemsWrappingPrice = {
    amount: number;
    tax_inclusive: boolean;
};
export type WrappingType = 'wrapping';
export type RequestDocumentItemsItemsWrapping = {
    id: string;
    item_code?: string;
    item_reference?: string;
    name?: string;
    price: RequestDocumentItemsItemsWrappingPrice;
    quantity: number;
    tax_class?: TaxClass;
    tax_exempt?: boolean;
    tax_properties?: Array<RequestItemTaxProperty>;
    type: WrappingType;
};
export type RequestDocumentItemsItems = {
    id: string;
    item_code?: string;
    item_reference?: string;
    name?: string;
    price: RequestDocumentItemsItemsPrice;
    quantity: number;
    tax_class?: TaxClass;
    tax_exempt?: boolean;
    tax_properties?: Array<RequestItemTaxProperty>;
    type: ItemType;
    wrapping?: RequestDocumentItemsItemsWrapping;
};
export type RequestDocumentDeliveryType = 'digital' | 'pickup' | 'courier' | 'postal';
export type RequestDocument = {
    id: string;
    billing_address?: Address;
    destination_address: Address;
    origin_address: Address;
    shipping: RequestDocumentShipping;
    handling: RequestDocumentHandling;
    items: Array<RequestDocumentItemsItems>;
    delivery_type: RequestDocumentDeliveryType;
};
export type RequestQuote = {
    id: string;
    currency_code: string;
    customer: RequestQuoteCustomer;
    transaction_date: string;
    documents: Array<RequestDocument>;
};
export type SalesTax = {
    name: string;
    rate: number;
    amount: number;
    tax_class?: TaxClass;
    id?: string;
};
export type ResponseTaxprice = {
    amount_inclusive: number;
    amount_exclusive: number;
    total_tax: number;
    tax_rate: number;
    sales_tax_summary: Array<SalesTax>;
};
export type ResponseDocumentItemsItemsWrapping = {
    id: string;
    price: ResponseTaxprice;
    type: WrappingType;
};
export type ResponseDocumentItemsItems = {
    id: string;
    price: ResponseTaxprice;
    type: ItemType;
    wrapping?: ResponseDocumentItemsItemsWrapping;
};
export type ResponseDocumentShipping = {
    id: string;
    price: ResponseTaxprice;
    type: ShippingType;
};
export type ResponseDocumentHandling = {
    id: string;
    price: ResponseTaxprice;
    type: HandlingType;
};
export type ResponseDocument = {
    id: string;
    external_id?: string;
    items: Array<ResponseDocumentItemsItems>;
    shipping: ResponseDocumentShipping;
    handling: ResponseDocumentHandling;
};
export type ResponseQuote = {
    id: string;
    documents: Array<ResponseDocument>;
};
export type TaxProviderVoidTaxQuoteResponse200 = {
    [key: string]: unknown;
};
export type RequestAdjustCustomer = {
    customer_id: string;
    customer_group_id: string;
    taxability_code?: string;
    tax_properties?: Array<RequestItemTaxProperty>;
};
export type RequestAdjust = {
    adjust_description?: string;
    id: string;
    currency_code: string;
    customer: RequestAdjustCustomer;
    transaction_date: string;
    documents: Array<RequestDocument>;
};
export type EstimateTaxesData = {
    body?: RequestQuote;
    headers: {
        'X-Bc-Store-Hash': string;
    };
    path?: never;
    query?: never;
    url: '/estimate';
};
export type EstimateTaxesErrors = {
    400: unknown;
    401: unknown;
    500: unknown;
};
export type EstimateTaxesResponses = {
    200: ResponseQuote;
};
export type EstimateTaxesResponse = EstimateTaxesResponses[keyof EstimateTaxesResponses];
export type VoidTaxQuoteData = {
    body?: never;
    headers: {
        'X-Bc-Store-Hash': string;
    };
    path?: never;
    query: {
        id: string;
    };
    url: '/void';
};
export type VoidTaxQuoteErrors = {
    400: unknown;
    401: unknown;
    500: unknown;
};
export type VoidTaxQuoteResponses = {
    200: TaxProviderVoidTaxQuoteResponse200;
};
export type VoidTaxQuoteResponse = VoidTaxQuoteResponses[keyof VoidTaxQuoteResponses];
export type CommitTaxQuoteData = {
    body?: RequestQuote;
    headers: {
        'X-Bc-Store-Hash': string;
    };
    path?: never;
    query?: never;
    url: '/commit';
};
export type CommitTaxQuoteErrors = {
    400: unknown;
    401: unknown;
    500: unknown;
};
export type CommitTaxQuoteResponses = {
    200: ResponseQuote;
};
export type CommitTaxQuoteResponse = CommitTaxQuoteResponses[keyof CommitTaxQuoteResponses];
export type AdjustTaxQuoteData = {
    body?: RequestAdjust;
    headers: {
        'X-Bc-Store-Hash': string;
    };
    path?: never;
    query: {
        id: string;
    };
    url: '/adjust';
};
export type AdjustTaxQuoteErrors = {
    400: unknown;
    401: unknown;
    500: ResponseQuote;
};
export type AdjustTaxQuoteError = AdjustTaxQuoteErrors[keyof AdjustTaxQuoteErrors];
export type AdjustTaxQuoteResponses = {
    200: ResponseQuote;
};
export type AdjustTaxQuoteResponse = AdjustTaxQuoteResponses[keyof AdjustTaxQuoteResponses];
