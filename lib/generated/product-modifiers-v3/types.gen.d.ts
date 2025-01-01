export type adjuster_Full = {
    adjuster?: ('relative' | 'percentage') | null;
    adjuster_value?: number;
};
export type adjuster = 'relative' | 'percentage';
export type adjusters_Full = {
    price?: adjuster_Full;
    weight?: adjuster_Full;
    image_url?: string;
    purchasing_disabled?: {
        status?: boolean;
        message?: string;
    };
};
export type config_Full = {
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
export type ParameterModifierIdParam = number;
export type ParameterPageParam = number;
export type ParameterProductIdParam = number;
export type ParameterValueIdParam = number;
export type productModifier_Base = {
    type: 'date' | 'checkbox' | 'file' | 'text' | 'multi_line_text' | 'numbers_only_text' | 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
    required: boolean;
    sort_order?: number;
    config?: config_Full;
    display_name?: string;
};
export type type = 'date' | 'checkbox' | 'file' | 'text' | 'multi_line_text' | 'numbers_only_text' | 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
export type productModifier_Full = productModifier_Base & {
    id?: number;
    product_id?: number;
    name?: string;
    option_values?: Array<productModifierOptionValue_Full>;
};
export type productModifier_Post = {
    type: 'date' | 'checkbox' | 'file' | 'text' | 'multi_line_text' | 'numbers_only_text' | 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
    required: boolean;
    sort_order?: number;
    config?: config_Full;
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
export type productModifierOptionValue_Base = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: {
        [key: string]: unknown;
    } | null;
    adjusters?: adjusters_Full;
};
export type productModifierOptionValue_Full = productModifierOptionValue_Base & {
    id?: number;
    option_id?: number;
};
export type GetProductModifiersData = {
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
export type GetProductModifiersResponse = ({
    data?: Array<productModifier_Full>;
    meta?: metaCollection_Full;
});
export type GetProductModifiersError = unknown;
export type CreateProductModifierData = {
    body?: productModifier_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
};
export type CreateProductModifierResponse = ({
    data?: {
        items?: productModifier_Full;
    };
    meta?: metaEmpty_Full;
});
export type CreateProductModifierError = ({
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type GetProductModifierData = {
    headers: {
        Accept: string;
    };
    path: {
        modifier_id: number;
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<(string)>;
    };
};
export type GetProductModifierResponse = ({
    data?: productModifier_Full;
    meta?: metaEmpty_Full;
});
export type GetProductModifierError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
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
        modifier_id: number;
        product_id: number;
    };
};
export type UpdateProductModifierResponse = ({
    data?: ({
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
    });
    meta?: metaEmpty_Full;
});
export type UpdateProductModifierError = ({
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type DeleteProductModifierData = {
    headers: {
        Accept: string;
    };
    path: {
        modifier_id: number;
        product_id: number;
    };
};
export type DeleteProductModifierResponse = (void);
export type DeleteProductModifierError = unknown;
export type GetProductModifierValuesData = {
    headers: {
        Accept: string;
    };
    path: {
        modifier_id: number;
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<(string)>;
        limit?: number;
        page?: number;
    };
};
export type GetProductModifierValuesResponse = ({
    data?: Array<productModifierOptionValue_Full>;
    meta?: metaCollection_Full;
});
export type GetProductModifierValuesError = unknown;
export type CreateProductModifierValueData = {
    body: (({
        is_default?: boolean;
        label: string;
        sort_order: number;
        value_data?: {
            [key: string]: unknown;
        };
    } & {
        adjusters?: {
            price?: {
                adjuster?: ('relative' | 'percentage') | null;
                adjuster_value?: number;
            };
            weight?: {
                adjuster?: ('relative' | 'percentage') | null;
                adjuster_value?: number;
            };
            image_url?: string;
            purchasing_disabled?: {
                status?: boolean;
                message?: string;
            };
        };
    }));
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        modifier_id: number;
        product_id: number;
    };
};
export type CreateProductModifierValueResponse = ({
    data?: (({
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
    }) & {
        id?: number;
    });
    meta?: metaEmpty_Full;
});
export type CreateProductModifierValueError = ({
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type GetProductModifierValueData = {
    headers: {
        Accept: string;
    };
    path: {
        modifier_id: number;
        product_id: number;
        value_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<(string)>;
    };
};
export type GetProductModifierValueResponse = ({
    data?: productModifierOptionValue_Full;
    meta?: metaEmpty_Full;
});
export type GetProductModifierValueError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type UpdateProductModifierValueData = {
    body: (({
        is_default?: boolean;
        label: string;
        sort_order: number;
        value_data?: {
            [key: string]: unknown;
        };
    } & {
        adjusters?: {
            price?: {
                adjuster?: ('relative' | 'percentage') | null;
                adjuster_value?: number;
            };
            weight?: {
                adjuster?: ('relative' | 'percentage') | null;
                adjuster_value?: number;
            };
            image_url?: string;
            purchasing_disabled?: {
                status?: boolean;
                message?: string;
            };
        };
    }) & {
        id?: number;
    });
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        modifier_id: number;
        product_id: number;
        value_id: number;
    };
};
export type UpdateProductModifierValueResponse = ({
    data?: (({
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
    }) & {
        id?: number;
    });
    meta?: metaEmpty_Full;
});
export type UpdateProductModifierValueError = ({
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type DeleteProductModifierValueData = {
    headers: {
        Accept: string;
    };
    path: {
        modifier_id: number;
        product_id: number;
        value_id: number;
    };
};
export type DeleteProductModifierValueResponse = (void);
export type DeleteProductModifierValueError = unknown;
export type CreateProductModifierImageData = {
    body?: {
        image_file?: (Blob | File);
    };
    headers: {
        Accept: string;
    };
    path: {
        modifier_id: number;
        product_id: number;
        value_id: number;
    };
};
export type CreateProductModifierImageResponse = ({
    data?: {
        image_url?: string;
    };
    meta?: metaEmpty_Full;
});
export type CreateProductModifierImageError = ({
    [key: string]: unknown;
} | {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} | {
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
