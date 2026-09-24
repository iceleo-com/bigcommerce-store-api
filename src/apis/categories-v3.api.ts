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
     * Get All Categories
     *
     * Returns a list of *Categories*. Optional filter parameters can be passed in.

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
     * Create a Category
     *
     * Creates a *Category*.

     Use this endpoint when an API only works with categories of a default BigCommerce storefront (`channel_id=1`). 

     Use the [Create Categories](/docs/rest-catalog/category-trees/categories#create-categories) endpoint when an API works with categories across different category trees that belong to different storefront channels.

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
     - 8 levels of category depth limit.
     - 65,642 characters category description length limit.

      **Note:**
      The default rate limit for this endpoint is 40 concurrent requests.

     */
    createCategory(
        requestBody: CategoriesV3ApiSpecs.CreateCategoryData['body'],
    ) {
        return this.request.post<(RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.CreateCategoryResponses[200]>> | RequestSuccessResponse<207, Required<CategoriesV3ApiSpecs.CreateCategoryResponses[207]>>),(RequestErrorResponse<409, Required<CategoriesV3ApiSpecs.CreateCategoryErrors[409]>> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.CreateCategoryErrors[422]>>)>({
            path: 'v3/catalog/categories',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Categories
     *
     * Deletes *Category* objects. At least one filter parameter is required to perform the `DELETE` operation.

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
     * Get a Category
     *
     * Returns a single *Category*. Optional parameters can be passed in.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    getCategoryById(
        categoryId: CategoriesV3ApiSpecs.GetCategoryByIdData['path']['category_id'],
        query?: CategoriesV3ApiSpecs.GetCategoryByIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.GetCategoryByIdResponses[200]>>,RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.GetCategoryByIdErrors[404]>>>({
            path: `v3/catalog/categories/${categoryId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getCategoryById` instead.
     */
    getCategory(...args: Parameters<CategoriesV3Api['getCategoryById']>) {
        return this.getCategoryById(...args);
    }

    /**
     * Update a Category
     *
     * Updates a *Category*.

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
        return this.request.put<(RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.UpdateCategoryResponses[200]>> | RequestSuccessResponse<207, Required<CategoriesV3ApiSpecs.UpdateCategoryResponses[207]>>),(RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.UpdateCategoryErrors[404]>> | RequestErrorResponse<409, Required<CategoriesV3ApiSpecs.UpdateCategoryErrors[409]>> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.UpdateCategoryErrors[422]>>)>({
            path: `v3/catalog/categories/${categoryId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Category
     *
     * Deletes a *Category*.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    deleteCategoryById(
        categoryId: CategoriesV3ApiSpecs.DeleteCategoryByIdData['path']['category_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CategoriesV3ApiSpecs.DeleteCategoryByIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/categories/${categoryId}`,
        });
    }

    /**
     * @deprecated Use `deleteCategoryById` instead.
     */
    deleteCategory(...args: Parameters<CategoriesV3Api['deleteCategoryById']>) {
        return this.deleteCategoryById(...args);
    }

    /**
     * Get All Category Metafields
     *
     * Returns a list of *Metafields* on a *Category*. Optional filter parameters can be passed in.
     */
    getCategoryMetafieldsByCategoryId(
        categoryId: CategoriesV3ApiSpecs.GetCategoryMetafieldsByCategoryIdData['path']['category_id'],
        query?: CategoriesV3ApiSpecs.GetCategoryMetafieldsByCategoryIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.GetCategoryMetafieldsByCategoryIdResponses[200]>>,RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.GetCategoryMetafieldsByCategoryIdErrors[404]>>>({
            path: `v3/catalog/categories/${categoryId}/metafields`,
            query,
        });
    }

    /**
     * @deprecated Use `getCategoryMetafieldsByCategoryId` instead.
     */
    getCategoryMetafields(...args: Parameters<CategoriesV3Api['getCategoryMetafieldsByCategoryId']>) {
        return this.getCategoryMetafieldsByCategoryId(...args);
    }

    /**
     * Create a Category Metafield
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
        return this.request.post<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.CreateCategoryMetafieldResponses[200]>>,(RequestErrorResponse<409, Required<CategoriesV3ApiSpecs.CreateCategoryMetafieldErrors[409]>> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.CreateCategoryMetafieldErrors[422]>>)>({
            path: `v3/catalog/categories/${categoryId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Category Metafield
     *
     * Returns a single *Category Metafield*. Optional parameters can be passed in.
     */
    getCategoryMetafieldByCategoryId(
        categoryId: CategoriesV3ApiSpecs.GetCategoryMetafieldByCategoryIdData['path']['category_id'],
        metafieldId: CategoriesV3ApiSpecs.GetCategoryMetafieldByCategoryIdData['path']['metafield_id'],
        query?: CategoriesV3ApiSpecs.GetCategoryMetafieldByCategoryIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.GetCategoryMetafieldByCategoryIdResponses[200]>>,RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.GetCategoryMetafieldByCategoryIdErrors[404]>>>({
            path: `v3/catalog/categories/${categoryId}/metafields/${metafieldId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getCategoryMetafieldByCategoryId` instead.
     */
    getCategoryMetafield(...args: Parameters<CategoriesV3Api['getCategoryMetafieldByCategoryId']>) {
        return this.getCategoryMetafieldByCategoryId(...args);
    }

    /**
     * Update a Category Metafield
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
        return this.request.put<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.UpdateCategoryMetafieldResponses[200]>>,RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.UpdateCategoryMetafieldErrors[404]>>>({
            path: `v3/catalog/categories/${categoryId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Category Metafield
     *
     * Deletes a *Category Metafield*.
     */
    deleteCategoryMetafieldById(
        categoryId: CategoriesV3ApiSpecs.DeleteCategoryMetafieldByIdData['path']['category_id'],
        metafieldId: CategoriesV3ApiSpecs.DeleteCategoryMetafieldByIdData['path']['metafield_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CategoriesV3ApiSpecs.DeleteCategoryMetafieldByIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/categories/${categoryId}/metafields/${metafieldId}`,
        });
    }

    /**
     * @deprecated Use `deleteCategoryMetafieldById` instead.
     */
    deleteCategoryMetafield(...args: Parameters<CategoriesV3Api['deleteCategoryMetafieldById']>) {
        return this.deleteCategoryMetafieldById(...args);
    }

    /**
     * Create a Category Image
     *
     * Create a *Category Image*.

      **Required Fields**
     - image_file: Form posts are the only accepted upload option.

     Only one image at a time can be created.
     Limit image size to 1MB.
     To update a *Category Image*, use the [Update categories](/docs/rest-catalog/category-trees/categories#update-categories) endpoint and an `image_url`.
     */
    createCategoryImage(
        categoryId: CategoriesV3ApiSpecs.CreateCategoryImageData['path']['category_id'],
        requestBody: CategoriesV3ApiSpecs.CreateCategoryImageData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.CreateCategoryImageResponses[200]>>,(RequestErrorResponse<400, Required<CategoriesV3ApiSpecs.CreateCategoryImageErrors[400]>> | RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.CreateCategoryImageErrors[404]>> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.CreateCategoryImageErrors[422]>>)>({
            path: `v3/catalog/categories/${categoryId}/image`,
            contentType: 'multipart/form-data',
            body: requestBody,
        });
    }

    /**
     * Delete a Category Image
     *
     * Deletes a *Category Image*.
     */
    deleteCategoryImage(
        categoryId: CategoriesV3ApiSpecs.DeleteCategoryImageData['path']['category_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CategoriesV3ApiSpecs.DeleteCategoryImageResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/categories/${categoryId}/image`,
        });
    }

    /**
     * Get Product Sort Order
     *
     * Returns a list of products and their sort order for a specific category.

     **Usage Notes**
     * Data pairs are displayed in ascending order based on products' `sort_order` values.
     * `null` values are allowed for products without specified `sort_order` values.
     * Products with `sort_order` value of `null` will be displayed after products with valid numerical values.
     * The priorities for determining product sort order on a storefront are the following:
       - Priority 1: Manually specified sort order on Category Level (API).
       - Priority 2: Manually specified sort order on Product (Global) Level (UI/API).
       - Priority 3: Default sorting by Product ID (newly added products go first) (UI/API).
     */
    getsortorders(
        categoryId: CategoriesV3ApiSpecs.GetsortordersData['path']['category_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.GetsortordersResponses[200]>>,RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.GetsortordersErrors[404]>>>({
            path: `v3/catalog/categories/${categoryId}/products/sort-order`,
        });
    }

    /**
     * @deprecated Use `getsortorders` instead.
     */
    getCategorySortOrders(...args: Parameters<CategoriesV3Api['getsortorders']>) {
        return this.getsortorders(...args);
    }

    /**
     * Update Product Sort Order
     *
     * Updates sort order of products within a specific category.
     */
    updatesortorder(
        categoryId: CategoriesV3ApiSpecs.UpdatesortorderData['path']['category_id'],
        requestBody: CategoriesV3ApiSpecs.UpdatesortorderData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CategoriesV3ApiSpecs.UpdatesortorderResponses[200]>>,(RequestErrorResponse<404, Required<CategoriesV3ApiSpecs.UpdatesortorderErrors[404]>> | RequestErrorResponse<422, Required<CategoriesV3ApiSpecs.UpdatesortorderErrors[422]>>)>({
            path: `v3/catalog/categories/${categoryId}/products/sort-order`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updatesortorder` instead.
     */
    updateCategorySortOrders(...args: Parameters<CategoriesV3Api['updatesortorder']>) {
        return this.updatesortorder(...args);
    }
}
