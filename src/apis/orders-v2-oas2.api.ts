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
     * Get an Order
     *
     * Gets an *Order*. To learn more about creating or updating orders, see [Orders Overview](/docs/store-operations/orders).
     */
    getAnOrder(
        orderId: OrdersV2Oas2ApiSpecs.GetAnOrderData['path']['order_id'],
        query?: OrdersV2Oas2ApiSpecs.GetAnOrderData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetAnOrderResponses[200]>>,RequestErrorResponse<404, Required<OrdersV2Oas2ApiSpecs.GetAnOrderErrors[404]>>>({
            path: `v2/orders/${orderId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getAnOrder` instead.
     */
    getOrder(...args: Parameters<OrdersV2Oas2Api['getAnOrder']>) {
        return this.getAnOrder(...args);
    }

    /**
     * Update an Order
     *
     * Updates an *Order*. 

     To add a product to an existing order, don't include `id` in the body. Include `product_options` if adding a product with variants.

     To update a product in an order, include `id` in the body. The body should only contain the fields that need to be updated. Those fields that are omitted will not be changed.

     To remove a product from an order, set that product’s `quantity` to `0`.

     To learn more about creating or updating orders, see [Orders Overview](/docs/store-operations/orders).
     */
    updateAnOrder(
        orderId: OrdersV2Oas2ApiSpecs.UpdateAnOrderData['path']['order_id'],
        requestBody: OrdersV2Oas2ApiSpecs.UpdateAnOrderData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.UpdateAnOrderResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateAnOrder` instead.
     */
    updateOrder(...args: Parameters<OrdersV2Oas2Api['updateAnOrder']>) {
        return this.updateAnOrder(...args);
    }

    /**
     * Archive an Order
     *
     * Archives an order. To remove a single product from an order, see `PUT /orders/{order_id}`.
     */
    deleteAnOrder(
        orderId: OrdersV2Oas2ApiSpecs.DeleteAnOrderData['path']['order_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<OrdersV2Oas2ApiSpecs.DeleteAnOrderResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}`,
        });
    }

    /**
     * @deprecated Use `deleteAnOrder` instead.
     */
    deleteOrder(...args: Parameters<OrdersV2Oas2Api['deleteAnOrder']>) {
        return this.deleteAnOrder(...args);
    }

    /**
     * Get a Count of Orders
     *
     * Gets an array of orders in the store organized by order status.
     */
    getCountOrder(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetCountOrderResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/orders/count',
        });
    }

    /**
     * @deprecated Use `getCountOrder` instead.
     */
    getOrdersCount(...args: Parameters<OrdersV2Oas2Api['getCountOrder']>) {
        return this.getCountOrder(...args);
    }

    /**
     * Get All Orders
     *
     * Gets a list of orders using the filter query.

     **Notes**

     * The default sort is by order id, from lowest to highest.
     * By default, requests sent without parameters will only return 50 orders. 
     */
    getAllOrders(
        query?: OrdersV2Oas2ApiSpecs.GetAllOrdersData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetAllOrdersResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/orders',
            query,
        });
    }

    /**
     * @deprecated Use `getAllOrders` instead.
     */
    getOrders(...args: Parameters<OrdersV2Oas2Api['getAllOrders']>) {
        return this.getAllOrders(...args);
    }

    /**
     * Create an Order
     *
     * Creates an *Order*. To learn more about creating or updating orders, see [Orders Overview](/docs/store-operations/orders).

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
     */
    createAnOrder(
        requestBody: OrdersV2Oas2ApiSpecs.CreateAnOrderData['body'],
        query?: OrdersV2Oas2ApiSpecs.CreateAnOrderData['query'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.CreateAnOrderResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/orders',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `createAnOrder` instead.
     */
    createOrder(...args: Parameters<OrdersV2Oas2Api['createAnOrder']>) {
        return this.createAnOrder(...args);
    }

    /**
     * Delete All Orders
     *
     * Archives all orders.
     */
    deleteAllOrders(
        query?: OrdersV2Oas2ApiSpecs.DeleteAllOrdersData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<OrdersV2Oas2ApiSpecs.DeleteAllOrdersResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v2/orders',
            query,
        });
    }

    /**
     * @deprecated Use `deleteAllOrders` instead.
     */
    deleteOrders(...args: Parameters<OrdersV2Oas2Api['deleteAllOrders']>) {
        return this.deleteAllOrders(...args);
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
     */
    getAllOrderCoupons(
        orderId: OrdersV2Oas2ApiSpecs.GetAllOrderCouponsData['path']['order_id'],
        query?: OrdersV2Oas2ApiSpecs.GetAllOrderCouponsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetAllOrderCouponsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/coupons`,
            query,
        });
    }

    /**
     * @deprecated Use `getAllOrderCoupons` instead.
     */
    getOrderCoupons(...args: Parameters<OrdersV2Oas2Api['getAllOrderCoupons']>) {
        return this.getAllOrderCoupons(...args);
    }

    /**
     * List Order Products
     *
     * Lists 50 order products on an order using `order_id`. By default, items sort from lowest to highest according to a newly created ID, separate from the `order_id` and the `product_id`.
     */
    getAllOrderProducts(
        orderId: OrdersV2Oas2ApiSpecs.GetAllOrderProductsData['path']['order_id'],
        query?: OrdersV2Oas2ApiSpecs.GetAllOrderProductsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetAllOrderProductsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/products`,
            query,
        });
    }

    /**
     * @deprecated Use `getAllOrderProducts` instead.
     */
    getOrderProducts(...args: Parameters<OrdersV2Oas2Api['getAllOrderProducts']>) {
        return this.getAllOrderProducts(...args);
    }

    /**
     * Get Order Shipping Addresses
     *
     * Get all shipping addresses on an order using the `order_id`.

     Returned in the response is shipping_quotes object. Please use the Get Shipping Quotes Endpoint. Using the response will return a 204 for the shipping quote.
     */
    getAllShippingAddresses(
        orderId: OrdersV2Oas2ApiSpecs.GetAllShippingAddressesData['path']['order_id'],
        query?: OrdersV2Oas2ApiSpecs.GetAllShippingAddressesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetAllShippingAddressesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/shipping_addresses`,
            query,
        });
    }

    /**
     * @deprecated Use `getAllShippingAddresses` instead.
     */
    getOrderShippingAddresses(...args: Parameters<OrdersV2Oas2Api['getAllShippingAddresses']>) {
        return this.getAllShippingAddresses(...args);
    }

    /**
     * Get All Order Statuses
     *
     * Returns a Collection of All Order Statuses.

     **Order Status Descriptions:**
     |Status ID | Name  | Description |
     |--|--|--|
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
    getOrderStatus(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderStatusResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/order_statuses',
        });
    }

    /**
     * @deprecated Use `getOrderStatus` instead.
     */
    getOrderStatuses(...args: Parameters<OrdersV2Oas2Api['getOrderStatus']>) {
        return this.getOrderStatus(...args);
    }

    /**
     * Get a Single Order Status by ID
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
    getAorderStatus(
        statusId: OrdersV2Oas2ApiSpecs.GetAOrderStatusData['path']['status_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetAOrderStatusResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/order_statuses/${statusId}`,
        });
    }

    /**
     * @deprecated Use `getAorderStatus` instead.
     */
    getOrderStatusesStatus(...args: Parameters<OrdersV2Oas2Api['getAorderStatus']>) {
        return this.getAorderStatus(...args);
    }

    /**
     * Get All Order Taxes
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

    /**
     * Get Order Shipments
     *
     * Gets a list of all shipments on an order.
     */
    getAllOrderShipments(
        orderId: OrdersV2Oas2ApiSpecs.GetAllOrderShipmentsData['path']['order_id'],
        query?: OrdersV2Oas2ApiSpecs.GetAllOrderShipmentsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetAllOrderShipmentsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/shipments`,
            query,
        });
    }

    /**
     * @deprecated Use `getAllOrderShipments` instead.
     */
    getOrderShipments(...args: Parameters<OrdersV2Oas2Api['getAllOrderShipments']>) {
        return this.getAllOrderShipments(...args);
    }

    /**
     * Create Order Shipment
     *
     * Creates an *Order Shipment*. For more details, see [Shipping an Order](/docs/store-operations/orders#creating-order-shipments).

     **Required Fields**
     *   order_address_id
     *   items

     **Usage notes**

     There are three methods for generating a tracking link for a shipment:

     1. Use `shipping_provider` and `tracking_number`: This generates an automatic tracking link that you can click from the BigCommerce control panel and customer-facing emails. The `generated_tracking_link` property in the API response represents this tracking link. The `tracking_link` property in the API response will remain empty.

     2. Use `tracking_carrier` and `tracking_number`: This also creates an automatic tracking link that you can click in both the BigCommerce control panel and customer-facing emails. Like the previous method, the `generated_tracking_link` property in the API response represents this tracking link. The `tracking_link` property in the API response will remain empty.

     3. Supply a custom `tracking_link`: By providing a value for the `tracking_link` property, you can use your own tracking link within the BigCommerce control panel and in customer-facing emails. The API response will return your supplied tracking link as part of the `tracking_link` property in the response. In situations when there isn't a `generated_tracking_link`, the property in the API response will remain empty. 

     Acceptable values for `shipping_provider` include an empty string (`""`), `auspost`, `carrier_{your_carrier_id}` (only used if the carrier is a [third-party Shipping Provider](/docs/integrations/shipping)), `canadapost`, `endicia`, `usps`, `fedex`, `royalmail`, `ups`, `upsready`, `upsonline`, or `shipperhq`.

     Acceptable values for `tracking_carrier` include an empty string (`""`) or one of the valid [tracking-carrier values](https://github.com/bigcommerce/dev-docs/blob/master/assets/csv/tracking_carrier_values.csv).

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
    deleteAllOrderShipments(
        orderId: OrdersV2Oas2ApiSpecs.DeleteAllOrderShipmentsData['path']['order_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<OrdersV2Oas2ApiSpecs.DeleteAllOrderShipmentsResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/shipments`,
        });
    }

    /**
     * @deprecated Use `deleteAllOrderShipments` instead.
     */
    deleteOrderShipments(...args: Parameters<OrdersV2Oas2Api['deleteAllOrderShipments']>) {
        return this.deleteAllOrderShipments(...args);
    }

    /**
     * Get Count of Order Shipments
     *
     * Gets a count of the number of shipments that have been made for a single order.
     */
    getCountShipments(
        orderId: OrdersV2Oas2ApiSpecs.GetCountShipmentsData['path']['order_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetCountShipmentsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/shipments/count`,
        });
    }

    /**
     * @deprecated Use `getCountShipments` instead.
     */
    getOrderShipmentsCount(...args: Parameters<OrdersV2Oas2Api['getCountShipments']>) {
        return this.getCountShipments(...args);
    }

    /**
     * Get a Shipment
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
     * Update a Shipment
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
     * Delete an Order Shipment
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
     * Get Order Messages
     *
     * Gets the messages associated with an order.
     */
    getOrderMessages(
        orderId: OrdersV2Oas2ApiSpecs.GetOrderMessagesData['path']['order_id'],
        query?: OrdersV2Oas2ApiSpecs.GetOrderMessagesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrderMessagesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/messages`,
            query,
        });
    }

    /**
     * Get an Order Product
     *
     * Gets a product line item associated with the order.
     */
    getAnOrderProduct(
        orderId: OrdersV2Oas2ApiSpecs.GetAnOrderProductData['path']['order_id'],
        productId: OrdersV2Oas2ApiSpecs.GetAnOrderProductData['path']['product_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetAnOrderProductResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/products/${productId}`,
        });
    }

    /**
     * @deprecated Use `getAnOrderProduct` instead.
     */
    getOrderProduct(...args: Parameters<OrdersV2Oas2Api['getAnOrderProduct']>) {
        return this.getAnOrderProduct(...args);
    }

    /**
     * Get a Shipping Address
     *
     * Gets a shipping address associated with an order.

     Returned in the response is shipping_quotes object. Please use the Get Shipping Quotes Endpoint. Using the response will return a 204 for the shipping quote.
     */
    getAshippingAddress(
        orderId: OrdersV2Oas2ApiSpecs.GetAShippingAddressData['path']['order_id'],
        id: OrdersV2Oas2ApiSpecs.GetAShippingAddressData['path']['id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetAShippingAddressResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/shipping_addresses/${id}`,
        });
    }

    /**
     * @deprecated Use `getAshippingAddress` instead.
     */
    getOrderShippingAddress(...args: Parameters<OrdersV2Oas2Api['getAshippingAddress']>) {
        return this.getAshippingAddress(...args);
    }

    /**
     * Update a Shipping Address
     *
     * Update a shipping address associated with an order.

     **Note**: Updating a shipping address will NOT trigger the recalculation of shipping cost and tax
     */
    updateAshippingAddress(
        orderId: OrdersV2Oas2ApiSpecs.UpdateAShippingAddressData['path']['order_id'],
        id: OrdersV2Oas2ApiSpecs.UpdateAShippingAddressData['path']['id'],
        requestBody: OrdersV2Oas2ApiSpecs.UpdateAShippingAddressData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.UpdateAShippingAddressResponses[200]>>,(RequestErrorResponse<400, Required<OrdersV2Oas2ApiSpecs.UpdateAShippingAddressErrors[400]>> | RequestErrorResponse<404, Required<OrdersV2Oas2ApiSpecs.UpdateAShippingAddressErrors[404]>>)>({
            path: `v2/orders/${orderId}/shipping_addresses/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateAshippingAddress` instead.
     */
    updateOrderShippingAddress(...args: Parameters<OrdersV2Oas2Api['updateAshippingAddress']>) {
        return this.updateAshippingAddress(...args);
    }

    /**
     * Get Order Shipping Quotes
     *
     * Gets all shipping quotes persisted on an order.

     This is a read-only endpoint and the output can vary based on the shipping quote. A shipping quote can only be generated using the storefront at this time. Orders that are created in the control panel or using the API return a 204 for this endpoint since a shipping quote is not generated during that process.
     */
    getShippingQuotes(
        orderId: OrdersV2Oas2ApiSpecs.GetShippingQuotesData['path']['order_id'],
        shippingAddressId: OrdersV2Oas2ApiSpecs.GetShippingQuotesData['path']['shipping_address_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetShippingQuotesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/orders/${orderId}/shipping_addresses/${shippingAddressId}/shipping_quotes`,
        });
    }

    /**
     * @deprecated Use `getShippingQuotes` instead.
     */
    getOrderShippingAddressShippingQuotes(...args: Parameters<OrdersV2Oas2Api['getShippingQuotes']>) {
        return this.getShippingQuotes(...args);
    }

    /**
     * Get Consignments
     *
     * Get all consignments for an order. 
     */
    getOrdersOrderIdConsignments(
        orderId: OrdersV2Oas2ApiSpecs.GetOrdersOrderIdConsignmentsData['path']['order_id'],
        query?: OrdersV2Oas2ApiSpecs.GetOrdersOrderIdConsignmentsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrdersOrderIdConsignmentsResponses[200]>>,RequestErrorResponse<404, Required<OrdersV2Oas2ApiSpecs.GetOrdersOrderIdConsignmentsErrors[404]>>>({
            path: `v2/orders/${orderId}/consignments`,
            query,
        });
    }

    /**
     * @deprecated Use `getOrdersOrderIdConsignments` instead.
     */
    getOrderConsignments(...args: Parameters<OrdersV2Oas2Api['getOrdersOrderIdConsignments']>) {
        return this.getOrdersOrderIdConsignments(...args);
    }

    /**
     * Get Consignment Shipping Quotes
     *
     * Get all shipping quotes persisted on an order for a shipping consignment.
     This is a read-only endpoint whose response depends on the shipping quote. You can only generate a shipping quote using the storefront at this time. Orders that are created in the control panel, or using the API, return a 204 status response since you can't generate a shipping quote during that process.
     */
    getOrdersOrderIdConsignmentsShippingShippingIdShippingQuotes(
        orderId: OrdersV2Oas2ApiSpecs.GetOrdersOrderIdConsignmentsShippingShippingIdShippingQuotesData['path']['order_id'],
        shippingConsignmentId: OrdersV2Oas2ApiSpecs.GetOrdersOrderIdConsignmentsShippingShippingIdShippingQuotesData['path']['shipping_consignment_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.GetOrdersOrderIdConsignmentsShippingShippingIdShippingQuotesResponses[200]>>,RequestErrorResponse<404, Required<OrdersV2Oas2ApiSpecs.GetOrdersOrderIdConsignmentsShippingShippingIdShippingQuotesErrors[404]>>>({
            path: `v2/orders/${orderId}/consignments/shipping/${shippingConsignmentId}/shipping_quotes`,
        });
    }

    /**
     * @deprecated Use `getOrdersOrderIdConsignmentsShippingShippingIdShippingQuotes` instead.
     */
    getOrderConsignmentShippingQuotes(...args: Parameters<OrdersV2Oas2Api['getOrdersOrderIdConsignmentsShippingShippingIdShippingQuotes']>) {
        return this.getOrdersOrderIdConsignmentsShippingShippingIdShippingQuotes(...args);
    }
}
