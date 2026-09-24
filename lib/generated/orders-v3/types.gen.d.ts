export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type TransactionEvent = 'purchase' | 'authorization' | 'capture' | 'refund' | 'void' | 'pending' | 'settled';
export type TransactionMethod = 'credit_card' | 'electronic_wallet' | 'gift_certificate' | 'store_credit' | 'apple_pay_card' | 'bigpay_token' | 'apple_pay_token' | 'token' | 'custom' | 'offsite' | 'offline' | 'nonce';
export type TransactionGateway = '2checkout' | 'adyen' | 'amazon' | 'authorizenet' | 'bankdeposit' | 'braintree' | 'cheque' | 'cod' | 'custom' | 'firstdatagge4' | 'giftcertificate' | 'hps' | 'instore' | 'klarna' | 'migs' | 'moneyorder' | 'nmi' | 'paypalexpress' | 'paypalpaymentsprous' | 'plugnpay' | 'qbmsv2' | 'securenet' | 'square' | 'storecredit' | 'stripe' | 'testgateway' | 'usaepay';
export type TransactionStatus = 'ok' | 'error';
export type TransactionOffline = {
    display_name?: string;
};
export type TransactionCustom = {
    payment_method?: string;
};
export type TransactionAvsResult = {
    code?: string;
    message?: string;
    street_match?: string;
    postal_match?: string;
};
export type TransactionCvvResult = {
    code?: string;
    message?: string;
};
export type CreditCardCardType = 'alelo' | 'alia' | 'american_express' | 'cabal' | 'carnet' | 'dankort' | 'diners_club' | 'discover' | 'elo' | 'forbrugsforeningen' | 'jcb' | 'maestro' | 'master' | 'naranja' | 'sodexo' | 'unionpay' | 'visa' | 'vr';
export type CreditCard = {
    card_type?: CreditCardCardType;
    card_iin?: string;
    card_last4?: string;
    card_expiry_month?: number;
    card_expiry_year?: number;
};
export type TransactionGiftCertificateStatus = 'active' | 'pending' | 'disabled' | 'expired';
export type TransactionGiftCertificate = {
    code?: string;
    original_balance?: string;
    starting_balance?: string;
    remaining_balance?: string;
    status?: TransactionGiftCertificateStatus;
};
export type TransactionStoreCredit = {
    remaining_balance?: string;
};
export type TransactionCustomProviderFieldResult = {
    receipt_number?: string | null;
    authorization_code?: string | null;
    fraud_response?: string | null;
    amount_received?: string | null;
};
export type Transaction = {
    event: TransactionEvent;
    method: TransactionMethod;
    amount: string;
    currency: string;
    gateway: TransactionGateway;
    gateway_transaction_id?: string;
    test?: boolean;
    status?: TransactionStatus;
    fraud_review?: boolean;
    reference_transaction_id?: number;
    offline?: TransactionOffline | null;
    custom?: TransactionCustom | null;
    payment_method_id?: string;
    id?: number;
    order_id?: string;
    date_created?: string;
    payment_instrument_token?: string | null;
    provider_instrument_token?: string | null;
    provider_customer_id?: string | null;
    avs_result?: TransactionAvsResult;
    cvv_result?: TransactionCvvResult;
    credit_card?: CreditCard;
    gift_certificate?: TransactionGiftCertificate | null;
    store_credit?: TransactionStoreCredit | null;
    custom_provider_field_result?: TransactionCustomProviderFieldResult | null;
};
export type LinksFull = {
    previous?: string;
    current?: string;
    next?: string;
};
export type PaginationFull = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: LinksFull;
};
export type MetaCollectionFull = {
    pagination?: PaginationFull;
};
export type TransactionsGetOrderTransactionsResponse200 = {
    data?: Array<Transaction>;
    meta?: MetaCollectionFull;
};
export type GetOrderTransactionsRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type GetOrderTransactionsRequestServiceUnavailableError = {
    status?: number;
    title?: string;
    type?: string;
};
export type OrdersMetafieldsGetParametersDirection = 'asc' | 'desc';
export type OrdersMetafieldsGetParametersIncludeFieldsSchemaItems = 'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified';
export type MetafieldBasePermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldBaseResourceType = 'order' | 'brand' | 'product' | 'variant' | 'category';
export type Metafield = {
    permission_set: MetafieldBasePermissionSet;
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    resource_type?: MetafieldBaseResourceType;
    resource_id?: number;
    id?: number;
    date_created?: string;
    date_modified?: string;
    owner_client_id?: string;
};
export type CollectionMetaPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type CollectionMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: CollectionMetaPaginationLinks;
};
export type CollectionMeta = {
    pagination?: CollectionMetaPagination;
};
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type OrdersMetafieldsPostRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type OrdersMetafieldsPostRequestBodyContentApplicationJsonSchemaItems = {
    permission_set: OrdersMetafieldsPostRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description?: string;
    resource_id: number;
};
export type BatchOperationMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionResponsePostPut = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: BatchOperationMeta;
};
export type CreateOrdersMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
export type _Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type WriteCollectionPartialSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionResponsePartialSuccessPostPut = {
    data?: Array<Metafield>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type OrdersMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type OrdersMetafieldsPutRequestBodyContentApplicationJsonSchemaItems = {
    permission_set: OrdersMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description?: string;
    id: number;
};
export type UpdateOrdersMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type DeleteOrdersMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type MetaFieldCollectionResponsePartialSuccessDelete = {
    data?: Array<number>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type OrdersOrderIdMetafieldsGetParametersDirection = 'asc' | 'desc';
export type MetafieldBasePostPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldBasePost = {
    permission_set: MetafieldBasePostPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetaEmptyFull = {
    [key: string]: unknown;
};
export type MetafieldResponse = {
    data?: Metafield;
    meta?: MetaEmptyFull;
};
export type CreateOrderMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type ErrorResponseErrors = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorResponseErrors;
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    errors?: Array<unknown>;
};
export type MetafieldPut = {
    permission_set: MetafieldBasePostPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type UpdateOrderMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type OrdersSettingsGetResponsesContentApplicationJsonSchemaNotificationsOrderPlaced = {
    email_addresses?: Array<string>;
};
export type OrdersSettingsGetResponsesContentApplicationJsonSchemaNotificationsForwardInvoice = {
    email_addresses?: Array<string>;
};
export type OrdersSettingsGetResponsesContentApplicationJsonSchemaNotifications = {
    order_placed?: OrdersSettingsGetResponsesContentApplicationJsonSchemaNotificationsOrderPlaced;
    forward_invoice?: OrdersSettingsGetResponsesContentApplicationJsonSchemaNotificationsForwardInvoice;
};
export type OrderSettingsGetGlobalOrderSettingsResponse200 = {
    notifications?: OrdersSettingsGetResponsesContentApplicationJsonSchemaNotifications;
    meta?: MetaEmptyFull;
};
export type BetaErrorResponseErrors = {
    [key: string]: unknown;
};
export type BetaErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    errors?: BetaErrorResponseErrors;
};
export type ErrorResponse400 = {
    schema?: BetaErrorResponse;
};
export type GlobalOrderSettingsNotificationsOrderPlaced = {
    email_addresses?: Array<string>;
};
export type GlobalOrderSettingsNotificationsForwardInvoice = {
    email_addresses?: Array<string>;
};
export type GlobalOrderSettingsNotifications = {
    order_placed?: GlobalOrderSettingsNotificationsOrderPlaced;
    forward_invoice?: GlobalOrderSettingsNotificationsForwardInvoice;
};
export type GlobalOrderSettings = {
    notifications?: GlobalOrderSettingsNotifications;
};
export type OrdersSettingsPutResponsesContentApplicationJsonSchemaNotificationsOrderPlaced = {
    email_addresses?: Array<string>;
};
export type OrdersSettingsPutResponsesContentApplicationJsonSchemaNotificationsForwardInvoice = {
    email_addresses?: Array<string>;
};
export type OrdersSettingsPutResponsesContentApplicationJsonSchemaNotifications = {
    order_placed?: OrdersSettingsPutResponsesContentApplicationJsonSchemaNotificationsOrderPlaced;
    forward_invoice?: OrdersSettingsPutResponsesContentApplicationJsonSchemaNotificationsForwardInvoice;
};
export type OrderSettingsUpdateGlobalOrderSettingsResponse200 = {
    notifications?: OrdersSettingsPutResponsesContentApplicationJsonSchemaNotifications;
    meta?: MetaEmptyFull;
};
export type ErrorResponse422 = {
    schema?: BetaErrorResponse;
};
export type OrdersSettingsChannelsChannelIdGetResponsesContentApplicationJsonSchemaNotificationsOrderPlaced = {
    email_addresses?: Array<string> | null;
};
export type OrdersSettingsChannelsChannelIdGetResponsesContentApplicationJsonSchemaNotificationsForwardInvoice = {
    email_addresses?: Array<string> | null;
};
export type OrdersSettingsChannelsChannelIdGetResponsesContentApplicationJsonSchemaNotifications = {
    order_placed?: OrdersSettingsChannelsChannelIdGetResponsesContentApplicationJsonSchemaNotificationsOrderPlaced;
    forward_invoice?: OrdersSettingsChannelsChannelIdGetResponsesContentApplicationJsonSchemaNotificationsForwardInvoice;
};
export type OrderSettingsGetChannelOrderSettingsResponse200 = {
    notifications?: OrdersSettingsChannelsChannelIdGetResponsesContentApplicationJsonSchemaNotifications;
    meta?: MetaEmptyFull;
};
export type ChannelOrderSettingsNotificationsOrderPlaced = {
    email_addresses?: Array<string> | null;
};
export type ChannelOrderSettingsNotificationsForwardInvoice = {
    email_addresses?: Array<string> | null;
};
export type ChannelOrderSettingsNotifications = {
    order_placed?: ChannelOrderSettingsNotificationsOrderPlaced;
    forward_invoice?: ChannelOrderSettingsNotificationsForwardInvoice;
};
export type ChannelOrderSettings = {
    notifications?: ChannelOrderSettingsNotifications;
};
export type OrdersSettingsChannelsChannelIdPutResponsesContentApplicationJsonSchemaNotificationsOrderPlaced = {
    email_addresses?: Array<string> | null;
};
export type OrdersSettingsChannelsChannelIdPutResponsesContentApplicationJsonSchemaNotificationsForwardInvoice = {
    email_addresses?: Array<string> | null;
};
export type OrdersSettingsChannelsChannelIdPutResponsesContentApplicationJsonSchemaNotifications = {
    order_placed?: OrdersSettingsChannelsChannelIdPutResponsesContentApplicationJsonSchemaNotificationsOrderPlaced;
    forward_invoice?: OrdersSettingsChannelsChannelIdPutResponsesContentApplicationJsonSchemaNotificationsForwardInvoice;
};
export type OrderSettingsUpdateChannelOrderSettingsResponse200 = {
    notifications?: OrdersSettingsChannelsChannelIdPutResponsesContentApplicationJsonSchemaNotifications;
    meta?: MetaEmptyFull;
};
export type PaymentActionsCaptureOrderPaymentResponse201 = {
    [key: string]: unknown;
};
export type ErrorBase = {
    status?: number;
    title?: string;
    type?: string;
};
export type ErrorDetailedFullErrors = {
    [key: string]: unknown;
};
export type ErrorDetailedFull = {
    errors?: ErrorDetailedFullErrors;
};
export type PaymentActionsVoidOrderPaymentResponse201 = {
    [key: string]: unknown;
};
export type QuantityBoundItemItemType = 'PRODUCT' | 'GIFT_WRAPPING';
export type RefundItemAdjustment = {
    amount?: string;
    description?: string;
};
export type QuantityBoundItem = {
    item_type: QuantityBoundItemItemType;
    item_id: number;
    adjustments?: Array<RefundItemAdjustment>;
    quantity: number;
    reason?: string;
};
export type AmountBoundItemItemType = 'ORDER' | 'SHIPPING' | 'HANDLING' | 'TAX' | 'FEE';
export type Amount = string;
export type AmountBoundItem = {
    item_type: AmountBoundItemItemType;
    item_id: number;
    amount: Amount;
    reason?: string;
};
export type TaxExemptItemItemType = 'ORDER';
export type TaxExemptItem = {
    item_type?: TaxExemptItemItemType;
    item_id?: number;
    amount?: Amount;
    reason?: string;
};
export type FeeItemItemType = 'FEE';
export type FeeItem = {
    item_type?: FeeItemItemType;
    item_id?: number;
    amount?: Amount;
    reason?: string;
};
export type ItemsRefund = QuantityBoundItem | AmountBoundItem | TaxExemptItem | FeeItem;
export type RefundQuoteItemsRefund = {
    items: Array<ItemsRefund>;
};
export type TaxAdjustmentAmount = string;
export type RefundQuoteTaxAdjustmentAmount = {
    tax_adjustment_amount: TaxAdjustmentAmount;
};
export type RefundQuotePost = RefundQuoteItemsRefund | RefundQuoteTaxAdjustmentAmount;
export type AdjustmentAmount = string;
export type PaymentOption = {
    provider_id?: string;
    provider_description?: string;
    amount?: number;
    offline?: boolean;
    offline_provider?: boolean;
    offline_reason?: string;
};
export type RefundMethod = Array<PaymentOption>;
export type RefundQuoteFull = {
    order_id?: number;
    total_refund_amount?: Amount;
    total_refund_tax_amount?: number;
    order_level_refund_amount?: number;
    rounding?: number;
    adjustment?: AdjustmentAmount;
    tax_inclusive?: boolean;
    refund_methods?: Array<RefundMethod>;
};
export type PaymentActionsCreateOrderRefundQuotesResponse200 = {
    data?: RefundQuoteFull;
    meta?: MetaEmptyFull;
};
export type RefundItemItemType = 'PRODUCT' | 'GIFT_WRAPPING' | 'SHIPPING' | 'HANDLING' | 'ORDER' | 'FEE';
export type RefundItem = {
    item_type?: RefundItemItemType;
    item_id?: number;
    reason?: string;
    quantity?: number;
    adjustments?: Array<RefundItemAdjustment>;
    requested_amount?: Amount;
};
export type RefundPayment = {
    id?: number;
    provider_id?: string;
    amount?: Amount;
    offline?: boolean;
    is_declined?: boolean;
    declined_message?: string;
    transaction_id?: string;
};
export type Refund = {
    id?: number;
    order_id?: number;
    user_id?: number;
    created?: string;
    reason?: string;
    total_amount?: Amount;
    total_tax?: number;
    uses_merchant_override_values?: boolean;
    items?: Array<RefundItem>;
    payments?: Array<RefundPayment>;
};
export type PaymentActionsGetOrderRefundsResponse200 = {
    data?: Array<Refund>;
    meta?: MetaEmptyFull;
};
export type PaymentRequest = {
    provider_id?: string;
    amount?: number;
    offline?: boolean;
};
export type MerchantOverride = {
    total_amount: string;
    total_tax: number;
};
export type RefundRequestPostItems = {
    items: Array<ItemsRefund>;
    payments: Array<PaymentRequest>;
    merchant_calculated_override?: MerchantOverride;
};
export type RefundRequestPostTaxAdjustmentAmount = {
    tax_adjustment_amount: TaxAdjustmentAmount;
    merchant_calculated_override?: MerchantOverride;
};
export type RefundRequestPost = RefundRequestPostItems | RefundRequestPostTaxAdjustmentAmount;
export type PaymentActionsCreateOrderRefundResponse200 = {
    data?: Refund;
    meta?: MetaEmptyFull;
};
export type CreateOrderRefundRequestUnprocessableEntityError = {
    data?: Array<ErrorResponse>;
};
export type FailedQuoteError = {
    order_id?: number;
    status?: number;
    error?: string;
};
export type MetaMetaLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type MetaMeta = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: MetaMetaLinks;
};
export type Meta = {
    meta?: MetaMeta;
};
export type CreateOrderRefundRequestServiceUnavailableError = {
    data?: Array<FailedQuoteError>;
    meta?: Meta;
};
export type RefundIdGetDataPaymentsItems = {
    id?: number;
    provider_id?: string;
    amount?: number;
    offline?: boolean;
    is_declined?: boolean;
    declined_message?: string;
};
export type RefundIdGetDataItemsItemsItemType = 'PRODUCT' | 'GIFT_WRAPPING' | 'SHIPPING' | 'HANDLING' | 'ORDER' | 'FEE';
export type RefundIdGetDataItemsItems = {
    item_type?: RefundIdGetDataItemsItemsItemType;
    item_id?: number;
    quantity?: number;
    requested_amount?: string | null;
    reason?: string;
};
export type RefundIdGetData = {
    id?: number;
    order_id?: number;
    user_id?: number;
    created?: string;
    reason?: string;
    total_amount?: number;
    total_tax?: number;
    uses_merchant_override_values?: boolean;
    payments?: Array<RefundIdGetDataPaymentsItems>;
    items?: Array<RefundIdGetDataItemsItems>;
};
export type RefundIdGet = {
    data?: RefundIdGetData;
    meta?: MetaEmptyFull;
};
export type PaymentActionsGetOrdersRefundsResponse200 = {
    data?: Array<Refund>;
    meta?: MetaEmptyFull;
};
export type GetOrderTransactionsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/transactions';
};
export type GetOrderTransactionsErrors = {
    404: GetOrderTransactionsRequestNotFoundError;
    503: GetOrderTransactionsRequestServiceUnavailableError;
};
export type GetOrderTransactionsError = GetOrderTransactionsErrors[keyof GetOrderTransactionsErrors];
export type GetOrderTransactionsResponses = {
    200: TransactionsGetOrderTransactionsResponse200;
};
export type GetOrderTransactionsResponse = GetOrderTransactionsResponses[keyof GetOrderTransactionsResponses];
export type DeleteOrdersMetafieldsData = {
    body?: Array<number>;
    path?: never;
    query?: never;
    url: '/orders/metafields';
};
export type DeleteOrdersMetafieldsErrors = {
    400: DeleteOrdersMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessDelete;
};
export type DeleteOrdersMetafieldsError = DeleteOrdersMetafieldsErrors[keyof DeleteOrdersMetafieldsErrors];
export type DeleteOrdersMetafieldsResponses = {
    200: MetaFieldCollectionDeleteResponseSuccess;
};
export type DeleteOrdersMetafieldsResponse = DeleteOrdersMetafieldsResponses[keyof DeleteOrdersMetafieldsResponses];
export type GetOrdersMetafieldsData = {
    body?: never;
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        key?: string;
        'key:in'?: Array<string>;
        namespace?: string;
        'namespace:in'?: Array<string>;
        direction?: OrdersMetafieldsGetParametersDirection;
        include_fields?: Array<OrdersMetafieldsGetParametersIncludeFieldsSchemaItems>;
        date_created?: string;
        date_modified?: string;
        'date_created:min'?: string;
        'date_created:max'?: string;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
    };
    url: '/orders/metafields';
};
export type GetOrdersMetafieldsResponses = {
    200: MetaFieldCollectionResponse;
};
export type GetOrdersMetafieldsResponse = GetOrdersMetafieldsResponses[keyof GetOrdersMetafieldsResponses];
export type CreateOrdersMetafieldsData = {
    body?: Array<OrdersMetafieldsPostRequestBodyContentApplicationJsonSchemaItems>;
    path?: never;
    query?: never;
    url: '/orders/metafields';
};
export type CreateOrdersMetafieldsErrors = {
    400: CreateOrdersMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateOrdersMetafieldsError = CreateOrdersMetafieldsErrors[keyof CreateOrdersMetafieldsErrors];
export type CreateOrdersMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type CreateOrdersMetafieldsResponse = CreateOrdersMetafieldsResponses[keyof CreateOrdersMetafieldsResponses];
export type UpdateOrdersMetafieldsData = {
    body?: Array<OrdersMetafieldsPutRequestBodyContentApplicationJsonSchemaItems>;
    path?: never;
    query?: never;
    url: '/orders/metafields';
};
export type UpdateOrdersMetafieldsErrors = {
    400: UpdateOrdersMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateOrdersMetafieldsError = UpdateOrdersMetafieldsErrors[keyof UpdateOrdersMetafieldsErrors];
export type UpdateOrdersMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type UpdateOrdersMetafieldsResponse = UpdateOrdersMetafieldsResponses[keyof UpdateOrdersMetafieldsResponses];
export type GetOrderMetafieldsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
        key?: string;
        namespace?: string;
        direction?: OrdersOrderIdMetafieldsGetParametersDirection;
    };
    url: '/orders/{order_id}/metafields';
};
export type GetOrderMetafieldsResponses = {
    200: MetaFieldCollectionResponse;
};
export type GetOrderMetafieldsResponse = GetOrderMetafieldsResponses[keyof GetOrderMetafieldsResponses];
export type CreateOrderMetafieldData = {
    body?: MetafieldBasePost;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/metafields';
};
export type CreateOrderMetafieldErrors = {
    400: CreateOrderMetafieldRequestBadRequestError;
    409: ErrorResponse;
    422: ErrorResponse;
};
export type CreateOrderMetafieldError = CreateOrderMetafieldErrors[keyof CreateOrderMetafieldErrors];
export type CreateOrderMetafieldResponses = {
    200: MetafieldResponse;
};
export type CreateOrderMetafieldResponse = CreateOrderMetafieldResponses[keyof CreateOrderMetafieldResponses];
export type DeleteOrderMetafieldData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
        metafield_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/metafields/{metafield_id}';
};
export type DeleteOrderMetafieldErrors = {
    404: NotFound;
};
export type DeleteOrderMetafieldError = DeleteOrderMetafieldErrors[keyof DeleteOrderMetafieldErrors];
export type DeleteOrderMetafieldResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteOrderMetafieldResponse = DeleteOrderMetafieldResponses[keyof DeleteOrderMetafieldResponses];
export type GetOrderMetafieldData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
        metafield_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/metafields/{metafield_id}';
};
export type GetOrderMetafieldErrors = {
    404: NotFound;
};
export type GetOrderMetafieldError = GetOrderMetafieldErrors[keyof GetOrderMetafieldErrors];
export type GetOrderMetafieldResponses = {
    200: MetafieldResponse;
};
export type GetOrderMetafieldResponse = GetOrderMetafieldResponses[keyof GetOrderMetafieldResponses];
export type UpdateOrderMetafieldData = {
    body?: MetafieldPut;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
        metafield_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/metafields/{metafield_id}';
};
export type UpdateOrderMetafieldErrors = {
    400: UpdateOrderMetafieldRequestBadRequestError;
    404: NotFound;
};
export type UpdateOrderMetafieldError = UpdateOrderMetafieldErrors[keyof UpdateOrderMetafieldErrors];
export type UpdateOrderMetafieldResponses = {
    200: MetafieldResponse;
};
export type UpdateOrderMetafieldResponse = UpdateOrderMetafieldResponses[keyof UpdateOrderMetafieldResponses];
export type GetGlobalOrderSettingsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/orders/settings';
};
export type GetGlobalOrderSettingsErrors = {
    400: ErrorResponse400;
};
export type GetGlobalOrderSettingsError = GetGlobalOrderSettingsErrors[keyof GetGlobalOrderSettingsErrors];
export type GetGlobalOrderSettingsResponses = {
    200: OrderSettingsGetGlobalOrderSettingsResponse200;
};
export type GetGlobalOrderSettingsResponse = GetGlobalOrderSettingsResponses[keyof GetGlobalOrderSettingsResponses];
export type UpdateGlobalOrderSettingsData = {
    body?: GlobalOrderSettings;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/orders/settings';
};
export type UpdateGlobalOrderSettingsErrors = {
    400: ErrorResponse400;
    422: ErrorResponse422;
};
export type UpdateGlobalOrderSettingsError = UpdateGlobalOrderSettingsErrors[keyof UpdateGlobalOrderSettingsErrors];
export type UpdateGlobalOrderSettingsResponses = {
    200: OrderSettingsUpdateGlobalOrderSettingsResponse200;
};
export type UpdateGlobalOrderSettingsResponse = UpdateGlobalOrderSettingsResponses[keyof UpdateGlobalOrderSettingsResponses];
export type GetChannelOrderSettingsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: string;
    };
    query?: never;
    url: '/orders/settings/channels/{channel_id}';
};
export type GetChannelOrderSettingsErrors = {
    400: ErrorResponse400;
};
export type GetChannelOrderSettingsError = GetChannelOrderSettingsErrors[keyof GetChannelOrderSettingsErrors];
export type GetChannelOrderSettingsResponses = {
    200: OrderSettingsGetChannelOrderSettingsResponse200;
};
export type GetChannelOrderSettingsResponse = GetChannelOrderSettingsResponses[keyof GetChannelOrderSettingsResponses];
export type UpdateChannelOrderSettingsData = {
    body?: ChannelOrderSettings;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: string;
    };
    query?: never;
    url: '/orders/settings/channels/{channel_id}';
};
export type UpdateChannelOrderSettingsErrors = {
    400: ErrorResponse400;
    422: ErrorResponse422;
};
export type UpdateChannelOrderSettingsError = UpdateChannelOrderSettingsErrors[keyof UpdateChannelOrderSettingsErrors];
export type UpdateChannelOrderSettingsResponses = {
    200: OrderSettingsUpdateChannelOrderSettingsResponse200;
};
export type UpdateChannelOrderSettingsResponse = UpdateChannelOrderSettingsResponses[keyof UpdateChannelOrderSettingsResponses];
export type CaptureOrderPaymentData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/payment_actions/capture';
};
export type CaptureOrderPaymentErrors = {
    400: ErrorBase;
    404: ErrorBase;
    422: ErrorResponse;
    502: ErrorBase;
    503: ErrorBase;
    504: ErrorDetailedFull;
};
export type CaptureOrderPaymentError = CaptureOrderPaymentErrors[keyof CaptureOrderPaymentErrors];
export type CaptureOrderPaymentResponses = {
    201: PaymentActionsCaptureOrderPaymentResponse201;
};
export type CaptureOrderPaymentResponse = CaptureOrderPaymentResponses[keyof CaptureOrderPaymentResponses];
export type VoidOrderPaymentData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/payment_actions/void';
};
export type VoidOrderPaymentErrors = {
    400: ErrorBase;
    404: ErrorBase;
    422: ErrorResponse;
    502: ErrorBase;
    503: ErrorBase;
    504: ErrorDetailedFull;
};
export type VoidOrderPaymentError = VoidOrderPaymentErrors[keyof VoidOrderPaymentErrors];
export type VoidOrderPaymentResponses = {
    201: PaymentActionsVoidOrderPaymentResponse201;
};
export type VoidOrderPaymentResponse = VoidOrderPaymentResponses[keyof VoidOrderPaymentResponses];
export type CreateOrderRefundQuotesData = {
    body?: RefundQuotePost;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/payment_actions/refund_quotes';
};
export type CreateOrderRefundQuotesErrors = {
    422: ErrorResponse;
};
export type CreateOrderRefundQuotesError = CreateOrderRefundQuotesErrors[keyof CreateOrderRefundQuotesErrors];
export type CreateOrderRefundQuotesResponses = {
    200: PaymentActionsCreateOrderRefundQuotesResponse200;
};
export type CreateOrderRefundQuotesResponse = CreateOrderRefundQuotesResponses[keyof CreateOrderRefundQuotesResponses];
export type GetOrderRefundsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        transaction_id?: string;
    };
    url: '/orders/{order_id}/payment_actions/refunds';
};
export type GetOrderRefundsResponses = {
    200: PaymentActionsGetOrderRefundsResponse200;
};
export type GetOrderRefundsResponse = GetOrderRefundsResponses[keyof GetOrderRefundsResponses];
export type CreateOrderRefundData = {
    body?: RefundRequestPost;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        transaction_id?: string;
    };
    url: '/orders/{order_id}/payment_actions/refunds';
};
export type CreateOrderRefundErrors = {
    422: CreateOrderRefundRequestUnprocessableEntityError;
    503: CreateOrderRefundRequestServiceUnavailableError;
};
export type CreateOrderRefundError = CreateOrderRefundErrors[keyof CreateOrderRefundErrors];
export type CreateOrderRefundResponses = {
    200: PaymentActionsCreateOrderRefundResponse200;
};
export type CreateOrderRefundResponse = CreateOrderRefundResponses[keyof CreateOrderRefundResponses];
export type GetOrderRefundByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
        refund_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/payment_actions/refunds/{refund_id}';
};
export type GetOrderRefundByIdErrors = {
    422: ErrorResponse;
};
export type GetOrderRefundByIdError = GetOrderRefundByIdErrors[keyof GetOrderRefundByIdErrors];
export type GetOrderRefundByIdResponses = {
    200: RefundIdGet;
};
export type GetOrderRefundByIdResponse = GetOrderRefundByIdResponses[keyof GetOrderRefundByIdResponses];
export type GetOrderRefundData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        refund_id: number;
    };
    query?: never;
    url: '/orders/payment_actions/refunds/{refund_id}';
};
export type GetOrderRefundResponses = {
    200: RefundIdGet;
};
export type GetOrderRefundResponse = GetOrderRefundResponses[keyof GetOrderRefundResponses];
export type GetOrdersRefundsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'order_id:in'?: Array<number>;
        'id:in'?: Array<number>;
        'created:min'?: string;
        'created:max'?: string;
        transaction_id?: string;
        page?: number;
        limit?: number;
    };
    url: '/orders/payment_actions/refunds';
};
export type GetOrdersRefundsResponses = {
    200: PaymentActionsGetOrdersRefundsResponse200;
};
export type GetOrdersRefundsResponse = GetOrdersRefundsResponses[keyof GetOrdersRefundsResponses];
