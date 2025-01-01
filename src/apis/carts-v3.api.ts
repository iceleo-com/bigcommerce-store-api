import RequestService from '../helpers/request/request-service';
import * as CartsV3ApiSpecs from '../generated/carts-v3';

export default class CartsV3Api {
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
    createCart(
        requestBody: CartsV3ApiSpecs.CreateCartData['body'],
        query?: CartsV3ApiSpecs.CreateCartData['query'],
    ) {
        return this.request.post<any, any>({
            path: 'v3/carts',
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Add Cart Line Items
     *
     * Adds line item to the *Cart*.

     **Usage Notes**

     To add a custom item use `custom_items`. 

     By default, overriding a product's list_price makes it ineligible for V3 product-level promotions. In **Store Settings** under **Promotions and Coupons** in the control panel, you can change this behavior to allow promotions on overridden prices.

     If a product has modifiers, omit the `variant_id` and instead use the `option_selections` array to describe both the **variant** and the **modifier** selections.

     To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.
     */
    addCartLineItems(
        cartId: CartsV3ApiSpecs.AddCartLineItemsData['path']['cartId'],
        requestBody: CartsV3ApiSpecs.AddCartLineItemsData['body'],
        query?: CartsV3ApiSpecs.AddCartLineItemsData['query'],
    ) {
        return this.request.post<any, any>({
            path: `v3/carts/${cartId}/items`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Create Cart Redirect URL
     *
     * Creates a **Cart** redirect URL for redirecting a shopper to an already created cart using the `cartId`.

     **Usage Notes**

     * To use redirect URLs, first create the cart using the REST Management API or GraphQL Storefront API.
     * Redirect URLs can also be created with **Create a Cart** requests by appending `include=redirect_urls`.
     * A **Carts** redirect URL is valid for 30 days and may only be used once.
     * Redirect URLs point to either a shared checkout domain or a channel-specific domain, depending on the storefront configuration.
     * Once a redirect URL has been visited, it will be invalidated and cannot be used again. 
     * If your application requires URLs to be visited more than once, consider generating a fresh one each time you need to restore a cart, and redirecting to the URL from your own application.
     * To restore a cart that was created on the storefront, either by a shopper or a Storefront API, first recreate the cart using the **REST Management API**.
     * When redirecting the shopper, you can add a set of `query_params` to the URL. The `query_params` feature allows passing additional information to the redirect URL.
     */
    createCartRedirectUrl(
        cartId: CartsV3ApiSpecs.CreateCartRedirectUrlData['path']['cartId'],
        requestBody: CartsV3ApiSpecs.CreateCartRedirectUrlData['body'],
    ) {
        return this.request.post<any, any>({
            path: `v3/carts/${cartId}/redirect_urls`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Cart Line Item
     *
     * Updates an existing, single line item in the *Cart*. 

     **Notes**

     Currently, only updating `list_price` and `quantity` are supported. By default, overriding a product's list_price makes it ineligible for V3 product-level promotions. In **Store Settings** under **Promotions and Coupons** in the control panel, you can change this behavior to allow promotions on overridden prices.

     If the product has modifiers, omit the `variant_id` and instead use the `option_selections` array to describe both the **variant** and the **modifier** selections.

     If a variant needs to be changed or updated, the product will need to be removed and re-added to the cart with the correct variants using the **Add Cart Line Items** endpoint.

     `custom_items` cannot be updated via the API at this time. To update your cart, add a new updated custom item and delete the outdated one. If your cart contains only one line item, perform the add operation before the delete operation.

     Deleting all line items from the cart will invalidate the cart. 

     To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.
     */
    updateCartLineItem(
        cartId: CartsV3ApiSpecs.UpdateCartLineItemData['path']['cartId'],
        itemId: CartsV3ApiSpecs.UpdateCartLineItemData['path']['itemId'],
        requestBody: CartsV3ApiSpecs.UpdateCartLineItemData['body'],
        query?: CartsV3ApiSpecs.UpdateCartLineItemData['query'],
    ) {
        return this.request.put<any, CartsV3ApiSpecs.UpdateCartLineItemError>({
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

     To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.
     */
    deleteCartLineItem(
        cartId: CartsV3ApiSpecs.DeleteCartLineItemData['path']['cartId'],
        itemId: CartsV3ApiSpecs.DeleteCartLineItemData['path']['itemId'],
        requestBody: CartsV3ApiSpecs.DeleteCartLineItemData['body'],
        query?: CartsV3ApiSpecs.DeleteCartLineItemData['query'],
    ) {
        return this.request.delete<CartsV3ApiSpecs.DeleteCartLineItemResponse, CartsV3ApiSpecs.DeleteCartLineItemError>({
            path: `v3/carts/${cartId}/items/${itemId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Get a Cart
     *
     * Returns a storeʼs *Cart*.
     */
    getCart(
        cartId: CartsV3ApiSpecs.GetCartData['path']['cartId'],
        query?: CartsV3ApiSpecs.GetCartData['query'],
    ) {
        return this.request.get<any, CartsV3ApiSpecs.GetCartError>({
            path: `v3/carts/${cartId}`,
            query,
        });
    }

    /**
     * Update Customer ID
     *
     * Updates a *Cartʼs* `customer_id`.

     **Notes**

     Changing the *Cart* `customer_id` will remove any promotions or shipping calculations on the *Cart*. These are tied to the customer depending on cart conditions and any customer groups. 

     To prevent lost updates due to concurrent requests overriding changes made by others, it is recommended to enable optimistic concurrency control by including the `version` field in the request payload. If the provided version does not match the version on the server, a conflict error will be returned, which the client can handle accordingly.
     */
    updateCart(
        cartId: CartsV3ApiSpecs.UpdateCartData['path']['cartId'],
        requestBody: CartsV3ApiSpecs.UpdateCartData['body'],
        query?: CartsV3ApiSpecs.UpdateCartData['query'],
    ) {
        return this.request.put<any, CartsV3ApiSpecs.UpdateCartError>({
            path: `v3/carts/${cartId}`,
            contentType: 'application/json',
            body: requestBody,
            query,
        });
    }

    /**
     * Delete a Cart
     *
     * Deletes a *Cart*. Once a *Cart* has been deleted it can’t be recovered.
     */
    deleteCart(
        cartId: CartsV3ApiSpecs.DeleteCartData['path']['cartId'],
    ) {
        return this.request.delete<any, any>({
            path: `v3/carts/${cartId}`,
        });
    }

    /**
     * Get Global Cart Settings
     *
     * Returns the global cart settings of a store.

       ### OAuth scopes

       | UI Name | Permission | Parameter |
       |:--------|:-----------|:----------|
       |Information & Settings | modify | `store_v2_information`|
       |Information & Settings | read-only| `store_v2_information`|
     */
    getGlobalCartSettings(
    ) {
        return this.request.get<CartsV3ApiSpecs.GetGlobalCartSettingsResponse, CartsV3ApiSpecs.GetGlobalCartSettingsError>({
            path: 'v3/carts/settings',
        });
    }

    /**
     * Update Global Cart Settings
     *
     * Update the global cart settings of a store.
       *Authentication*
       ### OAuth scopes

       | UI Name | Permission | Parameter |
       |:--------|:-----------|:----------|
       |Information & Settings | modify | `store_v2_information`|
       |Information & Settings | read-only| `store_v2_information`|
     */
    updateGlobalCartSettings(
        requestBody: CartsV3ApiSpecs.UpdateGlobalCartSettingsData['body'],
    ) {
        return this.request.put<CartsV3ApiSpecs.UpdateGlobalCartSettingsResponse, CartsV3ApiSpecs.UpdateGlobalCartSettingsError>({
            path: 'v3/carts/settings',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Channel Cart Settings
     *
     * Returns the per-channel overrides for the cart settings of a store.

       ### OAuth scopes

       | UI Name | Permission | Parameter |
       |:--------|:-----------|:----------|
       |Information & Settings | modify | `store_v2_information`|
       |Information & Settings | read-only| `store_v2_information`|
     */
    getChannelCartSettings(
        channelId: CartsV3ApiSpecs.GetChannelCartSettingsData['path']['channel_id'],
    ) {
        return this.request.get<CartsV3ApiSpecs.GetChannelCartSettingsResponse, CartsV3ApiSpecs.GetChannelCartSettingsError>({
            path: `v3/carts/settings/channels/${channelId}`,
        });
    }

    /**
     * Update Channel Cart Settings
     *
     * Update the per-channel overrides for the cart settings of a store.

     ### OAuth scopes

     | UI Name | Permission | Parameter |
     |:--------|:-----------|:----------|
     |Information & Settings | modify | `store_v2_information`|
     |Information & Settings | read-only| `store_v2_information`|
     */
    updateChannelCartSettings(
        channelId: CartsV3ApiSpecs.UpdateChannelCartSettingsData['path']['channel_id'],
        requestBody: CartsV3ApiSpecs.UpdateChannelCartSettingsData['body'],
    ) {
        return this.request.put<CartsV3ApiSpecs.UpdateChannelCartSettingsResponse, CartsV3ApiSpecs.UpdateChannelCartSettingsError>({
            path: `v3/carts/settings/channels/${channelId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Cart Metafields
     *
     * Get a cart's metafields.
     */
    getCartMetafields(
        cartId: CartsV3ApiSpecs.GetCartMetafieldsData['path']['cart_id'],
        query?: CartsV3ApiSpecs.GetCartMetafieldsData['query'],
    ) {
        return this.request.get<CartsV3ApiSpecs.GetCartMetafieldsResponse, any>({
            path: `v3/carts/${cartId}/metafields`,
            query,
        });
    }

    /**
     * Create a Cart Metafield
     *
     * Create a cart `Metafield`. 

     If you create an order from a Cart, you can continue referencing the Cart Metafields even if you delete the original Cart. Use the `cart_id` field on the Order to construct the Cart Metafield endpoint. 

     */
    createCartMetafield(
        cartId: CartsV3ApiSpecs.CreateCartMetafieldData['path']['cart_id'],
        requestBody: CartsV3ApiSpecs.CreateCartMetafieldData['body'],
    ) {
        return this.request.post<CartsV3ApiSpecs.CreateCartMetafieldResponse, CartsV3ApiSpecs.CreateCartMetafieldError>({
            path: `v3/carts/${cartId}/metafields`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get a Cart Metafield
     *
     * Gets a cart metafield.
     */
    getCartMetafield(
        cartId: CartsV3ApiSpecs.GetCartMetafieldData['path']['cart_id'],
        metafieldId: CartsV3ApiSpecs.GetCartMetafieldData['path']['metafield_id'],
        query?: CartsV3ApiSpecs.GetCartMetafieldData['query'],
    ) {
        return this.request.get<CartsV3ApiSpecs.GetCartMetafieldResponse, CartsV3ApiSpecs.GetCartMetafieldError>({
            path: `v3/carts/${cartId}/metafields/${metafieldId}`,
            query,
        });
    }

    /**
     * Update a Cart Metafield
     *
     * Update a `Metafield`, by `cart_id`.

     */
    updateCartMetafield(
        cartId: CartsV3ApiSpecs.UpdateCartMetafieldData['path']['cart_id'],
        metafieldId: CartsV3ApiSpecs.UpdateCartMetafieldData['path']['metafield_id'],
        requestBody: CartsV3ApiSpecs.UpdateCartMetafieldData['body'],
    ) {
        return this.request.put<CartsV3ApiSpecs.UpdateCartMetafieldResponse, CartsV3ApiSpecs.UpdateCartMetafieldError>({
            path: `v3/carts/${cartId}/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Metafield
     *
     * Deletes a `Metafield`.

     */
    deleteCartMetafield(
        cartId: CartsV3ApiSpecs.DeleteCartMetafieldData['path']['cart_id'],
        metafieldId: CartsV3ApiSpecs.DeleteCartMetafieldData['path']['metafield_id'],
    ) {
        return this.request.delete<any, CartsV3ApiSpecs.DeleteCartMetafieldError>({
            path: `v3/carts/${cartId}/metafields/${metafieldId}`,
        });
    }

    /**
     * Get All Cart Metafields
     *
     * Get all cart metafields.
     */
    getCartsMetafields(
        query?: CartsV3ApiSpecs.GetCartsMetafieldsData['query'],
    ) {
        return this.request.get<CartsV3ApiSpecs.GetCartsMetafieldsResponse, any>({
            path: 'v3/carts/metafields',
            query,
        });
    }

    /**
     * Create multiple Metafields
     *
     * Create multiple metafields.
     */
    createCartsMetafields(
        requestBody: CartsV3ApiSpecs.CreateCartsMetafieldsData['body'],
    ) {
        return this.request.post<CartsV3ApiSpecs.CreateCartsMetafieldsResponse, CartsV3ApiSpecs.CreateCartsMetafieldsError>({
            path: 'v3/carts/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update multiple Metafields
     *
     * Create multiple metafields.
     */
    updateCartsMetafields(
        requestBody: CartsV3ApiSpecs.UpdateCartsMetafieldsData['body'],
    ) {
        return this.request.put<CartsV3ApiSpecs.UpdateCartsMetafieldsResponse, CartsV3ApiSpecs.UpdateCartsMetafieldsError>({
            path: 'v3/carts/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete multiple Metafields
     *
     * Delete all cart metafields.
     */
    deleteCartsMetafields(
        requestBody: CartsV3ApiSpecs.DeleteCartsMetafieldsData['body'],
    ) {
        return this.request.delete<CartsV3ApiSpecs.DeleteCartsMetafieldsResponse, CartsV3ApiSpecs.DeleteCartsMetafieldsError>({
            path: 'v3/carts/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
