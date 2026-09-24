export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type PutRequestPickup = {
    id: number;
    pickup_id: number;
    ready_at?: string;
    collected_at?: string;
};
export type PickupPutPickupResponse200 = {
    data?: Array<Pickup>;
    meta?: OrdersPickupsPutResponsesContentApplicationJsonSchemaMeta;
};
export type OrdersPickupsPutResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type Pickup = {
    id?: number;
    pickup_method_id?: number;
    order_id?: number;
    ready_at?: string;
    created_at?: string;
    updated_at?: string;
    pickup_items?: Array<PickupItem>;
};
export type PickupItem = {
    id?: number;
    order_product_id?: number;
    quantity?: number;
    status?: PickupItemStatus;
    collected_at?: string | null;
};
export type PickupItemStatus = 'AWAITING_COLLECTION' | 'COLLECTED';
export type PostRequestPickup = {
    pickup_method_id: number;
    order_id: number;
    ready_at: string;
    collected_at?: string;
    pickup_items: Array<PostRequestPickupItem>;
};
export type PostRequestPickupItem = {
    order_product_id: number;
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
export type PickupPostPickupResponse200 = {
    data?: Array<Pickup>;
    meta?: OrdersPickupsPostResponsesContentApplicationJsonSchemaMeta;
};
export type OrdersPickupsPostResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type PickupGetPickupResponse200 = {
    data?: Array<Pickup>;
};
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
    204: {
        [key: string]: unknown;
    };
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
    200: PickupGetPickupResponse200;
};
export type GetPickupResponse = GetPickupResponses[keyof GetPickupResponses];
export type PostPickupData = {
    body?: Array<PostRequestPickup>;
    headers: {
        Accept: string;
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
    200: PickupPostPickupResponse200;
};
export type PostPickupResponse = PostPickupResponses[keyof PostPickupResponses];
export type PutPickupData = {
    body?: Array<PutRequestPickup>;
    headers: {
        Accept: string;
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
    200: PickupPutPickupResponse200;
};
export type PutPickupResponse = PutPickupResponses[keyof PutPickupResponses];
