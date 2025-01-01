export type AddFeesRequest = {
    fees: Array<BaseFee>;
};
export type AddressProperties = {
    first_name?: string;
    last_name?: string;
    email: string;
    company?: string;
    address1?: string;
    address2?: string;
    city?: string;
    state_or_province?: string;
    state_or_province_code?: string;
    country_code: string;
    postal_code?: string;
    phone?: string;
    custom_fields?: Array<{
        field_id?: string;
        field_value?: string;
    }>;
    version?: number;
};
export type AppliedCoupon = {
    code: string;
    id?: number;
    coupon_type?: string;
    display_name?: string;
    discounted_amount?: number;
};
export type BaseFee = {
    type: 'custom_fee';
    name: string;
    display_name: string;
    cost: number;
    source: string;
    tax_class_id?: number;
};
export type type = 'custom_fee';
export type Checkout = {
    id?: string;
    cart?: {
        id?: string;
        customer_id?: number;
        email?: string;
        currency?: {
            code?: string;
        };
        base_amount?: number;
        channel_id?: number;
        discount_amount?: number;
        cart_amount_inc_tax?: number;
        cart_amount_ex_tax?: number;
        coupons?: Array<{
            code: string;
            id?: number;
            coupon_type?: string;
            discounted_amount?: number;
            display_name?: string;
        }>;
        discounts?: Array<{
            id?: string;
            discounted_amount?: number;
        }>;
        line_items?: {
            physical_items: Array<{
                quantity: number;
                id?: string;
                variant_id?: number;
                product_id?: number;
                sku?: string;
                name?: string;
                url?: string;
                is_taxable?: boolean;
                image_url?: string;
                discounts?: Array<{
                    id?: (string | number);
                    discounted_amount?: number;
                }>;
                discount_amount?: number;
                coupon_amount?: number;
                original_price?: number;
                list_price?: number;
                sale_price?: number;
                extended_list_price?: number;
                extended_sale_price?: number;
                comparison_price?: number;
                extended_comparison_price?: number;
                is_require_shipping?: boolean;
                is_mutable?: boolean;
                added_by_promotion?: boolean;
                parent_id?: (number) | null;
                gift_wrapping?: {
                    name?: string;
                    message?: string;
                    amount?: number;
                    amount_as_integer?: number;
                } | null;
            }>;
            digital_items: Array<{
                quantity: number;
                id?: string;
                variant_id?: number;
                parent_id?: (number) | null;
                product_id?: number;
                sku?: string;
                name?: string;
                url?: string;
                is_mutable?: boolean;
                is_require_shipping?: boolean;
                added_by_promotion?: boolean;
                is_taxable?: boolean;
                image_url?: string;
                discounts?: Array<{
                    id?: string;
                    discounted_amount?: number;
                }>;
                discount_amount?: number;
                coupon_amount?: number;
                original_price?: number;
                list_price?: number;
                sale_price?: number;
                extended_list_price?: number;
                extended_sale_price?: number;
                comparison_price?: number;
                extended_comparison_price?: number;
            }>;
            gift_certificates: Array<{
                theme: string;
                amount: number;
                sender: {
                    name?: string;
                    email?: string;
                };
                recipient: {
                    name?: string;
                    email?: string;
                };
                id?: string;
                name?: string;
                taxable?: boolean;
                message?: string;
            }>;
            custom_items?: Array<{
                quantity: number;
                id?: string;
                extended_list_price?: number;
                list_price?: number;
                sku?: string;
                name?: string;
                image_url?: string;
            }>;
        };
        created_time?: string;
        updated_time?: string;
    };
    billing_address?: ({
        first_name?: string;
        last_name?: string;
        email?: string;
        company?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state_or_province?: string;
        state_or_province_code?: string;
        country_code?: string;
        postal_code?: string;
        phone?: string;
        custom_fields?: Array<{
            field_id?: string;
            field_value?: string;
        }>;
    } & {
        id?: string;
    });
    consignments?: Array<{
        id?: string;
        shippingAddress?: {
            [key: string]: unknown;
        };
        address?: ({
            first_name?: string;
            last_name?: string;
            email: string;
            company?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state_or_province?: string;
            state_or_province_code?: string;
            country_code: string;
            postal_code?: string;
            phone?: string;
            custom_fields?: Array<{
                field_id?: string;
                field_value?: string;
            }>;
        } & {
            id?: string;
        });
        available_shipping_options?: Array<{
            description?: string;
            id?: string;
            type?: string;
            image_url?: string;
            cost?: number;
            transit_time?: string;
            readonly additional_description?: string;
        }>;
        selected_shipping_option?: {
            description?: string;
            id?: string;
            type?: string;
            image_url?: string;
            cost?: number;
            transit_time?: string;
            readonly additional_description?: string;
        };
        coupon_discounts?: Array<{
            code?: string;
            amount?: number;
        }>;
        discounts?: Array<{
            id?: number;
        }>;
        shipping_cost_inc_tax?: number;
        shipping_cost_ex_tax?: number;
        handling_cost_inc_tax?: number;
        handling_cost_ex_tax?: number;
        line_item_ids?: Array<(string)>;
        selected_pickup_option?: PickupOption;
    }>;
    taxes?: Array<{
        name?: string;
        amount?: number;
    }>;
    coupons?: Array<AppliedCoupon>;
    fees?: Array<CheckoutFee>;
    order_id?: (string) | null;
    shipping_cost_total_inc_tax?: number;
    shipping_cost_total_ex_tax?: number;
    handling_cost_total_inc_tax?: number;
    handling_cost_total_ex_tax?: number;
    tax_total?: number;
    subtotal_inc_tax?: number;
    subtotal_ex_tax?: number;
    grand_total?: number;
    created_time?: string;
    updated_time?: string;
    customer_message?: string;
    promotions?: Array<{
        banners?: Array<{
            id?: string;
            type?: string;
            page?: Array<(string)>;
            text?: string;
        }>;
    }>;
    version?: number;
};
export type Checkout_Put = {
    customer_message: string;
    version?: number;
};
export type CheckoutFee = {
    id?: string;
    type?: 'custom_fee';
    name?: string;
    display_name?: string;
    cost_inc_tax?: number;
    cost_ex_tax?: number;
    source?: string;
    tax_class_id?: (number) | null;
};
export type CheckoutsSettings = {
    custom_checkout_script_url?: string;
    order_confirmation_use_custom_checkout_script?: boolean;
    custom_order_confirmation_script_url?: string;
    custom_checkout_supports_uco_settings?: boolean;
};
export type CheckoutsSettingsRequest = {
    custom_checkout_script_url?: string;
    order_confirmation_use_custom_checkout_script?: boolean;
    custom_order_confirmation_script_url?: string;
    custom_checkout_supports_uco_settings?: boolean;
};
export type CouponCodeRequest = {
    coupon_code?: string;
    version?: number;
};
export type CreateConsignmentRequest = Array<{
    address?: {
        first_name?: string;
        last_name?: string;
        email: string;
        company?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state_or_province: string;
        state_or_province_code?: string;
        country_code: string;
        postal_code: string;
        phone?: string;
        custom_fields?: Array<{
            field_id: string;
            field_value?: string;
        }>;
    };
    line_items?: Array<{
        item_id: string;
        quantity: number;
    }>;
    pickup_option?: {
        pickup_method_id?: number;
    };
    version?: number;
}>;
export type DeleteConsignmentRequest = {
    version?: number;
};
export type DeleteCouponCodeRequest = {
    version?: number;
};
export type DeleteFeesRequest = {
    ids: Array<(string)>;
};
export type FeeWithId = BaseFee & {
    id: string;
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type Order = {
    id?: number;
};
export type ParameterAccept = string;
export type ParameteraddressId = number;
export type ParametercheckoutId = string;
export type ParameterconsignmentId = string;
export type ParameterContent_Type = string;
export type ParametercouponCode = string;
export type ParameterIncludeGeneral = Array<('cart.line_items.physical_items.options' | 'cart.line_items.digital_items.options' | 'consignments.available_shipping_options' | 'promotions.banners')>;
export type ParameterIncludeShippingOptions = 'consignments.available_shipping_options';
export type PickupOption = {
    pickup_method_id?: number;
};
export type UpdateConsignmentRequest = {
    address?: {
        first_name?: string;
        last_name?: string;
        email: string;
        company?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state_or_province?: string;
        state_or_province_code?: string;
        country_code: string;
        postal_code?: string;
        phone?: string;
        custom_fields?: Array<{
            field_id?: string;
            field_value?: string;
        }>;
    };
    line_items?: Array<{
        item_id: string;
        quantity: number;
    }>;
    shipping_option_id?: string;
    pickup_option?: {
        pickup_method_id?: number;
    };
    custom_shipping?: {
        price?: number;
        description?: string;
    };
    version?: number;
};
export type UpdateFeesRequest = {
    fees: Array<FeeWithId>;
};
export type GetCheckoutData = {
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
    };
    query?: {
        include?: Array<('cart.line_items.physical_items.options' | 'cart.line_items.digital_items.options' | 'consignments.available_shipping_options' | 'promotions.banners')>;
    };
};
export type GetCheckoutResponse = ({
    data?: Checkout;
    meta?: MetaOpen;
});
export type GetCheckoutError = ({
    errors?: Array<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>;
});
export type UpdateCheckoutData = {
    body: Checkout_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        checkoutId: string;
    };
};
export type UpdateCheckoutResponse = ({
    data?: Checkout;
    meta?: MetaOpen;
});
export type UpdateCheckoutError = ({
    status?: number;
    title?: string;
    type?: string;
});
export type AddCheckoutDiscountData = {
    body?: {
        cart?: {
            discounts?: Array<{
                discounted_amount: number;
                name?: string;
            }>;
            line_items?: Array<{
                id?: string;
                discounted_amount?: number;
            }>;
            version?: number;
        };
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        checkoutId: string;
    };
};
export type AddCheckoutDiscountResponse = ({
    data?: Checkout;
    meta?: MetaOpen;
});
export type AddCheckoutDiscountError = ({
    status?: number;
    title?: string;
    type?: string;
});
export type AddCheckoutBillingAddressData = {
    body: AddressProperties;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        checkoutId: string;
    };
};
export type AddCheckoutBillingAddressResponse = ({
    data?: Checkout;
    meta?: MetaOpen;
});
export type AddCheckoutBillingAddressError = ({
    status?: number;
    title?: string;
    type?: string;
});
export type UpdateCheckoutBillingAddressData = {
    body: AddressProperties;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        addressId: number;
        checkoutId: string;
    };
};
export type UpdateCheckoutBillingAddressResponse = ({
    data?: Checkout;
    meta?: MetaOpen;
});
export type UpdateCheckoutBillingAddressError = ({
    status?: number;
    title?: string;
    type?: string;
});
export type AddCheckoutConsignmentData = {
    body?: CreateConsignmentRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        checkoutId: string;
    };
    query?: {
        include?: 'consignments.available_shipping_options';
    };
};
export type AddCheckoutConsignmentResponse = ({
    data?: Checkout;
    meta?: MetaOpen;
});
export type AddCheckoutConsignmentError = ({
    status?: number;
    title?: string;
    type?: string;
});
export type UpdateCheckoutConsignmentData = {
    body: UpdateConsignmentRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        checkoutId: string;
        consignmentId: string;
    };
    query?: {
        include?: 'consignments.available_shipping_options';
    };
};
export type UpdateCheckoutConsignmentResponse = ({
    data?: Checkout;
    meta?: MetaOpen;
});
export type UpdateCheckoutConsignmentError = ({
    status?: number;
    title?: string;
    type?: string;
});
export type DeleteCheckoutConsignmentData = {
    body?: DeleteConsignmentRequest;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
        consignmentId: string;
    };
};
export type DeleteCheckoutConsignmentResponse = ({
    data?: Checkout;
    meta?: MetaOpen;
});
export type DeleteCheckoutConsignmentError = unknown;
export type AddCheckoutCouponData = {
    body: CouponCodeRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        checkoutId: string;
    };
};
export type AddCheckoutCouponResponse = ({
    data?: Checkout;
    meta?: MetaOpen;
});
export type AddCheckoutCouponError = ({
    status?: number;
    title?: string;
    type?: string;
});
export type DeleteCheckoutCouponData = {
    body?: DeleteCouponCodeRequest;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
        couponCode: string;
    };
};
export type DeleteCheckoutCouponResponse = ({
    data?: Checkout;
    meta?: MetaOpen;
});
export type DeleteCheckoutCouponError = ({
    status?: number;
    title?: string;
    type?: string;
});
export type CheckoutsFeesByCheckoutIdPostData = {
    body: AddFeesRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        checkoutId: string;
    };
};
export type CheckoutsFeesByCheckoutIdPostResponse = ({
    data?: Checkout;
    meta?: MetaOpen;
});
export type CheckoutsFeesByCheckoutIdPostError = unknown;
export type CheckoutsFeesByCheckoutIdPutData = {
    body: UpdateFeesRequest;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
    };
};
export type CheckoutsFeesByCheckoutIdPutResponse = ({
    data?: Checkout;
    meta?: MetaOpen;
});
export type CheckoutsFeesByCheckoutIdPutError = unknown;
export type CheckoutsFeesByCheckoutIdDeleteData = {
    body: DeleteFeesRequest;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
    };
};
export type CheckoutsFeesByCheckoutIdDeleteResponse = ({
    data?: Checkout;
    meta?: MetaOpen;
});
export type CheckoutsFeesByCheckoutIdDeleteError = unknown;
export type CreateOrderData = {
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        checkoutId: string;
    };
};
export type CreateOrderResponse = ({
    data?: Order;
    meta?: MetaOpen;
});
export type CreateOrderError = unknown;
export type GetCheckoutSettingsData = {
    headers: {
        Accept: string;
    };
};
export type GetCheckoutSettingsResponse = ({
    data?: CheckoutsSettings;
    meta?: MetaOpen;
});
export type GetCheckoutSettingsError = unknown;
export type UpdateCheckoutSettingsData = {
    body: CheckoutsSettingsRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateCheckoutSettingsResponse = ({
    data?: CheckoutsSettings;
    meta?: MetaOpen;
});
export type UpdateCheckoutSettingsError = unknown;
export type CreateCheckoutTokenData = {
    body?: {
        maxUses?: number;
        ttl?: number;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        checkoutId: string;
    };
};
export type CreateCheckoutTokenResponse = ({
    checkoutToken?: string;
    meta?: MetaOpen;
});
export type CreateCheckoutTokenError = ({
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
    };
} | {
    status?: string;
    title?: string;
    type?: string;
});
