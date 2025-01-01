export type BasePickupMethod = {
    location_id?: number;
    display_name?: string;
    collection_instructions?: string;
    collection_time_description?: string;
    location_identity?: number;
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
export type ParameterAccept = string;
export type ParameterContentType = string;
export type PickupMethodResponse = {
    id?: number;
} & BasePickupMethod & {
    date_created?: string;
    date_modified?: string;
};
export type GetPickupMethodsData = {
    headers: {
        Accept: string;
    };
    query?: {
        date_created?: string;
        'date_created:max'?: string;
        'date_created:min'?: string;
        date_modified?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        'id:in'?: number;
        limit?: number;
        page?: number;
        sort?: 'date_modified:asc' | 'date_modified:desc' | 'name:asc' | 'name:desc';
    };
};
export type GetPickupMethodsResponse = ({
    data?: Array<PickupMethodResponse>;
    meta?: MetaCollection;
});
export type GetPickupMethodsError = unknown;
export type PostPickupMethodsData = {
    body: Array<BasePickupMethod>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type PostPickupMethodsResponse = ({
    data?: Array<PickupMethodResponse>;
    meta?: {
        [key: string]: unknown;
    };
});
export type PostPickupMethodsError = unknown;
export type PutPickupMethodsData = {
    body: Array<({
        id?: number;
    } & BasePickupMethod)>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type PutPickupMethodsResponse = ({
    data?: Array<PickupMethodResponse>;
    meta?: {
        [key: string]: unknown;
    };
});
export type PutPickupMethodsError = unknown;
export type DeletePickupMethodsData = {
    headers: {
        Accept: string;
    };
    query: {
        'id:in': number;
    };
};
export type DeletePickupMethodsResponse = (void);
export type DeletePickupMethodsError = unknown;
