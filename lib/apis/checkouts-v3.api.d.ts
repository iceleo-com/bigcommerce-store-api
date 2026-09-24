import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CheckoutsV3ApiSpecs from '../generated/checkouts-v3';
export * as CheckoutsV3ApiSpecs from '../generated/checkouts-v3';
export declare class CheckoutsV3Api {
    private readonly request;
    constructor(request: RequestService);
    checkoutsByCheckoutIdGet(checkoutId: CheckoutsV3ApiSpecs.CheckoutsByCheckoutIdGetData['path']['checkoutId'], query?: CheckoutsV3ApiSpecs.CheckoutsByCheckoutIdGetData['query']): Promise<RequestSuccessResponse<200, Required<{
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
    getCheckout(...args: Parameters<CheckoutsV3Api['checkoutsByCheckoutIdGet']>): Promise<RequestSuccessResponse<200, Required<{
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
    checkoutsByCheckoutIdPut(checkoutId: CheckoutsV3ApiSpecs.CheckoutsByCheckoutIdPutData['path']['checkoutId'], requestBody: CheckoutsV3ApiSpecs.CheckoutsByCheckoutIdPutData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    updateCheckout(...args: Parameters<CheckoutsV3Api['checkoutsByCheckoutIdPut']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    postStoreHashV3CheckoutsCheckoutIdDiscounts(checkoutId: CheckoutsV3ApiSpecs.PostStoreHashV3CheckoutsCheckoutIdDiscountsData['path']['checkoutId'], requestBody: CheckoutsV3ApiSpecs.PostStoreHashV3CheckoutsCheckoutIdDiscountsData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    addCheckoutDiscount(...args: Parameters<CheckoutsV3Api['postStoreHashV3CheckoutsCheckoutIdDiscounts']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    checkoutsBillingAddressByCheckoutIdPost(checkoutId: CheckoutsV3ApiSpecs.CheckoutsBillingAddressByCheckoutIdPostData['path']['checkoutId'], requestBody: CheckoutsV3ApiSpecs.CheckoutsBillingAddressByCheckoutIdPostData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    addCheckoutBillingAddress(...args: Parameters<CheckoutsV3Api['checkoutsBillingAddressByCheckoutIdPost']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    checkoutsBillingAddressByCheckoutIdAndAddressIdPut(checkoutId: CheckoutsV3ApiSpecs.CheckoutsBillingAddressByCheckoutIdAndAddressIdPutData['path']['checkoutId'], addressId: CheckoutsV3ApiSpecs.CheckoutsBillingAddressByCheckoutIdAndAddressIdPutData['path']['addressId'], requestBody: CheckoutsV3ApiSpecs.CheckoutsBillingAddressByCheckoutIdAndAddressIdPutData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    updateCheckoutBillingAddress(...args: Parameters<CheckoutsV3Api['checkoutsBillingAddressByCheckoutIdAndAddressIdPut']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    checkoutsConsignmentsByCheckoutIdPost(checkoutId: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdPostData['path']['checkoutId'], requestBody: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdPostData['body'], query?: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdPostData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    addCheckoutConsignment(...args: Parameters<CheckoutsV3Api['checkoutsConsignmentsByCheckoutIdPost']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    checkoutsConsignmentsByCheckoutIdAndConsignmentIdPut(checkoutId: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPutData['path']['checkoutId'], consignmentId: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPutData['path']['consignmentId'], requestBody: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPutData['body'], query?: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPutData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    updateCheckoutConsignment(...args: Parameters<CheckoutsV3Api['checkoutsConsignmentsByCheckoutIdAndConsignmentIdPut']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    checkoutsConsignmentsByCheckoutIdAndConsignmentIdDelete(checkoutId: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdAndConsignmentIdDeleteData['path']['checkoutId'], consignmentId: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdAndConsignmentIdDeleteData['path']['consignmentId']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    deleteCheckoutConsignment(...args: Parameters<CheckoutsV3Api['checkoutsConsignmentsByCheckoutIdAndConsignmentIdDelete']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    checkoutsCouponsByCheckoutIdPost(checkoutId: CheckoutsV3ApiSpecs.CheckoutsCouponsByCheckoutIdPostData['path']['checkoutId'], requestBody: CheckoutsV3ApiSpecs.CheckoutsCouponsByCheckoutIdPostData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    addCheckoutCoupon(...args: Parameters<CheckoutsV3Api['checkoutsCouponsByCheckoutIdPost']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    checkoutsCouponsByCheckoutIdAndCouponCodeDelete(checkoutId: CheckoutsV3ApiSpecs.CheckoutsCouponsByCheckoutIdAndCouponCodeDeleteData['path']['checkoutId'], couponCode: CheckoutsV3ApiSpecs.CheckoutsCouponsByCheckoutIdAndCouponCodeDeleteData['path']['couponCode']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    deleteCheckoutCoupon(...args: Parameters<CheckoutsV3Api['checkoutsCouponsByCheckoutIdAndCouponCodeDelete']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Checkout;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    createAnOrder(checkoutId: CheckoutsV3ApiSpecs.CreateAnOrderData['path']['checkoutId']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: CheckoutsV3ApiSpecs.Order;
        meta?: CheckoutsV3ApiSpecs.MetaOpen;
    }>>>;
    createOrder(...args: Parameters<CheckoutsV3Api['createAnOrder']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
    checkoutToken(checkoutId: CheckoutsV3ApiSpecs.CheckoutTokenData['path']['checkoutId'], requestBody: CheckoutsV3ApiSpecs.CheckoutTokenData['body']): Promise<RequestSuccessResponse<200, Required<{
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
    createCheckoutToken(...args: Parameters<CheckoutsV3Api['checkoutToken']>): Promise<RequestSuccessResponse<200, Required<{
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
