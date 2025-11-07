export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type BasePickupMethod = {
    location_id?: number;
    display_name?: string;
    collection_instructions?: string;
    collection_time_description?: string;
    location_identity?: number;
};
export type PickupMethodResponse = {
    id?: number;
} & BasePickupMethod & {
    date_created?: string;
    date_modified?: string;
};
export type MetaCollection = {
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
export type Accept = string;
export type ContentType = string;
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
    204: void;
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
        sort?: 'date_modified:asc' | 'date_modified:desc' | 'name:asc' | 'name:desc';
    };
    url: '/pickup/methods';
};
export type GetPickupMethodsResponses = {
    200: {
        data?: Array<PickupMethodResponse>;
        meta?: MetaCollection;
    };
};
export type GetPickupMethodsResponse = GetPickupMethodsResponses[keyof GetPickupMethodsResponses];
export type PostPickupMethodsData = {
    body: Array<BasePickupMethod>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/pickup/methods';
};
export type PostPickupMethodsResponses = {
    200: {
        data?: Array<PickupMethodResponse>;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type PostPickupMethodsResponse = PostPickupMethodsResponses[keyof PostPickupMethodsResponses];
export type PutPickupMethodsData = {
    body: Array<{
        id?: number;
    } & BasePickupMethod>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/pickup/methods';
};
export type PutPickupMethodsResponses = {
    200: {
        data?: Array<PickupMethodResponse>;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type PutPickupMethodsResponse = PutPickupMethodsResponses[keyof PutPickupMethodsResponses];
