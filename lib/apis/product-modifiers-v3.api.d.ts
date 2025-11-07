import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ProductModifiersV3ApiSpecs from '../generated/product-modifiers-v3';
export * as ProductModifiersV3ApiSpecs from '../generated/product-modifiers-v3';
export declare class ProductModifiersV3Api {
    private readonly request;
    constructor(request: RequestService);
    getProductModifiers(productId: ProductModifiersV3ApiSpecs.GetProductModifiersData['path']['product_id'], query?: ProductModifiersV3ApiSpecs.GetProductModifiersData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductModifiersV3ApiSpecs.ProductModifierFull>;
        meta?: ProductModifiersV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createProductModifier(productId: ProductModifiersV3ApiSpecs.CreateProductModifierData['path']['product_id'], requestBody: ProductModifiersV3ApiSpecs.CreateProductModifierData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            items?: ProductModifiersV3ApiSpecs.ProductModifierFull;
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
    getProductModifier(productId: ProductModifiersV3ApiSpecs.GetProductModifierData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.GetProductModifierData['path']['modifier_id'], query?: ProductModifiersV3ApiSpecs.GetProductModifierData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductModifiersV3ApiSpecs.ProductModifierFull;
        meta?: ProductModifiersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateProductModifier(productId: ProductModifiersV3ApiSpecs.UpdateProductModifierData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.UpdateProductModifierData['path']['modifier_id'], requestBody: ProductModifiersV3ApiSpecs.UpdateProductModifierData['body']): Promise<RequestSuccessResponse<200, Required<{
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
    deleteProductModifier(productId: ProductModifiersV3ApiSpecs.DeleteProductModifierData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.DeleteProductModifierData['path']['modifier_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getProductModifierValues(productId: ProductModifiersV3ApiSpecs.GetProductModifierValuesData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.GetProductModifierValuesData['path']['modifier_id'], query?: ProductModifiersV3ApiSpecs.GetProductModifierValuesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductModifiersV3ApiSpecs.ProductModifierOptionValueFull>;
        meta?: ProductModifiersV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createProductModifierValue(productId: ProductModifiersV3ApiSpecs.CreateProductModifierValueData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.CreateProductModifierValueData['path']['modifier_id'], requestBody: ProductModifiersV3ApiSpecs.CreateProductModifierValueData['body']): Promise<RequestSuccessResponse<200, Required<{
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
    getProductModifierValue(productId: ProductModifiersV3ApiSpecs.GetProductModifierValueData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.GetProductModifierValueData['path']['modifier_id'], valueId: ProductModifiersV3ApiSpecs.GetProductModifierValueData['path']['value_id'], query?: ProductModifiersV3ApiSpecs.GetProductModifierValueData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductModifiersV3ApiSpecs.ProductModifierOptionValueFull;
        meta?: ProductModifiersV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateProductModifierValue(productId: ProductModifiersV3ApiSpecs.UpdateProductModifierValueData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.UpdateProductModifierValueData['path']['modifier_id'], valueId: ProductModifiersV3ApiSpecs.UpdateProductModifierValueData['path']['value_id'], requestBody: ProductModifiersV3ApiSpecs.UpdateProductModifierValueData['body']): Promise<RequestSuccessResponse<200, Required<{
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
    deleteProductModifierValue(productId: ProductModifiersV3ApiSpecs.DeleteProductModifierValueData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.DeleteProductModifierValueData['path']['modifier_id'], valueId: ProductModifiersV3ApiSpecs.DeleteProductModifierValueData['path']['value_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    createProductModifierImage(productId: ProductModifiersV3ApiSpecs.CreateProductModifierImageData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.CreateProductModifierImageData['path']['modifier_id'], valueId: ProductModifiersV3ApiSpecs.CreateProductModifierImageData['path']['value_id'], requestBody: ProductModifiersV3ApiSpecs.CreateProductModifierImageData['body']): Promise<RequestSuccessResponse<200, Required<{
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
