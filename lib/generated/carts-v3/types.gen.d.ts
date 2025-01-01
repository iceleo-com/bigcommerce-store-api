export type AppliedCoupon = {
    code: string;
    readonly id?: string;
    readonly coupon_type?: '0' | '1' | '2' | '3' | '4' | '5';
    readonly discounted_amount?: number;
    display_name?: string;
};
export type coupon_type = '0' | '1' | '2' | '3' | '4' | '5';
export type AppliedDiscount = {
    id?: (string | number);
    discounted_amount?: number;
};
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
        id?: (string | number);
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
export type Cart_Full = {
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
            page?: Array<(string)>;
            text?: string;
        };
    };
    version?: number;
};
export type Cart_Line_Item_Update_Post = {
    line_items?: (Array<cart_PostVariant> | Array<cart_PostModifier>);
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
    custom_items?: cart_PostCustomItem;
    version?: number;
};
export type Cart_Line_Item_Update_Put = {
    line_item?: (cart_PostVariant | cart_PostModifier);
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
    custom_items?: cart_PostCustomItem;
    version?: number;
};
export type cart_PostCustomItem = Array<{
    sku?: string;
    name?: string;
    quantity?: number;
    list_price?: number;
}>;
export type cart_PostModifier = {
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
export type cart_PostVariant = {
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
export type CartCreatePostData = {
    customer_id?: number;
    line_items?: Array<(cart_PostVariant | cart_PostModifier)>;
    custom_items?: cart_PostCustomItem;
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
export type CartLineItemDelete = {
    version?: number;
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
export type CartSettings = {
    allow_purchasing?: boolean;
};
export type CartUpdatePutRequestData = {
    customer_id?: number;
    version?: number;
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
export type theme = 'birthday.html' | 'boy.html' | 'celebration.html' | 'christmas.html' | 'general.html' | 'girl.html';
export type ChannelCartSettings = {
    allow_purchasing?: (boolean) | null;
};
export type ChannelCartSettingsRequest = ChannelCartSettings & unknown;
export type ChannelCartSettingsResponse = {
    data?: ChannelCartSettings;
    meta?: metaCollection_open;
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
    [key: string]: unknown;
};
export type ContactEntity = {
    name?: string;
    email?: string;
};
export type Currency = {
    code?: string;
};
export type Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type ErrorDetail = {
    [key: string]: unknown;
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
export type GiftWrapping = {
    name?: string;
    message?: string;
    amount?: number;
};
export type GlobalCartSettingsRequest = CartSettings & unknown;
export type GlobalCartSettingsResponse = {
    data?: CartSettings;
    meta?: metaCollection_open;
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
        id?: (string | number);
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
    download_file_urls?: Array<(string)>;
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
        id?: (string | number);
        discounted_amount?: number;
    }>;
    coupons?: (number | Array<{
        id?: number;
        code: string;
        name?: string;
        discountType?: 0 | 1 | 2 | 3 | 4;
        discountAmount?: number;
        expiresDate?: number;
        totalDiscount?: number;
    }>);
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
    download_file_urls?: Array<(string)>;
    download_page_url?: string;
    download_size?: string;
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
        id?: (string | number);
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
        id?: (string | number);
        discounted_amount?: number;
    }>;
    coupons?: (number | Array<{
        id?: number;
        code: string;
        name?: string;
        discountType?: 0 | 1 | 2 | 3 | 4;
        discountAmount?: number;
        expiresDate?: number;
        totalDiscount?: number;
    }>);
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
export type LineItems = {
    physical_items: Array<ItemPhysical>;
    digital_items: Array<ItemDigital>;
    gift_certificates?: Array<ItemGiftCertificate>;
    custom_items?: Array<ItemCustom>;
};
export type LineItemsGet = {
    physical_items?: Array<ItemPhysicalGet>;
    digital_items?: Array<ItemDigitalGet>;
    gift_certificates?: Array<ItemGiftCertificateGet>;
    custom_items?: Array<ItemCustomGet>;
};
export type metaCollection_open = {
    [key: string]: unknown;
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
export type permission_set = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type resource_type = 'brand' | 'product' | 'variant' | 'category' | 'cart';
export type MetafieldBase_Post = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<(number)>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type MetaFieldCollectionResponse = {
    data?: Metafield;
    meta?: metaCollection_open;
};
export type MetaFieldCollectionResponse_Batch = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponse_Batch_POST_PUT = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccess_DELETE = {
    data?: Array<(number)>;
    errors?: Array<Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccess_POST_PUT = {
    data?: Array<Metafield>;
    errors?: Array<Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetafieldResponse = {
    data?: Metafield;
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type ParameterAccept = string;
export type Parametercart_id = string;
export type ParametercartId = string;
export type ParameterContentType = string;
export type Parameterdate_created_max = string;
export type Parameterdate_created_min = string;
export type Parameterdate_modified_max = string;
export type Parameterdate_modified_min = string;
export type ParameterDirectionParam = 'asc' | 'desc';
export type ParameterIncludeFieldsParamMetafields = Array<('resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified')>;
export type ParameterLimitParam = number;
export type Parameterline_items = Array<('redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options')>;
export type ParameterMetafieldIdParam = number;
export type ParameterMetafieldKeyInParam = Array<(string)>;
export type ParameterMetafieldKeyParam = string;
export type ParameterMetafieldNamespaceInParam = Array<(string)>;
export type ParameterMetafieldNamespaceParam = string;
export type ParameterPageParam = number;
export type ProductOption = {
    name?: string;
    nameId?: number;
    value?: string;
    valueId?: number;
};
export type ProductOptionSelection = {
    option_id?: number;
    option_value?: string;
};
export type Redirect_urls_Post = {
    query_params?: {
        key?: string;
        value?: string;
    };
};
export type WriteCollectionPartialSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type CreateCartData = {
    body: CartCreatePostData;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        include?: Array<('redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners')>;
    };
};
export type CreateCartResponse = ({
    data?: Cart_Full;
    meta?: metaCollection_open;
});
export type CreateCartError = unknown;
export type AddCartLineItemsData = {
    body: Cart_Line_Item_Update_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        cartId: string;
    };
    query?: {
        include?: Array<('redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners')>;
    };
};
export type AddCartLineItemsResponse = ({
    data?: Cart_Full;
    meta?: metaCollection_open;
});
export type AddCartLineItemsError = unknown;
export type CreateCartRedirectUrlData = {
    body?: Redirect_urls_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        cartId: string;
    };
};
export type CreateCartRedirectUrlResponse = ({
    data?: {
        cart_url?: string;
        checkout_url?: string;
        embedded_checkout_url?: string;
    };
    meta?: metaCollection_open;
});
export type CreateCartRedirectUrlError = unknown;
export type UpdateCartLineItemData = {
    body: Cart_Line_Item_Update_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        cartId: string;
        itemId: string;
    };
    query?: {
        include?: Array<('redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners')>;
    };
};
export type UpdateCartLineItemResponse = ({
    data?: Cart_Full;
    meta?: metaCollection_open;
});
export type UpdateCartLineItemError = (ErrorResponse);
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
        include?: Array<('redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners')>;
    };
};
export type DeleteCartLineItemResponse = (Cart_Full | void);
export type DeleteCartLineItemError = (ErrorResponse);
export type GetCartData = {
    headers: {
        Accept: string;
    };
    path: {
        cartId: string;
    };
    query?: {
        include?: Array<('redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners')>;
    };
};
export type GetCartResponse = ({
    data?: Cart_Full;
    meta?: metaCollection_open;
});
export type GetCartError = (unknown);
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
        include?: Array<('redirect_urls' | 'line_items.physical_items.options' | 'line_items.digital_items.options' | 'promotions.banners')>;
    };
};
export type UpdateCartResponse = ({
    data?: Cart_Full;
    meta?: metaCollection_open;
});
export type UpdateCartError = (ErrorResponse);
export type DeleteCartData = {
    headers: {
        Accept: string;
    };
    path: {
        cartId: string;
    };
};
export type DeleteCartResponse = (void);
export type DeleteCartError = unknown;
export type GetGlobalCartSettingsData = {
    headers: {
        Accept: string;
    };
};
export type GetGlobalCartSettingsResponse = (GlobalCartSettingsResponse);
export type GetGlobalCartSettingsError = (ErrorResponse);
export type UpdateGlobalCartSettingsData = {
    body: GlobalCartSettingsRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateGlobalCartSettingsResponse = (GlobalCartSettingsResponse);
export type UpdateGlobalCartSettingsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | ErrorResponse);
export type GetChannelCartSettingsData = {
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
};
export type GetChannelCartSettingsResponse = (ChannelCartSettingsResponse);
export type GetChannelCartSettingsError = (ErrorResponse);
export type UpdateChannelCartSettingsData = {
    body: ChannelCartSettingsRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        channel_id: number;
    };
};
export type UpdateChannelCartSettingsResponse = (ChannelCartSettingsResponse);
export type UpdateChannelCartSettingsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | ErrorResponse);
export type GetCartMetafieldsData = {
    headers: {
        Accept: string;
    };
    path: {
        cart_id: string;
    };
    query?: {
        direction?: 'asc' | 'desc';
        key?: string;
        limit?: number;
        namespace?: string;
        page?: number;
    };
};
export type GetCartMetafieldsResponse = (MetafieldResponse);
export type GetCartMetafieldsError = unknown;
export type CreateCartMetafieldData = {
    body: MetafieldBase_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        cart_id: string;
    };
};
export type CreateCartMetafieldResponse = (MetaFieldCollectionResponse);
export type CreateCartMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | ErrorResponse);
export type GetCartMetafieldData = {
    headers: {
        Accept: string;
    };
    path: {
        cart_id: string;
        metafield_id: number;
    };
    query?: {
        direction?: 'asc' | 'desc';
        key?: string;
        limit?: number;
        namespace?: string;
        page?: number;
    };
};
export type GetCartMetafieldResponse = (MetafieldResponse);
export type GetCartMetafieldError = (NotFound);
export type UpdateCartMetafieldData = {
    body: MetafieldBase_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        cart_id: string;
        metafield_id: number;
    };
};
export type UpdateCartMetafieldResponse = (MetaFieldCollectionResponse);
export type UpdateCartMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type DeleteCartMetafieldData = {
    headers: {
        Accept: string;
    };
    path: {
        cart_id: string;
        metafield_id: number;
    };
};
export type DeleteCartMetafieldResponse = (void);
export type DeleteCartMetafieldError = (NotFound);
export type GetCartsMetafieldsData = {
    query?: {
        'date_created:max'?: string;
        'date_created:min'?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        direction?: 'asc' | 'desc';
        include_fields?: Array<('resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified')>;
        key?: string;
        'key:in'?: Array<(string)>;
        limit?: number;
        namespace?: string;
        'namespace:in'?: Array<(string)>;
        page?: number;
    };
};
export type GetCartsMetafieldsResponse = (MetaFieldCollectionResponse_Batch);
export type GetCartsMetafieldsError = unknown;
export type CreateCartsMetafieldsData = {
    body?: Array<(MetafieldBase_Post & {
        resource_id: string;
    })>;
};
export type CreateCartsMetafieldsResponse = (MetaFieldCollectionResponse_Batch_POST_PUT);
export type CreateCartsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type UpdateCartsMetafieldsData = {
    body?: Array<(MetafieldBase_Post & {
        id: string;
    })>;
};
export type UpdateCartsMetafieldsResponse = (MetaFieldCollectionResponse_Batch_POST_PUT);
export type UpdateCartsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type DeleteCartsMetafieldsData = {
    body?: Array<(number)>;
};
export type DeleteCartsMetafieldsResponse = (MetaFieldCollectionDeleteResponseSuccess);
export type DeleteCartsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_DELETE);
