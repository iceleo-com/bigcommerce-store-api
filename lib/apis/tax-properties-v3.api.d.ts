import RequestService from '../helpers/request/request-service';
import * as TaxPropertiesV3ApiSpecs from '../generated/tax-properties-v3';
export default class TaxPropertiesV3Api {
    private readonly request;
    constructor(request: RequestService);
    getTaxProperties(query?: TaxPropertiesV3ApiSpecs.GetTaxPropertiesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<TaxPropertiesV3ApiSpecs.GetTaxPropertiesResponse, unknown>>;
    createTaxProperties(requestBody: TaxPropertiesV3ApiSpecs.CreateTaxPropertiesData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<TaxPropertiesV3ApiSpecs.CreateTaxPropertiesResponse, unknown>>;
    updateTaxProperties(requestBody: TaxPropertiesV3ApiSpecs.UpdateTaxPropertiesData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<TaxPropertiesV3ApiSpecs.UpdateTaxPropertiesResponse, unknown>>;
    deleteTaxProperties(query?: TaxPropertiesV3ApiSpecs.DeleteTaxPropertiesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, unknown>>;
    getProductsTaxProperties(query?: TaxPropertiesV3ApiSpecs.GetProductsTaxPropertiesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<TaxPropertiesV3ApiSpecs.GetProductsTaxPropertiesResponse, unknown>>;
    updateProductTaxProperties(requestBody: TaxPropertiesV3ApiSpecs.UpdateProductTaxPropertiesData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<TaxPropertiesV3ApiSpecs.UpdateProductTaxPropertiesResponse, unknown>>;
    deleteProductTaxProperties(query?: TaxPropertiesV3ApiSpecs.DeleteProductTaxPropertiesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, unknown>>;
}
