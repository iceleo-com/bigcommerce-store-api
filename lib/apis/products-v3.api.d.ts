import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ProductsV3ApiSpecs from '../generated/products-v3';
export * as ProductsV3ApiSpecs from '../generated/products-v3';
export declare class ProductsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getProducts(query?: ProductsV3ApiSpecs.GetProductsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductsV3ApiSpecs.ProductFull>;
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
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
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
    getProductById(productId: ProductsV3ApiSpecs.GetProductByIdData['path']['product_id'], query?: ProductsV3ApiSpecs.GetProductByIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.ProductFull;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProduct(...args: Parameters<ProductsV3Api['getProductById']>): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.ProductFull;
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
    deleteProductById(productId: ProductsV3ApiSpecs.DeleteProductByIdData['path']['product_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteProduct(...args: Parameters<ProductsV3Api['deleteProductById']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
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
        } & {
            id?: number;
            product_id?: number;
            image_file?: string;
            readonly url_zoom?: string;
            readonly url_standard?: string;
            readonly url_thumbnail?: string;
            readonly url_tiny?: string;
            date_modified?: string;
            image_url?: string;
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
    getProductImageById(productId: ProductsV3ApiSpecs.GetProductImageByIdData['path']['product_id'], imageId: ProductsV3ApiSpecs.GetProductImageByIdData['path']['image_id'], query?: ProductsV3ApiSpecs.GetProductImageByIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.ProductImageFull;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductImage(...args: Parameters<ProductsV3Api['getProductImageById']>): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.ProductImageFull;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateProductImage(productId: ProductsV3ApiSpecs.UpdateProductImageData['path']['product_id'], imageId: ProductsV3ApiSpecs.UpdateProductImageData['path']['image_id'], requestBody: ProductsV3ApiSpecs.UpdateProductImageData['body']): Promise<RequestSuccessResponse<200, Required<{
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
        } & {
            id?: number;
            product_id?: number;
            image_file?: string;
            readonly url_zoom?: string;
            readonly url_standard?: string;
            readonly url_thumbnail?: string;
            readonly url_tiny?: string;
            date_modified?: string;
            image_url?: string;
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
    getProductVideoById(productId: ProductsV3ApiSpecs.GetProductVideoByIdData['path']['product_id'], id: ProductsV3ApiSpecs.GetProductVideoByIdData['path']['id'], query?: ProductsV3ApiSpecs.GetProductVideoByIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.ProductVideoFull;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductVideo(...args: Parameters<ProductsV3Api['getProductVideoById']>): Promise<RequestSuccessResponse<200, Required<{
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
    getComplexRules(productId: ProductsV3ApiSpecs.GetComplexRulesData['path']['product_id'], query?: ProductsV3ApiSpecs.GetComplexRulesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductsV3ApiSpecs.ComplexRuleBase>;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>>>;
    getProductComplexRules(...args: Parameters<ProductsV3Api['getComplexRules']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<ProductsV3ApiSpecs.ComplexRuleBase>;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createComplexRule(productId: ProductsV3ApiSpecs.CreateComplexRuleData['path']['product_id'], requestBody: ProductsV3ApiSpecs.CreateComplexRuleData['body']): Promise<RequestSuccessResponse<200, Required<{
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
    createProductComplexRule(...args: Parameters<ProductsV3Api['createComplexRule']>): Promise<RequestSuccessResponse<200, Required<{
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
    getComplexRuleById(productId: ProductsV3ApiSpecs.GetComplexRuleByIdData['path']['product_id'], complexRuleId: ProductsV3ApiSpecs.GetComplexRuleByIdData['path']['complex_rule_id'], query?: ProductsV3ApiSpecs.GetComplexRuleByIdData['query']): Promise<RequestSuccessResponse<200, Required<{
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
    getProductComplexRule(...args: Parameters<ProductsV3Api['getComplexRuleById']>): Promise<RequestSuccessResponse<200, Required<{
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
    updateComplexRule(productId: ProductsV3ApiSpecs.UpdateComplexRuleData['path']['product_id'], complexRuleId: ProductsV3ApiSpecs.UpdateComplexRuleData['path']['complex_rule_id'], requestBody: ProductsV3ApiSpecs.UpdateComplexRuleData['body']): Promise<RequestSuccessResponse<200, Required<{
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
    updateProductComplexRule(...args: Parameters<ProductsV3Api['updateComplexRule']>): Promise<RequestSuccessResponse<200, Required<{
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
    deleteComplexRuleById(productId: ProductsV3ApiSpecs.DeleteComplexRuleByIdData['path']['product_id'], complexRuleId: ProductsV3ApiSpecs.DeleteComplexRuleByIdData['path']['complex_rule_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteProductComplexRule(...args: Parameters<ProductsV3Api['deleteComplexRuleById']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getCustomFields(productId: ProductsV3ApiSpecs.GetCustomFieldsData['path']['product_id'], query?: ProductsV3ApiSpecs.GetCustomFieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            id?: number;
            name: string;
            value: string;
        }>;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>>>;
    getProductCustomFields(...args: Parameters<ProductsV3Api['getCustomFields']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<{
            id?: number;
            name: string;
            value: string;
        }>;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createCustomField(productId: ProductsV3ApiSpecs.CreateCustomFieldData['path']['product_id'], requestBody: ProductsV3ApiSpecs.CreateCustomFieldData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            name: string;
            value: string;
        };
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
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
    createProductCustomField(...args: Parameters<ProductsV3Api['createCustomField']>): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            name: string;
            value: string;
        };
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
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
    getCustomFieldById(productId: ProductsV3ApiSpecs.GetCustomFieldByIdData['path']['product_id'], customFieldId: ProductsV3ApiSpecs.GetCustomFieldByIdData['path']['custom_field_id'], query?: ProductsV3ApiSpecs.GetCustomFieldByIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.ProductCustomFieldBase;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductCustomField(...args: Parameters<ProductsV3Api['getCustomFieldById']>): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.ProductCustomFieldBase;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateCustomField(productId: ProductsV3ApiSpecs.UpdateCustomFieldData['path']['product_id'], customFieldId: ProductsV3ApiSpecs.UpdateCustomFieldData['path']['custom_field_id'], requestBody: ProductsV3ApiSpecs.UpdateCustomFieldData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            name: string;
            value: string;
        };
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
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
    updateProductCustomField(...args: Parameters<ProductsV3Api['updateCustomField']>): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            id?: number;
            name: string;
            value: string;
        };
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
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
    deleteCustomFieldById(productId: ProductsV3ApiSpecs.DeleteCustomFieldByIdData['path']['product_id'], customFieldId: ProductsV3ApiSpecs.DeleteCustomFieldByIdData['path']['custom_field_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    deleteProductCustomField(...args: Parameters<ProductsV3Api['deleteCustomFieldById']>): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getBulkPricingRules(productId: ProductsV3ApiSpecs.GetBulkPricingRulesData['path']['product_id'], query?: ProductsV3ApiSpecs.GetBulkPricingRulesData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<{
            readonly id: number;
        } & ProductsV3ApiSpecs.BulkPricingRuleFull>;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getAllBulkPricingRules(...args: Parameters<ProductsV3Api['getBulkPricingRules']>): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<{
            readonly id: number;
        } & ProductsV3ApiSpecs.BulkPricingRuleFull>;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    createBulkPricingRule(productId: ProductsV3ApiSpecs.CreateBulkPricingRuleData['path']['product_id'], requestBody: ProductsV3ApiSpecs.CreateBulkPricingRuleData['body'], query?: ProductsV3ApiSpecs.CreateBulkPricingRuleData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            readonly id: number;
        } & ProductsV3ApiSpecs.BulkPricingRuleFull;
        meta?: {
            [key: string]: unknown;
        };
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
    getBulkPricingRuleById(productId: ProductsV3ApiSpecs.GetBulkPricingRuleByIdData['path']['product_id'], bulkPricingRuleId: ProductsV3ApiSpecs.GetBulkPricingRuleByIdData['path']['bulk_pricing_rule_id'], query?: ProductsV3ApiSpecs.GetBulkPricingRuleByIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            readonly id: number;
        } & ProductsV3ApiSpecs.BulkPricingRuleFull;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getBulkPricingRule(...args: Parameters<ProductsV3Api['getBulkPricingRuleById']>): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            readonly id: number;
        } & ProductsV3ApiSpecs.BulkPricingRuleFull;
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
            quantity_min: number;
            quantity_max: number;
            type: "price" | "percent" | "fixed";
            amount: number;
        };
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
    deleteBulkPricingRuleById(productId: ProductsV3ApiSpecs.DeleteBulkPricingRuleByIdData['path']['product_id'], bulkPricingRuleId: ProductsV3ApiSpecs.DeleteBulkPricingRuleByIdData['path']['bulk_pricing_rule_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    deleteBulkPricingRule(...args: Parameters<ProductsV3Api['deleteBulkPricingRuleById']>): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductMetafieldsByProductId(productId: ProductsV3ApiSpecs.GetProductMetafieldsByProductIdData['path']['product_id'], query?: ProductsV3ApiSpecs.GetProductMetafieldsByProductIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<ProductsV3ApiSpecs.MetafieldFull>;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductMetafields(...args: Parameters<ProductsV3Api['getProductMetafieldsByProductId']>): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<ProductsV3ApiSpecs.MetafieldFull>;
        meta?: ProductsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    createProductMetafield(productId: ProductsV3ApiSpecs.CreateProductMetafieldData['path']['product_id'], requestBody: ProductsV3ApiSpecs.CreateProductMetafieldData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.MetafieldFull;
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
    getProductMetafieldByProductId(productId: ProductsV3ApiSpecs.GetProductMetafieldByProductIdData['path']['product_id'], metafieldId: ProductsV3ApiSpecs.GetProductMetafieldByProductIdData['path']['metafield_id'], query?: ProductsV3ApiSpecs.GetProductMetafieldByProductIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: ProductsV3ApiSpecs.MetafieldFull;
        meta?: ProductsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getProductMetafield(...args: Parameters<ProductsV3Api['getProductMetafieldByProductId']>): Promise<RequestSuccessResponse<200, Required<{
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
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    deleteProductMetafieldById(productId: ProductsV3ApiSpecs.DeleteProductMetafieldByIdData['path']['product_id'], metafieldId: ProductsV3ApiSpecs.DeleteProductMetafieldByIdData['path']['metafield_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteProductMetafield(...args: Parameters<ProductsV3Api['deleteProductMetafieldById']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
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
            product_id?: number;
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
            product_id?: number;
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
    getProductReviewById(productId: ProductsV3ApiSpecs.GetProductReviewByIdData['path']['product_id'], reviewId: ProductsV3ApiSpecs.GetProductReviewByIdData['path']['review_id'], query?: ProductsV3ApiSpecs.GetProductReviewByIdData['query']): Promise<RequestSuccessResponse<200, Required<{
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
    getProductReview(...args: Parameters<ProductsV3Api['getProductReviewById']>): Promise<RequestSuccessResponse<200, Required<{
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
            product_id?: number;
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
}
