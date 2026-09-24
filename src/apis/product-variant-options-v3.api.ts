import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as ProductVariantOptionsV3ApiSpecs from '../generated/product-variant-options-v3';
export * as ProductVariantOptionsV3ApiSpecs from '../generated/product-variant-options-v3';

export class ProductVariantOptionsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Product Variant Options
     *
     * Returns a list of product *Variant Options*. Optional parameters can be passed in. 
     */
    getOptions(
        productId: ProductVariantOptionsV3ApiSpecs.GetOptionsData['path']['product_id'],
        query?: ProductVariantOptionsV3ApiSpecs.GetOptionsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductVariantOptionsV3ApiSpecs.GetOptionsResponses[200]>>,RequestErrorResponse<404, Required<ProductVariantOptionsV3ApiSpecs.GetOptionsErrors[404]>>>({
            path: `v3/catalog/products/${productId}/options`,
            query,
        });
    }

    /**
     * @deprecated Use `getOptions` instead.
     */
    getProductVariantOptions(...args: Parameters<ProductVariantOptionsV3Api['getOptions']>) {
        return this.getOptions(...args);
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
    createOption(
        productId: ProductVariantOptionsV3ApiSpecs.CreateOptionData['path']['product_id'],
        requestBody: ProductVariantOptionsV3ApiSpecs.CreateOptionData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductVariantOptionsV3ApiSpecs.CreateOptionResponses[200]>>,(RequestErrorResponse<409, Required<ProductVariantOptionsV3ApiSpecs.CreateOptionErrors[409]>> | RequestErrorResponse<422, Required<ProductVariantOptionsV3ApiSpecs.CreateOptionErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/options`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createOption` instead.
     */
    createProductVariantOption(...args: Parameters<ProductVariantOptionsV3Api['createOption']>) {
        return this.createOption(...args);
    }

    /**
     * Get a Product Variant Option
     *
     * Returns a single *Variant Option*. Optional parameters can be passed in.
     */
    getOptionById(
        productId: ProductVariantOptionsV3ApiSpecs.GetOptionByIdData['path']['product_id'],
        optionId: ProductVariantOptionsV3ApiSpecs.GetOptionByIdData['path']['option_id'],
        query?: ProductVariantOptionsV3ApiSpecs.GetOptionByIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductVariantOptionsV3ApiSpecs.GetOptionByIdResponses[200]>>,RequestErrorResponse<404, Required<ProductVariantOptionsV3ApiSpecs.GetOptionByIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/options/${optionId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getOptionById` instead.
     */
    getProductVariantOption(...args: Parameters<ProductVariantOptionsV3Api['getOptionById']>) {
        return this.getOptionById(...args);
    }

    /**
     * Update a Product Variant Option
     *
     * Updates a *Variant Option*.

     **Read-Only Fields**
     * id
     */
    updateOption(
        productId: ProductVariantOptionsV3ApiSpecs.UpdateOptionData['path']['product_id'],
        optionId: ProductVariantOptionsV3ApiSpecs.UpdateOptionData['path']['option_id'],
        requestBody: ProductVariantOptionsV3ApiSpecs.UpdateOptionData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductVariantOptionsV3ApiSpecs.UpdateOptionResponses[200]>>,(RequestErrorResponse<409, Required<ProductVariantOptionsV3ApiSpecs.UpdateOptionErrors[409]>> | RequestErrorResponse<422, Required<ProductVariantOptionsV3ApiSpecs.UpdateOptionErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/options/${optionId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateOption` instead.
     */
    updateProductVariantOption(...args: Parameters<ProductVariantOptionsV3Api['updateOption']>) {
        return this.updateOption(...args);
    }

    /**
     * Delete a Product Variant Option
     *
     * Deletes a *Variant Option*.
     */
    deleteOptionById(
        productId: ProductVariantOptionsV3ApiSpecs.DeleteOptionByIdData['path']['product_id'],
        optionId: ProductVariantOptionsV3ApiSpecs.DeleteOptionByIdData['path']['option_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductVariantOptionsV3ApiSpecs.DeleteOptionByIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/options/${optionId}`,
        });
    }

    /**
     * @deprecated Use `deleteOptionById` instead.
     */
    deleteProductVariantOption(...args: Parameters<ProductVariantOptionsV3Api['deleteOptionById']>) {
        return this.deleteOptionById(...args);
    }

    /**
     * Get All Product Variant Option Values
     *
     * Returns a list of all *Variant Option Values*. Optional parameters can be passed in.
     */
    getOptionValues(
        productId: ProductVariantOptionsV3ApiSpecs.GetOptionValuesData['path']['product_id'],
        optionId: ProductVariantOptionsV3ApiSpecs.GetOptionValuesData['path']['option_id'],
        query?: ProductVariantOptionsV3ApiSpecs.GetOptionValuesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductVariantOptionsV3ApiSpecs.GetOptionValuesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/options/${optionId}/values`,
            query,
        });
    }

    /**
     * @deprecated Use `getOptionValues` instead.
     */
    getProductVariantOptionValues(...args: Parameters<ProductVariantOptionsV3Api['getOptionValues']>) {
        return this.getOptionValues(...args);
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
    createOptionValue(
        productId: ProductVariantOptionsV3ApiSpecs.CreateOptionValueData['path']['product_id'],
        optionId: ProductVariantOptionsV3ApiSpecs.CreateOptionValueData['path']['option_id'],
        requestBody: ProductVariantOptionsV3ApiSpecs.CreateOptionValueData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<ProductVariantOptionsV3ApiSpecs.CreateOptionValueResponses[200]>>,RequestErrorResponse<422, Required<ProductVariantOptionsV3ApiSpecs.CreateOptionValueErrors[422]>>>({
            path: `v3/catalog/products/${productId}/options/${optionId}/values`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createOptionValue` instead.
     */
    createProductVariantOptionValue(...args: Parameters<ProductVariantOptionsV3Api['createOptionValue']>) {
        return this.createOptionValue(...args);
    }

    /**
     * Get a Product Variant Option Value
     *
     * Returns a single *Variant Option Value*. Optional parameters can be passed in.
     */
    getOptionValueById(
        productId: ProductVariantOptionsV3ApiSpecs.GetOptionValueByIdData['path']['product_id'],
        optionId: ProductVariantOptionsV3ApiSpecs.GetOptionValueByIdData['path']['option_id'],
        valueId: ProductVariantOptionsV3ApiSpecs.GetOptionValueByIdData['path']['value_id'],
        query?: ProductVariantOptionsV3ApiSpecs.GetOptionValueByIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<ProductVariantOptionsV3ApiSpecs.GetOptionValueByIdResponses[200]>>,RequestErrorResponse<404, Required<ProductVariantOptionsV3ApiSpecs.GetOptionValueByIdErrors[404]>>>({
            path: `v3/catalog/products/${productId}/options/${optionId}/values/${valueId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getOptionValueById` instead.
     */
    getProductVariantOptionValue(...args: Parameters<ProductVariantOptionsV3Api['getOptionValueById']>) {
        return this.getOptionValueById(...args);
    }

    /**
     * Update a Product Variant Option Value
     *
     * Updates a *Variant Option Value*.

     **Read-Only Fields**
     * id
     */
    updateOptionValue(
        productId: ProductVariantOptionsV3ApiSpecs.UpdateOptionValueData['path']['product_id'],
        optionId: ProductVariantOptionsV3ApiSpecs.UpdateOptionValueData['path']['option_id'],
        valueId: ProductVariantOptionsV3ApiSpecs.UpdateOptionValueData['path']['value_id'],
        requestBody: ProductVariantOptionsV3ApiSpecs.UpdateOptionValueData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<ProductVariantOptionsV3ApiSpecs.UpdateOptionValueResponses[200]>>,(RequestErrorResponse<404, Required<ProductVariantOptionsV3ApiSpecs.UpdateOptionValueErrors[404]>> | RequestErrorResponse<422, Required<ProductVariantOptionsV3ApiSpecs.UpdateOptionValueErrors[422]>>)>({
            path: `v3/catalog/products/${productId}/options/${optionId}/values/${valueId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateOptionValue` instead.
     */
    updateProductVariantOptionValue(...args: Parameters<ProductVariantOptionsV3Api['updateOptionValue']>) {
        return this.updateOptionValue(...args);
    }

    /**
     * Delete a Product Variant Option Value
     *
     * Deletes a *Variant Option Value*.
     */
    deleteOptionValueById(
        productId: ProductVariantOptionsV3ApiSpecs.DeleteOptionValueByIdData['path']['product_id'],
        optionId: ProductVariantOptionsV3ApiSpecs.DeleteOptionValueByIdData['path']['option_id'],
        valueId: ProductVariantOptionsV3ApiSpecs.DeleteOptionValueByIdData['path']['value_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<ProductVariantOptionsV3ApiSpecs.DeleteOptionValueByIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/products/${productId}/options/${optionId}/values/${valueId}`,
        });
    }

    /**
     * @deprecated Use `deleteOptionValueById` instead.
     */
    deleteProductVariantOptionValue(...args: Parameters<ProductVariantOptionsV3Api['deleteOptionValueById']>) {
        return this.deleteOptionValueById(...args);
    }
}
