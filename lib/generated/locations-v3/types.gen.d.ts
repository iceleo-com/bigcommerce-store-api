export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type MetaFieldCollectionResponsePartialSuccessDelete = {
    data?: Array<number>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type WriteCollectionPartialSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type _Error = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorDetail;
};
export type ErrorDetail = {
    [key: string]: unknown;
};
export type MetaFieldCollectionDeleteResponseSuccess = {
    data?: Array<number>;
    errors?: Array<unknown>;
    meta?: WriteCollectionSuccessMeta;
};
export type WriteCollectionSuccessMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type InventoryLocationsMetafieldsPutRequestBodyContentApplicationJsonSchemaItems = {
    permission_set?: InventoryLocationsMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
    namespace?: string;
    key?: string;
    value?: string;
    description?: string;
    id: number;
};
export type InventoryLocationsMetafieldsPutRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type UpdateLocationsMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type InventoryLocationsMetafieldsPostRequestBodyContentApplicationJsonSchemaItems = {
    permission_set: InventoryLocationsMetafieldsPostRequestBodyContentApplicationJsonSchemaItemsPermissionSet;
    namespace: string;
    key: string;
    value: string;
    description?: string;
    resource_id: number;
};
export type InventoryLocationsMetafieldsPostRequestBodyContentApplicationJsonSchemaItemsPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type MetaFieldCollectionResponsePartialSuccessPostPut = {
    data?: Array<Metafield>;
    errors?: Array<_Error>;
    meta?: WriteCollectionPartialSuccessMeta;
};
export type Metafield = {
    id?: number;
    key?: string;
    value?: string;
    namespace?: string;
    permission_set?: MetafieldPermissionSet;
    description?: string;
    resource_type?: MetafieldResourceType;
    resource_id?: number;
    date_created?: string;
    date_modified?: string;
    owner_client_id?: string;
};
export type MetafieldResourceType = 'location';
export type MetafieldPermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type CreateLocationsMetafieldsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type MetaFieldCollectionResponsePostPut = {
    data?: Array<Metafield>;
    errors?: Array<unknown>;
    meta?: MetaFieldCollectionResponsePostPutMeta;
};
export type MetaFieldCollectionResponsePostPutMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type MetaFieldCollectionResponse = {
    data?: Array<Metafield>;
    meta?: CollectionMeta & MetafieldCursorPaginationMeta;
};
export type CollectionMeta = {
    pagination?: CollectionMetaPagination;
};
export type CollectionMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: CollectionMetaPaginationLinks;
};
export type CollectionMetaPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type InventoryLocationsMetafieldsGetParametersIncludeFieldsSchemaItems = 'resource_id' | 'key' | 'value' | 'namespace' | 'permission_set' | 'resource_type' | 'description' | 'owner_client_id' | 'date_created' | 'date modified';
export type InventoryLocationsMetafieldsGetParametersDirection = 'asc' | 'desc';
export type UpdateLocationMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type MetafieldsUpdateLocationMetafieldResponse200 = {
    data?: Metafield;
    meta?: InventoryLocationsLocationIdMetafieldsMetafieldIdPutResponsesContentApplicationJsonSchemaMeta;
};
export type InventoryLocationsLocationIdMetafieldsMetafieldIdPutResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type MetafieldsGetLocationMetafieldResponse200 = {
    data?: Metafield;
    meta?: InventoryLocationsLocationIdMetafieldsMetafieldIdGetResponsesContentApplicationJsonSchemaMeta;
};
export type InventoryLocationsLocationIdMetafieldsMetafieldIdGetResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type MetafieldBase = {
    key?: string;
    value?: string;
    namespace?: string;
    permission_set?: MetafieldBasePermissionSet;
    description?: string;
};
export type MetafieldBasePermissionSet = 'app_only' | 'read' | 'write' | 'read_and_sf_access' | 'write_and_sf_access';
export type CreateLocationMetafieldRequestConflictError = {
    status?: number;
    title?: string;
    type?: string;
};
export type CreateLocationMetafieldRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type MetafieldsCreateLocationMetafieldResponse200 = {
    data?: Metafield;
    meta?: InventoryLocationsLocationIdMetafieldsPostResponsesContentApplicationJsonSchemaMeta;
};
export type InventoryLocationsLocationIdMetafieldsPostResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type MetafieldsGetLocationMetafieldsResponse200 = {
    data?: Array<Metafield>;
    meta?: InventoryLocationsLocationIdMetafieldsGetResponsesContentApplicationJsonSchemaMeta & MetafieldCursorPaginationMeta;
};
export type InventoryLocationsLocationIdMetafieldsGetResponsesContentApplicationJsonSchemaMeta = {
    pagination?: InventoryLocationsLocationIdMetafieldsGetResponsesContentApplicationJsonSchemaMetaPagination;
};
export type InventoryLocationsLocationIdMetafieldsGetResponsesContentApplicationJsonSchemaMetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: InventoryLocationsLocationIdMetafieldsGetResponsesContentApplicationJsonSchemaMetaPaginationLinks;
};
export type InventoryLocationsLocationIdMetafieldsGetResponsesContentApplicationJsonSchemaMetaPaginationLinks = {
    current?: string;
};
export type LocationsUpdateRequest = Array<LocationsUpdateRequestItems>;
export type LocationsUpdateRequestItems = {
    id: number;
    code?: string;
    label?: string;
    description?: string;
    managed_by_external_source?: boolean;
    type_id?: LocationsUpdateRequestItemsTypeId;
    enabled?: boolean;
    operating_hours?: OperatingHours;
    time_zone?: string;
    address?: LocationsUpdateRequestItemsAddress;
    storefront_visibility?: boolean;
    special_hours?: BlackoutHours;
};
export type BlackoutHours = Array<BlackoutHoursItems>;
export type BlackoutHoursItems = {
    label: string;
    date: string;
    open: boolean;
    opening?: string;
    closing?: string;
    all_day?: boolean;
    annual?: boolean;
};
export type LocationsUpdateRequestItemsAddress = {
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
    email?: string;
    phone?: string;
    geo_coordinates?: LocationsUpdateRequestItemsAddressGeoCoordinates;
    country_code: LocationsUpdateRequestItemsAddressCountryCode;
};
export type LocationsUpdateRequestItemsAddressCountryCode = 'US';
export type LocationsUpdateRequestItemsAddressGeoCoordinates = {
    latitude: string;
    longitude: string;
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
export type LocationsUpdateRequestItemsTypeId = 'PHYSICAL' | 'VIRTUAL';
export type LocationsGetLocationsResponse200 = {
    data?: Array<LocationResponse>;
    meta?: Meta;
};
export type Meta = {
    pagination?: MetaPagination;
};
export type MetaPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: MetaPaginationLinks;
};
export type MetaPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type LocationResponse = {
    id?: number;
    code?: string;
    label?: string;
    description?: string | null;
    managed_by_external_source?: boolean;
    type_id?: LocationResponseTypeId;
    enabled?: boolean;
    operating_hours?: OperatingHours | null;
    time_zone?: string | null;
    created_at?: string;
    updated_at?: string;
    address?: LocationResponseAddress;
    storefront_visibility?: boolean;
    special_hours?: Array<LocationResponseSpecialHoursItems>;
};
export type LocationResponseSpecialHoursItems = {
    label?: string;
    date?: string;
    open?: boolean;
    opening?: string;
    closing?: string;
    all_day?: boolean;
    annual?: boolean;
};
export type LocationResponseAddress = {
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
    email?: string;
    phone?: string;
    geo_coordinates?: LocationResponseAddressGeoCoordinates;
    country_code?: string;
};
export type LocationResponseAddressGeoCoordinates = {
    latitude?: string | null;
    longitude?: string | null;
};
export type LocationResponseTypeId = 'PHYSICAL' | 'VIRTUAL';
export type LocationsCreateRequest = Array<LocationsCreateRequestItems>;
export type LocationsCreateRequestItems = {
    code?: string;
    label?: string;
    description?: string;
    managed_by_external_source?: boolean;
    type_id?: LocationsCreateRequestItemsTypeId;
    enabled?: boolean;
    operating_hours?: OperatingHours;
    time_zone?: string;
    address?: LocationsCreateRequestItemsAddress;
    storefront_visibility?: boolean;
    special_hours?: BlackoutHours;
};
export type LocationsCreateRequestItemsAddress = {
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
    email: string;
    phone?: string;
    geo_coordinates: LocationsCreateRequestItemsAddressGeoCoordinates;
    country_code: string;
};
export type LocationsCreateRequestItemsAddressGeoCoordinates = {
    latitude: string;
    longitude: string;
};
export type LocationsCreateRequestItemsTypeId = 'PHYSICAL' | 'VIRTUAL';
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    errors?: ErrorResponseErrors;
};
export type ErrorResponseErrors = {
    [key: string]: unknown;
};
export type SimpleTransactionResponse = {
    transaction_id?: string;
};
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
    204: {
        [key: string]: unknown;
    };
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
    200: LocationsGetLocationsResponse200;
};
export type GetLocationsResponse = GetLocationsResponses[keyof GetLocationsResponses];
export type CreateLocationsData = {
    body?: LocationsCreateRequest;
    headers: {
        Accept: string;
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
    body?: LocationsUpdateRequest;
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
    query?: never;
    url: '/inventory/locations/{location_id}/metafields';
};
export type GetLocationMetafieldsResponses = {
    200: MetafieldsGetLocationMetafieldsResponse200;
};
export type GetLocationMetafieldsResponse = GetLocationMetafieldsResponses[keyof GetLocationMetafieldsResponses];
export type CreateLocationMetafieldData = {
    body?: MetafieldBase;
    headers: {
        Accept: string;
    };
    path: {
        location_id: number;
    };
    query?: never;
    url: '/inventory/locations/{location_id}/metafields';
};
export type CreateLocationMetafieldErrors = {
    400: CreateLocationMetafieldRequestBadRequestError;
    409: CreateLocationMetafieldRequestConflictError;
    422: ErrorResponse;
};
export type CreateLocationMetafieldError = CreateLocationMetafieldErrors[keyof CreateLocationMetafieldErrors];
export type CreateLocationMetafieldResponses = {
    200: MetafieldsCreateLocationMetafieldResponse200;
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
    204: {
        [key: string]: unknown;
    };
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
    200: MetafieldsGetLocationMetafieldResponse200;
};
export type GetLocationMetafieldResponse = GetLocationMetafieldResponses[keyof GetLocationMetafieldResponses];
export type UpdateLocationMetafieldData = {
    body?: MetafieldBase;
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
    400: UpdateLocationMetafieldRequestBadRequestError;
    404: ErrorResponse;
};
export type UpdateLocationMetafieldError = UpdateLocationMetafieldErrors[keyof UpdateLocationMetafieldErrors];
export type UpdateLocationMetafieldResponses = {
    200: MetafieldsUpdateLocationMetafieldResponse200;
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
        direction?: InventoryLocationsMetafieldsGetParametersDirection;
        include_fields?: Array<InventoryLocationsMetafieldsGetParametersIncludeFieldsSchemaItems>;
        'date_modified:min'?: string;
        'date_modified:max'?: string;
        'date_created:min'?: string;
        'date_created:max'?: string;
    };
    url: '/inventory/locations/metafields';
};
export type GetLocationsMetafieldsResponses = {
    200: MetaFieldCollectionResponse;
};
export type GetLocationsMetafieldsResponse = GetLocationsMetafieldsResponses[keyof GetLocationsMetafieldsResponses];
export type CreateLocationsMetafieldsData = {
    body?: Array<InventoryLocationsMetafieldsPostRequestBodyContentApplicationJsonSchemaItems>;
    path?: never;
    query?: never;
    url: '/inventory/locations/metafields';
};
export type CreateLocationsMetafieldsErrors = {
    400: CreateLocationsMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type CreateLocationsMetafieldsError = CreateLocationsMetafieldsErrors[keyof CreateLocationsMetafieldsErrors];
export type CreateLocationsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type CreateLocationsMetafieldsResponse = CreateLocationsMetafieldsResponses[keyof CreateLocationsMetafieldsResponses];
export type UpdateLocationsMetafieldsData = {
    body?: Array<InventoryLocationsMetafieldsPutRequestBodyContentApplicationJsonSchemaItems>;
    path?: never;
    query?: never;
    url: '/inventory/locations/metafields';
};
export type UpdateLocationsMetafieldsErrors = {
    400: UpdateLocationsMetafieldsRequestBadRequestError;
    422: MetaFieldCollectionResponsePartialSuccessPostPut;
};
export type UpdateLocationsMetafieldsError = UpdateLocationsMetafieldsErrors[keyof UpdateLocationsMetafieldsErrors];
export type UpdateLocationsMetafieldsResponses = {
    200: MetaFieldCollectionResponsePostPut;
};
export type UpdateLocationsMetafieldsResponse = UpdateLocationsMetafieldsResponses[keyof UpdateLocationsMetafieldsResponses];
export type MetafieldCursorPaginationLinks = {
    previous?: string;
    next?: string;
};
export type MetafieldCursorPagination = {
    count?: number;
    per_page?: number;
    start_cursor?: string;
    end_cursor?: string;
    links?: MetafieldCursorPaginationLinks;
};
export type MetafieldCursorPaginationMeta = {
    cursor_pagination?: MetafieldCursorPagination;
};
