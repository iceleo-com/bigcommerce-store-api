import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as OrdersV3ApiSpecs from '../generated/orders-v3';
export * as OrdersV3ApiSpecs from '../generated/orders-v3';

export class OrdersV3Api {
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
    paymentactioncapture(
        orderId: OrdersV3ApiSpecs.PaymentactioncaptureData['path']['order_id'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<OrdersV3ApiSpecs.PaymentactioncaptureResponses[201]>>,(RequestErrorResponse<400, Required<OrdersV3ApiSpecs.PaymentactioncaptureErrors[400]>> | RequestErrorResponse<404, Required<OrdersV3ApiSpecs.PaymentactioncaptureErrors[404]>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.PaymentactioncaptureErrors[422]>> | RequestErrorResponse<502, Required<OrdersV3ApiSpecs.PaymentactioncaptureErrors[502]>> | RequestErrorResponse<503, Required<OrdersV3ApiSpecs.PaymentactioncaptureErrors[503]>> | RequestErrorResponse<504, Required<OrdersV3ApiSpecs.PaymentactioncaptureErrors[504]>>)>({
            path: `v3/orders/${orderId}/payment_actions/capture`,
        });
    }

    /**
     * @deprecated Use `paymentactioncapture` instead.
     */
    captureOrderPayment(...args: Parameters<OrdersV3Api['paymentactioncapture']>) {
        return this.paymentactioncapture(...args);
    }

    /**
     * Void
     *
     * Void the payment for an order. When there are no payment method validation issues, the void process is successful, the `payment_status` updates to `void pending`, and the void payment request is scheduled. The payment request itself occurs asynchronously.

     Requires at least one of the following scopes:
     * `store_v2_orders`
     * `store_v2_transactions`
     */
    paymentactionvoid(
        orderId: OrdersV3ApiSpecs.PaymentactionvoidData['path']['order_id'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<OrdersV3ApiSpecs.PaymentactionvoidResponses[201]>>,(RequestErrorResponse<400, Required<OrdersV3ApiSpecs.PaymentactionvoidErrors[400]>> | RequestErrorResponse<404, Required<OrdersV3ApiSpecs.PaymentactionvoidErrors[404]>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.PaymentactionvoidErrors[422]>> | RequestErrorResponse<502, Required<OrdersV3ApiSpecs.PaymentactionvoidErrors[502]>> | RequestErrorResponse<503, Required<OrdersV3ApiSpecs.PaymentactionvoidErrors[503]>> | RequestErrorResponse<504, Required<OrdersV3ApiSpecs.PaymentactionvoidErrors[504]>>)>({
            path: `v3/orders/${orderId}/payment_actions/void`,
        });
    }

    /**
     * @deprecated Use `paymentactionvoid` instead.
     */
    voidOrderPayment(...args: Parameters<OrdersV3Api['paymentactionvoid']>) {
        return this.paymentactionvoid(...args);
    }

    /**
     * Get Transactions
     *
     * Returns an **order's** transactions.

     **Usage Notes**
     * Depending on the payment method, different information will be available (not all payment gateways return full card or fraud detail).

     Requires at least one of the following scopes:
     * `store_v2_transactions_read_only`
     * `store_v2_transactions`
     */
    getTransactions(
        orderId: OrdersV3ApiSpecs.GetTransactionsData['path']['order_id'],
    ) {
        return this.request.get<(RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.GetTransactionsResponses[200]>> | RequestSuccessResponse<204, Required<OrdersV3ApiSpecs.GetTransactionsResponses[204]>>),RequestErrorResponse<404, Required<OrdersV3ApiSpecs.GetTransactionsErrors[404]>>>({
            path: `v3/orders/${orderId}/transactions`,
        });
    }

    /**
     * @deprecated Use `getTransactions` instead.
     */
    getOrderTransactions(...args: Parameters<OrdersV3Api['getTransactions']>) {
        return this.getTransactions(...args);
    }

    /**
     * Create a Refund Quote
     *
     * Calculate the tax amount, total refund amount and get available payment options for an order refund by providing items and costs or quantities to refund.

     Requires at least one of the following scopes:
     * `store_v2_orders`
     * `store_v2_transactions`

     **Note:**
     Order refunds are processed consecutively. Processing synchronous refunds on an order are not yet supported.
     */
    postrefundquote(
        orderId: OrdersV3ApiSpecs.PostrefundquoteData['path']['order_id'],
        requestBody: OrdersV3ApiSpecs.PostrefundquoteData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<OrdersV3ApiSpecs.PostrefundquoteResponses[201]>>,RequestErrorResponse<422, Required<OrdersV3ApiSpecs.PostrefundquoteErrors[422]>>>({
            path: `v3/orders/${orderId}/payment_actions/refund_quotes`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `postrefundquote` instead.
     */
    createOrderRefundQuotes(...args: Parameters<OrdersV3Api['postrefundquote']>) {
        return this.postrefundquote(...args);
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
    getorderrefunds(
        orderId: OrdersV3ApiSpecs.GetorderrefundsData['path']['order_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.GetorderrefundsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/orders/${orderId}/payment_actions/refunds`,
        });
    }

    /**
     * @deprecated Use `getorderrefunds` instead.
     */
    getOrderRefunds(...args: Parameters<OrdersV3Api['getorderrefunds']>) {
        return this.getorderrefunds(...args);
    }

    /**
     * Create a Refund
     *
     * Creates a refund. When there are no payment method validation issues, the refund process is successful and the refund payment request is scheduled. The payment request itself occurs asynchronously.

     Requires at least one of the following scopes:
     * `store_v2_orders`
     * `store_v2_transactions`

     **Note:**
     Order refunds are processed consecutively. Processing synchronous refunds on an order are not yet supported.
     */
    postrefund(
        orderId: OrdersV3ApiSpecs.PostrefundData['path']['order_id'],
        requestBody: OrdersV3ApiSpecs.PostrefundData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<OrdersV3ApiSpecs.PostrefundResponses[201]>>,(RequestErrorResponse<422, Required<OrdersV3ApiSpecs.PostrefundErrors[422]>> | RequestErrorResponse<503, Required<OrdersV3ApiSpecs.PostrefundErrors[503]>>)>({
            path: `v3/orders/${orderId}/payment_actions/refunds`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `postrefund` instead.
     */
    createOrderRefund(...args: Parameters<OrdersV3Api['postrefund']>) {
        return this.postrefund(...args);
    }

    /**
     * Get a Refund
     *
     * Returns a refund by refund ID.
     */
    refundIdget(
        refundId: OrdersV3ApiSpecs.RefundIdGetData['path']['refund_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.RefundIdGetResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/orders/payment_actions/refunds/${refundId}`,
        });
    }

    /**
     * @deprecated Use `refundIdget` instead.
     */
    getOrderRefund(...args: Parameters<OrdersV3Api['refundIdget']>) {
        return this.refundIdget(...args);
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
    getrefunds(
        query?: OrdersV3ApiSpecs.GetrefundsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.GetrefundsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/orders/payment_actions/refunds',
            query,
        });
    }

    /**
     * @deprecated Use `getrefunds` instead.
     */
    getOrdersRefunds(...args: Parameters<OrdersV3Api['getrefunds']>) {
        return this.getrefunds(...args);
    }

    /**
     * Create Refund Quotes - BATCH
     *
     * Calculate the tax amount, total refund amount and get available payment options for an order refund by providing items and costs or quantities to refund.

     This endpoint will accept a batch of one or more.

     Requires at least one of the following scopes:
     * `store_v2_orders`
     * `store_v2_transactions`
     */
    postrefundquotes(
        requestBody: OrdersV3ApiSpecs.PostrefundquotesData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<OrdersV3ApiSpecs.PostrefundquotesResponses[201]>>,(RequestErrorResponse<422, Required<OrdersV3ApiSpecs.PostrefundquotesErrors[422]>> | RequestErrorResponse<503, Required<OrdersV3ApiSpecs.PostrefundquotesErrors[503]>>)>({
            path: 'v3/orders/payment_actions/refund_quotes',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Metafields
     *
     * Gets a `Metafield` object list, by `order_id`.

     The maximum number of metafields allowed on each order, product, category, variant, or brand is 250 per client ID.

     */
    getOrderMetafieldsByOrderId(
        orderId: OrdersV3ApiSpecs.GetOrderMetafieldsByOrderIdData['path']['order_id'],
        query?: OrdersV3ApiSpecs.GetOrderMetafieldsByOrderIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.GetOrderMetafieldsByOrderIdResponses[200]>>,RequestErrorResponse<404, Required<OrdersV3ApiSpecs.GetOrderMetafieldsByOrderIdErrors[404]>>>({
            path: `v3/orders/${orderId}/metafields`,
            query,
        });
    }

    /**
     * @deprecated Use `getOrderMetafieldsByOrderId` instead.
     */
    getOrderMetafields(...args: Parameters<OrdersV3Api['getOrderMetafieldsByOrderId']>) {
        return this.getOrderMetafieldsByOrderId(...args);
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
        return this.request.post<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.CreateOrderMetafieldResponses[200]>>,(RequestErrorResponse<409, Required<OrdersV3ApiSpecs.CreateOrderMetafieldErrors[409]>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.CreateOrderMetafieldErrors[422]>>)>({
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
    getOrderMetafieldByOrderIdAndMetafieldId(
        orderId: OrdersV3ApiSpecs.GetOrderMetafieldByOrderIdAndMetafieldIdData['path']['order_id'],
        metafieldId: OrdersV3ApiSpecs.GetOrderMetafieldByOrderIdAndMetafieldIdData['path']['metafield_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.GetOrderMetafieldByOrderIdAndMetafieldIdResponses[200]>>,RequestErrorResponse<404, Required<OrdersV3ApiSpecs.GetOrderMetafieldByOrderIdAndMetafieldIdErrors[404]>>>({
            path: `v3/orders/${orderId}/metafields/${metafieldId}`,
        });
    }

    /**
     * @deprecated Use `getOrderMetafieldByOrderIdAndMetafieldId` instead.
     */
    getOrderMetafield(...args: Parameters<OrdersV3Api['getOrderMetafieldByOrderIdAndMetafieldId']>) {
        return this.getOrderMetafieldByOrderIdAndMetafieldId(...args);
    }

    /**
     * Update a Metafield
     *
     * Updates a `Metafield` object.

     The maxiumum number of metafields allowed on each order, product, category, variant, or brand is 250 per client ID.
     */
    updateOrderMetafield(
        orderId: OrdersV3ApiSpecs.UpdateOrderMetafieldData['path']['order_id'],
        metafieldId: OrdersV3ApiSpecs.UpdateOrderMetafieldData['path']['metafield_id'],
        requestBody: OrdersV3ApiSpecs.UpdateOrderMetafieldData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.UpdateOrderMetafieldResponses[200]>>,RequestErrorResponse<404, Required<OrdersV3ApiSpecs.UpdateOrderMetafieldErrors[404]>>>({
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
    deleteOrderMetafieldById(
        orderId: OrdersV3ApiSpecs.DeleteOrderMetafieldByIdData['path']['order_id'],
        metafieldId: OrdersV3ApiSpecs.DeleteOrderMetafieldByIdData['path']['metafield_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<OrdersV3ApiSpecs.DeleteOrderMetafieldByIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/orders/${orderId}/metafields/${metafieldId}`,
        });
    }

    /**
     * @deprecated Use `deleteOrderMetafieldById` instead.
     */
    deleteOrderMetafield(...args: Parameters<OrdersV3Api['deleteOrderMetafieldById']>) {
        return this.deleteOrderMetafieldById(...args);
    }

    /**
     * Get Global Order Settings
     *
     * Returns global order settings.
     */
    getGlobalOrderSettings(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.GetGlobalOrderSettingsResponses[200]>>,RequestErrorResponse<400, Required<OrdersV3ApiSpecs.GetGlobalOrderSettingsErrors[400]>>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.UpdateGlobalOrderSettingsResponses[200]>>,(RequestErrorResponse<400, Required<OrdersV3ApiSpecs.UpdateGlobalOrderSettingsErrors[400]>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.UpdateGlobalOrderSettingsErrors[422]>>)>({
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
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.GetChannelOrderSettingsResponses[200]>>,RequestErrorResponse<400, Required<OrdersV3ApiSpecs.GetChannelOrderSettingsErrors[400]>>>({
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
        return this.request.put<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.UpdateChannelOrderSettingsResponses[200]>>,(RequestErrorResponse<400, Required<OrdersV3ApiSpecs.UpdateChannelOrderSettingsErrors[400]>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.UpdateChannelOrderSettingsErrors[422]>>)>({
            path: `v3/orders/settings/channels/${channelId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
