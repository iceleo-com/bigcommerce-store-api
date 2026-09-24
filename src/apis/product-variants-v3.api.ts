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
     * Get All Product Variants
     *
     * Returns a list of product *Variants*. Optional parameters can be passed in.
     */
    getVariantsByProductId(
        productId: ProductVariantsV3ApiSpecs.GetVariantsByProductIdData['path']['product_id'],
        query?: ProductVariantsV3ApiSpecs.GetVariantsByProductIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.GetVariantsByProductIdResponses[200]>>,RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.GetVariantsByProductIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/variants`,
            query,
        });
    }

    /**
     * @deprecated Use `getVariantsByProductId` instead.
     */
    getProductVariants(...args: Parameters<ProductVariantsV3Api['getVariantsByProductId']>) {
        return this.getVariantsByProductId(...args);
    }

    /**
     * Create a Product Variant
     *
     * Creates a *Product Variant*.

     **Required Fields**
     * sku
     * option_values

     **Read-Only Fields**
     * id

     **Limits**
     * 600 SKUs per product limit.
     * 255 characters SKU length limit.

     Variants need to be created one at a time using this endpoint. To use a variant array and create products and variants in the same call use the [Create Products](/docs/rest-catalog/products#create-a-product) during the initial product creation.
     */
    createVariant(
        productId: ProductVariantsV3ApiSpecs.CreateVariantData['path']['product_id'],
        requestBody: ProductVariantsV3ApiSpecs.CreateVariantData['body'],
    ) {
        return this.request.post<(RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.CreateVariantResponses[200]>> | RequestSuccessResponse<207, Required<ProductVariantsV3ApiSpecs.CreateVariantResponses[207]>>),RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.CreateVariantErrors[404]>>>({
            path: `v3/catalog/products/${productId}/variants`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createVariant` instead.
     */
    createProductVariant(...args: Parameters<ProductVariantsV3Api['createVariant']>) {
        return this.createVariant(...args);
    }

    /**
     * Get a Product Variant
     *
     * Returns a single product *Variant*. Optional parameters can be passed in.
     */
    getVariantById(
        productId: ProductVariantsV3ApiSpecs.GetVariantByIdData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.GetVariantByIdData['path']['variant_id'],
        query?: ProductVariantsV3ApiSpecs.GetVariantByIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.GetVariantByIdResponses[200]>>,RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.GetVariantByIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/variants/${variantId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getVariantById` instead.
     */
    getProductVariant(...args: Parameters<ProductVariantsV3Api['getVariantById']>) {
        return this.getVariantById(...args);
    }

    /**
     * Update a Product Variant
     *
     * Updates a product *Variant*.
     */
    updateVariant(
        productId: ProductVariantsV3ApiSpecs.UpdateVariantData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.UpdateVariantData['path']['variant_id'],
        requestBody: ProductVariantsV3ApiSpecs.UpdateVariantData['body'],
    ) {
        return this.request.put<(RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.UpdateVariantResponses[200]>> | RequestSuccessResponse<207, Required<ProductVariantsV3ApiSpecs.UpdateVariantResponses[207]>>),RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.UpdateVariantErrors[404]>>>({
            path: `v3/catalog/products/${productId}/variants/${variantId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateVariant` instead.
     */
    updateProductVariant(...args: Parameters<ProductVariantsV3Api['updateVariant']>) {
        return this.updateVariant(...args);
    }

    /**
     * Delete a Product Variant
     *
     * Deletes a product *Variant*.
     */
    deleteVariantById(
        productId: ProductVariantsV3ApiSpecs.DeleteVariantByIdData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.DeleteVariantByIdData['path']['variant_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductVariantsV3ApiSpecs.DeleteVariantByIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/variants/${variantId}`,
        });
    }

    /**
     * @deprecated Use `deleteVariantById` instead.
     */
    deleteProductVariant(...args: Parameters<ProductVariantsV3Api['deleteVariantById']>) {
        return this.deleteVariantById(...args);
    }

    /**
     * Get All Product Variant Metafields
     *
     * Returns a list of product variant *Metafields*. Optional parameters can be passed in.
     */
    getVariantMetafieldsByProductIdAndVariantId(
        productId: ProductVariantsV3ApiSpecs.GetVariantMetafieldsByProductIdAndVariantIdData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.GetVariantMetafieldsByProductIdAndVariantIdData['path']['variant_id'],
        query?: ProductVariantsV3ApiSpecs.GetVariantMetafieldsByProductIdAndVariantIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.GetVariantMetafieldsByProductIdAndVariantIdResponses[200]>>,RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.GetVariantMetafieldsByProductIdAndVariantIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields`,
            query,
        });
    }

    /**
     * @deprecated Use `getVariantMetafieldsByProductIdAndVariantId` instead.
     */
    getProductVariantMetafields(...args: Parameters<ProductVariantsV3Api['getVariantMetafieldsByProductIdAndVariantId']>) {
        return this.getVariantMetafieldsByProductIdAndVariantId(...args);
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
    createVariantMetafield(
        productId: ProductVariantsV3ApiSpecs.CreateVariantMetafieldData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.CreateVariantMetafieldData['path']['variant_id'],
        requestBody: ProductVariantsV3ApiSpecs.CreateVariantMetafieldData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.CreateVariantMetafieldResponses[200]>>,(RequestErrorResponse<409, Required<ProductVariantsV3ApiSpecs.CreateVariantMetafieldErrors[409]>> | RequestErrorResponse<422, Required<ProductVariantsV3ApiSpecs.CreateVariantMetafieldErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createVariantMetafield` instead.
     */
    createProductVariantMetafield(...args: Parameters<ProductVariantsV3Api['createVariantMetafield']>) {
        return this.createVariantMetafield(...args);
    }

    /**
     * Get a Product Variant Metafields
     *
     * Returns a single product variant *Metafield*. Optional parameters can be passed in.
     */
    getVariantMetafieldByProductIdAndVariantId(
        productId: ProductVariantsV3ApiSpecs.GetVariantMetafieldByProductIdAndVariantIdData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.GetVariantMetafieldByProductIdAndVariantIdData['path']['variant_id'],
        metafieldId: ProductVariantsV3ApiSpecs.GetVariantMetafieldByProductIdAndVariantIdData['path']['metafield_id'],
        query?: ProductVariantsV3ApiSpecs.GetVariantMetafieldByProductIdAndVariantIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.GetVariantMetafieldByProductIdAndVariantIdResponses[200]>>,RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.GetVariantMetafieldByProductIdAndVariantIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getVariantMetafieldByProductIdAndVariantId` instead.
     */
    getProductVariantMetafield(...args: Parameters<ProductVariantsV3Api['getVariantMetafieldByProductIdAndVariantId']>) {
        return this.getVariantMetafieldByProductIdAndVariantId(...args);
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
    updateVariantMetafield(
        productId: ProductVariantsV3ApiSpecs.UpdateVariantMetafieldData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.UpdateVariantMetafieldData['path']['variant_id'],
        metafieldId: ProductVariantsV3ApiSpecs.UpdateVariantMetafieldData['path']['metafield_id'],
        requestBody: ProductVariantsV3ApiSpecs.UpdateVariantMetafieldData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.UpdateVariantMetafieldResponses[200]>>,RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.UpdateVariantMetafieldErrors[404]>>>({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateVariantMetafield` instead.
     */
    updateProductVariantMetafield(...args: Parameters<ProductVariantsV3Api['updateVariantMetafield']>) {
        return this.updateVariantMetafield(...args);
    }

    /**
     * Delete a Variant Metafield
     *
     * Deletes a product variant *Metafield*.
     */
    deleteVariantMetafieldById(
        productId: ProductVariantsV3ApiSpecs.DeleteVariantMetafieldByIdData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.DeleteVariantMetafieldByIdData['path']['variant_id'],
        metafieldId: ProductVariantsV3ApiSpecs.DeleteVariantMetafieldByIdData['path']['metafield_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductVariantsV3ApiSpecs.DeleteVariantMetafieldByIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/variants/${variantId}/metafields/${metafieldId}`,
        });
    }

    /**
     * @deprecated Use `deleteVariantMetafieldById` instead.
     */
    deleteProductVariantMetafield(...args: Parameters<ProductVariantsV3Api['deleteVariantMetafieldById']>) {
        return this.deleteVariantMetafieldById(...args);
    }

    /**
     * Create a Variant Image
     *
     * Creates a *Variant Image*.

     Only one image can be explicitly associated with a Variant. If the Variant already has an associated image, overwrites the existing Variant Image.

     The image displays on the storefront when the Variant is selected.

      **Required Fields**
     - image_file: Form posts. Files larger than 1 MB are not accepted
     - image_url: Any publicly available URL
     */
    createVariantImage(
        productId: ProductVariantsV3ApiSpecs.CreateVariantImageData['path']['product_id'],
        variantId: ProductVariantsV3ApiSpecs.CreateVariantImageData['path']['variant_id'],
        requestBody: ProductVariantsV3ApiSpecs.CreateVariantImageData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductVariantsV3ApiSpecs.CreateVariantImageResponses[200]>>,(RequestErrorResponse<400, Required<ProductVariantsV3ApiSpecs.CreateVariantImageErrors[400]>> | RequestErrorResponse<404, Required<ProductVariantsV3ApiSpecs.CreateVariantImageErrors[404]>> | RequestErrorResponse<422, Required<ProductVariantsV3ApiSpecs.CreateVariantImageErrors[422]>> | RequestErrorResponse<500, Required<ProductVariantsV3ApiSpecs.CreateVariantImageErrors[500]>>)>({
            path: `v3/catalog/products/${productId}/variants/${variantId}/image`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createVariantImage` instead.
     */
    createProductVariantImage(...args: Parameters<ProductVariantsV3Api['createVariantImage']>) {
        return this.createVariantImage(...args);
    }

    /**
     * Get All Variants
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
     * id (variant id)

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
}
