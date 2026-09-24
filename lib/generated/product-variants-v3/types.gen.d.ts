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
    inventory_level?: number | null;
    inventory_warning_level?: number | null;
    bin_picking_number?: string | null;
    mpn?: string;
    gtin?: string;
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
    gtin?: string;
    mpn?: string;
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
export type ProductIdParam = number;
export type VariantIdParam = number;
export type MetafieldIdParam = number;
export type Accept = string;
export type ContentType = string;
export type GetVariantsByProductIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/variants';
};
export type GetVariantsByProductIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetVariantsByProductIdError = GetVariantsByProductIdErrors[keyof GetVariantsByProductIdErrors];
export type GetVariantsByProductIdResponses = {
    200: {
        data?: Array<ProductVariantFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetVariantsByProductIdResponse = GetVariantsByProductIdResponses[keyof GetVariantsByProductIdResponses];
export type CreateVariantData = {
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
export type CreateVariantErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type CreateVariantError = CreateVariantErrors[keyof CreateVariantErrors];
export type CreateVariantResponses = {
    200: {
        data?: ProductVariantFull;
        meta?: MetaEmptyFull;
    };
    207: {
        data?: ProductVariantFull;
        errors?: ErrorMultiStatus;
        meta?: MetaCollectionFull;
    };
};
export type CreateVariantResponse = CreateVariantResponses[keyof CreateVariantResponses];
export type DeleteVariantByIdData = {
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
export type DeleteVariantByIdResponses = {
    204: void;
};
export type DeleteVariantByIdResponse = DeleteVariantByIdResponses[keyof DeleteVariantByIdResponses];
export type GetVariantByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        variant_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/variants/{variant_id}';
};
export type GetVariantByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetVariantByIdError = GetVariantByIdErrors[keyof GetVariantByIdErrors];
export type GetVariantByIdResponses = {
    200: {
        data?: ProductVariantFull;
        meta?: MetaEmptyFull;
    };
};
export type GetVariantByIdResponse = GetVariantByIdResponses[keyof GetVariantByIdResponses];
export type UpdateVariantData = {
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
export type UpdateVariantErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type UpdateVariantError = UpdateVariantErrors[keyof UpdateVariantErrors];
export type UpdateVariantResponses = {
    200: {
        data?: ProductVariantFull;
        meta?: MetaEmptyFull;
    };
    207: {
        data?: ProductVariantFull;
        errors?: ErrorMultiStatus;
        meta?: MetaCollectionFull;
    };
};
export type UpdateVariantResponse = UpdateVariantResponses[keyof UpdateVariantResponses];
export type GetVariantMetafieldsByProductIdAndVariantIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        variant_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
        key?: string;
        namespace?: string;
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/variants/{variant_id}/metafields';
};
export type GetVariantMetafieldsByProductIdAndVariantIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetVariantMetafieldsByProductIdAndVariantIdError = GetVariantMetafieldsByProductIdAndVariantIdErrors[keyof GetVariantMetafieldsByProductIdAndVariantIdErrors];
export type GetVariantMetafieldsByProductIdAndVariantIdResponses = {
    200: {
        data?: Array<MetafieldFull>;
        meta?: CategoriesTreeResp;
    };
};
export type GetVariantMetafieldsByProductIdAndVariantIdResponse = GetVariantMetafieldsByProductIdAndVariantIdResponses[keyof GetVariantMetafieldsByProductIdAndVariantIdResponses];
export type CreateVariantMetafieldData = {
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
export type CreateVariantMetafieldErrors = {
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
export type CreateVariantMetafieldError = CreateVariantMetafieldErrors[keyof CreateVariantMetafieldErrors];
export type CreateVariantMetafieldResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type CreateVariantMetafieldResponse = CreateVariantMetafieldResponses[keyof CreateVariantMetafieldResponses];
export type DeleteVariantMetafieldByIdData = {
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
export type DeleteVariantMetafieldByIdResponses = {
    204: void;
};
export type DeleteVariantMetafieldByIdResponse = DeleteVariantMetafieldByIdResponses[keyof DeleteVariantMetafieldByIdResponses];
export type GetVariantMetafieldByProductIdAndVariantIdData = {
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
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/variants/{variant_id}/metafields/{metafield_id}';
};
export type GetVariantMetafieldByProductIdAndVariantIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetVariantMetafieldByProductIdAndVariantIdError = GetVariantMetafieldByProductIdAndVariantIdErrors[keyof GetVariantMetafieldByProductIdAndVariantIdErrors];
export type GetVariantMetafieldByProductIdAndVariantIdResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type GetVariantMetafieldByProductIdAndVariantIdResponse = GetVariantMetafieldByProductIdAndVariantIdResponses[keyof GetVariantMetafieldByProductIdAndVariantIdResponses];
export type UpdateVariantMetafieldData = {
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
export type UpdateVariantMetafieldErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type UpdateVariantMetafieldError = UpdateVariantMetafieldErrors[keyof UpdateVariantMetafieldErrors];
export type UpdateVariantMetafieldResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type UpdateVariantMetafieldResponse = UpdateVariantMetafieldResponses[keyof UpdateVariantMetafieldResponses];
export type CreateVariantImageData = {
    body?: {
        image_url?: string;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        variant_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/variants/{variant_id}/image';
};
export type CreateVariantImageErrors = {
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
export type CreateVariantImageError = CreateVariantImageErrors[keyof CreateVariantImageErrors];
export type CreateVariantImageResponses = {
    200: {
        data?: {
            image_url?: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type CreateVariantImageResponse = CreateVariantImageResponses[keyof CreateVariantImageResponses];
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
        page?: number;
        limit?: number;
        include_fields?: string;
        exclude_fields?: string;
        product_id?: string;
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
            upc?: string;
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
        upc?: string;
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
            upc?: string;
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
