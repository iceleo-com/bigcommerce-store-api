export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type CustomersGetParametersIncludeSchemaItems = 'addresses' | 'storecredit' | 'attributes' | 'formfields' | 'shopper_profile_id' | 'segment_ids';
export type CustomersGetParametersSort = 'date_created:asc' | 'date_created:desc' | 'last_name:asc' | 'last_name:desc' | 'date_modified:asc' | 'date_modified:desc';
export type CustomerFullAuthentication = {
    force_password_reset?: boolean;
};
export type AddressFullAddressType = 'residential' | 'commercial';
export type FormFieldValueValue = string | number | Array<string>;
export type FormFieldValue = {
    name: string;
    value: FormFieldValueValue;
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
    address_type?: AddressFullAddressType;
    customer_id: number;
    id: number;
    country?: string;
    form_fields?: Array<FormFieldValue>;
};
export type AttributeFull = {
    attribute_id?: number;
    attribute_value?: string;
    customer_id?: number;
    date_created?: string;
    date_modified?: string;
    id?: number;
};
export type FormFieldValueCustomerValue = string | number | Array<string>;
export type FormFieldValueCustomer = {
    name: string;
    value: FormFieldValueCustomerValue;
    customer_id: number;
};
export type CustomerStoredCreditAmountsItems = {
    amount?: string;
};
export type CustomerStoredCreditAmounts = Array<CustomerStoredCreditAmountsItems>;
export type CustomerChannelIds = Array<unknown>;
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
    authentication?: CustomerFullAuthentication;
    addresses?: Array<AddressFull>;
    attributes?: Array<AttributeFull>;
    form_fields?: Array<FormFieldValueCustomer>;
    store_credit_amounts?: CustomerStoredCreditAmounts;
    accepts_product_review_abandoned_cart_emails?: boolean;
    origin_channel_id?: number;
    channel_ids?: CustomerChannelIds;
};
export type Links = {
    previous?: string;
    current?: string;
    next?: string;
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
export type MetaCollectionWithCursorPagination = {
    pagination?: Pagination;
    cursor_pagination?: CursorPagination;
};
export type CustomersGetCustomersResponse200 = {
    data?: Array<CustomerFull>;
    meta?: MetaCollectionWithCursorPagination;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
export type _Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type CustomerAddressesCustomerPostAddressType = 'residential' | 'commercial';
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
    address_type?: CustomerAddressesCustomerPostAddressType;
    form_fields?: Array<FormFieldValue>;
};
export type CustomerAttributesBase = {
    attribute_id?: number;
    attribute_value?: string;
};
export type CustomerAuthenticationPostPut = {
    force_password_reset?: boolean;
    new_password?: string;
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
export type MetaOpen = {
    [key: string]: unknown;
};
export type CustomersCreateCustomersResponse200 = {
    data?: Array<CustomerFull>;
    meta?: MetaOpen;
};
export type ErrorResponseErrors = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: ErrorResponseErrors;
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
export type CustomersUpdateCustomersResponse200 = {
    data?: Array<CustomerFull>;
    meta?: MetaOpen;
};
export type CustomersAddressesGetParametersIncludeSchemaItems = 'formfields';
export type CustomersAddressesGetResponsesContentApplicationJsonSchemaDataItemsAddressType = 'residential' | 'commercial';
export type FormFieldValueAddressValue = string | number | Array<string>;
export type FormFieldValueAddress = {
    name: string;
    value: FormFieldValueAddressValue;
    address_id: number;
};
export type CustomersAddressesGetResponsesContentApplicationJsonSchemaDataItems = {
    address1: string;
    address2?: string;
    address_type?: CustomersAddressesGetResponsesContentApplicationJsonSchemaDataItemsAddressType;
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
};
export type MetaCollection = {
    pagination?: Pagination;
};
export type AddressesGetCustomersAddressesResponse200 = {
    data?: Array<CustomersAddressesGetResponsesContentApplicationJsonSchemaDataItems>;
    meta?: MetaCollection;
};
export type AddressPostAddressType = 'residential' | 'commercial';
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
    address_type?: AddressPostAddressType;
    customer_id: number;
    form_fields?: Array<FormFieldValue>;
};
export type CustomersAddressesPostResponsesContentApplicationJsonSchemaOneOf0DataItemsAddressType = 'residential' | 'commercial';
export type FormFieldValueFull = FormFieldValueCustomer | FormFieldValueAddress;
export type CustomersAddressesPostResponsesContentApplicationJsonSchemaOneOf0DataItems = {
    address1?: string;
    address2?: string;
    address_type?: CustomersAddressesPostResponsesContentApplicationJsonSchemaOneOf0DataItemsAddressType;
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
};
export type AddressesCreateCustomersAddressesResponse2000 = {
    data?: Array<CustomersAddressesPostResponsesContentApplicationJsonSchemaOneOf0DataItems>;
    meta?: MetaOpen;
};
export type AddressesCreateCustomersAddressesResponse200 = AddressesCreateCustomersAddressesResponse2000 | {
    [key: string]: unknown;
};
export type AddressPutAddressType = 'residential' | 'commercial';
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
    address_type?: AddressPutAddressType;
    id: number;
    form_fields?: Array<FormFieldValue>;
};
export type CustomersAddressesPutResponsesContentApplicationJsonSchemaOneOf0DataItemsAddressType = 'residential' | 'commercial';
export type CustomersAddressesPutResponsesContentApplicationJsonSchemaOneOf0DataItems = {
    address1?: string;
    address2?: string;
    address_type?: CustomersAddressesPutResponsesContentApplicationJsonSchemaOneOf0DataItemsAddressType;
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
};
export type AddressesUpdateCustomersAddressesResponse2000 = {
    data?: Array<CustomersAddressesPutResponsesContentApplicationJsonSchemaOneOf0DataItems>;
    meta?: MetaOpen;
};
export type AddressesUpdateCustomersAddressesResponse200 = AddressesUpdateCustomersAddressesResponse2000 | {
    [key: string]: unknown;
};
export type CustomersAttributeValuesGetResponsesContentApplicationJsonSchemaDataItems = {
    attribute_id: number;
    attribute_value: string;
    id?: number;
    customer_id: number;
    date_modified?: string;
    date_created?: string;
};
export type CustomersAttributeValuesGetResponsesContentApplicationJsonSchemaMetaPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type CustomersAttributeValuesGetResponsesContentApplicationJsonSchemaMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: CustomersAttributeValuesGetResponsesContentApplicationJsonSchemaMetaPaginationLinks;
};
export type CustomersAttributeValuesGetResponsesContentApplicationJsonSchemaMeta = {
    pagination?: CustomersAttributeValuesGetResponsesContentApplicationJsonSchemaMetaPagination;
};
export type AttributeValuesGetCustomersAttributeValuesResponse200 = {
    data?: Array<CustomersAttributeValuesGetResponsesContentApplicationJsonSchemaDataItems>;
    meta?: CustomersAttributeValuesGetResponsesContentApplicationJsonSchemaMeta;
};
export type AttributeValueBase = {
    id?: number;
    attribute_id: number;
    value: string;
    customer_id: number;
};
export type CustomersAttributeValuesPutResponsesContentApplicationJsonSchemaDataItems = {
    attribute_id: number;
    attribute_value: string;
    id?: number;
    customer_id: number;
    date_modified?: string;
    date_created?: string;
};
export type CustomersAttributeValuesPutResponsesContentApplicationJsonSchemaMetaPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type CustomersAttributeValuesPutResponsesContentApplicationJsonSchemaMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: CustomersAttributeValuesPutResponsesContentApplicationJsonSchemaMetaPaginationLinks;
};
export type CustomersAttributeValuesPutResponsesContentApplicationJsonSchemaMeta = {
    pagination?: CustomersAttributeValuesPutResponsesContentApplicationJsonSchemaMetaPagination;
};
export type AttributeValuesUpsertCustomersAttributeValuesResponse200 = {
    data?: Array<CustomersAttributeValuesPutResponsesContentApplicationJsonSchemaDataItems>;
    meta?: CustomersAttributeValuesPutResponsesContentApplicationJsonSchemaMeta;
};
export type CustomersAttributesGetResponsesContentApplicationJsonSchemaDataItemsType = 'string' | 'number' | 'date';
export type CustomersAttributesGetResponsesContentApplicationJsonSchemaDataItems = {
    name: string;
    type: CustomersAttributesGetResponsesContentApplicationJsonSchemaDataItemsType;
    id: number;
    date_modified?: string;
    date_created?: string;
};
export type AttributesGetCustomersAttributesResponse200 = {
    data?: Array<CustomersAttributesGetResponsesContentApplicationJsonSchemaDataItems>;
    meta?: MetaOpen;
};
export type AttributePostType = 'string' | 'number' | 'date';
export type AttributePost = {
    name: string;
    type: AttributePostType;
};
export type CustomersAttributesPostResponsesContentApplicationJsonSchemaDataItemsType = 'string' | 'number' | 'date';
export type CustomersAttributesPostResponsesContentApplicationJsonSchemaDataItems = {
    name: string;
    type: CustomersAttributesPostResponsesContentApplicationJsonSchemaDataItemsType;
    id: number;
    date_modified?: string;
    date_created?: string;
};
export type AttributesCreateCustomersAttributesResponse200 = {
    data?: Array<CustomersAttributesPostResponsesContentApplicationJsonSchemaDataItems>;
    meta?: MetaOpen;
};
export type AttributePut = {
    name: string;
    id: number;
};
export type CustomersAttributesPutResponsesContentApplicationJsonSchemaDataItemsType = 'string' | 'number' | 'date';
export type CustomersAttributesPutResponsesContentApplicationJsonSchemaDataItems = {
    name: string;
    type: CustomersAttributesPutResponsesContentApplicationJsonSchemaDataItemsType;
    id: number;
    date_modified?: string;
    date_created?: string;
};
export type AttributesUpdateCustomersAttributesResponse200 = {
    data?: Array<CustomersAttributesPutResponsesContentApplicationJsonSchemaDataItems>;
    meta?: MetaOpen;
};
export type CustomerChannelSettingsObjectPrivacySettings = {
    ask_shopper_for_tracking_consent?: boolean;
    policy_url?: string;
};
export type CustomerChannelSettingsObjectCustomerGroupSettings = {
    guest_customer_group_id?: number;
    default_customer_group_id?: number;
};
export type CustomerChannelSettingsObject = {
    privacy_settings?: CustomerChannelSettingsObjectPrivacySettings;
    customer_group_settings?: CustomerChannelSettingsObjectCustomerGroupSettings;
    allow_global_logins?: boolean;
};
export type CustomersSettingsChannelsChannelIdGetResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type ChannelSettingsGetCustomersSettingsChannelResponse200 = {
    data?: CustomerChannelSettingsObject;
    meta?: CustomersSettingsChannelsChannelIdGetResponsesContentApplicationJsonSchemaMeta;
};
export type CustomerSettingsObjectPrivacySettings = {
    ask_shopper_for_tracking_consent?: boolean;
    policy_url?: string;
};
export type CustomerSettingsObjectCustomerGroupSettings = {
    guest_customer_group_id?: number;
    default_customer_group_id?: number;
};
export type CustomerSettingsObject = {
    privacy_settings?: CustomerSettingsObjectPrivacySettings;
    customer_group_settings?: CustomerSettingsObjectCustomerGroupSettings;
};
export type CustomersSettingsChannelsChannelIdPutResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type ChannelSettingsUpdateCustomersSettingsChannelResponse200 = {
    data?: CustomerSettingsObject;
    meta?: CustomersSettingsChannelsChannelIdPutResponsesContentApplicationJsonSchemaMeta;
};
export type ConsentAllowItems = 'essential' | 'functional' | 'analytics' | 'targeting';
export type ConsentAllow = Array<ConsentAllowItems>;
export type DenyItems = 'essential' | 'functional' | 'analytics' | 'targeting';
export type Deny = Array<DenyItems>;
export type ConsentFull = {
    allow?: ConsentAllow;
    deny?: Deny;
    updated_at?: string;
};
export type DeclareCustomerConsentRequest = {
    allow?: ConsentAllow;
    deny?: Deny;
};
export type CustomersFormFieldValuesGetParametersFieldType = 'checkboxes' | 'date' | 'multiline' | 'numbers' | 'password' | 'radiobuttons' | 'text' | 'picklist';
export type CustomersFormFieldValuesGetResponsesContentApplicationJsonSchemaDataItemsOneOf0Value = string | number | Array<string>;
export type CustomersFormFieldValuesGetResponsesContentApplicationJsonSchemaDataItems0 = {
    name: string;
    value: CustomersFormFieldValuesGetResponsesContentApplicationJsonSchemaDataItemsOneOf0Value;
    customer_id: number;
};
export type CustomersFormFieldValuesGetResponsesContentApplicationJsonSchemaDataItemsOneOf1Value = string | number | Array<string>;
export type CustomersFormFieldValuesGetResponsesContentApplicationJsonSchemaDataItems1 = {
    name: string;
    value: CustomersFormFieldValuesGetResponsesContentApplicationJsonSchemaDataItemsOneOf1Value;
    address_id: number;
};
export type CustomersFormFieldValuesGetResponsesContentApplicationJsonSchemaDataItems = CustomersFormFieldValuesGetResponsesContentApplicationJsonSchemaDataItems0 | CustomersFormFieldValuesGetResponsesContentApplicationJsonSchemaDataItems1;
export type FormFieldValuesGetCustomersFormFieldValuesResponse200 = {
    data?: Array<CustomersFormFieldValuesGetResponsesContentApplicationJsonSchemaDataItems>;
    meta?: MetaCollectionWithCursorPagination;
};
export type CustomersFormFieldValuesPutResponsesContentApplicationJsonSchemaDataItemsOneOf0Value = string | number | Array<string>;
export type CustomersFormFieldValuesPutResponsesContentApplicationJsonSchemaDataItems0 = {
    name: string;
    value: CustomersFormFieldValuesPutResponsesContentApplicationJsonSchemaDataItemsOneOf0Value;
    customer_id: number;
};
export type CustomersFormFieldValuesPutResponsesContentApplicationJsonSchemaDataItemsOneOf1Value = string | number | Array<string>;
export type CustomersFormFieldValuesPutResponsesContentApplicationJsonSchemaDataItems1 = {
    name: string;
    value: CustomersFormFieldValuesPutResponsesContentApplicationJsonSchemaDataItemsOneOf1Value;
    address_id: number;
};
export type CustomersFormFieldValuesPutResponsesContentApplicationJsonSchemaDataItems = CustomersFormFieldValuesPutResponsesContentApplicationJsonSchemaDataItems0 | CustomersFormFieldValuesPutResponsesContentApplicationJsonSchemaDataItems1;
export type FormFieldValuesUpdateCustomerFormFieldValuesResponse200 = {
    data?: Array<CustomersFormFieldValuesPutResponsesContentApplicationJsonSchemaDataItems>;
    meta?: MetaOpen;
};
export type CustomersSettingsGetResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type GlobalSettingsGetCustomersSettingsResponse200 = {
    data?: CustomerSettingsObject;
    meta?: CustomersSettingsGetResponsesContentApplicationJsonSchemaMeta;
};
export type CustomersSettingsPutResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type GlobalSettingsUpdateCustomersSettingsResponse200 = {
    data?: CustomerSettingsObject;
    meta?: CustomersSettingsPutResponsesContentApplicationJsonSchemaMeta;
};
export type MetafieldBasePermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldFullResourceType = 'category' | 'brand' | 'product' | 'variant' | 'customer';
export type MetafieldFull = {
    key: string;
    value: string;
    namespace: string;
    permission_set: MetafieldBasePermissionSet;
    description?: string;
    id?: number;
    resource_type?: MetafieldFullResourceType;
    resource_id?: number;
    date_created?: string;
    date_modified?: string;
};
export type PaginationFullLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type PaginationFull = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: PaginationFullLinks;
};
export type MetaCollectionFull = {
    pagination?: PaginationFull;
};
export type MetafieldsGetCustomersMetafieldsResponse200 = {
    data?: Array<MetafieldFull>;
    meta?: MetaCollectionFull;
};
export type MetafieldBasePostPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldBasePost = {
    permission_set: MetafieldBasePostPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetafieldPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldResourceType = 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
export type Metafield = {
    permission_set: MetafieldPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description: string;
    resource_type: MetafieldResourceType;
    resource_id: number;
    id: number;
    date_created: string;
    date_modified: string;
    owner_client_id?: string;
};
export type CollectionMetaPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type CollectionMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: CollectionMetaPaginationLinks;
};
export type CollectionMeta = {
    pagination?: CollectionMetaPagination;
};
export type MetaFieldCollectionPostPutResponses = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: CollectionMeta;
};
export type CreateCustomerMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type MetaEmptyFull = {
    [key: string]: unknown;
};
export type MetafieldsGetMetafieldsCustomerIdResponse200 = {
    data?: MetafieldFull;
    meta?: MetaEmptyFull;
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CustomersCustomerIdMetafieldsMetafieldIdPutRequestBodyContentApplicationJsonSchemaPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type UpdateCustomerMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type CustomersMetafieldsGetParametersDirection = 'asc' | 'desc';
export type CustomersMetafieldsGetParametersIncludeFieldsSchemaItems = 'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified';
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type CustomersMetafieldsPostRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type CustomersMetafieldsPostRequestBodyContentApplicationJsonSchemaItems = {
    permission_set: CustomersMetafieldsPostRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description?: string;
    resource_id: number;
};
export type CreateCustomersMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type WriteCollectionPartialSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionResponsePartialSuccessPostPut = {
    data?: Array<Metafield>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type CustomersMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type CustomersMetafieldsPutRequestBodyContentApplicationJsonSchemaItems = {
    permission_set?: CustomersMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    id: number;
};
export type UpdateCustomersMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type DeleteCustomersMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type MetaFieldCollectionResponsePartialSuccessDelete = {
    data?: Array<number>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
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
export type CustomersCustomerIdStoredInstrumentsGetResponsesContentApplicationJsonSchemaItems = {
    type: 'stored_card';
    token?: string;
    is_default?: boolean;
    brand?: string;
    expiry_month?: number;
    expiry_year?: number;
    issuer_identification_number?: string;
    last_4?: string;
    billing_address?: BillingAddress;
} | {
    type: 'stored_paypal_account';
    token?: string;
    is_default?: boolean;
    email?: string;
} | {
    type: 'stored_bank_account';
    token?: string;
    is_default?: boolean;
    masked_account_number?: string;
    issuer?: string;
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
    204: {
        [key: string]: unknown;
    };
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
        include?: Array<CustomersGetParametersIncludeSchemaItems>;
        sort?: CustomersGetParametersSort;
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
    200: CustomersGetCustomersResponse200;
};
export type GetCustomersResponse = GetCustomersResponses[keyof GetCustomersResponses];
export type CreateCustomersData = {
    body?: Array<CustomerPost>;
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
    200: CustomersCreateCustomersResponse200;
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
    200: CustomersUpdateCustomersResponse200;
};
export type UpdateCustomersResponse = UpdateCustomersResponses[keyof UpdateCustomersResponses];
export type DeleteCustomersAddressesData = {
    body?: never;
    headers?: {
        Accept?: string;
    };
    path?: never;
    query: {
        'id:in': Array<number>;
    };
    url: '/customers/addresses';
};
export type DeleteCustomersAddressesResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteCustomersAddressesResponse = DeleteCustomersAddressesResponses[keyof DeleteCustomersAddressesResponses];
export type GetCustomersAddressesData = {
    body?: never;
    headers?: {
        Accept?: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        'company:in'?: Array<string>;
        'name:in'?: Array<string>;
        'customer_id:in'?: Array<number>;
        include?: Array<CustomersAddressesGetParametersIncludeSchemaItems>;
        'id:in'?: Array<number>;
    };
    url: '/customers/addresses';
};
export type GetCustomersAddressesResponses = {
    200: AddressesGetCustomersAddressesResponse200;
};
export type GetCustomersAddressesResponse = GetCustomersAddressesResponses[keyof GetCustomersAddressesResponses];
export type CreateCustomersAddressesData = {
    body?: Array<AddressPost>;
    headers?: {
        Accept?: string;
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
    200: AddressesCreateCustomersAddressesResponse200;
};
export type CreateCustomersAddressesResponse = CreateCustomersAddressesResponses[keyof CreateCustomersAddressesResponses];
export type UpdateCustomersAddressesData = {
    body?: Array<AddressPut>;
    headers?: {
        Accept?: string;
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
    200: AddressesUpdateCustomersAddressesResponse200;
};
export type UpdateCustomersAddressesResponse = UpdateCustomersAddressesResponses[keyof UpdateCustomersAddressesResponses];
export type DeleteCustomersAttributeValuesData = {
    body?: never;
    headers?: {
        Accept?: string;
    };
    path?: never;
    query: {
        'id:in': Array<number>;
    };
    url: '/customers/attribute-values';
};
export type DeleteCustomersAttributeValuesResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteCustomersAttributeValuesResponse = DeleteCustomersAttributeValuesResponses[keyof DeleteCustomersAttributeValuesResponses];
export type GetCustomersAttributeValuesData = {
    body?: never;
    headers?: {
        Accept?: string;
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
    200: AttributeValuesGetCustomersAttributeValuesResponse200;
};
export type GetCustomersAttributeValuesResponse = GetCustomersAttributeValuesResponses[keyof GetCustomersAttributeValuesResponses];
export type UpsertCustomersAttributeValuesData = {
    body?: Array<AttributeValueBase>;
    headers?: {
        Accept?: string;
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
    200: AttributeValuesUpsertCustomersAttributeValuesResponse200;
};
export type UpsertCustomersAttributeValuesResponse = UpsertCustomersAttributeValuesResponses[keyof UpsertCustomersAttributeValuesResponses];
export type DeleteCustomersAttributesData = {
    body?: never;
    headers?: {
        Accept?: string;
    };
    path?: never;
    query: {
        'id:in': Array<number>;
    };
    url: '/customers/attributes';
};
export type DeleteCustomersAttributesResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteCustomersAttributesResponse = DeleteCustomersAttributesResponses[keyof DeleteCustomersAttributesResponses];
export type GetCustomersAttributesData = {
    body?: never;
    headers?: {
        Accept?: string;
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
    200: AttributesGetCustomersAttributesResponse200;
};
export type GetCustomersAttributesResponse = GetCustomersAttributesResponses[keyof GetCustomersAttributesResponses];
export type CreateCustomersAttributesData = {
    body?: Array<AttributePost>;
    headers?: {
        Accept?: string;
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
    200: AttributesCreateCustomersAttributesResponse200;
};
export type CreateCustomersAttributesResponse = CreateCustomersAttributesResponses[keyof CreateCustomersAttributesResponses];
export type UpdateCustomersAttributesData = {
    body?: Array<AttributePut>;
    headers?: {
        Accept?: string;
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
    200: AttributesUpdateCustomersAttributesResponse200;
};
export type UpdateCustomersAttributesResponse = UpdateCustomersAttributesResponses[keyof UpdateCustomersAttributesResponses];
export type GetCustomersSettingsChannelData = {
    body?: never;
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/customers/settings/channels/{channel_id}';
};
export type GetCustomersSettingsChannelResponses = {
    200: ChannelSettingsGetCustomersSettingsChannelResponse200;
};
export type GetCustomersSettingsChannelResponse = GetCustomersSettingsChannelResponses[keyof GetCustomersSettingsChannelResponses];
export type UpdateCustomersSettingsChannelData = {
    body?: CustomerChannelSettingsObject;
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/customers/settings/channels/{channel_id}';
};
export type UpdateCustomersSettingsChannelResponses = {
    200: ChannelSettingsUpdateCustomersSettingsChannelResponse200;
};
export type UpdateCustomersSettingsChannelResponse = UpdateCustomersSettingsChannelResponses[keyof UpdateCustomersSettingsChannelResponses];
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
export type GetCustomersFormFieldValuesData = {
    body?: never;
    headers?: {
        Accept?: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        customer_id?: number;
        address_id?: number;
        field_name?: string;
        field_type?: CustomersFormFieldValuesGetParametersFieldType;
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
    200: FormFieldValuesGetCustomersFormFieldValuesResponse200;
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
    200: FormFieldValuesUpdateCustomerFormFieldValuesResponse200;
};
export type UpdateCustomerFormFieldValuesResponse = UpdateCustomerFormFieldValuesResponses[keyof UpdateCustomerFormFieldValuesResponses];
export type GetCustomersSettingsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/customers/settings';
};
export type GetCustomersSettingsResponses = {
    200: GlobalSettingsGetCustomersSettingsResponse200;
};
export type GetCustomersSettingsResponse = GetCustomersSettingsResponses[keyof GetCustomersSettingsResponses];
export type UpdateCustomersSettingsData = {
    body?: CustomerSettingsObject;
    path?: never;
    query?: never;
    url: '/customers/settings';
};
export type UpdateCustomersSettingsResponses = {
    200: GlobalSettingsUpdateCustomersSettingsResponse200;
};
export type UpdateCustomersSettingsResponse = UpdateCustomersSettingsResponses[keyof UpdateCustomersSettingsResponses];
export type GetCustomersMetafieldsData = {
    body?: never;
    path: {
        customerId: number;
    };
    query?: never;
    url: '/customers/{customerId}/metafields';
};
export type GetCustomersMetafieldsResponses = {
    200: MetafieldsGetCustomersMetafieldsResponse200;
};
export type GetCustomersMetafieldsResponse = GetCustomersMetafieldsResponses[keyof GetCustomersMetafieldsResponses];
export type CreateCustomerMetafieldsData = {
    body?: MetafieldBasePost;
    path: {
        customerId: number;
    };
    query?: never;
    url: '/customers/{customerId}/metafields';
};
export type CreateCustomerMetafieldsErrors = {
    400: CreateCustomerMetafieldsRequestBadRequestError;
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
    204: {
        [key: string]: unknown;
    };
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
    200: MetafieldsGetMetafieldsCustomerIdResponse200;
};
export type GetMetafieldsCustomerIdResponse = GetMetafieldsCustomerIdResponses[keyof GetMetafieldsCustomerIdResponses];
export type UpdateCustomerMetafieldData = {
    body?: {
        permission_set?: CustomersCustomerIdMetafieldsMetafieldIdPutRequestBodyContentApplicationJsonSchemaPermissionSet;
        namespace?: string;
        key?: string;
        value?: string;
        description?: string;
        id: number;
    };
    path: {
        metafieldId: number;
        customerId: number;
    };
    query?: never;
    url: '/customers/{customerId}/metafields/{metafieldId}';
};
export type UpdateCustomerMetafieldErrors = {
    400: UpdateCustomerMetafieldRequestBadRequestError;
    404: NotFound;
};
export type UpdateCustomerMetafieldError = UpdateCustomerMetafieldErrors[keyof UpdateCustomerMetafieldErrors];
export type UpdateCustomerMetafieldResponses = {
    200: MetaFieldCollectionPostPutResponses;
};
export type UpdateCustomerMetafieldResponse = UpdateCustomerMetafieldResponses[keyof UpdateCustomerMetafieldResponses];
export type DeleteCustomersMetafieldsData = {
    body?: Array<number>;
    path?: never;
    query?: never;
    url: '/customers/metafields';
};
export type DeleteCustomersMetafieldsErrors = {
    400: DeleteCustomersMetafieldsRequestBadRequestError;
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
        direction?: CustomersMetafieldsGetParametersDirection;
        include_fields?: Array<CustomersMetafieldsGetParametersIncludeFieldsSchemaItems>;
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
    body?: Array<CustomersMetafieldsPostRequestBodyContentApplicationJsonSchemaItems>;
    path?: never;
    query?: never;
    url: '/customers/metafields';
};
export type CreateCustomersMetafieldsErrors = {
    400: CreateCustomersMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateCustomersMetafieldsError = CreateCustomersMetafieldsErrors[keyof CreateCustomersMetafieldsErrors];
export type CreateCustomersMetafieldsResponses = {
    200: MetaFieldCollectionPostPutResponses;
};
export type CreateCustomersMetafieldsResponse = CreateCustomersMetafieldsResponses[keyof CreateCustomersMetafieldsResponses];
export type UpdateCustomersMetafieldsData = {
    body?: Array<CustomersMetafieldsPutRequestBodyContentApplicationJsonSchemaItems>;
    path?: never;
    query?: never;
    url: '/customers/metafields';
};
export type UpdateCustomersMetafieldsErrors = {
    400: UpdateCustomersMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateCustomersMetafieldsError = UpdateCustomersMetafieldsErrors[keyof UpdateCustomersMetafieldsErrors];
export type UpdateCustomersMetafieldsResponses = {
    200: MetaFieldCollectionPostPutResponses;
};
export type UpdateCustomersMetafieldsResponse = UpdateCustomersMetafieldsResponses[keyof UpdateCustomersMetafieldsResponses];
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
    200: Array<CustomersCustomerIdStoredInstrumentsGetResponsesContentApplicationJsonSchemaItems>;
};
export type GetCustomerStoredInstrumentsResponse = GetCustomerStoredInstrumentsResponses[keyof GetCustomerStoredInstrumentsResponses];
export type ValidateCustomerCredentialsData = {
    body?: ValidateCustomerCredentialsObject;
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
