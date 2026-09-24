export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2' | (string & {});
};
export type OrdersOrderIdGetParametersIncludeSchemaItems = 'consignments' | 'consignments.line_items' | 'fees';
export type OrdersOrderIdGetParametersConsignmentStructure = 'object';
export type OrderRespOnlyPaymentStatus = 'authorized' | 'captured' | 'capture pending' | 'declined' | 'held for review' | 'paid' | 'partially refunded' | 'pending' | 'refunded' | 'void' | 'void pending' | '';
export type OrderConsignmentsResource = {
    url?: string;
    resource?: string;
};
export type PickupConsignmentLocationGet = {
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
    id?: number;
};
export type ProductsResource = {
    url?: string;
    resource?: string;
};
export type PickupConsignmentGetLineItems0 = Array<ProductsResource>;
export type OrderProductsType = 'physical' | 'digital' | 'giftcertificate';
export type OrderProductsWeight = number | string;
export type OrderProductsBaseWrappingCost = string | number;
export type OrderProductAppliedDiscountsTarget = 'order' | 'product';
export type OrderProductAppliedDiscounts = {
    id?: string;
    amount?: string;
    name?: string;
    code?: string | null;
    target?: OrderProductAppliedDiscountsTarget;
};
export type OrderProductOptionsType = 'Checkbox' | 'Date field' | 'File Upload' | 'Multi-line text field' | 'Multiple choice' | 'Product Pick List' | 'Swatch' | 'Text field';
export type OrderProductOptions = {
    id?: number;
    option_id?: number;
    order_product_id?: number;
    product_option_id?: number;
    display_name?: string;
    display_value?: string;
    value?: string;
    type?: OrderProductOptionsType;
    name?: string;
    display_style?: string;
    display_name_customer?: string;
    display_name_merchant?: string;
    display_value_customer?: string;
    display_value_merchant?: string;
};
export type OrderProductsConfigurableFieldsItems = {
    name?: string;
    value?: string;
};
export type OrderProducts = {
    id?: number;
    order_id?: number;
    product_id?: number;
    order_pickup_method_id?: number;
    order_address_id?: number;
    name?: string;
    sku?: string;
    type?: OrderProductsType;
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
    weight?: OrderProductsWeight;
    width?: string;
    height?: string;
    depth?: string;
    cost_price_tax?: string;
    is_refunded?: boolean;
    quantity_refunded?: number;
    refund_amount?: string;
    return_id?: number;
    wrapping_id?: number;
    wrapping_name?: string | null;
    base_wrapping_cost?: OrderProductsBaseWrappingCost;
    wrapping_cost_ex_tax?: string;
    wrapping_cost_inc_tax?: string;
    wrapping_cost_tax?: string;
    wrapping_message?: string;
    quantity_shipped?: number;
    quantity_backordered?: number;
    backorder_message?: string | null;
    event_name?: string | null;
    event_date?: string | null;
    fixed_shipping_cost?: string;
    ebay_item_id?: string;
    ebay_transaction_id?: string;
    option_set_id?: number | null;
    parent_order_product_id?: number | null;
    is_bundled_product?: boolean;
    bin_picking_number?: string;
    external_id?: string | null;
    brand?: string;
    applied_discounts?: Array<OrderProductAppliedDiscounts>;
    product_options?: Array<OrderProductOptions>;
    configurable_fields?: Array<OrderProductsConfigurableFieldsItems>;
    upc?: string;
    variant_id?: number;
    name_customer?: string;
    name_merchant?: string;
    gift_certificate_id?: number | null;
    discounted_total_inc_tax?: string;
};
export type PickupConsignmentGetLineItems1 = Array<OrderProducts>;
export type PickupConsignmentGetLineItems = PickupConsignmentGetLineItems0 | PickupConsignmentGetLineItems1;
export type PickupConsignmentGet = {
    pickup_method_display_name?: string;
    collection_instructions?: string;
    collection_time_description?: string;
    id?: number;
    pickup_method_id?: number;
    location?: PickupConsignmentLocationGet;
    line_items?: PickupConsignmentGetLineItems;
};
export type FormFieldsValue = number | string | Array<unknown>;
export type FormFields = {
    name?: string;
    value?: FormFieldsValue;
};
export type ShippingConsignmentGetLineItems0 = Array<ProductsResource>;
export type ShippingConsignmentGetLineItems1 = Array<OrderProducts>;
export type ShippingConsignmentGetLineItems = ShippingConsignmentGetLineItems0 | ShippingConsignmentGetLineItems1;
export type ShippingQuotesConsignmentResource = {
    url?: string;
    resource?: string;
};
export type ShippingConsignmentGet = {
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
    id?: number;
    line_items?: ShippingConsignmentGetLineItems;
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
export type DigitalConsignmentGetLineItems0 = Array<ProductsResource>;
export type DigitalConsignmentGetLineItems1 = Array<OrderProducts>;
export type DigitalConsignmentGetLineItems = DigitalConsignmentGetLineItems0 | DigitalConsignmentGetLineItems1;
export type DigitalConsignmentGet = {
    recipient_email?: string;
    line_items?: DigitalConsignmentGetLineItems;
};
export type GiftCertificateConsignmentGetLineItems0 = Array<ProductsResource>;
export type GiftCertificateConsignmentGetLineItems1 = Array<OrderProducts>;
export type GiftCertificateConsignmentGetLineItems = GiftCertificateConsignmentGetLineItems0 | GiftCertificateConsignmentGetLineItems1;
export type GiftCertificateConsignmentGet = {
    recipient_email?: string;
    line_items?: GiftCertificateConsignmentGetLineItems;
};
export type OrderConsignmentGetEmail = {
    gift_certificates?: Array<GiftCertificateConsignmentGet>;
};
export type OrderConsignmentGet = {
    pickups?: Array<PickupConsignmentGet>;
    shipping?: Array<ShippingConsignmentGet>;
    downloads?: Array<DigitalConsignmentGet>;
    email?: OrderConsignmentGetEmail;
};
export type OrderRespOnlyConsignments = OrderConsignmentsResource | OrderConsignmentGet;
export type ShippingAddressesResource = {
    url?: string;
    resource?: string;
};
export type CouponsResource = {
    url?: string;
    resource?: string;
};
export type BillingAddressResp = {
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
    form_fields?: Array<FormFields>;
};
export type OrderFeesResource = {
    url?: string;
    resource?: string;
};
export type OrderFeesRespType = 'custom_fee';
export type OrderFeesRespBaseCost = string | number;
export type OrderFeesRespCostExTax = string | number;
export type OrderFeesRespCostIncTax = string | number;
export type OrderFeesRespCostTax = string | number;
export type OrderFeesResp = {
    id?: number;
    type?: OrderFeesRespType;
    display_name_customer?: string;
    display_name_merchant?: string;
    source?: string;
    base_cost?: OrderFeesRespBaseCost;
    cost_ex_tax?: OrderFeesRespCostExTax;
    cost_inc_tax?: OrderFeesRespCostIncTax;
    cost_tax?: OrderFeesRespCostTax;
    tax_class_id?: number | null;
};
export type OrderRespOnlyFees1 = Array<OrderFeesResp>;
export type OrderRespOnlyFees = OrderFeesResource | OrderRespOnlyFees1;
export type OrderSharedPaymentProviderId = string | number;
export type OrderResp = {
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
    payment_status?: OrderRespOnlyPaymentStatus;
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
    total_tax?: string;
    is_tax_inclusive_pricing?: boolean;
    is_email_opt_in?: boolean;
    order_source?: string;
    consignments?: OrderRespOnlyConsignments;
    products?: ProductsResource;
    shipping_addresses?: ShippingAddressesResource;
    coupons?: CouponsResource;
    status_id?: number;
    billing_address?: BillingAddressResp;
    fees?: OrderRespOnlyFees;
    backorder_shipping_expectation_message?: string | null;
    base_handling_cost?: string;
    base_shipping_cost?: string;
    base_wrapping_cost?: string;
    channel_id?: number;
    customer_id?: number;
    customer_message?: string;
    date_created?: string;
    discount_amount?: string;
    ebay_order_id?: string;
    external_id?: string | null;
    external_merchant_id?: string | null;
    external_source?: string | null;
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
    payment_provider_id?: OrderSharedPaymentProviderId;
    refunded_amount?: string;
    shipping_cost_ex_tax?: string;
    shipping_cost_inc_tax?: string;
    staff_notes?: string;
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
export type BillingAddressPut = {
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
    form_fields?: Array<FormFields>;
};
export type PickupConsignmentLocationPut = {
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
export type OrderCatalogProductPostProductOptionsItems = {
    id?: number;
    value?: string;
    display_name?: string;
    display_name_customer?: string;
    display_name_merchant?: string;
    display_value?: string;
    display_value_merchant?: string;
    display_value_customer?: string;
};
export type OrderCatalogProductPut = {
    product_id?: number;
    name?: string;
    name_customer?: string;
    name_merchant?: string;
    product_options?: Array<OrderCatalogProductPostProductOptionsItems>;
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
    id?: number;
};
export type OrderProductPut = OrderCustomProductPut | OrderCatalogProductPut;
export type PickupConsignmentPut = {
    pickup_method_display_name?: string;
    collection_instructions?: string;
    collection_time_description?: string;
    id: number;
    pickup_method_id?: number;
    location?: PickupConsignmentLocationPut;
    line_items?: Array<OrderProductPut>;
};
export type OrderConsignmentPut = {
    pickups?: Array<PickupConsignmentPut>;
};
export type OrderPutPaymentProviderId = string | number;
export type OrderRemoveProductPutProductOptionsItems = {
    cost_price_inc_tax?: string;
    price_ex_tax?: string;
};
export type OrderRemoveProductPut = {
    id?: number;
    product_id?: number;
    quantity?: number;
    product_options?: Array<OrderRemoveProductPutProductOptionsItems>;
};
export type OrderPutProductsItems = OrderCatalogProductPut | OrderCustomProductPut | OrderRemoveProductPut;
export type OrderPutShippingAddressesItems = {
    id?: number;
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
    form_fields?: Array<FormFields>;
};
export type OrderFeesPutType = 'custom_fee';
export type OrderFeesPutCostExTax = string | number;
export type OrderFeesPutCostIncTax = string | number;
export type OrderFeesPutCostTax = string | number;
export type OrderFeesPut = {
    id?: number;
    type?: OrderFeesPutType;
    display_name_customer?: string;
    display_name_merchant?: string;
    source?: string;
    cost_ex_tax?: OrderFeesPutCostExTax;
    cost_inc_tax?: OrderFeesPutCostIncTax;
    cost_tax?: OrderFeesPutCostTax;
    tax_class_id?: number | null;
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
    default_currency_code?: string;
    discount_amount?: string;
    order_source?: string;
    ebay_order_id?: string;
    external_id?: string | null;
    external_merchant_id?: string | null;
    external_source?: string | null;
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
    payment_provider_id?: OrderPutPaymentProviderId;
    products?: Array<OrderPutProductsItems>;
    refunded_amount?: string;
    shipping_cost_ex_tax?: string;
    shipping_cost_inc_tax?: string;
    staff_notes?: string;
    shipping_addresses?: Array<OrderPutShippingAddressesItems>;
    status_id?: number;
    subtotal_ex_tax?: string;
    subtotal_inc_tax?: string;
    tax_provider_id?: string;
    customer_locale?: string;
    external_order_id?: string | null;
    total_ex_tax?: string;
    total_inc_tax?: string;
    wrapping_cost_ex_tax?: string;
    wrapping_cost_inc_tax?: string;
    fees?: Array<OrderFeesPut>;
};
export type OrdersCountStatus = {
    id?: number;
    name?: string;
    system_label?: string;
    custom_label?: string;
    system_description?: string;
    count?: number;
    sort_order?: number;
};
export type OrdersCountFull = {
    statuses?: Array<OrdersCountStatus>;
    count?: number;
};
export type OrdersGetParametersSort = 'id' | 'customer_id' | 'date_created' | 'date_modified' | 'status_id' | 'channel_id' | 'external_id';
export type OrdersGetParametersIncludeSchemaItems = 'consignments' | 'consignments.line_items' | 'fees';
export type OrdersGetParametersConsignmentStructure = 'object';
export type OrdersPostParametersIncludeSchemaItems = 'consignments' | 'consignments.line_items' | 'fees';
export type OrdersPostParametersConsignmentStructure = 'object';
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
export type OrderCatalogProductPost = {
    product_id?: number;
    name?: string;
    name_customer?: string;
    name_merchant?: string;
    product_options?: Array<OrderCatalogProductPostProductOptionsItems>;
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
export type OrderPostProductsItems = OrderCatalogProductPost | OrderCustomProductPost;
export type OrderPostShippingAddressesItems = {
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
export type PickupConsignmentLocationPost = {
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
export type OrderProductPost = OrderCustomProductPost | OrderCatalogProductPost;
export type PickupConsignmentPost = {
    pickup_method_display_name?: string;
    collection_instructions?: string;
    collection_time_description?: string;
    pickup_method_id: number;
    location?: PickupConsignmentLocationPost;
    line_items: Array<OrderProductPost>;
};
export type OrderConsignmentPost = {
    pickups: Array<PickupConsignmentPost>;
};
export type OrderFeesPostType = 'custom_fee';
export type OrderFeesPostCostExTax = string | number;
export type OrderFeesPostCostIncTax = string | number;
export type OrderFeesPostCostTax = string | number;
export type OrderFeesPost = {
    type?: OrderFeesPostType;
    display_name_customer?: string;
    display_name_merchant?: string;
    source?: string;
    cost_ex_tax?: OrderFeesPostCostExTax;
    cost_inc_tax?: OrderFeesPostCostIncTax;
    cost_tax?: OrderFeesPostCostTax;
    tax_class_id?: number | null;
};
export type OrderPost = {
    backorder_shipping_expectation_message?: string | null;
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
    external_id?: string | null;
    external_merchant_id?: string | null;
    external_source?: string | null;
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
    payment_provider_id?: OrderSharedPaymentProviderId;
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
    billing_address?: BillingAddressBase;
    default_currency_code?: string;
    products?: Array<OrderPostProductsItems>;
    shipping_addresses?: Array<OrderPostShippingAddressesItems>;
    consignments?: OrderConsignmentPost;
    fees?: Array<OrderFeesPost>;
};
export type OrdersOrderIdConsignmentsGetParametersIncludeSchemaItems = 'consignments.line_items';
export type OrdersOrderIdConsignmentsGetResponsesContentApplicationJsonSchemaItems = {
    status?: number;
    message?: string;
};
export type ShippingQuotesBaseShippingProviderQuoteItems = {
    [key: string]: unknown;
};
export type ShippingQuotesBase = {
    id?: string;
    uuid?: string;
    timestamp?: string;
    shipping_provider_id?: string;
    shipping_provider_quote?: Array<ShippingQuotesBaseShippingProviderQuoteItems>;
    provider_code?: string;
    carrier_code?: string;
    rate_code?: string;
    rate_id?: string;
    method_id?: number;
};
export type OrdersOrderIdConsignmentsShippingShippingConsignmentIdShippingQuotesGetResponsesContentApplicationJsonSchemaItems = {
    status?: number;
    message?: string;
};
export type OrderCouponsBaseAmount = string | number | number;
export type OrderCouponsBaseType = '0' | '1' | '2' | '3' | '4' | '5';
export type OrderCouponsBase = {
    id?: number;
    coupon_id?: number;
    order_id?: number;
    code?: string | null;
    amount?: OrderCouponsBaseAmount;
    type?: OrderCouponsBaseType;
    discount?: number;
};
export type OrdersOrderIdFeesGetResponsesContentApplicationJsonSchemaItems = {
    status?: number;
    message?: string;
};
export type OrdersOrderIdMessagesGetParametersStatus = 'read' | 'unread';
export type OrderMessagesItemsCustomer = {
    [key: string]: unknown;
};
export type OrderMessagesItems = {
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
    customer?: OrderMessagesItemsCustomer;
};
export type OrderMessages = Array<OrderMessagesItems>;
export type ShippingProviderStandard = 'auspost' | 'canadapost' | 'endicia' | 'usps' | 'fedex' | 'ups' | 'upsready' | 'upsonline' | 'shipperhq' | 'royalmail' | '';
export type ShippingProviderCustom = string;
export type OrderShipmentShippingProvider = ShippingProviderStandard | ShippingProviderCustom;
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
};
export type OrderShipmentItemsItems = {
    order_product_id?: number;
    product_id?: number;
    quantity?: number;
};
export type OrderShipment = {
    id?: number;
    order_id?: number;
    customer_id?: number;
    order_address_id?: number;
    date_created?: string;
    tracking_number?: string;
    merchant_shipping_cost?: string;
    shipping_method?: string;
    shipping_provider?: OrderShipmentShippingProvider;
    tracking_carrier?: string;
    tracking_link?: string;
    comments?: string;
    billing_address?: BillingAddressBase;
    shipping_address?: ShippingAddressBase;
    items?: Array<OrderShipmentItemsItems>;
    shipping_provider_display_name?: string;
    generated_tracking_link?: string;
};
export type OrderShipmentPostShippingProvider = ShippingProviderStandard | ShippingProviderCustom;
export type OrderShipmentPostItemsItems = {
    order_product_id?: number;
    quantity?: number;
};
export type OrderShipmentPost = {
    order_address_id?: number;
    tracking_number?: string;
    tracking_link?: string;
    merchant_shipping_cost?: string;
    shipping_method?: string;
    shipping_provider?: OrderShipmentPostShippingProvider;
    tracking_carrier?: string;
    comments?: string;
    items?: Array<OrderShipmentPostItemsItems>;
};
export type OrderCount = {
    count?: number;
};
export type OrderShipmentPutShippingProvider = ShippingProviderStandard | ShippingProviderCustom;
export type OrderShipmentPut = {
    order_address_id?: number;
    tracking_number?: string;
    merchant_shipping_cost?: string;
    shipping_method?: string;
    shipping_provider?: OrderShipmentPutShippingProvider;
    tracking_carrier?: string;
    tracking_link?: string;
    comments?: string;
};
export type ShippingQuotesResource = {
    url?: string;
    resource?: string;
};
export type OrderShippingAddress = {
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
    shipping_method?: string;
};
export type ShippingAddressPut = {
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
    form_fields?: Array<FormFields>;
};
export type OrdersOrderIdShippingAddressesIdPutResponsesContentApplicationJsonSchemaItems = {
    status?: number;
    message?: string;
};
export type OrderStatusBase = {
    id?: number;
    name?: string;
    system_label?: string;
    custom_label?: string;
    system_description?: string;
};
export type OrderTaxesBaseLineItemType = 'item' | 'shipping' | 'handling' | 'gift-wrapping';
export type OrderTaxesBase = {
    id?: number;
    order_id?: number;
    order_address_id?: number;
    tax_rate_id?: number;
    sales_tax_id?: string;
    tax_class_id?: number | null;
    name?: string;
    class?: string;
    rate?: string;
    priority?: number;
    priority_amount?: string;
    line_amount?: string;
    order_pickup_method_id?: number;
    order_product_id?: string;
    line_item_type?: OrderTaxesBaseLineItemType;
};
export type DeleteOrderData = {
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
export type DeleteOrderResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteOrderResponse = DeleteOrderResponses[keyof DeleteOrderResponses];
export type GetOrderData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: {
        include?: Array<OrdersOrderIdGetParametersIncludeSchemaItems>;
        consignment_structure?: OrdersOrderIdGetParametersConsignmentStructure;
    };
    url: '/orders/{order_id}';
};
export type GetOrderErrors = {
    404: unknown;
};
export type GetOrderResponses = {
    200: OrderResp;
};
export type GetOrderResponse = GetOrderResponses[keyof GetOrderResponses];
export type UpdateOrderData = {
    body?: OrderPut;
    headers: {
        Accept: string;
    };
    path: {
        order_id: number;
    };
    query?: never;
    url: '/orders/{order_id}';
};
export type UpdateOrderResponses = {
    200: OrderResp;
};
export type UpdateOrderResponse = UpdateOrderResponses[keyof UpdateOrderResponses];
export type GetOrdersCountData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        min_id?: number;
        max_id?: number;
        min_total?: string;
        max_total?: number;
        customer_id?: number;
        email?: string;
        status_id?: number;
        cart_id?: string;
        payment_method?: string;
        min_date_created?: string;
        max_date_created?: string;
        min_date_modified?: string;
        max_date_modified?: string;
        channel_id?: number;
        external_order_id?: string;
    };
    url: '/orders/count';
};
export type GetOrdersCountResponses = {
    200: OrdersCountFull;
};
export type GetOrdersCountResponse = GetOrdersCountResponses[keyof GetOrdersCountResponses];
export type DeleteOrdersData = {
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
export type DeleteOrdersResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteOrdersResponse = DeleteOrdersResponses[keyof DeleteOrdersResponses];
export type GetOrdersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        min_id?: number;
        max_id?: number;
        min_total?: string;
        max_total?: number;
        customer_id?: number;
        email?: string;
        status_id?: number;
        cart_id?: string;
        payment_method?: string;
        min_date_created?: string;
        max_date_created?: string;
        min_date_modified?: string;
        max_date_modified?: string;
        page?: number;
        limit?: number;
        sort?: OrdersGetParametersSort;
        channel_id?: number;
        include?: Array<OrdersGetParametersIncludeSchemaItems>;
        consignment_structure?: OrdersGetParametersConsignmentStructure;
        external_order_id?: string;
    };
    url: '/orders';
};
export type GetOrdersResponses = {
    200: Array<OrderResp>;
};
export type GetOrdersResponse = GetOrdersResponses[keyof GetOrdersResponses];
export type CreateOrderData = {
    body?: OrderPost;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        include?: Array<OrdersPostParametersIncludeSchemaItems>;
        consignment_structure?: OrdersPostParametersConsignmentStructure;
    };
    url: '/orders';
};
export type CreateOrderResponses = {
    200: OrderResp;
};
export type CreateOrderResponse = CreateOrderResponses[keyof CreateOrderResponses];
export type GetOrderConsignmentsData = {
    body?: never;
    path: {
        order_id: number;
    };
    query?: {
        include?: Array<OrdersOrderIdConsignmentsGetParametersIncludeSchemaItems>;
    };
    url: '/orders/{order_id}/consignments';
};
export type GetOrderConsignmentsErrors = {
    404: Array<OrdersOrderIdConsignmentsGetResponsesContentApplicationJsonSchemaItems>;
};
export type GetOrderConsignmentsError = GetOrderConsignmentsErrors[keyof GetOrderConsignmentsErrors];
export type GetOrderConsignmentsResponses = {
    200: OrderConsignmentGet;
};
export type GetOrderConsignmentsResponse = GetOrderConsignmentsResponses[keyof GetOrderConsignmentsResponses];
export type GetOrderConsignmentShippingQuotesData = {
    body?: never;
    path: {
        order_id: number;
        shipping_consignment_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/consignments/shipping/{shipping_consignment_id}/shipping_quotes';
};
export type GetOrderConsignmentShippingQuotesErrors = {
    404: Array<OrdersOrderIdConsignmentsShippingShippingConsignmentIdShippingQuotesGetResponsesContentApplicationJsonSchemaItems>;
};
export type GetOrderConsignmentShippingQuotesError = GetOrderConsignmentShippingQuotesErrors[keyof GetOrderConsignmentShippingQuotesErrors];
export type GetOrderConsignmentShippingQuotesResponses = {
    200: ShippingQuotesBase;
};
export type GetOrderConsignmentShippingQuotesResponse = GetOrderConsignmentShippingQuotesResponses[keyof GetOrderConsignmentShippingQuotesResponses];
export type GetOrderCouponsData = {
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
export type GetOrderCouponsResponses = {
    200: Array<OrderCouponsBase>;
};
export type GetOrderCouponsResponse = GetOrderCouponsResponses[keyof GetOrderCouponsResponses];
export type GetOrderFeesData = {
    body?: never;
    path: {
        order_id: number;
    };
    query?: never;
    url: '/orders/{order_id}/fees';
};
export type GetOrderFeesErrors = {
    404: Array<OrdersOrderIdFeesGetResponsesContentApplicationJsonSchemaItems>;
};
export type GetOrderFeesError = GetOrderFeesErrors[keyof GetOrderFeesErrors];
export type GetOrderFeesResponses = {
    200: OrderFeesResp;
};
export type GetOrderFeesResponse = GetOrderFeesResponses[keyof GetOrderFeesResponses];
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
        status?: OrdersOrderIdMessagesGetParametersStatus;
        page?: number;
        limit?: number;
    };
    url: '/orders/{order_id}/messages';
};
export type GetOrderMessagesResponses = {
    200: OrderMessages;
};
export type GetOrderMessagesResponse = GetOrderMessagesResponses[keyof GetOrderMessagesResponses];
export type GetOrderProductsData = {
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
    url: '/orders/{order_id}/products';
};
export type GetOrderProductsResponses = {
    200: Array<OrderProducts>;
};
export type GetOrderProductsResponse = GetOrderProductsResponses[keyof GetOrderProductsResponses];
export type GetOrderProductData = {
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
export type GetOrderProductResponses = {
    200: OrderProducts;
};
export type GetOrderProductResponse = GetOrderProductResponses[keyof GetOrderProductResponses];
export type DeleteOrderShipmentsData = {
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
export type DeleteOrderShipmentsResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteOrderShipmentsResponse = DeleteOrderShipmentsResponses[keyof DeleteOrderShipmentsResponses];
export type GetOrderShipmentsData = {
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
export type GetOrderShipmentsResponses = {
    200: Array<OrderShipment>;
};
export type GetOrderShipmentsResponse = GetOrderShipmentsResponses[keyof GetOrderShipmentsResponses];
export type CreateOrderShipmentsData = {
    body?: OrderShipmentPost;
    headers: {
        Accept: string;
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
export type GetOrderShipmentsCountData = {
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
export type GetOrderShipmentsCountResponses = {
    200: OrderCount;
};
export type GetOrderShipmentsCountResponse = GetOrderShipmentsCountResponses[keyof GetOrderShipmentsCountResponses];
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
    204: {
        [key: string]: unknown;
    };
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
    body?: OrderShipmentPut;
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
export type UpdateOrderShipmentResponses = {
    200: OrderShipment;
};
export type UpdateOrderShipmentResponse = UpdateOrderShipmentResponses[keyof UpdateOrderShipmentResponses];
export type GetOrderShippingAddressesData = {
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
export type GetOrderShippingAddressesResponses = {
    200: Array<OrderShippingAddress>;
};
export type GetOrderShippingAddressesResponse = GetOrderShippingAddressesResponses[keyof GetOrderShippingAddressesResponses];
export type GetOrderShippingAddressData = {
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
export type GetOrderShippingAddressResponses = {
    200: OrderShippingAddress;
};
export type GetOrderShippingAddressResponse = GetOrderShippingAddressResponses[keyof GetOrderShippingAddressResponses];
export type UpdateOrderShippingAddressData = {
    body?: ShippingAddressPut;
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
export type UpdateOrderShippingAddressErrors = {
    400: Array<OrdersOrderIdShippingAddressesIdPutResponsesContentApplicationJsonSchemaItems>;
    404: Array<OrdersOrderIdShippingAddressesIdPutResponsesContentApplicationJsonSchemaItems>;
};
export type UpdateOrderShippingAddressError = UpdateOrderShippingAddressErrors[keyof UpdateOrderShippingAddressErrors];
export type UpdateOrderShippingAddressResponses = {
    200: OrderShippingAddress;
};
export type UpdateOrderShippingAddressResponse = UpdateOrderShippingAddressResponses[keyof UpdateOrderShippingAddressResponses];
export type GetOrderShippingAddressShippingQuotesData = {
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
export type GetOrderShippingAddressShippingQuotesResponses = {
    200: ShippingQuotesBase;
};
export type GetOrderShippingAddressShippingQuotesResponse = GetOrderShippingAddressShippingQuotesResponses[keyof GetOrderShippingAddressShippingQuotesResponses];
export type GetOrderStatusesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/order_statuses';
};
export type GetOrderStatusesResponses = {
    200: Array<OrderStatusBase>;
};
export type GetOrderStatusesResponse = GetOrderStatusesResponses[keyof GetOrderStatusesResponses];
export type GetOrderStatusesStatusData = {
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
export type GetOrderStatusesStatusResponses = {
    200: OrderStatusBase;
};
export type GetOrderStatusesStatusResponse = GetOrderStatusesStatusResponses[keyof GetOrderStatusesStatusResponses];
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
