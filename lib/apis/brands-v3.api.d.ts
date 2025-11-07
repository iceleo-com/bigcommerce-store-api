import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as BrandsV3ApiSpecs from '../generated/brands-v3';
export * as BrandsV3ApiSpecs from '../generated/brands-v3';
export declare class BrandsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getBrands(query?: BrandsV3ApiSpecs.GetBrandsData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<BrandsV3ApiSpecs.BrandFull>;
        meta?: BrandsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<401, string> | RequestErrorResponse<403, Required<BrandsV3ApiSpecs.ErrorBase>>>;
    createBrand(requestBody: BrandsV3ApiSpecs.CreateBrandData['body']): Promise<RequestErrorResponse<401, string> | RequestErrorResponse<403, Required<BrandsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
        data?: {
            readonly id?: number;
            name?: string;
            page_title?: string;
            meta_keywords?: Array<string>;
            meta_description?: string;
            search_keywords?: string;
            image_url?: string;
            custom_url?: {
                url?: string;
                is_customized?: boolean;
            };
        };
        meta?: BrandsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestSuccessResponse<207, Required<{
        data?: Array<BrandsV3ApiSpecs.BrandFull>;
        errors?: BrandsV3ApiSpecs._Error;
        meta?: BrandsV3ApiSpecs.WriteCollectionSuccessMeta;
    }>> | RequestErrorResponse<404, Required<BrandsV3ApiSpecs.NotFoundError>> | RequestErrorResponse<409, Required<{
        errors?: {
            [key: string]: unknown;
        };
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    deleteBrands(query?: BrandsV3ApiSpecs.DeleteBrandsData['query']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<401, string> | RequestErrorResponse<403, Required<BrandsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<422, Required<BrandsV3ApiSpecs.ErrorBase>>>;
    getBrand(brandId: BrandsV3ApiSpecs.GetBrandData['path']['brand_id'], query?: BrandsV3ApiSpecs.GetBrandData['query']): Promise<RequestErrorResponse<401, string> | RequestErrorResponse<403, Required<BrandsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
        data?: BrandsV3ApiSpecs.BrandFull;
        meta?: BrandsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestSuccessResponse<207, Required<{
        data?: Array<BrandsV3ApiSpecs.BrandFull>;
        errors?: BrandsV3ApiSpecs._Error;
        meta?: BrandsV3ApiSpecs.WriteCollectionSuccessMeta;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>> | RequestErrorResponse<409, Required<BrandsV3ApiSpecs.Conflict>> | RequestErrorResponse<422, Required<BrandsV3ApiSpecs._Error>>>;
    updateBrand(brandId: BrandsV3ApiSpecs.UpdateBrandData['path']['brand_id'], requestBody: BrandsV3ApiSpecs.UpdateBrandData['body']): Promise<RequestErrorResponse<401, string> | RequestErrorResponse<403, Required<BrandsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
        data?: {
            readonly id?: number;
            name: string;
            page_title?: string;
            meta_keywords?: Array<string>;
            meta_description?: string;
            search_keywords?: string;
            image_url?: string;
            custom_url?: {
                url?: string;
                is_customized?: boolean;
            };
        };
        meta?: BrandsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestSuccessResponse<207, Required<{
        data?: Array<BrandsV3ApiSpecs.BrandFull>;
        errors?: BrandsV3ApiSpecs._Error;
        meta?: BrandsV3ApiSpecs.WriteCollectionSuccessMeta;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<409, Required<{
        errors?: {
            [key: string]: unknown;
        };
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    deleteBrand(brandId: BrandsV3ApiSpecs.DeleteBrandData['path']['brand_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<401, string> | RequestErrorResponse<403, Required<BrandsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<404, Required<BrandsV3ApiSpecs.NotFoundError>>>;
    getBrandMetafields(brandId: BrandsV3ApiSpecs.GetBrandMetafieldsData['path']['brand_id'], query?: BrandsV3ApiSpecs.GetBrandMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<BrandsV3ApiSpecs.MetafieldFull>;
        meta?: BrandsV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createBrandMetafield(brandId: BrandsV3ApiSpecs.CreateBrandMetafieldData['path']['brand_id'], requestBody: BrandsV3ApiSpecs.CreateBrandMetafieldData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: BrandsV3ApiSpecs.MetafieldFull;
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<409, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    getBrandMetafield(brandId: BrandsV3ApiSpecs.GetBrandMetafieldData['path']['brand_id'], metafieldId: BrandsV3ApiSpecs.GetBrandMetafieldData['path']['metafield_id'], query?: BrandsV3ApiSpecs.GetBrandMetafieldData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: BrandsV3ApiSpecs.MetafieldFull;
        meta?: BrandsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateBrandMetafield(brandId: BrandsV3ApiSpecs.UpdateBrandMetafieldData['path']['brand_id'], metafieldId: BrandsV3ApiSpecs.UpdateBrandMetafieldData['path']['metafield_id'], requestBody: BrandsV3ApiSpecs.UpdateBrandMetafieldData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: BrandsV3ApiSpecs.MetafieldFull;
        meta?: BrandsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    deleteBrandMetafield(brandId: BrandsV3ApiSpecs.DeleteBrandMetafieldData['path']['brand_id'], metafieldId: BrandsV3ApiSpecs.DeleteBrandMetafieldData['path']['metafield_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    createBrandImage(brandId: BrandsV3ApiSpecs.CreateBrandImageData['path']['brand_id'], requestBody: BrandsV3ApiSpecs.CreateBrandImageData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: {
            image_url?: string;
        };
        meta?: BrandsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<400, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>> | RequestErrorResponse<422, Required<{
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    }>>>;
    deleteBrandImage(brandId: BrandsV3ApiSpecs.DeleteBrandImageData['path']['brand_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getBrandsMetafields(query?: BrandsV3ApiSpecs.GetBrandsMetafieldsData['query']): Promise<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.MetaFieldCollectionResponse>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        errors?: unknown;
    }>>>;
    createBrandsMetafields(requestBody: BrandsV3ApiSpecs.CreateBrandsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.MetaFieldCollectionResponsePostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<BrandsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>>>;
    updateBrandsMetafields(requestBody: BrandsV3ApiSpecs.UpdateBrandsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.MetaFieldCollectionResponsePostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        errors?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<422, Required<{
        status?: number;
        title?: string;
        type?: string;
        errors?: {
            [key: string]: unknown;
        };
    }>>>;
    deleteBrandsMetafields(requestBody: BrandsV3ApiSpecs.DeleteBrandsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<BrandsV3ApiSpecs.MetaFieldCollectionDeleteResponseSuccess>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<BrandsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessDelete>>>;
}
