import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as BrandsV3ApiSpecs from '../generated/brands-v3';
export * as BrandsV3ApiSpecs from '../generated/brands-v3';
export declare class BrandsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getBrands(query?: BrandsV3ApiSpecs.GetBrandsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<BrandsV3ApiSpecs.BrandFull>;
        meta?: BrandsV3ApiSpecs.MetaCollectionFull;
    }>>>;
    createBrand(requestBody: BrandsV3ApiSpecs.CreateBrandData['body']): Promise<RequestSuccessResponse<200, Required<{
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
    }>> | RequestSuccessResponse<207, Required<BrandsV3ApiSpecs.ErrorBase>> | RequestErrorResponse<409, Required<{
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
    deleteBrands(query?: BrandsV3ApiSpecs.DeleteBrandsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getBrandById(brandId: BrandsV3ApiSpecs.GetBrandByIdData['path']['brand_id'], query?: BrandsV3ApiSpecs.GetBrandByIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: BrandsV3ApiSpecs.BrandFull;
        meta?: BrandsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getBrand(...args: Parameters<BrandsV3Api['getBrandById']>): Promise<RequestSuccessResponse<200, Required<{
        data?: BrandsV3ApiSpecs.BrandFull;
        meta?: BrandsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    updateBrand(brandId: BrandsV3ApiSpecs.UpdateBrandData['path']['brand_id'], requestBody: BrandsV3ApiSpecs.UpdateBrandData['body']): Promise<RequestSuccessResponse<207, Required<BrandsV3ApiSpecs.ErrorBase>> | RequestSuccessResponse<200, Required<{
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
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
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
    deleteBrandById(brandId: BrandsV3ApiSpecs.DeleteBrandByIdData['path']['brand_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteBrand(...args: Parameters<BrandsV3Api['deleteBrandById']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getBrandMetafieldsByBrandId(brandId: BrandsV3ApiSpecs.GetBrandMetafieldsByBrandIdData['path']['brand_id'], query?: BrandsV3ApiSpecs.GetBrandMetafieldsByBrandIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<BrandsV3ApiSpecs.MetafieldFull>;
        meta?: BrandsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getBrandMetafields(...args: Parameters<BrandsV3Api['getBrandMetafieldsByBrandId']>): Promise<RequestSuccessResponse<200, Required<{
        data?: Array<BrandsV3ApiSpecs.MetafieldFull>;
        meta?: BrandsV3ApiSpecs.MetaCollectionFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    createBrandMetafield(brandId: BrandsV3ApiSpecs.CreateBrandMetafieldData['path']['brand_id'], requestBody: BrandsV3ApiSpecs.CreateBrandMetafieldData['body']): Promise<RequestSuccessResponse<200, Required<{
        data?: BrandsV3ApiSpecs.MetafieldFull;
        meta?: {
            [key: string]: unknown;
        };
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
    getBrandMetafieldByBrandId(brandId: BrandsV3ApiSpecs.GetBrandMetafieldByBrandIdData['path']['brand_id'], metafieldId: BrandsV3ApiSpecs.GetBrandMetafieldByBrandIdData['path']['metafield_id'], query?: BrandsV3ApiSpecs.GetBrandMetafieldByBrandIdData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: BrandsV3ApiSpecs.MetafieldFull;
        meta?: BrandsV3ApiSpecs.MetaEmptyFull;
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    getBrandMetafield(...args: Parameters<BrandsV3Api['getBrandMetafieldByBrandId']>): Promise<RequestSuccessResponse<200, Required<{
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
    }>> | RequestErrorResponse<404, Required<{
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    }>>>;
    deleteBrandMetafieldById(brandId: BrandsV3ApiSpecs.DeleteBrandMetafieldByIdData['path']['brand_id'], metafieldId: BrandsV3ApiSpecs.DeleteBrandMetafieldByIdData['path']['metafield_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteBrandMetafield(...args: Parameters<BrandsV3Api['deleteBrandMetafieldById']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
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
}
