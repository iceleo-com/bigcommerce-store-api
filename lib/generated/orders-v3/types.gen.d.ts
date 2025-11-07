export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type GetReturnsSettings = {
    reasons?: Array<Reason>;
    preferred_outcomes?: Array<PreferredOutcome>;
};
export type Reason = {
    id?: number;
    label?: string;
    is_archived?: boolean;
};
export type PreferredOutcome = {
    id?: number;
    label?: string;
    is_archived?: boolean;
};
export type CreateReturnRequest = {
    items: Array<CreateReturnRequestItem>;
    comment?: string;
};
export type CreateReturnRequestItem = {
    reference_id: ItemReferenceId;
    quantity: number;
    preferred_outcome_id: number;
    reason_id: number;
};
export type CreateReturn = ReturnFull;
export type ReturnFull = {
    items?: Array<ReturnItem>;
    total?: string;
    currency?: string;
    customer?: {
        id?: number;
        email?: string;
    };
    comment?: string;
    status?: StatusFull;
    date_modified?: string;
};
export type ReturnItem = {
    id?: number;
    reference_id?: ItemReferenceId;
    quantity?: number;
    total?: string;
    preferred_outcome?: {
        id?: number;
        label?: string;
    };
    reason?: {
        id?: number;
        label?: string;
    };
    received_state?: {
        received_quantity?: number;
        pending_quantity?: number;
    };
    review_state?: {
        approved_quantity?: number;
        pending_quantity?: number;
        rejected_quantity?: number;
    };
};
export type StatusUpdateFull = {
    return_id?: number;
    new_status?: StatusFull;
};
export type StatusFull = 'CLOSED' | 'OPEN' | 'REMOVED';
export type UpdateReturnStatusesRequest = Array<StatusUpdateFull>;
export type UpdateReturnStatuses = Array<{
    id?: number;
    status?: StatusFull;
}>;
export type Problem = {
    status?: number;
    title?: string;
    type?: string;
};
export type BatchOperationMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type Pagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: {
        previous?: string;
        current?: string;
        next?: string;
    };
};
export type ReceivedItemsPut = Array<{
    item_id: number;
    received_quantity: number;
    pending_quantity: number;
}>;
export type ReceivedItemsBase = Array<{
    item_id?: number;
    received_quantity?: number;
    pending_quantity?: number;
}>;
export type ReviewedItemsPut = Array<{
    item_id: number;
    authorized_quantity: number;
    rejected_quantity: number;
    pending_quantity: number;
}>;
export type ReviewedItemsBase = Array<{
    item_id?: number;
    authorized_quantity?: number;
    rejected_quantity?: number;
    pending_quantity?: number;
}>;
export type GetReturnableItems = Array<{
    reference_id?: ItemReferenceId;
    name?: string;
    returnable_quantity?: number;
    total?: string;
    options?: Array<{
        display_name?: string;
        display_value?: string;
    }>;
}>;
export type ItemReferenceId = {
    type: 'ORDER_PRODUCT';
    value: string;
};
export type CollectionMeta = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
        links?: {
            previous?: string;
            current?: string;
            next?: string;
        };
    };
};
export type Meta = {
    meta?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
        links?: {
            previous?: string;
            current?: string;
            next?: string;
        };
    };
};
export type ErrorResponse = ErrorBase & {
    errors?: {
        [key: string]: unknown;
    };
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type TransactionPost = {
    event: 'purchase' | 'authorization' | 'capture' | 'refund' | 'void' | 'pending' | 'settled';
    method: 'credit_card' | 'electronic_wallet' | 'gift_certificate' | 'store_credit' | 'apple_pay_card' | 'apple_pay_token' | 'bigpay_token' | 'token' | 'custom' | 'offsite' | 'offline' | 'nonce';
    amount: number;
    currency: string;
    gateway: '2checkout' | 'adyen' | 'amazon' | 'authorizenet' | 'bankdeposit' | 'braintree' | 'cheque' | 'cod' | 'custom' | 'firstdatagge4' | 'giftcertificate' | 'hps' | 'instore' | 'klarna' | 'migs' | 'moneyorder' | 'nmi' | 'paypalexpress' | 'paypalpaymentsprous' | 'paypalpaymentsprouk' | 'plugnpay' | 'qbmsv2' | 'securenet' | 'square' | 'storecredit' | 'stripe' | 'testgateway' | 'usaepay';
    gateway_transaction_id?: string;
    date_created?: string;
    test?: boolean;
    status?: 'ok' | 'error';
    fraud_review?: boolean;
    reference_transaction_id?: number;
    offline?: Offline;
    custom?: Custom;
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    errors?: Array<unknown>;
};
export type Transaction = {
    event: 'purchase' | 'authorization' | 'capture' | 'refund' | 'void' | 'pending' | 'settled';
    method: 'credit_card' | 'electronic_wallet' | 'gift_certificate' | 'store_credit' | 'apple_pay_card' | 'bigpay_token' | 'apple_pay_token' | 'token' | 'custom' | 'offsite' | 'offline' | 'nonce';
    amount: number;
    currency: string;
    gateway: '2checkout' | 'adyen' | 'amazon' | 'authorizenet' | 'bankdeposit' | 'braintree' | 'cheque' | 'cod' | 'custom' | 'firstdatagge4' | 'giftcertificate' | 'hps' | 'instore' | 'klarna' | 'migs' | 'moneyorder' | 'nmi' | 'paypalexpress' | 'paypalpaymentsprous' | 'paypalpaymentsprouk' | 'plugnpay' | 'qbmsv2' | 'securenet' | 'square' | 'storecredit' | 'stripe' | 'testgateway' | 'usaepay';
    gateway_transaction_id?: string;
    test?: boolean;
    status?: 'ok' | 'error';
    fraud_review?: boolean;
    reference_transaction_id?: number;
    offline?: {
        display_name?: string;
    } | null;
    custom?: {
        payment_method?: string;
    } | null;
    payment_method_id?: string;
} & {
    id?: number;
    order_id?: string;
    date_created?: string;
    payment_instrument_token?: string | null;
    avs_result?: {
        code?: string;
        message?: string;
        street_match?: string;
        postal_match?: string;
    };
    cvv_result?: {
        code?: string;
        message?: string;
    };
    credit_card?: CreditCard;
    gift_certificate?: {
        code?: string;
        original_balance?: number;
        starting_balance?: number;
        remaining_balance?: number;
        status?: 'active' | 'pending' | 'disabled' | 'expired';
    } | null;
    store_credit?: {
        remaining_balance?: number;
    } | null;
    custom_provider_field_result?: {
        receipt_number?: string | null;
        authorization_code?: string | null;
        fraud_response?: string | null;
        amount_received?: number | null;
    } | null;
};
export type CreditCard = {
    card_type?: 'alelo' | 'alia' | 'american_express' | 'cabal' | 'carnet' | 'dankort' | 'diners_club' | 'discover' | 'elo' | 'forbrugsforeningen' | 'jcb' | 'maestro' | 'master' | 'naranja' | 'sodexo' | 'unionpay' | 'visa' | 'vr';
    card_iin?: string;
    card_last4?: string;
    card_expiry_month?: number;
    card_expiry_year?: number;
};
export type StoreCredit = {
    remaining_balance?: number;
};
export type Custom = {
    payment_method?: string;
};
export type Offline = {
    display_name?: string;
};
export type GiftCertificate = {
    code?: string;
    original_balance?: number;
    starting_balance?: number;
    remaining_balance?: number;
    status?: 'active' | 'pending' | 'disabled' | 'expired';
};
export type AvsResult = {
    code?: string;
    message?: string;
    street_match?: string;
    postal_match?: string;
};
export type CvvResult = {
    code?: string;
    message?: string;
};
export type NoContent = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type MetaEmptyFull = {
    [key: string]: unknown;
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
export type LinksFull = {
    previous?: string;
    current?: string;
    next?: string;
};
export type ErrorBase = {
    status?: number;
    title?: string;
    type?: string;
};
export type ErrorDetailedFull = {
    errors?: {
        [key: string]: unknown;
    };
};
export type PostRefundQuotesRequest = Array<RefundQuotePost>;
export type RefundQuotePost = RefundQuoteItemsRefund | RefundQuoteTaxAdjustmentAmount;
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
export type RefundRequestPost = RefundRequestPostItems | RefundRequestPostTaxAdjustmentAmount;
export type RefundRequestPostItems = {
    items: Array<ItemsRefund>;
    payments: Array<PaymentRequest>;
    merchant_calculated_override?: MerchantOverride;
};
export type RefundRequestPostTaxAdjustmentAmount = {
    tax_adjustment_amount: TaxAdjustmentAmount;
    merchant_calculated_override?: MerchantOverride;
};
export type RefundIdGet = {
    data?: {
        id?: number;
        order_id?: number;
        user_id?: number;
        created?: string;
        reason?: string;
        total_amount?: number;
        total_tax?: number;
        uses_merchant_override_values?: boolean;
        payments?: Array<{
            id?: number;
            provider_id?: string;
            amount?: number;
            offline?: boolean;
            is_declined?: boolean;
            declined_message?: string;
        }>;
        items?: Array<{
            item_type?: 'PRODUCT' | 'GIFT_WRAPPING' | 'SHIPPING' | 'HANDLING' | 'ORDER' | 'FEE';
            item_id?: number;
            quantity?: number;
            requested_amount?: string | null;
            reason?: string;
        }>;
    };
    meta?: MetaEmptyFull;
};
export type PostRefundsRequest = Array<RefundRequestPost>;
export type FailedQuoteError = {
    order_id?: number;
    status?: number;
    error?: string;
};
export type ItemsRefund = QuantityBoundItem | AmountBoundItem | TaxExemptItem | FeeItem;
export type PaymentRequest = {
    provider_id?: string;
    amount?: number;
    offline?: boolean;
};
export type RefundMethod = Array<PaymentOption>;
export type QuantityBoundItem = {
    item_type: 'PRODUCT' | 'GIFT_WRAPPING';
    item_id: number;
    adjustments?: Array<RefundItemAdjustment>;
    quantity: number;
    reason?: string;
};
export type RefundItemAdjustment = {
    amount?: number;
    description?: string;
};
export type FeeItem = {
    item_type?: 'FEE';
    item_id?: number;
    amount?: Amount;
    reason?: string;
};
export type TaxExemptItem = {
    item_type?: 'ORDER';
    item_id?: number;
    amount?: Amount;
    reason?: string;
};
export type AmountBoundItem = {
    item_type: 'ORDER' | 'SHIPPING' | 'HANDLING' | 'TAX' | 'FEE';
    item_id: number;
    amount: Amount;
    reason?: string;
};
export type MerchantOverride = {
    total_amount: Amount;
    total_tax: number;
};
export type TaxAdjustmentAmount = number;
export type RefundQuoteItemsRefund = {
    items: Array<ItemsRefund>;
    merchant_calculated_override?: MerchantOverride;
};
export type RefundQuoteTaxAdjustmentAmount = {
    tax_adjustment_amount: TaxAdjustmentAmount;
    merchant_calculated_override?: MerchantOverride;
};
export type Refund = {
    readonly id?: number;
    order_id?: number;
    readonly user_id?: number;
    readonly created?: string;
    reason?: string;
    total_amount?: Amount;
    total_tax?: number;
    uses_merchant_override_values?: boolean;
    items?: Array<RefundItem>;
    payments?: Array<RefundPayment>;
};
export type RefundItem = {
    item_type?: 'PRODUCT' | 'GIFT_WRAPPING' | 'SHIPPING' | 'HANDLING' | 'ORDER' | 'FEE';
    item_id?: number;
    reason?: string;
    quantity?: number;
    adjustments?: Array<RefundItemAdjustment>;
    requested_amount?: Amount;
};
export type RefundPayment = {
    readonly id?: number;
    provider_id?: string;
    amount?: Amount;
    offline?: boolean;
    is_declined?: boolean;
    declined_message?: string;
    transaction_id?: string;
};
export type PaymentOption = {
    provider_id?: string;
    provider_description?: string;
    amount?: number;
    offline?: boolean;
    offline_provider?: boolean;
    offline_reason?: string;
};
export type Amount = number;
export type AdjustmentAmount = number;
export type MetaRefund = {
    failure?: number;
    success?: number;
    total?: number;
};
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponsePostPut = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: BatchOperationMeta;
};
export type MetafieldResponse = {
    data?: Metafield;
    meta?: MetaEmptyFull;
};
export type MetafieldBase = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    resource_type?: 'order' | 'brand' | 'product' | 'variant' | 'category';
    readonly resource_id?: number;
};
export type MetafieldBasePost = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type Metafield = MetafieldBase & {
    id?: number;
    date_created?: string;
    date_modified?: string;
    readonly owner_client_id?: string;
};
export type MetafieldPut = MetafieldBasePost;
export type GlobalOrderSettings = {
    notifications?: {
        order_placed?: {
            email_addresses?: Array<string>;
        };
        forward_invoice?: {
            email_addresses?: Array<string>;
        };
    };
};
export type MetaFieldCollectionResponsePartialSuccessPostPut = {
    data?: Array<Metafield>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccessDelete = {
    data?: Array<number>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type WriteCollectionPartialSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type Total = number;
export type Success = number;
export type Failed = number;
export type _Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
export type MetafieldPostBatch = MetafieldBasePost & {
    resource_id: number;
};
export type MetafieldPutBatch = MetafieldBasePost & {
    id: number;
    resource_id?: number;
};
export type ChannelOrderSettings = {
    notifications?: {
        order_placed?: {
            email_addresses?: Array<string> | null;
        };
        forward_invoice?: {
            email_addresses?: Array<string> | null;
        };
    };
};
export type ErrorResponse400 = {
    schema?: BetaErrorResponse;
};
export type ErrorResponse404 = {
    schema?: BetaErrorResponse;
};
export type ErrorResponse422 = {
    schema?: BetaErrorResponse;
};
export type BetaErrorResponse = BaseError & {
    errors?: {
        [key: string]: unknown;
    };
};
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
};
export type DetailedErrorsWritable = {
    [key: string]: unknown;
};
export type MetaEmptyFullWritable = {
    [key: string]: unknown;
};
export type RefundWritable = {
    order_id?: number;
    reason?: string;
    total_amount?: Amount;
    total_tax?: number;
    uses_merchant_override_values?: boolean;
    items?: Array<RefundItem>;
    payments?: Array<RefundPaymentWritable>;
};
export type RefundPaymentWritable = {
    provider_id?: string;
    amount?: Amount;
    offline?: boolean;
    is_declined?: boolean;
    declined_message?: string;
    transaction_id?: string;
};
export type MetafieldBaseWritable = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    resource_type?: 'order' | 'brand' | 'product' | 'variant' | 'category';
};
export type MetafieldWritable = MetafieldBaseWritable & {
    id?: number;
    date_created?: string;
    date_modified?: string;
};
export type ErrorDetailWritable = {
    [key: string]: unknown;
};
export type OrderIdParam = number;
export type Accept = string;
export type ContentType = string;
export type PageParam = number;
export type DateCreatedMin = string;
export type DateCreatedMax = string;
export type DateCreated = string;
export type DateModifiedMin = string;
export type DateModifiedMax = string;
export type DateModified = string;
export type MetafieldIdParam = number;
export type MetafieldKeyParam = string;
export type MetafieldKeyInParam = Array<string>;
export type MetafieldNamespaceParam = string;
export type MetafieldNamespaceInParam = Array<string>;
export type LimitParam = number;
export type DirectionParam = 'asc' | 'desc';
export type IncludeFieldsParamMetafields = Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified'>;
export type CaptureOrderPaymentData = {
    body?: never;
    headers: {
        Accept: string;
        'Content-Type': string;
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
    201: {
        [key: string]: unknown;
    };
};
export type CaptureOrderPaymentResponse = CaptureOrderPaymentResponses[keyof CaptureOrderPaymentResponses];
export type VoidOrderPaymentData = {
    body?: never;
    headers: {
        Accept: string;
        'Content-Type': string;
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
    201: {
        [key: string]: unknown;
    };
};
export type VoidOrderPaymentResponse = VoidOrderPaymentResponses[keyof VoidOrderPaymentResponses];
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
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
    503: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type GetOrderTransactionsError = GetOrderTransactionsErrors[keyof GetOrderTransactionsErrors];
export type GetOrderTransactionsResponses = {
    200: {
        data?: Array<Transaction>;
        meta?: MetaCollectionFull;
    };
    204: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetOrderTransactionsResponse = GetOrderTransactionsResponses[keyof GetOrderTransactionsResponses];
export type CreateOrderRefundQuotesData = {
    body: RefundQuotePost;
    headers: {
        Accept: string;
        'Content-Type': string;
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
    201: {
        data?: RefundQuoteFull;
        meta?: MetaEmptyFull;
    };
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
    200: {
        data?: Array<Refund>;
        meta?: MetaEmptyFull;
    };
};
export type GetOrderRefundsResponse = GetOrderRefundsResponses[keyof GetOrderRefundsResponses];
export type CreateOrderRefundData = {
    body: RefundRequestPost;
    headers: {
        Accept: string;
        'Content-Type': string;
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
    422: {
        data?: Array<ErrorResponse>;
    };
    503: {
        data?: Array<FailedQuoteError>;
        meta?: Meta;
    };
};
export type CreateOrderRefundError = CreateOrderRefundErrors[keyof CreateOrderRefundErrors];
export type CreateOrderRefundResponses = {
    201: {
        data?: Refund;
        meta?: MetaEmptyFull;
    };
};
export type CreateOrderRefundResponse = CreateOrderRefundResponses[keyof CreateOrderRefundResponses];
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
    200: {
        data?: Array<Refund>;
        meta?: MetaEmptyFull;
    };
};
export type GetOrdersRefundsResponse = GetOrdersRefundsResponses[keyof GetOrdersRefundsResponses];
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
        direction?: 'asc' | 'desc';
    };
    url: '/orders/{order_id}/metafields';
};
export type GetOrderMetafieldsResponses = {
    200: MetaFieldCollectionResponse;
};
export type GetOrderMetafieldsResponse = GetOrderMetafieldsResponses[keyof GetOrderMetafieldsResponses];
export type CreateOrderMetafieldData = {
    body: MetafieldBasePost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        order_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/metafields';
};
export type CreateOrderMetafieldErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
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
    204: void;
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
    body: MetafieldPut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        order_id: number;
        metafield_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/metafields/{metafield_id}';
};
export type UpdateOrderMetafieldErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
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
    200: GlobalOrderSettings & {
        meta?: MetaEmptyFull;
    };
};
export type GetGlobalOrderSettingsResponse = GetGlobalOrderSettingsResponses[keyof GetGlobalOrderSettingsResponses];
export type UpdateGlobalOrderSettingsData = {
    body?: GlobalOrderSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
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
    200: GlobalOrderSettings & {
        meta?: MetaEmptyFull;
    };
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
    200: ChannelOrderSettings & {
        meta?: MetaEmptyFull;
    };
};
export type GetChannelOrderSettingsResponse = GetChannelOrderSettingsResponses[keyof GetChannelOrderSettingsResponses];
export type UpdateChannelOrderSettingsData = {
    body?: ChannelOrderSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
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
    200: ChannelOrderSettings & {
        meta?: MetaEmptyFull;
    };
};
export type UpdateChannelOrderSettingsResponse = UpdateChannelOrderSettingsResponses[keyof UpdateChannelOrderSettingsResponses];
export type DeleteOrdersMetafieldsData = {
    body?: Array<number>;
    path?: never;
    query?: never;
    url: '/orders/metafields';
};
export type DeleteOrdersMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
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
        direction?: 'asc' | 'desc';
        include_fields?: Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified'>;
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
    body?: Array<MetafieldBasePost & {
        resource_id: number;
    }>;
    path?: never;
    query?: never;
    url: '/orders/metafields';
};
export type CreateOrdersMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateOrdersMetafieldsError = CreateOrdersMetafieldsErrors[keyof CreateOrdersMetafieldsErrors];
export type CreateOrdersMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type CreateOrdersMetafieldsResponse = CreateOrdersMetafieldsResponses[keyof CreateOrdersMetafieldsResponses];
export type UpdateOrdersMetafieldsData = {
    body?: Array<MetafieldBasePost & {
        id: number;
    }>;
    path?: never;
    query?: never;
    url: '/orders/metafields';
};
export type UpdateOrdersMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateOrdersMetafieldsError = UpdateOrdersMetafieldsErrors[keyof UpdateOrdersMetafieldsErrors];
export type UpdateOrdersMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type UpdateOrdersMetafieldsResponse = UpdateOrdersMetafieldsResponses[keyof UpdateOrdersMetafieldsResponses];
