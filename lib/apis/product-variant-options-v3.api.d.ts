import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ProductVariantOptionsV3ApiSpecs from '../generated/product-variant-options-v3';
export * as ProductVariantOptionsV3ApiSpecs from '../generated/product-variant-options-v3';
export declare class ProductVariantOptionsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getOptions(productId: ProductVariantOptionsV3ApiSpecs.GetOptionsData['path']['product_id'], query?: ProductVariantOptionsV3ApiSpecs.GetOptionsData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<ProductVariantOptionsV3ApiSpecs.ProductOptionFull>;
        meta?: ProductVariantOptionsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductVariantOptions(...args: Parameters<ProductVariantOptionsV3Api['getOptions']>): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<ProductVariantOptionsV3ApiSpecs.ProductOptionFull>;
        meta?: ProductVariantOptionsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    createOption(productId: ProductVariantOptionsV3ApiSpecs.CreateOptionData['path']['product_id'], requestBody: ProductVariantOptionsV3ApiSpecs.CreateOptionData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            product_id?: number;
            display_name?: string;
            type?: "radio_buttons" | "rectangles" | "dropdown" | "product_list" | "product_list_with_images" | "swatch";
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
    createProductVariantOption(...args: Parameters<ProductVariantOptionsV3Api['createOption']>): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            product_id?: number;
            display_name?: string;
            type?: "radio_buttons" | "rectangles" | "dropdown" | "product_list" | "product_list_with_images" | "swatch";
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
    getOptionById(productId: ProductVariantOptionsV3ApiSpecs.GetOptionByIdData['path']['product_id'], optionId: ProductVariantOptionsV3ApiSpecs.GetOptionByIdData['path']['option_id'], query?: ProductVariantOptionsV3ApiSpecs.GetOptionByIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantOptionsV3ApiSpecs.ProductOptionFull;
        meta?: ProductVariantOptionsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductVariantOption(...args: Parameters<ProductVariantOptionsV3Api['getOptionById']>): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantOptionsV3ApiSpecs.ProductOptionFull;
        meta?: ProductVariantOptionsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateOption(productId: ProductVariantOptionsV3ApiSpecs.UpdateOptionData['path']['product_id'], optionId: ProductVariantOptionsV3ApiSpecs.UpdateOptionData['path']['option_id'], requestBody: ProductVariantOptionsV3ApiSpecs.UpdateOptionData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            product_id?: number;
            display_name?: string;
            type?: "radio_buttons" | "rectangles" | "dropdown" | "product_list" | "product_list_with_images" | "swatch";
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
        meta?: ProductVariantOptionsV3ApiSpecs.MetaEmptyFull;
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
    updateProductVariantOption(...args: Parameters<ProductVariantOptionsV3Api['updateOption']>): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            product_id?: number;
            display_name?: string;
            type?: "radio_buttons" | "rectangles" | "dropdown" | "product_list" | "product_list_with_images" | "swatch";
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
        meta?: ProductVariantOptionsV3ApiSpecs.MetaEmptyFull;
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
    deleteOptionById(productId: ProductVariantOptionsV3ApiSpecs.DeleteOptionByIdData['path']['product_id'], optionId: ProductVariantOptionsV3ApiSpecs.DeleteOptionByIdData['path']['option_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteProductVariantOption(...args: Parameters<ProductVariantOptionsV3Api['deleteOptionById']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getOptionValues(productId: ProductVariantOptionsV3ApiSpecs.GetOptionValuesData['path']['product_id'], optionId: ProductVariantOptionsV3ApiSpecs.GetOptionValuesData['path']['option_id'], query?: ProductVariantOptionsV3ApiSpecs.GetOptionValuesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
        meta?: ProductVariantOptionsV3ApiSpecs.MetaCollectionFull;
    }>>>;
    getProductVariantOptionValues(...args: Parameters<ProductVariantOptionsV3Api['getOptionValues']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
        meta?: ProductVariantOptionsV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createOptionValue(productId: ProductVariantOptionsV3ApiSpecs.CreateOptionValueData['path']['product_id'], optionId: ProductVariantOptionsV3ApiSpecs.CreateOptionValueData['path']['option_id'], requestBody: ProductVariantOptionsV3ApiSpecs.CreateOptionValueData['body']): Promise<RequestSuccessResponse<200, Required<{
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
        meta?: ProductVariantOptionsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    createProductVariantOptionValue(...args: Parameters<ProductVariantOptionsV3Api['createOptionValue']>): Promise<RequestSuccessResponse<200, Required<{
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
        meta?: ProductVariantOptionsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    getOptionValueById(productId: ProductVariantOptionsV3ApiSpecs.GetOptionValueByIdData['path']['product_id'], optionId: ProductVariantOptionsV3ApiSpecs.GetOptionValueByIdData['path']['option_id'], valueId: ProductVariantOptionsV3ApiSpecs.GetOptionValueByIdData['path']['value_id'], query?: ProductVariantOptionsV3ApiSpecs.GetOptionValueByIdData['query']): Promise<RequestSuccessResponse<200, Required<{
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
        meta?: ProductVariantOptionsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductVariantOptionValue(...args: Parameters<ProductVariantOptionsV3Api['getOptionValueById']>): Promise<RequestSuccessResponse<200, Required<{
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
        meta?: ProductVariantOptionsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateOptionValue(productId: ProductVariantOptionsV3ApiSpecs.UpdateOptionValueData['path']['product_id'], optionId: ProductVariantOptionsV3ApiSpecs.UpdateOptionValueData['path']['option_id'], valueId: ProductVariantOptionsV3ApiSpecs.UpdateOptionValueData['path']['value_id'], requestBody: ProductVariantOptionsV3ApiSpecs.UpdateOptionValueData['body']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestSuccessResponse<200, Required<{
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
        meta?: ProductVariantOptionsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    updateProductVariantOptionValue(...args: Parameters<ProductVariantOptionsV3Api['updateOptionValue']>): Promise<RequestErrorResponse<404, Required<unknown>> | RequestSuccessResponse<200, Required<{
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
        meta?: ProductVariantOptionsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    deleteOptionValueById(productId: ProductVariantOptionsV3ApiSpecs.DeleteOptionValueByIdData['path']['product_id'], optionId: ProductVariantOptionsV3ApiSpecs.DeleteOptionValueByIdData['path']['option_id'], valueId: ProductVariantOptionsV3ApiSpecs.DeleteOptionValueByIdData['path']['value_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteProductVariantOptionValue(...args: Parameters<ProductVariantOptionsV3Api['deleteOptionValueById']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
}
