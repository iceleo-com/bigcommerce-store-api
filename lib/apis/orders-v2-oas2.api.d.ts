import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as OrdersV2Oas2ApiSpecs from '../generated/orders-v2-oas2';
export * as OrdersV2Oas2ApiSpecs from '../generated/orders-v2-oas2';
export declare class OrdersV2Oas2Api {
    private readonly request;
    constructor(request: RequestService);
    getAnOrder(orderId: OrdersV2Oas2ApiSpecs.GetAnOrderData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetAnOrderData['query']): Promise<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderResp>> | RequestErrorResponse<404, Required<unknown>>>;
    getOrder(...args: Parameters<OrdersV2Oas2Api['getAnOrder']>): Promise<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderResp>> | RequestErrorResponse<404, Required<unknown>>>;
    updateAnOrder(orderId: OrdersV2Oas2ApiSpecs.UpdateAnOrderData['path']['order_id'], requestBody: OrdersV2Oas2ApiSpecs.UpdateAnOrderData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderResp>>>;
    updateOrder(...args: Parameters<OrdersV2Oas2Api['updateAnOrder']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderResp>>>;
    deleteAnOrder(orderId: OrdersV2Oas2ApiSpecs.DeleteAnOrderData['path']['order_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteOrder(...args: Parameters<OrdersV2Oas2Api['deleteAnOrder']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getCountOrder(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrdersCountFull>>>;
    getOrdersCount(...args: Parameters<OrdersV2Oas2Api['getCountOrder']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrdersCountFull>>>;
    getAllOrders(query?: OrdersV2Oas2ApiSpecs.GetAllOrdersData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderResp[]>>;
    getOrders(...args: Parameters<OrdersV2Oas2Api['getAllOrders']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderResp[]>>;
    createAnOrder(requestBody: OrdersV2Oas2ApiSpecs.CreateAnOrderData['body'], query?: OrdersV2Oas2ApiSpecs.CreateAnOrderData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderResp>>>;
    createOrder(...args: Parameters<OrdersV2Oas2Api['createAnOrder']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderResp>>>;
    deleteAllOrders(query?: OrdersV2Oas2ApiSpecs.DeleteAllOrdersData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteOrders(...args: Parameters<OrdersV2Oas2Api['deleteAllOrders']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getAllOrderCoupons(orderId: OrdersV2Oas2ApiSpecs.GetAllOrderCouponsData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetAllOrderCouponsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderCouponsBase[]>>;
    getOrderCoupons(...args: Parameters<OrdersV2Oas2Api['getAllOrderCoupons']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderCouponsBase[]>>;
    getAllOrderProducts(orderId: OrdersV2Oas2ApiSpecs.GetAllOrderProductsData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetAllOrderProductsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderProducts[]>>;
    getOrderProducts(...args: Parameters<OrdersV2Oas2Api['getAllOrderProducts']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderProducts[]>>;
    getAllShippingAddresses(orderId: OrdersV2Oas2ApiSpecs.GetAllShippingAddressesData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetAllShippingAddressesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderShippingAddress[]>>;
    getOrderShippingAddresses(...args: Parameters<OrdersV2Oas2Api['getAllShippingAddresses']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderShippingAddress[]>>;
    getOrderStatus(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderStatusBase[]>>;
    getOrderStatuses(...args: Parameters<OrdersV2Oas2Api['getOrderStatus']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderStatusBase[]>>;
    getAorderStatus(statusId: OrdersV2Oas2ApiSpecs.GetAOrderStatusData['path']['status_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderStatusBase>>>;
    getOrderStatusesStatus(...args: Parameters<OrdersV2Oas2Api['getAorderStatus']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderStatusBase>>>;
    getOrderTaxes(orderId: OrdersV2Oas2ApiSpecs.GetOrderTaxesData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderTaxesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderTaxesBase[]>>;
    getAllOrderShipments(orderId: OrdersV2Oas2ApiSpecs.GetAllOrderShipmentsData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetAllOrderShipmentsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderShipment[]>>;
    getOrderShipments(...args: Parameters<OrdersV2Oas2Api['getAllOrderShipments']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, OrdersV2Oas2ApiSpecs.OrderShipment[]>>;
    createOrderShipments(orderId: OrdersV2Oas2ApiSpecs.CreateOrderShipmentsData['path']['order_id'], requestBody: OrdersV2Oas2ApiSpecs.CreateOrderShipmentsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<OrdersV2Oas2ApiSpecs.OrderShipment>>>;
    deleteAllOrderShipments(orderId: OrdersV2Oas2ApiSpecs.DeleteAllOrderShipmentsData['path']['order_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteOrderShipments(...args: Parameters<OrdersV2Oas2Api['deleteAllOrderShipments']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getCountShipments(orderId: OrdersV2Oas2ApiSpecs.GetCountShipmentsData['path']['order_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderCount>>>;
    getOrderShipmentsCount(...args: Parameters<OrdersV2Oas2Api['getCountShipments']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderCount>>>;
    getOrderShipment(orderId: OrdersV2Oas2ApiSpecs.GetOrderShipmentData['path']['order_id'], shipmentId: OrdersV2Oas2ApiSpecs.GetOrderShipmentData['path']['shipment_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderShipment>>>;
    updateOrderShipment(orderId: OrdersV2Oas2ApiSpecs.UpdateOrderShipmentData['path']['order_id'], shipmentId: OrdersV2Oas2ApiSpecs.UpdateOrderShipmentData['path']['shipment_id'], requestBody: OrdersV2Oas2ApiSpecs.UpdateOrderShipmentData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderShipment>>>;
    deleteOrderShipment(orderId: OrdersV2Oas2ApiSpecs.DeleteOrderShipmentData['path']['order_id'], shipmentId: OrdersV2Oas2ApiSpecs.DeleteOrderShipmentData['path']['shipment_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getOrderMessages(orderId: OrdersV2Oas2ApiSpecs.GetOrderMessagesData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderMessagesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, {
        id?: number;
        order_id?: number;
        staff_id?: number;
        customer_id?: number;
        type?: string;
        subject?: string;
        message?: string;
        status?: string;
        is_flagged?: boolean;
        date_created?: string;
        customer?: {
            [key: string]: unknown;
        };
    }[]>>;
    getAnOrderProduct(orderId: OrdersV2Oas2ApiSpecs.GetAnOrderProductData['path']['order_id'], productId: OrdersV2Oas2ApiSpecs.GetAnOrderProductData['path']['product_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderProducts>>>;
    getOrderProduct(...args: Parameters<OrdersV2Oas2Api['getAnOrderProduct']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderProducts>>>;
    getAshippingAddress(orderId: OrdersV2Oas2ApiSpecs.GetAShippingAddressData['path']['order_id'], id: OrdersV2Oas2ApiSpecs.GetAShippingAddressData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderShippingAddress>>>;
    getOrderShippingAddress(...args: Parameters<OrdersV2Oas2Api['getAshippingAddress']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderShippingAddress>>>;
    updateAshippingAddress(orderId: OrdersV2Oas2ApiSpecs.UpdateAShippingAddressData['path']['order_id'], id: OrdersV2Oas2ApiSpecs.UpdateAShippingAddressData['path']['id'], requestBody: OrdersV2Oas2ApiSpecs.UpdateAShippingAddressData['body']): Promise<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderShippingAddress>> | RequestErrorResponse<400, {
        status?: number;
        message?: string;
    }[]> | RequestErrorResponse<404, {
        status?: number;
        message?: string;
    }[]>>;
    updateOrderShippingAddress(...args: Parameters<OrdersV2Oas2Api['updateAshippingAddress']>): Promise<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderShippingAddress>> | RequestErrorResponse<400, {
        status?: number;
        message?: string;
    }[]> | RequestErrorResponse<404, {
        status?: number;
        message?: string;
    }[]>>;
    getShippingQuotes(orderId: OrdersV2Oas2ApiSpecs.GetShippingQuotesData['path']['order_id'], shippingAddressId: OrdersV2Oas2ApiSpecs.GetShippingQuotesData['path']['shipping_address_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.ShippingQuotesBase>>>;
    getOrderShippingAddressShippingQuotes(...args: Parameters<OrdersV2Oas2Api['getShippingQuotes']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.ShippingQuotesBase>>>;
    getOrdersOrderIdConsignments(orderId: OrdersV2Oas2ApiSpecs.GetOrdersOrderIdConsignmentsData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrdersOrderIdConsignmentsData['query']): Promise<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderConsignmentGet>> | RequestErrorResponse<404, {
        status?: number;
        message?: string;
    }[]>>;
    getOrderConsignments(...args: Parameters<OrdersV2Oas2Api['getOrdersOrderIdConsignments']>): Promise<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.OrderConsignmentGet>> | RequestErrorResponse<404, {
        status?: number;
        message?: string;
    }[]>>;
    getOrdersOrderIdConsignmentsShippingShippingIdShippingQuotes(orderId: OrdersV2Oas2ApiSpecs.GetOrdersOrderIdConsignmentsShippingShippingIdShippingQuotesData['path']['order_id'], shippingConsignmentId: OrdersV2Oas2ApiSpecs.GetOrdersOrderIdConsignmentsShippingShippingIdShippingQuotesData['path']['shipping_consignment_id']): Promise<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.ShippingQuotesBase>> | RequestErrorResponse<404, {
        status?: number;
        message?: string;
    }[]>>;
    getOrderConsignmentShippingQuotes(...args: Parameters<OrdersV2Oas2Api['getOrdersOrderIdConsignmentsShippingShippingIdShippingQuotes']>): Promise<RequestSuccessResponse<200, Required<OrdersV2Oas2ApiSpecs.ShippingQuotesBase>> | RequestErrorResponse<404, {
        status?: number;
        message?: string;
    }[]>>;
}
