export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2' | (string & {});
};
export type CustomerBaseAuthentication = {
    force_reset?: boolean;
    password?: string;
    password_confirmation?: string;
};
export type CustomerBaseAddresses = {
    url?: string;
    resource?: string;
};
export type CustomerBaseFormFieldsItems = {
    name?: string;
    value?: string | null;
};
export type CustomerFull = {
    _authentication?: CustomerBaseAuthentication;
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
    accepts_marketing?: boolean;
    addresses?: CustomerBaseAddresses;
    form_fields?: Array<CustomerBaseFormFieldsItems> | null;
    reset_pass_on_login?: boolean;
    id?: number;
    date_created?: string;
    date_modified?: string;
};
export type CustomersPostRequestBodyContentApplicationJsonSchemaAuthentication = {
    [key: string]: unknown;
};
export type CustomerPutAuthentication = {
    force_reset?: boolean;
    password?: string;
    password_confirmation?: string;
};
export type CustomerPutAddresses = {
    url?: string;
    resource?: string;
};
export type CustomerPutFormFieldsItems = {
    name?: string;
    value?: string;
};
export type CustomerPut = {
    id?: number;
    _authentication?: CustomerPutAuthentication;
    company?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    date_created?: string;
    date_modified?: string;
    store_credit?: string;
    registration_ip_address?: string;
    customer_group_id?: number;
    notes?: string;
    tax_exempt_category?: string;
    accepts_marketing?: boolean;
    addresses?: CustomerPutAddresses;
    form_fields?: Array<CustomerPutFormFieldsItems>;
    reset_pass_on_login?: boolean;
};
export type CustomerBase = {
    _authentication?: CustomerBaseAuthentication;
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
    accepts_marketing?: boolean;
    addresses?: CustomerBaseAddresses;
    form_fields?: Array<CustomerBaseFormFieldsItems> | null;
    reset_pass_on_login?: boolean;
};
export type CountFull = {
    count?: number;
};
export type CustomerAddressBaseAddressType = 'residential' | 'commercial';
export type CustomerAddressFull = {
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
    address_type?: CustomerAddressBaseAddressType;
    id?: number;
    country_iso2?: string;
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
    address_type?: CustomerAddressBaseAddressType;
};
export type CustomersCustomerIdAddressesCustomerAddressIdPutRequestBodyContentApplicationJsonSchemaAddressType = 'residential' | 'commercial';
export type CategoryAccessLevelFullType = 'all' | 'specific' | 'none';
export type CategoryAccessLevelFull = {
    type?: CategoryAccessLevelFullType;
    categories?: Array<number>;
};
export type CustomerGroupFullDiscountRulesOneOf0ItemsType = 'price_list' | 'all' | 'category' | 'product';
export type CustomerGroupFullDiscountRulesOneOf0ItemsMethod = 'percent' | 'fixed' | 'price';
export type CustomerGroupFullDiscountRulesOneOf0Items = {
    type?: CustomerGroupFullDiscountRulesOneOf0ItemsType;
    method?: CustomerGroupFullDiscountRulesOneOf0ItemsMethod;
    amount?: string;
    price_list_id?: number;
};
export type CustomerGroupFullDiscountRules0 = Array<CustomerGroupFullDiscountRulesOneOf0Items>;
export type CustomerGroupFullDiscountRulesOneOf1ItemsType = 'price_list' | 'all' | 'category' | 'product';
export type CustomerGroupFullDiscountRulesOneOf1ItemsMethod = 'percent' | 'fixed' | 'price';
export type CustomerGroupFullDiscountRulesOneOf1Items = {
    type?: CustomerGroupFullDiscountRulesOneOf1ItemsType;
    method?: CustomerGroupFullDiscountRulesOneOf1ItemsMethod;
    amount?: string;
    category_id?: number;
};
export type CustomerGroupFullDiscountRules1 = Array<CustomerGroupFullDiscountRulesOneOf1Items>;
export type CustomerGroupFullDiscountRulesOneOf2ItemsType = 'price_list' | 'all' | 'category' | 'product';
export type CustomerGroupFullDiscountRulesOneOf2ItemsMethod = 'percent' | 'fixed' | 'price';
export type CustomerGroupFullDiscountRulesOneOf2Items = {
    type?: CustomerGroupFullDiscountRulesOneOf2ItemsType;
    method?: CustomerGroupFullDiscountRulesOneOf2ItemsMethod;
    amount?: string;
    product_id?: number;
};
export type CustomerGroupFullDiscountRules2 = Array<CustomerGroupFullDiscountRulesOneOf2Items>;
export type CustomerGroupFullDiscountRulesOneOf3ItemsType = 'price_list' | 'all' | 'category' | 'product';
export type CustomerGroupFullDiscountRulesOneOf3ItemsMethod = 'percent' | 'fixed' | 'price';
export type CustomerGroupFullDiscountRulesOneOf3Items = {
    type?: CustomerGroupFullDiscountRulesOneOf3ItemsType;
    method?: CustomerGroupFullDiscountRulesOneOf3ItemsMethod;
    amount?: string;
};
export type CustomerGroupFullDiscountRules3 = Array<CustomerGroupFullDiscountRulesOneOf3Items>;
export type CustomerGroupFullDiscountRulesOneOf4ItemsType = 'markup';
export type CustomerGroupFullDiscountRulesOneOf4ItemsMethod = 'percent' | 'price';
export type CustomerGroupFullDiscountRulesOneOf4Items = {
    type?: CustomerGroupFullDiscountRulesOneOf4ItemsType;
    method?: CustomerGroupFullDiscountRulesOneOf4ItemsMethod;
    amount?: string;
};
export type CustomerGroupFullDiscountRules4 = Array<CustomerGroupFullDiscountRulesOneOf4Items>;
export type CustomerGroupFullDiscountRules = CustomerGroupFullDiscountRules0 | CustomerGroupFullDiscountRules1 | CustomerGroupFullDiscountRules2 | CustomerGroupFullDiscountRules3 | CustomerGroupFullDiscountRules4;
export type CustomerGroupFull = {
    id?: number;
    name?: string;
    is_default?: boolean;
    category_access?: CategoryAccessLevelFull;
    discount_rules?: CustomerGroupFullDiscountRules;
    date_created?: string;
    date_modified?: string;
    is_group_for_guests?: boolean;
};
export type CustomerGroupPostPutDiscountRulesOneOf0ItemsType = 'price_list';
export type CustomerGroupPostPutDiscountRulesOneOf0Items = {
    type: CustomerGroupPostPutDiscountRulesOneOf0ItemsType;
    price_list_id?: number;
};
export type CustomerGroupPostPutDiscountRules0 = Array<CustomerGroupPostPutDiscountRulesOneOf0Items>;
export type CustomerGroupPostPutDiscountRulesOneOf1ItemsOneOf0Type = 'category';
export type CustomerGroupPostPutDiscountRulesOneOf1ItemsOneOf0Method = 'percent' | 'fixed' | 'price';
export type CustomerGroupPostPutDiscountRulesOneOf1Items0 = {
    type: CustomerGroupPostPutDiscountRulesOneOf1ItemsOneOf0Type;
    method: CustomerGroupPostPutDiscountRulesOneOf1ItemsOneOf0Method;
    amount: string;
    category_id: number;
};
export type CustomerGroupPostPutDiscountRulesOneOf1ItemsOneOf1Type = 'product';
export type CustomerGroupPostPutDiscountRulesOneOf1ItemsOneOf1Method = 'percent' | 'fixed' | 'price';
export type CustomerGroupPostPutDiscountRulesOneOf1Items1 = {
    type: CustomerGroupPostPutDiscountRulesOneOf1ItemsOneOf1Type;
    method: CustomerGroupPostPutDiscountRulesOneOf1ItemsOneOf1Method;
    amount: string;
    product_id: number;
};
export type CustomerGroupPostPutDiscountRulesOneOf1ItemsOneOf2Type = 'all';
export type CustomerGroupPostPutDiscountRulesOneOf1ItemsOneOf2Method = 'percent' | 'fixed' | 'price';
export type CustomerGroupPostPutDiscountRulesOneOf1Items2 = {
    type: CustomerGroupPostPutDiscountRulesOneOf1ItemsOneOf2Type;
    method?: CustomerGroupPostPutDiscountRulesOneOf1ItemsOneOf2Method;
    amount?: string;
};
export type CustomerGroupPostPutDiscountRulesOneOf1Items = CustomerGroupPostPutDiscountRulesOneOf1Items0 | CustomerGroupPostPutDiscountRulesOneOf1Items1 | CustomerGroupPostPutDiscountRulesOneOf1Items2;
export type CustomerGroupPostPutDiscountRules1 = Array<CustomerGroupPostPutDiscountRulesOneOf1Items>;
export type CustomerGroupPostPutDiscountRulesOneOf2ItemsType = 'markup';
export type CustomerGroupPostPutDiscountRulesOneOf2ItemsMethod = 'percent' | 'price';
export type CustomerGroupPostPutDiscountRulesOneOf2Items = {
    type: CustomerGroupPostPutDiscountRulesOneOf2ItemsType;
    method: CustomerGroupPostPutDiscountRulesOneOf2ItemsMethod;
    amount: string;
};
export type CustomerGroupPostPutDiscountRules2 = Array<CustomerGroupPostPutDiscountRulesOneOf2Items>;
export type CustomerGroupPostPutDiscountRules = CustomerGroupPostPutDiscountRules0 | CustomerGroupPostPutDiscountRules1 | CustomerGroupPostPutDiscountRules2;
export type CustomerGroupPostPut = {
    name?: string;
    is_default?: boolean;
    category_access?: CategoryAccessLevelFull;
    discount_rules?: CustomerGroupPostPutDiscountRules;
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
export type ValidatePassword = {
    success?: boolean;
};
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
    204: {
        [key: string]: unknown;
    };
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
    body?: {
        _authentication?: CustomersPostRequestBodyContentApplicationJsonSchemaAuthentication;
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
    204: {
        [key: string]: unknown;
    };
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
    body?: CustomerPut;
    headers: {
        Accept: string;
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
    204: {
        [key: string]: unknown;
    };
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
    body?: CustomerAddressBase;
    headers: {
        Accept: string;
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
    204: {
        [key: string]: unknown;
    };
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
    body?: {
        id?: number;
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
        country_iso2?: string;
        phone: string;
        address_type?: CustomersCustomerIdAddressesCustomerAddressIdPutRequestBodyContentApplicationJsonSchemaAddressType;
    };
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
    body?: CustomerGroupPostPut;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/customer_groups';
};
export type CreateCustomerGroupResponses = {
    200: CustomerGroupFull;
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
    204: {
        [key: string]: unknown;
    };
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
    };
    path: {
        customer_group_id: number;
    };
    query?: never;
    url: '/customer_groups/{customer_group_id}';
};
export type UpdateCustomerGroupResponses = {
    200: CustomerGroupFull;
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
export type ValidateCustomerPasswordData = {
    body?: {
        password?: string;
    };
    headers: {
        Accept: string;
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
