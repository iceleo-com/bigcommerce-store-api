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
export type CustomerGroupPost = {
    name?: string;
    is_default?: boolean;
    category_access?: CategoryAccessLevelFull;
    discount_rules?: Array<{
        type?: 'price_list' | 'all' | 'category' | 'product';
        method?: 'percent' | 'fixed' | 'price';
        amount?: string;
        price_list_id?: number;
    }>;
    date_created?: string;
    date_modified?: string;
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
export type DeleteAllCustomersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/customers';
};
export type DeleteAllCustomersResponses = {
    204: void;
};
export type DeleteAllCustomersResponse = DeleteAllCustomersResponses[keyof DeleteAllCustomersResponses];
export type GetAllCustomersData = {
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
export type GetAllCustomersResponses = {
    200: Array<CustomerFull>;
};
export type GetAllCustomersResponse = GetAllCustomersResponses[keyof GetAllCustomersResponses];
export type CreateANewCustomerData = {
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
export type CreateANewCustomerResponses = {
    200: CustomerFull;
};
export type CreateANewCustomerResponse = CreateANewCustomerResponses[keyof CreateANewCustomerResponses];
export type DeleteACustomerData = {
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
export type DeleteACustomerResponses = {
    204: void;
};
export type DeleteACustomerResponse = DeleteACustomerResponses[keyof DeleteACustomerResponses];
export type GetACustomerData = {
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
export type GetACustomerResponses = {
    200: CustomerFull;
};
export type GetACustomerResponse = GetACustomerResponses[keyof GetACustomerResponses];
export type UpdateACustomerData = {
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
export type UpdateACustomerResponses = {
    200: CustomerBase;
};
export type UpdateACustomerResponse = UpdateACustomerResponses[keyof UpdateACustomerResponses];
export type GetACountOfCustomersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/customers/count';
};
export type GetACountOfCustomersResponses = {
    200: CountFull;
};
export type GetACountOfCustomersResponse = GetACountOfCustomersResponses[keyof GetACountOfCustomersResponses];
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
export type DeleteAllCustomerAddressesData = {
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
export type DeleteAllCustomerAddressesResponses = {
    204: void;
};
export type DeleteAllCustomerAddressesResponse = DeleteAllCustomerAddressesResponses[keyof DeleteAllCustomerAddressesResponses];
export type GetAllCustomerAddressesData = {
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
export type GetAllCustomerAddressesResponses = {
    200: Array<CustomerAddressFull>;
};
export type GetAllCustomerAddressesResponse = GetAllCustomerAddressesResponses[keyof GetAllCustomerAddressesResponses];
export type CreateACustomerAddressData = {
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
export type CreateACustomerAddressResponses = {
    200: CustomerAddressFull;
};
export type CreateACustomerAddressResponse = CreateACustomerAddressResponses[keyof CreateACustomerAddressResponses];
export type DeletesACustomerAddressData = {
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
export type DeletesACustomerAddressResponses = {
    204: void;
};
export type DeletesACustomerAddressResponse = DeletesACustomerAddressResponses[keyof DeletesACustomerAddressResponses];
export type GetACustomerAddressData = {
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
export type GetACustomerAddressResponses = {
    200: CustomerAddressFull;
};
export type GetACustomerAddressResponse = GetACustomerAddressResponses[keyof GetACustomerAddressResponses];
export type UpdateACustomerAddressData = {
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
export type UpdateACustomerAddressResponses = {
    200: CustomerAddressFull;
};
export type UpdateACustomerAddressResponse = UpdateACustomerAddressResponses[keyof UpdateACustomerAddressResponses];
export type GetACountofCustomerAddressesData = {
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
export type GetACountofCustomerAddressesResponses = {
    200: CountFull;
};
export type GetACountofCustomerAddressesResponse = GetACountofCustomerAddressesResponses[keyof GetACountofCustomerAddressesResponses];
export type DeleteAllCustomerGroupsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/customer_groups';
};
export type DeleteAllCustomerGroupsResponses = {
    204: void;
};
export type DeleteAllCustomerGroupsResponse = DeleteAllCustomerGroupsResponses[keyof DeleteAllCustomerGroupsResponses];
export type GetAllCustomerGroupsData = {
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
        '`date_modified:min`'?: string;
        '`date_modified:max`'?: string;
        is_group_for_guests?: boolean;
    };
    url: '/customer_groups';
};
export type GetAllCustomerGroupsResponses = {
    200: Array<CustomerGroupFull>;
};
export type GetAllCustomerGroupsResponse = GetAllCustomerGroupsResponses[keyof GetAllCustomerGroupsResponses];
export type CreateACustomerGroupData = {
    body: CustomerGroupPost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/customer_groups';
};
export type CreateACustomerGroupResponses = {
    200: CustomerGroupFull;
    207: {
        status?: number;
        message?: string;
    };
};
export type CreateACustomerGroupResponse = CreateACustomerGroupResponses[keyof CreateACustomerGroupResponses];
export type DeleteACustomerGroupData = {
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
export type DeleteACustomerGroupErrors = {
    400: ErrorRequest;
};
export type DeleteACustomerGroupError = DeleteACustomerGroupErrors[keyof DeleteACustomerGroupErrors];
export type DeleteACustomerGroupResponses = {
    204: void;
};
export type DeleteACustomerGroupResponse = DeleteACustomerGroupResponses[keyof DeleteACustomerGroupResponses];
export type GetACustomerGroupData = {
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
export type GetACustomerGroupErrors = {
    400: ErrorRequest;
};
export type GetACustomerGroupError = GetACustomerGroupErrors[keyof GetACustomerGroupErrors];
export type GetACustomerGroupResponses = {
    200: CustomerGroupFull;
};
export type GetACustomerGroupResponse = GetACustomerGroupResponses[keyof GetACustomerGroupResponses];
export type UpdateACustomerGroupData = {
    body?: CustomerGroupFull;
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
export type UpdateACustomerGroupResponses = {
    200: CustomerGroupFull;
    207: {
        status: number;
        message: string;
    };
};
export type UpdateACustomerGroupResponse = UpdateACustomerGroupResponses[keyof UpdateACustomerGroupResponses];
export type GetACountOfCustomerGroupsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/customer_groups/count';
};
export type GetACountOfCustomerGroupsResponses = {
    200: CountFull;
};
export type GetACountOfCustomerGroupsResponse = GetACountOfCustomerGroupsResponses[keyof GetACountOfCustomerGroupsResponses];
