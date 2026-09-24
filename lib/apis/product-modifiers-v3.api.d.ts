import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ProductModifiersV3ApiSpecs from '../generated/product-modifiers-v3';
export * as ProductModifiersV3ApiSpecs from '../generated/product-modifiers-v3';
export declare class ProductModifiersV3Api {
    private readonly request;
    constructor(request: RequestService);
    getModifiers(productId: ProductModifiersV3ApiSpecs.GetModifiersData['path']['product_id'], query?: ProductModifiersV3ApiSpecs.GetModifiersData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductModifiersV3ApiSpecs.ProductModifierFull>;
        meta?: ProductModifiersV3ApiSpecs.MetaCollectionFull;
    }>>>;
    getProductModifiers(...args: Parameters<ProductModifiersV3Api['getModifiers']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductModifiersV3ApiSpecs.ProductModifierFull>;
        meta?: ProductModifiersV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createModifier(productId: ProductModifiersV3ApiSpecs.CreateModifierData['path']['product_id'], requestBody: ProductModifiersV3ApiSpecs.CreateModifierData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            type: "date" | "checkbox" | "file" | "text" | "multi_line_text" | "numbers_only_text" | "radio_buttons" | "rectangles" | "dropdown" | "product_list" | "product_list_with_images" | "swatch";
            required: boolean;
            sort_order?: number;
            config?: {
                default_value?: string;
                checked_by_default?: boolean;
                checkbox_label?: string;
                date_limited?: boolean;
                date_limit_mode?: "earliest" | "range" | "latest";
                date_earliest_value?: string;
                date_latest_value?: string;
                file_types_mode?: "specific" | "all";
                file_types_supported?: Array<string>;
                file_types_other?: Array<string>;
                file_max_size?: number;
                text_characters_limited?: boolean;
                text_min_length?: number;
                text_max_length?: number;
                text_lines_limited?: boolean;
                text_max_lines?: number;
                number_limited?: boolean;
                number_limit_mode?: "lowest" | "highest" | "range";
                number_lowest_value?: number;
                number_highest_value?: number;
                number_integers_only?: boolean;
                product_list_adjusts_inventory?: boolean;
                product_list_adjusts_pricing?: boolean;
                product_list_shipping_calc?: "none" | "weight" | "package";
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
                        adjuster?: "relative" | "percentage";
                        adjuster_value?: number;
                    };
                    weight?: {
                        adjuster?: "relative" | "percentage";
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
        meta?: ProductModifiersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<409, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    createProductModifier(...args: Parameters<ProductModifiersV3Api['createModifier']>): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            type: "date" | "checkbox" | "file" | "text" | "multi_line_text" | "numbers_only_text" | "radio_buttons" | "rectangles" | "dropdown" | "product_list" | "product_list_with_images" | "swatch";
            required: boolean;
            sort_order?: number;
            config?: {
                default_value?: string;
                checked_by_default?: boolean;
                checkbox_label?: string;
                date_limited?: boolean;
                date_limit_mode?: "earliest" | "range" | "latest";
                date_earliest_value?: string;
                date_latest_value?: string;
                file_types_mode?: "specific" | "all";
                file_types_supported?: Array<string>;
                file_types_other?: Array<string>;
                file_max_size?: number;
                text_characters_limited?: boolean;
                text_min_length?: number;
                text_max_length?: number;
                text_lines_limited?: boolean;
                text_max_lines?: number;
                number_limited?: boolean;
                number_limit_mode?: "lowest" | "highest" | "range";
                number_lowest_value?: number;
                number_highest_value?: number;
                number_integers_only?: boolean;
                product_list_adjusts_inventory?: boolean;
                product_list_adjusts_pricing?: boolean;
                product_list_shipping_calc?: "none" | "weight" | "package";
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
                        adjuster?: "relative" | "percentage";
                        adjuster_value?: number;
                    };
                    weight?: {
                        adjuster?: "relative" | "percentage";
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
        meta?: ProductModifiersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<409, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    getModifierById(productId: ProductModifiersV3ApiSpecs.GetModifierByIdData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.GetModifierByIdData['path']['modifier_id'], query?: ProductModifiersV3ApiSpecs.GetModifierByIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductModifiersV3ApiSpecs.ProductModifierFull;
        meta?: ProductModifiersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductModifier(...args: Parameters<ProductModifiersV3Api['getModifierById']>): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductModifiersV3ApiSpecs.ProductModifierFull;
        meta?: ProductModifiersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateModifier(productId: ProductModifiersV3ApiSpecs.UpdateModifierData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.UpdateModifierData['path']['modifier_id'], requestBody: ProductModifiersV3ApiSpecs.UpdateModifierData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            type: "date" | "checkbox" | "file" | "text" | "multi_line_text" | "numbers_only_text" | "radio_buttons" | "rectangles" | "dropdown" | "product_list" | "product_list_with_images" | "swatch";
            required: boolean;
            sort_order?: number;
            config?: {
                default_value?: string;
                checked_by_default?: boolean;
                checkbox_label?: string;
                date_limited?: boolean;
                date_limit_mode?: "earliest" | "range" | "latest";
                date_earliest_value?: string;
                date_latest_value?: string;
                file_types_mode?: "specific" | "all";
                file_types_supported?: Array<string>;
                file_types_other?: Array<string>;
                file_max_size?: number;
                text_characters_limited?: boolean;
                text_min_length?: number;
                text_max_length?: number;
                text_lines_limited?: boolean;
                text_max_lines?: number;
                number_limited?: boolean;
                number_limit_mode?: "lowest" | "highest" | "range";
                number_lowest_value?: number;
                number_highest_value?: number;
                number_integers_only?: boolean;
                product_list_adjusts_inventory?: boolean;
                product_list_adjusts_pricing?: boolean;
                product_list_shipping_calc?: "none" | "weight" | "package";
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
                        adjuster?: "relative" | "percentage";
                        adjuster_value?: number;
                    };
                    weight?: {
                        adjuster?: "relative" | "percentage";
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
        meta?: ProductModifiersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<409, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    updateProductModifier(...args: Parameters<ProductModifiersV3Api['updateModifier']>): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            type: "date" | "checkbox" | "file" | "text" | "multi_line_text" | "numbers_only_text" | "radio_buttons" | "rectangles" | "dropdown" | "product_list" | "product_list_with_images" | "swatch";
            required: boolean;
            sort_order?: number;
            config?: {
                default_value?: string;
                checked_by_default?: boolean;
                checkbox_label?: string;
                date_limited?: boolean;
                date_limit_mode?: "earliest" | "range" | "latest";
                date_earliest_value?: string;
                date_latest_value?: string;
                file_types_mode?: "specific" | "all";
                file_types_supported?: Array<string>;
                file_types_other?: Array<string>;
                file_max_size?: number;
                text_characters_limited?: boolean;
                text_min_length?: number;
                text_max_length?: number;
                text_lines_limited?: boolean;
                text_max_lines?: number;
                number_limited?: boolean;
                number_limit_mode?: "lowest" | "highest" | "range";
                number_lowest_value?: number;
                number_highest_value?: number;
                number_integers_only?: boolean;
                product_list_adjusts_inventory?: boolean;
                product_list_adjusts_pricing?: boolean;
                product_list_shipping_calc?: "none" | "weight" | "package";
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
                        adjuster?: "relative" | "percentage";
                        adjuster_value?: number;
                    };
                    weight?: {
                        adjuster?: "relative" | "percentage";
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
        meta?: ProductModifiersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<409, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    deleteModifierById(productId: ProductModifiersV3ApiSpecs.DeleteModifierByIdData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.DeleteModifierByIdData['path']['modifier_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteProductModifier(...args: Parameters<ProductModifiersV3Api['deleteModifierById']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getModifierValues(productId: ProductModifiersV3ApiSpecs.GetModifierValuesData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.GetModifierValuesData['path']['modifier_id'], query?: ProductModifiersV3ApiSpecs.GetModifierValuesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductModifiersV3ApiSpecs.ProductModifierOptionValueFull>;
        meta?: ProductModifiersV3ApiSpecs.MetaCollectionFull;
    }>>>;
    getProductModifierValues(...args: Parameters<ProductModifiersV3Api['getModifierValues']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductModifiersV3ApiSpecs.ProductModifierOptionValueFull>;
        meta?: ProductModifiersV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createModifierValue(productId: ProductModifiersV3ApiSpecs.CreateModifierValueData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.CreateModifierValueData['path']['modifier_id'], requestBody: ProductModifiersV3ApiSpecs.CreateModifierValueData['body']): Promise<RequestSuccessResponse<200, Required<{
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
                    adjuster?: "relative" | "percentage";
                    adjuster_value?: number;
                };
                weight?: {
                    adjuster?: "relative" | "percentage";
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
        meta?: ProductModifiersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    createProductModifierValue(...args: Parameters<ProductModifiersV3Api['createModifierValue']>): Promise<RequestSuccessResponse<200, Required<{
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
                    adjuster?: "relative" | "percentage";
                    adjuster_value?: number;
                };
                weight?: {
                    adjuster?: "relative" | "percentage";
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
        meta?: ProductModifiersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    getModifierValueById(productId: ProductModifiersV3ApiSpecs.GetModifierValueByIdData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.GetModifierValueByIdData['path']['modifier_id'], valueId: ProductModifiersV3ApiSpecs.GetModifierValueByIdData['path']['value_id'], query?: ProductModifiersV3ApiSpecs.GetModifierValueByIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductModifiersV3ApiSpecs.ProductModifierOptionValueFull;
        meta?: ProductModifiersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductModifierValue(...args: Parameters<ProductModifiersV3Api['getModifierValueById']>): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductModifiersV3ApiSpecs.ProductModifierOptionValueFull;
        meta?: ProductModifiersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateModifierValue(productId: ProductModifiersV3ApiSpecs.UpdateModifierValueData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.UpdateModifierValueData['path']['modifier_id'], valueId: ProductModifiersV3ApiSpecs.UpdateModifierValueData['path']['value_id'], requestBody: ProductModifiersV3ApiSpecs.UpdateModifierValueData['body']): Promise<RequestSuccessResponse<200, Required<{
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
                    adjuster?: "relative" | "percentage";
                    adjuster_value?: number;
                };
                weight?: {
                    adjuster?: "relative" | "percentage";
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
        meta?: ProductModifiersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    updateProductModifierValue(...args: Parameters<ProductModifiersV3Api['updateModifierValue']>): Promise<RequestSuccessResponse<200, Required<{
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
                    adjuster?: "relative" | "percentage";
                    adjuster_value?: number;
                };
                weight?: {
                    adjuster?: "relative" | "percentage";
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
        meta?: ProductModifiersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    deleteModifierValueById(productId: ProductModifiersV3ApiSpecs.DeleteModifierValueByIdData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.DeleteModifierValueByIdData['path']['modifier_id'], valueId: ProductModifiersV3ApiSpecs.DeleteModifierValueByIdData['path']['value_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteProductModifierValue(...args: Parameters<ProductModifiersV3Api['deleteModifierValueById']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    createModifierImage(productId: ProductModifiersV3ApiSpecs.CreateModifierImageData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.CreateModifierImageData['path']['modifier_id'], valueId: ProductModifiersV3ApiSpecs.CreateModifierImageData['path']['value_id'], requestBody: ProductModifiersV3ApiSpecs.CreateModifierImageData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            image_url?: string;
        };
        meta?: ProductModifiersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<400, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    createProductModifierImage(...args: Parameters<ProductModifiersV3Api['createModifierImage']>): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            image_url?: string;
        };
        meta?: ProductModifiersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<400, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
}
