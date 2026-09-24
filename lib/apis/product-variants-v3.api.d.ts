import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ProductVariantsV3ApiSpecs from '../generated/product-variants-v3';
export * as ProductVariantsV3ApiSpecs from '../generated/product-variants-v3';
export declare class ProductVariantsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getVariantsByProductId(productId: ProductVariantsV3ApiSpecs.GetVariantsByProductIdData['path']['product_id'], query?: ProductVariantsV3ApiSpecs.GetVariantsByProductIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<ProductVariantsV3ApiSpecs.ProductVariantFull>;
        meta?: ProductVariantsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductVariants(...args: Parameters<ProductVariantsV3Api['getVariantsByProductId']>): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<ProductVariantsV3ApiSpecs.ProductVariantFull>;
        meta?: ProductVariantsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    createVariant(productId: ProductVariantsV3ApiSpecs.CreateVariantData['path']['product_id'], requestBody: ProductVariantsV3ApiSpecs.CreateVariantData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.ProductVariantFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestSuccessResponse<207, Required<{
        data?: ProductVariantsV3ApiSpecs.ProductVariantFull;
        errors?: ProductVariantsV3ApiSpecs.ErrorMultiStatus;
        meta?: ProductVariantsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    createProductVariant(...args: Parameters<ProductVariantsV3Api['createVariant']>): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.ProductVariantFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestSuccessResponse<207, Required<{
        data?: ProductVariantsV3ApiSpecs.ProductVariantFull;
        errors?: ProductVariantsV3ApiSpecs.ErrorMultiStatus;
        meta?: ProductVariantsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getVariantById(productId: ProductVariantsV3ApiSpecs.GetVariantByIdData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.GetVariantByIdData['path']['variant_id'], query?: ProductVariantsV3ApiSpecs.GetVariantByIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.ProductVariantFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductVariant(...args: Parameters<ProductVariantsV3Api['getVariantById']>): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.ProductVariantFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateVariant(productId: ProductVariantsV3ApiSpecs.UpdateVariantData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.UpdateVariantData['path']['variant_id'], requestBody: ProductVariantsV3ApiSpecs.UpdateVariantData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.ProductVariantFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestSuccessResponse<207, Required<{
        data?: ProductVariantsV3ApiSpecs.ProductVariantFull;
        errors?: ProductVariantsV3ApiSpecs.ErrorMultiStatus;
        meta?: ProductVariantsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateProductVariant(...args: Parameters<ProductVariantsV3Api['updateVariant']>): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.ProductVariantFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestSuccessResponse<207, Required<{
        data?: ProductVariantsV3ApiSpecs.ProductVariantFull;
        errors?: ProductVariantsV3ApiSpecs.ErrorMultiStatus;
        meta?: ProductVariantsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    deleteVariantById(productId: ProductVariantsV3ApiSpecs.DeleteVariantByIdData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.DeleteVariantByIdData['path']['variant_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteProductVariant(...args: Parameters<ProductVariantsV3Api['deleteVariantById']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getVariantMetafieldsByProductIdAndVariantId(productId: ProductVariantsV3ApiSpecs.GetVariantMetafieldsByProductIdAndVariantIdData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.GetVariantMetafieldsByProductIdAndVariantIdData['path']['variant_id'], query?: ProductVariantsV3ApiSpecs.GetVariantMetafieldsByProductIdAndVariantIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<ProductVariantsV3ApiSpecs.MetafieldFull>;
        meta?: ProductVariantsV3ApiSpecs.CategoriesTreeResp;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductVariantMetafields(...args: Parameters<ProductVariantsV3Api['getVariantMetafieldsByProductIdAndVariantId']>): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<ProductVariantsV3ApiSpecs.MetafieldFull>;
        meta?: ProductVariantsV3ApiSpecs.CategoriesTreeResp;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    createVariantMetafield(productId: ProductVariantsV3ApiSpecs.CreateVariantMetafieldData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.CreateVariantMetafieldData['path']['variant_id'], requestBody: ProductVariantsV3ApiSpecs.CreateVariantMetafieldData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.MetafieldFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
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
    createProductVariantMetafield(...args: Parameters<ProductVariantsV3Api['createVariantMetafield']>): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.MetafieldFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
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
    getVariantMetafieldByProductIdAndVariantId(productId: ProductVariantsV3ApiSpecs.GetVariantMetafieldByProductIdAndVariantIdData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.GetVariantMetafieldByProductIdAndVariantIdData['path']['variant_id'], metafieldId: ProductVariantsV3ApiSpecs.GetVariantMetafieldByProductIdAndVariantIdData['path']['metafield_id'], query?: ProductVariantsV3ApiSpecs.GetVariantMetafieldByProductIdAndVariantIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.MetafieldFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductVariantMetafield(...args: Parameters<ProductVariantsV3Api['getVariantMetafieldByProductIdAndVariantId']>): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.MetafieldFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateVariantMetafield(productId: ProductVariantsV3ApiSpecs.UpdateVariantMetafieldData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.UpdateVariantMetafieldData['path']['variant_id'], metafieldId: ProductVariantsV3ApiSpecs.UpdateVariantMetafieldData['path']['metafield_id'], requestBody: ProductVariantsV3ApiSpecs.UpdateVariantMetafieldData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.MetafieldFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateProductVariantMetafield(...args: Parameters<ProductVariantsV3Api['updateVariantMetafield']>): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.MetafieldFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    deleteVariantMetafieldById(productId: ProductVariantsV3ApiSpecs.DeleteVariantMetafieldByIdData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.DeleteVariantMetafieldByIdData['path']['variant_id'], metafieldId: ProductVariantsV3ApiSpecs.DeleteVariantMetafieldByIdData['path']['metafield_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteProductVariantMetafield(...args: Parameters<ProductVariantsV3Api['deleteVariantMetafieldById']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    createVariantImage(productId: ProductVariantsV3ApiSpecs.CreateVariantImageData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.CreateVariantImageData['path']['variant_id'], requestBody: ProductVariantsV3ApiSpecs.CreateVariantImageData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            image_url?: string;
        };
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
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
    }>> | RequestErrorResponse<500, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    createProductVariantImage(...args: Parameters<ProductVariantsV3Api['createVariantImage']>): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            image_url?: string;
        };
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
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
    }>> | RequestErrorResponse<500, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    getVariants(query?: ProductVariantsV3ApiSpecs.GetVariantsData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<{
            cost_price?: number;
            price?: number;
            sale_price?: number;
            retail_price?: number;
            weight?: number;
            width?: number;
            height?: number;
            depth?: number;
            is_free_shipping?: boolean;
            fixed_cost_shipping_price?: number;
            purchasing_disabled?: boolean;
            purchasing_disabled_message?: string;
            upc?: string;
            inventory_level?: number;
            inventory_warning_level?: number;
            bin_picking_number?: string;
        } & {
            id?: number;
            product_id?: number;
            sku?: string;
            sku_id?: number;
            option_values?: Array<{
                option_display_name?: string;
                label?: string;
            } & {
                id?: number;
                option_id?: number;
            }>;
            calculated_price?: number;
        }>;
        meta?: ProductVariantsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateVariantsBatch(requestBody: ProductVariantsV3ApiSpecs.UpdateVariantsBatchData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<{
            cost_price?: number;
            price?: number;
            sale_price?: number;
            retail_price?: number;
            weight?: number;
            width?: number;
            height?: number;
            depth?: number;
            is_free_shipping?: boolean;
            fixed_cost_shipping_price?: number;
            purchasing_disabled?: boolean;
            purchasing_disabled_message?: string;
            upc?: string;
            inventory_level?: number;
            inventory_warning_level?: number;
            bin_picking_number?: string;
        } & {
            id?: number;
            product_id?: number;
            sku?: string;
            sku_id?: number;
            option_values?: Array<{
                option_display_name?: string;
                label?: string;
            } & {
                id?: number;
                option_id?: number;
            }>;
            calculated_price?: number;
        }>;
        meta?: {
            pagination?: {
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
        };
    }>> | RequestErrorResponse<413, Required<unknown>> | RequestErrorResponse<422, Required<{
        batch_errors?: Array<{
            status?: number;
            title?: string;
            type?: string;
            instance?: string;
        } & {
            errors?: {
                [key: string]: unknown;
            };
        }>;
    }>>>;
}
