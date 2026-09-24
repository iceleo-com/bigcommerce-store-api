export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type _Error = {
    status?: number;
    message?: string;
};
export type ErrorResponse400 = {
    schema?: _Error;
};
export type ErrorResponse404 = {
    schema?: _Error;
};
export type ErrorResponse409 = {
    schema?: _Error;
};
export type ErrorResponse422 = {
    schema?: _Error;
};
export type MetaPaginationObject = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
        links?: {
            next?: string;
            current?: string;
        };
    };
};
export type DetailedErrors = {
    [key: string]: string;
};
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};
export type CustomTemplateAssociation = {
    id?: number;
    channel_id?: number;
    entity_type?: 'product' | 'category' | 'brand' | 'page';
    entity_id?: number;
    file_name?: string;
    is_valid?: boolean;
    date_created?: string;
    date_modified?: string;
};
export type CustomTemplateAssociationUpsert = {
    channel_id: number;
    entity_type: 'product' | 'category' | 'brand' | 'page';
    entity_id: number;
    file_name: string;
};
export type Accept = string;
export type ContentType = string;
export type DeleteCustomTemplateAssociationsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'id:in'?: number;
        'entity_id:in'?: number;
        channel_id?: number;
        type?: 'product' | 'category' | 'brand' | 'page';
    };
    url: '/storefront/custom-template-associations';
};
export type DeleteCustomTemplateAssociationsResponses = {
    204: void;
};
export type DeleteCustomTemplateAssociationsResponse = DeleteCustomTemplateAssociationsResponses[keyof DeleteCustomTemplateAssociationsResponses];
export type GetCustomTemplateAssociationsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        channel_id?: number;
        'entity_id:in'?: string;
        limit?: number;
        page?: number;
        type?: 'product' | 'category' | 'brand' | 'page';
        is_valid?: boolean;
    };
    url: '/storefront/custom-template-associations';
};
export type GetCustomTemplateAssociationsResponses = {
    200: {
        data?: Array<CustomTemplateAssociation>;
        meta?: MetaPaginationObject;
    };
};
export type GetCustomTemplateAssociationsResponse = GetCustomTemplateAssociationsResponses[keyof GetCustomTemplateAssociationsResponses];
export type UpsertCustomTemplateAssociationsData = {
    body?: Array<CustomTemplateAssociationUpsert>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/storefront/custom-template-associations';
};
export type UpsertCustomTemplateAssociationsErrors = {
    422: ErrorResponse;
};
export type UpsertCustomTemplateAssociationsError = UpsertCustomTemplateAssociationsErrors[keyof UpsertCustomTemplateAssociationsErrors];
export type UpsertCustomTemplateAssociationsResponses = {
    200: {
        [key: string]: unknown;
    };
};
export type UpsertCustomTemplateAssociationsResponse = UpsertCustomTemplateAssociationsResponses[keyof UpsertCustomTemplateAssociationsResponses];
