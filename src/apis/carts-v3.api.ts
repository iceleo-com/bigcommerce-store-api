import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as CartsV3ApiSpecs from '../generated/carts-v3';
export * as CartsV3ApiSpecs from '../generated/carts-v3';

export class CartsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Create a Cart
     *
     * Creates a **Cart**. 

     **Required Fields**

     |Field|Details|
     |-|-|
     |`line_item`|Specifies a line item.| 
     |`custom_items`|Specifies a custom item. Only required if adding a custom item to the cart.|
     |`gift_certificates`|Specifies a gift certificate. Only required if adding a gift certificate to the cart.|

     **Usage Notes**

     * A **cart** `id` (UUID) is returned in the response.
     * A **cart** `id` is the same as a **checkout** `id`.
     * A cart can be created by adding an existing **catalog item** or a **custom item**.
     * Carts are valid for **30 days** from the **last modification** (this includes creating the cart or editing the cart).
     * If a product has modifiers, use the `option_selections` array to describe the **modifier** selection(s).
     * The format and data type of a cart’s `option_value` are defined by the `value_data` object of a product’s [variant option value](/docs/rest-catalog/product-variant-options/values), [modifier value](/docs/rest-catalog/product-modifiers/values), or a combination of both.
     * Redirect URLs can only be generated from carts that were created using the **REST Management API**. 
     * To get cart `redirect_urls` in the response, append the following query parameter to the request URL: `include=redirect_urls`. Redirect URLs point to either a shared checkout domain or a channel-specific domain, depending on the storefront configuration.
     * To restore a cart that was created by a shopper or through a Storefront API, first recreate the cart using the **REST Management API**.
     * To get cart `promotions` in the response, append the following query parameter to the request URL: `include=promotions.banners`.
     */
    createAcart(
        requestBody: CartsV3ApiSpecs.CreateACartData['body'],
        query?: CartsV3ApiSpecs.CreateACartData['query'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<CartsV3ApiSpecs.CreateACartResponses[201]>>,RequestErrorResponse<400, void>>({
            path: 'v3/carts',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `createAcart` instead.
     */
    createCart(...args: Parameters<CartsV3Api['createAcart']>) {
        return this.createAcart(...args);
    }

    /**
     * Add Cart Line Items
     *
     * Adds line item to the *Cart*.

     **Usage Notes**

     To add a custom item use `custom_items`. 

     Overriding a product’s `list_price` will make that item ineligible for V3 product level promotions.

     If a product has modifiers, omit the `variant_id` and instead use the `option_selections` array to describe both the **variant** and the **modifier** selections.

     Please note that this API endpoint is not concurrent safe, meaning multiple simultaneous requests could result in unexpected and inconsistent results.
     */
    addCartLineItem(
        cartId: CartsV3ApiSpecs.AddCartLineItemData['path']['cartId'],
        requestBody: CartsV3ApiSpecs.AddCartLineItemData['body'],
        query?: CartsV3ApiSpecs.AddCartLineItemData['query'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<CartsV3ApiSpecs.AddCartLineItemResponses[201]>>,RequestErrorResponse<400, void>>({
            path: `v3/carts/${cartId}/items`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `addCartLineItem` instead.
     */
    addCartLineItems(...args: Parameters<CartsV3Api['addCartLineItem']>) {
        return this.addCartLineItem(...args);
    }

    /**
     * Create Cart Redirect URL
     *
     * Creates a **Cart** redirect URL for redirecting a shopper to an already created cart using the `cartId`.

     **Usage Notes**

     * Redirect URLs can also be created with **Create a Cart** requests by appending `include=redirect_urls`.
     * A **Carts** redirect URL may only be used once.
     * Redirect URLs point to either a shared checkout domain or a channel-specific domain, depending on the storefront configuration.
     * Once a redirect URL has been visited, it will be invalidated and cannot be used again. 
     * If your application requires URLs to be visited more than once, consider generating a fresh one each time you need to restore a cart, and redirecting to the URL from your own application.
     * Redirect URLs can be generated only from carts that were created using the **REST Management API**. 
     * To restore a cart that was created on the storefront, either by a shopper or a Storefront API, first recreate the cart using the **REST Management API**.
     */
    createCartRedirectUrl(
        cartId: CartsV3ApiSpecs.CreateCartRedirectUrlData['path']['cartId'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<CartsV3ApiSpecs.CreateCartRedirectUrlResponses[201]>>,RequestErrorResponse<400, void>>({
            path: `v3/carts/${cartId}/redirect_urls`,
        });
    }

    /**
     * Update Cart Line Item
     *
     * Updates an existing, single line item in the *Cart*. 

     **Notes**

     Currently, only updating `list_price` and `quantity` are supported. Updating a product’s `list_price` will make that item ineligible for V3 product-level promotions. 

     If the product has modifiers, omit the `variant_id` and instead use the `option_selections` array to describe both the **variant** and the **modifier** selections.

     If a variant needs to be changed or updated, the product will need to be removed and re-added to the cart with the correct variants using the **Add Cart Line Items** endpoint.

     `custom_items` cannot be updated via the API at this time. To update your cart, add a new updated custom item and delete the outdated one. If your cart contains only one line item, perform the add operation before the delete operation.

     Deleting all line items from the cart will invalidate the cart. 

     Please note that this API endpoint is not concurrent safe, meaning multiple simultaneous requests could result in unexpected and inconsistent results.
     */
    updateCartLineItem(
        cartId: CartsV3ApiSpecs.UpdateCartLineItemData['path']['cartId'],
        itemId: CartsV3ApiSpecs.UpdateCartLineItemData['path']['itemId'],
        requestBody: CartsV3ApiSpecs.UpdateCartLineItemData['body'],
        query?: CartsV3ApiSpecs.UpdateCartLineItemData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.UpdateCartLineItemResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/carts/${cartId}/items/${itemId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Delete Cart Line Item
     *
     * Deletes a *Cart* line item. 

     **Notes**

     Removing the last `line_item` in the *Cart* deletes the *Cart*.
     */
    deleteCartLineItem(
        cartId: CartsV3ApiSpecs.DeleteCartLineItemData['path']['cartId'],
        itemId: CartsV3ApiSpecs.DeleteCartLineItemData['path']['itemId'],
        query?: CartsV3ApiSpecs.DeleteCartLineItemData['query'],
    ) {
        return this.request.delete<(RequestSuccessResponse<200, Required<CartsV3ApiSpecs.DeleteCartLineItemResponses[200]>> | RequestSuccessResponse<204, Required<CartsV3ApiSpecs.DeleteCartLineItemResponses[204]>>),RequestErrorResponse<400, void>>({
            path: `v3/carts/${cartId}/items/${itemId}`,
            query,
        });
    }

    /**
     * Get a Cart
     *
     * Returns a store's *Cart*.
     */
    getAcart(
        cartId: CartsV3ApiSpecs.GetACartData['path']['cartId'],
        query?: CartsV3ApiSpecs.GetACartData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.GetACartResponses[200]>>,RequestErrorResponse<404, Required<CartsV3ApiSpecs.GetACartErrors[404]>>>({
            path: `v3/carts/${cartId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getAcart` instead.
     */
    getCart(...args: Parameters<CartsV3Api['getAcart']>) {
        return this.getAcart(...args);
    }

    /**
     * Update Customer ID
     *
     * Updates a *Cart's* `customer_id`.

     **Notes**

     Changing the *Cart* `customer_id` will remove any promotions or shipping calculations on the *Cart*. These are tied to the customer depending on cart conditions and any customer groups. 
     */
    updateAcart(
        cartId: CartsV3ApiSpecs.UpdateACartData['path']['cartId'],
        requestBody: CartsV3ApiSpecs.UpdateACartData['body'],
        query?: CartsV3ApiSpecs.UpdateACartData['query'],
    ) {
        return this.request.put<RequestSuccessResponse<201, Required<CartsV3ApiSpecs.UpdateACartResponses[201]>>,RequestErrorResponse<400, void>>({
            path: `v3/carts/${cartId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * @deprecated Use `updateAcart` instead.
     */
    updateCart(...args: Parameters<CartsV3Api['updateAcart']>) {
        return this.updateAcart(...args);
    }

    /**
     * Delete a Cart
     *
     * Deletes a *Cart*. Once a *Cart* has been deleted it can’t be recovered.
     */
    deleteAcart(
        cartId: CartsV3ApiSpecs.DeleteACartData['path']['cartId'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CartsV3ApiSpecs.DeleteACartResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/carts/${cartId}`,
        });
    }

    /**
     * @deprecated Use `deleteAcart` instead.
     */
    deleteCart(...args: Parameters<CartsV3Api['deleteAcart']>) {
        return this.deleteAcart(...args);
    }

    /**
     * Get Global Cart Settings
     *
     * Returns the global cart settings of a store.
     */
    getGlobalCartSettings(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.GetGlobalCartSettingsResponses[200]>>,RequestErrorResponse<401, Required<CartsV3ApiSpecs.GetGlobalCartSettingsErrors[401]>>>({
            path: 'v3/carts/settings',
        });
    }

    /**
     * Update Global Cart Settings
     *
     * Update the global cart settings of a store.
     */
    updateGlobalCartSettings(
        requestBody: CartsV3ApiSpecs.UpdateGlobalCartSettingsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.UpdateGlobalCartSettingsResponses[200]>>,(RequestErrorResponse<400, Required<CartsV3ApiSpecs.UpdateGlobalCartSettingsErrors[400]>> | RequestErrorResponse<401, Required<CartsV3ApiSpecs.UpdateGlobalCartSettingsErrors[401]>> | RequestErrorResponse<422, Required<CartsV3ApiSpecs.UpdateGlobalCartSettingsErrors[422]>>)>({
            path: 'v3/carts/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Channel Cart Settings
     *
     * Returns the per-channel overrides for the cart settings of a store.
     */
    getChannelCartSettings(
        channelId: CartsV3ApiSpecs.GetChannelCartSettingsData['path']['channel_id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.GetChannelCartSettingsResponses[200]>>,RequestErrorResponse<401, Required<CartsV3ApiSpecs.GetChannelCartSettingsErrors[401]>>>({
            path: `v3/carts/settings/channels/${channelId}`,
        });
    }

    /**
     * Update Channel Cart Settings
     *
     * Update the per-channel overrides for the cart settings of a store.
     */
    updateChannelCartSettings(
        channelId: CartsV3ApiSpecs.UpdateChannelCartSettingsData['path']['channel_id'],
        requestBody: CartsV3ApiSpecs.UpdateChannelCartSettingsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.UpdateChannelCartSettingsResponses[200]>>,(RequestErrorResponse<400, Required<CartsV3ApiSpecs.UpdateChannelCartSettingsErrors[400]>> | RequestErrorResponse<401, Required<CartsV3ApiSpecs.UpdateChannelCartSettingsErrors[401]>> | RequestErrorResponse<422, Required<CartsV3ApiSpecs.UpdateChannelCartSettingsErrors[422]>>)>({
            path: `v3/carts/settings/channels/${channelId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get All Metafields
     *
     * Get all cart metafields.
     */
    getAllCartMetafields(
        cartId: CartsV3ApiSpecs.GetAllCartMetafieldsData['path']['cart_id'],
        query?: CartsV3ApiSpecs.GetAllCartMetafieldsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.GetAllCartMetafieldsResponses[200]>>,(RequestErrorResponse<409, Required<CartsV3ApiSpecs.GetAllCartMetafieldsErrors[409]>> | RequestErrorResponse<422, Required<CartsV3ApiSpecs.GetAllCartMetafieldsErrors[422]>>)>({
            path: `v3/carts/${cartId}/metafields`,
            query,
        });
    }

    /**
     * @deprecated Use `getAllCartMetafields` instead.
     */
    getCartMetafields(...args: Parameters<CartsV3Api['getAllCartMetafields']>) {
        return this.getAllCartMetafields(...args);
    }

    /**
     * Create a Cart Metafield
     *
     * Create a cart `Metafield`. 

     If you create an order from a Cart, you can continue referencing the Cart Metafields even if you delete the original Cart. Use the `cart_id` field on the Order to construct the Cart Metafield endpoint. 

     */
    createCartMetafieldsByCartId(
        cartId: CartsV3ApiSpecs.CreateCartMetafieldsByCartIdData['path']['cart_id'],
        requestBody: CartsV3ApiSpecs.CreateCartMetafieldsByCartIdData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.CreateCartMetafieldsByCartIdResponses[200]>>,RequestErrorResponse<404, Required<CartsV3ApiSpecs.CreateCartMetafieldsByCartIdErrors[404]>>>({
            path: `v3/carts/${cartId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createCartMetafieldsByCartId` instead.
     */
    createCartMetafield(...args: Parameters<CartsV3Api['createCartMetafieldsByCartId']>) {
        return this.createCartMetafieldsByCartId(...args);
    }

    /**
     * Get a Cart Metafield
     *
     * Gets a cart metafield.
     */
    getAcartMetafield(
        cartId: CartsV3ApiSpecs.GetACartMetafieldData['path']['cart_id'],
        metafieldId: CartsV3ApiSpecs.GetACartMetafieldData['path']['metafield_id'],
        query?: CartsV3ApiSpecs.GetACartMetafieldData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.GetACartMetafieldResponses[200]>>,(RequestErrorResponse<409, Required<CartsV3ApiSpecs.GetACartMetafieldErrors[409]>> | RequestErrorResponse<422, Required<CartsV3ApiSpecs.GetACartMetafieldErrors[422]>> | RequestErrorResponse<500, Required<CartsV3ApiSpecs.GetACartMetafieldErrors[500]>>)>({
            path: `v3/carts/${cartId}/metafields/${metafieldId}`,
            query,
        });
    }

    /**
     * @deprecated Use `getAcartMetafield` instead.
     */
    getCartMetafield(...args: Parameters<CartsV3Api['getAcartMetafield']>) {
        return this.getAcartMetafield(...args);
    }

    /**
     * Update a Cart Metafield
     *
     * Update a `Metafield`, by `cart_id`.

     */
    updateCartMetafieldsByCartId(
        cartId: CartsV3ApiSpecs.UpdateCartMetafieldsByCartIdData['path']['cart_id'],
        metafieldId: CartsV3ApiSpecs.UpdateCartMetafieldsByCartIdData['path']['metafield_id'],
        requestBody: CartsV3ApiSpecs.UpdateCartMetafieldsByCartIdData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<CartsV3ApiSpecs.UpdateCartMetafieldsByCartIdResponses[200]>>,RequestErrorResponse<404, Required<CartsV3ApiSpecs.UpdateCartMetafieldsByCartIdErrors[404]>>>({
            path: `v3/carts/${cartId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateCartMetafieldsByCartId` instead.
     */
    updateCartMetafield(...args: Parameters<CartsV3Api['updateCartMetafieldsByCartId']>) {
        return this.updateCartMetafieldsByCartId(...args);
    }

    /**
     * Delete a Metafield
     *
     * Deletes a `Metafield`.

     */
    deleteCartMetafieldById(
        cartId: CartsV3ApiSpecs.DeleteCartMetafieldByIdData['path']['cart_id'],
        metafieldId: CartsV3ApiSpecs.DeleteCartMetafieldByIdData['path']['metafield_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<CartsV3ApiSpecs.DeleteCartMetafieldByIdResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/carts/${cartId}/metafields/${metafieldId}`,
        });
    }

    /**
     * @deprecated Use `deleteCartMetafieldById` instead.
     */
    deleteCartMetafield(...args: Parameters<CartsV3Api['deleteCartMetafieldById']>) {
        return this.deleteCartMetafieldById(...args);
    }
}
