import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ProductVariantsV3ApiSpecs from '../generated/product-variants-v3';
export * as ProductVariantsV3ApiSpecs from '../generated/product-variants-v3';
export declare class ProductVariantsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getProductVariants(productId: ProductVariantsV3ApiSpecs.GetProductVariantsData['path']['product_id'], query?: ProductVariantsV3ApiSpecs.GetProductVariantsData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<ProductVariantsV3ApiSpecs.ProductVariantFull>;
        meta?: ProductVariantsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    createProductVariant(productId: ProductVariantsV3ApiSpecs.CreateProductVariantData['path']['product_id'], requestBody: ProductVariantsV3ApiSpecs.CreateProductVariantData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.ProductVariantFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestSuccessResponse<207, Required<ProductVariantsV3ApiSpecs.MultiStatus>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductVariant(productId: ProductVariantsV3ApiSpecs.GetProductVariantData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.GetProductVariantData['path']['variant_id'], query?: ProductVariantsV3ApiSpecs.GetProductVariantData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.ProductVariantFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateProductVariant(productId: ProductVariantsV3ApiSpecs.UpdateProductVariantData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.UpdateProductVariantData['path']['variant_id'], requestBody: ProductVariantsV3ApiSpecs.UpdateProductVariantData['body']): Promise<RequestSuccessResponse<207, Required<ProductVariantsV3ApiSpecs.MultiStatus>> | RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.ProductVariantFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    deleteProductVariant(productId: ProductVariantsV3ApiSpecs.DeleteProductVariantData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.DeleteProductVariantData['path']['variant_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getProductVariantMetafields(productId: ProductVariantsV3ApiSpecs.GetProductVariantMetafieldsData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.GetProductVariantMetafieldsData['path']['variant_id'], query?: ProductVariantsV3ApiSpecs.GetProductVariantMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductVariantsV3ApiSpecs.MetafieldFull>;
        meta?: ProductVariantsV3ApiSpecs.CategoriesTreeResp;
    }>>>;
    createProductVariantMetafield(productId: ProductVariantsV3ApiSpecs.CreateProductVariantMetafieldData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.CreateProductVariantMetafieldData['path']['variant_id'], requestBody: ProductVariantsV3ApiSpecs.CreateProductVariantMetafieldData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.MetafieldFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
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
    getProductVariantMetafield(productId: ProductVariantsV3ApiSpecs.GetProductVariantMetafieldData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.GetProductVariantMetafieldData['path']['variant_id'], metafieldId: ProductVariantsV3ApiSpecs.GetProductVariantMetafieldData['path']['metafield_id'], query?: ProductVariantsV3ApiSpecs.GetProductVariantMetafieldData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.MetafieldFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateProductVariantMetafield(productId: ProductVariantsV3ApiSpecs.UpdateProductVariantMetafieldData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.UpdateProductVariantMetafieldData['path']['variant_id'], metafieldId: ProductVariantsV3ApiSpecs.UpdateProductVariantMetafieldData['path']['metafield_id'], requestBody: ProductVariantsV3ApiSpecs.UpdateProductVariantMetafieldData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductVariantsV3ApiSpecs.MetafieldFull;
        meta?: ProductVariantsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    deleteProductVariantMetafield(productId: ProductVariantsV3ApiSpecs.DeleteProductVariantMetafieldData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.DeleteProductVariantMetafieldData['path']['variant_id'], metafieldId: ProductVariantsV3ApiSpecs.DeleteProductVariantMetafieldData['path']['metafield_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    createProductVariantImage(productId: ProductVariantsV3ApiSpecs.CreateProductVariantImageData['path']['product_id'], variantId: ProductVariantsV3ApiSpecs.CreateProductVariantImageData['path']['variant_id'], requestBody: ProductVariantsV3ApiSpecs.CreateProductVariantImageData['body']): Promise<RequestSuccessResponse<200, Required<{
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
            upc?: string | null;
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
            upc?: string | null;
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
    getVariantsMetafields(query?: ProductVariantsV3ApiSpecs.GetVariantsMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.MetaFieldCollectionResponse>>>;
    createVariantsMetafields(requestBody: ProductVariantsV3ApiSpecs.CreateVariantsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.MetaFieldCollectionResponsePostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<ProductVariantsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>>>;
    updateVariantsMetafields(requestBody: ProductVariantsV3ApiSpecs.UpdateVariantsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.MetaFieldCollectionResponsePostPut>> | RequestErrorResponse<422, Required<ProductVariantsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    deleteVariantsMetafields(requestBody: ProductVariantsV3ApiSpecs.DeleteVariantsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.MetaFieldCollectionDeleteResponseSuccess>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<ProductVariantsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessDelete>>>;
}
