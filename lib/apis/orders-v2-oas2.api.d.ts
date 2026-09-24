import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as OrdersV2Oas2ApiSpecs from '../generated/orders-v2-oas2';
export * as OrdersV2Oas2ApiSpecs from '../generated/orders-v2-oas2';
export declare class OrdersV2Oas2Api {
    private readonly request;
    constructor(request: RequestService);
    getOrder(orderId: OrdersV2Oas2ApiSpecs.GetOrderData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderData['query']): Promise<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderResp>> | RequestErrorResponse<404, Required<unknown>>>;
    updateOrder(orderId: OrdersV2Oas2ApiSpecs.UpdateOrderData['path']['order_id'], requestBody: OrdersV2Oas2ApiSpecs.UpdateOrderData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderResp>>>;
    deleteOrder(orderId: OrdersV2Oas2ApiSpecs.DeleteOrderData['path']['order_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getOrdersCount(query?: OrdersV2Oas2ApiSpecs.GetOrdersCountData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrdersCountFull>>>;
    getOrders(query?: OrdersV2Oas2ApiSpecs.GetOrdersData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderResp[]>>;
    createOrder(requestBody: OrdersV2Oas2ApiSpecs.CreateOrderData['body'], query?: OrdersV2Oas2ApiSpecs.CreateOrderData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderResp>>>;
    deleteOrders(query?: OrdersV2Oas2ApiSpecs.DeleteOrdersData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getOrderConsignments(orderId: OrdersV2Oas2ApiSpecs.GetOrderConsignmentsData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderConsignmentsData['query']): Promise<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderConsignmentGet>> | RequestErrorResponse<404, OrdersV2Oas2ApiSpecs.OrdersOrderIdConsignmentsGetResponsesContentApplicationJsonSchemaItems[]>>;
    getOrderConsignmentShippingQuotes(orderId: OrdersV2Oas2ApiSpecs.GetOrderConsignmentShippingQuotesData['path']['order_id'], shippingConsignmentId: OrdersV2Oas2ApiSpecs.GetOrderConsignmentShippingQuotesData['path']['shipping_consignment_id']): Promise<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.ShippingQuotesBase>> | RequestErrorResponse<404, OrdersV2Oas2ApiSpecs.OrdersOrderIdConsignmentsShippingShippingConsignmentIdShippingQuotesGetResponsesContentApplicationJsonSchemaItems[]>>;
    getOrderCoupons(orderId: OrdersV2Oas2ApiSpecs.GetOrderCouponsData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderCouponsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderCouponsBase[]>>;
    getOrderFees(orderId: OrdersV2Oas2ApiSpecs.GetOrderFeesData['path']['order_id']): Promise<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderFeesResp>> | RequestErrorResponse<404, OrdersV2Oas2ApiSpecs.OrdersOrderIdFeesGetResponsesContentApplicationJsonSchemaItems[]>>;
    getOrderMessages(orderId: OrdersV2Oas2ApiSpecs.GetOrderMessagesData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderMessagesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderMessagesItems[]>>;
    getOrderProducts(orderId: OrdersV2Oas2ApiSpecs.GetOrderProductsData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderProductsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderProducts[]>>;
    getOrderProduct(orderId: OrdersV2Oas2ApiSpecs.GetOrderProductData['path']['order_id'], productId: OrdersV2Oas2ApiSpecs.GetOrderProductData['path']['product_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderProducts>>>;
    getOrderShipments(orderId: OrdersV2Oas2ApiSpecs.GetOrderShipmentsData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderShipmentsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderShipment[]>>;
    createOrderShipments(orderId: OrdersV2Oas2ApiSpecs.CreateOrderShipmentsData['path']['order_id'], requestBody: OrdersV2Oas2ApiSpecs.CreateOrderShipmentsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<OrdersV2Oas2ApiSpecs.OrderShipment>>>;
    deleteOrderShipments(orderId: OrdersV2Oas2ApiSpecs.DeleteOrderShipmentsData['path']['order_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getOrderShipmentsCount(orderId: OrdersV2Oas2ApiSpecs.GetOrderShipmentsCountData['path']['order_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderCount>>>;
    getOrderShipment(orderId: OrdersV2Oas2ApiSpecs.GetOrderShipmentData['path']['order_id'], shipmentId: OrdersV2Oas2ApiSpecs.GetOrderShipmentData['path']['shipment_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderShipment>>>;
    updateOrderShipment(orderId: OrdersV2Oas2ApiSpecs.UpdateOrderShipmentData['path']['order_id'], shipmentId: OrdersV2Oas2ApiSpecs.UpdateOrderShipmentData['path']['shipment_id'], requestBody: OrdersV2Oas2ApiSpecs.UpdateOrderShipmentData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderShipment>>>;
    deleteOrderShipment(orderId: OrdersV2Oas2ApiSpecs.DeleteOrderShipmentData['path']['order_id'], shipmentId: OrdersV2Oas2ApiSpecs.DeleteOrderShipmentData['path']['shipment_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getOrderShippingAddresses(orderId: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressesData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderShippingAddress[]>>;
    getOrderShippingAddress(orderId: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressData['path']['order_id'], id: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderShippingAddress>>>;
    updateOrderShippingAddress(orderId: OrdersV2Oas2ApiSpecs.UpdateOrderShippingAddressData['path']['order_id'], id: OrdersV2Oas2ApiSpecs.UpdateOrderShippingAddressData['path']['id'], requestBody: OrdersV2Oas2ApiSpecs.UpdateOrderShippingAddressData['body']): Promise<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderShippingAddress>> | RequestErrorResponse<400, OrdersV2Oas2ApiSpecs.OrdersOrderIdShippingAddressesIdPutResponsesContentApplicationJsonSchemaItems[]> | RequestErrorResponse<404, OrdersV2Oas2ApiSpecs.OrdersOrderIdShippingAddressesIdPutResponsesContentApplicationJsonSchemaItems[]>>;
    getOrderShippingAddressShippingQuotes(orderId: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressShippingQuotesData['path']['order_id'], shippingAddressId: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressShippingQuotesData['path']['shipping_address_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.ShippingQuotesBase>>>;
    getOrderStatuses(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderStatusBase[]>>;
    getOrderStatusesStatus(statusId: OrdersV2Oas2ApiSpecs.GetOrderStatusesStatusData['path']['status_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderStatusBase>>>;
    getOrderTaxes(orderId: OrdersV2Oas2ApiSpecs.GetOrderTaxesData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderTaxesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderTaxesBase[]>>;
}
