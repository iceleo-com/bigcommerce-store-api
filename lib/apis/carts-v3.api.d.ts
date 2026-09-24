import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CartsV3ApiSpecs from '../generated/carts-v3';
export * as CartsV3ApiSpecs from '../generated/carts-v3';
export declare class CartsV3Api {
    private readonly request;
    constructor(request: RequestService);
    createAcart(requestBody: CartsV3ApiSpecs.CreateACartData['body'], query?: CartsV3ApiSpecs.CreateACartData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<CartsV3ApiSpecs.CartFull>>>;
    createCart(...args: Parameters<CartsV3Api['createAcart']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<CartsV3ApiSpecs.CartFull>>>;
    addCartLineItem(cartId: CartsV3ApiSpecs.AddCartLineItemData['path']['cartId'], requestBody: CartsV3ApiSpecs.AddCartLineItemData['body'], query?: CartsV3ApiSpecs.AddCartLineItemData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<CartsV3ApiSpecs.CartFull>>>;
    addCartLineItems(...args: Parameters<CartsV3Api['addCartLineItem']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<CartsV3ApiSpecs.CartFull>>>;
    createCartRedirectUrl(cartId: CartsV3ApiSpecs.CreateCartRedirectUrlData['path']['cartId']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<{
        data?: {
            cart_url?: string;
            checkout_url?: string;
            embedded_checkout_url?: string;
        };
        meta?: CartsV3ApiSpecs.MetaCollectionOpen;
    }>>>;
    updateCartLineItem(cartId: CartsV3ApiSpecs.UpdateCartLineItemData['path']['cartId'], itemId: CartsV3ApiSpecs.UpdateCartLineItemData['path']['itemId'], requestBody: CartsV3ApiSpecs.UpdateCartLineItemData['body'], query?: CartsV3ApiSpecs.UpdateCartLineItemData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CartsV3ApiSpecs.CartFull>>>;
    deleteCartLineItem(cartId: CartsV3ApiSpecs.DeleteCartLineItemData['path']['cartId'], itemId: CartsV3ApiSpecs.DeleteCartLineItemData['path']['itemId'], query?: CartsV3ApiSpecs.DeleteCartLineItemData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void> | RequestSuccessResponse<200, Required<CartsV3ApiSpecs.CartFull>>>;
    getAcart(cartId: CartsV3ApiSpecs.GetACartData['path']['cartId'], query?: CartsV3ApiSpecs.GetACartData['query']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestSuccessResponse<200, Required<CartsV3ApiSpecs.CartFull>>>;
    getCart(...args: Parameters<CartsV3Api['getAcart']>): Promise<RequestErrorResponse<404, Required<unknown>> | RequestSuccessResponse<200, Required<CartsV3ApiSpecs.CartFull>>>;
    updateAcart(cartId: CartsV3ApiSpecs.UpdateACartData['path']['cartId'], requestBody: CartsV3ApiSpecs.UpdateACartData['body'], query?: CartsV3ApiSpecs.UpdateACartData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<CartsV3ApiSpecs.CartFull>>>;
    updateCart(...args: Parameters<CartsV3Api['updateAcart']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<CartsV3ApiSpecs.CartFull>>>;
    deleteAcart(cartId: CartsV3ApiSpecs.DeleteACartData['path']['cartId']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteCart(...args: Parameters<CartsV3Api['deleteAcart']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getGlobalCartSettings(): Promise<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.GlobalCartSettingsResponse>> | RequestErrorResponse<401, Required<CartsV3ApiSpecs.ErrorResponse>>>;
    updateGlobalCartSettings(requestBody: CartsV3ApiSpecs.UpdateGlobalCartSettingsData['body']): Promise<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.GlobalCartSettingsResponse>> | RequestErrorResponse<401, Required<CartsV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<CartsV3ApiSpecs.ErrorResponse>>>;
    getChannelCartSettings(channelId: CartsV3ApiSpecs.GetChannelCartSettingsData['path']['channel_id']): Promise<RequestErrorResponse<401, Required<CartsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CartsV3ApiSpecs.ChannelCartSettingsResponse>>>;
    updateChannelCartSettings(channelId: CartsV3ApiSpecs.UpdateChannelCartSettingsData['path']['channel_id'], requestBody: CartsV3ApiSpecs.UpdateChannelCartSettingsData['body']): Promise<RequestErrorResponse<401, Required<CartsV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<422, Required<CartsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CartsV3ApiSpecs.ChannelCartSettingsResponse>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    getAllCartMetafields(cartId: CartsV3ApiSpecs.GetAllCartMetafieldsData['path']['cart_id'], query?: CartsV3ApiSpecs.GetAllCartMetafieldsData['query']): Promise<RequestErrorResponse<422, Required<CartsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CartsV3ApiSpecs.MetafieldResponse>> | RequestErrorResponse<409, Required<CartsV3ApiSpecs.ErrorResponse>>>;
    getCartMetafields(...args: Parameters<CartsV3Api['getAllCartMetafields']>): Promise<RequestErrorResponse<422, Required<CartsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CartsV3ApiSpecs.MetafieldResponse>> | RequestErrorResponse<409, Required<CartsV3ApiSpecs.ErrorResponse>>>;
    createCartMetafieldsByCartId(cartId: CartsV3ApiSpecs.CreateCartMetafieldsByCartIdData['path']['cart_id'], requestBody: CartsV3ApiSpecs.CreateCartMetafieldsByCartIdData['body']): Promise<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.MetaFieldCollectionResponse>> | RequestErrorResponse<404, Required<CartsV3ApiSpecs.NotFound>>>;
    createCartMetafield(...args: Parameters<CartsV3Api['createCartMetafieldsByCartId']>): Promise<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.MetaFieldCollectionResponse>> | RequestErrorResponse<404, Required<CartsV3ApiSpecs.NotFound>>>;
    getAcartMetafield(cartId: CartsV3ApiSpecs.GetACartMetafieldData['path']['cart_id'], metafieldId: CartsV3ApiSpecs.GetACartMetafieldData['path']['metafield_id'], query?: CartsV3ApiSpecs.GetACartMetafieldData['query']): Promise<RequestErrorResponse<422, Required<CartsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CartsV3ApiSpecs.MetafieldResponse>> | RequestErrorResponse<409, Required<CartsV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<500, Required<unknown>>>;
    getCartMetafield(...args: Parameters<CartsV3Api['getAcartMetafield']>): Promise<RequestErrorResponse<422, Required<CartsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CartsV3ApiSpecs.MetafieldResponse>> | RequestErrorResponse<409, Required<CartsV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<500, Required<unknown>>>;
    updateCartMetafieldsByCartId(cartId: CartsV3ApiSpecs.UpdateCartMetafieldsByCartIdData['path']['cart_id'], metafieldId: CartsV3ApiSpecs.UpdateCartMetafieldsByCartIdData['path']['metafield_id'], requestBody: CartsV3ApiSpecs.UpdateCartMetafieldsByCartIdData['body']): Promise<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.MetaFieldCollectionResponse>> | RequestErrorResponse<404, Required<CartsV3ApiSpecs.NotFound>>>;
    updateCartMetafield(...args: Parameters<CartsV3Api['updateCartMetafieldsByCartId']>): Promise<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.MetaFieldCollectionResponse>> | RequestErrorResponse<404, Required<CartsV3ApiSpecs.NotFound>>>;
    deleteCartMetafieldById(cartId: CartsV3ApiSpecs.DeleteCartMetafieldByIdData['path']['cart_id'], metafieldId: CartsV3ApiSpecs.DeleteCartMetafieldByIdData['path']['metafield_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteCartMetafield(...args: Parameters<CartsV3Api['deleteCartMetafieldById']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
}
