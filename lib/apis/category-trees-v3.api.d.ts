import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CategoryTreesV3ApiSpecs from '../generated/category-trees-v3';
export * as CategoryTreesV3ApiSpecs from '../generated/category-trees-v3';
export declare class CategoryTreesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getAllCategories(query?: CategoryTreesV3ApiSpecs.GetAllCategoriesData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<CategoryTreesV3ApiSpecs.Category>;
        meta?: CategoryTreesV3ApiSpecs.MetaPagination;
    }>> | RequestErrorResponse<400, Required<CategoryTreesV3ApiSpecs.ErrorRequest>> | RequestErrorResponse<500, Required<CategoryTreesV3ApiSpecs.ErrorRequest>>>;
    createCategories(requestBody: CategoryTreesV3ApiSpecs.CreateCategoriesData['body']): Promise<RequestErrorResponse<400, Required<CategoryTreesV3ApiSpecs.ErrorRequest>> | RequestErrorResponse<500, Required<CategoryTreesV3ApiSpecs.ErrorRequest>> | RequestSuccessResponse<201, Required<CategoryTreesV3ApiSpecs.SuccessResponse>> | RequestSuccessResponse<207, Required<CategoryTreesV3ApiSpecs.PartialSuccessResponse>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.ErrorResponse>>>;
    updateCategories(requestBody: CategoryTreesV3ApiSpecs.UpdateCategoriesData['body']): Promise<RequestSuccessResponse<200, Required<unknown>> | RequestErrorResponse<400, Required<CategoryTreesV3ApiSpecs.ErrorRequest>> | RequestErrorResponse<500, Required<CategoryTreesV3ApiSpecs.ErrorRequest>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<204, Required<CategoryTreesV3ApiSpecs.SuccessNoContentResponse>> | RequestSuccessResponse<207, Required<CategoryTreesV3ApiSpecs.PartialSuccessNoContentResponse>>>;
    deleteTreeCategories(query?: CategoryTreesV3ApiSpecs.DeleteTreeCategoriesData['query']): Promise<RequestErrorResponse<400, Required<CategoryTreesV3ApiSpecs.ErrorRequest>> | RequestErrorResponse<500, Required<CategoryTreesV3ApiSpecs.ErrorRequest>> | RequestSuccessResponse<204, Required<CategoryTreesV3ApiSpecs.SuccessNoContentResponse>>>;
    getCategoryTrees(query?: CategoryTreesV3ApiSpecs.GetCategoryTreesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<CategoryTreesV3ApiSpecs.Tree>;
        meta?: CategoryTreesV3ApiSpecs.MetaPaginationObject;
    }>>>;
    upsertCategoryTrees(requestBody: CategoryTreesV3ApiSpecs.UpsertCategoryTreesData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<CategoryTreesV3ApiSpecs.Tree>;
        meta?: CategoryTreesV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.Beta4ErrorResponse>>>;
    deleteCategoryTrees(query?: CategoryTreesV3ApiSpecs.DeleteCategoryTreesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getCategoryTreeByTreeId(treeId: CategoryTreesV3ApiSpecs.GetCategoryTreeByTreeIdData['path']['tree_id'], query?: CategoryTreesV3ApiSpecs.GetCategoryTreeByTreeIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<CategoryTreesV3ApiSpecs.CategoryNode>;
        meta?: CategoryTreesV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<CategoryTreesV3ApiSpecs.Beta4ErrorResponse>>>;
    getCategoryTree(...args: Parameters<CategoryTreesV3Api['getCategoryTreeByTreeId']>): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<CategoryTreesV3ApiSpecs.CategoryNode>;
        meta?: CategoryTreesV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<CategoryTreesV3ApiSpecs.Beta4ErrorResponse>>>;
}
