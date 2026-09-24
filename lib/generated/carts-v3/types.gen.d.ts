export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type CartsMetafieldsGetParametersDirection = 'asc' | 'desc';
export type CartsMetafieldsGetParametersIncludeFieldsSchemaItems = 'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified';
export type MetafieldBasePermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldBaseResourceType = 'brand' | 'product' | 'variant' | 'category' | 'cart';
export type Metafield = {
    permission_set?: MetafieldBasePermissionSet;
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    resource_type?: MetafieldBaseResourceType;
    resource_id?: string;
    id?: string;
    date_created?: string;
    date_modified?: string;
    owner_client_id?: string;
};
export type CollectionMetaPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type CollectionMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: CollectionMetaPaginationLinks;
};
export type CollectionMeta = {
    pagination?: CollectionMetaPagination;
};
export type MetaFieldCollectionResponseBatch = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type CartsMetafieldsPostRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type CartsMetafieldsPostRequestBodyContentApplicationJsonSchemaItems = {
    permission_set: CartsMetafieldsPostRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description?: string;
    resource_id: string;
};
export type WriteCollectionPartialSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionResponseBatchPostPut = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type CreateCartsMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
export type _Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type MetaFieldCollectionResponsePartialSuccessPostPut = {
    data?: Array<Metafield>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type CartsMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type CartsMetafieldsPutRequestBodyContentApplicationJsonSchemaItems = {
    permission_set: CartsMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description?: string;
    id: string;
};
export type UpdateCartsMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type DeleteCartsMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type MetaFieldCollectionResponsePartialSuccessDelete = {
    data?: Array<number>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type CartsPostParametersIncludeSchemaItems = 'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'line_items.physical_items.stock_position' | 'line_items.digital_items.stock_position' | 'promotions.banners';
export type CartPostVariantGiftWrappingWrapDetailsItems = {
    id?: number;
    message?: string;
};
export type CartPostVariantGiftWrapping = {
    wrap_together?: boolean;
    wrap_details?: Array<CartPostVariantGiftWrappingWrapDetailsItems>;
};
export type CartPostVariant = {
    quantity?: number;
    product_id?: number;
    list_price?: number;
    variant_id?: number;
    name?: string;
    gift_wrapping?: CartPostVariantGiftWrapping;
};
export type CartPostModifierOptionSelectionsItems = {
    option_id?: number;
    option_value?: number;
    name?: string;
    value?: string;
    nameId?: number;
    valueId?: number;
};
export type CartPostModifier = {
    quantity: number;
    product_id: number;
    list_price?: number;
    name?: string;
    option_selections?: Array<CartPostModifierOptionSelectionsItems>;
};
export type CartCreatePostDataLineItemsItems = CartPostVariant | CartPostModifier;
export type CartPostCustomItemItems = {
    sku: string;
    name: string;
    quantity: number;
    list_price: number;
    image_url?: string;
};
export type CartPostCustomItem = Array<CartPostCustomItemItems>;
export type CartCreatePostDataGiftCertificatesItemsTheme = 'Birthday' | 'Boy' | 'Celebration' | 'Christmas' | 'General' | 'Girl';
export type CartCreatePostDataGiftCertificatesItemsSender = {
    name?: string;
    email?: string;
};
export type CartCreatePostDataGiftCertificatesItemsRecipient = {
    name?: string;
    email?: string;
};
export type CartCreatePostDataGiftCertificatesItems = {
    name: string;
    theme: CartCreatePostDataGiftCertificatesItemsTheme;
    amount: number;
    quantity: number;
    sender: CartCreatePostDataGiftCertificatesItemsSender;
    recipient: CartCreatePostDataGiftCertificatesItemsRecipient;
    message?: string;
};
export type CartCreatePostDataCurrency = {
    code?: string;
};
export type CartCreatePostData = {
    customer_id?: number;
    line_items?: Array<CartCreatePostDataLineItemsItems>;
    custom_items?: CartPostCustomItem;
    gift_certificates?: Array<CartCreatePostDataGiftCertificatesItems>;
    channel_id?: number;
    currency?: CartCreatePostDataCurrency;
    locale?: string;
};
export type CartFullCurrency = {
    code?: string;
};
export type AppliedCouponCouponType = '0' | '1' | '2' | '3' | '4' | '5';
export type AppliedCoupon = {
    code: string;
    id?: string;
    coupon_type?: AppliedCouponCouponType;
    discounted_amount?: number;
    display_name?: string;
};
export type CartFullDiscountsItems = {
    id?: string;
    discounted_amount?: number;
};
export type ItemPhysicalGetDiscountsItemsId = string | number;
export type ItemPhysicalGetDiscountsItems = {
    id?: ItemPhysicalGetDiscountsItemsId;
    discounted_amount?: number;
};
export type ItemPhysicalGetCouponsOneOf1ItemsDiscountType = '0' | '1' | '2' | '3' | '4';
export type ItemPhysicalGetCouponsOneOf1Items = {
    id?: number;
    code: string;
    name?: string;
    discountType?: ItemPhysicalGetCouponsOneOf1ItemsDiscountType;
    discountAmount?: number;
    expiresDate?: number;
    totalDiscount?: number;
};
export type ItemPhysicalGetCoupons1 = Array<ItemPhysicalGetCouponsOneOf1Items>;
export type ItemPhysicalGetCoupons = number | ItemPhysicalGetCoupons1;
export type ItemPhysicalGetGiftWrapping = {
    name?: string;
    message?: string;
    amount?: string;
};
export type ItemPhysicalGetStockPosition = {
    quantity_on_hand?: number;
    quantity_backordered?: number;
    quantity_out_of_stock?: number;
    backorder_message?: string | null;
};
export type ItemPhysicalGet = {
    id?: string;
    parent_id?: string;
    variant_id: number;
    product_id: number;
    added_by_attribute_id?: string | null;
    sku?: string;
    name?: string;
    url?: string;
    quantity: number;
    taxable?: boolean;
    image_url?: string;
    discounts?: Array<ItemPhysicalGetDiscountsItems>;
    coupons?: ItemPhysicalGetCoupons;
    discount_amount?: number;
    coupon_amount?: number;
    original_price?: number;
    list_price?: number;
    sale_price?: number;
    extended_list_price?: number;
    extended_sale_price?: number;
    is_require_shipping?: boolean;
    is_mutable?: boolean;
    added_by_promotion?: boolean;
    is_custom_price?: boolean;
    gift_wrapping?: ItemPhysicalGetGiftWrapping;
    stock_position?: ItemPhysicalGetStockPosition;
};
export type ItemDigitalGetDiscountsItemsId = string | number;
export type ItemDigitalGetDiscountsItems = {
    id?: ItemDigitalGetDiscountsItemsId;
    discounted_amount?: number;
};
export type ItemDigitalGetCouponsOneOf1ItemsDiscountType = '0' | '1' | '2' | '3' | '4';
export type ItemDigitalGetCouponsOneOf1Items = {
    id?: number;
    code: string;
    name?: string;
    discountType?: ItemDigitalGetCouponsOneOf1ItemsDiscountType;
    discountAmount?: number;
    expiresDate?: number;
    totalDiscount?: number;
};
export type ItemDigitalGetCoupons1 = Array<ItemDigitalGetCouponsOneOf1Items>;
export type ItemDigitalGetCoupons = number | ItemDigitalGetCoupons1;
export type ItemDigitalGet = {
    id?: string;
    parent_id?: string;
    variant_id?: number;
    product_id?: number;
    added_by_attribute_id?: string | null;
    sku?: string;
    name?: string;
    url?: string;
    quantity?: number;
    taxable?: boolean;
    image_url?: string;
    discounts?: Array<ItemDigitalGetDiscountsItems>;
    coupons?: ItemDigitalGetCoupons;
    discount_amount?: number;
    coupon_amount?: number;
    original_price?: number;
    list_price?: number;
    sale_price?: number;
    extended_list_price?: number;
    extended_sale_price?: number;
    is_require_shipping?: boolean;
    is_mutable?: boolean;
    added_by_promotion?: boolean;
    is_custom_price?: boolean;
    download_file_urls?: Array<string>;
    download_page_url?: string;
    download_size?: string;
};
export type ItemGiftCertificateGetSender = {
    name?: string;
    email?: string;
};
export type ItemGiftCertificateGetRecipient = {
    name?: string;
    email?: string;
};
export type ItemGiftCertificateGet = {
    id?: string;
    name?: string;
    theme?: string;
    amount?: number;
    taxable?: boolean;
    sender?: ItemGiftCertificateGetSender;
    recipient?: ItemGiftCertificateGetRecipient;
    message?: string;
};
export type ItemCustomGet = {
    id?: string;
    sku?: string;
    name?: string;
    quantity?: string;
    list_price?: string;
    extended_list_price?: number;
    image_url?: string;
};
export type LineItemsGet = {
    physical_items?: Array<ItemPhysicalGet>;
    digital_items?: Array<ItemDigitalGet>;
    gift_certificates?: Array<ItemGiftCertificateGet>;
    custom_items?: Array<ItemCustomGet>;
};
export type CartFullPromotionsBanners = {
    id?: string;
    type?: string;
    page?: Array<string>;
    text?: string;
};
export type CartFullPromotions = {
    banners?: CartFullPromotionsBanners;
};
export type CartFull = {
    id?: string;
    customer_id?: number;
    channel_id?: number;
    email?: string;
    currency?: CartFullCurrency;
    tax_included?: boolean;
    base_amount?: number;
    discount_amount?: number;
    manual_discount_amount?: number;
    cart_amount?: number;
    coupons?: Array<AppliedCoupon>;
    discounts?: Array<CartFullDiscountsItems>;
    line_items?: LineItemsGet;
    created_time?: string;
    updated_time?: string;
    locale?: string;
    promotions?: CartFullPromotions;
    version?: number;
};
export type MetaCollectionOpen = {
    [key: string]: unknown;
};
export type CartsSingleCreateCartResponse201 = {
    data?: CartFull;
    meta?: MetaCollectionOpen;
};
export type CartsCartIdGetParametersIncludeSchemaItems = 'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'line_items.physical_items.stock_position' | 'line_items.digital_items.stock_position' | 'promotions.banners';
export type CartsSingleGetCartResponse200 = {
    data?: CartFull;
    meta?: MetaCollectionOpen;
};
export type CartsCartIdPutParametersIncludeSchemaItems = 'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'line_items.physical_items.stock_position' | 'line_items.digital_items.stock_position' | 'promotions.banners';
export type CartUpdatePutRequestData = {
    customer_id?: number;
    version?: number;
};
export type CartsSingleUpdateCartResponse201 = {
    data?: CartFull;
    meta?: MetaCollectionOpen;
};
export type ErrorResponseErrors = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: ErrorResponseErrors;
};
export type CartsCartIdItemsPostParametersIncludeSchemaItems = 'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'line_items.physical_items.stock_position' | 'line_items.digital_items.stock_position' | 'promotions.banners';
export type CartLineItemUpdatePostLineItems0 = Array<CartPostVariant>;
export type CartLineItemUpdatePostLineItems1 = Array<CartPostModifier>;
export type CartLineItemUpdatePostLineItems = CartLineItemUpdatePostLineItems0 | CartLineItemUpdatePostLineItems1;
export type CartLineItemUpdatePostGiftCertificatesItemsTheme = 'Birthday' | 'Boy' | 'Celebration' | 'Christmas' | 'General' | 'Girl';
export type CartLineItemUpdatePostGiftCertificatesItemsSender = {
    name?: string;
    email?: string;
};
export type CartLineItemUpdatePostGiftCertificatesItemsRecipient = {
    name?: string;
    email?: string;
};
export type CartLineItemUpdatePostGiftCertificatesItems = {
    name: string;
    theme: CartLineItemUpdatePostGiftCertificatesItemsTheme;
    amount: number;
    quantity: number;
    sender: CartLineItemUpdatePostGiftCertificatesItemsSender;
    recipient: CartLineItemUpdatePostGiftCertificatesItemsRecipient;
    message?: string;
};
export type CartLineItemUpdatePost = {
    line_items?: CartLineItemUpdatePostLineItems;
    gift_certificates?: Array<CartLineItemUpdatePostGiftCertificatesItems>;
    custom_items?: CartPostCustomItem;
    version?: number;
};
export type ItemsAddCartLineItemsResponse201 = {
    data?: CartFull;
    meta?: MetaCollectionOpen;
};
export type CartsCartIdItemsItemIdPutParametersIncludeSchemaItems = 'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'line_items.physical_items.stock_position' | 'line_items.digital_items.stock_position' | 'promotions.banners';
export type CartLineItemUpdatePutLineItem = CartPostVariant | CartPostModifier;
export type CartLineItemUpdatePutGiftCertificatesItemsTheme = 'Birthday' | 'Boy' | 'Celebration' | 'Christmas' | 'General' | 'Girl';
export type CartLineItemUpdatePutGiftCertificatesItemsSender = {
    name?: string;
    email?: string;
};
export type CartLineItemUpdatePutGiftCertificatesItemsRecipient = {
    name?: string;
    email?: string;
};
export type CartLineItemUpdatePutGiftCertificatesItems = {
    name: string;
    theme: CartLineItemUpdatePutGiftCertificatesItemsTheme;
    amount: number;
    quantity: number;
    sender: CartLineItemUpdatePutGiftCertificatesItemsSender;
    recipient: CartLineItemUpdatePutGiftCertificatesItemsRecipient;
    message?: string;
};
export type CartLineItemUpdatePut = {
    line_item?: CartLineItemUpdatePutLineItem;
    gift_certificates?: Array<CartLineItemUpdatePutGiftCertificatesItems>;
    custom_items?: CartPostCustomItem;
    version?: number;
};
export type ItemsUpdateCartLineItemResponse200 = {
    data?: CartFull;
    meta?: MetaCollectionOpen;
};
export type CartsCartIdItemsItemIdDeleteParametersIncludeSchemaItems = 'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'line_items.physical_items.stock_position' | 'line_items.digital_items.stock_position' | 'promotions.banners';
export type CartLineItemDelete = {
    version?: number;
};
export type CartsCartIdMetafieldsGetParametersDirection = 'asc' | 'desc';
export type MetafieldResponse = {
    data?: Metafield;
};
export type MetafieldBasePostPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldBasePost = {
    permission_set: MetafieldBasePostPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetaFieldCollectionResponse = {
    data?: Metafield;
    meta?: MetaCollectionOpen;
};
export type CreateCartMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type CartsCartIdMetafieldsMetafieldIdGetParametersDirection = 'asc' | 'desc';
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type UpdateCartMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type RedirectUrlsPostQueryParams = {
    key?: string;
    value?: string;
};
export type RedirectUrlsPost = {
    query_params?: RedirectUrlsPostQueryParams;
};
export type CartsCartIdRedirectUrlsPostResponsesContentApplicationJsonSchemaData = {
    cart_url?: string;
    checkout_url?: string;
    embedded_checkout_url?: string;
};
export type RedirectsCreateCartRedirectUrlResponse201 = {
    data?: CartsCartIdRedirectUrlsPostResponsesContentApplicationJsonSchemaData;
    meta?: MetaCollectionOpen;
};
export type CartSettings = {
    allow_purchasing?: boolean;
};
export type GlobalCartSettingsResponse = {
    data?: CartSettings;
    meta?: MetaCollectionOpen;
};
export type GlobalCartSettingsRequest = {
    allow_purchasing: boolean;
};
export type UpdateGlobalCartSettingsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type ChannelCartSettings = {
    allow_purchasing?: boolean | null;
};
export type ChannelCartSettingsResponse = {
    data?: ChannelCartSettings;
    meta?: MetaCollectionOpen;
};
export type ChannelCartSettingsRequest = {
    allow_purchasing?: boolean | null;
};
export type UpdateChannelCartSettingsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type DeleteCartsMetafieldsData = {
    body?: Array<number>;
    path?: never;
    query?: never;
    url: '/carts/metafields';
};
export type DeleteCartsMetafieldsErrors = {
    400: DeleteCartsMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessDelete;
};
export type DeleteCartsMetafieldsError = DeleteCartsMetafieldsErrors[keyof DeleteCartsMetafieldsErrors];
export type DeleteCartsMetafieldsResponses = {
    200: MetaFieldCollectionDeleteResponseSuccess;
};
export type DeleteCartsMetafieldsResponse = DeleteCartsMetafieldsResponses[keyof DeleteCartsMetafieldsResponses];
export type GetCartsMetafieldsData = {
    body?: never;
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        key?: string;
        'key:in'?: Array<string>;
        namespace?: string;
        'namespace:in'?: Array<string>;
        direction?: CartsMetafieldsGetParametersDirection;
        include_fields?: Array<CartsMetafieldsGetParametersIncludeFieldsSchemaItems>;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
        'date_created:min'?: string;
        'date_created:max'?: string;
    };
    url: '/carts/metafields';
};
export type GetCartsMetafieldsResponses = {
    200: MetaFieldCollectionResponseBatch;
};
export type GetCartsMetafieldsResponse = GetCartsMetafieldsResponses[keyof GetCartsMetafieldsResponses];
export type CreateCartsMetafieldsData = {
    body?: Array<CartsMetafieldsPostRequestBodyContentApplicationJsonSchemaItems>;
    path?: never;
    query?: never;
    url: '/carts/metafields';
};
export type CreateCartsMetafieldsErrors = {
    400: CreateCartsMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateCartsMetafieldsError = CreateCartsMetafieldsErrors[keyof CreateCartsMetafieldsErrors];
export type CreateCartsMetafieldsResponses = {
    200: MetaFieldCollectionResponseBatchPostPut;
};
export type CreateCartsMetafieldsResponse = CreateCartsMetafieldsResponses[keyof CreateCartsMetafieldsResponses];
export type UpdateCartsMetafieldsData = {
    body?: Array<CartsMetafieldsPutRequestBodyContentApplicationJsonSchemaItems>;
    path?: never;
    query?: never;
    url: '/carts/metafields';
};
export type UpdateCartsMetafieldsErrors = {
    400: UpdateCartsMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateCartsMetafieldsError = UpdateCartsMetafieldsErrors[keyof UpdateCartsMetafieldsErrors];
export type UpdateCartsMetafieldsResponses = {
    200: MetaFieldCollectionResponseBatchPostPut;
};
export type UpdateCartsMetafieldsResponse = UpdateCartsMetafieldsResponses[keyof UpdateCartsMetafieldsResponses];
export type CreateCartData = {
    body?: CartCreatePostData;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        include?: Array<CartsPostParametersIncludeSchemaItems>;
    };
    url: '/carts';
};
export type CreateCartResponses = {
    201: CartsSingleCreateCartResponse201;
};
export type CreateCartResponse = CreateCartResponses[keyof CreateCartResponses];
export type DeleteCartData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        cartId: string;
    };
    query?: never;
    url: '/carts/{cartId}';
};
export type DeleteCartResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteCartResponse = DeleteCartResponses[keyof DeleteCartResponses];
export type GetCartData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        cartId: string;
    };
    query?: {
        include?: Array<CartsCartIdGetParametersIncludeSchemaItems>;
    };
    url: '/carts/{cartId}';
};
export type GetCartErrors = {
    404: unknown;
};
export type GetCartResponses = {
    200: CartsSingleGetCartResponse200;
};
export type GetCartResponse = GetCartResponses[keyof GetCartResponses];
export type UpdateCartData = {
    body?: CartUpdatePutRequestData;
    headers: {
        Accept: string;
    };
    path: {
        cartId: string;
    };
    query?: {
        include?: Array<CartsCartIdPutParametersIncludeSchemaItems>;
    };
    url: '/carts/{cartId}';
};
export type UpdateCartErrors = {
    409: ErrorResponse;
};
export type UpdateCartError = UpdateCartErrors[keyof UpdateCartErrors];
export type UpdateCartResponses = {
    201: CartsSingleUpdateCartResponse201;
};
export type UpdateCartResponse = UpdateCartResponses[keyof UpdateCartResponses];
export type AddCartLineItemsData = {
    body?: CartLineItemUpdatePost;
    headers: {
        Accept: string;
    };
    path: {
        cartId: string;
    };
    query?: {
        include?: Array<CartsCartIdItemsPostParametersIncludeSchemaItems>;
    };
    url: '/carts/{cartId}/items';
};
export type AddCartLineItemsResponses = {
    201: ItemsAddCartLineItemsResponse201;
};
export type AddCartLineItemsResponse = AddCartLineItemsResponses[keyof AddCartLineItemsResponses];
export type DeleteCartLineItemData = {
    body?: CartLineItemDelete;
    headers: {
        Accept: string;
    };
    path: {
        cartId: string;
        itemId: string;
    };
    query?: {
        include?: Array<CartsCartIdItemsItemIdDeleteParametersIncludeSchemaItems>;
    };
    url: '/carts/{cartId}/items/{itemId}';
};
export type DeleteCartLineItemErrors = {
    409: ErrorResponse;
};
export type DeleteCartLineItemError = DeleteCartLineItemErrors[keyof DeleteCartLineItemErrors];
export type DeleteCartLineItemResponses = {
    200: CartFull;
};
export type DeleteCartLineItemResponse = DeleteCartLineItemResponses[keyof DeleteCartLineItemResponses];
export type UpdateCartLineItemData = {
    body?: CartLineItemUpdatePut;
    headers: {
        Accept: string;
    };
    path: {
        cartId: string;
        itemId: string;
    };
    query?: {
        include?: Array<CartsCartIdItemsItemIdPutParametersIncludeSchemaItems>;
    };
    url: '/carts/{cartId}/items/{itemId}';
};
export type UpdateCartLineItemErrors = {
    409: ErrorResponse;
};
export type UpdateCartLineItemError = UpdateCartLineItemErrors[keyof UpdateCartLineItemErrors];
export type UpdateCartLineItemResponses = {
    200: ItemsUpdateCartLineItemResponse200;
};
export type UpdateCartLineItemResponse = UpdateCartLineItemResponses[keyof UpdateCartLineItemResponses];
export type GetCartMetafieldsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        cart_id: string;
    };
    query?: {
        page?: number;
        limit?: number;
        key?: string;
        namespace?: string;
        direction?: CartsCartIdMetafieldsGetParametersDirection;
    };
    url: '/carts/{cart_id}/metafields';
};
export type GetCartMetafieldsResponses = {
    200: MetafieldResponse;
};
export type GetCartMetafieldsResponse = GetCartMetafieldsResponses[keyof GetCartMetafieldsResponses];
export type CreateCartMetafieldData = {
    body?: MetafieldBasePost;
    headers: {
        Accept: string;
    };
    path: {
        cart_id: string;
    };
    query?: never;
    url: '/carts/{cart_id}/metafields';
};
export type CreateCartMetafieldErrors = {
    400: CreateCartMetafieldRequestBadRequestError;
    409: ErrorResponse;
    422: ErrorResponse;
};
export type CreateCartMetafieldError = CreateCartMetafieldErrors[keyof CreateCartMetafieldErrors];
export type CreateCartMetafieldResponses = {
    200: MetaFieldCollectionResponse;
};
export type CreateCartMetafieldResponse = CreateCartMetafieldResponses[keyof CreateCartMetafieldResponses];
export type DeleteCartMetafieldData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        cart_id: string;
        metafield_id: number;
    };
    query?: never;
    url: '/carts/{cart_id}/metafields/{metafield_id}';
};
export type DeleteCartMetafieldErrors = {
    404: NotFound;
};
export type DeleteCartMetafieldError = DeleteCartMetafieldErrors[keyof DeleteCartMetafieldErrors];
export type DeleteCartMetafieldResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteCartMetafieldResponse = DeleteCartMetafieldResponses[keyof DeleteCartMetafieldResponses];
export type GetCartMetafieldData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        cart_id: string;
        metafield_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
        key?: string;
        namespace?: string;
        direction?: CartsCartIdMetafieldsMetafieldIdGetParametersDirection;
    };
    url: '/carts/{cart_id}/metafields/{metafield_id}';
};
export type GetCartMetafieldErrors = {
    404: NotFound;
};
export type GetCartMetafieldError = GetCartMetafieldErrors[keyof GetCartMetafieldErrors];
export type GetCartMetafieldResponses = {
    200: MetafieldResponse;
};
export type GetCartMetafieldResponse = GetCartMetafieldResponses[keyof GetCartMetafieldResponses];
export type UpdateCartMetafieldData = {
    body?: MetafieldBasePost;
    headers: {
        Accept: string;
    };
    path: {
        cart_id: string;
        metafield_id: number;
    };
    query?: never;
    url: '/carts/{cart_id}/metafields/{metafield_id}';
};
export type UpdateCartMetafieldErrors = {
    400: UpdateCartMetafieldRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateCartMetafieldError = UpdateCartMetafieldErrors[keyof UpdateCartMetafieldErrors];
export type UpdateCartMetafieldResponses = {
    200: MetaFieldCollectionResponse;
};
export type UpdateCartMetafieldResponse = UpdateCartMetafieldResponses[keyof UpdateCartMetafieldResponses];
export type CreateCartRedirectUrlData = {
    body?: RedirectUrlsPost;
    headers: {
        Accept: string;
    };
    path: {
        cartId: string;
    };
    query?: never;
    url: '/carts/{cartId}/redirect_urls';
};
export type CreateCartRedirectUrlResponses = {
    201: RedirectsCreateCartRedirectUrlResponse201;
};
export type CreateCartRedirectUrlResponse = CreateCartRedirectUrlResponses[keyof CreateCartRedirectUrlResponses];
export type GetGlobalCartSettingsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/carts/settings';
};
export type GetGlobalCartSettingsErrors = {
    401: ErrorResponse;
};
export type GetGlobalCartSettingsError = GetGlobalCartSettingsErrors[keyof GetGlobalCartSettingsErrors];
export type GetGlobalCartSettingsResponses = {
    200: GlobalCartSettingsResponse;
};
export type GetGlobalCartSettingsResponse = GetGlobalCartSettingsResponses[keyof GetGlobalCartSettingsResponses];
export type UpdateGlobalCartSettingsData = {
    body?: GlobalCartSettingsRequest;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/carts/settings';
};
export type UpdateGlobalCartSettingsErrors = {
    400: UpdateGlobalCartSettingsRequestBadRequestError;
    401: ErrorResponse;
    422: ErrorResponse;
};
export type UpdateGlobalCartSettingsError = UpdateGlobalCartSettingsErrors[keyof UpdateGlobalCartSettingsErrors];
export type UpdateGlobalCartSettingsResponses = {
    200: GlobalCartSettingsResponse;
};
export type UpdateGlobalCartSettingsResponse = UpdateGlobalCartSettingsResponses[keyof UpdateGlobalCartSettingsResponses];
export type GetChannelCartSettingsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/carts/settings/channels/{channel_id}';
};
export type GetChannelCartSettingsErrors = {
    401: ErrorResponse;
};
export type GetChannelCartSettingsError = GetChannelCartSettingsErrors[keyof GetChannelCartSettingsErrors];
export type GetChannelCartSettingsResponses = {
    200: ChannelCartSettingsResponse;
};
export type GetChannelCartSettingsResponse = GetChannelCartSettingsResponses[keyof GetChannelCartSettingsResponses];
export type UpdateChannelCartSettingsData = {
    body?: ChannelCartSettingsRequest;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/carts/settings/channels/{channel_id}';
};
export type UpdateChannelCartSettingsErrors = {
    400: UpdateChannelCartSettingsRequestBadRequestError;
    401: ErrorResponse;
    422: ErrorResponse;
};
export type UpdateChannelCartSettingsError = UpdateChannelCartSettingsErrors[keyof UpdateChannelCartSettingsErrors];
export type UpdateChannelCartSettingsResponses = {
    200: ChannelCartSettingsResponse;
};
export type UpdateChannelCartSettingsResponse = UpdateChannelCartSettingsResponses[keyof UpdateChannelCartSettingsResponses];
