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
     * Get All Product Modifiers
     *
     * Returns a list of all *Product Modifiers*. Optional parameters can be passed in.
     */
    getModifiers(
        productId: ProductModifiersV3ApiSpecs.GetModifiersData['path']['product_id'],
        query?: ProductModifiersV3ApiSpecs.GetModifiersData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.GetModifiersResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/modifiers`,
            query,
        });
    }

    /**
     * @deprecated Use `getModifiers` instead.
     */
    getProductModifiers(...args: Parameters<ProductModifiersV3Api['getModifiers']>) {
        return this.getModifiers(...args);
    }

    /**
     * Create a Product Modifier
     *
     * Creates a *Product Modifier*.

     **Required Fields**
     * `required`
     * `display_name`
     * `type`

     **Read-Only Fields**
     * `id`

     **Notes**
     It takes two separate requests to create a new checkbox modifier with option values. Perform a request to create a modifier, then perform a second request to update option values.
     */
    createModifier(
        productId: ProductModifiersV3ApiSpecs.CreateModifierData['path']['product_id'],
        requestBody: ProductModifiersV3ApiSpecs.CreateModifierData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.CreateModifierResponses[200]>>,(RequestErrorResponse<409, Required<ProductModifiersV3ApiSpecs.CreateModifierErrors[409]>> | RequestErrorResponse<422, Required<ProductModifiersV3ApiSpecs.CreateModifierErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/modifiers`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createModifier` instead.
     */
    createProductModifier(...args: Parameters<ProductModifiersV3Api['createModifier']>) {
        return this.createModifier(...args);
    }

    /**
     * Get a Modifier
     *
     * Returns a single *Product Modifier*. Optional parameters can be passed in.
     */
    getModifierById(
        productId: ProductModifiersV3ApiSpecs.GetModifierByIdData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.GetModifierByIdData['path']['modifier_id'],
        query?: ProductModifiersV3ApiSpecs.GetModifierByIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.GetModifierByIdResponses[200]>>,RequestErrorResponse<404, Required<ProductModifiersV3ApiSpecs.GetModifierByIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getModifierById` instead.
     */
    getProductModifier(...args: Parameters<ProductModifiersV3Api['getModifierById']>) {
        return this.getModifierById(...args);
    }

    /**
     * Update a Modifier
     *
     * Updates a *Product Modifier*.
     */
    updateModifier(
        productId: ProductModifiersV3ApiSpecs.UpdateModifierData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.UpdateModifierData['path']['modifier_id'],
        requestBody: ProductModifiersV3ApiSpecs.UpdateModifierData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.UpdateModifierResponses[200]>>,(RequestErrorResponse<409, Required<ProductModifiersV3ApiSpecs.UpdateModifierErrors[409]>> | RequestErrorResponse<422, Required<ProductModifiersV3ApiSpecs.UpdateModifierErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateModifier` instead.
     */
    updateProductModifier(...args: Parameters<ProductModifiersV3Api['updateModifier']>) {
        return this.updateModifier(...args);
    }

    /**
     * Delete a Modifier
     *
     * Deletes a *Product Modifier*.
     */
    deleteModifierById(
        productId: ProductModifiersV3ApiSpecs.DeleteModifierByIdData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.DeleteModifierByIdData['path']['modifier_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductModifiersV3ApiSpecs.DeleteModifierByIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}`,
        });
    }

    /**
     * @deprecated Use `deleteModifierById` instead.
     */
    deleteProductModifier(...args: Parameters<ProductModifiersV3Api['deleteModifierById']>) {
        return this.deleteModifierById(...args);
    }

    /**
     * Get All Modifier Values
     *
     * Returns a list of all product *Modifier Values*. Optional parameters can be passed in.
     */
    getModifierValues(
        productId: ProductModifiersV3ApiSpecs.GetModifierValuesData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.GetModifierValuesData['path']['modifier_id'],
        query?: ProductModifiersV3ApiSpecs.GetModifierValuesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.GetModifierValuesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values`,
            query,
        });
    }

    /**
     * @deprecated Use `getModifierValues` instead.
     */
    getProductModifierValues(...args: Parameters<ProductModifiersV3Api['getModifierValues']>) {
        return this.getModifierValues(...args);
    }

    /**
     * Create Modifier Value
     *
     * Creates a *Modifier Value*.

     **Required Fields**
     * label
     * sort_order

     **Read-Only Fields**
     * id
     */
    createModifierValue(
        productId: ProductModifiersV3ApiSpecs.CreateModifierValueData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.CreateModifierValueData['path']['modifier_id'],
        requestBody: ProductModifiersV3ApiSpecs.CreateModifierValueData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.CreateModifierValueResponses[200]>>,RequestErrorResponse<422, Required<ProductModifiersV3ApiSpecs.CreateModifierValueErrors[422]>>>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createModifierValue` instead.
     */
    createProductModifierValue(...args: Parameters<ProductModifiersV3Api['createModifierValue']>) {
        return this.createModifierValue(...args);
    }

    /**
     * Get a Modifier Value
     *
     * Returns a single *Modifier Value*. Optional parameters can be passed in.
     */
    getModifierValueById(
        productId: ProductModifiersV3ApiSpecs.GetModifierValueByIdData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.GetModifierValueByIdData['path']['modifier_id'],
        valueId: ProductModifiersV3ApiSpecs.GetModifierValueByIdData['path']['value_id'],
        query?: ProductModifiersV3ApiSpecs.GetModifierValueByIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.GetModifierValueByIdResponses[200]>>,RequestErrorResponse<404, Required<ProductModifiersV3ApiSpecs.GetModifierValueByIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getModifierValueById` instead.
     */
    getProductModifierValue(...args: Parameters<ProductModifiersV3Api['getModifierValueById']>) {
        return this.getModifierValueById(...args);
    }

    /**
     * Update a Modifier Value
     *
     * Updates a *Modifier Value*.

     **Required Fields**
     * none

     **Read-Only Fields**
     * id
     */
    updateModifierValue(
        productId: ProductModifiersV3ApiSpecs.UpdateModifierValueData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.UpdateModifierValueData['path']['modifier_id'],
        valueId: ProductModifiersV3ApiSpecs.UpdateModifierValueData['path']['value_id'],
        requestBody: ProductModifiersV3ApiSpecs.UpdateModifierValueData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.UpdateModifierValueResponses[200]>>,RequestErrorResponse<422, Required<ProductModifiersV3ApiSpecs.UpdateModifierValueErrors[422]>>>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateModifierValue` instead.
     */
    updateProductModifierValue(...args: Parameters<ProductModifiersV3Api['updateModifierValue']>) {
        return this.updateModifierValue(...args);
    }

    /**
     * Delete Modifier Value
     *
     * Deletes a *Modifier Value*.
     */
    deleteModifierValueById(
        productId: ProductModifiersV3ApiSpecs.DeleteModifierValueByIdData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.DeleteModifierValueByIdData['path']['modifier_id'],
        valueId: ProductModifiersV3ApiSpecs.DeleteModifierValueByIdData['path']['value_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductModifiersV3ApiSpecs.DeleteModifierValueByIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}`,
        });
    }

    /**
     * @deprecated Use `deleteModifierValueById` instead.
     */
    deleteProductModifierValue(...args: Parameters<ProductModifiersV3Api['deleteModifierValueById']>) {
        return this.deleteModifierValueById(...args);
    }

    /**
     * Create Modifier Image
     *
     * Creates a *Modifier Image*.

     The image will show on the storefront when the value is selected.

      **Required Fields**
     - image_file: Form posts are the only accepted upload option.
     */
    createModifierImage(
        productId: ProductModifiersV3ApiSpecs.CreateModifierImageData['path']['product_id'],
        modifierId: ProductModifiersV3ApiSpecs.CreateModifierImageData['path']['modifier_id'],
        valueId: ProductModifiersV3ApiSpecs.CreateModifierImageData['path']['value_id'],
        requestBody: ProductModifiersV3ApiSpecs.CreateModifierImageData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductModifiersV3ApiSpecs.CreateModifierImageResponses[200]>>,(RequestErrorResponse<400, Required<ProductModifiersV3ApiSpecs.CreateModifierImageErrors[400]>> | RequestErrorResponse<404, Required<ProductModifiersV3ApiSpecs.CreateModifierImageErrors[404]>> | RequestErrorResponse<422, Required<ProductModifiersV3ApiSpecs.CreateModifierImageErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/modifiers/${modifierId}/values/${valueId}/image`,
            contentType: 'multipart/form-data',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createModifierImage` instead.
     */
    createProductModifierImage(...args: Parameters<ProductModifiersV3Api['createModifierImage']>) {
        return this.createModifierImage(...args);
    }
}
