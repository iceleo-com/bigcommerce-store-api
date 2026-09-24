import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ProductsV3ApiSpecs from '../generated/products-v3';
export * as ProductsV3ApiSpecs from '../generated/products-v3';

export class ProductsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Products
     *
     * Returns a list of **Products**. Optional filter parameters can be passed in.
     */
    getProducts(
        query?: ProductsV3ApiSpecs.GetProductsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/catalog/products',
            query,
        });
    }

    /**
     * Create a Product
     *
     * Creates a *Product*. Only one product can be created at a time.

     **Required Fields:**
     - `name`
     - `type`
     - `weight`
     - `price`

     **Read-Only Fields**
     - `id`
     - `date_created`
     - `date_modified`
     - `calculated_price`
     - `base_variant_id`

     **Limits**
     - 250 characters product name length.
     - A product can have up to 1000 images. Each image file or image uploaded by URL can be up to 8 MB.

     **Usage Notes**
     * This endpoint accepts a `video` array. To create a product video that accepts a `video` object, see [Create a Product Video](/docs/rest-catalog/products/videos#create-a-product-video) for information.
     */
    createProduct(
        requestBody: ProductsV3ApiSpecs.CreateProductData['body'],
        query?: ProductsV3ApiSpecs.CreateProductData['query'],
    ) {
        return this.request.post<(RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.CreateProductResponses[200]>> | RequestSuccessResponse<207, Required<ProductsV3ApiSpecs.CreateProductResponses[207]>>),(RequestErrorResponse<409, Required<ProductsV3ApiSpecs.CreateProductErrors[409]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.CreateProductErrors[422]>>)>({
            path: 'v3/catalog/products',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Update Products (Batch)
     *
     * Updates products in batches. Batches are limited to 10 products.

     **Required Fields**
     * `id` - product `id` is required for batch updates to products.

     **Read-Only Fields**
     - `id`
     - `date_created`
     - `date_modified`
     - `calculated_price`
     - `base_variant_id`
     */
    updateProducts(
        requestBody: ProductsV3ApiSpecs.UpdateProductsData['body'],
        query?: ProductsV3ApiSpecs.UpdateProductsData['query'],
    ) {
        return this.request.put<(RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.UpdateProductsResponses[200]>> | RequestSuccessResponse<207, Required<ProductsV3ApiSpecs.UpdateProductsResponses[207]>>),(RequestErrorResponse<404, Required<ProductsV3ApiSpecs.UpdateProductsErrors[404]>> | RequestErrorResponse<409, Required<ProductsV3ApiSpecs.UpdateProductsErrors[409]>> | RequestErrorResponse<413, Required<ProductsV3ApiSpecs.UpdateProductsErrors[413]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.UpdateProductsErrors[422]>>)>({
            path: 'v3/catalog/products',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Delete Products
     *
     * To delete *Product* objects, you must include a filter. This prevents inadvertently deleting all *Product* objects in a store.

     > #### Note
     > The maximum number of products you can delete at one time is 250.

     **Example**:
     To delete products with the id's of 1,2 and 3, use `DELETE /v3/catalog/products?id:in=1,2,3`.
     */
    deleteProducts(
        query?: ProductsV3ApiSpecs.DeleteProductsData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.DeleteProductsResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/catalog/products',
            query,
        });
    }

    /**
     * Get a Product
     *
     * Returns a single *Product*. Optional parameters can be passed in.
     */
    getProductById(
        productId: ProductsV3ApiSpecs.GetProductByIdData['path']['product_id'],
        query?: ProductsV3ApiSpecs.GetProductByIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductByIdResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetProductByIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getProductById` instead.
     */
    getProduct(...args: Parameters<ProductsV3Api['getProductById']>) {
        return this.getProductById(...args);
    }

    /**
     * Update a Product
     *
     * Updates a *Product*.

     **Limits**
     - A product can have up to 1000 images. Each image file or image uploaded by URL can be up to 8 MB.

     **Read-Only Fields**
     - id
     - date_created
     - date_modified
     - calculated_price
     - base_variant_id

     */
    updateProduct(
        productId: ProductsV3ApiSpecs.UpdateProductData['path']['product_id'],
        requestBody: ProductsV3ApiSpecs.UpdateProductData['body'],
        query?: ProductsV3ApiSpecs.UpdateProductData['query'],
    ) {
        return this.request.put<(RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.UpdateProductResponses[200]>> | RequestSuccessResponse<201, Required<ProductsV3ApiSpecs.UpdateProductResponses[201]>> | RequestSuccessResponse<207, Required<ProductsV3ApiSpecs.UpdateProductResponses[207]>>),(RequestErrorResponse<404, Required<ProductsV3ApiSpecs.UpdateProductErrors[404]>> | RequestErrorResponse<409, Required<ProductsV3ApiSpecs.UpdateProductErrors[409]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.UpdateProductErrors[422]>>)>({
            path: `v3/catalog/products/${productId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Delete a Product
     *
     * Deletes a *Product*.
     */
    deleteProductById(
        productId: ProductsV3ApiSpecs.DeleteProductByIdData['path']['product_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.DeleteProductByIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}`,
        });
    }

    /**
     * @deprecated Use `deleteProductById` instead.
     */
    deleteProduct(...args: Parameters<ProductsV3Api['deleteProductById']>) {
        return this.deleteProductById(...args);
    }

    /**
     * Get All Product Images
     *
     * Returns a list of *Product Images*. Optional parameters can be passed in.
     */
    getProductImages(
        productId: ProductsV3ApiSpecs.GetProductImagesData['path']['product_id'],
        query?: ProductsV3ApiSpecs.GetProductImagesData['query'],
    ) {
        return this.request.get<(RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductImagesResponses[200]>> | RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.GetProductImagesResponses[204]>>),RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetProductImagesErrors[404]>>>({
            path: `v3/catalog/products/${productId}/images`,
            query,
        });
    }

    /**
     * Create a Product Image
     *
     * Creates a *Product Image*.

      **Required Fields**
     - `image_file`, or
     - `image_url`

     **Usage Notes**
     - `image_url` - `255` character limit
     - For file uploads, use the `multipart/form-data` media type.
     - You can create only one image at a time. A product can have up to 1000 images.
     - Supported image file types are BMP, GIF, JPEG, PNG, WBMP, XBM, and WEBP.
     - Each image file or image uploaded by URL can be up to 8 MB.
     */
    createProductImage(
        productId: ProductsV3ApiSpecs.CreateProductImageData['path']['product_id'],
        requestBody: ProductsV3ApiSpecs.CreateProductImageData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.CreateProductImageResponses[200]>>,(RequestErrorResponse<400, Required<ProductsV3ApiSpecs.CreateProductImageErrors[400]>> | RequestErrorResponse<404, Required<ProductsV3ApiSpecs.CreateProductImageErrors[404]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.CreateProductImageErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/images`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Product Image
     *
     * Returns a single *Product Image*. Optional parameters can be passed in.
     */
    getProductImageById(
        productId: ProductsV3ApiSpecs.GetProductImageByIdData['path']['product_id'],
        imageId: ProductsV3ApiSpecs.GetProductImageByIdData['path']['image_id'],
        query?: ProductsV3ApiSpecs.GetProductImageByIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductImageByIdResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetProductImageByIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/images/${imageId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getProductImageById` instead.
     */
    getProductImage(...args: Parameters<ProductsV3Api['getProductImageById']>) {
        return this.getProductImageById(...args);
    }

    /**
     * Update a Product Image
     *
     * Updates a *Product Image*.

     **Usage Notes**
     - `image_url` - `255` character limit
     - Each image file or image uploaded by URL can be up to 8 MB.
     - For file uploads, send a POST request using the `multipart/form-data` media type
     */
    updateProductImage(
        productId: ProductsV3ApiSpecs.UpdateProductImageData['path']['product_id'],
        imageId: ProductsV3ApiSpecs.UpdateProductImageData['path']['image_id'],
        requestBody: ProductsV3ApiSpecs.UpdateProductImageData['body'],
    ) {
        return this.request.put<(RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.UpdateProductImageResponses[200]>> | RequestSuccessResponse<201, Required<ProductsV3ApiSpecs.UpdateProductImageResponses[201]>>),(RequestErrorResponse<400, Required<ProductsV3ApiSpecs.UpdateProductImageErrors[400]>> | RequestErrorResponse<404, Required<ProductsV3ApiSpecs.UpdateProductImageErrors[404]>>)>({
            path: `v3/catalog/products/${productId}/images/${imageId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Product Image
     *
     * Deletes a *Product Image*.
     */
    deleteProductImage(
        productId: ProductsV3ApiSpecs.DeleteProductImageData['path']['product_id'],
        imageId: ProductsV3ApiSpecs.DeleteProductImageData['path']['image_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.DeleteProductImageResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/images/${imageId}`,
        });
    }

    /**
     * Get All Product Videos
     *
     * Returns a list of *Product Videos*. Optional parameters can be passed in.
     */
    getProductVideos(
        productId: ProductsV3ApiSpecs.GetProductVideosData['path']['product_id'],
        query?: ProductsV3ApiSpecs.GetProductVideosData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductVideosResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/videos`,
            query,
        });
    }

    /**
     * Create a Product Video
     *
     * Creates a *Product Video*.

     **Required Fields**
     * video_id

     **Read-Only Fields**
     * id

     Publicly accessible URLs are valid parameters.
     Videos must be loaded through YouTube at this time.
     */
    createProductVideo(
        productId: ProductsV3ApiSpecs.CreateProductVideoData['path']['product_id'],
        requestBody: ProductsV3ApiSpecs.CreateProductVideoData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.CreateProductVideoResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.CreateProductVideoErrors[404]>>>({
            path: `v3/catalog/products/${productId}/videos`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Product Video
     *
     * Returns a single *Product Video*. Optional parameters can be passed in.
     */
    getProductVideoById(
        productId: ProductsV3ApiSpecs.GetProductVideoByIdData['path']['product_id'],
        id: ProductsV3ApiSpecs.GetProductVideoByIdData['path']['id'],
        query?: ProductsV3ApiSpecs.GetProductVideoByIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductVideoByIdResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetProductVideoByIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/videos/${id}`,
            query,
        });
    }

    /**
     * @deprecated Use `getProductVideoById` instead.
     */
    getProductVideo(...args: Parameters<ProductsV3Api['getProductVideoById']>) {
        return this.getProductVideoById(...args);
    }

    /**
     * Update a Product Video
     *
     * Updates a *Product Video.

     **Required Fields**
     * none

     **Read-Only Fields**
     * id
     */
    updateProductVideo(
        productId: ProductsV3ApiSpecs.UpdateProductVideoData['path']['product_id'],
        id: ProductsV3ApiSpecs.UpdateProductVideoData['path']['id'],
        requestBody: ProductsV3ApiSpecs.UpdateProductVideoData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.UpdateProductVideoResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.UpdateProductVideoErrors[404]>>>({
            path: `v3/catalog/products/${productId}/videos/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Product Video
     *
     * Deletes a *Product Video*.
     */
    deleteProductVideo(
        productId: ProductsV3ApiSpecs.DeleteProductVideoData['path']['product_id'],
        id: ProductsV3ApiSpecs.DeleteProductVideoData['path']['id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.DeleteProductVideoResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/videos/${id}`,
        });
    }

    /**
     * Get Complex Rules
     *
     * Returns a list of all product *Complex Rules*. Optional parameters may be passed in.
     */
    getComplexRules(
        productId: ProductsV3ApiSpecs.GetComplexRulesData['path']['product_id'],
        query?: ProductsV3ApiSpecs.GetComplexRulesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetComplexRulesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/complex-rules`,
            query,
        });
    }

    /**
     * @deprecated Use `getComplexRules` instead.
     */
    getProductComplexRules(...args: Parameters<ProductsV3Api['getComplexRules']>) {
        return this.getComplexRules(...args);
    }

    /**
     * Create a Complex Rule
     *
     * Creates a product *Complex Rule*.

     **Required Fields**
     - modifier_id
     - modifier_value_id
     - variant_id

     **Read-Only Fields**
     - complex_rule_id
     - conditions_id
     - rule_id
     - combination_id
     - id
     */
    createComplexRule(
        productId: ProductsV3ApiSpecs.CreateComplexRuleData['path']['product_id'],
        requestBody: ProductsV3ApiSpecs.CreateComplexRuleData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.CreateComplexRuleResponses[200]>>,(RequestErrorResponse<409, Required<ProductsV3ApiSpecs.CreateComplexRuleErrors[409]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.CreateComplexRuleErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/complex-rules`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createComplexRule` instead.
     */
    createProductComplexRule(...args: Parameters<ProductsV3Api['createComplexRule']>) {
        return this.createComplexRule(...args);
    }

    /**
     * Get a Complex Rule
     *
     * Returns a single *Complex Rule*. Optional parameters can be passed in.
     */
    getComplexRuleById(
        productId: ProductsV3ApiSpecs.GetComplexRuleByIdData['path']['product_id'],
        complexRuleId: ProductsV3ApiSpecs.GetComplexRuleByIdData['path']['complex_rule_id'],
        query?: ProductsV3ApiSpecs.GetComplexRuleByIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetComplexRuleByIdResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetComplexRuleByIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/complex-rules/${complexRuleId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getComplexRuleById` instead.
     */
    getProductComplexRule(...args: Parameters<ProductsV3Api['getComplexRuleById']>) {
        return this.getComplexRuleById(...args);
    }

    /**
     * Update a Complex Rule
     *
     * Updates a *Complex Rule*.

     **Required Fields**:
     - none

     **Read-Only Fields**:
     - complex_rule_id
     - conditions_id
     - rule_id
     - combination_id
     - id
     */
    updateComplexRule(
        productId: ProductsV3ApiSpecs.UpdateComplexRuleData['path']['product_id'],
        complexRuleId: ProductsV3ApiSpecs.UpdateComplexRuleData['path']['complex_rule_id'],
        requestBody: ProductsV3ApiSpecs.UpdateComplexRuleData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.UpdateComplexRuleResponses[200]>>,(RequestErrorResponse<409, Required<ProductsV3ApiSpecs.UpdateComplexRuleErrors[409]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.UpdateComplexRuleErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/complex-rules/${complexRuleId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateComplexRule` instead.
     */
    updateProductComplexRule(...args: Parameters<ProductsV3Api['updateComplexRule']>) {
        return this.updateComplexRule(...args);
    }

    /**
     * Delete a Complex Rule
     *
     * Deletes a product *Complex Rule*.
     */
    deleteComplexRuleById(
        productId: ProductsV3ApiSpecs.DeleteComplexRuleByIdData['path']['product_id'],
        complexRuleId: ProductsV3ApiSpecs.DeleteComplexRuleByIdData['path']['complex_rule_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.DeleteComplexRuleByIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/complex-rules/${complexRuleId}`,
        });
    }

    /**
     * @deprecated Use `deleteComplexRuleById` instead.
     */
    deleteProductComplexRule(...args: Parameters<ProductsV3Api['deleteComplexRuleById']>) {
        return this.deleteComplexRuleById(...args);
    }

    /**
     * Get Custom Fields
     *
     * Returns a list of product *Custom Fields*. Optional parameters can be passed in.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    getCustomFields(
        productId: ProductsV3ApiSpecs.GetCustomFieldsData['path']['product_id'],
        query?: ProductsV3ApiSpecs.GetCustomFieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetCustomFieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/custom-fields`,
            query,
        });
    }

    /**
     * @deprecated Use `getCustomFields` instead.
     */
    getProductCustomFields(...args: Parameters<ProductsV3Api['getCustomFields']>) {
        return this.getCustomFields(...args);
    }

    /**
     * Create a Custom Fields
     *
     * Creates a *Custom Field*.

     **Required Fields:**
     - name
     - value

     **Read-Only:**
     - id

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests. 
     */
    createCustomField(
        productId: ProductsV3ApiSpecs.CreateCustomFieldData['path']['product_id'],
        requestBody: ProductsV3ApiSpecs.CreateCustomFieldData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.CreateCustomFieldResponses[200]>>,(RequestErrorResponse<404, Required<ProductsV3ApiSpecs.CreateCustomFieldErrors[404]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.CreateCustomFieldErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/custom-fields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createCustomField` instead.
     */
    createProductCustomField(...args: Parameters<ProductsV3Api['createCustomField']>) {
        return this.createCustomField(...args);
    }

    /**
     * Get a Custom Field
     *
     * Returns a single *Custom Field*. Optional parameters can be passed in.
     */
    getCustomFieldById(
        productId: ProductsV3ApiSpecs.GetCustomFieldByIdData['path']['product_id'],
        customFieldId: ProductsV3ApiSpecs.GetCustomFieldByIdData['path']['custom_field_id'],
        query?: ProductsV3ApiSpecs.GetCustomFieldByIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetCustomFieldByIdResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetCustomFieldByIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/custom-fields/${customFieldId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getCustomFieldById` instead.
     */
    getProductCustomField(...args: Parameters<ProductsV3Api['getCustomFieldById']>) {
        return this.getCustomFieldById(...args);
    }

    /**
     * Update a Custom Field
     *
     * Updates a *Custom Field*.

     **Required Fields**
     - none

     **Read-Only**
     - id
     */
    updateCustomField(
        productId: ProductsV3ApiSpecs.UpdateCustomFieldData['path']['product_id'],
        customFieldId: ProductsV3ApiSpecs.UpdateCustomFieldData['path']['custom_field_id'],
        requestBody: ProductsV3ApiSpecs.UpdateCustomFieldData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.UpdateCustomFieldResponses[200]>>,(RequestErrorResponse<404, Required<ProductsV3ApiSpecs.UpdateCustomFieldErrors[404]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.UpdateCustomFieldErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/custom-fields/${customFieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateCustomField` instead.
     */
    updateProductCustomField(...args: Parameters<ProductsV3Api['updateCustomField']>) {
        return this.updateCustomField(...args);
    }

    /**
     * Delete a Custom Field
     *
     * Deletes a product *Custom Field*.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    deleteCustomFieldById(
        productId: ProductsV3ApiSpecs.DeleteCustomFieldByIdData['path']['product_id'],
        customFieldId: ProductsV3ApiSpecs.DeleteCustomFieldByIdData['path']['custom_field_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.DeleteCustomFieldByIdResponses[204]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.DeleteCustomFieldByIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/custom-fields/${customFieldId}`,
        });
    }

    /**
     * @deprecated Use `deleteCustomFieldById` instead.
     */
    deleteProductCustomField(...args: Parameters<ProductsV3Api['deleteCustomFieldById']>) {
        return this.deleteCustomFieldById(...args);
    }

    /**
     * Get All Bulk Pricing Rules
     *
     * Returns a list of *Bulk Pricing Rules*. Optional parameters can be passed in.
     */
    getBulkPricingRules(
        productId: ProductsV3ApiSpecs.GetBulkPricingRulesData['path']['product_id'],
        query?: ProductsV3ApiSpecs.GetBulkPricingRulesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetBulkPricingRulesResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetBulkPricingRulesErrors[404]>>>({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules`,
            query,
        });
    }

    /**
     * @deprecated Use `getBulkPricingRules` instead.
     */
    getAllBulkPricingRules(...args: Parameters<ProductsV3Api['getBulkPricingRules']>) {
        return this.getBulkPricingRules(...args);
    }

    /**
     * Create a Bulk Pricing Rule
     *
     * Creates a *Bulk Pricing Rule*.

     **Required Fields**
     - quantity_min
     - quantity_max
     - type
     - amount

     **Read-Only Fields**
     - id

     **Limits**
     - 50 bulk pricing rule per product limit.
     */
    createBulkPricingRule(
        productId: ProductsV3ApiSpecs.CreateBulkPricingRuleData['path']['product_id'],
        requestBody: ProductsV3ApiSpecs.CreateBulkPricingRuleData['body'],
        query?: ProductsV3ApiSpecs.CreateBulkPricingRuleData['query'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.CreateBulkPricingRuleResponses[200]>>,(RequestErrorResponse<404, Required<ProductsV3ApiSpecs.CreateBulkPricingRuleErrors[404]>> | RequestErrorResponse<409, Required<ProductsV3ApiSpecs.CreateBulkPricingRuleErrors[409]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.CreateBulkPricingRuleErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Get a Bulk Pricing Rule
     *
     * Returns a single *Bulk Pricing Rule*. Optional parameters can be passed in.
     */
    getBulkPricingRuleById(
        productId: ProductsV3ApiSpecs.GetBulkPricingRuleByIdData['path']['product_id'],
        bulkPricingRuleId: ProductsV3ApiSpecs.GetBulkPricingRuleByIdData['path']['bulk_pricing_rule_id'],
        query?: ProductsV3ApiSpecs.GetBulkPricingRuleByIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetBulkPricingRuleByIdResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetBulkPricingRuleByIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules/${bulkPricingRuleId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getBulkPricingRuleById` instead.
     */
    getBulkPricingRule(...args: Parameters<ProductsV3Api['getBulkPricingRuleById']>) {
        return this.getBulkPricingRuleById(...args);
    }

    /**
     * Update a Bulk Pricing Rule
     *
     * Updates a *Bulk Pricing Rule*.

     **Required Fields**
     * none

     **Read-Only Fields**
     - id
     */
    updateBulkPricingRule(
        productId: ProductsV3ApiSpecs.UpdateBulkPricingRuleData['path']['product_id'],
        bulkPricingRuleId: ProductsV3ApiSpecs.UpdateBulkPricingRuleData['path']['bulk_pricing_rule_id'],
        requestBody: ProductsV3ApiSpecs.UpdateBulkPricingRuleData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.UpdateBulkPricingRuleResponses[200]>>,(RequestErrorResponse<404, Required<ProductsV3ApiSpecs.UpdateBulkPricingRuleErrors[404]>> | RequestErrorResponse<409, Required<ProductsV3ApiSpecs.UpdateBulkPricingRuleErrors[409]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.UpdateBulkPricingRuleErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules/${bulkPricingRuleId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Bulk Pricing Rule
     *
     * Deletes a *Bulk Pricing Rule*.
     */
    deleteBulkPricingRuleById(
        productId: ProductsV3ApiSpecs.DeleteBulkPricingRuleByIdData['path']['product_id'],
        bulkPricingRuleId: ProductsV3ApiSpecs.DeleteBulkPricingRuleByIdData['path']['bulk_pricing_rule_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.DeleteBulkPricingRuleByIdResponses[204]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.DeleteBulkPricingRuleByIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules/${bulkPricingRuleId}`,
        });
    }

    /**
     * @deprecated Use `deleteBulkPricingRuleById` instead.
     */
    deleteBulkPricingRule(...args: Parameters<ProductsV3Api['deleteBulkPricingRuleById']>) {
        return this.deleteBulkPricingRuleById(...args);
    }

    /**
     * Get All Product Metafields
     *
     * Returns a list of *Product Metafields*. Optional parameters can be passed in.
     */
    getProductMetafieldsByProductId(
        productId: ProductsV3ApiSpecs.GetProductMetafieldsByProductIdData['path']['product_id'],
        query?: ProductsV3ApiSpecs.GetProductMetafieldsByProductIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductMetafieldsByProductIdResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetProductMetafieldsByProductIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/metafields`,
            query,
        });
    }

    /**
     * @deprecated Use `getProductMetafieldsByProductId` instead.
     */
    getProductMetafields(...args: Parameters<ProductsV3Api['getProductMetafieldsByProductId']>) {
        return this.getProductMetafieldsByProductId(...args);
    }

    /**
     * Create a Product Metafield
     *
     * Creates a *Product Metafield*.

     **Required Fields:**
     * permission_set
     * namespace
     * key
     * value

     **Note:** The maxiumum number of metafields allowed on each order, product, category, variant, or brand is 250 per client ID. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
     */
    createProductMetafield(
        productId: ProductsV3ApiSpecs.CreateProductMetafieldData['path']['product_id'],
        requestBody: ProductsV3ApiSpecs.CreateProductMetafieldData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.CreateProductMetafieldResponses[200]>>,(RequestErrorResponse<409, Required<ProductsV3ApiSpecs.CreateProductMetafieldErrors[409]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.CreateProductMetafieldErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Product Metafield
     *
     * Returns a single *Product Metafield*. Optional parameters can be passed in.
     */
    getProductMetafieldByProductId(
        productId: ProductsV3ApiSpecs.GetProductMetafieldByProductIdData['path']['product_id'],
        metafieldId: ProductsV3ApiSpecs.GetProductMetafieldByProductIdData['path']['metafield_id'],
        query?: ProductsV3ApiSpecs.GetProductMetafieldByProductIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductMetafieldByProductIdResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetProductMetafieldByProductIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/metafields/${metafieldId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getProductMetafieldByProductId` instead.
     */
    getProductMetafield(...args: Parameters<ProductsV3Api['getProductMetafieldByProductId']>) {
        return this.getProductMetafieldByProductId(...args);
    }

    /**
     * Update a Product Metafield
     *
     * Updates a *Product Metafield*.

     **Required Fields**
     * none

     **Read-Only Fields**
     * id
     * These fields can only be modified using the API account that created the metafield:
     	* `namespace`
     	* `key`
     	* `permission_set`
     	* `value`

     **Usage Notes**
     * Attempting to modify the `namespace`, `key`, `permission_set`, or `value` field using an API account different from the one used to create those metafields will result in a `403` error message. 
     */
    updateProductMetafield(
        productId: ProductsV3ApiSpecs.UpdateProductMetafieldData['path']['product_id'],
        metafieldId: ProductsV3ApiSpecs.UpdateProductMetafieldData['path']['metafield_id'],
        requestBody: ProductsV3ApiSpecs.UpdateProductMetafieldData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.UpdateProductMetafieldResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.UpdateProductMetafieldErrors[404]>>>({
            path: `v3/catalog/products/${productId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Product Metafield
     *
     * Deletes a *Product Metafield*.
     */
    deleteProductMetafieldById(
        productId: ProductsV3ApiSpecs.DeleteProductMetafieldByIdData['path']['product_id'],
        metafieldId: ProductsV3ApiSpecs.DeleteProductMetafieldByIdData['path']['metafield_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.DeleteProductMetafieldByIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/metafields/${metafieldId}`,
        });
    }

    /**
     * @deprecated Use `deleteProductMetafieldById` instead.
     */
    deleteProductMetafield(...args: Parameters<ProductsV3Api['deleteProductMetafieldById']>) {
        return this.deleteProductMetafieldById(...args);
    }

    /**
     * Get Product Reviews
     *
     * Returns a list of all *Product Reviews*. Optional parameters can be passed in.
     */
    getProductReviews(
        productId: ProductsV3ApiSpecs.GetProductReviewsData['path']['product_id'],
        query?: ProductsV3ApiSpecs.GetProductReviewsData['query'],
    ) {
        return this.request.get<(RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductReviewsResponses[200]>> | RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.GetProductReviewsResponses[204]>>),RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetProductReviewsErrors[404]>>>({
            path: `v3/catalog/products/${productId}/reviews`,
            query,
        });
    }

    /**
     * Create a Product Review
     *
     * Creates a *Product Review*.

     **Required Fields**
     - title
     - date_reviewed

     **Read-Only Fields**
     * id
     */
    createProductReview(
        productId: ProductsV3ApiSpecs.CreateProductReviewData['path']['product_id'],
        requestBody: ProductsV3ApiSpecs.CreateProductReviewData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.CreateProductReviewResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.CreateProductReviewErrors[404]>>>({
            path: `v3/catalog/products/${productId}/reviews`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Product Review
     *
     * Returns a single *Product Review*. Optional parameters maybe passed in.
     */
    getProductReviewById(
        productId: ProductsV3ApiSpecs.GetProductReviewByIdData['path']['product_id'],
        reviewId: ProductsV3ApiSpecs.GetProductReviewByIdData['path']['review_id'],
        query?: ProductsV3ApiSpecs.GetProductReviewByIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductReviewByIdResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetProductReviewByIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/reviews/${reviewId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getProductReviewById` instead.
     */
    getProductReview(...args: Parameters<ProductsV3Api['getProductReviewById']>) {
        return this.getProductReviewById(...args);
    }

    /**
     * Update a Product Review
     *
     * Updates a *Product Review*.

     **Required Fields**
     * none

     **Read-Only Fields**
     * id
     */
    updateProductReview(
        productId: ProductsV3ApiSpecs.UpdateProductReviewData['path']['product_id'],
        reviewId: ProductsV3ApiSpecs.UpdateProductReviewData['path']['review_id'],
        requestBody: ProductsV3ApiSpecs.UpdateProductReviewData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.UpdateProductReviewResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.UpdateProductReviewErrors[404]>>>({
            path: `v3/catalog/products/${productId}/reviews/${reviewId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Product Review
     *
     * Deletes a *Product Review*.
     */
    deleteProductReview(
        productId: ProductsV3ApiSpecs.DeleteProductReviewData['path']['product_id'],
        reviewId: ProductsV3ApiSpecs.DeleteProductReviewData['path']['review_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.DeleteProductReviewResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/reviews/${reviewId}`,
        });
    }

    /**
     * Get Products Channel Assignments
     *
     * Returns a list of products channel assignments.
     */
    getProductsChannelAssignments(
        query?: ProductsV3ApiSpecs.GetProductsChannelAssignmentsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductsChannelAssignmentsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/catalog/products/channel-assignments',
            query,
        });
    }

    /**
     * Create Products Channel Assignments
     *
     * Creates products channel assignments.
     */
    createProductsChannelAssignments(
        requestBody: ProductsV3ApiSpecs.CreateProductsChannelAssignmentsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.CreateProductsChannelAssignmentsResponses[204]>>,RequestErrorResponse<422, Required<ProductsV3ApiSpecs.CreateProductsChannelAssignmentsErrors[422]>>>({
            path: 'v3/catalog/products/channel-assignments',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Products Channel Assignments
     *
     * Delete products channel assignments. A filter must be supplied.
     */
    deleteProductsChannelAssignments(
        query?: ProductsV3ApiSpecs.DeleteProductsChannelAssignmentsData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.DeleteProductsChannelAssignmentsResponses[204]>>,RequestErrorResponse<422, Required<ProductsV3ApiSpecs.DeleteProductsChannelAssignmentsErrors[422]>>>({
            path: 'v3/catalog/products/channel-assignments',
            query,
        });
    }

    /**
     * Get Products Category Assignments
     *
     * Returns a list of products category assignments.
     */
    getProductsCategoryAssignments(
        query?: ProductsV3ApiSpecs.GetProductsCategoryAssignmentsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductsCategoryAssignmentsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/catalog/products/category-assignments',
            query,
        });
    }

    /**
     * Create Products Category Assignments.
     *
     * Creates products category assignments.
     */
    createProductsCategoryAssignments(
        requestBody: ProductsV3ApiSpecs.CreateProductsCategoryAssignmentsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.CreateProductsCategoryAssignmentsResponses[204]>>,RequestErrorResponse<422, Required<ProductsV3ApiSpecs.CreateProductsCategoryAssignmentsErrors[422]>>>({
            path: 'v3/catalog/products/category-assignments',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Products Category Assignments
     *
     * Deletes products category assignments. A filter must be supplied.
     */
    deleteProductsCategoryAssignments(
        query?: ProductsV3ApiSpecs.DeleteProductsCategoryAssignmentsData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.DeleteProductsCategoryAssignmentsResponses[204]>>,RequestErrorResponse<422, Required<ProductsV3ApiSpecs.DeleteProductsCategoryAssignmentsErrors[422]>>>({
            path: 'v3/catalog/products/category-assignments',
            query,
        });
    }

    /**
     * Get a Catalog Summary
     *
     * Returns a lightweight inventory summary from the BigCommerce Catalog.

     The inventory summary includes:
     * "inventory_count"
     * "variant_count"
     * "inventory_value"
     * "highest_variant_price"
     * "average_variant_price"
     * "lowest_variant_price"
     * "oldest_variant_date"
     * "newest_variant_date"
     * "primary_category_id"
     * "primary_category_name"
     */
    getCatalogSummary(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetCatalogSummaryResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/catalog/summary',
        });
    }
}
