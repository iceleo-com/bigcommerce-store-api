export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
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
export type entity_type = 'product' | 'category' | 'brand' | 'page';
export type CustomTemplateAssociationUpsert = {
    channel_id: number;
    entity_type: 'product' | 'category' | 'brand' | 'page';
    entity_id: number;
    file_name: string;
};
export type DetailedErrors = {
    [key: string]: (string);
};
export type Error = {
    status?: number;
    message?: string;
};
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};
export type ErrorResponse400 = {
    schema?: Error;
};
export type ErrorResponse404 = {
    schema?: Error;
};
export type ErrorResponse409 = {
    schema?: Error;
};
export type ErrorResponse422 = {
    schema?: Error;
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
export type ParameterAccept = string;
export type ParameterChannelIdQuery = number;
export type ParameterContentType = string;
export type ParameterEntityIdInQuery = Array<(number)>;
export type ParameterIdInQuery = Array<(number)>;
export type ParameterIsValidQuery = boolean;
export type ParameterLimitQuery = number;
export type ParameterPageQuery = number;
export type ParameterTypeQuery = 'product' | 'category' | 'brand' | 'page';
export type GetCustomTemplateAssociationsData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
        'entity_id:in'?: Array<(number)>;
        is_valid?: boolean;
        limit?: number;
        page?: number;
        type?: 'product' | 'category' | 'brand' | 'page';
    };
};
export type GetCustomTemplateAssociationsResponse = ({
    data?: Array<CustomTemplateAssociation>;
    meta?: MetaPaginationObject;
});
export type GetCustomTemplateAssociationsError = unknown;
export type UpsertCustomTemplateAssociationsData = {
    body?: Array<CustomTemplateAssociationUpsert>;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type UpsertCustomTemplateAssociationsResponse = ({
    [key: string]: unknown;
});
export type UpsertCustomTemplateAssociationsError = (ErrorResponse);
export type DeleteCustomTemplateAssociationsData = {
    headers: {
        Accept: string;
    };
    query?: {
        channel_id?: number;
        'entity_id:in'?: Array<(number)>;
        'id:in'?: Array<(number)>;
        type?: 'product' | 'category' | 'brand' | 'page';
    };
};
export type DeleteCustomTemplateAssociationsResponse = (void);
export type DeleteCustomTemplateAssociationsError = unknown;
