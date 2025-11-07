import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CartsV3ApiSpecs from '../generated/carts-v3';
export * as CartsV3ApiSpecs from '../generated/carts-v3';
export declare class CartsV3Api {
    private readonly request;
    constructor(request: RequestService);
    createCart(requestBody: CartsV3ApiSpecs.CreateCartData['body'], query?: CartsV3ApiSpecs.CreateCartData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<{
        data?: CartsV3ApiSpecs.CartFull;
        meta?: CartsV3ApiSpecs.MetaCollectionOpen;
    }>>>;
    addCartLineItems(cartId: CartsV3ApiSpecs.AddCartLineItemsData['path']['cartId'], requestBody: CartsV3ApiSpecs.AddCartLineItemsData['body'], query?: CartsV3ApiSpecs.AddCartLineItemsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<{
        data?: CartsV3ApiSpecs.CartFull;
        meta?: CartsV3ApiSpecs.MetaCollectionOpen;
    }>>>;
    createCartRedirectUrl(cartId: CartsV3ApiSpecs.CreateCartRedirectUrlData['path']['cartId'], requestBody: CartsV3ApiSpecs.CreateCartRedirectUrlData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<{
        data?: {
            cart_url?: string;
            checkout_url?: string;
            embedded_checkout_url?: string;
        };
        meta?: CartsV3ApiSpecs.MetaCollectionOpen;
    }>>>;
    updateCartLineItem(cartId: CartsV3ApiSpecs.UpdateCartLineItemData['path']['cartId'], itemId: CartsV3ApiSpecs.UpdateCartLineItemData['path']['itemId'], requestBody: CartsV3ApiSpecs.UpdateCartLineItemData['body'], query?: CartsV3ApiSpecs.UpdateCartLineItemData['query']): Promise<RequestSuccessResponse<200, Required<{
        data?: CartsV3ApiSpecs.CartFull;
        meta?: CartsV3ApiSpecs.MetaCollectionOpen;
    }>> | RequestErrorResponse<409, Required<CartsV3ApiSpecs.ErrorResponse>>>;
    deleteCartLineItem(cartId: CartsV3ApiSpecs.DeleteCartLineItemData['path']['cartId'], itemId: CartsV3ApiSpecs.DeleteCartLineItemData['path']['itemId'], requestBody: CartsV3ApiSpecs.DeleteCartLineItemData['body'], query?: CartsV3ApiSpecs.DeleteCartLineItemData['query']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<409, Required<CartsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CartsV3ApiSpecs.CartFull>>>;
    getCart(cartId: CartsV3ApiSpecs.GetCartData['path']['cartId'], query?: CartsV3ApiSpecs.GetCartData['query']): Promise<RequestErrorResponse<404, Required<unknown>> | RequestSuccessResponse<200, Required<{
        data?: CartsV3ApiSpecs.CartFull;
        meta?: CartsV3ApiSpecs.MetaCollectionOpen;
    }>>>;
    updateCart(cartId: CartsV3ApiSpecs.UpdateCartData['path']['cartId'], requestBody: CartsV3ApiSpecs.UpdateCartData['body'], query?: CartsV3ApiSpecs.UpdateCartData['query']): Promise<RequestErrorResponse<409, Required<CartsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<201, Required<{
        data?: CartsV3ApiSpecs.CartFull;
        meta?: CartsV3ApiSpecs.MetaCollectionOpen;
    }>>>;
    deleteCart(cartId: CartsV3ApiSpecs.DeleteCartData['path']['cartId']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
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
    getCartMetafields(cartId: CartsV3ApiSpecs.GetCartMetafieldsData['path']['cart_id'], query?: CartsV3ApiSpecs.GetCartMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CartsV3ApiSpecs.MetafieldResponse>>>;
    createCartMetafield(cartId: CartsV3ApiSpecs.CreateCartMetafieldData['path']['cart_id'], requestBody: CartsV3ApiSpecs.CreateCartMetafieldData['body']): Promise<RequestErrorResponse<409, Required<CartsV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<422, Required<CartsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<CartsV3ApiSpecs.MetaFieldCollectionResponse>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    getCartMetafield(cartId: CartsV3ApiSpecs.GetCartMetafieldData['path']['cart_id'], metafieldId: CartsV3ApiSpecs.GetCartMetafieldData['path']['metafield_id'], query?: CartsV3ApiSpecs.GetCartMetafieldData['query']): Promise<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.MetafieldResponse>> | RequestErrorResponse<404, Required<CartsV3ApiSpecs.NotFound>>>;
    updateCartMetafield(cartId: CartsV3ApiSpecs.UpdateCartMetafieldData['path']['cart_id'], metafieldId: CartsV3ApiSpecs.UpdateCartMetafieldData['path']['metafield_id'], requestBody: CartsV3ApiSpecs.UpdateCartMetafieldData['body']): Promise<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.MetaFieldCollectionResponse>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<CartsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>>>;
    deleteCartMetafield(cartId: CartsV3ApiSpecs.DeleteCartMetafieldData['path']['cart_id'], metafieldId: CartsV3ApiSpecs.DeleteCartMetafieldData['path']['metafield_id']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<404, Required<CartsV3ApiSpecs.NotFound>>>;
    getCartsMetafields(query?: CartsV3ApiSpecs.GetCartsMetafieldsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<CartsV3ApiSpecs.MetaFieldCollectionResponseBatch>>>;
    createCartsMetafields(requestBody: CartsV3ApiSpecs.CreateCartsMetafieldsData['body']): Promise<RequestErrorResponse<422, Required<CartsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>> | RequestSuccessResponse<200, Required<CartsV3ApiSpecs.MetaFieldCollectionResponseBatchPostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    updateCartsMetafields(requestBody: CartsV3ApiSpecs.UpdateCartsMetafieldsData['body']): Promise<RequestErrorResponse<422, Required<CartsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessPostPut>> | RequestSuccessResponse<200, Required<CartsV3ApiSpecs.MetaFieldCollectionResponseBatchPostPut>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>>>;
    deleteCartsMetafields(requestBody: CartsV3ApiSpecs.DeleteCartsMetafieldsData['body']): Promise<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.MetaFieldCollectionDeleteResponseSuccess>> | RequestErrorResponse<400, Required<{
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    }>> | RequestErrorResponse<422, Required<CartsV3ApiSpecs.MetaFieldCollectionResponsePartialSuccessDelete>>>;
}
