import RequestService from '../helpers/request/request-service';
import * as ProductVariantOptionsV3ApiSpecs from '../generated/product-variant-options-v3';

export default class ProductVariantOptionsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Product Variant Options
     *
     * Returns a list of product *Variant Options*. Optional parameters can be passed in. 
     */
    getProductVariantOptions(
        productId: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionsData['path']['product_id'],
        query?: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionsData['query'],
    ) {
        return this.request.get<ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionsResponse, ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionsError>({
            path: `v3/catalog/products/${productId}/options`,
            query,
        });
    }

    /**
     * Create a Product Variant Option
     *
     * Creates a *Variant Option*.

     **Required Fields**
     * display_name
     * type
     * option_values

     **Read-Only Fields**
     * id

     **Limits**
     * 255 characters option name length.

     **Notes**

     * Only one variant option at a time can be created; individual variant options will contain an array of multiple values.
     * There are several examples listed below that create options, but the SKUs are not updated and they are not a variant on the product. Variant SKUs must be created with a separate request.
     * Variant options will show on the storefront as an option that can be selected by the customer. A request like this could be used to add new choices to a variant that has already been created.
     * If more than one variant needs to be created, use the [Create a Product](/docs/rest-catalog/products#create-a-product) endpoint.
     */
    createProductVariantOption(
        productId: ProductVariantOptionsV3ApiSpecs.CreateProductVariantOptionData['path']['product_id'],
        requestBody: ProductVariantOptionsV3ApiSpecs.CreateProductVariantOptionData['body'],
    ) {
        return this.request.post<ProductVariantOptionsV3ApiSpecs.CreateProductVariantOptionResponse, ProductVariantOptionsV3ApiSpecs.CreateProductVariantOptionError>({
            path: `v3/catalog/products/${productId}/options`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Product Variant Option
     *
     * Returns a single *Variant Option*. Optional parameters can be passed in.
     */
    getProductVariantOption(
        productId: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionData['path']['product_id'],
        optionId: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionData['path']['option_id'],
        query?: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionData['query'],
    ) {
        return this.request.get<ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionResponse, ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionError>({
            path: `v3/catalog/products/${productId}/options/${optionId}`,
            query,
        });
    }

    /**
     * Update a Product Variant Option
     *
     * Updates a *Variant Option*.

     **Read-Only Fields**
     * id
     */
    updateProductVariantOption(
        productId: ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionData['path']['product_id'],
        optionId: ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionData['path']['option_id'],
        requestBody: ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionData['body'],
    ) {
        return this.request.put<ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionResponse, ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionError>({
            path: `v3/catalog/products/${productId}/options/${optionId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Product Variant Option
     *
     * Deletes a *Variant Option*.
     */
    deleteProductVariantOption(
        productId: ProductVariantOptionsV3ApiSpecs.DeleteProductVariantOptionData['path']['product_id'],
        optionId: ProductVariantOptionsV3ApiSpecs.DeleteProductVariantOptionData['path']['option_id'],
    ) {
        return this.request.delete<any, any>({
            path: `v3/catalog/products/${productId}/options/${optionId}`,
        });
    }

    /**
     * Get All Product Variant Option Values
     *
     * Returns a list of all *Variant Option Values*. Optional parameters can be passed in.
     */
    getProductVariantOptionValues(
        productId: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValuesData['path']['product_id'],
        optionId: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValuesData['path']['option_id'],
        query?: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValuesData['query'],
    ) {
        return this.request.get<ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValuesResponse, any>({
            path: `v3/catalog/products/${productId}/options/${optionId}/values`,
            query,
        });
    }

    /**
     * Create a Product Variant Option Value
     *
     * Creates a *Variant Option Value*.

     **Required Fields**
     * label
     * sort_order

     **Read-Only Fields**
     * id

     **Limits**
     * 250 option values per option limit.
     */
    createProductVariantOptionValue(
        productId: ProductVariantOptionsV3ApiSpecs.CreateProductVariantOptionValueData['path']['product_id'],
        optionId: ProductVariantOptionsV3ApiSpecs.CreateProductVariantOptionValueData['path']['option_id'],
        requestBody: ProductVariantOptionsV3ApiSpecs.CreateProductVariantOptionValueData['body'],
    ) {
        return this.request.post<ProductVariantOptionsV3ApiSpecs.CreateProductVariantOptionValueResponse, ProductVariantOptionsV3ApiSpecs.CreateProductVariantOptionValueError>({
            path: `v3/catalog/products/${productId}/options/${optionId}/values`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Product Variant Option Value
     *
     * Returns a single *Variant Option Value*. Optional parameters can be passed in.
     */
    getProductVariantOptionValue(
        productId: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValueData['path']['product_id'],
        optionId: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValueData['path']['option_id'],
        valueId: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValueData['path']['value_id'],
        query?: ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValueData['query'],
    ) {
        return this.request.get<ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValueResponse, ProductVariantOptionsV3ApiSpecs.GetProductVariantOptionValueError>({
            path: `v3/catalog/products/${productId}/options/${optionId}/values/${valueId}`,
            query,
        });
    }

    /**
     * Update a Product Variant Option Value
     *
     * Updates a *Variant Option Value*.

     **Read-Only Fields**
     * id
     */
    updateProductVariantOptionValue(
        productId: ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionValueData['path']['product_id'],
        optionId: ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionValueData['path']['option_id'],
        valueId: ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionValueData['path']['value_id'],
        requestBody: ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionValueData['body'],
    ) {
        return this.request.put<ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionValueResponse, ProductVariantOptionsV3ApiSpecs.UpdateProductVariantOptionValueError>({
            path: `v3/catalog/products/${productId}/options/${optionId}/values/${valueId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Product Variant Option Value
     *
     * Deletes a *Variant Option Value*.
     */
    deleteProductVariantOptionValue(
        productId: ProductVariantOptionsV3ApiSpecs.DeleteProductVariantOptionValueData['path']['product_id'],
        optionId: ProductVariantOptionsV3ApiSpecs.DeleteProductVariantOptionValueData['path']['option_id'],
        valueId: ProductVariantOptionsV3ApiSpecs.DeleteProductVariantOptionValueData['path']['value_id'],
    ) {
        return this.request.delete<any, any>({
            path: `v3/catalog/products/${productId}/options/${optionId}/values/${valueId}`,
        });
    }
}
