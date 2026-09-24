export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type LayerItem = {
    price_list_id?: number;
};
export type PricelistsGetResponsesContentApplicationJsonSchemaDataItems = {
    id?: number;
    date_created?: string;
    date_modified?: string;
    name: string;
    active?: boolean;
    layers?: Array<LayerItem>;
};
export type PricelistsGetResponsesContentApplicationJsonSchemaMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
};
export type PricelistsGetResponsesContentApplicationJsonSchemaMetaCursorPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type PricelistsGetResponsesContentApplicationJsonSchemaMetaCursorPagination = {
    count?: number;
    per_page?: number;
    start_cursor?: string;
    end_cursor?: string;
    links?: PricelistsGetResponsesContentApplicationJsonSchemaMetaCursorPaginationLinks;
};
export type PricelistsGetResponsesContentApplicationJsonSchemaMeta = {
    pagination?: PricelistsGetResponsesContentApplicationJsonSchemaMetaPagination;
    cursor_pagination?: PricelistsGetResponsesContentApplicationJsonSchemaMetaCursorPagination;
};
export type PriceListsGetPriceListsResponse200 = {
    data?: Array<PricelistsGetResponsesContentApplicationJsonSchemaDataItems>;
    meta?: PricelistsGetResponsesContentApplicationJsonSchemaMeta;
};
export type PricelistsPostResponsesContentApplicationJsonSchemaData = {
    id?: number;
    date_created?: string;
    date_modified?: string;
    name: string;
    active?: boolean;
    layers?: Array<LayerItem>;
};
export type Meta = {
    [key: string]: unknown;
};
export type PriceListsCreatePriceListResponse200 = {
    data?: PricelistsPostResponsesContentApplicationJsonSchemaData;
    meta?: Meta;
};
export type PricelistsPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreatePriceListRequestConflictError = {
    errors?: PricelistsPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CreatePriceListRequestUnprocessableEntityError = {
    errors?: PricelistsPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type ServiceUnavailableErrorError = {
    code?: string;
    message?: string;
    details?: string;
    retry_after_seconds?: number;
    timestamp?: string;
};
export type ServiceUnavailableError = {
    error?: ServiceUnavailableErrorError;
};
export type PricelistsPriceListIdGetResponsesContentApplicationJsonSchemaData = {
    id?: number;
    date_created?: string;
    date_modified?: string;
    name: string;
    active?: boolean;
    layers?: Array<LayerItem>;
};
export type PriceListsGetPriceListResponse200 = {
    data?: PricelistsPriceListIdGetResponsesContentApplicationJsonSchemaData;
    meta?: Meta;
};
export type PricelistsPriceListIdPutResponsesContentApplicationJsonSchemaData = {
    id?: number;
    date_created?: string;
    date_modified?: string;
    name: string;
    active?: boolean;
    layers?: Array<LayerItem>;
};
export type PriceListsUpdatePriceListResponse200 = {
    data?: PricelistsPriceListIdPutResponsesContentApplicationJsonSchemaData;
    meta?: Meta;
};
export type UpdatePriceListRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type PricelistsPriceListIdPutResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type UpdatePriceListRequestConflictError = {
    errors?: PricelistsPriceListIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type UpdatePriceListRequestUnprocessableEntityError = {
    errors?: PricelistsPriceListIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type AssignmentForGetResponse = {
    id?: number;
    price_list_id?: number;
    customer_group_id?: number;
    channel_id?: number;
};
export type CollectionMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
};
export type CollectionMetaCursorPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type CollectionMetaCursorPagination = {
    count?: number;
    per_page?: number;
    start_cursor?: string;
    end_cursor?: string;
    links?: CollectionMetaCursorPaginationLinks;
};
export type CollectionMeta = {
    pagination?: CollectionMetaPagination;
    cursor_pagination?: CollectionMetaCursorPagination;
};
export type AssignmentsForGetResponse = {
    data?: Array<AssignmentForGetResponse>;
    meta?: CollectionMeta;
};
export type AssignmentsForRequest = {
    price_list_id: number;
    customer_group_id?: number;
    channel_id?: number;
};
export type CreateBatchPriceListAssignmentsRequest = Array<AssignmentsForRequest>;
export type PriceListsAssignmentsCreatePriceListAssignmentsResponse200 = {
    [key: string]: unknown;
};
export type PriceListAssignmentsBatchErrorResponseErrors = {
    [key: string]: unknown;
};
export type PriceListAssignmentsBatchErrorResponseMeta = {
    saved_records?: number;
};
export type PriceListAssignmentsBatchErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    errors?: PriceListAssignmentsBatchErrorResponseErrors;
    meta?: PriceListAssignmentsBatchErrorResponseMeta;
};
export type AssignmentForPutRequest = {
    customer_group_id: number;
    channel_id: number;
};
export type AssignmentForPutResponseData = {
    id?: number;
    price_list_id?: number;
    customer_group_id?: number;
    channel_id?: number;
};
export type AssignmentForPutResponse = {
    data?: AssignmentForPutResponseData;
    meta?: Meta;
};
export type BulkPricingTierType = 'fixed' | 'price' | 'percent';
export type BulkPricingTier = {
    quantity_min?: number;
    quantity_max?: number;
    type?: BulkPricingTierType;
    amount?: number;
};
export type PriceRecordBatchItem = {
    price_list_id: number;
    variant_id?: number;
    sku?: string;
    currency: string;
    price?: number;
    sale_price?: number;
    retail_price?: number;
    map_price?: number;
    bulk_pricing_tiers?: Array<BulkPricingTier>;
};
export type SuccessBatchResponseData = {
    [key: string]: unknown;
};
export type SuccessBatchResponseMeta = {
    [key: string]: unknown;
};
export type SuccessBatchResponse = {
    data?: SuccessBatchResponseData;
    meta?: SuccessBatchResponseMeta;
};
export type PriceRecordIdentifiers = {
    price_list_id?: number;
    variant_id?: number;
    sku?: string;
    currency?: string;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type PriceRecordBatchErrorResponse = {
    data?: PriceRecordIdentifiers;
    field_errors?: DetailedErrors;
};
export type PricelistsPriceListIdRecordsGetParametersIncludeSchemaItems = 'bulk_pricing_tiers' | 'sku';
export type PricelistsPriceListIdRecordsGetResponsesContentApplicationJsonSchemaDataItemsBulkPricingTiersItemsType = 'fixed' | 'price' | 'percent';
export type PricelistsPriceListIdRecordsGetResponsesContentApplicationJsonSchemaDataItemsBulkPricingTiersItems = {
    quantity_min?: number;
    quantity_max?: number | null;
    type?: PricelistsPriceListIdRecordsGetResponsesContentApplicationJsonSchemaDataItemsBulkPricingTiersItemsType;
    amount?: number;
};
export type PricelistsPriceListIdRecordsGetResponsesContentApplicationJsonSchemaDataItems = {
    calculated_price?: number;
    date_created?: string;
    date_modified?: string;
    product_id?: number;
    price_list_id?: number;
    variant_id?: number;
    sku?: string;
    currency?: string;
    price?: number;
    sale_price?: number;
    retail_price?: number;
    map_price?: number;
    bulk_pricing_tiers?: Array<PricelistsPriceListIdRecordsGetResponsesContentApplicationJsonSchemaDataItemsBulkPricingTiersItems>;
};
export type PricelistsPriceListIdRecordsGetResponsesContentApplicationJsonSchemaMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
};
export type PricelistsPriceListIdRecordsGetResponsesContentApplicationJsonSchemaMetaCursorPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type PricelistsPriceListIdRecordsGetResponsesContentApplicationJsonSchemaMetaCursorPagination = {
    count?: number;
    per_page?: number;
    start_cursor?: string;
    end_cursor?: string;
    links?: PricelistsPriceListIdRecordsGetResponsesContentApplicationJsonSchemaMetaCursorPaginationLinks;
};
export type PricelistsPriceListIdRecordsGetResponsesContentApplicationJsonSchemaMeta = {
    pagination?: PricelistsPriceListIdRecordsGetResponsesContentApplicationJsonSchemaMetaPagination;
    cursor_pagination?: PricelistsPriceListIdRecordsGetResponsesContentApplicationJsonSchemaMetaCursorPagination;
};
export type PriceListsRecordsGetPriceListRecordsResponse200 = {
    data?: Array<PricelistsPriceListIdRecordsGetResponsesContentApplicationJsonSchemaDataItems>;
    meta?: PricelistsPriceListIdRecordsGetResponsesContentApplicationJsonSchemaMeta;
};
export type ErrorResponseErrors = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: ErrorResponseErrors;
};
export type PricelistsPriceListIdRecordsPostRequestBodyContentApplicationJsonSchemaItemsBulkPricingTiersItemsType = 'fixed' | 'price' | 'percent';
export type PricelistsPriceListIdRecordsPostRequestBodyContentApplicationJsonSchemaItemsBulkPricingTiersItems = {
    quantity_min?: number;
    quantity_max?: number;
    type?: PricelistsPriceListIdRecordsPostRequestBodyContentApplicationJsonSchemaItemsBulkPricingTiersItemsType;
    amount?: number;
};
export type PricelistsPriceListIdRecordsPostRequestBodyContentApplicationJsonSchemaItems = {
    variant_id?: number;
    sku?: string;
    currency?: string;
    price?: number;
    sale_price?: number;
    retail_price?: number;
    map_price?: number;
    bulk_pricing_tiers?: Array<PricelistsPriceListIdRecordsPostRequestBodyContentApplicationJsonSchemaItemsBulkPricingTiersItems>;
};
export type PricelistsPriceListIdRecordsPostResponsesContentApplicationJsonSchemaData = {
    [key: string]: unknown;
};
export type PricelistsPriceListIdRecordsPostResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type PriceListsRecordsCreatePriceListRecordsResponse200 = {
    data?: PricelistsPriceListIdRecordsPostResponsesContentApplicationJsonSchemaData;
    meta?: PricelistsPriceListIdRecordsPostResponsesContentApplicationJsonSchemaMeta;
};
export type PricelistsPriceListIdRecordsPostResponsesContentApplicationJsonSchemaBatchErrorsItemsData = {
    price_list_id?: number;
    variant_id?: number;
    sku?: string;
    currency?: string;
};
export type PricelistsPriceListIdRecordsPostResponsesContentApplicationJsonSchemaBatchErrorsItemsFieldErrors = {
    [key: string]: unknown;
};
export type PricelistsPriceListIdRecordsPostResponsesContentApplicationJsonSchemaBatchErrorsItems = {
    data?: PricelistsPriceListIdRecordsPostResponsesContentApplicationJsonSchemaBatchErrorsItemsData;
    field_errors?: PricelistsPriceListIdRecordsPostResponsesContentApplicationJsonSchemaBatchErrorsItemsFieldErrors;
};
export type CreatePriceListRecordsRequestUnprocessableEntityError = {
    batch_errors?: Array<PricelistsPriceListIdRecordsPostResponsesContentApplicationJsonSchemaBatchErrorsItems>;
};
export type PricelistsPriceListIdRecordsPutRequestBodyContentApplicationJsonSchemaItemsBulkPricingTiersItemsType = 'fixed' | 'price' | 'percent';
export type PricelistsPriceListIdRecordsPutRequestBodyContentApplicationJsonSchemaItemsBulkPricingTiersItems = {
    quantity_min?: number;
    quantity_max?: number;
    type?: PricelistsPriceListIdRecordsPutRequestBodyContentApplicationJsonSchemaItemsBulkPricingTiersItemsType;
    amount?: number;
};
export type PricelistsPriceListIdRecordsPutRequestBodyContentApplicationJsonSchemaItems = {
    variant_id?: number;
    sku?: string;
    currency?: string;
    price?: number;
    sale_price?: number;
    retail_price?: number;
    map_price?: number;
    bulk_pricing_tiers?: Array<PricelistsPriceListIdRecordsPutRequestBodyContentApplicationJsonSchemaItemsBulkPricingTiersItems>;
};
export type PricelistsPriceListIdRecordsPutResponsesContentApplicationJsonSchemaData = {
    [key: string]: unknown;
};
export type PricelistsPriceListIdRecordsPutResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type PriceListsRecordsUpsertPriceListRecordsResponse200 = {
    data?: PricelistsPriceListIdRecordsPutResponsesContentApplicationJsonSchemaData;
    meta?: PricelistsPriceListIdRecordsPutResponsesContentApplicationJsonSchemaMeta;
};
export type PricelistsPriceListIdRecordsPutResponsesContentApplicationJsonSchemaBatchErrorsItemsData = {
    price_list_id?: number;
    variant_id?: number;
    sku?: string;
    currency?: string;
};
export type PricelistsPriceListIdRecordsPutResponsesContentApplicationJsonSchemaBatchErrorsItemsFieldErrors = {
    [key: string]: unknown;
};
export type PricelistsPriceListIdRecordsPutResponsesContentApplicationJsonSchemaBatchErrorsItems = {
    data?: PricelistsPriceListIdRecordsPutResponsesContentApplicationJsonSchemaBatchErrorsItemsData;
    field_errors?: PricelistsPriceListIdRecordsPutResponsesContentApplicationJsonSchemaBatchErrorsItemsFieldErrors;
};
export type UpsertPriceListRecordsRequestUnprocessableEntityError = {
    batch_errors?: Array<PricelistsPriceListIdRecordsPutResponsesContentApplicationJsonSchemaBatchErrorsItems>;
};
export type PricelistsPriceListIdRecordsVariantIdGetParametersIncludeSchemaItems = 'bulk_pricing_tiers' | 'sku';
export type PricelistsPriceListIdRecordsVariantIdGetResponsesContentApplicationJsonSchemaDataItemsBulkPricingTiersItemsType = 'fixed' | 'price' | 'percent';
export type PricelistsPriceListIdRecordsVariantIdGetResponsesContentApplicationJsonSchemaDataItemsBulkPricingTiersItems = {
    quantity_min?: number;
    quantity_max?: number;
    type?: PricelistsPriceListIdRecordsVariantIdGetResponsesContentApplicationJsonSchemaDataItemsBulkPricingTiersItemsType;
    amount?: number;
};
export type PricelistsPriceListIdRecordsVariantIdGetResponsesContentApplicationJsonSchemaDataItems = {
    calculated_price?: number;
    date_created?: string;
    date_modified?: string;
    product_id?: number;
    price_list_id?: number;
    variant_id?: number;
    sku?: string;
    currency?: string;
    price?: number;
    sale_price?: number;
    retail_price?: number;
    map_price?: number;
    bulk_pricing_tiers?: Array<PricelistsPriceListIdRecordsVariantIdGetResponsesContentApplicationJsonSchemaDataItemsBulkPricingTiersItems>;
};
export type PricelistsPriceListIdRecordsVariantIdGetResponsesContentApplicationJsonSchemaMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
};
export type PricelistsPriceListIdRecordsVariantIdGetResponsesContentApplicationJsonSchemaMetaCursorPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type PricelistsPriceListIdRecordsVariantIdGetResponsesContentApplicationJsonSchemaMetaCursorPagination = {
    count?: number;
    per_page?: number;
    start_cursor?: string;
    end_cursor?: string;
    links?: PricelistsPriceListIdRecordsVariantIdGetResponsesContentApplicationJsonSchemaMetaCursorPaginationLinks;
};
export type PricelistsPriceListIdRecordsVariantIdGetResponsesContentApplicationJsonSchemaMeta = {
    pagination?: PricelistsPriceListIdRecordsVariantIdGetResponsesContentApplicationJsonSchemaMetaPagination;
    cursor_pagination?: PricelistsPriceListIdRecordsVariantIdGetResponsesContentApplicationJsonSchemaMetaCursorPagination;
};
export type PriceListsRecordsGetPriceListRecordsByVariantIdResponse200 = {
    data?: Array<PricelistsPriceListIdRecordsVariantIdGetResponsesContentApplicationJsonSchemaDataItems>;
    meta?: PricelistsPriceListIdRecordsVariantIdGetResponsesContentApplicationJsonSchemaMeta;
};
export type PricelistsPriceListIdRecordsVariantIdCurrencyCodeGetParametersIncludeSchemaItems = 'bulk_pricing_tiers' | 'sku';
export type PricelistsPriceListIdRecordsVariantIdCurrencyCodeGetResponsesContentApplicationJsonSchemaDataBulkPricingTiersItemsType = 'fixed' | 'price' | 'percent';
export type PricelistsPriceListIdRecordsVariantIdCurrencyCodeGetResponsesContentApplicationJsonSchemaDataBulkPricingTiersItems = {
    quantity_min?: number;
    quantity_max?: number;
    type?: PricelistsPriceListIdRecordsVariantIdCurrencyCodeGetResponsesContentApplicationJsonSchemaDataBulkPricingTiersItemsType;
    amount?: number;
};
export type PricelistsPriceListIdRecordsVariantIdCurrencyCodeGetResponsesContentApplicationJsonSchemaData = {
    calculated_price?: number;
    date_created?: string;
    date_modified?: string;
    product_id?: number;
    price_list_id?: number;
    variant_id?: number;
    sku?: string;
    currency?: string;
    price?: number;
    sale_price?: number;
    retail_price?: number;
    map_price?: number;
    bulk_pricing_tiers?: Array<PricelistsPriceListIdRecordsVariantIdCurrencyCodeGetResponsesContentApplicationJsonSchemaDataBulkPricingTiersItems>;
};
export type PriceListsRecordsGetPriceListRecordResponse200 = {
    data?: PricelistsPriceListIdRecordsVariantIdCurrencyCodeGetResponsesContentApplicationJsonSchemaData;
    meta?: Meta;
};
export type PricelistsPriceListIdRecordsVariantIdCurrencyCodePutRequestBodyContentApplicationJsonSchemaBulkPricingTiersItemsType = 'fixed' | 'price' | 'percent';
export type PricelistsPriceListIdRecordsVariantIdCurrencyCodePutRequestBodyContentApplicationJsonSchemaBulkPricingTiersItems = {
    quantity_min?: number;
    quantity_max?: number;
    type?: PricelistsPriceListIdRecordsVariantIdCurrencyCodePutRequestBodyContentApplicationJsonSchemaBulkPricingTiersItemsType;
    amount?: number;
};
export type PricelistsPriceListIdRecordsVariantIdCurrencyCodePutResponsesContentApplicationJsonSchemaDataBulkPricingTiersItemsType = 'fixed' | 'price' | 'percent';
export type PricelistsPriceListIdRecordsVariantIdCurrencyCodePutResponsesContentApplicationJsonSchemaDataBulkPricingTiersItems = {
    quantity_min?: number;
    quantity_max?: number;
    type?: PricelistsPriceListIdRecordsVariantIdCurrencyCodePutResponsesContentApplicationJsonSchemaDataBulkPricingTiersItemsType;
    amount?: number;
};
export type PricelistsPriceListIdRecordsVariantIdCurrencyCodePutResponsesContentApplicationJsonSchemaData = {
    calculated_price?: number;
    date_created?: string;
    date_modified?: string;
    product_id?: number;
    price_list_id?: number;
    variant_id?: number;
    currency?: string;
    price?: number;
    sale_price?: number;
    retail_price?: number;
    map_price?: number;
    bulk_pricing_tiers?: Array<PricelistsPriceListIdRecordsVariantIdCurrencyCodePutResponsesContentApplicationJsonSchemaDataBulkPricingTiersItems>;
};
export type PriceListsRecordsSetPriceListRecordResponse200 = {
    data?: PricelistsPriceListIdRecordsVariantIdCurrencyCodePutResponsesContentApplicationJsonSchemaData;
    meta?: Meta;
};
export type SetPriceListRecordRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type PricelistsPriceListIdRecordsVariantIdCurrencyCodePutResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type SetPriceListRecordRequestConflictError = {
    errors?: PricelistsPriceListIdRecordsVariantIdCurrencyCodePutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type SetPriceListRecordRequestUnprocessableEntityError = {
    errors?: PricelistsPriceListIdRecordsVariantIdCurrencyCodePutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type DeletePriceListsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'id:in'?: Array<number>;
        name?: string;
    };
    url: '/pricelists';
};
export type DeletePriceListsErrors = {
    503: ServiceUnavailableError;
};
export type DeletePriceListsError = DeletePriceListsErrors[keyof DeletePriceListsErrors];
export type DeletePriceListsResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeletePriceListsResponse = DeletePriceListsResponses[keyof DeletePriceListsResponses];
export type GetPriceListsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        name?: string;
        date_created?: string;
        date_modified?: string;
        page?: number;
        limit?: number;
        before?: string;
        after?: string;
        'id:in'?: Array<number>;
        'name:like'?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
    };
    url: '/pricelists';
};
export type GetPriceListsResponses = {
    200: PriceListsGetPriceListsResponse200;
};
export type GetPriceListsResponse = GetPriceListsResponses[keyof GetPriceListsResponses];
export type CreatePriceListData = {
    body?: {
        name: string;
        active?: boolean;
        layers?: Array<LayerItem>;
    };
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/pricelists';
};
export type CreatePriceListErrors = {
    409: CreatePriceListRequestConflictError;
    422: CreatePriceListRequestUnprocessableEntityError;
};
export type CreatePriceListError = CreatePriceListErrors[keyof CreatePriceListErrors];
export type CreatePriceListResponses = {
    200: PriceListsCreatePriceListResponse200;
};
export type CreatePriceListResponse = CreatePriceListResponses[keyof CreatePriceListResponses];
export type DeletePriceListData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
    };
    query?: never;
    url: '/pricelists/{price_list_id}';
};
export type DeletePriceListErrors = {
    503: ServiceUnavailableError;
};
export type DeletePriceListError = DeletePriceListErrors[keyof DeletePriceListErrors];
export type DeletePriceListResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeletePriceListResponse = DeletePriceListResponses[keyof DeletePriceListResponses];
export type GetPriceListData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
    };
    query?: never;
    url: '/pricelists/{price_list_id}';
};
export type GetPriceListResponses = {
    200: PriceListsGetPriceListResponse200;
};
export type GetPriceListResponse = GetPriceListResponses[keyof GetPriceListResponses];
export type UpdatePriceListData = {
    body?: {
        name: string;
        active?: boolean;
        layers?: Array<LayerItem>;
    };
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
    };
    query?: never;
    url: '/pricelists/{price_list_id}';
};
export type UpdatePriceListErrors = {
    404: UpdatePriceListRequestNotFoundError;
    409: UpdatePriceListRequestConflictError;
    422: UpdatePriceListRequestUnprocessableEntityError;
};
export type UpdatePriceListError = UpdatePriceListErrors[keyof UpdatePriceListErrors];
export type UpdatePriceListResponses = {
    200: PriceListsUpdatePriceListResponse200;
};
export type UpdatePriceListResponse = UpdatePriceListResponses[keyof UpdatePriceListResponses];
export type DeletePriceListAssignmentsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        id?: number;
        price_list_id?: number;
        customer_group_id?: number;
        channel_id?: number;
        'channel_id:in'?: Array<number>;
    };
    url: '/pricelists/assignments';
};
export type DeletePriceListAssignmentsResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeletePriceListAssignmentsResponse = DeletePriceListAssignmentsResponses[keyof DeletePriceListAssignmentsResponses];
export type GetListOfPriceListAssignmentsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        id?: number;
        price_list_id?: number;
        customer_group_id?: number;
        channel_id?: number;
        'id:in'?: Array<number>;
        'customer_group_id:in'?: Array<number>;
        'price_list_id:in'?: Array<number>;
        'channel_id:in'?: Array<number>;
        page?: number;
        limit?: number;
        before?: string;
        after?: string;
    };
    url: '/pricelists/assignments';
};
export type GetListOfPriceListAssignmentsResponses = {
    200: AssignmentsForGetResponse;
};
export type GetListOfPriceListAssignmentsResponse = GetListOfPriceListAssignmentsResponses[keyof GetListOfPriceListAssignmentsResponses];
export type CreatePriceListAssignmentsData = {
    body?: CreateBatchPriceListAssignmentsRequest;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/pricelists/assignments';
};
export type CreatePriceListAssignmentsErrors = {
    422: PriceListAssignmentsBatchErrorResponse;
};
export type CreatePriceListAssignmentsError = CreatePriceListAssignmentsErrors[keyof CreatePriceListAssignmentsErrors];
export type CreatePriceListAssignmentsResponses = {
    200: PriceListsAssignmentsCreatePriceListAssignmentsResponse200;
};
export type CreatePriceListAssignmentsResponse = CreatePriceListAssignmentsResponses[keyof CreatePriceListAssignmentsResponses];
export type UpsertPriceListAssignmentData = {
    body?: AssignmentForPutRequest;
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
    };
    query?: never;
    url: '/pricelists/{price_list_id}/assignments';
};
export type UpsertPriceListAssignmentErrors = {
    404: unknown;
};
export type UpsertPriceListAssignmentResponses = {
    200: AssignmentForPutResponse;
};
export type UpsertPriceListAssignmentResponse = UpsertPriceListAssignmentResponses[keyof UpsertPriceListAssignmentResponses];
export type CreatePriceListsRecordsData = {
    body?: Array<PriceRecordBatchItem>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/pricelists/records';
};
export type CreatePriceListsRecordsErrors = {
    422: PriceRecordBatchErrorResponse;
};
export type CreatePriceListsRecordsError = CreatePriceListsRecordsErrors[keyof CreatePriceListsRecordsErrors];
export type CreatePriceListsRecordsResponses = {
    200: SuccessBatchResponse;
};
export type CreatePriceListsRecordsResponse = CreatePriceListsRecordsResponses[keyof CreatePriceListsRecordsResponses];
export type UpsertPriceListsRecordsData = {
    body?: Array<PriceRecordBatchItem>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/pricelists/records';
};
export type UpsertPriceListsRecordsErrors = {
    422: PriceRecordBatchErrorResponse;
};
export type UpsertPriceListsRecordsError = UpsertPriceListsRecordsErrors[keyof UpsertPriceListsRecordsErrors];
export type UpsertPriceListsRecordsResponses = {
    200: SuccessBatchResponse;
};
export type UpsertPriceListsRecordsResponse = UpsertPriceListsRecordsResponses[keyof UpsertPriceListsRecordsResponses];
export type DeletePriceListRecordsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
    };
    query?: {
        currency?: string;
        'variant_id:in'?: Array<number>;
        'sku:in'?: Array<string>;
    };
    url: '/pricelists/{price_list_id}/records';
};
export type DeletePriceListRecordsErrors = {
    503: ServiceUnavailableError;
};
export type DeletePriceListRecordsError = DeletePriceListRecordsErrors[keyof DeletePriceListRecordsErrors];
export type DeletePriceListRecordsResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeletePriceListRecordsResponse = DeletePriceListRecordsResponses[keyof DeletePriceListRecordsResponses];
export type GetPriceListRecordsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
    };
    query?: {
        'variant_id:in'?: Array<number>;
        'product_id:in'?: Array<number>;
        currency?: string;
        page?: number;
        limit?: number;
        before?: string;
        after?: string;
        include?: Array<PricelistsPriceListIdRecordsGetParametersIncludeSchemaItems>;
        price?: number;
        sale_price?: number;
        retail_price?: number;
        map_price?: number;
        calculated_price?: number;
        date_created?: string;
        date_modified?: string;
        sku?: string;
        'sku:in'?: Array<string>;
        'currency:in'?: Array<string>;
        'price:max'?: number;
        'price:min'?: number;
        'sale_price:max'?: number;
        'sale_price:min'?: number;
        'retail_price:max'?: number;
        'retail_price:min'?: number;
        'map_price:max'?: number;
        'map_price:min'?: number;
        'calculated_price:max'?: number;
        'calculated_price:min'?: number;
        'date_created:max'?: string;
        'date_created:min'?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
    };
    url: '/pricelists/{price_list_id}/records';
};
export type GetPriceListRecordsErrors = {
    429: ErrorResponse;
};
export type GetPriceListRecordsError = GetPriceListRecordsErrors[keyof GetPriceListRecordsErrors];
export type GetPriceListRecordsResponses = {
    200: PriceListsRecordsGetPriceListRecordsResponse200;
};
export type GetPriceListRecordsResponse = GetPriceListRecordsResponses[keyof GetPriceListRecordsResponses];
export type CreatePriceListRecordsData = {
    body?: Array<PricelistsPriceListIdRecordsPostRequestBodyContentApplicationJsonSchemaItems>;
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
    };
    query?: never;
    url: '/pricelists/{price_list_id}/records';
};
export type CreatePriceListRecordsErrors = {
    422: CreatePriceListRecordsRequestUnprocessableEntityError;
    429: ErrorResponse;
};
export type CreatePriceListRecordsError = CreatePriceListRecordsErrors[keyof CreatePriceListRecordsErrors];
export type CreatePriceListRecordsResponses = {
    200: PriceListsRecordsCreatePriceListRecordsResponse200;
};
export type CreatePriceListRecordsResponse = CreatePriceListRecordsResponses[keyof CreatePriceListRecordsResponses];
export type UpsertPriceListRecordsData = {
    body?: Array<PricelistsPriceListIdRecordsPutRequestBodyContentApplicationJsonSchemaItems>;
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
    };
    query?: never;
    url: '/pricelists/{price_list_id}/records';
};
export type UpsertPriceListRecordsErrors = {
    422: UpsertPriceListRecordsRequestUnprocessableEntityError;
    429: ErrorResponse;
};
export type UpsertPriceListRecordsError = UpsertPriceListRecordsErrors[keyof UpsertPriceListRecordsErrors];
export type UpsertPriceListRecordsResponses = {
    200: PriceListsRecordsUpsertPriceListRecordsResponse200;
};
export type UpsertPriceListRecordsResponse = UpsertPriceListRecordsResponses[keyof UpsertPriceListRecordsResponses];
export type GetPriceListRecordsByVariantIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
        variant_id: number;
    };
    query?: {
        include?: Array<PricelistsPriceListIdRecordsVariantIdGetParametersIncludeSchemaItems>;
        page?: number;
        limit?: number;
        before?: string;
        after?: string;
    };
    url: '/pricelists/{price_list_id}/records/{variant_id}';
};
export type GetPriceListRecordsByVariantIdErrors = {
    429: ErrorResponse;
};
export type GetPriceListRecordsByVariantIdError = GetPriceListRecordsByVariantIdErrors[keyof GetPriceListRecordsByVariantIdErrors];
export type GetPriceListRecordsByVariantIdResponses = {
    200: PriceListsRecordsGetPriceListRecordsByVariantIdResponse200;
};
export type GetPriceListRecordsByVariantIdResponse = GetPriceListRecordsByVariantIdResponses[keyof GetPriceListRecordsByVariantIdResponses];
export type DeletePriceListRecordData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
        variant_id: number;
        currency_code: string;
    };
    query?: never;
    url: '/pricelists/{price_list_id}/records/{variant_id}/{currency_code}';
};
export type DeletePriceListRecordErrors = {
    503: ServiceUnavailableError;
};
export type DeletePriceListRecordError = DeletePriceListRecordErrors[keyof DeletePriceListRecordErrors];
export type DeletePriceListRecordResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeletePriceListRecordResponse = DeletePriceListRecordResponses[keyof DeletePriceListRecordResponses];
export type GetPriceListRecordData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
        variant_id: number;
        currency_code: string;
    };
    query?: {
        include?: Array<PricelistsPriceListIdRecordsVariantIdCurrencyCodeGetParametersIncludeSchemaItems>;
    };
    url: '/pricelists/{price_list_id}/records/{variant_id}/{currency_code}';
};
export type GetPriceListRecordErrors = {
    429: ErrorResponse;
};
export type GetPriceListRecordError = GetPriceListRecordErrors[keyof GetPriceListRecordErrors];
export type GetPriceListRecordResponses = {
    200: PriceListsRecordsGetPriceListRecordResponse200;
};
export type GetPriceListRecordResponse = GetPriceListRecordResponses[keyof GetPriceListRecordResponses];
export type SetPriceListRecordData = {
    body?: {
        price?: number;
        sale_price?: number;
        retail_price?: number;
        map_price?: number;
        bulk_pricing_tiers?: Array<PricelistsPriceListIdRecordsVariantIdCurrencyCodePutRequestBodyContentApplicationJsonSchemaBulkPricingTiersItems>;
    };
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
        variant_id: number;
        currency_code: string;
    };
    query?: never;
    url: '/pricelists/{price_list_id}/records/{variant_id}/{currency_code}';
};
export type SetPriceListRecordErrors = {
    404: SetPriceListRecordRequestNotFoundError;
    409: SetPriceListRecordRequestConflictError;
    422: SetPriceListRecordRequestUnprocessableEntityError;
    429: ErrorResponse;
};
export type SetPriceListRecordError = SetPriceListRecordErrors[keyof SetPriceListRecordErrors];
export type SetPriceListRecordResponses = {
    200: PriceListsRecordsSetPriceListRecordResponse200;
};
export type SetPriceListRecordResponse = SetPriceListRecordResponses[keyof SetPriceListRecordResponses];
