export type AssignmentForGetResponse = {
    id?: number;
    price_list_id?: number;
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
export type AssignmentsForGetResponse = {
    data?: Array<AssignmentForGetResponse>;
    meta?: CollectionMeta;
};
export type AssignmentsForRequest = {
    price_list_id: number;
    customer_group_id?: number;
    channel_id?: number;
};
export type BulkPricingTier = {
    quantity_min?: number;
    quantity_max?: number;
    type?: 'fixed' | 'price' | 'percent';
    amount?: number;
};
export type type = 'fixed' | 'price' | 'percent';
export type CollectionMeta = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
    };
};
export type CreateBatchPriceListAssignmentsRequest = Array<AssignmentsForRequest>;
export type DetailedErrors = {
    [key: string]: (string);
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
export type Meta = {
    [key: string]: unknown;
};
export type ParameterAccept = string;
export type ParameterChannelIdInParam = Array<(number)>;
export type ParameterContentType = string;
export type ParameterFilterAssignmentIdParam = number;
export type ParameterFilterChannelIdParam = number;
export type ParameterFilterCustomerGroupIdParam = number;
export type ParameterFilterPriceListIdParam = number;
export type ParameterPriceListIdParam = number;
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
export type PriceRecordBase = {
    price?: number;
    sale_price?: number;
    retail_price?: number;
    map_price?: number;
    bulk_pricing_tiers?: Array<BulkPricingTier>;
};
export type PriceRecordBatchErrorResponse = {
    data?: PriceRecordIdentifiers;
    field_errors?: DetailedErrors;
};
export type PriceRecordBatchItem = {
    price_list_id?: number;
    variant_id?: number;
    sku?: string;
    currency?: string;
} & PriceRecordBase;
export type PriceRecordIdentifiers = {
    price_list_id?: number;
    variant_id?: number;
    sku?: string;
    currency?: string;
};
export type SuccessBatchResponse = {
    data?: {
        [key: string]: unknown;
    };
    meta?: {
        [key: string]: unknown;
    };
};
export type GetPriceListsData = {
    headers: {
        Accept: string;
    };
    query?: {
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        'id:in'?: Array<(number)>;
        limit?: number;
        name?: string;
        'name:like'?: string;
        page?: number;
    };
};
export type GetPriceListsResponse = ({
    data?: Array<({
        id?: number;
        date_created?: string;
        date_modified?: string;
    } & {
        name: string;
        active?: boolean;
    })>;
    meta?: {
        pagination?: {
            total?: number;
            count?: number;
            per_page?: number;
            current_page?: number;
            total_pages?: number;
        };
    };
});
export type GetPriceListsError = unknown;
export type CreatePriceListData = {
    body: ({
        name: string;
        active?: boolean;
    });
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreatePriceListResponse = ({
    data?: ({
        id?: number;
        date_created?: string;
        date_modified?: string;
    } & {
        name: string;
        active?: boolean;
    });
    meta?: Meta;
});
export type CreatePriceListError = ({
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type DeletePriceListsData = {
    headers: {
        Accept: string;
    };
    query?: {
        'id:in'?: Array<(number)>;
        name?: string;
    };
};
export type DeletePriceListsResponse = ({
    [key: string]: unknown;
} | null);
export type DeletePriceListsError = unknown;
export type GetPriceListData = {
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
    };
};
export type GetPriceListResponse = ({
    data?: {
        id?: number;
        date_created?: string;
        date_modified?: string;
        name: string;
        active?: boolean;
    };
    meta?: Meta;
});
export type GetPriceListError = unknown;
export type UpdatePriceListData = {
    body: ({
        name: string;
        active?: boolean;
    });
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        price_list_id: number;
    };
};
export type UpdatePriceListResponse = ({
    data?: ({
        id?: number;
        date_created?: string;
        date_modified?: string;
    } & {
        name: string;
        active?: boolean;
    });
    meta?: Meta;
});
export type UpdatePriceListError = ({
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
export type DeletePriceListData = {
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
    };
};
export type DeletePriceListResponse = (void);
export type DeletePriceListError = unknown;
export type UpsertPriceListsRecordsData = {
    body: Array<PriceRecordBatchItem>;
    headers: {
        Accept: string;
    };
};
export type UpsertPriceListsRecordsResponse = (SuccessBatchResponse);
export type UpsertPriceListsRecordsError = (PriceRecordBatchErrorResponse);
export type GetPriceListRecordsData = {
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
    };
    query?: {
        calculated_price?: number;
        'calculated_price:max'?: number;
        'calculated_price:min'?: number;
        currency?: string;
        'currency:in'?: Array<(string)>;
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        include?: Array<('bulk_pricing_tiers' | 'sku')>;
        limit?: number;
        map_price?: number;
        'map_price:max'?: number;
        'map_price:min'?: number;
        page?: number;
        price?: number;
        'price:max'?: number;
        'price:min'?: number;
        'product_id:in'?: Array<(number)>;
        retail_price?: number;
        'retail_price:max'?: number;
        'retail_price:min'?: number;
        sale_price?: number;
        'sale_price:max'?: number;
        'sale_price:min'?: number;
        sku?: string;
        'sku:in'?: Array<(string)>;
        'variant_id:in'?: Array<(number)>;
    };
};
export type GetPriceListRecordsResponse = ({
    data?: Array<({
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
            quantity_max?: (number) | null;
            type?: 'fixed' | 'price' | 'percent';
            amount?: number;
        }>;
        sku?: string;
    })>;
    meta?: {
        pagination?: {
            total?: number;
            count?: number;
            per_page?: number;
            current_page?: number;
            total_pages?: number;
        };
    };
});
export type GetPriceListRecordsError = (ErrorResponse);
export type UpsertPriceListRecordsData = {
    body: Array<({
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
    })>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        price_list_id: number;
    };
};
export type UpsertPriceListRecordsResponse = ({
    data?: {
        [key: string]: unknown;
    };
    meta?: {
        [key: string]: unknown;
    };
});
export type UpsertPriceListRecordsError = ({
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
} | ErrorResponse);
export type DeletePriceListRecordsData = {
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
    };
    query?: {
        currency?: string;
        'sku:in'?: Array<(string)>;
        'variant_id:in'?: Array<(number)>;
    };
};
export type DeletePriceListRecordsResponse = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type DeletePriceListRecordsError = unknown;
export type GetPriceListRecordsByVariantIdData = {
    headers: {
        Accept: string;
    };
    path: {
        price_list_id: number;
        variant_id: number;
    };
    query?: {
        include?: Array<('bulk_pricing_tiers' | 'sku')>;
    };
};
export type GetPriceListRecordsByVariantIdResponse = ({
    data?: Array<({
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
    })>;
    meta?: {
        pagination?: {
            total?: number;
            count?: number;
            per_page?: number;
            current_page?: number;
            total_pages?: number;
        };
    };
});
export type GetPriceListRecordsByVariantIdError = (ErrorResponse);
export type GetPriceListRecordData = {
    headers: {
        Accept: string;
    };
    path: {
        currency_code: string;
        price_list_id: number;
        variant_id: number;
    };
    query?: {
        include?: Array<('bulk_pricing_tiers' | 'sku')>;
    };
};
export type GetPriceListRecordResponse = ({
    data?: ({
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
    });
    meta?: Meta;
});
export type GetPriceListRecordError = (ErrorResponse);
export type SetPriceListRecordData = {
    body: ({
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
    });
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        currency_code: string;
        price_list_id: number;
        variant_id: number;
    };
};
export type SetPriceListRecordResponse = ({
    data?: ({
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
    });
    meta?: Meta;
});
export type SetPriceListRecordError = ({
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
} | ErrorResponse);
export type DeletePriceListRecordData = {
    headers: {
        Accept: string;
    };
    path: {
        currency_code: string;
        price_list_id: number;
        variant_id: number;
    };
};
export type DeletePriceListRecordResponse = (void);
export type DeletePriceListRecordError = unknown;
export type GetListOfPriceListAssignmentsData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
        'channel_id:in'?: Array<(number)>;
        customer_group_id?: number;
        'customer_group_id:in'?: Array<(number)>;
        id?: number;
        'id:in'?: Array<(number)>;
        limit?: number;
        page?: number;
        price_list_id?: number;
        'price_list_id:in'?: Array<(number)>;
    };
};
export type GetListOfPriceListAssignmentsResponse = (AssignmentsForGetResponse);
export type GetListOfPriceListAssignmentsError = unknown;
export type CreatePriceListAssignmentsData = {
    body: CreateBatchPriceListAssignmentsRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreatePriceListAssignmentsResponse = (unknown);
export type CreatePriceListAssignmentsError = (PriceListAssignmentsBatchErrorResponse);
export type DeletePriceListAssignmentsData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
        'channel_id:in'?: Array<(number)>;
        customer_group_id?: number;
        id?: number;
        price_list_id?: number;
    };
};
export type DeletePriceListAssignmentsResponse = (void);
export type DeletePriceListAssignmentsError = unknown;
export type UpsertPriceListAssignmentData = {
    body: AssignmentForPutRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        price_list_id: number;
    };
};
export type UpsertPriceListAssignmentResponse = (AssignmentForPutResponse);
export type UpsertPriceListAssignmentError = (unknown);
