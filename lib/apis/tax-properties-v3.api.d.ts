import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as TaxPropertiesV3ApiSpecs from '../generated/tax-properties-v3';
export * as TaxPropertiesV3ApiSpecs from '../generated/tax-properties-v3';
export declare class TaxPropertiesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getTaxProperties(query?: TaxPropertiesV3ApiSpecs.GetTaxPropertiesData['query']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestSuccessResponse<200, Required<TaxPropertiesV3ApiSpecs.TaxPropertiesGetTaxPropertiesResponse200>>>;
    createTaxProperties(requestBody: TaxPropertiesV3ApiSpecs.CreateTaxPropertiesData['body']): Promise<RequestErrorResponse<422, Required<unknown>> | RequestSuccessResponse<200, Required<TaxPropertiesV3ApiSpecs.TaxPropertiesCreateTaxPropertiesResponse200>>>;
    updateTaxProperties(requestBody: TaxPropertiesV3ApiSpecs.UpdateTaxPropertiesData['body']): Promise<RequestErrorResponse<422, Required<unknown>> | RequestSuccessResponse<200, Required<TaxPropertiesV3ApiSpecs.TaxPropertiesUpdateTaxPropertiesResponse200>>>;
    deleteTaxProperties(query?: TaxPropertiesV3ApiSpecs.DeleteTaxPropertiesData['query']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestErrorResponse<409, Required<unknown>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getProductsTaxProperties(query?: TaxPropertiesV3ApiSpecs.GetProductsTaxPropertiesData['query']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestSuccessResponse<200, Required<TaxPropertiesV3ApiSpecs.ProductTaxPropertiesGetProductsTaxPropertiesResponse200>>>;
    updateProductTaxProperties(requestBody: TaxPropertiesV3ApiSpecs.UpdateProductTaxPropertiesData['body']): Promise<RequestErrorResponse<422, Required<unknown>> | RequestSuccessResponse<200, Required<TaxPropertiesV3ApiSpecs.ProductTaxPropertiesUpdateProductTaxPropertiesResponse200>>>;
    deleteProductTaxProperties(query?: TaxPropertiesV3ApiSpecs.DeleteProductTaxPropertiesData['query']): Promise<RequestErrorResponse<400, Required<unknown>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
}
