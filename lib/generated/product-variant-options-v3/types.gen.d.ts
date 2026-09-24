export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type ProductOptionBase = {
    id?: number | null;
    product_id?: number;
    display_name?: string;
    type?: 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
    config?: ProductOptionConfigFull;
    sort_order?: number;
    option_values?: Array<ProductOptionOptionValueFull>;
};
export type ProductOptionFull = ProductOptionBase & {
    name?: string;
};
export type ProductOptionOptionValueBase = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: {
        [key: string]: unknown;
    } | null;
};
export type ProductOptionOptionValueFull = ProductOptionOptionValueBase & {
    id?: number;
};
export type ProductOptionConfigFull = {
    default_value?: string;
    checked_by_default?: boolean;
    checkbox_label?: string;
    date_limited?: boolean;
    date_limit_mode?: 'earliest' | 'range' | 'latest';
    date_earliest_value?: string;
    date_latest_value?: string;
    file_types_mode?: 'specific' | 'all';
    file_types_supported?: Array<string>;
    file_types_other?: Array<string>;
    file_max_size?: number;
    text_characters_limited?: boolean;
    text_min_length?: number;
    text_max_length?: number;
    text_lines_limited?: boolean;
    text_max_lines?: number;
    number_limited?: boolean;
    number_limit_mode?: 'lowest' | 'highest' | 'range';
    number_lowest_value?: number;
    number_highest_value?: number;
    number_integers_only?: boolean;
    product_list_adjusts_inventory?: boolean;
    product_list_adjusts_pricing?: boolean;
    product_list_shipping_calc?: 'none' | 'weight' | 'package';
};
export type MetaCollectionFull = {
    pagination?: PaginationFull;
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
export type MetaEmptyFull = {
    [key: string]: unknown;
};
export type ProductIdParam = number;
export type ValueIdParam = number;
export type OptionIdParam = number;
export type Accept = string;
export type ContentType = string;
export type GetOptionsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/options';
};
export type GetOptionsErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetOptionsError = GetOptionsErrors[keyof GetOptionsErrors];
export type GetOptionsResponses = {
    200: {
        data?: Array<ProductOptionFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetOptionsResponse = GetOptionsResponses[keyof GetOptionsResponses];
export type CreateOptionData = {
    body: {
        product_id?: number;
        display_name?: string;
        type?: 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
        config?: {
            default_value?: string;
            checked_by_default?: boolean;
            checkbox_label?: string;
            date_limited?: boolean;
            date_limit_mode?: 'earliest' | 'range' | 'latest';
            date_earliest_value?: string;
            date_latest_value?: string;
            file_types_mode?: 'specific' | 'all';
            file_types_supported?: Array<string>;
            file_types_other?: Array<string>;
            file_max_size?: number;
            text_characters_limited?: boolean;
            text_min_length?: number;
            text_max_length?: number;
            text_lines_limited?: boolean;
            text_max_lines?: number;
            number_limited?: boolean;
            number_limit_mode?: 'lowest' | 'highest' | 'range';
            number_lowest_value?: number;
            number_highest_value?: number;
            number_integers_only?: boolean;
            product_list_adjusts_inventory?: boolean;
            product_list_adjusts_pricing?: boolean;
            product_list_shipping_calc?: 'none' | 'weight' | 'package';
        };
        sort_order?: number;
        option_values?: Array<{
            is_default?: boolean;
            label: string;
            sort_order: number;
            value_data?: {
                [key: string]: unknown;
            };
        } & {
            id?: number;
        }>;
        image_url?: string;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/options';
};
export type CreateOptionErrors = {
    409: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
    422: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
};
export type CreateOptionError = CreateOptionErrors[keyof CreateOptionErrors];
export type CreateOptionResponses = {
    200: {
        data?: {
            id?: number;
            product_id?: number;
            display_name?: string;
            type?: 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
            config?: {
                default_value?: string;
                checked_by_default?: boolean;
                checkbox_label?: string;
                date_limited?: boolean;
                date_limit_mode?: 'earliest' | 'range' | 'latest';
                date_earliest_value?: string;
                date_latest_value?: string;
                file_types_mode?: 'specific' | 'all';
                file_types_supported?: Array<string>;
                file_types_other?: Array<string>;
                file_max_size?: number;
                text_characters_limited?: boolean;
                text_min_length?: number;
                text_max_length?: number;
                text_lines_limited?: boolean;
                text_max_lines?: number;
                number_limited?: boolean;
                number_limit_mode?: 'lowest' | 'highest' | 'range';
                number_lowest_value?: number;
                number_highest_value?: number;
                number_integers_only?: boolean;
                product_list_adjusts_inventory?: boolean;
                product_list_adjusts_pricing?: boolean;
                product_list_shipping_calc?: 'none' | 'weight' | 'package';
            };
            sort_order?: number;
            option_values?: Array<{
                is_default?: boolean;
                label: string;
                sort_order: number;
                value_data?: {
                    [key: string]: unknown;
                };
            } & {
                id?: number;
            }>;
            image_url?: string;
        } & {
            name?: string;
        };
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type CreateOptionResponse = CreateOptionResponses[keyof CreateOptionResponses];
export type DeleteOptionByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        option_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/options/{option_id}';
};
export type DeleteOptionByIdResponses = {
    204: void;
};
export type DeleteOptionByIdResponse = DeleteOptionByIdResponses[keyof DeleteOptionByIdResponses];
export type GetOptionByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        option_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/options/{option_id}';
};
export type GetOptionByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetOptionByIdError = GetOptionByIdErrors[keyof GetOptionByIdErrors];
export type GetOptionByIdResponses = {
    200: {
        data?: ProductOptionFull;
        meta?: MetaEmptyFull;
    };
};
export type GetOptionByIdResponse = GetOptionByIdResponses[keyof GetOptionByIdResponses];
export type UpdateOptionData = {
    body: {
        id?: number | null;
        product_id?: number;
        display_name?: string;
        type?: 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
        config?: {
            default_value?: string;
            checked_by_default?: boolean;
            checkbox_label?: string;
            date_limited?: boolean;
            date_limit_mode?: 'earliest' | 'range' | 'latest';
            date_earliest_value?: string;
            date_latest_value?: string;
            file_types_mode?: 'specific' | 'all';
            file_types_supported?: Array<string>;
            file_types_other?: Array<string>;
            file_max_size?: number;
            text_characters_limited?: boolean;
            text_min_length?: number;
            text_max_length?: number;
            text_lines_limited?: boolean;
            text_max_lines?: number;
            number_limited?: boolean;
            number_limit_mode?: 'lowest' | 'highest' | 'range';
            number_lowest_value?: number;
            number_highest_value?: number;
            number_integers_only?: boolean;
            product_list_adjusts_inventory?: boolean;
            product_list_adjusts_pricing?: boolean;
            product_list_shipping_calc?: 'none' | 'weight' | 'package';
        };
        sort_order?: number;
        option_values?: Array<{
            is_default?: boolean;
            label: string;
            sort_order: number;
            value_data?: {
                [key: string]: unknown;
            };
        } & {
            id?: number;
        }>;
        image_url?: string;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        option_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/options/{option_id}';
};
export type UpdateOptionErrors = {
    409: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
    422: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
};
export type UpdateOptionError = UpdateOptionErrors[keyof UpdateOptionErrors];
export type UpdateOptionResponses = {
    200: {
        data?: {
            id?: number;
            product_id?: number;
            display_name?: string;
            type?: 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
            config?: {
                default_value?: string;
                checked_by_default?: boolean;
                checkbox_label?: string;
                date_limited?: boolean;
                date_limit_mode?: 'earliest' | 'range' | 'latest';
                date_earliest_value?: string;
                date_latest_value?: string;
                file_types_mode?: 'specific' | 'all';
                file_types_supported?: Array<string>;
                file_types_other?: Array<string>;
                file_max_size?: number;
                text_characters_limited?: boolean;
                text_min_length?: number;
                text_max_length?: number;
                text_lines_limited?: boolean;
                text_max_lines?: number;
                number_limited?: boolean;
                number_limit_mode?: 'lowest' | 'highest' | 'range';
                number_lowest_value?: number;
                number_highest_value?: number;
                number_integers_only?: boolean;
                product_list_adjusts_inventory?: boolean;
                product_list_adjusts_pricing?: boolean;
                product_list_shipping_calc?: 'none' | 'weight' | 'package';
            };
            sort_order?: number;
            option_values?: Array<{
                is_default?: boolean;
                label: string;
                sort_order: number;
                value_data?: {
                    [key: string]: unknown;
                };
            } & {
                id?: number;
            }>;
            image_url?: string;
        } & {
            name?: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type UpdateOptionResponse = UpdateOptionResponses[keyof UpdateOptionResponses];
export type GetOptionValuesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        option_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
        page?: number;
        limit?: number;
    };
    url: '/catalog/products/{product_id}/options/{option_id}/values';
};
export type GetOptionValuesResponses = {
    200: {
        data?: Array<{
            is_default?: boolean;
            label: string;
            sort_order: number;
            value_data?: {
                [key: string]: unknown;
            };
        } & {
            id?: number;
        }>;
        meta?: MetaCollectionFull;
    };
};
export type GetOptionValuesResponse = GetOptionValuesResponses[keyof GetOptionValuesResponses];
export type CreateOptionValueData = {
    body: {
        is_default?: boolean;
        label: string;
        sort_order: number;
        value_data?: {
            [key: string]: unknown;
        };
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        option_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/options/{option_id}/values';
};
export type CreateOptionValueErrors = {
    422: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
};
export type CreateOptionValueError = CreateOptionValueErrors[keyof CreateOptionValueErrors];
export type CreateOptionValueResponses = {
    200: {
        data?: {
            is_default?: boolean;
            label: string;
            sort_order: number;
            value_data?: {
                [key: string]: unknown;
            };
        } & {
            id?: number;
        };
        meta?: MetaEmptyFull;
    };
};
export type CreateOptionValueResponse = CreateOptionValueResponses[keyof CreateOptionValueResponses];
export type DeleteOptionValueByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        option_id: number;
        value_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/options/{option_id}/values/{value_id}';
};
export type DeleteOptionValueByIdResponses = {
    204: void;
};
export type DeleteOptionValueByIdResponse = DeleteOptionValueByIdResponses[keyof DeleteOptionValueByIdResponses];
export type GetOptionValueByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        option_id: number;
        value_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/options/{option_id}/values/{value_id}';
};
export type GetOptionValueByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetOptionValueByIdError = GetOptionValueByIdErrors[keyof GetOptionValueByIdErrors];
export type GetOptionValueByIdResponses = {
    200: {
        data?: {
            is_default?: boolean;
            label: string;
            sort_order: number;
            value_data?: {
                [key: string]: unknown;
            };
        } & {
            id?: number;
        };
        meta?: MetaEmptyFull;
    };
};
export type GetOptionValueByIdResponse = GetOptionValueByIdResponses[keyof GetOptionValueByIdResponses];
export type UpdateOptionValueData = {
    body: {
        is_default?: boolean;
        label: string;
        sort_order: number;
        value_data?: {
            [key: string]: unknown;
        };
    } & {
        id?: number;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        option_id: number;
        value_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/options/{option_id}/values/{value_id}';
};
export type UpdateOptionValueErrors = {
    404: unknown;
    422: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
};
export type UpdateOptionValueError = UpdateOptionValueErrors[keyof UpdateOptionValueErrors];
export type UpdateOptionValueResponses = {
    200: {
        data?: {
            is_default?: boolean;
            label: string;
            sort_order: number;
            value_data?: {
                [key: string]: unknown;
            };
        } & {
            id?: number;
        };
        meta?: MetaEmptyFull;
    };
};
export type UpdateOptionValueResponse = UpdateOptionValueResponses[keyof UpdateOptionValueResponses];
