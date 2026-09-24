import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CheckoutsV3ApiSpecs from '../generated/checkouts-v3';
export * as CheckoutsV3ApiSpecs from '../generated/checkouts-v3';

export class CheckoutsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get a Checkout
     *
     * Returns a *Checkout*.

     **Notes**

     The cart ID and checkout ID are the same.
     */
    checkoutsByCheckoutIdGet(
        checkoutId: CheckoutsV3ApiSpecs.CheckoutsByCheckoutIdGetData['path']['checkoutId'],
        query?: CheckoutsV3ApiSpecs.CheckoutsByCheckoutIdGetData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CheckoutsV3ApiSpecs.CheckoutsByCheckoutIdGetResponses[200]>>,RequestErrorResponse<404, Required<CheckoutsV3ApiSpecs.CheckoutsByCheckoutIdGetErrors[404]>>>({
            path: `v3/checkouts/${checkoutId}`,
            query,
        });
    }

    /**
     * @deprecated Use `checkoutsByCheckoutIdGet` instead.
     */
    getCheckout(...args: Parameters<CheckoutsV3Api['checkoutsByCheckoutIdGet']>) {
        return this.checkoutsByCheckoutIdGet(...args);
    }

    /**
     * Update Customer Messages
     *
     * Change customer message pertaining to an existing *Checkout*.

     **Limits:**
     * 2000 characters for customer message
     */
    checkoutsByCheckoutIdPut(
        checkoutId: CheckoutsV3ApiSpecs.CheckoutsByCheckoutIdPutData['path']['checkoutId'],
        requestBody: CheckoutsV3ApiSpecs.CheckoutsByCheckoutIdPutData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CheckoutsV3ApiSpecs.CheckoutsByCheckoutIdPutResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/checkouts/${checkoutId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `checkoutsByCheckoutIdPut` instead.
     */
    updateCheckout(...args: Parameters<CheckoutsV3Api['checkoutsByCheckoutIdPut']>) {
        return this.checkoutsByCheckoutIdPut(...args);
    }

    /**
     * Add Discount to Checkout
     *
     * Adds a discount to an existing *checkout*.

     This discount only applies to `line_items`. When you call this API, you clear out all existing discounts applied to line items, including product and order-based discounts.

     This endpoint splits the discount between line items based on the item value.

     Required Fields
     * discounted_amount
     */
    postStoreHashV3CheckoutsCheckoutIdDiscounts(
        checkoutId: CheckoutsV3ApiSpecs.PostStoreHashV3CheckoutsCheckoutIdDiscountsData['path']['checkoutId'],
        requestBody: CheckoutsV3ApiSpecs.PostStoreHashV3CheckoutsCheckoutIdDiscountsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CheckoutsV3ApiSpecs.PostStoreHashV3CheckoutsCheckoutIdDiscountsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/checkouts/${checkoutId}/discounts`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `postStoreHashV3CheckoutsCheckoutIdDiscounts` instead.
     */
    addCheckoutDiscount(...args: Parameters<CheckoutsV3Api['postStoreHashV3CheckoutsCheckoutIdDiscounts']>) {
        return this.postStoreHashV3CheckoutsCheckoutIdDiscounts(...args);
    }

    /**
     * Add Checkout Billing Address
     *
     * Adds a billing address to an existing checkout.

     **Required Fields**
     * email
     * country_code
     */
    checkoutsBillingAddressByCheckoutIdPost(
        checkoutId: CheckoutsV3ApiSpecs.CheckoutsBillingAddressByCheckoutIdPostData['path']['checkoutId'],
        requestBody: CheckoutsV3ApiSpecs.CheckoutsBillingAddressByCheckoutIdPostData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CheckoutsV3ApiSpecs.CheckoutsBillingAddressByCheckoutIdPostResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/checkouts/${checkoutId}/billing-address`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `checkoutsBillingAddressByCheckoutIdPost` instead.
     */
    addCheckoutBillingAddress(...args: Parameters<CheckoutsV3Api['checkoutsBillingAddressByCheckoutIdPost']>) {
        return this.checkoutsBillingAddressByCheckoutIdPost(...args);
    }

    /**
     * Update Checkout Billing Address
     *
     * Updates an existing billing address on a checkout.
     */
    checkoutsBillingAddressByCheckoutIdAndAddressIdPut(
        checkoutId: CheckoutsV3ApiSpecs.CheckoutsBillingAddressByCheckoutIdAndAddressIdPutData['path']['checkoutId'],
        addressId: CheckoutsV3ApiSpecs.CheckoutsBillingAddressByCheckoutIdAndAddressIdPutData['path']['addressId'],
        requestBody: CheckoutsV3ApiSpecs.CheckoutsBillingAddressByCheckoutIdAndAddressIdPutData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CheckoutsV3ApiSpecs.CheckoutsBillingAddressByCheckoutIdAndAddressIdPutResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/checkouts/${checkoutId}/billing-address/${addressId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `checkoutsBillingAddressByCheckoutIdAndAddressIdPut` instead.
     */
    updateCheckoutBillingAddress(...args: Parameters<CheckoutsV3Api['checkoutsBillingAddressByCheckoutIdAndAddressIdPut']>) {
        return this.checkoutsBillingAddressByCheckoutIdAndAddressIdPut(...args);
    }

    /**
     * Add Consignment to Checkout
     *
     * Adds a new consignment to a checkout.

     Please note that this API endpoint is not concurrent safe, meaning multiple simultaneous requests could result in unexpected and inconsistent results.

     For more information about working with consignments, see [Checkout consignment](/docs/storefront/cart-checkout/guide/consignments).  

     Though the only required `address` properties to create a consignment are `email` and `country_code`, to successfully [create an order](/docs/rest-management/checkouts/checkout-orders#create-an-order) the `address` requires the following properties:
     * `first_name`
     * `last_name`
     * `address1`
     * `city`
     * `country`
     * `email`
     * `country_code`

     Depending on the country, the following `address` properties may also be required:

     * `postal_code`
     * `state_or_province`
     */
    checkoutsConsignmentsByCheckoutIdPost(
        checkoutId: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdPostData['path']['checkoutId'],
        requestBody: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdPostData['body'],
        query?: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdPostData['query'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdPostResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/checkouts/${checkoutId}/consignments`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `checkoutsConsignmentsByCheckoutIdPost` instead.
     */
    addCheckoutConsignment(...args: Parameters<CheckoutsV3Api['checkoutsConsignmentsByCheckoutIdPost']>) {
        return this.checkoutsConsignmentsByCheckoutIdPost(...args);
    }

    /**
     * Update Checkout Consignment
     *
     * Updates an existing consignment. The address, line item IDs, and shipping option ID can be updated using this endpoint.

     Use a separate `PUT` request to update the shipping option IDs if you also want to update the address and line item IDs.  

     To add new shipping options, complete the following steps: 
     * Use the [Add Consignment to Checkout](/docs/rest-management/checkouts/checkout-consignments#add-consignment-to-checkout) endpoint to add a new [consignment] to a checkout. 
     * Assign a shipping option to the new consignment by sending a `PUT` request to update the consignment's `shipping_option_id` with a returned value from `data.consignments[N].available_shipping_option[N].id` obtained in the [Add Consignment to Checkout](/docs/rest-management/checkouts/checkout-consignments#add-consignment-to-checkout) endpoint. 

     To update an existing address and line item IDs, assign a new address and line item IDs by sending a `PUT` request.

     Please note that this API endpoint is not concurrent safe, meaning multiple simultaneous requests could result in unexpected and inconsistent results.
     */
    checkoutsConsignmentsByCheckoutIdAndConsignmentIdPut(
        checkoutId: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPutData['path']['checkoutId'],
        consignmentId: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPutData['path']['consignmentId'],
        requestBody: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPutData['body'],
        query?: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPutData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPutResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/checkouts/${checkoutId}/consignments/${consignmentId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `checkoutsConsignmentsByCheckoutIdAndConsignmentIdPut` instead.
     */
    updateCheckoutConsignment(...args: Parameters<CheckoutsV3Api['checkoutsConsignmentsByCheckoutIdAndConsignmentIdPut']>) {
        return this.checkoutsConsignmentsByCheckoutIdAndConsignmentIdPut(...args);
    }

    /**
     * Delete Checkout Consignment
     *
     * Removes an existing consignment from a checkout.

     Removing the last consignment will remove the cart from the customer it is assigned to. Create a new redirect URL for the customer so they can access the cart again.
     */
    checkoutsConsignmentsByCheckoutIdAndConsignmentIdDelete(
        checkoutId: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdAndConsignmentIdDeleteData['path']['checkoutId'],
        consignmentId: CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdAndConsignmentIdDeleteData['path']['consignmentId'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<CheckoutsV3ApiSpecs.CheckoutsConsignmentsByCheckoutIdAndConsignmentIdDeleteResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/checkouts/${checkoutId}/consignments/${consignmentId}`,
        });
    }

    /**
     * @deprecated Use `checkoutsConsignmentsByCheckoutIdAndConsignmentIdDelete` instead.
     */
    deleteCheckoutConsignment(...args: Parameters<CheckoutsV3Api['checkoutsConsignmentsByCheckoutIdAndConsignmentIdDelete']>) {
        return this.checkoutsConsignmentsByCheckoutIdAndConsignmentIdDelete(...args);
    }

    /**
     * Add Coupon to Checkout
     *
     * Adds a coupon code to a checkout.

     **Required Fields**
     * coupon_code

     **Limits**
     * Coupon codes have a 50-character limit. 
     */
    checkoutsCouponsByCheckoutIdPost(
        checkoutId: CheckoutsV3ApiSpecs.CheckoutsCouponsByCheckoutIdPostData['path']['checkoutId'],
        requestBody: CheckoutsV3ApiSpecs.CheckoutsCouponsByCheckoutIdPostData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CheckoutsV3ApiSpecs.CheckoutsCouponsByCheckoutIdPostResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/checkouts/${checkoutId}/coupons`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `checkoutsCouponsByCheckoutIdPost` instead.
     */
    addCheckoutCoupon(...args: Parameters<CheckoutsV3Api['checkoutsCouponsByCheckoutIdPost']>) {
        return this.checkoutsCouponsByCheckoutIdPost(...args);
    }

    /**
     * Delete Checkout Coupon
     *
     * Deletes a coupon code from a checkout.
     */
    checkoutsCouponsByCheckoutIdAndCouponCodeDelete(
        checkoutId: CheckoutsV3ApiSpecs.CheckoutsCouponsByCheckoutIdAndCouponCodeDeleteData['path']['checkoutId'],
        couponCode: CheckoutsV3ApiSpecs.CheckoutsCouponsByCheckoutIdAndCouponCodeDeleteData['path']['couponCode'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<CheckoutsV3ApiSpecs.CheckoutsCouponsByCheckoutIdAndCouponCodeDeleteResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/checkouts/${checkoutId}/coupons/${couponCode}`,
        });
    }

    /**
     * @deprecated Use `checkoutsCouponsByCheckoutIdAndCouponCodeDelete` instead.
     */
    deleteCheckoutCoupon(...args: Parameters<CheckoutsV3Api['checkoutsCouponsByCheckoutIdAndCouponCodeDelete']>) {
        return this.checkoutsCouponsByCheckoutIdAndCouponCodeDelete(...args);
    }

    /**
     * Create an Order
     *
     * Creates an order.

     ## Usage notes
     * Orders created will be set to incomplete order status.
     * You can create as many orders from the same order (cart) as you want.
     * Order duplication copies the existing order, assigns a new order number, and sets the new order status to `incomplete`.
     * Once the order is paid, the cart is deleted.
     * Cart deletion occurs if you are using BigCommerce to accept payments on orders.
     */
    createAnOrder(
        checkoutId: CheckoutsV3ApiSpecs.CreateAnOrderData['path']['checkoutId'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CheckoutsV3ApiSpecs.CreateAnOrderResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/checkouts/${checkoutId}/orders`,
        });
    }

    /**
     * @deprecated Use `createAnOrder` instead.
     */
    createOrder(...args: Parameters<CheckoutsV3Api['createAnOrder']>) {
        return this.createAnOrder(...args);
    }

    /**
     * Get Checkout Settings
     *
     * Get checkout settings
     */
    getCheckoutSettings(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CheckoutsV3ApiSpecs.GetCheckoutSettingsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/checkouts/settings',
        });
    }

    /**
     * Update Checkout Settings
     *
     * Update checkout settings
     */
    updateCheckoutSettings(
        requestBody: CheckoutsV3ApiSpecs.UpdateCheckoutSettingsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CheckoutsV3ApiSpecs.UpdateCheckoutSettingsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/checkouts/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Create Checkout Token
     *
     * Use the checkout token to display a confirmation page for a guest shopper.
     **Usage Notes** * The response from performing this POST request is a checkout token. * The checkout token is a single-use token that is not order-dependent. You cannot create this token after finalizing an order. * After completing the order, you can redirect the shopper to /order-confirmation/{orderId}?t={checkoutToken}. * After token validation, the /order-confirmation/{orderId} page displays. * The `ORDER_TOKEN` should match the order or the logged-in customer can access the order.
     */
    checkoutToken(
        checkoutId: CheckoutsV3ApiSpecs.CheckoutTokenData['path']['checkoutId'],
        requestBody: CheckoutsV3ApiSpecs.CheckoutTokenData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CheckoutsV3ApiSpecs.CheckoutTokenResponses[200]>>,(RequestErrorResponse<401, Required<CheckoutsV3ApiSpecs.CheckoutTokenErrors[401]>> | RequestErrorResponse<422, Required<CheckoutsV3ApiSpecs.CheckoutTokenErrors[422]>>)>({
            path: `v3/checkouts/${checkoutId}/token`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `checkoutToken` instead.
     */
    createCheckoutToken(...args: Parameters<CheckoutsV3Api['checkoutToken']>) {
        return this.checkoutToken(...args);
    }
}
