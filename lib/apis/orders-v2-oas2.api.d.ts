import RequestService from '../helpers/request/request-service';
import * as OrdersV2Oas2ApiSpecs from '../generated/orders-v2-oas2';
export default class OrdersV2Oas2Api {
    private readonly request;
    constructor(request: RequestService);
    getOrder(orderId: OrdersV2Oas2ApiSpecs.GetOrderData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, unknown>>;
    updateOrder(orderId: OrdersV2Oas2ApiSpecs.UpdateOrderData['path']['order_id'], requestBody: OrdersV2Oas2ApiSpecs.UpdateOrderData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    deleteOrder(orderId: OrdersV2Oas2ApiSpecs.DeleteOrderData['path']['order_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getOrdersCount(): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getOrders(query?: OrdersV2Oas2ApiSpecs.GetOrdersData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    createOrder(requestBody: OrdersV2Oas2ApiSpecs.CreateOrderData['body'], query?: OrdersV2Oas2ApiSpecs.CreateOrderData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    deleteOrders(query?: OrdersV2Oas2ApiSpecs.DeleteOrdersData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getOrderCoupons(orderId: OrdersV2Oas2ApiSpecs.GetOrderCouponsData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderCouponsData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getOrderProducts(orderId: OrdersV2Oas2ApiSpecs.GetOrderProductsData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderProductsData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getOrderShippingAddresses(orderId: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressesData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressesData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getOrderStatuses(): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getOrderStatusesStatus(statusId: OrdersV2Oas2ApiSpecs.GetOrderStatusesStatusData['path']['status_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getOrderTaxes(orderId: OrdersV2Oas2ApiSpecs.GetOrderTaxesData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderTaxesData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getOrderShipments(orderId: OrdersV2Oas2ApiSpecs.GetOrderShipmentsData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderShipmentsData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    createOrderShipments(orderId: OrdersV2Oas2ApiSpecs.CreateOrderShipmentsData['path']['order_id'], requestBody: OrdersV2Oas2ApiSpecs.CreateOrderShipmentsData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    deleteOrderShipments(orderId: OrdersV2Oas2ApiSpecs.DeleteOrderShipmentsData['path']['order_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getOrderShipmentsCount(orderId: OrdersV2Oas2ApiSpecs.GetOrderShipmentsCountData['path']['order_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getOrderShipment(orderId: OrdersV2Oas2ApiSpecs.GetOrderShipmentData['path']['order_id'], shipmentId: OrdersV2Oas2ApiSpecs.GetOrderShipmentData['path']['shipment_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    updateOrderShipment(orderId: OrdersV2Oas2ApiSpecs.UpdateOrderShipmentData['path']['order_id'], shipmentId: OrdersV2Oas2ApiSpecs.UpdateOrderShipmentData['path']['shipment_id'], requestBody: OrdersV2Oas2ApiSpecs.UpdateOrderShipmentData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    deleteOrderShipment(orderId: OrdersV2Oas2ApiSpecs.DeleteOrderShipmentData['path']['order_id'], shipmentId: OrdersV2Oas2ApiSpecs.DeleteOrderShipmentData['path']['shipment_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getOrderMessages(orderId: OrdersV2Oas2ApiSpecs.GetOrderMessagesData['path']['order_id'], query?: OrdersV2Oas2ApiSpecs.GetOrderMessagesData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getOrderProduct(orderId: OrdersV2Oas2ApiSpecs.GetOrderProductData['path']['order_id'], productId: OrdersV2Oas2ApiSpecs.GetOrderProductData['path']['product_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getOrderShippingAddress(orderId: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressData['path']['order_id'], id: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressData['path']['id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    updateOrderShippingAddress(orderId: OrdersV2Oas2ApiSpecs.UpdateOrderShippingAddressData['path']['order_id'], id: OrdersV2Oas2ApiSpecs.UpdateOrderShippingAddressData['path']['id'], requestBody: OrdersV2Oas2ApiSpecs.UpdateOrderShippingAddressData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<OrdersV2Oas2ApiSpecs.orderShippingAddress, OrdersV2Oas2ApiSpecs.UpdateOrderShippingAddressError>>;
    getOrderShippingAddressShippingQuotes(orderId: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressShippingQuotesData['path']['order_id'], shippingAddressId: OrdersV2Oas2ApiSpecs.GetOrderShippingAddressShippingQuotesData['path']['shipping_address_id']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getOrderConsignments(): Promise<import("../helpers/request/request-service.types").RequestResponse<OrdersV2Oas2ApiSpecs.orderConsignment_Get, OrdersV2Oas2ApiSpecs.GetOrderConsignmentsError>>;
    getOrderConsignmentShippingQuotes(): Promise<import("../helpers/request/request-service.types").RequestResponse<OrdersV2Oas2ApiSpecs.shippingQuotes_Base, OrdersV2Oas2ApiSpecs.GetOrderConsignmentShippingQuotesError>>;
    getOrderFees(): Promise<import("../helpers/request/request-service.types").RequestResponse<OrdersV2Oas2ApiSpecs.orderFees_Resp, OrdersV2Oas2ApiSpecs.GetOrderFeesError>>;
}
