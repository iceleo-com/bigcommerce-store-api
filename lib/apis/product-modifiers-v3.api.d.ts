import RequestService from '../helpers/request/request-service';
import * as ProductModifiersV3ApiSpecs from '../generated/product-modifiers-v3';
export default class ProductModifiersV3Api {
    private readonly request;
    constructor(request: RequestService);
    getProductModifiers(productId: ProductModifiersV3ApiSpecs.GetProductModifiersData['path']['product_id'], query?: ProductModifiersV3ApiSpecs.GetProductModifiersData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<ProductModifiersV3ApiSpecs.GetProductModifiersResponse, any>>;
    createProductModifier(productId: ProductModifiersV3ApiSpecs.CreateProductModifierData['path']['product_id'], requestBody: ProductModifiersV3ApiSpecs.CreateProductModifierData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<ProductModifiersV3ApiSpecs.CreateProductModifierResponse, ProductModifiersV3ApiSpecs.CreateProductModifierError>>;
    getProductModifier(productId: ProductModifiersV3ApiSpecs.GetProductModifierData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.GetProductModifierData['path']['modifier_id'], query?: ProductModifiersV3ApiSpecs.GetProductModifierData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<ProductModifiersV3ApiSpecs.GetProductModifierResponse, ProductModifiersV3ApiSpecs.GetProductModifierError>>;
    updateProductModifier(productId: ProductModifiersV3ApiSpecs.UpdateProductModifierData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.UpdateProductModifierData['path']['modifier_id'], requestBody: ProductModifiersV3ApiSpecs.UpdateProductModifierData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<ProductModifiersV3ApiSpecs.UpdateProductModifierResponse, ProductModifiersV3ApiSpecs.UpdateProductModifierError>>;
    deleteProductModifier(productId: ProductModifiersV3ApiSpecs.DeleteProductModifierData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.DeleteProductModifierData['path']['modifier_id']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getProductModifierValues(productId: ProductModifiersV3ApiSpecs.GetProductModifierValuesData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.GetProductModifierValuesData['path']['modifier_id'], query?: ProductModifiersV3ApiSpecs.GetProductModifierValuesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<ProductModifiersV3ApiSpecs.GetProductModifierValuesResponse, any>>;
    createProductModifierValue(productId: ProductModifiersV3ApiSpecs.CreateProductModifierValueData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.CreateProductModifierValueData['path']['modifier_id'], requestBody: ProductModifiersV3ApiSpecs.CreateProductModifierValueData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<ProductModifiersV3ApiSpecs.CreateProductModifierValueResponse, ProductModifiersV3ApiSpecs.CreateProductModifierValueError>>;
    getProductModifierValue(productId: ProductModifiersV3ApiSpecs.GetProductModifierValueData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.GetProductModifierValueData['path']['modifier_id'], valueId: ProductModifiersV3ApiSpecs.GetProductModifierValueData['path']['value_id'], query?: ProductModifiersV3ApiSpecs.GetProductModifierValueData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<ProductModifiersV3ApiSpecs.GetProductModifierValueResponse, ProductModifiersV3ApiSpecs.GetProductModifierValueError>>;
    updateProductModifierValue(productId: ProductModifiersV3ApiSpecs.UpdateProductModifierValueData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.UpdateProductModifierValueData['path']['modifier_id'], valueId: ProductModifiersV3ApiSpecs.UpdateProductModifierValueData['path']['value_id'], requestBody: ProductModifiersV3ApiSpecs.UpdateProductModifierValueData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<ProductModifiersV3ApiSpecs.UpdateProductModifierValueResponse, ProductModifiersV3ApiSpecs.UpdateProductModifierValueError>>;
    deleteProductModifierValue(productId: ProductModifiersV3ApiSpecs.DeleteProductModifierValueData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.DeleteProductModifierValueData['path']['modifier_id'], valueId: ProductModifiersV3ApiSpecs.DeleteProductModifierValueData['path']['value_id']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    createProductModifierImage(productId: ProductModifiersV3ApiSpecs.CreateProductModifierImageData['path']['product_id'], modifierId: ProductModifiersV3ApiSpecs.CreateProductModifierImageData['path']['modifier_id'], valueId: ProductModifiersV3ApiSpecs.CreateProductModifierImageData['path']['value_id'], requestBody: ProductModifiersV3ApiSpecs.CreateProductModifierImageData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<ProductModifiersV3ApiSpecs.CreateProductModifierImageResponse, ProductModifiersV3ApiSpecs.CreateProductModifierImageError>>;
}
