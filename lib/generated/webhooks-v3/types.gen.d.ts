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
export type StoreOrderWildcard = unknown;
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
export type StoreProductWildcard = unknown;
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
export type StoreShipmentWildcard = unknown;
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
export type StoreSkuWildcard = unknown;
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
export type StoreSubscriberWildcard = unknown;
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
    errors?: unknown;
};
export type WebhookPut = {
    scope?: string;
    destination?: string;
    is_active?: boolean;
    headers?: {
        [key: string]: string;
    } | null;
};
export type WebhookBase = {
    scope: string;
    destination: string;
    is_active?: boolean;
    headers?: {
        [key: string]: string;
    } | null;
};
export type WebhookFull = {
    id?: number;
    client_id?: string;
    store_hash?: string;
    created_at?: number;
    updated_at?: number;
} & WebhookBase;
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
export type Accept = string;
export type ContentType = string;
export type GetWebhooksData = {
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
export type GetWebhooksErrors = {
    401: ErrorFull;
};
export type GetWebhooksError = GetWebhooksErrors[keyof GetWebhooksErrors];
export type GetWebhooksResponses = {
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
export type GetWebhooksResponse = GetWebhooksResponses[keyof GetWebhooksResponses];
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
        meta?: unknown;
    };
};
export type CreateWebhooksResponse = CreateWebhooksResponses[keyof CreateWebhooksResponses];
export type DeleteWebhookData = {
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
export type DeleteWebhookResponses = {
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
        meta?: unknown;
    };
};
export type DeleteWebhookResponse = DeleteWebhookResponses[keyof DeleteWebhookResponses];
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
        meta?: unknown;
    };
};
export type GetWebhookResponse = GetWebhookResponses[keyof GetWebhookResponses];
export type UpdateWebhookData = {
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
export type UpdateWebhookResponses = {
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
        meta?: unknown;
    };
};
export type UpdateWebhookResponse = UpdateWebhookResponses[keyof UpdateWebhookResponses];
export type GetHooksAdminData = {
    body?: never;
    path?: never;
    query?: {
        is_active?: boolean;
    };
    url: '/hooks/admin';
};
export type GetHooksAdminErrors = {
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
export type UpdateHooksAdminData = {
    body: {
        emails?: Array<string>;
    };
    path?: never;
    query?: never;
    url: '/hooks/admin';
};
export type UpdateHooksAdminErrors = {
    400: ErrorFull;
    401: ErrorFull;
    422: ErrorDetailedFull;
};
export type UpdateHooksAdminError = UpdateHooksAdminErrors[keyof UpdateHooksAdminErrors];
export type UpdateHooksAdminResponses = {
    204: void;
};
export type UpdateHooksAdminResponse = UpdateHooksAdminResponses[keyof UpdateHooksAdminResponses];
