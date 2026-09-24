import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as OrdersV3ApiSpecs from '../generated/orders-v3';
export * as OrdersV3ApiSpecs from '../generated/orders-v3';
export declare class OrdersV3Api {
    private readonly request;
    constructor(request: RequestService);
    paymentactioncapture(orderId: OrdersV3ApiSpecs.PaymentactioncaptureData['path']['order_id']): Promise<RequestSuccessResponse<201, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<400, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<502, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<503, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<504, Required<OrdersV3ApiSpecs.ErrorDetailedFull>>>;
    captureOrderPayment(...args: Parameters<OrdersV3Api['paymentactioncapture']>): Promise<RequestSuccessResponse<201, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<400, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<502, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<503, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<504, Required<OrdersV3ApiSpecs.ErrorDetailedFull>>>;
    paymentactionvoid(orderId: OrdersV3ApiSpecs.PaymentactionvoidData['path']['order_id']): Promise<RequestErrorResponse<400, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<502, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<503, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<504, Required<OrdersV3ApiSpecs.ErrorDetailedFull>> | RequestSuccessResponse<201, Required<{
        [key: string]: unknown;
    }>>>;
    voidOrderPayment(...args: Parameters<OrdersV3Api['paymentactionvoid']>): Promise<RequestErrorResponse<400, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<502, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<503, Required<OrdersV3ApiSpecs.ErrorBase>> | RequestErrorResponse<504, Required<OrdersV3ApiSpecs.ErrorDetailedFull>> | RequestSuccessResponse<201, Required<{
        [key: string]: unknown;
    }>>>;
    getTransactions(orderId: OrdersV3ApiSpecs.GetTransactionsData['path']['order_id']): Promise<RequestSuccessResponse<200, Required<{
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
    }>>>;
    getOrderTransactions(...args: Parameters<OrdersV3Api['getTransactions']>): Promise<RequestSuccessResponse<200, Required<{
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
    }>>>;
    postrefundquote(orderId: OrdersV3ApiSpecs.PostrefundquoteData['path']['order_id'], requestBody: OrdersV3ApiSpecs.PostrefundquoteData['body']): Promise<RequestErrorResponse<422, Required<OrdersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<201, Required<{
        data?: OrdersV3ApiSpecs.RefundQuoteFull;
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>>>;
    createOrderRefundQuotes(...args: Parameters<OrdersV3Api['postrefundquote']>): Promise<RequestErrorResponse<422, Required<OrdersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<201, Required<{
        data?: OrdersV3ApiSpecs.RefundQuoteFull;
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>>>;
    getorderrefunds(orderId: OrdersV3ApiSpecs.GetorderrefundsData['path']['order_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<OrdersV3ApiSpecs.Refund>;
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>>>;
    getOrderRefunds(...args: Parameters<OrdersV3Api['getorderrefunds']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<OrdersV3ApiSpecs.Refund>;
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>>>;
    postrefund(orderId: OrdersV3ApiSpecs.PostrefundData['path']['order_id'], requestBody: OrdersV3ApiSpecs.PostrefundData['body']): Promise<RequestSuccessResponse<201, Required<{
        data?: OrdersV3ApiSpecs.Refund;
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<422, Required<{
        data?: Array<OrdersV3ApiSpecs.ErrorResponse>;
    }>> | RequestErrorResponse<503, Required<{
        data?: Array<OrdersV3ApiSpecs.FailedQuoteError>;
        meta?: OrdersV3ApiSpecs.Meta;
    }>>>;
    createOrderRefund(...args: Parameters<OrdersV3Api['postrefund']>): Promise<RequestSuccessResponse<201, Required<{
        data?: OrdersV3ApiSpecs.Refund;
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<422, Required<{
        data?: Array<OrdersV3ApiSpecs.ErrorResponse>;
    }>> | RequestErrorResponse<503, Required<{
        data?: Array<OrdersV3ApiSpecs.FailedQuoteError>;
        meta?: OrdersV3ApiSpecs.Meta;
    }>>>;
    refundIdget(refundId: OrdersV3ApiSpecs.RefundIdGetData['path']['refund_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.RefundIdGet>>>;
    getOrderRefund(...args: Parameters<OrdersV3Api['refundIdget']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.RefundIdGet>>>;
    getrefunds(query?: OrdersV3ApiSpecs.GetrefundsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<OrdersV3ApiSpecs.Refund>;
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>>>;
    getOrdersRefunds(...args: Parameters<OrdersV3Api['getrefunds']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<OrdersV3ApiSpecs.Refund>;
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>>>;
    postrefundquotes(requestBody: OrdersV3ApiSpecs.PostrefundquotesData['body']): Promise<RequestSuccessResponse<201, Required<{
        data?: Array<OrdersV3ApiSpecs.RefundQuoteFull>;
        errors?: Array<OrdersV3ApiSpecs.FailedQuoteError>;
        meta?: OrdersV3ApiSpecs.Meta;
    }>> | RequestErrorResponse<422, Required<{
        data?: Array<OrdersV3ApiSpecs.RefundQuoteFull>;
        errors?: Array<OrdersV3ApiSpecs.FailedQuoteError>;
        meta?: OrdersV3ApiSpecs.Meta;
    }>> | RequestErrorResponse<503, Required<{
        data?: Array<OrdersV3ApiSpecs.RefundQuoteFull>;
        errors?: Array<OrdersV3ApiSpecs.FailedQuoteError>;
        meta?: OrdersV3ApiSpecs.Meta;
    }>>>;
    getOrderMetafieldsByOrderId(orderId: OrdersV3ApiSpecs.GetOrderMetafieldsByOrderIdData['path']['order_id'], query?: OrdersV3ApiSpecs.GetOrderMetafieldsByOrderIdData['query']): Promise<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.MetaFieldCollectionResponse>> | RequestErrorResponse<404, Required<OrdersV3ApiSpecs.NotFound>>>;
    getOrderMetafields(...args: Parameters<OrdersV3Api['getOrderMetafieldsByOrderId']>): Promise<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.MetaFieldCollectionResponse>> | RequestErrorResponse<404, Required<OrdersV3ApiSpecs.NotFound>>>;
    createOrderMetafield(orderId: OrdersV3ApiSpecs.CreateOrderMetafieldData['path']['order_id'], requestBody: OrdersV3ApiSpecs.CreateOrderMetafieldData['body']): Promise<RequestErrorResponse<422, Required<OrdersV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.MetafieldResponse>> | RequestErrorResponse<409, Required<OrdersV3ApiSpecs.ErrorResponse>>>;
    getOrderMetafieldByOrderIdAndMetafieldId(orderId: OrdersV3ApiSpecs.GetOrderMetafieldByOrderIdAndMetafieldIdData['path']['order_id'], metafieldId: OrdersV3ApiSpecs.GetOrderMetafieldByOrderIdAndMetafieldIdData['path']['metafield_id']): Promise<RequestErrorResponse<404, Required<OrdersV3ApiSpecs.NotFound>> | RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.MetafieldResponse>>>;
    getOrderMetafield(...args: Parameters<OrdersV3Api['getOrderMetafieldByOrderIdAndMetafieldId']>): Promise<RequestErrorResponse<404, Required<OrdersV3ApiSpecs.NotFound>> | RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.MetafieldResponse>>>;
    updateOrderMetafield(orderId: OrdersV3ApiSpecs.UpdateOrderMetafieldData['path']['order_id'], metafieldId: OrdersV3ApiSpecs.UpdateOrderMetafieldData['path']['metafield_id'], requestBody: OrdersV3ApiSpecs.UpdateOrderMetafieldData['body']): Promise<RequestErrorResponse<404, Required<OrdersV3ApiSpecs.NotFound>> | RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.MetafieldResponse>>>;
    deleteOrderMetafieldById(orderId: OrdersV3ApiSpecs.DeleteOrderMetafieldByIdData['path']['order_id'], metafieldId: OrdersV3ApiSpecs.DeleteOrderMetafieldByIdData['path']['metafield_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteOrderMetafield(...args: Parameters<OrdersV3Api['deleteOrderMetafieldById']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getGlobalOrderSettings(): Promise<RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.GlobalOrderSettings & {
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<400, Required<OrdersV3ApiSpecs.ErrorResponse400>>>;
    updateGlobalOrderSettings(requestBody: OrdersV3ApiSpecs.UpdateGlobalOrderSettingsData['body']): Promise<RequestErrorResponse<400, Required<OrdersV3ApiSpecs.ErrorResponse400>> | RequestSuccessResponse<200, Required<{
        [key: string]: unknown;
    } & OrdersV3ApiSpecs.GlobalOrderSettings & {
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.ErrorResponse422>>>;
    getChannelOrderSettings(channelId: OrdersV3ApiSpecs.GetChannelOrderSettingsData['path']['channel_id']): Promise<RequestErrorResponse<400, Required<OrdersV3ApiSpecs.ErrorResponse400>> | RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.ChannelOrderSettings & {
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>>>;
    updateChannelOrderSettings(channelId: OrdersV3ApiSpecs.UpdateChannelOrderSettingsData['path']['channel_id'], requestBody: OrdersV3ApiSpecs.UpdateChannelOrderSettingsData['body']): Promise<RequestErrorResponse<400, Required<OrdersV3ApiSpecs.ErrorResponse400>> | RequestErrorResponse<422, Required<OrdersV3ApiSpecs.ErrorResponse422>> | RequestSuccessResponse<200, Required<OrdersV3ApiSpecs.ChannelOrderSettings & {
        meta?: OrdersV3ApiSpecs.MetaEmptyFull;
    }>>>;
}
