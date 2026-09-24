export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type IncludeParamBaseItems = 'bulk_pricing_rules' | 'channels' | 'custom_fields' | 'images' | 'modifiers' | 'options' | 'parent_relations' | 'primary_image' | 'reviews' | 'variants' | 'videos';
export type IncludeParamBase = Array<IncludeParamBaseItems>;
export type CatalogProductsGetParametersIncludeFieldsSchemaItems = 'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image';
export type CatalogProductsGetParametersDirection = 'asc' | 'desc';
export type CatalogProductsGetParametersSort = 'id' | 'name' | 'sku' | 'price' | 'date_modified' | 'date_last_imported' | 'inventory_level' | 'is_visible' | 'total_sold' | 'calculated_price' | 'available_to_sell' | 'qty_backordered' | 'backorder_limit';
export type CatalogProductsGetParametersCondition = 'new' | 'used' | 'refurbished';
export type CatalogProductsGetParametersIsFeatured = '1' | '0';
export type CatalogProductsGetParametersType = 'digital' | 'physical';
export type CatalogProductsGetParametersKeywordContext = 'shopper' | 'merchant';
export type CatalogProductsGetParametersAvailability = 'available' | 'disabled' | 'preorder';
export type CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsType = 'physical' | 'digital';
export type CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsInventoryTracking = 'none' | 'product' | 'variant';
export type CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsAvailability = 'available' | 'disabled' | 'preorder';
export type CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsGiftWrappingOptionsType = 'any' | 'none' | 'list';
export type CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsCondition = 'New' | 'Used' | 'Refurbished';
export type CustomUrlFull = {
    url?: string;
    is_customized?: boolean;
    create_redirect?: boolean;
};
export type CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsOpenGraphType = 'product' | 'album' | 'book' | 'drink' | 'food' | 'game' | 'movie' | 'song' | 'tv_show';
export type ProductCustomFieldPut = {
    id?: number;
    name: string;
    value: string;
};
export type CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsBulkPricingRulesItemsType = 'price' | 'percent' | 'fixed';
export type CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsBulkPricingRulesItemsAmount = number | string;
export type CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsBulkPricingRulesItems = {
    id: number;
    quantity_min: number;
    quantity_max: number;
    type: CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsBulkPricingRulesItemsType;
    amount: CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsBulkPricingRulesItemsAmount;
};
export type ProductImageFull = {
    is_thumbnail?: boolean;
    sort_order?: number;
    description?: string;
    date_modified?: string;
    id?: number;
    product_id?: number;
    image_url?: string;
    url_zoom?: string;
    url_standard?: string;
    url_thumbnail?: string;
    url_tiny?: string;
};
export type PrimaryImageFull = {
    id?: number;
    product_id?: number;
    is_thumbnail?: boolean;
    sort_order?: number;
    description?: string;
    image_file?: string;
    url_zoom?: string;
    url_standard?: string;
    url_thumbnail?: string;
    url_tiny?: string;
    date_modified?: string;
};
export type ProductVideoBaseType = 'youtube';
export type ProductVideoFull = {
    title?: string;
    description?: string;
    sort_order?: number;
    type?: ProductVideoBaseType;
    video_id?: string;
    id?: number;
    product_id?: number;
    length?: string;
};
export type ProductOptionBaseType = 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
export type ProductOptionConfigFullDateLimitMode = 'earliest' | 'range' | 'latest';
export type ProductOptionConfigFullFileTypesMode = 'specific' | 'all';
export type ProductOptionConfigFullNumberLimitMode = 'lowest' | 'highest' | 'range';
export type ProductOptionConfigFullProductListShippingCalc = 'none' | 'weight' | 'package';
export type ProductOptionConfigFull = {
    default_value?: string;
    checked_by_default?: boolean;
    checkbox_label?: string;
    date_limited?: boolean;
    date_limit_mode?: ProductOptionConfigFullDateLimitMode;
    date_earliest_value?: string;
    date_latest_value?: string;
    file_types_mode?: ProductOptionConfigFullFileTypesMode;
    file_types_supported?: Array<string>;
    file_types_other?: Array<string>;
    file_max_size?: number;
    text_characters_limited?: boolean;
    text_min_length?: number;
    text_max_length?: number;
    text_lines_limited?: boolean;
    text_max_lines?: number;
    number_limited?: boolean;
    number_limit_mode?: ProductOptionConfigFullNumberLimitMode;
    number_lowest_value?: number;
    number_highest_value?: number;
    number_integers_only?: boolean;
    product_list_adjusts_inventory?: boolean;
    product_list_adjusts_pricing?: boolean;
    product_list_shipping_calc?: ProductOptionConfigFullProductListShippingCalc;
};
export type ProductOptionOptionValueBaseValueData = {
    [key: string]: unknown;
};
export type ProductOptionOptionValueFull = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: ProductOptionOptionValueBaseValueData | null;
    id?: number;
};
export type ProductOptionBase = {
    id?: number | null;
    product_id?: number;
    display_name?: string;
    type?: ProductOptionBaseType;
    config?: ProductOptionConfigFull;
    sort_order?: number;
    option_values?: Array<ProductOptionOptionValueFull>;
};
export type ProductModifierBaseType = 'date' | 'checkbox' | 'file' | 'text' | 'multi_line_text' | 'numbers_only_text' | 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
export type ConfigFullDateLimitMode = 'earliest' | 'range' | 'latest';
export type ConfigFullFileTypesMode = 'specific' | 'all';
export type ConfigFullNumberLimitMode = 'lowest' | 'highest' | 'range';
export type ConfigFullProductListShippingCalc = 'none' | 'weight' | 'package';
export type ConfigFull = {
    default_value?: string;
    checked_by_default?: boolean;
    checkbox_label?: string;
    date_limited?: boolean;
    date_limit_mode?: ConfigFullDateLimitMode;
    date_earliest_value?: string;
    date_latest_value?: string;
    file_types_mode?: ConfigFullFileTypesMode;
    file_types_supported?: Array<string>;
    file_types_other?: Array<string>;
    file_max_size?: number;
    text_characters_limited?: boolean;
    text_min_length?: number;
    text_max_length?: number;
    text_lines_limited?: boolean;
    text_max_lines?: number;
    number_limited?: boolean;
    number_limit_mode?: ConfigFullNumberLimitMode;
    number_lowest_value?: number;
    number_highest_value?: number;
    number_integers_only?: boolean;
    product_list_adjusts_inventory?: boolean;
    product_list_adjusts_pricing?: boolean;
    product_list_shipping_calc?: ConfigFullProductListShippingCalc;
};
export type ProductModifierOptionValueBaseValueData = {
    [key: string]: unknown;
};
export type AdjusterFullAdjuster = 'relative' | 'percentage';
export type AdjusterFull = {
    adjuster?: AdjusterFullAdjuster | null;
    adjuster_value?: number;
};
export type AdjustersFullPurchasingDisabled = {
    status?: boolean;
    message?: string;
};
export type AdjustersFull = {
    price?: AdjusterFull;
    weight?: AdjusterFull;
    image_url?: string;
    purchasing_disabled?: AdjustersFullPurchasingDisabled;
};
export type ProductModifierOptionValueFull = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: ProductModifierOptionValueBaseValueData | null;
    adjusters?: AdjustersFull;
    id?: number;
    option_id?: number;
};
export type ProductModifierFull = {
    type: ProductModifierBaseType;
    required: boolean;
    sort_order?: number;
    config?: ConfigFull;
    display_name?: string;
    id?: number;
    product_id?: number;
    name?: string;
    option_values?: Array<ProductModifierOptionValueFull>;
};
export type CatalogProductsGetResponsesContentApplicationJsonSchemaDataItems = {
    id?: number;
    name?: string;
    type?: CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsType;
    sku?: string;
    description?: string;
    weight?: string;
    width?: string;
    depth?: string;
    height?: string;
    price?: string;
    cost_price?: string;
    retail_price?: string;
    sale_price?: string;
    map_price?: number;
    tax_class_id?: number;
    product_tax_code?: string;
    categories?: Array<number>;
    brand_id?: number;
    inventory_level?: number;
    inventory_warning_level?: number;
    inventory_tracking?: CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsInventoryTracking;
    fixed_cost_shipping_price?: string;
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
    availability?: CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsAvailability;
    gift_wrapping_options_type?: CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsGiftWrappingOptionsType;
    gift_wrapping_options_list?: Array<number>;
    sort_order?: number;
    condition?: CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsCondition;
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
    open_graph_type?: CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsOpenGraphType;
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
    bulk_pricing_rules?: Array<CatalogProductsGetResponsesContentApplicationJsonSchemaDataItemsBulkPricingRulesItems>;
    images?: Array<ProductImageFull>;
    primary_image?: PrimaryImageFull;
    videos?: Array<ProductVideoFull>;
    date_created?: string;
    date_modified?: string;
    base_variant_id?: number;
    calculated_price?: string;
    options?: Array<ProductOptionBase>;
    modifiers?: Array<ProductModifierFull>;
    option_set_id?: number;
    option_set_display?: string;
    channels?: Array<number>;
};
export type PaginationFullLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type PaginationFull = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: PaginationFullLinks;
};
export type MetaCollectionFull = {
    pagination?: PaginationFull;
};
export type ProductsGetProductsResponse200 = {
    data?: Array<CatalogProductsGetResponsesContentApplicationJsonSchemaDataItems>;
    meta?: MetaCollectionFull;
};
export type CatalogProductsPutParametersIncludeFieldsSchemaItems = 'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image';
export type ProductPutCollectionItemsType = 'physical' | 'digital';
export type ProductPutCollectionItemsInventoryTracking = 'none' | 'product' | 'variant';
export type ProductPutCollectionItemsAvailability = 'available' | 'disabled' | 'preorder';
export type ProductPutCollectionItemsGiftWrappingOptionsType = 'any' | 'none' | 'list';
export type ProductPutCollectionItemsCondition = 'New' | 'Used' | 'Refurbished';
export type ProductPutCollectionItemsOpenGraphType = 'product' | 'album' | 'book' | 'drink' | 'food' | 'game' | 'movie' | 'song' | 'tv_show';
export type ProductPutCollectionItemsBulkPricingRulesItemsType = 'price' | 'percent' | 'fixed';
export type ProductPutCollectionItemsBulkPricingRulesItemsAmount = number | string;
export type ProductPutCollectionItemsBulkPricingRulesItems = {
    id?: number;
    quantity_min: number;
    quantity_max: number;
    type: ProductPutCollectionItemsBulkPricingRulesItemsType;
    amount: ProductPutCollectionItemsBulkPricingRulesItemsAmount;
};
export type ProductPutCollectionItems = {
    id: number;
    name?: string;
    type?: ProductPutCollectionItemsType;
    sku?: string;
    description?: string;
    weight?: string;
    width?: string;
    depth?: string;
    height?: string;
    price?: string;
    cost_price?: string;
    retail_price?: string;
    sale_price?: string;
    map_price?: number;
    tax_class_id?: number;
    product_tax_code?: string;
    categories?: Array<number>;
    brand_id?: number;
    brand_name?: string;
    inventory_level?: number;
    inventory_warning_level?: number;
    inventory_tracking?: ProductPutCollectionItemsInventoryTracking;
    fixed_cost_shipping_price?: string;
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
    availability?: ProductPutCollectionItemsAvailability;
    gift_wrapping_options_type?: ProductPutCollectionItemsGiftWrappingOptionsType;
    gift_wrapping_options_list?: Array<number>;
    sort_order?: number;
    condition?: ProductPutCollectionItemsCondition;
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
    open_graph_type?: ProductPutCollectionItemsOpenGraphType;
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
    bulk_pricing_rules?: Array<ProductPutCollectionItemsBulkPricingRulesItems>;
    images?: Array<ProductImageFull>;
    videos?: Array<ProductVideoFull>;
};
export type ProductPutCollection = Array<ProductPutCollectionItems>;
export type ProductBaseResponseType = 'physical' | 'digital';
export type ProductBaseResponseInventoryTracking = 'none' | 'product' | 'variant';
export type ProductBaseResponseAvailability = 'available' | 'disabled' | 'preorder';
export type ProductBaseResponseGiftWrappingOptionsType = 'any' | 'none' | 'list';
export type ProductBaseResponseCondition = 'New' | 'Used' | 'Refurbished';
export type ProductBaseResponseOpenGraphType = 'product' | 'album' | 'book' | 'drink' | 'food' | 'game' | 'movie' | 'song' | 'tv_show';
export type ProductBaseResponseBulkPricingRulesItemsType = 'price' | 'percent' | 'fixed';
export type ProductBaseResponseBulkPricingRulesItemsAmount = number | string;
export type ProductBaseResponseBulkPricingRulesItems = {
    id: number;
    quantity_min: number;
    quantity_max: number;
    type: ProductBaseResponseBulkPricingRulesItemsType;
    amount: ProductBaseResponseBulkPricingRulesItemsAmount;
};
export type ProductFull = {
    name?: string;
    type?: ProductBaseResponseType;
    sku?: string;
    description?: string;
    weight?: string;
    width?: string;
    depth?: string;
    height?: string;
    price?: string;
    cost_price?: string;
    retail_price?: string;
    sale_price?: string;
    map_price?: number;
    tax_class_id?: number;
    product_tax_code?: string;
    categories?: Array<number>;
    brand_id?: number;
    inventory_level?: number;
    inventory_warning_level?: number;
    inventory_tracking?: ProductBaseResponseInventoryTracking;
    fixed_cost_shipping_price?: string;
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
    availability?: ProductBaseResponseAvailability;
    gift_wrapping_options_type?: ProductBaseResponseGiftWrappingOptionsType;
    gift_wrapping_options_list?: Array<number>;
    sort_order?: number;
    condition?: ProductBaseResponseCondition;
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
    open_graph_type?: ProductBaseResponseOpenGraphType;
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
    bulk_pricing_rules?: Array<ProductBaseResponseBulkPricingRulesItems>;
    images?: Array<ProductImageFull>;
    primary_image?: PrimaryImageFull;
    videos?: Array<ProductVideoFull>;
    id?: number;
    date_created?: string;
    date_modified?: string;
    base_variant_id?: number;
    calculated_price?: string;
    options?: Array<ProductOptionBase>;
    modifiers?: Array<ProductModifierFull>;
    option_set_id?: number;
    option_set_display?: string;
};
export type ProductsUpdateProductsResponse200 = {
    data?: Array<ProductFull>;
    meta?: unknown;
};
export type UpdateProductsRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type ErrorResponse409 = {
    code?: number;
    status?: number;
    title?: string;
    type?: string;
    errors?: DetailedErrors;
};
export type ErrorBase = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type ErrorResponse422 = {
    code?: number;
    status?: number;
    title?: string;
    type?: string;
    errors?: DetailedErrors;
};
export type CatalogProductsPostParametersIncludeFieldsSchemaItems = 'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image';
export type ProductBasePostType = 'physical' | 'digital';
export type ProductBasePostInventoryTracking = 'none' | 'product' | 'variant';
export type ProductBasePostAvailability = 'available' | 'disabled' | 'preorder';
export type ProductBasePostGiftWrappingOptionsType = 'any' | 'none' | 'list';
export type ProductBasePostCondition = 'New' | 'Used' | 'Refurbished';
export type ProductBasePostOpenGraphType = 'product' | 'album' | 'book' | 'drink' | 'food' | 'game' | 'movie' | 'song' | 'tv_show';
export type ProductBasePostBulkPricingRulesItemsType = 'price' | 'percent' | 'fixed';
export type ProductBasePostBulkPricingRulesItemsAmount = number | string;
export type ProductBasePostBulkPricingRulesItems = {
    id?: number;
    quantity_min: number;
    quantity_max: number;
    type: ProductBasePostBulkPricingRulesItemsType;
    amount: ProductBasePostBulkPricingRulesItemsAmount;
};
export type ProductVariantOptionValueFull = {
    id?: number;
    label: string;
    option_id?: number;
    option_display_name: string;
};
export type ProductVariantFull = {
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
    product_id: number;
    id: number;
    sku: string;
    sku_id?: number;
    option_values?: Array<ProductVariantOptionValueFull>;
    calculated_price?: number;
    calculated_weight?: number;
};
export type ProductBasePost = {
    name: string;
    type: ProductBasePostType;
    sku?: string;
    description?: string;
    weight: string;
    width?: string;
    depth?: string;
    height?: string;
    price: string;
    cost_price?: string;
    retail_price?: string;
    sale_price?: string;
    map_price?: number;
    tax_class_id?: number;
    product_tax_code?: string;
    categories?: Array<number>;
    brand_id?: number;
    brand_name?: string;
    inventory_level?: number;
    inventory_warning_level?: number;
    inventory_tracking?: ProductBasePostInventoryTracking;
    fixed_cost_shipping_price?: string;
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
    availability?: ProductBasePostAvailability;
    gift_wrapping_options_type?: ProductBasePostGiftWrappingOptionsType;
    gift_wrapping_options_list?: Array<number>;
    sort_order?: number;
    condition?: ProductBasePostCondition;
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
    open_graph_type?: ProductBasePostOpenGraphType;
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
    bulk_pricing_rules?: Array<ProductBasePostBulkPricingRulesItems>;
    images?: Array<ProductImageFull>;
    videos?: Array<ProductVideoFull>;
    variants?: Array<ProductVariantFull>;
};
export type MetaEmptyFull = {
    [key: string]: unknown;
};
export type ProductsCreateProductResponse200 = {
    data?: ProductFull;
    meta?: MetaEmptyFull;
};
export type CatalogProductsPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateProductRequestConflictError = {
    errors?: CatalogProductsPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CreateProductRequestUnprocessableEntityError = {
    errors?: CatalogProductsPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CatalogProductsDeleteParametersCondition = 'new' | 'used' | 'refurbished';
export type CatalogProductsDeleteParametersIsFeatured = '1' | '0';
export type CatalogProductsDeleteParametersType = 'digital' | 'physical';
export type CatalogProductsDeleteResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type DeleteProductsRequestUnprocessableEntityError = {
    errors?: CatalogProductsDeleteResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CatalogProductsProductIdGetParametersIncludeFieldsSchemaItems = 'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image';
export type CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataType = 'physical' | 'digital';
export type CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataInventoryTracking = 'none' | 'product' | 'variant';
export type CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataAvailability = 'available' | 'disabled' | 'preorder';
export type CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataGiftWrappingOptionsType = 'any' | 'none' | 'list';
export type CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataCondition = 'New' | 'Used' | 'Refurbished';
export type CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataOpenGraphType = 'product' | 'album' | 'book' | 'drink' | 'food' | 'game' | 'movie' | 'song' | 'tv_show';
export type CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataBulkPricingRulesItemsType = 'price' | 'percent' | 'fixed';
export type CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataBulkPricingRulesItemsAmount = number | string;
export type CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataBulkPricingRulesItems = {
    id: number;
    quantity_min: number;
    quantity_max: number;
    type: CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataBulkPricingRulesItemsType;
    amount: CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataBulkPricingRulesItemsAmount;
};
export type CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaData = {
    id?: number;
    name?: string;
    type?: CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataType;
    sku?: string;
    description?: string;
    weight?: string;
    width?: string;
    depth?: string;
    height?: string;
    price?: string;
    cost_price?: string;
    retail_price?: string;
    sale_price?: string;
    map_price?: number;
    tax_class_id?: number;
    product_tax_code?: string;
    categories?: Array<number>;
    brand_id?: number;
    inventory_level?: number;
    inventory_warning_level?: number;
    inventory_tracking?: CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataInventoryTracking;
    fixed_cost_shipping_price?: string;
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
    availability?: CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataAvailability;
    gift_wrapping_options_type?: CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataGiftWrappingOptionsType;
    gift_wrapping_options_list?: Array<number>;
    sort_order?: number;
    condition?: CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataCondition;
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
    open_graph_type?: CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataOpenGraphType;
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
    bulk_pricing_rules?: Array<CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaDataBulkPricingRulesItems>;
    images?: Array<ProductImageFull>;
    primary_image?: PrimaryImageFull;
    videos?: Array<ProductVideoFull>;
    date_created?: string;
    date_modified?: string;
    base_variant_id?: number;
    calculated_price?: string;
    options?: Array<ProductOptionBase>;
    modifiers?: Array<ProductModifierFull>;
    option_set_id?: number;
    option_set_display?: string;
    channels?: Array<number>;
};
export type ProductsGetProductResponse200 = {
    data?: CatalogProductsProductIdGetResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type GetProductRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdPutParametersIncludeFieldsSchemaItems = 'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image';
export type ProductBasePutType = 'physical' | 'digital';
export type ProductBasePutInventoryTracking = 'none' | 'product' | 'variant';
export type ProductBasePutAvailability = 'available' | 'disabled' | 'preorder';
export type ProductBasePutGiftWrappingOptionsType = 'any' | 'none' | 'list';
export type ProductBasePutCondition = 'New' | 'Used' | 'Refurbished';
export type ProductBasePutOpenGraphType = 'product' | 'album' | 'book' | 'drink' | 'food' | 'game' | 'movie' | 'song' | 'tv_show';
export type ProductBasePutBulkPricingRulesItemsType = 'price' | 'percent' | 'fixed';
export type ProductBasePutBulkPricingRulesItemsAmount = number | string;
export type ProductBasePutBulkPricingRulesItems = {
    id?: number;
    quantity_min: number;
    quantity_max: number;
    type: ProductBasePutBulkPricingRulesItemsType;
    amount: ProductBasePutBulkPricingRulesItemsAmount;
};
export type ProductPut = {
    name?: string;
    type?: ProductBasePutType;
    sku?: string;
    description?: string;
    weight?: string;
    width?: string;
    depth?: string;
    height?: string;
    price?: string;
    cost_price?: string;
    retail_price?: string;
    sale_price?: string;
    map_price?: number;
    tax_class_id?: number;
    product_tax_code?: string;
    categories?: Array<number>;
    brand_id?: number;
    brand_name?: string;
    inventory_level?: number;
    inventory_warning_level?: number;
    inventory_tracking?: ProductBasePutInventoryTracking;
    fixed_cost_shipping_price?: string;
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
    availability?: ProductBasePutAvailability;
    gift_wrapping_options_type?: ProductBasePutGiftWrappingOptionsType;
    gift_wrapping_options_list?: Array<number>;
    sort_order?: number;
    condition?: ProductBasePutCondition;
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
    open_graph_type?: ProductBasePutOpenGraphType;
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
    bulk_pricing_rules?: Array<ProductBasePutBulkPricingRulesItems>;
    images?: Array<ProductImageFull>;
    videos?: Array<ProductVideoFull>;
};
export type ProductsUpdateProductResponse200 = {
    data?: ProductFull;
    meta?: MetaEmptyFull;
};
export type UpdateProductRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdPutResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type UpdateProductRequestConflictError = {
    errors?: CatalogProductsProductIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type UpdateProductRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CatalogProductsMetafieldsGetParametersDirection = 'asc' | 'desc';
export type CatalogProductsMetafieldsGetParametersIncludeFieldsSchemaItems = 'resource_id' | 'resource_id:in' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified';
export type MetafieldPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldResourceType = 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
export type Metafield = {
    permission_set: MetafieldPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description: string;
    resource_type: MetafieldResourceType;
    resource_id: number;
    id: number;
    date_created: string;
    date_modified: string;
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
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type CatalogProductsMetafieldsPostRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type CatalogProductsMetafieldsPostRequestBodyContentApplicationJsonSchemaItems = {
    permission_set: CatalogProductsMetafieldsPostRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description?: string;
    resource_id: number;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionResponsePostPut = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type CreateProductsMetafieldsRequestBadRequestError = {
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
export type WriteCollectionPartialSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionResponsePartialSuccessPostPut = {
    data?: Array<Metafield>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type CatalogProductsMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type CatalogProductsMetafieldsPutRequestBodyContentApplicationJsonSchemaItems = {
    permission_set?: CatalogProductsMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    id: number;
};
export type UpdateProductsMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type DeleteProductsMetafieldsRequestBadRequestError = {
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
export type CatalogProductsProductIdBulkPricingRulesGetParametersIncludeFieldsSchemaItems = 'quantity_min' | 'quantity_max' | 'type' | 'amount';
export type CatalogProductsProductIdBulkPricingRulesGetResponsesContentApplicationJsonSchemaDataType = 'price' | 'percent' | 'fixed';
export type CatalogProductsProductIdBulkPricingRulesGetResponsesContentApplicationJsonSchemaDataAmount = number | string;
export type CatalogProductsProductIdBulkPricingRulesGetResponsesContentApplicationJsonSchemaData = {
    id?: number;
    quantity_min?: number;
    quantity_max?: number;
    type?: CatalogProductsProductIdBulkPricingRulesGetResponsesContentApplicationJsonSchemaDataType;
    amount?: CatalogProductsProductIdBulkPricingRulesGetResponsesContentApplicationJsonSchemaDataAmount;
};
export type BulkPricingRulesGetAllBulkPricingRulesResponse200 = {
    data?: CatalogProductsProductIdBulkPricingRulesGetResponsesContentApplicationJsonSchemaData;
    meta?: MetaCollectionFull;
};
export type BulkPricingRuleFullType = 'price' | 'percent' | 'fixed';
export type BulkPricingRuleFullAmount = number | string;
export type BulkPricingRuleFull = {
    quantity_min: number;
    quantity_max: number;
    type: BulkPricingRuleFullType;
    amount: BulkPricingRuleFullAmount;
};
export type CatalogProductsProductIdBulkPricingRulesPostResponsesContentApplicationJsonSchemaDataType = 'price' | 'percent' | 'fixed';
export type CatalogProductsProductIdBulkPricingRulesPostResponsesContentApplicationJsonSchemaDataAmount = number | string;
export type CatalogProductsProductIdBulkPricingRulesPostResponsesContentApplicationJsonSchemaData = {
    id?: number;
    quantity_min?: number;
    quantity_max?: number;
    type?: CatalogProductsProductIdBulkPricingRulesPostResponsesContentApplicationJsonSchemaDataType;
    amount?: CatalogProductsProductIdBulkPricingRulesPostResponsesContentApplicationJsonSchemaDataAmount;
};
export type BulkPricingRulesCreateBulkPricingRuleResponse200 = {
    data?: CatalogProductsProductIdBulkPricingRulesPostResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdGetParametersIncludeFieldsSchemaItems = 'quantity_min' | 'quantity_max' | 'type' | 'amount';
export type CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdGetResponsesContentApplicationJsonSchemaDataType = 'price' | 'percent' | 'fixed';
export type CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdGetResponsesContentApplicationJsonSchemaDataAmount = number | string;
export type CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdGetResponsesContentApplicationJsonSchemaData = {
    id: number;
    quantity_min?: number;
    quantity_max?: number;
    type?: CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdGetResponsesContentApplicationJsonSchemaDataType;
    amount?: CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdGetResponsesContentApplicationJsonSchemaDataAmount;
};
export type BulkPricingRulesGetBulkPricingRuleResponse200 = {
    data?: CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdGetResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type GetBulkPricingRuleRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdPutRequestBodyContentApplicationJsonSchemaType = 'price' | 'percent' | 'fixed';
export type CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdPutRequestBodyContentApplicationJsonSchemaAmount = number | string;
export type CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdPutResponsesContentApplicationJsonSchemaDataType = 'price' | 'percent' | 'fixed';
export type CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdPutResponsesContentApplicationJsonSchemaDataAmount = number | string;
export type CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdPutResponsesContentApplicationJsonSchemaData = {
    id?: number;
    quantity_min?: number;
    quantity_max?: number;
    type?: CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdPutResponsesContentApplicationJsonSchemaDataType;
    amount?: CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdPutResponsesContentApplicationJsonSchemaDataAmount;
};
export type BulkPricingRulesUpdateBulkPricingRuleResponse200 = {
    data?: CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdPutResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type UpdateBulkPricingRuleRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdPutResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type UpdateBulkPricingRuleRequestConflictError = {
    errors?: CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type UpdateBulkPricingRuleRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type DeleteBulkPricingRuleRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type ProductCategoryAssignment = {
    product_id?: number;
    category_id?: number;
};
export type MetaPaginationObjectPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type MetaPaginationObjectPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: MetaPaginationObjectPaginationLinks;
};
export type MetaPaginationObject = {
    pagination?: MetaPaginationObjectPagination;
};
export type CategoryAssignmentsGetProductsCategoryAssignmentsResponse200 = {
    data?: Array<ProductCategoryAssignment>;
    meta?: MetaPaginationObject;
};
export type Beta5DetailedErrors = {
    [key: string]: unknown;
};
export type Beta5ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: Beta5DetailedErrors;
};
export type ProductChannelAssignment = {
    product_id?: number;
    channel_id?: number;
};
export type ChannelAssignmentsGetProductsChannelAssignmentsResponse200 = {
    data?: Array<ProductChannelAssignment>;
    meta?: MetaPaginationObject;
};
export type CatalogProductsProductIdComplexRulesGetParametersIncludeFieldsSchemaItems = 'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image';
export type ComplexRuleConditionBase = {
    id?: number | null;
    rule_id?: number | null;
    modifier_id: number | null;
    modifier_value_id: number | null;
    variant_id: number | null;
    combination_id?: number;
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
export type ComplexRulesGetProductComplexRulesResponse200 = {
    data?: Array<ComplexRuleBase>;
    meta?: MetaCollectionFull;
};
export type CatalogProductsProductIdComplexRulesPostRequestBodyContentApplicationJsonSchemaPriceAdjusterAdjuster = 'relative' | 'percentage';
export type CatalogProductsProductIdComplexRulesPostRequestBodyContentApplicationJsonSchemaPriceAdjuster = {
    adjuster?: CatalogProductsProductIdComplexRulesPostRequestBodyContentApplicationJsonSchemaPriceAdjusterAdjuster | null;
    adjuster_value?: number;
};
export type CatalogProductsProductIdComplexRulesPostRequestBodyContentApplicationJsonSchemaWeightAdjusterAdjuster = 'relative' | 'percentage';
export type CatalogProductsProductIdComplexRulesPostRequestBodyContentApplicationJsonSchemaWeightAdjuster = {
    adjuster?: CatalogProductsProductIdComplexRulesPostRequestBodyContentApplicationJsonSchemaWeightAdjusterAdjuster | null;
    adjuster_value?: number;
};
export type ModifierCondition = {
    modifier_id?: number;
    modifier_value_id?: number;
};
export type VariantCondition = {
    variant_id?: number;
};
export type ConditionsRequestItems = ModifierCondition | VariantCondition;
export type ConditionsRequest = Array<ConditionsRequestItems>;
export type CatalogProductsProductIdComplexRulesPostResponsesContentApplicationJsonSchemaDataPriceAdjusterAdjuster = 'relative' | 'percentage';
export type CatalogProductsProductIdComplexRulesPostResponsesContentApplicationJsonSchemaDataPriceAdjuster = {
    adjuster?: CatalogProductsProductIdComplexRulesPostResponsesContentApplicationJsonSchemaDataPriceAdjusterAdjuster | null;
    adjuster_value?: number;
};
export type CatalogProductsProductIdComplexRulesPostResponsesContentApplicationJsonSchemaDataWeightAdjusterAdjuster = 'relative' | 'percentage';
export type CatalogProductsProductIdComplexRulesPostResponsesContentApplicationJsonSchemaDataWeightAdjuster = {
    adjuster?: CatalogProductsProductIdComplexRulesPostResponsesContentApplicationJsonSchemaDataWeightAdjusterAdjuster | null;
    adjuster_value?: number;
};
export type CatalogProductsProductIdComplexRulesPostResponsesContentApplicationJsonSchemaData = {
    id?: number;
    product_id?: number | null;
    sort_order?: number;
    enabled?: boolean;
    stop?: boolean;
    purchasing_disabled?: boolean;
    purchasing_disabled_message?: string;
    purchasing_hidden?: boolean;
    image_url?: string;
    price_adjuster?: CatalogProductsProductIdComplexRulesPostResponsesContentApplicationJsonSchemaDataPriceAdjuster;
    weight_adjuster?: CatalogProductsProductIdComplexRulesPostResponsesContentApplicationJsonSchemaDataWeightAdjuster;
    conditions?: Array<ComplexRuleConditionBase>;
};
export type ComplexRulesCreateProductComplexRuleResponse200 = {
    data?: CatalogProductsProductIdComplexRulesPostResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type CatalogProductsProductIdComplexRulesPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateProductComplexRuleRequestConflictError = {
    errors?: CatalogProductsProductIdComplexRulesPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CreateProductComplexRuleRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdComplexRulesPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CatalogProductsProductIdComplexRulesComplexRuleIdGetParametersIncludeFieldsSchemaItems = 'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image';
export type CatalogProductsProductIdComplexRulesComplexRuleIdGetResponsesContentApplicationJsonSchemaDataPriceAdjusterAdjuster = 'relative' | 'percentage';
export type CatalogProductsProductIdComplexRulesComplexRuleIdGetResponsesContentApplicationJsonSchemaDataPriceAdjuster = {
    adjuster?: CatalogProductsProductIdComplexRulesComplexRuleIdGetResponsesContentApplicationJsonSchemaDataPriceAdjusterAdjuster;
    adjuster_value?: number;
};
export type CatalogProductsProductIdComplexRulesComplexRuleIdGetResponsesContentApplicationJsonSchemaDataWeightAdjusterAdjuster = 'relative' | 'percentage';
export type CatalogProductsProductIdComplexRulesComplexRuleIdGetResponsesContentApplicationJsonSchemaDataWeightAdjuster = {
    adjuster?: CatalogProductsProductIdComplexRulesComplexRuleIdGetResponsesContentApplicationJsonSchemaDataWeightAdjusterAdjuster;
    adjuster_value?: number;
};
export type CatalogProductsProductIdComplexRulesComplexRuleIdGetResponsesContentApplicationJsonSchemaData = {
    id?: number;
    product_id?: number;
    sort_order?: number;
    enabled?: boolean;
    stop?: boolean;
    purchasing_disabled?: boolean;
    purchasing_disabled_message?: string;
    purchasing_hidden?: boolean;
    image_url?: string;
    price_adjuster?: CatalogProductsProductIdComplexRulesComplexRuleIdGetResponsesContentApplicationJsonSchemaDataPriceAdjuster;
    weight_adjuster?: CatalogProductsProductIdComplexRulesComplexRuleIdGetResponsesContentApplicationJsonSchemaDataWeightAdjuster;
    conditions?: Array<ComplexRuleConditionBase>;
};
export type ComplexRulesGetProductComplexRuleResponse200 = {
    data?: CatalogProductsProductIdComplexRulesComplexRuleIdGetResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type GetProductComplexRuleRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdComplexRulesComplexRuleIdPutRequestBodyContentApplicationJsonSchemaPriceAdjusterAdjuster = 'relative' | 'percentage';
export type CatalogProductsProductIdComplexRulesComplexRuleIdPutRequestBodyContentApplicationJsonSchemaPriceAdjuster = {
    adjuster?: CatalogProductsProductIdComplexRulesComplexRuleIdPutRequestBodyContentApplicationJsonSchemaPriceAdjusterAdjuster | null;
    adjuster_value?: number;
};
export type CatalogProductsProductIdComplexRulesComplexRuleIdPutRequestBodyContentApplicationJsonSchemaWeightAdjusterAdjuster = 'relative' | 'percentage';
export type CatalogProductsProductIdComplexRulesComplexRuleIdPutRequestBodyContentApplicationJsonSchemaWeightAdjuster = {
    adjuster?: CatalogProductsProductIdComplexRulesComplexRuleIdPutRequestBodyContentApplicationJsonSchemaWeightAdjusterAdjuster | null;
    adjuster_value?: number;
};
export type ComplexRuleConditionPut = {
    modifier_id: number | null;
    modifier_value_id: number | null;
    variant_id: number | null;
};
export type CatalogProductsProductIdComplexRulesComplexRuleIdPutResponsesContentApplicationJsonSchemaDataPriceAdjusterAdjuster = 'relative' | 'percentage';
export type CatalogProductsProductIdComplexRulesComplexRuleIdPutResponsesContentApplicationJsonSchemaDataPriceAdjuster = {
    adjuster?: CatalogProductsProductIdComplexRulesComplexRuleIdPutResponsesContentApplicationJsonSchemaDataPriceAdjusterAdjuster;
    adjuster_value?: number;
};
export type CatalogProductsProductIdComplexRulesComplexRuleIdPutResponsesContentApplicationJsonSchemaDataWeightAdjusterAdjuster = 'relative' | 'percentage';
export type CatalogProductsProductIdComplexRulesComplexRuleIdPutResponsesContentApplicationJsonSchemaDataWeightAdjuster = {
    adjuster?: CatalogProductsProductIdComplexRulesComplexRuleIdPutResponsesContentApplicationJsonSchemaDataWeightAdjusterAdjuster;
    adjuster_value?: number;
};
export type CatalogProductsProductIdComplexRulesComplexRuleIdPutResponsesContentApplicationJsonSchemaData = {
    id?: number;
    product_id?: number;
    sort_order?: number;
    enabled?: boolean;
    stop?: boolean;
    purchasing_disabled?: boolean;
    purchasing_disabled_message?: string;
    purchasing_hidden?: boolean;
    image_url?: string;
    price_adjuster?: CatalogProductsProductIdComplexRulesComplexRuleIdPutResponsesContentApplicationJsonSchemaDataPriceAdjuster;
    weight_adjuster?: CatalogProductsProductIdComplexRulesComplexRuleIdPutResponsesContentApplicationJsonSchemaDataWeightAdjuster;
    conditions?: Array<ComplexRuleConditionBase>;
};
export type ComplexRulesUpdateProductComplexRuleResponse200 = {
    data?: CatalogProductsProductIdComplexRulesComplexRuleIdPutResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type CatalogProductsProductIdComplexRulesComplexRuleIdPutResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type UpdateProductComplexRuleRequestConflictError = {
    errors?: CatalogProductsProductIdComplexRulesComplexRuleIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type UpdateProductComplexRuleRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdComplexRulesComplexRuleIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CatalogProductsProductIdCustomFieldsGetParametersIncludeFieldsSchemaItems = 'name' | 'value';
export type CatalogProductsProductIdCustomFieldsGetParametersExcludeFieldsSchemaItems = 'name' | 'value';
export type CustomFieldData = {
    id?: number;
    name?: string;
    value?: string;
};
export type MetaCollectionFullPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type MetaCollectionFullPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: MetaCollectionFullPaginationLinks;
};
export type MetaCollectionFull2 = {
    pagination?: MetaCollectionFullPagination;
};
export type CustomFieldsGetProductCustomFieldsResponse200 = {
    data?: Array<CustomFieldData>;
    meta?: MetaCollectionFull2;
};
export type GeneralErrorWithErrorsErrors = {
    [key: string]: unknown;
};
export type GeneralErrorWithErrors = {
    status: number;
    title: string;
    type: string;
    errors: GeneralErrorWithErrorsErrors;
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
export type CustomFieldPost = {
    name: string;
    value: string;
};
export type MetaEmptyFull2 = {
    [key: string]: unknown;
};
export type CustomFieldsCreateProductCustomFieldResponse200 = {
    data?: CustomFieldData;
    meta?: MetaEmptyFull2;
};
export type CatalogProductsProductIdCustomFieldsCustomFieldIdGetParametersIncludeFieldsSchemaItems = 'name' | 'value';
export type CatalogProductsProductIdCustomFieldsCustomFieldIdGetParametersExcludeFieldsSchemaItems = 'name' | 'value';
export type CustomFieldsGetProductCustomFieldResponse200 = {
    data?: CustomFieldData;
    meta?: MetaEmptyFull2;
};
export type CustomFieldPut = {
    name?: string;
    value?: string;
};
export type CustomFieldsUpdateProductCustomFieldResponse200 = {
    data?: CustomFieldData;
    meta?: MetaEmptyFull2;
};
export type CatalogProductsProductIdImagesGetParametersIncludeFieldsSchemaItems = 'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image';
export type ImagesGetProductImagesResponse200 = {
    data?: Array<ProductImageFull>;
    meta?: MetaCollectionFull;
};
export type GetProductImagesRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type ProductImagePostPut = {
    is_thumbnail?: boolean;
    sort_order?: number;
    description?: string;
    date_modified?: string;
    product_id?: number;
    image_url?: string;
};
export type CatalogProductsProductIdImagesPostResponsesContentApplicationJsonSchemaData0 = {
    id?: number;
    product_id?: number;
    url_zoom?: string;
    url_standard?: string;
    url_thumbnail?: string;
    url_tiny?: string;
    date_modified?: string;
    is_thumbnail?: boolean;
    sort_order?: number;
    description?: string;
    image_url?: string;
};
export type CatalogProductsProductIdImagesPostResponsesContentApplicationJsonSchemaData1 = {
    id?: number;
    product_id?: number;
    image_file?: string;
    url_zoom?: string;
    url_standard?: string;
    url_thumbnail?: string;
    url_tiny?: string;
    date_modified?: string;
    is_thumbnail?: boolean;
    sort_order?: number;
    description?: string;
};
export type CatalogProductsProductIdImagesPostResponsesContentApplicationJsonSchemaData = CatalogProductsProductIdImagesPostResponsesContentApplicationJsonSchemaData0 | CatalogProductsProductIdImagesPostResponsesContentApplicationJsonSchemaData1;
export type ImagesCreateProductImageResponse200 = {
    data?: CatalogProductsProductIdImagesPostResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type CreateProductImageRequestBadRequestError = {
    [key: string]: unknown;
};
export type CreateProductImageRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CreateProductImageRequestUnprocessableEntityError = {
    status: number;
    title: string;
    type: string;
};
export type CatalogProductsProductIdImagesImageIdGetParametersIncludeFieldsSchemaItems = 'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image';
export type ImagesGetProductImageResponse200 = {
    data?: ProductImageFull;
    meta?: MetaEmptyFull;
};
export type GetProductImageRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdImagesImageIdPutResponsesContentApplicationJsonSchemaData0 = {
    id?: number;
    product_id?: number;
    url_zoom?: string;
    url_standard?: string;
    url_thumbnail?: string;
    url_tiny?: string;
    date_modified?: string;
    is_thumbnail?: boolean;
    sort_order?: number;
    description?: string;
    image_url?: string;
};
export type CatalogProductsProductIdImagesImageIdPutResponsesContentApplicationJsonSchemaData1 = {
    id?: number;
    product_id?: number;
    image_file?: string;
    url_zoom?: string;
    url_standard?: string;
    url_thumbnail?: string;
    url_tiny?: string;
    date_modified?: string;
    is_thumbnail?: boolean;
    sort_order?: number;
    description?: string;
};
export type CatalogProductsProductIdImagesImageIdPutResponsesContentApplicationJsonSchemaData = CatalogProductsProductIdImagesImageIdPutResponsesContentApplicationJsonSchemaData0 | CatalogProductsProductIdImagesImageIdPutResponsesContentApplicationJsonSchemaData1;
export type ImagesUpdateProductImageResponse200 = {
    data?: CatalogProductsProductIdImagesImageIdPutResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type UpdateProductImageRequestBadRequestError = {
    [key: string]: unknown;
};
export type UpdateProductImageRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdMetafieldsGetParametersIncludeFieldsSchemaItems = 'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image';
export type MetafieldBasePermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldFullResourceType = 'category' | 'brand' | 'product' | 'variant';
export type MetafieldFull = {
    key: string;
    value: string;
    namespace: string;
    permission_set: MetafieldBasePermissionSet;
    description?: string;
    id?: number;
    resource_type?: MetafieldFullResourceType;
    resource_id?: number;
    date_created?: string;
    date_modified?: string;
    owner_client_id?: string;
};
export type MetafieldsGetProductMetafieldsResponse200 = {
    data?: Array<MetafieldFull>;
    meta?: MetaCollectionFull;
};
export type MetafieldBase = {
    key: string;
    value: string;
    namespace: string;
    permission_set: MetafieldBasePermissionSet;
    description?: string;
};
export type MetafieldsCreateProductMetafieldResponse200 = {
    data?: MetafieldFull;
    meta?: MetaEmptyFull;
};
export type CreateProductMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type CatalogProductsProductIdMetafieldsPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateProductMetafieldRequestConflictError = {
    errors?: CatalogProductsProductIdMetafieldsPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CreateProductMetafieldRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdMetafieldsPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CatalogProductsProductIdMetafieldsMetafieldIdGetParametersIncludeFieldsSchemaItems = 'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image';
export type MetafieldsGetProductMetafieldResponse200 = {
    data?: MetafieldFull;
    meta?: MetaEmptyFull;
};
export type GetProductMetafieldRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type MetafieldsUpdateProductMetafieldResponse200 = {
    data?: MetafieldFull;
    meta?: MetaEmptyFull;
};
export type UpdateProductMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type UpdateProductMetafieldRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DeleteProductMetafieldRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdReviewsGetParametersIncludeFieldsSchemaItems = 'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image';
export type CatalogProductsProductIdReviewsGetParametersStatus = '0' | '1';
export type CatalogProductsProductIdReviewsGetResponsesContentApplicationJsonSchemaDataItems = {
    title: string;
    text?: string;
    status?: string;
    rating?: number;
    email?: string;
    name?: string;
    date_reviewed: string;
    id?: number;
    date_created?: string;
    date_modified?: string;
};
export type ReviewsGetProductReviewsResponse200 = {
    data?: Array<CatalogProductsProductIdReviewsGetResponsesContentApplicationJsonSchemaDataItems>;
    meta?: MetaCollectionFull;
};
export type GetProductReviewsRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdReviewsPostResponsesContentApplicationJsonSchemaData = {
    title: string;
    text?: string;
    status?: string;
    rating?: number;
    email?: string;
    name?: string;
    date_reviewed: string;
    id?: number;
    date_created?: string;
    date_modified?: string;
};
export type ReviewsCreateProductReviewResponse200 = {
    data?: CatalogProductsProductIdReviewsPostResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type CreateProductReviewRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdReviewsReviewIdGetParametersIncludeFieldsSchemaItems = 'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image';
export type CatalogProductsProductIdReviewsReviewIdGetResponsesContentApplicationJsonSchemaData = {
    title: string;
    text?: string;
    status?: string;
    rating?: number;
    email?: string;
    name?: string;
    date_reviewed: string;
    id?: number;
    date_created?: string;
    date_modified?: string;
};
export type ReviewsGetProductReviewResponse200 = {
    data?: CatalogProductsProductIdReviewsReviewIdGetResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type GetProductReviewRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdReviewsReviewIdPutResponsesContentApplicationJsonSchemaData = {
    title: string;
    text?: string;
    status?: string;
    rating?: number;
    email?: string;
    name?: string;
    date_reviewed: string;
    id?: number;
    date_created?: string;
    date_modified?: string;
};
export type ReviewsUpdateProductReviewResponse200 = {
    data?: CatalogProductsProductIdReviewsReviewIdPutResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type UpdateProductReviewRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogSummaryGetResponsesContentApplicationJsonSchemaData = {
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
export type SummaryGetCatalogSummaryResponse200 = {
    data?: CatalogSummaryGetResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type CatalogProductsProductIdVideosGetParametersIncludeFieldsSchemaItems = 'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image';
export type VideosGetProductVideosResponse200 = {
    data?: Array<ProductVideoFull>;
    meta?: MetaCollectionFull;
};
export type CatalogProductsProductIdVideosPostRequestBodyContentApplicationJsonSchemaType = 'youtube';
export type CatalogProductsProductIdVideosPostResponsesContentApplicationJsonSchemaDataType = 'youtube';
export type CatalogProductsProductIdVideosPostResponsesContentApplicationJsonSchemaData = {
    title?: string;
    description?: string;
    sort_order?: number;
    type?: CatalogProductsProductIdVideosPostResponsesContentApplicationJsonSchemaDataType;
    id?: number;
    video_id?: string;
    product_id?: number;
    length?: string;
};
export type VideosCreateProductVideoResponse200 = {
    data?: CatalogProductsProductIdVideosPostResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type CreateProductVideoRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdVideosIdGetParametersIncludeFieldsSchemaItems = 'name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image';
export type VideosGetProductVideoResponse200 = {
    data?: ProductVideoFull;
    meta?: MetaEmptyFull;
};
export type GetProductVideoRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdVideosIdPutRequestBodyContentApplicationJsonSchemaType = 'youtube';
export type CatalogProductsProductIdVideosIdPutResponsesContentApplicationJsonSchemaDataType = 'youtube';
export type CatalogProductsProductIdVideosIdPutResponsesContentApplicationJsonSchemaData = {
    title?: string;
    description?: string;
    sort_order?: number;
    type?: CatalogProductsProductIdVideosIdPutResponsesContentApplicationJsonSchemaDataType;
    id?: number;
    video_id?: string;
    product_id?: number;
    length?: string;
};
export type VideosUpdateProductVideoResponse200 = {
    data?: CatalogProductsProductIdVideosIdPutResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type UpdateProductVideoRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
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
        condition?: CatalogProductsDeleteParametersCondition;
        brand_id?: number;
        date_modified?: string;
        date_last_imported?: string;
        is_visible?: boolean;
        is_featured?: CatalogProductsDeleteParametersIsFeatured;
        'id:in'?: Array<number>;
        inventory_level?: number;
        total_sold?: number;
        type?: CatalogProductsDeleteParametersType;
        categories?: number;
        keyword?: string;
    };
    url: '/catalog/products';
};
export type DeleteProductsErrors = {
    422: DeleteProductsRequestUnprocessableEntityError;
};
export type DeleteProductsError = DeleteProductsErrors[keyof DeleteProductsErrors];
export type DeleteProductsResponses = {
    204: {
        [key: string]: unknown;
    };
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
        include_fields?: Array<CatalogProductsGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<string>;
        page?: number;
        limit?: number;
        direction?: CatalogProductsGetParametersDirection;
        sort?: CatalogProductsGetParametersSort;
        categories?: number;
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
        condition?: CatalogProductsGetParametersCondition;
        brand_id?: number;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        date_last_imported?: string;
        'date_last_imported:not'?: string;
        'date_last_imported:max'?: string;
        'date_last_imported:min'?: string;
        is_visible?: boolean;
        is_featured?: CatalogProductsGetParametersIsFeatured;
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
        type?: CatalogProductsGetParametersType;
        keyword?: string;
        keyword_context?: CatalogProductsGetParametersKeywordContext;
        availability?: CatalogProductsGetParametersAvailability;
        sku?: string;
        'sku:in'?: Array<string>;
    };
    url: '/catalog/products';
};
export type GetProductsResponses = {
    200: ProductsGetProductsResponse200;
};
export type GetProductsResponse = GetProductsResponses[keyof GetProductsResponses];
export type CreateProductData = {
    body?: ProductBasePost;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        include_fields?: Array<CatalogProductsPostParametersIncludeFieldsSchemaItems>;
    };
    url: '/catalog/products';
};
export type CreateProductErrors = {
    409: CreateProductRequestConflictError;
    422: CreateProductRequestUnprocessableEntityError;
};
export type CreateProductError = CreateProductErrors[keyof CreateProductErrors];
export type CreateProductResponses = {
    200: ProductsCreateProductResponse200;
};
export type CreateProductResponse = CreateProductResponses[keyof CreateProductResponses];
export type UpdateProductsData = {
    body?: ProductPutCollection;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        include_fields?: Array<CatalogProductsPutParametersIncludeFieldsSchemaItems>;
    };
    url: '/catalog/products';
};
export type UpdateProductsErrors = {
    404: UpdateProductsRequestNotFoundError;
    409: ErrorResponse409;
    413: ErrorBase;
    422: ErrorResponse422;
};
export type UpdateProductsError = UpdateProductsErrors[keyof UpdateProductsErrors];
export type UpdateProductsResponses = {
    200: ProductsUpdateProductsResponse200;
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
    204: {
        [key: string]: unknown;
    };
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
        include_fields?: Array<CatalogProductsProductIdGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}';
};
export type GetProductErrors = {
    404: GetProductRequestNotFoundError;
};
export type GetProductError = GetProductErrors[keyof GetProductErrors];
export type GetProductResponses = {
    200: ProductsGetProductResponse200;
};
export type GetProductResponse = GetProductResponses[keyof GetProductResponses];
export type UpdateProductData = {
    body?: ProductPut;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include?: IncludeParamBase;
        include_fields?: Array<CatalogProductsProductIdPutParametersIncludeFieldsSchemaItems>;
    };
    url: '/catalog/products/{product_id}';
};
export type UpdateProductErrors = {
    404: UpdateProductRequestNotFoundError;
    409: UpdateProductRequestConflictError;
    422: UpdateProductRequestUnprocessableEntityError;
};
export type UpdateProductError = UpdateProductErrors[keyof UpdateProductErrors];
export type UpdateProductResponses = {
    200: ProductsUpdateProductResponse200;
};
export type UpdateProductResponse = UpdateProductResponses[keyof UpdateProductResponses];
export type DeleteProductsMetafieldsData = {
    body?: Array<number>;
    path?: never;
    query?: never;
    url: '/catalog/products/metafields';
};
export type DeleteProductsMetafieldsErrors = {
    400: DeleteProductsMetafieldsRequestBadRequestError;
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
        direction?: CatalogProductsMetafieldsGetParametersDirection;
        include_fields?: Array<CatalogProductsMetafieldsGetParametersIncludeFieldsSchemaItems>;
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
    body?: Array<CatalogProductsMetafieldsPostRequestBodyContentApplicationJsonSchemaItems>;
    path?: never;
    query?: never;
    url: '/catalog/products/metafields';
};
export type CreateProductsMetafieldsErrors = {
    400: CreateProductsMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateProductsMetafieldsError = CreateProductsMetafieldsErrors[keyof CreateProductsMetafieldsErrors];
export type CreateProductsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type CreateProductsMetafieldsResponse = CreateProductsMetafieldsResponses[keyof CreateProductsMetafieldsResponses];
export type UpdateProductsMetafieldsData = {
    body?: Array<CatalogProductsMetafieldsPutRequestBodyContentApplicationJsonSchemaItems>;
    path?: never;
    query?: never;
    url: '/catalog/products/metafields';
};
export type UpdateProductsMetafieldsErrors = {
    400: UpdateProductsMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateProductsMetafieldsError = UpdateProductsMetafieldsErrors[keyof UpdateProductsMetafieldsErrors];
export type UpdateProductsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type UpdateProductsMetafieldsResponse = UpdateProductsMetafieldsResponses[keyof UpdateProductsMetafieldsResponses];
export type GetAllBulkPricingRulesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include_fields?: Array<CatalogProductsProductIdBulkPricingRulesGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/bulk-pricing-rules';
};
export type GetAllBulkPricingRulesResponses = {
    200: BulkPricingRulesGetAllBulkPricingRulesResponse200;
};
export type GetAllBulkPricingRulesResponse = GetAllBulkPricingRulesResponses[keyof GetAllBulkPricingRulesResponses];
export type CreateBulkPricingRuleData = {
    body?: BulkPricingRuleFull;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/bulk-pricing-rules';
};
export type CreateBulkPricingRuleResponses = {
    200: BulkPricingRulesCreateBulkPricingRuleResponse200;
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
    404: DeleteBulkPricingRuleRequestNotFoundError;
};
export type DeleteBulkPricingRuleError = DeleteBulkPricingRuleErrors[keyof DeleteBulkPricingRuleErrors];
export type DeleteBulkPricingRuleResponses = {
    204: {
        [key: string]: unknown;
    };
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
        include_fields?: Array<CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/bulk-pricing-rules/{bulk_pricing_rule_id}';
};
export type GetBulkPricingRuleErrors = {
    404: GetBulkPricingRuleRequestNotFoundError;
};
export type GetBulkPricingRuleError = GetBulkPricingRuleErrors[keyof GetBulkPricingRuleErrors];
export type GetBulkPricingRuleResponses = {
    200: BulkPricingRulesGetBulkPricingRuleResponse200;
};
export type GetBulkPricingRuleResponse = GetBulkPricingRuleResponses[keyof GetBulkPricingRuleResponses];
export type UpdateBulkPricingRuleData = {
    body?: {
        id: number;
        quantity_min: number;
        quantity_max: number;
        type: CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdPutRequestBodyContentApplicationJsonSchemaType;
        amount: CatalogProductsProductIdBulkPricingRulesBulkPricingRuleIdPutRequestBodyContentApplicationJsonSchemaAmount;
    };
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
export type UpdateBulkPricingRuleErrors = {
    404: UpdateBulkPricingRuleRequestNotFoundError;
    409: UpdateBulkPricingRuleRequestConflictError;
    422: UpdateBulkPricingRuleRequestUnprocessableEntityError;
};
export type UpdateBulkPricingRuleError = UpdateBulkPricingRuleErrors[keyof UpdateBulkPricingRuleErrors];
export type UpdateBulkPricingRuleResponses = {
    200: BulkPricingRulesUpdateBulkPricingRuleResponse200;
};
export type UpdateBulkPricingRuleResponse = UpdateBulkPricingRuleResponses[keyof UpdateBulkPricingRuleResponses];
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
    204: {
        [key: string]: unknown;
    };
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
    200: CategoryAssignmentsGetProductsCategoryAssignmentsResponse200;
};
export type GetProductsCategoryAssignmentsResponse = GetProductsCategoryAssignmentsResponses[keyof GetProductsCategoryAssignmentsResponses];
export type CreateProductsCategoryAssignmentsData = {
    body?: Array<ProductCategoryAssignment>;
    headers: {
        Accept: string;
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
    204: {
        [key: string]: unknown;
    };
};
export type CreateProductsCategoryAssignmentsResponse = CreateProductsCategoryAssignmentsResponses[keyof CreateProductsCategoryAssignmentsResponses];
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
    204: {
        [key: string]: unknown;
    };
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
    200: ChannelAssignmentsGetProductsChannelAssignmentsResponse200;
};
export type GetProductsChannelAssignmentsResponse = GetProductsChannelAssignmentsResponses[keyof GetProductsChannelAssignmentsResponses];
export type CreateProductsChannelAssignmentsData = {
    body?: Array<ProductChannelAssignment>;
    headers: {
        Accept: string;
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
    204: {
        [key: string]: unknown;
    };
};
export type CreateProductsChannelAssignmentsResponse = CreateProductsChannelAssignmentsResponses[keyof CreateProductsChannelAssignmentsResponses];
export type GetProductComplexRulesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include_fields?: Array<CatalogProductsProductIdComplexRulesGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<string>;
        page?: number;
        limit?: number;
    };
    url: '/catalog/products/{product_id}/complex-rules';
};
export type GetProductComplexRulesResponses = {
    200: ComplexRulesGetProductComplexRulesResponse200;
};
export type GetProductComplexRulesResponse = GetProductComplexRulesResponses[keyof GetProductComplexRulesResponses];
export type CreateProductComplexRuleData = {
    body?: {
        sort_order?: number;
        enabled?: boolean;
        stop?: boolean;
        purchasing_disabled?: boolean;
        purchasing_disabled_message?: string;
        purchasing_hidden?: boolean;
        image_url?: string;
        price_adjuster?: CatalogProductsProductIdComplexRulesPostRequestBodyContentApplicationJsonSchemaPriceAdjuster;
        weight_adjuster?: CatalogProductsProductIdComplexRulesPostRequestBodyContentApplicationJsonSchemaWeightAdjuster;
        conditions: ConditionsRequest;
    };
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/complex-rules';
};
export type CreateProductComplexRuleErrors = {
    409: CreateProductComplexRuleRequestConflictError;
    422: CreateProductComplexRuleRequestUnprocessableEntityError;
};
export type CreateProductComplexRuleError = CreateProductComplexRuleErrors[keyof CreateProductComplexRuleErrors];
export type CreateProductComplexRuleResponses = {
    200: ComplexRulesCreateProductComplexRuleResponse200;
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
    204: {
        [key: string]: unknown;
    };
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
        include_fields?: Array<CatalogProductsProductIdComplexRulesComplexRuleIdGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/complex-rules/{complex_rule_id}';
};
export type GetProductComplexRuleErrors = {
    404: GetProductComplexRuleRequestNotFoundError;
};
export type GetProductComplexRuleError = GetProductComplexRuleErrors[keyof GetProductComplexRuleErrors];
export type GetProductComplexRuleResponses = {
    200: ComplexRulesGetProductComplexRuleResponse200;
};
export type GetProductComplexRuleResponse = GetProductComplexRuleResponses[keyof GetProductComplexRuleResponses];
export type UpdateProductComplexRuleData = {
    body?: {
        sort_order?: number;
        enabled?: boolean;
        stop?: boolean;
        purchasing_disabled?: boolean;
        purchasing_disabled_message?: string;
        purchasing_hidden?: boolean;
        image_url?: string;
        price_adjuster?: CatalogProductsProductIdComplexRulesComplexRuleIdPutRequestBodyContentApplicationJsonSchemaPriceAdjuster;
        weight_adjuster?: CatalogProductsProductIdComplexRulesComplexRuleIdPutRequestBodyContentApplicationJsonSchemaWeightAdjuster;
        conditions?: Array<ComplexRuleConditionPut>;
    };
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
export type UpdateProductComplexRuleErrors = {
    409: UpdateProductComplexRuleRequestConflictError;
    422: UpdateProductComplexRuleRequestUnprocessableEntityError;
};
export type UpdateProductComplexRuleError = UpdateProductComplexRuleErrors[keyof UpdateProductComplexRuleErrors];
export type UpdateProductComplexRuleResponses = {
    200: ComplexRulesUpdateProductComplexRuleResponse200;
};
export type UpdateProductComplexRuleResponse = UpdateProductComplexRuleResponses[keyof UpdateProductComplexRuleResponses];
export type GetProductCustomFieldsData = {
    body?: never;
    path: {
        product_id: number;
    };
    query?: {
        include_fields?: Array<CatalogProductsProductIdCustomFieldsGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<CatalogProductsProductIdCustomFieldsGetParametersExcludeFieldsSchemaItems>;
        page?: number;
        limit?: number;
    };
    url: '/catalog/products/{product_id}/custom-fields';
};
export type GetProductCustomFieldsErrors = {
    403: GeneralErrorWithErrors;
    404: GeneralError;
    405: MethodNotAllowedError;
};
export type GetProductCustomFieldsError = GetProductCustomFieldsErrors[keyof GetProductCustomFieldsErrors];
export type GetProductCustomFieldsResponses = {
    200: CustomFieldsGetProductCustomFieldsResponse200;
};
export type GetProductCustomFieldsResponse = GetProductCustomFieldsResponses[keyof GetProductCustomFieldsResponses];
export type CreateProductCustomFieldData = {
    body?: CustomFieldPost;
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/custom-fields';
};
export type CreateProductCustomFieldErrors = {
    403: GeneralErrorWithErrors;
    404: GeneralError;
    405: MethodNotAllowedError;
    422: GeneralError;
};
export type CreateProductCustomFieldError = CreateProductCustomFieldErrors[keyof CreateProductCustomFieldErrors];
export type CreateProductCustomFieldResponses = {
    200: CustomFieldsCreateProductCustomFieldResponse200;
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
    403: GeneralErrorWithErrors;
    404: GeneralError;
    405: MethodNotAllowedError;
};
export type DeleteProductCustomFieldError = DeleteProductCustomFieldErrors[keyof DeleteProductCustomFieldErrors];
export type DeleteProductCustomFieldResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteProductCustomFieldResponse = DeleteProductCustomFieldResponses[keyof DeleteProductCustomFieldResponses];
export type GetProductCustomFieldData = {
    body?: never;
    path: {
        product_id: number;
        custom_field_id: number;
    };
    query?: {
        include_fields?: Array<CatalogProductsProductIdCustomFieldsCustomFieldIdGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<CatalogProductsProductIdCustomFieldsCustomFieldIdGetParametersExcludeFieldsSchemaItems>;
    };
    url: '/catalog/products/{product_id}/custom-fields/{custom_field_id}';
};
export type GetProductCustomFieldErrors = {
    403: GeneralErrorWithErrors;
    404: GeneralError;
    405: MethodNotAllowedError;
};
export type GetProductCustomFieldError = GetProductCustomFieldErrors[keyof GetProductCustomFieldErrors];
export type GetProductCustomFieldResponses = {
    200: CustomFieldsGetProductCustomFieldResponse200;
};
export type GetProductCustomFieldResponse = GetProductCustomFieldResponses[keyof GetProductCustomFieldResponses];
export type UpdateProductCustomFieldData = {
    body?: CustomFieldPut;
    path: {
        product_id: number;
        custom_field_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/custom-fields/{custom_field_id}';
};
export type UpdateProductCustomFieldErrors = {
    403: GeneralErrorWithErrors;
    404: GeneralError;
    405: MethodNotAllowedError;
    422: GeneralError;
};
export type UpdateProductCustomFieldError = UpdateProductCustomFieldErrors[keyof UpdateProductCustomFieldErrors];
export type UpdateProductCustomFieldResponses = {
    200: CustomFieldsUpdateProductCustomFieldResponse200;
};
export type UpdateProductCustomFieldResponse = UpdateProductCustomFieldResponses[keyof UpdateProductCustomFieldResponses];
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
        include_fields?: Array<CatalogProductsProductIdImagesGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/images';
};
export type GetProductImagesErrors = {
    404: GetProductImagesRequestNotFoundError;
};
export type GetProductImagesError = GetProductImagesErrors[keyof GetProductImagesErrors];
export type GetProductImagesResponses = {
    200: ImagesGetProductImagesResponse200;
};
export type GetProductImagesResponse = GetProductImagesResponses[keyof GetProductImagesResponses];
export type CreateProductImageData = {
    body?: ProductImagePostPut;
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
    400: CreateProductImageRequestBadRequestError;
    404: CreateProductImageRequestNotFoundError;
    422: CreateProductImageRequestUnprocessableEntityError;
};
export type CreateProductImageError = CreateProductImageErrors[keyof CreateProductImageErrors];
export type CreateProductImageResponses = {
    200: ImagesCreateProductImageResponse200;
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
    204: {
        [key: string]: unknown;
    };
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
        include_fields?: Array<CatalogProductsProductIdImagesImageIdGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/images/{image_id}';
};
export type GetProductImageErrors = {
    404: GetProductImageRequestNotFoundError;
};
export type GetProductImageError = GetProductImageErrors[keyof GetProductImageErrors];
export type GetProductImageResponses = {
    200: ImagesGetProductImageResponse200;
};
export type GetProductImageResponse = GetProductImageResponses[keyof GetProductImageResponses];
export type UpdateProductImageData = {
    body?: ProductImagePostPut;
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
export type UpdateProductImageErrors = {
    400: UpdateProductImageRequestBadRequestError;
    404: UpdateProductImageRequestNotFoundError;
    422: ErrorResponse422;
};
export type UpdateProductImageError = UpdateProductImageErrors[keyof UpdateProductImageErrors];
export type UpdateProductImageResponses = {
    200: ImagesUpdateProductImageResponse200;
};
export type UpdateProductImageResponse = UpdateProductImageResponses[keyof UpdateProductImageResponses];
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
        include_fields?: Array<CatalogProductsProductIdMetafieldsGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<string>;
        'resource_id:in'?: string;
    };
    url: '/catalog/products/{product_id}/metafields';
};
export type GetProductMetafieldsResponses = {
    200: MetafieldsGetProductMetafieldsResponse200;
};
export type GetProductMetafieldsResponse = GetProductMetafieldsResponses[keyof GetProductMetafieldsResponses];
export type CreateProductMetafieldData = {
    body?: MetafieldBase;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/metafields';
};
export type CreateProductMetafieldErrors = {
    400: CreateProductMetafieldRequestBadRequestError;
    409: CreateProductMetafieldRequestConflictError;
    422: CreateProductMetafieldRequestUnprocessableEntityError;
};
export type CreateProductMetafieldError = CreateProductMetafieldErrors[keyof CreateProductMetafieldErrors];
export type CreateProductMetafieldResponses = {
    200: MetafieldsCreateProductMetafieldResponse200;
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
    404: DeleteProductMetafieldRequestNotFoundError;
};
export type DeleteProductMetafieldError = DeleteProductMetafieldErrors[keyof DeleteProductMetafieldErrors];
export type DeleteProductMetafieldResponses = {
    204: {
        [key: string]: unknown;
    };
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
        include_fields?: Array<CatalogProductsProductIdMetafieldsMetafieldIdGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/metafields/{metafield_id}';
};
export type GetProductMetafieldErrors = {
    404: GetProductMetafieldRequestNotFoundError;
};
export type GetProductMetafieldError = GetProductMetafieldErrors[keyof GetProductMetafieldErrors];
export type GetProductMetafieldResponses = {
    200: MetafieldsGetProductMetafieldResponse200;
};
export type GetProductMetafieldResponse = GetProductMetafieldResponses[keyof GetProductMetafieldResponses];
export type UpdateProductMetafieldData = {
    body?: MetafieldBase;
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
export type UpdateProductMetafieldErrors = {
    400: UpdateProductMetafieldRequestBadRequestError;
    404: UpdateProductMetafieldRequestNotFoundError;
};
export type UpdateProductMetafieldError = UpdateProductMetafieldErrors[keyof UpdateProductMetafieldErrors];
export type UpdateProductMetafieldResponses = {
    200: MetafieldsUpdateProductMetafieldResponse200;
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
        include_fields?: Array<CatalogProductsProductIdReviewsGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<string>;
        page?: number;
        limit?: number;
        status?: CatalogProductsProductIdReviewsGetParametersStatus;
    };
    url: '/catalog/products/{product_id}/reviews';
};
export type GetProductReviewsErrors = {
    404: GetProductReviewsRequestNotFoundError;
};
export type GetProductReviewsError = GetProductReviewsErrors[keyof GetProductReviewsErrors];
export type GetProductReviewsResponses = {
    200: ReviewsGetProductReviewsResponse200;
};
export type GetProductReviewsResponse = GetProductReviewsResponses[keyof GetProductReviewsResponses];
export type CreateProductReviewData = {
    body?: {
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
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/reviews';
};
export type CreateProductReviewErrors = {
    404: CreateProductReviewRequestNotFoundError;
};
export type CreateProductReviewError = CreateProductReviewErrors[keyof CreateProductReviewErrors];
export type CreateProductReviewResponses = {
    200: ReviewsCreateProductReviewResponse200;
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
    204: {
        [key: string]: unknown;
    };
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
        include_fields?: Array<CatalogProductsProductIdReviewsReviewIdGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/reviews/{review_id}';
};
export type GetProductReviewErrors = {
    404: GetProductReviewRequestNotFoundError;
};
export type GetProductReviewError = GetProductReviewErrors[keyof GetProductReviewErrors];
export type GetProductReviewResponses = {
    200: ReviewsGetProductReviewResponse200;
};
export type GetProductReviewResponse = GetProductReviewResponses[keyof GetProductReviewResponses];
export type UpdateProductReviewData = {
    body?: {
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
    };
    path: {
        product_id: number;
        review_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/reviews/{review_id}';
};
export type UpdateProductReviewErrors = {
    404: UpdateProductReviewRequestNotFoundError;
};
export type UpdateProductReviewError = UpdateProductReviewErrors[keyof UpdateProductReviewErrors];
export type UpdateProductReviewResponses = {
    200: ReviewsUpdateProductReviewResponse200;
};
export type UpdateProductReviewResponse = UpdateProductReviewResponses[keyof UpdateProductReviewResponses];
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
    200: SummaryGetCatalogSummaryResponse200;
};
export type GetCatalogSummaryResponse = GetCatalogSummaryResponses[keyof GetCatalogSummaryResponses];
export type GetProductVideosData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include_fields?: Array<CatalogProductsProductIdVideosGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<string>;
        page?: number;
        limit?: number;
    };
    url: '/catalog/products/{product_id}/videos';
};
export type GetProductVideosResponses = {
    200: VideosGetProductVideosResponse200;
};
export type GetProductVideosResponse = GetProductVideosResponses[keyof GetProductVideosResponses];
export type CreateProductVideoData = {
    body?: {
        title?: string;
        description?: string;
        sort_order?: number;
        type?: CatalogProductsProductIdVideosPostRequestBodyContentApplicationJsonSchemaType;
        video_id?: string;
    };
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/videos';
};
export type CreateProductVideoErrors = {
    404: CreateProductVideoRequestNotFoundError;
};
export type CreateProductVideoError = CreateProductVideoErrors[keyof CreateProductVideoErrors];
export type CreateProductVideoResponses = {
    200: VideosCreateProductVideoResponse200;
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
    204: {
        [key: string]: unknown;
    };
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
        include_fields?: Array<CatalogProductsProductIdVideosIdGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/videos/{id}';
};
export type GetProductVideoErrors = {
    404: GetProductVideoRequestNotFoundError;
};
export type GetProductVideoError = GetProductVideoErrors[keyof GetProductVideoErrors];
export type GetProductVideoResponses = {
    200: VideosGetProductVideoResponse200;
};
export type GetProductVideoResponse = GetProductVideoResponses[keyof GetProductVideoResponses];
export type UpdateProductVideoData = {
    body?: {
        title?: string;
        description?: string;
        sort_order?: number;
        type?: CatalogProductsProductIdVideosIdPutRequestBodyContentApplicationJsonSchemaType;
        id?: number;
    };
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
export type UpdateProductVideoErrors = {
    404: UpdateProductVideoRequestNotFoundError;
};
export type UpdateProductVideoError = UpdateProductVideoErrors[keyof UpdateProductVideoErrors];
export type UpdateProductVideoResponses = {
    200: VideosUpdateProductVideoResponse200;
};
export type UpdateProductVideoResponse = UpdateProductVideoResponses[keyof UpdateProductVideoResponses];
