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
export type type = 'RESIDENTIAL' | 'COMMERCIAL';
export type handling_type = 'handling';
export type item_type = 'item' | 'refund' | 'fee';
export type ParameterIdQueryAdjusted = string;
export type ParameterIdQueryVoid = string;
export type ParameterStoreHashHeader = string;
export type request_adjust = {
    adjust_description?: string;
} & request_quote;
export type request_document = {
    id: string;
    billing_address?: Address;
    destination_address: Address;
    origin_address: Address;
    shipping: (request_item & {
        type: shipping_type;
    });
    handling: (request_item & {
        type: handling_type;
    });
    items: Array<(request_item & {
        type: item_type;
        wrapping?: (request_item & {
            type: wrapping_type;
        } | null);
    })>;
};
export type request_item = {
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
    tax_properties?: Array<request_item_tax_property>;
};
export type request_item_tax_property = {
    code: string;
    value: string;
};
export type request_quote = {
    id: string;
    currency_code: string;
    customer: {
        customer_id: string;
        customer_group_id: string;
        taxability_code?: string;
    };
    transaction_date: string;
    documents: Array<request_document>;
};
export type response_document = {
    id: string;
    external_id?: string;
    items: Array<(response_item & {
        type: item_type;
        wrapping?: (response_item & {
            type: wrapping_type;
        } | null);
    })>;
    shipping: (response_item & {
        type: shipping_type;
    });
    handling: (response_item & {
        type: handling_type;
    });
};
export type response_item = {
    id: string;
    price: response_taxprice;
};
export type response_quote = {
    id: string;
    documents: Array<response_document>;
};
export type response_taxprice = {
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
export type shipping_type = 'shipping';
export type TaxClass = {
    code: string;
    class_id: string;
    name: string;
};
export type wrapping_type = 'wrapping';
export type EstimateTaxesData = {
    body: request_quote;
    headers: {
        'X-Bc-Store-Hash': string;
    };
};
export type EstimateTaxesResponse = (response_quote);
export type EstimateTaxesError = (unknown);
export type VoidTaxQuoteData = {
    headers: {
        'X-Bc-Store-Hash': string;
    };
    query: {
        id: string;
    };
};
export type VoidTaxQuoteResponse = (unknown);
export type VoidTaxQuoteError = (unknown);
export type CommitTaxQuoteData = {
    body: request_quote;
    headers: {
        'X-Bc-Store-Hash': string;
    };
};
export type CommitTaxQuoteResponse = (response_quote);
export type CommitTaxQuoteError = (unknown);
export type AdjustTaxQuoteData = {
    body?: request_adjust;
    headers: {
        'X-Bc-Store-Hash': string;
    };
    query: {
        id: string;
    };
};
export type AdjustTaxQuoteResponse = (response_quote);
export type AdjustTaxQuoteError = (unknown | response_quote);
