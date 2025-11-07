export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type AssignmentsForRequest = {
    price_list_id: number;
    customer_group_id?: number;
    channel_id?: number;
};
export type AssignmentForPutRequest = {
    customer_group_id: number;
    channel_id: number;
};
export type AssignmentForPutResponse = {
    data?: {
        id?: number;
        price_list_id?: number;
        customer_group_id?: number;
        channel_id?: number;
    };
    meta?: Meta;
};
export type PriceRecordBatchItem = {
    price_list_id?: number;
    variant_id?: number;
    sku?: string;
    currency?: string;
} & PriceRecordBase;
export type PriceRecordBase = {
    price?: number;
    sale_price?: number;
    retail_price?: number;
    map_price?: number;
    bulk_pricing_tiers?: Array<BulkPricingTier>;
};
export type BulkPricingTier = {
    quantity_min?: number;
    quantity_max?: number;
    type?: 'fixed' | 'price' | 'percent';
    amount?: number;
};
export type SuccessBatchResponse = {
    data?: {
        [key: string]: unknown;
    };
    meta?: {
        [key: string]: unknown;
    };
};
export type PriceRecordBatchErrorResponse = {
    data?: PriceRecordIdentifiers;
    field_errors?: DetailedErrors;
};
export type PriceRecordIdentifiers = {
    price_list_id?: number;
    variant_id?: number;
    sku?: string;
    currency?: string;
};
export type DetailedErrors = {
    [key: string]: string;
};
export type PriceListAssignmentsBatchErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
    };
    meta?: {
        saved_records?: number;
    };
};
export type AssignmentForGetResponse = {
    id?: number;
    price_list_id?: number;
    customer_group_id?: number;
    channel_id?: number;
};
export type AssignmentsForGetResponse = {
    data?: Array<AssignmentForGetResponse>;
    meta?: CollectionMeta;
};
export type CollectionMeta = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
    };
    cursor_pagination?: {
        count?: number;
        per_page?: number;
        start_cursor?: string;
        end_cursor?: string;
        links?: {
            previous?: string;
            current?: string;
            next?: string;
        };
    };
};
export type Meta = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
} & {
    errors?: {
        [key: string]: unknown;
    };
};
export type CreateBatchPriceListAssignmentsRequest = Array<AssignmentsForRequest>;
export type ChannelIdInParam = Array<number>;
export type PriceListIdParam = number;
export type Accept = string;
export type ContentType = string;
export type FilterAssignmentIdParam = number;
export type FilterPriceListIdParam = number;
export type FilterCustomerGroupIdParam = number;
export type FilterChannelIdParam = number;
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
export type DeletePriceListsResponses = {
    204: {
        [key: string]: unknown;
    } | null;
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
    200: {
        data?: Array<{
            id?: number;
            date_created?: string;
            date_modified?: string;
        } & {
            name: string;
            active?: boolean;
        }>;
        meta?: {
            pagination?: {
                total?: number;
                count?: number;
                per_page?: number;
                current_page?: number;
                total_pages?: number;
            };
            cursor_pagination?: {
                count?: number;
                per_page?: number;
                start_cursor?: string;
                end_cursor?: string;
                links?: {
                    previous?: string;
                    current?: string;
                    next?: string;
                };
            };
        };
    };
};
export type GetPriceListsResponse = GetPriceListsResponses[keyof GetPriceListsResponses];
export type CreatePriceListData = {
    body: {
        name: string;
        active?: boolean;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/pricelists';
};
export type CreatePriceListErrors = {
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
export type CreatePriceListError = CreatePriceListErrors[keyof CreatePriceListErrors];
export type CreatePriceListResponses = {
    200: {
        data?: {
            id?: number;
            date_created?: string;
            date_modified?: string;
        } & {
            name: string;
            active?: boolean;
        };
        meta?: Meta;
    };
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
export type DeletePriceListResponses = {
    204: void;
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
    200: {
        data?: {
            id?: number;
            date_created?: string;
            date_modified?: string;
            name: string;
            active?: boolean;
        };
        meta?: Meta;
    };
};
export type GetPriceListResponse = GetPriceListResponses[keyof GetPriceListResponses];
export type UpdatePriceListData = {
    body: {
        name: string;
        active?: boolean;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        price_list_id: number;
    };
    query?: never;
    url: '/pricelists/{price_list_id}';
};
export type UpdatePriceListErrors = {
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
export type UpdatePriceListError = UpdatePriceListErrors[keyof UpdatePriceListErrors];
export type UpdatePriceListResponses = {
    200: {
        data?: {
            id?: number;
            date_created?: string;
            date_modified?: string;
        } & {
            name: string;
            active?: boolean;
        };
        meta?: Meta;
    };
};
export type UpdatePriceListResponse = UpdatePriceListResponses[keyof UpdatePriceListResponses];
export type UpsertPriceListsRecordsData = {
    body: Array<PriceRecordBatchItem>;
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
export type DeletePriceListRecordsResponses = {
    204: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
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
        include?: Array<'bulk_pricing_tiers' | 'sku'>;
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
    200: {
        data?: Array<{
            readonly calculated_price?: number;
            date_created?: string;
            date_modified?: string;
            readonly product_id?: number;
        } & {
            price_list_id?: number;
            variant_id?: number;
            sku?: string;
            currency?: string;
        } & {
            price?: number;
            sale_price?: number;
            retail_price?: number;
            map_price?: number;
            bulk_pricing_tiers?: Array<{
                quantity_min?: number;
                quantity_max?: number | null;
                type?: 'fixed' | 'price' | 'percent';
                amount?: number;
            }>;
            sku?: string;
        }>;
        meta?: {
            pagination?: {
                total?: number;
                count?: number;
                per_page?: number;
                current_page?: number;
                total_pages?: number;
            };
            cursor_pagination?: {
                count?: number;
                per_page?: number;
                start_cursor?: string;
                end_cursor?: string;
                links?: {
                    previous?: string;
                    current?: string;
                    next?: string;
                };
            };
        };
    };
};
export type GetPriceListRecordsResponse = GetPriceListRecordsResponses[keyof GetPriceListRecordsResponses];
export type UpsertPriceListRecordsData = {
    body: Array<{
        variant_id?: number;
        sku?: string;
        currency?: string;
    } & {
        price?: number;
        sale_price?: number;
        retail_price?: number;
        map_price?: number;
        bulk_pricing_tiers?: Array<{
            quantity_min?: number;
            quantity_max?: number;
            type?: 'fixed' | 'price' | 'percent';
            amount?: number;
        }>;
        sku?: string;
    }>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        price_list_id: number;
    };
    query?: never;
    url: '/pricelists/{price_list_id}/records';
};
export type UpsertPriceListRecordsErrors = {
    422: {
        batch_errors?: Array<{
            data?: {
                price_list_id?: number;
                variant_id?: number;
                sku?: string;
                currency?: string;
            };
            field_errors?: {
                [key: string]: unknown;
            };
        }>;
    };
    429: ErrorResponse;
};
export type UpsertPriceListRecordsError = UpsertPriceListRecordsErrors[keyof UpsertPriceListRecordsErrors];
export type UpsertPriceListRecordsResponses = {
    200: {
        data?: {
            [key: string]: unknown;
        };
        meta?: {
            [key: string]: unknown;
        };
    };
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
        include?: Array<'bulk_pricing_tiers' | 'sku'>;
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
    200: {
        data?: Array<{
            readonly calculated_price?: number;
            date_created?: string;
            date_modified?: string;
            readonly product_id?: number;
        } & {
            price_list_id?: number;
            variant_id?: number;
            sku?: string;
            currency?: string;
        } & {
            price?: number;
            sale_price?: number;
            retail_price?: number;
            map_price?: number;
            bulk_pricing_tiers?: Array<{
                quantity_min?: number;
                quantity_max?: number;
                type?: 'fixed' | 'price' | 'percent';
                amount?: number;
            }>;
            sku?: string;
        }>;
        meta?: {
            pagination?: {
                total?: number;
                count?: number;
                per_page?: number;
                current_page?: number;
                total_pages?: number;
            };
            cursor_pagination?: {
                count?: number;
                per_page?: number;
                start_cursor?: string;
                end_cursor?: string;
                links?: {
                    previous?: string;
                    current?: string;
                    next?: string;
                };
            };
        };
    };
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
export type DeletePriceListRecordResponses = {
    204: void;
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
        include?: Array<'bulk_pricing_tiers' | 'sku'>;
    };
    url: '/pricelists/{price_list_id}/records/{variant_id}/{currency_code}';
};
export type GetPriceListRecordErrors = {
    429: ErrorResponse;
};
export type GetPriceListRecordError = GetPriceListRecordErrors[keyof GetPriceListRecordErrors];
export type GetPriceListRecordResponses = {
    200: {
        data?: {
            readonly calculated_price?: number;
            date_created?: string;
            date_modified?: string;
            readonly product_id?: number;
        } & {
            price_list_id?: number;
            variant_id?: number;
            sku?: string;
            currency?: string;
        } & {
            price?: number;
            sale_price?: number;
            retail_price?: number;
            map_price?: number;
            bulk_pricing_tiers?: Array<{
                quantity_min?: number;
                quantity_max?: number;
                type?: 'fixed' | 'price' | 'percent';
                amount?: number;
            }>;
            sku?: string;
        };
        meta?: Meta;
    };
};
export type GetPriceListRecordResponse = GetPriceListRecordResponses[keyof GetPriceListRecordResponses];
export type SetPriceListRecordData = {
    body: {
        price?: number;
        sale_price?: number;
        retail_price?: number;
        map_price?: number;
        bulk_pricing_tiers?: Array<{
            quantity_min?: number;
            quantity_max?: number;
            type?: 'fixed' | 'price' | 'percent';
            amount?: number;
        }>;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
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
    429: ErrorResponse;
};
export type SetPriceListRecordError = SetPriceListRecordErrors[keyof SetPriceListRecordErrors];
export type SetPriceListRecordResponses = {
    200: {
        data?: {
            readonly calculated_price?: number;
            date_created?: string;
            date_modified?: string;
            readonly product_id?: number;
        } & {
            price_list_id?: number;
            variant_id?: number;
            currency?: string;
        } & {
            price?: number;
            sale_price?: number;
            retail_price?: number;
            map_price?: number;
            bulk_pricing_tiers?: Array<{
                quantity_min?: number;
                quantity_max?: number;
                type?: 'fixed' | 'price' | 'percent';
                amount?: number;
            }>;
        };
        meta?: Meta;
    };
};
export type SetPriceListRecordResponse = SetPriceListRecordResponses[keyof SetPriceListRecordResponses];
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
    204: void;
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
    body: CreateBatchPriceListAssignmentsRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
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
    200: unknown;
};
export type UpsertPriceListAssignmentData = {
    body: AssignmentForPutRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
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
