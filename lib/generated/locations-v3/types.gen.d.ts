export type BlackoutHours = Array<{
    label: string;
    date: string;
    open: boolean;
    opening?: string;
    closing?: string;
    all_day?: boolean;
    annual?: boolean;
}>;
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
    [key: string]: unknown;
};
export type Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
    };
};
export type Failed = number;
export type LocationResponse = {
    id?: number;
    code?: string;
    label?: string;
    description?: string;
    managed_by_external_source?: boolean;
    type_id?: 'PHYSICAL' | 'VIRTUAL';
    enabled?: boolean;
    operating_hours?: OperatingHours;
    time_zone?: string;
    created_at?: string;
    updated_at?: string;
    address?: {
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        zip?: string;
        email?: string;
        phone?: string;
        geo_coordinates?: {
            latitude?: number;
            longitude?: number;
        };
        country_code?: string;
    };
    storefront_visibility?: boolean;
    special_hours?: Array<{
        label?: string;
        date?: string;
        open?: boolean;
        opening?: string;
        closing?: string;
        all_day?: boolean;
        annual?: boolean;
    }>;
};
export type type_id = 'PHYSICAL' | 'VIRTUAL';
export type LocationsCreateRequest = Array<{
    code?: string;
    label?: string;
    description?: string;
    managed_by_external_source?: boolean;
    type_id?: 'PHYSICAL' | 'VIRTUAL';
    enabled?: boolean;
    operating_hours?: OperatingHours;
    time_zone?: string;
    address?: {
        address1: string;
        address2?: string;
        city: string;
        state: string;
        zip: string;
        email: string;
        phone?: string;
        geo_coordinates: {
            latitude: number;
            longitude: number;
        };
        country_code: string;
    };
    storefront_visibility?: boolean;
    special_hours?: BlackoutHours;
}>;
export type LocationsUpdateRequest = Array<{
    id: number;
    code?: string;
    label?: string;
    description?: string;
    managed_by_external_source?: boolean;
    type_id?: 'PHYSICAL' | 'VIRTUAL';
    enabled?: boolean;
    operating_hours?: OperatingHours;
    time_zone?: string;
    address?: {
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        zip?: string;
        email?: string;
        phone?: string;
        geo_coordinates?: {
            latitude: number;
            longitude: number;
        };
        country_code: 'US';
    };
    storefront_visibility?: boolean;
    special_hours?: BlackoutHours;
}>;
export type Meta = {
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
export type Metafield = {
    id?: number;
} & MetafieldBase & {
    resource_type?: 'location';
    readonly resource_id?: number;
} & {
    date_created?: string;
    date_modified?: string;
    readonly owner_client_id?: string;
};
export type resource_type = 'location';
export type MetafieldBase = {
    key?: string;
    value?: string;
    namespace?: string;
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
};
export type permission_set = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetafieldBase_Post = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetafieldBase_Put = {
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<(number)>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponse_POST_PUT = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponsePartialSuccess_DELETE = {
    data?: Array<(number)>;
    errors?: Array<Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccess_POST_PUT = {
    data?: Array<Metafield>;
    errors?: Array<Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type OperatingHours = {
    sunday?: OperatingHoursForDay;
    monday?: OperatingHoursForDay;
    tuesday?: OperatingHoursForDay;
    wednesday?: OperatingHoursForDay;
    thursday?: OperatingHoursForDay;
    friday?: OperatingHoursForDay;
    saturday?: OperatingHoursForDay;
};
export type OperatingHoursForDay = {
    open?: boolean;
    opening?: string;
    closing?: string;
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type Parameterdate_created_max = string;
export type Parameterdate_created_min = string;
export type Parameterdate_modified_max = string;
export type Parameterdate_modified_min = string;
export type ParameterDirectionParam = 'asc' | 'desc';
export type ParameterIncludeFieldsParamMetafields = Array<('resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date modified')>;
export type ParameterLimitParam = number;
export type ParameterLocationCodeFilterParam = string;
export type ParameterLocationIdParam = number;
export type ParameterLocationIdsParam = number;
export type ParameterLocationIsActiveParam = boolean;
export type ParameterLocationIsDefaultParam = boolean;
export type ParameterLocationManagedByExternalSourceParam = boolean;
export type ParameterLocationStorefrontVisibilityParam = boolean;
export type ParameterLocationTypeIdParam = string;
export type ParameterMetafieldIdParam = number;
export type ParameterMetafieldKeyInParam = Array<(string)>;
export type ParameterMetafieldKeyParam = string;
export type ParameterMetafieldNamespaceInParam = Array<(string)>;
export type ParameterMetafieldNamespaceParam = string;
export type ParameterPageParam = number;
export type SimpleTransactionResponse = {
    transaction_id?: string;
};
export type Success = number;
export type Total = number;
export type WriteCollectionPartialSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type CreateLocationsData = {
    body: LocationsCreateRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateLocationsResponse = (SimpleTransactionResponse);
export type CreateLocationsError = (ErrorResponse);
export type GetLocationsData = {
    headers: {
        Accept: string;
    };
    query?: {
        is_active?: boolean;
        is_default?: boolean;
        limit?: number;
        'location_code:in'?: string;
        'location_id:in'?: number;
        managed_by_external_source?: boolean;
        page?: number;
        storefront_visibility?: boolean;
        'type_id:in'?: string;
    };
};
export type GetLocationsResponse = ({
    data?: Array<LocationResponse>;
    meta?: Meta;
});
export type GetLocationsError = unknown;
export type UpdateLocationsData = {
    body: LocationsUpdateRequest;
    headers: {
        Accept: string;
    };
};
export type UpdateLocationsResponse = (SimpleTransactionResponse);
export type UpdateLocationsError = (ErrorResponse);
export type DeleteLocationsData = {
    headers: {
        Accept: string;
    };
    query: {
        'location_id:in': number;
    };
};
export type DeleteLocationsResponse = (SimpleTransactionResponse);
export type DeleteLocationsError = (ErrorResponse);
export type GetLocationMetafieldsData = {
    headers: {
        Accept: string;
    };
    path: {
        location_id: number;
    };
};
export type GetLocationMetafieldsResponse = ({
    data?: Array<Metafield>;
    meta?: {
        pagination?: {
            total?: number;
            count?: number;
            per_page?: number;
            current_page?: number;
            total_pages?: number;
            links?: {
                current?: string;
            };
        };
    };
});
export type GetLocationMetafieldsError = unknown;
export type CreateLocationMetafieldData = {
    body: MetafieldBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        location_id: number;
    };
};
export type CreateLocationMetafieldResponse = ({
    data?: Metafield;
    meta?: {
        [key: string]: unknown;
    };
});
export type CreateLocationMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | {
    status?: number;
    title?: string;
    type?: string;
} | ErrorResponse);
export type GetLocationMetafieldData = {
    headers: {
        Accept: string;
    };
    path: {
        location_id: number;
        metafield_id: number;
    };
};
export type GetLocationMetafieldResponse = ({
    data?: Metafield;
    meta?: {
        [key: string]: unknown;
    };
});
export type GetLocationMetafieldError = (ErrorResponse);
export type UpdateLocationMetafieldData = {
    body: MetafieldBase;
    headers: {
        Accept: string;
    };
    path: {
        location_id: number;
        metafield_id: number;
    };
};
export type UpdateLocationMetafieldResponse = ({
    data?: Metafield;
    meta?: {
        [key: string]: unknown;
    };
});
export type UpdateLocationMetafieldError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | ErrorResponse);
export type DeleteLocationMetafieldData = {
    headers: {
        Accept: string;
    };
    path: {
        location_id: number;
        metafield_id: number;
    };
};
export type DeleteLocationMetafieldResponse = (void);
export type DeleteLocationMetafieldError = (ErrorResponse);
export type GetLocationsMetafieldsData = {
    query?: {
        'date_created:max'?: string;
        'date_created:min'?: string;
        'date_modified:max'?: string;
        'date_modified:min'?: string;
        direction?: 'asc' | 'desc';
        include_fields?: Array<('resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date modified')>;
        key?: string;
        'key:in'?: Array<(string)>;
        limit?: number;
        namespace?: string;
        'namespace:in'?: Array<(string)>;
        page?: number;
    };
};
export type GetLocationsMetafieldsResponse = (MetaFieldCollectionResponse);
export type GetLocationsMetafieldsError = unknown;
export type CreateLocationsMetafieldsData = {
    body?: Array<(MetafieldBase_Post & {
        resource_id: number;
    })>;
};
export type CreateLocationsMetafieldsResponse = (MetaFieldCollectionResponse_POST_PUT);
export type CreateLocationsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type UpdateLocationsMetafieldsData = {
    body?: Array<(MetafieldBase_Put & {
        id: string;
    })>;
};
export type UpdateLocationsMetafieldsResponse = (MetaFieldCollectionResponse_POST_PUT);
export type UpdateLocationsMetafieldsError = ({
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
} | MetaFieldCollectionResponsePartialSuccess_POST_PUT);
export type DeleteLocationsMetafieldsData = {
    body?: Array<(number)>;
};
export type DeleteLocationsMetafieldsResponse = (MetaFieldCollectionDeleteResponseSuccess);
export type DeleteLocationsMetafieldsError = (MetaFieldCollectionResponsePartialSuccess_DELETE);
