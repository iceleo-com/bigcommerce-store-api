export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type Order = {
    id: number;
    is_recurring?: boolean;
};
export type PaymentsAccessTokensPostResponsesContentApplicationJsonSchemaData = {
    id: string;
};
export type PaymentsAccessTokensPostResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type TokensCreatePaymentAccessTokenResponse201 = {
    data?: PaymentsAccessTokensPostResponsesContentApplicationJsonSchemaData;
    meta?: PaymentsAccessTokensPostResponsesContentApplicationJsonSchemaMeta;
};
export type PaymentsAccessTokensPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreatePaymentAccessTokenRequestBadRequestError = {
    status: number;
    title: string;
    detail?: string;
    type: string;
    code?: number;
    errors?: PaymentsAccessTokensPostResponsesContentApplicationJsonSchemaErrors;
};
export type CreatePaymentAccessTokenRequestUnauthorizedError = {
    status: number;
    title: string;
    detail?: string;
    type: string;
    code?: number;
    errors?: PaymentsAccessTokensPostResponsesContentApplicationJsonSchemaErrors;
};
export type CreatePaymentAccessTokenRequestNotFoundError = {
    status: number;
    title: string;
    detail?: string;
    type: string;
    code?: number;
    errors?: PaymentsAccessTokensPostResponsesContentApplicationJsonSchemaErrors;
};
export type CreatePaymentAccessTokenRequestConflictError = {
    status: number;
    title: string;
    detail?: string;
    type: string;
    code?: number;
    errors?: PaymentsAccessTokensPostResponsesContentApplicationJsonSchemaErrors;
};
export type CreatePaymentAccessTokenRequestUnprocessableEntityError = {
    status: number;
    title: string;
    detail?: string;
    type: string;
    code?: number;
    errors?: PaymentsAccessTokensPostResponsesContentApplicationJsonSchemaErrors;
};
export type CreateTokenData = {
    access_token?: string;
    expires_at?: number;
};
export type MetaEmpty = {
    [key: string]: unknown;
};
export type CreateTokenResponse = {
    data?: CreateTokenData;
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
export type BillingAddress = {
    first_name?: string;
    last_name?: string;
    email?: string;
    company?: string;
    address1?: string;
    address2?: string;
    city?: string;
    state_or_province?: string;
    state_or_province_code?: string;
    country_code?: string;
    phone?: string;
    postal_code?: string;
};
export type CardInstrument = {
    customer_id?: number;
    token?: string;
    type?: string;
    is_default?: boolean;
    brand?: string;
    expiry_month?: number;
    expiry_year?: number;
    iin?: string;
    last_4?: string;
    billing_address?: BillingAddress;
};
export type PayPalAccountInstrument = {
    customer_id?: number;
    token?: string;
    type?: string;
    is_default?: boolean;
    email?: string;
};
export type BankAccountInstrument = {
    customer_id?: number;
    token?: string;
    type?: string;
    is_default?: boolean;
    issuer?: string;
    masked_account_number?: string;
};
export type GetStoredInstrumentsResponseDataItems = CardInstrument | PayPalAccountInstrument | BankAccountInstrument;
export type Links = {
    previous?: string;
    current?: string;
    next?: string;
};
export type Pagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: Links;
};
export type CursorPagination = {
    count?: number;
    per_page?: number;
    start_cursor?: string;
    end_cursor?: string;
    links?: Links;
};
export type Meta = {
    pagination?: Pagination;
    cursor_pagination?: CursorPagination;
};
export type GetStoredInstrumentsResponse = {
    data?: Array<GetStoredInstrumentsResponseDataItems>;
    meta?: Meta;
};
export type CreditCardInstrumentImportParam = {
    vault_token?: string;
    provider_customer_id?: string;
    type?: string;
    brand?: string;
    expiry_year?: number;
    expiry_month?: number;
    last_4?: string;
    iin?: string;
};
export type PaypalAccountInstrumentImportParam = {
    vault_token?: string;
    provider_customer_id?: string;
    type?: string;
    email?: string;
};
export type BankAccountInstrumentImportParam = {
    vault_token?: string;
    provider_customer_id?: string;
    type?: string;
    issuer?: string;
    masked_account_number?: string;
};
export type ImportRequestBodyInstrument = CreditCardInstrumentImportParam | PaypalAccountInstrumentImportParam | BankAccountInstrumentImportParam;
export type BillingAddressCreateParams = {
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
export type ImportRequestBody = {
    payment_method_id: string;
    currency_code: string;
    customer_id: number;
    instrument: ImportRequestBodyInstrument;
    billing_address: BillingAddressCreateParams;
    trusted_shipping_addresses?: Array<BillingAddressCreateParams>;
    default_instrument?: boolean;
};
export type PaymentsStoredInstrumentsPostResponsesContentApplicationJsonSchemaDataItems = CardInstrument | PayPalAccountInstrument;
export type MetaBulk = {
    total?: number;
    success?: number;
    failed?: number;
};
export type ManageInstrumentsBulkImportInstrumentsResponse200 = {
    data?: Array<PaymentsStoredInstrumentsPostResponsesContentApplicationJsonSchemaDataItems>;
    errors?: Array<BaseErrorResponse>;
    meta?: MetaBulk;
};
export type BulkImportInstrumentsRequestUnprocessableEntityError = {
    data?: Array<PaymentsStoredInstrumentsPostResponsesContentApplicationJsonSchemaDataItems>;
    errors?: Array<BaseErrorResponse>;
    meta?: MetaBulk;
};
export type UpdateRequestBody = {
    token: string;
    billing_address?: BillingAddressCreateParams;
    trusted_shipping_addresses?: Array<BillingAddressCreateParams>;
    make_default?: boolean;
};
export type PaymentsStoredInstrumentsPutResponsesContentApplicationJsonSchemaData = CardInstrument | PayPalAccountInstrument;
export type ManageInstrumentsUpdateInstrumentResponse200 = {
    data?: PaymentsStoredInstrumentsPutResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmpty;
};
export type BulkDeleteInstrumentsRequestNotFoundError = {
    errors?: Array<BaseErrorResponse>;
    meta?: MetaBulk;
};
export type AvailablePaymentMethodSupportedInstrumentsItems = 'raw_card' | 'tokenized_card' | 'tokenized_paypal_account';
export type AvailablePaymentMethod = {
    method_id?: string;
    test_mode?: boolean;
    supported_instruments?: Array<AvailablePaymentMethodSupportedInstrumentsItems>;
};
export type GetAvailableMethodsResponse = {
    data?: Array<AvailablePaymentMethod>;
    meta?: MetaEmpty;
};
export type CreatePaymentAccessTokenData = {
    body?: {
        order: Order;
    };
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/payments/access_tokens';
};
export type CreatePaymentAccessTokenErrors = {
    400: CreatePaymentAccessTokenRequestBadRequestError;
    401: CreatePaymentAccessTokenRequestUnauthorizedError;
    404: CreatePaymentAccessTokenRequestNotFoundError;
    409: CreatePaymentAccessTokenRequestConflictError;
    422: CreatePaymentAccessTokenRequestUnprocessableEntityError;
};
export type CreatePaymentAccessTokenError = CreatePaymentAccessTokenErrors[keyof CreatePaymentAccessTokenErrors];
export type CreatePaymentAccessTokenResponses = {
    201: TokensCreatePaymentAccessTokenResponse201;
};
export type CreatePaymentAccessTokenResponse = CreatePaymentAccessTokenResponses[keyof CreatePaymentAccessTokenResponses];
export type CreateTokenData2 = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/payments/stored-instruments/access-tokens';
};
export type CreateTokenErrors = {
    401: BaseErrorResponse;
};
export type CreateTokenError = CreateTokenErrors[keyof CreateTokenErrors];
export type CreateTokenResponses = {
    201: CreateTokenResponse;
};
export type CreateTokenResponse2 = CreateTokenResponses[keyof CreateTokenResponses];
export type BulkDeleteInstrumentsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        'token:in': string;
    };
    url: '/payments/stored-instruments';
};
export type BulkDeleteInstrumentsErrors = {
    401: BaseErrorResponse;
    404: BulkDeleteInstrumentsRequestNotFoundError;
};
export type BulkDeleteInstrumentsError = BulkDeleteInstrumentsErrors[keyof BulkDeleteInstrumentsErrors];
export type BulkDeleteInstrumentsResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type BulkDeleteInstrumentsResponse = BulkDeleteInstrumentsResponses[keyof BulkDeleteInstrumentsResponses];
export type ListInstrumentsForStoreData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        after?: string;
        before?: string;
    };
    url: '/payments/stored-instruments';
};
export type ListInstrumentsForStoreErrors = {
    401: BaseErrorResponse;
};
export type ListInstrumentsForStoreError = ListInstrumentsForStoreErrors[keyof ListInstrumentsForStoreErrors];
export type ListInstrumentsForStoreResponses = {
    200: GetStoredInstrumentsResponse;
};
export type ListInstrumentsForStoreResponse = ListInstrumentsForStoreResponses[keyof ListInstrumentsForStoreResponses];
export type BulkImportInstrumentsData = {
    body?: Array<ImportRequestBody>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/payments/stored-instruments';
};
export type BulkImportInstrumentsErrors = {
    401: BaseErrorResponse;
    422: BulkImportInstrumentsRequestUnprocessableEntityError;
};
export type BulkImportInstrumentsError = BulkImportInstrumentsErrors[keyof BulkImportInstrumentsErrors];
export type BulkImportInstrumentsResponses = {
    200: ManageInstrumentsBulkImportInstrumentsResponse200;
};
export type BulkImportInstrumentsResponse = BulkImportInstrumentsResponses[keyof BulkImportInstrumentsResponses];
export type UpdateInstrumentData = {
    body?: UpdateRequestBody;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/payments/stored-instruments';
};
export type UpdateInstrumentErrors = {
    401: BaseErrorResponse;
    404: BaseErrorResponse;
    422: BaseErrorResponse;
};
export type UpdateInstrumentError = UpdateInstrumentErrors[keyof UpdateInstrumentErrors];
export type UpdateInstrumentResponses = {
    200: ManageInstrumentsUpdateInstrumentResponse200;
};
export type UpdateInstrumentResponse = UpdateInstrumentResponses[keyof UpdateInstrumentResponses];
export type UnvaultInstrumentData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        instrument_token: string;
    };
    query?: never;
    url: '/payments/stored-instruments/{instrument_token}';
};
export type UnvaultInstrumentErrors = {
    401: BaseErrorResponse;
    404: BaseErrorResponse;
    422: BaseErrorResponse;
};
export type UnvaultInstrumentError = UnvaultInstrumentErrors[keyof UnvaultInstrumentErrors];
export type UnvaultInstrumentResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type UnvaultInstrumentResponse = UnvaultInstrumentResponses[keyof UnvaultInstrumentResponses];
export type ListMethodsForStoreData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        currency_code: string;
    };
    url: '/payments/stored-instruments/methods';
};
export type ListMethodsForStoreErrors = {
    401: BaseErrorResponse;
};
export type ListMethodsForStoreError = ListMethodsForStoreErrors[keyof ListMethodsForStoreErrors];
export type ListMethodsForStoreResponses = {
    200: GetAvailableMethodsResponse;
};
export type ListMethodsForStoreResponse = ListMethodsForStoreResponses[keyof ListMethodsForStoreResponses];
