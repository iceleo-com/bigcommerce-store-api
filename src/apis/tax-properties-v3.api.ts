import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxPropertiesV3ApiSpecs from '../generated/tax-properties-v3';
export * as TaxPropertiesV3ApiSpecs from '../generated/tax-properties-v3';

export class TaxPropertiesV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get Tax Properties
     *
     * Retrieve all tax properties defined in this store.
     */
    getTaxProperties(
        query?: TaxPropertiesV3ApiSpecs.GetTaxPropertiesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<TaxPropertiesV3ApiSpecs.GetTaxPropertiesResponses[200]>>,RequestErrorResponse<400, Required<TaxPropertiesV3ApiSpecs.GetTaxPropertiesErrors[400]>>>({
            path: 'v3/tax/properties',
            query,
        });
    }

    /**
     * Create Tax Properties
     *
     * Create one or more tax properties. A **code** and a **display name** must be included when creating tax properties.
     */
    createTaxProperties(
        requestBody: TaxPropertiesV3ApiSpecs.CreateTaxPropertiesData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<TaxPropertiesV3ApiSpecs.CreateTaxPropertiesResponses[200]>>,RequestErrorResponse<422, Required<TaxPropertiesV3ApiSpecs.CreateTaxPropertiesErrors[422]>>>({
            path: 'v3/tax/properties',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Tax Properties
     *
     * Update one or more tax properties. Only fields specified will be adjusted.
     */
    updateTaxProperties(
        requestBody: TaxPropertiesV3ApiSpecs.UpdateTaxPropertiesData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<TaxPropertiesV3ApiSpecs.UpdateTaxPropertiesResponses[200]>>,RequestErrorResponse<422, Required<TaxPropertiesV3ApiSpecs.UpdateTaxPropertiesErrors[422]>>>({
            path: 'v3/tax/properties',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Tax Properties
     *
     * Delete one or multiple tax properties. A tax property must have zero usages within product tax properties before you can delete it.
     */
    deleteTaxProperties(
        query?: TaxPropertiesV3ApiSpecs.DeleteTaxPropertiesData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<TaxPropertiesV3ApiSpecs.DeleteTaxPropertiesResponses[204]>>,(RequestErrorResponse<400, Required<TaxPropertiesV3ApiSpecs.DeleteTaxPropertiesErrors[400]>> | RequestErrorResponse<409, Required<TaxPropertiesV3ApiSpecs.DeleteTaxPropertiesErrors[409]>>)>({
            path: 'v3/tax/properties',
            query,
        });
    }

    /**
     * Get Product Tax Properties
     *
     * Retrieve the tax properties that are associated with one or more products.
     */
    getProductsTaxProperties(
        query?: TaxPropertiesV3ApiSpecs.GetProductsTaxPropertiesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<TaxPropertiesV3ApiSpecs.GetProductsTaxPropertiesResponses[200]>>,RequestErrorResponse<400, Required<TaxPropertiesV3ApiSpecs.GetProductsTaxPropertiesErrors[400]>>>({
            path: 'v3/tax/products/properties',
            query,
        });
    }

    /**
     * Update Product Tax Properties
     *
     * Update the tax properties associated with one or more products. This operation will be additive to any tax property values already associated with the product, overwriting any existing tax property values.
     */
    updateProductTaxProperties(
        requestBody: TaxPropertiesV3ApiSpecs.UpdateProductTaxPropertiesData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<TaxPropertiesV3ApiSpecs.UpdateProductTaxPropertiesResponses[200]>>,RequestErrorResponse<422, Required<TaxPropertiesV3ApiSpecs.UpdateProductTaxPropertiesErrors[422]>>>({
            path: 'v3/tax/products/properties',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Product Tax Properties
     *
     * Delete tax properties that are associated with one or more products.
     */
    deleteProductTaxProperties(
        query?: TaxPropertiesV3ApiSpecs.DeleteProductTaxPropertiesData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<TaxPropertiesV3ApiSpecs.DeleteProductTaxPropertiesResponses[204]>>,RequestErrorResponse<400, Required<TaxPropertiesV3ApiSpecs.DeleteProductTaxPropertiesErrors[400]>>>({
            path: 'v3/tax/products/properties',
            query,
        });
    }
}
