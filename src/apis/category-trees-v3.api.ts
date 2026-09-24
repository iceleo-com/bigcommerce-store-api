import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CategoryTreesV3ApiSpecs from '../generated/category-trees-v3';
export * as CategoryTreesV3ApiSpecs from '../generated/category-trees-v3';

export class CategoryTreesV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Categories
     *
     * Returns a list of categories. 

     To get a specific category in a tree, provide a category ID.
     */
    getAllCategories(
        query?: CategoryTreesV3ApiSpecs.GetAllCategoriesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CategoryTreesV3ApiSpecs.GetAllCategoriesResponses[200]>>,(RequestErrorResponse<400, Required<CategoryTreesV3ApiSpecs.GetAllCategoriesErrors[400]>> | RequestErrorResponse<500, Required<CategoryTreesV3ApiSpecs.GetAllCategoriesErrors[500]>>)>({
            path: 'v3/catalog/trees/categories',
            query,
        });
    }

    /**
     * Create Categories
     *
     * Creates new categories. 

     Creating a category requires:
      - `name`
      - `url` 
      - `tree_id` or `parent_id` 
     */
    createCategories(
        requestBody: CategoryTreesV3ApiSpecs.CreateCategoriesData['body'],
    ) {
        return this.request.post<(RequestSuccessResponse<201, Required<CategoryTreesV3ApiSpecs.CreateCategoriesResponses[201]>> | RequestSuccessResponse<207, Required<CategoryTreesV3ApiSpecs.CreateCategoriesResponses[207]>>),(RequestErrorResponse<400, Required<CategoryTreesV3ApiSpecs.CreateCategoriesErrors[400]>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.CreateCategoriesErrors[422]>> | RequestErrorResponse<500, Required<CategoryTreesV3ApiSpecs.CreateCategoriesErrors[500]>>)>({
            path: 'v3/catalog/trees/categories',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Categories
     *
     * Updates existing categories. 

      To update a specific category in a tree, provide a category id.
     */
    updateCategories(
        requestBody: CategoryTreesV3ApiSpecs.UpdateCategoriesData['body'],
    ) {
        return this.request.put<(RequestSuccessResponse<200, Required<CategoryTreesV3ApiSpecs.UpdateCategoriesResponses[200]>> | RequestSuccessResponse<204, Required<CategoryTreesV3ApiSpecs.UpdateCategoriesResponses[204]>> | RequestSuccessResponse<207, Required<CategoryTreesV3ApiSpecs.UpdateCategoriesResponses[207]>>),(RequestErrorResponse<400, Required<CategoryTreesV3ApiSpecs.UpdateCategoriesErrors[400]>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.UpdateCategoriesErrors[422]>> | RequestErrorResponse<500, Required<CategoryTreesV3ApiSpecs.UpdateCategoriesErrors[500]>>)>({
            path: 'v3/catalog/trees/categories',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Categories
     *
     * Deletes categories. 

     To delete a specific category in a tree, provide a category ID.
     */
    deleteTreeCategories(
        query?: CategoryTreesV3ApiSpecs.DeleteTreeCategoriesData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CategoryTreesV3ApiSpecs.DeleteTreeCategoriesResponses[204]>>,(RequestErrorResponse<400, Required<CategoryTreesV3ApiSpecs.DeleteTreeCategoriesErrors[400]>> | RequestErrorResponse<500, Required<CategoryTreesV3ApiSpecs.DeleteTreeCategoriesErrors[500]>>)>({
            path: 'v3/catalog/trees/categories',
            query,
        });
    }

    /**
     * Get All Category Trees
     *
     * Returns a list of *Category Trees*.
     */
    getCategoryTrees(
        query?: CategoryTreesV3ApiSpecs.GetCategoryTreesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CategoryTreesV3ApiSpecs.GetCategoryTreesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/catalog/trees',
            query,
        });
    }

    /**
     * Upsert Category Trees
     *
     * Upserts *Category Trees*. 

     This single endpoint updates and creates category trees. If a tree object contains an ID, it is processed as an update operation using that ID. If you do not provide an ID, a new tree is created. The category tree `name` field is required to create trees, but is not required on the update.

     **Usage Notes**
     * `channel_id` is required to create a *Category Tree*. You can assign one `channel_id` to one category tree.

     */
    upsertCategoryTrees(
        requestBody: CategoryTreesV3ApiSpecs.UpsertCategoryTreesData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CategoryTreesV3ApiSpecs.UpsertCategoryTreesResponses[200]>>,RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.UpsertCategoryTreesErrors[422]>>>({
            path: 'v3/catalog/trees',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Category Trees
     *
     * Deletes *Category Trees*. A filter must be supplied with the endpoint.
     */
    deleteCategoryTrees(
        query?: CategoryTreesV3ApiSpecs.DeleteCategoryTreesData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CategoryTreesV3ApiSpecs.DeleteCategoryTreesResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/catalog/trees',
            query,
        });
    }

    /**
     * Get a Category Tree
     *
     * Returns a *Category Tree*.
     */
    getCategoryTreeByTreeId(
        treeId: CategoryTreesV3ApiSpecs.GetCategoryTreeByTreeIdData['path']['tree_id'],
        query?: CategoryTreesV3ApiSpecs.GetCategoryTreeByTreeIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CategoryTreesV3ApiSpecs.GetCategoryTreeByTreeIdResponses[200]>>,RequestErrorResponse<404, Required<CategoryTreesV3ApiSpecs.GetCategoryTreeByTreeIdErrors[404]>>>({
            path: `v3/catalog/trees/${treeId}/categories`,
            query,
        });
    }

    /**
     * @deprecated Use `getCategoryTreeByTreeId` instead.
     */
    getCategoryTree(...args: Parameters<CategoryTreesV3Api['getCategoryTreeByTreeId']>) {
        return this.getCategoryTreeByTreeId(...args);
    }
}
