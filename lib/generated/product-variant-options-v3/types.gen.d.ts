export type metaCollection_Full = {
    pagination?: pagination_Full;
};
export type metaEmpty_Full = {
    [key: string]: unknown;
};
export type pagination_Full = {
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
export type ParameterAccept = string;
export type ParameterContentType = string;
export type ParameterExcludeFieldsParam = Array<(string)>;
export type ParameterIncludeFieldsParam = Array<(string)>;
export type ParameterLimitParam = number;
export type ParameterOptionIdParam = number;
export type ParameterPageParam = number;
export type ParameterProductIdParam = number;
export type ParameterValueIdParam = number;
export type productOption_Base = {
    id?: (number) | null;
    product_id?: number;
    display_name?: string;
    type?: 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
    config?: productOptionConfig_Full;
    sort_order?: number;
    option_values?: Array<productOptionOptionValue_Full>;
};
export type type = 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
export type productOption_Full = productOption_Base & {
    name?: string;
};
export type productOptionConfig_Full = {
    default_value?: string;
    checked_by_default?: boolean;
    checkbox_label?: string;
    date_limited?: boolean;
    date_limit_mode?: 'earliest' | 'range' | 'latest';
    date_earliest_value?: string;
    date_latest_value?: string;
    file_types_mode?: 'specific' | 'all';
    file_types_supported?: Array<(string)>;
    file_types_other?: Array<(string)>;
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
export type date_limit_mode = 'earliest' | 'range' | 'latest';
export type file_types_mode = 'specific' | 'all';
export type number_limit_mode = 'lowest' | 'highest' | 'range';
export type product_list_shipping_calc = 'none' | 'weight' | 'package';
export type productOptionOptionValue_Base = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: {
        [key: string]: unknown;
    } | null;
};
export type productOptionOptionValue_Full = productOptionOptionValue_Base & {
    id?: number;
};
export type GetProductVariantOptionsData = {
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<(string)>;
        limit?: number;
        page?: number;
    };
};
export type GetProductVariantOptionsResponse = ({
    data?: Array<productOption_Full>;
    meta?: metaCollection_Full;
});
export type GetProductVariantOptionsError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type CreateProductVariantOptionData = {
    body: ({
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
            file_types_supported?: Array<(string)>;
            file_types_other?: Array<(string)>;
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
        option_values?: Array<({
            is_default?: boolean;
            label: string;
            sort_order: number;
            value_data?: {
                [key: string]: unknown;
            };
        } & {
            id?: number;
        })>;
        image_url?: string;
    });
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
};
export type CreateProductVariantOptionResponse = ({
    data?: ({
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
            file_types_supported?: Array<(string)>;
            file_types_other?: Array<(string)>;
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
        option_values?: Array<({
            is_default?: boolean;
            label: string;
            sort_order: number;
            value_data?: {
                [key: string]: unknown;
            };
        } & {
            id?: number;
        })>;
        image_url?: string;
    } & {
        name?: string;
    });
    meta?: {
        [key: string]: unknown;
    };
});
export type CreateProductVariantOptionError = ({
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type GetProductVariantOptionData = {
    headers: {
        Accept: string;
    };
    path: {
        option_id: number;
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<(string)>;
    };
};
export type GetProductVariantOptionResponse = ({
    data?: productOption_Full;
    meta?: metaEmpty_Full;
});
export type GetProductVariantOptionError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type UpdateProductVariantOptionData = {
    body: ({
        id?: (number) | null;
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
            file_types_supported?: Array<(string)>;
            file_types_other?: Array<(string)>;
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
        option_values?: Array<({
            is_default?: boolean;
            label: string;
            sort_order: number;
            value_data?: {
                [key: string]: unknown;
            };
        } & {
            id?: number;
        })>;
        image_url?: string;
    });
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        option_id: number;
        product_id: number;
    };
};
export type UpdateProductVariantOptionResponse = ({
    data?: ({
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
            file_types_supported?: Array<(string)>;
            file_types_other?: Array<(string)>;
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
        option_values?: Array<({
            is_default?: boolean;
            label: string;
            sort_order: number;
            value_data?: {
                [key: string]: unknown;
            };
        } & {
            id?: number;
        })>;
        image_url?: string;
    } & {
        name?: string;
    });
    meta?: metaEmpty_Full;
});
export type UpdateProductVariantOptionError = ({
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type DeleteProductVariantOptionData = {
    headers: {
        Accept: string;
    };
    path: {
        option_id: number;
        product_id: number;
    };
};
export type DeleteProductVariantOptionResponse = (void);
export type DeleteProductVariantOptionError = unknown;
export type GetProductVariantOptionValuesData = {
    headers: {
        Accept: string;
    };
    path: {
        option_id: number;
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<(string)>;
        limit?: number;
        page?: number;
    };
};
export type GetProductVariantOptionValuesResponse = ({
    data?: Array<({
        is_default?: boolean;
        label: string;
        sort_order: number;
        value_data?: {
            [key: string]: unknown;
        };
    } & {
        id?: number;
    })>;
    meta?: metaCollection_Full;
});
export type GetProductVariantOptionValuesError = unknown;
export type CreateProductVariantOptionValueData = {
    body: ({
        is_default?: boolean;
        label: string;
        sort_order: number;
        value_data?: {
            [key: string]: unknown;
        };
    });
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        option_id: number;
        product_id: number;
    };
};
export type CreateProductVariantOptionValueResponse = ({
    data?: ({
        is_default?: boolean;
        label: string;
        sort_order: number;
        value_data?: {
            [key: string]: unknown;
        };
    } & {
        id?: number;
    });
    meta?: metaEmpty_Full;
});
export type CreateProductVariantOptionValueError = ({
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type GetProductVariantOptionValueData = {
    headers: {
        Accept: string;
    };
    path: {
        option_id: number;
        product_id: number;
        value_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<(string)>;
    };
};
export type GetProductVariantOptionValueResponse = ({
    data?: ({
        is_default?: boolean;
        label: string;
        sort_order: number;
        value_data?: {
            [key: string]: unknown;
        };
    } & {
        id?: number;
    });
    meta?: metaEmpty_Full;
});
export type GetProductVariantOptionValueError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type UpdateProductVariantOptionValueData = {
    body: ({
        is_default?: boolean;
        label: string;
        sort_order: number;
        value_data?: {
            [key: string]: unknown;
        };
    } & {
        id?: number;
    });
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        option_id: number;
        product_id: number;
        value_id: number;
    };
};
export type UpdateProductVariantOptionValueResponse = ({
    data?: ({
        is_default?: boolean;
        label: string;
        sort_order: number;
        value_data?: {
            [key: string]: unknown;
        };
    } & {
        id?: number;
    });
    meta?: metaEmpty_Full;
});
export type UpdateProductVariantOptionValueError = (unknown | {
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type DeleteProductVariantOptionValueData = {
    headers: {
        Accept: string;
    };
    path: {
        option_id: number;
        product_id: number;
        value_id: number;
    };
};
export type DeleteProductVariantOptionValueResponse = (void);
export type DeleteProductVariantOptionValueError = unknown;
