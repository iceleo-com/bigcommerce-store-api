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
     * Creates a *Product*. Only one product can be created at a time; however, you can create multiple product variants using the `variants` array.

     **Required Fields:**
     - `name`
     - `type`
     - `weight`
     - `price`
     - `categories` (required when you enable the V2 product experience in the control panel)

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
     * You can create multiple product variants using the `variants` array.
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
     To delete products with IDs 1,2 and 3, use `DELETE /v3/catalog/products?id:in=1,2,3`.
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
    getProduct(
        productId: ProductsV3ApiSpecs.GetProductData['path']['product_id'],
        query?: ProductsV3ApiSpecs.GetProductData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetProductErrors[404]>>>({
            path: `v3/catalog/products/${productId}`,
            query,
        });
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
    deleteProduct(
        productId: ProductsV3ApiSpecs.DeleteProductData['path']['product_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.DeleteProductResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}`,
        });
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
     - `Content-Type` - For `image_file`, use the `multipart/form-data` media type. For `image_url`, use the `application/json` type. See [Adding product images](/docs/store-operations/catalog#adding-product-images) for more information.
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
    getProductImage(
        productId: ProductsV3ApiSpecs.GetProductImageData['path']['product_id'],
        imageId: ProductsV3ApiSpecs.GetProductImageData['path']['image_id'],
        query?: ProductsV3ApiSpecs.GetProductImageData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductImageResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetProductImageErrors[404]>>>({
            path: `v3/catalog/products/${productId}/images/${imageId}`,
            query,
        });
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
        return this.request.put<(RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.UpdateProductImageResponses[200]>> | RequestSuccessResponse<201, Required<ProductsV3ApiSpecs.UpdateProductImageResponses[201]>>),(RequestErrorResponse<400, Required<ProductsV3ApiSpecs.UpdateProductImageErrors[400]>> | RequestErrorResponse<404, Required<ProductsV3ApiSpecs.UpdateProductImageErrors[404]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.UpdateProductImageErrors[422]>>)>({
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

     The Catalog API integrates with third-party YouTube, and you must load videos through YouTube.
     The [YouTube Terms of Service](https://www.youtube.com/t/terms) and [Google Privacy Policy](https://policies.google.com/privacy) apply, as indicated in our [Privacy Policy](https://www.bigcommerce.com/privacy/) and [Terms of Service](https://www.bigcommerce.com/terms/).
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
    getProductVideo(
        productId: ProductsV3ApiSpecs.GetProductVideoData['path']['product_id'],
        id: ProductsV3ApiSpecs.GetProductVideoData['path']['id'],
        query?: ProductsV3ApiSpecs.GetProductVideoData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductVideoResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetProductVideoErrors[404]>>>({
            path: `v3/catalog/products/${productId}/videos/${id}`,
            query,
        });
    }

    /**
     * Update a Product Video
     *
     * Updates a *Product Video.

     **Required Fields**
     * none

     **Read-Only Fields**
     * id

     The Catalog API integrates with third-party YouTube, and you must load videos through YouTube.
     The [YouTube Terms of Service](https://www.youtube.com/t/terms) and [Google Privacy Policy](https://policies.google.com/privacy) apply, as indicated in our [Privacy Policy](https://www.bigcommerce.com/privacy/) and [Terms of Service](https://www.bigcommerce.com/terms/).
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
    getProductComplexRules(
        productId: ProductsV3ApiSpecs.GetProductComplexRulesData['path']['product_id'],
        query?: ProductsV3ApiSpecs.GetProductComplexRulesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductComplexRulesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/complex-rules`,
            query,
        });
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
    createProductComplexRule(
        productId: ProductsV3ApiSpecs.CreateProductComplexRuleData['path']['product_id'],
        requestBody: ProductsV3ApiSpecs.CreateProductComplexRuleData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.CreateProductComplexRuleResponses[200]>>,(RequestErrorResponse<409, Required<ProductsV3ApiSpecs.CreateProductComplexRuleErrors[409]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.CreateProductComplexRuleErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/complex-rules`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Product Complex Rule
     *
     * Returns a single *Complex Rule*. Optional parameters can be passed in.
     */
    getProductComplexRule(
        productId: ProductsV3ApiSpecs.GetProductComplexRuleData['path']['product_id'],
        complexRuleId: ProductsV3ApiSpecs.GetProductComplexRuleData['path']['complex_rule_id'],
        query?: ProductsV3ApiSpecs.GetProductComplexRuleData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductComplexRuleResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetProductComplexRuleErrors[404]>>>({
            path: `v3/catalog/products/${productId}/complex-rules/${complexRuleId}`,
            query,
        });
    }

    /**
     * Update a Product Complex Rule
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
    updateProductComplexRule(
        productId: ProductsV3ApiSpecs.UpdateProductComplexRuleData['path']['product_id'],
        complexRuleId: ProductsV3ApiSpecs.UpdateProductComplexRuleData['path']['complex_rule_id'],
        requestBody: ProductsV3ApiSpecs.UpdateProductComplexRuleData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.UpdateProductComplexRuleResponses[200]>>,(RequestErrorResponse<409, Required<ProductsV3ApiSpecs.UpdateProductComplexRuleErrors[409]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.UpdateProductComplexRuleErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/complex-rules/${complexRuleId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Product Complex Rule
     *
     * Deletes a product *Complex Rule*.
     */
    deleteProductComplexRule(
        productId: ProductsV3ApiSpecs.DeleteProductComplexRuleData['path']['product_id'],
        complexRuleId: ProductsV3ApiSpecs.DeleteProductComplexRuleData['path']['complex_rule_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.DeleteProductComplexRuleResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/complex-rules/${complexRuleId}`,
        });
    }

    /**
     * Get Product Custom Fields
     *
     * Returns a list of product *Custom Fields*. You can pass in optional parameters.
     */
    getProductCustomFields(
        productId: ProductsV3ApiSpecs.GetProductCustomFieldsData['path']['product_id'],
        query?: ProductsV3ApiSpecs.GetProductCustomFieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductCustomFieldsResponses[200]>>,(RequestErrorResponse<401, Required<ProductsV3ApiSpecs.GetProductCustomFieldsErrors[401]>> | RequestErrorResponse<403, Required<ProductsV3ApiSpecs.GetProductCustomFieldsErrors[403]>> | RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetProductCustomFieldsErrors[404]>> | RequestErrorResponse<405, Required<ProductsV3ApiSpecs.GetProductCustomFieldsErrors[405]>>)>({
            path: `v3/catalog/products/${productId}/custom-fields`,
            query,
        });
    }

    /**
     * Create a Product Custom Field
     *
     * Creates a *Custom Field*.

     **Required Fields:**
     - name
     - value

     **Name-Value Pair Uniqueness**
     - Every name-value pair must be unique inside a product.

     **Read-Only:**
     - id

     **Limits**
     - 200 custom fields per product limit.
     - 250 characters per custom field limit.
     */
    createProductCustomField(
        productId: ProductsV3ApiSpecs.CreateProductCustomFieldData['path']['product_id'],
        requestBody: ProductsV3ApiSpecs.CreateProductCustomFieldData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.CreateProductCustomFieldResponses[200]>>,(RequestErrorResponse<401, Required<ProductsV3ApiSpecs.CreateProductCustomFieldErrors[401]>> | RequestErrorResponse<403, Required<ProductsV3ApiSpecs.CreateProductCustomFieldErrors[403]>> | RequestErrorResponse<404, Required<ProductsV3ApiSpecs.CreateProductCustomFieldErrors[404]>> | RequestErrorResponse<405, Required<ProductsV3ApiSpecs.CreateProductCustomFieldErrors[405]>> | RequestErrorResponse<415, Required<ProductsV3ApiSpecs.CreateProductCustomFieldErrors[415]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.CreateProductCustomFieldErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/custom-fields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Product Custom Field
     *
     * Returns a *Custom Field*.

     */
    getProductCustomField(
        productId: ProductsV3ApiSpecs.GetProductCustomFieldData['path']['product_id'],
        customFieldId: ProductsV3ApiSpecs.GetProductCustomFieldData['path']['custom_field_id'],
        query?: ProductsV3ApiSpecs.GetProductCustomFieldData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductCustomFieldResponses[200]>>,(RequestErrorResponse<401, Required<ProductsV3ApiSpecs.GetProductCustomFieldErrors[401]>> | RequestErrorResponse<403, Required<ProductsV3ApiSpecs.GetProductCustomFieldErrors[403]>> | RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetProductCustomFieldErrors[404]>> | RequestErrorResponse<405, Required<ProductsV3ApiSpecs.GetProductCustomFieldErrors[405]>>)>({
            path: `v3/catalog/products/${productId}/custom-fields/${customFieldId}`,
            query,
        });
    }

    /**
     * Update a Product Custom Field
     *
     * Updates a *Custom Field*.

     **Required Fields**
     - none

     **Name-Value Pair Uniqueness**
     - Every name-value pair must be unique inside a product.

     **Read-Only**
     - id

      **Limits**
     - 200 custom fields per product limit.
     - 250 characters per custom field limit.
     */
    updateProductCustomField(
        productId: ProductsV3ApiSpecs.UpdateProductCustomFieldData['path']['product_id'],
        customFieldId: ProductsV3ApiSpecs.UpdateProductCustomFieldData['path']['custom_field_id'],
        requestBody: ProductsV3ApiSpecs.UpdateProductCustomFieldData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.UpdateProductCustomFieldResponses[200]>>,(RequestErrorResponse<401, Required<ProductsV3ApiSpecs.UpdateProductCustomFieldErrors[401]>> | RequestErrorResponse<403, Required<ProductsV3ApiSpecs.UpdateProductCustomFieldErrors[403]>> | RequestErrorResponse<404, Required<ProductsV3ApiSpecs.UpdateProductCustomFieldErrors[404]>> | RequestErrorResponse<405, Required<ProductsV3ApiSpecs.UpdateProductCustomFieldErrors[405]>> | RequestErrorResponse<415, Required<ProductsV3ApiSpecs.UpdateProductCustomFieldErrors[415]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.UpdateProductCustomFieldErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/custom-fields/${customFieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Product Custom Field
     *
     * Deletes a product *Custom Field*.
     */
    deleteProductCustomField(
        productId: ProductsV3ApiSpecs.DeleteProductCustomFieldData['path']['product_id'],
        customFieldId: ProductsV3ApiSpecs.DeleteProductCustomFieldData['path']['custom_field_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.DeleteProductCustomFieldResponses[204]>>,(RequestErrorResponse<401, Required<ProductsV3ApiSpecs.DeleteProductCustomFieldErrors[401]>> | RequestErrorResponse<403, Required<ProductsV3ApiSpecs.DeleteProductCustomFieldErrors[403]>> | RequestErrorResponse<404, Required<ProductsV3ApiSpecs.DeleteProductCustomFieldErrors[404]>> | RequestErrorResponse<405, Required<ProductsV3ApiSpecs.DeleteProductCustomFieldErrors[405]>>)>({
            path: `v3/catalog/products/${productId}/custom-fields/${customFieldId}`,
        });
    }

    /**
     * Get all Bulk Pricing Rules
     *
     * Returns all *Bulk Pricing Rules*. Optional parameters can be passed in.
     */
    getAllBulkPricingRules(
        productId: ProductsV3ApiSpecs.GetAllBulkPricingRulesData['path']['product_id'],
        query?: ProductsV3ApiSpecs.GetAllBulkPricingRulesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetAllBulkPricingRulesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules`,
            query,
        });
    }

    /**
     * Create a Bulk Pricing Rule
     *
     * Creates a *Bulk Pricing Rule*.
     */
    createBulkPricingRule(
        productId: ProductsV3ApiSpecs.CreateBulkPricingRuleData['path']['product_id'],
        requestBody: ProductsV3ApiSpecs.CreateBulkPricingRuleData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.CreateBulkPricingRuleResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Bulk Pricing Rule
     *
     * Returns a single *Bulk Pricing Rule*. Optional parameters can be passed in.
     */
    getBulkPricingRule(
        productId: ProductsV3ApiSpecs.GetBulkPricingRuleData['path']['product_id'],
        bulkPricingRuleId: ProductsV3ApiSpecs.GetBulkPricingRuleData['path']['bulk_pricing_rule_id'],
        query?: ProductsV3ApiSpecs.GetBulkPricingRuleData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetBulkPricingRuleResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetBulkPricingRuleErrors[404]>>>({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules/${bulkPricingRuleId}`,
            query,
        });
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
    deleteBulkPricingRule(
        productId: ProductsV3ApiSpecs.DeleteBulkPricingRuleData['path']['product_id'],
        bulkPricingRuleId: ProductsV3ApiSpecs.DeleteBulkPricingRuleData['path']['bulk_pricing_rule_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.DeleteBulkPricingRuleResponses[204]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.DeleteBulkPricingRuleErrors[404]>>>({
            path: `v3/catalog/products/${productId}/bulk-pricing-rules/${bulkPricingRuleId}`,
        });
    }

    /**
     * Get Product Metafields
     *
     * Returns a list of *Product Metafields*. Optional parameters can be passed in.
     */
    getProductMetafields(
        productId: ProductsV3ApiSpecs.GetProductMetafieldsData['path']['product_id'],
        query?: ProductsV3ApiSpecs.GetProductMetafieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductMetafieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/metafields`,
            query,
        });
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
        return this.request.post<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.CreateProductMetafieldResponses[200]>>,(RequestErrorResponse<400, Required<ProductsV3ApiSpecs.CreateProductMetafieldErrors[400]>> | RequestErrorResponse<409, Required<ProductsV3ApiSpecs.CreateProductMetafieldErrors[409]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.CreateProductMetafieldErrors[422]>>)>({
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
    getProductMetafield(
        productId: ProductsV3ApiSpecs.GetProductMetafieldData['path']['product_id'],
        metafieldId: ProductsV3ApiSpecs.GetProductMetafieldData['path']['metafield_id'],
        query?: ProductsV3ApiSpecs.GetProductMetafieldData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductMetafieldResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetProductMetafieldErrors[404]>>>({
            path: `v3/catalog/products/${productId}/metafields/${metafieldId}`,
            query,
        });
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
        return this.request.put<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.UpdateProductMetafieldResponses[200]>>,(RequestErrorResponse<400, Required<ProductsV3ApiSpecs.UpdateProductMetafieldErrors[400]>> | RequestErrorResponse<404, Required<ProductsV3ApiSpecs.UpdateProductMetafieldErrors[404]>>)>({
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
    deleteProductMetafield(
        productId: ProductsV3ApiSpecs.DeleteProductMetafieldData['path']['product_id'],
        metafieldId: ProductsV3ApiSpecs.DeleteProductMetafieldData['path']['metafield_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductsV3ApiSpecs.DeleteProductMetafieldResponses[204]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.DeleteProductMetafieldErrors[404]>>>({
            path: `v3/catalog/products/${productId}/metafields/${metafieldId}`,
        });
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
    getProductReview(
        productId: ProductsV3ApiSpecs.GetProductReviewData['path']['product_id'],
        reviewId: ProductsV3ApiSpecs.GetProductReviewData['path']['review_id'],
        query?: ProductsV3ApiSpecs.GetProductReviewData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductReviewResponses[200]>>,RequestErrorResponse<404, Required<ProductsV3ApiSpecs.GetProductReviewErrors[404]>>>({
            path: `v3/catalog/products/${productId}/reviews/${reviewId}`,
            query,
        });
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

     Notes:
      * Avoid parallel assignment requests if possible.
      * Do not make parallel assignment requests with the same product IDs.

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
     * Create Products Category Assignments
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

    /**
     * Get All Product Metafields
     *
     * Get all product metafields.
     */
    getProductsMetafields(
        query?: ProductsV3ApiSpecs.GetProductsMetafieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.GetProductsMetafieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/catalog/products/metafields',
            query,
        });
    }

    /**
     * Create multiple Metafields
     *
     * Create multiple metafields.
     */
    createProductsMetafields(
        requestBody: ProductsV3ApiSpecs.CreateProductsMetafieldsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.CreateProductsMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<ProductsV3ApiSpecs.CreateProductsMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.CreateProductsMetafieldsErrors[422]>>)>({
            path: 'v3/catalog/products/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update multiple Metafields
     *
     * Update multiple metafields.
     */
    updateProductsMetafields(
        requestBody: ProductsV3ApiSpecs.UpdateProductsMetafieldsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.UpdateProductsMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<ProductsV3ApiSpecs.UpdateProductsMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.UpdateProductsMetafieldsErrors[422]>>)>({
            path: 'v3/catalog/products/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Multiple Metafields
     *
     * Delete all product metafields.
     */
    deleteProductsMetafields(
        requestBody: ProductsV3ApiSpecs.DeleteProductsMetafieldsData['body'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<ProductsV3ApiSpecs.DeleteProductsMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<ProductsV3ApiSpecs.DeleteProductsMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<ProductsV3ApiSpecs.DeleteProductsMetafieldsErrors[422]>>)>({
            path: 'v3/catalog/products/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
