import RequestService from '../helpers/request/request-service';
import * as CheckoutsV3ApiSpecs from '../generated/checkouts-v3';

export default class CheckoutsV3Api {
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
    getCheckout(
        checkoutId: CheckoutsV3ApiSpecs.GetCheckoutData['path']['checkoutId'],
        query?: CheckoutsV3ApiSpecs.GetCheckoutData['query'],
    ) {
        return this.request.get<CheckoutsV3ApiSpecs.GetCheckoutResponse, CheckoutsV3ApiSpecs.GetCheckoutError>({
            path: `v3/checkouts/${checkoutId}`,
            query,
        });
    }

    /**
     * Update Customer Messages
     *
     * Change customer message pertaining to an existing *Checkout*.

     **Limits:**
     * 2000 characters for customer message
     */
    updateCheckout(
        checkoutId: CheckoutsV3ApiSpecs.UpdateCheckoutData['path']['checkoutId'],
        requestBody: CheckoutsV3ApiSpecs.UpdateCheckoutData['body'],
    ) {
        return this.request.put<CheckoutsV3ApiSpecs.UpdateCheckoutResponse, CheckoutsV3ApiSpecs.UpdateCheckoutError>({
            path: `v3/checkouts/${checkoutId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Add Discount to Checkout
     *
     * Adds a discount to an existing checkout.

     Use this endpoint to apply the following discounts:
     * Apply a manual discount to a cart. In this case, you can distribute the discount between each line item in the cart based on the item value.
     * Apply a manual discount against a specific line item.
     * Apply a manual discount at the item-level with a cart-level discount.

     Notes:
     * When you call this API, you clear out all existing discounts applied to line items, including product and order-based discounts.
     * You cannot apply a manual discount to a specific line item if you have already applied a coupon or automatic promotion to it.

     Required Fields:
     * `discounted_amount` at the cart-level or at the item-level

     To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.
     */
    addCheckoutDiscount(
        requestBody: CheckoutsV3ApiSpecs.AddCheckoutDiscountData['body'],
    ) {
        return this.request.post<CheckoutsV3ApiSpecs.AddCheckoutDiscountResponse, CheckoutsV3ApiSpecs.AddCheckoutDiscountError>({
            path: 'v3/checkouts/{checkoutId}/discounts',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Add Checkout Billing Address
     *
     * Adds a billing address to an existing checkout.

     **Required Fields**
     * email
     * country_code

     To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.
     */
    addCheckoutBillingAddress(
        requestBody: CheckoutsV3ApiSpecs.AddCheckoutBillingAddressData['body'],
    ) {
        return this.request.post<CheckoutsV3ApiSpecs.AddCheckoutBillingAddressResponse, CheckoutsV3ApiSpecs.AddCheckoutBillingAddressError>({
            path: 'v3/checkouts/{checkoutId}/billing-address',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Checkout Billing Address
     *
     * Updates an existing billing address on a checkout.

     To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.
     */
    updateCheckoutBillingAddress(
        requestBody: CheckoutsV3ApiSpecs.UpdateCheckoutBillingAddressData['body'],
    ) {
        return this.request.put<CheckoutsV3ApiSpecs.UpdateCheckoutBillingAddressResponse, CheckoutsV3ApiSpecs.UpdateCheckoutBillingAddressError>({
            path: 'v3/checkouts/{checkoutId}/billing-address/{addressId}',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Add Consignment to Checkout
     *
     * Adds a new consignment to a checkout.

     To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.

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
    addCheckoutConsignment(
        requestBody: CheckoutsV3ApiSpecs.AddCheckoutConsignmentData['body'],
        query?: CheckoutsV3ApiSpecs.AddCheckoutConsignmentData['query'],
    ) {
        return this.request.post<CheckoutsV3ApiSpecs.AddCheckoutConsignmentResponse, CheckoutsV3ApiSpecs.AddCheckoutConsignmentError>({
            path: 'v3/checkouts/{checkoutId}/consignments',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
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

     To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.

     2. Assign a shipping option to the new consignment by sending a `PUT` request to update the consignment's `shipping_option_id` with a returned value from `data.consignments[N].available_shipping_option[N].id` obtained in Step One. 
     */
    updateCheckoutConsignment(
        checkoutId: CheckoutsV3ApiSpecs.UpdateCheckoutConsignmentData['path']['checkoutId'],
        consignmentId: CheckoutsV3ApiSpecs.UpdateCheckoutConsignmentData['path']['consignmentId'],
        requestBody: CheckoutsV3ApiSpecs.UpdateCheckoutConsignmentData['body'],
        query?: CheckoutsV3ApiSpecs.UpdateCheckoutConsignmentData['query'],
    ) {
        return this.request.put<CheckoutsV3ApiSpecs.UpdateCheckoutConsignmentResponse, CheckoutsV3ApiSpecs.UpdateCheckoutConsignmentError>({
            path: `v3/checkouts/${checkoutId}/consignments/${consignmentId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Delete Checkout Consignment
     *
     * Removes an existing consignment from a checkout.

     To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.
     */
    deleteCheckoutConsignment(
        checkoutId: CheckoutsV3ApiSpecs.DeleteCheckoutConsignmentData['path']['checkoutId'],
        consignmentId: CheckoutsV3ApiSpecs.DeleteCheckoutConsignmentData['path']['consignmentId'],
        requestBody: CheckoutsV3ApiSpecs.DeleteCheckoutConsignmentData['body'],
    ) {
        return this.request.delete<CheckoutsV3ApiSpecs.DeleteCheckoutConsignmentResponse, any>({
            path: `v3/checkouts/${checkoutId}/consignments/${consignmentId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Add Coupon to Checkout
     *
     * Adds a coupon code to a checkout. 

     You can use multiple coupons by using this endpoint to apply one coupon at a time on your storefront. Ensure you enable the [Promotion Settings](https://support.bigcommerce.com/s/article/Store-Settings?language=en_US#promotion) in your control panel to allow for multiple coupons per order.

     **Required Fields**
     * coupon_code

     **Limits**
     * Coupon codes have a 50-character limit.

     To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.
     */
    addCheckoutCoupon(
        requestBody: CheckoutsV3ApiSpecs.AddCheckoutCouponData['body'],
    ) {
        return this.request.post<CheckoutsV3ApiSpecs.AddCheckoutCouponResponse, CheckoutsV3ApiSpecs.AddCheckoutCouponError>({
            path: 'v3/checkouts/{checkoutId}/coupons',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Checkout Coupon
     *
     * Deletes a coupon code from a checkout.

     To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.
     */
    deleteCheckoutCoupon(
        requestBody: CheckoutsV3ApiSpecs.DeleteCheckoutCouponData['body'],
    ) {
        return this.request.delete<CheckoutsV3ApiSpecs.DeleteCheckoutCouponResponse, CheckoutsV3ApiSpecs.DeleteCheckoutCouponError>({
            path: 'v3/checkouts/{checkoutId}/coupons/{couponCode}',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Add order level fees to a checkout
     *
     * Adds order level fees to a checkout. 

     Limits: 
       - Maximum of 5 fees per checkout.
     */
    checkoutsFeesByCheckoutIdPost(
        requestBody: CheckoutsV3ApiSpecs.CheckoutsFeesByCheckoutIdPostData['body'],
    ) {
        return this.request.post<CheckoutsV3ApiSpecs.CheckoutsFeesByCheckoutIdPostResponse, any>({
            path: 'v3/checkouts/{checkoutId}/fees',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update order level fees in a checkout
     *
     * Updates order level fees in a checkout.
     > We do not support partial updates, so please send the total entity values for each fee to be updated.
     */
    checkoutsFeesByCheckoutIdPut(
        requestBody: CheckoutsV3ApiSpecs.CheckoutsFeesByCheckoutIdPutData['body'],
    ) {
        return this.request.put<CheckoutsV3ApiSpecs.CheckoutsFeesByCheckoutIdPutResponse, any>({
            path: 'v3/checkouts/{checkoutId}/fees',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete order level fees from a checkout.
     *
     * Delete fees from a checkout.
     */
    checkoutsFeesByCheckoutIdDelete(
        requestBody: CheckoutsV3ApiSpecs.CheckoutsFeesByCheckoutIdDeleteData['body'],
    ) {
        return this.request.delete<CheckoutsV3ApiSpecs.CheckoutsFeesByCheckoutIdDeleteResponse, any>({
            path: 'v3/checkouts/{checkoutId}/fees',
            contentType: 'application/json',
            body: requestBody,
        });
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
    createOrder(
    ) {
        return this.request.post<CheckoutsV3ApiSpecs.CreateOrderResponse, any>({
            path: 'v3/checkouts/{checkoutId}/orders',
        });
    }

    /**
     * Get Checkout Settings
     *
     * Get checkout settings
     */
    getCheckoutSettings(
    ) {
        return this.request.get<CheckoutsV3ApiSpecs.GetCheckoutSettingsResponse, any>({
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
        return this.request.put<CheckoutsV3ApiSpecs.UpdateCheckoutSettingsResponse, any>({
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
    createCheckoutToken(
        checkoutId: CheckoutsV3ApiSpecs.CreateCheckoutTokenData['path']['checkoutId'],
        requestBody: CheckoutsV3ApiSpecs.CreateCheckoutTokenData['body'],
    ) {
        return this.request.post<CheckoutsV3ApiSpecs.CreateCheckoutTokenResponse, CheckoutsV3ApiSpecs.CreateCheckoutTokenError>({
            path: `v3/checkouts/${checkoutId}/token`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
