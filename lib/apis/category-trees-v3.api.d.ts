import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CategoryTreesV3ApiSpecs from '../generated/category-trees-v3';
export * as CategoryTreesV3ApiSpecs from '../generated/category-trees-v3';
export declare class CategoryTreesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getCategoryTrees(query?: CategoryTreesV3ApiSpecs.GetCategoryTreesData['query']): Promise<RequestSuccessResponse<200, Required<CategoryTreesV3ApiSpecs.CategoryTreeList>> | RequestErrorResponse<403, Required<CategoryTreesV3ApiSpecs.GeneralError>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.GetCategoryTreesRequestUnprocessableEntityError>>>;
    upsertCategoryTrees(requestBody: CategoryTreesV3ApiSpecs.UpsertCategoryTreesData['body']): Promise<RequestErrorResponse<403, Required<CategoryTreesV3ApiSpecs.GeneralError>> | RequestSuccessResponse<200, Required<CategoryTreesV3ApiSpecs.CategoryTree>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.Beta4ErrorResponse>>>;
    deleteCategoryTrees(query?: CategoryTreesV3ApiSpecs.DeleteCategoryTreesData['query']): Promise<RequestErrorResponse<403, Required<CategoryTreesV3ApiSpecs.GeneralError>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.DeleteCategoryTreesRequestUnprocessableEntityError>>>;
    getCategoryTree(treeId: CategoryTreesV3ApiSpecs.GetCategoryTreeData['path']['tree_id'], query?: CategoryTreesV3ApiSpecs.GetCategoryTreeData['query']): Promise<RequestErrorResponse<403, Required<CategoryTreesV3ApiSpecs.GeneralError>> | RequestSuccessResponse<200, Required<CategoryTreesV3ApiSpecs.CategoryNodeTree>> | RequestErrorResponse<404, Required<CategoryTreesV3ApiSpecs.Beta4ErrorResponse>>>;
    getAllCategories(query?: CategoryTreesV3ApiSpecs.GetAllCategoriesData['query']): Promise<RequestErrorResponse<403, Required<CategoryTreesV3ApiSpecs.GeneralError>> | RequestSuccessResponse<200, Required<CategoryTreesV3ApiSpecs.CategoryList>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.GetAllCategoriesRequestUnprocessableEntityError>>>;
    createCategories(requestBody: CategoryTreesV3ApiSpecs.CreateCategoriesData['body']): Promise<RequestErrorResponse<403, Required<CategoryTreesV3ApiSpecs.GeneralError>> | RequestSuccessResponse<201, Required<CategoryTreesV3ApiSpecs.SuccessResponse>> | RequestErrorResponse<400, Required<CategoryTreesV3ApiSpecs.ErrorRequest>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.ErrorResponse>>>;
    updateCategories(requestBody: CategoryTreesV3ApiSpecs.UpdateCategoriesData['body']): Promise<RequestErrorResponse<403, Required<CategoryTreesV3ApiSpecs.GeneralError>> | RequestErrorResponse<400, Required<CategoryTreesV3ApiSpecs.ErrorRequest>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CategoryTreesV3ApiSpecs.SuccessNoContentResponse>>>;
    deleteTreeCategories(query?: CategoryTreesV3ApiSpecs.DeleteTreeCategoriesData['query']): Promise<RequestErrorResponse<403, Required<CategoryTreesV3ApiSpecs.GeneralError>> | RequestErrorResponse<400, Required<CategoryTreesV3ApiSpecs.ErrorRequest>> | RequestSuccessResponse<202, Required<CategoryTreesV3ApiSpecs.SuccessNoContentResponse>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.DeleteTreeCategoriesRequestUnprocessableEntityError>>>;
}
