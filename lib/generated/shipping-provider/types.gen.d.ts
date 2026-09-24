export type ClientOptions = {
    baseUrl: 'https://{app_domain}' | (string & {});
};
export type BaseOptionsOriginAddressType = 'RESIDENTIAL' | 'COMMERCIAL';
export type BaseOptionsOrigin = {
    street_1?: string;
    street_2?: string;
    zip: string;
    city?: string;
    state_iso2?: string;
    country_iso2: string;
    address_type?: BaseOptionsOriginAddressType;
};
export type BaseOptionsDestinationAddressType = 'RESIDENTIAL' | 'COMMERCIAL';
export type FormFieldValue = {
    id?: string;
    value?: string;
};
export type BaseOptionsDestination = {
    street_1?: string;
    street_2?: string;
    zip: string;
    city?: string;
    state_iso2?: string;
    country_iso2: string;
    address_type?: BaseOptionsDestinationAddressType;
    form_fields?: {
        [key: string]: FormFieldValue;
    };
};
export type BaseOptionsItemsItemsLengthUnits = 'cm' | 'in';
export type BaseOptionsItemsItemsLength = {
    units: BaseOptionsItemsItemsLengthUnits;
    value: number;
};
export type BaseOptionsItemsItemsWidthUnits = 'cm' | 'in';
export type BaseOptionsItemsItemsWidth = {
    units: BaseOptionsItemsItemsWidthUnits;
    value: number;
};
export type BaseOptionsItemsItemsHeightUnits = 'cm' | 'in';
export type BaseOptionsItemsItemsHeight = {
    units: BaseOptionsItemsItemsHeightUnits;
    value: number;
};
export type BaseOptionsItemsItemsWeightUnits = 'oz' | 'g';
export type BaseOptionsItemsItemsWeight = {
    units: BaseOptionsItemsItemsWeightUnits;
    value: number;
};
export type BaseOptionsItemsItemsDiscountedPrice = {
    currency: string;
    amount: number;
};
export type BaseOptionsItemsItemsDeclaredValue = {
    currency: string;
    amount: number;
};
export type BaseOptionsItemsItemsAttributesItemsResourceType = 'product' | 'variant';
export type BaseOptionsItemsItemsAttributesItemsAttributeType = 'metafield';
export type BaseOptionsItemsItemsAttributesItems = {
    key?: string;
    value?: string;
    namespace?: string;
    resource_type?: BaseOptionsItemsItemsAttributesItemsResourceType;
    resource_id?: string;
    attribute_type?: BaseOptionsItemsItemsAttributesItemsAttributeType;
};
export type BaseOptionsItemsItems = {
    sku?: string;
    variant_id?: string;
    product_id?: string;
    name?: string;
    length?: BaseOptionsItemsItemsLength;
    width?: BaseOptionsItemsItemsWidth;
    height?: BaseOptionsItemsItemsHeight;
    weight?: BaseOptionsItemsItemsWeight;
    discounted_price?: BaseOptionsItemsItemsDiscountedPrice;
    declared_value?: BaseOptionsItemsItemsDeclaredValue;
    quantity?: number;
    attributes?: Array<BaseOptionsItemsItemsAttributesItems>;
};
export type BaseOptionsCustomerCustomerGroupsItems = {
    customer_group_id?: number;
    customer_group_name?: string;
};
export type BaseOptionsCustomer = {
    customer_groups?: Array<BaseOptionsCustomerCustomerGroupsItems>;
    customer_id?: number;
};
export type BaseOptionsRequestContextReferenceValuesItems = {
    name?: string;
    value?: string;
};
export type BaseOptionsRequestContext = {
    reference_values?: Array<BaseOptionsRequestContextReferenceValuesItems>;
};
export type BaseOptions = {
    origin: BaseOptionsOrigin;
    destination: BaseOptionsDestination;
    items: Array<BaseOptionsItemsItems>;
    customer?: BaseOptionsCustomer;
    store_id: string;
    request_context?: BaseOptionsRequestContext;
};
export type ZoneOptionsInstance = {
    [key: string]: unknown;
};
export type ConnectionOptionsInstance = {
    [key: string]: unknown;
};
export type RateOptionsInstanceItems = {
    key: string;
    value: string;
};
export type RateOptionsInstance = Array<RateOptionsInstanceItems>;
export type RateRequestPayload = {
    base_options: BaseOptions;
    zone_options?: ZoneOptionsInstance;
    connection_options?: ConnectionOptionsInstance;
    rate_options?: RateOptionsInstance;
};
export type RateResponsePayloadMessagesItemsType = 'INFO' | 'WARNING' | 'ERROR';
export type RateResponsePayloadMessagesItems = {
    text: string;
    type: RateResponsePayloadMessagesItemsType;
};
export type RateResponsePayloadCarrierQuotesItemsCarrierInfo = {
    code: string;
    display_name: string;
};
export type RateResponsePayloadCarrierQuotesItemsQuotesItemsCost = {
    currency: string;
    amount: number;
};
export type RateResponsePayloadCarrierQuotesItemsQuotesItemsMessagesItemsType = 'INFO' | 'WARNING' | 'ERROR';
export type RateResponsePayloadCarrierQuotesItemsQuotesItemsMessagesItems = {
    text: string;
    type: RateResponsePayloadCarrierQuotesItemsQuotesItemsMessagesItemsType;
};
export type RateResponsePayloadCarrierQuotesItemsQuotesItemsDiscountedCost = {
    currency: string;
    amount: number;
};
export type RateResponsePayloadCarrierQuotesItemsQuotesItemsTransitTimeUnits = 'BUSINESS_DAYS' | 'DAYS' | 'HOURS';
export type RateResponsePayloadCarrierQuotesItemsQuotesItemsTransitTime = {
    units?: RateResponsePayloadCarrierQuotesItemsQuotesItemsTransitTimeUnits;
    duration?: number;
};
export type RateResponsePayloadCarrierQuotesItemsQuotesItems = {
    code: string;
    display_name: string;
    cost: RateResponsePayloadCarrierQuotesItemsQuotesItemsCost;
    messages?: Array<RateResponsePayloadCarrierQuotesItemsQuotesItemsMessagesItems>;
    description?: string;
    rate_id?: string;
    discounted_cost?: RateResponsePayloadCarrierQuotesItemsQuotesItemsDiscountedCost;
    dispatch_date?: string;
    transit_time?: RateResponsePayloadCarrierQuotesItemsQuotesItemsTransitTime;
};
export type RateResponsePayloadCarrierQuotesItems = {
    carrier_info?: RateResponsePayloadCarrierQuotesItemsCarrierInfo;
    quotes: Array<RateResponsePayloadCarrierQuotesItemsQuotesItems>;
};
export type RateResponsePayload = {
    quote_id: string;
    ttl?: number;
    messages: Array<RateResponsePayloadMessagesItems>;
    carrier_quotes: Array<RateResponsePayloadCarrierQuotesItems>;
};
export type CheckConnectionOptionsRequestPayload = {
    connection_options: ConnectionOptionsInstance;
};
export type CheckConnectionOptionsResponsePayloadMessagesItemsType = 'INFO' | 'WARNING' | 'ERROR';
export type CheckConnectionOptionsResponsePayloadMessagesItems = {
    text: string;
    type: CheckConnectionOptionsResponsePayloadMessagesItemsType;
};
export type CheckConnectionOptionsResponsePayload = {
    valid?: boolean;
    messages?: Array<CheckConnectionOptionsResponsePayloadMessagesItems>;
};
export type RequestShippingRatesData = {
    body?: RateRequestPayload;
    path?: never;
    query?: never;
    url: '/rate';
};
export type RequestShippingRatesResponses = {
    200: RateResponsePayload;
};
export type RequestShippingRatesResponse = RequestShippingRatesResponses[keyof RequestShippingRatesResponses];
export type ValidateConnectionOptionsData = {
    body?: CheckConnectionOptionsRequestPayload;
    path?: never;
    query?: never;
    url: '/check_connection_options';
};
export type ValidateConnectionOptionsResponses = {
    200: CheckConnectionOptionsResponsePayload;
};
export type ValidateConnectionOptionsResponse = ValidateConnectionOptionsResponses[keyof ValidateConnectionOptionsResponses];
