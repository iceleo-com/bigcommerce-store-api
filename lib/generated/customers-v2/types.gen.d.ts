export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2' | (string & {});
};
export type BillingAddressFull = {
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
    form_fields?: Array<{
        name?: string;
        value?: string;
    }>;
};
export type CustomerFormFields = {
    name?: string;
    value?: string;
};
export type ShippingAddressFull = {
    url?: string;
    resource?: string;
};
export type CustomerFull = {
    readonly id?: number;
    readonly date_created?: string;
    readonly date_modified?: string;
} & CustomerBase;
export type CategoryAccessLevelFull = {
    type?: 'all' | 'specific' | 'none';
    categories?: Array<number>;
};
export type CountFull = {
    count?: number;
};
export type CustomerAddressFull = {
    readonly id?: number;
    readonly country_iso2?: string;
} & CustomerAddressBase;
export type CustomerGroupFull = {
    id?: number;
    name?: string;
    is_default?: boolean;
    category_access?: CategoryAccessLevelFull;
    discount_rules?: Array<{
        type?: 'price_list' | 'all' | 'category' | 'product';
        method?: 'percent' | 'fixed' | 'price';
        amount?: string;
        price_list_id?: number;
    }> | Array<{
        type?: 'price_list' | 'all' | 'category' | 'product';
        method?: 'percent' | 'fixed' | 'price';
        amount?: string;
        category_id?: number;
    }> | Array<{
        type?: 'price_list' | 'all' | 'category' | 'product';
        method?: 'percent' | 'fixed' | 'price';
        amount?: string;
        product_id?: number;
    }> | Array<{
        type?: 'price_list' | 'all' | 'category' | 'product';
        method?: 'percent' | 'fixed' | 'price';
        amount?: string;
    }>;
    date_created?: string;
    date_modified?: string;
    is_group_for_guests?: boolean;
};
export type CountryFull = {
    id?: number;
    country?: string;
    country_iso2?: string;
    country_iso3?: string;
    states?: {
        url?: string;
        resource?: string;
    };
};
export type StatesResourceFull = {
    url?: string;
    resource?: string;
};
export type StateFull = {
    id?: number;
    state?: string;
    state_abbreviation?: string;
    country_id?: number;
};
export type CustomerGroupPostPut = {
    name?: string;
    is_default?: boolean;
    category_access?: CategoryAccessLevelFull;
    discount_rules?: Array<{
        type: 'price_list';
        price_list_id?: number;
    }> | Array<{
        type: 'category';
        method: 'percent' | 'fixed' | 'price';
        amount: string;
        category_id: number;
    } | {
        type: 'product';
        method: 'percent' | 'fixed' | 'price';
        amount: string;
        product_id: number;
    } | {
        type: 'all';
        method?: 'percent' | 'fixed' | 'price';
        amount?: string;
    }>;
    is_group_for_guests?: boolean;
};
export type ValidatePassword = {
    success?: boolean;
};
export type CustomerBase = {
    _authentication?: {
        force_reset?: boolean;
        password?: string;
        password_confirmation?: string;
    };
    company?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    store_credit?: string;
    registration_ip_address?: string;
    customer_group_id?: number;
    notes?: string;
    tax_exempt_category?: string;
    readonly accepts_marketing?: boolean;
    addresses?: {
        url?: string;
        resource?: string;
    };
    readonly form_fields?: Array<{
        name?: string;
        value?: string | null;
    }> | null;
    reset_pass_on_login?: boolean;
};
export type CustomerPut = {
    readonly id?: number;
    _authentication?: {
        force_reset?: boolean;
        password?: string;
        password_confirmation?: string;
    };
    company?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    readonly date_created?: string;
    readonly date_modified?: string;
    store_credit?: string;
    registration_ip_address?: string;
    customer_group_id?: number;
    notes?: string;
    tax_exempt_category?: string;
    readonly accepts_marketing?: boolean;
    addresses?: {
        url?: string;
        resource?: string;
    };
    readonly form_fields?: Array<{
        name?: string;
        value?: string;
    }>;
    reset_pass_on_login?: boolean;
};
export type ErrorRequest = {
    errors?: Array<ErrorBasic>;
};
export type ErrorBasic = {
    status?: number;
    title?: string;
    type?: string;
};
export type CustomerAddressBase = {
    customer_id?: number;
    first_name: string;
    last_name: string;
    company?: string;
    street_1: string;
    street_2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone: string;
    address_type?: 'residential' | 'commercial';
};
export type CustomerFullWritable = CustomerBaseWritable;
export type CustomerAddressFullWritable = CustomerAddressBase;
export type CustomerBaseWritable = {
    _authentication?: {
        force_reset?: boolean;
        password?: string;
        password_confirmation?: string;
    };
    company?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    store_credit?: string;
    registration_ip_address?: string;
    customer_group_id?: number;
    notes?: string;
    tax_exempt_category?: string;
    addresses?: {
        url?: string;
        resource?: string;
    };
    reset_pass_on_login?: boolean;
};
export type CustomerPutWritable = {
    _authentication?: {
        force_reset?: boolean;
        password?: string;
        password_confirmation?: string;
    };
    company?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    store_credit?: string;
    registration_ip_address?: string;
    customer_group_id?: number;
    notes?: string;
    tax_exempt_category?: string;
    addresses?: {
        url?: string;
        resource?: string;
    };
    reset_pass_on_login?: boolean;
};
export type Accept = string;
export type ContentType = string;
export type CustomerId = number;
export type CustomerGroupId = number;
export type CustomerAddressId = number;
export type IsGroupForGuests = boolean;
export type DeleteCustomersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/customers';
};
export type DeleteCustomersResponses = {
    204: void;
};
export type DeleteCustomersResponse = DeleteCustomersResponses[keyof DeleteCustomersResponses];
export type GetCustomersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        first_name?: string;
        last_name?: string;
        company?: string;
        email?: string;
        phone?: string;
        store_credit?: string;
        customer_group_id?: number;
        min_id?: number;
        max_id?: number;
        min_date_created?: string;
        max_date_created?: string;
        min_date_modified?: string;
        max_date_modified?: string;
        tax_exempt_category?: string;
    };
    url: '/customers';
};
export type GetCustomersResponses = {
    200: Array<CustomerFull>;
};
export type GetCustomersResponse = GetCustomersResponses[keyof GetCustomersResponses];
export type CreateCustomerData = {
    body: {
        _authentication?: {
            [key: string]: unknown;
        };
        company?: string;
        first_name?: string;
        last_name?: string;
        phone?: string;
        date_modified?: string;
        store_credit?: number;
        registration_ip_address?: string;
        customer_group_id?: number;
        notes?: string;
        tax_exempt_category?: string;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/customers';
};
export type CreateCustomerResponses = {
    200: CustomerFull;
};
export type CreateCustomerResponse = CreateCustomerResponses[keyof CreateCustomerResponses];
export type DeleteCustomerData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        customer_id: number;
    };
    query?: never;
    url: '/customers/{customer_id}';
};
export type DeleteCustomerResponses = {
    204: void;
};
export type DeleteCustomerResponse = DeleteCustomerResponses[keyof DeleteCustomerResponses];
export type GetCustomerData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        customer_id: number;
    };
    query?: never;
    url: '/customers/{customer_id}';
};
export type GetCustomerResponses = {
    200: CustomerFull;
};
export type GetCustomerResponse = GetCustomerResponses[keyof GetCustomerResponses];
export type UpdateCustomerData = {
    body?: CustomerPutWritable;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        customer_id: number;
    };
    query?: never;
    url: '/customers/{customer_id}';
};
export type UpdateCustomerResponses = {
    200: CustomerBase;
};
export type UpdateCustomerResponse = UpdateCustomerResponses[keyof UpdateCustomerResponses];
export type GetCustomersCountData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/customers/count';
};
export type GetCustomersCountResponses = {
    200: CountFull;
};
export type GetCustomersCountResponse = GetCustomersCountResponses[keyof GetCustomersCountResponses];
export type ValidateCustomerPasswordData = {
    body: {
        password?: string;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        customer_id: number;
    };
    query?: never;
    url: '/customers/{customer_id}/validate';
};
export type ValidateCustomerPasswordResponses = {
    200: ValidatePassword;
};
export type ValidateCustomerPasswordResponse = ValidateCustomerPasswordResponses[keyof ValidateCustomerPasswordResponses];
export type DeleteCustomerAddressesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        customer_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/customers/{customer_id}/addresses';
};
export type DeleteCustomerAddressesResponses = {
    204: void;
};
export type DeleteCustomerAddressesResponse = DeleteCustomerAddressesResponses[keyof DeleteCustomerAddressesResponses];
export type GetCustomerAddressesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        customer_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/customers/{customer_id}/addresses';
};
export type GetCustomerAddressesResponses = {
    200: Array<CustomerAddressFull>;
};
export type GetCustomerAddressesResponse = GetCustomerAddressesResponses[keyof GetCustomerAddressesResponses];
export type CreateCustomerAddressData = {
    body: CustomerAddressBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        customer_id: number;
    };
    query?: never;
    url: '/customers/{customer_id}/addresses';
};
export type CreateCustomerAddressResponses = {
    200: CustomerAddressFull;
};
export type CreateCustomerAddressResponse = CreateCustomerAddressResponses[keyof CreateCustomerAddressResponses];
export type DeletesCustomerAddressData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        customer_id: number;
        customer_address_id: number;
    };
    query?: never;
    url: '/customers/{customer_id}/addresses/{customer_address_id}';
};
export type DeletesCustomerAddressResponses = {
    204: void;
};
export type DeletesCustomerAddressResponse = DeletesCustomerAddressResponses[keyof DeletesCustomerAddressResponses];
export type GetCustomerAddressData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        customer_id: number;
        customer_address_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/customers/{customer_id}/addresses/{customer_address_id}';
};
export type GetCustomerAddressResponses = {
    200: CustomerAddressFull;
};
export type GetCustomerAddressResponse = GetCustomerAddressResponses[keyof GetCustomerAddressResponses];
export type UpdateCustomerAddressData = {
    body: {
        readonly id?: number;
        customer_id?: number;
        first_name: string;
        last_name: string;
        company?: string;
        street_1: string;
        street_2?: string;
        city: string;
        state: string;
        zip: string;
        country: string;
        readonly country_iso2?: string;
        phone: string;
        address_type?: 'residential' | 'commercial';
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        customer_id: number;
        customer_address_id: number;
    };
    query?: never;
    url: '/customers/{customer_id}/addresses/{customer_address_id}';
};
export type UpdateCustomerAddressResponses = {
    200: CustomerAddressFull;
};
export type UpdateCustomerAddressResponse = UpdateCustomerAddressResponses[keyof UpdateCustomerAddressResponses];
export type GetCustomerAddressesCountData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        customer_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/customers/{customer_id}/addresses/count';
};
export type GetCustomerAddressesCountResponses = {
    200: CountFull;
};
export type GetCustomerAddressesCountResponse = GetCustomerAddressesCountResponses[keyof GetCustomerAddressesCountResponses];
export type GetCustomerGroupsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        name?: string;
        'name:like'?: string;
        is_default?: boolean;
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
        is_group_for_guests?: boolean;
    };
    url: '/customer_groups';
};
export type GetCustomerGroupsResponses = {
    200: Array<CustomerGroupFull>;
};
export type GetCustomerGroupsResponse = GetCustomerGroupsResponses[keyof GetCustomerGroupsResponses];
export type CreateCustomerGroupData = {
    body: CustomerGroupPostPut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/customer_groups';
};
export type CreateCustomerGroupResponses = {
    200: CustomerGroupFull;
    207: {
        status?: number;
        message?: string;
    };
};
export type CreateCustomerGroupResponse = CreateCustomerGroupResponses[keyof CreateCustomerGroupResponses];
export type DeleteCustomerGroupData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        customer_group_id: number;
    };
    query?: never;
    url: '/customer_groups/{customer_group_id}';
};
export type DeleteCustomerGroupErrors = {
    400: ErrorRequest;
};
export type DeleteCustomerGroupError = DeleteCustomerGroupErrors[keyof DeleteCustomerGroupErrors];
export type DeleteCustomerGroupResponses = {
    204: void;
};
export type DeleteCustomerGroupResponse = DeleteCustomerGroupResponses[keyof DeleteCustomerGroupResponses];
export type GetCustomerGroupData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        customer_group_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
        name?: string;
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
        is_default?: boolean;
    };
    url: '/customer_groups/{customer_group_id}';
};
export type GetCustomerGroupErrors = {
    400: ErrorRequest;
};
export type GetCustomerGroupError = GetCustomerGroupErrors[keyof GetCustomerGroupErrors];
export type GetCustomerGroupResponses = {
    200: CustomerGroupFull;
};
export type GetCustomerGroupResponse = GetCustomerGroupResponses[keyof GetCustomerGroupResponses];
export type UpdateCustomerGroupData = {
    body?: CustomerGroupPostPut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        customer_group_id: number;
    };
    query?: never;
    url: '/customer_groups/{customer_group_id}';
};
export type UpdateCustomerGroupResponses = {
    200: CustomerGroupFull;
    207: {
        status: number;
        message: string;
    };
};
export type UpdateCustomerGroupResponse = UpdateCustomerGroupResponses[keyof UpdateCustomerGroupResponses];
export type GetCustomerGroupsCountData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/customer_groups/count';
};
export type GetCustomerGroupsCountResponses = {
    200: CountFull;
};
export type GetCustomerGroupsCountResponse = GetCustomerGroupsCountResponses[keyof GetCustomerGroupsCountResponses];
