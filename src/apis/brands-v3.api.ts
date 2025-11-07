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
     * Returns a list of brands. Optional filter parameters can be passed in.
     */
    getBrands(
        query?: BrandsV3ApiSpecs.GetBrandsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.GetBrandsResponses[200]>>,(RequestErrorResponse<401, Required<BrandsV3ApiSpecs.GetBrandsErrors[401]>> | RequestErrorResponse<403, Required<BrandsV3ApiSpecs.GetBrandsErrors[403]>>)>({
            path: 'v3/catalog/brands',
            query,
        });
    }

    /**
     * Create a Brand
     *
     * Creates a brand.

     **Required Fields**
     - name

     **Limits**
     - 30,000 brands per store limit
     */
    createBrand(
        requestBody: BrandsV3ApiSpecs.CreateBrandData['body'],
    ) {
        return this.request.post<(RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.CreateBrandResponses[200]>> | RequestSuccessResponse<207, Required<BrandsV3ApiSpecs.CreateBrandResponses[207]>>),(RequestErrorResponse<401, Required<BrandsV3ApiSpecs.CreateBrandErrors[401]>> | RequestErrorResponse<403, Required<BrandsV3ApiSpecs.CreateBrandErrors[403]>> | RequestErrorResponse<404, Required<BrandsV3ApiSpecs.CreateBrandErrors[404]>> | RequestErrorResponse<409, Required<BrandsV3ApiSpecs.CreateBrandErrors[409]>> | RequestErrorResponse<422, Required<BrandsV3ApiSpecs.CreateBrandErrors[422]>>)>({
            path: 'v3/catalog/brands',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Brands
     *
     * To delete brand objects, you must include a value for the name filter.
     */
    deleteBrands(
        query?: BrandsV3ApiSpecs.DeleteBrandsData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<BrandsV3ApiSpecs.DeleteBrandsResponses[204]>>,(RequestErrorResponse<401, Required<BrandsV3ApiSpecs.DeleteBrandsErrors[401]>> | RequestErrorResponse<403, Required<BrandsV3ApiSpecs.DeleteBrandsErrors[403]>> | RequestErrorResponse<422, Required<BrandsV3ApiSpecs.DeleteBrandsErrors[422]>>)>({
            path: 'v3/catalog/brands',
            query,
        });
    }

    /**
     * Get a Brand
     *
     * Returns a single brand. Optional filter parameters can be passed in.
     */
    getBrand(
        brandId: BrandsV3ApiSpecs.GetBrandData['path']['brand_id'],
        query?: BrandsV3ApiSpecs.GetBrandData['query'],
    ) {
        return this.request.get<(RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.GetBrandResponses[200]>> | RequestSuccessResponse<207, Required<BrandsV3ApiSpecs.GetBrandResponses[207]>>),(RequestErrorResponse<401, Required<BrandsV3ApiSpecs.GetBrandErrors[401]>> | RequestErrorResponse<403, Required<BrandsV3ApiSpecs.GetBrandErrors[403]>> | RequestErrorResponse<404, Required<BrandsV3ApiSpecs.GetBrandErrors[404]>> | RequestErrorResponse<409, Required<BrandsV3ApiSpecs.GetBrandErrors[409]>> | RequestErrorResponse<422, Required<BrandsV3ApiSpecs.GetBrandErrors[422]>>)>({
            path: `v3/catalog/brands/${brandId}`,
            query,
        });
    }

    /**
     * Update a Brand
     *
     * Updates a brand.

     To update a brand image, send a request with an `image_url`.
     */
    updateBrand(
        brandId: BrandsV3ApiSpecs.UpdateBrandData['path']['brand_id'],
        requestBody: BrandsV3ApiSpecs.UpdateBrandData['body'],
    ) {
        return this.request.put<(RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.UpdateBrandResponses[200]>> | RequestSuccessResponse<207, Required<BrandsV3ApiSpecs.UpdateBrandResponses[207]>>),(RequestErrorResponse<401, Required<BrandsV3ApiSpecs.UpdateBrandErrors[401]>> | RequestErrorResponse<403, Required<BrandsV3ApiSpecs.UpdateBrandErrors[403]>> | RequestErrorResponse<404, Required<BrandsV3ApiSpecs.UpdateBrandErrors[404]>> | RequestErrorResponse<409, Required<BrandsV3ApiSpecs.UpdateBrandErrors[409]>> | RequestErrorResponse<422, Required<BrandsV3ApiSpecs.UpdateBrandErrors[422]>>)>({
            path: `v3/catalog/brands/${brandId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Brand
     *
     * Deletes a brand.
     */
    deleteBrand(
        brandId: BrandsV3ApiSpecs.DeleteBrandData['path']['brand_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<BrandsV3ApiSpecs.DeleteBrandResponses[204]>>,(RequestErrorResponse<401, Required<BrandsV3ApiSpecs.DeleteBrandErrors[401]>> | RequestErrorResponse<403, Required<BrandsV3ApiSpecs.DeleteBrandErrors[403]>> | RequestErrorResponse<404, Required<BrandsV3ApiSpecs.DeleteBrandErrors[404]>>)>({
            path: `v3/catalog/brands/${brandId}`,
        });
    }

    /**
     * Get brand metafields
     *
     * Returns a list of brand metafields. Optional filter parameters can be passed in.
     */
    getBrandMetafields(
        brandId: BrandsV3ApiSpecs.GetBrandMetafieldsData['path']['brand_id'],
        query?: BrandsV3ApiSpecs.GetBrandMetafieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.GetBrandMetafieldsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/brands/${brandId}/metafields`,
            query,
        });
    }

    /**
     * Create a Brand Metafield
     *
     * Creates a brand metafield.

     **Note:** The maximum number of metafields allowed on each order, product, category, variant, or brand is 250 per client ID. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
     */
    createBrandMetafield(
        brandId: BrandsV3ApiSpecs.CreateBrandMetafieldData['path']['brand_id'],
        requestBody: BrandsV3ApiSpecs.CreateBrandMetafieldData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.CreateBrandMetafieldResponses[200]>>,(RequestErrorResponse<400, Required<BrandsV3ApiSpecs.CreateBrandMetafieldErrors[400]>> | RequestErrorResponse<409, Required<BrandsV3ApiSpecs.CreateBrandMetafieldErrors[409]>> | RequestErrorResponse<422, Required<BrandsV3ApiSpecs.CreateBrandMetafieldErrors[422]>>)>({
            path: `v3/catalog/brands/${brandId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Brand Metafields
     *
     * Returns a brand metafield. Optional filter parameters can be passed in.
     */
    getBrandMetafield(
        brandId: BrandsV3ApiSpecs.GetBrandMetafieldData['path']['brand_id'],
        metafieldId: BrandsV3ApiSpecs.GetBrandMetafieldData['path']['metafield_id'],
        query?: BrandsV3ApiSpecs.GetBrandMetafieldData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.GetBrandMetafieldResponses[200]>>,RequestErrorResponse<404, Required<BrandsV3ApiSpecs.GetBrandMetafieldErrors[404]>>>({
            path: `v3/catalog/brands/${brandId}/metafields/${metafieldId}`,
            query,
        });
    }

    /**
     * Update a Brand Metafield
     *
     * Updates a brand metafield.

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
     * The maximum number of metafields allowed on each order, product, category, variant, or brand is 250 per client ID. For more information, see [Platform Limits](https://support.bigcommerce.com/s/article/Platform-Limits) in the Help Center.
     */
    updateBrandMetafield(
        brandId: BrandsV3ApiSpecs.UpdateBrandMetafieldData['path']['brand_id'],
        metafieldId: BrandsV3ApiSpecs.UpdateBrandMetafieldData['path']['metafield_id'],
        requestBody: BrandsV3ApiSpecs.UpdateBrandMetafieldData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.UpdateBrandMetafieldResponses[200]>>,(RequestErrorResponse<400, Required<BrandsV3ApiSpecs.UpdateBrandMetafieldErrors[400]>> | RequestErrorResponse<404, Required<BrandsV3ApiSpecs.UpdateBrandMetafieldErrors[404]>>)>({
            path: `v3/catalog/brands/${brandId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Brand Metafield
     *
     * Deletes a brand metafield.
     */
    deleteBrandMetafield(
        brandId: BrandsV3ApiSpecs.DeleteBrandMetafieldData['path']['brand_id'],
        metafieldId: BrandsV3ApiSpecs.DeleteBrandMetafieldData['path']['metafield_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<BrandsV3ApiSpecs.DeleteBrandMetafieldResponses[204]>>,RequestErrorResponse<404, Required<BrandsV3ApiSpecs.DeleteBrandMetafieldErrors[404]>>>({
            path: `v3/catalog/brands/${brandId}/metafields/${metafieldId}`,
        });
    }

    /**
     * Create a Brand Image
     *
     * Creates a brand image.

     **Required Fields**
     - image_file: Form posts are the only accepted upload option. For more information on how to upload an image see [Adding product images](docs/store-operations/catalog#adding-product-images). NOTE:  Ensure you set the `Content-Type` header to `multipart/form-data; boundary=--example-boundary--` and set the correct URL for this endpoint.

     **Read-Only Fields**
     - id

     Only one image at a time can be created. To update a brand image, use the [Update a brand](/docs/rest-catalog/brands#update-a-brand) endpoint and an `image_url`.
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
     * Deletes a brand image.
     */
    deleteBrandImage(
        brandId: BrandsV3ApiSpecs.DeleteBrandImageData['path']['brand_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<BrandsV3ApiSpecs.DeleteBrandImageResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/catalog/brands/${brandId}/image`,
        });
    }

    /**
     * Get All Brand Metafields
     *
     * Get all brand metafields.
     */
    getBrandsMetafields(
        query?: BrandsV3ApiSpecs.GetBrandsMetafieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.GetBrandsMetafieldsResponses[200]>>,RequestErrorResponse<400, Required<BrandsV3ApiSpecs.GetBrandsMetafieldsErrors[400]>>>({
            path: 'v3/catalog/brands/metafields',
            query,
        });
    }

    /**
     * Create multiple metafields
     *
     * Create multiple metafields.
     */
    createBrandsMetafields(
        requestBody: BrandsV3ApiSpecs.CreateBrandsMetafieldsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.CreateBrandsMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<BrandsV3ApiSpecs.CreateBrandsMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<BrandsV3ApiSpecs.CreateBrandsMetafieldsErrors[422]>>)>({
            path: 'v3/catalog/brands/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update multiple metafields
     *
     * Create multiple metafields.
     */
    updateBrandsMetafields(
        requestBody: BrandsV3ApiSpecs.UpdateBrandsMetafieldsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.UpdateBrandsMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<BrandsV3ApiSpecs.UpdateBrandsMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<BrandsV3ApiSpecs.UpdateBrandsMetafieldsErrors[422]>>)>({
            path: 'v3/catalog/brands/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Multiple Metafields
     *
     * Delete all brand metafields.
     */
    deleteBrandsMetafields(
        requestBody: BrandsV3ApiSpecs.DeleteBrandsMetafieldsData['body'],
    ) {
        return this.request.delete<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.DeleteBrandsMetafieldsResponses[200]>>,(RequestErrorResponse<400, Required<BrandsV3ApiSpecs.DeleteBrandsMetafieldsErrors[400]>> | RequestErrorResponse<422, Required<BrandsV3ApiSpecs.DeleteBrandsMetafieldsErrors[422]>>)>({
            path: 'v3/catalog/brands/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
