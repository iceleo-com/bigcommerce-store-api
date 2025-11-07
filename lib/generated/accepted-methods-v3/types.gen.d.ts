export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type PaymentMethodStoredInstrument = {
    brand: string;
    expiry_month: number;
    expiry_year: number;
    issuer_identification_number: string;
    last_4: string;
    token: string;
    is_default: boolean;
    type: string;
};
export type PaymentMethodFull = {
    id: string;
    name: string;
    stored_instruments?: Array<PaymentMethodStoredInstrument>;
    supported_instruments: Array<{
        instrument_type: 'VISA' | 'MASTERCARD' | 'DISCOVER' | 'AMEX' | 'DINERS_CLUB' | 'JCB' | 'DANKORT' | 'MAESTRO' | 'STORED_CARD';
        verification_value_required?: boolean;
    }>;
    test_mode: boolean;
    type: string;
};
export type Accept = string;
export type OrderIdQuery = number;
export type CheckoutIdQuery = string;
export type GetPaymentMethodsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        order_id?: number;
        checkout_id?: string;
    };
    url: '/payments/methods';
};
export type GetPaymentMethodsErrors = {
    400: {
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    };
    401: {
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    };
    404: {
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    };
    422: {
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    };
    default: {
        status: number;
        title: string;
        detail?: string;
        type: string;
        code?: number;
        errors?: {
            [key: string]: string;
        };
    };
};
export type GetPaymentMethodsError = GetPaymentMethodsErrors[keyof GetPaymentMethodsErrors];
export type GetPaymentMethodsResponses = {
    200: {
        data?: Array<PaymentMethodFull>;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type GetPaymentMethodsResponse = GetPaymentMethodsResponses[keyof GetPaymentMethodsResponses];
