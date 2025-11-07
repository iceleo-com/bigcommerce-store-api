export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type CategoriesTreeResp = {
    data?: Array<CategoriesTreeNodeFull>;
    meta?: MetaEmptyFull;
};
export type CategoriesTreeNodeFull = {
    id?: number;
    parent_id?: number;
    name?: string;
    is_visible?: boolean;
    url?: string;
};
export type ProductVariantBase = {
    cost_price?: number | null;
    price?: number | null;
    sale_price?: number | null;
    retail_price?: number | null;
    weight?: number | null;
    width?: number | null;
    height?: number | null;
    depth?: number | null;
    is_free_shipping?: boolean;
    fixed_cost_shipping_price?: number | null;
    purchasing_disabled?: boolean;
    purchasing_disabled_message?: string;
    upc?: string | null;
    image_url?: string;
    inventory_level?: number | null;
    inventory_warning_level?: number | null;
    bin_picking_number?: string | null;
    mpn?: string | null;
    gtin?: string | null;
};
export type ProductVariantFull = ProductVariantBase & {
    id?: number;
    product_id?: number;
    sku?: string;
    sku_id?: number | null;
    option_values?: Array<ProductVariantOptionValueFull>;
    calculated_price?: number;
    calculated_weight?: number;
};
export type ProductVariantPost = {
    cost_price?: number | null;
    price?: number | null;
    sale_price?: number | null;
    retail_price?: number | null;
    weight?: number | null;
    width?: number | null;
    height?: number | null;
    depth?: number | null;
    is_free_shipping?: boolean;
    fixed_cost_shipping_price?: number | null;
    purchasing_disabled?: boolean;
    purchasing_disabled_message?: string;
    upc?: string | null;
    inventory_level?: number | null;
    inventory_warning_level?: number | null;
    bin_picking_number?: string | null;
    image_url?: string;
    gtin?: string | null;
    mpn?: string | null;
} & {
    product_id?: number;
    sku?: string;
    option_values?: Array<ProductVariantOptionValueFull>;
};
export type ProductVariantOptionValueFull = {
    option_display_name?: string;
    label?: string;
} & ProductVariantOptionValueBase;
export type ProductVariantOptionValueBase = {
    id?: number;
    option_id?: number;
};
export type MetafieldBase = {
    key: string;
    value: string;
    namespace: string;
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type MetaCollectionFull = {
    pagination?: PaginationFull;
};
export type MultiStatus = {
    data?: ProductVariantFull;
    errors?: ErrorMultiStatus;
    meta?: MetaCollectionFull;
};
export type PaginationFull = {
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
export type MetaEmptyFull = {
    [key: string]: unknown;
};
export type ErrorMultiStatus = {
    status?: number;
    title?: string;
    type?: string;
    errors?: DetailedErrors;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type MetafieldFull = {
    readonly id?: number;
} & MetafieldBase & {
    resource_type?: 'category' | 'brand' | 'product' | 'variant';
    resource_id?: number;
    readonly date_created?: string;
    readonly date_modified?: string;
};
export type ProductVariantPut = ProductVariantBase & {
    product_id?: number;
    sku?: string;
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
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponsePostPut = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: CollectionMeta;
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
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
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
export type Total = number;
export type Success = number;
export type Failed = number;
export type _Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type ErrorDetail = {
    [key: string]: unknown;
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
export type MetafieldBasePost = {
    key: string;
    value: string;
    namespace: string;
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type MetafieldBasePut = {
    key?: string;
    value?: string;
    namespace?: string;
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type MetaEmptyFullWritable = {
    [key: string]: unknown;
};
export type DetailedErrorsWritable = {
    [key: string]: unknown;
};
export type MetafieldFullWritable = MetafieldBase & {
    resource_type?: 'category' | 'brand' | 'product' | 'variant';
    resource_id?: number;
};
export type ErrorDetailWritable = {
    [key: string]: unknown;
};
export type ProductIdPathParam = number;
export type VariantIdParam = number;
export type MetafieldIdParam = number;
export type Accept = string;
export type ContentType = string;
export type PageParam = number;
export type MetafieldKeyParam = string;
export type MetafieldKeyInParam = Array<string>;
export type MetafieldNamespaceParam = string;
export type MetafieldNamespaceInParam = Array<string>;
export type LimitParam = number;
export type DirectionParam = 'asc' | 'desc';
export type DateCreatedMin = string;
export type DateCreatedMax = string;
export type DateModifiedMax = string;
export type DateModifiedMin = string;
export type IncludeFieldsParam = Array<string>;
export type IncludeFieldsParamMetafields = Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified'>;
export type ExcludeFieldsParam = Array<string>;
export type ProductIdInParam = Array<number>;
export type UpcParam = string;
export type SkuParam = string;
export type GetProductVariantsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
        page?: number;
        limit?: number;
    };
    url: '/catalog/products/{product_id}/variants';
};
export type GetProductVariantsErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductVariantsError = GetProductVariantsErrors[keyof GetProductVariantsErrors];
export type GetProductVariantsResponses = {
    200: {
        data?: Array<ProductVariantFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetProductVariantsResponse = GetProductVariantsResponses[keyof GetProductVariantsResponses];
export type CreateProductVariantData = {
    body: ProductVariantPost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/variants';
};
export type CreateProductVariantErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type CreateProductVariantError = CreateProductVariantErrors[keyof CreateProductVariantErrors];
export type CreateProductVariantResponses = {
    200: {
        data?: ProductVariantFull;
        meta?: MetaEmptyFull;
    };
    207: MultiStatus;
};
export type CreateProductVariantResponse = CreateProductVariantResponses[keyof CreateProductVariantResponses];
export type DeleteProductVariantData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        variant_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/variants/{variant_id}';
};
export type DeleteProductVariantResponses = {
    204: void;
};
export type DeleteProductVariantResponse = DeleteProductVariantResponses[keyof DeleteProductVariantResponses];
export type GetProductVariantData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        variant_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/variants/{variant_id}';
};
export type GetProductVariantErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductVariantError = GetProductVariantErrors[keyof GetProductVariantErrors];
export type GetProductVariantResponses = {
    200: {
        data?: ProductVariantFull;
        meta?: MetaEmptyFull;
    };
};
export type GetProductVariantResponse = GetProductVariantResponses[keyof GetProductVariantResponses];
export type UpdateProductVariantData = {
    body: ProductVariantPut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        variant_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/variants/{variant_id}';
};
export type UpdateProductVariantErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type UpdateProductVariantError = UpdateProductVariantErrors[keyof UpdateProductVariantErrors];
export type UpdateProductVariantResponses = {
    200: {
        data?: ProductVariantFull;
        meta?: MetaEmptyFull;
    };
    207: MultiStatus;
};
export type UpdateProductVariantResponse = UpdateProductVariantResponses[keyof UpdateProductVariantResponses];
export type GetProductVariantMetafieldsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        variant_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
        page?: number;
        limit?: number;
        key?: string;
        namespace?: string;
    };
    url: '/catalog/products/{product_id}/variants/{variant_id}/metafields';
};
export type GetProductVariantMetafieldsResponses = {
    200: {
        data?: Array<MetafieldFull>;
        meta?: CategoriesTreeResp;
    };
};
export type GetProductVariantMetafieldsResponse = GetProductVariantMetafieldsResponses[keyof GetProductVariantMetafieldsResponses];
export type CreateProductVariantMetafieldData = {
    body: MetafieldBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        variant_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/variants/{variant_id}/metafields';
};
export type CreateProductVariantMetafieldErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    409: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
    422: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
};
export type CreateProductVariantMetafieldError = CreateProductVariantMetafieldErrors[keyof CreateProductVariantMetafieldErrors];
export type CreateProductVariantMetafieldResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type CreateProductVariantMetafieldResponse = CreateProductVariantMetafieldResponses[keyof CreateProductVariantMetafieldResponses];
export type DeleteProductVariantMetafieldData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        variant_id: number;
        metafield_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}';
};
export type DeleteProductVariantMetafieldErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type DeleteProductVariantMetafieldError = DeleteProductVariantMetafieldErrors[keyof DeleteProductVariantMetafieldErrors];
export type DeleteProductVariantMetafieldResponses = {
    204: void;
};
export type DeleteProductVariantMetafieldResponse = DeleteProductVariantMetafieldResponses[keyof DeleteProductVariantMetafieldResponses];
export type GetProductVariantMetafieldData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        variant_id: number;
        metafield_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}';
};
export type GetProductVariantMetafieldErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductVariantMetafieldError = GetProductVariantMetafieldErrors[keyof GetProductVariantMetafieldErrors];
export type GetProductVariantMetafieldResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type GetProductVariantMetafieldResponse = GetProductVariantMetafieldResponses[keyof GetProductVariantMetafieldResponses];
export type UpdateProductVariantMetafieldData = {
    body: MetafieldBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        variant_id: number;
        metafield_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}';
};
export type UpdateProductVariantMetafieldErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type UpdateProductVariantMetafieldError = UpdateProductVariantMetafieldErrors[keyof UpdateProductVariantMetafieldErrors];
export type UpdateProductVariantMetafieldResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type UpdateProductVariantMetafieldResponse = UpdateProductVariantMetafieldResponses[keyof UpdateProductVariantMetafieldResponses];
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
    query?: never;
    url: '/catalog/products/{product_id}/variants/{variant_id}/image';
};
export type CreateProductVariantImageErrors = {
    400: {
        [key: string]: unknown;
    };
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
    422: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
    500: {
        errors?: {
            [key: string]: unknown;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
};
export type CreateProductVariantImageError = CreateProductVariantImageErrors[keyof CreateProductVariantImageErrors];
export type CreateProductVariantImageResponses = {
    200: {
        data?: {
            image_url?: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type CreateProductVariantImageResponse = CreateProductVariantImageResponses[keyof CreateProductVariantImageResponses];
export type GetVariantsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        id?: number;
        sku?: string;
        upc?: string;
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
        page?: number;
        limit?: number;
        'product_id:in'?: Array<number>;
    };
    url: '/catalog/variants';
};
export type GetVariantsErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetVariantsError = GetVariantsErrors[keyof GetVariantsErrors];
export type GetVariantsResponses = {
    200: {
        data?: Array<{
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
            upc?: string | null;
            inventory_level?: number;
            inventory_warning_level?: number;
            bin_picking_number?: string;
        } & {
            id?: number;
            product_id?: number;
            sku?: string;
            sku_id?: number;
            option_values?: Array<{
                option_display_name?: string;
                label?: string;
            } & {
                id?: number;
                option_id?: number;
            }>;
            calculated_price?: number;
        }>;
        meta?: MetaCollectionFull;
    };
};
export type GetVariantsResponse = GetVariantsResponses[keyof GetVariantsResponses];
export type UpdateVariantsBatchData = {
    body: Array<{
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
        upc?: string | null;
        inventory_level?: number;
        inventory_warning_level?: number;
        bin_picking_number?: string;
    } & {
        id?: number;
    }>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/catalog/variants';
};
export type UpdateVariantsBatchErrors = {
    413: unknown;
    422: {
        batch_errors?: Array<{
            status?: number;
            title?: string;
            type?: string;
            instance?: string;
        } & {
            errors?: {
                [key: string]: unknown;
            };
        }>;
    };
};
export type UpdateVariantsBatchError = UpdateVariantsBatchErrors[keyof UpdateVariantsBatchErrors];
export type UpdateVariantsBatchResponses = {
    200: {
        data?: Array<{
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
            upc?: string | null;
            inventory_level?: number;
            inventory_warning_level?: number;
            bin_picking_number?: string;
        } & {
            id?: number;
            product_id?: number;
            sku?: string;
            sku_id?: number;
            option_values?: Array<{
                option_display_name?: string;
                label?: string;
            } & {
                id?: number;
                option_id?: number;
            }>;
            calculated_price?: number;
        }>;
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
    };
};
export type UpdateVariantsBatchResponse = UpdateVariantsBatchResponses[keyof UpdateVariantsBatchResponses];
export type DeleteVariantsMetafieldsData = {
    body?: Array<number>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/catalog/variants/metafields';
};
export type DeleteVariantsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessDelete;
};
export type DeleteVariantsMetafieldsError = DeleteVariantsMetafieldsErrors[keyof DeleteVariantsMetafieldsErrors];
export type DeleteVariantsMetafieldsResponses = {
    200: MetaFieldCollectionDeleteResponseSuccess;
};
export type DeleteVariantsMetafieldsResponse = DeleteVariantsMetafieldsResponses[keyof DeleteVariantsMetafieldsResponses];
export type GetVariantsMetafieldsData = {
    body?: never;
    headers: {
        Accept: string;
    };
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
        'date_created:min'?: string;
        'date_created:max'?: string;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
    };
    url: '/catalog/variants/metafields';
};
export type GetVariantsMetafieldsResponses = {
    200: MetaFieldCollectionResponse;
};
export type GetVariantsMetafieldsResponse = GetVariantsMetafieldsResponses[keyof GetVariantsMetafieldsResponses];
export type CreateVariantsMetafieldsData = {
    body?: Array<MetafieldBasePost & {
        resource_id: number;
    }>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/catalog/variants/metafields';
};
export type CreateVariantsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateVariantsMetafieldsError = CreateVariantsMetafieldsErrors[keyof CreateVariantsMetafieldsErrors];
export type CreateVariantsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type CreateVariantsMetafieldsResponse = CreateVariantsMetafieldsResponses[keyof CreateVariantsMetafieldsResponses];
export type UpdateVariantsMetafieldsData = {
    body?: Array<MetafieldBasePut & {
        id: number;
    }>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/catalog/variants/metafields';
};
export type UpdateVariantsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateVariantsMetafieldsError = UpdateVariantsMetafieldsErrors[keyof UpdateVariantsMetafieldsErrors];
export type UpdateVariantsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type UpdateVariantsMetafieldsResponse = UpdateVariantsMetafieldsResponses[keyof UpdateVariantsMetafieldsResponses];
