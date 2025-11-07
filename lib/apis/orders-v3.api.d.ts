import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as OrdersV3ApiSpecs from '../generated/orders-v3';
export * as OrdersV3ApiSpecs from '../generated/orders-v3';
export declare class OrdersV3Api {
    private readonly request;
    constructor(request: RequestService);
    captureOrderPayment(orderId: OrdersV3ApiSpecs.CaptureOrderPaymentData['path']['order_id']): Promise<RequestSuccessResponse<201, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<400, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<502, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<503, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<504, Required<OrdersV3ApiSpecs.ErrorDetailedFull>>>;
    voidOrderPayment(orderId: OrdersV3ApiSpecs.VoidOrderPaymentData['path']['order_id']): Promise<RequestErrorResponse<400, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<502, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<503, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<504, Required<OrdersV3ApiSpecs.ErrorDetailedFull>> | RequestSuccessResponse<201, Required<{
        [key: string]: unknown;
    }>>>;
    getOrderTransactions(orderId: OrdersV3ApiSpecs.GetOrderTransactionsData['path']['order_id']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<OrdersV3ApiSpecs.Transaction>;
        meta?: OrdersV3ApiSpecs.MetaCollectionFull;
    }>> | RequestSuccessResponse<204, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>> | RequestErrorResponse<503, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    createOrderRefundQuotes(orderId: OrdersV3ApiSpecs.CreateOrderRefundQuotesData['path']['order_id'], requestBody: OrdersV3ApiSpecs.CreateOrderRefundQuotesData['body']): Promise<RequestErrorResponse<422, Required<OrdersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<201, Required<{
        data?: OrdersV3ApiSpecs.RefundQuoteFull;
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>>>;
    getOrderRefunds(orderId: OrdersV3ApiSpecs.GetOrderRefundsData['path']['order_id'], query?: OrdersV3ApiSpecs.GetOrderRefundsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<OrdersV3ApiSpecs.Refund>;
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>>>;
    createOrderRefund(orderId: OrdersV3ApiSpecs.CreateOrderRefundData['path']['order_id'], requestBody: OrdersV3ApiSpecs.CreateOrderRefundData['body'], query?: OrdersV3ApiSpecs.CreateOrderRefundData['query']): Promise<RequestSuccessResponse<201, Required<{
        data?: OrdersV3ApiSpecs.Refund;
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<422, Required<{
        data?: Array<OrdersV3ApiSpecs.ErrorResponse>;
    }>> | RequestErrorResponse<503, Required<{
        data?: Array<OrdersV3ApiSpecs.FailedQuoteError>;
        meta?: OrdersV3ApiSpecs.Meta;
    }>>>;
    getOrderRefund(refundId: OrdersV3ApiSpecs.GetOrderRefundData['path']['refund_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.RefundIdGet>>>;
    getOrdersRefunds(query?: OrdersV3ApiSpecs.GetOrdersRefundsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<OrdersV3ApiSpecs.Refund>;
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>>>;
    getOrderMetafields(orderId: OrdersV3ApiSpecs.GetOrderMetafieldsData['path']['order_id'], query?: OrdersV3ApiSpecs.GetOrderMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.MetaFieldCollectionResponse>>>;
    createOrderMetafield(orderId: OrdersV3ApiSpecs.CreateOrderMetafieldData['path']['order_id'], requestBody: OrdersV3ApiSpecs.CreateOrderMetafieldData['body']): Promise<RequestErrorResponse<422, Required<OrdersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.MetafieldResponse>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<409, Required<OrdersV3ApiSpecs.ErrorResponse>>>;
    getOrderMetafield(orderId: OrdersV3ApiSpecs.GetOrderMetafieldData['path']['order_id'], metafieldId: OrdersV3ApiSpecs.GetOrderMetafieldData['path']['metafield_id']): Promise<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.MetafieldResponse>> | RequestErrorResponse<404, Required<OrdersV3ApiSpecs.NotFound>>>;
    updateOrderMetafield(orderId: OrdersV3ApiSpecs.UpdateOrderMetafieldData['path']['order_id'], metafieldId: OrdersV3ApiSpecs.UpdateOrderMetafieldData['path']['metafield_id'], requestBody: OrdersV3ApiSpecs.UpdateOrderMetafieldData['body']): Promise<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.MetafieldResponse>> | RequestErrorResponse<404, Required<OrdersV3ApiSpecs.NotFound>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    deleteOrderMetafield(orderId: OrdersV3ApiSpecs.DeleteOrderMetafieldData['path']['order_id'], metafieldId: OrdersV3ApiSpecs.DeleteOrderMetafieldData['path']['metafield_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<OrdersV3ApiSpecs.NotFound>>>;
    getGlobalOrderSettings(): Promise<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.GlobalOrderSettings & {
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<400, Required<OrdersV3ApiSpecs.ErrorResponse400>>>;
    updateGlobalOrderSettings(requestBody: OrdersV3ApiSpecs.UpdateGlobalOrderSettingsData['body']): Promise<RequestErrorResponse<400, Required<OrdersV3ApiSpecs.ErrorResponse400>> | RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.GlobalOrderSettings & {
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.ErrorResponse422>>>;
    getChannelOrderSettings(channelId: OrdersV3ApiSpecs.GetChannelOrderSettingsData['path']['channel_id']): Promise<RequestErrorResponse<400, Required<OrdersV3ApiSpecs.ErrorResponse400>> | RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.ChannelOrderSettings & {
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>>>;
    updateChannelOrderSettings(channelId: OrdersV3ApiSpecs.UpdateChannelOrderSettingsData['path']['channel_id'], requestBody: OrdersV3ApiSpecs.UpdateChannelOrderSettingsData['body']): Promise<RequestErrorResponse<400, Required<OrdersV3ApiSpecs.ErrorResponse400>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.ErrorResponse422>> | RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.ChannelOrderSettings & {
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>>>;
    getOrdersMetafields(query?: OrdersV3ApiSpecs.GetOrdersMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.MetaFieldCollectionResponse>>>;
    createOrdersMetafields(requestBody: OrdersV3ApiSpecs.CreateOrdersMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.MetaFieldCollectionResponsePostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>>>;
    updateOrdersMetafields(requestBody: OrdersV3ApiSpecs.UpdateOrdersMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.MetaFieldCollectionResponsePostPut>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    deleteOrdersMetafields(requestBody: OrdersV3ApiSpecs.DeleteOrdersMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.MetaFieldCollectionDeleteResponseSuccess>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessDelete>>>;
}
