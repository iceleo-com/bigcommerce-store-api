export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type StorefrontCustomTemplateAssociationsGetParametersType = 'product' | 'category' | 'brand' | 'page';
export type CustomTemplateAssociationEntityType = 'product' | 'category' | 'brand' | 'page';
export type CustomTemplateAssociation = {
    id?: number;
    channel_id?: number;
    entity_type?: CustomTemplateAssociationEntityType;
    entity_id?: number;
    file_name?: string;
    is_valid?: boolean;
    date_created?: string;
    date_modified?: string;
};
export type MetaPaginationObjectPaginationLinks = {
    previous?: string;
    next?: string;
    current?: string;
};
export type MetaPaginationObjectPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: MetaPaginationObjectPaginationLinks;
};
export type MetaPaginationObject = {
    pagination?: MetaPaginationObjectPagination;
};
export type CustomTemplateAssociationsGetCustomTemplateAssociationsResponse200 = {
    data?: Array<CustomTemplateAssociation>;
    meta?: MetaPaginationObject;
};
export type CustomTemplateAssociationUpsertEntityType = 'product' | 'category' | 'brand' | 'page';
export type CustomTemplateAssociationUpsert = {
    channel_id: number;
    entity_type: CustomTemplateAssociationUpsertEntityType;
    entity_id: number;
    file_name: string;
};
export type CustomTemplateAssociationsUpsertCustomTemplateAssociationsResponse200 = {
    [key: string]: unknown;
};
export type DetailedErrors = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
    errors?: DetailedErrors;
};
export type StorefrontCustomTemplateAssociationsDeleteParametersType = 'product' | 'category' | 'brand' | 'page';
export type DeleteCustomTemplateAssociationsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'id:in'?: Array<number>;
        channel_id?: number;
        type?: StorefrontCustomTemplateAssociationsDeleteParametersType;
        'entity_id:in'?: Array<number>;
    };
    url: '/storefront/custom-template-associations';
};
export type DeleteCustomTemplateAssociationsResponses = {
    204: {
        [key: string]: unknown;
    };
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
        'entity_id:in'?: Array<number>;
        type?: StorefrontCustomTemplateAssociationsGetParametersType;
        limit?: number;
        page?: number;
        is_valid?: boolean;
    };
    url: '/storefront/custom-template-associations';
};
export type GetCustomTemplateAssociationsResponses = {
    200: CustomTemplateAssociationsGetCustomTemplateAssociationsResponse200;
};
export type GetCustomTemplateAssociationsResponse = GetCustomTemplateAssociationsResponses[keyof GetCustomTemplateAssociationsResponses];
export type UpsertCustomTemplateAssociationsData = {
    body?: Array<CustomTemplateAssociationUpsert>;
    headers: {
        Accept: string;
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
    200: CustomTemplateAssociationsUpsertCustomTemplateAssociationsResponse200;
};
export type UpsertCustomTemplateAssociationsResponse = UpsertCustomTemplateAssociationsResponses[keyof UpsertCustomTemplateAssociationsResponses];
