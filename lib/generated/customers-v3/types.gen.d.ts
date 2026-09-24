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
export type MetaCollection = {
    pagination?: Pagination;
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
    state_or_province?: string;
    postal_code?: string;
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
} & {
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
export type CustomerId = string;
export type CustomersDeleteData = {
    body?: never;
    path?: never;
    query: {
        'id:in': Array<number>;
    };
    url: '/customers';
};
export type CustomersDeleteResponses = {
    204: void;
};
export type CustomersDeleteResponse = CustomersDeleteResponses[keyof CustomersDeleteResponses];
export type CustomersGetData = {
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
        'email:in'?: string;
        'name:in'?: Array<string>;
        'name:like'?: Array<string>;
        'registration_ip_address:in'?: Array<number>;
        include?: Array<'addresses' | 'storecredit' | 'attributes' | 'formfields' | 'shopper_profile_id' | 'segment_ids'>;
        sort?: 'date_created:asc' | 'date_created:desc' | 'last_name:asc' | 'last_name:desc' | 'date_modified:asc' | 'date_modified:desc';
    };
    url: '/customers';
};
export type CustomersGetResponses = {
    200: {
        data?: Array<CustomerFull>;
        meta?: MetaCollection;
    };
};
export type CustomersGetResponse = CustomersGetResponses[keyof CustomersGetResponses];
export type CustomersPostData = {
    body: Array<CustomerPost>;
    path?: never;
    query?: never;
    url: '/customers';
};
export type CustomersPostErrors = {
    413: unknown;
    422: ErrorResponse;
};
export type CustomersPostError = CustomersPostErrors[keyof CustomersPostErrors];
export type CustomersPostResponses = {
    200: {
        data?: Array<CustomerFull>;
        meta?: MetaCollection;
    };
};
export type CustomersPostResponse = CustomersPostResponses[keyof CustomersPostResponses];
export type CustomersPutData = {
    body?: Array<CustomerPut>;
    path?: never;
    query?: never;
    url: '/customers';
};
export type CustomersPutErrors = {
    413: unknown;
    422: ErrorResponse;
};
export type CustomersPutError = CustomersPutErrors[keyof CustomersPutErrors];
export type CustomersPutResponses = {
    200: {
        data?: Array<CustomerFull>;
        meta?: MetaCollection;
    };
};
export type CustomersPutResponse = CustomersPutResponses[keyof CustomersPutResponses];
export type CustomersAddressesDeleteData = {
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
export type CustomersAddressesDeleteResponses = {
    204: void;
};
export type CustomersAddressesDeleteResponse = CustomersAddressesDeleteResponses[keyof CustomersAddressesDeleteResponses];
export type CustomersAddressesGetData = {
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
        include?: 'formfields';
        'id:in'?: Array<number>;
    };
    url: '/customers/addresses';
};
export type CustomersAddressesGetResponses = {
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
export type CustomersAddressesGetResponse = CustomersAddressesGetResponses[keyof CustomersAddressesGetResponses];
export type CustomersAddressesPostData = {
    body: Array<AddressPost>;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query?: never;
    url: '/customers/addresses';
};
export type CustomersAddressesPostErrors = {
    422: ErrorResponse;
};
export type CustomersAddressesPostError = CustomersAddressesPostErrors[keyof CustomersAddressesPostErrors];
export type CustomersAddressesPostResponses = {
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
    } | unknown) & {
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
export type CustomersAddressesPostResponse = CustomersAddressesPostResponses[keyof CustomersAddressesPostResponses];
export type CustomersAddressesPutData = {
    body: Array<AddressPut>;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query?: never;
    url: '/customers/addresses';
};
export type CustomersAddressesPutErrors = {
    422: ErrorResponse;
};
export type CustomersAddressesPutError = CustomersAddressesPutErrors[keyof CustomersAddressesPutErrors];
export type CustomersAddressesPutResponses = {
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
    } | unknown) & {
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
export type CustomersAddressesPutResponse = CustomersAddressesPutResponses[keyof CustomersAddressesPutResponses];
export type CustomerValidateCredentialsData = {
    body: ValidateCustomerCredentialsObject;
    path?: never;
    query?: never;
    url: '/customers/validate-credentials';
};
export type CustomerValidateCredentialsErrors = {
    422: ErrorResponse;
    429: ErrorResponse;
};
export type CustomerValidateCredentialsError = CustomerValidateCredentialsErrors[keyof CustomerValidateCredentialsErrors];
export type CustomerValidateCredentialsResponses = {
    200: ValidateCustomerCredentialsResponseObject;
};
export type CustomerValidateCredentialsResponse = CustomerValidateCredentialsResponses[keyof CustomerValidateCredentialsResponses];
export type CustomerSettingsGetData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/customers/settings';
};
export type CustomerSettingsGetResponses = {
    200: CustomerSettingsObject;
};
export type CustomerSettingsGetResponse = CustomerSettingsGetResponses[keyof CustomerSettingsGetResponses];
export type CustomerSettingsPutData = {
    body: CustomerSettingsObject;
    path?: never;
    query?: never;
    url: '/customers/settings';
};
export type CustomerSettingsPutResponses = {
    200: CustomerSettingsObject;
};
export type CustomerSettingsPutResponse = CustomerSettingsPutResponses[keyof CustomerSettingsPutResponses];
export type CustomerSettingsChannelGetData = {
    body?: never;
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/customers/settings/channels/{channel_id}';
};
export type CustomerSettingsChannelGetResponses = {
    200: CustomerChannelSettingsObject;
};
export type CustomerSettingsChannelGetResponse = CustomerSettingsChannelGetResponses[keyof CustomerSettingsChannelGetResponses];
export type CustomerSettingsChannelPutData = {
    body: CustomerChannelSettingsObject;
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/customers/settings/channels/{channel_id}';
};
export type CustomerSettingsChannelPutResponses = {
    200: CustomerSettingsObject;
};
export type CustomerSettingsChannelPutResponse = CustomerSettingsChannelPutResponses[keyof CustomerSettingsChannelPutResponses];
export type CustomersAttributesDeleteData = {
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
export type CustomersAttributesDeleteResponses = {
    204: void;
};
export type CustomersAttributesDeleteResponse = CustomersAttributesDeleteResponses[keyof CustomersAttributesDeleteResponses];
export type CustomersAttributesGetData = {
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
export type CustomersAttributesGetResponses = {
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
export type CustomersAttributesGetResponse = CustomersAttributesGetResponses[keyof CustomersAttributesGetResponses];
export type CustomersAttributesPostData = {
    body: Array<AttributePost>;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query?: never;
    url: '/customers/attributes';
};
export type CustomersAttributesPostErrors = {
    422: ErrorResponse;
};
export type CustomersAttributesPostError = CustomersAttributesPostErrors[keyof CustomersAttributesPostErrors];
export type CustomersAttributesPostResponses = {
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
export type CustomersAttributesPostResponse = CustomersAttributesPostResponses[keyof CustomersAttributesPostResponses];
export type CustomersAttributesPutData = {
    body: Array<AttributePut>;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query?: never;
    url: '/customers/attributes';
};
export type CustomersAttributesPutErrors = {
    422: ErrorResponse;
};
export type CustomersAttributesPutError = CustomersAttributesPutErrors[keyof CustomersAttributesPutErrors];
export type CustomersAttributesPutResponses = {
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
export type CustomersAttributesPutResponse = CustomersAttributesPutResponses[keyof CustomersAttributesPutResponses];
export type CustomersAttributeValuesDeleteData = {
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
export type CustomersAttributeValuesDeleteResponses = {
    204: void;
};
export type CustomersAttributeValuesDeleteResponse = CustomersAttributeValuesDeleteResponses[keyof CustomersAttributeValuesDeleteResponses];
export type CustomersAttributeValuesGetData = {
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
export type CustomersAttributeValuesGetResponses = {
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
export type CustomersAttributeValuesGetResponse = CustomersAttributeValuesGetResponses[keyof CustomersAttributeValuesGetResponses];
export type CustomersAttributeValuesPutData = {
    body: Array<AttributeValueBase>;
    headers?: {
        Accept?: string;
        'Content-Type'?: string;
    };
    path?: never;
    query?: never;
    url: '/customers/attribute-values';
};
export type CustomersAttributeValuesPutErrors = {
    422: ErrorResponse;
};
export type CustomersAttributeValuesPutError = CustomersAttributeValuesPutErrors[keyof CustomersAttributeValuesPutErrors];
export type CustomersAttributeValuesPutResponses = {
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
export type CustomersAttributeValuesPutResponse = CustomersAttributeValuesPutResponses[keyof CustomersAttributeValuesPutResponses];
export type CustomerFormFieldsGetData = {
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
    };
    url: '/customers/form-field-values';
};
export type CustomerFormFieldsGetErrors = {
    422: ErrorResponse;
};
export type CustomerFormFieldsGetError = CustomerFormFieldsGetErrors[keyof CustomerFormFieldsGetErrors];
export type CustomerFormFieldsGetResponses = {
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
export type CustomerFormFieldsGetResponse = CustomerFormFieldsGetResponses[keyof CustomerFormFieldsGetResponses];
export type CustomerFormFieldValuePutData = {
    body?: Array<FormFieldValueFull>;
    path?: never;
    query?: never;
    url: '/customers/form-field-values';
};
export type CustomerFormFieldValuePutErrors = {
    422: ErrorResponse;
};
export type CustomerFormFieldValuePutError = CustomerFormFieldValuePutErrors[keyof CustomerFormFieldValuePutErrors];
export type CustomerFormFieldValuePutResponses = {
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
export type CustomerFormFieldValuePutResponse = CustomerFormFieldValuePutResponses[keyof CustomerFormFieldValuePutResponses];
export type CustomersConsentByCustomerIdGetData = {
    body?: never;
    path: {
        customerId: string;
    };
    query?: never;
    url: '/customers/{customerId}/consent';
};
export type CustomersConsentByCustomerIdGetErrors = {
    401: ErrorResponse;
    403: ErrorResponse;
    422: ErrorResponse;
};
export type CustomersConsentByCustomerIdGetError = CustomersConsentByCustomerIdGetErrors[keyof CustomersConsentByCustomerIdGetErrors];
export type CustomersConsentByCustomerIdGetResponses = {
    200: ConsentFull;
};
export type CustomersConsentByCustomerIdGetResponse = CustomersConsentByCustomerIdGetResponses[keyof CustomersConsentByCustomerIdGetResponses];
export type CustomersConsentByCustomerIdPutData = {
    body?: DeclareCustomerConsentRequest;
    headers?: {
        'Content-Type'?: string;
    };
    path: {
        customerId: string;
    };
    query?: never;
    url: '/customers/{customerId}/consent';
};
export type CustomersConsentByCustomerIdPutErrors = {
    401: ErrorResponse;
    403: ErrorResponse;
    422: ErrorResponse;
};
export type CustomersConsentByCustomerIdPutError = CustomersConsentByCustomerIdPutErrors[keyof CustomersConsentByCustomerIdPutErrors];
export type CustomersConsentByCustomerIdPutResponses = {
    200: ConsentFull;
};
export type CustomersConsentByCustomerIdPutResponse = CustomersConsentByCustomerIdPutResponses[keyof CustomersConsentByCustomerIdPutResponses];
export type ListstoredinstrumentsData = {
    body?: never;
    path: {
        customerId: string;
    };
    query?: never;
    url: '/customers/{customerId}/stored-instruments';
};
export type ListstoredinstrumentsErrors = {
    401: ErrorResponse;
    403: ErrorResponse;
};
export type ListstoredinstrumentsError = ListstoredinstrumentsErrors[keyof ListstoredinstrumentsErrors];
export type ListstoredinstrumentsResponses = {
    200: Array<({
        type: 'stored_card';
    } & CardInstrument) | ({
        type: 'PayPalAccountInstrument';
    } & PayPalAccountInstrument) | ({
        type: 'stored_bank_account';
    } & BankAccountInstrument)>;
};
export type ListstoredinstrumentsResponse = ListstoredinstrumentsResponses[keyof ListstoredinstrumentsResponses];
