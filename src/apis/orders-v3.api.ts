import RequestService from '../helpers/request/request-service';
import * as OrdersV3ApiSpecs from '../generated/orders-v3';

export default class OrdersV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Capture order payment
     *
     * Capture the payment for an order. When there are no payment method validation issues, the capture process is successful, the `payment_status` updates to `capture pending`, and the payment request is scheduled. The payment request itself occurs asynchronously.
     Requires at least one of the following scopes:
     * `store_v2_orders`
     * `store_v2_transactions`
     */
    captureOrderPayment(
        orderId: OrdersV3ApiSpecs.CaptureOrderPaymentData['path']['order_id'],
    ) {
        return this.request.post<any, OrdersV3ApiSpecs.CaptureOrderPaymentError>({
            path: `v3/orders/${orderId}/payment_actions/capture`,
        });
    }

    /**
     * Void
     *
     * Void the payment for an order. When there are no payment method validation issues, the void process is successful, the `payment_status` updates to `void pending`, and the void payment request is scheduled. The payment request itself occurs asynchronously.

     Requires at least one of the following scopes:
     * `store_v2_orders`
     * `store_v2_transactions`
     */
    voidOrderPayment(
        orderId: OrdersV3ApiSpecs.VoidOrderPaymentData['path']['order_id'],
    ) {
        return this.request.post<any, OrdersV3ApiSpecs.VoidOrderPaymentError>({
            path: `v3/orders/${orderId}/payment_actions/void`,
        });
    }

    /**
     * Get Transactions
     *
     * Returns an **orderʼs** transactions.

     **Usage Notes**
     * Depending on the payment method, different information will be available (not all payment gateways return full card or fraud detail).

     Requires at least one of the following scopes:
     * `store_v2_transactions_read_only`
     * `store_v2_transactions`
     */
    getOrderTransactions(
        orderId: OrdersV3ApiSpecs.GetOrderTransactionsData['path']['order_id'],
    ) {
        return this.request.get<any, OrdersV3ApiSpecs.GetOrderTransactionsError>({
            path: `v3/orders/${orderId}/transactions`,
        });
    }

    /**
     * Create a Refund Quote
     *
     * Calculate the tax amount, total refund amount and get available payment options for an order refund by providing items and costs or quantities to refund.

     Requires at least one of the following scopes:
     * `store_v2_orders`
     * `store_v2_transactions`   

     **Notes:**
     * Create a refund quote before performing a refund request to best avoid a `422` error. Check the refund quote's response body for the `refund_methods` array. The `amount` given in the array must match the `amount` used in the refund request body.
     * Order refunds should be processed sequentially. Processing multiple concurrent refunds on the same order is not yet supported.
     */
    createOrderRefundQuotes(
        orderId: OrdersV3ApiSpecs.CreateOrderRefundQuotesData['path']['order_id'],
        requestBody: OrdersV3ApiSpecs.CreateOrderRefundQuotesData['body'],
    ) {
        return this.request.post<any, OrdersV3ApiSpecs.CreateOrderRefundQuotesError>({
            path: `v3/orders/${orderId}/payment_actions/refund_quotes`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Refunds for Order
     *
     * Returns a list of refunds ordered by refund ID in ascending order for the given order.

     Requires at least one of the following scopes:
     * `store_v2_transactions_read_only`
     * `store_v2_transactions`
     * `store_v2_orders_read_only`
     * `store_v2_orders`
     */
    getOrderRefunds(
        orderId: OrdersV3ApiSpecs.GetOrderRefundsData['path']['order_id'],
    ) {
        return this.request.get<any, any>({
            path: `v3/orders/${orderId}/payment_actions/refunds`,
        });
    }

    /**
     * Create a Refund
     *
     * Creates a refund. When there are no payment method validation issues, the refund process is successful and the refund payment request is scheduled. The payment request itself occurs asynchronously.

     Requires at least one of the following scopes:
     * `store_v2_orders`
     * `store_v2_transactions`

     **Note:**
     Order refunds should be processed sequentially. Processing multiple concurrent refunds on the same order are not yet supported.
     */
    createOrderRefund(
        orderId: OrdersV3ApiSpecs.CreateOrderRefundData['path']['order_id'],
        requestBody: OrdersV3ApiSpecs.CreateOrderRefundData['body'],
    ) {
        return this.request.post<any, OrdersV3ApiSpecs.CreateOrderRefundError>({
            path: `v3/orders/${orderId}/payment_actions/refunds`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Refund
     *
     * Returns a refund by refund ID.
     */
    getOrderRefund(
        refundId: OrdersV3ApiSpecs.GetOrderRefundData['path']['refund_id'],
    ) {
        return this.request.get<any, any>({
            path: `v3/orders/payment_actions/refunds/${refundId}`,
        });
    }

    /**
     * Get All Refunds
     *
     * Returns a list of refunds ordered by refund ID in ascending order.

     Requires at least one of the following scopes:
     * `store_v2_transactions_read_only`
     * `store_v2_transactions`
     * `store_v2_orders_read_only`
     * `store_v2_orders`
     */
    getOrdersRefunds(
        query?: OrdersV3ApiSpecs.GetOrdersRefundsData['query'],
    ) {
        return this.request.get<any, any>({
            path: 'v3/orders/payment_actions/refunds',
            query,
        });
    }

    /**
     * Get Order Metafields
     *
     * Gets a `Metafield` object list, by `order_id`.

     The maximum number of metafields allowed on each order, product, category, variant, or brand is 250 per client ID.

     */
    getOrderMetafields(
        orderId: OrdersV3ApiSpecs.GetOrderMetafieldsData['path']['order_id'],
        query?: OrdersV3ApiSpecs.GetOrderMetafieldsData['query'],
    ) {
        return this.request.get<OrdersV3ApiSpecs.GetOrderMetafieldsResponse, any>({
            path: `v3/orders/${orderId}/metafields`,
            query,
        });
    }

    /**
     * Create Metafields
     *
     * Creates an order `Metafield`.

     The maximum number of metafields allowed on each order, product, category, variant, or brand is 250 per client ID.
     */
    createOrderMetafield(
        orderId: OrdersV3ApiSpecs.CreateOrderMetafieldData['path']['order_id'],
        requestBody: OrdersV3ApiSpecs.CreateOrderMetafieldData['body'],
    ) {
        return this.request.post<OrdersV3ApiSpecs.CreateOrderMetafieldResponse, OrdersV3ApiSpecs.CreateOrderMetafieldError>({
            path: `v3/orders/${orderId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Metafield
     *
     * Gets a `Metafield`, by `order_id`.

     */
    getOrderMetafield(
        orderId: OrdersV3ApiSpecs.GetOrderMetafieldData['path']['order_id'],
        metafieldId: OrdersV3ApiSpecs.GetOrderMetafieldData['path']['metafield_id'],
    ) {
        return this.request.get<OrdersV3ApiSpecs.GetOrderMetafieldResponse, OrdersV3ApiSpecs.GetOrderMetafieldError>({
            path: `v3/orders/${orderId}/metafields/${metafieldId}`,
        });
    }

    /**
     * Update a Metafield
     *
     * Updates a `Metafield` object.

     The maximum number of metafields allowed on each order, product, category, variant, or brand is 250 per client ID.
     */
    updateOrderMetafield(
        orderId: OrdersV3ApiSpecs.UpdateOrderMetafieldData['path']['order_id'],
        metafieldId: OrdersV3ApiSpecs.UpdateOrderMetafieldData['path']['metafield_id'],
        requestBody: OrdersV3ApiSpecs.UpdateOrderMetafieldData['body'],
    ) {
        return this.request.put<OrdersV3ApiSpecs.UpdateOrderMetafieldResponse, OrdersV3ApiSpecs.UpdateOrderMetafieldError>({
            path: `v3/orders/${orderId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Metafield
     *
     * Deletes a `Metafield`.

     */
    deleteOrderMetafield(
        orderId: OrdersV3ApiSpecs.DeleteOrderMetafieldData['path']['order_id'],
        metafieldId: OrdersV3ApiSpecs.DeleteOrderMetafieldData['path']['metafield_id'],
    ) {
        return this.request.delete<any, OrdersV3ApiSpecs.DeleteOrderMetafieldError>({
            path: `v3/orders/${orderId}/metafields/${metafieldId}`,
        });
    }

    /**
     * Get Global Order Settings
     *
     * Returns global order settings.
     */
    getGlobalOrderSettings(
    ) {
        return this.request.get<OrdersV3ApiSpecs.GetGlobalOrderSettingsResponse, OrdersV3ApiSpecs.GetGlobalOrderSettingsError>({
            path: 'v3/orders/settings',
        });
    }

    /**
     * Update Global Order Settings
     *
     * Updates global order settings.
     */
    updateGlobalOrderSettings(
        requestBody: OrdersV3ApiSpecs.UpdateGlobalOrderSettingsData['body'],
    ) {
        return this.request.put<OrdersV3ApiSpecs.UpdateGlobalOrderSettingsResponse, OrdersV3ApiSpecs.UpdateGlobalOrderSettingsError>({
            path: 'v3/orders/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Channel Order Settings
     *
     * Returns order settings for a specific channel.
     */
    getChannelOrderSettings(
        channelId: OrdersV3ApiSpecs.GetChannelOrderSettingsData['path']['channel_id'],
    ) {
        return this.request.get<OrdersV3ApiSpecs.GetChannelOrderSettingsResponse, OrdersV3ApiSpecs.GetChannelOrderSettingsError>({
            path: `v3/orders/settings/channels/${channelId}`,
        });
    }

    /**
     * Update Channel Order Settings
     *
     * Updates order settings for a specific channel.

      **Note:** You must override both notifications `email_addresses` or neither, i.e. either both notification `email_addresses` are an array of valid email addresses, or both `email_addresses` must be null. You may not have one set to an array of addresses and the other set to `null`.
     */
    updateChannelOrderSettings(
        channelId: OrdersV3ApiSpecs.UpdateChannelOrderSettingsData['path']['channel_id'],
        requestBody: OrdersV3ApiSpecs.UpdateChannelOrderSettingsData['body'],
    ) {
        return this.request.put<OrdersV3ApiSpecs.UpdateChannelOrderSettingsResponse, OrdersV3ApiSpecs.UpdateChannelOrderSettingsError>({
            path: `v3/orders/settings/channels/${channelId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get All Order Metafields
     *
     * Get all order metafields.
     */
    getOrdersMetafields(
        query?: OrdersV3ApiSpecs.GetOrdersMetafieldsData['query'],
    ) {
        return this.request.get<OrdersV3ApiSpecs.GetOrdersMetafieldsResponse, any>({
            path: 'v3/orders/metafields',
            query,
        });
    }

    /**
     * Create multiple Metafields
     *
     * Create multiple metafields.
     */
    createOrdersMetafields(
        requestBody: OrdersV3ApiSpecs.CreateOrdersMetafieldsData['body'],
    ) {
        return this.request.post<OrdersV3ApiSpecs.CreateOrdersMetafieldsResponse, OrdersV3ApiSpecs.CreateOrdersMetafieldsError>({
            path: 'v3/orders/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update multiple Metafields
     *
     * Update multiple metafields.
     */
    updateOrdersMetafields(
        requestBody: OrdersV3ApiSpecs.UpdateOrdersMetafieldsData['body'],
    ) {
        return this.request.put<OrdersV3ApiSpecs.UpdateOrdersMetafieldsResponse, OrdersV3ApiSpecs.UpdateOrdersMetafieldsError>({
            path: 'v3/orders/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Multiple Metafields
     *
     * Delete all order metafields.
     */
    deleteOrdersMetafields(
        requestBody: OrdersV3ApiSpecs.DeleteOrdersMetafieldsData['body'],
    ) {
        return this.request.delete<OrdersV3ApiSpecs.DeleteOrdersMetafieldsResponse, OrdersV3ApiSpecs.DeleteOrdersMetafieldsError>({
            path: 'v3/orders/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
