import RequestService from '../helpers/request/request-service';
import * as TaxPropertiesV3ApiSpecs from '../generated/tax-properties-v3';

export default class TaxPropertiesV3Api {
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
        return this.request.get<TaxPropertiesV3ApiSpecs.GetTaxPropertiesResponse, TaxPropertiesV3ApiSpecs.GetTaxPropertiesError>({
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
        return this.request.post<TaxPropertiesV3ApiSpecs.CreateTaxPropertiesResponse, TaxPropertiesV3ApiSpecs.CreateTaxPropertiesError>({
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
        return this.request.put<TaxPropertiesV3ApiSpecs.UpdateTaxPropertiesResponse, TaxPropertiesV3ApiSpecs.UpdateTaxPropertiesError>({
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
        return this.request.delete<any, TaxPropertiesV3ApiSpecs.DeleteTaxPropertiesError>({
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
        return this.request.get<TaxPropertiesV3ApiSpecs.GetProductsTaxPropertiesResponse, TaxPropertiesV3ApiSpecs.GetProductsTaxPropertiesError>({
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
        return this.request.put<TaxPropertiesV3ApiSpecs.UpdateProductTaxPropertiesResponse, TaxPropertiesV3ApiSpecs.UpdateProductTaxPropertiesError>({
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
        return this.request.delete<any, TaxPropertiesV3ApiSpecs.DeleteProductTaxPropertiesError>({
            path: 'v3/tax/products/properties',
            query,
        });
    }
}
