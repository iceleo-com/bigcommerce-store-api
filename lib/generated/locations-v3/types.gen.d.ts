export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
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
export type CursorPagination = {
    count?: number;
    per_page?: number;
    start_cursor?: string;
    end_cursor?: string;
    links?: {
        previous?: string;
        current?: string;
        next?: string;
    };
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
    };
};
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
export type OperatingHoursForDay = {
    open?: boolean;
    opening?: string;
    closing?: string;
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
export type BlackoutHours = Array<{
    label: string;
    date: string;
    open: boolean;
    opening?: string;
    closing?: string;
    all_day?: boolean;
    annual?: boolean;
}>;
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
export type SimpleTransactionResponse = {
    transaction_id?: string;
};
export type MetafieldBase = {
    key?: string;
    value?: string;
    namespace?: string;
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    description?: string;
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
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponsePostPut = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: CollectionMeta;
};
export type MetaFieldCollectionResponsePartialSuccessPostPut = {
    data?: Array<Metafield>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionResponsePartialSuccessDelete = {
    data?: Array<number>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
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
export type Total = number;
export type Success = number;
export type Failed = number;
export type _Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
export type CollectionMeta = {
    pagination?: Pagination;
    cursor_pagination?: CursorPagination;
    [key: string]: unknown | Pagination | CursorPagination | undefined;
};
export type MetafieldBasePost = {
    permission_set: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace: string;
    key: string;
    value: string;
    description?: string;
};
export type MetafieldBasePut = {
    permission_set?: 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
};
export type MetafieldWritable = {
    id?: number;
} & MetafieldBase & {
    resource_type?: 'location';
} & {
    date_created?: string;
    date_modified?: string;
};
export type ErrorDetailWritable = {
    [key: string]: unknown;
};
export type BeforeCursorParam = string;
export type AfterCursorParam = string;
export type Accept = string;
export type ContentType = string;
export type LocationIdParam = number;
export type LocationIdsParam = number;
export type LocationCodeFilterParam = string;
export type LocationIsDefaultParam = boolean;
export type LocationTypeIdParam = string;
export type LocationManagedByExternalSourceParam = boolean;
export type LocationIsActiveParam = boolean;
export type LocationStorefrontVisibilityParam = boolean;
export type MetafieldIdParam = number;
export type PageParam = number;
export type MetafieldKeyParam = string;
export type MetafieldKeyInParam = Array<string>;
export type MetafieldNamespaceParam = string;
export type MetafieldNamespaceInParam = Array<string>;
export type LimitParam = number;
export type DirectionParam = 'asc' | 'desc';
export type DateCreatedMin = string;
export type DateCreatedMax = string;
export type DateModifiedMax = string;
export type DateModifiedMin = string;
export type IncludeFieldsParamMetafields = Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date modified'>;
export type DeleteLocationsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        'location_id:in': number;
    };
    url: '/inventory/locations';
};
export type DeleteLocationsErrors = {
    404: ErrorResponse;
    422: ErrorResponse;
};
export type DeleteLocationsError = DeleteLocationsErrors[keyof DeleteLocationsErrors];
export type DeleteLocationsResponses = {
    200: SimpleTransactionResponse;
};
export type DeleteLocationsResponse = DeleteLocationsResponses[keyof DeleteLocationsResponses];
export type GetLocationsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'location_id:in'?: number;
        'location_code:in'?: string;
        is_default?: boolean;
        'type_id:in'?: string;
        managed_by_external_source?: boolean;
        is_active?: boolean;
        storefront_visibility?: boolean;
        page?: number;
        limit?: number;
    };
    url: '/inventory/locations';
};
export type GetLocationsResponses = {
    200: {
        data?: Array<LocationResponse>;
        meta?: Meta;
    };
};
export type GetLocationsResponse = GetLocationsResponses[keyof GetLocationsResponses];
export type CreateLocationsData = {
    body: LocationsCreateRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/inventory/locations';
};
export type CreateLocationsErrors = {
    422: ErrorResponse;
};
export type CreateLocationsError = CreateLocationsErrors[keyof CreateLocationsErrors];
export type CreateLocationsResponses = {
    200: SimpleTransactionResponse;
};
export type CreateLocationsResponse = CreateLocationsResponses[keyof CreateLocationsResponses];
export type UpdateLocationsData = {
    body: LocationsUpdateRequest;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/inventory/locations';
};
export type UpdateLocationsErrors = {
    422: ErrorResponse;
};
export type UpdateLocationsError = UpdateLocationsErrors[keyof UpdateLocationsErrors];
export type UpdateLocationsResponses = {
    200: SimpleTransactionResponse;
};
export type UpdateLocationsResponse = UpdateLocationsResponses[keyof UpdateLocationsResponses];
export type GetLocationMetafieldsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        location_id: number;
    };
    query?: {
        page?: number;
        limit?: number;
        key?: string;
        'key:in'?: Array<string>;
        namespace?: string;
        'namespace:in'?: Array<string>;
        direction?: 'asc' | 'desc';
        include_fields?: Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date modified'>;
        'date_created:min'?: string;
        'date_created:max'?: string;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
        before?: string;
        after?: string;
    };
    url: '/inventory/locations/{location_id}/metafields';
};
export type GetLocationMetafieldsResponses = {
    200: {
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
    };
};
export type GetLocationMetafieldsResponse = GetLocationMetafieldsResponses[keyof GetLocationMetafieldsResponses];
export type CreateLocationMetafieldData = {
    body: MetafieldBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        location_id: number;
    };
    query?: never;
    url: '/inventory/locations/{location_id}/metafields';
};
export type CreateLocationMetafieldErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    409: {
        status?: number;
        title?: string;
        type?: string;
    };
    422: ErrorResponse;
};
export type CreateLocationMetafieldError = CreateLocationMetafieldErrors[keyof CreateLocationMetafieldErrors];
export type CreateLocationMetafieldResponses = {
    200: {
        data?: Metafield;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type CreateLocationMetafieldResponse = CreateLocationMetafieldResponses[keyof CreateLocationMetafieldResponses];
export type DeleteLocationMetafieldData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        location_id: number;
        metafield_id: number;
    };
    query?: never;
    url: '/inventory/locations/{location_id}/metafields/{metafield_id}';
};
export type DeleteLocationMetafieldErrors = {
    404: ErrorResponse;
};
export type DeleteLocationMetafieldError = DeleteLocationMetafieldErrors[keyof DeleteLocationMetafieldErrors];
export type DeleteLocationMetafieldResponses = {
    204: void;
};
export type DeleteLocationMetafieldResponse = DeleteLocationMetafieldResponses[keyof DeleteLocationMetafieldResponses];
export type GetLocationMetafieldData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        location_id: number;
        metafield_id: number;
    };
    query?: never;
    url: '/inventory/locations/{location_id}/metafields/{metafield_id}';
};
export type GetLocationMetafieldErrors = {
    404: ErrorResponse;
};
export type GetLocationMetafieldError = GetLocationMetafieldErrors[keyof GetLocationMetafieldErrors];
export type GetLocationMetafieldResponses = {
    200: {
        data?: Metafield;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type GetLocationMetafieldResponse = GetLocationMetafieldResponses[keyof GetLocationMetafieldResponses];
export type UpdateLocationMetafieldData = {
    body: MetafieldBase;
    headers: {
        Accept: string;
    };
    path: {
        location_id: number;
        metafield_id: number;
    };
    query?: never;
    url: '/inventory/locations/{location_id}/metafields/{metafield_id}';
};
export type UpdateLocationMetafieldErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    404: ErrorResponse;
};
export type UpdateLocationMetafieldError = UpdateLocationMetafieldErrors[keyof UpdateLocationMetafieldErrors];
export type UpdateLocationMetafieldResponses = {
    200: {
        data?: Metafield;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type UpdateLocationMetafieldResponse = UpdateLocationMetafieldResponses[keyof UpdateLocationMetafieldResponses];
export type DeleteLocationsMetafieldsData = {
    body?: Array<number>;
    path?: never;
    query?: never;
    url: '/inventory/locations/metafields';
};
export type DeleteLocationsMetafieldsErrors = {
    422: MetaFieldCollectionResponsePartialSuccessDelete;
};
export type DeleteLocationsMetafieldsError = DeleteLocationsMetafieldsErrors[keyof DeleteLocationsMetafieldsErrors];
export type DeleteLocationsMetafieldsResponses = {
    200: MetaFieldCollectionDeleteResponseSuccess;
};
export type DeleteLocationsMetafieldsResponse = DeleteLocationsMetafieldsResponses[keyof DeleteLocationsMetafieldsResponses];
export type GetLocationsMetafieldsData = {
    body?: never;
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        key?: string;
        'key:in'?: Array<string>;
        namespace?: string;
        'namespace:in'?: Array<string>;
        direction?: 'asc' | 'desc';
        include_fields?: Array<'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date modified'>;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
        'date_created:min'?: string;
        'date_created:max'?: string;
        before?: string;
        after?: string;
    };
    url: '/inventory/locations/metafields';
};
export type GetLocationsMetafieldsResponses = {
    200: MetaFieldCollectionResponse;
};
export type GetLocationsMetafieldsResponse = GetLocationsMetafieldsResponses[keyof GetLocationsMetafieldsResponses];
export type CreateLocationsMetafieldsData = {
    body?: Array<MetafieldBasePost & {
        resource_id: number;
    }>;
    path?: never;
    query?: never;
    url: '/inventory/locations/metafields';
};
export type CreateLocationsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateLocationsMetafieldsError = CreateLocationsMetafieldsErrors[keyof CreateLocationsMetafieldsErrors];
export type CreateLocationsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type CreateLocationsMetafieldsResponse = CreateLocationsMetafieldsResponses[keyof CreateLocationsMetafieldsResponses];
export type UpdateLocationsMetafieldsData = {
    body?: Array<MetafieldBasePut & {
        id: string;
    }>;
    path?: never;
    query?: never;
    url: '/inventory/locations/metafields';
};
export type UpdateLocationsMetafieldsErrors = {
    400: {
        status?: number;
        title?: string;
        type?: string;
        detail?: string;
    };
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateLocationsMetafieldsError = UpdateLocationsMetafieldsErrors[keyof UpdateLocationsMetafieldsErrors];
export type UpdateLocationsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type UpdateLocationsMetafieldsResponse = UpdateLocationsMetafieldsResponses[keyof UpdateLocationsMetafieldsResponses];
