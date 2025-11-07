import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ProductVariantsV3ApiSpecs from '../generated/product-variants-v3';
export * as ProductVariantsV3ApiSpecs from '../generated/product-variants-v3';

export class ProductVariantsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get all product variants
     *
     * Returns a list of product variants. Optional parameters can be passed in.
     */
    getProductVariants(
        productId: ProductVariantsV3ApiSpecs.GetProductVariantsData['path']['product_id'],
        query?: ProductVariantsV3ApiSpecs.GetProductVariantsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.GetProductVariantsResponses[200]>>,RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.GetProductVariantsErrors[404]>>>({
            path: `v3/catalog/products/${productId}/variants`,
            query,
        });
    }

    /**
     * Create a product variant
     *
     * Creates a product variant.

     **Required Fields**
     * sku
     * option_values

     **Read-Only Fields**
     * id

     **Limits**
     * 600 SKUs per product limit.
     * 255 characters SKU length limit.

     Variants need to be created one at a time using this endpoint. To use a variant array, create products, and variants in the same call use the [Create Products](/docs/rest-catalog/products#create-a-product) endpoint during the initial product creation. To obtain the `option_values` to include in this request, use the [Create a product variant option](/docs/rest-catalog/product-variant-options#create-a-product-variant-option) endpoint.
     */
    createProductVariant(
        productId: ProductVariantsV3ApiSpecs.CreateProductVariantData['path']['product_id'],
        requestBody: ProductVariantsV3ApiSpecs.CreateProductVariantData['body'],
    ) {
        return this.request.post<(RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.CreateProductVariantResponses[200]>> | RequestSuccessResponse<207, Required<ProductVariantsV3ApiSpecs.CreateProductVariantResponses[207]>>),RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.CreateProductVariantErrors[404]>>>({
            path: `v3/catalog/products/${productId}/variants`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a product variant
     *
     * Returns a single product variant. Optional parameters can be passed in.
     */
    getProductVariant(
        productId: ProductVariantsV3ApiSpecs.GetProductVariantData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.GetProductVariantData['path']['variant_id'],
        query?: ProductVariantsV3ApiSpecs.GetProductVariantData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.GetProductVariantResponses[200]>>,RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.GetProductVariantErrors[404]>>>({
            path: `v3/catalog/products/${productId}/variants/${variantId}`,
            query,
        });
    }

    /**
     * Update a product variant
     *
     * Updates a product variant.
     */
    updateProductVariant(
        productId: ProductVariantsV3ApiSpecs.UpdateProductVariantData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.UpdateProductVariantData['path']['variant_id'],
        requestBody: ProductVariantsV3ApiSpecs.UpdateProductVariantData['body'],
    ) {
        return this.request.put<(RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.UpdateProductVariantResponses[200]>> | RequestSuccessResponse<207, Required<ProductVariantsV3ApiSpecs.UpdateProductVariantResponses[207]>>),RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.UpdateProductVariantErrors[404]>>>({
            path: `v3/catalog/products/${productId}/variants/${variantId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a product variant
     *
     * Deletes a product variant.
     */
    deleteProductVariant(
        productId: ProductVariantsV3ApiSpecs.DeleteProductVariantData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.DeleteProductVariantData['path']['variant_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductVariantsV3ApiSpecs.DeleteProductVariantResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/variants/${variantId}`,
        });
    }

    /**
     * Get Product Variant Metafields
     *
     * Returns a list of product variant *Metafields*. Optional parameters can be passed in.
     */
    getProductVariantMetafields(
        productId: ProductVariantsV3ApiSpecs.GetProductVariantMetafieldsData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.GetProductVariantMetafieldsData['path']['variant_id'],
        query?: ProductVariantsV3ApiSpecs.GetProductVariantMetafieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.GetProductVariantMetafieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields`,
            query,
        });
    }

    /**
     * Create a Product Variant Metafield
     *
     * Creates a product variant *Metafield*.

     **Required Fields:**
     * permission_set
     * namespace
     * key
     * value

     **Read-Only Fields**
     * id

     **Note:** The maxiumum number of metafields allowed on each order, product, category, variant, or brand is 250 per client ID. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
     */
    createProductVariantMetafield(
        productId: ProductVariantsV3ApiSpecs.CreateProductVariantMetafieldData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.CreateProductVariantMetafieldData['path']['variant_id'],
        requestBody: ProductVariantsV3ApiSpecs.CreateProductVariantMetafieldData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.CreateProductVariantMetafieldResponses[200]>>,(RequestErrorResponse<400, Required<ProductVariantsV3ApiSpecs.CreateProductVariantMetafieldErrors[400]>> | RequestErrorResponse<409, Required<ProductVariantsV3ApiSpecs.CreateProductVariantMetafieldErrors[409]>> | RequestErrorResponse<422, Required<ProductVariantsV3ApiSpecs.CreateProductVariantMetafieldErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Product Variant Metafields
     *
     * Returns a single product variant *Metafield*. Optional parameters can be passed in.
     */
    getProductVariantMetafield(
        productId: ProductVariantsV3ApiSpecs.GetProductVariantMetafieldData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.GetProductVariantMetafieldData['path']['variant_id'],
        metafieldId: ProductVariantsV3ApiSpecs.GetProductVariantMetafieldData['path']['metafield_id'],
        query?: ProductVariantsV3ApiSpecs.GetProductVariantMetafieldData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.GetProductVariantMetafieldResponses[200]>>,RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.GetProductVariantMetafieldErrors[404]>>>({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`,
            query,
        });
    }

    /**
     * Update Product Variant Metafields
     *
     * Updates a product variant *Metafield*.

     **Required Fields:**
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
    updateProductVariantMetafield(
        productId: ProductVariantsV3ApiSpecs.UpdateProductVariantMetafieldData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.UpdateProductVariantMetafieldData['path']['variant_id'],
        metafieldId: ProductVariantsV3ApiSpecs.UpdateProductVariantMetafieldData['path']['metafield_id'],
        requestBody: ProductVariantsV3ApiSpecs.UpdateProductVariantMetafieldData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.UpdateProductVariantMetafieldResponses[200]>>,(RequestErrorResponse<400, Required<ProductVariantsV3ApiSpecs.UpdateProductVariantMetafieldErrors[400]>> | RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.UpdateProductVariantMetafieldErrors[404]>>)>({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Product Variant Metafield
     *
     * Deletes a product variant *Metafield*.
     */
    deleteProductVariantMetafield(
        productId: ProductVariantsV3ApiSpecs.DeleteProductVariantMetafieldData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.DeleteProductVariantMetafieldData['path']['variant_id'],
        metafieldId: ProductVariantsV3ApiSpecs.DeleteProductVariantMetafieldData['path']['metafield_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductVariantsV3ApiSpecs.DeleteProductVariantMetafieldResponses[204]>>,RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.DeleteProductVariantMetafieldErrors[404]>>>({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`,
        });
    }

    /**
     * Create a Product Variant Image
     *
     * Creates a *Variant Image*.

     Only one image can be explicitly associated with a Variant. If the Variant already has an associated image, overwrites the existing Variant Image.

     The image displays on the storefront when the Variant is selected.

      **Required Fields**
     - image_file: Form posts. Files larger than 1 MB are not accepted
     - image_url: Any publicly available URL
     */
    createProductVariantImage(
        productId: ProductVariantsV3ApiSpecs.CreateProductVariantImageData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.CreateProductVariantImageData['path']['variant_id'],
        requestBody: ProductVariantsV3ApiSpecs.CreateProductVariantImageData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.CreateProductVariantImageResponses[200]>>,(RequestErrorResponse<400, Required<ProductVariantsV3ApiSpecs.CreateProductVariantImageErrors[400]>> | RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.CreateProductVariantImageErrors[404]>> | RequestErrorResponse<422, Required<ProductVariantsV3ApiSpecs.CreateProductVariantImageErrors[422]>> | RequestErrorResponse<500, Required<ProductVariantsV3ApiSpecs.CreateProductVariantImageErrors[500]>>)>({
            path: `v3/catalog/products/${productId}/variants/${variantId}/image`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get all variants
     *
     * Returns a list of all variants in your catalog. Optional parameters can be passed in.
     */
    getVariants(
        query?: ProductVariantsV3ApiSpecs.GetVariantsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.GetVariantsResponses[200]>>,RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.GetVariantsErrors[404]>>>({
            path: 'v3/catalog/variants',
            query,
        });
    }

    /**
     * Update Variants (Batch)
     *
     * Updates a batch of `variant` objects. Currently the limit is 50 variants however this is subject to change.

     **Required Fields**

     To update an existing variant:
     * id (variant ID)

     To create a new variant:
     * product_id
     * sku
     * option_values
       - id (option_value ID - Example: 146)
       - option_id (Option ID - Example: 151)
     */
    updateVariantsBatch(
        requestBody: ProductVariantsV3ApiSpecs.UpdateVariantsBatchData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.UpdateVariantsBatchResponses[200]>>,(RequestErrorResponse<413, Required<ProductVariantsV3ApiSpecs.UpdateVariantsBatchErrors[413]>> | RequestErrorResponse<422, Required<ProductVariantsV3ApiSpecs.UpdateVariantsBatchErrors[422]>>)>({
            path: 'v3/catalog/variants',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get all product variant metafields
     *
     * Get all variant metafields.
     */
    getVariantsMetafields(
        query?: ProductVariantsV3ApiSpecs.GetVariantsMetafieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.GetVariantsMetafieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/catalog/variants/metafields',
            query,
        });
    }

    /**
     * Create multiple Metafields
     *
     * Create multiple metafields.
     */
    createVariantsMetafields(
        requestBody: ProductVariantsV3ApiSpecs.CreateVariantsMetafieldsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.CreateVariantsMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<ProductVariantsV3ApiSpecs.CreateVariantsMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<ProductVariantsV3ApiSpecs.CreateVariantsMetafieldsErrors[422]>>)>({
            path: 'v3/catalog/variants/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update multiple Metafields
     *
     * Create multiple metafields.
     */
    updateVariantsMetafields(
        requestBody: ProductVariantsV3ApiSpecs.UpdateVariantsMetafieldsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.UpdateVariantsMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<ProductVariantsV3ApiSpecs.UpdateVariantsMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<ProductVariantsV3ApiSpecs.UpdateVariantsMetafieldsErrors[422]>>)>({
            path: 'v3/catalog/variants/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete multiple Metafields
     *
     * Delete all variant metafields.
     */
    deleteVariantsMetafields(
        requestBody: ProductVariantsV3ApiSpecs.DeleteVariantsMetafieldsData['body'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.DeleteVariantsMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<ProductVariantsV3ApiSpecs.DeleteVariantsMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<ProductVariantsV3ApiSpecs.DeleteVariantsMetafieldsErrors[422]>>)>({
            path: 'v3/catalog/variants/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
