import RequestService from '../helpers/request/request-service';
import * as CategoryTreesV3ApiSpecs from '../generated/category-trees-v3';

export default class CategoryTreesV3Api {
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
        return this.request.get<CategoryTreesV3ApiSpecs.GetAllCategoriesResponse, CategoryTreesV3ApiSpecs.GetAllCategoriesError>({
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
      - `tree_id` or `parent_id` 
     */
    createCategories(
        requestBody: CategoryTreesV3ApiSpecs.CreateCategoriesData['body'],
    ) {
        return this.request.post<any, CategoryTreesV3ApiSpecs.CreateCategoriesError>({
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
     */
    updateCategories(
        requestBody: CategoryTreesV3ApiSpecs.UpdateCategoriesData['body'],
    ) {
        return this.request.put<CategoryTreesV3ApiSpecs.UpdateCategoriesResponse, CategoryTreesV3ApiSpecs.UpdateCategoriesError>({
            path: 'v3/catalog/trees/categories',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete categories
     *
     * Deletes categories. 

     To delete a specific category in a tree, provide a category ID.
     */
    deleteTreeCategories(
        query?: CategoryTreesV3ApiSpecs.DeleteTreeCategoriesData['query'],
    ) {
        return this.request.delete<any, CategoryTreesV3ApiSpecs.DeleteTreeCategoriesError>({
            path: 'v3/catalog/trees/categories',
            query,
        });
    }

    /**
     * Get all category trees
     *
     * Returns a list of category trees.
     */
    getCategoryTrees(
        query?: CategoryTreesV3ApiSpecs.GetCategoryTreesData['query'],
    ) {
        return this.request.get<CategoryTreesV3ApiSpecs.GetCategoryTreesResponse, CategoryTreesV3ApiSpecs.GetCategoryTreesError>({
            path: 'v3/catalog/trees',
            query,
        });
    }

    /**
     * Upsert category trees
     *
     * Upserts category trees. 

     This single endpoint updates and creates category trees. If a tree object contains an ID, it is processed as an update operation using that ID. If you do not provide an ID, a new tree is created. The category tree `name` field is required to create trees, but is not required on the update.

     **Usage Notes**
     * `channel_id` is required to create a category tree. You can assign one `channel_id` to one category tree.

     */
    upsertCategoryTrees(
        requestBody: CategoryTreesV3ApiSpecs.UpsertCategoryTreesData['body'],
    ) {
        return this.request.put<CategoryTreesV3ApiSpecs.UpsertCategoryTreesResponse, CategoryTreesV3ApiSpecs.UpsertCategoryTreesError>({
            path: 'v3/catalog/trees',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete category trees
     *
     * Deletes category trees. A filter must be supplied with the endpoint.
     */
    deleteCategoryTrees(
        query?: CategoryTreesV3ApiSpecs.DeleteCategoryTreesData['query'],
    ) {
        return this.request.delete<any, CategoryTreesV3ApiSpecs.DeleteCategoryTreesError>({
            path: 'v3/catalog/trees',
            query,
        });
    }

    /**
     * Get a category tree
     *
     * Returns a category tree.
     */
    getCategoryTree(
        treeId: CategoryTreesV3ApiSpecs.GetCategoryTreeData['path']['tree_id'],
        query?: CategoryTreesV3ApiSpecs.GetCategoryTreeData['query'],
    ) {
        return this.request.get<CategoryTreesV3ApiSpecs.GetCategoryTreeResponse, CategoryTreesV3ApiSpecs.GetCategoryTreeError>({
            path: `v3/catalog/trees/${treeId}/categories`,
            query,
        });
    }
}
