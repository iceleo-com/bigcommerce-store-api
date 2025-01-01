export type billingAddress_Base = {
    first_name?: string;
    last_name?: string;
    company?: string;
    street_1?: string;
    street_2?: string;
    city?: string;
    state?: string;
    zip: string;
    country?: string;
    country_iso2?: string;
    phone?: string;
    email?: string;
};
export type billingAddress_Put = billingAddress_Base & {
    form_fields?: Array<formFields>;
};
export type billingAddress_Resp = billingAddress_Base & {
    form_fields?: Array<formFields>;
};
export type coupons_Resource = {
    readonly url?: string;
    readonly resource?: string;
};
export type digitalConsignment_Get = {
    recipient_email?: string;
    line_items?: Array<products_Resource>;
};
export type formFields = {
    name?: string;
    value?: (number | string | Array<unknown>);
};
export type giftCertificateConsignment_Get = {
    recipient_email?: string;
    line_items?: Array<products_Resource>;
};
export type order_Post = {
    billing_address?: billingAddress_Base;
    default_currency_code?: string;
    products?: Array<(orderCatalogProduct_Post | orderCustomProduct_Post)>;
    shipping_addresses?: Array<(shippingAddress_Base & {
        shipping_method?: string;
    })>;
    consignments?: orderConsignment_Post;
    fees?: Array<(orderFees_Post)>;
} & order_Shared;
export type order_Put = {
    base_handling_cost?: string;
    base_shipping_cost?: string;
    base_wrapping_cost?: string;
    billing_address?: billingAddress_Put;
    channel_id?: number;
    consignments?: orderConsignment_Put;
    customer_id?: number;
    customer_message?: string;
    date_created?: string;
    readonly default_currency_code?: string;
    discount_amount?: string;
    order_source?: string;
    ebay_order_id?: string;
    readonly external_id?: (string) | null;
    external_merchant_id?: (string) | null;
    external_source?: (string) | null;
    geoip_country?: string;
    geoip_country_iso2?: string;
    handling_cost_ex_tax?: string;
    handling_cost_inc_tax?: string;
    ip_address?: string;
    ip_address_v6?: string;
    items_shipped?: number;
    items_total?: number;
    order_is_digital?: boolean;
    payment_method?: string;
    payment_provider_id?: (string | number);
    products?: Array<(orderCatalogProduct_Put | orderCustomProduct_Put | orderRemoveProduct_Put)>;
    refunded_amount?: string;
    shipping_cost_ex_tax?: string;
    shipping_cost_inc_tax?: string;
    staff_notes?: string;
    shipping_addresses?: Array<({
        id?: number;
    } & shippingAddress_Put)>;
    status_id?: number;
    subtotal_ex_tax?: string;
    subtotal_inc_tax?: string;
    tax_provider_id?: string;
    customer_locale?: string;
    external_order_id?: (string) | null;
    total_ex_tax?: string;
    total_inc_tax?: string;
    wrapping_cost_ex_tax?: string;
    wrapping_cost_inc_tax?: string;
    fees?: Array<orderFees_Put>;
};
export type order_Resp = order_RespOnly & order_Shared;
export type order_RespOnly = {
    id?: number;
    date_modified?: string;
    date_shipped?: string;
    cart_id?: string;
    status?: string;
    subtotal_tax?: string;
    shipping_cost_tax?: string;
    shipping_cost_tax_class_id?: number;
    handling_cost_tax?: string;
    handling_cost_tax_class_id?: number;
    wrapping_cost_tax?: string;
    wrapping_cost_tax_class_id?: number;
    payment_status?: 'authorized' | 'captured' | 'capture pending' | 'declined' | 'held for review' | 'paid' | 'partially refunded' | 'pending' | 'refunded' | 'void' | 'void pending';
    store_credit_amount?: string;
    gift_certificate_amount?: string;
    currency_id?: number;
    currency_code?: string;
    currency_exchange_rate?: string;
    default_currency_id?: number;
    default_currency_code?: string;
    store_default_currency_code?: string;
    store_default_to_transactional_exchange_rate?: string;
    coupon_discount?: string;
    shipping_address_count?: number;
    is_deleted?: boolean;
    is_tax_inclusive_pricing?: boolean;
    is_email_opt_in?: boolean;
    order_source?: string;
    consignments?: orderConsignments_Resource;
    products?: products_Resource;
    shipping_addresses?: shippingAddresses_Resource;
    coupons?: coupons_Resource;
    status_id?: number;
    billing_address?: billingAddress_Resp;
    fees?: Array<orderFees_Resp>;
};
export type payment_status = 'authorized' | 'captured' | 'capture pending' | 'declined' | 'held for review' | 'paid' | 'partially refunded' | 'pending' | 'refunded' | 'void' | 'void pending';
export type order_Shared = {
    base_handling_cost?: string;
    base_shipping_cost?: string;
    base_wrapping_cost?: string;
    channel_id?: number;
    customer_id?: number;
    customer_message?: string;
    date_created?: string;
    discount_amount?: string;
    order_source?: string;
    ebay_order_id?: string;
    readonly external_id?: (string) | null;
    external_merchant_id?: (string) | null;
    external_source?: (string) | null;
    geoip_country?: string;
    geoip_country_iso2?: string;
    handling_cost_ex_tax?: string;
    handling_cost_inc_tax?: string;
    ip_address?: string;
    ip_address_v6?: string;
    items_shipped?: number;
    items_total?: number;
    order_is_digital?: boolean;
    payment_method?: string;
    payment_provider_id?: (string | number);
    refunded_amount?: string;
    shipping_cost_ex_tax?: string;
    shipping_cost_inc_tax?: string;
    staff_notes?: string;
    status_id?: number;
    subtotal_ex_tax?: string;
    subtotal_inc_tax?: string;
    tax_provider_id?: string;
    customer_locale?: string;
    external_order_id?: string;
    total_ex_tax?: string;
    total_inc_tax?: string;
    wrapping_cost_ex_tax?: string;
    wrapping_cost_inc_tax?: string;
};
export type orderCatalogProduct_Post = {
    product_id?: number;
    name?: string;
    name_customer?: string;
    name_merchant?: string;
    product_options?: Array<{
        id?: number;
        value?: string;
        display_name?: string;
        display_name_customer?: string;
        display_name_merchant?: string;
        display_value?: string;
        display_value_merchant?: string;
        display_value_customer?: string;
    }>;
    quantity?: number;
    price_inc_tax?: number;
    price_ex_tax?: number;
    upc?: string;
    variant_id?: number;
    wrapping_id?: number;
    wrapping_name?: string;
    wrapping_message?: string;
    wrapping_cost_ex_tax?: number;
    wrapping_cost_inc_tax?: number;
};
export type orderCatalogProduct_Put = {
    id?: number;
} & orderCatalogProduct_Post;
export type orderConsignment_Get = {
    pickups?: Array<pickupConsignment_Get>;
    shipping?: Array<shippingConsignment_Get>;
    downloads?: Array<digitalConsignment_Get>;
    email?: {
        gift_certificates?: Array<giftCertificateConsignment_Get>;
    };
};
export type orderConsignment_Post = {
    pickups: Array<pickupConsignment_Post>;
};
export type orderConsignment_Put = {
    pickups?: Array<pickupConsignment_Put>;
};
export type orderConsignments_Resource = {
    readonly url?: string;
    readonly resource?: string;
};
export type orderCount = {
    count?: number;
};
export type orderCoupons_Base = {
    id?: number;
    coupon_id?: number;
    order_id?: number;
    code?: (string) | null;
    amount?: (string | number);
    type?: 0 | 1 | 2 | 3 | 4 | 5;
    discount?: number;
};
export type type = 0 | 1 | 2 | 3 | 4 | 5;
export type orderCustomProduct_Post = {
    name: string;
    name_customer?: string;
    name_merchant?: string;
    quantity: number;
    price_inc_tax: number;
    price_ex_tax: number;
    upc?: string;
    sku?: string;
};
export type orderCustomProduct_Put = {
    name: string;
    name_customer?: string;
    name_merchant?: string;
    quantity: number;
    price_ex_tax: number;
    price_inc_tax: number;
    sku?: string;
    upc?: string;
    id?: number;
};
export type orderFees_Post = {
    type?: 'custom_fee';
    display_name_customer?: string;
    display_name_merchant?: string;
    source?: string;
    cost_ex_tax?: (string | number);
    cost_inc_tax?: (string | number);
    cost_tax?: (string | number);
    tax_class_id?: (number) | null;
};
export type type2 = 'custom_fee';
export type orderFees_Put = {
    id?: number;
    type?: 'custom_fee';
    display_name_customer?: string;
    display_name_merchant?: string;
    source?: string;
    cost_ex_tax?: (string | number);
    cost_inc_tax?: (string | number);
    cost_tax?: (string | number);
    tax_class_id?: (number) | null;
};
export type orderFees_Resp = {
    id?: number;
    type?: 'custom_fee';
    display_name_customer?: string;
    display_name_merchant?: string;
    source?: string;
    base_cost?: (string | number);
    cost_ex_tax?: (string | number);
    cost_inc_tax?: (string | number);
    cost_tax?: (string | number);
    tax_class_id?: (number) | null;
};
export type orderMessages = Array<{
    id?: number;
    order_id?: number;
    staff_id?: number;
    customer_id?: number;
    type?: string;
    subject?: string;
    message?: string;
    status?: string;
    is_flagged?: boolean;
    date_created?: string;
    customer?: {
        [key: string]: unknown;
    };
}>;
export type orderProduct_Post = orderCustomProduct_Post | orderCatalogProduct_Post;
export type orderProduct_Put = orderCustomProduct_Put | orderCatalogProduct_Put;
export type orderProductAppliedDiscounts = {
    id?: string;
    amount?: string;
    name?: string;
    code?: (string) | null;
    target?: 'order' | 'product';
};
export type target = 'order' | 'product';
export type orderProductOptions = {
    id?: number;
    option_id?: number;
    order_product_id?: number;
    product_option_id?: number;
    display_name?: string;
    display_value?: string;
    value?: string;
    type?: 'Checkbox' | 'Date field' | 'File Upload' | 'Multi-line text field' | 'Multiple choice' | 'Product Pick List' | 'Swatch' | 'Text field';
    name?: string;
    display_style?: string;
    display_name_customer?: string;
    display_name_merchant?: string;
    display_value_customer?: string;
    display_value_merchant?: string;
};
export type type3 = 'Checkbox' | 'Date field' | 'File Upload' | 'Multi-line text field' | 'Multiple choice' | 'Product Pick List' | 'Swatch' | 'Text field';
export type orderProducts = {
    id?: number;
    order_id?: number;
    product_id?: number;
    order_pickup_method_id?: number;
    order_address_id?: number;
    name?: string;
    sku?: string;
    type?: 'physical' | 'digital' | 'giftcertificate';
    base_price?: string;
    price_ex_tax?: string;
    price_inc_tax?: string;
    price_tax?: string;
    base_total?: string;
    total_ex_tax?: string;
    total_inc_tax?: string;
    total_tax?: string;
    quantity?: number;
    base_cost_price?: string;
    cost_price_inc_tax?: string;
    cost_price_ex_tax?: string;
    weight?: (number | string);
    width?: string;
    height?: string;
    depth?: string;
    cost_price_tax?: string;
    is_refunded?: boolean;
    quantity_refunded?: number;
    refund_amount?: string;
    return_id?: number;
    wrapping_id?: number;
    wrapping_name?: (string) | null;
    base_wrapping_cost?: (string | number);
    wrapping_cost_ex_tax?: string;
    wrapping_cost_inc_tax?: string;
    wrapping_cost_tax?: string;
    wrapping_message?: string;
    quantity_shipped?: number;
    event_name?: (string) | null;
    event_date?: (string) | null;
    fixed_shipping_cost?: string;
    ebay_item_id?: string;
    ebay_transaction_id?: string;
    option_set_id?: (number) | null;
    parent_order_product_id?: (number) | null;
    is_bundled_product?: boolean;
    bin_picking_number?: string;
    readonly external_id?: (string) | null;
    brand?: string;
    applied_discounts?: Array<orderProductAppliedDiscounts>;
    product_options?: Array<orderProductOptions>;
    configurable_fields?: Array<{
        name?: string;
        value?: string;
    }>;
    upc?: string;
    variant_id?: number;
    name_customer?: string;
    name_merchant?: string;
    gift_certificate_id?: (number) | null;
    discounted_total_inc_tax?: string;
};
export type type4 = 'physical' | 'digital' | 'giftcertificate';
export type orderRemoveProduct_Put = {
    id?: number;
    product_id?: number;
    quantity?: number;
    product_options?: Array<{
        cost_price_inc_tax?: string;
        readonly price_ex_tax?: string;
    }>;
};
export type ordersCount_Full = {
    statuses?: Array<ordersCountStatus>;
    count?: number;
};
export type ordersCountStatus = orderStatus_Base & {
    count?: number;
    sort_order?: number;
};
export type orderShipment = {
    id?: number;
    order_id?: number;
    customer_id?: number;
    order_address_id?: number;
    date_created?: string;
    tracking_number?: string;
    merchant_shipping_cost?: string;
    shipping_method?: string;
    shipping_provider?: (shipping_provider_standard | shipping_provider_custom);
    tracking_carrier?: string;
    tracking_link?: string;
    comments?: string;
    billing_address?: billingAddress_Base;
    shipping_address?: shippingAddress_Base;
    items?: Array<{
        order_product_id?: number;
        product_id?: number;
        quantity?: number;
    }>;
    readonly shipping_provider_display_name?: string;
    generated_tracking_link?: string;
};
export type orderShipment_Post = {
    order_address_id?: number;
    tracking_number?: string;
    tracking_link?: string;
    merchant_shipping_cost?: string;
    shipping_method?: string;
    shipping_provider?: (shipping_provider_standard | shipping_provider_custom);
    tracking_carrier?: string;
    comments?: string;
    items?: Array<{
        order_product_id?: number;
        quantity?: number;
    }>;
};
export type orderShipment_Put = {
    order_address_id?: number;
    tracking_number?: string;
    merchant_shipping_cost?: string;
    shipping_method?: string;
    shipping_provider?: (shipping_provider_standard | shipping_provider_custom);
    tracking_carrier?: string;
    tracking_link?: string;
    comments?: string;
};
export type orderShippingAddress = {
    id?: number;
    order_id?: number;
    items_total?: number;
    items_shipped?: number;
    base_cost?: string;
    cost_ex_tax?: string;
    cost_inc_tax?: string;
    cost_tax?: string;
    cost_tax_class_id?: number;
    base_handling_cost?: string;
    handling_cost_ex_tax?: string;
    handling_cost_inc_tax?: string;
    handling_cost_tax?: string;
    handling_cost_tax_class_id?: number;
    shipping_zone_id?: number;
    shipping_zone_name?: string;
    form_fields?: Array<formFields>;
    shipping_quotes?: shippingQuotes_Resource;
} & shippingAddress_Base & {
    shipping_method?: string;
};
export type orderStatus_Base = {
    id?: number;
    name?: string;
    system_label?: string;
    custom_label?: string;
    system_description?: string;
};
export type orderTaxes_Base = {
    id?: number;
    order_id?: number;
    order_address_id?: number;
    tax_rate_id?: number;
    tax_class_id?: (number) | null;
    name?: string;
    class?: string;
    rate?: string;
    priority?: number;
    priority_amount?: string;
    line_amount?: string;
    order_pickup_method_id?: number;
    order_product_id?: string;
    line_item_type?: 'item' | 'shipping' | 'handling' | 'gift-wrapping';
};
export type line_item_type = 'item' | 'shipping' | 'handling' | 'gift-wrapping';
export type ParameterAccept = string;
export type Parametercart_id = string;
export type Parameterchannel_id = number;
export type ParameterContentType = string;
export type Parametercustomer_id = number;
export type Parameteremail = string;
export type Parameterexternal_order_id = string;
export type Parameteris_flagged = boolean;
export type Parameterlimit = number;
export type Parametermax_date_created = string;
export type Parametermax_date_modified = string;
export type Parametermax_id = number;
export type Parametermax_total = number;
export type Parametermin_date_created = string;
export type Parametermin_date_modified = string;
export type Parametermin_id = number;
export type Parametermin_total = number;
export type Parameterorder_id_path = number;
export type Parameterorder_includes = Array<('consignments' | 'consignments.line_items' | 'fees')>;
export type Parameterpage = number;
export type Parameterpayment_method = string;
export type Parameterproduct_id_path = number;
export type Parametershipment_id_path = number;
export type Parametershipping_address_id_path = number;
export type Parametershipping_consignment_id = number;
export type Parametersort = 'id' | 'customer_id' | 'date_created' | 'date_modified' | 'status_id' | 'channel_id' | 'external_id';
export type Parameterstatus = 'read' | 'unread';
export type Parameterstatus_id = number;
export type Parameterstatus_id_path = number;
export type pickupConsignment_Base = {
    pickup_method_display_name?: string;
    collection_instructions?: string;
    collection_time_description?: string;
};
export type pickupConsignment_Get = {
    id?: number;
    pickup_method_id?: number;
} & pickupConsignment_Base & {
    location?: pickupConsignmentLocation_Get;
    line_items?: Array<products_Resource>;
};
export type pickupConsignment_Post = {
    pickup_method_id: number;
} & pickupConsignment_Base & {
    location?: pickupConsignmentLocation_Post;
    line_items: Array<orderProduct_Post>;
};
export type pickupConsignment_Put = {
    id: number;
    pickup_method_id?: number;
} & pickupConsignment_Base & {
    location?: pickupConsignmentLocation_Put;
    line_items?: Array<orderProduct_Put>;
};
export type pickupConsignmentLocation_Base = {
    name?: string;
    code?: string;
    address_line_1?: string;
    address_line_2?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    country_alpha2?: string;
    email?: string;
    phone?: string;
};
export type pickupConsignmentLocation_Get = {
    id?: number;
} & pickupConsignmentLocation_Base;
export type pickupConsignmentLocation_Post = pickupConsignmentLocation_Base;
export type pickupConsignmentLocation_Put = pickupConsignmentLocation_Base;
export type products_Resource = {
    readonly url?: string;
    readonly resource?: string;
};
export type shipping_provider_custom = string;
export type shipping_provider_standard = 'auspost' | 'canadapost' | 'endicia' | 'usps' | 'fedex' | 'ups' | 'upsready' | 'upsonline' | 'shipperhq' | 'royalmail' | '';
export type shippingAddress_Base = {
    first_name?: string;
    last_name?: string;
    company?: string;
    street_1?: string;
    street_2?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    country_iso2?: string;
    phone?: string;
    email?: string;
};
export type shippingAddress_Put = shippingAddress_Base & {
    shipping_method?: string;
} & {
    form_fields?: Array<formFields>;
};
export type shippingAddresses_Resource = {
    readonly url?: string;
    readonly resource?: string;
};
export type shippingConsignment_Base = {
    first_name?: string;
    last_name?: string;
    company?: string;
    street_1?: string;
    street_2?: string;
    city?: string;
    zip?: string;
    country?: string;
    country_iso2?: string;
    state?: string;
    email?: string;
    phone?: string;
    form_fields?: Array<formFields>;
};
export type shippingConsignment_Get = {
    id?: number;
} & shippingConsignment_Base & {
    line_items?: Array<products_Resource>;
    items_total?: number;
    items_shipped?: number;
    shipping_method?: string;
    base_cost?: number;
    cost_ex_tax?: number;
    cost_inc_tax?: number;
    cost_tax?: number;
    cost_tax_class_id?: number;
    base_handling_cost?: number;
    handling_cost_ex_tax?: number;
    handling_cost_inc_tax?: number;
    handling_cost_tax?: number;
    handling_cost_tax_class_id?: number;
    shipping_zone_id?: number;
    shipping_zone_name?: string;
    shipping_quotes?: shippingQuotesConsignment_Resource;
};
export type shippingQuotes_Base = {
    id?: string;
    uuid?: string;
    timestamp?: string;
    shipping_provider_id?: string;
    shipping_provider_quote?: Array<{
        [key: string]: unknown;
    }>;
    provider_code?: string;
    carrier_code?: string;
    rate_code?: string;
    rate_id?: string;
    method_id?: number;
};
export type shippingQuotes_Resource = {
    readonly url?: string;
    readonly resource?: string;
};
export type shippingQuotesConsignment_Resource = {
    readonly url?: string;
    readonly resource?: string;
};
export type GetOrderData = {
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        include?: Array<('consignments' | 'consignments.line_items' | 'fees')>;
    };
};
export type GetOrderResponse = (order_Resp);
export type GetOrderError = (unknown);
export type UpdateOrderData = {
    body?: order_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        order_id: number;
    };
};
export type UpdateOrderResponse = (order_Resp);
export type UpdateOrderError = unknown;
export type DeleteOrderData = {
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
};
export type DeleteOrderResponse = (void);
export type DeleteOrderError = unknown;
export type GetOrdersCountData = {
    headers: {
        Accept: string;
    };
    query?: {
        cart_id?: string;
        channel_id?: number;
        customer_id?: number;
        email?: string;
        external_order_id?: string;
        max_date_created?: string;
        max_date_modified?: string;
        max_id?: number;
        max_total?: number;
        min_date_created?: string;
        min_date_modified?: string;
        min_id?: number;
        min_total?: number;
        payment_method?: string;
        status_id?: number;
    };
};
export type GetOrdersCountResponse = (ordersCount_Full);
export type GetOrdersCountError = unknown;
export type GetOrdersData = {
    headers: {
        Accept: string;
    };
    query?: {
        cart_id?: string;
        channel_id?: number;
        customer_id?: number;
        email?: string;
        external_order_id?: string;
        include?: Array<('consignments' | 'consignments.line_items' | 'fees')>;
        limit?: number;
        max_date_created?: string;
        max_date_modified?: string;
        max_id?: number;
        max_total?: number;
        min_date_created?: string;
        min_date_modified?: string;
        min_id?: number;
        min_total?: number;
        page?: number;
        payment_method?: string;
        sort?: 'id' | 'customer_id' | 'date_created' | 'date_modified' | 'status_id' | 'channel_id' | 'external_id';
        status_id?: number;
    };
};
export type GetOrdersResponse = (Array<order_Resp>);
export type GetOrdersError = unknown;
export type CreateOrderData = {
    body: order_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        include?: Array<('consignments' | 'consignments.line_items' | 'fees')>;
    };
};
export type CreateOrderResponse = (order_Resp);
export type CreateOrderError = unknown;
export type DeleteOrdersData = {
    headers: {
        Accept: string;
    };
    query?: {
        limit?: number;
    };
};
export type DeleteOrdersResponse = (void);
export type DeleteOrdersError = unknown;
export type GetOrderCouponsData = {
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type GetOrderCouponsResponse = (Array<orderCoupons_Base>);
export type GetOrderCouponsError = unknown;
export type GetOrderProductsData = {
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        order_id: number;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type GetOrderProductsResponse = (Array<orderProducts>);
export type GetOrderProductsError = unknown;
export type GetOrderShippingAddressesData = {
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type GetOrderShippingAddressesResponse = (Array<orderShippingAddress>);
export type GetOrderShippingAddressesError = unknown;
export type GetOrderStatusesData = {
    headers: {
        Accept: string;
    };
};
export type GetOrderStatusesResponse = (Array<orderStatus_Base>);
export type GetOrderStatusesError = unknown;
export type GetOrderStatusesStatusData = {
    headers: {
        Accept: string;
    };
    path: {
        status_id: number;
    };
};
export type GetOrderStatusesStatusResponse = (orderStatus_Base);
export type GetOrderStatusesStatusError = unknown;
export type GetOrderTaxesData = {
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        details?: string;
        limit?: number;
        page?: number;
    };
};
export type GetOrderTaxesResponse = (Array<orderTaxes_Base>);
export type GetOrderTaxesError = unknown;
export type GetOrderShipmentsData = {
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type GetOrderShipmentsResponse = (Array<orderShipment> | void);
export type GetOrderShipmentsError = unknown;
export type CreateOrderShipmentsData = {
    body: orderShipment_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        order_id: number;
    };
};
export type CreateOrderShipmentsResponse = (orderShipment);
export type CreateOrderShipmentsError = unknown;
export type DeleteOrderShipmentsData = {
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
};
export type DeleteOrderShipmentsResponse = (void);
export type DeleteOrderShipmentsError = unknown;
export type GetOrderShipmentsCountData = {
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
};
export type GetOrderShipmentsCountResponse = (orderCount);
export type GetOrderShipmentsCountError = unknown;
export type GetOrderShipmentData = {
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
        shipment_id: number;
    };
};
export type GetOrderShipmentResponse = (orderShipment);
export type GetOrderShipmentError = unknown;
export type UpdateOrderShipmentData = {
    body: orderShipment_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        order_id: number;
        shipment_id: number;
    };
};
export type UpdateOrderShipmentResponse = (orderShipment);
export type UpdateOrderShipmentError = unknown;
export type DeleteOrderShipmentData = {
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
        shipment_id: number;
    };
};
export type DeleteOrderShipmentResponse = (void);
export type DeleteOrderShipmentError = unknown;
export type GetOrderMessagesData = {
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        customer_id?: number;
        is_flagged?: boolean;
        limit?: number;
        max_date_created?: string;
        max_id?: number;
        min_date_created?: string;
        min_id?: number;
        page?: number;
        status?: 'read' | 'unread';
    };
};
export type GetOrderMessagesResponse = (orderMessages);
export type GetOrderMessagesError = unknown;
export type GetOrderProductData = {
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
        product_id: number;
    };
};
export type GetOrderProductResponse = (orderProducts);
export type GetOrderProductError = unknown;
export type GetOrderShippingAddressData = {
    headers: {
        Accept: string;
    };
    path: {
        id: string;
        order_id: number;
    };
};
export type GetOrderShippingAddressResponse = (orderShippingAddress);
export type GetOrderShippingAddressError = unknown;
export type UpdateOrderShippingAddressData = {
    body?: shippingAddress_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: string;
        order_id: number;
    };
};
export type UpdateOrderShippingAddressResponse = (orderShippingAddress);
export type UpdateOrderShippingAddressError = (Array<{
    status?: number;
    message?: string;
}>);
export type GetOrderShippingAddressShippingQuotesData = {
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
        shipping_address_id: number;
    };
};
export type GetOrderShippingAddressShippingQuotesResponse = (shippingQuotes_Base);
export type GetOrderShippingAddressShippingQuotesError = unknown;
export type GetOrderConsignmentsData = {
    path: {
        order_id: number;
    };
    query?: {
        include?: Array<('consignments.line_items')>;
    };
};
export type GetOrderConsignmentsResponse = (orderConsignment_Get);
export type GetOrderConsignmentsError = (Array<{
    status?: number;
    message?: string;
}>);
export type GetOrderConsignmentShippingQuotesData = {
    path: {
        order_id: number;
        shipping_consignment_id: number;
    };
};
export type GetOrderConsignmentShippingQuotesResponse = (shippingQuotes_Base);
export type GetOrderConsignmentShippingQuotesError = (Array<{
    status?: number;
    message?: string;
}>);
export type GetOrderFeesData = {
    path: {
        order_id: number;
    };
};
export type GetOrderFeesResponse = (orderFees_Resp);
export type GetOrderFeesError = (Array<{
    status?: number;
    message?: string;
}>);
