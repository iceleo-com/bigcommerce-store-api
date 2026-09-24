import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as OrdersV2Oas2ApiSpecs from '../generated/orders-v2-oas2';
export * as OrdersV2Oas2ApiSpecs from '../generated/orders-v2-oas2';

export class OrdersV2Oas2Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Order
     *
     * Gets an *Order*. To learn more about creating or updating orders, see [Orders Overview](/developer/docs/admin/checkout-and-cart/orders).

     > #### Note
     > * The order object doesn't include a tax-exempt status. Tax exemption is a customer attribute, stored in the `tax_exempt_category` field of the customer record. To check whether the shopper is tax exempt, use the order's `customer_id` with the [Get Customers](/developer/api-reference/rest/admin/management/customers/v3/get-customers) endpoint. An empty `tax_exempt_category` means the customer isn't exempt.
     > * A `total_tax` of `0` doesn't indicate a tax-exempt customer. Tax can also be zero because of the shipping destination, tax settings, or the tax provider's calculation.
     > * Guest orders have a `customer_id` of `0` and no customer record. The order doesn't store the exemption category in effect at checkout, so the customer's current value may differ from what applied to the order.
     */
    getOrder(
        orderId: OrdersV2Oas2ApiSpecs.GetOrderData['path']['order_id'],
        query?: OrdersV2Oas2ApiSpecs.GetOrderData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderResponses[200]>>,RequestErrorResponse<404, Required<OrdersV2Oas2ApiSpecs.GetOrderErrors[404]>>>({
            path: `v2/orders/${orderId}`,
            query,
        });
    }

    /**
     * Update Order
     *
     * Updates an *Order*. 

     To add a product to an existing order, don't include `id` in the body. Include `product_options` if adding a product with variants.

     To update a product in an order, include `id` in the body. The body should only contain the fields that need to be updated. Those fields that are omitted will not be changed.

     To remove a product from an order, set that product’s `quantity` to `0`.

     After the update, the PUT request clears all discounts and promotions applied to the changed order line items. Since the order data syncs with other ERP systems, like Amazon or eBay, the updated order returns to the default setting, removing any applied discounts.

     To update order fees, include the fee id in the request body along with all relevant fee fields. Fees not included will be deleted. Fees with an id will be updated, and fees without an id will be created as new.

     **Notes**

     * Sub-resources like products in the /v2/orders PUT request behave like PATCH, updating only the provided fields. Fees, however, follow standard PUT semantics and fees in the request body will fully replace existing ones. 
     To retain an existing fee, include it in the body with its associated id. 
     * The values for cost_ex_tax, cost_inc_tax and cost_tax in the fees payload should reflect the tax rate associated with the tax_class_id. For a 10% tax rate, the difference between cost_inc_tax and cost_ex_tax should be 10%. If no tax_class_id is provided, the store's default "tax class for fee" will apply. Incorrect data may lead to issues in downstream operations like refunds.

     To learn more about creating or updating orders, see [Orders Overview](/developer/docs/admin/checkout-and-cart/orders).

     > #### Note
     > * If historical orders processed on another eCommerce platform are being migrated to BigCommerce, supply the `external_source` field with the code **M-MIG**. This code will exclude the historical orders from the store’s GMV/order count, which factors into pricing.
     */
    updateOrder(
        orderId: OrdersV2Oas2ApiSpecs.UpdateOrderData['path']['order_id'],
        requestBody: OrdersV2Oas2ApiSpecs.UpdateOrderData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.UpdateOrderResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Archive Order
     *
     * Archives an order. To remove a single product from an order, see `PUT /orders/{order_id}`.
     */
    deleteOrder(
        orderId: OrdersV2Oas2ApiSpecs.DeleteOrderData['path']['order_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<OrdersV2Oas2ApiSpecs.DeleteOrderResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}`,
        });
    }

    /**
     * Get Count of Orders
     *
     * Gets an array of orders in the store organized by order status.
     */
    getOrdersCount(
        query?: OrdersV2Oas2ApiSpecs.GetOrdersCountData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrdersCountResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/orders/count',
            query,
        });
    }

    /**
     * List Orders
     *
     * Gets a list of orders using the filter query.

     **Notes**

     * The default sort is by order id, from lowest to highest.
     * By default, requests sent without parameters will only return 50 orders. 
     *
     * Responds with `204` and no data when nothing matches.
     */
    getOrders(
        query?: OrdersV2Oas2ApiSpecs.GetOrdersData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrdersResponses[200]>> | RequestSuccessResponse<204, void>,RequestErrorResponse<400, void>>({
            path: 'v2/orders',
            query,
        });
    }

    /**
     * Create Order
     *
     * Creates an *Order*. To learn more about creating or updating orders, see [Orders Overview](/developer/docs/admin/checkout-and-cart/orders).

     Create an order with an existing catalog product or a custom product.

     **Required Fields**

     * `products` or `consignments`
     * `billing_address`

     When you create an order, the `consignment(s)` array allows you to create pickup consignments.
     - An order can have either a pickup or a shipping fulfillment method, but not both.
     - An order can have only one pickup consignment.

     Choose from one of the following:
     1. Create order with a shipping fulfillment method using `shipping_addresses` and `products`, i.e. legacy mode
     2. Create order with a pickup fulfillment method using `consignments`, i.e. Consignment mode

     You can fulfill an order with shipping or pickup, but not both.

     This means that if the `consignments` array is present in the request, then _none_ of the following may be present and vice-versa:
     - `shipping_addresses`
     - `products`

     Include the `fees` object along with all its attributes in the request to create order-level fees for the newly created order.

     **Notes**

     * The values for cost_ex_tax, cost_inc_tax and cost_tax in the fees payload should reflect the tax rate associated with the tax_class_id. For a 10% tax rate, the difference between cost_inc_tax and cost_ex_tax should be 10%. If no tax_class_id is provided, the store's default "tax class for fee" will apply. Incorrect data may lead to issues in downstream operations like refunds.

     The V2 Orders API will not trigger the typical [Order Email](https://support.bigcommerce.com/s/article/Customizing-Emails?language=en_US) when creating orders. To create an order that does trigger this email, you can instead [create a cart](/developer/api-reference/rest/admin/management/carts/carts-single/create-cart) and [convert that cart into an order](/developer/api-reference/rest/admin/management/checkouts/orders/create-order).

     If you are building an app that creates orders, it must include your app's ID in the `external_source` field of new orders to be approved for the App Marketplace. See [App Store Approval Requirements](/developer/docs/integrations/apps/guide/approval-requirements#functionality) to learn more.

     > #### Note
     > * If historical orders processed on another eCommerce platform are being migrated to BigCommerce, supply the `external_source` field with the code **M-MIG**. This code will exclude the historical orders from the store’s GMV/order count, which factors into pricing.
     */
    createOrder(
        requestBody: OrdersV2Oas2ApiSpecs.CreateOrderData['body'],
        query?: OrdersV2Oas2ApiSpecs.CreateOrderData['query'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.CreateOrderResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/orders',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Delete All Orders
     *
     * Archives all orders.
     */
    deleteOrders(
        query?: OrdersV2Oas2ApiSpecs.DeleteOrdersData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<OrdersV2Oas2ApiSpecs.DeleteOrdersResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v2/orders',
            query,
        });
    }

    /**
     * List Consignments
     *
     * Get all consignments for an order. 
     */
    getOrderConsignments(
        orderId: OrdersV2Oas2ApiSpecs.GetOrderConsignmentsData['path']['order_id'],
        query?: OrdersV2Oas2ApiSpecs.GetOrderConsignmentsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderConsignmentsResponses[200]>>,RequestErrorResponse<404, Required<OrdersV2Oas2ApiSpecs.GetOrderConsignmentsErrors[404]>>>({
            path: `v2/orders/${orderId}/consignments`,
            query,
        });
    }

    /**
     * List Consignment Shipping Quotes
     *
     * Get all shipping quotes persisted on an order for a shipping consignment.
     This is a read-only endpoint whose response depends on the shipping quote. You can only generate a shipping quote using the storefront at this time. Orders that are created in the control panel, or using the API, return a 204 status response since you can't generate a shipping quote during that process.
     */
    getOrderConsignmentShippingQuotes(
        orderId: OrdersV2Oas2ApiSpecs.GetOrderConsignmentShippingQuotesData['path']['order_id'],
        shippingConsignmentId: OrdersV2Oas2ApiSpecs.GetOrderConsignmentShippingQuotesData['path']['shipping_consignment_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderConsignmentShippingQuotesResponses[200]>>,RequestErrorResponse<404, Required<OrdersV2Oas2ApiSpecs.GetOrderConsignmentShippingQuotesErrors[404]>>>({
            path: `v2/orders/${orderId}/consignments/shipping/${shippingConsignmentId}/shipping_quotes`,
        });
    }

    /**
     * List Order Coupons
     *
     * Lists all order coupons. Optional parameters can be passed in.

     |Type `int`|Type Name|
     |-|-|
     |`0`|`per_item_discount`|
     |`1`|`percentage_discount`|
     |`2`|`per_total_discount`|
     |`3`|`shipping_discount`|
     |`4`|`free_shipping`|
     |`5`|`promotion`|
     *
     * Responds with `204` and no data when the order has none.
     */
    getOrderCoupons(
        orderId: OrdersV2Oas2ApiSpecs.GetOrderCouponsData['path']['order_id'],
        query?: OrdersV2Oas2ApiSpecs.GetOrderCouponsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderCouponsResponses[200]>> | RequestSuccessResponse<204, void>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/coupons`,
            query,
        });
    }

    /**
     * List Fees
     *
     * Get all fees for an order. 
     *
     * Responds with `204` and no data when the order has none.
     */
    getOrderFees(
        orderId: OrdersV2Oas2ApiSpecs.GetOrderFeesData['path']['order_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderFeesResponses[200]>> | RequestSuccessResponse<204, void>,RequestErrorResponse<404, Required<OrdersV2Oas2ApiSpecs.GetOrderFeesErrors[404]>>>({
            path: `v2/orders/${orderId}/fees`,
        });
    }

    /**
     * List Order Messages
     *
     * Gets the messages associated with an order.
     *
     * Responds with `204` and no data when the order has none.
     */
    getOrderMessages(
        orderId: OrdersV2Oas2ApiSpecs.GetOrderMessagesData['path']['order_id'],
        query?: OrdersV2Oas2ApiSpecs.GetOrderMessagesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderMessagesResponses[200]>> | RequestSuccessResponse<204, void>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/messages`,
            query,
        });
    }

    /**
     * List Order Products
     *
     * Lists 50 order products on an order using `order_id`. By default, items are sorted from lowest to highest according to a newly created ID, separate from the `order_id` and the `product_id`.

     **Note**: The response `id` is required when you [create order shipments](/developer/docs/admin/checkout-and-cart/orders#creating-order-shipments).
     */
    getOrderProducts(
        orderId: OrdersV2Oas2ApiSpecs.GetOrderProductsData['path']['order_id'],
        query?: OrdersV2Oas2ApiSpecs.GetOrderProductsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderProductsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/products`,
            query,
        });
    }

    /**
     * Get Order Product
     *
     * Gets a product line item associated with the order.
     */
    getOrderProduct(
        orderId: OrdersV2Oas2ApiSpecs.GetOrderProductData['path']['order_id'],
        productId: OrdersV2Oas2ApiSpecs.GetOrderProductData['path']['product_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderProductResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/products/${productId}`,
        });
    }

    /**
     * List Order Shipments
     *
     * Gets a list of all shipments on an order.
     *
     * Responds with `204` and no data when the order has none.
     */
    getOrderShipments(
        orderId: OrdersV2Oas2ApiSpecs.GetOrderShipmentsData['path']['order_id'],
        query?: OrdersV2Oas2ApiSpecs.GetOrderShipmentsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderShipmentsResponses[200]>> | RequestSuccessResponse<204, void>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/shipments`,
            query,
        });
    }

    /**
     * Create Order Shipment
     *
     * Creates an *Order Shipment*. For more details, see [Shipping an Order](/developer/docs/admin/checkout-and-cart/orders#creating-order-shipments).

     **Required Fields**
     *   order_address_id
     *   items

     **Usage notes**

     There are three methods for generating a tracking link for a shipment:

     1. Use `shipping_provider` and `tracking_number`: This generates a link to one of our integrated providers that you can click from the BigCommerce control panel and customer-facing emails. If a merchant still needs to set up a shipping provider or if the provider is not one of our natively integrated providers, you will click on an Aftership tracking link instead. The `generated_tracking_link` property in the API response represents one of these tracking links. The `tracking_link` property in the API response will remain empty.

     2. Use `tracking_carrier` and `tracking_number`: This also creates a link to one of our integrated providers or an Aftership tracking link that you can click in both the BigCommerce control panel and customer-facing emails. Like the previous method, the `generated_tracking_link` property in the API response represents this tracking link. The `tracking_link` property in the API response will remain empty.

     3. Supply a custom `tracking_link`: By providing a value for the `tracking_link` property, you can use your own tracking link within the BigCommerce control panel and in customer-facing emails. The API response will return your supplied tracking link as part of the `tracking_link` property in the response. In situations when there isn't a `generated_tracking_link`, the property in the API response will remain empty. 

     Acceptable values for `shipping_provider` include the following, and this list may be updated at any time: 
      - `""`, an empty string
      - `auspost`
      - `canadapost`
      - `endicia`
      - `usps`
      - `fedex`
      - `royalmail`
      - `ups`
      - `upsready`
      - `shipperhq`
      - `carrier_{your_carrier_id}`, when the carrier is a [third-party Shipping Provider](/developer/docs/integrations/shipping-providers) 

     Acceptable values for `tracking_carrier` include an empty string (`""`) or one of the valid [tracking-carrier values](https://www.aftership.com/docs/tracking/others/supported-couriers).

     */
    createOrderShipments(
        orderId: OrdersV2Oas2ApiSpecs.CreateOrderShipmentsData['path']['order_id'],
        requestBody: OrdersV2Oas2ApiSpecs.CreateOrderShipmentsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<OrdersV2Oas2ApiSpecs.CreateOrderShipmentsResponses[201]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/shipments`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Order Shipments
     *
     * Deletes all shipments associated with an order.
     */
    deleteOrderShipments(
        orderId: OrdersV2Oas2ApiSpecs.DeleteOrderShipmentsData['path']['order_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<OrdersV2Oas2ApiSpecs.DeleteOrderShipmentsResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/shipments`,
        });
    }

    /**
     * Get Count of Order Shipments
     *
     * Gets a count of the number of shipments that have been made for a single order.
     */
    getOrderShipmentsCount(
        orderId: OrdersV2Oas2ApiSpecs.GetOrderShipmentsCountData['path']['order_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderShipmentsCountResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/shipments/count`,
        });
    }

    /**
     * Get Shipment
     *
     * Gets an order shipment.
     */
    getOrderShipment(
        orderId: OrdersV2Oas2ApiSpecs.GetOrderShipmentData['path']['order_id'],
        shipmentId: OrdersV2Oas2ApiSpecs.GetOrderShipmentData['path']['shipment_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderShipmentResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/shipments/${shipmentId}`,
        });
    }

    /**
     * Update Shipment
     *
     * Updates an existing shipment associated with an order.
     */
    updateOrderShipment(
        orderId: OrdersV2Oas2ApiSpecs.UpdateOrderShipmentData['path']['order_id'],
        shipmentId: OrdersV2Oas2ApiSpecs.UpdateOrderShipmentData['path']['shipment_id'],
        requestBody: OrdersV2Oas2ApiSpecs.UpdateOrderShipmentData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.UpdateOrderShipmentResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/shipments/${shipmentId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Order Shipment
     *
     * Deletes a shipment associated with an order.
     */
    deleteOrderShipment(
        orderId: OrdersV2Oas2ApiSpecs.DeleteOrderShipmentData['path']['order_id'],
        shipmentId: OrdersV2Oas2ApiSpecs.DeleteOrderShipmentData['path']['shipment_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<OrdersV2Oas2ApiSpecs.DeleteOrderShipmentResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/shipments/${shipmentId}`,
        });
    }

    /**
     * List Order Shipping Addresses
     *
     * Get all shipping addresses on an order using the `order_id`.

     Returned in the response is shipping_quotes object. Please use the Get Shipping Quotes Endpoint. Using the response will return a 204 for the shipping quote.
     */
    getOrderShippingAddresses(
        orderId: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressesData['path']['order_id'],
        query?: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderShippingAddressesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/shipping_addresses`,
            query,
        });
    }

    /**
     * Get Shipping Address
     *
     * Gets a shipping address associated with an order.

     Returned in the response is shipping_quotes object. Please use the Get Shipping Quotes Endpoint. Using the response will return a 204 for the shipping quote.
     */
    getOrderShippingAddress(
        orderId: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressData['path']['order_id'],
        id: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressData['path']['id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderShippingAddressResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/shipping_addresses/${id}`,
        });
    }

    /**
     * Update Shipping Address
     *
     * Update a shipping address associated with an order.

     **Note**: Updating a shipping address will NOT trigger the recalculation of shipping cost and tax
     */
    updateOrderShippingAddress(
        orderId: OrdersV2Oas2ApiSpecs.UpdateOrderShippingAddressData['path']['order_id'],
        id: OrdersV2Oas2ApiSpecs.UpdateOrderShippingAddressData['path']['id'],
        requestBody: OrdersV2Oas2ApiSpecs.UpdateOrderShippingAddressData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.UpdateOrderShippingAddressResponses[200]>>,(RequestErrorResponse<400, Required<OrdersV2Oas2ApiSpecs.UpdateOrderShippingAddressErrors[400]>> | RequestErrorResponse<404, Required<OrdersV2Oas2ApiSpecs.UpdateOrderShippingAddressErrors[404]>>)>({
            path: `v2/orders/${orderId}/shipping_addresses/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * List Order Shipping Quotes
     *
     * Gets all shipping quotes persisted on an order.

     This is a read-only endpoint and the output can vary based on the shipping quote. A shipping quote can only be generated using the storefront at this time. Orders that are created in the control panel or using the API return a 204 for this endpoint since a shipping quote is not generated during that process.
     */
    getOrderShippingAddressShippingQuotes(
        orderId: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressShippingQuotesData['path']['order_id'],
        shippingAddressId: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressShippingQuotesData['path']['shipping_address_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderShippingAddressShippingQuotesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/shipping_addresses/${shippingAddressId}/shipping_quotes`,
        });
    }

    /**
     * List Order Statuses
     *
     * Returns a Collection of All Order Statuses.

     **Order Status Descriptions:**

     |Status ID | Name  | Description |
     |-|-|-|
     | 0 | Incomplete  | An incomplete order happens when a shopper reached the payment page, but did not complete the transaction. |
     | 1 | Pending |Customer started the checkout process, but did not complete it. |
     | 2 | Shipped | Order has been shipped, but receipt has not been confirmed; seller has used the Ship Items action. |
     | 3 | Partially Shipped | Only some items in the order have been shipped, due to some products being pre-order only or other reasons. |
     | 4 | Refunded | Seller has used the Refund action. |
     | 5 | Cancelled | Seller has cancelled an order, due to a stock inconsistency or other reasons. |
     | 6 | Declined | Seller has marked the order as declined for lack of manual payment, or other reasons. |
     | 7 | Awaiting Payment | Customer has completed checkout process, but payment has yet to be confirmed. |
     | 8 | Awaiting Pickup | Order has been pulled, and is awaiting customer pickup from a seller-specified location. |
     | 9 | Awaiting Shipment | Order has been pulled and packaged, and is awaiting collection from a shipping provider. |
     | 10 | Completed | Client has paid for their digital product and their file(s) are available for download. |
     | 11 | Awaiting Fulfillment | Customer has completed the checkout process and payment has been confirmed. |
     | 12 | Manual Verification Required | Order is on hold while some aspect needs to be manually confirmed. |
     | 13 | Disputed | Customer has initiated a dispute resolution process for the PayPal transaction that paid for the order. |
     | 14 | Partially Refunded | Seller has partially refunded the order. |
     */
    getOrderStatuses(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderStatusesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/order_statuses',
        });
    }

    /**
     * Get Single Order Status by ID
     *
     * Returns a single order status.

     **Order Status Descriptions**
     |Status ID | Name  | Description |
     |:--|:--|:--|
     | 0 | Incomplete  | An incomplete order happens when a shopper reached the payment page, but did not complete the transaction. |
     | 1 | Pending |Customer started the checkout process, but did not complete it. |
     | 2 | Shipped | Order has been shipped, but receipt has not been confirmed; seller has used the Ship Items action. |
     | 3 | Partially Shipped | Only some items in the order have been shipped, due to some products being pre-order only or other reasons. |
     | 4 | Refunded | Seller has used the Refund action. |
     | 5 | Cancelled | Seller has cancelled an order, due to a stock inconsistency or other reasons. |
     | 6 |Declined | Seller has marked the order as declined for lack of manual payment, or other reasons. |
     | 7 | Awaiting Payment | Customer has completed checkout process, but payment has yet to be confirmed. |
     | 8 | Awaiting Pickup | Order has been pulled, and is awaiting customer pickup from a seller-specified location. |
     | 9 | Awaiting Shipment | Order has been pulled and packaged, and is awaiting collection from a shipping provider. |
     | 10 | Completed | Client has paid for their digital product and their file(s) are available for download. |
     | 11 | Awaiting Fulfillment | Customer has completed the checkout process and payment has been confirmed. |
     | 12 | Manual Verification Required | Order is on hold while some aspect needs to be manually confirmed. |
     | 13 | Disputed | Customer has initiated a dispute resolution process for the PayPal transaction that paid for the order. |
     | 14 | Partially Refunded | Seller has partially refunded the order. |
     */
    getOrderStatusesStatus(
        statusId: OrdersV2Oas2ApiSpecs.GetOrderStatusesStatusData['path']['status_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderStatusesStatusResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/order_statuses/${statusId}`,
        });
    }

    /**
     * List Order Taxes
     *
     * Gets all order taxes using `order_id`.
     Each tax applied to an order. This information can be useful for reporting purposes.
     Pass in the query parameter `?details=true` to return extra details about order taxes.
     `order_product_id` and `line_item_type` are also returned.

     All values are read-only.
     */
    getOrderTaxes(
        orderId: OrdersV2Oas2ApiSpecs.GetOrderTaxesData['path']['order_id'],
        query?: OrdersV2Oas2ApiSpecs.GetOrderTaxesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderTaxesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/taxes`,
            query,
        });
    }
}
