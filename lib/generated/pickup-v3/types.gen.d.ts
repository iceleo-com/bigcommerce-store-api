export type BasePickup = {
    pickup_method_id?: number;
    order_id?: number;
};
export type BasePickupItem = {
    order_product_id?: number;
    quantity?: number;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
    };
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type Pickup = {
    id?: number;
} & BasePickup & {
    ready_at?: string;
    created_at?: string;
    updated_at?: string;
    pickup_items?: Array<PickupItem>;
};
export type PickupItem = {
    id?: number;
} & BasePickupItem & {
    status?: 'AWAITING_COLLECTION' | 'COLLECTED';
    collected_at?: (string) | null;
};
export type status = 'AWAITING_COLLECTION' | 'COLLECTED';
export type PostRequestPickup = BasePickup & {
    ready_at: string;
    collected_at?: string;
    pickup_items: Array<PostRequestPickupItem>;
};
export type PostRequestPickupItem = {
    order_product_id: number;
    quantity: number;
};
export type PutRequestPickup = {
    id: number;
    pickup_id: number;
    ready_at?: string;
    collected_at?: string;
};
export type GetPickupData = {
    headers: {
        Accept: string;
    };
    query?: {
        'order_id:in'?: number;
        'pickup_id:in'?: number;
    };
};
export type GetPickupResponse = ({
    data?: Array<Pickup>;
});
export type GetPickupError = unknown;
export type PostPickupData = {
    body: Array<PostRequestPickup>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type PostPickupResponse = ({
    data?: Array<Pickup>;
    meta?: {
        [key: string]: unknown;
    };
});
export type PostPickupError = (ErrorResponse);
export type DeletePickupData = {
    headers: {
        Accept: string;
    };
    query: {
        'id:in': number;
    };
};
export type DeletePickupResponse = (void);
export type DeletePickupError = unknown;
export type PutPickupData = {
    body: Array<PutRequestPickup>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type PutPickupResponse = ({
    data?: Array<Pickup>;
    meta?: {
        [key: string]: unknown;
    };
});
export type PutPickupError = (ErrorResponse);
