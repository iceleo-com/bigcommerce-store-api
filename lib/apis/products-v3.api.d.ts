import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ProductsV3ApiSpecs from '../generated/products-v3';
export * as ProductsV3ApiSpecs from '../generated/products-v3';
export declare class ProductsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getProducts(query?: ProductsV3ApiSpecs.GetProductsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductsV3ApiSpecs.ProductFull & {
            channels?: Array<number>;
        }>;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createProduct(requestBody: ProductsV3ApiSpecs.CreateProductData['body'], query?: ProductsV3ApiSpecs.CreateProductData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.ProductFull;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestSuccessResponse<207, Required<{
        data?: Array<ProductsV3ApiSpecs.ProductFull>;
        errors?: ProductsV3ApiSpecs.ErrorMultiStatus;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
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
    updateProducts(requestBody: ProductsV3ApiSpecs.UpdateProductsData['body'], query?: ProductsV3ApiSpecs.UpdateProductsData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<ProductsV3ApiSpecs.ProductFull>;
        meta?: unknown;
    }>> | RequestSuccessResponse<207, Required<{
        data?: Array<ProductsV3ApiSpecs.ProductFull>;
        errors?: ProductsV3ApiSpecs.ErrorMultiStatus;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>> | RequestErrorResponse<409, Required<ProductsV3ApiSpecs.ErrorResponse409>> | RequestErrorResponse<413, Required<ProductsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.ErrorResponse422>>>;
    deleteProducts(query?: ProductsV3ApiSpecs.DeleteProductsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getProduct(productId: ProductsV3ApiSpecs.GetProductData['path']['product_id'], query?: ProductsV3ApiSpecs.GetProductData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.ProductFull & {
            channels?: Array<number>;
        };
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateProduct(productId: ProductsV3ApiSpecs.UpdateProductData['path']['product_id'], requestBody: ProductsV3ApiSpecs.UpdateProductData['body'], query?: ProductsV3ApiSpecs.UpdateProductData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.ProductFull;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestSuccessResponse<201, Required<{
        [key: string]: unknown;
    }>> | RequestSuccessResponse<207, Required<{
        data?: ProductsV3ApiSpecs.ProductFull;
        errors?: ProductsV3ApiSpecs.ErrorMultiStatus;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
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
    deleteProduct(productId: ProductsV3ApiSpecs.DeleteProductData['path']['product_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getProductImages(productId: ProductsV3ApiSpecs.GetProductImagesData['path']['product_id'], query?: ProductsV3ApiSpecs.GetProductImagesData['query']): Promise<RequestSuccessResponse<204, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductsV3ApiSpecs.ProductImageFull>;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    createProductImage(productId: ProductsV3ApiSpecs.CreateProductImageData['path']['product_id'], requestBody: ProductsV3ApiSpecs.CreateProductImageData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            product_id?: number;
            readonly url_zoom?: string;
            readonly url_standard?: string;
            readonly url_thumbnail?: string;
            readonly url_tiny?: string;
            date_modified?: string;
            is_thumbnail?: boolean;
            sort_order?: number;
            description?: string;
            image_url?: string;
        } | {
            id?: number;
            product_id?: number;
            image_file?: string;
            readonly url_zoom?: string;
            readonly url_standard?: string;
            readonly url_thumbnail?: string;
            readonly url_tiny?: string;
            date_modified?: string;
            is_thumbnail?: boolean;
            sort_order?: number;
            description?: string;
        };
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<400, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>> | RequestErrorResponse<422, Required<{
        status: number;
        title: string;
        type: string;
    }>>>;
    getProductImage(productId: ProductsV3ApiSpecs.GetProductImageData['path']['product_id'], imageId: ProductsV3ApiSpecs.GetProductImageData['path']['image_id'], query?: ProductsV3ApiSpecs.GetProductImageData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.ProductImageFull;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateProductImage(productId: ProductsV3ApiSpecs.UpdateProductImageData['path']['product_id'], imageId: ProductsV3ApiSpecs.UpdateProductImageData['path']['image_id'], requestBody: ProductsV3ApiSpecs.UpdateProductImageData['body']): Promise<RequestErrorResponse<422, Required<ProductsV3ApiSpecs.ErrorResponse422>> | RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            product_id?: number;
            readonly url_zoom?: string;
            readonly url_standard?: string;
            readonly url_thumbnail?: string;
            readonly url_tiny?: string;
            date_modified?: string;
            is_thumbnail?: boolean;
            sort_order?: number;
            description?: string;
            image_url?: string;
        } | {
            id?: number;
            product_id?: number;
            image_file?: string;
            readonly url_zoom?: string;
            readonly url_standard?: string;
            readonly url_thumbnail?: string;
            readonly url_tiny?: string;
            date_modified?: string;
            is_thumbnail?: boolean;
            sort_order?: number;
            description?: string;
        };
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestSuccessResponse<201, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<400, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    deleteProductImage(productId: ProductsV3ApiSpecs.DeleteProductImageData['path']['product_id'], imageId: ProductsV3ApiSpecs.DeleteProductImageData['path']['image_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getProductVideos(productId: ProductsV3ApiSpecs.GetProductVideosData['path']['product_id'], query?: ProductsV3ApiSpecs.GetProductVideosData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductsV3ApiSpecs.ProductVideoFull>;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createProductVideo(productId: ProductsV3ApiSpecs.CreateProductVideoData['path']['product_id'], requestBody: ProductsV3ApiSpecs.CreateProductVideoData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            title?: string;
            description?: string;
            sort_order?: number;
            type?: "youtube";
        } & {
            id?: number;
            video_id?: string;
            product_id?: number;
            length?: string;
        };
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductVideo(productId: ProductsV3ApiSpecs.GetProductVideoData['path']['product_id'], id: ProductsV3ApiSpecs.GetProductVideoData['path']['id'], query?: ProductsV3ApiSpecs.GetProductVideoData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.ProductVideoFull;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateProductVideo(productId: ProductsV3ApiSpecs.UpdateProductVideoData['path']['product_id'], id: ProductsV3ApiSpecs.UpdateProductVideoData['path']['id'], requestBody: ProductsV3ApiSpecs.UpdateProductVideoData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            title?: string;
            description?: string;
            sort_order?: number;
            type?: "youtube";
        } & {
            id?: number;
            video_id?: string;
            product_id?: number;
            length?: string;
        };
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    deleteProductVideo(productId: ProductsV3ApiSpecs.DeleteProductVideoData['path']['product_id'], id: ProductsV3ApiSpecs.DeleteProductVideoData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getProductComplexRules(productId: ProductsV3ApiSpecs.GetProductComplexRulesData['path']['product_id'], query?: ProductsV3ApiSpecs.GetProductComplexRulesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductsV3ApiSpecs.ComplexRuleBase>;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createProductComplexRule(productId: ProductsV3ApiSpecs.CreateProductComplexRuleData['path']['product_id'], requestBody: ProductsV3ApiSpecs.CreateProductComplexRuleData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            product_id?: number | null;
            sort_order?: number;
            enabled?: boolean;
            stop?: boolean;
            purchasing_disabled?: boolean;
            purchasing_disabled_message?: string;
            purchasing_hidden?: boolean;
            image_url?: string;
            price_adjuster?: {
                adjuster?: "relative" | "percentage";
                adjuster_value?: number;
            };
            weight_adjuster?: {
                adjuster?: "relative" | "percentage";
                adjuster_value?: number;
            };
            conditions?: Array<{
                id?: number | null;
                rule_id?: number | null;
                modifier_id: number | null;
                modifier_value_id: number | null;
                variant_id: number | null;
                combination_id?: number;
            }>;
        };
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
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
    getProductComplexRule(productId: ProductsV3ApiSpecs.GetProductComplexRuleData['path']['product_id'], complexRuleId: ProductsV3ApiSpecs.GetProductComplexRuleData['path']['complex_rule_id'], query?: ProductsV3ApiSpecs.GetProductComplexRuleData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            product_id?: number;
            sort_order?: number;
            enabled?: boolean;
            stop?: boolean;
            purchasing_disabled?: boolean;
            purchasing_disabled_message?: string;
            purchasing_hidden?: boolean;
            image_url?: string;
            price_adjuster?: {
                adjuster?: "relative" | "percentage";
                adjuster_value?: number;
            };
            weight_adjuster?: {
                adjuster?: "relative" | "percentage";
                adjuster_value?: number;
            };
            conditions?: Array<{
                id?: number;
                rule_id?: number;
                modifier_id: number;
                modifier_value_id: number;
                variant_id: number;
                combination_id?: number;
            }>;
        };
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateProductComplexRule(productId: ProductsV3ApiSpecs.UpdateProductComplexRuleData['path']['product_id'], complexRuleId: ProductsV3ApiSpecs.UpdateProductComplexRuleData['path']['complex_rule_id'], requestBody: ProductsV3ApiSpecs.UpdateProductComplexRuleData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            product_id?: number;
            sort_order?: number;
            enabled?: boolean;
            stop?: boolean;
            purchasing_disabled?: boolean;
            purchasing_disabled_message?: string;
            purchasing_hidden?: boolean;
            image_url?: string;
            price_adjuster?: {
                adjuster?: "relative" | "percentage";
                adjuster_value?: number;
            };
            weight_adjuster?: {
                adjuster?: "relative" | "percentage";
                adjuster_value?: number;
            };
            conditions?: Array<{
                id?: number;
                rule_id?: number;
                modifier_id: number;
                modifier_value_id: number;
                variant_id: number;
                combination_id?: number;
            }>;
        };
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
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
    deleteProductComplexRule(productId: ProductsV3ApiSpecs.DeleteProductComplexRuleData['path']['product_id'], complexRuleId: ProductsV3ApiSpecs.DeleteProductComplexRuleData['path']['complex_rule_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getProductCustomFields(productId: ProductsV3ApiSpecs.GetProductCustomFieldsData['path']['product_id'], query?: ProductsV3ApiSpecs.GetProductCustomFieldsData['query']): Promise<RequestErrorResponse<401, string> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductsV3ApiSpecs.CustomFieldData>;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull2;
    }>> | RequestErrorResponse<403, Required<ProductsV3ApiSpecs.GeneralErrorWithErrors>> | RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GeneralError>> | RequestErrorResponse<405, Required<ProductsV3ApiSpecs.MethodNotAllowedError>>>;
    createProductCustomField(productId: ProductsV3ApiSpecs.CreateProductCustomFieldData['path']['product_id'], requestBody: ProductsV3ApiSpecs.CreateProductCustomFieldData['body']): Promise<RequestErrorResponse<401, string> | RequestErrorResponse<415, string> | RequestErrorResponse<403, Required<ProductsV3ApiSpecs.GeneralErrorWithErrors>> | RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GeneralError>> | RequestErrorResponse<405, Required<ProductsV3ApiSpecs.MethodNotAllowedError>> | RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.CustomFieldData;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull2;
    }>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.GeneralError>>>;
    getProductCustomField(productId: ProductsV3ApiSpecs.GetProductCustomFieldData['path']['product_id'], customFieldId: ProductsV3ApiSpecs.GetProductCustomFieldData['path']['custom_field_id'], query?: ProductsV3ApiSpecs.GetProductCustomFieldData['query']): Promise<RequestErrorResponse<401, string> | RequestErrorResponse<403, Required<ProductsV3ApiSpecs.GeneralErrorWithErrors>> | RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GeneralError>> | RequestErrorResponse<405, Required<ProductsV3ApiSpecs.MethodNotAllowedError>> | RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.CustomFieldData;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull2;
    }>>>;
    updateProductCustomField(productId: ProductsV3ApiSpecs.UpdateProductCustomFieldData['path']['product_id'], customFieldId: ProductsV3ApiSpecs.UpdateProductCustomFieldData['path']['custom_field_id'], requestBody: ProductsV3ApiSpecs.UpdateProductCustomFieldData['body']): Promise<RequestErrorResponse<401, string> | RequestErrorResponse<415, string> | RequestErrorResponse<403, Required<ProductsV3ApiSpecs.GeneralErrorWithErrors>> | RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GeneralError>> | RequestErrorResponse<405, Required<ProductsV3ApiSpecs.MethodNotAllowedError>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.GeneralError>> | RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.CustomFieldData;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull2;
    }>>>;
    deleteProductCustomField(productId: ProductsV3ApiSpecs.DeleteProductCustomFieldData['path']['product_id'], customFieldId: ProductsV3ApiSpecs.DeleteProductCustomFieldData['path']['custom_field_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<401, string> | RequestErrorResponse<403, Required<ProductsV3ApiSpecs.GeneralErrorWithErrors>> | RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GeneralError>> | RequestErrorResponse<405, Required<ProductsV3ApiSpecs.MethodNotAllowedError>>>;
    getAllBulkPricingRules(productId: ProductsV3ApiSpecs.GetAllBulkPricingRulesData['path']['product_id'], query?: ProductsV3ApiSpecs.GetAllBulkPricingRulesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: {
            readonly id?: number;
        } & ProductsV3ApiSpecs.BulkPricingRuleResponse;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createBulkPricingRule(productId: ProductsV3ApiSpecs.CreateBulkPricingRuleData['path']['product_id'], requestBody: ProductsV3ApiSpecs.CreateBulkPricingRuleData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: {
            readonly id?: number;
        } & ProductsV3ApiSpecs.BulkPricingRuleResponse;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>>>;
    getBulkPricingRule(productId: ProductsV3ApiSpecs.GetBulkPricingRuleData['path']['product_id'], bulkPricingRuleId: ProductsV3ApiSpecs.GetBulkPricingRuleData['path']['bulk_pricing_rule_id'], query?: ProductsV3ApiSpecs.GetBulkPricingRuleData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            readonly id: number;
        } & ProductsV3ApiSpecs.BulkPricingRuleResponse;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateBulkPricingRule(productId: ProductsV3ApiSpecs.UpdateBulkPricingRuleData['path']['product_id'], bulkPricingRuleId: ProductsV3ApiSpecs.UpdateBulkPricingRuleData['path']['bulk_pricing_rule_id'], requestBody: ProductsV3ApiSpecs.UpdateBulkPricingRuleData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            readonly id?: number;
        } & ProductsV3ApiSpecs.BulkPricingRuleResponse;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
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
    deleteBulkPricingRule(productId: ProductsV3ApiSpecs.DeleteBulkPricingRuleData['path']['product_id'], bulkPricingRuleId: ProductsV3ApiSpecs.DeleteBulkPricingRuleData['path']['bulk_pricing_rule_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductMetafields(productId: ProductsV3ApiSpecs.GetProductMetafieldsData['path']['product_id'], query?: ProductsV3ApiSpecs.GetProductMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductsV3ApiSpecs.MetafieldFull>;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createProductMetafield(productId: ProductsV3ApiSpecs.CreateProductMetafieldData['path']['product_id'], requestBody: ProductsV3ApiSpecs.CreateProductMetafieldData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.MetafieldFull;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
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
    getProductMetafield(productId: ProductsV3ApiSpecs.GetProductMetafieldData['path']['product_id'], metafieldId: ProductsV3ApiSpecs.GetProductMetafieldData['path']['metafield_id'], query?: ProductsV3ApiSpecs.GetProductMetafieldData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.MetafieldFull;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateProductMetafield(productId: ProductsV3ApiSpecs.UpdateProductMetafieldData['path']['product_id'], metafieldId: ProductsV3ApiSpecs.UpdateProductMetafieldData['path']['metafield_id'], requestBody: ProductsV3ApiSpecs.UpdateProductMetafieldData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.MetafieldFull;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
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
    deleteProductMetafield(productId: ProductsV3ApiSpecs.DeleteProductMetafieldData['path']['product_id'], metafieldId: ProductsV3ApiSpecs.DeleteProductMetafieldData['path']['metafield_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductReviews(productId: ProductsV3ApiSpecs.GetProductReviewsData['path']['product_id'], query?: ProductsV3ApiSpecs.GetProductReviewsData['query']): Promise<RequestSuccessResponse<204, void> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            title: string;
            text?: string;
            status?: string;
            rating?: number;
            email?: string;
            name?: string;
            date_reviewed: string;
        } & {
            id?: number;
            date_created?: string;
            date_modified?: string;
        }>;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    createProductReview(productId: ProductsV3ApiSpecs.CreateProductReviewData['path']['product_id'], requestBody: ProductsV3ApiSpecs.CreateProductReviewData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            title: string;
            text?: string;
            status?: string;
            rating?: number;
            email?: string;
            name?: string;
            date_reviewed: string;
        } & {
            id?: number;
            date_created?: string;
            date_modified?: string;
        };
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductReview(productId: ProductsV3ApiSpecs.GetProductReviewData['path']['product_id'], reviewId: ProductsV3ApiSpecs.GetProductReviewData['path']['review_id'], query?: ProductsV3ApiSpecs.GetProductReviewData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            title: string;
            text?: string;
            status?: string;
            rating?: number;
            email?: string;
            name?: string;
            date_reviewed: string;
        } & {
            id?: number;
            date_created?: string;
            date_modified?: string;
        };
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateProductReview(productId: ProductsV3ApiSpecs.UpdateProductReviewData['path']['product_id'], reviewId: ProductsV3ApiSpecs.UpdateProductReviewData['path']['review_id'], requestBody: ProductsV3ApiSpecs.UpdateProductReviewData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            title: string;
            text?: string;
            status?: string;
            rating?: number;
            email?: string;
            name?: string;
            date_reviewed: string;
        } & {
            id?: number;
            date_created?: string;
            date_modified?: string;
        };
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    deleteProductReview(productId: ProductsV3ApiSpecs.DeleteProductReviewData['path']['product_id'], reviewId: ProductsV3ApiSpecs.DeleteProductReviewData['path']['review_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getProductsChannelAssignments(query?: ProductsV3ApiSpecs.GetProductsChannelAssignmentsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductsV3ApiSpecs.ProductChannelAssignment>;
        meta?: ProductsV3ApiSpecs.MetaPaginationObject;
    }>>>;
    createProductsChannelAssignments(requestBody: ProductsV3ApiSpecs.CreateProductsChannelAssignmentsData['body']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.Beta5ErrorResponse>>>;
    deleteProductsChannelAssignments(query?: ProductsV3ApiSpecs.DeleteProductsChannelAssignmentsData['query']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.Beta5ErrorResponse>>>;
    getProductsCategoryAssignments(query?: ProductsV3ApiSpecs.GetProductsCategoryAssignmentsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductsV3ApiSpecs.ProductCategoryAssignment>;
        meta?: ProductsV3ApiSpecs.MetaPaginationObject;
    }>>>;
    createProductsCategoryAssignments(requestBody: ProductsV3ApiSpecs.CreateProductsCategoryAssignmentsData['body']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.Beta5ErrorResponse>>>;
    deleteProductsCategoryAssignments(query?: ProductsV3ApiSpecs.DeleteProductsCategoryAssignmentsData['query']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.Beta5ErrorResponse>>>;
    getCatalogSummary(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: {
            inventory_count?: number;
            inventory_value?: number;
            primary_category_id?: number;
            primary_category_name?: string;
            variant_count?: number;
            highest_variant_price?: number;
            average_variant_price?: number;
            lowest_variant_price?: string;
            oldest_variant_date?: string;
            newest_variant_date?: string;
        };
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>>>;
    getProductsMetafields(query?: ProductsV3ApiSpecs.GetProductsMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.MetaFieldCollectionResponse>>>;
    createProductsMetafields(requestBody: ProductsV3ApiSpecs.CreateProductsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.MetaFieldCollectionResponsePostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>>>;
    updateProductsMetafields(requestBody: ProductsV3ApiSpecs.UpdateProductsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.MetaFieldCollectionResponsePostPut>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    deleteProductsMetafields(requestBody: ProductsV3ApiSpecs.DeleteProductsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.MetaFieldCollectionDeleteResponseSuccess>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessDelete>>>;
}
