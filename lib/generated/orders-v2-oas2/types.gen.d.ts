export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2' | (string & {});
};
export type OrderResp = OrderRespOnly & OrderShared;
export type OrdersCountFull = {
    statuses?: Array<OrdersCountStatus>;
    count?: number;
};
export type OrderCouponsBase = {
    id?: number;
    coupon_id?: number;
    order_id?: number;
    code?: string | null;
    amount?: string | number | number;
    type?: 0 | 1 | 2 | 3 | 4 | 5;
    discount?: number;
};
export type OrderProducts = {
    id?: number;
    order_id?: number;
    product_id?: number;
    order_pickup_method_id?: number;
    order_address_id?: number;
    name?: string;
    sku?: string;
    type?: 'physical' | 'digital';
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
    weight?: number | string;
    cost_price_tax?: string;
    is_refunded?: boolean;
    quantity_refunded?: number;
    refunded_amount?: string;
    return_id?: number;
    wrapping_name?: string | null;
    base_wrapping_cost?: string | number;
    wrapping_cost_ex_tax?: string;
    wrapping_cost_inc_tax?: string;
    wrapping_cost_tax?: string;
    wrapping_message?: string;
    quantity_shipped?: number;
    event_name?: string | null;
    event_date?: string | null;
    fixed_shipping_cost?: string;
    ebay_item_id?: string;
    ebay_transaction_id?: string;
    option_set_id?: number | null;
    parent_order_product_id?: number | null;
    is_bundled_product?: boolean;
    bin_picking_number?: string;
    readonly external_id?: string | null;
    brand?: string;
    applied_discounts?: Array<OrderProductAppliedDiscounts>;
    product_options?: Array<OrderProductOptions>;
    upc?: string;
    variant_id?: number;
    name_customer?: string;
    name_merchant?: string;
    gift_certificate_id?: number | null;
    discounted_total_inc_tax?: string;
};
export type OrderCount = {
    count?: number;
};
export type OrderShippingAddress = {
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
    form_fields?: Array<FormFields>;
    shipping_quotes?: ShippingQuotesResource;
} & ShippingAddressBase;
export type OrderTaxesBase = {
    id?: number;
    order_id?: number;
    order_address_id?: number;
    tax_rate_id?: number;
    tax_class_id?: number;
    name?: string;
    class?: string;
    rate?: string;
    priority?: number;
    priority_amount?: string;
    line_amount?: string;
    order_product_id?: string;
    line_item_type?: 'item' | 'shipping' | 'handling' | 'gift-wrapping';
};
export type OrderShipment = {
    id?: number;
    order_id?: number;
    customer_id?: number;
    order_address_id?: number;
    date_created?: string;
    tracking_number?: string;
    shipping_method?: string;
    shipping_provider?: 'auspost' | 'canadapost' | 'carrier_{your_carrier_id} (only used if the carrier is a [third-party Shipping Provider](/docs/integrations/shipping))' | 'endicia' | 'usps' | 'fedex' | 'ups' | 'upsready' | 'upsonline' | 'shipperhq' | '';
    tracking_carrier?: string;
    tracking_link?: string;
    comments?: string;
    billing_address?: BillingAddressBase;
    shipping_address?: ShippingAddressBase;
    items?: Array<{
        order_product_id?: number;
        product_id?: number;
        quantity?: number;
    }>;
    readonly shipping_provider_display_name?: string;
    generated_tracking_link?: string;
};
export type OrderConsignmentsResource = {
    readonly url?: string;
    readonly resource?: string;
};
export type ProductsResource = {
    readonly url?: string;
    readonly resource?: string;
};
export type ShippingAddressesResource = {
    readonly url?: string;
    readonly resource?: string;
};
export type CouponsResource = {
    readonly url?: string;
    readonly resource?: string;
};
export type OrderProductAppliedDiscounts = {
    id?: string;
    amount?: string;
    name?: string;
    code?: string | null;
    target?: 'order' | 'product';
};
export type OrderProductOptions = {
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
export type FormFields = {
    name?: string;
    value?: number | string | Array<unknown>;
};
export type OrderMessages = Array<{
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
export type ShippingQuotesResource = {
    readonly url?: string;
    readonly resource?: string;
};
export type ShippingQuotesBase = {
    id?: string;
    uuid?: string;
    timestamp?: string;
    shipping_provider_id?: string;
    shipping_provider_quote?: Array<unknown>;
    provider_code?: string;
    carrier_code?: string;
    rate_code?: string;
    rate_id?: string;
    method_id?: number;
};
export type OrderShipmentPost = {
    order_address_id?: number;
    tracking_number?: string;
    tracking_link?: string;
    shipping_method?: string;
    shipping_provider?: 'auspost' | 'canadapost' | 'carrier_{your_carrier_id} (only used if the carrier is a [third-party Shipping Provider](/docs/integrations/shipping))' | 'endicia' | 'usps' | 'fedex' | 'ups' | 'upsready' | 'upsonline' | 'shipperhq';
    tracking_carrier?: string;
    comments?: string;
    items?: Array<{
        order_product_id?: number;
        quantity?: number;
    }>;
};
export type OrderShipmentPut = {
    order_address_id?: number;
    tracking_number?: string;
    shipping_method?: string;
    shipping_provider?: 'auspost' | 'canadapost' | 'carrier_{your_carrier_id} (only used if the carrier is a [third-party Shipping Provider](/docs/integrations/shipping))' | 'endicia' | 'usps' | 'fedex' | 'ups' | 'upsready' | 'upsonline' | 'shipperhq';
    tracking_carrier?: string;
    tracking_link?: string;
    comments?: string;
};
export type OrderStatusBase = {
    id?: number;
    name?: string;
    system_label?: string;
    custom_label?: string;
    system_description?: string;
};
export type OrdersCountStatus = OrderStatusBase & {
    count?: number;
    sort_order?: number;
};
export type OrderShared = {
    base_handling_cost?: string;
    base_shipping_cost?: string;
    base_wrapping_cost?: string;
    billing_address?: BillingAddressBase;
    channel_id?: number;
    customer_id?: number;
    customer_message?: string;
    date_created?: string;
    default_currency_code?: string;
    discount_amount?: string;
    ebay_order_id?: string;
    readonly external_id?: string | null;
    external_merchant_id?: string | null;
    external_source?: string | null;
    geoip_country?: string;
    geoip_country_iso2?: string;
    handling_cost_ex_tax?: string;
    handling_cost_inc_tax?: string;
    ip_address?: string;
    ip_address_v6?: string;
    is_deleted?: boolean;
    items_shipped?: number;
    items_total?: number;
    order_is_digital?: boolean;
    payment_method?: 'Credit Card' | 'Cash' | 'Test Payment Gateway' | 'Manual';
    payment_provider_id?: string | number;
    refunded_amount?: string;
    shipping_cost_ex_tax?: string;
    shipping_cost_inc_tax?: string;
    staff_notes?: string;
    status_id?: number;
    subtotal_ex_tax?: string;
    subtotal_inc_tax?: string;
    tax_provider_id?: 'BasicTaxProvider' | 'AvaTaxProvider' | '';
    customer_locale?: string;
    external_order_id?: string;
    total_ex_tax?: string;
    total_inc_tax?: string;
    wrapping_cost_ex_tax?: string;
    wrapping_cost_inc_tax?: string;
};
export type BillingAddressBase = {
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
export type ShippingAddressBase = {
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
    shipping_method?: string;
};
export type OrderRespOnly = {
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
    is_email_opt_in?: boolean;
    order_source?: string;
    consignments?: OrderConsignmentsResource;
    products?: ProductsResource;
    shipping_addresses?: ShippingAddressesResource;
    coupons?: CouponsResource;
    status_id?: number;
    billing_address?: {
        form_fields?: Array<FormFields>;
    };
};
export type OrderCustomProductPut = {
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
export type OrderCatalogProductPut = {
    id?: number;
} & OrderCatalogProductPost;
export type OrderRemoveProductPut = {
    id?: number;
    product_id?: number;
    quantity?: number;
    product_options?: Array<{
        cost_price_inc_tax?: string;
        readonly price_ex_tax?: string;
    }>;
};
export type OrderCatalogProductPost = {
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
export type OrderCustomProductPost = {
    name: string;
    name_customer?: string;
    name_merchant?: string;
    quantity: number;
    price_inc_tax: number;
    price_ex_tax: number;
    upc?: string;
    sku?: string;
};
export type OrderPut = {
    base_handling_cost?: string;
    base_shipping_cost?: string;
    base_wrapping_cost?: string;
    billing_address?: BillingAddressPut;
    channel_id?: number;
    consignments?: OrderConsignmentPut;
    customer_id?: number;
    customer_message?: string;
    date_created?: string;
    readonly default_currency_code?: string;
    discount_amount?: string;
    ebay_order_id?: string;
    readonly external_id?: string | null;
    external_merchant_id?: string | null;
    external_source?: string | null;
    geoip_country?: string;
    geoip_country_iso2?: string;
    handling_cost_ex_tax?: string;
    handling_cost_inc_tax?: string;
    ip_address?: string;
    ip_address_v6?: string;
    is_deleted?: boolean;
    items_shipped?: number;
    items_total?: number;
    order_is_digital?: boolean;
    payment_method?: string;
    payment_provider_id?: string | number;
    products?: Array<OrderCatalogProductPut | OrderCustomProductPut | OrderRemoveProductPut>;
    refunded_amount?: string;
    shipping_cost_ex_tax?: string;
    shipping_cost_inc_tax?: string;
    staff_notes?: string;
    shipping_addresses?: Array<{
        id?: number;
    } & ShippingAddressPut>;
    status_id?: number;
    subtotal_ex_tax?: string;
    subtotal_inc_tax?: string;
    tax_provider_id?: 'BasicTaxProvider' | 'AvaTaxProvider' | '';
    customer_locale?: string;
    external_order_id?: string | null;
    total_ex_tax?: string;
    total_inc_tax?: string;
    wrapping_cost_ex_tax?: string;
    wrapping_cost_inc_tax?: string;
};
export type OrderPost = {
    products?: Array<OrderCatalogProductPost | OrderCustomProductPost>;
    shipping_addresses?: Array<ShippingAddressBase>;
    consignments?: OrderConsignmentPost;
} & OrderShared;
export type ShippingAddressPut = ShippingAddressBase & {
    form_fields?: Array<FormFields>;
};
export type BillingAddressPut = BillingAddressBase & {
    form_fields?: Array<FormFields>;
};
export type OrderConsignmentPut = {
    pickups?: Array<PickupConsignmentPut>;
};
export type PickupConsignmentPut = {
    id: number;
    pickup_method_id?: number;
} & PickupConsignmentBase & {
    location?: PickupConsignmentLocationPut;
    line_items?: Array<OrderProductPut>;
};
export type PickupConsignmentBase = {
    pickup_method_display_name?: string;
    collection_instructions?: string;
    collection_time_description?: string;
};
export type PickupConsignmentLocationPut = PickupConsignmentLocationBase;
export type PickupConsignmentLocationBase = {
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
export type OrderProductPut = OrderCustomProductPut | OrderCatalogProductPut;
export type OrderConsignmentPost = {
    pickups: Array<PickupConsignmentPost>;
};
export type PickupConsignmentPost = {
    pickup_method_id: number;
} & PickupConsignmentBase & {
    location?: PickupConsignmentLocationPost;
    line_items: Array<OrderProductPost>;
};
export type PickupConsignmentLocationPost = PickupConsignmentLocationBase;
export type OrderProductPost = OrderCustomProductPost | OrderCatalogProductPost;
export type OrderConsignmentGet = {
    pickups?: Array<PickupConsignmentGet>;
    shipping?: Array<ShippingConsignmentGet>;
    downloads?: Array<DigitalConsignmentGet>;
    email?: {
        gift_certificates?: Array<GiftCertificateConsignmentGet>;
    };
};
export type GiftCertificateConsignmentGet = {
    recipient_email?: string;
    line_items?: Array<ProductsResource>;
};
export type PickupConsignmentGet = {
    id?: number;
    pickup_method_id?: number;
} & PickupConsignmentBase & {
    location?: PickupConsignmentLocationGet;
    line_items?: Array<ProductsResource>;
};
export type PickupConsignmentLocationGet = {
    id?: number;
} & PickupConsignmentLocationBase;
export type ShippingConsignmentGet = {
    id?: number;
} & ShippingConsignmentBase & {
    line_items?: Array<ProductsResource>;
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
    shipping_quotes?: ShippingQuotesConsignmentResource;
};
export type ShippingConsignmentBase = {
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
    form_fields?: Array<FormFields>;
};
export type ShippingQuotesConsignmentResource = {
    readonly url?: string;
    readonly resource?: string;
};
export type DigitalConsignmentGet = {
    recipient_email?: string;
    line_items?: Array<ProductsResource>;
};
export type OrderProductsWritable = {
    id?: number;
    order_id?: number;
    product_id?: number;
    order_pickup_method_id?: number;
    order_address_id?: number;
    name?: string;
    sku?: string;
    type?: 'physical' | 'digital';
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
    weight?: number | string;
    cost_price_tax?: string;
    is_refunded?: boolean;
    quantity_refunded?: number;
    refunded_amount?: string;
    return_id?: number;
    wrapping_name?: string | null;
    base_wrapping_cost?: string | number;
    wrapping_cost_ex_tax?: string;
    wrapping_cost_inc_tax?: string;
    wrapping_cost_tax?: string;
    wrapping_message?: string;
    quantity_shipped?: number;
    event_name?: string | null;
    event_date?: string | null;
    fixed_shipping_cost?: string;
    ebay_item_id?: string;
    ebay_transaction_id?: string;
    option_set_id?: number | null;
    parent_order_product_id?: number | null;
    is_bundled_product?: boolean;
    bin_picking_number?: string;
    brand?: string;
    applied_discounts?: Array<OrderProductAppliedDiscounts>;
    product_options?: Array<OrderProductOptions>;
    upc?: string;
    variant_id?: number;
    name_customer?: string;
    name_merchant?: string;
    gift_certificate_id?: number | null;
    discounted_total_inc_tax?: string;
};
export type OrderShippingAddressWritable = {
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
    form_fields?: Array<FormFields>;
} & ShippingAddressBase;
export type OrderShipmentWritable = {
    id?: number;
    order_id?: number;
    customer_id?: number;
    order_address_id?: number;
    date_created?: string;
    tracking_number?: string;
    shipping_method?: string;
    shipping_provider?: 'auspost' | 'canadapost' | 'carrier_{your_carrier_id} (only used if the carrier is a [third-party Shipping Provider](/docs/integrations/shipping))' | 'endicia' | 'usps' | 'fedex' | 'ups' | 'upsready' | 'upsonline' | 'shipperhq' | '';
    tracking_carrier?: string;
    tracking_link?: string;
    comments?: string;
    billing_address?: BillingAddressBase;
    shipping_address?: ShippingAddressBase;
    items?: Array<{
        order_product_id?: number;
        product_id?: number;
        quantity?: number;
    }>;
    generated_tracking_link?: string;
};
export type OrderSharedWritable = {
    base_handling_cost?: string;
    base_shipping_cost?: string;
    base_wrapping_cost?: string;
    billing_address?: BillingAddressBase;
    channel_id?: number;
    customer_id?: number;
    customer_message?: string;
    date_created?: string;
    default_currency_code?: string;
    discount_amount?: string;
    ebay_order_id?: string;
    external_merchant_id?: string | null;
    external_source?: string | null;
    geoip_country?: string;
    geoip_country_iso2?: string;
    handling_cost_ex_tax?: string;
    handling_cost_inc_tax?: string;
    ip_address?: string;
    ip_address_v6?: string;
    is_deleted?: boolean;
    items_shipped?: number;
    items_total?: number;
    order_is_digital?: boolean;
    payment_method?: 'Credit Card' | 'Cash' | 'Test Payment Gateway' | 'Manual';
    payment_provider_id?: string | number;
    refunded_amount?: string;
    shipping_cost_ex_tax?: string;
    shipping_cost_inc_tax?: string;
    staff_notes?: string;
    status_id?: number;
    subtotal_ex_tax?: string;
    subtotal_inc_tax?: string;
    tax_provider_id?: 'BasicTaxProvider' | 'AvaTaxProvider' | '';
    customer_locale?: string;
    external_order_id?: string;
    total_ex_tax?: string;
    total_inc_tax?: string;
    wrapping_cost_ex_tax?: string;
    wrapping_cost_inc_tax?: string;
};
export type OrderRespOnlyWritable = {
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
    is_email_opt_in?: boolean;
    order_source?: string;
    status_id?: number;
    billing_address?: {
        form_fields?: Array<FormFields>;
    };
};
export type OrderRemoveProductPutWritable = {
    id?: number;
    product_id?: number;
    quantity?: number;
    product_options?: Array<{
        cost_price_inc_tax?: string;
    }>;
};
export type OrderPutWritable = {
    base_handling_cost?: string;
    base_shipping_cost?: string;
    base_wrapping_cost?: string;
    billing_address?: BillingAddressPut;
    channel_id?: number;
    consignments?: OrderConsignmentPut;
    customer_id?: number;
    customer_message?: string;
    date_created?: string;
    discount_amount?: string;
    ebay_order_id?: string;
    external_merchant_id?: string | null;
    external_source?: string | null;
    geoip_country?: string;
    geoip_country_iso2?: string;
    handling_cost_ex_tax?: string;
    handling_cost_inc_tax?: string;
    ip_address?: string;
    ip_address_v6?: string;
    is_deleted?: boolean;
    items_shipped?: number;
    items_total?: number;
    order_is_digital?: boolean;
    payment_method?: string;
    payment_provider_id?: string | number;
    products?: Array<OrderCatalogProductPut | OrderCustomProductPut | OrderRemoveProductPutWritable>;
    refunded_amount?: string;
    shipping_cost_ex_tax?: string;
    shipping_cost_inc_tax?: string;
    staff_notes?: string;
    shipping_addresses?: Array<{
        id?: number;
    } & ShippingAddressPut>;
    status_id?: number;
    subtotal_ex_tax?: string;
    subtotal_inc_tax?: string;
    tax_provider_id?: 'BasicTaxProvider' | 'AvaTaxProvider' | '';
    customer_locale?: string;
    external_order_id?: string | null;
    total_ex_tax?: string;
    total_inc_tax?: string;
    wrapping_cost_ex_tax?: string;
    wrapping_cost_inc_tax?: string;
};
export type ShippingConsignmentGetWritable = {
    id?: number;
} & ShippingConsignmentBase & {
    line_items?: Array<unknown>;
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
};
export type Accept = string;
export type ContentType = string;
export type MinId = number;
export type MaxId = number;
export type MinTotal = number;
export type MaxTotal = number;
export type CustomerId = number;
export type Email = string;
export type StatusId = number;
export type StatusIdPath = number;
export type CartId = string;
export type IsDeleted = boolean;
export type PaymentMethod = 'Manual' | 'Cash on Delivery' | 'Credit Card' | 'Test Payment Gateway' | 'Pay In Store';
export type MinDateCreated = string;
export type MaxDateCreated = string;
export type MinDateModified = string;
export type MaxDateModified = string;
export type Page = number;
export type Limit = number;
export type Sort = 'id' | 'customer_id' | 'date_created' | 'date_modified' | 'status_id' | 'channel_id' | 'external_id';
export type Status = 'read' | 'unread';
export type IsFlagged = boolean;
export type OrderIdPath = number;
export type ProductIdPath = number;
export type ShippingAddressIdPath = number;
export type ShipmentIdPath = number;
export type ChannelId = number;
export type ShippingConsignmentId = number;
export type OrderIncludes = 'consignments' | 'consignments.line_items';
export type DeleteAnOrderData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: never;
    url: '/orders/{order_id}';
};
export type DeleteAnOrderResponses = {
    204: void;
};
export type DeleteAnOrderResponse = DeleteAnOrderResponses[keyof DeleteAnOrderResponses];
export type GetAnOrderData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        include?: 'consignments' | 'consignments.line_items';
    };
    url: '/orders/{order_id}';
};
export type GetAnOrderErrors = {
    404: unknown;
};
export type GetAnOrderResponses = {
    200: OrderResp;
};
export type GetAnOrderResponse = GetAnOrderResponses[keyof GetAnOrderResponses];
export type UpdateAnOrderData = {
    body: OrderPutWritable;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        order_id: number;
    };
    query?: never;
    url: '/orders/{order_id}';
};
export type UpdateAnOrderResponses = {
    200: OrderResp;
};
export type UpdateAnOrderResponse = UpdateAnOrderResponses[keyof UpdateAnOrderResponses];
export type GetCountOrderData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/orders/count';
};
export type GetCountOrderResponses = {
    200: OrdersCountFull;
};
export type GetCountOrderResponse = GetCountOrderResponses[keyof GetCountOrderResponses];
export type DeleteAllOrdersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        limit?: number;
    };
    url: '/orders';
};
export type DeleteAllOrdersResponses = {
    204: void;
};
export type DeleteAllOrdersResponse = DeleteAllOrdersResponses[keyof DeleteAllOrdersResponses];
export type GetAllOrdersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        min_id?: number;
        max_id?: number;
        min_total?: number;
        max_total?: number;
        customer_id?: number;
        email?: string;
        status_id?: number;
        cart_id?: string;
        payment_method?: 'Manual' | 'Cash on Delivery' | 'Credit Card' | 'Test Payment Gateway' | 'Pay In Store';
        min_date_created?: string;
        max_date_created?: string;
        min_date_modified?: string;
        max_date_modified?: string;
        page?: number;
        limit?: number;
        sort?: 'id' | 'customer_id' | 'date_created' | 'date_modified' | 'status_id' | 'channel_id' | 'external_id';
        is_deleted?: boolean;
        channel_id?: number;
        include?: 'consignments' | 'consignments.line_items';
    };
    url: '/orders';
};
export type GetAllOrdersResponses = {
    200: Array<OrderResp>;
};
export type GetAllOrdersResponse = GetAllOrdersResponses[keyof GetAllOrdersResponses];
export type CreateAnOrderData = {
    body: OrderPost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        include?: 'consignments' | 'consignments.line_items';
    };
    url: '/orders';
};
export type CreateAnOrderResponses = {
    200: OrderResp;
};
export type CreateAnOrderResponse = CreateAnOrderResponses[keyof CreateAnOrderResponses];
export type GetAllOrderCouponsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/orders/{order_id}/coupons';
};
export type GetAllOrderCouponsResponses = {
    200: Array<OrderCouponsBase>;
};
export type GetAllOrderCouponsResponse = GetAllOrderCouponsResponses[keyof GetAllOrderCouponsResponses];
export type GetAllOrderProductsData = {
    body?: never;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        order_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/orders/{order_id}/products';
};
export type GetAllOrderProductsResponses = {
    200: Array<OrderProducts>;
};
export type GetAllOrderProductsResponse = GetAllOrderProductsResponses[keyof GetAllOrderProductsResponses];
export type GetAllShippingAddressesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/orders/{order_id}/shipping_addresses';
};
export type GetAllShippingAddressesResponses = {
    200: Array<OrderShippingAddress>;
};
export type GetAllShippingAddressesResponse = GetAllShippingAddressesResponses[keyof GetAllShippingAddressesResponses];
export type GetOrderStatusData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/order_statuses';
};
export type GetOrderStatusResponses = {
    200: Array<OrderStatusBase>;
};
export type GetOrderStatusResponse = GetOrderStatusResponses[keyof GetOrderStatusResponses];
export type GetAOrderStatusData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        status_id: number;
    };
    query?: never;
    url: '/order_statuses/{status_id}';
};
export type GetAOrderStatusResponses = {
    200: OrderStatusBase;
};
export type GetAOrderStatusResponse = GetAOrderStatusResponses[keyof GetAOrderStatusResponses];
export type GetOrderTaxesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
        details?: string;
    };
    url: '/orders/{order_id}/taxes';
};
export type GetOrderTaxesResponses = {
    200: Array<OrderTaxesBase>;
};
export type GetOrderTaxesResponse = GetOrderTaxesResponses[keyof GetOrderTaxesResponses];
export type DeleteAllOrderShipmentsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/shipments';
};
export type DeleteAllOrderShipmentsResponses = {
    204: void;
};
export type DeleteAllOrderShipmentsResponse = DeleteAllOrderShipmentsResponses[keyof DeleteAllOrderShipmentsResponses];
export type GetAllOrderShipmentsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/orders/{order_id}/shipments';
};
export type GetAllOrderShipmentsResponses = {
    200: Array<OrderShipment>;
};
export type GetAllOrderShipmentsResponse = GetAllOrderShipmentsResponses[keyof GetAllOrderShipmentsResponses];
export type CreateOrderShipmentsData = {
    body: OrderShipmentPost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        order_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/shipments';
};
export type CreateOrderShipmentsResponses = {
    201: OrderShipment;
};
export type CreateOrderShipmentsResponse = CreateOrderShipmentsResponses[keyof CreateOrderShipmentsResponses];
export type GetCountShipmentsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/shipments/count';
};
export type GetCountShipmentsResponses = {
    200: OrderCount;
};
export type GetCountShipmentsResponse = GetCountShipmentsResponses[keyof GetCountShipmentsResponses];
export type DeleteOrderShipmentData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
        shipment_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/shipments/{shipment_id}';
};
export type DeleteOrderShipmentResponses = {
    204: void;
};
export type DeleteOrderShipmentResponse = DeleteOrderShipmentResponses[keyof DeleteOrderShipmentResponses];
export type GetOrderShipmentData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
        shipment_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/shipments/{shipment_id}';
};
export type GetOrderShipmentResponses = {
    200: OrderShipment;
};
export type GetOrderShipmentResponse = GetOrderShipmentResponses[keyof GetOrderShipmentResponses];
export type UpdateOrderShipmentData = {
    body: OrderShipmentPut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        order_id: number;
        shipment_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/shipments/{shipment_id}';
};
export type UpdateOrderShipmentResponses = {
    200: OrderShipment;
};
export type UpdateOrderShipmentResponse = UpdateOrderShipmentResponses[keyof UpdateOrderShipmentResponses];
export type GetOrderMessagesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        min_id?: number;
        max_id?: number;
        customer_id?: number;
        min_date_created?: string;
        max_date_created?: string;
        is_flagged?: boolean;
        status?: 'read' | 'unread';
        page?: number;
        limit?: number;
    };
    url: '/orders/{order_id}/messages';
};
export type GetOrderMessagesResponses = {
    200: OrderMessages;
};
export type GetOrderMessagesResponse = GetOrderMessagesResponses[keyof GetOrderMessagesResponses];
export type GetAnOrderProductData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
        product_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/products/{product_id}';
};
export type GetAnOrderProductResponses = {
    200: OrderProducts;
};
export type GetAnOrderProductResponse = GetAnOrderProductResponses[keyof GetAnOrderProductResponses];
export type GetAShippingAddressData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
        id: string;
    };
    query?: never;
    url: '/orders/{order_id}/shipping_addresses/{id}';
};
export type GetAShippingAddressResponses = {
    200: OrderShippingAddress;
};
export type GetAShippingAddressResponse = GetAShippingAddressResponses[keyof GetAShippingAddressResponses];
export type UpdateAShippingAddressData = {
    body?: ShippingAddressPut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        order_id: number;
        id: string;
    };
    query?: never;
    url: '/orders/{order_id}/shipping_addresses/{id}';
};
export type UpdateAShippingAddressErrors = {
    400: Array<{
        status?: number;
        message?: string;
    }>;
    404: Array<{
        status?: number;
        message?: string;
    }>;
};
export type UpdateAShippingAddressError = UpdateAShippingAddressErrors[keyof UpdateAShippingAddressErrors];
export type UpdateAShippingAddressResponses = {
    200: OrderShippingAddress;
};
export type UpdateAShippingAddressResponse = UpdateAShippingAddressResponses[keyof UpdateAShippingAddressResponses];
export type GetShippingQuotesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
        shipping_address_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/shipping_addresses/{shipping_address_id}/shipping_quotes';
};
export type GetShippingQuotesResponses = {
    200: ShippingQuotesBase;
};
export type GetShippingQuotesResponse = GetShippingQuotesResponses[keyof GetShippingQuotesResponses];
export type GetOrdersOrderIdConsignmentsData = {
    body?: never;
    path: {
        order_id: number;
    };
    query?: {
        include?: 'consignments.line_items';
    };
    url: '/orders/{order_id}/consignments';
};
export type GetOrdersOrderIdConsignmentsErrors = {
    404: Array<{
        status?: number;
        message?: string;
    }>;
};
export type GetOrdersOrderIdConsignmentsError = GetOrdersOrderIdConsignmentsErrors[keyof GetOrdersOrderIdConsignmentsErrors];
export type GetOrdersOrderIdConsignmentsResponses = {
    200: OrderConsignmentGet;
};
export type GetOrdersOrderIdConsignmentsResponse = GetOrdersOrderIdConsignmentsResponses[keyof GetOrdersOrderIdConsignmentsResponses];
export type GetOrdersOrderIdConsignmentsShippingShippingIdShippingQuotesData = {
    body?: never;
    path: {
        order_id: number;
        shipping_consignment_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/consignments/shipping/{shipping_consignment_id}/shipping_quotes';
};
export type GetOrdersOrderIdConsignmentsShippingShippingIdShippingQuotesErrors = {
    404: Array<{
        status?: number;
        message?: string;
    }>;
};
export type GetOrdersOrderIdConsignmentsShippingShippingIdShippingQuotesError = GetOrdersOrderIdConsignmentsShippingShippingIdShippingQuotesErrors[keyof GetOrdersOrderIdConsignmentsShippingShippingIdShippingQuotesErrors];
export type GetOrdersOrderIdConsignmentsShippingShippingIdShippingQuotesResponses = {
    200: ShippingQuotesBase;
};
export type GetOrdersOrderIdConsignmentsShippingShippingIdShippingQuotesResponse = GetOrdersOrderIdConsignmentsShippingShippingIdShippingQuotesResponses[keyof GetOrdersOrderIdConsignmentsShippingShippingIdShippingQuotesResponses];
