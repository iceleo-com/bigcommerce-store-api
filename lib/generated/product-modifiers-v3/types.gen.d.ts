export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
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
    label?: string;
    sort_order?: number;
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
export type ProductModifiersGetProductModifiersResponse200 = {
    data?: Array<ProductModifierFull>;
    meta?: MetaCollectionFull;
};
export type ProductModifierPostType = 'date' | 'checkbox' | 'file' | 'text' | 'multi_line_text' | 'numbers_only_text' | 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
export type ProductModifierOptionValuePost = {
    is_default?: boolean;
    label?: string;
    sort_order?: number;
    value_data?: ProductModifierOptionValueBaseValueData | null;
    adjusters?: AdjustersFull;
};
export type ProductModifierPost = {
    type: ProductModifierPostType;
    required: boolean;
    sort_order?: number;
    config?: ConfigFull;
    option_values?: Array<ProductModifierOptionValuePost>;
    display_name: string;
};
export type MetaEmptyFull = {
    [key: string]: unknown;
};
export type ProductModifiersCreateProductModifierResponse200 = {
    data?: ProductModifierFull;
    meta?: MetaEmptyFull;
};
export type CatalogProductsProductIdModifiersPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateProductModifierRequestConflictError = {
    errors?: CatalogProductsProductIdModifiersPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CreateProductModifierRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdModifiersPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type ProductModifiersGetProductModifierResponse200 = {
    data?: ProductModifierFull;
    meta?: MetaEmptyFull;
};
export type GetProductModifierRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdModifiersModifierIdPutRequestBodyContentApplicationJsonSchemaType = 'date' | 'checkbox' | 'file' | 'text' | 'multi_line_text' | 'numbers_only_text' | 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
export type CatalogProductsProductIdModifiersModifierIdPutRequestBodyContentApplicationJsonSchemaConfigDateLimitMode = 'earliest' | 'range' | 'latest';
export type CatalogProductsProductIdModifiersModifierIdPutRequestBodyContentApplicationJsonSchemaConfigFileTypesMode = 'specific' | 'all';
export type CatalogProductsProductIdModifiersModifierIdPutRequestBodyContentApplicationJsonSchemaConfigNumberLimitMode = 'lowest' | 'highest' | 'range';
export type CatalogProductsProductIdModifiersModifierIdPutRequestBodyContentApplicationJsonSchemaConfigProductListShippingCalc = 'none' | 'weight' | 'package';
export type CatalogProductsProductIdModifiersModifierIdPutRequestBodyContentApplicationJsonSchemaConfig = {
    default_value?: string;
    checked_by_default?: boolean;
    checkbox_label?: string;
    date_limited?: boolean;
    date_limit_mode?: CatalogProductsProductIdModifiersModifierIdPutRequestBodyContentApplicationJsonSchemaConfigDateLimitMode;
    date_earliest_value?: string;
    date_latest_value?: string;
    file_types_mode?: CatalogProductsProductIdModifiersModifierIdPutRequestBodyContentApplicationJsonSchemaConfigFileTypesMode;
    file_types_supported?: Array<string>;
    file_types_other?: Array<string>;
    file_max_size?: number;
    text_characters_limited?: boolean;
    text_min_length?: number;
    text_max_length?: number;
    text_lines_limited?: boolean;
    text_max_lines?: number;
    number_limited?: boolean;
    number_limit_mode?: CatalogProductsProductIdModifiersModifierIdPutRequestBodyContentApplicationJsonSchemaConfigNumberLimitMode;
    number_lowest_value?: number;
    number_highest_value?: number;
    number_integers_only?: boolean;
    product_list_adjusts_inventory?: boolean;
    product_list_adjusts_pricing?: boolean;
    product_list_shipping_calc?: CatalogProductsProductIdModifiersModifierIdPutRequestBodyContentApplicationJsonSchemaConfigProductListShippingCalc;
};
export type ProductModifiersUpdateProductModifierResponse200 = {
    data?: ProductModifierFull;
    meta?: MetaEmptyFull;
};
export type CatalogProductsProductIdModifiersModifierIdPutResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type UpdateProductModifierRequestConflictError = {
    errors?: CatalogProductsProductIdModifiersModifierIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type UpdateProductModifierRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdModifiersModifierIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CatalogProductsProductIdModifiersModifierIdValuesValueIdImagePostResponsesContentApplicationJsonSchemaData = {
    image_url?: string;
};
export type ImagesCreateProductModifierImageResponse200 = {
    data?: CatalogProductsProductIdModifiersModifierIdValuesValueIdImagePostResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type CreateProductModifierImageRequestBadRequestError = {
    [key: string]: unknown;
};
export type CreateProductModifierImageRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdModifiersModifierIdValuesValueIdImagePostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateProductModifierImageRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdModifiersModifierIdValuesValueIdImagePostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type ValuesGetProductModifierValuesResponse200 = {
    data?: Array<ProductModifierOptionValueFull>;
    meta?: MetaCollectionFull;
};
export type CatalogProductsProductIdModifiersModifierIdValuesPostRequestBodyContentApplicationJsonSchemaValueData = {
    [key: string]: unknown;
};
export type CatalogProductsProductIdModifiersModifierIdValuesPostRequestBodyContentApplicationJsonSchemaAdjustersPriceAdjuster = 'relative' | 'percentage';
export type CatalogProductsProductIdModifiersModifierIdValuesPostRequestBodyContentApplicationJsonSchemaAdjustersPrice = {
    adjuster?: CatalogProductsProductIdModifiersModifierIdValuesPostRequestBodyContentApplicationJsonSchemaAdjustersPriceAdjuster | null;
    adjuster_value?: number;
};
export type CatalogProductsProductIdModifiersModifierIdValuesPostRequestBodyContentApplicationJsonSchemaAdjustersWeightAdjuster = 'relative' | 'percentage';
export type CatalogProductsProductIdModifiersModifierIdValuesPostRequestBodyContentApplicationJsonSchemaAdjustersWeight = {
    adjuster?: CatalogProductsProductIdModifiersModifierIdValuesPostRequestBodyContentApplicationJsonSchemaAdjustersWeightAdjuster | null;
    adjuster_value?: number;
};
export type CatalogProductsProductIdModifiersModifierIdValuesPostRequestBodyContentApplicationJsonSchemaAdjustersPurchasingDisabled = {
    status?: boolean;
    message?: string;
};
export type CatalogProductsProductIdModifiersModifierIdValuesPostRequestBodyContentApplicationJsonSchemaAdjusters = {
    price?: CatalogProductsProductIdModifiersModifierIdValuesPostRequestBodyContentApplicationJsonSchemaAdjustersPrice;
    weight?: CatalogProductsProductIdModifiersModifierIdValuesPostRequestBodyContentApplicationJsonSchemaAdjustersWeight;
    image_url?: string;
    purchasing_disabled?: CatalogProductsProductIdModifiersModifierIdValuesPostRequestBodyContentApplicationJsonSchemaAdjustersPurchasingDisabled;
};
export type ValuesCreateProductModifierValueResponse200 = {
    data?: ProductModifierOptionValueFull;
    meta?: MetaEmptyFull;
};
export type CatalogProductsProductIdModifiersModifierIdValuesPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateProductModifierValueRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdModifiersModifierIdValuesPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type ValuesGetProductModifierValueResponse200 = {
    data?: ProductModifierOptionValueFull;
    meta?: MetaEmptyFull;
};
export type GetProductModifierValueRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdModifiersModifierIdValuesValueIdPutRequestBodyContentApplicationJsonSchemaValueData = {
    [key: string]: unknown;
};
export type CatalogProductsProductIdModifiersModifierIdValuesValueIdPutRequestBodyContentApplicationJsonSchemaAdjustersPriceAdjuster = 'relative' | 'percentage';
export type CatalogProductsProductIdModifiersModifierIdValuesValueIdPutRequestBodyContentApplicationJsonSchemaAdjustersPrice = {
    adjuster?: CatalogProductsProductIdModifiersModifierIdValuesValueIdPutRequestBodyContentApplicationJsonSchemaAdjustersPriceAdjuster | null;
    adjuster_value?: number;
};
export type CatalogProductsProductIdModifiersModifierIdValuesValueIdPutRequestBodyContentApplicationJsonSchemaAdjustersWeightAdjuster = 'relative' | 'percentage';
export type CatalogProductsProductIdModifiersModifierIdValuesValueIdPutRequestBodyContentApplicationJsonSchemaAdjustersWeight = {
    adjuster?: CatalogProductsProductIdModifiersModifierIdValuesValueIdPutRequestBodyContentApplicationJsonSchemaAdjustersWeightAdjuster | null;
    adjuster_value?: number;
};
export type CatalogProductsProductIdModifiersModifierIdValuesValueIdPutRequestBodyContentApplicationJsonSchemaAdjustersPurchasingDisabled = {
    status?: boolean;
    message?: string;
};
export type CatalogProductsProductIdModifiersModifierIdValuesValueIdPutRequestBodyContentApplicationJsonSchemaAdjusters = {
    price?: CatalogProductsProductIdModifiersModifierIdValuesValueIdPutRequestBodyContentApplicationJsonSchemaAdjustersPrice;
    weight?: CatalogProductsProductIdModifiersModifierIdValuesValueIdPutRequestBodyContentApplicationJsonSchemaAdjustersWeight;
    image_url?: string;
    purchasing_disabled?: CatalogProductsProductIdModifiersModifierIdValuesValueIdPutRequestBodyContentApplicationJsonSchemaAdjustersPurchasingDisabled;
};
export type ValuesUpdateProductModifierValueResponse200 = {
    data?: ProductModifierOptionValueFull;
    meta?: MetaEmptyFull;
};
export type CatalogProductsProductIdModifiersModifierIdValuesValueIdPutResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type UpdateProductModifierValueRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdModifiersModifierIdValuesValueIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type GetProductModifiersData = {
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
    url: '/catalog/products/{product_id}/modifiers';
};
export type GetProductModifiersResponses = {
    200: ProductModifiersGetProductModifiersResponse200;
};
export type GetProductModifiersResponse = GetProductModifiersResponses[keyof GetProductModifiersResponses];
export type CreateProductModifierData = {
    body?: ProductModifierPost;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/modifiers';
};
export type CreateProductModifierErrors = {
    409: CreateProductModifierRequestConflictError;
    422: CreateProductModifierRequestUnprocessableEntityError;
};
export type CreateProductModifierError = CreateProductModifierErrors[keyof CreateProductModifierErrors];
export type CreateProductModifierResponses = {
    200: ProductModifiersCreateProductModifierResponse200;
};
export type CreateProductModifierResponse = CreateProductModifierResponses[keyof CreateProductModifierResponses];
export type DeleteProductModifierData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}';
};
export type DeleteProductModifierResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteProductModifierResponse = DeleteProductModifierResponses[keyof DeleteProductModifierResponses];
export type GetProductModifierData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}';
};
export type GetProductModifierErrors = {
    404: GetProductModifierRequestNotFoundError;
};
export type GetProductModifierError = GetProductModifierErrors[keyof GetProductModifierErrors];
export type GetProductModifierResponses = {
    200: ProductModifiersGetProductModifierResponse200;
};
export type GetProductModifierResponse = GetProductModifierResponses[keyof GetProductModifierResponses];
export type UpdateProductModifierData = {
    body?: {
        type?: CatalogProductsProductIdModifiersModifierIdPutRequestBodyContentApplicationJsonSchemaType;
        required?: boolean;
        sort_order?: number;
        config?: CatalogProductsProductIdModifiersModifierIdPutRequestBodyContentApplicationJsonSchemaConfig;
        option_values?: Array<ProductModifierOptionValueFull>;
        display_name?: string;
    };
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}';
};
export type UpdateProductModifierErrors = {
    409: UpdateProductModifierRequestConflictError;
    422: UpdateProductModifierRequestUnprocessableEntityError;
};
export type UpdateProductModifierError = UpdateProductModifierErrors[keyof UpdateProductModifierErrors];
export type UpdateProductModifierResponses = {
    200: ProductModifiersUpdateProductModifierResponse200;
};
export type UpdateProductModifierResponse = UpdateProductModifierResponses[keyof UpdateProductModifierResponses];
export type CreateProductModifierImageData = {
    body?: {
        image_file: Blob | File;
    };
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
        value_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}/image';
};
export type CreateProductModifierImageErrors = {
    400: CreateProductModifierImageRequestBadRequestError;
    404: CreateProductModifierImageRequestNotFoundError;
    422: CreateProductModifierImageRequestUnprocessableEntityError;
};
export type CreateProductModifierImageError = CreateProductModifierImageErrors[keyof CreateProductModifierImageErrors];
export type CreateProductModifierImageResponses = {
    200: ImagesCreateProductModifierImageResponse200;
};
export type CreateProductModifierImageResponse = CreateProductModifierImageResponses[keyof CreateProductModifierImageResponses];
export type GetProductModifierValuesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
        page?: number;
        limit?: number;
    };
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}/values';
};
export type GetProductModifierValuesResponses = {
    200: ValuesGetProductModifierValuesResponse200;
};
export type GetProductModifierValuesResponse = GetProductModifierValuesResponses[keyof GetProductModifierValuesResponses];
export type CreateProductModifierValueData = {
    body?: {
        is_default?: boolean;
        label: string;
        sort_order: number;
        value_data?: CatalogProductsProductIdModifiersModifierIdValuesPostRequestBodyContentApplicationJsonSchemaValueData;
        adjusters?: CatalogProductsProductIdModifiersModifierIdValuesPostRequestBodyContentApplicationJsonSchemaAdjusters;
    };
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}/values';
};
export type CreateProductModifierValueErrors = {
    422: CreateProductModifierValueRequestUnprocessableEntityError;
};
export type CreateProductModifierValueError = CreateProductModifierValueErrors[keyof CreateProductModifierValueErrors];
export type CreateProductModifierValueResponses = {
    200: ValuesCreateProductModifierValueResponse200;
};
export type CreateProductModifierValueResponse = CreateProductModifierValueResponses[keyof CreateProductModifierValueResponses];
export type DeleteProductModifierValueData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
        value_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}';
};
export type DeleteProductModifierValueResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteProductModifierValueResponse = DeleteProductModifierValueResponses[keyof DeleteProductModifierValueResponses];
export type GetProductModifierValueData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
        value_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}';
};
export type GetProductModifierValueErrors = {
    404: GetProductModifierValueRequestNotFoundError;
};
export type GetProductModifierValueError = GetProductModifierValueErrors[keyof GetProductModifierValueErrors];
export type GetProductModifierValueResponses = {
    200: ValuesGetProductModifierValueResponse200;
};
export type GetProductModifierValueResponse = GetProductModifierValueResponses[keyof GetProductModifierValueResponses];
export type UpdateProductModifierValueData = {
    body?: {
        is_default?: boolean;
        label: string;
        sort_order: number;
        value_data?: CatalogProductsProductIdModifiersModifierIdValuesValueIdPutRequestBodyContentApplicationJsonSchemaValueData;
        adjusters?: CatalogProductsProductIdModifiersModifierIdValuesValueIdPutRequestBodyContentApplicationJsonSchemaAdjusters;
        id?: number;
    };
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        modifier_id: number;
        value_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/modifiers/{modifier_id}/values/{value_id}';
};
export type UpdateProductModifierValueErrors = {
    422: UpdateProductModifierValueRequestUnprocessableEntityError;
};
export type UpdateProductModifierValueError = UpdateProductModifierValueErrors[keyof UpdateProductModifierValueErrors];
export type UpdateProductModifierValueResponses = {
    200: ValuesUpdateProductModifierValueResponse200;
};
export type UpdateProductModifierValueResponse = UpdateProductModifierValueResponses[keyof UpdateProductModifierValueResponses];
