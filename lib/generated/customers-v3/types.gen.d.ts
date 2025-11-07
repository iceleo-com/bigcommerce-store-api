export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type Pagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: Links;
};
export type CursorPagination = {
    count?: number;
    per_page?: number;
    start_cursor?: string;
    end_cursor?: string;
    links?: Links;
};
export type MetaCollection = {
    pagination?: Pagination;
};
export type MetaCollectionWithCursorPagination = {
    pagination?: Pagination;
    cursor_pagination?: CursorPagination;
};
export type MetaOpen = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: {
        [key: string]: string;
    };
};
export type CustomerFull = {
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
    addresses?: Array<AddressFull>;
    attributes?: Array<AttributeFull>;
    form_fields?: Array<FormFieldValueCustomer>;
    store_credit_amounts?: CustomerStoredCreditAmounts;
    accepts_product_review_abandoned_cart_emails?: boolean;
    origin_channel_id?: number;
    channel_ids?: CustomerChannelIds;
};
export type CustomerPost = {
    email: string;
    first_name: string;
    last_name: string;
    company?: string;
    phone?: string;
    notes?: string;
    tax_exempt_category?: string;
    customer_group_id?: number;
    addresses?: Array<CustomerAddressesCustomerPost>;
    attributes?: Array<CustomerAttributesBase>;
    authentication?: CustomerAuthenticationPostPut;
    accepts_product_review_abandoned_cart_emails?: boolean;
    store_credit_amounts?: CustomerStoredCreditAmounts;
    origin_channel_id?: number;
    channel_ids?: Array<number>;
    form_fields?: Array<FormFieldValue>;
    trigger_account_created_notification?: boolean;
};
export type CustomerPut = {
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
    authentication?: CustomerAuthenticationPostPut;
    accepts_product_review_abandoned_cart_emails?: boolean;
    store_credit_amounts?: CustomerStoredCreditAmounts;
    origin_channel_id?: number;
    channel_ids?: Array<number>;
    form_fields?: Array<FormFieldValue>;
};
export type AttributeValueBase = {
    id?: number;
    attribute_id: number;
    value: string;
    customer_id: number;
};
export type AttributeFull = {
    attribute_id?: number;
    attribute_value?: string;
    customer_id?: number;
    date_created?: string;
    date_modified?: string;
    id?: number;
};
export type AttributePut = {
    name: string;
    id: number;
};
export type AttributePost = {
    name: string;
    type: 'string' | 'number' | 'date';
};
export type AddressFull = {
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
    form_fields?: Array<FormFieldValue>;
};
export type AddressPut = {
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
    form_fields?: Array<FormFieldValue>;
};
export type AddressPost = {
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
    form_fields?: Array<FormFieldValue>;
};
export type CustomerAddressesBase = {
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
export type CustomerAddressesCustomerPost = {
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
    form_fields?: Array<FormFieldValue>;
};
export type CustomerAuthenticationPostPut = {
    force_password_reset?: boolean;
    new_password?: string;
};
export type Links = {
    previous?: string;
    current?: string;
    next?: string;
};
export type FormFieldValue = {
    name: string;
    value: string | number | Array<string>;
};
export type FormFieldValueCustomer = {
    name: string;
    value: string | number | Array<string>;
    customer_id: number;
};
export type FormFieldValueAddress = {
    name: string;
    value: string | number | Array<string>;
    address_id: number;
};
export type FormFieldValueFull = FormFieldValueCustomer | FormFieldValueAddress;
export type ConsentFull = {
    allow?: ConsentAllow;
    deny?: Deny;
    updated_at?: string;
};
export type ConsentAllow = Array<'essential' | 'functional' | 'analytics' | 'targeting'>;
export type Deny = Array<'essential' | 'functional' | 'analytics' | 'targeting'>;
export type DeclareCustomerConsentRequest = {
    allow?: ConsentAllow;
    deny?: Deny;
};
export type CustomerAttributesBase = {
    attribute_id?: number;
    attribute_value?: string;
};
export type CustomerChannelIds = Array<unknown>;
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
export type PayPalAccountInstrument = {
    type?: 'stored_paypal_account';
    token?: string;
    is_default?: boolean;
    email?: string;
};
export type BankAccountInstrument = {
    type?: 'stored_bank_account';
    token?: string;
    is_default?: boolean;
    masked_account_number?: string;
    issuer?: string;
};
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
export type CustomerStoredCreditAmounts = Array<{
    amount?: number;
}>;
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
export type ValidateCustomerCredentialsObject = {
    email: string;
    password: string;
    channel_id?: number;
};
export type ValidateCustomerCredentialsResponseObject = {
    customer_id?: number | null;
    is_valid?: boolean;
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
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionPostPutResponses = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponsePartialSuccessPostPut = {
    data?: Array<Metafield>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccessDelete = {
    data?: Array<number>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
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
export type Total = number;
export type Success = number;
export type Failed = number;
export type _Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
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
    [key: string]: unknown | {
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
    } | undefined;
};
export type MetafieldBasePost = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetafieldBasePut = {
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
};
export type MetafieldFull = {
    readonly id?: number;
} & MetafieldBase & {
    resource_type?: 'category' | 'brand' | 'product' | 'variant' | 'customer';
    resource_id?: number;
    readonly date_created?: string;
    readonly date_modified?: string;
};
export type MetafieldBase = {
    key: string;
    value: string;
    namespace: string;
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type MetaEmptyFull = {
    [key: string]: unknown;
};
export type MetaCollectionFull = {
    pagination?: PaginationFull;
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type PaginationFull = {
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
export type MetaOpenWritable = {
    [key: string]: unknown;
};
export type MetafieldWritable = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description: string;
    resource_type: 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
    id: number;
    date_created: string;
    date_modified: string;
};
export type ErrorDetailWritable = {
    [key: string]: unknown;
};
export type MetafieldFullWritable = MetafieldBase & {
    resource_type?: 'category' | 'brand' | 'product' | 'variant' | 'customer';
    resource_id?: number;
};
export type MetaEmptyFullWritable = {
    [key: string]: unknown;
};
export type MetafieldId = number;
export type CustomerId = number;
export type PageParam = number;
export type MetafieldKeyParam = string;
export type MetafieldKeyInParam = Array<string>;
export type MetafieldNamespaceParam = string;
export type MetafieldNamespaceInParam = Array<string>;
export type LimitParam = number;
export type DateCreatedMin = string;
export type DateCreatedMax = string;
export type DateModifiedMin = string;
export type DateModifiedMax = string;
export type DirectionParam = 'asc' | 'desc';
export type IncludeFieldsParamMetafields = Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified'>;
export type DeleteCustomersData = {
    body?: never;
    path?: never;
    query: {
        'id:in': Array<number>;
    };
    url: '/customers';
};
export type DeleteCustomersErrors = {
    422: _Error;
};
export type DeleteCustomersError = DeleteCustomersErrors[keyof DeleteCustomersErrors];
export type DeleteCustomersResponses = {
    204: void;
};
export type DeleteCustomersResponse = DeleteCustomersResponses[keyof DeleteCustomersResponses];
export type GetCustomersData = {
    body?: never;
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        'id:in'?: Array<number>;
        'company:in'?: Array<string>;
        'customer_group_id:in'?: Array<string>;
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
        'email:in'?: Array<string>;
        'name:in'?: Array<string>;
        'name:like'?: Array<string>;
        'phone:in'?: string;
        'registration_ip_address:in'?: Array<number>;
        include?: Array<'addresses' | 'storecredit' | 'attributes' | 'formfields' | 'shopper_profile_id' | 'segment_ids'>;
        sort?: 'date_created:asc' | 'date_created:desc' | 'last_name:asc' | 'last_name:desc' | 'date_modified:asc' | 'date_modified:desc';
        after?: string;
        before?: string;
    };
    url: '/customers';
};
export type GetCustomersErrors = {
    422: _Error;
};
export type GetCustomersError = GetCustomersErrors[keyof GetCustomersErrors];
export type GetCustomersResponses = {
    200: {
        data?: Array<CustomerFull>;
        meta?: MetaCollectionWithCursorPagination;
    };
};
export type GetCustomersResponse = GetCustomersResponses[keyof GetCustomersResponses];
export type CreateCustomersData = {
    body: Array<CustomerPost>;
    path?: never;
    query?: never;
    url: '/customers';
};
export type CreateCustomersErrors = {
    413: unknown;
    422: ErrorResponse;
};
export type CreateCustomersError = CreateCustomersErrors[keyof CreateCustomersErrors];
export type CreateCustomersResponses = {
    200: {
        data?: Array<CustomerFull>;
        meta?: MetaOpen;
    };
};
export type CreateCustomersResponse = CreateCustomersResponses[keyof CreateCustomersResponses];
export type UpdateCustomersData = {
    body?: Array<CustomerPut>;
    path?: never;
    query?: never;
    url: '/customers';
};
export type UpdateCustomersErrors = {
    413: unknown;
    422: ErrorResponse;
};
export type UpdateCustomersError = UpdateCustomersErrors[keyof UpdateCustomersErrors];
export type UpdateCustomersResponses = {
    200: {
        data?: Array<CustomerFull>;
        meta?: MetaOpen;
    };
};
export type UpdateCustomersResponse = UpdateCustomersResponses[keyof UpdateCustomersResponses];
export type DeleteCustomersAddressesData = {
    body?: never;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query: {
        'id:in': Array<number>;
    };
    url: '/customers/addresses';
};
export type DeleteCustomersAddressesResponses = {
    204: void;
};
export type DeleteCustomersAddressesResponse = DeleteCustomersAddressesResponses[keyof DeleteCustomersAddressesResponses];
export type GetCustomersAddressesData = {
    body?: never;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        'company:in'?: Array<string>;
        'name:in'?: Array<string>;
        'customer_id:in'?: Array<number>;
        include?: Array<'formfields'>;
        'id:in'?: Array<number>;
    };
    url: '/customers/addresses';
};
export type GetCustomersAddressesResponses = {
    200: {
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
            form_fields?: Array<FormFieldValueAddress>;
        }>;
        meta?: MetaCollection;
    };
};
export type GetCustomersAddressesResponse = GetCustomersAddressesResponses[keyof GetCustomersAddressesResponses];
export type CreateCustomersAddressesData = {
    body: Array<AddressPost>;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query?: never;
    url: '/customers/addresses';
};
export type CreateCustomersAddressesErrors = {
    422: ErrorResponse;
};
export type CreateCustomersAddressesError = CreateCustomersAddressesErrors[keyof CreateCustomersAddressesErrors];
export type CreateCustomersAddressesResponses = {
    200: ({
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
            form_fields?: Array<FormFieldValueFull>;
        }>;
        meta?: MetaOpen;
    } | {
        [key: string]: unknown;
    }) & {
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
            form_fields?: Array<FormFieldValueAddress>;
        }>;
        meta?: MetaOpen;
    };
};
export type CreateCustomersAddressesResponse = CreateCustomersAddressesResponses[keyof CreateCustomersAddressesResponses];
export type UpdateCustomersAddressesData = {
    body: Array<AddressPut>;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query?: never;
    url: '/customers/addresses';
};
export type UpdateCustomersAddressesErrors = {
    422: ErrorResponse;
};
export type UpdateCustomersAddressesError = UpdateCustomersAddressesErrors[keyof UpdateCustomersAddressesErrors];
export type UpdateCustomersAddressesResponses = {
    200: ({
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
            form_fields?: Array<FormFieldValueFull>;
        }>;
        meta?: MetaOpen;
    } | {
        [key: string]: unknown;
    }) & {
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
            form_fields?: Array<FormFieldValueAddress>;
        }>;
        meta?: MetaOpen;
    };
};
export type UpdateCustomersAddressesResponse = UpdateCustomersAddressesResponses[keyof UpdateCustomersAddressesResponses];
export type ValidateCustomerCredentialsData = {
    body: ValidateCustomerCredentialsObject;
    path?: never;
    query?: never;
    url: '/customers/validate-credentials';
};
export type ValidateCustomerCredentialsErrors = {
    422: ErrorResponse;
    429: ErrorResponse;
};
export type ValidateCustomerCredentialsError = ValidateCustomerCredentialsErrors[keyof ValidateCustomerCredentialsErrors];
export type ValidateCustomerCredentialsResponses = {
    200: ValidateCustomerCredentialsResponseObject;
};
export type ValidateCustomerCredentialsResponse = ValidateCustomerCredentialsResponses[keyof ValidateCustomerCredentialsResponses];
export type GetCustomersSettingsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/customers/settings';
};
export type GetCustomersSettingsResponses = {
    200: {
        data?: CustomerSettingsObject;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type GetCustomersSettingsResponse = GetCustomersSettingsResponses[keyof GetCustomersSettingsResponses];
export type UpdateCustomersSettingsData = {
    body: CustomerSettingsObject;
    path?: never;
    query?: never;
    url: '/customers/settings';
};
export type UpdateCustomersSettingsResponses = {
    200: {
        data?: CustomerSettingsObject;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type UpdateCustomersSettingsResponse = UpdateCustomersSettingsResponses[keyof UpdateCustomersSettingsResponses];
export type GetCustomersSettingsChannelData = {
    body?: never;
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/customers/settings/channels/{channel_id}';
};
export type GetCustomersSettingsChannelResponses = {
    200: {
        data?: CustomerChannelSettingsObject;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type GetCustomersSettingsChannelResponse = GetCustomersSettingsChannelResponses[keyof GetCustomersSettingsChannelResponses];
export type UpdateCustomersSettingsChannelData = {
    body: CustomerChannelSettingsObject;
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/customers/settings/channels/{channel_id}';
};
export type UpdateCustomersSettingsChannelResponses = {
    200: {
        data?: CustomerSettingsObject;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type UpdateCustomersSettingsChannelResponse = UpdateCustomersSettingsChannelResponses[keyof UpdateCustomersSettingsChannelResponses];
export type DeleteCustomersAttributesData = {
    body?: never;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query: {
        'id:in': Array<number>;
    };
    url: '/customers/attributes';
};
export type DeleteCustomersAttributesResponses = {
    204: void;
};
export type DeleteCustomersAttributesResponse = DeleteCustomersAttributesResponses[keyof DeleteCustomersAttributesResponses];
export type GetCustomersAttributesData = {
    body?: never;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        name?: string;
        'name:like'?: string;
        type?: string;
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
    };
    url: '/customers/attributes';
};
export type GetCustomersAttributesResponses = {
    200: {
        data?: Array<{
            name: string;
            type: 'string' | 'number' | 'date';
            id: number;
            date_modified?: string;
            date_created?: string;
        }>;
        meta?: MetaOpen;
    };
};
export type GetCustomersAttributesResponse = GetCustomersAttributesResponses[keyof GetCustomersAttributesResponses];
export type CreateCustomersAttributesData = {
    body: Array<AttributePost>;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query?: never;
    url: '/customers/attributes';
};
export type CreateCustomersAttributesErrors = {
    422: ErrorResponse;
};
export type CreateCustomersAttributesError = CreateCustomersAttributesErrors[keyof CreateCustomersAttributesErrors];
export type CreateCustomersAttributesResponses = {
    200: {
        data?: Array<{
            name: string;
            type: 'string' | 'number' | 'date';
            id: number;
            date_modified?: string;
            date_created?: string;
        }>;
        meta?: MetaOpen;
    };
};
export type CreateCustomersAttributesResponse = CreateCustomersAttributesResponses[keyof CreateCustomersAttributesResponses];
export type UpdateCustomersAttributesData = {
    body: Array<AttributePut>;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query?: never;
    url: '/customers/attributes';
};
export type UpdateCustomersAttributesErrors = {
    422: ErrorResponse;
};
export type UpdateCustomersAttributesError = UpdateCustomersAttributesErrors[keyof UpdateCustomersAttributesErrors];
export type UpdateCustomersAttributesResponses = {
    200: {
        data?: Array<{
            name: string;
            type: 'string' | 'number' | 'date';
            id: number;
            date_modified?: string;
            date_created?: string;
        }>;
        meta?: MetaOpen;
    };
};
export type UpdateCustomersAttributesResponse = UpdateCustomersAttributesResponses[keyof UpdateCustomersAttributesResponses];
export type DeleteCustomersAttributeValuesData = {
    body?: never;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query: {
        'id:in': Array<number>;
    };
    url: '/customers/attribute-values';
};
export type DeleteCustomersAttributeValuesResponses = {
    204: void;
};
export type DeleteCustomersAttributeValuesResponse = DeleteCustomersAttributeValuesResponses[keyof DeleteCustomersAttributeValuesResponses];
export type GetCustomersAttributeValuesData = {
    body?: never;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        'customer_id:in'?: Array<number>;
        'attribute_id:in'?: Array<number>;
        name?: string;
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
    };
    url: '/customers/attribute-values';
};
export type GetCustomersAttributeValuesResponses = {
    200: {
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
    };
};
export type GetCustomersAttributeValuesResponse = GetCustomersAttributeValuesResponses[keyof GetCustomersAttributeValuesResponses];
export type UpsertCustomersAttributeValuesData = {
    body: Array<AttributeValueBase>;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query?: never;
    url: '/customers/attribute-values';
};
export type UpsertCustomersAttributeValuesErrors = {
    422: ErrorResponse;
};
export type UpsertCustomersAttributeValuesError = UpsertCustomersAttributeValuesErrors[keyof UpsertCustomersAttributeValuesErrors];
export type UpsertCustomersAttributeValuesResponses = {
    200: {
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
    };
};
export type UpsertCustomersAttributeValuesResponse = UpsertCustomersAttributeValuesResponses[keyof UpsertCustomersAttributeValuesResponses];
export type GetCustomersFormFieldValuesData = {
    body?: never;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        customer_id?: number;
        address_id?: number;
        field_name?: string;
        field_type?: 'checkboxes' | 'date' | 'multiline' | 'numbers' | 'password' | 'radiobuttons' | 'text' | 'picklist';
        after?: string;
        before?: string;
    };
    url: '/customers/form-field-values';
};
export type GetCustomersFormFieldValuesErrors = {
    422: ErrorResponse;
};
export type GetCustomersFormFieldValuesError = GetCustomersFormFieldValuesErrors[keyof GetCustomersFormFieldValuesErrors];
export type GetCustomersFormFieldValuesResponses = {
    200: {
        data?: Array<({
            name: string;
            value: string | number | Array<string>;
        } & {
            customer_id: number;
        }) | ({
            name: string;
            value: string | number | Array<string>;
        } & {
            address_id: number;
        })>;
        meta?: MetaCollectionWithCursorPagination;
    };
};
export type GetCustomersFormFieldValuesResponse = GetCustomersFormFieldValuesResponses[keyof GetCustomersFormFieldValuesResponses];
export type UpdateCustomerFormFieldValuesData = {
    body?: Array<FormFieldValueFull>;
    path?: never;
    query?: never;
    url: '/customers/form-field-values';
};
export type UpdateCustomerFormFieldValuesErrors = {
    422: ErrorResponse;
};
export type UpdateCustomerFormFieldValuesError = UpdateCustomerFormFieldValuesErrors[keyof UpdateCustomerFormFieldValuesErrors];
export type UpdateCustomerFormFieldValuesResponses = {
    200: {
        data?: Array<({
            name: string;
            value: string | number | Array<string>;
        } & {
            customer_id: number;
        }) | ({
            name: string;
            value: string | number | Array<string>;
        } & {
            address_id: number;
        })>;
        meta?: MetaOpen;
    };
};
export type UpdateCustomerFormFieldValuesResponse = UpdateCustomerFormFieldValuesResponses[keyof UpdateCustomerFormFieldValuesResponses];
export type GetCustomerConsentData = {
    body?: never;
    path: {
        customerId: number;
    };
    query?: never;
    url: '/customers/{customerId}/consent';
};
export type GetCustomerConsentErrors = {
    401: ErrorResponse;
    403: ErrorResponse;
    422: ErrorResponse;
};
export type GetCustomerConsentError = GetCustomerConsentErrors[keyof GetCustomerConsentErrors];
export type GetCustomerConsentResponses = {
    200: ConsentFull;
};
export type GetCustomerConsentResponse = GetCustomerConsentResponses[keyof GetCustomerConsentResponses];
export type UpdateCustomerConsentData = {
    body?: DeclareCustomerConsentRequest;
    headers?: {
        'Content-Type'?: string;
    };
    path: {
        customerId: number;
    };
    query?: never;
    url: '/customers/{customerId}/consent';
};
export type UpdateCustomerConsentErrors = {
    401: ErrorResponse;
    403: ErrorResponse;
    422: ErrorResponse;
};
export type UpdateCustomerConsentError = UpdateCustomerConsentErrors[keyof UpdateCustomerConsentErrors];
export type UpdateCustomerConsentResponses = {
    200: ConsentFull;
};
export type UpdateCustomerConsentResponse = UpdateCustomerConsentResponses[keyof UpdateCustomerConsentResponses];
export type GetCustomerStoredInstrumentsData = {
    body?: never;
    path: {
        customerId: number;
    };
    query?: never;
    url: '/customers/{customerId}/stored-instruments';
};
export type GetCustomerStoredInstrumentsErrors = {
    401: ErrorResponse;
    403: ErrorResponse;
};
export type GetCustomerStoredInstrumentsError = GetCustomerStoredInstrumentsErrors[keyof GetCustomerStoredInstrumentsErrors];
export type GetCustomerStoredInstrumentsResponses = {
    200: Array<({
        type: 'stored_card';
    } & CardInstrument) | ({
        type: 'stored_paypal_account';
    } & PayPalAccountInstrument) | ({
        type: 'stored_bank_account';
    } & BankAccountInstrument)>;
};
export type GetCustomerStoredInstrumentsResponse = GetCustomerStoredInstrumentsResponses[keyof GetCustomerStoredInstrumentsResponses];
export type GetCustomersMetafieldsData = {
    body?: never;
    path: {
        customerId: number;
    };
    query?: never;
    url: '/customers/{customerId}/metafields';
};
export type GetCustomersMetafieldsResponses = {
    200: {
        data?: Array<MetafieldFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetCustomersMetafieldsResponse = GetCustomersMetafieldsResponses[keyof GetCustomersMetafieldsResponses];
export type CreateCustomerMetafieldsData = {
    body: MetafieldBasePost;
    path: {
        customerId: number;
    };
    query?: never;
    url: '/customers/{customerId}/metafields';
};
export type CreateCustomerMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    409: ErrorResponse;
    422: ErrorResponse;
};
export type CreateCustomerMetafieldsError = CreateCustomerMetafieldsErrors[keyof CreateCustomerMetafieldsErrors];
export type CreateCustomerMetafieldsResponses = {
    200: MetaFieldCollectionPostPutResponses;
};
export type CreateCustomerMetafieldsResponse = CreateCustomerMetafieldsResponses[keyof CreateCustomerMetafieldsResponses];
export type DeleteCustomerMetafieldsIdData = {
    body?: never;
    path: {
        customerId: number;
        metafieldId: number;
    };
    query?: never;
    url: '/customers/{customerId}/metafields/{metafieldId}';
};
export type DeleteCustomerMetafieldsIdErrors = {
    404: NotFound;
};
export type DeleteCustomerMetafieldsIdError = DeleteCustomerMetafieldsIdErrors[keyof DeleteCustomerMetafieldsIdErrors];
export type DeleteCustomerMetafieldsIdResponses = {
    204: void;
};
export type DeleteCustomerMetafieldsIdResponse = DeleteCustomerMetafieldsIdResponses[keyof DeleteCustomerMetafieldsIdResponses];
export type GetMetafieldsCustomerIdData = {
    body?: never;
    path: {
        customerId: number;
        metafieldId: number;
    };
    query?: never;
    url: '/customers/{customerId}/metafields/{metafieldId}';
};
export type GetMetafieldsCustomerIdErrors = {
    404: NotFound;
};
export type GetMetafieldsCustomerIdError = GetMetafieldsCustomerIdErrors[keyof GetMetafieldsCustomerIdErrors];
export type GetMetafieldsCustomerIdResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type GetMetafieldsCustomerIdResponse = GetMetafieldsCustomerIdResponses[keyof GetMetafieldsCustomerIdResponses];
export type UpdateCustomerMetafieldData = {
    body?: MetafieldBasePut & {
        id: number;
    };
    path: {
        metafieldId: number;
        customerId: number;
    };
    query?: {
        metafieldId?: number;
    };
    url: '/customers/{customerId}/metafields/{metafieldId}';
};
export type UpdateCustomerMetafieldErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    404: NotFound;
};
export type UpdateCustomerMetafieldError = UpdateCustomerMetafieldErrors[keyof UpdateCustomerMetafieldErrors];
export type UpdateCustomerMetafieldResponses = {
    200: MetaFieldCollectionPostPutResponses;
};
export type UpdateCustomerMetafieldResponse = UpdateCustomerMetafieldResponses[keyof UpdateCustomerMetafieldResponses];
export type DeleteCustomersMetafieldsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/customers/metafields';
};
export type DeleteCustomersMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessDelete;
};
export type DeleteCustomersMetafieldsError = DeleteCustomersMetafieldsErrors[keyof DeleteCustomersMetafieldsErrors];
export type DeleteCustomersMetafieldsResponses = {
    200: MetaFieldCollectionDeleteResponseSuccess;
};
export type DeleteCustomersMetafieldsResponse = DeleteCustomersMetafieldsResponses[keyof DeleteCustomersMetafieldsResponses];
export type GetAllCustomersMetafieldsData = {
    body?: never;
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        key?: string;
        'key:in'?: Array<string>;
        namespace?: string;
        'namespace:in'?: Array<string>;
        direction?: 'asc' | 'desc';
        include_fields?: Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified'>;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
        'date_created:min'?: string;
        'date_created:max'?: string;
    };
    url: '/customers/metafields';
};
export type GetAllCustomersMetafieldsResponses = {
    200: MetaFieldCollectionResponse;
};
export type GetAllCustomersMetafieldsResponse = GetAllCustomersMetafieldsResponses[keyof GetAllCustomersMetafieldsResponses];
export type CreateCustomersMetafieldsData = {
    body?: Array<MetafieldBasePost & {
        resource_id: number;
    }>;
    path?: never;
    query?: never;
    url: '/customers/metafields';
};
export type CreateCustomersMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateCustomersMetafieldsError = CreateCustomersMetafieldsErrors[keyof CreateCustomersMetafieldsErrors];
export type CreateCustomersMetafieldsResponses = {
    200: MetaFieldCollectionPostPutResponses;
};
export type CreateCustomersMetafieldsResponse = CreateCustomersMetafieldsResponses[keyof CreateCustomersMetafieldsResponses];
export type UpdateCustomersMetafieldsData = {
    body?: Array<MetafieldBasePut & {
        id: number;
    }>;
    path?: never;
    query?: never;
    url: '/customers/metafields';
};
export type UpdateCustomersMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateCustomersMetafieldsError = UpdateCustomersMetafieldsErrors[keyof UpdateCustomersMetafieldsErrors];
export type UpdateCustomersMetafieldsResponses = {
    200: MetaFieldCollectionPostPutResponses;
};
export type UpdateCustomersMetafieldsResponse = UpdateCustomersMetafieldsResponses[keyof UpdateCustomersMetafieldsResponses];
