export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type ProductModifierBase = {
    type: 'date' | 'checkbox' | 'file' | 'text' | 'multi_line_text' | 'numbers_only_text' | 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
    required: boolean;
    sort_order?: number;
    config?: ConfigFull;
    display_name?: string;
};
export type ProductModifierFull = ProductModifierBase & {
    id?: number;
    product_id?: number;
    name?: string;
    option_values?: Array<ProductModifierOptionValueFull>;
};
export type ProductModifierOptionValueBase = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: {
        [key: string]: unknown;
    } | null;
    adjusters?: AdjustersFull;
};
export type ProductModifierOptionValueFull = ProductModifierOptionValueBase & {
    id?: number;
    option_id?: number;
};
export type ProductOptionBase = {
    id?: number | null;
    product_id?: number;
    display_name?: string;
    type?: 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
    config?: ProductOptionConfigFull;
    sort_order?: number;
    option_values?: Array<ProductOptionOptionValueFull>;
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
    product_id?: number;
    sku: string;
    option_values?: Array<ProductVariantOptionValueFull>;
    calculated_price?: number;
    calculated_weight?: number;
};
export type ProductVariantPutProduct = {
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
    product_id: number;
    id: number;
    sku?: string;
};
export type ProductVariantOptionValueFull = {
    option_display_name: string;
    label: string;
};
export type ProductVariantOptionValueBase = {
    id?: number;
    option_id?: number;
};
export type ProductOptionOptionValueBase = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: {
        [key: string]: unknown;
    } | null;
};
export type ProductOptionOptionValueFull = ProductOptionOptionValueBase & {
    id?: number;
};
export type ProductImageBase = {
    image_file?: string;
    is_thumbnail?: boolean;
    sort_order?: number;
    description?: string;
    image_url?: string;
};
export type ProductImagePut = {
    product_id?: number;
    readonly url_zoom?: string;
    readonly url_standard?: string;
    readonly url_thumbnail?: string;
    readonly url_tiny?: string;
} & ProductImageBase;
export type ProductVideoBase = {
    title?: string;
    description?: string;
    sort_order?: number;
    type?: 'youtube';
    video_id?: string;
};
export type ProductVideoFull = ProductVideoBase & {
    id?: number;
    product_id?: number;
    length?: string;
};
export type ProductPut = ProductBase & {
    variants?: Array<ProductVariantPutProduct>;
};
export type MetafieldBase = {
    key: string;
    value: string;
    namespace: string;
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type ComplexRuleBase = {
    id?: number;
    product_id?: number | null;
    sort_order?: number;
    enabled?: boolean;
    stop?: boolean;
    purchasing_disabled?: boolean;
    purchasing_disabled_message?: string;
    purchasing_hidden?: boolean;
    image_url?: string;
    price_adjuster?: AdjusterFull;
    weight_adjuster?: AdjusterFull;
    conditions?: Array<ComplexRuleConditionBase>;
};
export type ProductCustomFieldBase = {
    id?: number;
    name: string;
    value: string;
};
export type ProductCustomFieldPut = {
    id?: number;
    name: string;
    value: string;
};
export type ComplexRuleConditionBase = {
    id?: number | null;
    rule_id?: number | null;
    modifier_id: number | null;
    modifier_value_id: number | null;
    variant_id: number | null;
    combination_id?: number;
};
export type CustomUrlFull = {
    url?: string;
    is_customized?: boolean;
};
export type BulkPricingRuleFull = {
    quantity_min: number;
    quantity_max: number;
    type: 'price' | 'percent' | 'fixed';
    amount: number | string;
};
export type ProductOptionConfigFull = {
    default_value?: string;
    checked_by_default?: boolean;
    checkbox_label?: string;
    date_limited?: boolean;
    date_limit_mode?: 'earliest' | 'range' | 'latest';
    date_earliest_value?: string;
    date_latest_value?: string;
    file_types_mode?: 'specific' | 'all';
    file_types_supported?: Array<string>;
    file_types_other?: Array<string>;
    file_max_size?: number;
    text_characters_limited?: boolean;
    text_min_length?: number;
    text_max_length?: number;
    text_lines_limited?: boolean;
    text_max_lines?: number;
    number_limited?: boolean;
    number_limit_mode?: 'lowest' | 'highest' | 'range';
    number_lowest_value?: number;
    number_highest_value?: number;
    number_integers_only?: boolean;
    product_list_adjusts_inventory?: boolean;
    product_list_adjusts_pricing?: boolean;
    product_list_shipping_calc?: 'none' | 'weight' | 'package';
};
export type AdjusterFull = {
    adjuster?: 'relative' | 'percentage';
    adjuster_value?: number;
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
export type ErrorBase = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
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
export type ProductFull = {
    readonly id?: number;
} & ProductBase & {
    date_created?: string;
    date_modified?: string;
    base_variant_id?: number;
    calculated_price?: number;
    options?: Array<ProductOptionBase>;
    modifiers?: Array<ProductModifierFull>;
    map_price?: number;
    option_set_id?: number;
    option_set_display?: string;
    variants?: Array<ProductVariantFull>;
};
export type ProductImageFull = ProductImageBase & {
    id?: number;
    product_id?: number;
    readonly url_zoom?: string;
    readonly url_standard?: string;
    readonly url_thumbnail?: string;
    readonly url_tiny?: string;
    date_modified?: string;
};
export type ProductPutCollection = Array<{
    readonly id: number;
} & ProductBase>;
export type ConfigFull = {
    default_value?: string;
    checked_by_default?: boolean;
    checkbox_label?: string;
    date_limited?: boolean;
    date_limit_mode?: 'earliest' | 'range' | 'latest';
    date_earliest_value?: string;
    date_latest_value?: string;
    file_types_mode?: 'specific' | 'all';
    file_types_supported?: Array<string>;
    file_types_other?: Array<string>;
    file_max_size?: number;
    text_characters_limited?: boolean;
    text_min_length?: number;
    text_max_length?: number;
    text_lines_limited?: boolean;
    text_max_lines?: number;
    number_limited?: boolean;
    number_limit_mode?: 'lowest' | 'highest' | 'range';
    number_lowest_value?: number;
    number_highest_value?: number;
    number_integers_only?: boolean;
    product_list_adjusts_inventory?: boolean;
    product_list_adjusts_pricing?: boolean;
    product_list_shipping_calc?: 'none' | 'weight' | 'package';
};
export type AdjustersFull = {
    price?: AdjusterFull;
    weight?: AdjusterFull;
    image_url?: string;
    purchasing_disabled?: {
        status?: boolean;
        message?: string;
    };
};
export type ProductBase = {
    name: string;
    type: 'physical' | 'digital';
    sku?: string;
    description?: string;
    weight: number;
    width?: number;
    depth?: number;
    height?: number;
    price: number;
    cost_price?: number;
    retail_price?: number;
    sale_price?: number;
    map_price?: number;
    tax_class_id?: number;
    product_tax_code?: string;
    categories?: Array<number>;
    brand_id?: number;
    brand_name?: string;
    inventory_level?: number;
    inventory_warning_level?: number;
    inventory_tracking?: 'none' | 'product' | 'variant';
    fixed_cost_shipping_price?: number;
    is_free_shipping?: boolean;
    is_visible?: boolean;
    is_featured?: boolean;
    related_products?: Array<number>;
    warranty?: string;
    bin_picking_number?: string;
    layout_file?: string;
    upc?: string;
    search_keywords?: string;
    availability_description?: string;
    availability?: 'available' | 'disabled' | 'preorder';
    gift_wrapping_options_type?: 'any' | 'none' | 'list';
    gift_wrapping_options_list?: Array<number>;
    sort_order?: number;
    condition?: 'New' | 'Used' | 'Refurbished';
    is_condition_shown?: boolean;
    order_quantity_minimum?: number;
    order_quantity_maximum?: number;
    page_title?: string;
    meta_keywords?: Array<string>;
    meta_description?: string;
    view_count?: number;
    preorder_release_date?: string | null;
    preorder_message?: string;
    is_preorder_only?: boolean;
    is_price_hidden?: boolean;
    price_hidden_label?: string;
    custom_url?: CustomUrlFull;
    open_graph_type?: 'product' | 'album' | 'book' | 'drink' | 'food' | 'game' | 'movie' | 'song' | 'tv_show';
    open_graph_title?: string;
    open_graph_description?: string;
    open_graph_use_meta_description?: boolean;
    open_graph_use_product_name?: boolean;
    open_graph_use_image?: boolean;
    gtin?: string;
    mpn?: string;
    reviews_rating_sum?: number;
    reviews_count?: number;
    total_sold?: number;
    custom_fields?: Array<ProductCustomFieldPut>;
    bulk_pricing_rules?: Array<{
        readonly id: number;
    } & BulkPricingRuleFull>;
    images?: Array<ProductImageFull>;
    videos?: Array<ProductVideoFull>;
    variants?: Array<ProductVariantFull>;
};
export type MetafieldFull = {
    readonly id?: number;
} & MetafieldBase & {
    resource_type?: 'category' | 'brand' | 'product' | 'variant';
    resource_id?: number;
    readonly date_created?: string;
    readonly date_modified?: string;
};
export type ErrorResponse409 = {
    code?: number;
    status?: number;
    title?: string;
    type?: string;
} & {
    errors?: DetailedErrors;
};
export type ErrorResponse422 = {
    code?: number;
    status?: number;
    title?: string;
    type?: string;
} & {
    errors?: DetailedErrors;
};
export type MetaPaginationObject = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
        links?: {
            next?: string;
            current?: string;
        };
    };
};
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type ProductChannelAssignment = {
    product_id?: number;
    channel_id?: number;
};
export type ProductCategoryAssignment = {
    product_id?: number;
    category_id?: number;
};
export type Beta5DetailedErrors = {
    [key: string]: unknown;
};
export type Beta5ErrorResponse = BaseError & {
    errors?: Beta5DetailedErrors;
};
export type ProductImagePutWritable = {
    product_id?: number;
} & ProductImageBase;
export type MetaEmptyFullWritable = {
    [key: string]: unknown;
};
export type DetailedErrorsWritable = {
    [key: string]: unknown;
};
export type ProductFullWritable = ProductBaseWritable & {
    date_created?: string;
    date_modified?: string;
    base_variant_id?: number;
    calculated_price?: number;
    options?: Array<ProductOptionBase>;
    modifiers?: Array<ProductModifierFull>;
    map_price?: number;
    option_set_id?: number;
    option_set_display?: string;
    variants?: Array<ProductVariantFull>;
};
export type ProductImageFullWritable = ProductImageBase & {
    id?: number;
    product_id?: number;
    date_modified?: string;
};
export type ProductPutCollectionWritable = Array<ProductBaseWritable>;
export type ProductBaseWritable = {
    name: string;
    type: 'physical' | 'digital';
    sku?: string;
    description?: string;
    weight: number;
    width?: number;
    depth?: number;
    height?: number;
    price: number;
    cost_price?: number;
    retail_price?: number;
    sale_price?: number;
    map_price?: number;
    tax_class_id?: number;
    product_tax_code?: string;
    categories?: Array<number>;
    brand_id?: number;
    brand_name?: string;
    inventory_level?: number;
    inventory_warning_level?: number;
    inventory_tracking?: 'none' | 'product' | 'variant';
    fixed_cost_shipping_price?: number;
    is_free_shipping?: boolean;
    is_visible?: boolean;
    is_featured?: boolean;
    related_products?: Array<number>;
    warranty?: string;
    bin_picking_number?: string;
    layout_file?: string;
    upc?: string;
    search_keywords?: string;
    availability_description?: string;
    availability?: 'available' | 'disabled' | 'preorder';
    gift_wrapping_options_type?: 'any' | 'none' | 'list';
    gift_wrapping_options_list?: Array<number>;
    sort_order?: number;
    condition?: 'New' | 'Used' | 'Refurbished';
    is_condition_shown?: boolean;
    order_quantity_minimum?: number;
    order_quantity_maximum?: number;
    page_title?: string;
    meta_keywords?: Array<string>;
    meta_description?: string;
    view_count?: number;
    preorder_release_date?: string | null;
    preorder_message?: string;
    is_preorder_only?: boolean;
    is_price_hidden?: boolean;
    price_hidden_label?: string;
    custom_url?: CustomUrlFull;
    open_graph_type?: 'product' | 'album' | 'book' | 'drink' | 'food' | 'game' | 'movie' | 'song' | 'tv_show';
    open_graph_title?: string;
    open_graph_description?: string;
    open_graph_use_meta_description?: boolean;
    open_graph_use_product_name?: boolean;
    open_graph_use_image?: boolean;
    gtin?: string;
    mpn?: string;
    reviews_rating_sum?: number;
    reviews_count?: number;
    total_sold?: number;
    custom_fields?: Array<ProductCustomFieldPut>;
    bulk_pricing_rules?: Array<BulkPricingRuleFull>;
    images?: Array<ProductImageFullWritable>;
    videos?: Array<ProductVideoFull>;
    variants?: Array<ProductVariantFull>;
};
export type MetafieldFullWritable = MetafieldBase & {
    resource_type?: 'category' | 'brand' | 'product' | 'variant';
    resource_id?: number;
};
export type Beta5DetailedErrorsWritable = {
    [key: string]: unknown;
};
export type ProductIdParam = number;
export type ReviewIdParam = number;
export type ImageIdParam = number;
export type MetafieldIdParam = number;
export type VideoIdParam = number;
export type ComplexRuleIdParam = number;
export type CustomFieldIdParam = number;
export type BulkPricingRuleIdParam = number;
export type Accept = string;
export type ContentType = string;
export type DeleteProductsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        name?: string;
        sku?: string;
        price?: number;
        weight?: number;
        condition?: 'new' | 'used' | 'refurbished';
        brand_id?: number;
        date_modified?: string;
        date_last_imported?: string;
        is_visible?: boolean;
        is_featured?: number;
        'id:in'?: Array<number>;
        inventory_level?: number;
        total_sold?: number;
        type?: 'digital' | 'physical';
        categories?: number;
        keyword?: string;
    };
    url: '/catalog/products';
};
export type DeleteProductsResponses = {
    204: void;
};
export type DeleteProductsResponse = DeleteProductsResponses[keyof DeleteProductsResponses];
export type GetProductsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        id?: number;
        'id:in'?: Array<number>;
        'id:not_in'?: Array<number>;
        'id:min'?: Array<number>;
        'id:max'?: Array<number>;
        'id:greater'?: Array<number>;
        'id:less'?: Array<number>;
        name?: string;
        upc?: string;
        price?: number;
        weight?: number;
        condition?: 'new' | 'used' | 'refurbished';
        brand_id?: number;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        date_last_imported?: string;
        'date_last_imported:max'?: string;
        'date_last_imported:min'?: string;
        is_visible?: boolean;
        is_featured?: 1 | 0;
        is_free_shipping?: number;
        inventory_level?: number;
        'inventory_level:in'?: number;
        'inventory_level:not_in'?: number;
        'inventory_level:min'?: number;
        'inventory_level:max'?: number;
        'inventory_level:greater'?: number;
        'inventory_level:less'?: number;
        inventory_low?: number;
        out_of_stock?: number;
        total_sold?: number;
        type?: 'digital' | 'physical';
        categories?: number;
        keyword?: string;
        keyword_context?: 'shopper' | 'merchant';
        status?: number;
        include?: Array<'variants' | 'images' | 'custom_fields' | 'bulk_pricing_rules' | 'primary_image' | 'modifiers' | 'options' | 'videos'>;
        include_fields?: string;
        exclude_fields?: string;
        availability?: 'available' | 'disabled' | 'preorder';
        page?: number;
        limit?: number;
        direction?: 'asc' | 'desc';
        sort?: 'id' | 'name' | 'sku' | 'price' | 'date_modified' | 'date_last_imported' | 'inventory_level' | 'is_visible' | 'total_sold';
        'categories:in'?: number;
        sku?: string;
        'sku:in'?: Array<string>;
    };
    url: '/catalog/products';
};
export type GetProductsResponses = {
    200: {
        data?: Array<ProductFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetProductsResponse = GetProductsResponses[keyof GetProductsResponses];
export type CreateProductData = {
    body: ProductBaseWritable;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        include_fields?: string;
    };
    url: '/catalog/products';
};
export type CreateProductErrors = {
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
export type CreateProductError = CreateProductErrors[keyof CreateProductErrors];
export type CreateProductResponses = {
    200: {
        data?: ProductFull;
        meta?: MetaEmptyFull;
    };
    207: {
        data?: Array<ProductFull>;
        errors?: ErrorMultiStatus;
        meta?: MetaCollectionFull;
    };
};
export type CreateProductResponse = CreateProductResponses[keyof CreateProductResponses];
export type UpdateProductsData = {
    body?: ProductPutCollectionWritable;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        include_fields?: string;
    };
    url: '/catalog/products';
};
export type UpdateProductsErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
    409: ErrorResponse409;
    413: ErrorBase;
    422: ErrorResponse422;
};
export type UpdateProductsError = UpdateProductsErrors[keyof UpdateProductsErrors];
export type UpdateProductsResponses = {
    200: {
        data?: Array<ProductFull>;
        meta?: MetaCollectionFull;
    };
    207: {
        data?: Array<ProductFull>;
        errors?: ErrorMultiStatus;
        meta?: MetaCollectionFull;
    };
};
export type UpdateProductsResponse = UpdateProductsResponses[keyof UpdateProductsResponses];
export type DeleteProductByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}';
};
export type DeleteProductByIdResponses = {
    204: void;
};
export type DeleteProductByIdResponse = DeleteProductByIdResponses[keyof DeleteProductByIdResponses];
export type GetProductByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include?: Array<'variants' | 'images' | 'custom_fields' | 'bulk_pricing_rules' | 'primary_image' | 'modifiers' | 'options' | 'videos'>;
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}';
};
export type GetProductByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductByIdError = GetProductByIdErrors[keyof GetProductByIdErrors];
export type GetProductByIdResponses = {
    200: {
        data?: ProductFull;
        meta?: MetaEmptyFull;
    };
};
export type GetProductByIdResponse = GetProductByIdResponses[keyof GetProductByIdResponses];
export type UpdateProductData = {
    body: ProductPut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include_fields?: 'variants' | 'images' | 'custom_fields' | 'bulk_pricing_rules' | 'primary_image' | 'modifiers' | 'options' | 'videos';
    };
    url: '/catalog/products/{product_id}';
};
export type UpdateProductErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
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
export type UpdateProductError = UpdateProductErrors[keyof UpdateProductErrors];
export type UpdateProductResponses = {
    200: {
        data?: ProductFull;
        meta?: MetaEmptyFull;
    };
    201: {
        [key: string]: unknown;
    };
    207: {
        data?: ProductFull;
        errors?: ErrorMultiStatus;
        meta?: MetaCollectionFull;
    };
};
export type UpdateProductResponse = UpdateProductResponses[keyof UpdateProductResponses];
export type GetProductImagesData = {
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
    url: '/catalog/products/{product_id}/images';
};
export type GetProductImagesErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductImagesError = GetProductImagesErrors[keyof GetProductImagesErrors];
export type GetProductImagesResponses = {
    200: {
        data?: Array<ProductImageFull>;
        meta?: MetaCollectionFull;
    };
    204: void;
};
export type GetProductImagesResponse = GetProductImagesResponses[keyof GetProductImagesResponses];
export type CreateProductImageData = {
    body: {
        product_id?: number;
        readonly url_zoom?: string;
        readonly url_standard?: string;
        readonly url_thumbnail?: string;
        readonly url_tiny?: string;
        date_modified?: string;
        is_thumbnail?: boolean;
        sort_order?: number;
        description?: string;
    } & {
        image_url?: string;
        image_file?: string;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/images';
};
export type CreateProductImageErrors = {
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
        status: number;
        title: string;
        type: string;
    };
};
export type CreateProductImageError = CreateProductImageErrors[keyof CreateProductImageErrors];
export type CreateProductImageResponses = {
    200: {
        data?: {
            id?: number;
            product_id?: number;
            readonly url_zoom?: string;
            readonly url_standard?: string;
            readonly url_thumbnail?: string;
            readonly url_tiny?: string;
            date_modified?: string;
            is_thumbnail?: boolean;
            sort_order?: number;
            description?: string;
        } & {
            id?: number;
            product_id?: number;
            image_file?: string;
            readonly url_zoom?: string;
            readonly url_standard?: string;
            readonly url_thumbnail?: string;
            readonly url_tiny?: string;
            date_modified?: string;
            image_url?: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type CreateProductImageResponse = CreateProductImageResponses[keyof CreateProductImageResponses];
export type DeleteProductImageData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        image_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/images/{image_id}';
};
export type DeleteProductImageResponses = {
    204: void;
};
export type DeleteProductImageResponse = DeleteProductImageResponses[keyof DeleteProductImageResponses];
export type GetProductImageByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        image_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/images/{image_id}';
};
export type GetProductImageByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductImageByIdError = GetProductImageByIdErrors[keyof GetProductImageByIdErrors];
export type GetProductImageByIdResponses = {
    200: {
        data?: ProductImageFull;
        meta?: MetaEmptyFull;
    };
};
export type GetProductImageByIdResponse = GetProductImageByIdResponses[keyof GetProductImageByIdResponses];
export type UpdateProductImageData = {
    body: ProductImagePutWritable;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        image_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/images/{image_id}';
};
export type UpdateProductImageErrors = {
    400: {
        [key: string]: unknown;
    };
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type UpdateProductImageError = UpdateProductImageErrors[keyof UpdateProductImageErrors];
export type UpdateProductImageResponses = {
    200: {
        data?: {
            id?: number;
            product_id?: number;
            readonly url_zoom?: string;
            readonly url_standard?: string;
            readonly url_thumbnail?: string;
            readonly url_tiny?: string;
            date_modified?: string;
            is_thumbnail?: boolean;
            sort_order?: number;
            description?: string;
        } & {
            id?: number;
            product_id?: number;
            image_file?: string;
            readonly url_zoom?: string;
            readonly url_standard?: string;
            readonly url_thumbnail?: string;
            readonly url_tiny?: string;
            date_modified?: string;
            image_url?: string;
        };
        meta?: MetaEmptyFull;
    };
    201: {
        [key: string]: unknown;
    };
};
export type UpdateProductImageResponse = UpdateProductImageResponses[keyof UpdateProductImageResponses];
export type GetProductVideosData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
        page?: number;
        limit?: number;
    };
    url: '/catalog/products/{product_id}/videos';
};
export type GetProductVideosResponses = {
    200: {
        data?: Array<ProductVideoFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetProductVideosResponse = GetProductVideosResponses[keyof GetProductVideosResponses];
export type CreateProductVideoData = {
    body: {
        title?: string;
        description?: string;
        sort_order?: number;
        type?: 'youtube';
    } & {
        video_id?: string;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/videos';
};
export type CreateProductVideoErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type CreateProductVideoError = CreateProductVideoErrors[keyof CreateProductVideoErrors];
export type CreateProductVideoResponses = {
    200: {
        data?: {
            title?: string;
            description?: string;
            sort_order?: number;
            type?: 'youtube';
        } & {
            id?: number;
            video_id?: string;
            product_id?: number;
            length?: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type CreateProductVideoResponse = CreateProductVideoResponses[keyof CreateProductVideoResponses];
export type DeleteProductVideoData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/videos/{id}';
};
export type DeleteProductVideoResponses = {
    204: void;
};
export type DeleteProductVideoResponse = DeleteProductVideoResponses[keyof DeleteProductVideoResponses];
export type GetProductVideoByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/videos/{id}';
};
export type GetProductVideoByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductVideoByIdError = GetProductVideoByIdErrors[keyof GetProductVideoByIdErrors];
export type GetProductVideoByIdResponses = {
    200: {
        data?: ProductVideoFull;
        meta?: MetaEmptyFull;
    };
};
export type GetProductVideoByIdResponse = GetProductVideoByIdResponses[keyof GetProductVideoByIdResponses];
export type UpdateProductVideoData = {
    body: {
        title?: string;
        description?: string;
        sort_order?: number;
        type?: 'youtube';
    } & {
        id?: number;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/videos/{id}';
};
export type UpdateProductVideoErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type UpdateProductVideoError = UpdateProductVideoErrors[keyof UpdateProductVideoErrors];
export type UpdateProductVideoResponses = {
    200: {
        data?: {
            title?: string;
            description?: string;
            sort_order?: number;
            type?: 'youtube';
        } & {
            id?: number;
            video_id?: string;
            product_id?: number;
            length?: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type UpdateProductVideoResponse = UpdateProductVideoResponses[keyof UpdateProductVideoResponses];
export type GetComplexRulesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
        page?: number;
        limit?: number;
    };
    url: '/catalog/products/{product_id}/complex-rules';
};
export type GetComplexRulesResponses = {
    200: {
        data?: Array<ComplexRuleBase>;
        meta?: MetaCollectionFull;
    };
};
export type GetComplexRulesResponse = GetComplexRulesResponses[keyof GetComplexRulesResponses];
export type CreateComplexRuleData = {
    body: {
        product_id?: number | null;
        sort_order?: number;
        enabled?: boolean;
        stop?: boolean;
        purchasing_disabled?: boolean;
        purchasing_disabled_message?: string;
        purchasing_hidden?: boolean;
        image_url?: string;
        price_adjuster?: {
            adjuster?: 'relative' | 'percentage';
            adjuster_value?: number;
        };
        weight_adjuster?: {
            adjuster?: 'relative' | 'percentage';
            adjuster_value?: number;
        };
        conditions?: Array<{
            modifier_id: number | null;
            modifier_value_id: number | null;
            variant_id: number | null;
        }>;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/complex-rules';
};
export type CreateComplexRuleErrors = {
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
export type CreateComplexRuleError = CreateComplexRuleErrors[keyof CreateComplexRuleErrors];
export type CreateComplexRuleResponses = {
    200: {
        data?: {
            id?: number;
            product_id?: number | null;
            sort_order?: number;
            enabled?: boolean;
            stop?: boolean;
            purchasing_disabled?: boolean;
            purchasing_disabled_message?: string;
            purchasing_hidden?: boolean;
            image_url?: string;
            price_adjuster?: {
                adjuster?: 'relative' | 'percentage';
                adjuster_value?: number;
            };
            weight_adjuster?: {
                adjuster?: 'relative' | 'percentage';
                adjuster_value?: number;
            };
            conditions?: Array<{
                id?: number | null;
                rule_id?: number | null;
                modifier_id: number | null;
                modifier_value_id: number | null;
                variant_id: number | null;
                combination_id?: number;
            }>;
        };
        meta?: MetaEmptyFull;
    };
};
export type CreateComplexRuleResponse = CreateComplexRuleResponses[keyof CreateComplexRuleResponses];
export type DeleteComplexRuleByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        complex_rule_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/complex-rules/{complex_rule_id}';
};
export type DeleteComplexRuleByIdResponses = {
    204: void;
};
export type DeleteComplexRuleByIdResponse = DeleteComplexRuleByIdResponses[keyof DeleteComplexRuleByIdResponses];
export type GetComplexRuleByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        complex_rule_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/complex-rules/{complex_rule_id}';
};
export type GetComplexRuleByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetComplexRuleByIdError = GetComplexRuleByIdErrors[keyof GetComplexRuleByIdErrors];
export type GetComplexRuleByIdResponses = {
    200: {
        data?: {
            id?: number;
            product_id?: number;
            sort_order?: number;
            enabled?: boolean;
            stop?: boolean;
            purchasing_disabled?: boolean;
            purchasing_disabled_message?: string;
            purchasing_hidden?: boolean;
            image_url?: string;
            price_adjuster?: {
                adjuster?: 'relative' | 'percentage';
                adjuster_value?: number;
            };
            weight_adjuster?: {
                adjuster?: 'relative' | 'percentage';
                adjuster_value?: number;
            };
            conditions?: Array<{
                id?: number;
                rule_id?: number;
                modifier_id: number;
                modifier_value_id: number;
                variant_id: number;
                combination_id?: number;
            }>;
        };
        meta?: MetaEmptyFull;
    };
};
export type GetComplexRuleByIdResponse = GetComplexRuleByIdResponses[keyof GetComplexRuleByIdResponses];
export type UpdateComplexRuleData = {
    body: {
        product_id?: number | null;
        sort_order?: number;
        enabled?: boolean;
        stop?: boolean;
        purchasing_disabled?: boolean;
        purchasing_disabled_message?: string;
        purchasing_hidden?: boolean;
        image_url?: string;
        price_adjuster?: {
            adjuster?: 'relative' | 'percentage';
            adjuster_value?: number;
        };
        weight_adjuster?: {
            adjuster?: 'relative' | 'percentage';
            adjuster_value?: number;
        };
        conditions?: Array<{
            modifier_id: number | null;
            modifier_value_id: number | null;
            variant_id: number | null;
        }>;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        complex_rule_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/complex-rules/{complex_rule_id}';
};
export type UpdateComplexRuleErrors = {
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
export type UpdateComplexRuleError = UpdateComplexRuleErrors[keyof UpdateComplexRuleErrors];
export type UpdateComplexRuleResponses = {
    200: {
        data?: {
            id?: number;
            product_id?: number;
            sort_order?: number;
            enabled?: boolean;
            stop?: boolean;
            purchasing_disabled?: boolean;
            purchasing_disabled_message?: string;
            purchasing_hidden?: boolean;
            image_url?: string;
            price_adjuster?: {
                adjuster?: 'relative' | 'percentage';
                adjuster_value?: number;
            };
            weight_adjuster?: {
                adjuster?: 'relative' | 'percentage';
                adjuster_value?: number;
            };
            conditions?: Array<{
                id?: number;
                rule_id?: number;
                modifier_id: number;
                modifier_value_id: number;
                variant_id: number;
                combination_id?: number;
            }>;
        };
        meta?: MetaEmptyFull;
    };
};
export type UpdateComplexRuleResponse = UpdateComplexRuleResponses[keyof UpdateComplexRuleResponses];
export type GetCustomFieldsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
        page?: number;
        limit?: number;
    };
    url: '/catalog/products/{product_id}/custom-fields';
};
export type GetCustomFieldsResponses = {
    200: {
        data?: Array<{
            id?: number;
            name: string;
            value: string;
        }>;
        meta?: MetaCollectionFull;
    };
};
export type GetCustomFieldsResponse = GetCustomFieldsResponses[keyof GetCustomFieldsResponses];
export type CreateCustomFieldData = {
    body: {
        name: string;
        value: string;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/custom-fields';
};
export type CreateCustomFieldErrors = {
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
};
export type CreateCustomFieldError = CreateCustomFieldErrors[keyof CreateCustomFieldErrors];
export type CreateCustomFieldResponses = {
    200: {
        data?: {
            id?: number;
            name: string;
            value: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type CreateCustomFieldResponse = CreateCustomFieldResponses[keyof CreateCustomFieldResponses];
export type DeleteCustomFieldByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        custom_field_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/custom-fields/{custom_field_id}';
};
export type DeleteCustomFieldByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type DeleteCustomFieldByIdError = DeleteCustomFieldByIdErrors[keyof DeleteCustomFieldByIdErrors];
export type DeleteCustomFieldByIdResponses = {
    204: void;
};
export type DeleteCustomFieldByIdResponse = DeleteCustomFieldByIdResponses[keyof DeleteCustomFieldByIdResponses];
export type GetCustomFieldByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        custom_field_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/custom-fields/{custom_field_id}';
};
export type GetCustomFieldByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetCustomFieldByIdError = GetCustomFieldByIdErrors[keyof GetCustomFieldByIdErrors];
export type GetCustomFieldByIdResponses = {
    200: {
        data?: ProductCustomFieldBase;
        meta?: MetaEmptyFull;
    };
};
export type GetCustomFieldByIdResponse = GetCustomFieldByIdResponses[keyof GetCustomFieldByIdResponses];
export type UpdateCustomFieldData = {
    body: {
        id?: number;
        name: string;
        value: string;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        custom_field_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/custom-fields/{custom_field_id}';
};
export type UpdateCustomFieldErrors = {
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
};
export type UpdateCustomFieldError = UpdateCustomFieldErrors[keyof UpdateCustomFieldErrors];
export type UpdateCustomFieldResponses = {
    200: {
        data?: {
            id?: number;
            name: string;
            value: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type UpdateCustomFieldResponse = UpdateCustomFieldResponses[keyof UpdateCustomFieldResponses];
export type GetBulkPricingRulesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
        page?: number;
        limit?: number;
    };
    url: '/catalog/products/{product_id}/bulk-pricing-rules';
};
export type GetBulkPricingRulesErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetBulkPricingRulesError = GetBulkPricingRulesErrors[keyof GetBulkPricingRulesErrors];
export type GetBulkPricingRulesResponses = {
    200: {
        data?: Array<{
            readonly id: number;
        } & BulkPricingRuleFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetBulkPricingRulesResponse = GetBulkPricingRulesResponses[keyof GetBulkPricingRulesResponses];
export type CreateBulkPricingRuleData = {
    body: BulkPricingRuleFull;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/catalog/products/{product_id}/bulk-pricing-rules';
};
export type CreateBulkPricingRuleErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
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
export type CreateBulkPricingRuleError = CreateBulkPricingRuleErrors[keyof CreateBulkPricingRuleErrors];
export type CreateBulkPricingRuleResponses = {
    200: {
        data?: {
            readonly id: number;
        } & BulkPricingRuleFull;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type CreateBulkPricingRuleResponse = CreateBulkPricingRuleResponses[keyof CreateBulkPricingRuleResponses];
export type DeleteBulkPricingRuleByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        bulk_pricing_rule_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/bulk-pricing-rules/{bulk_pricing_rule_id}';
};
export type DeleteBulkPricingRuleByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type DeleteBulkPricingRuleByIdError = DeleteBulkPricingRuleByIdErrors[keyof DeleteBulkPricingRuleByIdErrors];
export type DeleteBulkPricingRuleByIdResponses = {
    204: void;
};
export type DeleteBulkPricingRuleByIdResponse = DeleteBulkPricingRuleByIdResponses[keyof DeleteBulkPricingRuleByIdResponses];
export type GetBulkPricingRuleByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        bulk_pricing_rule_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/bulk-pricing-rules/{bulk_pricing_rule_id}';
};
export type GetBulkPricingRuleByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetBulkPricingRuleByIdError = GetBulkPricingRuleByIdErrors[keyof GetBulkPricingRuleByIdErrors];
export type GetBulkPricingRuleByIdResponses = {
    200: {
        data?: {
            readonly id: number;
        } & BulkPricingRuleFull;
        meta?: MetaEmptyFull;
    };
};
export type GetBulkPricingRuleByIdResponse = GetBulkPricingRuleByIdResponses[keyof GetBulkPricingRuleByIdResponses];
export type UpdateBulkPricingRuleData = {
    body: {
        readonly id: number;
    } & BulkPricingRuleFull;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        bulk_pricing_rule_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/bulk-pricing-rules/{bulk_pricing_rule_id}';
};
export type UpdateBulkPricingRuleErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
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
export type UpdateBulkPricingRuleError = UpdateBulkPricingRuleErrors[keyof UpdateBulkPricingRuleErrors];
export type UpdateBulkPricingRuleResponses = {
    200: {
        data?: {
            readonly id?: number;
            quantity_min: number;
            quantity_max: number;
            type: 'price' | 'percent' | 'fixed';
            amount: number;
        };
        meta?: MetaEmptyFull;
    };
};
export type UpdateBulkPricingRuleResponse = UpdateBulkPricingRuleResponses[keyof UpdateBulkPricingRuleResponses];
export type GetProductMetafieldsByProductIdData = {
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
        key?: string;
        namespace?: string;
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/metafields';
};
export type GetProductMetafieldsByProductIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductMetafieldsByProductIdError = GetProductMetafieldsByProductIdErrors[keyof GetProductMetafieldsByProductIdErrors];
export type GetProductMetafieldsByProductIdResponses = {
    200: {
        data?: Array<MetafieldFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetProductMetafieldsByProductIdResponse = GetProductMetafieldsByProductIdResponses[keyof GetProductMetafieldsByProductIdResponses];
export type CreateProductMetafieldData = {
    body: MetafieldBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/metafields';
};
export type CreateProductMetafieldErrors = {
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
export type CreateProductMetafieldError = CreateProductMetafieldErrors[keyof CreateProductMetafieldErrors];
export type CreateProductMetafieldResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type CreateProductMetafieldResponse = CreateProductMetafieldResponses[keyof CreateProductMetafieldResponses];
export type DeleteProductMetafieldByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        metafield_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/metafields/{metafield_id}';
};
export type DeleteProductMetafieldByIdResponses = {
    204: void;
};
export type DeleteProductMetafieldByIdResponse = DeleteProductMetafieldByIdResponses[keyof DeleteProductMetafieldByIdResponses];
export type GetProductMetafieldByProductIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        metafield_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/metafields/{metafield_id}';
};
export type GetProductMetafieldByProductIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductMetafieldByProductIdError = GetProductMetafieldByProductIdErrors[keyof GetProductMetafieldByProductIdErrors];
export type GetProductMetafieldByProductIdResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type GetProductMetafieldByProductIdResponse = GetProductMetafieldByProductIdResponses[keyof GetProductMetafieldByProductIdResponses];
export type UpdateProductMetafieldData = {
    body: MetafieldBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        metafield_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/metafields/{metafield_id}';
};
export type UpdateProductMetafieldErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type UpdateProductMetafieldError = UpdateProductMetafieldErrors[keyof UpdateProductMetafieldErrors];
export type UpdateProductMetafieldResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type UpdateProductMetafieldResponse = UpdateProductMetafieldResponses[keyof UpdateProductMetafieldResponses];
export type GetProductReviewsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
        page?: number;
        limit?: number;
        status?: number;
    };
    url: '/catalog/products/{product_id}/reviews';
};
export type GetProductReviewsErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductReviewsError = GetProductReviewsErrors[keyof GetProductReviewsErrors];
export type GetProductReviewsResponses = {
    200: {
        data?: Array<{
            title: string;
            text?: string;
            status?: string;
            rating?: number;
            email?: string;
            name?: string;
            date_reviewed: string;
        } & {
            id?: number;
            product_id?: number;
            date_created?: string;
            date_modified?: string;
        }>;
        meta?: MetaCollectionFull;
    };
    204: void;
};
export type GetProductReviewsResponse = GetProductReviewsResponses[keyof GetProductReviewsResponses];
export type CreateProductReviewData = {
    body: {
        title: string;
        text?: string;
        status?: string;
        rating?: number;
        email?: string;
        name?: string;
        date_reviewed: string;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/reviews';
};
export type CreateProductReviewErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type CreateProductReviewError = CreateProductReviewErrors[keyof CreateProductReviewErrors];
export type CreateProductReviewResponses = {
    200: {
        data?: {
            title: string;
            text?: string;
            status?: string;
            rating?: number;
            email?: string;
            name?: string;
            date_reviewed: string;
        } & {
            id?: number;
            product_id?: number;
            date_created?: string;
            date_modified?: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type CreateProductReviewResponse = CreateProductReviewResponses[keyof CreateProductReviewResponses];
export type DeleteProductReviewData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        review_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/reviews/{review_id}';
};
export type DeleteProductReviewResponses = {
    204: void;
};
export type DeleteProductReviewResponse = DeleteProductReviewResponses[keyof DeleteProductReviewResponses];
export type GetProductReviewByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        review_id: number;
    };
    query?: {
        include_fields?: string;
        exclude_fields?: string;
    };
    url: '/catalog/products/{product_id}/reviews/{review_id}';
};
export type GetProductReviewByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductReviewByIdError = GetProductReviewByIdErrors[keyof GetProductReviewByIdErrors];
export type GetProductReviewByIdResponses = {
    200: {
        data?: {
            title: string;
            text?: string;
            status?: string;
            rating?: number;
            email?: string;
            name?: string;
            date_reviewed: string;
        } & {
            id?: number;
            date_created?: string;
            date_modified?: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type GetProductReviewByIdResponse = GetProductReviewByIdResponses[keyof GetProductReviewByIdResponses];
export type UpdateProductReviewData = {
    body: {
        title: string;
        text?: string;
        status?: string;
        rating?: number;
        email?: string;
        name?: string;
        date_reviewed: string;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        review_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/reviews/{review_id}';
};
export type UpdateProductReviewErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type UpdateProductReviewError = UpdateProductReviewErrors[keyof UpdateProductReviewErrors];
export type UpdateProductReviewResponses = {
    200: {
        data?: {
            title: string;
            text?: string;
            status?: string;
            rating?: number;
            email?: string;
            name?: string;
            date_reviewed: string;
        } & {
            id?: number;
            product_id?: number;
            date_created?: string;
            date_modified?: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type UpdateProductReviewResponse = UpdateProductReviewResponses[keyof UpdateProductReviewResponses];
export type DeleteProductsChannelAssignmentsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'product_id:in'?: string;
        'channel_id:in'?: string;
    };
    url: '/catalog/products/channel-assignments';
};
export type DeleteProductsChannelAssignmentsErrors = {
    422: Beta5ErrorResponse;
};
export type DeleteProductsChannelAssignmentsError = DeleteProductsChannelAssignmentsErrors[keyof DeleteProductsChannelAssignmentsErrors];
export type DeleteProductsChannelAssignmentsResponses = {
    204: void;
};
export type DeleteProductsChannelAssignmentsResponse = DeleteProductsChannelAssignmentsResponses[keyof DeleteProductsChannelAssignmentsResponses];
export type GetProductsChannelAssignmentsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        'product_id:in'?: string;
        'channel_id:in'?: string;
    };
    url: '/catalog/products/channel-assignments';
};
export type GetProductsChannelAssignmentsResponses = {
    200: {
        data?: Array<ProductChannelAssignment>;
        meta?: MetaPaginationObject;
    };
};
export type GetProductsChannelAssignmentsResponse = GetProductsChannelAssignmentsResponses[keyof GetProductsChannelAssignmentsResponses];
export type CreateProductsChannelAssignmentsData = {
    body: Array<ProductChannelAssignment>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/catalog/products/channel-assignments';
};
export type CreateProductsChannelAssignmentsErrors = {
    422: Beta5ErrorResponse;
};
export type CreateProductsChannelAssignmentsError = CreateProductsChannelAssignmentsErrors[keyof CreateProductsChannelAssignmentsErrors];
export type CreateProductsChannelAssignmentsResponses = {
    204: void;
};
export type CreateProductsChannelAssignmentsResponse = CreateProductsChannelAssignmentsResponses[keyof CreateProductsChannelAssignmentsResponses];
export type DeleteProductsCategoryAssignmentsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'product_id:in'?: string;
        'category_id:in'?: string;
    };
    url: '/catalog/products/category-assignments';
};
export type DeleteProductsCategoryAssignmentsErrors = {
    422: Beta5ErrorResponse;
};
export type DeleteProductsCategoryAssignmentsError = DeleteProductsCategoryAssignmentsErrors[keyof DeleteProductsCategoryAssignmentsErrors];
export type DeleteProductsCategoryAssignmentsResponses = {
    204: void;
};
export type DeleteProductsCategoryAssignmentsResponse = DeleteProductsCategoryAssignmentsResponses[keyof DeleteProductsCategoryAssignmentsResponses];
export type GetProductsCategoryAssignmentsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        'product_id:in'?: string;
        'category_id:in'?: string;
    };
    url: '/catalog/products/category-assignments';
};
export type GetProductsCategoryAssignmentsResponses = {
    200: {
        data?: Array<ProductCategoryAssignment>;
        meta?: MetaPaginationObject;
    };
};
export type GetProductsCategoryAssignmentsResponse = GetProductsCategoryAssignmentsResponses[keyof GetProductsCategoryAssignmentsResponses];
export type CreateProductsCategoryAssignmentsData = {
    body: Array<ProductCategoryAssignment>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/catalog/products/category-assignments';
};
export type CreateProductsCategoryAssignmentsErrors = {
    422: Beta5ErrorResponse;
};
export type CreateProductsCategoryAssignmentsError = CreateProductsCategoryAssignmentsErrors[keyof CreateProductsCategoryAssignmentsErrors];
export type CreateProductsCategoryAssignmentsResponses = {
    204: void;
};
export type CreateProductsCategoryAssignmentsResponse = CreateProductsCategoryAssignmentsResponses[keyof CreateProductsCategoryAssignmentsResponses];
export type GetCatalogSummaryData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/catalog/summary';
};
export type GetCatalogSummaryResponses = {
    200: {
        data?: {
            inventory_count?: number;
            inventory_value?: number;
            primary_category_id?: number;
            primary_category_name?: string;
            variant_count?: number;
            highest_variant_price?: number;
            average_variant_price?: number;
            lowest_variant_price?: string;
            oldest_variant_date?: string;
            newest_variant_date?: string;
        };
        meta?: MetaEmptyFull;
    };
};
export type GetCatalogSummaryResponse = GetCatalogSummaryResponses[keyof GetCatalogSummaryResponses];
