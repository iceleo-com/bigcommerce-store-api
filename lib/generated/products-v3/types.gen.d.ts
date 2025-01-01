export type adjuster_Full = {
    adjuster?: ('relative' | 'percentage') | null;
    adjuster_value?: number;
};
export type adjuster = 'relative' | 'percentage';
export type adjusters_Full = {
    price?: adjuster_Full;
    weight?: adjuster_Full;
    image_url?: string;
    purchasing_disabled?: {
        status?: boolean;
        message?: string;
    };
};
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type beta5DetailedErrors = {
    [key: string]: unknown;
};
export type beta5ErrorResponse = BaseError & {
    errors?: beta5DetailedErrors;
};
export type bulkPricingRule_Full = {
    quantity_min: number;
    quantity_max: number;
    type: 'price' | 'percent' | 'fixed';
    amount: (number | string);
};
export type type = 'price' | 'percent' | 'fixed';
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
export type complexRule_Base = {
    id?: number;
    product_id?: (number) | null;
    sort_order?: number;
    enabled?: boolean;
    stop?: boolean;
    purchasing_disabled?: boolean;
    purchasing_disabled_message?: string;
    purchasing_hidden?: boolean;
    image_url?: string;
    price_adjuster?: adjuster_Full;
    weight_adjuster?: adjuster_Full;
    conditions?: Array<complexRuleConditionBase>;
};
export type complexRuleConditionBase = {
    id?: (number) | null;
    rule_id?: (number) | null;
    modifier_id: (number) | null;
    modifier_value_id: (number) | null;
    variant_id: (number) | null;
    combination_id?: number;
};
export type conditionsRequest = Array<(modifierCondition | variantCondition)>;
export type config_Full = {
    default_value?: string;
    checked_by_default?: boolean;
    checkbox_label?: string;
    date_limited?: boolean;
    date_limit_mode?: 'earliest' | 'range' | 'latest';
    date_earliest_value?: string;
    date_latest_value?: string;
    file_types_mode?: 'specific' | 'all';
    file_types_supported?: Array<(string)>;
    file_types_other?: Array<(string)>;
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
export type date_limit_mode = 'earliest' | 'range' | 'latest';
export type file_types_mode = 'specific' | 'all';
export type number_limit_mode = 'lowest' | 'highest' | 'range';
export type product_list_shipping_calc = 'none' | 'weight' | 'package';
export type customFieldData = {
    id?: number;
    name?: string;
    value?: string;
};
export type customFieldPost = {
    name: string;
    value: string;
};
export type customFieldPut = {
    name?: string;
    value?: string;
};
export type customUrl_Full = {
    url?: string;
    is_customized?: boolean;
    create_redirect?: boolean;
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
export type error_Base = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
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
export type errorResponse_409 = {
    code?: number;
    status?: number;
    title?: string;
    type?: string;
} & {
    errors?: DetailedErrors;
};
export type errorResponse_422 = {
    code?: number;
    status?: number;
    title?: string;
    type?: string;
} & {
    errors?: DetailedErrors;
};
export type Failed = number;
export type GeneralError = {
    status: number;
    title: string;
    type: string;
    code?: number;
};
export type GeneralErrorWithErrors = {
    status: number;
    title: string;
    type: string;
    errors: {
        [key: string]: unknown;
    };
};
export type metaCollection_Full = {
    pagination?: pagination_Full;
};
export type metaCollectionFull = {
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
export type metaEmpty_Full = {
    [key: string]: unknown;
};
export type metaEmptyFull = {
    [key: string]: unknown;
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
    owner_client_id?: string;
};
export type resource_type2 = 'category' | 'brand' | 'product' | 'variant';
export type MetafieldBase_Post = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetafieldBase_Put = {
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
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
    meta?: WriteCollectionSuccessMeta;
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
export type MethodNotAllowedError = {
    status: number;
    title: string;
    type: string;
    detail: string;
};
export type modifierCondition = {
    modifier_id?: number;
    modifier_value_id?: number;
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
export type ParameterAvailabilityParam = 'available' | 'disabled' | 'preorder';
export type ParameterBrandIdParam = number;
export type ParameterBulkPricingRuleIdParam = number;
export type ParameterCategoriesInParam = Array<(number)>;
export type ParameterCategoriesParam = number;
export type ParameterCategoryIdInParam = Array<(number)>;
export type ParameterChannelIdInParam = Array<(number)>;
export type ParameterComplexRuleIdParam = number;
export type ParameterConditionParam = 'new' | 'used' | 'refurbished';
export type ParameterContentType = string;
export type ParameterCustomFieldIdParam = number;
export type Parameterdate_created_max = string;
export type Parameterdate_created_min = string;
export type Parameterdate_modified_max = string;
export type Parameterdate_modified_min = string;
export type ParameterDateLastImportedMaxParam = string;
export type ParameterDateLastImportedMinParam = string;
export type ParameterDateLastImportedNotParam = string;
export type ParameterDateLastImportedParam = string;
export type ParameterDateModifiedMaxParam = string;
export type ParameterDateModifiedMinParam = string;
export type ParameterDateModifiedParam = string;
export type ParameterDirectionParam = 'asc' | 'desc';
export type ParameterExcludeFieldsParam = Array<(string)>;
export type ParameterIdGreaterParam = number;
export type ParameterIdInParam = Array<(number)>;
export type ParameterIdLessParam = number;
export type ParameterIdMaxParam = number;
export type ParameterIdMinParam = number;
export type ParameterIdNotInParam = Array<(number)>;
export type ParameterImageIdParam = number;
export type ParameterIncludeFieldsEnumParam = Array<('variants' | 'images' | 'custom_fields' | 'bulk_pricing_rules' | 'primary_image' | 'modifiers' | 'options' | 'videos')>;
export type ParameterIncludeFieldsParam = Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
export type ParameterIncludeFieldsParamMetafields = Array<('resource_id' | 'resource_id:in' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified')>;
export type ParameterIncludeParam = Array<('bulk_pricing_rules' | 'reviews' | 'modifiers' | 'options' | 'parent_relations' | 'custom_fields' | 'channels')>;
export type ParameterInventoryLevelGreaterParam = number;
export type ParameterInventoryLevelInParam = Array<(number)>;
export type ParameterInventoryLevelLessParam = number;
export type ParameterInventoryLevelMaxParam = number;
export type ParameterInventoryLevelMinParam = number;
export type ParameterInventoryLevelNotInParam = Array<(number)>;
export type ParameterInventoryLevelParam = number;
export type ParameterInventoryLowParam = number;
export type ParameterIsFeaturedParam = 1 | 0;
export type ParameterIsFreeShippingParam = number;
export type ParameterIsVisibleParam = boolean;
export type ParameterKeywordContextParam = 'shopper' | 'merchant';
export type ParameterKeywordParam = string;
export type ParameterLimitParam = number;
export type ParameterMetafieldIdParam = number;
export type ParameterMetafieldKeyInParam = Array<(string)>;
export type ParameterMetafieldKeyParam = string;
export type ParameterMetafieldNamespaceInParam = Array<(string)>;
export type ParameterMetafieldNamespaceParam = string;
export type ParameterMpnParam = string;
export type ParameterNameParam = string;
export type ParameterOutOfStockParam = number;
export type ParameterPageParam = number;
export type ParameterPriceParam = number;
export type ParameterProductIdInParam = Array<(number)>;
export type ParameterProductIdParam = number;
export type ParameterProductTypeParam = 'digital' | 'physical';
export type ParameterReviewIdParam = number;
export type ParameterSkuInParam = Array<(string)>;
export type ParameterSkuParam = string;
export type ParameterSortParam = 'id' | 'name' | 'sku' | 'price' | 'date_modified' | 'date_last_imported' | 'inventory_level' | 'is_visible' | 'total_sold';
export type ParameterTotalSoldParam = number;
export type ParameterUpcParam = string;
export type ParameterVideoIdParam = number;
export type ParameterWeightParam = number;
export type primaryImage_Full = {
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
export type product_Base_POST = {
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
    categories?: Array<(number)>;
    brand_id?: number;
    brand_name?: string;
    inventory_level?: number;
    inventory_warning_level?: number;
    inventory_tracking?: 'none' | 'product' | 'variant';
    fixed_cost_shipping_price?: number;
    is_free_shipping?: boolean;
    is_visible?: boolean;
    is_featured?: boolean;
    related_products?: Array<(number)>;
    warranty?: string;
    bin_picking_number?: string;
    layout_file?: string;
    upc?: string;
    search_keywords?: string;
    availability_description?: string;
    availability?: 'available' | 'disabled' | 'preorder';
    gift_wrapping_options_type?: 'any' | 'none' | 'list';
    gift_wrapping_options_list?: Array<(number)>;
    sort_order?: number;
    condition?: 'New' | 'Used' | 'Refurbished';
    is_condition_shown?: boolean;
    order_quantity_minimum?: number;
    order_quantity_maximum?: number;
    page_title?: string;
    meta_keywords?: Array<(string)>;
    meta_description?: string;
    view_count?: number;
    preorder_release_date?: (string) | null;
    preorder_message?: string;
    is_preorder_only?: boolean;
    is_price_hidden?: boolean;
    price_hidden_label?: string;
    custom_url?: customUrl_Full;
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
    custom_fields?: Array<productCustomField_Put>;
    bulk_pricing_rules?: Array<({
        readonly id: number;
    } & bulkPricingRule_Full)>;
    images?: Array<productImage_Full>;
    videos?: Array<productVideo_Full>;
    variants?: Array<productVariant_Full>;
};
export type type2 = 'physical' | 'digital';
export type inventory_tracking = 'none' | 'product' | 'variant';
export type availability = 'available' | 'disabled' | 'preorder';
export type gift_wrapping_options_type = 'any' | 'none' | 'list';
export type condition = 'New' | 'Used' | 'Refurbished';
export type open_graph_type = 'product' | 'album' | 'book' | 'drink' | 'food' | 'game' | 'movie' | 'song' | 'tv_show';
export type product_Base_PUT = {
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
    categories?: Array<(number)>;
    brand_id?: number;
    brand_name?: string;
    inventory_level?: number;
    inventory_warning_level?: number;
    inventory_tracking?: 'none' | 'product' | 'variant';
    fixed_cost_shipping_price?: number;
    is_free_shipping?: boolean;
    is_visible?: boolean;
    is_featured?: boolean;
    related_products?: Array<(number)>;
    warranty?: string;
    bin_picking_number?: string;
    layout_file?: string;
    upc?: string;
    search_keywords?: string;
    availability_description?: string;
    availability?: 'available' | 'disabled' | 'preorder';
    gift_wrapping_options_type?: 'any' | 'none' | 'list';
    gift_wrapping_options_list?: Array<(number)>;
    sort_order?: number;
    condition?: 'New' | 'Used' | 'Refurbished';
    is_condition_shown?: boolean;
    order_quantity_minimum?: number;
    order_quantity_maximum?: number;
    page_title?: string;
    meta_keywords?: Array<(string)>;
    meta_description?: string;
    view_count?: number;
    preorder_release_date?: (string) | null;
    preorder_message?: string;
    is_preorder_only?: boolean;
    is_price_hidden?: boolean;
    price_hidden_label?: string;
    custom_url?: customUrl_Full;
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
    custom_fields?: Array<productCustomField_Put>;
    bulk_pricing_rules?: Array<({
        readonly id: number;
    } & bulkPricingRule_Full)>;
    images?: Array<productImage_Full>;
    videos?: Array<productVideo_Full>;
    variants?: Array<productVariant_Full>;
};
export type product_Base_response = {
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
    categories?: Array<(number)>;
    brand_id?: number;
    inventory_level?: number;
    inventory_warning_level?: number;
    inventory_tracking?: 'none' | 'product' | 'variant';
    fixed_cost_shipping_price?: number;
    is_free_shipping?: boolean;
    is_visible?: boolean;
    is_featured?: boolean;
    related_products?: Array<(number)>;
    warranty?: string;
    bin_picking_number?: string;
    layout_file?: string;
    upc?: string;
    search_keywords?: string;
    availability_description?: string;
    availability?: 'available' | 'disabled' | 'preorder';
    gift_wrapping_options_type?: 'any' | 'none' | 'list';
    gift_wrapping_options_list?: Array<(number)>;
    sort_order?: number;
    condition?: 'New' | 'Used' | 'Refurbished';
    is_condition_shown?: boolean;
    order_quantity_minimum?: number;
    order_quantity_maximum?: number;
    page_title?: string;
    meta_keywords?: Array<(string)>;
    meta_description?: string;
    view_count?: number;
    preorder_release_date?: (string) | null;
    preorder_message?: string;
    is_preorder_only?: boolean;
    is_price_hidden?: boolean;
    price_hidden_label?: string;
    custom_url?: customUrl_Full;
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
    custom_fields?: Array<productCustomField_Put>;
    bulk_pricing_rules?: Array<({
        readonly id: number;
    } & bulkPricingRule_Full)>;
    images?: Array<productImage_Full>;
    primary_image?: primaryImage_Full;
    videos?: Array<productVideo_Full>;
    variants?: Array<productVariant_Full>;
};
export type product_Full = {
    readonly id?: number;
} & product_Base_response & {
    date_created?: string;
    date_modified?: string;
    base_variant_id?: number;
    calculated_price?: number;
    options?: Array<productOption_Base>;
    modifiers?: Array<productModifier_Full>;
    map_price?: number;
    option_set_id?: number;
    option_set_display?: string;
};
export type product_Put = {
    [key: string]: unknown;
} & product_Base_PUT;
export type product_Put_Collection = Array<({
    readonly id: number;
} & product_Base_PUT)>;
export type ProductCategoryAssignment = {
    product_id?: number;
    category_id?: number;
};
export type ProductChannelAssignment = {
    product_id?: number;
    channel_id?: number;
};
export type productCustomField_Base = {
    id?: number;
    name: string;
    value: string;
};
export type productCustomField_Put = {
    id?: number;
    name: string;
    value: string;
};
export type productImage_Base = {
    image_url?: string;
    is_thumbnail?: boolean;
    sort_order?: number;
    description?: string;
    date_modified?: string;
};
export type productImage_Full = productImage_Base & {
    id?: number;
    product_id?: number;
    readonly url_zoom?: string;
    readonly url_standard?: string;
    readonly url_thumbnail?: string;
    readonly url_tiny?: string;
    date_modified?: string;
};
export type productImage_Post_Put = {
    product_id?: number;
} & productImage_Base;
export type productModifier_Base = {
    type: 'date' | 'checkbox' | 'file' | 'text' | 'multi_line_text' | 'numbers_only_text' | 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
    required: boolean;
    sort_order?: number;
    config?: config_Full;
    display_name?: string;
};
export type type3 = 'date' | 'checkbox' | 'file' | 'text' | 'multi_line_text' | 'numbers_only_text' | 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
export type productModifier_Full = productModifier_Base & {
    id?: number;
    product_id?: number;
    name?: string;
    option_values?: Array<productModifierOptionValue_Full>;
};
export type productModifierOptionValue_Base = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: {
        [key: string]: unknown;
    } | null;
    adjusters?: adjusters_Full;
};
export type productModifierOptionValue_Full = productModifierOptionValue_Base & {
    id?: number;
    option_id?: number;
};
export type productOption_Base = {
    id?: (number) | null;
    product_id?: number;
    display_name?: string;
    type?: 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
    config?: productOptionConfig_Full;
    sort_order?: number;
    option_values?: Array<productOptionOptionValue_Full>;
};
export type type4 = 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
export type productOptionConfig_Full = {
    default_value?: string;
    checked_by_default?: boolean;
    checkbox_label?: string;
    date_limited?: boolean;
    date_limit_mode?: 'earliest' | 'range' | 'latest';
    date_earliest_value?: string;
    date_latest_value?: string;
    file_types_mode?: 'specific' | 'all';
    file_types_supported?: Array<(string)>;
    file_types_other?: Array<(string)>;
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
export type productOptionOptionValue_Base = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: {
        [key: string]: unknown;
    } | null;
};
export type productOptionOptionValue_Full = productOptionOptionValue_Base & {
    id?: number;
};
export type productVariant_Base = {
    cost_price?: (number) | null;
    price?: (number) | null;
    sale_price?: (number) | null;
    retail_price?: (number) | null;
    map_price?: number;
    weight?: (number) | null;
    width?: (number) | null;
    height?: (number) | null;
    depth?: (number) | null;
    is_free_shipping?: boolean;
    fixed_cost_shipping_price?: (number) | null;
    purchasing_disabled?: boolean;
    purchasing_disabled_message?: string;
    image_url?: string;
    upc?: string;
    inventory_level?: (number) | null;
    inventory_warning_level?: (number) | null;
    bin_picking_number?: (string) | null;
    mpn?: string;
    gtin?: string;
};
export type productVariant_Full = productVariant_Base & {
    product_id?: number;
    id?: number;
    sku?: string;
    sku_id?: number;
    option_values?: Array<productVariantOptionValue_Full>;
    calculated_price?: number;
    calculated_weight?: number;
} & {
    product_id: number;
    id: number;
    sku: string;
};
export type productVariant_Put_Product = {
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
    upc?: string;
    inventory_level?: (number) | null;
    inventory_warning_level?: (number) | null;
    bin_picking_number?: (string) | null;
    product_id: number;
    id: number;
    sku?: string;
};
export type productVariantOptionValue_Base = {
    id?: number;
    option_id?: number;
};
export type productVariantOptionValue_Full = {
    id?: number;
    label?: string;
    option_id?: number;
    option_display_name?: string;
} & {
    label: string;
    option_display_name: string;
};
export type productVideo_Base = {
    title?: string;
    description?: string;
    sort_order?: number;
    type?: 'youtube';
    video_id?: string;
};
export type type5 = 'youtube';
export type productVideo_Full = productVideo_Base & {
    id?: number;
    product_id?: number;
    length?: string;
};
export type Success = number;
export type Total = number;
export type variantCondition = {
    variant_id?: number;
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
export type GetProductsData = {
    headers: {
        Accept: string;
    };
    query?: {
        availability?: 'available' | 'disabled' | 'preorder';
        brand_id?: number;
        categories?: number;
        'categories:in'?: Array<(number)>;
        'channel_id:in'?: Array<(number)>;
        condition?: 'new' | 'used' | 'refurbished';
        date_last_imported?: string;
        'date_last_imported:max'?: string;
        'date_last_imported:min'?: string;
        'date_last_imported:not'?: string;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        direction?: 'asc' | 'desc';
        exclude_fields?: Array<(string)>;
        id?: number;
        'id:greater'?: number;
        'id:in'?: Array<(number)>;
        'id:less'?: number;
        'id:max'?: number;
        'id:min'?: number;
        'id:not_in'?: Array<(number)>;
        include?: Array<('bulk_pricing_rules' | 'reviews' | 'modifiers' | 'options' | 'parent_relations' | 'custom_fields' | 'channels')>;
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
        inventory_level?: number;
        'inventory_level:greater'?: number;
        'inventory_level:in'?: Array<(number)>;
        'inventory_level:less'?: number;
        'inventory_level:max'?: number;
        'inventory_level:min'?: number;
        'inventory_level:not_in'?: Array<(number)>;
        inventory_low?: number;
        is_featured?: 1 | 0;
        is_free_shipping?: number;
        is_visible?: boolean;
        keyword?: string;
        keyword_context?: 'shopper' | 'merchant';
        limit?: number;
        mpn?: string;
        name?: string;
        out_of_stock?: number;
        page?: number;
        price?: number;
        sku?: string;
        'sku:in'?: Array<(string)>;
        sort?: 'id' | 'name' | 'sku' | 'price' | 'date_modified' | 'date_last_imported' | 'inventory_level' | 'is_visible' | 'total_sold';
        total_sold?: number;
        type?: 'digital' | 'physical';
        upc?: string;
        weight?: number;
    };
};
export type GetProductsResponse = ({
    data?: Array<(product_Full & {
        channels?: Array<(number)>;
    })>;
    meta?: metaCollection_Full;
});
export type GetProductsError = unknown;
export type UpdateProductsData = {
    body?: product_Put_Collection;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
    };
};
export type UpdateProductsResponse = ({
    data?: Array<product_Full>;
    meta?: unknown;
} | {
    data?: Array<product_Full>;
    errors?: errorMultiStatus;
    meta?: metaCollection_Full;
});
export type UpdateProductsError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} | errorResponse_409 | error_Base | errorResponse_422);
export type CreateProductData = {
    body: product_Base_POST;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    query?: {
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
    };
};
export type CreateProductResponse = ({
    data?: product_Full;
    meta?: metaEmpty_Full;
} | {
    data?: Array<product_Full>;
    errors?: errorMultiStatus;
    meta?: metaCollection_Full;
});
export type CreateProductError = ({
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type DeleteProductsData = {
    headers: {
        Accept: string;
    };
    query?: {
        brand_id?: number;
        categories?: number;
        condition?: 'new' | 'used' | 'refurbished';
        date_last_imported?: string;
        date_modified?: string;
        'id:in'?: Array<(number)>;
        inventory_level?: number;
        is_featured?: 1 | 0;
        is_visible?: boolean;
        keyword?: string;
        name?: string;
        price?: number;
        sku?: string;
        total_sold?: number;
        type?: 'digital' | 'physical';
        weight?: number;
    };
};
export type DeleteProductsResponse = (void);
export type DeleteProductsError = unknown;
export type GetProductData = {
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include?: Array<('bulk_pricing_rules' | 'reviews' | 'modifiers' | 'options' | 'parent_relations' | 'custom_fields' | 'channels')>;
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
    };
};
export type GetProductResponse = ({
    data?: (product_Full & {
        channels?: Array<(number)>;
    });
    meta?: metaEmpty_Full;
});
export type GetProductError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type UpdateProductData = {
    body: product_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
    query?: {
        include_fields?: Array<('variants' | 'images' | 'custom_fields' | 'bulk_pricing_rules' | 'primary_image' | 'modifiers' | 'options' | 'videos')>;
    };
};
export type UpdateProductResponse = ({
    data?: product_Full;
    meta?: metaEmpty_Full;
} | {
    [key: string]: unknown;
} | {
    data?: product_Full;
    errors?: errorMultiStatus;
    meta?: metaCollection_Full;
});
export type UpdateProductError = ({
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
export type DeleteProductData = {
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
};
export type DeleteProductResponse = (void);
export type DeleteProductError = unknown;
export type GetProductImagesData = {
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
        limit?: number;
        page?: number;
    };
};
export type GetProductImagesResponse = ({
    data?: Array<productImage_Full>;
    meta?: metaCollection_Full;
} | void);
export type GetProductImagesError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type CreateProductImageData = {
    body: (productImage_Post_Put);
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
};
export type CreateProductImageResponse = ({
    data?: ({
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
    });
    meta?: metaEmpty_Full;
});
export type CreateProductImageError = ({
    [key: string]: unknown;
} | {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} | {
    status: number;
    title: string;
    type: string;
});
export type GetProductImageData = {
    headers: {
        Accept: string;
    };
    path: {
        image_id: number;
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
    };
};
export type GetProductImageResponse = ({
    data?: productImage_Full;
    meta?: metaEmpty_Full;
});
export type GetProductImageError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type UpdateProductImageData = {
    body: (productImage_Post_Put);
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        image_id: number;
        product_id: number;
    };
};
export type UpdateProductImageResponse = ({
    data?: ({
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
    });
    meta?: metaEmpty_Full;
} | {
    [key: string]: unknown;
});
export type UpdateProductImageError = ({
    [key: string]: unknown;
} | {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type DeleteProductImageData = {
    headers: {
        Accept: string;
    };
    path: {
        image_id: number;
        product_id: number;
    };
};
export type DeleteProductImageResponse = (void);
export type DeleteProductImageError = unknown;
export type GetProductVideosData = {
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
        limit?: number;
        page?: number;
    };
};
export type GetProductVideosResponse = ({
    data?: Array<productVideo_Full>;
    meta?: metaCollection_Full;
});
export type GetProductVideosError = unknown;
export type CreateProductVideoData = {
    body: ({
        title?: string;
        description?: string;
        sort_order?: number;
        type?: 'youtube';
    } & {
        video_id?: string;
    });
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
};
export type CreateProductVideoResponse = ({
    data?: ({
        title?: string;
        description?: string;
        sort_order?: number;
        type?: 'youtube';
    } & {
        id?: number;
        video_id?: string;
        product_id?: number;
        length?: string;
    });
    meta?: metaEmpty_Full;
});
export type CreateProductVideoError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type GetProductVideoData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
    };
};
export type GetProductVideoResponse = ({
    data?: productVideo_Full;
    meta?: metaEmpty_Full;
});
export type GetProductVideoError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type UpdateProductVideoData = {
    body: ({
        title?: string;
        description?: string;
        sort_order?: number;
        type?: 'youtube';
    } & {
        id?: number;
    });
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
        product_id: number;
    };
};
export type UpdateProductVideoResponse = ({
    data?: ({
        title?: string;
        description?: string;
        sort_order?: number;
        type?: 'youtube';
    } & {
        id?: number;
        video_id?: string;
        product_id?: number;
        length?: string;
    });
    meta?: metaEmpty_Full;
});
export type UpdateProductVideoError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type DeleteProductVideoData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
        product_id: number;
    };
};
export type DeleteProductVideoResponse = (void);
export type DeleteProductVideoError = unknown;
export type GetProductComplexRulesData = {
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
        limit?: number;
        page?: number;
    };
};
export type GetProductComplexRulesResponse = ({
    data?: Array<complexRule_Base>;
    meta?: metaCollection_Full;
});
export type GetProductComplexRulesError = unknown;
export type CreateProductComplexRuleData = {
    body: {
        product_id?: (number) | null;
        sort_order?: number;
        enabled?: boolean;
        stop?: boolean;
        purchasing_disabled?: boolean;
        purchasing_disabled_message?: string;
        purchasing_hidden?: boolean;
        image_url?: string;
        price_adjuster?: {
            adjuster?: ('relative' | 'percentage') | null;
            adjuster_value?: number;
        };
        weight_adjuster?: {
            adjuster?: ('relative' | 'percentage') | null;
            adjuster_value?: number;
        };
        conditions?: conditionsRequest;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
};
export type CreateProductComplexRuleResponse = ({
    data?: {
        id?: number;
        product_id?: (number) | null;
        sort_order?: number;
        enabled?: boolean;
        stop?: boolean;
        purchasing_disabled?: boolean;
        purchasing_disabled_message?: string;
        purchasing_hidden?: boolean;
        image_url?: string;
        price_adjuster?: {
            adjuster?: ('relative' | 'percentage') | null;
            adjuster_value?: number;
        };
        weight_adjuster?: {
            adjuster?: ('relative' | 'percentage') | null;
            adjuster_value?: number;
        };
        conditions?: Array<{
            id?: (number) | null;
            rule_id?: (number) | null;
            modifier_id: (number) | null;
            modifier_value_id: (number) | null;
            variant_id: (number) | null;
            combination_id?: number;
        }>;
    };
    meta?: metaEmpty_Full;
});
export type CreateProductComplexRuleError = ({
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type GetProductComplexRuleData = {
    headers: {
        Accept: string;
    };
    path: {
        complex_rule_id: number;
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
    };
};
export type GetProductComplexRuleResponse = ({
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
    meta?: metaEmpty_Full;
});
export type GetProductComplexRuleError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type UpdateProductComplexRuleData = {
    body: {
        product_id?: (number) | null;
        sort_order?: number;
        enabled?: boolean;
        stop?: boolean;
        purchasing_disabled?: boolean;
        purchasing_disabled_message?: string;
        purchasing_hidden?: boolean;
        image_url?: string;
        price_adjuster?: {
            adjuster?: ('relative' | 'percentage') | null;
            adjuster_value?: number;
        };
        weight_adjuster?: {
            adjuster?: ('relative' | 'percentage') | null;
            adjuster_value?: number;
        };
        conditions?: Array<{
            modifier_id: (number) | null;
            modifier_value_id: (number) | null;
            variant_id: (number) | null;
        }>;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        complex_rule_id: number;
        product_id: number;
    };
};
export type UpdateProductComplexRuleResponse = ({
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
    meta?: metaEmpty_Full;
});
export type UpdateProductComplexRuleError = ({
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type DeleteProductComplexRuleData = {
    headers: {
        Accept: string;
    };
    path: {
        complex_rule_id: number;
        product_id: number;
    };
};
export type DeleteProductComplexRuleResponse = (void);
export type DeleteProductComplexRuleError = unknown;
export type GetProductCustomFieldsData = {
    path: {
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
        limit?: number;
        page?: number;
    };
};
export type GetProductCustomFieldsResponse = ({
    data?: Array<customFieldData>;
    meta?: metaCollectionFull;
});
export type GetProductCustomFieldsError = (string | GeneralErrorWithErrors | GeneralError | MethodNotAllowedError);
export type CreateProductCustomFieldData = {
    body: customFieldPost;
    path: {
        product_id: number;
    };
};
export type CreateProductCustomFieldResponse = ({
    data?: customFieldData;
    meta?: metaEmptyFull;
});
export type CreateProductCustomFieldError = (string | GeneralErrorWithErrors | GeneralError | MethodNotAllowedError);
export type GetProductCustomFieldData = {
    path: {
        custom_field_id: number;
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
    };
};
export type GetProductCustomFieldResponse = ({
    data?: customFieldData;
    meta?: metaEmptyFull;
});
export type GetProductCustomFieldError = (string | GeneralErrorWithErrors | GeneralError | MethodNotAllowedError);
export type UpdateProductCustomFieldData = {
    body: customFieldPut;
    path: {
        custom_field_id: number;
        product_id: number;
    };
};
export type UpdateProductCustomFieldResponse = ({
    data?: customFieldData;
    meta?: metaEmptyFull;
});
export type UpdateProductCustomFieldError = (string | GeneralErrorWithErrors | GeneralError | MethodNotAllowedError);
export type DeleteProductCustomFieldData = {
    path: {
        custom_field_id: number;
        product_id: number;
    };
};
export type DeleteProductCustomFieldResponse = (void);
export type DeleteProductCustomFieldError = (string | GeneralErrorWithErrors | GeneralError | MethodNotAllowedError);
export type CreateBulkPricingRuleData = {
    body: bulkPricingRule_Full;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
};
export type CreateBulkPricingRuleResponse = ({
    data?: ({
        readonly id: number;
    } & bulkPricingRule_Full);
    meta?: metaEmpty_Full;
});
export type CreateBulkPricingRuleError = unknown;
export type GetBulkPricingRuleData = {
    headers: {
        Accept: string;
    };
    path: {
        bulk_pricing_rule_id: number;
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
    };
};
export type GetBulkPricingRuleResponse = ({
    data?: ({
        readonly id: number;
    } & bulkPricingRule_Full);
    meta?: metaEmpty_Full;
});
export type GetBulkPricingRuleError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type UpdateBulkPricingRuleData = {
    body: ({
        readonly id: number;
    } & bulkPricingRule_Full);
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        bulk_pricing_rule_id: number;
        product_id: number;
    };
};
export type UpdateBulkPricingRuleResponse = ({
    data?: ({
        readonly id: number;
    } & bulkPricingRule_Full);
    meta?: metaEmpty_Full;
});
export type UpdateBulkPricingRuleError = ({
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
export type DeleteBulkPricingRuleData = {
    headers: {
        Accept: string;
    };
    path: {
        bulk_pricing_rule_id: number;
        product_id: number;
    };
};
export type DeleteBulkPricingRuleResponse = (void);
export type DeleteBulkPricingRuleError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type GetProductMetafieldsData = {
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
        key?: string;
        limit?: number;
        namespace?: string;
        page?: number;
    };
};
export type GetProductMetafieldsResponse = ({
    data?: Array<metafield_Full>;
    meta?: metaCollection_Full;
});
export type GetProductMetafieldsError = unknown;
export type CreateProductMetafieldData = {
    body: metafield_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
};
export type CreateProductMetafieldResponse = ({
    data?: metafield_Full;
    meta?: metaEmpty_Full;
});
export type CreateProductMetafieldError = ({
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
} | {
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type GetProductMetafieldData = {
    headers: {
        Accept: string;
    };
    path: {
        metafield_id: number;
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
    };
};
export type GetProductMetafieldResponse = ({
    data?: metafield_Full;
    meta?: metaEmpty_Full;
});
export type GetProductMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type UpdateProductMetafieldData = {
    body: metafield_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        metafield_id: number;
        product_id: number;
    };
};
export type UpdateProductMetafieldResponse = ({
    data?: metafield_Full;
    meta?: metaEmpty_Full;
});
export type UpdateProductMetafieldError = ({
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
export type DeleteProductMetafieldData = {
    headers: {
        Accept: string;
    };
    path: {
        metafield_id: number;
        product_id: number;
    };
};
export type DeleteProductMetafieldResponse = (void);
export type DeleteProductMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type GetProductReviewsData = {
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
        limit?: number;
        page?: number;
        status?: 0 | 1;
    };
};
export type GetProductReviewsResponse = ({
    data?: Array<({
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
    })>;
    meta?: metaCollection_Full;
} | void);
export type GetProductReviewsError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type CreateProductReviewData = {
    body: ({
        title: string;
        text?: string;
        status?: string;
        rating?: number;
        email?: string;
        name?: string;
        date_reviewed: string;
    });
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
    };
};
export type CreateProductReviewResponse = ({
    data?: ({
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
    });
    meta?: metaEmpty_Full;
});
export type CreateProductReviewError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type GetProductReviewData = {
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        review_id: number;
    };
    query?: {
        exclude_fields?: Array<(string)>;
        include_fields?: Array<('name' | 'type' | 'sku' | 'description' | 'weight' | 'width' | 'depth' | 'height' | 'price' | 'cost_price' | 'retail_price' | 'sale_price' | 'map_price' | 'tax_class_id' | 'product_tax_code' | 'calculated_price' | 'categories' | 'brand_id' | 'option_set_id' | 'option_set_display' | 'inventory_level' | 'inventory_warning_level' | 'inventory_tracking' | 'reviews_rating_sum' | 'reviews_count' | 'total_sold' | 'fixed_cost_shipping_price' | 'is_free_shipping' | 'is_visible' | 'is_featured' | 'related_products' | 'warranty' | 'bin_picking_number' | 'layout_file' | 'upc' | 'mpn' | 'gtin' | 'date_last_imported' | 'search_keywords' | 'availability' | 'availability_description' | 'condition' | 'is_condition_shown' | 'order_quantity_minimum' | 'order_quantity_maximum' | 'page_title' | 'meta_keywords' | 'meta_description' | 'date_created' | 'date_modified' | 'view_count' | 'preorder_release_date' | 'preorder_message' | 'is_preorder_only' | 'is_price_hidden' | 'price_hidden_label' | 'custom_url' | 'base_variant_id' | 'open_graph_type' | 'open_graph_title' | 'open_graph_description' | 'open_graph_use_meta_description' | 'open_graph_use_product_name' | 'open_graph_use_image')>;
    };
};
export type GetProductReviewResponse = ({
    data?: ({
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
    });
    meta?: metaEmpty_Full;
});
export type GetProductReviewError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type UpdateProductReviewData = {
    body: ({
        title: string;
        text?: string;
        status?: string;
        rating?: number;
        email?: string;
        name?: string;
        date_reviewed: string;
    });
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        product_id: number;
        review_id: number;
    };
};
export type UpdateProductReviewResponse = ({
    data?: ({
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
    });
    meta?: metaEmpty_Full;
});
export type UpdateProductReviewError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type DeleteProductReviewData = {
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        review_id: number;
    };
};
export type DeleteProductReviewResponse = (void);
export type DeleteProductReviewError = unknown;
export type GetProductsChannelAssignmentsData = {
    headers: {
        Accept: string;
    };
    query?: {
        'channel_id:in'?: Array<(number)>;
        limit?: number;
        page?: number;
        'product_id:in'?: Array<(number)>;
    };
};
export type GetProductsChannelAssignmentsResponse = ({
    data?: Array<ProductChannelAssignment>;
    meta?: MetaPaginationObject;
});
export type GetProductsChannelAssignmentsError = unknown;
export type CreateProductsChannelAssignmentsData = {
    body: Array<ProductChannelAssignment>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateProductsChannelAssignmentsResponse = (void);
export type CreateProductsChannelAssignmentsError = (beta5ErrorResponse);
export type DeleteProductsChannelAssignmentsData = {
    headers: {
        Accept: string;
    };
    query?: {
        'channel_id:in'?: Array<(number)>;
        'product_id:in'?: Array<(number)>;
    };
};
export type DeleteProductsChannelAssignmentsResponse = (void);
export type DeleteProductsChannelAssignmentsError = (beta5ErrorResponse);
export type GetProductsCategoryAssignmentsData = {
    headers: {
        Accept: string;
    };
    query?: {
        'category_id:in'?: Array<(number)>;
        limit?: number;
        page?: number;
        'product_id:in'?: Array<(number)>;
    };
};
export type GetProductsCategoryAssignmentsResponse = ({
    data?: Array<ProductCategoryAssignment>;
    meta?: MetaPaginationObject;
});
export type GetProductsCategoryAssignmentsError = unknown;
export type CreateProductsCategoryAssignmentsData = {
    body: Array<ProductCategoryAssignment>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateProductsCategoryAssignmentsResponse = (void);
export type CreateProductsCategoryAssignmentsError = (beta5ErrorResponse);
export type DeleteProductsCategoryAssignmentsData = {
    headers: {
        Accept: string;
    };
    query?: {
        'category_id:in'?: Array<(number)>;
        'product_id:in'?: Array<(number)>;
    };
};
export type DeleteProductsCategoryAssignmentsResponse = (void);
export type DeleteProductsCategoryAssignmentsError = (beta5ErrorResponse);
export type GetCatalogSummaryData = {
    headers: {
        Accept: string;
    };
};
export type GetCatalogSummaryResponse = ({
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
    meta?: metaEmpty_Full;
});
export type GetCatalogSummaryError = unknown;
export type GetProductsMetafieldsData = {
    query?: {
        'date_created:max'?: string;
        'date_created:min'?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        direction?: 'asc' | 'desc';
        include_fields?: Array<('resource_id' | 'resource_id:in' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified')>;
        key?: string;
        'key:in'?: Array<(string)>;
        limit?: number;
        namespace?: string;
        'namespace:in'?: Array<(string)>;
        page?: number;
    };
};
export type GetProductsMetafieldsResponse = (MetaFieldCollectionResponse);
export type GetProductsMetafieldsError = unknown;
export type CreateProductsMetafieldsData = {
    body?: Array<(MetafieldBase_Post & {
        resource_id: number;
    })>;
};
export type CreateProductsMetafieldsResponse = (MetaFieldCollectionResponse_POST_PUT);
export type CreateProductsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type UpdateProductsMetafieldsData = {
    body?: Array<(MetafieldBase_Put & {
        id: number;
    })>;
};
export type UpdateProductsMetafieldsResponse = (MetaFieldCollectionResponse_POST_PUT);
export type UpdateProductsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type DeleteProductsMetafieldsData = {
    body?: Array<(number)>;
};
export type DeleteProductsMetafieldsResponse = (MetaFieldCollectionDeleteResponseSuccess);
export type DeleteProductsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_DELETE);
