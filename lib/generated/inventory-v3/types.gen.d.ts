export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
    };
};
export type Meta = {
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
export type AdjustmentsRelativeRequest = {
    reason?: string;
    items: Array<{
        location_id: number;
        sku: string;
        quantity: number;
    } | {
        location_id: number;
        variant_id: number;
        quantity: number;
    } | {
        location_id: number;
        product_id: number;
        quantity: number;
    }>;
};
export type AdjustmentsAbsoluteRequest = {
    reason?: string;
    items: Array<{
        location_id: number;
        sku: string;
        quantity: number;
    } | {
        location_id: number;
        variant_id: number;
        quantity: number;
    } | {
        location_id: number;
        product_id: number;
        quantity: number;
    }>;
};
export type LocationItemsSettingsRequest = {
    settings: Array<{
        identity?: {
            sku?: string;
        } | {
            variant_id?: number;
        } | {
            product_id?: number;
        };
        safety_stock?: number;
        is_in_stock?: boolean;
        warning_level?: number;
        bin_picking_number?: string;
    }>;
};
export type LocationItemsResponse = {
    identity?: {
        sku?: string;
        variant_id?: number;
        product_id?: number;
    };
    available_to_sell?: number;
    total_inventory_onhand?: number;
    settings?: {
        safety_stock?: number;
        is_in_stock?: boolean;
        warning_level?: number;
        bin_picking_number?: string;
    };
};
export type ItemResponse = {
    identity?: {
        sku?: string;
        variant_id?: number;
        product_id?: number;
        sku_id?: number;
    };
    locations?: Array<{
        location_id?: number;
        location_code?: string;
        location_name?: string;
        available_to_sell?: number;
        total_inventory_onhand?: number;
        location_enabled?: boolean;
        settings?: {
            safety_stock?: number;
            is_in_stock?: boolean;
            warning_level?: number;
            bin_picking_number?: string;
        };
    }>;
};
export type SimpleTransactionResponse = {
    transaction_id?: string;
};
export type Accept = string;
export type ContentType = string;
export type SkuFilterParam = string;
export type VariantIdFilterParam = number;
export type ProductIdFilterParam = number;
export type PageParam = number;
export type LimitParam = number;
export type LocationIdParam = number;
export type LocationIdsParam = number;
export type LocationCodeFilterParam = string;
export type PutAbsoluteAdjustmentData = {
    body: AdjustmentsAbsoluteRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
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
    body: AdjustmentsRelativeRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
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
    200: {
        data?: Array<ItemResponse>;
        meta?: Meta;
    };
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
    200: {
        data?: Array<LocationItemsResponse>;
        meta?: Meta;
    };
};
export type GetLocationInventoryItemsResponse = GetLocationInventoryItemsResponses[keyof GetLocationInventoryItemsResponses];
export type PutLocationInventoryItemsData = {
    body: LocationItemsSettingsRequest;
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
