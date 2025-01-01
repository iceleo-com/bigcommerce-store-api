import RequestService from '../helpers/request/request-service';
import * as CartsV3ApiSpecs from '../generated/carts-v3';
export default class CartsV3Api {
    private readonly request;
    constructor(request: RequestService);
    createCart(requestBody: CartsV3ApiSpecs.CreateCartData['body'], query?: CartsV3ApiSpecs.CreateCartData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    addCartLineItems(cartId: CartsV3ApiSpecs.AddCartLineItemsData['path']['cartId'], requestBody: CartsV3ApiSpecs.AddCartLineItemsData['body'], query?: CartsV3ApiSpecs.AddCartLineItemsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    createCartRedirectUrl(cartId: CartsV3ApiSpecs.CreateCartRedirectUrlData['path']['cartId'], requestBody: CartsV3ApiSpecs.CreateCartRedirectUrlData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    updateCartLineItem(cartId: CartsV3ApiSpecs.UpdateCartLineItemData['path']['cartId'], itemId: CartsV3ApiSpecs.UpdateCartLineItemData['path']['itemId'], requestBody: CartsV3ApiSpecs.UpdateCartLineItemData['body'], query?: CartsV3ApiSpecs.UpdateCartLineItemData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, CartsV3ApiSpecs.ErrorResponse>>;
    deleteCartLineItem(cartId: CartsV3ApiSpecs.DeleteCartLineItemData['path']['cartId'], itemId: CartsV3ApiSpecs.DeleteCartLineItemData['path']['itemId'], requestBody: CartsV3ApiSpecs.DeleteCartLineItemData['body'], query?: CartsV3ApiSpecs.DeleteCartLineItemData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<CartsV3ApiSpecs.DeleteCartLineItemResponse, CartsV3ApiSpecs.ErrorResponse>>;
    getCart(cartId: CartsV3ApiSpecs.GetCartData['path']['cartId'], query?: CartsV3ApiSpecs.GetCartData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, unknown>>;
    updateCart(cartId: CartsV3ApiSpecs.UpdateCartData['path']['cartId'], requestBody: CartsV3ApiSpecs.UpdateCartData['body'], query?: CartsV3ApiSpecs.UpdateCartData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, CartsV3ApiSpecs.ErrorResponse>>;
    deleteCart(cartId: CartsV3ApiSpecs.DeleteCartData['path']['cartId']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getGlobalCartSettings(): Promise<import("../helpers/request/request-service.type").RequestResponse<CartsV3ApiSpecs.GlobalCartSettingsResponse, CartsV3ApiSpecs.ErrorResponse>>;
    updateGlobalCartSettings(requestBody: CartsV3ApiSpecs.UpdateGlobalCartSettingsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<CartsV3ApiSpecs.GlobalCartSettingsResponse, CartsV3ApiSpecs.UpdateGlobalCartSettingsError>>;
    getChannelCartSettings(channelId: CartsV3ApiSpecs.GetChannelCartSettingsData['path']['channel_id']): Promise<import("../helpers/request/request-service.type").RequestResponse<CartsV3ApiSpecs.ChannelCartSettingsResponse, CartsV3ApiSpecs.ErrorResponse>>;
    updateChannelCartSettings(channelId: CartsV3ApiSpecs.UpdateChannelCartSettingsData['path']['channel_id'], requestBody: CartsV3ApiSpecs.UpdateChannelCartSettingsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<CartsV3ApiSpecs.ChannelCartSettingsResponse, CartsV3ApiSpecs.UpdateChannelCartSettingsError>>;
    getCartMetafields(cartId: CartsV3ApiSpecs.GetCartMetafieldsData['path']['cart_id'], query?: CartsV3ApiSpecs.GetCartMetafieldsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<CartsV3ApiSpecs.MetafieldResponse, any>>;
    createCartMetafield(cartId: CartsV3ApiSpecs.CreateCartMetafieldData['path']['cart_id'], requestBody: CartsV3ApiSpecs.CreateCartMetafieldData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<CartsV3ApiSpecs.MetaFieldCollectionResponse, CartsV3ApiSpecs.CreateCartMetafieldError>>;
    getCartMetafield(cartId: CartsV3ApiSpecs.GetCartMetafieldData['path']['cart_id'], metafieldId: CartsV3ApiSpecs.GetCartMetafieldData['path']['metafield_id'], query?: CartsV3ApiSpecs.GetCartMetafieldData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<CartsV3ApiSpecs.MetafieldResponse, CartsV3ApiSpecs.NotFound>>;
    updateCartMetafield(cartId: CartsV3ApiSpecs.UpdateCartMetafieldData['path']['cart_id'], metafieldId: CartsV3ApiSpecs.UpdateCartMetafieldData['path']['metafield_id'], requestBody: CartsV3ApiSpecs.UpdateCartMetafieldData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<CartsV3ApiSpecs.MetaFieldCollectionResponse, CartsV3ApiSpecs.UpdateCartMetafieldError>>;
    deleteCartMetafield(cartId: CartsV3ApiSpecs.DeleteCartMetafieldData['path']['cart_id'], metafieldId: CartsV3ApiSpecs.DeleteCartMetafieldData['path']['metafield_id']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, CartsV3ApiSpecs.NotFound>>;
    getCartsMetafields(query?: CartsV3ApiSpecs.GetCartsMetafieldsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<CartsV3ApiSpecs.MetaFieldCollectionResponse_Batch, any>>;
    createCartsMetafields(requestBody: CartsV3ApiSpecs.CreateCartsMetafieldsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<CartsV3ApiSpecs.MetaFieldCollectionResponse_Batch_POST_PUT, CartsV3ApiSpecs.CreateCartsMetafieldsError>>;
    updateCartsMetafields(requestBody: CartsV3ApiSpecs.UpdateCartsMetafieldsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<CartsV3ApiSpecs.MetaFieldCollectionResponse_Batch_POST_PUT, CartsV3ApiSpecs.UpdateCartsMetafieldsError>>;
    deleteCartsMetafields(requestBody: CartsV3ApiSpecs.DeleteCartsMetafieldsData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<CartsV3ApiSpecs.MetaFieldCollectionDeleteResponseSuccess, CartsV3ApiSpecs.DeleteCartsMetafieldsError>>;
}
