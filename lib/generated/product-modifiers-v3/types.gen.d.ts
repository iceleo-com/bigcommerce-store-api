export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type ProductModifierBase = {
    type: 'date' | 'checkbox' | 'file' | 'text' | 'multi_line_text' | 'numbers_only_text' | 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
    required: boolean;
    sort_order?: number;
    config?: ConfigFull;
    display_name?: string;
};
export type ProductModifierPost = {
    type: 'date' | 'checkbox' | 'file' | 'text' | 'multi_line_text' | 'numbers_only_text' | 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
    required: boolean;
    sort_order?: number;
    config?: ConfigFull;
    option_values?: Array<{
        id?: number;
        is_default?: boolean;
        adjusters?: {
            price?: {
                adjuster?: string;
                adjuster_value?: number;
            };
        };
    }>;
    display_name: string;
};
export type ProductModifierFull = ProductModifierBase & {
    id?: number;
    product_id?: number;
    name?: string;
    option_values?: Array<ProductModifierOptionValueFull>;
};
export type ProductModifierOptionValueBase = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: {
        [key: string]: unknown;
    } | null;
    adjusters?: AdjustersFull;
};
export type ProductModifierOptionValueFull = ProductModifierOptionValueBase & {
    id?: number;
    option_id?: number;
};
export type AdjusterFull = {
    adjuster?: 'relative' | 'percentage';
    adjuster_value?: number;
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
export type ConfigFull = {
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
export type AdjustersFull = {
    price?: AdjusterFull;
    weight?: AdjusterFull;
    image_url?: string;
    purchasing_disabled?: {
        status?: boolean;
        message?: string;
    };
};
export type ProductIdParam = number;
export type ModifierIdParam = number;
export type ValueIdParam = number;
export type Accept = string;
export type ContentType = string;
export type PageParam = number;
export type LimitParam = number;
export type IncludeFieldsParam = Array<string>;
export type ExcludeFieldsParam = Array<string>;
export type GetProductModifiersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
        page?: number;
        limit?: number;
    };
    url: '/catalog/products/{product_id}/modifiers';
};
export type GetProductModifiersResponses = {
    200: {
        data?: Array<ProductModifierFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetProductModifiersResponse = GetProductModifiersResponses[keyof GetProductModifiersResponses];
export type CreateProductModifierData = {
    body?: ProductModifierPost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/modifiers';
};
export type CreateProductModifierErrors = {
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
export type CreateProductModifierError = CreateProductModifierErrors[keyof CreateProductModifierErrors];
export type CreateProductModifierResponses = {
    200: {
        data?: {
            items?: ProductModifierFull;
        };
        meta?: MetaEmptyFull;
    };
};
export type CreateProductModifierResponse = CreateProductModifierResponses[keyof CreateProductModifierResponses];
export type DeleteProductModifierData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}';
};
export type DeleteProductModifierResponses = {
    204: void;
};
export type DeleteProductModifierResponse = DeleteProductModifierResponses[keyof DeleteProductModifierResponses];
export type GetProductModifierData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}';
};
export type GetProductModifierErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductModifierError = GetProductModifierErrors[keyof GetProductModifierErrors];
export type GetProductModifierResponses = {
    200: {
        data?: ProductModifierFull;
        meta?: MetaEmptyFull;
    };
};
export type GetProductModifierResponse = GetProductModifierResponses[keyof GetProductModifierResponses];
export type UpdateProductModifierData = {
    body?: {
        type: 'date' | 'checkbox' | 'file' | 'text' | 'multi_line_text' | 'numbers_only_text' | 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
        required: boolean;
        sort_order?: number;
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
        option_values?: Array<{
            id?: number;
            is_default?: boolean;
            adjusters?: {
                price?: {
                    adjuster?: 'relative' | 'percentage';
                    adjuster_value?: number;
                };
            };
        }>;
        display_name?: string;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        modifier_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}';
};
export type UpdateProductModifierErrors = {
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
export type UpdateProductModifierError = UpdateProductModifierErrors[keyof UpdateProductModifierErrors];
export type UpdateProductModifierResponses = {
    200: {
        data?: {
            type: 'date' | 'checkbox' | 'file' | 'text' | 'multi_line_text' | 'numbers_only_text' | 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
            required: boolean;
            sort_order?: number;
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
            option_values?: Array<{
                is_default?: boolean;
                label: string;
                sort_order: number;
                value_data?: {
                    [key: string]: unknown;
                };
                adjusters?: {
                    price?: {
                        adjuster?: 'relative' | 'percentage';
                        adjuster_value?: number;
                    };
                    weight?: {
                        adjuster?: 'relative' | 'percentage';
                        adjuster_value?: number;
                    };
                    image_url?: string;
                    purchasing_disabled?: {
                        status?: boolean;
                        message?: string;
                    };
                };
                id?: number;
            }>;
        } & {
            id?: number;
            product_id?: number;
            name?: string;
            display_name?: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type UpdateProductModifierResponse = UpdateProductModifierResponses[keyof UpdateProductModifierResponses];
export type GetProductModifierValuesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
        page?: number;
        limit?: number;
    };
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}/values';
};
export type GetProductModifierValuesResponses = {
    200: {
        data?: Array<ProductModifierOptionValueFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetProductModifierValuesResponse = GetProductModifierValuesResponses[keyof GetProductModifierValuesResponses];
export type CreateProductModifierValueData = {
    body: {
        is_default?: boolean;
        label: string;
        sort_order: number;
        value_data?: {
            [key: string]: unknown;
        };
    } & {
        adjusters?: {
            price?: {
                adjuster?: 'relative' | 'percentage';
                adjuster_value?: number;
            };
            weight?: {
                adjuster?: 'relative' | 'percentage';
                adjuster_value?: number;
            };
            image_url?: string;
            purchasing_disabled?: {
                status?: boolean;
                message?: string;
            };
        };
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        modifier_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}/values';
};
export type CreateProductModifierValueErrors = {
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
export type CreateProductModifierValueError = CreateProductModifierValueErrors[keyof CreateProductModifierValueErrors];
export type CreateProductModifierValueResponses = {
    200: {
        data?: {
            is_default?: boolean;
            label: string;
            sort_order: number;
            value_data?: {
                [key: string]: unknown;
            };
        } & {
            adjusters?: {
                price?: {
                    adjuster?: 'relative' | 'percentage';
                    adjuster_value?: number;
                };
                weight?: {
                    adjuster?: 'relative' | 'percentage';
                    adjuster_value?: number;
                };
                image_url?: string;
                purchasing_disabled?: {
                    status?: boolean;
                    message?: string;
                };
            };
        } & {
            id?: number;
        };
        meta?: MetaEmptyFull;
    };
};
export type CreateProductModifierValueResponse = CreateProductModifierValueResponses[keyof CreateProductModifierValueResponses];
export type DeleteProductModifierValueData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
        value_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}';
};
export type DeleteProductModifierValueResponses = {
    204: void;
};
export type DeleteProductModifierValueResponse = DeleteProductModifierValueResponses[keyof DeleteProductModifierValueResponses];
export type GetProductModifierValueData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
        value_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}';
};
export type GetProductModifierValueErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductModifierValueError = GetProductModifierValueErrors[keyof GetProductModifierValueErrors];
export type GetProductModifierValueResponses = {
    200: {
        data?: ProductModifierOptionValueFull;
        meta?: MetaEmptyFull;
    };
};
export type GetProductModifierValueResponse = GetProductModifierValueResponses[keyof GetProductModifierValueResponses];
export type UpdateProductModifierValueData = {
    body: {
        is_default?: boolean;
        label: string;
        sort_order: number;
        value_data?: {
            [key: string]: unknown;
        };
    } & {
        adjusters?: {
            price?: {
                adjuster?: 'relative' | 'percentage';
                adjuster_value?: number;
            };
            weight?: {
                adjuster?: 'relative' | 'percentage';
                adjuster_value?: number;
            };
            image_url?: string;
            purchasing_disabled?: {
                status?: boolean;
                message?: string;
            };
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
        modifier_id: number;
        value_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}';
};
export type UpdateProductModifierValueErrors = {
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
export type UpdateProductModifierValueError = UpdateProductModifierValueErrors[keyof UpdateProductModifierValueErrors];
export type UpdateProductModifierValueResponses = {
    200: {
        data?: {
            is_default?: boolean;
            label: string;
            sort_order: number;
            value_data?: {
                [key: string]: unknown;
            };
        } & {
            adjusters?: {
                price?: {
                    adjuster?: 'relative' | 'percentage';
                    adjuster_value?: number;
                };
                weight?: {
                    adjuster?: 'relative' | 'percentage';
                    adjuster_value?: number;
                };
                image_url?: string;
                purchasing_disabled?: {
                    status?: boolean;
                    message?: string;
                };
            };
        } & {
            id?: number;
        };
        meta?: MetaEmptyFull;
    };
};
export type UpdateProductModifierValueResponse = UpdateProductModifierValueResponses[keyof UpdateProductModifierValueResponses];
export type CreateProductModifierImageData = {
    body?: {
        image_file?: Blob | File;
    };
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
        value_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image';
};
export type CreateProductModifierImageErrors = {
    400: {
        [key: string]: unknown;
    };
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
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
export type CreateProductModifierImageError = CreateProductModifierImageErrors[keyof CreateProductModifierImageErrors];
export type CreateProductModifierImageResponses = {
    200: {
        data?: {
            image_url?: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type CreateProductModifierImageResponse = CreateProductModifierImageResponses[keyof CreateProductModifierImageResponses];
