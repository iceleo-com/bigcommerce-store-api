export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type CheckoutsCheckoutIdGetParametersIncludeSchemaItems = 'cart.line_items.physical_items.options' | 'cart.line_items.digital_items.options' | 'cart.line_items.physical_items.stock_position' | 'cart.line_items.digital_items.stock_position' | 'consignments.available_shipping_options' | 'promotions.banners';
export type CheckoutCartCurrency = {
    code?: string;
};
export type CheckoutCartCouponsItems = {
    code: string;
    id?: number;
    coupon_type?: string;
    discounted_amount?: string;
    display_name?: string;
};
export type CheckoutCartDiscountsItems = {
    id?: string;
    discounted_amount?: number;
};
export type CheckoutCartLineItemsPhysicalItemsItemsDiscountsItemsId = string | number;
export type CheckoutCartLineItemsPhysicalItemsItemsDiscountsItems = {
    id?: CheckoutCartLineItemsPhysicalItemsItemsDiscountsItemsId;
    discounted_amount?: number;
};
export type CheckoutCartLineItemsPhysicalItemsItemsGiftWrapping = {
    name?: string;
    message?: string;
    amount?: number;
    amount_as_integer?: number;
};
export type CheckoutCartLineItemsPhysicalItemsItemsStockPosition = {
    quantity_on_hand?: number;
    quantity_backordered?: number;
    quantity_out_of_stock?: number;
    backorder_message?: string | null;
};
export type CheckoutCartLineItemsPhysicalItemsItems = {
    quantity: number;
    id?: string;
    variant_id?: number;
    product_id?: number;
    sku?: string;
    name?: string;
    url?: string;
    is_taxable?: boolean;
    image_url?: string;
    discounts?: Array<CheckoutCartLineItemsPhysicalItemsItemsDiscountsItems>;
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
    gift_wrapping?: CheckoutCartLineItemsPhysicalItemsItemsGiftWrapping | null;
    stock_position?: CheckoutCartLineItemsPhysicalItemsItemsStockPosition;
};
export type CheckoutCartLineItemsDigitalItemsItemsDiscountsItems = {
    id?: string;
    discounted_amount?: number;
};
export type CheckoutCartLineItemsDigitalItemsItems = {
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
    discounts?: Array<CheckoutCartLineItemsDigitalItemsItemsDiscountsItems>;
    discount_amount?: number;
    coupon_amount?: number;
    original_price?: number;
    list_price?: number;
    sale_price?: number;
    extended_list_price?: number;
    extended_sale_price?: number;
    comparison_price?: number;
    extended_comparison_price?: number;
};
export type CheckoutCartLineItemsGiftCertificatesItemsSender = {
    name?: string;
    email?: string;
};
export type CheckoutCartLineItemsGiftCertificatesItemsRecipient = {
    name?: string;
    email?: string;
};
export type CheckoutCartLineItemsGiftCertificatesItems = {
    theme: string;
    amount: number;
    sender: CheckoutCartLineItemsGiftCertificatesItemsSender;
    recipient: CheckoutCartLineItemsGiftCertificatesItemsRecipient;
    id?: string;
    name?: string;
    taxable?: boolean;
    message?: string;
};
export type CheckoutCartLineItemsCustomItemsItems = {
    quantity: number;
    id?: string;
    extended_list_price?: number;
    list_price?: number;
    sku?: string;
    name?: string;
    image_url?: string;
};
export type CheckoutCartLineItems = {
    physical_items: Array<CheckoutCartLineItemsPhysicalItemsItems>;
    digital_items: Array<CheckoutCartLineItemsDigitalItemsItems>;
    gift_certificates: Array<CheckoutCartLineItemsGiftCertificatesItems>;
    custom_items?: Array<CheckoutCartLineItemsCustomItemsItems>;
};
export type CheckoutCart = {
    id?: string;
    customer_id?: number;
    email?: string;
    currency?: CheckoutCartCurrency;
    tax_included?: boolean;
    base_amount?: number;
    channel_id?: number;
    discount_amount?: number;
    cart_amount_inc_tax?: number;
    cart_amount_ex_tax?: number;
    coupons?: Array<CheckoutCartCouponsItems>;
    discounts?: Array<CheckoutCartDiscountsItems>;
    line_items?: CheckoutCartLineItems;
    created_time?: string;
    updated_time?: string;
};
export type CheckoutBillingAddressCustomFieldsItems = {
    field_id?: string;
    field_value?: string;
};
export type CheckoutBillingAddress = {
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
    custom_fields?: Array<CheckoutBillingAddressCustomFieldsItems>;
    id?: string;
};
export type CheckoutConsignmentsItemsShippingAddress = {
    [key: string]: unknown;
};
export type CheckoutConsignmentsItemsAddressCustomFieldsItems = {
    field_id?: string;
    field_value?: string;
};
export type CheckoutConsignmentsItemsAddress = {
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
    custom_fields?: Array<CheckoutConsignmentsItemsAddressCustomFieldsItems>;
    id?: string;
};
export type CheckoutConsignmentsItemsAvailableShippingOptionsItems = {
    description?: string;
    id?: string;
    type?: string;
    image_url?: string;
    cost?: number;
    transit_time?: string;
    additional_description?: string;
};
export type CheckoutConsignmentsItemsSelectedShippingOption = {
    description?: string;
    id?: string;
    type?: string;
    image_url?: string;
    cost?: number;
    transit_time?: string;
    additional_description?: string;
};
export type CheckoutConsignmentsItemsCouponDiscountsItems = {
    code?: string;
    amount?: number;
};
export type CheckoutConsignmentsItemsDiscountsItems = {
    id?: number;
};
export type PickupOption = {
    pickup_method_id?: number;
};
export type CheckoutConsignmentsItems = {
    id?: string;
    shippingAddress?: CheckoutConsignmentsItemsShippingAddress;
    address?: CheckoutConsignmentsItemsAddress;
    available_shipping_options?: Array<CheckoutConsignmentsItemsAvailableShippingOptionsItems>;
    selected_shipping_option?: CheckoutConsignmentsItemsSelectedShippingOption;
    coupon_discounts?: Array<CheckoutConsignmentsItemsCouponDiscountsItems>;
    discounts?: Array<CheckoutConsignmentsItemsDiscountsItems>;
    shipping_cost_inc_tax?: number;
    shipping_cost_ex_tax?: number;
    handling_cost_inc_tax?: number;
    handling_cost_ex_tax?: number;
    line_item_ids?: Array<string>;
    selected_pickup_option?: PickupOption;
};
export type CheckoutTaxesItems = {
    name?: string;
    amount?: number;
};
export type AppliedCoupon = {
    code: string;
    id?: number;
    coupon_type?: string;
    display_name?: string;
    discounted_amount?: string;
};
export type CheckoutFeeType = 'custom_fee';
export type CheckoutFee = {
    id?: string;
    type?: CheckoutFeeType;
    name?: string;
    display_name?: string;
    cost_inc_tax?: number;
    cost_ex_tax?: number;
    source?: string;
    tax_class_id?: number | null;
};
export type CheckoutPromotionsItemsBannersItems = {
    id?: string;
    type?: string;
    page?: Array<string>;
    text?: string;
};
export type CheckoutPromotionsItems = {
    banners?: Array<CheckoutPromotionsItemsBannersItems>;
};
export type Checkout = {
    id?: string;
    cart?: CheckoutCart;
    billing_address?: CheckoutBillingAddress;
    consignments?: Array<CheckoutConsignmentsItems>;
    taxes?: Array<CheckoutTaxesItems>;
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
    promotions?: Array<CheckoutPromotionsItems>;
    version?: number;
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type CheckoutGetCheckoutResponse200 = {
    data?: Checkout;
    meta?: MetaOpen;
};
export type CheckoutsCheckoutIdGetResponsesContentApplicationJsonSchemaErrorsItems = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type GetCheckoutRequestNotFoundError = {
    errors?: Array<CheckoutsCheckoutIdGetResponsesContentApplicationJsonSchemaErrorsItems>;
};
export type CheckoutPut = {
    customer_message: string;
    version?: number;
};
export type CheckoutUpdateCheckoutResponse200 = {
    data?: Checkout;
    meta?: MetaOpen;
};
export type UpdateCheckoutRequestConflictError = {
    status?: number;
    title?: string;
    type?: string;
};
export type AddressPropertiesCustomFieldsItems = {
    field_id?: string;
    field_value?: string;
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
    custom_fields?: Array<AddressPropertiesCustomFieldsItems>;
    version?: number;
};
export type BillingAddressAddCheckoutBillingAddressResponse200 = {
    data?: Checkout;
    meta?: MetaOpen;
};
export type AddCheckoutBillingAddressRequestConflictError = {
    status?: number;
    title?: string;
    type?: string;
};
export type BillingAddressUpdateCheckoutBillingAddressResponse200 = {
    data?: Checkout;
    meta?: MetaOpen;
};
export type UpdateCheckoutBillingAddressRequestConflictError = {
    status?: number;
    title?: string;
    type?: string;
};
export type CheckoutsCheckoutIdConsignmentsPostParametersInclude = 'consignments.available_shipping_options';
export type CreateConsignmentRequestItemsAddressCustomFieldsItems = {
    field_id: string;
    field_value?: string;
};
export type CreateConsignmentRequestItemsAddress = {
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
    custom_fields?: Array<CreateConsignmentRequestItemsAddressCustomFieldsItems>;
};
export type CreateConsignmentRequestItemsLineItemsItems = {
    item_id: string;
    quantity: number;
};
export type CreateConsignmentRequestItemsPickupOption = {
    pickup_method_id?: number;
};
export type CreateConsignmentRequestItems = {
    address?: CreateConsignmentRequestItemsAddress;
    line_items?: Array<CreateConsignmentRequestItemsLineItemsItems>;
    pickup_option?: CreateConsignmentRequestItemsPickupOption;
    version?: number;
};
export type CreateConsignmentRequest = Array<CreateConsignmentRequestItems>;
export type ConsignmentsAddCheckoutConsignmentResponse200 = {
    data?: Checkout;
    meta?: MetaOpen;
};
export type AddCheckoutConsignmentRequestConflictError = {
    status?: number;
    title?: string;
    type?: string;
};
export type CheckoutsCheckoutIdConsignmentsConsignmentIdPutParametersInclude = 'consignments.available_shipping_options';
export type UpdateConsignmentRequestAddressCustomFieldsItems = {
    field_id?: string;
    field_value?: string;
};
export type UpdateConsignmentRequestAddress = {
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
    custom_fields?: Array<UpdateConsignmentRequestAddressCustomFieldsItems>;
};
export type UpdateConsignmentRequestLineItemsItems = {
    item_id: string;
    quantity: number;
};
export type UpdateConsignmentRequestPickupOption = {
    pickup_method_id?: number;
};
export type UpdateConsignmentRequestCustomShipping = {
    price?: number;
    description?: string;
};
export type UpdateConsignmentRequest = {
    address?: UpdateConsignmentRequestAddress;
    line_items?: Array<UpdateConsignmentRequestLineItemsItems>;
    shipping_option_id?: string;
    pickup_option?: UpdateConsignmentRequestPickupOption;
    custom_shipping?: UpdateConsignmentRequestCustomShipping;
    version?: number;
};
export type ConsignmentsUpdateCheckoutConsignmentResponse200 = {
    data?: Checkout;
    meta?: MetaOpen;
};
export type UpdateCheckoutConsignmentRequestConflictError = {
    status?: number;
    title?: string;
    type?: string;
};
export type DeleteConsignmentRequest = {
    version?: number;
};
export type ConsignmentsDeleteCheckoutConsignmentResponse200 = {
    data?: Checkout;
    meta?: MetaOpen;
};
export type CouponCodeRequest = {
    coupon_code?: string;
    version?: number;
};
export type CouponsAddCheckoutCouponResponse200 = {
    data?: Checkout;
    meta?: MetaOpen;
};
export type AddCheckoutCouponRequestConflictError = {
    status?: number;
    title?: string;
    type?: string;
};
export type DeleteCouponCodeRequest = {
    version?: number;
};
export type CouponsDeleteCheckoutCouponResponse200 = {
    data?: Checkout;
    meta?: MetaOpen;
};
export type DeleteCheckoutCouponRequestConflictError = {
    status?: number;
    title?: string;
    type?: string;
};
export type CheckoutsCheckoutIdDiscountsPostRequestBodyContentApplicationJsonSchemaCartDiscountsItems = {
    discounted_amount: number;
};
export type CheckoutsCheckoutIdDiscountsPostRequestBodyContentApplicationJsonSchemaCartLineItemsItems = {
    id?: string;
    discounted_amount?: number;
};
export type CheckoutsCheckoutIdDiscountsPostRequestBodyContentApplicationJsonSchemaCart = {
    discounts?: Array<CheckoutsCheckoutIdDiscountsPostRequestBodyContentApplicationJsonSchemaCartDiscountsItems>;
    line_items?: Array<CheckoutsCheckoutIdDiscountsPostRequestBodyContentApplicationJsonSchemaCartLineItemsItems>;
    version?: number;
};
export type DiscountsAddCheckoutDiscountResponse200 = {
    data?: Checkout;
    meta?: MetaOpen;
};
export type AddCheckoutDiscountRequestConflictError = {
    status?: number;
    title?: string;
    type?: string;
};
export type BaseFeeType = 'custom_fee';
export type BaseFee = {
    type: BaseFeeType;
    name: string;
    display_name: string;
    cost: number;
    source: string;
    tax_class_id?: number;
};
export type AddFeesRequest = {
    fees: Array<BaseFee>;
};
export type FeesCheckoutsFeesByCheckoutIdPostResponse200 = {
    data?: Checkout;
    meta?: MetaOpen;
};
export type FeeWithIdType = 'custom_fee';
export type FeeWithId = {
    type: FeeWithIdType;
    name: string;
    display_name: string;
    cost: number;
    source: string;
    tax_class_id?: number;
    id: string;
};
export type UpdateFeesRequest = {
    fees: Array<FeeWithId>;
};
export type FeesCheckoutsFeesByCheckoutIdPutResponse200 = {
    data?: Checkout;
    meta?: MetaOpen;
};
export type DeleteFeesRequest = {
    ids: Array<string>;
};
export type FeesCheckoutsFeesByCheckoutIdDeleteResponse200 = {
    data?: Checkout;
    meta?: MetaOpen;
};
export type Order = {
    id?: number;
};
export type OrdersCreateOrderResponse200 = {
    data?: Order;
    meta?: MetaOpen;
};
export type CheckoutsSettingsCheckoutType = 'optimized' | 'custom';
export type CheckoutsSettingsGuestCheckoutType = 'guest_checkout' | 'guest_checkout_account' | 'no_guest_checkout';
export type CheckoutsSettingsGuestCheckoutForExistingAccounts = 'allow_guest' | 'require_login' | 'encourage_login';
export type CheckoutsSettingsPolicyConsent = 'none' | 'standard' | 'express';
export type CheckoutsSettingsOrderTermsAndConditionsType = 'link' | 'textarea' | '';
export type CheckoutsSettings = {
    checkout_type?: CheckoutsSettingsCheckoutType;
    guest_checkout_type?: CheckoutsSettingsGuestCheckoutType;
    guest_checkout_for_existing_accounts?: CheckoutsSettingsGuestCheckoutForExistingAccounts;
    custom_checkout_script_url?: string;
    policy_consent?: CheckoutsSettingsPolicyConsent;
    order_confirmation_contact_email?: string;
    order_confirmation_use_custom_checkout_script?: boolean;
    custom_order_confirmation_script_url?: string;
    is_order_terms_and_conditions_enabled?: boolean;
    order_terms_and_conditions_type?: CheckoutsSettingsOrderTermsAndConditionsType;
    order_terms_and_conditions_link?: string;
    order_terms_and_conditions_textarea?: string;
    custom_checkout_supports_uco_settings?: boolean | null;
    custom_checkout_supports_data_hydration?: boolean;
    should_redirect_to_storefront_for_auth?: boolean;
    support_b2b_settings?: boolean;
    custom_checkout_sri_hash?: string;
    custom_order_confirmation_sri_hash?: string;
    checkout_style_override?: string | null;
    checkout_style_override_sri_hash?: string;
    enhanced_checkout_experience?: boolean;
};
export type SettingsGetCheckoutSettingsResponse200 = {
    data?: CheckoutsSettings;
    meta?: MetaOpen;
};
export type CheckoutsSettingsRequestCheckoutType = 'optimized' | 'custom';
export type CheckoutsSettingsRequestGuestCheckoutType = 'guest_checkout' | 'guest_checkout_account' | 'no_guest_checkout';
export type CheckoutsSettingsRequestGuestCheckoutForExistingAccounts = 'allow_guest' | 'require_login' | 'encourage_login';
export type CheckoutsSettingsRequestPolicyConsent = 'none' | 'standard' | 'express';
export type CheckoutsSettingsRequestOrderTermsAndConditionsType = 'link' | 'textarea' | '';
export type CheckoutsSettingsRequest = {
    checkout_type?: CheckoutsSettingsRequestCheckoutType;
    guest_checkout_type?: CheckoutsSettingsRequestGuestCheckoutType;
    guest_checkout_for_existing_accounts?: CheckoutsSettingsRequestGuestCheckoutForExistingAccounts;
    custom_checkout_script_url?: string;
    policy_consent?: CheckoutsSettingsRequestPolicyConsent;
    order_confirmation_contact_email?: string;
    order_confirmation_use_custom_checkout_script?: boolean;
    custom_order_confirmation_script_url?: string;
    is_order_terms_and_conditions_enabled?: boolean;
    order_terms_and_conditions_type?: CheckoutsSettingsRequestOrderTermsAndConditionsType;
    order_terms_and_conditions_link?: string;
    order_terms_and_conditions_textarea?: string;
    custom_checkout_supports_uco_settings?: boolean | null;
    custom_checkout_supports_data_hydration?: boolean;
    should_redirect_to_storefront_for_auth?: boolean;
    support_b2b_settings?: boolean;
    custom_checkout_sri_hash?: string;
    custom_order_confirmation_sri_hash?: string;
    checkout_style_override?: string | null;
    checkout_style_override_sri_hash?: string;
};
export type SettingsUpdateCheckoutSettingsResponse200 = {
    data?: CheckoutsSettings;
    meta?: MetaOpen;
};
export type ChannelCheckoutsSettingsCheckoutType = 'optimized' | 'custom';
export type ChannelCheckoutsSettingsGuestCheckoutType = 'guest_checkout' | 'guest_checkout_account' | 'no_guest_checkout';
export type ChannelCheckoutsSettingsGuestCheckoutForExistingAccounts = 'allow_guest' | 'require_login' | 'encourage_login';
export type ChannelCheckoutsSettingsPolicyConsent = 'none' | 'standard' | 'express';
export type ChannelCheckoutsSettingsOrderTermsAndConditionsType = 'link' | 'textarea' | '';
export type ChannelCheckoutsSettings = {
    checkout_type?: ChannelCheckoutsSettingsCheckoutType | null;
    guest_checkout_type?: ChannelCheckoutsSettingsGuestCheckoutType | null;
    guest_checkout_for_existing_accounts?: ChannelCheckoutsSettingsGuestCheckoutForExistingAccounts | null;
    custom_checkout_script_url?: string | null;
    policy_consent?: ChannelCheckoutsSettingsPolicyConsent | null;
    order_confirmation_contact_email?: string | null;
    order_confirmation_use_custom_checkout_script?: boolean | null;
    custom_order_confirmation_script_url?: string | null;
    is_order_terms_and_conditions_enabled?: boolean | null;
    order_terms_and_conditions_type?: ChannelCheckoutsSettingsOrderTermsAndConditionsType | null;
    order_terms_and_conditions_link?: string | null;
    order_terms_and_conditions_textarea?: string | null;
    custom_checkout_supports_uco_settings?: boolean | null;
    custom_checkout_supports_data_hydration?: boolean | null;
    should_redirect_to_storefront_for_auth?: boolean | null;
    support_b2b_settings?: boolean | null;
    custom_checkout_sri_hash?: string | null;
    custom_order_confirmation_sri_hash?: string | null;
};
export type SettingsGetChannelCheckoutSettingsResponse200 = {
    data?: ChannelCheckoutsSettings;
    meta?: MetaOpen;
};
export type SettingsPutChannelCheckoutSettingsResponse200 = {
    data?: ChannelCheckoutsSettings;
    meta?: MetaOpen;
};
export type TokenCreateCheckoutTokenResponse200 = {
    checkoutToken?: string;
    meta?: MetaOpen;
};
export type CheckoutsCheckoutIdTokenPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateCheckoutTokenRequestUnauthorizedError = {
    status?: number;
    title?: string;
    type?: string;
    errors?: CheckoutsCheckoutIdTokenPostResponsesContentApplicationJsonSchemaErrors;
};
export type CreateCheckoutTokenRequestUnprocessableEntityError = {
    status?: string;
    title?: string;
    type?: string;
};
export type GetCheckoutData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
    };
    query?: {
        include?: Array<CheckoutsCheckoutIdGetParametersIncludeSchemaItems>;
    };
    url: '/checkouts/{checkoutId}';
};
export type GetCheckoutErrors = {
    404: GetCheckoutRequestNotFoundError;
};
export type GetCheckoutError = GetCheckoutErrors[keyof GetCheckoutErrors];
export type GetCheckoutResponses = {
    200: CheckoutGetCheckoutResponse200;
};
export type GetCheckoutResponse = GetCheckoutResponses[keyof GetCheckoutResponses];
export type UpdateCheckoutData = {
    body?: CheckoutPut;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}';
};
export type UpdateCheckoutErrors = {
    409: UpdateCheckoutRequestConflictError;
};
export type UpdateCheckoutError = UpdateCheckoutErrors[keyof UpdateCheckoutErrors];
export type UpdateCheckoutResponses = {
    200: CheckoutUpdateCheckoutResponse200;
};
export type UpdateCheckoutResponse = UpdateCheckoutResponses[keyof UpdateCheckoutResponses];
export type AddCheckoutBillingAddressData = {
    body?: AddressProperties;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}/billing-address';
};
export type AddCheckoutBillingAddressErrors = {
    409: AddCheckoutBillingAddressRequestConflictError;
};
export type AddCheckoutBillingAddressError = AddCheckoutBillingAddressErrors[keyof AddCheckoutBillingAddressErrors];
export type AddCheckoutBillingAddressResponses = {
    200: BillingAddressAddCheckoutBillingAddressResponse200;
};
export type AddCheckoutBillingAddressResponse = AddCheckoutBillingAddressResponses[keyof AddCheckoutBillingAddressResponses];
export type UpdateCheckoutBillingAddressData = {
    body?: AddressProperties;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
        addressId: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}/billing-address/{addressId}';
};
export type UpdateCheckoutBillingAddressErrors = {
    409: UpdateCheckoutBillingAddressRequestConflictError;
};
export type UpdateCheckoutBillingAddressError = UpdateCheckoutBillingAddressErrors[keyof UpdateCheckoutBillingAddressErrors];
export type UpdateCheckoutBillingAddressResponses = {
    200: BillingAddressUpdateCheckoutBillingAddressResponse200;
};
export type UpdateCheckoutBillingAddressResponse = UpdateCheckoutBillingAddressResponses[keyof UpdateCheckoutBillingAddressResponses];
export type AddCheckoutConsignmentData = {
    body?: CreateConsignmentRequest;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
    };
    query?: {
        include?: CheckoutsCheckoutIdConsignmentsPostParametersInclude;
    };
    url: '/checkouts/{checkoutId}/consignments';
};
export type AddCheckoutConsignmentErrors = {
    409: AddCheckoutConsignmentRequestConflictError;
};
export type AddCheckoutConsignmentError = AddCheckoutConsignmentErrors[keyof AddCheckoutConsignmentErrors];
export type AddCheckoutConsignmentResponses = {
    200: ConsignmentsAddCheckoutConsignmentResponse200;
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
    200: ConsignmentsDeleteCheckoutConsignmentResponse200;
};
export type DeleteCheckoutConsignmentResponse = DeleteCheckoutConsignmentResponses[keyof DeleteCheckoutConsignmentResponses];
export type UpdateCheckoutConsignmentData = {
    body?: UpdateConsignmentRequest;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
        consignmentId: string;
    };
    query?: {
        include?: CheckoutsCheckoutIdConsignmentsConsignmentIdPutParametersInclude;
    };
    url: '/checkouts/{checkoutId}/consignments/{consignmentId}';
};
export type UpdateCheckoutConsignmentErrors = {
    409: UpdateCheckoutConsignmentRequestConflictError;
};
export type UpdateCheckoutConsignmentError = UpdateCheckoutConsignmentErrors[keyof UpdateCheckoutConsignmentErrors];
export type UpdateCheckoutConsignmentResponses = {
    200: ConsignmentsUpdateCheckoutConsignmentResponse200;
};
export type UpdateCheckoutConsignmentResponse = UpdateCheckoutConsignmentResponses[keyof UpdateCheckoutConsignmentResponses];
export type AddCheckoutCouponData = {
    body?: CouponCodeRequest;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}/coupons';
};
export type AddCheckoutCouponErrors = {
    409: AddCheckoutCouponRequestConflictError;
    422: unknown;
};
export type AddCheckoutCouponError = AddCheckoutCouponErrors[keyof AddCheckoutCouponErrors];
export type AddCheckoutCouponResponses = {
    200: CouponsAddCheckoutCouponResponse200;
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
    409: DeleteCheckoutCouponRequestConflictError;
};
export type DeleteCheckoutCouponError = DeleteCheckoutCouponErrors[keyof DeleteCheckoutCouponErrors];
export type DeleteCheckoutCouponResponses = {
    200: CouponsDeleteCheckoutCouponResponse200;
};
export type DeleteCheckoutCouponResponse = DeleteCheckoutCouponResponses[keyof DeleteCheckoutCouponResponses];
export type AddCheckoutDiscountData = {
    body?: {
        cart?: CheckoutsCheckoutIdDiscountsPostRequestBodyContentApplicationJsonSchemaCart;
    };
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}/discounts';
};
export type AddCheckoutDiscountErrors = {
    409: AddCheckoutDiscountRequestConflictError;
};
export type AddCheckoutDiscountError = AddCheckoutDiscountErrors[keyof AddCheckoutDiscountErrors];
export type AddCheckoutDiscountResponses = {
    200: DiscountsAddCheckoutDiscountResponse200;
};
export type AddCheckoutDiscountResponse = AddCheckoutDiscountResponses[keyof AddCheckoutDiscountResponses];
export type CheckoutsFeesByCheckoutIdDeleteData = {
    body?: DeleteFeesRequest;
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
    200: FeesCheckoutsFeesByCheckoutIdDeleteResponse200;
};
export type CheckoutsFeesByCheckoutIdDeleteResponse = CheckoutsFeesByCheckoutIdDeleteResponses[keyof CheckoutsFeesByCheckoutIdDeleteResponses];
export type CheckoutsFeesByCheckoutIdPostData = {
    body?: AddFeesRequest;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}/fees';
};
export type CheckoutsFeesByCheckoutIdPostResponses = {
    200: FeesCheckoutsFeesByCheckoutIdPostResponse200;
};
export type CheckoutsFeesByCheckoutIdPostResponse = CheckoutsFeesByCheckoutIdPostResponses[keyof CheckoutsFeesByCheckoutIdPostResponses];
export type CheckoutsFeesByCheckoutIdPutData = {
    body?: UpdateFeesRequest;
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
    200: FeesCheckoutsFeesByCheckoutIdPutResponse200;
};
export type CheckoutsFeesByCheckoutIdPutResponse = CheckoutsFeesByCheckoutIdPutResponses[keyof CheckoutsFeesByCheckoutIdPutResponses];
export type CreateOrderData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}/orders';
};
export type CreateOrderResponses = {
    200: OrdersCreateOrderResponse200;
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
    200: SettingsGetCheckoutSettingsResponse200;
};
export type GetCheckoutSettingsResponse = GetCheckoutSettingsResponses[keyof GetCheckoutSettingsResponses];
export type UpdateCheckoutSettingsData = {
    body?: CheckoutsSettingsRequest;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/checkouts/settings';
};
export type UpdateCheckoutSettingsResponses = {
    200: SettingsUpdateCheckoutSettingsResponse200;
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
    200: SettingsGetChannelCheckoutSettingsResponse200;
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
    200: SettingsPutChannelCheckoutSettingsResponse200;
};
export type PutChannelCheckoutSettingsResponse = PutChannelCheckoutSettingsResponses[keyof PutChannelCheckoutSettingsResponses];
export type CreateCheckoutTokenData = {
    body?: {
        maxUses?: number;
        ttl?: number;
    };
    headers: {
        Accept: string;
    };
    path: {
        checkoutId: string;
    };
    query?: never;
    url: '/checkouts/{checkoutId}/token';
};
export type CreateCheckoutTokenErrors = {
    401: CreateCheckoutTokenRequestUnauthorizedError;
    422: CreateCheckoutTokenRequestUnprocessableEntityError;
};
export type CreateCheckoutTokenError = CreateCheckoutTokenErrors[keyof CreateCheckoutTokenErrors];
export type CreateCheckoutTokenResponses = {
    200: TokenCreateCheckoutTokenResponse200;
};
export type CreateCheckoutTokenResponse = CreateCheckoutTokenResponses[keyof CreateCheckoutTokenResponses];
