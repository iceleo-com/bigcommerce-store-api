export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
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
export type DetailedErrors = {
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
export type NotFound = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type OpenMeta = {
    [key: string]: unknown;
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
export type ParameterAccept = string;
export type ParameterContentType = string;
export type ParameterDirectionParam = 'asc' | 'desc';
export type ParameterFilterDateCreatedMaxParam = string;
export type ParameterFilterDateCreatedMinParam = string;
export type ParameterFilterDateCreatedParam = string;
export type ParameterFilterDateModifiedMaxParam = string;
export type ParameterFilterDateModifiedMinParam = string;
export type ParameterFilterDateModifiedParam = string;
export type ParameterFilterEmailParam = string;
export type ParameterFilterFirstNameParam = string;
export type ParameterFilterLastNameParam = string;
export type ParameterFilterOrderIdParam = number;
export type ParameterFilterSourceParam = string;
export type ParameterIdInParam = Array<(number)>;
export type ParameterIdParam = number;
export type ParameterLimitParam = number;
export type ParameterPageParam = number;
export type ParameterScriptsSortKeyParam = 'name' | 'description' | 'date_created' | 'date_modified';
export type ParameterSubscriberIdParam = number;
export type Subscriber = {
    id?: number;
    email?: string;
    first_name?: string;
    last_name?: string;
    source?: string;
    order_id?: (number) | null;
} & {
    date_modified?: string;
    date_created?: string;
};
export type subscriber_Base = {
    email?: string;
    first_name?: string;
    last_name?: string;
    source?: string;
    order_id?: (number) | null;
    channel_id?: number;
};
export type subscriber_Full = subscriber_Base & {
    id?: number;
    date_modified?: string;
    date_created?: string;
    consents?: Array<(string)>;
};
export type subscriber_Post = subscriber_Base;
export type subscriber_Put = subscriber_Base;
export type GetSubscribersData = {
    headers: {
        Accept: string;
    };
    query: {
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        email?: string;
        first_name?: string;
        id: number;
        'id:in'?: Array<(number)>;
        last_name?: string;
        limit?: number;
        order_id?: number;
        page?: number;
        source?: string;
    };
};
export type GetSubscribersResponse = ({
    data?: Array<subscriber_Full>;
    meta?: CollectionMeta;
});
export type GetSubscribersError = unknown;
export type CreateSubscriberData = {
    body: subscriber_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateSubscriberResponse = ({
    data?: subscriber_Full;
    meta?: OpenMeta;
});
export type CreateSubscriberError = ({
    errors?: {
        [key: string]: unknown;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type DeleteSubscribersData = {
    headers: {
        Accept: string;
    };
    query?: {
        date_created?: string;
        date_modified?: string;
        email?: string;
        first_name?: string;
        last_name?: string;
        order_id?: number;
        source?: string;
    };
};
export type DeleteSubscribersResponse = (void);
export type DeleteSubscribersError = unknown;
export type GetSubscriberData = {
    headers: {
        Accept: string;
    };
    path: {
        subscriber_id: number;
    };
};
export type GetSubscriberResponse = ({
    data?: subscriber_Full;
    meta?: OpenMeta;
});
export type GetSubscriberError = ({
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
});
export type UpdateSubscriberData = {
    body: subscriber_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        subscriber_id: number;
    };
};
export type UpdateSubscriberResponse = ({
    data?: subscriber_Full;
    meta?: OpenMeta;
});
export type UpdateSubscriberError = ({
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
} | {
    errors?: {
        additionalProperties?: string;
    };
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
});
export type DeleteSubscriberData = {
    headers: {
        Accept: string;
    };
    path: {
        subscriber_id: number;
    };
};
export type DeleteSubscriberResponse = (void);
export type DeleteSubscriberError = unknown;
