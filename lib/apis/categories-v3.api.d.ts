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
    getCategoryById(categoryId: CategoriesV3ApiSpecs.GetCategoryByIdData['path']['category_id'], query?: CategoriesV3ApiSpecs.GetCategoryByIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: CategoriesV3ApiSpecs.CategoryFull;
        meta?: CategoriesV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getCategory(...args: Parameters<CategoriesV3Api['getCategoryById']>): Promise<RequestSuccessResponse<200, Required<{
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
            parent_id: number;
            name: string;
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
    deleteCategoryById(categoryId: CategoriesV3ApiSpecs.DeleteCategoryByIdData['path']['category_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteCategory(...args: Parameters<CategoriesV3Api['deleteCategoryById']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getCategoryMetafieldsByCategoryId(categoryId: CategoriesV3ApiSpecs.GetCategoryMetafieldsByCategoryIdData['path']['category_id'], query?: CategoriesV3ApiSpecs.GetCategoryMetafieldsByCategoryIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<CategoriesV3ApiSpecs.MetafieldFull>;
        meta?: CategoriesV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getCategoryMetafields(...args: Parameters<CategoriesV3Api['getCategoryMetafieldsByCategoryId']>): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<CategoriesV3ApiSpecs.MetafieldFull>;
        meta?: CategoriesV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    createCategoryMetafield(categoryId: CategoriesV3ApiSpecs.CreateCategoryMetafieldData['path']['category_id'], requestBody: CategoriesV3ApiSpecs.CreateCategoryMetafieldData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: CategoriesV3ApiSpecs.MetafieldFull;
        meta?: CategoriesV3ApiSpecs.MetaEmptyFull;
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
    getCategoryMetafieldByCategoryId(categoryId: CategoriesV3ApiSpecs.GetCategoryMetafieldByCategoryIdData['path']['category_id'], metafieldId: CategoriesV3ApiSpecs.GetCategoryMetafieldByCategoryIdData['path']['metafield_id'], query?: CategoriesV3ApiSpecs.GetCategoryMetafieldByCategoryIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: CategoriesV3ApiSpecs.MetafieldFull;
        meta?: CategoriesV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getCategoryMetafield(...args: Parameters<CategoriesV3Api['getCategoryMetafieldByCategoryId']>): Promise<RequestSuccessResponse<200, Required<{
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
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    deleteCategoryMetafieldById(categoryId: CategoriesV3ApiSpecs.DeleteCategoryMetafieldByIdData['path']['category_id'], metafieldId: CategoriesV3ApiSpecs.DeleteCategoryMetafieldByIdData['path']['metafield_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteCategoryMetafield(...args: Parameters<CategoriesV3Api['deleteCategoryMetafieldById']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    createCategoryImage(categoryId: CategoriesV3ApiSpecs.CreateCategoryImageData['path']['category_id'], requestBody: CategoriesV3ApiSpecs.CreateCategoryImageData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            image_url?: string;
        };
        meta?: CategoriesV3ApiSpecs.MetaEmptyFull;
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
    deleteCategoryImage(categoryId: CategoriesV3ApiSpecs.DeleteCategoryImageData['path']['category_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getsortorders(categoryId: CategoriesV3ApiSpecs.GetsortordersData['path']['category_id']): Promise<RequestSuccessResponse<200, {
        product_id?: number;
        sort_order?: number;
    }[]> | RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.ErrorBase>>>;
    getCategorySortOrders(...args: Parameters<CategoriesV3Api['getsortorders']>): Promise<RequestSuccessResponse<200, {
        product_id?: number;
        sort_order?: number;
    }[]> | RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.ErrorBase>>>;
    updatesortorder(categoryId: CategoriesV3ApiSpecs.UpdatesortorderData['path']['category_id'], requestBody: CategoriesV3ApiSpecs.UpdatesortorderData['body']): Promise<RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, CategoriesV3ApiSpecs.ProductSortOrder[]> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.ErrorBase>>>;
    updateCategorySortOrders(...args: Parameters<CategoriesV3Api['updatesortorder']>): Promise<RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, CategoriesV3ApiSpecs.ProductSortOrder[]> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.ErrorBase>>>;
}
