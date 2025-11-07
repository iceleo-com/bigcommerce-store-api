export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type ModifierCondition = {
    modifier_id?: number;
    modifier_value_id?: number;
};
export type VariantCondition = {
    variant_id?: number;
};
export type ConditionsRequest = Array<ModifierCondition | VariantCondition>;
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
    map_price?: number;
    weight?: number | null;
    width?: number | null;
    height?: number | null;
    depth?: number | null;
    is_free_shipping?: boolean;
    fixed_cost_shipping_price?: number | null;
    purchasing_disabled?: boolean;
    purchasing_disabled_message?: string;
    image_url?: string;
    upc?: string;
    inventory_level?: number | null;
    inventory_warning_level?: number | null;
    bin_picking_number?: string | null;
    mpn?: string;
    gtin?: string;
};
export type ProductVariantFull = ProductVariantBase & {
    product_id: number;
    id: number;
    sku: string;
    sku_id?: number;
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
    upc?: string;
    inventory_level?: number | null;
    inventory_warning_level?: number | null;
    bin_picking_number?: string | null;
    product_id: number;
    id: number;
    sku?: string;
};
export type ProductVariantOptionValueFull = {
    id?: number;
    label: string;
    option_id?: number;
    option_display_name: string;
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
    is_thumbnail?: boolean;
    sort_order?: number;
    description?: string;
    date_modified?: string;
};
export type ProductImagePostPut = {
    product_id?: number;
    image_url?: string;
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
export type IncludeParamBase = Array<'bulk_pricing_rules' | 'reviews' | 'modifiers' | 'options' | 'parent_relations' | 'custom_fields' | 'channels' | 'videos'>;
export type ProductPut = ProductBasePut;
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
    create_redirect?: boolean;
};
export type BulkPricingRuleResponse = {
    quantity_min?: number;
    quantity_max?: number;
    type?: 'price' | 'percent' | 'fixed';
    amount?: number | string;
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
} & ProductBaseResponse & {
    date_created?: string;
    date_modified?: string;
    base_variant_id?: number;
    calculated_price?: number;
    options?: Array<ProductOptionBase>;
    modifiers?: Array<ProductModifierFull>;
    map_price?: number;
    option_set_id?: number;
    option_set_display?: string;
};
export type ProductImageFull = ProductImageBase & {
    id?: number;
    product_id?: number;
    image_url?: string;
    readonly url_zoom?: string;
    readonly url_standard?: string;
    readonly url_thumbnail?: string;
    readonly url_tiny?: string;
    date_modified?: string;
};
export type PrimaryImageFull = {
    id?: number;
    product_id?: number;
    is_thumbnail?: boolean;
    sort_order?: number;
    description?: string;
    image_file?: string;
    readonly url_zoom?: string;
    readonly url_standard?: string;
    readonly url_thumbnail?: string;
    readonly url_tiny?: string;
    date_modified?: string;
};
export type ProductPutCollection = Array<{
    readonly id: number;
} & ProductBasePut>;
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
export type ProductBasePost = {
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
    date_last_imported?: string;
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
export type ProductBasePut = {
    name?: string;
    type?: 'physical' | 'digital';
    sku?: string;
    description?: string;
    weight?: number;
    width?: number;
    depth?: number;
    height?: number;
    price?: number;
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
    date_last_imported?: string;
    reviews_rating_sum?: number;
    reviews_count?: number;
    total_sold?: number;
    custom_fields?: Array<ProductCustomFieldPut>;
    bulk_pricing_rules?: Array<{
        readonly id: number;
    } & BulkPricingRuleFull>;
    images?: Array<ProductImageFull>;
    videos?: Array<ProductVideoFull>;
};
export type ProductBaseResponse = {
    name?: string;
    type?: 'physical' | 'digital';
    sku?: string;
    description?: string;
    weight?: number;
    width?: number;
    depth?: number;
    height?: number;
    price?: number;
    cost_price?: number;
    retail_price?: number;
    sale_price?: number;
    map_price?: number;
    tax_class_id?: number;
    product_tax_code?: string;
    categories?: Array<number>;
    brand_id?: number;
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
    date_last_imported?: string;
    reviews_rating_sum?: number;
    reviews_count?: number;
    total_sold?: number;
    custom_fields?: Array<ProductCustomFieldPut>;
    bulk_pricing_rules?: Array<{
        readonly id: number;
    } & BulkPricingRuleFull>;
    images?: Array<ProductImageFull>;
    primary_image?: PrimaryImageFull;
    videos?: Array<ProductVideoFull>;
};
export type MetafieldFull = {
    readonly id?: number;
} & MetafieldBase & {
    resource_type?: 'category' | 'brand' | 'product' | 'variant';
    resource_id?: number;
    readonly date_created?: string;
    readonly date_modified?: string;
    owner_client_id?: string;
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
            previous?: string;
            current?: string;
            next?: string;
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
export type Metafield = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description: string;
    resource_type: 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
    readonly resource_id: number;
    id: number;
    date_created: string;
    date_modified: string;
    readonly owner_client_id?: string;
};
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponsePostPut = {
    data?: Array<Metafield>;
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
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetafieldBasePut = {
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
};
export type CustomFieldData = {
    id?: number;
    name?: string;
    value?: string;
};
export type CustomFieldPost = {
    name: string;
    value: string;
};
export type CustomFieldPut = {
    name?: string;
    value?: string;
};
export type MetaCollectionFull2 = {
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
export type MetaEmptyFull2 = {
    [key: string]: unknown;
};
export type GeneralErrorWithErrors = {
    status: number;
    title: string;
    type: string;
    errors: {
        [key: string]: unknown;
    };
};
export type GeneralError = {
    status: number;
    title: string;
    type: string;
    code?: number;
};
export type MethodNotAllowedError = {
    status: number;
    title: string;
    type: string;
    detail: string;
};
export type ProductPutWritable = ProductBasePutWritable;
export type MetaEmptyFullWritable = {
    [key: string]: unknown;
};
export type DetailedErrorsWritable = {
    [key: string]: unknown;
};
export type ProductFullWritable = ProductBaseResponseWritable & {
    date_created?: string;
    date_modified?: string;
    base_variant_id?: number;
    calculated_price?: number;
    options?: Array<ProductOptionBase>;
    modifiers?: Array<ProductModifierFull>;
    map_price?: number;
    option_set_id?: number;
    option_set_display?: string;
};
export type ProductImageFullWritable = ProductImageBase & {
    id?: number;
    product_id?: number;
    image_url?: string;
    date_modified?: string;
};
export type PrimaryImageFullWritable = {
    id?: number;
    product_id?: number;
    is_thumbnail?: boolean;
    sort_order?: number;
    description?: string;
    image_file?: string;
    date_modified?: string;
};
export type ProductPutCollectionWritable = Array<ProductBasePutWritable>;
export type ProductBasePostWritable = {
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
    date_last_imported?: string;
    reviews_rating_sum?: number;
    reviews_count?: number;
    total_sold?: number;
    custom_fields?: Array<ProductCustomFieldPut>;
    bulk_pricing_rules?: Array<BulkPricingRuleFull>;
    images?: Array<ProductImageFullWritable>;
    videos?: Array<ProductVideoFull>;
    variants?: Array<ProductVariantFull>;
};
export type ProductBasePutWritable = {
    name?: string;
    type?: 'physical' | 'digital';
    sku?: string;
    description?: string;
    weight?: number;
    width?: number;
    depth?: number;
    height?: number;
    price?: number;
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
    date_last_imported?: string;
    reviews_rating_sum?: number;
    reviews_count?: number;
    total_sold?: number;
    custom_fields?: Array<ProductCustomFieldPut>;
    bulk_pricing_rules?: Array<BulkPricingRuleFull>;
    images?: Array<ProductImageFullWritable>;
    videos?: Array<ProductVideoFull>;
};
export type ProductBaseResponseWritable = {
    name?: string;
    type?: 'physical' | 'digital';
    sku?: string;
    description?: string;
    weight?: number;
    width?: number;
    depth?: number;
    height?: number;
    price?: number;
    cost_price?: number;
    retail_price?: number;
    sale_price?: number;
    map_price?: number;
    tax_class_id?: number;
    product_tax_code?: string;
    categories?: Array<number>;
    brand_id?: number;
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
    date_last_imported?: string;
    reviews_rating_sum?: number;
    reviews_count?: number;
    total_sold?: number;
    custom_fields?: Array<ProductCustomFieldPut>;
    bulk_pricing_rules?: Array<BulkPricingRuleFull>;
    images?: Array<ProductImageFullWritable>;
    primary_image?: PrimaryImageFullWritable;
    videos?: Array<ProductVideoFull>;
};
export type MetafieldFullWritable = MetafieldBase & {
    resource_type?: 'category' | 'brand' | 'product' | 'variant';
    resource_id?: number;
    owner_client_id?: string;
};
export type Beta5DetailedErrorsWritable = {
    [key: string]: unknown;
};
export type MetafieldWritable = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description: string;
    resource_type: 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
    id: number;
    date_created: string;
    date_modified: string;
};
export type ErrorDetailWritable = {
    [key: string]: unknown;
};
export type MetaEmptyFullWritable2 = {
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
export type PageParam = number;
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
export type SortParam = 'id' | 'name' | 'sku' | 'price' | 'date_modified' | 'date_last_imported' | 'inventory_level' | 'is_visible' | 'total_sold' | 'calculated_price';
export type IncludeFieldsBulkPricingParam = Array<'quantity_min' | 'quantity_max' | 'type' | 'amount'>;
export type IncludeFieldsParam = Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
export type IncludeFieldsParamMetafields = Array<'resource_id' | 'resource_id:in' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified'>;
export type IncludeFieldsEnumParam = Array<'variants' | 'images' | 'custom_fields' | 'bulk_pricing_rules' | 'primary_image' | 'modifiers' | 'options' | 'videos'>;
export type ExcludeFieldsParam = Array<string>;
export type IdInParam = Array<number>;
export type IdNotInParam = Array<number>;
export type ProductIdInParam = Array<number>;
export type CategoryIdInParam = Array<number>;
export type CategoriesInParam = Array<number>;
export type ChannelIdInParam = Array<number>;
export type IncludeParamGetProducts = IncludeParamBase;
export type IncludeParamGetProduct = IncludeParamBase;
export type IdMinParam = number;
export type IdMaxParam = number;
export type IdGreaterParam = number;
export type IdLessParam = number;
export type NameParam = string;
export type MpnParam = string;
export type UpcParam = string;
export type PriceParam = number;
export type WeightParam = number;
export type ConditionParam = 'new' | 'used' | 'refurbished';
export type BrandIdParam = number;
export type DateModifiedParam = string;
export type DateModifiedMaxParam = string;
export type DateModifiedMinParam = string;
export type DateLastImportedParam = string;
export type DateLastImportedNotParam = string;
export type DateLastImportedMaxParam = string;
export type DateLastImportedMinParam = string;
export type IsVisibleParam = boolean;
export type IsFeaturedParam = 1 | 0;
export type IsFreeShippingParam = number;
export type InventoryLevelParam = number;
export type InventoryLevelInParam = Array<number>;
export type InventoryLevelNotInParam = Array<number>;
export type InventoryLevelMinParam = number;
export type InventoryLevelMaxParam = number;
export type InventoryLevelGreaterParam = number;
export type InventoryLevelLessParam = number;
export type InventoryLowParam = number;
export type OutOfStockParam = number;
export type TotalSoldParam = number;
export type ProductTypeParam = 'digital' | 'physical';
export type CategoriesParam = number;
export type KeywordParam = string;
export type KeywordContextParam = 'shopper' | 'merchant';
export type AvailabilityParam = 'available' | 'disabled' | 'preorder';
export type SkuParam = string;
export type SkuInParam = Array<string>;
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
        is_featured?: 1 | 0;
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
        'channel_id:in'?: Array<number>;
        'id:not_in'?: Array<number>;
        include?: IncludeParamBase;
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
        exclude_fields?: Array<string>;
        page?: number;
        limit?: number;
        direction?: 'asc' | 'desc';
        sort?: 'id' | 'name' | 'sku' | 'price' | 'date_modified' | 'date_last_imported' | 'inventory_level' | 'is_visible' | 'total_sold' | 'calculated_price';
        'categories:in'?: Array<number>;
        'id:min'?: number;
        'id:max'?: number;
        'id:greater'?: number;
        'id:less'?: number;
        name?: string;
        mpn?: string;
        upc?: string;
        price?: number;
        weight?: number;
        condition?: 'new' | 'used' | 'refurbished';
        brand_id?: number;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        date_last_imported?: string;
        'date_last_imported:not'?: string;
        'date_last_imported:max'?: string;
        'date_last_imported:min'?: string;
        is_visible?: boolean;
        is_featured?: 1 | 0;
        is_free_shipping?: number;
        inventory_level?: number;
        'inventory_level:in'?: Array<number>;
        'inventory_level:not_in'?: Array<number>;
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
        availability?: 'available' | 'disabled' | 'preorder';
        sku?: string;
        'sku:in'?: Array<string>;
    };
    url: '/catalog/products';
};
export type GetProductsResponses = {
    200: {
        data?: Array<ProductFull & {
            channels?: Array<number>;
        }>;
        meta?: MetaCollectionFull;
    };
};
export type GetProductsResponse = GetProductsResponses[keyof GetProductsResponses];
export type CreateProductData = {
    body: ProductBasePostWritable;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: {
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
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
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
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
        meta?: unknown;
    };
    207: {
        data?: Array<ProductFull>;
        errors?: ErrorMultiStatus;
        meta?: MetaCollectionFull;
    };
};
export type UpdateProductsResponse = UpdateProductsResponses[keyof UpdateProductsResponses];
export type DeleteProductData = {
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
export type DeleteProductResponses = {
    204: void;
};
export type DeleteProductResponse = DeleteProductResponses[keyof DeleteProductResponses];
export type GetProductData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include?: IncludeParamBase;
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}';
};
export type GetProductErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductError = GetProductErrors[keyof GetProductErrors];
export type GetProductResponses = {
    200: {
        data?: ProductFull & {
            channels?: Array<number>;
        };
        meta?: MetaEmptyFull;
    };
};
export type GetProductResponse = GetProductResponses[keyof GetProductResponses];
export type UpdateProductData = {
    body: ProductPutWritable;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include?: IncludeParamBase;
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
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
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
        exclude_fields?: Array<string>;
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
    body: ProductImagePostPut;
    headers: {
        Accept: string;
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
            image_url?: string;
        } | {
            id?: number;
            product_id?: number;
            image_file?: string;
            readonly url_zoom?: string;
            readonly url_standard?: string;
            readonly url_thumbnail?: string;
            readonly url_tiny?: string;
            date_modified?: string;
            is_thumbnail?: boolean;
            sort_order?: number;
            description?: string;
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
export type GetProductImageData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        image_id: number;
    };
    query?: {
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/images/{image_id}';
};
export type GetProductImageErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductImageError = GetProductImageErrors[keyof GetProductImageErrors];
export type GetProductImageResponses = {
    200: {
        data?: ProductImageFull;
        meta?: MetaEmptyFull;
    };
};
export type GetProductImageResponse = GetProductImageResponses[keyof GetProductImageResponses];
export type UpdateProductImageData = {
    body: ProductImagePostPut;
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
    422: ErrorResponse422;
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
            image_url?: string;
        } | {
            id?: number;
            product_id?: number;
            image_file?: string;
            readonly url_zoom?: string;
            readonly url_standard?: string;
            readonly url_thumbnail?: string;
            readonly url_tiny?: string;
            date_modified?: string;
            is_thumbnail?: boolean;
            sort_order?: number;
            description?: string;
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
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
        exclude_fields?: Array<string>;
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
export type GetProductVideoData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        id: number;
    };
    query?: {
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/videos/{id}';
};
export type GetProductVideoErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductVideoError = GetProductVideoErrors[keyof GetProductVideoErrors];
export type GetProductVideoResponses = {
    200: {
        data?: ProductVideoFull;
        meta?: MetaEmptyFull;
    };
};
export type GetProductVideoResponse = GetProductVideoResponses[keyof GetProductVideoResponses];
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
export type GetProductComplexRulesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
        exclude_fields?: Array<string>;
        page?: number;
        limit?: number;
    };
    url: '/catalog/products/{product_id}/complex-rules';
};
export type GetProductComplexRulesResponses = {
    200: {
        data?: Array<ComplexRuleBase>;
        meta?: MetaCollectionFull;
    };
};
export type GetProductComplexRulesResponse = GetProductComplexRulesResponses[keyof GetProductComplexRulesResponses];
export type CreateProductComplexRuleData = {
    body: {
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
        conditions?: ConditionsRequest;
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
export type CreateProductComplexRuleErrors = {
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
export type CreateProductComplexRuleError = CreateProductComplexRuleErrors[keyof CreateProductComplexRuleErrors];
export type CreateProductComplexRuleResponses = {
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
export type CreateProductComplexRuleResponse = CreateProductComplexRuleResponses[keyof CreateProductComplexRuleResponses];
export type DeleteProductComplexRuleData = {
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
export type DeleteProductComplexRuleResponses = {
    204: void;
};
export type DeleteProductComplexRuleResponse = DeleteProductComplexRuleResponses[keyof DeleteProductComplexRuleResponses];
export type GetProductComplexRuleData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        complex_rule_id: number;
    };
    query?: {
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/complex-rules/{complex_rule_id}';
};
export type GetProductComplexRuleErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductComplexRuleError = GetProductComplexRuleErrors[keyof GetProductComplexRuleErrors];
export type GetProductComplexRuleResponses = {
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
export type GetProductComplexRuleResponse = GetProductComplexRuleResponses[keyof GetProductComplexRuleResponses];
export type UpdateProductComplexRuleData = {
    body: {
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
export type UpdateProductComplexRuleErrors = {
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
export type UpdateProductComplexRuleError = UpdateProductComplexRuleErrors[keyof UpdateProductComplexRuleErrors];
export type UpdateProductComplexRuleResponses = {
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
export type UpdateProductComplexRuleResponse = UpdateProductComplexRuleResponses[keyof UpdateProductComplexRuleResponses];
export type GetProductCustomFieldsData = {
    body?: never;
    path: {
        product_id: number;
    };
    query?: {
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
        exclude_fields?: Array<string>;
        page?: number;
        limit?: number;
    };
    url: '/catalog/products/{product_id}/custom-fields';
};
export type GetProductCustomFieldsErrors = {
    401: string;
    403: GeneralErrorWithErrors;
    404: GeneralError;
    405: MethodNotAllowedError;
};
export type GetProductCustomFieldsError = GetProductCustomFieldsErrors[keyof GetProductCustomFieldsErrors];
export type GetProductCustomFieldsResponses = {
    200: {
        data?: Array<CustomFieldData>;
        meta?: MetaCollectionFull2;
    };
};
export type GetProductCustomFieldsResponse = GetProductCustomFieldsResponses[keyof GetProductCustomFieldsResponses];
export type CreateProductCustomFieldData = {
    body: CustomFieldPost;
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/custom-fields';
};
export type CreateProductCustomFieldErrors = {
    401: string;
    403: GeneralErrorWithErrors;
    404: GeneralError;
    405: MethodNotAllowedError;
    415: string;
    422: GeneralError;
};
export type CreateProductCustomFieldError = CreateProductCustomFieldErrors[keyof CreateProductCustomFieldErrors];
export type CreateProductCustomFieldResponses = {
    200: {
        data?: CustomFieldData;
        meta?: MetaEmptyFull2;
    };
};
export type CreateProductCustomFieldResponse = CreateProductCustomFieldResponses[keyof CreateProductCustomFieldResponses];
export type DeleteProductCustomFieldData = {
    body?: never;
    path: {
        product_id: number;
        custom_field_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/custom-fields/{custom_field_id}';
};
export type DeleteProductCustomFieldErrors = {
    401: string;
    403: GeneralErrorWithErrors;
    404: GeneralError;
    405: MethodNotAllowedError;
};
export type DeleteProductCustomFieldError = DeleteProductCustomFieldErrors[keyof DeleteProductCustomFieldErrors];
export type DeleteProductCustomFieldResponses = {
    204: void;
};
export type DeleteProductCustomFieldResponse = DeleteProductCustomFieldResponses[keyof DeleteProductCustomFieldResponses];
export type GetProductCustomFieldData = {
    body?: never;
    path: {
        product_id: number;
        custom_field_id: number;
    };
    query?: {
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/custom-fields/{custom_field_id}';
};
export type GetProductCustomFieldErrors = {
    401: string;
    403: GeneralErrorWithErrors;
    404: GeneralError;
    405: MethodNotAllowedError;
};
export type GetProductCustomFieldError = GetProductCustomFieldErrors[keyof GetProductCustomFieldErrors];
export type GetProductCustomFieldResponses = {
    200: {
        data?: CustomFieldData;
        meta?: MetaEmptyFull2;
    };
};
export type GetProductCustomFieldResponse = GetProductCustomFieldResponses[keyof GetProductCustomFieldResponses];
export type UpdateProductCustomFieldData = {
    body: CustomFieldPut;
    path: {
        product_id: number;
        custom_field_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/custom-fields/{custom_field_id}';
};
export type UpdateProductCustomFieldErrors = {
    401: string;
    403: GeneralErrorWithErrors;
    404: GeneralError;
    405: MethodNotAllowedError;
    415: string;
    422: GeneralError;
};
export type UpdateProductCustomFieldError = UpdateProductCustomFieldErrors[keyof UpdateProductCustomFieldErrors];
export type UpdateProductCustomFieldResponses = {
    200: {
        data?: CustomFieldData;
        meta?: MetaEmptyFull2;
    };
};
export type UpdateProductCustomFieldResponse = UpdateProductCustomFieldResponses[keyof UpdateProductCustomFieldResponses];
export type GetAllBulkPricingRulesData = {
    body?: never;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include_fields?: Array<'quantity_min' | 'quantity_max' | 'type' | 'amount'>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/bulk-pricing-rules';
};
export type GetAllBulkPricingRulesResponses = {
    200: {
        data?: {
            readonly id?: number;
        } & BulkPricingRuleResponse;
        meta?: MetaCollectionFull;
    };
};
export type GetAllBulkPricingRulesResponse = GetAllBulkPricingRulesResponses[keyof GetAllBulkPricingRulesResponses];
export type CreateBulkPricingRuleData = {
    body: BulkPricingRuleFull;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/bulk-pricing-rules';
};
export type CreateBulkPricingRuleResponses = {
    200: {
        data?: {
            readonly id?: number;
        } & BulkPricingRuleResponse;
        meta?: MetaEmptyFull;
    };
};
export type CreateBulkPricingRuleResponse = CreateBulkPricingRuleResponses[keyof CreateBulkPricingRuleResponses];
export type DeleteBulkPricingRuleData = {
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
export type DeleteBulkPricingRuleErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type DeleteBulkPricingRuleError = DeleteBulkPricingRuleErrors[keyof DeleteBulkPricingRuleErrors];
export type DeleteBulkPricingRuleResponses = {
    204: void;
};
export type DeleteBulkPricingRuleResponse = DeleteBulkPricingRuleResponses[keyof DeleteBulkPricingRuleResponses];
export type GetBulkPricingRuleData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        bulk_pricing_rule_id: number;
    };
    query?: {
        include_fields?: Array<'quantity_min' | 'quantity_max' | 'type' | 'amount'>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/bulk-pricing-rules/{bulk_pricing_rule_id}';
};
export type GetBulkPricingRuleErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetBulkPricingRuleError = GetBulkPricingRuleErrors[keyof GetBulkPricingRuleErrors];
export type GetBulkPricingRuleResponses = {
    200: {
        data?: {
            readonly id: number;
        } & BulkPricingRuleResponse;
        meta?: MetaEmptyFull;
    };
};
export type GetBulkPricingRuleResponse = GetBulkPricingRuleResponses[keyof GetBulkPricingRuleResponses];
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
        } & BulkPricingRuleResponse;
        meta?: MetaEmptyFull;
    };
};
export type UpdateBulkPricingRuleResponse = UpdateBulkPricingRuleResponses[keyof UpdateBulkPricingRuleResponses];
export type GetProductMetafieldsData = {
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
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/metafields';
};
export type GetProductMetafieldsResponses = {
    200: {
        data?: Array<MetafieldFull>;
        meta?: MetaCollectionFull;
    };
};
export type GetProductMetafieldsResponse = GetProductMetafieldsResponses[keyof GetProductMetafieldsResponses];
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
export type CreateProductMetafieldError = CreateProductMetafieldErrors[keyof CreateProductMetafieldErrors];
export type CreateProductMetafieldResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type CreateProductMetafieldResponse = CreateProductMetafieldResponses[keyof CreateProductMetafieldResponses];
export type DeleteProductMetafieldData = {
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
export type DeleteProductMetafieldErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type DeleteProductMetafieldError = DeleteProductMetafieldErrors[keyof DeleteProductMetafieldErrors];
export type DeleteProductMetafieldResponses = {
    204: void;
};
export type DeleteProductMetafieldResponse = DeleteProductMetafieldResponses[keyof DeleteProductMetafieldResponses];
export type GetProductMetafieldData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        metafield_id: number;
    };
    query?: {
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/metafields/{metafield_id}';
};
export type GetProductMetafieldErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductMetafieldError = GetProductMetafieldErrors[keyof GetProductMetafieldErrors];
export type GetProductMetafieldResponses = {
    200: {
        data?: MetafieldFull;
        meta?: MetaEmptyFull;
    };
};
export type GetProductMetafieldResponse = GetProductMetafieldResponses[keyof GetProductMetafieldResponses];
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
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
        exclude_fields?: Array<string>;
        page?: number;
        limit?: number;
        status?: 0 | 1;
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
export type GetProductReviewData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        review_id: number;
    };
    query?: {
        include_fields?: Array<'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image'>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/reviews/{review_id}';
};
export type GetProductReviewErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetProductReviewError = GetProductReviewErrors[keyof GetProductReviewErrors];
export type GetProductReviewResponses = {
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
export type GetProductReviewResponse = GetProductReviewResponses[keyof GetProductReviewResponses];
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
        'product_id:in'?: Array<number>;
        'channel_id:in'?: Array<number>;
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
        'product_id:in'?: Array<number>;
        'channel_id:in'?: Array<number>;
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
        'product_id:in'?: Array<number>;
        'category_id:in'?: Array<number>;
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
        'product_id:in'?: Array<number>;
        'category_id:in'?: Array<number>;
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
export type DeleteProductsMetafieldsData = {
    body?: Array<number>;
    path?: never;
    query?: never;
    url: '/catalog/products/metafields';
};
export type DeleteProductsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessDelete;
};
export type DeleteProductsMetafieldsError = DeleteProductsMetafieldsErrors[keyof DeleteProductsMetafieldsErrors];
export type DeleteProductsMetafieldsResponses = {
    200: MetaFieldCollectionDeleteResponseSuccess;
};
export type DeleteProductsMetafieldsResponse = DeleteProductsMetafieldsResponses[keyof DeleteProductsMetafieldsResponses];
export type GetProductsMetafieldsData = {
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
        include_fields?: Array<'resource_id' | 'resource_id:in' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified'>;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
        'date_created:min'?: string;
        'date_created:max'?: string;
    };
    url: '/catalog/products/metafields';
};
export type GetProductsMetafieldsResponses = {
    200: MetaFieldCollectionResponse;
};
export type GetProductsMetafieldsResponse = GetProductsMetafieldsResponses[keyof GetProductsMetafieldsResponses];
export type CreateProductsMetafieldsData = {
    body?: Array<MetafieldBasePost & {
        resource_id: number;
    }>;
    path?: never;
    query?: never;
    url: '/catalog/products/metafields';
};
export type CreateProductsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateProductsMetafieldsError = CreateProductsMetafieldsErrors[keyof CreateProductsMetafieldsErrors];
export type CreateProductsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type CreateProductsMetafieldsResponse = CreateProductsMetafieldsResponses[keyof CreateProductsMetafieldsResponses];
export type UpdateProductsMetafieldsData = {
    body?: Array<MetafieldBasePut & {
        id: number;
    }>;
    path?: never;
    query?: never;
    url: '/catalog/products/metafields';
};
export type UpdateProductsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateProductsMetafieldsError = UpdateProductsMetafieldsErrors[keyof UpdateProductsMetafieldsErrors];
export type UpdateProductsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type UpdateProductsMetafieldsResponse = UpdateProductsMetafieldsResponses[keyof UpdateProductsMetafieldsResponses];
