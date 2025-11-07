import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ProductVariantOptionsV3ApiSpecs from '../generated/product-variant-options-v3';
export * as ProductVariantOptionsV3ApiSpecs from '../generated/product-variant-options-v3';
export declare class ProductVariantOptionsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getProductVariantOptions(productId: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionsData['path']['product_id'], query?: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionsData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<ProductVariantOptionsV3ApiSpecs.ProductOptionFull>;
        meta?: ProductVariantOptionsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    createProductVariantOption(productId: ProductVariantOptionsV3ApiSpecs.CreateProductVariantOptionData['path']['product_id'], requestBody: ProductVariantOptionsV3ApiSpecs.CreateProductVariantOptionData['body']): Promise<RequestSuccessResponse<200, Required<{
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
    getProductVariantOption(productId: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionData['path']['product_id'], optionId: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionData['path']['option_id'], query?: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantOptionsV3ApiSpecs.ProductOptionFull;
        meta?: ProductVariantOptionsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateProductVariantOption(productId: ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionData['path']['product_id'], optionId: ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionData['path']['option_id'], requestBody: ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionData['body']): Promise<RequestSuccessResponse<200, Required<{
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
    deleteProductVariantOption(productId: ProductVariantOptionsV3ApiSpecs.DeleteProductVariantOptionData['path']['product_id'], optionId: ProductVariantOptionsV3ApiSpecs.DeleteProductVariantOptionData['path']['option_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getProductVariantOptionValues(productId: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValuesData['path']['product_id'], optionId: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValuesData['path']['option_id'], query?: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValuesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
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
    createProductVariantOptionValue(productId: ProductVariantOptionsV3ApiSpecs.CreateProductVariantOptionValueData['path']['product_id'], optionId: ProductVariantOptionsV3ApiSpecs.CreateProductVariantOptionValueData['path']['option_id'], requestBody: ProductVariantOptionsV3ApiSpecs.CreateProductVariantOptionValueData['body']): Promise<RequestSuccessResponse<200, Required<{
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
    getProductVariantOptionValue(productId: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValueData['path']['product_id'], optionId: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValueData['path']['option_id'], valueId: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValueData['path']['value_id'], query?: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValueData['query']): Promise<RequestSuccessResponse<200, Required<{
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
    updateProductVariantOptionValue(productId: ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionValueData['path']['product_id'], optionId: ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionValueData['path']['option_id'], valueId: ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionValueData['path']['value_id'], requestBody: ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionValueData['body']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestSuccessResponse<200, Required<{
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
    deleteProductVariantOptionValue(productId: ProductVariantOptionsV3ApiSpecs.DeleteProductVariantOptionValueData['path']['product_id'], optionId: ProductVariantOptionsV3ApiSpecs.DeleteProductVariantOptionValueData['path']['option_id'], valueId: ProductVariantOptionsV3ApiSpecs.DeleteProductVariantOptionValueData['path']['value_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
}
