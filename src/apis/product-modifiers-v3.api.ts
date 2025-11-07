import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ProductModifiersV3ApiSpecs from '../generated/product-modifiers-v3';
export * as ProductModifiersV3ApiSpecs from '../generated/product-modifiers-v3';

export class ProductModifiersV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get all product modifiers
     *
     * Returns a list of all product modifiers. Optional parameters can be passed in.
     */
    getProductModifiers(
        productId: ProductModifiersV3ApiSpecs.GetProductModifiersData['path']['product_id'],
        query?: ProductModifiersV3ApiSpecs.GetProductModifiersData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.GetProductModifiersResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/modifiers`,
            query,
        });
    }

    /**
     * Create a product modifier
     *
     * Creates a product modifier.

     **Required Fields**
     * `required`
     * `display_name`
     * `type`

     **Read-Only Fields**
     * `id`

     **Notes**
     It takes two separate requests to create a new checkbox modifier with option values. Perform a request to create a modifier, then perform a second request to update option values.

     Date modifiers are required to be provided in [ISO-8601 ATOM](https://www.php.net/manual/en/class.datetimeinterface.php#datetimeinterface.constants.atom) format. Excluding them in a request will throw a server error.
     */
    createProductModifier(
        productId: ProductModifiersV3ApiSpecs.CreateProductModifierData['path']['product_id'],
        requestBody: ProductModifiersV3ApiSpecs.CreateProductModifierData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.CreateProductModifierResponses[200]>>,(RequestErrorResponse<409, Required<ProductModifiersV3ApiSpecs.CreateProductModifierErrors[409]>> | RequestErrorResponse<422, Required<ProductModifiersV3ApiSpecs.CreateProductModifierErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/modifiers`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a product modifier
     *
     * Returns a single product modifier. Optional parameters can be passed in.
     */
    getProductModifier(
        productId: ProductModifiersV3ApiSpecs.GetProductModifierData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.GetProductModifierData['path']['modifier_id'],
        query?: ProductModifiersV3ApiSpecs.GetProductModifierData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.GetProductModifierResponses[200]>>,RequestErrorResponse<404, Required<ProductModifiersV3ApiSpecs.GetProductModifierErrors[404]>>>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}`,
            query,
        });
    }

    /**
     * Update a product modifier
     *
     * Updates a product modifier.

     Date modifiers are required to be provided in [ISO-8601 ATOM](https://www.php.net/manual/en/class.datetimeinterface.php#datetimeinterface.constants.atom) format. Excluding them in a request will throw a server error.
     */
    updateProductModifier(
        productId: ProductModifiersV3ApiSpecs.UpdateProductModifierData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.UpdateProductModifierData['path']['modifier_id'],
        requestBody: ProductModifiersV3ApiSpecs.UpdateProductModifierData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.UpdateProductModifierResponses[200]>>,(RequestErrorResponse<409, Required<ProductModifiersV3ApiSpecs.UpdateProductModifierErrors[409]>> | RequestErrorResponse<422, Required<ProductModifiersV3ApiSpecs.UpdateProductModifierErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a product modifier
     *
     * Deletes a product modifier.
     */
    deleteProductModifier(
        productId: ProductModifiersV3ApiSpecs.DeleteProductModifierData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.DeleteProductModifierData['path']['modifier_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductModifiersV3ApiSpecs.DeleteProductModifierResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}`,
        });
    }

    /**
     * Get all product modifier values
     *
     * Returns a list of all product *Modifier Values*. Optional parameters can be passed in.
     */
    getProductModifierValues(
        productId: ProductModifiersV3ApiSpecs.GetProductModifierValuesData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.GetProductModifierValuesData['path']['modifier_id'],
        query?: ProductModifiersV3ApiSpecs.GetProductModifierValuesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.GetProductModifierValuesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values`,
            query,
        });
    }

    /**
     * Create product modifier value
     *
     * Creates a modifier value.

     **Required Fields**
     * label
     * sort_order

     **Read-Only Fields**
     * id
     */
    createProductModifierValue(
        productId: ProductModifiersV3ApiSpecs.CreateProductModifierValueData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.CreateProductModifierValueData['path']['modifier_id'],
        requestBody: ProductModifiersV3ApiSpecs.CreateProductModifierValueData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.CreateProductModifierValueResponses[200]>>,RequestErrorResponse<422, Required<ProductModifiersV3ApiSpecs.CreateProductModifierValueErrors[422]>>>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a product modifier value
     *
     * Returns a single modifier value. Optional parameters can be passed in.
     */
    getProductModifierValue(
        productId: ProductModifiersV3ApiSpecs.GetProductModifierValueData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.GetProductModifierValueData['path']['modifier_id'],
        valueId: ProductModifiersV3ApiSpecs.GetProductModifierValueData['path']['value_id'],
        query?: ProductModifiersV3ApiSpecs.GetProductModifierValueData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.GetProductModifierValueResponses[200]>>,RequestErrorResponse<404, Required<ProductModifiersV3ApiSpecs.GetProductModifierValueErrors[404]>>>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}`,
            query,
        });
    }

    /**
     * Update a product modifier value
     *
     * Updates a modifier value.

     **Required Fields**
     * none

     **Read-Only Fields**
     * id
     */
    updateProductModifierValue(
        productId: ProductModifiersV3ApiSpecs.UpdateProductModifierValueData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.UpdateProductModifierValueData['path']['modifier_id'],
        valueId: ProductModifiersV3ApiSpecs.UpdateProductModifierValueData['path']['value_id'],
        requestBody: ProductModifiersV3ApiSpecs.UpdateProductModifierValueData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.UpdateProductModifierValueResponses[200]>>,RequestErrorResponse<422, Required<ProductModifiersV3ApiSpecs.UpdateProductModifierValueErrors[422]>>>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete product modifier value
     *
     * Deletes a modifier value.
     */
    deleteProductModifierValue(
        productId: ProductModifiersV3ApiSpecs.DeleteProductModifierValueData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.DeleteProductModifierValueData['path']['modifier_id'],
        valueId: ProductModifiersV3ApiSpecs.DeleteProductModifierValueData['path']['value_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductModifiersV3ApiSpecs.DeleteProductModifierValueResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}`,
        });
    }

    /**
     * Create product modifier Image
     *
     * Creates a *Modifier Image*.

     The image will show on the storefront when the value is selected.

      **Required Fields**
     - image_file: Form posts are the only accepted upload option.
     */
    createProductModifierImage(
        productId: ProductModifiersV3ApiSpecs.CreateProductModifierImageData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.CreateProductModifierImageData['path']['modifier_id'],
        valueId: ProductModifiersV3ApiSpecs.CreateProductModifierImageData['path']['value_id'],
        requestBody: ProductModifiersV3ApiSpecs.CreateProductModifierImageData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.CreateProductModifierImageResponses[200]>>,(RequestErrorResponse<400, Required<ProductModifiersV3ApiSpecs.CreateProductModifierImageErrors[400]>> | RequestErrorResponse<404, Required<ProductModifiersV3ApiSpecs.CreateProductModifierImageErrors[404]>> | RequestErrorResponse<422, Required<ProductModifiersV3ApiSpecs.CreateProductModifierImageErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}/image`,
            contentType: 'multipart/form-data',
            body: requestBody,
        });
    }
}
