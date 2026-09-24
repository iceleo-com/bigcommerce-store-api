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
        theme: 'birthday.html' | 'boy.html' | 'celebration.html' | 'christmas.html' | 'general.html' | 'girl.html';
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
        theme: 'birthday.html' | 'boy.html' | 'celebration.html' | 'christmas.html' | 'general.html' | 'girl.html';
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
        theme: 'birthday.html' | 'boy.html' | 'celebration.html' | 'christmas.html' | 'general.html' | 'girl.html';
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
    theme: 'birthday.html' | 'boy.html' | 'celebration.html' | 'christmas.html' | 'general.html' | 'girl.html';
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
    parent_id?: string;
    customer_id?: number;
    email?: string;
    currency?: {
        code?: string;
    };
    tax_included?: boolean;
    base_amount?: number;
    discount_amount?: number;
    cart_amount?: number;
    coupons?: Array<AppliedCoupon>;
    discounts?: Array<{
        id?: string;
        discounted_amount?: number;
    }>;
    line_items?: LineItemsGet;
    created_time?: string;
    updated_time?: string;
    channel_id?: number;
    locale?: string;
    promotions?: {
        banners?: {
            id?: string;
            type?: string;
            page?: Array<string>;
            text?: string;
        };
    };
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
    theme: 'birthday.html' | 'boy.html' | 'celebration.html' | 'christmas.html' | 'general.html' | 'girl.html';
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
    is_taxable?: boolean;
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
    variant_id?: number;
    product_id?: number;
    sku?: string;
    name?: string;
    url?: string;
    quantity?: number;
    is_taxable?: boolean;
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
        theme: 'birthday.html' | 'boy.html' | 'celebration.html' | 'christmas.html' | 'general.html' | 'girl.html';
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
};
export type CartLineItemUpdatePost = {
    line_items?: unknown;
    gift_certificates?: Array<{
        name: string;
        theme: 'birthday.html' | 'boy.html' | 'celebration.html' | 'christmas.html' | 'general.html' | 'girl.html';
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
};
export type CartPostCustomItem = Array<{
    sku?: string;
    name?: string;
    quantity?: number;
    list_price?: number;
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
    variant_id: number;
    product_id: number;
    sku?: string;
    name?: string;
    weight?: number;
    dimensions?: {
        height?: number;
        width?: number;
        depth?: number;
    };
    url?: string;
    quantity: number;
    is_taxable?: boolean;
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
    options?: Array<{
        name?: string;
        nameId?: number;
        value?: string;
        valueId?: number | string;
    }>;
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
} & CollectionMeta;
export type Metafield = MetafieldBase & {
    id?: number;
    date_created?: string;
    date_modified?: string;
};
export type MetafieldBase = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    resource_type?: 'brand' | 'product' | 'variant' | 'category' | 'cart';
    readonly resource_id?: string;
};
export type MetafieldPost = MetafieldBasePost;
export type MetafieldBasePost = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetaFieldCollectionResponse = {
    data?: Metafield;
    meta?: CollectionMeta;
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
};
export type MetafieldBaseWritable = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    resource_type?: 'brand' | 'product' | 'variant' | 'category' | 'cart';
};
export type MetaCollectionOpenWritable = {
    [key: string]: unknown;
};
export type Accept = string;
export type ContentType = string;
export type CartId = string;
export type CartId2 = string;
export type LineItems2 = 'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options';
export type PageParam = number;
export type MetafieldIdParam = number;
export type MetafieldKeyParam = string;
export type MetafieldNamespaceParam = string;
export type LimitParam = number;
export type DirectionParam = 'asc' | 'desc';
export type CreateACartData = {
    body: CartCreatePostData;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        include?: 'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners';
    };
    url: '/carts';
};
export type CreateACartResponses = {
    201: CartFull;
};
export type CreateACartResponse = CreateACartResponses[keyof CreateACartResponses];
export type AddCartLineItemData = {
    body: CartLineItemUpdatePost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        cartId: string;
    };
    query?: {
        include?: 'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners';
    };
    url: '/carts/{cartId}/items';
};
export type AddCartLineItemResponses = {
    201: CartFull;
};
export type AddCartLineItemResponse = AddCartLineItemResponses[keyof AddCartLineItemResponses];
export type CreateCartRedirectUrlData = {
    body?: never;
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
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        cartId: string;
        itemId: string;
    };
    query?: {
        include?: 'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners';
    };
    url: '/carts/{cartId}/items/{itemId}';
};
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
        include?: 'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners';
    };
    url: '/carts/{cartId}/items/{itemId}';
};
export type UpdateCartLineItemResponses = {
    200: CartFull;
};
export type UpdateCartLineItemResponse = UpdateCartLineItemResponses[keyof UpdateCartLineItemResponses];
export type DeleteACartData = {
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
export type DeleteACartResponses = {
    204: void;
};
export type DeleteACartResponse = DeleteACartResponses[keyof DeleteACartResponses];
export type GetACartData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        cartId: string;
    };
    query?: {
        include?: 'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners';
    };
    url: '/carts/{cartId}';
};
export type GetACartErrors = {
    404: unknown;
};
export type GetACartResponses = {
    200: CartFull;
};
export type GetACartResponse = GetACartResponses[keyof GetACartResponses];
export type UpdateACartData = {
    body: CartUpdatePutRequestData;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        cartId: string;
    };
    query?: {
        include?: 'redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners';
    };
    url: '/carts/{cartId}';
};
export type UpdateACartResponses = {
    201: CartFull;
};
export type UpdateACartResponse = UpdateACartResponses[keyof UpdateACartResponses];
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
export type GetAllCartMetafieldsData = {
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
export type GetAllCartMetafieldsErrors = {
    409: ErrorResponse;
    422: ErrorResponse;
};
export type GetAllCartMetafieldsError = GetAllCartMetafieldsErrors[keyof GetAllCartMetafieldsErrors];
export type GetAllCartMetafieldsResponses = {
    200: MetafieldResponse;
};
export type GetAllCartMetafieldsResponse = GetAllCartMetafieldsResponses[keyof GetAllCartMetafieldsResponses];
export type CreateCartMetafieldsByCartIdData = {
    body: MetafieldPost;
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
export type CreateCartMetafieldsByCartIdErrors = {
    404: NotFound;
};
export type CreateCartMetafieldsByCartIdError = CreateCartMetafieldsByCartIdErrors[keyof CreateCartMetafieldsByCartIdErrors];
export type CreateCartMetafieldsByCartIdResponses = {
    200: MetaFieldCollectionResponse;
};
export type CreateCartMetafieldsByCartIdResponse = CreateCartMetafieldsByCartIdResponses[keyof CreateCartMetafieldsByCartIdResponses];
export type DeleteCartMetafieldByIdData = {
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
export type DeleteCartMetafieldByIdResponses = {
    204: void;
};
export type DeleteCartMetafieldByIdResponse = DeleteCartMetafieldByIdResponses[keyof DeleteCartMetafieldByIdResponses];
export type GetACartMetafieldData = {
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
export type GetACartMetafieldErrors = {
    409: ErrorResponse;
    422: ErrorResponse;
    500: unknown;
};
export type GetACartMetafieldError = GetACartMetafieldErrors[keyof GetACartMetafieldErrors];
export type GetACartMetafieldResponses = {
    200: MetafieldResponse;
};
export type GetACartMetafieldResponse = GetACartMetafieldResponses[keyof GetACartMetafieldResponses];
export type UpdateCartMetafieldsByCartIdData = {
    body: MetafieldPost;
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
export type UpdateCartMetafieldsByCartIdErrors = {
    404: NotFound;
};
export type UpdateCartMetafieldsByCartIdError = UpdateCartMetafieldsByCartIdErrors[keyof UpdateCartMetafieldsByCartIdErrors];
export type UpdateCartMetafieldsByCartIdResponses = {
    200: MetaFieldCollectionResponse;
};
export type UpdateCartMetafieldsByCartIdResponse = UpdateCartMetafieldsByCartIdResponses[keyof UpdateCartMetafieldsByCartIdResponses];
