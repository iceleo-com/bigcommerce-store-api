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
export type PaymentMethodFullSupportedInstrumentsItemsInstrumentType = 'VISA' | 'MASTERCARD' | 'DISCOVER' | 'AMEX' | 'DINERS_CLUB' | 'JCB' | 'DANKORT' | 'MAESTRO' | 'STORED_CARD';
export type PaymentMethodFullSupportedInstrumentsItems = {
    instrument_type: PaymentMethodFullSupportedInstrumentsItemsInstrumentType;
    verification_value_required?: boolean;
};
export type PaymentMethodFull = {
    id: string;
    name: string;
    stored_instruments?: Array<PaymentMethodStoredInstrument>;
    supported_instruments: Array<PaymentMethodFullSupportedInstrumentsItems>;
    test_mode: boolean;
    type: string;
};
export type PaymentsMethodsGetResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type MethodsGetPaymentMethodsResponse200 = {
    data?: Array<PaymentMethodFull>;
    meta?: PaymentsMethodsGetResponsesContentApplicationJsonSchemaMeta;
};
export type PaymentsMethodsGetResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type GetPaymentMethodsRequestBadRequestError = {
    status: number;
    title: string;
    detail?: string;
    type: string;
    code?: number;
    errors?: PaymentsMethodsGetResponsesContentApplicationJsonSchemaErrors;
};
export type GetPaymentMethodsRequestUnauthorizedError = {
    status: number;
    title: string;
    detail?: string;
    type: string;
    code?: number;
    errors?: PaymentsMethodsGetResponsesContentApplicationJsonSchemaErrors;
};
export type GetPaymentMethodsRequestNotFoundError = {
    status: number;
    title: string;
    detail?: string;
    type: string;
    code?: number;
    errors?: PaymentsMethodsGetResponsesContentApplicationJsonSchemaErrors;
};
export type GetPaymentMethodsRequestUnprocessableEntityError = {
    status: number;
    title: string;
    detail?: string;
    type: string;
    code?: number;
    errors?: PaymentsMethodsGetResponsesContentApplicationJsonSchemaErrors;
};
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
    400: GetPaymentMethodsRequestBadRequestError;
    401: GetPaymentMethodsRequestUnauthorizedError;
    404: GetPaymentMethodsRequestNotFoundError;
    409: GetPaymentMethodsRequestNotFoundError;
    422: GetPaymentMethodsRequestUnprocessableEntityError;
};
export type GetPaymentMethodsError = GetPaymentMethodsErrors[keyof GetPaymentMethodsErrors];
export type GetPaymentMethodsResponses = {
    200: MethodsGetPaymentMethodsResponse200;
};
export type GetPaymentMethodsResponse = GetPaymentMethodsResponses[keyof GetPaymentMethodsResponses];
