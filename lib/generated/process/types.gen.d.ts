export type ClientOptions = {
    baseUrl: 'https://payments.bigcommerce.com' | (string & {});
};
export type PaymentsPostParametersAccept = 'application/vnd.bc.v1+json';
export type Card = {
    type?: string;
    cardholder_name?: string;
    number?: string;
    expiry_month?: number;
    expiry_year?: number;
    verification_value?: string;
    issue_month?: number;
    issue_year?: number;
    issue_number?: number;
};
export type StoredCard = {
    type?: string;
    token?: string;
    verification_value?: string;
};
export type StoredPayPalAccountType = 'stored_paypal_account';
export type StoredPayPalAccount = {
    type?: StoredPayPalAccountType;
    token?: string;
};
export type GiftCertificate = {
    type?: string;
    gift_certificate_code?: string;
};
export type StoreCredit = {
    type?: string;
};
export type TokenizedCardType = 'tokenized_card';
export type TokenizedCard = {
    type: TokenizedCardType;
    token: string;
    iin?: string;
    last_four_digits?: string;
    expiration_month?: string;
    expiration_year?: string;
};
export type StoredBankAccountType = 'stored_bank_account';
export type StoredBankAccount = {
    type?: StoredBankAccountType;
    token?: string;
};
export type PaymentsPostRequestBodyContentApplicationJsonSchemaPaymentInstrument = Card | StoredCard | StoredPayPalAccount | GiftCertificate | StoreCredit | TokenizedCard | StoredBankAccount;
export type PaymentsPostRequestBodyContentApplicationJsonSchemaPayment = {
    instrument: PaymentsPostRequestBodyContentApplicationJsonSchemaPaymentInstrument;
    payment_method_id: string;
    save_instrument?: boolean;
};
export type PaymentsPostResponsesContentApplicationJsonSchemaTransactionType = 'authorization' | 'purchase';
export type PaymentsPostResponsesContentApplicationJsonSchemaStatus = 'success' | 'pending';
export type ProcessingPaymentsPostResponse202 = {
    id?: string;
    transaction_type?: PaymentsPostResponsesContentApplicationJsonSchemaTransactionType;
    status?: PaymentsPostResponsesContentApplicationJsonSchemaStatus;
};
export type PaymentsPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type PaymentsPostRequestBadRequestError = {
    status: number;
    title: string;
    detail?: string;
    type: string;
    code?: number;
    errors?: PaymentsPostResponsesContentApplicationJsonSchemaErrors;
};
export type PaymentsPostRequestUnauthorizedError = {
    status: number;
    title: string;
    detail?: string;
    type: string;
    code?: number;
    errors?: PaymentsPostResponsesContentApplicationJsonSchemaErrors;
};
export type PaymentsPostRequestUnprocessableEntityError = {
    status: number;
    title: string;
    detail?: string;
    type: string;
    code?: number;
    errors?: PaymentsPostResponsesContentApplicationJsonSchemaErrors;
};
export type RawCardCreateParamsType = 'raw_card' | 'tokenized_card' | 'tokenized_paypal_account';
export type RawCardCreateParams = {
    number: string;
    expiration_year: number;
    expiration_month: number;
    verification_value: string;
    cardholder_name: string;
    type: RawCardCreateParamsType;
};
export type TokenizedCardCreateParamsType = 'raw_card' | 'tokenized_card' | 'tokenized_paypal_account';
export type TokenizedCardCreateParams = {
    card_token: string;
    expiration_year: number;
    expiration_month: number;
    verification_value?: string;
    cardholder_name: string;
    type: TokenizedCardCreateParamsType;
    iin?: string;
    brand: string;
};
export type TokenizedPayPalAccountCreateParamsType = 'raw_card' | 'tokenized_card' | 'tokenized_paypal_account';
export type TokenizedPayPalAccountCreateParams = {
    token: string;
    email: string;
    type: TokenizedPayPalAccountCreateParamsType;
};
export type CreateInstrumentRequestInstrument = RawCardCreateParams | TokenizedCardCreateParams | TokenizedPayPalAccountCreateParams;
export type AddressCreateParams = {
    first_name: string;
    last_name?: string;
    email?: string;
    company?: string;
    street_1: string;
    street_2?: string;
    city: string;
    state_or_province_code?: string;
    country_code: string;
    phone?: string;
    postal_code?: string;
};
export type BillingAddressCreateParam = {
    first_name: string;
    last_name?: string;
    email: string;
    company?: string;
    street_1: string;
    street_2?: string;
    city: string;
    state_or_province_code?: string;
    country_code: string;
    phone?: string;
    postal_code?: string;
};
export type CreateInstrumentRequest = {
    payment_method_id: string;
    currency_code: string;
    customer_id: string;
    default_instrument?: boolean;
    instrument: CreateInstrumentRequestInstrument;
    trusted_shipping_addresses?: Array<AddressCreateParams>;
    billing_address: BillingAddressCreateParam;
};
export type BillingAddress = {
    first_name?: string;
    last_name?: string;
    email?: string;
    company?: string;
    street_1?: string;
    street_2?: string;
    city?: string;
    state_or_province_code?: string;
    country_code?: string;
    phone?: string;
    postal_code?: string;
};
export type CreateInstrumentResponseBodyData = {
    customer_id?: string;
    token?: string;
    type?: string;
    is_default?: boolean;
    brand?: string;
    expiry_month?: number;
    expiry_year?: number;
    bin?: string;
    last_4?: string;
    billing_address?: BillingAddress;
    email?: string;
};
export type MetaEmpty = {
    [key: string]: unknown;
};
export type CreateInstrumentResponseBody = {
    data?: CreateInstrumentResponseBodyData;
    meta?: MetaEmpty;
};
export type DetailedError = {
    [key: string]: unknown;
};
export type BaseErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    errors?: DetailedError;
};
export type PaymentsPostData = {
    body?: {
        payment: PaymentsPostRequestBodyContentApplicationJsonSchemaPayment;
    };
    headers: {
        Accept: PaymentsPostParametersAccept;
    };
    path?: never;
    query?: never;
    url: '/stores/{store_hash}/payments';
};
export type PaymentsPostErrors = {
    400: PaymentsPostRequestBadRequestError;
    401: PaymentsPostRequestUnauthorizedError;
    422: PaymentsPostRequestUnprocessableEntityError;
};
export type PaymentsPostError = PaymentsPostErrors[keyof PaymentsPostErrors];
export type PaymentsPostResponses = {
    202: ProcessingPaymentsPostResponse202;
};
export type PaymentsPostResponse = PaymentsPostResponses[keyof PaymentsPostResponses];
export type CreateInstrumentData = {
    body?: CreateInstrumentRequest;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/stores/{store_hash}/stored-instruments';
};
export type CreateInstrumentErrors = {
    401: BaseErrorResponse;
    422: BaseErrorResponse;
};
export type CreateInstrumentError = CreateInstrumentErrors[keyof CreateInstrumentErrors];
export type CreateInstrumentResponses = {
    201: CreateInstrumentResponseBody;
};
export type CreateInstrumentResponse = CreateInstrumentResponses[keyof CreateInstrumentResponses];
