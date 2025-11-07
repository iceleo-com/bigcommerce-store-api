import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CategoriesV3ApiSpecs from '../generated/categories-v3';
export * as CategoriesV3ApiSpecs from '../generated/categories-v3';
export declare class CategoriesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getCategories(query?: CategoriesV3ApiSpecs.GetCategoriesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<CategoriesV3ApiSpecs.Category>;
        meta?: CategoriesV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createCategory(requestBody: CategoriesV3ApiSpecs.CreateCategoryData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: CategoriesV3ApiSpecs.CategoryFull;
        meta?: CategoriesV3ApiSpecs.MetaEmptyFull;
    }>> | RequestSuccessResponse<207, Required<CategoriesV3ApiSpecs.ErrorBase>> | RequestErrorResponse<409, Required<{
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
    deleteCategories(query?: CategoriesV3ApiSpecs.DeleteCategoriesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getCategory(categoryId: CategoriesV3ApiSpecs.GetCategoryData['path']['category_id'], query?: CategoriesV3ApiSpecs.GetCategoryData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: CategoriesV3ApiSpecs.CategoryFull;
        meta?: CategoriesV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateCategory(categoryId: CategoriesV3ApiSpecs.UpdateCategoryData['path']['category_id'], requestBody: CategoriesV3ApiSpecs.UpdateCategoryData['body']): Promise<RequestSuccessResponse<207, Required<CategoriesV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
        data?: {
            readonly id?: number;
            parent_id?: number;
            name?: string;
            description?: string;
            views?: number;
            sort_order?: number;
            page_title?: string;
            search_keywords?: string;
            meta_keywords?: Array<string>;
            meta_description?: string;
            layout_file?: string;
            is_visible?: boolean;
            default_product_sort?: "use_store_settings" | "featured" | "newest" | "best_selling" | "alpha_asc" | "alpha_desc" | "avg_customer_review" | "price_asc" | "price_desc";
            image_url?: string;
            custom_url?: {
                url?: string;
                is_customized?: boolean;
            };
        };
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
    deleteCategory(categoryId: CategoriesV3ApiSpecs.DeleteCategoryData['path']['category_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getCategoryMetafields(categoryId: CategoriesV3ApiSpecs.GetCategoryMetafieldsData['path']['category_id'], query?: CategoriesV3ApiSpecs.GetCategoryMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<CategoriesV3ApiSpecs.MetafieldFull>;
        meta?: CategoriesV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createCategoryMetafield(categoryId: CategoriesV3ApiSpecs.CreateCategoryMetafieldData['path']['category_id'], requestBody: CategoriesV3ApiSpecs.CreateCategoryMetafieldData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: CategoriesV3ApiSpecs.MetafieldFull;
        meta?: CategoriesV3ApiSpecs.MetaEmptyFull;
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
    getCategoryMetafield(categoryId: CategoriesV3ApiSpecs.GetCategoryMetafieldData['path']['category_id'], metafieldId: CategoriesV3ApiSpecs.GetCategoryMetafieldData['path']['metafield_id'], query?: CategoriesV3ApiSpecs.GetCategoryMetafieldData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: CategoriesV3ApiSpecs.MetafieldFull;
        meta?: CategoriesV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateCategoryMetafield(categoryId: CategoriesV3ApiSpecs.UpdateCategoryMetafieldData['path']['category_id'], metafieldId: CategoriesV3ApiSpecs.UpdateCategoryMetafieldData['path']['metafield_id'], requestBody: CategoriesV3ApiSpecs.UpdateCategoryMetafieldData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: CategoriesV3ApiSpecs.MetafieldFull;
        meta?: CategoriesV3ApiSpecs.MetaEmptyFull;
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
    deleteCategoryMetafield(categoryId: CategoriesV3ApiSpecs.DeleteCategoryMetafieldData['path']['category_id'], metafieldId: CategoriesV3ApiSpecs.DeleteCategoryMetafieldData['path']['metafield_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    createCategoryImage(categoryId: CategoriesV3ApiSpecs.CreateCategoryImageData['path']['category_id'], requestBody: CategoriesV3ApiSpecs.CreateCategoryImageData['body']): Promise<RequestErrorResponse<401, string> | RequestSuccessResponse<200, Required<{
        data?: {
            image_url?: string;
        };
        meta?: CategoriesV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<400, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<403, Required<CategoriesV3ApiSpecs._Error>> | RequestErrorResponse<404, Required<{
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
    deleteCategoryImage(categoryId: CategoriesV3ApiSpecs.DeleteCategoryImageData['path']['category_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<401, string> | RequestErrorResponse<403, Required<CategoriesV3ApiSpecs._Error>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getCategorySortOrders(categoryId: CategoriesV3ApiSpecs.GetCategorySortOrdersData['path']['category_id'], query?: CategoriesV3ApiSpecs.GetCategorySortOrdersData['query']): Promise<RequestErrorResponse<401, string> | RequestErrorResponse<403, Required<CategoriesV3ApiSpecs._Error>> | RequestSuccessResponse<200, Required<{
        data?: Array<CategoriesV3ApiSpecs.ProductSortOrder>;
        meta?: CategoriesV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.ErrorBase>>>;
    updateCategorySortOrders(categoryId: CategoriesV3ApiSpecs.UpdateCategorySortOrdersData['path']['category_id'], requestBody: CategoriesV3ApiSpecs.UpdateCategorySortOrdersData['body'], query?: CategoriesV3ApiSpecs.UpdateCategorySortOrdersData['query']): Promise<RequestErrorResponse<401, string> | RequestErrorResponse<403, Required<CategoriesV3ApiSpecs._Error>> | RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, CategoriesV3ApiSpecs.ProductSortOrder[]> | RequestErrorResponse<415, string> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.ErrorBase>>>;
    getCategoriesMetafields(query?: CategoriesV3ApiSpecs.GetCategoriesMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.MetaFieldCollectionResponse>>>;
    createCategoriesMetafields(requestBody: CategoriesV3ApiSpecs.CreateCategoriesMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.MetaFieldCollectionResponsePostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>>>;
    updateCategoriesMetafields(requestBody: CategoriesV3ApiSpecs.UpdateCategoriesMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.MetaFieldCollectionResponsePostPut>> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    deleteCategoriesMetafields(requestBody: CategoriesV3ApiSpecs.DeleteCategoriesMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.MetaFieldCollectionDeleteResponseSuccess>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessDelete>>>;
}
