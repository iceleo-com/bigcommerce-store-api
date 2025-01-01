export type AdjustmentsAbsoluteRequest = {
    reason?: string;
    items: Array<({
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
    })>;
};
export type AdjustmentsRelativeRequest = {
    reason?: string;
    items: Array<({
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
    })>;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
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
export type LocationItemsSettingsRequest = {
    settings: Array<{
        identity?: ({
            sku?: string;
        } | {
            variant_id?: number;
        } | {
            product_id?: number;
        });
        safety_stock?: number;
        is_in_stock?: boolean;
        warning_level?: number;
        bin_picking_number?: string;
    }>;
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
export type ParameterAccept = string;
export type ParameterContentType = string;
export type ParameterLimitParam = number;
export type ParameterLocationCodeFilterParam = string;
export type ParameterLocationIdParam = number;
export type ParameterLocationIdsParam = number;
export type ParameterPageParam = number;
export type ParameterProductIdFilterParam = number;
export type ParameterSkuFilterParam = string;
export type ParameterVariantIdFilterParam = number;
export type SimpleTransactionResponse = {
    transaction_id?: string;
};
export type PutAbsoluteAdjustmentData = {
    body: AdjustmentsAbsoluteRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type PutAbsoluteAdjustmentResponse = (SimpleTransactionResponse);
export type PutAbsoluteAdjustmentError = (ErrorResponse);
export type PostRelativeAdjustmentData = {
    body: AdjustmentsRelativeRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type PostRelativeAdjustmentResponse = (SimpleTransactionResponse);
export type PostRelativeAdjustmentError = (ErrorResponse);
export type GetInventoryItemsData = {
    headers: {
        Accept: string;
    };
    query?: {
        limit?: number;
        'location_code:in'?: string;
        'location_id:in'?: number;
        page?: number;
        'product_id:in'?: number;
        'sku:in'?: string;
        'variant_id:in'?: number;
    };
};
export type GetInventoryItemsResponse = ({
    data?: Array<ItemResponse>;
    meta?: Meta;
});
export type GetInventoryItemsError = unknown;
export type GetLocationInventoryItemsData = {
    headers: {
        Accept: string;
    };
    path: {
        location_id: number;
    };
    query?: {
        limit?: number;
        page?: number;
        'product_id:in'?: number;
        'sku:in'?: string;
        'variant_id:in'?: number;
    };
};
export type GetLocationInventoryItemsResponse = ({
    data?: Array<LocationItemsResponse>;
    meta?: Meta;
});
export type GetLocationInventoryItemsError = (ErrorResponse);
export type PutLocationInventoryItemsData = {
    body: LocationItemsSettingsRequest;
    headers: {
        Accept: string;
    };
    path: {
        location_id: number;
    };
};
export type PutLocationInventoryItemsResponse = (SimpleTransactionResponse);
export type PutLocationInventoryItemsError = (ErrorResponse);
