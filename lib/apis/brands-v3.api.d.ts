import RequestService from '../helpers/request/request-service';
import * as BrandsV3ApiSpecs from '../generated/brands-v3';
export default class BrandsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getBrands(query?: BrandsV3ApiSpecs.GetBrandsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<BrandsV3ApiSpecs.GetBrandsResponse, BrandsV3ApiSpecs.GetBrandsError>>;
    createBrand(requestBody: BrandsV3ApiSpecs.CreateBrandData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<BrandsV3ApiSpecs.CreateBrandResponse, BrandsV3ApiSpecs.CreateBrandError>>;
    deleteBrands(query?: BrandsV3ApiSpecs.DeleteBrandsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, BrandsV3ApiSpecs.DeleteBrandsError>>;
    getBrand(brandId: BrandsV3ApiSpecs.GetBrandData['path']['brand_id'], query?: BrandsV3ApiSpecs.GetBrandData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<BrandsV3ApiSpecs.GetBrandResponse, BrandsV3ApiSpecs.GetBrandError>>;
    updateBrand(brandId: BrandsV3ApiSpecs.UpdateBrandData['path']['brand_id'], requestBody: BrandsV3ApiSpecs.UpdateBrandData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<BrandsV3ApiSpecs.UpdateBrandResponse, BrandsV3ApiSpecs.UpdateBrandError>>;
    deleteBrand(brandId: BrandsV3ApiSpecs.DeleteBrandData['path']['brand_id']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, BrandsV3ApiSpecs.DeleteBrandError>>;
    getBrandMetafields(brandId: BrandsV3ApiSpecs.GetBrandMetafieldsData['path']['brand_id'], query?: BrandsV3ApiSpecs.GetBrandMetafieldsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<BrandsV3ApiSpecs.GetBrandMetafieldsResponse, any>>;
    createBrandMetafield(brandId: BrandsV3ApiSpecs.CreateBrandMetafieldData['path']['brand_id'], requestBody: BrandsV3ApiSpecs.CreateBrandMetafieldData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<BrandsV3ApiSpecs.CreateBrandMetafieldResponse, BrandsV3ApiSpecs.CreateBrandMetafieldError>>;
    getBrandMetafield(brandId: BrandsV3ApiSpecs.GetBrandMetafieldData['path']['brand_id'], metafieldId: BrandsV3ApiSpecs.GetBrandMetafieldData['path']['metafield_id'], query?: BrandsV3ApiSpecs.GetBrandMetafieldData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<BrandsV3ApiSpecs.GetBrandMetafieldResponse, BrandsV3ApiSpecs.GetBrandMetafieldError>>;
    updateBrandMetafield(brandId: BrandsV3ApiSpecs.UpdateBrandMetafieldData['path']['brand_id'], metafieldId: BrandsV3ApiSpecs.UpdateBrandMetafieldData['path']['metafield_id'], requestBody: BrandsV3ApiSpecs.UpdateBrandMetafieldData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<BrandsV3ApiSpecs.UpdateBrandMetafieldResponse, BrandsV3ApiSpecs.UpdateBrandMetafieldError>>;
    deleteBrandMetafield(brandId: BrandsV3ApiSpecs.DeleteBrandMetafieldData['path']['brand_id'], metafieldId: BrandsV3ApiSpecs.DeleteBrandMetafieldData['path']['metafield_id']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, BrandsV3ApiSpecs.DeleteBrandMetafieldError>>;
    createBrandImage(brandId: BrandsV3ApiSpecs.CreateBrandImageData['path']['brand_id'], requestBody: BrandsV3ApiSpecs.CreateBrandImageData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<BrandsV3ApiSpecs.CreateBrandImageResponse, BrandsV3ApiSpecs.CreateBrandImageError>>;
    deleteBrandImage(brandId: BrandsV3ApiSpecs.DeleteBrandImageData['path']['brand_id']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getBrandsMetafields(query?: BrandsV3ApiSpecs.GetBrandsMetafieldsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<BrandsV3ApiSpecs.MetaFieldCollectionResponse, BrandsV3ApiSpecs.GetBrandsMetafieldsError>>;
    createBrandsMetafields(requestBody: BrandsV3ApiSpecs.CreateBrandsMetafieldsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<BrandsV3ApiSpecs.MetaFieldCollectionResponse_POST_PUT, BrandsV3ApiSpecs.CreateBrandsMetafieldsError>>;
    updateBrandsMetafields(requestBody: BrandsV3ApiSpecs.UpdateBrandsMetafieldsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<BrandsV3ApiSpecs.MetaFieldCollectionResponse_POST_PUT, BrandsV3ApiSpecs.UpdateBrandsMetafieldsError>>;
    deleteBrandsMetafields(requestBody: BrandsV3ApiSpecs.DeleteBrandsMetafieldsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<BrandsV3ApiSpecs.MetaFieldCollectionDeleteResponseSuccess, BrandsV3ApiSpecs.DeleteBrandsMetafieldsError>>;
}