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
     * List Category Trees
     *
     * Returns a list of category trees.
     */
    getCategoryTrees(
        query?: CategoryTreesV3ApiSpecs.GetCategoryTreesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CategoryTreesV3ApiSpecs.GetCategoryTreesResponses[200]>>,(RequestErrorResponse<403, Required<CategoryTreesV3ApiSpecs.GetCategoryTreesErrors[403]>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.GetCategoryTreesErrors[422]>>)>({
            path: 'v3/catalog/trees',
            query,
        });
    }

    /**
     * Upsert Category Trees
     *
     * Upserts category trees. 

     This single endpoint updates and creates category trees. If a tree object contains an ID, it is processed as an update operation using that ID. If you do not provide an ID, a new tree is created. The category tree `name` field is required to create trees, but is not required on the update.

     **Usage Notes**
     * Channel ID in the `channels` field is required to create a category tree. You can only assign a category tree to one channel.
     * The `channels` field must be absent when updating a category tree. This field is currently unsupported during a category tree update.

     */
    upsertCategoryTrees(
        requestBody: CategoryTreesV3ApiSpecs.UpsertCategoryTreesData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CategoryTreesV3ApiSpecs.UpsertCategoryTreesResponses[200]>>,(RequestErrorResponse<403, Required<CategoryTreesV3ApiSpecs.UpsertCategoryTreesErrors[403]>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.UpsertCategoryTreesErrors[422]>>)>({
            path: 'v3/catalog/trees',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Category Trees
     *
     * Deletes category trees. A filter must be supplied with the endpoint.
     */
    deleteCategoryTrees(
        query?: CategoryTreesV3ApiSpecs.DeleteCategoryTreesData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CategoryTreesV3ApiSpecs.DeleteCategoryTreesResponses[204]>>,(RequestErrorResponse<403, Required<CategoryTreesV3ApiSpecs.DeleteCategoryTreesErrors[403]>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.DeleteCategoryTreesErrors[422]>>)>({
            path: 'v3/catalog/trees',
            query,
        });
    }

    /**
     * Get Category Tree
     *
     * Returns a category tree.

     **Note:**
     The default rate limit for this endpoint is 1 concurrent request.
     */
    getCategoryTree(
        treeId: CategoryTreesV3ApiSpecs.GetCategoryTreeData['path']['tree_id'],
        query?: CategoryTreesV3ApiSpecs.GetCategoryTreeData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CategoryTreesV3ApiSpecs.GetCategoryTreeResponses[200]>>,(RequestErrorResponse<403, Required<CategoryTreesV3ApiSpecs.GetCategoryTreeErrors[403]>> | RequestErrorResponse<404, Required<CategoryTreesV3ApiSpecs.GetCategoryTreeErrors[404]>>)>({
            path: `v3/catalog/trees/${treeId}/categories`,
            query,
        });
    }

    /**
     * List Categories
     *
     * Returns a list of categories. 

     To get a specific category in a tree, provide a category ID.
     */
    getAllCategories(
        query?: CategoryTreesV3ApiSpecs.GetAllCategoriesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CategoryTreesV3ApiSpecs.GetAllCategoriesResponses[200]>>,(RequestErrorResponse<403, Required<CategoryTreesV3ApiSpecs.GetAllCategoriesErrors[403]>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.GetAllCategoriesErrors[422]>>)>({
            path: 'v3/catalog/trees/categories',
            query,
        });
    }

    /**
     * Create Categories
     *
     * Creates new categories. 

     Limits: 
     - 16,000 categories per store limit.
     - 1,000 categories per product limit.
     - 50 characters category name length.
     - 8 levels of child categories depth limit.
     - 65,535 characters category description length limit.

     Creating a category requires:
      - `name`
      - `tree_id` or `parent_id`
      - The `url` property is optional, but if included, its path must be unique per channel and category. If the path is not unique, the category will still be created but the URL will not — the response returns a multi-status to indicate the partial success.
     */
    createCategories(
        requestBody: CategoryTreesV3ApiSpecs.CreateCategoriesData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<CategoryTreesV3ApiSpecs.CreateCategoriesResponses[201]>>,(RequestErrorResponse<400, Required<CategoryTreesV3ApiSpecs.CreateCategoriesErrors[400]>> | RequestErrorResponse<403, Required<CategoryTreesV3ApiSpecs.CreateCategoriesErrors[403]>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.CreateCategoriesErrors[422]>>)>({
            path: 'v3/catalog/trees/categories',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Categories
     *
     * Updates existing categories. 

     To update a specific category in a tree, provide a `category id`.

     The `url` property is optional, but if included, its path must be unique per channel and category. If the path is not unique, the category will still be created but the URL will not — the response returns a multi-status to indicate the partial success.
     */
    updateCategories(
        requestBody: CategoryTreesV3ApiSpecs.UpdateCategoriesData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CategoryTreesV3ApiSpecs.UpdateCategoriesResponses[200]>>,(RequestErrorResponse<400, Required<CategoryTreesV3ApiSpecs.UpdateCategoriesErrors[400]>> | RequestErrorResponse<403, Required<CategoryTreesV3ApiSpecs.UpdateCategoriesErrors[403]>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.UpdateCategoriesErrors[422]>>)>({
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
        return this.request.delete<RequestSuccessResponse<202, Required<CategoryTreesV3ApiSpecs.DeleteTreeCategoriesResponses[202]>>,(RequestErrorResponse<400, Required<CategoryTreesV3ApiSpecs.DeleteTreeCategoriesErrors[400]>> | RequestErrorResponse<403, Required<CategoryTreesV3ApiSpecs.DeleteTreeCategoriesErrors[403]>> | RequestErrorResponse<422, Required<CategoryTreesV3ApiSpecs.DeleteTreeCategoriesErrors[422]>>)>({
            path: 'v3/catalog/trees/categories',
            query,
        });
    }
}
