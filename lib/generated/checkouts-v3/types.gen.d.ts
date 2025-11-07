export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type Checkout = {
    id?: string;
    cart?: {
        id?: string;
        customer_id?: number;
        email?: string;
        currency?: {
            code?: string;
        };
        tax_included?: boolean;
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
                    id?: string | number;
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
                parent_id?: number | null;
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
                parent_id?: number | null;
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
    billing_address?: {
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
    };
    consignments?: Array<{
        id?: string;
        shippingAddress?: {
            [key: string]: unknown;
        };
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
        } & {
            id?: string;
        };
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
        line_item_ids?: Array<string>;
        selected_pickup_option?: PickupOption;
    }>;
    taxes?: Array<{
        name?: string;
        amount?: number;
    }>;
    coupons?: Array<AppliedCoupon>;
    fees?: Array<CheckoutFee>;
    order_id?: string | null;
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
            page?: Array<string>;
            text?: string;
        }>;
    }>;
    version?: number;
};
export type CheckoutPut = {
    customer_message: string;
    version?: number;
};
export type AppliedCoupon = {
    code: string;
    id?: number;
    coupon_type?: string;
    display_name?: string;
    discounted_amount?: number;
};
export type CheckoutFee = {
    id?: string;
    type?: 'custom_fee';
    name?: string;
    display_name?: string;
    cost_inc_tax?: number;
    cost_ex_tax?: number;
    source?: string;
    tax_class_id?: number | null;
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
export type CouponCodeRequest = {
    coupon_code?: string;
    version?: number;
};
export type BaseFee = {
    type: 'custom_fee';
    name: string;
    display_name: string;
    cost: number;
    source: string;
    tax_class_id?: number;
};
export type FeeWithId = BaseFee & {
    id: string;
};
export type AddFeesRequest = {
    fees: Array<BaseFee>;
};
export type UpdateFeesRequest = {
    fees: Array<FeeWithId>;
};
export type DeleteFeesRequest = {
    ids: Array<string>;
};
export type DeleteCouponCodeRequest = {
    version?: number;
};
export type Order = {
    id?: number;
};
export type CheckoutsSettings = {
    custom_checkout_script_url?: string;
    order_confirmation_use_custom_checkout_script?: boolean;
    custom_order_confirmation_script_url?: string;
    custom_checkout_supports_uco_settings?: boolean;
    custom_checkout_sri_hash?: string;
    custom_order_confirmation_sri_hash?: string;
};
export type ChannelCheckoutsSettings = {
    checkout_type?: string;
    guest_checkout_type?: string;
    guest_checkout_for_existing_accounts?: string;
    policy_consent?: string;
    order_confirmation_contact_email?: string;
    is_order_terms_and_conditions_enabled?: boolean;
    order_terms_and_conditions_type?: string;
    order_terms_and_conditions_link?: string;
    order_terms_and_conditions_textarea?: string;
    should_redirect_to_storefront_for_auth?: boolean;
} & CheckoutsSettings;
export type CheckoutsSettingsRequest = {
    custom_checkout_script_url?: string;
    order_confirmation_use_custom_checkout_script?: boolean;
    custom_order_confirmation_script_url?: string;
    custom_checkout_supports_uco_settings?: boolean;
    custom_checkout_sri_hash?: string;
    custom_order_confirmation_sri_hash?: string;
};
export type PickupOption = {
    pickup_method_id?: number;
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type CheckoutWritable = {
    id?: string;
    cart?: {
        id?: string;
        customer_id?: number;
        email?: string;
        currency?: {
            code?: string;
        };
        tax_included?: boolean;
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
                    id?: string | number;
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
                parent_id?: number | null;
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
                parent_id?: number | null;
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
    billing_address?: {
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
    };
    consignments?: Array<{
        id?: string;
        shippingAddress?: {
            [key: string]: unknown;
        };
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
        } & {
            id?: string;
        };
        available_shipping_options?: Array<{
            description?: string;
            id?: string;
            type?: string;
            image_url?: string;
            cost?: number;
            transit_time?: string;
        }>;
        selected_shipping_option?: {
            description?: string;
            id?: string;
            type?: string;
            image_url?: string;
            cost?: number;
            transit_time?: string;
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
        line_item_ids?: Array<string>;
        selected_pickup_option?: PickupOption;
    }>;
    taxes?: Array<{
        name?: string;
        amount?: number;
    }>;
    coupons?: Array<AppliedCoupon>;
    fees?: Array<CheckoutFee>;
    order_id?: string | null;
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
            page?: Array<string>;
            text?: string;
        }>;
    }>;
    version?: number;
};
export type MetaOpenWritable = {
    [key: string]: unknown;
};
export type CheckoutId = string;
export type AddressId = number;
export type ConsignmentId = string;
export type CouponCode = string;
export type Accept = string;
export type ContentType = string;
export type IncludeShippingOptions = 'consignments.available_shipping_options';
export type IncludeGeneral = Array<'cart.line_items.physical_items.options' | 'cart.line_items.digital_items.options' | 'consignments.available_shipping_options' | 'promotions.banners'>;
export type GetCheckoutData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
    };
    query?: {
        include?: Array<'cart.line_items.physical_items.options' | 'cart.line_items.digital_items.options' | 'consignments.available_shipping_options' | 'promotions.banners'>;
    };
    url: '/checkouts/{checkoutId}';
};
export type GetCheckoutErrors = {
    404: {
        errors?: Array<{
            status?: number;
            title?: string;
            type?: string;
            detail?: string;
        }>;
    };
};
export type GetCheckoutError = GetCheckoutErrors[keyof GetCheckoutErrors];
export type GetCheckoutResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type GetCheckoutResponse = GetCheckoutResponses[keyof GetCheckoutResponses];
export type UpdateCheckoutData = {
    body: CheckoutPut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        checkoutId: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}';
};
export type UpdateCheckoutErrors = {
    409: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type UpdateCheckoutError = UpdateCheckoutErrors[keyof UpdateCheckoutErrors];
export type UpdateCheckoutResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type UpdateCheckoutResponse = UpdateCheckoutResponses[keyof UpdateCheckoutResponses];
export type AddCheckoutDiscountData = {
    body?: {
        cart?: {
            discounts?: Array<{
                discounted_amount: number;
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
    query?: never;
    url: '/checkouts/{checkoutId}/discounts';
};
export type AddCheckoutDiscountErrors = {
    409: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type AddCheckoutDiscountError = AddCheckoutDiscountErrors[keyof AddCheckoutDiscountErrors];
export type AddCheckoutDiscountResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type AddCheckoutDiscountResponse = AddCheckoutDiscountResponses[keyof AddCheckoutDiscountResponses];
export type AddCheckoutBillingAddressData = {
    body: AddressProperties;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        checkoutId: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}/billing-address';
};
export type AddCheckoutBillingAddressErrors = {
    409: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type AddCheckoutBillingAddressError = AddCheckoutBillingAddressErrors[keyof AddCheckoutBillingAddressErrors];
export type AddCheckoutBillingAddressResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type AddCheckoutBillingAddressResponse = AddCheckoutBillingAddressResponses[keyof AddCheckoutBillingAddressResponses];
export type UpdateCheckoutBillingAddressData = {
    body: AddressProperties;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        checkoutId: string;
        addressId: number;
    };
    query?: never;
    url: '/checkouts/{checkoutId}/billing-address/{addressId}';
};
export type UpdateCheckoutBillingAddressErrors = {
    409: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type UpdateCheckoutBillingAddressError = UpdateCheckoutBillingAddressErrors[keyof UpdateCheckoutBillingAddressErrors];
export type UpdateCheckoutBillingAddressResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type UpdateCheckoutBillingAddressResponse = UpdateCheckoutBillingAddressResponses[keyof UpdateCheckoutBillingAddressResponses];
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
    url: '/checkouts/{checkoutId}/consignments';
};
export type AddCheckoutConsignmentErrors = {
    409: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type AddCheckoutConsignmentError = AddCheckoutConsignmentErrors[keyof AddCheckoutConsignmentErrors];
export type AddCheckoutConsignmentResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type AddCheckoutConsignmentResponse = AddCheckoutConsignmentResponses[keyof AddCheckoutConsignmentResponses];
export type DeleteCheckoutConsignmentData = {
    body?: DeleteConsignmentRequest;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
        consignmentId: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}/consignments/{consignmentId}';
};
export type DeleteCheckoutConsignmentResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type DeleteCheckoutConsignmentResponse = DeleteCheckoutConsignmentResponses[keyof DeleteCheckoutConsignmentResponses];
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
    url: '/checkouts/{checkoutId}/consignments/{consignmentId}';
};
export type UpdateCheckoutConsignmentErrors = {
    409: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type UpdateCheckoutConsignmentError = UpdateCheckoutConsignmentErrors[keyof UpdateCheckoutConsignmentErrors];
export type UpdateCheckoutConsignmentResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type UpdateCheckoutConsignmentResponse = UpdateCheckoutConsignmentResponses[keyof UpdateCheckoutConsignmentResponses];
export type AddCheckoutCouponData = {
    body: CouponCodeRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        checkoutId: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}/coupons';
};
export type AddCheckoutCouponErrors = {
    409: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type AddCheckoutCouponError = AddCheckoutCouponErrors[keyof AddCheckoutCouponErrors];
export type AddCheckoutCouponResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type AddCheckoutCouponResponse = AddCheckoutCouponResponses[keyof AddCheckoutCouponResponses];
export type DeleteCheckoutCouponData = {
    body?: DeleteCouponCodeRequest;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
        couponCode: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}/coupons/{couponCode}';
};
export type DeleteCheckoutCouponErrors = {
    409: {
        status?: number;
        title?: string;
        type?: string;
    };
};
export type DeleteCheckoutCouponError = DeleteCheckoutCouponErrors[keyof DeleteCheckoutCouponErrors];
export type DeleteCheckoutCouponResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type DeleteCheckoutCouponResponse = DeleteCheckoutCouponResponses[keyof DeleteCheckoutCouponResponses];
export type CheckoutsFeesByCheckoutIdDeleteData = {
    body: DeleteFeesRequest;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}/fees';
};
export type CheckoutsFeesByCheckoutIdDeleteResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type CheckoutsFeesByCheckoutIdDeleteResponse = CheckoutsFeesByCheckoutIdDeleteResponses[keyof CheckoutsFeesByCheckoutIdDeleteResponses];
export type CheckoutsFeesByCheckoutIdPostData = {
    body: AddFeesRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        checkoutId: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}/fees';
};
export type CheckoutsFeesByCheckoutIdPostResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type CheckoutsFeesByCheckoutIdPostResponse = CheckoutsFeesByCheckoutIdPostResponses[keyof CheckoutsFeesByCheckoutIdPostResponses];
export type CheckoutsFeesByCheckoutIdPutData = {
    body: UpdateFeesRequest;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}/fees';
};
export type CheckoutsFeesByCheckoutIdPutResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type CheckoutsFeesByCheckoutIdPutResponse = CheckoutsFeesByCheckoutIdPutResponses[keyof CheckoutsFeesByCheckoutIdPutResponses];
export type CreateOrderData = {
    body?: never;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        checkoutId: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}/orders';
};
export type CreateOrderResponses = {
    200: {
        data?: Order;
        meta?: MetaOpen;
    };
};
export type CreateOrderResponse = CreateOrderResponses[keyof CreateOrderResponses];
export type GetCheckoutSettingsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/checkouts/settings';
};
export type GetCheckoutSettingsResponses = {
    200: {
        data?: CheckoutsSettings;
        meta?: MetaOpen;
    };
};
export type GetCheckoutSettingsResponse = GetCheckoutSettingsResponses[keyof GetCheckoutSettingsResponses];
export type UpdateCheckoutSettingsData = {
    body: CheckoutsSettingsRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/checkouts/settings';
};
export type UpdateCheckoutSettingsResponses = {
    200: {
        data?: CheckoutsSettings;
        meta?: MetaOpen;
    };
};
export type UpdateCheckoutSettingsResponse = UpdateCheckoutSettingsResponses[keyof UpdateCheckoutSettingsResponses];
export type GetChannelCheckoutSettingsData = {
    body?: never;
    path: {
        channelId: number;
    };
    query?: never;
    url: '/checkouts/settings/channels/{channelId}';
};
export type GetChannelCheckoutSettingsErrors = {
    422: unknown;
};
export type GetChannelCheckoutSettingsResponses = {
    200: {
        data?: ChannelCheckoutsSettings;
        meta?: MetaOpen;
    };
};
export type GetChannelCheckoutSettingsResponse = GetChannelCheckoutSettingsResponses[keyof GetChannelCheckoutSettingsResponses];
export type PutChannelCheckoutSettingsData = {
    body?: ChannelCheckoutsSettings;
    path: {
        channelId: number;
    };
    query?: never;
    url: '/checkouts/settings/channels/{channelId}';
};
export type PutChannelCheckoutSettingsErrors = {
    422: unknown;
};
export type PutChannelCheckoutSettingsResponses = {
    200: {
        data?: ChannelCheckoutsSettings;
        meta?: MetaOpen;
    };
};
export type PutChannelCheckoutSettingsResponse = PutChannelCheckoutSettingsResponses[keyof PutChannelCheckoutSettingsResponses];
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
    query?: never;
    url: '/checkouts/{checkoutId}/token';
};
export type CreateCheckoutTokenErrors = {
    401: {
        status?: number;
        title?: string;
        type?: string;
        errors?: {
            [key: string]: unknown;
        };
    };
    422: {
        status?: string;
        title?: string;
        type?: string;
    };
};
export type CreateCheckoutTokenError = CreateCheckoutTokenErrors[keyof CreateCheckoutTokenErrors];
export type CreateCheckoutTokenResponses = {
    200: {
        checkoutToken?: string;
        meta?: MetaOpen;
    };
};
export type CreateCheckoutTokenResponse = CreateCheckoutTokenResponses[keyof CreateCheckoutTokenResponses];
