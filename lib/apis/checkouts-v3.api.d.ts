import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CheckoutsV3ApiSpecs from '../generated/checkouts-v3';
export * as CheckoutsV3ApiSpecs from '../generated/checkouts-v3';
export declare class CheckoutsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getCheckout(checkoutId: CheckoutsV3ApiSpecs.GetCheckoutData['path']['checkoutId'], query?: CheckoutsV3ApiSpecs.GetCheckoutData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<404, Required<{
        errors?: Array<{
            status?: number;
            title?: string;
            type?: string;
            detail?: string;
        }>;
    }>>>;
    updateCheckout(checkoutId: CheckoutsV3ApiSpecs.UpdateCheckoutData['path']['checkoutId'], requestBody: CheckoutsV3ApiSpecs.UpdateCheckoutData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<409, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    addCheckoutDiscount(checkoutId: CheckoutsV3ApiSpecs.AddCheckoutDiscountData['path']['checkoutId'], requestBody: CheckoutsV3ApiSpecs.AddCheckoutDiscountData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<409, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    addCheckoutBillingAddress(checkoutId: CheckoutsV3ApiSpecs.AddCheckoutBillingAddressData['path']['checkoutId'], requestBody: CheckoutsV3ApiSpecs.AddCheckoutBillingAddressData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<409, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    updateCheckoutBillingAddress(checkoutId: CheckoutsV3ApiSpecs.UpdateCheckoutBillingAddressData['path']['checkoutId'], addressId: CheckoutsV3ApiSpecs.UpdateCheckoutBillingAddressData['path']['addressId'], requestBody: CheckoutsV3ApiSpecs.UpdateCheckoutBillingAddressData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<409, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    addCheckoutConsignment(checkoutId: CheckoutsV3ApiSpecs.AddCheckoutConsignmentData['path']['checkoutId'], requestBody: CheckoutsV3ApiSpecs.AddCheckoutConsignmentData['body'], query?: CheckoutsV3ApiSpecs.AddCheckoutConsignmentData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<409, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    updateCheckoutConsignment(checkoutId: CheckoutsV3ApiSpecs.UpdateCheckoutConsignmentData['path']['checkoutId'], consignmentId: CheckoutsV3ApiSpecs.UpdateCheckoutConsignmentData['path']['consignmentId'], requestBody: CheckoutsV3ApiSpecs.UpdateCheckoutConsignmentData['body'], query?: CheckoutsV3ApiSpecs.UpdateCheckoutConsignmentData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<409, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    deleteCheckoutConsignment(checkoutId: CheckoutsV3ApiSpecs.DeleteCheckoutConsignmentData['path']['checkoutId'], consignmentId: CheckoutsV3ApiSpecs.DeleteCheckoutConsignmentData['path']['consignmentId'], requestBody: CheckoutsV3ApiSpecs.DeleteCheckoutConsignmentData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    addCheckoutCoupon(checkoutId: CheckoutsV3ApiSpecs.AddCheckoutCouponData['path']['checkoutId'], requestBody: CheckoutsV3ApiSpecs.AddCheckoutCouponData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<409, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    deleteCheckoutCoupon(checkoutId: CheckoutsV3ApiSpecs.DeleteCheckoutCouponData['path']['checkoutId'], couponCode: CheckoutsV3ApiSpecs.DeleteCheckoutCouponData['path']['couponCode'], requestBody: CheckoutsV3ApiSpecs.DeleteCheckoutCouponData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<409, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    checkoutsFeesByCheckoutIdPost(checkoutId: CheckoutsV3ApiSpecs.CheckoutsFeesByCheckoutIdPostData['path']['checkoutId'], requestBody: CheckoutsV3ApiSpecs.CheckoutsFeesByCheckoutIdPostData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    checkoutsFeesByCheckoutIdPut(checkoutId: CheckoutsV3ApiSpecs.CheckoutsFeesByCheckoutIdPutData['path']['checkoutId'], requestBody: CheckoutsV3ApiSpecs.CheckoutsFeesByCheckoutIdPutData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    checkoutsFeesByCheckoutIdDelete(checkoutId: CheckoutsV3ApiSpecs.CheckoutsFeesByCheckoutIdDeleteData['path']['checkoutId'], requestBody: CheckoutsV3ApiSpecs.CheckoutsFeesByCheckoutIdDeleteData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    createOrder(checkoutId: CheckoutsV3ApiSpecs.CreateOrderData['path']['checkoutId']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Order;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    getCheckoutSettings(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.CheckoutsSettings;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    updateCheckoutSettings(requestBody: CheckoutsV3ApiSpecs.UpdateCheckoutSettingsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.CheckoutsSettings;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    getChannelCheckoutSettings(channelId: CheckoutsV3ApiSpecs.GetChannelCheckoutSettingsData['path']['channelId']): Promise<RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.ChannelCheckoutsSettings;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<422, Required<unknown>>>;
    putChannelCheckoutSettings(channelId: CheckoutsV3ApiSpecs.PutChannelCheckoutSettingsData['path']['channelId'], requestBody: CheckoutsV3ApiSpecs.PutChannelCheckoutSettingsData['body']): Promise<RequestErrorResponse<422, Required<unknown>> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.ChannelCheckoutsSettings;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    createCheckoutToken(checkoutId: CheckoutsV3ApiSpecs.CreateCheckoutTokenData['path']['checkoutId'], requestBody: CheckoutsV3ApiSpecs.CreateCheckoutTokenData['body']): Promise<RequestSuccessResponse<200, Required<{
        checkoutToken?: string;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>> | RequestErrorResponse<401, Required<{
        status?: number;
        title?: string;
        type?: string;
        errors?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<422, Required<{
        status?: string;
        title?: string;
        type?: string;
    }>>>;
}
