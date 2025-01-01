export type categoriesTree_Resp = {
    data?: Array<categoriesTreeNode_Full>;
    meta?: metaEmpty_Full;
};
export type categoriesTreeNode_Full = {
    id?: number;
    parent_id?: number;
    name?: string;
    is_visible?: boolean;
    url?: string;
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
export type DetailedErrors = {
    [key: string]: unknown;
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
export type errorMultiStatus = {
    status?: number;
    title?: string;
    type?: string;
    errors?: DetailedErrors;
};
export type Failed = number;
export type metaCollection_Full = {
    pagination?: pagination_Full;
};
export type metaEmpty_Full = {
    [key: string]: unknown;
};
export type Metafield = {
    id?: number;
    key?: string;
    value?: string;
    namespace?: string;
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    resource_type?: 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
    resource_id?: number;
    description?: string;
    date_created?: string;
    date_modified?: string;
    owner_client_id?: string;
};
export type permission_set = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type resource_type = 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
export type metafield_Base = {
    key: string;
    value: string;
    namespace: string;
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type metafield_Full = {
    readonly id?: number;
} & metafield_Base & {
    resource_type?: 'category' | 'brand' | 'product' | 'variant';
    resource_id?: number;
    readonly date_created?: string;
    readonly date_modified?: string;
};
export type resource_type2 = 'category' | 'brand' | 'product' | 'variant';
export type MetafieldBase_Post = {
    key: string;
    value: string;
    namespace: string;
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type MetafieldBase_Put = {
    key?: string;
    value?: string;
    namespace?: string;
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<(number)>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponse_POST_PUT = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: CollectionMeta;
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
export type MultiStatus = {
    data?: productVariant_Full;
    errors?: errorMultiStatus;
    meta?: metaCollection_Full;
};
export type pagination_Full = {
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
export type ParameterAccept = string;
export type ParameterContentType = string;
export type Parameterdate_created_max = string;
export type Parameterdate_created_min = string;
export type Parameterdate_modified_max = string;
export type Parameterdate_modified_min = string;
export type ParameterDirectionParam = 'asc' | 'desc';
export type ParameterExcludeFieldsParam = Array<(string)>;
export type ParameterIncludeFieldsParam = Array<(string)>;
export type ParameterIncludeFieldsParamMetafields = Array<('resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified')>;
export type ParameterLimitParam = number;
export type ParameterMetafieldIdParam = number;
export type ParameterMetafieldKeyInParam = Array<(string)>;
export type ParameterMetafieldKeyParam = string;
export type ParameterMetafieldNamespaceInParam = Array<(string)>;
export type ParameterMetafieldNamespaceParam = string;
export type ParameterPageParam = number;
export type ParameterProductIdInParam = Array<(number)>;
export type ParameterProductIdPathParam = number;
export type ParameterSkuParam = string;
export type ParameterUpcParam = string;
export type ParameterVariantIdParam = number;
export type productVariant_Base = {
    cost_price?: (number) | null;
    price?: (number) | null;
    sale_price?: (number) | null;
    retail_price?: (number) | null;
    weight?: (number) | null;
    width?: (number) | null;
    height?: (number) | null;
    depth?: (number) | null;
    is_free_shipping?: boolean;
    fixed_cost_shipping_price?: (number) | null;
    purchasing_disabled?: boolean;
    purchasing_disabled_message?: string;
    upc?: (string) | null;
    image_url?: string;
    inventory_level?: (number) | null;
    inventory_warning_level?: (number) | null;
    bin_picking_number?: (string) | null;
    mpn?: (string) | null;
    gtin?: (string) | null;
};
export type productVariant_Full = productVariant_Base & {
    id?: number;
    product_id?: number;
    sku?: string;
    sku_id?: (number) | null;
    option_values?: Array<productVariantOptionValue_Full>;
    calculated_price?: number;
    calculated_weight?: number;
};
export type productVariant_Post = {
    cost_price?: (number) | null;
    price?: (number) | null;
    sale_price?: (number) | null;
    retail_price?: (number) | null;
    weight?: (number) | null;
    width?: (number) | null;
    height?: (number) | null;
    depth?: (number) | null;
    is_free_shipping?: boolean;
    fixed_cost_shipping_price?: (number) | null;
    purchasing_disabled?: boolean;
    purchasing_disabled_message?: string;
    upc?: (string) | null;
    inventory_level?: (number) | null;
    inventory_warning_level?: (number) | null;
    bin_picking_number?: (string) | null;
    image_url?: string;
    gtin?: (string) | null;
    mpn?: (string) | null;
} & {
    product_id?: number;
    sku?: string;
    option_values?: Array<productVariantOptionValue_Full>;
};
export type productVariant_Put = productVariant_Base & {
    product_id?: number;
    sku?: string;
};
export type productVariantOptionValue_Base = {
    id?: number;
    option_id?: number;
};
export type productVariantOptionValue_Full = {
    option_display_name?: string;
    label?: string;
} & productVariantOptionValue_Base;
export type Success = number;
export type Total = number;
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
export type GetProductVariantsData = {
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<(string)>;
        limit?: number;
        page?: number;
    };
};
export type GetProductVariantsResponse = ({
    data?: Array<productVariant_Full>;
    meta?: metaCollection_Full;
});
export type GetProductVariantsError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type CreateProductVariantData = {
    body: productVariant_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
};
export type CreateProductVariantResponse = ({
    data?: productVariant_Full;
    meta?: metaEmpty_Full;
} | MultiStatus);
export type CreateProductVariantError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type GetProductVariantData = {
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        variant_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<(string)>;
    };
};
export type GetProductVariantResponse = ({
    data?: productVariant_Full;
    meta?: metaEmpty_Full;
});
export type GetProductVariantError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type UpdateProductVariantData = {
    body: productVariant_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        variant_id: number;
    };
};
export type UpdateProductVariantResponse = ({
    data?: productVariant_Full;
    meta?: metaEmpty_Full;
} | MultiStatus);
export type UpdateProductVariantError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type DeleteProductVariantData = {
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        variant_id: number;
    };
};
export type DeleteProductVariantResponse = (void);
export type DeleteProductVariantError = unknown;
export type GetProductVariantMetafieldsData = {
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        variant_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<(string)>;
        key?: string;
        limit?: number;
        namespace?: string;
        page?: number;
    };
};
export type GetProductVariantMetafieldsResponse = ({
    data?: Array<metafield_Full>;
    meta?: categoriesTree_Resp;
});
export type GetProductVariantMetafieldsError = unknown;
export type CreateProductVariantMetafieldData = {
    body: metafield_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        variant_id: number;
    };
};
export type CreateProductVariantMetafieldResponse = ({
    data?: metafield_Full;
    meta?: metaEmpty_Full;
});
export type CreateProductVariantMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | {
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type GetProductVariantMetafieldData = {
    headers: {
        Accept: string;
    };
    path: {
        metafield_id: number;
        product_id: number;
        variant_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<(string)>;
    };
};
export type GetProductVariantMetafieldResponse = ({
    data?: metafield_Full;
    meta?: metaEmpty_Full;
});
export type GetProductVariantMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type UpdateProductVariantMetafieldData = {
    body: metafield_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        metafield_id: number;
        product_id: number;
        variant_id: number;
    };
};
export type UpdateProductVariantMetafieldResponse = ({
    data?: metafield_Full;
    meta?: metaEmpty_Full;
});
export type UpdateProductVariantMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type DeleteProductVariantMetafieldData = {
    headers: {
        Accept: string;
    };
    path: {
        metafield_id: number;
        product_id: number;
        variant_id: number;
    };
};
export type DeleteProductVariantMetafieldResponse = (void);
export type DeleteProductVariantMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type CreateProductVariantImageData = {
    body?: {
        image_url?: string;
    };
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        variant_id: number;
    };
};
export type CreateProductVariantImageResponse = ({
    data?: {
        image_url?: string;
    };
    meta?: metaEmpty_Full;
});
export type CreateProductVariantImageError = ({
    [key: string]: unknown;
} | {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} | {
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type GetVariantsData = {
    headers: {
        Accept: string;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        id?: number;
        include_fields?: Array<(string)>;
        limit?: number;
        page?: number;
        'product_id:in'?: Array<(number)>;
        sku?: string;
        upc?: string;
    };
};
export type GetVariantsResponse = ({
    data?: Array<({
        cost_price?: number;
        price?: number;
        sale_price?: number;
        retail_price?: number;
        weight?: number;
        width?: number;
        height?: number;
        depth?: number;
        is_free_shipping?: boolean;
        fixed_cost_shipping_price?: number;
        purchasing_disabled?: boolean;
        purchasing_disabled_message?: string;
        upc?: (string) | null;
        inventory_level?: number;
        inventory_warning_level?: number;
        bin_picking_number?: string;
    } & {
        id?: number;
        product_id?: number;
        sku?: string;
        sku_id?: number;
        option_values?: Array<({
            option_display_name?: string;
            label?: string;
        } & {
            id?: number;
            option_id?: number;
        })>;
        calculated_price?: number;
    })>;
    meta?: metaCollection_Full;
});
export type GetVariantsError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type UpdateVariantsBatchData = {
    body: Array<({
        cost_price?: number;
        price?: number;
        sale_price?: number;
        retail_price?: number;
        weight?: number;
        width?: number;
        height?: number;
        depth?: number;
        is_free_shipping?: boolean;
        fixed_cost_shipping_price?: number;
        purchasing_disabled?: boolean;
        purchasing_disabled_message?: string;
        upc?: (string) | null;
        inventory_level?: number;
        inventory_warning_level?: number;
        bin_picking_number?: string;
    } & {
        id?: number;
    })>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateVariantsBatchResponse = ({
    data?: Array<({
        cost_price?: number;
        price?: number;
        sale_price?: number;
        retail_price?: number;
        weight?: number;
        width?: number;
        height?: number;
        depth?: number;
        is_free_shipping?: boolean;
        fixed_cost_shipping_price?: number;
        purchasing_disabled?: boolean;
        purchasing_disabled_message?: string;
        upc?: (string) | null;
        inventory_level?: number;
        inventory_warning_level?: number;
        bin_picking_number?: string;
    } & {
        id?: number;
        product_id?: number;
        sku?: string;
        sku_id?: number;
        option_values?: Array<({
            option_display_name?: string;
            label?: string;
        } & {
            id?: number;
            option_id?: number;
        })>;
        calculated_price?: number;
    })>;
    meta?: {
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
    };
});
export type UpdateVariantsBatchError = (unknown | {
    batch_errors?: Array<({
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    } & {
        errors?: {
            [key: string]: unknown;
        };
    })>;
});
export type GetVariantsMetafieldsData = {
    headers: {
        Accept: string;
    };
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
export type GetVariantsMetafieldsResponse = (MetaFieldCollectionResponse);
export type GetVariantsMetafieldsError = unknown;
export type CreateVariantsMetafieldsData = {
    body?: Array<(MetafieldBase_Post & {
        resource_id: number;
    })>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateVariantsMetafieldsResponse = (MetaFieldCollectionResponse_POST_PUT);
export type CreateVariantsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type UpdateVariantsMetafieldsData = {
    body?: Array<(MetafieldBase_Put & {
        id: number;
    })>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpdateVariantsMetafieldsResponse = (MetaFieldCollectionResponse_POST_PUT);
export type UpdateVariantsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type DeleteVariantsMetafieldsData = {
    body?: Array<(number)>;
    headers: {
        Accept: string;
    };
};
export type DeleteVariantsMetafieldsResponse = (MetaFieldCollectionDeleteResponseSuccess);
export type DeleteVariantsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_DELETE);
