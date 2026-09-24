export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type SubscriberFull = SubscriberBase & {
    id?: number;
    date_modified?: string;
    date_created?: string;
};
export type SubscriberBase = {
    email?: string;
    first_name?: string;
    last_name?: string;
    source?: string;
    order_id?: number | null;
    channel_id?: number;
};
export type Subscriber = {
    id?: number;
    email?: string;
    first_name?: string;
    last_name?: string;
    source?: string;
    order_id?: number | null;
} & {
    date_modified?: string;
    date_created?: string;
};
export type SubscriberPost = SubscriberBase;
export type SubscriberPut = SubscriberBase;
export type CollectionMeta = {
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
export type Pagination = {
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
export type OpenMeta = {
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
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type FilterEmailParam = string;
export type FilterFirstNameParam = string;
export type FilterLastNameParam = string;
export type FilterSourceParam = string;
export type FilterOrderIdParam = number;
export type FilterDateModifiedParam = string;
export type FilterDateCreatedParam = string;
export type PageParam = number;
export type LimitParam = number;
export type ScriptsSortKeyParam = 'name' | 'description' | 'date_created' | 'date_modified';
export type DirectionParam = 'asc' | 'desc';
export type SubscriberIdParam = number;
export type Accept = string;
export type ContentType = string;
export type DeleteSubscribersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        email?: string;
        first_name?: string;
        last_name?: string;
        source?: string;
        order_id?: number;
        date_created?: string;
        date_modified?: string;
    };
    url: '/customers/subscribers';
};
export type DeleteSubscribersResponses = {
    204: void;
};
export type DeleteSubscribersResponse = DeleteSubscribersResponses[keyof DeleteSubscribersResponses];
export type GetSubscribersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        email?: string;
        first_name?: string;
        last_name?: string;
        source?: string;
        order_id?: number;
        date_created?: string;
        date_modified?: string;
        page?: number;
        limit?: number;
        id?: number;
    };
    url: '/customers/subscribers';
};
export type GetSubscribersResponses = {
    200: {
        data?: Array<SubscriberFull>;
        meta?: CollectionMeta;
    };
};
export type GetSubscribersResponse = GetSubscribersResponses[keyof GetSubscribersResponses];
export type CreateSubscriberData = {
    body: SubscriberPost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/customers/subscribers';
};
export type CreateSubscriberErrors = {
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
export type CreateSubscriberError = CreateSubscriberErrors[keyof CreateSubscriberErrors];
export type CreateSubscriberResponses = {
    200: {
        data?: SubscriberFull;
        meta?: OpenMeta;
    };
};
export type CreateSubscriberResponse = CreateSubscriberResponses[keyof CreateSubscriberResponses];
export type DeleteSubscriberByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        subscriber_id: number;
    };
    query?: never;
    url: '/customers/subscribers/{subscriber_id}';
};
export type DeleteSubscriberByIdResponses = {
    204: void;
};
export type DeleteSubscriberByIdResponse = DeleteSubscriberByIdResponses[keyof DeleteSubscriberByIdResponses];
export type GetSubscriberByIdData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        subscriber_id: number;
    };
    query?: never;
    url: '/customers/subscribers/{subscriber_id}';
};
export type GetSubscriberByIdErrors = {
    404: {
        status?: number;
        title?: string;
        type?: string;
        instance?: string;
    };
};
export type GetSubscriberByIdError = GetSubscriberByIdErrors[keyof GetSubscriberByIdErrors];
export type GetSubscriberByIdResponses = {
    200: {
        data?: SubscriberFull;
        meta?: OpenMeta;
    };
};
export type GetSubscriberByIdResponse = GetSubscriberByIdResponses[keyof GetSubscriberByIdResponses];
export type UpdateSubscriberData = {
    body: SubscriberPut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        subscriber_id: number;
    };
    query?: never;
    url: '/customers/subscribers/{subscriber_id}';
};
export type UpdateSubscriberErrors = {
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
            additionalProperties?: string;
        };
        instance?: string;
        status?: number;
        title?: string;
        type?: string;
    };
};
export type UpdateSubscriberError = UpdateSubscriberErrors[keyof UpdateSubscriberErrors];
export type UpdateSubscriberResponses = {
    200: {
        data?: SubscriberFull;
        meta?: OpenMeta;
    };
};
export type UpdateSubscriberResponse = UpdateSubscriberResponses[keyof UpdateSubscriberResponses];
