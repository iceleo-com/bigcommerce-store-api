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
                    id?: number;
                    discounted_amount?: number;
                }>;
                discount_amount?: number;
                coupon_amount?: number;
                original_price?: number;
                list_price?: number;
                sale_price?: number;
                extended_list_price?: number;
                extended_sale_price?: number;
                is_require_shipping?: boolean;
                is_mutable?: boolean;
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
};
export type CheckoutPut = {
    customer_message: string;
};
export type AppliedCoupon = {
    code: string;
    id?: number;
    coupon_type?: string;
    discounted_amount?: number;
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
        state_or_province?: string;
        state_or_province_code?: string;
        country_code: string;
        postal_code?: string;
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
}>;
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
};
export type CouponCodeRequest = {
    coupon_code?: string;
};
export type Order = {
    id?: number;
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
                    id?: number;
                    discounted_amount?: number;
                }>;
                discount_amount?: number;
                coupon_amount?: number;
                original_price?: number;
                list_price?: number;
                sale_price?: number;
                extended_list_price?: number;
                extended_sale_price?: number;
                is_require_shipping?: boolean;
                is_mutable?: boolean;
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
export type IncludeShippingOption = 'consignments.available_shipping_options';
export type CheckoutsByCheckoutIdGetData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
    };
    query?: {
        include?: 'cart.line_items.physical_items.options' | 'cart.line_items.digital_items.options' | 'consignments.available_shipping_options' | 'promotions.banners';
    };
    url: '/checkouts/{checkoutId}';
};
export type CheckoutsByCheckoutIdGetErrors = {
    404: {
        errors?: Array<{
            status?: number;
            title?: string;
            type?: string;
            detail?: string;
        }>;
    };
};
export type CheckoutsByCheckoutIdGetError = CheckoutsByCheckoutIdGetErrors[keyof CheckoutsByCheckoutIdGetErrors];
export type CheckoutsByCheckoutIdGetResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type CheckoutsByCheckoutIdGetResponse = CheckoutsByCheckoutIdGetResponses[keyof CheckoutsByCheckoutIdGetResponses];
export type CheckoutsByCheckoutIdPutData = {
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
export type CheckoutsByCheckoutIdPutResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type CheckoutsByCheckoutIdPutResponse = CheckoutsByCheckoutIdPutResponses[keyof CheckoutsByCheckoutIdPutResponses];
export type PostStoreHashV3CheckoutsCheckoutIdDiscountsData = {
    body?: {
        cart?: {
            discounts?: Array<{
                discounted_amount: number;
                name?: string;
            }>;
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
export type PostStoreHashV3CheckoutsCheckoutIdDiscountsResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type PostStoreHashV3CheckoutsCheckoutIdDiscountsResponse = PostStoreHashV3CheckoutsCheckoutIdDiscountsResponses[keyof PostStoreHashV3CheckoutsCheckoutIdDiscountsResponses];
export type CheckoutsBillingAddressByCheckoutIdPostData = {
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
export type CheckoutsBillingAddressByCheckoutIdPostResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type CheckoutsBillingAddressByCheckoutIdPostResponse = CheckoutsBillingAddressByCheckoutIdPostResponses[keyof CheckoutsBillingAddressByCheckoutIdPostResponses];
export type CheckoutsBillingAddressByCheckoutIdAndAddressIdPutData = {
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
export type CheckoutsBillingAddressByCheckoutIdAndAddressIdPutResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type CheckoutsBillingAddressByCheckoutIdAndAddressIdPutResponse = CheckoutsBillingAddressByCheckoutIdAndAddressIdPutResponses[keyof CheckoutsBillingAddressByCheckoutIdAndAddressIdPutResponses];
export type CheckoutsConsignmentsByCheckoutIdPostData = {
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
export type CheckoutsConsignmentsByCheckoutIdPostResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type CheckoutsConsignmentsByCheckoutIdPostResponse = CheckoutsConsignmentsByCheckoutIdPostResponses[keyof CheckoutsConsignmentsByCheckoutIdPostResponses];
export type CheckoutsConsignmentsByCheckoutIdAndConsignmentIdDeleteData = {
    body?: never;
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
export type CheckoutsConsignmentsByCheckoutIdAndConsignmentIdDeleteResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type CheckoutsConsignmentsByCheckoutIdAndConsignmentIdDeleteResponse = CheckoutsConsignmentsByCheckoutIdAndConsignmentIdDeleteResponses[keyof CheckoutsConsignmentsByCheckoutIdAndConsignmentIdDeleteResponses];
export type CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPutData = {
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
export type CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPutResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPutResponse = CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPutResponses[keyof CheckoutsConsignmentsByCheckoutIdAndConsignmentIdPutResponses];
export type CheckoutsCouponsByCheckoutIdPostData = {
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
export type CheckoutsCouponsByCheckoutIdPostResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type CheckoutsCouponsByCheckoutIdPostResponse = CheckoutsCouponsByCheckoutIdPostResponses[keyof CheckoutsCouponsByCheckoutIdPostResponses];
export type CheckoutsCouponsByCheckoutIdAndCouponCodeDeleteData = {
    body?: never;
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
export type CheckoutsCouponsByCheckoutIdAndCouponCodeDeleteResponses = {
    200: {
        data?: Checkout;
        meta?: MetaOpen;
    };
};
export type CheckoutsCouponsByCheckoutIdAndCouponCodeDeleteResponse = CheckoutsCouponsByCheckoutIdAndCouponCodeDeleteResponses[keyof CheckoutsCouponsByCheckoutIdAndCouponCodeDeleteResponses];
export type CreateAnOrderData = {
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
export type CreateAnOrderResponses = {
    200: {
        data?: Order;
        meta?: MetaOpen;
    };
};
export type CreateAnOrderResponse = CreateAnOrderResponses[keyof CreateAnOrderResponses];
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
export type CheckoutTokenData = {
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
export type CheckoutTokenErrors = {
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
export type CheckoutTokenError = CheckoutTokenErrors[keyof CheckoutTokenErrors];
export type CheckoutTokenResponses = {
    200: {
        checkoutToken?: string;
        meta?: MetaOpen;
    };
};
export type CheckoutTokenResponse = CheckoutTokenResponses[keyof CheckoutTokenResponses];
