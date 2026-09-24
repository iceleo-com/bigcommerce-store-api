import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxPropertiesV3ApiSpecs from '../generated/tax-properties-v3';
export * as TaxPropertiesV3ApiSpecs from '../generated/tax-properties-v3';
export declare class TaxPropertiesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getTaxProperties(query?: TaxPropertiesV3ApiSpecs.GetTaxPropertiesData['query']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestSuccessResponse<200, Required<{
        data?: Array<TaxPropertiesV3ApiSpecs.Property>;
        meta?: TaxPropertiesV3ApiSpecs.MetaOpen;
    }>>>;
    createTaxProperties(requestBody: TaxPropertiesV3ApiSpecs.CreateTaxPropertiesData['body']): Promise<RequestErrorResponse<422, Required<unknown>> | RequestSuccessResponse<200, Required<{
        data?: Array<TaxPropertiesV3ApiSpecs.Property>;
        meta?: TaxPropertiesV3ApiSpecs.MetaOpen;
    }>>>;
    updateTaxProperties(requestBody: TaxPropertiesV3ApiSpecs.UpdateTaxPropertiesData['body']): Promise<RequestErrorResponse<422, Required<unknown>> | RequestSuccessResponse<200, Required<{
        data?: Array<TaxPropertiesV3ApiSpecs.Property>;
        meta?: TaxPropertiesV3ApiSpecs.MetaOpen;
    }>>>;
    deleteTaxProperties(query?: TaxPropertiesV3ApiSpecs.DeleteTaxPropertiesData['query']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<400, Required<unknown>> | RequestErrorResponse<409, Required<unknown>>>;
    getProductTaxProperties(query?: TaxPropertiesV3ApiSpecs.GetProductTaxPropertiesData['query']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestSuccessResponse<200, Required<{
        data?: Array<TaxPropertiesV3ApiSpecs.ProductTaxProperty>;
        meta?: TaxPropertiesV3ApiSpecs.MetaOpen;
    }>>>;
    getProductsTaxProperties(...args: Parameters<TaxPropertiesV3Api['getProductTaxProperties']>): Promise<RequestErrorResponse<400, Required<unknown>> | RequestSuccessResponse<200, Required<{
        data?: Array<TaxPropertiesV3ApiSpecs.ProductTaxProperty>;
        meta?: TaxPropertiesV3ApiSpecs.MetaOpen;
    }>>>;
    updateProductTaxProperties(requestBody: TaxPropertiesV3ApiSpecs.UpdateProductTaxPropertiesData['body']): Promise<RequestErrorResponse<422, Required<unknown>> | RequestSuccessResponse<200, Required<{
        data?: Array<TaxPropertiesV3ApiSpecs.ProductTaxProperty>;
        meta?: TaxPropertiesV3ApiSpecs.MetaOpen;
    }>>>;
    deleteProductTaxProperties(query?: TaxPropertiesV3ApiSpecs.DeleteProductTaxPropertiesData['query']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<400, Required<unknown>>>;
}
