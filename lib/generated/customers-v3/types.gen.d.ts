export type _metaCollection = {
    pagination?: Pagination;
};
export type address_Full = {
    first_name: string;
    last_name: string;
    company?: string;
    address1: string;
    address2?: string;
    city: string;
    state_or_province: string;
    postal_code: string;
    country_code: string;
    phone?: string;
    address_type?: 'residential' | 'commercial';
    customer_id: number;
    id: number;
    country?: string;
    form_fields?: Array<(formFieldValue)>;
};
export type address_type = 'residential' | 'commercial';
export type address_Post = {
    first_name: string;
    last_name: string;
    company?: string;
    address1: string;
    address2?: string;
    city: string;
    state_or_province: string;
    postal_code: string;
    country_code: string;
    phone?: string;
    address_type?: 'residential' | 'commercial';
    customer_id: number;
    form_fields?: Array<formFieldValue>;
};
export type address_Put = {
    first_name?: string;
    last_name?: string;
    company?: string;
    address1?: string;
    address2?: string;
    city?: string;
    state_or_province?: string;
    postal_code?: string;
    country_code?: string;
    phone?: string;
    address_type?: 'residential' | 'commercial';
    id: number;
    form_fields?: Array<formFieldValue>;
};
export type attribute_Full = {
    attribute_id?: number;
    attribute_value?: string;
    customer_id?: number;
    date_created?: string;
    date_modified?: string;
    id?: number;
};
export type attribute_Post = {
    name: string;
    type: 'string' | 'number' | 'date';
};
export type type = 'string' | 'number' | 'date';
export type attribute_Put = {
    name: string;
    id: number;
};
export type attributeValue_Base = {
    id?: number;
    attribute_id: number;
    value: string;
    customer_id: number;
};
export type BankAccountInstrument = {
    type?: 'stored_bank_account';
    token?: string;
    is_default?: boolean;
    masked_account_number?: string;
    issuer?: string;
};
export type type2 = 'stored_bank_account';
export type BillingAddress = {
    first_name?: string;
    last_name?: string;
    email?: string;
    company?: string;
    address1?: string;
    address2?: string;
    city?: string;
    postal_code?: string;
    state_or_province?: string;
    state_or_province_code?: string;
    country_code?: string;
    phone?: string;
};
export type CardInstrument = {
    type?: 'stored_card';
    token?: string;
    is_default?: boolean;
    brand?: string;
    expiry_month?: number;
    expiry_year?: number;
    issuer_identification_number?: string;
    last_4?: string;
    billing_address?: BillingAddress;
};
export type type3 = 'stored_card';
export type CollectionMeta = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
        links?: {
            previous?: string;
            current?: string;
            next?: string;
        };
    };
    [key: string]: unknown;
};
export type consent_Full = {
    allow?: consentAllow;
    deny?: Deny;
    updated_at?: string;
};
export type consentAllow = Array<('essential' | 'functional' | 'analytics' | 'targeting')>;
export type customer_Full = {
    email?: string;
    first_name?: string;
    last_name?: string;
    company?: string;
    phone?: string;
    registration_ip_address?: string;
    notes?: string;
    tax_exempt_category?: string;
    customer_group_id?: number;
    id?: number;
    date_modified?: string;
    date_created?: string;
    address_count?: number;
    attribute_count?: number;
    authentication?: {
        force_password_reset?: boolean;
    };
    addresses?: Array<address_Full>;
    attributes?: Array<attribute_Full>;
    form_fields?: Array<formFieldValue_Customer>;
    store_credit_amounts?: CustomerStoredCreditAmounts;
    accepts_product_review_abandoned_cart_emails?: boolean;
    origin_channel_id?: number;
    channel_ids?: customerChannelIds;
};
export type customer_Post = {
    email: string;
    first_name: string;
    last_name: string;
    company?: string;
    phone?: string;
    notes?: string;
    tax_exempt_category?: string;
    customer_group_id?: number;
    addresses?: Array<customerAddresses_CustomerPost>;
    attributes?: Array<customerAttributes_Base>;
    authentication?: customerAuthentication_PostPut;
    accepts_product_review_abandoned_cart_emails?: boolean;
    store_credit_amounts?: CustomerStoredCreditAmounts;
    origin_channel_id?: number;
    channel_ids?: Array<(number)>;
    form_fields?: Array<formFieldValue>;
    trigger_account_created_notification?: boolean;
};
export type customer_Put = {
    email?: string;
    first_name?: string;
    last_name?: string;
    company?: string;
    phone?: string;
    registration_ip_address?: string;
    notes?: string;
    tax_exempt_category?: string;
    customer_group_id?: number;
    id: number;
    authentication?: customerAuthentication_PostPut;
    accepts_product_review_abandoned_cart_emails?: boolean;
    store_credit_amounts?: CustomerStoredCreditAmounts;
    origin_channel_id?: number;
    channel_ids?: Array<(number)>;
    form_fields?: Array<formFieldValue>;
};
export type customerAddresses_Base = {
    first_name: string;
    last_name: string;
    company?: string;
    address1: string;
    address2?: string;
    city: string;
    state_or_province?: string;
    postal_code?: string;
    country_code: string;
    phone?: string;
    address_type?: 'residential' | 'commercial';
};
export type customerAddresses_CustomerPost = {
    first_name: string;
    last_name: string;
    company?: string;
    address1: string;
    address2?: string;
    city: string;
    state_or_province?: string;
    postal_code?: string;
    country_code: string;
    phone?: string;
    address_type?: 'residential' | 'commercial';
    form_fields?: Array<(formFieldValue)>;
};
export type customerAttributes_Base = {
    attribute_id?: number;
    attribute_value?: string;
};
export type customerAuthentication_PostPut = {
    force_password_reset?: boolean;
    new_password?: string;
};
export type customerChannelIds = Array<unknown>;
export type CustomerChannelSettingsObject = {
    privacy_settings?: {
        ask_shopper_for_tracking_consent?: boolean;
        policy_url?: string;
    };
    customer_group_settings?: {
        guest_customer_group_id?: number;
        default_customer_group_id?: number;
    };
    allow_global_logins?: boolean;
};
export type CustomerSettingsObject = {
    privacy_settings?: {
        ask_shopper_for_tracking_consent?: boolean;
        policy_url?: string;
    };
    customer_group_settings?: {
        guest_customer_group_id?: number;
        default_customer_group_id?: number;
    };
};
export type CustomerStoredCreditAmounts = Array<{
    amount?: number;
}>;
export type DeclareCustomerConsentRequest = {
    allow?: consentAllow;
    deny?: Deny;
};
export type Deny = Array<('essential' | 'functional' | 'analytics' | 'targeting')>;
export type Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: {
        [key: string]: (string);
    };
};
export type Failed = number;
export type formFieldValue = {
    name: string;
    value: (string | number | Array<(string)>);
};
export type formFieldValue_Address = {
    name: string;
    value: (string | number | Array<(string)>);
    address_id: number;
};
export type formFieldValue_Customer = {
    name: string;
    value: (string | number | Array<(string)>);
    customer_id: number;
};
export type formFieldValue_Full = formFieldValue_Customer | formFieldValue_Address;
export type Links = {
    previous?: string;
    current?: string;
    next?: string;
};
export type metaCollection_Full = {
    pagination?: pagination_Full;
};
export type metaEmpty_Full = {
    [key: string]: unknown;
};
export type Metafield = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description: string;
    resource_type: 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
    readonly resource_id: number;
    id: number;
    date_created: string;
    date_modified: string;
    readonly owner_client_id?: string;
};
export type permission_set = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type resource_type = 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
export type metafield_Base = {
    key: string;
    value: string;
    namespace: string;
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type metafield_Full = {
    readonly id?: number;
} & metafield_Base & {
    resource_type?: 'category' | 'brand' | 'product' | 'variant' | 'customer';
    resource_id?: number;
    readonly date_created?: string;
    readonly date_modified?: string;
};
export type resource_type2 = 'category' | 'brand' | 'product' | 'variant' | 'customer';
export type MetafieldBase_Post = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetafieldBase_Put = {
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<(number)>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type MetaFieldCollectionPostPutResponses = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
};
export type MetaFieldCollectionResponsePartialSuccess_DELETE = {
    data?: Array<(number)>;
    errors?: Array<Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccess_POST_PUT = {
    data?: Array<Metafield>;
    errors?: Array<Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type Pagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: Links;
};
export type pagination_Full = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: {
        previous?: string;
        current?: string;
        next?: string;
    };
};
export type ParametercustomerId = number;
export type Parameterdate_created_max = string;
export type Parameterdate_created_min = string;
export type Parameterdate_modified_max = string;
export type Parameterdate_modified_min = string;
export type ParameterDirectionParam = 'asc' | 'desc';
export type ParameterIncludeFieldsParamMetafields = Array<('resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified')>;
export type ParameterLimitParam = number;
export type ParametermetafieldId = number;
export type ParameterMetafieldKeyInParam = Array<(string)>;
export type ParameterMetafieldKeyParam = string;
export type ParameterMetafieldNamespaceInParam = Array<(string)>;
export type ParameterMetafieldNamespaceParam = string;
export type ParameterPageParam = number;
export type PayPalAccountInstrument = {
    type?: 'stored_paypal_account';
    token?: string;
    is_default?: boolean;
    email?: string;
};
export type type4 = 'stored_paypal_account';
export type Success = number;
export type Total = number;
export type ValidateCustomerCredentialsObject = {
    email: string;
    password: string;
    channel_id?: number;
};
export type ValidateCustomerCredentialsResponseObject = {
    customer_id?: (number) | null;
    is_valid?: boolean;
};
export type WriteCollectionPartialSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type GetCustomersData = {
    query?: {
        'company:in'?: Array<(string)>;
        'customer_group_id:in'?: Array<(string)>;
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        'email:in'?: Array<(string)>;
        'id:in'?: Array<(number)>;
        include?: Array<('addresses' | 'storecredit' | 'attributes' | 'formfields' | 'shopper_profile_id' | 'segment_ids')>;
        limit?: number;
        'name:in'?: Array<(string)>;
        'name:like'?: Array<(string)>;
        page?: number;
        'phone:in'?: string;
        'registration_ip_address:in'?: Array<(number)>;
        sort?: 'date_created:asc' | 'date_created:desc' | 'last_name:asc' | 'last_name:desc' | 'date_modified:asc' | 'date_modified:desc';
    };
};
export type GetCustomersResponse = ({
    data?: Array<customer_Full>;
    meta?: _metaCollection;
});
export type GetCustomersError = (Error);
export type CreateCustomersData = {
    body: Array<customer_Post>;
};
export type CreateCustomersResponse = ({
    data?: Array<customer_Full>;
    meta?: _metaCollection;
});
export type CreateCustomersError = (unknown | ErrorResponse);
export type UpdateCustomersData = {
    body?: Array<customer_Put>;
};
export type UpdateCustomersResponse = ({
    data?: Array<customer_Full>;
    meta?: _metaCollection;
});
export type UpdateCustomersError = (unknown | ErrorResponse);
export type DeleteCustomersData = {
    query: {
        'id:in': Array<(number)>;
    };
};
export type DeleteCustomersResponse = (void);
export type DeleteCustomersError = (Error);
export type GetCustomersAddressesData = {
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    query?: {
        'company:in'?: Array<(string)>;
        'customer_id:in'?: Array<(number)>;
        'id:in'?: Array<(number)>;
        include?: Array<('formfields')>;
        limit?: number;
        'name:in'?: Array<(string)>;
        page?: number;
    };
};
export type GetCustomersAddressesResponse = ({
    data?: Array<{
        address1: string;
        address2?: string;
        address_type?: 'residential' | 'commercial';
        city: string;
        company?: string;
        country?: string;
        country_code: string;
        customer_id: number;
        first_name: string;
        id: number;
        last_name: string;
        phone?: string;
        postal_code: string;
        state_or_province: string;
        form_fields?: Array<(formFieldValue_Address)>;
    }>;
    meta?: _metaCollection;
});
export type GetCustomersAddressesError = unknown;
export type CreateCustomersAddressesData = {
    body: Array<address_Post>;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
};
export type CreateCustomersAddressesResponse = (({
    data?: Array<{
        address1?: string;
        address2?: string;
        address_type?: 'residential' | 'commercial';
        city?: string;
        company?: string;
        country?: string;
        country_code?: string;
        customer_id?: number;
        first_name?: string;
        id?: number;
        last_name?: string;
        phone?: string;
        postal_code?: string;
        state_or_province?: string;
        form_fields?: Array<formFieldValue_Full>;
    }>;
    meta?: MetaOpen;
} | {
    [key: string]: unknown;
} | {
    data?: Array<{
        address1?: string;
        address2?: string;
        address_type?: 'residential' | 'commercial';
        city?: string;
        company?: string;
        country?: string;
        country_code?: string;
        customer_id?: number;
        first_name?: string;
        id?: number;
        last_name?: string;
        phone?: string;
        postal_code?: string;
        state_or_province?: string;
        form_fields?: Array<(formFieldValue_Address)>;
    }>;
    meta?: MetaOpen;
}));
export type CreateCustomersAddressesError = (ErrorResponse);
export type UpdateCustomersAddressesData = {
    body: Array<address_Put>;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
};
export type UpdateCustomersAddressesResponse = (({
    data?: Array<{
        address1?: string;
        address2?: string;
        address_type?: 'residential' | 'commercial';
        city?: string;
        company?: string;
        country?: string;
        country_code?: string;
        customer_id?: number;
        first_name?: string;
        id?: number;
        last_name?: string;
        phone?: string;
        postal_code?: string;
        state_or_province?: string;
        form_fields?: Array<formFieldValue_Full>;
    }>;
    meta?: MetaOpen;
} | {
    [key: string]: unknown;
} | {
    data?: Array<{
        address1?: string;
        address2?: string;
        address_type?: 'residential' | 'commercial';
        city?: string;
        company?: string;
        country?: string;
        country_code?: string;
        customer_id?: number;
        first_name?: string;
        id?: number;
        last_name?: string;
        phone?: string;
        postal_code?: string;
        state_or_province?: string;
        form_fields?: Array<(formFieldValue_Address)>;
    }>;
    meta?: MetaOpen;
}));
export type UpdateCustomersAddressesError = (ErrorResponse);
export type DeleteCustomersAddressesData = {
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    query: {
        'id:in': Array<(number)>;
    };
};
export type DeleteCustomersAddressesResponse = (void);
export type DeleteCustomersAddressesError = unknown;
export type ValidateCustomerCredentialsData = {
    body: ValidateCustomerCredentialsObject;
};
export type ValidateCustomerCredentialsResponse = (ValidateCustomerCredentialsResponseObject);
export type ValidateCustomerCredentialsError = (ErrorResponse);
export type GetCustomersSettingsResponse = ({
    data?: CustomerSettingsObject;
    meta?: {
        [key: string]: unknown;
    };
});
export type GetCustomersSettingsError = unknown;
export type UpdateCustomersSettingsData = {
    body: CustomerSettingsObject;
};
export type UpdateCustomersSettingsResponse = ({
    data?: CustomerSettingsObject;
    meta?: {
        [key: string]: unknown;
    };
});
export type UpdateCustomersSettingsError = unknown;
export type GetCustomersSettingsChannelData = {
    path: {
        channel_id: number;
    };
};
export type GetCustomersSettingsChannelResponse = ({
    data?: CustomerChannelSettingsObject;
    meta?: {
        [key: string]: unknown;
    };
});
export type GetCustomersSettingsChannelError = unknown;
export type UpdateCustomersSettingsChannelData = {
    body: CustomerChannelSettingsObject;
    path: {
        channel_id: number;
    };
};
export type UpdateCustomersSettingsChannelResponse = ({
    data?: CustomerSettingsObject;
    meta?: {
        [key: string]: unknown;
    };
});
export type UpdateCustomersSettingsChannelError = unknown;
export type GetCustomersAttributesData = {
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    query?: {
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        limit?: number;
        name?: string;
        'name:like'?: string;
        page?: number;
        type?: string;
    };
};
export type GetCustomersAttributesResponse = ({
    data?: Array<{
        name: string;
        type: 'string' | 'number' | 'date';
        id: number;
        date_modified?: string;
        date_created?: string;
    }>;
    meta?: MetaOpen;
});
export type GetCustomersAttributesError = unknown;
export type CreateCustomersAttributesData = {
    body: Array<attribute_Post>;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
};
export type CreateCustomersAttributesResponse = ({
    data?: Array<{
        name: string;
        type: 'string' | 'number' | 'date';
        id: number;
        date_modified?: string;
        date_created?: string;
    }>;
    meta?: MetaOpen;
});
export type CreateCustomersAttributesError = (ErrorResponse);
export type UpdateCustomersAttributesData = {
    body: Array<attribute_Put>;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
};
export type UpdateCustomersAttributesResponse = ({
    data?: Array<{
        name: string;
        type: 'string' | 'number' | 'date';
        id: number;
        date_modified?: string;
        date_created?: string;
    }>;
    meta?: MetaOpen;
});
export type UpdateCustomersAttributesError = (ErrorResponse);
export type DeleteCustomersAttributesData = {
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    query: {
        'id:in': Array<(number)>;
    };
};
export type DeleteCustomersAttributesResponse = (void);
export type DeleteCustomersAttributesError = unknown;
export type GetCustomersAttributeValuesData = {
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    query?: {
        'attribute_id:in'?: Array<(number)>;
        'customer_id:in'?: Array<(number)>;
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        limit?: number;
        name?: string;
        page?: number;
    };
};
export type GetCustomersAttributeValuesResponse = ({
    data?: Array<{
        attribute_id: number;
        attribute_value: string;
        id?: number;
        customer_id: number;
        date_modified?: string;
        date_created?: string;
    }>;
    meta?: {
        pagination?: {
            total?: number;
            count?: number;
            per_page?: number;
            current_page?: number;
            total_pages?: number;
            links?: {
                previous?: string;
                current?: string;
                next?: string;
            };
        };
    };
});
export type GetCustomersAttributeValuesError = unknown;
export type UpsertCustomersAttributeValuesData = {
    body: Array<attributeValue_Base>;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
};
export type UpsertCustomersAttributeValuesResponse = ({
    data?: Array<{
        attribute_id: number;
        attribute_value: string;
        id?: number;
        customer_id: number;
        date_modified?: string;
        date_created?: string;
    }>;
    meta?: {
        pagination?: {
            total?: number;
            count?: number;
            per_page?: number;
            current_page?: number;
            total_pages?: number;
            links?: {
                previous?: string;
                current?: string;
                next?: string;
            };
        };
    };
});
export type UpsertCustomersAttributeValuesError = (ErrorResponse);
export type DeleteCustomersAttributeValuesData = {
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    query: {
        'id:in': Array<(number)>;
    };
};
export type DeleteCustomersAttributeValuesResponse = (void);
export type DeleteCustomersAttributeValuesError = unknown;
export type GetCustomersFormFieldValuesData = {
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    query?: {
        address_id?: number;
        customer_id?: number;
        field_name?: string;
        field_type?: 'checkboxes' | 'date' | 'multiline' | 'numbers' | 'password' | 'radiobuttons' | 'text' | 'picklist';
        limit?: number;
        page?: number;
    };
};
export type GetCustomersFormFieldValuesResponse = ({
    data?: Array<(({
        name: string;
        value: (string | number | Array<(string)>);
    } & {
        customer_id: number;
    }) | ({
        name: string;
        value: (string | number | Array<(string)>);
    } & {
        address_id: number;
    }))>;
    meta?: {
        pagination?: {
            total?: number;
            count?: number;
            per_page?: number;
            current_page?: number;
            total_pages?: number;
            links?: {
                previous?: string;
                current?: string;
                next?: string;
            };
        };
    };
});
export type GetCustomersFormFieldValuesError = (ErrorResponse);
export type UpdateCustomerFormFieldValuesData = {
    body?: Array<formFieldValue_Full>;
};
export type UpdateCustomerFormFieldValuesResponse = ({
    data?: Array<(({
        name: string;
        value: (string | number | Array<(string)>);
    } & {
        customer_id: number;
    }) | ({
        name: string;
        value: (string | number | Array<(string)>);
    } & {
        address_id: number;
    }))>;
    meta?: MetaOpen;
});
export type UpdateCustomerFormFieldValuesError = (ErrorResponse);
export type GetCustomerConsentData = {
    path: {
        customerId: number;
    };
};
export type GetCustomerConsentResponse = (consent_Full);
export type GetCustomerConsentError = (ErrorResponse);
export type UpdateCustomerConsentData = {
    body?: DeclareCustomerConsentRequest;
    headers?: {
        'Content-Type'?: string;
    };
    path: {
        customerId: number;
    };
};
export type UpdateCustomerConsentResponse = (consent_Full);
export type UpdateCustomerConsentError = (ErrorResponse);
export type GetCustomerStoredInstrumentsData = {
    path: {
        customerId: number;
    };
};
export type GetCustomerStoredInstrumentsResponse = (Array<(CardInstrument | PayPalAccountInstrument | BankAccountInstrument)>);
export type GetCustomerStoredInstrumentsError = (ErrorResponse);
export type GetCustomersMetafieldsData = {
    path: {
        customerId: number;
    };
};
export type GetCustomersMetafieldsResponse = ({
    items?: {
        readonly id: number;
        key: string;
        value: string;
        namespace: string;
        permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
        resource_type: 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
        readonly resource_id: number;
        description: string;
        date_created: string;
        date_modified: string;
        readonly owner_client_id?: string;
    };
});
export type GetCustomersMetafieldsError = unknown;
export type CreateCustomerMetafieldsData = {
    body: MetafieldBase_Post;
    path: {
        customerId: number;
    };
};
export type CreateCustomerMetafieldsResponse = (MetaFieldCollectionPostPutResponses);
export type CreateCustomerMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | ErrorResponse);
export type GetMetafieldsCustomerIdData = {
    path: {
        customerId: number;
        metafieldId: number;
    };
};
export type GetMetafieldsCustomerIdResponse = ({
    items?: {
        readonly id: number;
        key: string;
        value: string;
        namespace: string;
        permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
        resource_type: 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
        readonly resource_id: number;
        description: string;
        date_created: string;
        date_modified: string;
        readonly owner_client_id?: string;
    };
});
export type GetMetafieldsCustomerIdError = (NotFound);
export type UpdateCustomerMetafieldData = {
    body?: (MetafieldBase_Put & {
        id: number;
    });
    path: {
        customerId: number;
        metafieldId: number;
    };
    query?: {
        metafieldId?: number;
    };
};
export type UpdateCustomerMetafieldResponse = (MetaFieldCollectionPostPutResponses);
export type UpdateCustomerMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | NotFound);
export type DeleteCustomerMetafieldsIdData = {
    path: {
        customerId: number;
        metafieldId: number;
    };
};
export type DeleteCustomerMetafieldsIdResponse = (void);
export type DeleteCustomerMetafieldsIdError = (NotFound);
export type GetAllCustomersMetafieldsData = {
    query?: {
        'date_created:max'?: string;
        'date_created:min'?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        direction?: 'asc' | 'desc';
        include_fields?: Array<('resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified')>;
        key?: string;
        'key:in'?: Array<(string)>;
        limit?: number;
        namespace?: string;
        'namespace:in'?: Array<(string)>;
        page?: number;
    };
};
export type GetAllCustomersMetafieldsResponse = (MetaFieldCollectionResponse);
export type GetAllCustomersMetafieldsError = unknown;
export type CreateCustomersMetafieldsData = {
    body?: Array<(MetafieldBase_Post & {
        resource_id: number;
    })>;
};
export type CreateCustomersMetafieldsResponse = (MetaFieldCollectionPostPutResponses);
export type CreateCustomersMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type UpdateCustomersMetafieldsData = {
    body?: Array<(MetafieldBase_Put & {
        id: number;
    })>;
};
export type UpdateCustomersMetafieldsResponse = (MetaFieldCollectionPostPutResponses);
export type UpdateCustomersMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type DeleteCustomersMetafieldsResponse = (MetaFieldCollectionDeleteResponseSuccess);
export type DeleteCustomersMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_DELETE);
