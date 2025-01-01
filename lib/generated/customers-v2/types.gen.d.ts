export type billingAddress_Full = {
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
export type categoryAccessLevel_Full = {
    type?: 'all' | 'specific' | 'none';
    categories?: Array<(number)>;
};
export type type = 'all' | 'specific' | 'none';
export type count_Full = {
    count?: number;
};
export type country_Full = {
    id?: number;
    country?: string;
    country_iso2?: string;
    country_iso3?: string;
    states?: {
        url?: string;
        resource?: string;
    };
};
export type customer_Base = {
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
        value?: (string) | null;
    }> | null;
    reset_pass_on_login?: boolean;
};
export type customer_Full = {
    readonly id?: number;
    readonly date_created?: string;
    readonly date_modified?: string;
} & customer_Base;
export type customer_Put = {
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
export type customerAddress_Base = {
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
export type address_type = 'residential' | 'commercial';
export type customerAddress_Full = {
    readonly id?: number;
    readonly country_iso2?: string;
} & customerAddress_Base;
export type customerFormFields = {
    name?: string;
    value?: string;
};
export type customerGroup_Full = {
    id?: number;
    name?: string;
    is_default?: boolean;
    category_access?: categoryAccessLevel_Full;
    discount_rules?: (Array<{
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
    }>);
    date_created?: string;
    date_modified?: string;
    is_group_for_guests?: boolean;
};
export type customerGroup_Post_Put = {
    name?: string;
    is_default?: boolean;
    category_access?: categoryAccessLevel_Full;
    discount_rules?: (Array<{
        type: 'price_list';
        price_list_id?: number;
    }> | Array<({
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
    })>);
    is_group_for_guests?: boolean;
};
export type ErrorBasic = {
    status?: number;
    title?: string;
    type?: string;
};
export type ErrorRequest = {
    errors?: Array<ErrorBasic>;
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type Parametercustomer_address_id = number;
export type Parametercustomer_group_id = number;
export type Parametercustomer_id = number;
export type Parameteris_group_for_guests = boolean;
export type shippingAddress_Full = {
    url?: string;
    resource?: string;
};
export type state_Full = {
    id?: number;
    state?: string;
    state_abbreviation?: string;
    country_id?: number;
};
export type statesResource_Full = {
    url?: string;
    resource?: string;
};
export type validatePassword = {
    success?: boolean;
};
export type GetCustomersData = {
    headers: {
        Accept: string;
    };
    query?: {
        company?: string;
        customer_group_id?: number;
        email?: string;
        first_name?: string;
        last_name?: string;
        max_date_created?: string;
        max_date_modified?: string;
        max_id?: number;
        min_date_created?: string;
        min_date_modified?: string;
        min_id?: number;
        phone?: string;
        store_credit?: string;
        tax_exempt_category?: string;
    };
};
export type GetCustomersResponse = (Array<customer_Full>);
export type GetCustomersError = unknown;
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
};
export type CreateCustomerResponse = (customer_Full);
export type CreateCustomerError = unknown;
export type DeleteCustomersData = {
    headers: {
        Accept: string;
    };
};
export type DeleteCustomersResponse = (void);
export type DeleteCustomersError = unknown;
export type GetCustomerData = {
    headers: {
        Accept: string;
    };
    path: {
        customer_id: number;
    };
};
export type GetCustomerResponse = (customer_Full);
export type GetCustomerError = unknown;
export type UpdateCustomerData = {
    body?: customer_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        customer_id: number;
    };
};
export type UpdateCustomerResponse = (customer_Base);
export type UpdateCustomerError = unknown;
export type DeleteCustomerData = {
    headers: {
        Accept: string;
    };
    path: {
        customer_id: number;
    };
};
export type DeleteCustomerResponse = (void);
export type DeleteCustomerError = unknown;
export type GetCustomersCountData = {
    headers: {
        Accept: string;
    };
};
export type GetCustomersCountResponse = (count_Full);
export type GetCustomersCountError = unknown;
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
};
export type ValidateCustomerPasswordResponse = (validatePassword);
export type ValidateCustomerPasswordError = unknown;
export type GetCustomerAddressesData = {
    headers: {
        Accept: string;
    };
    path: {
        customer_id: number;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type GetCustomerAddressesResponse = (Array<customerAddress_Full>);
export type GetCustomerAddressesError = unknown;
export type CreateCustomerAddressData = {
    body: customerAddress_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        customer_id: number;
    };
};
export type CreateCustomerAddressResponse = (customerAddress_Full);
export type CreateCustomerAddressError = unknown;
export type DeleteCustomerAddressesData = {
    headers: {
        Accept: string;
    };
    path: {
        customer_id: number;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type DeleteCustomerAddressesResponse = (void);
export type DeleteCustomerAddressesError = unknown;
export type GetCustomerAddressData = {
    headers: {
        Accept: string;
    };
    path: {
        customer_address_id: number;
        customer_id: number;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type GetCustomerAddressResponse = (customerAddress_Full);
export type GetCustomerAddressError = unknown;
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
        customer_address_id: number;
        customer_id: number;
    };
};
export type UpdateCustomerAddressResponse = (customerAddress_Full);
export type UpdateCustomerAddressError = unknown;
export type DeletesCustomerAddressData = {
    headers: {
        Accept: string;
    };
    path: {
        customer_address_id: number;
        customer_id: number;
    };
};
export type DeletesCustomerAddressResponse = (void);
export type DeletesCustomerAddressError = unknown;
export type GetCustomerAddressesCountData = {
    headers: {
        Accept: string;
    };
    path: {
        customer_id: number;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type GetCustomerAddressesCountResponse = (count_Full);
export type GetCustomerAddressesCountError = unknown;
export type GetCustomerGroupsData = {
    headers: {
        Accept: string;
    };
    query?: {
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        is_default?: boolean;
        is_group_for_guests?: boolean;
        limit?: number;
        name?: string;
        'name:like'?: string;
        page?: number;
    };
};
export type GetCustomerGroupsResponse = (Array<customerGroup_Full>);
export type GetCustomerGroupsError = unknown;
export type CreateCustomerGroupData = {
    body: customerGroup_Post_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateCustomerGroupResponse = (customerGroup_Full | {
    status?: number;
    message?: string;
});
export type CreateCustomerGroupError = unknown;
export type GetCustomerGroupData = {
    headers: {
        Accept: string;
    };
    path: {
        customer_group_id: number;
    };
    query?: {
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        is_default?: boolean;
        limit?: number;
        name?: string;
        page?: number;
    };
};
export type GetCustomerGroupResponse = (customerGroup_Full);
export type GetCustomerGroupError = (ErrorRequest);
export type UpdateCustomerGroupData = {
    body?: customerGroup_Post_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        customer_group_id: number;
    };
};
export type UpdateCustomerGroupResponse = (customerGroup_Full | {
    status: number;
    message: string;
});
export type UpdateCustomerGroupError = unknown;
export type DeleteCustomerGroupData = {
    headers: {
        Accept: string;
    };
    path: {
        customer_group_id: number;
    };
};
export type DeleteCustomerGroupResponse = (void);
export type DeleteCustomerGroupError = (ErrorRequest);
export type GetCustomerGroupsCountData = {
    headers: {
        Accept: string;
    };
};
export type GetCustomerGroupsCountResponse = (count_Full);
export type GetCustomerGroupsCountError = unknown;
