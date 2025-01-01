export type AttributeValue = {
    key?: string;
    value?: string;
    namespace?: string;
    resource_type?: 'product' | 'variant';
    resource_id?: string;
    attribute_type?: 'metafield';
};
export type resource_type = 'product' | 'variant';
export type attribute_type = 'metafield';
export type BaseOptions = {
    origin: {
        street_1?: string;
        street_2?: string;
        zip: string;
        city?: string;
        state_iso2?: string;
        country_iso2: string;
        address_type?: 'RESIDENTIAL' | 'COMMERCIAL';
    };
    destination: {
        street_1?: string;
        street_2?: string;
        zip: string;
        city?: string;
        state_iso2?: string;
        country_iso2: string;
        address_type?: 'RESIDENTIAL' | 'COMMERCIAL';
        form_fields?: {
            '<form field global ID>'?: FormFieldValue;
        };
    };
    items: Array<{
        sku?: string;
        variant_id?: string;
        product_id?: string;
        name?: string;
        length?: {
            units: 'cm' | 'in';
            value: number;
        };
        width?: {
            units: 'cm' | 'in';
            value: number;
        };
        height?: {
            units: 'cm' | 'in';
            value: number;
        };
        weight?: {
            units: 'oz' | 'g';
            value: number;
        };
        discounted_price?: {
            currency: string;
            amount: number;
        };
        declared_value?: {
            currency: string;
            amount: number;
        };
        quantity?: number;
        attributes?: Array<{
            key?: string;
            value?: string;
            namespace?: string;
            resource_type?: 'product' | 'variant';
            resource_id?: string;
            attribute_type?: 'metafield';
        }>;
    }>;
    customer?: {
        customer_groups?: Array<{
            customer_group_id?: number;
            customer_group_name?: string;
        }>;
        customer_id?: number;
    };
    store_id: string;
    request_context?: {
        reference_values?: Array<{
            name?: string;
            value?: string;
        }>;
    };
};
export type address_type = 'RESIDENTIAL' | 'COMMERCIAL';
export type BaseOptionsSchema = {
    base_options: {
        origin: {
            street_1?: string;
            street_2?: string;
            zip: string;
            city?: string;
            state_iso2?: string;
            country_iso2: string;
            address_type?: 'RESIDENTIAL' | 'COMMERCIAL';
        };
        destination: {
            street_1?: string;
            street_2?: string;
            zip: string;
            city?: string;
            state_iso2?: string;
            country_iso2: string;
            address_type?: 'RESIDENTIAL' | 'COMMERCIAL';
        };
        items: Array<{
            sku?: string;
            variant_id?: string;
            product_id?: string;
            name?: string;
            length?: {
                units: 'cm' | 'in';
                value: number;
            };
            width?: {
                units: 'cm' | 'in';
                value: number;
            };
            height?: {
                units: 'cm' | 'in';
                value: number;
            };
            weight?: {
                units: 'oz' | 'g';
                value: number;
            };
            discounted_price?: {
                currency: string;
                amount: number;
            };
            declared_value?: {
                currency: string;
                amount: number;
            };
            quantity?: number;
            attributes?: Array<{
                key?: string;
                value?: string;
                namespace?: string;
                resource_type?: 'product' | 'variant';
                resource_id?: string;
                attribute_type?: 'metafield';
            }>;
        }>;
        customer?: {
            customer_groups?: Array<{
                customer_group_id?: number;
                customer_group_name?: string;
            }>;
            customer_id?: number;
        };
        store_id: string;
        request_context?: {
            reference_values?: Array<{
                name?: string;
                value?: string;
            }>;
        };
    };
    zone_options?: ZoneOptionsInstance;
    connection_options?: ConnectionOptionsInstance;
};
export type CarrierQuoteObject = {
    carrier_info?: {
        code: string;
        display_name: string;
    };
    quotes: Array<{
        code: string;
        display_name: string;
        cost: {
            currency: string;
            amount: number;
        };
        messages?: Array<{
            text: string;
            type: 'INFO' | 'WARNING' | 'ERROR';
        }>;
        description?: string;
        rate_id?: string;
        discounted_cost?: {
            currency: string;
            amount: number;
        };
        dispatch_date?: string;
        transit_time?: {
            units?: 'BUSINESS_DAYS' | 'DAYS' | 'HOURS';
            duration?: number;
        };
    }>;
};
export type CheckConnectionOptionsRequestPayload = {
    connection_options: ConnectionOptionsInstance;
};
export type CheckConnectionOptionsResponsePayload = {
    valid?: boolean;
    messages?: Array<{
        text: string;
        type: 'INFO' | 'WARNING' | 'ERROR';
    }>;
};
export type ConnectionOptionsInstance = {
    [key: string]: unknown;
};
export type CustomerDetails = {
    customer_groups?: Array<{
        customer_group_id?: number;
        customer_group_name?: string;
    }>;
    customer_id?: number;
};
export type CustomerGroup = {
    customer_group_id?: number;
    customer_group_name?: string;
};
export type DateRange = {
    from?: {
        date?: string;
        timezone?: string;
    };
    to?: {
        date?: string;
        timezone?: string;
    };
};
export type DateValue = {
    date?: string;
    timezone?: string;
};
export type DimensionValue = {
    units: 'cm' | 'in';
    value: number;
};
export type units = 'cm' | 'in';
export type FormFieldValue = string;
export type KeyValuePair = {
    key: string;
    value: string;
};
export type KeyValuePairSchema = {
    code: string;
    label: string;
    description?: string;
    validation?: string;
    type: 'date' | 'string' | 'select' | 'code';
    default_value: string;
    value_options?: Array<(string)>;
    date_ranges?: Array<{
        from?: {
            date?: string;
            timezone?: string;
        };
        to?: {
            date?: string;
            timezone?: string;
        };
    }>;
};
export type type = 'date' | 'string' | 'select' | 'code';
export type Message = {
    text: string;
    type: 'INFO' | 'WARNING' | 'ERROR';
};
export type type2 = 'INFO' | 'WARNING' | 'ERROR';
export type MoneyValue = {
    currency: string;
    amount: number;
};
export type RateOptionsInstance = Array<{
    key: string;
    value: string;
}>;
export type RateOptionsSchema = Array<{
    code: string;
    label: string;
    description?: string;
    validation?: string;
    type: 'date' | 'string' | 'select' | 'code';
    default_value: string;
    value_options?: Array<(string)>;
    date_ranges?: Array<{
        from?: {
            date?: string;
            timezone?: string;
        };
        to?: {
            date?: string;
            timezone?: string;
        };
    }>;
}>;
export type RateQuoteObject = {
    code: string;
    display_name: string;
    cost: {
        currency: string;
        amount: number;
    };
    messages?: Array<{
        text: string;
        type: 'INFO' | 'WARNING' | 'ERROR';
    }>;
    description?: string;
    rate_id?: string;
    discounted_cost?: {
        currency: string;
        amount: number;
    };
    dispatch_date?: string;
    transit_time?: {
        units?: 'BUSINESS_DAYS' | 'DAYS' | 'HOURS';
        duration?: number;
    };
};
export type units2 = 'BUSINESS_DAYS' | 'DAYS' | 'HOURS';
export type RateRequestItem = {
    sku?: string;
    variant_id?: string;
    product_id?: string;
    name?: string;
    length?: {
        units: 'cm' | 'in';
        value: number;
    };
    width?: {
        units: 'cm' | 'in';
        value: number;
    };
    height?: {
        units: 'cm' | 'in';
        value: number;
    };
    weight?: {
        units: 'oz' | 'g';
        value: number;
    };
    discounted_price?: {
        currency: string;
        amount: number;
    };
    declared_value?: {
        currency: string;
        amount: number;
    };
    quantity?: number;
    attributes?: Array<{
        key?: string;
        value?: string;
        namespace?: string;
        resource_type?: 'product' | 'variant';
        resource_id?: string;
        attribute_type?: 'metafield';
    }>;
};
export type RateRequestPayload = {
    base_options: BaseOptions;
    zone_options?: ZoneOptionsInstance;
    connection_options?: ConnectionOptionsInstance;
};
export type RateResponsePayload = {
    quote_id: string;
    messages: Array<{
        text: string;
        type: 'INFO' | 'WARNING' | 'ERROR';
    }>;
    carrier_quotes: Array<{
        carrier_info?: {
            code: string;
            display_name: string;
        };
        quotes: Array<{
            code: string;
            display_name: string;
            cost: {
                currency: string;
                amount: number;
            };
            messages?: Array<{
                text: string;
                type: 'INFO' | 'WARNING' | 'ERROR';
            }>;
            description?: string;
            rate_id?: string;
            discounted_cost?: {
                currency: string;
                amount: number;
            };
            dispatch_date?: string;
            transit_time?: {
                units?: 'BUSINESS_DAYS' | 'DAYS' | 'HOURS';
                duration?: number;
            };
        }>;
    }>;
};
export type ReferenceValue = {
    name?: string;
    value?: string;
};
export type RequestContext = {
    reference_values?: Array<{
        name?: string;
        value?: string;
    }>;
};
export type ShippingAddress = {
    street_1?: string;
    street_2?: string;
    zip: string;
    city?: string;
    state_iso2?: string;
    country_iso2: string;
    address_type?: 'RESIDENTIAL' | 'COMMERCIAL';
};
export type TransitTimeObject = {
    units?: 'BUSINESS_DAYS' | 'DAYS' | 'HOURS';
    duration?: number;
};
export type WeightValue = {
    units: 'oz' | 'g';
    value: number;
};
export type units3 = 'oz' | 'g';
export type ZoneOptionsInstance = {
    [key: string]: unknown;
};
export type RequestShippingRatesData = {
    body: RateRequestPayload;
};
export type RequestShippingRatesResponse = (RateResponsePayload);
export type RequestShippingRatesError = unknown;
export type ValidateConnectionOptionsData = {
    body: CheckConnectionOptionsRequestPayload;
};
export type ValidateConnectionOptionsResponse = (CheckConnectionOptionsResponsePayload);
export type ValidateConnectionOptionsError = unknown;
