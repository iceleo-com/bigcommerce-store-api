export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type ProductVariantOptionValueFull = {
    id?: number;
    option_id?: number;
    option_display_name?: string;
    label?: string;
};
export type ProductVariantFull = {
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
    id?: number;
    product_id?: number;
    sku?: string;
    sku_id?: number | null;
    option_values?: Array<ProductVariantOptionValueFull>;
    calculated_price?: number;
    calculated_weight?: number;
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
export type ProductVariantsGetProductVariantsResponse200 = {
    data?: Array<ProductVariantFull>;
    meta?: MetaCollectionFull;
};
export type GetProductVariantsRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
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
    product_id?: number;
    sku?: string;
    option_values?: Array<ProductVariantOptionValueFull>;
};
export type MetaEmptyFull = {
    [key: string]: unknown;
};
export type ProductVariantsCreateProductVariantResponse200 = {
    data?: ProductVariantFull;
    meta?: MetaEmptyFull;
};
export type CreateProductVariantRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type ProductVariantsGetProductVariantResponse200 = {
    data?: ProductVariantFull;
    meta?: MetaEmptyFull;
};
export type GetProductVariantRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type ProductVariantPut = {
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
    product_id?: number;
    sku?: string;
};
export type ProductVariantsUpdateProductVariantResponse200 = {
    data?: ProductVariantFull;
    meta?: MetaEmptyFull;
};
export type UpdateProductVariantRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogVariantsMetafieldsGetParametersDirection = 'asc' | 'desc';
export type CatalogVariantsMetafieldsGetParametersIncludeFieldsSchemaItems = 'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date_modified';
export type MetafieldPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldResourceType = 'brand' | 'product' | 'variant' | 'category' | 'cart' | 'channel' | 'location' | 'order' | 'customer';
export type Metafield = {
    id?: number;
    key?: string;
    value?: string;
    namespace?: string;
    permission_set?: MetafieldPermissionSet;
    resource_type?: MetafieldResourceType;
    resource_id?: number;
    description?: string;
    date_created?: string;
    date_modified?: string;
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
export type CatalogVariantsMetafieldsPostRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type CatalogVariantsMetafieldsPostRequestBodyContentApplicationJsonSchemaItems = {
    key: string;
    value: string;
    namespace: string;
    permission_set: CatalogVariantsMetafieldsPostRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
    description?: string;
    resource_id: number;
};
export type MetaFieldCollectionResponsePostPut = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: CollectionMeta;
};
export type CreateVariantsMetafieldsRequestBadRequestError = {
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
export type CatalogVariantsMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type CatalogVariantsMetafieldsPutRequestBodyContentApplicationJsonSchemaItems = {
    key?: string;
    value?: string;
    namespace?: string;
    permission_set?: CatalogVariantsMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
    description?: string;
    id: number;
};
export type UpdateVariantsMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type DeleteVariantsMetafieldsRequestBadRequestError = {
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
export type CatalogProductsProductIdVariantsVariantIdImagePostResponsesContentApplicationJsonSchemaData = {
    image_url?: string;
};
export type ImagesCreateProductVariantImageResponse200 = {
    data?: CatalogProductsProductIdVariantsVariantIdImagePostResponsesContentApplicationJsonSchemaData;
    meta?: MetaEmptyFull;
};
export type CreateProductVariantImageRequestBadRequestError = {
    [key: string]: unknown;
};
export type CreateProductVariantImageRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogProductsProductIdVariantsVariantIdImagePostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateProductVariantImageRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdVariantsVariantIdImagePostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CreateProductVariantImageRequestInternalServerError = {
    errors?: CatalogProductsProductIdVariantsVariantIdImagePostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
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
};
export type CategoriesTreeNodeFull = {
    id?: number;
    parent_id?: number;
    name?: string;
    is_visible?: boolean;
    url?: string;
};
export type CategoriesTreeResp = {
    data?: Array<CategoriesTreeNodeFull>;
    meta?: MetaEmptyFull;
};
export type MetafieldsGetProductVariantMetafieldsResponse200 = {
    data?: Array<MetafieldFull>;
    meta?: CategoriesTreeResp;
};
export type MetafieldBase = {
    key: string;
    value: string;
    namespace: string;
    permission_set: MetafieldBasePermissionSet;
    description?: string;
};
export type MetafieldsCreateProductVariantMetafieldResponse200 = {
    data?: MetafieldFull;
    meta?: MetaEmptyFull;
};
export type CreateProductVariantMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type CatalogProductsProductIdVariantsVariantIdMetafieldsPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateProductVariantMetafieldRequestConflictError = {
    errors?: CatalogProductsProductIdVariantsVariantIdMetafieldsPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CreateProductVariantMetafieldRequestUnprocessableEntityError = {
    errors?: CatalogProductsProductIdVariantsVariantIdMetafieldsPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type MetafieldsGetProductVariantMetafieldResponse200 = {
    data?: MetafieldFull;
    meta?: MetaEmptyFull;
};
export type GetProductVariantMetafieldRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type MetafieldsUpdateProductVariantMetafieldResponse200 = {
    data?: MetafieldFull;
    meta?: MetaEmptyFull;
};
export type UpdateProductVariantMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type UpdateProductVariantMetafieldRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DeleteProductVariantMetafieldRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogVariantsGetResponsesContentApplicationJsonSchemaDataItemsOptionValuesItems = {
    option_display_name?: string;
    label?: string;
    id?: number;
    option_id?: number;
};
export type CatalogVariantsGetResponsesContentApplicationJsonSchemaDataItems = {
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
    id?: number;
    product_id?: number;
    sku?: string;
    sku_id?: number;
    option_values?: Array<CatalogVariantsGetResponsesContentApplicationJsonSchemaDataItemsOptionValuesItems>;
    calculated_price?: number;
};
export type VariantsBatchGetVariantsResponse200 = {
    data?: Array<CatalogVariantsGetResponsesContentApplicationJsonSchemaDataItems>;
    meta?: MetaCollectionFull;
};
export type GetVariantsRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CatalogVariantsPutRequestBodyContentApplicationJsonSchemaItems = {
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
    id?: number;
};
export type CatalogVariantsPutResponsesContentApplicationJsonSchemaDataItemsOptionValuesItems = {
    option_display_name?: string;
    label?: string;
    id?: number;
    option_id?: number;
};
export type CatalogVariantsPutResponsesContentApplicationJsonSchemaDataItems = {
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
    id?: number;
    product_id?: number;
    sku?: string;
    sku_id?: number;
    option_values?: Array<CatalogVariantsPutResponsesContentApplicationJsonSchemaDataItemsOptionValuesItems>;
    calculated_price?: number;
};
export type CatalogVariantsPutResponsesContentApplicationJsonSchemaMetaPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type CatalogVariantsPutResponsesContentApplicationJsonSchemaMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: CatalogVariantsPutResponsesContentApplicationJsonSchemaMetaPaginationLinks;
};
export type CatalogVariantsPutResponsesContentApplicationJsonSchemaMeta = {
    pagination?: CatalogVariantsPutResponsesContentApplicationJsonSchemaMetaPagination;
};
export type VariantsBatchUpdateVariantsBatchResponse200 = {
    data?: Array<CatalogVariantsPutResponsesContentApplicationJsonSchemaDataItems>;
    meta?: CatalogVariantsPutResponsesContentApplicationJsonSchemaMeta;
};
export type CatalogVariantsPutResponsesContentApplicationJsonSchemaBatchErrorsItemsErrors = {
    [key: string]: unknown;
};
export type CatalogVariantsPutResponsesContentApplicationJsonSchemaBatchErrorsItems = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: CatalogVariantsPutResponsesContentApplicationJsonSchemaBatchErrorsItemsErrors;
};
export type UpdateVariantsBatchRequestUnprocessableEntityError = {
    batch_errors?: Array<CatalogVariantsPutResponsesContentApplicationJsonSchemaBatchErrorsItems>;
};
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
    404: GetProductVariantsRequestNotFoundError;
};
export type GetProductVariantsError = GetProductVariantsErrors[keyof GetProductVariantsErrors];
export type GetProductVariantsResponses = {
    200: ProductVariantsGetProductVariantsResponse200;
};
export type GetProductVariantsResponse = GetProductVariantsResponses[keyof GetProductVariantsResponses];
export type CreateProductVariantData = {
    body?: ProductVariantPost;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/variants';
};
export type CreateProductVariantErrors = {
    404: CreateProductVariantRequestNotFoundError;
};
export type CreateProductVariantError = CreateProductVariantErrors[keyof CreateProductVariantErrors];
export type CreateProductVariantResponses = {
    200: ProductVariantsCreateProductVariantResponse200;
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
    204: {
        [key: string]: unknown;
    };
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
    404: GetProductVariantRequestNotFoundError;
};
export type GetProductVariantError = GetProductVariantErrors[keyof GetProductVariantErrors];
export type GetProductVariantResponses = {
    200: ProductVariantsGetProductVariantResponse200;
};
export type GetProductVariantResponse = GetProductVariantResponses[keyof GetProductVariantResponses];
export type UpdateProductVariantData = {
    body?: ProductVariantPut;
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
export type UpdateProductVariantErrors = {
    404: UpdateProductVariantRequestNotFoundError;
};
export type UpdateProductVariantError = UpdateProductVariantErrors[keyof UpdateProductVariantErrors];
export type UpdateProductVariantResponses = {
    200: ProductVariantsUpdateProductVariantResponse200;
};
export type UpdateProductVariantResponse = UpdateProductVariantResponses[keyof UpdateProductVariantResponses];
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
    400: DeleteVariantsMetafieldsRequestBadRequestError;
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
        direction?: CatalogVariantsMetafieldsGetParametersDirection;
        include_fields?: Array<CatalogVariantsMetafieldsGetParametersIncludeFieldsSchemaItems>;
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
    body?: Array<CatalogVariantsMetafieldsPostRequestBodyContentApplicationJsonSchemaItems>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/catalog/variants/metafields';
};
export type CreateVariantsMetafieldsErrors = {
    400: CreateVariantsMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateVariantsMetafieldsError = CreateVariantsMetafieldsErrors[keyof CreateVariantsMetafieldsErrors];
export type CreateVariantsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type CreateVariantsMetafieldsResponse = CreateVariantsMetafieldsResponses[keyof CreateVariantsMetafieldsResponses];
export type UpdateVariantsMetafieldsData = {
    body?: Array<CatalogVariantsMetafieldsPutRequestBodyContentApplicationJsonSchemaItems>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/catalog/variants/metafields';
};
export type UpdateVariantsMetafieldsErrors = {
    400: UpdateVariantsMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateVariantsMetafieldsError = UpdateVariantsMetafieldsErrors[keyof UpdateVariantsMetafieldsErrors];
export type UpdateVariantsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type UpdateVariantsMetafieldsResponse = UpdateVariantsMetafieldsResponses[keyof UpdateVariantsMetafieldsResponses];
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
    400: CreateProductVariantImageRequestBadRequestError;
    404: CreateProductVariantImageRequestNotFoundError;
    422: CreateProductVariantImageRequestUnprocessableEntityError;
    500: CreateProductVariantImageRequestInternalServerError;
};
export type CreateProductVariantImageError = CreateProductVariantImageErrors[keyof CreateProductVariantImageErrors];
export type CreateProductVariantImageResponses = {
    200: ImagesCreateProductVariantImageResponse200;
};
export type CreateProductVariantImageResponse = CreateProductVariantImageResponses[keyof CreateProductVariantImageResponses];
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
        'resource_id:in'?: string;
    };
    url: '/catalog/products/{product_id}/variants/{variant_id}/metafields';
};
export type GetProductVariantMetafieldsResponses = {
    200: MetafieldsGetProductVariantMetafieldsResponse200;
};
export type GetProductVariantMetafieldsResponse = GetProductVariantMetafieldsResponses[keyof GetProductVariantMetafieldsResponses];
export type CreateProductVariantMetafieldData = {
    body?: MetafieldBase;
    headers: {
        Accept: string;
    };
    path: {
        product_id: number;
        variant_id: number;
    };
    query?: never;
    url: '/catalog/products/{product_id}/variants/{variant_id}/metafields';
};
export type CreateProductVariantMetafieldErrors = {
    400: CreateProductVariantMetafieldRequestBadRequestError;
    409: CreateProductVariantMetafieldRequestConflictError;
    422: CreateProductVariantMetafieldRequestUnprocessableEntityError;
};
export type CreateProductVariantMetafieldError = CreateProductVariantMetafieldErrors[keyof CreateProductVariantMetafieldErrors];
export type CreateProductVariantMetafieldResponses = {
    200: MetafieldsCreateProductVariantMetafieldResponse200;
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
    404: DeleteProductVariantMetafieldRequestNotFoundError;
};
export type DeleteProductVariantMetafieldError = DeleteProductVariantMetafieldErrors[keyof DeleteProductVariantMetafieldErrors];
export type DeleteProductVariantMetafieldResponses = {
    204: {
        [key: string]: unknown;
    };
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
    404: GetProductVariantMetafieldRequestNotFoundError;
};
export type GetProductVariantMetafieldError = GetProductVariantMetafieldErrors[keyof GetProductVariantMetafieldErrors];
export type GetProductVariantMetafieldResponses = {
    200: MetafieldsGetProductVariantMetafieldResponse200;
};
export type GetProductVariantMetafieldResponse = GetProductVariantMetafieldResponses[keyof GetProductVariantMetafieldResponses];
export type UpdateProductVariantMetafieldData = {
    body?: MetafieldBase;
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
export type UpdateProductVariantMetafieldErrors = {
    400: UpdateProductVariantMetafieldRequestBadRequestError;
    404: UpdateProductVariantMetafieldRequestNotFoundError;
};
export type UpdateProductVariantMetafieldError = UpdateProductVariantMetafieldErrors[keyof UpdateProductVariantMetafieldErrors];
export type UpdateProductVariantMetafieldResponses = {
    200: MetafieldsUpdateProductVariantMetafieldResponse200;
};
export type UpdateProductVariantMetafieldResponse = UpdateProductVariantMetafieldResponses[keyof UpdateProductVariantMetafieldResponses];
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
    404: GetVariantsRequestNotFoundError;
};
export type GetVariantsError = GetVariantsErrors[keyof GetVariantsErrors];
export type GetVariantsResponses = {
    200: VariantsBatchGetVariantsResponse200;
};
export type GetVariantsResponse = GetVariantsResponses[keyof GetVariantsResponses];
export type UpdateVariantsBatchData = {
    body?: Array<CatalogVariantsPutRequestBodyContentApplicationJsonSchemaItems>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/catalog/variants';
};
export type UpdateVariantsBatchErrors = {
    422: UpdateVariantsBatchRequestUnprocessableEntityError;
};
export type UpdateVariantsBatchError = UpdateVariantsBatchErrors[keyof UpdateVariantsBatchErrors];
export type UpdateVariantsBatchResponses = {
    200: VariantsBatchUpdateVariantsBatchResponse200;
};
export type UpdateVariantsBatchResponse = UpdateVariantsBatchResponses[keyof UpdateVariantsBatchResponses];
