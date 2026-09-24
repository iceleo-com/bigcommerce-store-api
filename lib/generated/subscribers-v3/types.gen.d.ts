export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type CustomersSubscribersGetParametersSort = 'id' | 'email' | 'first_name' | 'last_name' | 'source' | 'order_id' | 'date_created' | 'date_modified';
export type CustomersSubscribersGetParametersDirection = 'asc' | 'desc';
export type SubscriberBaseConsentsItems = 'marketing_newsletter' | 'abandoned_cart';
export type SubscriberFullConsentsItems = 'marketing_newsletter' | 'abandoned_cart';
export type SubscriberFull = {
    email?: string;
    first_name?: string;
    last_name?: string;
    source?: string;
    order_id?: number | null;
    channel_id?: number;
    consents?: Array<SubscriberFullConsentsItems>;
    id?: number;
    date_modified?: string;
    date_created?: string;
};
export type CollectionMetaPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type CollectionMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: CollectionMetaPaginationLinks;
};
export type CollectionMeta = {
    pagination?: CollectionMetaPagination;
};
export type SubscribersGetSubscribersResponse200 = {
    data?: Array<SubscriberFull>;
    meta?: CollectionMeta;
};
export type GetSubscribersRequestUnprocessableEntityError = {
    status?: number;
    title?: string;
    type?: string;
};
export type SubscriberPost = {
    email?: string;
    first_name?: string;
    last_name?: string;
    source?: string;
    order_id?: number | null;
    channel_id?: number;
    consents?: Array<SubscriberBaseConsentsItems>;
};
export type OpenMeta = {
    [key: string]: unknown;
};
export type SubscribersCreateSubscriberResponse200 = {
    data?: SubscriberFull;
    meta?: OpenMeta;
};
export type CustomersSubscribersPostResponsesContentApplicationJsonSchemaErrors = {
    [key: string]: unknown;
};
export type CreateSubscriberRequestConflictError = {
    errors?: CustomersSubscribersPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type CreateSubscriberRequestUnprocessableEntityError = {
    errors?: CustomersSubscribersPostResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type SubscribersGetSubscriberResponse200 = {
    data?: SubscriberFull;
    meta?: OpenMeta;
};
export type GetSubscriberRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type SubscriberPut = {
    email?: string;
    first_name?: string;
    last_name?: string;
    source?: string;
    order_id?: number | null;
    channel_id?: number;
    consents?: Array<SubscriberBaseConsentsItems>;
};
export type SubscribersUpdateSubscriberResponse200 = {
    data?: SubscriberFull;
    meta?: OpenMeta;
};
export type UpdateSubscriberRequestNotFoundError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CustomersSubscribersSubscriberIdPutResponsesContentApplicationJsonSchemaErrors = {
    additionalProperties?: string;
};
export type UpdateSubscriberRequestConflictError = {
    errors?: CustomersSubscribersSubscriberIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
export type UpdateSubscriberRequestUnprocessableEntityError = {
    errors?: CustomersSubscribersSubscriberIdPutResponsesContentApplicationJsonSchemaErrors;
    instance?: string;
    status?: number;
    title?: string;
    type?: string;
};
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
    204: {
        [key: string]: unknown;
    };
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
        'date_created:min'?: string;
        'date_created:max'?: string;
        date_modified?: string;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
        page?: number;
        limit?: number;
        sort?: CustomersSubscribersGetParametersSort;
        direction?: CustomersSubscribersGetParametersDirection;
        id?: number;
        'id:in'?: Array<number>;
    };
    url: '/customers/subscribers';
};
export type GetSubscribersErrors = {
    422: GetSubscribersRequestUnprocessableEntityError;
};
export type GetSubscribersError = GetSubscribersErrors[keyof GetSubscribersErrors];
export type GetSubscribersResponses = {
    200: SubscribersGetSubscribersResponse200;
};
export type GetSubscribersResponse = GetSubscribersResponses[keyof GetSubscribersResponses];
export type CreateSubscriberData = {
    body?: SubscriberPost;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/customers/subscribers';
};
export type CreateSubscriberErrors = {
    409: CreateSubscriberRequestConflictError;
    422: CreateSubscriberRequestUnprocessableEntityError;
};
export type CreateSubscriberError = CreateSubscriberErrors[keyof CreateSubscriberErrors];
export type CreateSubscriberResponses = {
    200: SubscribersCreateSubscriberResponse200;
};
export type CreateSubscriberResponse = CreateSubscriberResponses[keyof CreateSubscriberResponses];
export type DeleteSubscriberData = {
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
export type DeleteSubscriberResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteSubscriberResponse = DeleteSubscriberResponses[keyof DeleteSubscriberResponses];
export type GetSubscriberData = {
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
export type GetSubscriberErrors = {
    404: GetSubscriberRequestNotFoundError;
};
export type GetSubscriberError = GetSubscriberErrors[keyof GetSubscriberErrors];
export type GetSubscriberResponses = {
    200: SubscribersGetSubscriberResponse200;
};
export type GetSubscriberResponse = GetSubscriberResponses[keyof GetSubscriberResponses];
export type UpdateSubscriberData = {
    body?: SubscriberPut;
    headers: {
        Accept: string;
    };
    path: {
        subscriber_id: number;
    };
    query?: never;
    url: '/customers/subscribers/{subscriber_id}';
};
export type UpdateSubscriberErrors = {
    404: UpdateSubscriberRequestNotFoundError;
    409: UpdateSubscriberRequestConflictError;
    422: UpdateSubscriberRequestUnprocessableEntityError;
};
export type UpdateSubscriberError = UpdateSubscriberErrors[keyof UpdateSubscriberErrors];
export type UpdateSubscriberResponses = {
    200: SubscribersUpdateSubscriberResponse200;
};
export type UpdateSubscriberResponse = UpdateSubscriberResponses[keyof UpdateSubscriberResponses];
