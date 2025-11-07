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
export type PageParam = number;
export type LimitParam = number;
export type IncludeFieldsParam = Array<string>;
export type ExcludeFieldsParam = Array<string>;
export type Accept = string;
export type ContentType = string;
export type GetProductVariantOptionsData = {
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
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/options';
};
export type GetProductVariantOptionsErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductVariantOptionsError = GetProductVariantOptionsErrors[keyof GetProductVariantOptionsErrors];
export type GetProductVariantOptionsResponses = {
    200: {
        data?: Array<ProductOptionFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetProductVariantOptionsResponse = GetProductVariantOptionsResponses[keyof GetProductVariantOptionsResponses];
export type CreateProductVariantOptionData = {
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
export type CreateProductVariantOptionErrors = {
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
export type CreateProductVariantOptionError = CreateProductVariantOptionErrors[keyof CreateProductVariantOptionErrors];
export type CreateProductVariantOptionResponses = {
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
export type CreateProductVariantOptionResponse = CreateProductVariantOptionResponses[keyof CreateProductVariantOptionResponses];
export type DeleteProductVariantOptionData = {
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
export type DeleteProductVariantOptionResponses = {
    204: void;
};
export type DeleteProductVariantOptionResponse = DeleteProductVariantOptionResponses[keyof DeleteProductVariantOptionResponses];
export type GetProductVariantOptionData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        option_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/options/{option_id}';
};
export type GetProductVariantOptionErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductVariantOptionError = GetProductVariantOptionErrors[keyof GetProductVariantOptionErrors];
export type GetProductVariantOptionResponses = {
    200: {
        data?: ProductOptionFull;
        meta?: MetaEmptyFull;
    };
};
export type GetProductVariantOptionResponse = GetProductVariantOptionResponses[keyof GetProductVariantOptionResponses];
export type UpdateProductVariantOptionData = {
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
export type UpdateProductVariantOptionErrors = {
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
export type UpdateProductVariantOptionError = UpdateProductVariantOptionErrors[keyof UpdateProductVariantOptionErrors];
export type UpdateProductVariantOptionResponses = {
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
export type UpdateProductVariantOptionResponse = UpdateProductVariantOptionResponses[keyof UpdateProductVariantOptionResponses];
export type GetProductVariantOptionValuesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        option_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/options/{option_id}/values';
};
export type GetProductVariantOptionValuesResponses = {
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
export type GetProductVariantOptionValuesResponse = GetProductVariantOptionValuesResponses[keyof GetProductVariantOptionValuesResponses];
export type CreateProductVariantOptionValueData = {
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
export type CreateProductVariantOptionValueErrors = {
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
export type CreateProductVariantOptionValueError = CreateProductVariantOptionValueErrors[keyof CreateProductVariantOptionValueErrors];
export type CreateProductVariantOptionValueResponses = {
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
export type CreateProductVariantOptionValueResponse = CreateProductVariantOptionValueResponses[keyof CreateProductVariantOptionValueResponses];
export type DeleteProductVariantOptionValueData = {
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
export type DeleteProductVariantOptionValueResponses = {
    204: void;
};
export type DeleteProductVariantOptionValueResponse = DeleteProductVariantOptionValueResponses[keyof DeleteProductVariantOptionValueResponses];
export type GetProductVariantOptionValueData = {
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
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/options/{option_id}/values/{value_id}';
};
export type GetProductVariantOptionValueErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductVariantOptionValueError = GetProductVariantOptionValueErrors[keyof GetProductVariantOptionValueErrors];
export type GetProductVariantOptionValueResponses = {
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
export type GetProductVariantOptionValueResponse = GetProductVariantOptionValueResponses[keyof GetProductVariantOptionValueResponses];
export type UpdateProductVariantOptionValueData = {
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
export type UpdateProductVariantOptionValueErrors = {
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
export type UpdateProductVariantOptionValueError = UpdateProductVariantOptionValueErrors[keyof UpdateProductVariantOptionValueErrors];
export type UpdateProductVariantOptionValueResponses = {
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
export type UpdateProductVariantOptionValueResponse = UpdateProductVariantOptionValueResponses[keyof UpdateProductVariantOptionValueResponses];
