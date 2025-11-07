export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type CartUpdateRequest = {
    line_item?: {
        quantity: number;
        product_id: number;
        variant_id: number;
        list_price?: number;
        option_selections?: Array<{
            option_id?: number;
            option_value?: string;
        }>;
    };
    gift_certificate?: {
        name: string;
        theme: 'Birthday' | 'Boy' | 'Celebration' | 'Christmas' | 'General' | 'Girl';
        amount: number;
        quantity: number;
        sender: {
            name?: string;
            email?: string;
        };
        recipient: {
            name?: string;
            email?: string;
        };
        message?: string;
    };
};
export type CartCreatePostData = {
    customer_id?: number;
    line_items?: Array<CartPostVariant | CartPostModifier>;
    custom_items?: CartPostCustomItem;
    gift_certificates?: Array<{
        name: string;
        theme: 'Birthday' | 'Boy' | 'Celebration' | 'Christmas' | 'General' | 'Girl';
        amount: number;
        quantity: number;
        sender: {
            name?: string;
            email?: string;
        };
        recipient: {
            name?: string;
            email?: string;
        };
        message?: string;
    }>;
    channel_id?: number;
    currency?: {
        code?: string;
    };
    locale?: string;
};
export type CartRequestData = {
    line_items?: Array<{
        quantity: number;
        product_id: number;
        variant_id: number;
        list_price?: number;
        option_selections?: Array<{
            option_id?: number;
            option_value?: string;
        }>;
    }>;
    gift_certificates?: Array<{
        name: string;
        theme: 'Birthday' | 'Boy' | 'Celebration' | 'Christmas' | 'General' | 'Girl';
        amount: number;
        quantity: number;
        sender: {
            name?: string;
            email?: string;
        };
        recipient: {
            name?: string;
            email?: string;
        };
        message?: string;
    }>;
    channel_id?: number;
};
export type CartUpdatePutRequestData = {
    customer_id?: number;
    version?: number;
};
export type LineItemRequestData = {
    quantity: number;
    product_id: number;
    variant_id: number;
    list_price?: number;
    option_selections?: Array<{
        option_id?: number;
        option_value?: string;
    }>;
};
export type ProductOptionSelection = {
    option_id?: number;
    option_value?: string;
};
export type LineItemGiftCertificateRequestData = {
    name: string;
    theme: 'Birthday' | 'Boy' | 'Celebration' | 'Christmas' | 'General' | 'Girl';
    amount: number;
    quantity: number;
    sender: {
        name?: string;
        email?: string;
    };
    recipient: {
        name?: string;
        email?: string;
    };
    message?: string;
};
export type CartFull = {
    id?: string;
    customer_id?: number;
    channel_id?: number;
    email?: string;
    currency?: {
        code?: string;
    };
    tax_included?: boolean;
    base_amount?: number;
    discount_amount?: number;
    manual_discount_amount?: number;
    cart_amount?: number;
    coupons?: Array<AppliedCoupon>;
    discounts?: Array<{
        id?: string;
        discounted_amount?: number;
    }>;
    line_items?: LineItemsGet;
    created_time?: string;
    updated_time?: string;
    locale?: string;
    promotions?: {
        banners?: {
            id?: string;
            type?: string;
            page?: Array<string>;
            text?: string;
        };
    };
    version?: number;
};
export type Currency = {
    code?: string;
};
export type LineItems = {
    physical_items: Array<ItemPhysical>;
    digital_items: Array<ItemDigital>;
    gift_certificates?: Array<ItemGiftCertificate>;
    custom_items?: Array<ItemCustom>;
};
export type ItemGiftCertificate = {
    id?: string;
    name?: string;
    theme: 'Birthday' | 'Boy' | 'Celebration' | 'Christmas' | 'General' | 'Girl';
    amount: number;
    is_taxable?: boolean;
    sender: {
        name?: string;
        email?: string;
    };
    recipient: {
        name?: string;
        email?: string;
    };
    message?: string;
};
export type ItemGiftCertificateGet = {
    id?: string;
    name?: string;
    theme?: string;
    amount?: number;
    taxable?: boolean;
    sender?: {
        name?: string;
        email?: string;
    };
    recipient?: {
        name?: string;
        email?: string;
    };
    message?: string;
};
export type ContactEntity = {
    name?: string;
    email?: string;
};
export type ItemDigital = {
    id?: string;
    variant_id: number;
    product_id: number;
    sku?: string;
    name?: string;
    url?: string;
    quantity: number;
    is_taxable?: boolean;
    image_url?: string;
    discounts?: Array<{
        id?: string | number;
        discounted_amount?: number;
    }>;
    coupons?: Array<{
        coupons?: {
            coupon_code: {
                id?: number;
                code?: string;
                name?: string;
                discountType?: 0 | 1 | 2 | 3 | 4;
                discountAmount?: number;
                expiresDate?: number;
                totalDiscount?: number;
            };
        };
    }>;
    discount_amount?: number;
    coupon_amount?: number;
    original_price?: number;
    list_price?: number;
    sale_price?: number;
    extended_list_price?: number;
    extended_sale_price?: number;
    options?: Array<{
        name?: string;
        nameId?: number;
        value?: string;
        valueId?: number;
    }>;
} & {
    download_file_urls?: Array<string>;
    download_page_url?: string;
    download_size?: string;
};
export type ItemDigitalGet = {
    id?: string;
    parent_id?: string;
    variant_id?: number;
    product_id?: number;
    sku?: string;
    name?: string;
    url?: string;
    quantity?: number;
    taxable?: boolean;
    image_url?: string;
    discounts?: Array<{
        id?: string | number;
        discounted_amount?: number;
    }>;
    coupons?: number | Array<{
        id?: number;
        code: string;
        name?: string;
        discountType?: 0 | 1 | 2 | 3 | 4;
        discountAmount?: number;
        expiresDate?: number;
        totalDiscount?: number;
    }>;
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
    download_file_urls?: Array<string>;
    download_page_url?: string;
    download_size?: string;
};
export type ItemPhysical = {
    id?: string;
    variant_id: number;
    product_id: number;
    sku?: string;
    name?: string;
    url?: string;
    quantity: number;
    is_taxable?: boolean;
    image_url?: string;
    discounts?: Array<{
        id?: string | number;
        discounted_amount?: number;
    }>;
    coupons?: Array<{
        coupons?: {
            coupon_code: {
                id?: number;
                code?: string;
                name?: string;
                discountType?: 0 | 1 | 2 | 3 | 4;
                discountAmount?: number;
                expiresDate?: number;
                totalDiscount?: number;
            };
        };
    }>;
    discount_amount?: number;
    coupon_amount?: number;
    original_price?: number;
    list_price?: number;
    sale_price?: number;
    extended_list_price?: number;
    extended_sale_price?: number;
    options?: Array<{
        name?: string;
        nameId?: number;
        value?: string;
        valueId?: number;
    }>;
} & unknown;
export type BaseItem = {
    id?: string;
    variant_id: number;
    product_id: number;
    sku?: string;
    name?: string;
    url?: string;
    quantity: number;
    is_taxable?: boolean;
    image_url?: string;
    discounts?: Array<{
        id?: string | number;
        discounted_amount?: number;
    }>;
    coupons?: Array<{
        coupons?: {
            coupon_code: {
                id?: number;
                code?: string;
                name?: string;
                discountType?: number;
                discountAmount?: number;
                expiresDate?: number;
                totalDiscount?: number;
            };
        };
    }>;
    discount_amount?: number;
    coupon_amount?: number;
    original_price?: number;
    list_price?: number;
    sale_price?: number;
    extended_list_price?: number;
    extended_sale_price?: number;
    options?: Array<{
        name?: string;
        nameId?: number;
        value?: string;
        valueId?: number;
    }>;
};
export type ProductOption = {
    name?: string;
    nameId?: number;
    value?: string;
    valueId?: number;
};
export type AppliedCoupon = {
    code: string;
    readonly id?: string;
    coupon_type?: '0' | '1' | '2' | '3' | '4' | '5';
    readonly discounted_amount?: number;
    display_name?: string;
};
export type AppliedDiscount = {
    id?: string | number;
    discounted_amount?: number;
};
export type GiftWrapping = {
    name?: string;
    message?: string;
    amount?: number;
};
export type ItemCustom = {
    id?: string;
    sku?: string;
    name?: string;
    quantity?: string;
    list_price?: string;
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
export type CartPostVariant = {
    quantity?: number;
    product_id?: number;
    list_price?: number;
    variant_id?: number;
    name?: string;
    gift_wrapping?: {
        wrap_together?: boolean;
        wrap_details?: Array<{
            id?: number;
            message?: string;
        }>;
    };
};
export type CartPostModifier = {
    quantity: number;
    product_id: number;
    list_price?: number;
    name?: string;
    option_selections?: Array<{
        option_id?: number;
        option_value?: number;
        name?: string;
        value?: string;
        nameId?: number;
        valueId?: number;
    }>;
};
export type CartLineItemUpdatePut = {
    line_item?: CartPostVariant | CartPostModifier;
    gift_certificates?: Array<{
        name: string;
        theme: 'Birthday' | 'Boy' | 'Celebration' | 'Christmas' | 'General' | 'Girl';
        amount: number;
        quantity: number;
        sender: {
            name?: string;
            email?: string;
        };
        recipient: {
            name?: string;
            email?: string;
        };
        message?: string;
    }>;
    custom_items?: CartPostCustomItem;
    version?: number;
};
export type CartLineItemDelete = {
    version?: number;
};
export type RedirectUrlsPost = {
    query_params?: {
        key?: string;
        value?: string;
    };
};
export type CartLineItemUpdatePost = {
    line_items?: Array<CartPostVariant> | Array<CartPostModifier>;
    gift_certificates?: Array<{
        name: string;
        theme: 'Birthday' | 'Boy' | 'Celebration' | 'Christmas' | 'General' | 'Girl';
        amount: number;
        quantity: number;
        sender: {
            name?: string;
            email?: string;
        };
        recipient: {
            name?: string;
            email?: string;
        };
        message?: string;
    }>;
    custom_items?: CartPostCustomItem;
    version?: number;
};
export type CartPostCustomItem = Array<{
    sku?: string;
    name?: string;
    quantity?: number;
    list_price?: number;
    image_url?: string;
}>;
export type CartSettings = {
    allow_purchasing?: boolean;
};
export type ChannelCartSettings = {
    allow_purchasing?: boolean | null;
};
export type ChannelCartSettingsRequest = ChannelCartSettings & unknown;
export type ChannelCartSettingsResponse = {
    data?: ChannelCartSettings;
    meta?: MetaCollectionOpen;
};
export type GlobalCartSettingsRequest = CartSettings & unknown;
export type GlobalCartSettingsResponse = {
    data?: CartSettings;
    meta?: MetaCollectionOpen;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: {
        [key: string]: unknown;
    };
};
export type LineItemsGet = {
    physical_items?: Array<ItemPhysicalGet>;
    digital_items?: Array<ItemDigitalGet>;
    gift_certificates?: Array<ItemGiftCertificateGet>;
    custom_items?: Array<ItemCustomGet>;
};
export type ItemPhysicalGet = {
    id?: string;
    parent_id?: string;
    variant_id: number;
    product_id: number;
    sku?: string;
    name?: string;
    url?: string;
    quantity: number;
    taxable?: boolean;
    image_url?: string;
    discounts?: Array<{
        id?: string | number;
        discounted_amount?: number;
    }>;
    coupons?: number | Array<{
        id?: number;
        code: string;
        name?: string;
        discountType?: 0 | 1 | 2 | 3 | 4;
        discountAmount?: number;
        expiresDate?: number;
        totalDiscount?: number;
    }>;
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
    gift_wrapping?: {
        name?: string;
        message?: string;
        amount?: number;
    };
} & unknown;
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type MetafieldResponse = {
    data?: Metafield;
};
export type Metafield = MetafieldBase & {
    id?: string;
    date_created?: string;
    date_modified?: string;
    readonly owner_client_id?: string;
};
export type MetafieldBase = {
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    resource_type?: 'brand' | 'product' | 'variant' | 'category' | 'cart';
    readonly resource_id?: string;
};
export type MetafieldBasePost = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetaFieldCollectionResponse = {
    data?: Metafield;
    meta?: MetaCollectionOpen;
};
export type MetaFieldCollectionResponseBatch = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponseBatchPostPut = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccessPostPut = {
    data?: Array<Metafield>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccessDelete = {
    data?: Array<number>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type _Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type WriteCollectionPartialSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type CollectionMeta = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
        links?: {
            previous?: string;
            current?: string;
            next?: string;
        };
    };
    [key: string]: unknown | {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
        links?: {
            previous?: string;
            current?: string;
            next?: string;
        };
    } | undefined;
};
export type MetaCollectionOpen = {
    [key: string]: unknown;
};
export type AppliedCouponWritable = {
    code: string;
    display_name?: string;
};
export type MetafieldWritable = MetafieldBaseWritable & {
    id?: string;
    date_created?: string;
    date_modified?: string;
};
export type MetafieldBaseWritable = {
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    resource_type?: 'brand' | 'product' | 'variant' | 'category' | 'cart';
};
export type ErrorDetailWritable = {
    [key: string]: unknown;
};
export type MetaCollectionOpenWritable = {
    [key: string]: unknown;
};
export type Accept = string;
export type ContentType = string;
export type CartId = string;
export type CartId2 = string;
export type LineItems2 = Array<'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options'>;
export type PageParam = number;
export type MetafieldIdParam = number;
export type MetafieldKeyParam = string;
export type MetafieldKeyInParam = Array<string>;
export type MetafieldNamespaceParam = string;
export type MetafieldNamespaceInParam = Array<string>;
export type LimitParam = number;
export type DateCreatedMin = string;
export type DateCreatedMax = string;
export type DateModifiedMax = string;
export type DateModifiedMin = string;
export type DirectionParam = 'asc' | 'desc';
export type IncludeFieldsParamMetafields = Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified'>;
export type CreateCartData = {
    body: CartCreatePostData;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        include?: Array<'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners'>;
    };
    url: '/carts';
};
export type CreateCartResponses = {
    201: {
        data?: CartFull;
        meta?: MetaCollectionOpen;
    };
};
export type CreateCartResponse = CreateCartResponses[keyof CreateCartResponses];
export type AddCartLineItemsData = {
    body: CartLineItemUpdatePost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        cartId: string;
    };
    query?: {
        include?: Array<'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners'>;
    };
    url: '/carts/{cartId}/items';
};
export type AddCartLineItemsResponses = {
    201: {
        data?: CartFull;
        meta?: MetaCollectionOpen;
    };
};
export type AddCartLineItemsResponse = AddCartLineItemsResponses[keyof AddCartLineItemsResponses];
export type CreateCartRedirectUrlData = {
    body?: RedirectUrlsPost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        cartId: string;
    };
    query?: never;
    url: '/carts/{cartId}/redirect_urls';
};
export type CreateCartRedirectUrlResponses = {
    201: {
        data?: {
            cart_url?: string;
            checkout_url?: string;
            embedded_checkout_url?: string;
        };
        meta?: MetaCollectionOpen;
    };
};
export type CreateCartRedirectUrlResponse = CreateCartRedirectUrlResponses[keyof CreateCartRedirectUrlResponses];
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
        include?: Array<'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners'>;
    };
    url: '/carts/{cartId}/items/{itemId}';
};
export type DeleteCartLineItemErrors = {
    409: ErrorResponse;
};
export type DeleteCartLineItemError = DeleteCartLineItemErrors[keyof DeleteCartLineItemErrors];
export type DeleteCartLineItemResponses = {
    200: CartFull;
    204: void;
};
export type DeleteCartLineItemResponse = DeleteCartLineItemResponses[keyof DeleteCartLineItemResponses];
export type UpdateCartLineItemData = {
    body: CartLineItemUpdatePut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        cartId: string;
        itemId: string;
    };
    query?: {
        include?: Array<'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners'>;
    };
    url: '/carts/{cartId}/items/{itemId}';
};
export type UpdateCartLineItemErrors = {
    409: ErrorResponse;
};
export type UpdateCartLineItemError = UpdateCartLineItemErrors[keyof UpdateCartLineItemErrors];
export type UpdateCartLineItemResponses = {
    200: {
        data?: CartFull;
        meta?: MetaCollectionOpen;
    };
};
export type UpdateCartLineItemResponse = UpdateCartLineItemResponses[keyof UpdateCartLineItemResponses];
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
    204: void;
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
        include?: Array<'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners'>;
    };
    url: '/carts/{cartId}';
};
export type GetCartErrors = {
    404: unknown;
};
export type GetCartResponses = {
    200: {
        data?: CartFull;
        meta?: MetaCollectionOpen;
    };
};
export type GetCartResponse = GetCartResponses[keyof GetCartResponses];
export type UpdateCartData = {
    body: CartUpdatePutRequestData;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        cartId: string;
    };
    query?: {
        include?: Array<'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners'>;
    };
    url: '/carts/{cartId}';
};
export type UpdateCartErrors = {
    409: ErrorResponse;
};
export type UpdateCartError = UpdateCartErrors[keyof UpdateCartErrors];
export type UpdateCartResponses = {
    201: {
        data?: CartFull;
        meta?: MetaCollectionOpen;
    };
};
export type UpdateCartResponse = UpdateCartResponses[keyof UpdateCartResponses];
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
    body: GlobalCartSettingsRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/carts/settings';
};
export type UpdateGlobalCartSettingsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
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
    body: ChannelCartSettingsRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/carts/settings/channels/{channel_id}';
};
export type UpdateChannelCartSettingsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    401: ErrorResponse;
    422: ErrorResponse;
};
export type UpdateChannelCartSettingsError = UpdateChannelCartSettingsErrors[keyof UpdateChannelCartSettingsErrors];
export type UpdateChannelCartSettingsResponses = {
    200: ChannelCartSettingsResponse;
};
export type UpdateChannelCartSettingsResponse = UpdateChannelCartSettingsResponses[keyof UpdateChannelCartSettingsResponses];
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
        direction?: 'asc' | 'desc';
    };
    url: '/carts/{cart_id}/metafields';
};
export type GetCartMetafieldsResponses = {
    200: MetafieldResponse;
};
export type GetCartMetafieldsResponse = GetCartMetafieldsResponses[keyof GetCartMetafieldsResponses];
export type CreateCartMetafieldData = {
    body: MetafieldBasePost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        cart_id: string;
    };
    query?: never;
    url: '/carts/{cart_id}/metafields';
};
export type CreateCartMetafieldErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
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
    204: void;
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
        direction?: 'asc' | 'desc';
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
    body: MetafieldBasePost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        cart_id: string;
        metafield_id: number;
    };
    query?: never;
    url: '/carts/{cart_id}/metafields/{metafield_id}';
};
export type UpdateCartMetafieldErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateCartMetafieldError = UpdateCartMetafieldErrors[keyof UpdateCartMetafieldErrors];
export type UpdateCartMetafieldResponses = {
    200: MetaFieldCollectionResponse;
};
export type UpdateCartMetafieldResponse = UpdateCartMetafieldResponses[keyof UpdateCartMetafieldResponses];
export type DeleteCartsMetafieldsData = {
    body?: Array<number>;
    path?: never;
    query?: never;
    url: '/carts/metafields';
};
export type DeleteCartsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
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
        direction?: 'asc' | 'desc';
        include_fields?: Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified'>;
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
    body?: Array<MetafieldBasePost & {
        resource_id: string;
    }>;
    path?: never;
    query?: never;
    url: '/carts/metafields';
};
export type CreateCartsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateCartsMetafieldsError = CreateCartsMetafieldsErrors[keyof CreateCartsMetafieldsErrors];
export type CreateCartsMetafieldsResponses = {
    200: MetaFieldCollectionResponseBatchPostPut;
};
export type CreateCartsMetafieldsResponse = CreateCartsMetafieldsResponses[keyof CreateCartsMetafieldsResponses];
export type UpdateCartsMetafieldsData = {
    body?: Array<MetafieldBasePost & {
        id: string;
    }>;
    path?: never;
    query?: never;
    url: '/carts/metafields';
};
export type UpdateCartsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateCartsMetafieldsError = UpdateCartsMetafieldsErrors[keyof UpdateCartsMetafieldsErrors];
export type UpdateCartsMetafieldsResponses = {
    200: MetaFieldCollectionResponseBatchPostPut;
};
export type UpdateCartsMetafieldsResponse = UpdateCartsMetafieldsResponses[keyof UpdateCartsMetafieldsResponses];
