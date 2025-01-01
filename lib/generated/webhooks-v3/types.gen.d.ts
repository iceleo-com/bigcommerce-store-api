export type callback_category_data = {
    data?: {
        type?: string;
        id?: number;
    };
};
export type error_Full = {
    status?: number;
    title?: string;
    type?: string;
};
export type errorDetailed_Full = {
    status?: number;
    title?: string;
    type?: string;
    errors?: unknown;
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
export type ParameterAccept = string;
export type ParameterContent_Type = string;
export type ParameterFilterByDestination = string;
export type ParameterFilterByScope = string;
export type ParameterFilterLimitParam = number;
export type ParameterFilterPageParam = number;
export type ParameterIsActive = boolean;
export type ParameterWebhookId = number;
export type store_app_uninstalled = webhook_callback_base & {
    data?: {
        type?: string;
    };
};
export type store_cart_abandoned = webhook_callback_base & {
    data?: {
        type?: string;
        id?: string;
        token?: string;
    };
};
export type store_cart_converted = webhook_callback_base & {
    data?: {
        type?: string;
        id?: string;
        orderId?: number;
    };
};
export type store_cart_couponApplied = webhook_callback_base & {
    data?: {
        type?: string;
        id?: string;
        couponId?: number;
    };
};
export type store_cart_created = webhook_callback_base & {
    data?: {
        type?: 'cart' | 'cart_line_item';
        id?: string;
    };
};
export type type = 'cart' | 'cart_line_item';
export type store_cart_deleted = webhook_callback_base & {
    data?: {
        type?: string;
        id?: string;
    };
};
export type store_cart_lineItem_created = webhook_callback_base & {
    data?: {
        type?: string;
        id?: string;
        cartId?: string;
    };
};
export type store_cart_lineItem_deleted = webhook_callback_base & {
    data?: {
        type?: string;
        id?: string;
        cartId?: string;
    };
};
export type store_cart_lineItem_updated = webhook_callback_base & {
    data?: {
        type?: string;
        id?: string;
        cartId?: string;
    };
};
export type store_cart_lineItem_wildcard = webhook_callback_base & {
    data?: {
        type?: string;
        id?: string;
        cartId?: string;
    };
};
export type store_cart_updated = webhook_callback_base & {
    data?: {
        type?: string;
        id?: string;
    };
};
export type store_cart_wildcard = unknown;
export type store_category_created = webhook_callback_base & callback_category_data;
export type store_category_deleted = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type store_category_updated = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type store_category_wildcard = unknown;
export type store_channel_created = webhook_callback_base & {
    data?: {
        readonly type?: string;
        id?: number;
    };
};
export type store_channel_updated = webhook_callback_base & {
    data?: {
        readonly type?: string;
        id?: number;
    };
};
export type store_channel_wildcard = unknown;
export type store_customer_address_created = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
        address?: {
            customer_id?: number;
        };
    };
};
export type store_customer_address_deleted = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
        address?: {
            customer_id?: number;
        };
    };
};
export type store_customer_address_updated = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
        address?: {
            customer_id?: number;
        };
    };
};
export type store_customer_created = webhook_callback_base & {
    data?: {
        readonly type?: string;
        id?: number;
    };
};
export type store_customer_deleted = webhook_callback_base & {
    data?: {
        readonly type?: string;
        id?: number;
    };
};
export type store_customer_payment_instrument_default_updated = webhook_callback_base & {
    data?: {
        readonly type?: string;
        id?: number;
    };
};
export type store_customer_updated = webhook_callback_base & {
    data?: {
        readonly type?: string;
        id?: number;
    };
};
export type store_customer_wildcard = unknown;
export type store_information_updated = webhook_callback_base & {
    data?: {
        type?: string;
    };
};
export type store_order_archived = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type store_order_created = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type store_order_message_created = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
        message?: {
            order_message_id?: number;
        };
    };
};
export type store_order_refund_created = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
        refund?: {
            refund_id?: number;
        };
    };
};
export type store_order_statusUpdated = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
        status?: {
            previous_status_id?: number;
            new_status_id?: number;
        };
    };
};
export type store_order_updated = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type store_order_wildcard = unknown;
export type store_product_created = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type store_product_deleted = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type store_product_inventory_order_updated = webhook_callback_base & {
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
export type method = 'absolute' | 'relative';
export type store_product_inventory_updated = webhook_callback_base & {
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
export type store_product_updated = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type store_product_wildcard = unknown;
export type store_shipment_created = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
        orderId?: number;
    };
};
export type store_shipment_deleted = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
        orderId?: number;
    };
};
export type store_shipment_updated = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
        orderId?: number;
    };
};
export type store_shipment_wildcard = unknown;
export type store_sku_created = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
        sku?: {
            product_id?: number;
            variant_id?: number;
        };
    };
};
export type store_sku_deleted = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
        sku?: {
            product_id?: number;
            variant_id?: number;
        };
    };
};
export type store_sku_inventory_order_updated = webhook_callback_base & {
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
export type store_sku_inventory_updated = webhook_callback_base & {
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
export type store_sku_updated = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
        sku?: {
            product_id?: number;
            variant_id?: number;
        };
    };
};
export type store_sku_wildcard = unknown;
export type store_subscriber_created = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type store_subscriber_deleted = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type store_subscriber_updated = webhook_callback_base & {
    data?: {
        type?: string;
        id?: number;
    };
};
export type store_subscriber_wildcard = unknown;
export type webhook_Base = {
    scope: string;
    destination: string;
    is_active?: boolean;
    headers?: {
        [key: string]: (string);
    } | null;
};
export type webhook_callback_base = {
    readonly created_at?: number;
    store_id?: string;
    producer?: string;
    scope?: string;
    hash?: string;
};
export type webhook_Full = webhook_Base & {
    id?: number;
    client_id?: string;
    store_hash?: string;
    created_at?: number;
    updated_at?: number;
};
export type webhook_Put = {
    scope?: string;
    destination?: string;
    is_active?: boolean;
    headers?: {
        [key: string]: (string);
    } | null;
};
export type CreateWebhooksData = {
    body?: webhook_Base;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
};
export type CreateWebhooksResponse = ({
    data?: webhook_Full;
    meta?: {
        pagination?: Pagination;
    };
});
export type CreateWebhooksError = (error_Full | errorDetailed_Full);
export type GetWebhooksData = {
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    query?: {
        destination?: string;
        is_active?: boolean;
        limit?: number;
        page?: number;
        scope?: string;
    };
};
export type GetWebhooksResponse = ({
    data?: Array<{
        id?: number;
        client_id?: string;
        store_hash?: string;
        scope?: string;
        destination?: string;
        headers?: {
            [key: string]: (string);
        } | null;
        is_active?: boolean;
        created_at?: number;
        updated_at?: number;
    }>;
    meta?: {
        pagination?: Pagination;
    };
});
export type GetWebhooksError = (error_Full);
export type GetWebhookData = {
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path: {
        webhook_id: number;
    };
};
export type GetWebhookResponse = ({
    data?: {
        id?: number;
        client_id?: string;
        store_hash?: string;
        scope?: string;
        destination?: string;
        headers?: {
            [key: string]: (string);
        } | null;
        is_active?: boolean;
        created_at?: number;
        updated_at?: number;
    };
    meta?: {
        pagination?: Pagination;
    };
});
export type GetWebhookError = (error_Full);
export type UpdateWebhookData = {
    body?: webhook_Put;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path: {
        webhook_id: number;
    };
};
export type UpdateWebhookResponse = ({
    data?: {
        id?: number;
        client_id?: string;
        store_hash?: string;
        scope?: string;
        destination?: string;
        headers?: {
            [key: string]: (string);
        } | null;
        is_active?: boolean;
        created_at?: number;
        updated_at?: number;
    };
    meta?: {
        pagination?: Pagination;
    };
});
export type UpdateWebhookError = unknown;
export type DeleteWebhookData = {
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path: {
        webhook_id: number;
    };
};
export type DeleteWebhookResponse = ({
    data?: {
        id?: number;
        client_id?: string;
        store_hash?: string;
        scope?: string;
        destination?: string;
        headers?: {
            [key: string]: (string);
        } | null;
        is_active?: boolean;
        created_at?: number;
        updated_at?: number;
    };
    meta?: {
        pagination?: Pagination;
    };
});
export type DeleteWebhookError = unknown;
export type GetHooksAdminData = {
    query?: {
        is_active?: boolean;
    };
};
export type GetHooksAdminResponse = ({
    data?: {
        emails?: Array<(string)>;
        hooks_list?: Array<{
            id?: number;
            client_id?: string;
            store_hash?: string;
            scope?: string;
            destination?: string;
            headers?: {
                [key: string]: (string);
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
});
export type GetHooksAdminError = (error_Full);
export type UpdateHooksAdminData = {
    body: {
        emails?: Array<(string)>;
    };
};
export type UpdateHooksAdminResponse = (void);
export type UpdateHooksAdminError = (error_Full | errorDetailed_Full);
