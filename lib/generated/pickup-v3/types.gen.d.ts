export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type BasePickup = {
    pickup_method_id?: number;
    order_id?: number;
};
export type Pickup = {
    id?: number;
} & BasePickup & {
    ready_at?: string;
    created_at?: string;
    updated_at?: string;
    pickup_items?: Array<PickupItem>;
};
export type BasePickupItem = {
    order_product_id?: number;
    quantity?: number;
};
export type PickupItem = {
    id?: number;
} & BasePickupItem & {
    status?: 'AWAITING_COLLECTION' | 'COLLECTED';
    collected_at?: string | null;
};
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
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
    };
};
export type Accept = string;
export type ContentType = string;
export type DeletePickupData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        'id:in': number;
    };
    url: '/orders/pickups';
};
export type DeletePickupResponses = {
    204: void;
};
export type DeletePickupResponse = DeletePickupResponses[keyof DeletePickupResponses];
export type GetPickupData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'order_id:in'?: number;
        'pickup_id:in'?: number;
    };
    url: '/orders/pickups';
};
export type GetPickupResponses = {
    200: {
        data?: Array<Pickup>;
    };
};
export type GetPickupResponse = GetPickupResponses[keyof GetPickupResponses];
export type PostPickupData = {
    body: Array<PostRequestPickup>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/orders/pickups';
};
export type PostPickupErrors = {
    422: ErrorResponse;
};
export type PostPickupError = PostPickupErrors[keyof PostPickupErrors];
export type PostPickupResponses = {
    200: {
        data?: Array<Pickup>;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type PostPickupResponse = PostPickupResponses[keyof PostPickupResponses];
export type PutPickupData = {
    body: Array<PutRequestPickup>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/orders/pickups';
};
export type PutPickupErrors = {
    422: ErrorResponse;
};
export type PutPickupError = PutPickupErrors[keyof PutPickupErrors];
export type PutPickupResponses = {
    200: {
        data?: Array<Pickup>;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type PutPickupResponse = PutPickupResponses[keyof PutPickupResponses];
