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
export type GetModifiersData = {
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
    url: '/catalog/products/{product_id}/modifiers';
};
export type GetModifiersResponses = {
    200: {
        data?: Array<ProductModifierFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetModifiersResponse = GetModifiersResponses[keyof GetModifiersResponses];
export type CreateModifierData = {
    body: {
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
        }>;
    } & {
        display_name: string;
    };
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
export type CreateModifierErrors = {
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
export type CreateModifierError = CreateModifierErrors[keyof CreateModifierErrors];
export type CreateModifierResponses = {
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
export type CreateModifierResponse = CreateModifierResponses[keyof CreateModifierResponses];
export type DeleteModifierByIdData = {
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
export type DeleteModifierByIdResponses = {
    204: void;
};
export type DeleteModifierByIdResponse = DeleteModifierByIdResponses[keyof DeleteModifierByIdResponses];
export type GetModifierByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}';
};
export type GetModifierByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetModifierByIdError = GetModifierByIdErrors[keyof GetModifierByIdErrors];
export type GetModifierByIdResponses = {
    200: {
        data?: ProductModifierFull;
        meta?: MetaEmptyFull;
    };
};
export type GetModifierByIdResponse = GetModifierByIdResponses[keyof GetModifierByIdResponses];
export type UpdateModifierData = {
    body: {
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
export type UpdateModifierErrors = {
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
export type UpdateModifierError = UpdateModifierErrors[keyof UpdateModifierErrors];
export type UpdateModifierResponses = {
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
export type UpdateModifierResponse = UpdateModifierResponses[keyof UpdateModifierResponses];
export type GetModifierValuesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
        page?: number;
        limit?: number;
    };
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}/values';
};
export type GetModifierValuesResponses = {
    200: {
        data?: Array<ProductModifierOptionValueFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetModifierValuesResponse = GetModifierValuesResponses[keyof GetModifierValuesResponses];
export type CreateModifierValueData = {
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
export type CreateModifierValueErrors = {
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
export type CreateModifierValueError = CreateModifierValueErrors[keyof CreateModifierValueErrors];
export type CreateModifierValueResponses = {
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
export type CreateModifierValueResponse = CreateModifierValueResponses[keyof CreateModifierValueResponses];
export type DeleteModifierValueByIdData = {
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
export type DeleteModifierValueByIdResponses = {
    204: void;
};
export type DeleteModifierValueByIdResponse = DeleteModifierValueByIdResponses[keyof DeleteModifierValueByIdResponses];
export type GetModifierValueByIdData = {
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
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}';
};
export type GetModifierValueByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetModifierValueByIdError = GetModifierValueByIdErrors[keyof GetModifierValueByIdErrors];
export type GetModifierValueByIdResponses = {
    200: {
        data?: ProductModifierOptionValueFull;
        meta?: MetaEmptyFull;
    };
};
export type GetModifierValueByIdResponse = GetModifierValueByIdResponses[keyof GetModifierValueByIdResponses];
export type UpdateModifierValueData = {
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
export type UpdateModifierValueErrors = {
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
export type UpdateModifierValueError = UpdateModifierValueErrors[keyof UpdateModifierValueErrors];
export type UpdateModifierValueResponses = {
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
export type UpdateModifierValueResponse = UpdateModifierValueResponses[keyof UpdateModifierValueResponses];
export type CreateModifierImageData = {
    body?: {
        image_file?: Blob | File;
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
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image';
};
export type CreateModifierImageErrors = {
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
export type CreateModifierImageError = CreateModifierImageErrors[keyof CreateModifierImageErrors];
export type CreateModifierImageResponses = {
    200: {
        data?: {
            image_url?: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type CreateModifierImageResponse = CreateModifierImageResponses[keyof CreateModifierImageResponses];
