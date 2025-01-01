export type AdjustmentAmount = number;
export type Amount = number;
export type AmountBoundItem = {
    item_type: 'ORDER' | 'SHIPPING' | 'HANDLING' | 'TAX' | 'FEE';
    item_id: number;
    amount: Amount;
    reason?: string;
};
export type item_type = 'ORDER' | 'SHIPPING' | 'HANDLING' | 'TAX' | 'FEE';
export type AVSResult = {
    code?: string;
    message?: string;
    street_match?: string;
    postal_match?: string;
};
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
};
export type BatchOperationMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type betaErrorResponse = BaseError & {
    errors?: {
        [key: string]: unknown;
    };
};
export type ChannelOrderSettings = {
    notifications?: {
        order_placed?: {
            email_addresses?: Array<(string)> | null;
        };
        forward_invoice?: {
            email_addresses?: Array<(string)> | null;
        };
    };
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
export type CreateReturn = Return_Full;
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
export type CreditCard = {
    card_type?: 'alelo' | 'alia' | 'american_express' | 'cabal' | 'carnet' | 'dankort' | 'diners_club' | 'discover' | 'elo' | 'forbrugsforeningen' | 'jcb' | 'maestro' | 'master' | 'naranja' | 'sodexo' | 'unionpay' | 'visa' | 'vr';
    card_iin?: string;
    card_last4?: string;
    card_expiry_month?: number;
    card_expiry_year?: number;
};
export type card_type = 'alelo' | 'alia' | 'american_express' | 'cabal' | 'carnet' | 'dankort' | 'diners_club' | 'discover' | 'elo' | 'forbrugsforeningen' | 'jcb' | 'maestro' | 'master' | 'naranja' | 'sodexo' | 'unionpay' | 'visa' | 'vr';
export type Custom = {
    payment_method?: string;
};
export type CVVResult = {
    code?: string;
    message?: string;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type error_Base = {
    status?: number;
    title?: string;
    type?: string;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
export type errorDetailed_Full = {
    errors?: {
        [key: string]: unknown;
    };
};
export type ErrorResponse = error_Base & {
    errors?: {
        [key: string]: unknown;
    };
};
export type ErrorResponse400 = {
    schema?: betaErrorResponse;
};
export type ErrorResponse404 = {
    schema?: betaErrorResponse;
};
export type ErrorResponse422 = {
    schema?: betaErrorResponse;
};
export type Failed = number;
export type FailedQuoteError = {
    order_id?: number;
    status?: number;
    error?: string;
};
export type FeeItem = {
    item_type?: 'FEE';
    item_id?: number;
    amount?: Amount;
    reason?: string;
};
export type item_type2 = 'FEE';
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
export type GetReturnsSettings = {
    reasons?: Array<Reason>;
    preferred_outcomes?: Array<PreferredOutcome>;
};
export type GiftCertificate = {
    code?: string;
    original_balance?: number;
    starting_balance?: number;
    remaining_balance?: number;
    status?: 'active' | 'pending' | 'disabled' | 'expired';
};
export type status = 'active' | 'pending' | 'disabled' | 'expired';
export type GlobalOrderSettings = {
    notifications?: {
        order_placed?: {
            email_addresses?: Array<(string)>;
        };
        forward_invoice?: {
            email_addresses?: Array<(string)>;
        };
    };
};
export type ItemReferenceId = {
    type: 'ORDER_PRODUCT';
    value: string;
};
export type type = 'ORDER_PRODUCT';
export type ItemsRefund = AmountBoundItem | QuantityBoundItem | TaxExemptItem | FeeItem;
export type links_Full = {
    previous?: string;
    current?: string;
    next?: string;
};
export type MerchantOverride = {
    total_amount: Amount;
    total_tax: number;
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
export type metaCollection_Full = {
    pagination?: pagination_Full;
};
export type metaEmpty_Full = {
    [key: string]: unknown;
};
export type Metafield = MetafieldBase & {
    id?: number;
    date_created?: string;
    date_modified?: string;
    readonly owner_client_id?: string;
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
export type permission_set = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type resource_type = 'order' | 'brand' | 'product' | 'variant' | 'category';
export type MetafieldBase_Post = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<(number)>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponse_POST_PUT = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: BatchOperationMeta;
};
export type MetaFieldCollectionResponsePartialSuccess_DELETE = {
    data?: Array<(number)>;
    errors?: Array<Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccess_POST_PUT = {
    data?: Array<Metafield>;
    errors?: Array<Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetafieldPost_Batch = MetafieldBase_Post & {
    resource_id: number;
};
export type MetafieldPut = MetafieldBase_Post;
export type MetafieldPut_Batch = MetafieldBase_Post & {
    id: number;
    resource_id?: number;
};
export type MetafieldResponse = {
    data?: Metafield;
    meta?: metaEmpty_Full;
};
export type MetaRefund = {
    failure?: number;
    success?: number;
    total?: number;
};
export type NoContent = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    errors?: Array<unknown>;
};
export type Offline = {
    display_name?: string;
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
export type pagination_Full = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: links_Full;
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type Parameterdate_created = string;
export type Parameterdate_created_max = string;
export type Parameterdate_created_min = string;
export type Parameterdate_modified = string;
export type Parameterdate_modified_max = string;
export type Parameterdate_modified_min = string;
export type ParameterDirectionParam = 'asc' | 'desc';
export type ParameterIncludeFieldsParamMetafields = Array<('resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified')>;
export type ParameterLimitParam = number;
export type ParameterMetafieldIdParam = number;
export type ParameterMetafieldKeyInParam = Array<(string)>;
export type ParameterMetafieldKeyParam = string;
export type ParameterMetafieldNamespaceInParam = Array<(string)>;
export type ParameterMetafieldNamespaceParam = string;
export type ParameterOrderIdParam = number;
export type ParameterPageParam = number;
export type PaymentOption = {
    provider_id?: string;
    provider_description?: string;
    amount?: number;
    offline?: boolean;
    offline_provider?: boolean;
    offline_reason?: string;
};
export type PaymentRequest = {
    provider_id?: string;
    amount?: number;
    offline?: boolean;
};
export type PostRefundQuotesRequest = Array<RefundQuote_Post>;
export type PostRefundsRequest = Array<RefundRequest_Post>;
export type PreferredOutcome = {
    id?: number;
    label?: string;
    is_archived?: boolean;
};
export type Problem = {
    status?: number;
    title?: string;
    type?: string;
};
export type QuantityBoundItem = {
    item_type: 'PRODUCT' | 'GIFT_WRAPPING';
    item_id: number;
    adjustments?: Array<RefundItemAdjustment>;
    quantity: number;
    reason?: string;
};
export type item_type3 = 'PRODUCT' | 'GIFT_WRAPPING';
export type Reason = {
    id?: number;
    label?: string;
    is_archived?: boolean;
};
export type ReceivedItems_Base = Array<{
    item_id?: number;
    received_quantity?: number;
    pending_quantity?: number;
}>;
export type ReceivedItems_Put = Array<{
    item_id: number;
    received_quantity: number;
    pending_quantity: number;
}>;
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
export type RefundID_Get = {
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
            requested_amount?: (string) | null;
            reason?: string;
        }>;
    };
    meta?: metaEmpty_Full;
};
export type RefundItem = {
    item_type?: 'PRODUCT' | 'GIFT_WRAPPING' | 'SHIPPING' | 'HANDLING' | 'ORDER' | 'FEE';
    item_id?: number;
    reason?: string;
    quantity?: number;
    adjustments?: Array<RefundItemAdjustment>;
    requested_amount?: Amount;
};
export type item_type4 = 'PRODUCT' | 'GIFT_WRAPPING' | 'SHIPPING' | 'HANDLING' | 'ORDER' | 'FEE';
export type RefundItemAdjustment = {
    amount?: number;
    description?: string;
};
export type RefundMethod = Array<PaymentOption>;
export type RefundPayment = {
    readonly id?: number;
    provider_id?: string;
    amount?: Amount;
    offline?: boolean;
    is_declined?: boolean;
    declined_message?: string;
    transaction_id?: string;
};
export type RefundQuote_Full = {
    order_id?: number;
    total_refund_amount?: Amount;
    total_refund_tax_amount?: number;
    order_level_refund_amount?: number;
    rounding?: number;
    adjustment?: AdjustmentAmount;
    tax_inclusive?: boolean;
    refund_methods?: Array<RefundMethod>;
};
export type RefundQuote_Post = {
    items: Array<ItemsRefund>;
};
export type RefundRequest_Post = {
    items: Array<ItemsRefund>;
    payments: Array<PaymentRequest>;
    merchant_calculated_override?: MerchantOverride;
};
export type Return_Full = {
    items?: Array<ReturnItem>;
    total?: string;
    currency?: string;
    customer?: {
        id?: number;
        email?: string;
    };
    comment?: string;
    status?: Status_Full;
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
export type ReviewedItems_Base = Array<{
    item_id?: number;
    authorized_quantity?: number;
    rejected_quantity?: number;
    pending_quantity?: number;
}>;
export type ReviewedItems_Put = Array<{
    item_id: number;
    authorized_quantity: number;
    rejected_quantity: number;
    pending_quantity: number;
}>;
export type Status_Full = 'CLOSED' | 'OPEN' | 'REMOVED';
export type StatusUpdate_Full = {
    return_id?: number;
    new_status?: Status_Full;
};
export type StoreCredit = {
    remaining_balance?: number;
};
export type Success = number;
export type TaxExemptItem = {
    item_type?: 'ORDER';
    item_id?: number;
    amount?: Amount;
    reason?: string;
};
export type item_type5 = 'ORDER';
export type Total = number;
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
    payment_instrument_token?: (string) | null;
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
        receipt_number?: (string) | null;
        authorization_code?: (string) | null;
        fraud_response?: (string) | null;
        amount_received?: (number) | null;
    } | null;
};
export type event = 'purchase' | 'authorization' | 'capture' | 'refund' | 'void' | 'pending' | 'settled';
export type method = 'credit_card' | 'electronic_wallet' | 'gift_certificate' | 'store_credit' | 'apple_pay_card' | 'bigpay_token' | 'apple_pay_token' | 'token' | 'custom' | 'offsite' | 'offline' | 'nonce';
export type gateway = '2checkout' | 'adyen' | 'amazon' | 'authorizenet' | 'bankdeposit' | 'braintree' | 'cheque' | 'cod' | 'custom' | 'firstdatagge4' | 'giftcertificate' | 'hps' | 'instore' | 'klarna' | 'migs' | 'moneyorder' | 'nmi' | 'paypalexpress' | 'paypalpaymentsprous' | 'paypalpaymentsprouk' | 'plugnpay' | 'qbmsv2' | 'securenet' | 'square' | 'storecredit' | 'stripe' | 'testgateway' | 'usaepay';
export type status2 = 'ok' | 'error';
export type Transaction_Post = {
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
export type UpdateReturnStatuses = Array<{
    id?: number;
    status?: Status_Full;
}>;
export type UpdateReturnStatusesRequest = Array<StatusUpdate_Full>;
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
export type CaptureOrderPaymentData = {
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        order_id: number;
    };
};
export type CaptureOrderPaymentResponse = ({
    [key: string]: unknown;
});
export type CaptureOrderPaymentError = (error_Base | ErrorResponse | errorDetailed_Full);
export type VoidOrderPaymentData = {
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        order_id: number;
    };
};
export type VoidOrderPaymentResponse = ({
    [key: string]: unknown;
});
export type VoidOrderPaymentError = (error_Base | ErrorResponse | errorDetailed_Full);
export type GetOrderTransactionsData = {
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
};
export type GetOrderTransactionsResponse = ({
    data?: Array<Transaction>;
    meta?: metaCollection_Full;
} | {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type GetOrderTransactionsError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type CreateOrderRefundQuotesData = {
    body: RefundQuote_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        order_id: number;
    };
};
export type CreateOrderRefundQuotesResponse = ({
    data?: RefundQuote_Full;
    meta?: metaEmpty_Full;
});
export type CreateOrderRefundQuotesError = (ErrorResponse);
export type CreateOrderRefundData = {
    body: RefundRequest_Post;
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
};
export type CreateOrderRefundResponse = ({
    data?: Refund;
    meta?: metaEmpty_Full;
});
export type CreateOrderRefundError = ({
    data?: Array<ErrorResponse>;
} | {
    data?: Array<FailedQuoteError>;
    meta?: Meta;
});
export type GetOrderRefundsData = {
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        transaction_id?: string;
    };
};
export type GetOrderRefundsResponse = ({
    data?: Array<Refund>;
    meta?: metaEmpty_Full;
});
export type GetOrderRefundsError = unknown;
export type GetOrderRefundData = {
    headers: {
        Accept: string;
    };
    path: {
        refund_id: number;
    };
};
export type GetOrderRefundResponse = (RefundID_Get);
export type GetOrderRefundError = unknown;
export type GetOrdersRefundsData = {
    headers: {
        Accept: string;
    };
    query?: {
        'created:max'?: string;
        'created:min'?: string;
        'id:in'?: Array<(number)>;
        limit?: number;
        'order_id:in'?: Array<(number)>;
        page?: number;
        transaction_id?: string;
    };
};
export type GetOrdersRefundsResponse = ({
    data?: Array<Refund>;
    meta?: metaEmpty_Full;
});
export type GetOrdersRefundsError = unknown;
export type GetOrderMetafieldsData = {
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        direction?: 'asc' | 'desc';
        key?: string;
        limit?: number;
        namespace?: string;
        page?: number;
    };
};
export type GetOrderMetafieldsResponse = (MetaFieldCollectionResponse);
export type GetOrderMetafieldsError = unknown;
export type CreateOrderMetafieldData = {
    body: MetafieldBase_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        order_id: number;
    };
};
export type CreateOrderMetafieldResponse = (MetafieldResponse);
export type CreateOrderMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | ErrorResponse);
export type GetOrderMetafieldData = {
    headers: {
        Accept: string;
    };
    path: {
        metafield_id: number;
        order_id: number;
    };
};
export type GetOrderMetafieldResponse = (MetafieldResponse);
export type GetOrderMetafieldError = (NotFound);
export type UpdateOrderMetafieldData = {
    body: MetafieldPut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        metafield_id: number;
        order_id: number;
    };
};
export type UpdateOrderMetafieldResponse = (MetafieldResponse);
export type UpdateOrderMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | NotFound);
export type DeleteOrderMetafieldData = {
    headers: {
        Accept: string;
    };
    path: {
        metafield_id: number;
        order_id: number;
    };
};
export type DeleteOrderMetafieldResponse = (void);
export type DeleteOrderMetafieldError = (NotFound);
export type GetGlobalOrderSettingsData = {
    headers: {
        Accept: string;
    };
};
export type GetGlobalOrderSettingsResponse = ((GlobalOrderSettings & {
    meta?: metaEmpty_Full;
}));
export type GetGlobalOrderSettingsError = (ErrorResponse400);
export type UpdateGlobalOrderSettingsData = {
    body?: GlobalOrderSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateGlobalOrderSettingsResponse = ((GlobalOrderSettings & {
    meta?: metaEmpty_Full;
}));
export type UpdateGlobalOrderSettingsError = (ErrorResponse400 | ErrorResponse422);
export type GetChannelOrderSettingsData = {
    headers: {
        Accept: string;
    };
    path: {
        channel_id: string;
    };
};
export type GetChannelOrderSettingsResponse = ((ChannelOrderSettings & {
    meta?: metaEmpty_Full;
}));
export type GetChannelOrderSettingsError = (ErrorResponse400);
export type UpdateChannelOrderSettingsData = {
    body?: ChannelOrderSettings;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: string;
    };
};
export type UpdateChannelOrderSettingsResponse = ((ChannelOrderSettings & {
    meta?: metaEmpty_Full;
}));
export type UpdateChannelOrderSettingsError = (ErrorResponse400 | ErrorResponse422);
export type GetOrdersMetafieldsData = {
    query?: {
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        direction?: 'asc' | 'desc';
        include_fields?: Array<('resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified')>;
        key?: string;
        'key:in'?: Array<(string)>;
        limit?: number;
        namespace?: string;
        'namespace:in'?: Array<(string)>;
        page?: number;
    };
};
export type GetOrdersMetafieldsResponse = (MetaFieldCollectionResponse);
export type GetOrdersMetafieldsError = unknown;
export type CreateOrdersMetafieldsData = {
    body?: Array<(MetafieldBase_Post & {
        resource_id: number;
    })>;
};
export type CreateOrdersMetafieldsResponse = (MetaFieldCollectionResponse_POST_PUT);
export type CreateOrdersMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type UpdateOrdersMetafieldsData = {
    body?: Array<(MetafieldBase_Post & {
        id: number;
    })>;
};
export type UpdateOrdersMetafieldsResponse = (MetaFieldCollectionResponse_POST_PUT);
export type UpdateOrdersMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type DeleteOrdersMetafieldsData = {
    body?: Array<(number)>;
};
export type DeleteOrdersMetafieldsResponse = (MetaFieldCollectionDeleteResponseSuccess);
export type DeleteOrdersMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_DELETE);
