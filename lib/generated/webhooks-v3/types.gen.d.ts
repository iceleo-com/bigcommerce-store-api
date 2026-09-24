export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type StoreCartWildcard = unknown;
export type StoreCartCreated = WebhookCallbackBase & {
    data?: {
        type?: 'cart' | 'cart_line_item';
        id?: string;
    };
};
export type StoreCartUpdated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: string;
    };
};
export type StoreCartDeleted = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: string;
    };
};
export type StoreCartCouponApplied = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: string;
        couponId?: number;
    };
};
export type StoreCartAbandoned = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: string;
        token?: string;
    };
};
export type StoreCartConverted = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: string;
        orderId?: number;
    };
};
export type StoreCartLineItemWildcard = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: string;
        cartId?: string;
    };
};
export type StoreCartLineItemCreated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: string;
        cartId?: string;
    };
};
export type StoreCartLineItemUpdated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: string;
        cartId?: string;
    };
};
export type StoreCartLineItemDeleted = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: string;
        cartId?: string;
    };
};
export type StoreCategoryWildcard = unknown;
export type StoreCategoryCreated = WebhookCallbackBase & CallbackCategoryData;
export type StoreCategoryUpdated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type StoreCategoryDeleted = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type StoreChannelWildcard = unknown;
export type StoreChannelCreated = WebhookCallbackBase & {
    data?: {
        readonly type?: string;
        id?: number;
    };
};
export type StoreChannelUpdated = WebhookCallbackBase & {
    data?: {
        readonly type?: string;
        id?: number;
    };
};
export type StoreCustomerWildcard = unknown;
export type StoreCustomerCreated = WebhookCallbackBase & {
    data?: {
        readonly type?: string;
        id?: number;
    };
};
export type StoreCustomerUpdated = WebhookCallbackBase & {
    data?: {
        readonly type?: string;
        id?: number;
    };
};
export type StoreCustomerDeleted = WebhookCallbackBase & {
    data?: {
        readonly type?: string;
        id?: number;
    };
};
export type StoreCustomerAddressUpdated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
        address?: {
            customer_id?: number;
        };
    };
};
export type StoreCustomerAddressCreated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
        address?: {
            customer_id?: number;
        };
    };
};
export type StoreCustomerAddressDeleted = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
        address?: {
            customer_id?: number;
        };
    };
};
export type StoreCustomerPaymentInstrumentDefaultUpdated = WebhookCallbackBase & {
    data?: {
        readonly type?: string;
        id?: number;
    };
};
export type StoreOrderWildcard = {
    [key: string]: unknown;
};
export type StoreOrderCreated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type StoreOrderUpdated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type StoreOrderArchived = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type StoreOrderStatusUpdated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
        status?: {
            previous_status_id?: number;
            new_status_id?: number;
        };
    };
};
export type StoreOrderMessageCreated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
        message?: {
            order_message_id?: number;
        };
    };
};
export type StoreOrderRefundCreated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
        refund?: {
            refund_id?: number;
        };
    };
};
export type StoreProductWildcard = {
    [key: string]: unknown;
};
export type StoreProductDeleted = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type StoreProductCreated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type StoreProductUpdated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type StoreProductInventoryUpdated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
        inventory?: {
            product_id?: number;
            method?: 'absolute' | 'relative';
            value?: number;
        };
    };
};
export type StoreProductInventoryOrderUpdated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
        inventory?: {
            product_id?: number;
            method?: 'absolute' | 'relative';
            value?: number;
        };
    };
};
export type StoreShipmentWildcard = {
    [key: string]: unknown;
};
export type StoreShipmentCreated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
        orderId?: number;
    };
};
export type StoreShipmentUpdated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
        orderId?: number;
    };
};
export type StoreShipmentDeleted = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
        orderId?: number;
    };
};
export type StoreSkuWildcard = {
    [key: string]: unknown;
};
export type StoreSkuCreated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
        sku?: {
            product_id?: number;
            variant_id?: number;
        };
    };
};
export type StoreSkuUpdated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
        sku?: {
            product_id?: number;
            variant_id?: number;
        };
    };
};
export type StoreSkuDeleted = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
        sku?: {
            product_id?: number;
            variant_id?: number;
        };
    };
};
export type StoreSkuInventoryUpdated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
        inventory?: {
            product_id?: number;
            method?: 'absolute' | 'relative';
            value?: number;
            variant_id?: number;
        };
    };
};
export type StoreSkuInventoryOrderUpdated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
        inventory?: {
            product_id?: number;
            method?: 'absolute' | 'relative';
            value?: number;
            variant_id?: number;
        };
    };
};
export type StoreAppUninstalled = WebhookCallbackBase & {
    data?: {
        type?: string;
    };
};
export type StoreInformationUpdated = WebhookCallbackBase & {
    data?: {
        type?: string;
    };
};
export type StoreSubscriberWildcard = {
    [key: string]: unknown;
};
export type StoreSubscriberCreated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type StoreSubscriberUpdated = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type StoreSubscriberDeleted = WebhookCallbackBase & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type ErrorFull = {
    status?: number;
    title?: string;
    type?: string;
};
export type ErrorDetailedFull = {
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
    };
};
export type WebhookPut = {
    scope?: string;
    destination?: string;
    is_active?: boolean;
    events_history_enabled?: boolean;
    headers?: {
        [key: string]: string;
    } | null;
};
export type WebhookBase = {
    scope: string;
    destination: string;
    is_active?: boolean;
    events_history_enabled?: boolean;
    headers?: {
        [key: string]: string;
    } | null;
};
export type WebhookFull = WebhookBase & {
    id?: number;
    client_id?: string;
    store_hash?: string;
    created_at?: number;
    updated_at?: number;
};
export type HistoryEvent = {
    scope?: string;
    store_id?: string;
    data?: {
        [key: string]: unknown;
    };
    hash?: string;
    created_at?: number;
    producer?: string;
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
export type WebhookCallbackBase = {
    readonly created_at?: number;
    store_id?: string;
    producer?: string;
    scope?: string;
    hash?: string;
};
export type CallbackCategoryData = {
    data?: {
        type?: string;
        id?: number;
    };
};
export type StoreCategoryWildcardWritable = unknown;
export type StoreChannelWildcardWritable = unknown;
export type StoreChannelCreatedWritable = WebhookCallbackBaseWritable & {
    data?: {
        id?: number;
    };
};
export type StoreChannelUpdatedWritable = WebhookCallbackBaseWritable & {
    data?: {
        id?: number;
    };
};
export type StoreCustomerWildcardWritable = unknown;
export type StoreCustomerCreatedWritable = WebhookCallbackBaseWritable & {
    data?: {
        id?: number;
    };
};
export type StoreCustomerUpdatedWritable = WebhookCallbackBaseWritable & {
    data?: {
        id?: number;
    };
};
export type StoreCustomerDeletedWritable = WebhookCallbackBaseWritable & {
    data?: {
        id?: number;
    };
};
export type StoreCustomerPaymentInstrumentDefaultUpdatedWritable = WebhookCallbackBaseWritable & {
    data?: {
        id?: number;
    };
};
export type WebhookCallbackBaseWritable = {
    store_id?: string;
    producer?: string;
    scope?: string;
    hash?: string;
};
export type WebhookId = number;
export type IsActive = boolean;
export type FilterByScope = string;
export type FilterByDestination = string;
export type FilterPageParam = number;
export type FilterLimitParam = number;
export type FilterMaxCreatedAtParam = string;
export type FilterMinCreatedAtParam = string;
export type Accept = string;
export type ContentType = string;
export type GetAllWebhooksData = {
    body?: never;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        is_active?: boolean;
        scope?: string;
        destination?: string;
    };
    url: '/hooks';
};
export type GetAllWebhooksErrors = {
    400: ErrorFull;
    401: ErrorFull;
};
export type GetAllWebhooksError = GetAllWebhooksErrors[keyof GetAllWebhooksErrors];
export type GetAllWebhooksResponses = {
    200: {
        data?: Array<{
            id?: number;
            client_id?: string;
            store_hash?: string;
            scope?: string;
            destination?: string;
            headers?: {
                [key: string]: string;
            } | null;
            is_active?: boolean;
            created_at?: number;
            updated_at?: number;
        }>;
        meta?: {
            pagination?: Pagination;
        };
    };
};
export type GetAllWebhooksResponse = GetAllWebhooksResponses[keyof GetAllWebhooksResponses];
export type CreateWebhooksData = {
    body?: WebhookBase;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query?: never;
    url: '/hooks';
};
export type CreateWebhooksErrors = {
    400: ErrorFull;
    401: ErrorFull;
    422: ErrorDetailedFull;
};
export type CreateWebhooksError = CreateWebhooksErrors[keyof CreateWebhooksErrors];
export type CreateWebhooksResponses = {
    200: {
        data?: WebhookFull;
        meta?: {
            pagination?: Pagination;
        };
    };
};
export type CreateWebhooksResponse = CreateWebhooksResponses[keyof CreateWebhooksResponses];
export type DeleteAWebhookData = {
    body?: never;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path: {
        webhook_id: number;
    };
    query?: never;
    url: '/hooks/{webhook_id}';
};
export type DeleteAWebhookResponses = {
    200: {
        data?: {
            id?: number;
            client_id?: string;
            store_hash?: string;
            scope?: string;
            destination?: string;
            headers?: {
                [key: string]: string;
            } | null;
            is_active?: boolean;
            created_at?: number;
            updated_at?: number;
        };
        meta?: {
            pagination?: Pagination;
        };
    };
};
export type DeleteAWebhookResponse = DeleteAWebhookResponses[keyof DeleteAWebhookResponses];
export type GetWebhookData = {
    body?: never;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path: {
        webhook_id: number;
    };
    query?: never;
    url: '/hooks/{webhook_id}';
};
export type GetWebhookErrors = {
    400: ErrorFull;
    401: ErrorFull;
    404: ErrorFull;
};
export type GetWebhookError = GetWebhookErrors[keyof GetWebhookErrors];
export type GetWebhookResponses = {
    200: {
        data?: {
            id?: number;
            client_id?: string;
            store_hash?: string;
            scope?: string;
            destination?: string;
            headers?: {
                [key: string]: string;
            } | null;
            is_active?: boolean;
            created_at?: number;
            updated_at?: number;
        };
        meta?: {
            pagination?: Pagination;
        };
    };
};
export type GetWebhookResponse = GetWebhookResponses[keyof GetWebhookResponses];
export type UpdateAWebhookData = {
    body?: WebhookPut;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path: {
        webhook_id: number;
    };
    query?: never;
    url: '/hooks/{webhook_id}';
};
export type UpdateAWebhookResponses = {
    200: {
        data?: {
            id?: number;
            client_id?: string;
            store_hash?: string;
            scope?: string;
            destination?: string;
            headers?: {
                [key: string]: string;
            } | null;
            is_active?: boolean;
            created_at?: number;
            updated_at?: number;
        };
        meta?: {
            pagination?: Pagination;
        };
    };
};
export type UpdateAWebhookResponse = UpdateAWebhookResponses[keyof UpdateAWebhookResponses];
export type GetHooksAdminData = {
    body?: never;
    path?: never;
    query?: {
        is_active?: boolean;
    };
    url: '/hooks/admin';
};
export type GetHooksAdminErrors = {
    400: ErrorFull;
    401: ErrorFull;
};
export type GetHooksAdminError = GetHooksAdminErrors[keyof GetHooksAdminErrors];
export type GetHooksAdminResponses = {
    200: {
        data?: {
            emails?: Array<string>;
            hooks_list?: Array<{
                id?: number;
                client_id?: string;
                store_hash?: string;
                scope?: string;
                destination?: string;
                headers?: {
                    [key: string]: string;
                } | null;
                is_active?: boolean;
                created_at?: number;
                updated_at?: number;
                status?: 'inactive' | 'active' | 'deactivated';
            }>;
            blocked_domains?: Array<{
                destination?: string;
                time_left?: number;
                reasons?: Array<{
                    failure_description?: string;
                    count?: number;
                    timestamp?: number;
                }>;
            }>;
        };
        meta?: {
            pagination?: Pagination;
        };
    };
};
export type GetHooksAdminResponse = GetHooksAdminResponses[keyof GetHooksAdminResponses];
export type PutHooksAdminData = {
    body: {
        emails?: Array<string>;
    };
    path?: never;
    query?: never;
    url: '/hooks/admin';
};
export type PutHooksAdminErrors = {
    400: ErrorFull;
    401: ErrorFull;
    422: ErrorDetailedFull;
};
export type PutHooksAdminError = PutHooksAdminErrors[keyof PutHooksAdminErrors];
export type PutHooksAdminResponses = {
    204: void;
};
export type PutHooksAdminResponse = PutHooksAdminResponses[keyof PutHooksAdminResponses];
export type GetWebhookEventsData = {
    body?: never;
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        'created_at:max'?: string;
        'created_at:min'?: string;
    };
    url: '/hooks/events';
};
export type GetWebhookEventsErrors = {
    400: ErrorFull;
    401: ErrorFull;
};
export type GetWebhookEventsError = GetWebhookEventsErrors[keyof GetWebhookEventsErrors];
export type GetWebhookEventsResponses = {
    200: {
        data?: Array<HistoryEvent>;
        meta?: {
            pagination?: Pagination;
        };
    };
};
export type GetWebhookEventsResponse = GetWebhookEventsResponses[keyof GetWebhookEventsResponses];
