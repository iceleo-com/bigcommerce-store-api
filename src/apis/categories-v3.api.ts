import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CategoriesV3ApiSpecs from '../generated/categories-v3';
export * as CategoriesV3ApiSpecs from '../generated/categories-v3';

export class CategoriesV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * List Categories
     *
     * When possible, use the [Catalog Trees - Get all categories](/developer/api-reference/rest/admin/catalog/category-trees/categories/get-all-categories) endpoint instead.

     Returns a list of *Categories*. Optional filter parameters can be passed in.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    getCategories(
        query?: CategoriesV3ApiSpecs.GetCategoriesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.GetCategoriesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/catalog/categories',
            query,
        });
    }

    /**
     * Create Category
     *
     * When possible, use the [Category Trees - Create categories](/developer/api-reference/rest/admin/catalog/category-trees/categories/create-categories) endpoint instead.

     Creates a *Category*.

     Use this endpoint when an API only works with categories of a default BigCommerce storefront (`channel_id=1`). 

     Use the [Create categories](/developer/api-reference/rest/admin/catalog/category-trees/categories/create-categories) endpoint when an API works with categories across different category trees that belong to different storefront channels.

     **Required Fields**:
     - `parent_id`: 
     	- To create a child category, set the `parent_id` to the parent category.
     	- To create a top level category, set the `parent_id` to `0`.
     - `name`

     **Read-Only Fields**:
     - `id`

     **Limits**:
     - 16,000 categories per store limit.
     - 1,000 categories per product limit.
     - 50 characters category name length.
     - 8 levels of child categories depth limit.
     - 65,535 characters category description length limit.
     */
    createCategory(
        requestBody: CategoriesV3ApiSpecs.CreateCategoryData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.CreateCategoryResponses[200]>>,(RequestErrorResponse<409, Required<CategoriesV3ApiSpecs.CreateCategoryErrors[409]>> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.CreateCategoryErrors[422]>>)>({
            path: 'v3/catalog/categories',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Categories
     *
     * When possible, use the [Category Trees - Delete categories](/developer/api-reference/rest/admin/catalog/category-trees/categories/delete-tree-categories) endpoint instead.

     Deletes *Category* objects. At least one filter parameter is required to perform the `DELETE` operation.

     **Usage Notes**

     - Sending a `DELETE`request without specifying a filter parameter will result in a `422` error. 
     - Sending a `DELETE` request for a category that contains products will result in a `422` error. Move products to a new category by sending a `PUT` request to the `/catalog/products/{product_id}` endpoint before deleting a category.
     */
    deleteCategories(
        query?: CategoriesV3ApiSpecs.DeleteCategoriesData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CategoriesV3ApiSpecs.DeleteCategoriesResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/catalog/categories',
            query,
        });
    }

    /**
     * Get Category
     *
     * When possible, use the [Catalog Trees - Get all categories](/developer/api-reference/rest/admin/catalog/category-trees/categories/get-all-categories) endpoint instead. You can provide a category identifier using query parameters to retrieve a single category.

     Returns a single *Category*. Optional parameters can be passed in.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    getCategory(
        categoryId: CategoriesV3ApiSpecs.GetCategoryData['path']['category_id'],
        query?: CategoriesV3ApiSpecs.GetCategoryData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.GetCategoryResponses[200]>>,RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.GetCategoryErrors[404]>>>({
            path: `v3/catalog/categories/${categoryId}`,
            query,
        });
    }

    /**
     * Update Category
     *
     * When possible, use the [Catalog Trees - Update categories](/developer/api-reference/rest/admin/catalog/category-trees/categories/update-categories) endpoint instead.

     Updates a *Category*.

     **Required Fields**
     * none

     **Read-Only Fields**
     - id

     **Note:** 
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    updateCategory(
        categoryId: CategoriesV3ApiSpecs.UpdateCategoryData['path']['category_id'],
        requestBody: CategoriesV3ApiSpecs.UpdateCategoryData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.UpdateCategoryResponses[200]>>,(RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.UpdateCategoryErrors[404]>> | RequestErrorResponse<409, Required<CategoriesV3ApiSpecs.UpdateCategoryErrors[409]>> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.UpdateCategoryErrors[422]>>)>({
            path: `v3/catalog/categories/${categoryId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Category
     *
     * When possible, use the [Category Trees - Delete categories](/developer/api-reference/rest/admin/catalog/category-trees/categories/delete-tree-categories) endpoint instead. You can provide a category identifier using query parameters to delete a single category.

     Deletes a *Category*.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    deleteCategory(
        categoryId: CategoriesV3ApiSpecs.DeleteCategoryData['path']['category_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CategoriesV3ApiSpecs.DeleteCategoryResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/categories/${categoryId}`,
        });
    }

    /**
     * List Category Metafields
     *
     * Get all category metafields.
     */
    getCategoriesMetafields(
        query?: CategoriesV3ApiSpecs.GetCategoriesMetafieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.GetCategoriesMetafieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/catalog/categories/metafields',
            query,
        });
    }

    /**
     * Create Multiple Metafields
     *
     * Create multiple metafields.
     */
    createCategoriesMetafields(
        requestBody: CategoriesV3ApiSpecs.CreateCategoriesMetafieldsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.CreateCategoriesMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<CategoriesV3ApiSpecs.CreateCategoriesMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.CreateCategoriesMetafieldsErrors[422]>>)>({
            path: 'v3/catalog/categories/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Multiple Metafields
     *
     * Create multiple metafields.
     */
    updateCategoriesMetafields(
        requestBody: CategoriesV3ApiSpecs.UpdateCategoriesMetafieldsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.UpdateCategoriesMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<CategoriesV3ApiSpecs.UpdateCategoriesMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.UpdateCategoriesMetafieldsErrors[422]>>)>({
            path: 'v3/catalog/categories/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Multiple Metafields
     *
     * Delete all category metafields.
     */
    deleteCategoriesMetafields(
        requestBody: CategoriesV3ApiSpecs.DeleteCategoriesMetafieldsData['body'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.DeleteCategoriesMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<CategoriesV3ApiSpecs.DeleteCategoriesMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.DeleteCategoriesMetafieldsErrors[422]>>)>({
            path: 'v3/catalog/categories/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Create Category Image
     *
     * Create a *Category Image*.

      **Required Fields**
     - image_file: Form posts are the only accepted upload option.

     Only one image at a time can be created.

     Supported file types are `JPEG/JPG`, `GIF`, `PNG` and `ICO`.

     Limit image size to `8MB`.
     To update a *Category Image*, use the [Update categories](/developer/api-reference/rest/admin/catalog/category-trees/categories/update-categories) endpoint and an `image_url`.
     */
    createCategoryImage(
        categoryId: CategoriesV3ApiSpecs.CreateCategoryImageData['path']['category_id'],
        requestBody: CategoriesV3ApiSpecs.CreateCategoryImageData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.CreateCategoryImageResponses[200]>>,(RequestErrorResponse<400, Required<CategoriesV3ApiSpecs.CreateCategoryImageErrors[400]>> | RequestErrorResponse<403, Required<CategoriesV3ApiSpecs.CreateCategoryImageErrors[403]>> | RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.CreateCategoryImageErrors[404]>> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.CreateCategoryImageErrors[422]>>)>({
            path: `v3/catalog/categories/${categoryId}/image`,
            contentType: 'multipart/form-data',
            body: requestBody,
        });
    }

    /**
     * Delete Category Image
     *
     * Deletes a *Category Image*.
     */
    deleteCategoryImage(
        categoryId: CategoriesV3ApiSpecs.DeleteCategoryImageData['path']['category_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CategoriesV3ApiSpecs.DeleteCategoryImageResponses[204]>>,(RequestErrorResponse<403, Required<CategoriesV3ApiSpecs.DeleteCategoryImageErrors[403]>> | RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.DeleteCategoryImageErrors[404]>>)>({
            path: `v3/catalog/categories/${categoryId}/image`,
        });
    }

    /**
     * List Category Metafields
     *
     * Returns a list of *Metafields* on a *Category*. Optional filter parameters can be passed in.
     */
    getCategoryMetafields(
        categoryId: CategoriesV3ApiSpecs.GetCategoryMetafieldsData['path']['category_id'],
        query?: CategoriesV3ApiSpecs.GetCategoryMetafieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.GetCategoryMetafieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/categories/${categoryId}/metafields`,
            query,
        });
    }

    /**
     * Create Category Metafield
     *
     * Creates a *Category Metafield*.

     **Required Fields:**
     - permission_set
     - namespace
     - key
     - value

     **Read-Only Fields**
     - id

     **Note:** The maximum number of metafields allowed on each order, product, category, variant, or brand is 250 per client ID. For more information, see [Platform Limits (Help Center)](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
     */
    createCategoryMetafield(
        categoryId: CategoriesV3ApiSpecs.CreateCategoryMetafieldData['path']['category_id'],
        requestBody: CategoriesV3ApiSpecs.CreateCategoryMetafieldData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.CreateCategoryMetafieldResponses[200]>>,(RequestErrorResponse<400, Required<CategoriesV3ApiSpecs.CreateCategoryMetafieldErrors[400]>> | RequestErrorResponse<409, Required<CategoriesV3ApiSpecs.CreateCategoryMetafieldErrors[409]>> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.CreateCategoryMetafieldErrors[422]>>)>({
            path: `v3/catalog/categories/${categoryId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Category Metafield
     *
     * Returns a single *Category Metafield*. Optional parameters can be passed in.
     */
    getCategoryMetafield(
        categoryId: CategoriesV3ApiSpecs.GetCategoryMetafieldData['path']['category_id'],
        metafieldId: CategoriesV3ApiSpecs.GetCategoryMetafieldData['path']['metafield_id'],
        query?: CategoriesV3ApiSpecs.GetCategoryMetafieldData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.GetCategoryMetafieldResponses[200]>>,RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.GetCategoryMetafieldErrors[404]>>>({
            path: `v3/catalog/categories/${categoryId}/metafields/${metafieldId}`,
            query,
        });
    }

    /**
     * Update Category Metafield
     *
     * Updates a *Category Metafield*.

     **Required Fields**
     * none

     **Read-Only Fields**
     * id
     * These fields can only be modified by the app (API credentials) that created the metafield:
     	* namespace
     	* key
     	* permission_set

     **Usage Notes**
     * Attempting to modify `namespace`, `key`, and `permission_set` fields using a client ID different from the one used to create those metafields will result in a 403 error message. 
     */
    updateCategoryMetafield(
        categoryId: CategoriesV3ApiSpecs.UpdateCategoryMetafieldData['path']['category_id'],
        metafieldId: CategoriesV3ApiSpecs.UpdateCategoryMetafieldData['path']['metafield_id'],
        requestBody: CategoriesV3ApiSpecs.UpdateCategoryMetafieldData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.UpdateCategoryMetafieldResponses[200]>>,(RequestErrorResponse<400, Required<CategoriesV3ApiSpecs.UpdateCategoryMetafieldErrors[400]>> | RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.UpdateCategoryMetafieldErrors[404]>>)>({
            path: `v3/catalog/categories/${categoryId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Category Metafield
     *
     * Deletes a *Category Metafield*.
     */
    deleteCategoryMetafield(
        categoryId: CategoriesV3ApiSpecs.DeleteCategoryMetafieldData['path']['category_id'],
        metafieldId: CategoriesV3ApiSpecs.DeleteCategoryMetafieldData['path']['metafield_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CategoriesV3ApiSpecs.DeleteCategoryMetafieldResponses[204]>>,RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.DeleteCategoryMetafieldErrors[404]>>>({
            path: `v3/catalog/categories/${categoryId}/metafields/${metafieldId}`,
        });
    }

    /**
     * Get Product Sort Order
     *
     * Returns a list of products and their sort order for a specific category.

     **Limits**

     - page=2&limit=250 will return page 2 of the results with 250 items per page.

     **Usage Notes**

     * Product sort order only takes effect on the storefront when sorting by **Featured Items** in the category. See [Sort Order](https://support.bigcommerce.com/s/article/Sort-Order) for more information.
     * Data pairs are displayed in ascending order based on products' `sort_order` values.
     * `null` values are allowed for products without specified `sort_order` values.
     * Products with `sort_order` value of `null` will be displayed after products with valid numerical values.
     * The priorities for determining product sort order on a storefront are the following:
         * Priority 1: Manually specified sort order on Category Level (API).
         * Priority 2: Manually specified sort order on Product (Global) Level (UI/API).
         * Priority 3: Default sorting by Product ID (newly added products go first) (UI/API).

     */
    getCategorySortOrders(
        categoryId: CategoriesV3ApiSpecs.GetCategorySortOrdersData['path']['category_id'],
        query?: CategoriesV3ApiSpecs.GetCategorySortOrdersData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.GetCategorySortOrdersResponses[200]>>,(RequestErrorResponse<403, Required<CategoriesV3ApiSpecs.GetCategorySortOrdersErrors[403]>> | RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.GetCategorySortOrdersErrors[404]>>)>({
            path: `v3/catalog/categories/${categoryId}/products/sort-order`,
            query,
        });
    }

    /**
     * Update Product Sort Order
     *
     * Updates sort order of products within a specific category.
     */
    updateCategorySortOrders(
        categoryId: CategoriesV3ApiSpecs.UpdateCategorySortOrdersData['path']['category_id'],
        requestBody: CategoriesV3ApiSpecs.UpdateCategorySortOrdersData['body'],
        query?: CategoriesV3ApiSpecs.UpdateCategorySortOrdersData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.UpdateCategorySortOrdersResponses[200]>>,(RequestErrorResponse<403, Required<CategoriesV3ApiSpecs.UpdateCategorySortOrdersErrors[403]>> | RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.UpdateCategorySortOrdersErrors[404]>> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.UpdateCategorySortOrdersErrors[422]>>)>({
            path: `v3/catalog/categories/${categoryId}/products/sort-order`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }
}
