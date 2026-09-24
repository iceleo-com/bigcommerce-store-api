export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type PickupMethodsPutRequestBodyContentApplicationJsonSchemaItems = {
    id?: number;
    location_id?: number;
    display_name?: string;
    collection_instructions?: string;
    collection_time_description?: string;
    location_identity?: number;
};
export type PickupMethodsPutPickupMethodsResponse200 = {
    data?: Array<PickupMethodResponse>;
    meta?: PickupMethodsPutResponsesContentApplicationJsonSchemaMeta;
};
export type PickupMethodsPutResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type PickupMethodResponse = {
    id?: number;
    location_id?: number;
    display_name?: string;
    collection_instructions?: string;
    collection_time_description?: string;
    location_identity?: number;
    date_created?: string;
    date_modified?: string;
};
export type BasePickupMethod = {
    location_id?: number;
    display_name?: string;
    collection_instructions?: string;
    collection_time_description?: string;
    location_identity?: number;
};
export type PickupMethodsPostPickupMethodsResponse200 = {
    data?: Array<PickupMethodResponse>;
    meta?: PickupMethodsPostResponsesContentApplicationJsonSchemaMeta;
};
export type PickupMethodsPostResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type PickupMethodsGetPickupMethodsResponse200 = {
    data?: Array<PickupMethodResponse>;
    meta?: MetaCollection;
};
export type MetaCollection = {
    pagination?: MetaCollectionPagination;
};
export type MetaCollectionPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: MetaCollectionPaginationLinks;
};
export type MetaCollectionPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type PickupMethodsGetParametersSort = 'date_modified:asc' | 'date_modified:desc' | 'name:asc' | 'name:desc';
export type DeletePickupMethodsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        'id:in': number;
    };
    url: '/pickup/methods';
};
export type DeletePickupMethodsResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeletePickupMethodsResponse = DeletePickupMethodsResponses[keyof DeletePickupMethodsResponses];
export type GetPickupMethodsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'id:in'?: number;
        limit?: number;
        page?: number;
        date_created?: string;
        'date_created:min'?: string;
        'date_created:max'?: string;
        date_modified?: string;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
        sort?: PickupMethodsGetParametersSort;
    };
    url: '/pickup/methods';
};
export type GetPickupMethodsResponses = {
    200: PickupMethodsGetPickupMethodsResponse200;
};
export type GetPickupMethodsResponse = GetPickupMethodsResponses[keyof GetPickupMethodsResponses];
export type PostPickupMethodsData = {
    body?: Array<BasePickupMethod>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/pickup/methods';
};
export type PostPickupMethodsResponses = {
    200: PickupMethodsPostPickupMethodsResponse200;
};
export type PostPickupMethodsResponse = PostPickupMethodsResponses[keyof PostPickupMethodsResponses];
export type PutPickupMethodsData = {
    body?: Array<PickupMethodsPutRequestBodyContentApplicationJsonSchemaItems>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/pickup/methods';
};
export type PutPickupMethodsResponses = {
    200: PickupMethodsPutPickupMethodsResponse200;
};
export type PutPickupMethodsResponse = PutPickupMethodsResponses[keyof PutPickupMethodsResponses];
