import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as BrandsV3ApiSpecs from '../generated/brands-v3';
export * as BrandsV3ApiSpecs from '../generated/brands-v3';

export class BrandsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Brands
     *
     * Returns a list of *Brands*. Optional filter parameters can be passed in.
     */
    getBrands(
        query?: BrandsV3ApiSpecs.GetBrandsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.GetBrandsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/catalog/brands',
            query,
        });
    }

    /**
     * Create a Brand
     *
     * Creates a *Brand*.

     **Required Fields**
     - name

     **Read-Only Fields**
     - id

     **Limits**
     - 30,000 brands per store limit
     */
    createBrand(
        requestBody: BrandsV3ApiSpecs.CreateBrandData['body'],
    ) {
        return this.request.post<(RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.CreateBrandResponses[200]>> | RequestSuccessResponse<207, Required<BrandsV3ApiSpecs.CreateBrandResponses[207]>>),(RequestErrorResponse<409, Required<BrandsV3ApiSpecs.CreateBrandErrors[409]>> | RequestErrorResponse<422, Required<BrandsV3ApiSpecs.CreateBrandErrors[422]>>)>({
            path: 'v3/catalog/brands',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Brands
     *
     * To delete brand objects, you must include a filter.

     **Required Fields**
      - name
     */
    deleteBrands(
        query?: BrandsV3ApiSpecs.DeleteBrandsData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<BrandsV3ApiSpecs.DeleteBrandsResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/catalog/brands',
            query,
        });
    }

    /**
     * Get a Brand
     *
     * Returns a single *Brand*. Optional filter parameters can be passed in.
     */
    getBrandById(
        brandId: BrandsV3ApiSpecs.GetBrandByIdData['path']['brand_id'],
        query?: BrandsV3ApiSpecs.GetBrandByIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.GetBrandByIdResponses[200]>>,RequestErrorResponse<404, Required<BrandsV3ApiSpecs.GetBrandByIdErrors[404]>>>({
            path: `v3/catalog/brands/${brandId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getBrandById` instead.
     */
    getBrand(...args: Parameters<BrandsV3Api['getBrandById']>) {
        return this.getBrandById(...args);
    }

    /**
     * Update a Brand
     *
     * Updates a *Brand*.

     **Required Fields**
     - None

     **Read-Only Fields**
     - id

     To update a *Brand Image*, send a request with an `image_url`.
     */
    updateBrand(
        brandId: BrandsV3ApiSpecs.UpdateBrandData['path']['brand_id'],
        requestBody: BrandsV3ApiSpecs.UpdateBrandData['body'],
    ) {
        return this.request.put<(RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.UpdateBrandResponses[200]>> | RequestSuccessResponse<207, Required<BrandsV3ApiSpecs.UpdateBrandResponses[207]>>),(RequestErrorResponse<404, Required<BrandsV3ApiSpecs.UpdateBrandErrors[404]>> | RequestErrorResponse<409, Required<BrandsV3ApiSpecs.UpdateBrandErrors[409]>> | RequestErrorResponse<422, Required<BrandsV3ApiSpecs.UpdateBrandErrors[422]>>)>({
            path: `v3/catalog/brands/${brandId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Brand
     *
     * Deletes a *Brand*.
     */
    deleteBrandById(
        brandId: BrandsV3ApiSpecs.DeleteBrandByIdData['path']['brand_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<BrandsV3ApiSpecs.DeleteBrandByIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/brands/${brandId}`,
        });
    }

    /**
     * @deprecated Use `deleteBrandById` instead.
     */
    deleteBrand(...args: Parameters<BrandsV3Api['deleteBrandById']>) {
        return this.deleteBrandById(...args);
    }

    /**
     * Get All Brand Metafields
     *
     * Returns a list of *Brand Metafields*. Optional filter parameters can be passed in. 
     */
    getBrandMetafieldsByBrandId(
        brandId: BrandsV3ApiSpecs.GetBrandMetafieldsByBrandIdData['path']['brand_id'],
        query?: BrandsV3ApiSpecs.GetBrandMetafieldsByBrandIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.GetBrandMetafieldsByBrandIdResponses[200]>>,RequestErrorResponse<404, Required<BrandsV3ApiSpecs.GetBrandMetafieldsByBrandIdErrors[404]>>>({
            path: `v3/catalog/brands/${brandId}/metafields`,
            query,
        });
    }

    /**
     * @deprecated Use `getBrandMetafieldsByBrandId` instead.
     */
    getBrandMetafields(...args: Parameters<BrandsV3Api['getBrandMetafieldsByBrandId']>) {
        return this.getBrandMetafieldsByBrandId(...args);
    }

    /**
     * Create a Brand Metafield
     *
     * Creates a *Brand Metafield*.

     **Required Fields**
     - permission_set
     - namespace
     - key
     - value

     **Read-Only Fields**
     - id

     **Note:** The maxiumum number of metafields allowed on each order, product, category, variant, or brand is 250 per client ID. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
     */
    createBrandMetafield(
        brandId: BrandsV3ApiSpecs.CreateBrandMetafieldData['path']['brand_id'],
        requestBody: BrandsV3ApiSpecs.CreateBrandMetafieldData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.CreateBrandMetafieldResponses[200]>>,(RequestErrorResponse<409, Required<BrandsV3ApiSpecs.CreateBrandMetafieldErrors[409]>> | RequestErrorResponse<422, Required<BrandsV3ApiSpecs.CreateBrandMetafieldErrors[422]>>)>({
            path: `v3/catalog/brands/${brandId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Brand Metafields
     *
     * Returns a *Brand Metafield*. Optional filter parameters can be passed in.
     */
    getBrandMetafieldByBrandId(
        brandId: BrandsV3ApiSpecs.GetBrandMetafieldByBrandIdData['path']['brand_id'],
        metafieldId: BrandsV3ApiSpecs.GetBrandMetafieldByBrandIdData['path']['metafield_id'],
        query?: BrandsV3ApiSpecs.GetBrandMetafieldByBrandIdData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.GetBrandMetafieldByBrandIdResponses[200]>>,RequestErrorResponse<404, Required<BrandsV3ApiSpecs.GetBrandMetafieldByBrandIdErrors[404]>>>({
            path: `v3/catalog/brands/${brandId}/metafields/${metafieldId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getBrandMetafieldByBrandId` instead.
     */
    getBrandMetafield(...args: Parameters<BrandsV3Api['getBrandMetafieldByBrandId']>) {
        return this.getBrandMetafieldByBrandId(...args);
    }

    /**
     * Update a Brand Metafield
     *
     * Updates a *Brand Metafield*.

     **Required Fields**  
     * none

     **Read-Only Fields**
     * id
     * These fields can only be modified by the app (API credentials) that created the metafield:
     	* namespace
     	* key
     	* permission_set

     **Usage Notes**
     * Attempting to modify `namespace`, `key`, and `permission_set` fields using a client ID different from the one used to create those metafields will result in a 403 error message.
     * The maxiumum number of metafields allowed on each order, product, category, variant, or brand is 250 per client ID. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
     */
    updateBrandMetafield(
        brandId: BrandsV3ApiSpecs.UpdateBrandMetafieldData['path']['brand_id'],
        metafieldId: BrandsV3ApiSpecs.UpdateBrandMetafieldData['path']['metafield_id'],
        requestBody: BrandsV3ApiSpecs.UpdateBrandMetafieldData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.UpdateBrandMetafieldResponses[200]>>,RequestErrorResponse<404, Required<BrandsV3ApiSpecs.UpdateBrandMetafieldErrors[404]>>>({
            path: `v3/catalog/brands/${brandId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Brand Metafield
     *
     * Deletes a *Brand Metafield*.
     */
    deleteBrandMetafieldById(
        brandId: BrandsV3ApiSpecs.DeleteBrandMetafieldByIdData['path']['brand_id'],
        metafieldId: BrandsV3ApiSpecs.DeleteBrandMetafieldByIdData['path']['metafield_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<BrandsV3ApiSpecs.DeleteBrandMetafieldByIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/brands/${brandId}/metafields/${metafieldId}`,
        });
    }

    /**
     * @deprecated Use `deleteBrandMetafieldById` instead.
     */
    deleteBrandMetafield(...args: Parameters<BrandsV3Api['deleteBrandMetafieldById']>) {
        return this.deleteBrandMetafieldById(...args);
    }

    /**
     * Create a Brand Image
     *
     * Creates a *Brand Image*.

     **Required Fields**
     - image_file: Form posts are the only accepted upload option.

     **Read-Only Fields**
     - id

     Only one image at a time can be created. To update a *Brand Image*, use the [Update a brand](/docs/rest-catalog/brands#update-a-brand) endpoint and an `image_url`.
     */
    createBrandImage(
        brandId: BrandsV3ApiSpecs.CreateBrandImageData['path']['brand_id'],
        requestBody: BrandsV3ApiSpecs.CreateBrandImageData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.CreateBrandImageResponses[200]>>,(RequestErrorResponse<400, Required<BrandsV3ApiSpecs.CreateBrandImageErrors[400]>> | RequestErrorResponse<404, Required<BrandsV3ApiSpecs.CreateBrandImageErrors[404]>> | RequestErrorResponse<422, Required<BrandsV3ApiSpecs.CreateBrandImageErrors[422]>>)>({
            path: `v3/catalog/brands/${brandId}/image`,
            contentType: 'multipart/form-data',
            body: requestBody,
        });
    }

    /**
     * Delete a Brand Image
     *
     * Deletes a *Brand Image*.
     */
    deleteBrandImage(
        brandId: BrandsV3ApiSpecs.DeleteBrandImageData['path']['brand_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<BrandsV3ApiSpecs.DeleteBrandImageResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/brands/${brandId}/image`,
        });
    }
}
