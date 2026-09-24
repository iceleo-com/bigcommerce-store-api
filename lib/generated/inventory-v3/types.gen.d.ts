export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type LocationItemsSettingsRequest = {
    settings: Array<LocationItemsSettingsRequestSettingsItems>;
};
export type LocationItemsSettingsRequestSettingsItems = {
    identity?: LocationItemsSettingsRequestSettingsItemsIdentity;
    safety_stock?: number;
    is_in_stock?: boolean;
    warning_level?: number;
    bin_picking_number?: string;
    backorder_limit?: number | null;
};
export type LocationItemsSettingsRequestSettingsItemsIdentity = LocationItemsSettingsRequestSettingsItemsIdentity0 | LocationItemsSettingsRequestSettingsItemsIdentity1 | LocationItemsSettingsRequestSettingsItemsIdentity2;
export type LocationItemsSettingsRequestSettingsItemsIdentity2 = {
    product_id?: number;
};
export type LocationItemsSettingsRequestSettingsItemsIdentity1 = {
    variant_id?: number;
};
export type LocationItemsSettingsRequestSettingsItemsIdentity0 = {
    sku?: string;
};
export type ItemsGetLocationInventoryItemsResponse200 = {
    data?: Array<LocationItemsResponse>;
    meta?: Meta;
};
export type Meta = {
    pagination?: MetaPagination;
};
export type MetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: MetaPaginationLinks;
};
export type MetaPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type LocationItemsResponse = {
    identity?: LocationItemsResponseIdentity;
    available_to_sell?: number;
    total_inventory_onhand?: number;
    qty_backordered?: number;
    settings?: LocationItemsResponseSettings;
};
export type LocationItemsResponseSettings = {
    safety_stock?: number;
    is_in_stock?: boolean;
    warning_level?: number;
    bin_picking_number?: string;
    backorder_limit?: number | null;
    backorder_message?: LocationItemsResponseSettingsBackorderMessage | null;
};
export type LocationItemsResponseSettingsBackorderMessage = {
    id?: number;
    name?: string;
    message?: string;
    is_default?: boolean;
    created_at?: string;
    updated_at?: string;
};
export type LocationItemsResponseIdentity = {
    sku?: string;
    variant_id?: number;
    product_id?: number;
};
export type ItemsGetInventoryItemsResponse200 = {
    data?: Array<ItemResponse>;
    meta?: Meta;
};
export type ItemResponse = {
    identity?: ItemResponseIdentity;
    locations?: Array<ItemResponseLocationsItems>;
};
export type ItemResponseLocationsItems = {
    location_id?: number;
    location_code?: string;
    location_name?: string;
    available_to_sell?: number;
    total_inventory_onhand?: number;
    qty_backordered?: number;
    location_enabled?: boolean;
    settings?: ItemResponseLocationsItemsSettings;
};
export type ItemResponseLocationsItemsSettings = {
    safety_stock?: number;
    is_in_stock?: boolean;
    warning_level?: number;
    bin_picking_number?: string;
    backorder_limit?: number | null;
    backorder_message?: ItemResponseLocationsItemsSettingsBackorderMessage | null;
};
export type ItemResponseLocationsItemsSettingsBackorderMessage = {
    id?: number;
    name?: string;
    message?: string;
    is_default?: boolean;
    created_at?: string;
    updated_at?: string;
};
export type ItemResponseIdentity = {
    sku?: string;
    variant_id?: number;
    product_id?: number;
    sku_id?: number;
};
export type AdjustmentsRelativeRequest = {
    reason?: string;
    items: Array<AdjustmentsRelativeRequestItemsItems>;
};
export type AdjustmentsRelativeRequestItemsItems = AdjustmentsRelativeRequestItemsItems0 | AdjustmentsRelativeRequestItemsItems1 | AdjustmentsRelativeRequestItemsItems2;
export type AdjustmentsRelativeRequestItemsItems2 = {
    location_id: number;
    product_id: number;
    quantity: number;
};
export type AdjustmentsRelativeRequestItemsItems1 = {
    location_id: number;
    variant_id: number;
    quantity: number;
};
export type AdjustmentsRelativeRequestItemsItems0 = {
    location_id: number;
    sku: string;
    quantity: number;
};
export type AdjustmentsAbsoluteRequest = {
    reason?: string;
    items: Array<AdjustmentsAbsoluteRequestItemsItems>;
};
export type AdjustmentsAbsoluteRequestItemsItems = AdjustmentsAbsoluteRequestItemsItems0 | AdjustmentsAbsoluteRequestItemsItems1 | AdjustmentsAbsoluteRequestItemsItems2;
export type AdjustmentsAbsoluteRequestItemsItems2 = {
    location_id: number;
    product_id: number;
    quantity: number;
};
export type AdjustmentsAbsoluteRequestItemsItems1 = {
    location_id: number;
    variant_id: number;
    quantity: number;
};
export type AdjustmentsAbsoluteRequestItemsItems0 = {
    location_id: number;
    sku: string;
    quantity: number;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorResponseErrors;
};
export type ErrorResponseErrors = {
    [key: string]: unknown;
};
export type SimpleTransactionResponse = {
    transaction_id?: string;
};
export type PutAbsoluteAdjustmentData = {
    body?: AdjustmentsAbsoluteRequest;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/inventory/adjustments/absolute';
};
export type PutAbsoluteAdjustmentErrors = {
    422: ErrorResponse;
};
export type PutAbsoluteAdjustmentError = PutAbsoluteAdjustmentErrors[keyof PutAbsoluteAdjustmentErrors];
export type PutAbsoluteAdjustmentResponses = {
    200: SimpleTransactionResponse;
};
export type PutAbsoluteAdjustmentResponse = PutAbsoluteAdjustmentResponses[keyof PutAbsoluteAdjustmentResponses];
export type PostRelativeAdjustmentData = {
    body?: AdjustmentsRelativeRequest;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/inventory/adjustments/relative';
};
export type PostRelativeAdjustmentErrors = {
    422: ErrorResponse;
};
export type PostRelativeAdjustmentError = PostRelativeAdjustmentErrors[keyof PostRelativeAdjustmentErrors];
export type PostRelativeAdjustmentResponses = {
    200: SimpleTransactionResponse;
};
export type PostRelativeAdjustmentResponse = PostRelativeAdjustmentResponses[keyof PostRelativeAdjustmentResponses];
export type GetInventoryItemsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'sku:in'?: string;
        'variant_id:in'?: number;
        'product_id:in'?: number;
        'location_id:in'?: number;
        'location_code:in'?: string;
        page?: number;
        limit?: number;
    };
    url: '/inventory/items';
};
export type GetInventoryItemsResponses = {
    200: ItemsGetInventoryItemsResponse200;
};
export type GetInventoryItemsResponse = GetInventoryItemsResponses[keyof GetInventoryItemsResponses];
export type GetLocationInventoryItemsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        location_id: number;
    };
    query?: {
        'variant_id:in'?: number;
        'product_id:in'?: number;
        'sku:in'?: string;
        page?: number;
        limit?: number;
    };
    url: '/inventory/locations/{location_id}/items';
};
export type GetLocationInventoryItemsErrors = {
    404: ErrorResponse;
};
export type GetLocationInventoryItemsError = GetLocationInventoryItemsErrors[keyof GetLocationInventoryItemsErrors];
export type GetLocationInventoryItemsResponses = {
    200: ItemsGetLocationInventoryItemsResponse200;
};
export type GetLocationInventoryItemsResponse = GetLocationInventoryItemsResponses[keyof GetLocationInventoryItemsResponses];
export type PutLocationInventoryItemsData = {
    body?: LocationItemsSettingsRequest;
    headers: {
        Accept: string;
    };
    path: {
        location_id: number;
    };
    query?: never;
    url: '/inventory/locations/{location_id}/items';
};
export type PutLocationInventoryItemsErrors = {
    422: ErrorResponse;
};
export type PutLocationInventoryItemsError = PutLocationInventoryItemsErrors[keyof PutLocationInventoryItemsErrors];
export type PutLocationInventoryItemsResponses = {
    200: SimpleTransactionResponse;
};
export type PutLocationInventoryItemsResponse = PutLocationInventoryItemsResponses[keyof PutLocationInventoryItemsResponses];
