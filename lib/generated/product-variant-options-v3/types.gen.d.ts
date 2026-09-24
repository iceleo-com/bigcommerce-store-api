export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
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
export type ProductOptionFull = {
    id?: number | null;
    product_id?: number;
    display_name?: string;
    type?: ProductOptionBaseType;
    config?: ProductOptionConfigFull | [];
    sort_order?: number;
    option_values?: Array<ProductOptionOptionValueFull>;
    name?: string;
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
export type ProductVariantOptionsGetProductVariantOptionsResponse200 = {
    data?: Array<ProductOptionFull>;
    meta?: MetaCollectionFull;
};
export type GetProductVariantOptionsRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdOptionsPostRequestBodyContentApplicationJsonSchemaType = 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
export type CatalogProductsProductIdOptionsPostRequestBodyContentApplicationJsonSchemaConfigDateLimitMode = 'earliest' | 'range' | 'latest';
export type CatalogProductsProductIdOptionsPostRequestBodyContentApplicationJsonSchemaConfigFileTypesMode = 'specific' | 'all';
export type CatalogProductsProductIdOptionsPostRequestBodyContentApplicationJsonSchemaConfigNumberLimitMode = 'lowest' | 'highest' | 'range';
export type CatalogProductsProductIdOptionsPostRequestBodyContentApplicationJsonSchemaConfigProductListShippingCalc = 'none' | 'weight' | 'package';
export type CatalogProductsProductIdOptionsPostRequestBodyContentApplicationJsonSchemaConfig = {
    default_value?: string;
    checked_by_default?: boolean;
    checkbox_label?: string;
    date_limited?: boolean;
    date_limit_mode?: CatalogProductsProductIdOptionsPostRequestBodyContentApplicationJsonSchemaConfigDateLimitMode;
    date_earliest_value?: string;
    date_latest_value?: string;
    file_types_mode?: CatalogProductsProductIdOptionsPostRequestBodyContentApplicationJsonSchemaConfigFileTypesMode;
    file_types_supported?: Array<string>;
    file_types_other?: Array<string>;
    file_max_size?: number;
    text_characters_limited?: boolean;
    text_min_length?: number;
    text_max_length?: number;
    text_lines_limited?: boolean;
    text_max_lines?: number;
    number_limited?: boolean;
    number_limit_mode?: CatalogProductsProductIdOptionsPostRequestBodyContentApplicationJsonSchemaConfigNumberLimitMode;
    number_lowest_value?: number;
    number_highest_value?: number;
    number_integers_only?: boolean;
    product_list_adjusts_inventory?: boolean;
    product_list_adjusts_pricing?: boolean;
    product_list_shipping_calc?: CatalogProductsProductIdOptionsPostRequestBodyContentApplicationJsonSchemaConfigProductListShippingCalc;
};
export type CatalogProductsProductIdOptionsPostRequestBodyContentApplicationJsonSchemaOptionValuesItemsValueData = {
    [key: string]: unknown;
};
export type CatalogProductsProductIdOptionsPostRequestBodyContentApplicationJsonSchemaOptionValuesItems = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: CatalogProductsProductIdOptionsPostRequestBodyContentApplicationJsonSchemaOptionValuesItemsValueData;
    id?: number;
};
export type CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaDataType = 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
export type CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaDataConfigDateLimitMode = 'earliest' | 'range' | 'latest';
export type CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaDataConfigFileTypesMode = 'specific' | 'all';
export type CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaDataConfigNumberLimitMode = 'lowest' | 'highest' | 'range';
export type CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaDataConfigProductListShippingCalc = 'none' | 'weight' | 'package';
export type CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaDataConfig = {
    default_value?: string;
    checked_by_default?: boolean;
    checkbox_label?: string;
    date_limited?: boolean;
    date_limit_mode?: CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaDataConfigDateLimitMode;
    date_earliest_value?: string;
    date_latest_value?: string;
    file_types_mode?: CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaDataConfigFileTypesMode;
    file_types_supported?: Array<string>;
    file_types_other?: Array<string>;
    file_max_size?: number;
    text_characters_limited?: boolean;
    text_min_length?: number;
    text_max_length?: number;
    text_lines_limited?: boolean;
    text_max_lines?: number;
    number_limited?: boolean;
    number_limit_mode?: CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaDataConfigNumberLimitMode;
    number_lowest_value?: number;
    number_highest_value?: number;
    number_integers_only?: boolean;
    product_list_adjusts_inventory?: boolean;
    product_list_adjusts_pricing?: boolean;
    product_list_shipping_calc?: CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaDataConfigProductListShippingCalc;
};
export type CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaDataOptionValuesItemsValueData = {
    [key: string]: unknown;
};
export type CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaDataOptionValuesItems = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaDataOptionValuesItemsValueData | null;
    id?: number;
};
export type CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaData = {
    id?: number;
    product_id?: number;
    display_name?: string;
    type?: CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaDataType;
    config?: CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaDataConfig | [];
    sort_order?: number;
    option_values?: Array<CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaDataOptionValuesItems>;
    image_url?: string;
    name?: string;
};
export type CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type ProductVariantOptionsCreateProductVariantOptionResponse200 = {
    data?: CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaData;
    meta?: CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaMeta;
};
export type CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateProductVariantOptionRequestConflictError = {
    errors?: CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CreateProductVariantOptionRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdOptionsPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type MetaEmptyFull = {
    [key: string]: unknown;
};
export type ProductVariantOptionsGetProductVariantOptionResponse200 = {
    data?: ProductOptionFull;
    meta?: MetaEmptyFull;
};
export type GetProductVariantOptionRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdOptionsOptionIdPutRequestBodyContentApplicationJsonSchemaType = 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
export type CatalogProductsProductIdOptionsOptionIdPutRequestBodyContentApplicationJsonSchemaConfigDateLimitMode = 'earliest' | 'range' | 'latest';
export type CatalogProductsProductIdOptionsOptionIdPutRequestBodyContentApplicationJsonSchemaConfigFileTypesMode = 'specific' | 'all';
export type CatalogProductsProductIdOptionsOptionIdPutRequestBodyContentApplicationJsonSchemaConfigNumberLimitMode = 'lowest' | 'highest' | 'range';
export type CatalogProductsProductIdOptionsOptionIdPutRequestBodyContentApplicationJsonSchemaConfigProductListShippingCalc = 'none' | 'weight' | 'package';
export type CatalogProductsProductIdOptionsOptionIdPutRequestBodyContentApplicationJsonSchemaConfig = {
    default_value?: string;
    checked_by_default?: boolean;
    checkbox_label?: string;
    date_limited?: boolean;
    date_limit_mode?: CatalogProductsProductIdOptionsOptionIdPutRequestBodyContentApplicationJsonSchemaConfigDateLimitMode;
    date_earliest_value?: string;
    date_latest_value?: string;
    file_types_mode?: CatalogProductsProductIdOptionsOptionIdPutRequestBodyContentApplicationJsonSchemaConfigFileTypesMode;
    file_types_supported?: Array<string>;
    file_types_other?: Array<string>;
    file_max_size?: number;
    text_characters_limited?: boolean;
    text_min_length?: number;
    text_max_length?: number;
    text_lines_limited?: boolean;
    text_max_lines?: number;
    number_limited?: boolean;
    number_limit_mode?: CatalogProductsProductIdOptionsOptionIdPutRequestBodyContentApplicationJsonSchemaConfigNumberLimitMode;
    number_lowest_value?: number;
    number_highest_value?: number;
    number_integers_only?: boolean;
    product_list_adjusts_inventory?: boolean;
    product_list_adjusts_pricing?: boolean;
    product_list_shipping_calc?: CatalogProductsProductIdOptionsOptionIdPutRequestBodyContentApplicationJsonSchemaConfigProductListShippingCalc;
};
export type CatalogProductsProductIdOptionsOptionIdPutRequestBodyContentApplicationJsonSchemaOptionValuesItemsValueData = {
    [key: string]: unknown;
};
export type CatalogProductsProductIdOptionsOptionIdPutRequestBodyContentApplicationJsonSchemaOptionValuesItems = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: CatalogProductsProductIdOptionsOptionIdPutRequestBodyContentApplicationJsonSchemaOptionValuesItemsValueData;
    id?: number;
};
export type CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaDataType = 'radio_buttons' | 'rectangles' | 'dropdown' | 'product_list' | 'product_list_with_images' | 'swatch';
export type CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaDataConfigDateLimitMode = 'earliest' | 'range' | 'latest';
export type CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaDataConfigFileTypesMode = 'specific' | 'all';
export type CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaDataConfigNumberLimitMode = 'lowest' | 'highest' | 'range';
export type CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaDataConfigProductListShippingCalc = 'none' | 'weight' | 'package';
export type CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaDataConfig = {
    default_value?: string;
    checked_by_default?: boolean;
    checkbox_label?: string;
    date_limited?: boolean;
    date_limit_mode?: CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaDataConfigDateLimitMode;
    date_earliest_value?: string;
    date_latest_value?: string;
    file_types_mode?: CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaDataConfigFileTypesMode;
    file_types_supported?: Array<string>;
    file_types_other?: Array<string>;
    file_max_size?: number;
    text_characters_limited?: boolean;
    text_min_length?: number;
    text_max_length?: number;
    text_lines_limited?: boolean;
    text_max_lines?: number;
    number_limited?: boolean;
    number_limit_mode?: CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaDataConfigNumberLimitMode;
    number_lowest_value?: number;
    number_highest_value?: number;
    number_integers_only?: boolean;
    product_list_adjusts_inventory?: boolean;
    product_list_adjusts_pricing?: boolean;
    product_list_shipping_calc?: CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaDataConfigProductListShippingCalc;
};
export type CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaDataOptionValuesItemsValueData = {
    [key: string]: unknown;
};
export type CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaDataOptionValuesItems = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaDataOptionValuesItemsValueData | null;
    id?: number;
};
export type CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaData = {
    id?: number;
    product_id?: number;
    display_name?: string;
    type?: CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaDataType;
    config?: CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaDataConfig | [];
    sort_order?: number;
    option_values?: Array<CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaDataOptionValuesItems>;
    image_url?: string;
    name?: string;
};
export type ProductVariantOptionsUpdateProductVariantOptionResponse200 = {
    data?: CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type UpdateProductVariantOptionRequestConflictError = {
    errors?: CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type UpdateProductVariantOptionRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdOptionsOptionIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CatalogProductsProductIdOptionsOptionIdValuesGetParametersIncludeFieldsSchemaItems = 'label' | 'sort_order' | 'value_data' | 'is_default';
export type CatalogProductsProductIdOptionsOptionIdValuesGetParametersExcludeFieldsSchemaItems = 'label' | 'sort_order' | 'value_data' | 'is_default';
export type CatalogProductsProductIdOptionsOptionIdValuesGetResponsesContentApplicationJsonSchemaDataItemsValueData = {
    [key: string]: unknown;
};
export type CatalogProductsProductIdOptionsOptionIdValuesGetResponsesContentApplicationJsonSchemaDataItems = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: CatalogProductsProductIdOptionsOptionIdValuesGetResponsesContentApplicationJsonSchemaDataItemsValueData | null;
    id?: number;
};
export type ValuesGetProductVariantOptionValuesResponse200 = {
    data?: Array<CatalogProductsProductIdOptionsOptionIdValuesGetResponsesContentApplicationJsonSchemaDataItems>;
    meta?: MetaCollectionFull;
};
export type CatalogProductsProductIdOptionsOptionIdValuesPostRequestBodyContentApplicationJsonSchemaValueData = {
    [key: string]: unknown;
};
export type CatalogProductsProductIdOptionsOptionIdValuesPostResponsesContentApplicationJsonSchemaDataValueData = {
    [key: string]: unknown;
};
export type CatalogProductsProductIdOptionsOptionIdValuesPostResponsesContentApplicationJsonSchemaData = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: CatalogProductsProductIdOptionsOptionIdValuesPostResponsesContentApplicationJsonSchemaDataValueData | null;
    id?: number;
};
export type ValuesCreateProductVariantOptionValueResponse200 = {
    data?: CatalogProductsProductIdOptionsOptionIdValuesPostResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type CatalogProductsProductIdOptionsOptionIdValuesPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateProductVariantOptionValueRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdOptionsOptionIdValuesPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CatalogProductsProductIdOptionsOptionIdValuesValueIdGetParametersIncludeFieldsSchemaItems = 'label' | 'sort_order' | 'value_data' | 'is_default';
export type CatalogProductsProductIdOptionsOptionIdValuesValueIdGetParametersExcludeFieldsSchemaItems = 'label' | 'sort_order' | 'value_data' | 'is_default';
export type CatalogProductsProductIdOptionsOptionIdValuesValueIdGetResponsesContentApplicationJsonSchemaDataValueData = {
    [key: string]: unknown;
};
export type CatalogProductsProductIdOptionsOptionIdValuesValueIdGetResponsesContentApplicationJsonSchemaData = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: CatalogProductsProductIdOptionsOptionIdValuesValueIdGetResponsesContentApplicationJsonSchemaDataValueData | null;
    id?: number;
};
export type ValuesGetProductVariantOptionValueResponse200 = {
    data?: CatalogProductsProductIdOptionsOptionIdValuesValueIdGetResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type GetProductVariantOptionValueRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdOptionsOptionIdValuesValueIdPutRequestBodyContentApplicationJsonSchemaValueData = {
    [key: string]: unknown;
};
export type CatalogProductsProductIdOptionsOptionIdValuesValueIdPutResponsesContentApplicationJsonSchemaDataValueData = {
    [key: string]: unknown;
};
export type CatalogProductsProductIdOptionsOptionIdValuesValueIdPutResponsesContentApplicationJsonSchemaData = {
    is_default?: boolean;
    label: string;
    sort_order: number;
    value_data?: CatalogProductsProductIdOptionsOptionIdValuesValueIdPutResponsesContentApplicationJsonSchemaDataValueData | null;
    id?: number;
};
export type ValuesUpdateProductVariantOptionValueResponse200 = {
    data?: CatalogProductsProductIdOptionsOptionIdValuesValueIdPutResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type CatalogProductsProductIdOptionsOptionIdValuesValueIdPutResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type UpdateProductVariantOptionValueRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdOptionsOptionIdValuesValueIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CatalogProductsProductIdOptionsOptionIdValuesValueIdDeleteResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type DeleteProductVariantOptionValueRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdOptionsOptionIdValuesValueIdDeleteResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type GetProductVariantOptionsData = {
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
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/options';
};
export type GetProductVariantOptionsErrors = {
    404: GetProductVariantOptionsRequestNotFoundError;
};
export type GetProductVariantOptionsError = GetProductVariantOptionsErrors[keyof GetProductVariantOptionsErrors];
export type GetProductVariantOptionsResponses = {
    200: ProductVariantOptionsGetProductVariantOptionsResponse200;
};
export type GetProductVariantOptionsResponse = GetProductVariantOptionsResponses[keyof GetProductVariantOptionsResponses];
export type CreateProductVariantOptionData = {
    body?: {
        product_id?: number;
        display_name?: string;
        type?: CatalogProductsProductIdOptionsPostRequestBodyContentApplicationJsonSchemaType;
        config?: CatalogProductsProductIdOptionsPostRequestBodyContentApplicationJsonSchemaConfig;
        sort_order?: number;
        option_values?: Array<CatalogProductsProductIdOptionsPostRequestBodyContentApplicationJsonSchemaOptionValuesItems>;
        image_url?: string;
    };
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/options';
};
export type CreateProductVariantOptionErrors = {
    409: CreateProductVariantOptionRequestConflictError;
    422: CreateProductVariantOptionRequestUnprocessableEntityError;
};
export type CreateProductVariantOptionError = CreateProductVariantOptionErrors[keyof CreateProductVariantOptionErrors];
export type CreateProductVariantOptionResponses = {
    200: ProductVariantOptionsCreateProductVariantOptionResponse200;
};
export type CreateProductVariantOptionResponse = CreateProductVariantOptionResponses[keyof CreateProductVariantOptionResponses];
export type DeleteProductVariantOptionData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        option_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/options/{option_id}';
};
export type DeleteProductVariantOptionResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteProductVariantOptionResponse = DeleteProductVariantOptionResponses[keyof DeleteProductVariantOptionResponses];
export type GetProductVariantOptionData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        option_id: number;
    };
    query?: {
        include_fields?: Array<string>;
        exclude_fields?: Array<string>;
    };
    url: '/catalog/products/{product_id}/options/{option_id}';
};
export type GetProductVariantOptionErrors = {
    404: GetProductVariantOptionRequestNotFoundError;
};
export type GetProductVariantOptionError = GetProductVariantOptionErrors[keyof GetProductVariantOptionErrors];
export type GetProductVariantOptionResponses = {
    200: ProductVariantOptionsGetProductVariantOptionResponse200;
};
export type GetProductVariantOptionResponse = GetProductVariantOptionResponses[keyof GetProductVariantOptionResponses];
export type UpdateProductVariantOptionData = {
    body?: {
        id?: number | null;
        product_id?: number;
        display_name?: string;
        type?: CatalogProductsProductIdOptionsOptionIdPutRequestBodyContentApplicationJsonSchemaType;
        config?: CatalogProductsProductIdOptionsOptionIdPutRequestBodyContentApplicationJsonSchemaConfig;
        sort_order?: number;
        option_values?: Array<CatalogProductsProductIdOptionsOptionIdPutRequestBodyContentApplicationJsonSchemaOptionValuesItems>;
        image_url?: string;
    };
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        option_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/options/{option_id}';
};
export type UpdateProductVariantOptionErrors = {
    409: UpdateProductVariantOptionRequestConflictError;
    422: UpdateProductVariantOptionRequestUnprocessableEntityError;
};
export type UpdateProductVariantOptionError = UpdateProductVariantOptionErrors[keyof UpdateProductVariantOptionErrors];
export type UpdateProductVariantOptionResponses = {
    200: ProductVariantOptionsUpdateProductVariantOptionResponse200;
};
export type UpdateProductVariantOptionResponse = UpdateProductVariantOptionResponses[keyof UpdateProductVariantOptionResponses];
export type GetProductVariantOptionValuesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        option_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
        include_fields?: Array<CatalogProductsProductIdOptionsOptionIdValuesGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<CatalogProductsProductIdOptionsOptionIdValuesGetParametersExcludeFieldsSchemaItems>;
    };
    url: '/catalog/products/{product_id}/options/{option_id}/values';
};
export type GetProductVariantOptionValuesResponses = {
    200: ValuesGetProductVariantOptionValuesResponse200;
};
export type GetProductVariantOptionValuesResponse = GetProductVariantOptionValuesResponses[keyof GetProductVariantOptionValuesResponses];
export type CreateProductVariantOptionValueData = {
    body?: {
        is_default?: boolean;
        label: string;
        sort_order: number;
        value_data?: CatalogProductsProductIdOptionsOptionIdValuesPostRequestBodyContentApplicationJsonSchemaValueData;
    };
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        option_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/options/{option_id}/values';
};
export type CreateProductVariantOptionValueErrors = {
    422: CreateProductVariantOptionValueRequestUnprocessableEntityError;
};
export type CreateProductVariantOptionValueError = CreateProductVariantOptionValueErrors[keyof CreateProductVariantOptionValueErrors];
export type CreateProductVariantOptionValueResponses = {
    200: ValuesCreateProductVariantOptionValueResponse200;
};
export type CreateProductVariantOptionValueResponse = CreateProductVariantOptionValueResponses[keyof CreateProductVariantOptionValueResponses];
export type DeleteProductVariantOptionValueData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        option_id: number;
        value_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/options/{option_id}/values/{value_id}';
};
export type DeleteProductVariantOptionValueErrors = {
    422: DeleteProductVariantOptionValueRequestUnprocessableEntityError;
};
export type DeleteProductVariantOptionValueError = DeleteProductVariantOptionValueErrors[keyof DeleteProductVariantOptionValueErrors];
export type DeleteProductVariantOptionValueResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteProductVariantOptionValueResponse = DeleteProductVariantOptionValueResponses[keyof DeleteProductVariantOptionValueResponses];
export type GetProductVariantOptionValueData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        option_id: number;
        value_id: number;
    };
    query?: {
        include_fields?: Array<CatalogProductsProductIdOptionsOptionIdValuesValueIdGetParametersIncludeFieldsSchemaItems>;
        exclude_fields?: Array<CatalogProductsProductIdOptionsOptionIdValuesValueIdGetParametersExcludeFieldsSchemaItems>;
    };
    url: '/catalog/products/{product_id}/options/{option_id}/values/{value_id}';
};
export type GetProductVariantOptionValueErrors = {
    404: GetProductVariantOptionValueRequestNotFoundError;
};
export type GetProductVariantOptionValueError = GetProductVariantOptionValueErrors[keyof GetProductVariantOptionValueErrors];
export type GetProductVariantOptionValueResponses = {
    200: ValuesGetProductVariantOptionValueResponse200;
};
export type GetProductVariantOptionValueResponse = GetProductVariantOptionValueResponses[keyof GetProductVariantOptionValueResponses];
export type UpdateProductVariantOptionValueData = {
    body?: {
        is_default?: boolean;
        label: string;
        sort_order: number;
        value_data?: CatalogProductsProductIdOptionsOptionIdValuesValueIdPutRequestBodyContentApplicationJsonSchemaValueData;
        id?: number;
    };
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        option_id: number;
        value_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/options/{option_id}/values/{value_id}';
};
export type UpdateProductVariantOptionValueErrors = {
    422: UpdateProductVariantOptionValueRequestUnprocessableEntityError;
};
export type UpdateProductVariantOptionValueError = UpdateProductVariantOptionValueErrors[keyof UpdateProductVariantOptionValueErrors];
export type UpdateProductVariantOptionValueResponses = {
    200: ValuesUpdateProductVariantOptionValueResponse200;
};
export type UpdateProductVariantOptionValueResponse = UpdateProductVariantOptionValueResponses[keyof UpdateProductVariantOptionValueResponses];
