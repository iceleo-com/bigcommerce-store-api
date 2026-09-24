export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type Segment = {
    id?: string;
    name?: string;
    description?: string;
    created_at?: string;
    updated_at?: string;
};
export type PaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type Pagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: PaginationLinks;
};
export type CollectionMeta = {
    pagination?: Pagination;
};
export type SegmentCollectionResponse = {
    data?: Array<Segment>;
    meta?: CollectionMeta;
};
export type SegmentPost = {
    name: string;
    description?: string;
};
export type SegmentsPostRequest = Array<SegmentPost>;
export type BatchResultMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type SegmentsResponse = {
    data?: Array<Segment>;
    meta?: BatchResultMeta;
};
export type SegmentsPostResponsesContentApplicationJsonSchemaDataItems = {
    [key: string]: unknown;
};
export type SegmentsPostResponsesContentApplicationJsonSchemaErrorsItemsErrors = {
    [key: string]: unknown;
};
export type SegmentsPostResponsesContentApplicationJsonSchemaErrorsItems = {
    status: number;
    title?: string;
    type?: string;
    errors?: SegmentsPostResponsesContentApplicationJsonSchemaErrorsItemsErrors;
};
export type SegmentsPostResponsesContentApplicationJsonSchemaMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type SegmentsPostRequestRequestConflictError = {
    data: Array<SegmentsPostResponsesContentApplicationJsonSchemaDataItems>;
    errors: Array<SegmentsPostResponsesContentApplicationJsonSchemaErrorsItems>;
    meta: SegmentsPostResponsesContentApplicationJsonSchemaMeta;
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
export type SegmentsWithErrorsResponse = {
    data?: Array<Segment>;
    meta?: BatchResultMeta;
    errors?: Array<ErrorResponse>;
};
export type SegmentPut = {
    id: string;
    name?: string;
    description?: string;
};
export type SegmentsPutRequest = Array<SegmentPut>;
export type SegmentsRemoveResponseDataItems = {
    [key: string]: unknown;
};
export type SegmentsRemoveResponse = {
    data?: Array<SegmentsRemoveResponseDataItems>;
    errors?: Array<ErrorResponse>;
    meta?: BatchResultMeta;
};
export type SegmentsRemoveWithErrorsResponseDataItems = {
    [key: string]: unknown;
};
export type SegmentsRemoveWithErrorsResponse = {
    data?: Array<SegmentsRemoveWithErrorsResponseDataItems>;
    errors?: Array<ErrorResponse>;
    meta?: BatchResultMeta;
};
export type ShopperProfile = {
    id?: string;
    customer_id?: number;
    created_at?: string;
    updated_at?: string;
};
export type ShopperProfilesCollectionResponse = {
    data?: Array<ShopperProfile>;
    meta?: CollectionMeta;
};
export type ShopperProfilePost = {
    customer_id?: number;
};
export type ShopperProfilesPostRequest = Array<ShopperProfilePost>;
export type ShopperProfilesResponse = {
    data?: Array<ShopperProfile>;
    errors?: Array<ErrorResponse>;
    meta?: BatchResultMeta;
};
export type ShopperProfilesWithErrorsResponse = {
    data?: Array<ShopperProfile>;
    errors?: Array<ErrorResponse>;
    meta?: BatchResultMeta;
};
export type ShopperProfilesRemoveResponseDataItems = {
    [key: string]: unknown;
};
export type ShopperProfilesRemoveResponse = {
    data?: Array<ShopperProfilesRemoveResponseDataItems>;
    errors?: Array<ErrorResponse>;
    meta?: BatchResultMeta;
};
export type ShopperProfilesRemoveWithErrorsResponseDataItems = {
    [key: string]: unknown;
};
export type ShopperProfilesRemoveWithErrorsResponse = {
    data?: Array<ShopperProfilesRemoveWithErrorsResponseDataItems>;
    errors?: Array<ErrorResponse>;
    meta?: BatchResultMeta;
};
export type ShopperProfilesGetResponse = {
    data?: Array<ShopperProfile>;
    meta?: CollectionMeta;
};
export type ShopperProfilesAddRequest = Array<string>;
export type ShopperProfilesAddResponse = {
    data?: Array<ShopperProfile>;
    errors?: Array<ErrorResponse>;
    meta?: BatchResultMeta;
};
export type SegmentsSegmentIdShopperProfilesPostResponsesContentApplicationJsonSchemaDataItems = {
    [key: string]: unknown;
};
export type SegmentsSegmentIdShopperProfilesPostResponsesContentApplicationJsonSchemaErrorsItemsErrors = {
    0?: string;
};
export type SegmentsSegmentIdShopperProfilesPostResponsesContentApplicationJsonSchemaErrorsItems = {
    status?: number;
    title?: string;
    type?: string;
    errors?: SegmentsSegmentIdShopperProfilesPostResponsesContentApplicationJsonSchemaErrorsItemsErrors;
};
export type SegmentsSegmentIdShopperProfilesPostResponsesContentApplicationJsonSchemaMeta = {
    total: number;
    success: number;
    failed: number;
};
export type PostShopperProfileRequestConflictError = {
    data: Array<SegmentsSegmentIdShopperProfilesPostResponsesContentApplicationJsonSchemaDataItems>;
    errors: Array<SegmentsSegmentIdShopperProfilesPostResponsesContentApplicationJsonSchemaErrorsItems>;
    meta: SegmentsSegmentIdShopperProfilesPostResponsesContentApplicationJsonSchemaMeta;
};
export type ShopperProfilesAddWithErrorsResponse = {
    data?: Array<ShopperProfile>;
    errors?: Array<ErrorResponse>;
    meta?: BatchResultMeta;
};
export type DeleteStoreSegmentData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'id:in'?: Array<string>;
    };
    url: '/segments';
};
export type DeleteStoreSegmentErrors = {
    422: SegmentsRemoveWithErrorsResponse;
};
export type DeleteStoreSegmentError = DeleteStoreSegmentErrors[keyof DeleteStoreSegmentErrors];
export type DeleteStoreSegmentResponses = {
    200: SegmentsRemoveResponse;
};
export type DeleteStoreSegmentResponse = DeleteStoreSegmentResponses[keyof DeleteStoreSegmentResponses];
export type GetPaginatedSegmentsListData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
        'id:in'?: Array<string>;
    };
    url: '/segments';
};
export type GetPaginatedSegmentsListResponses = {
    200: SegmentCollectionResponse;
};
export type GetPaginatedSegmentsListResponse = GetPaginatedSegmentsListResponses[keyof GetPaginatedSegmentsListResponses];
export type SegmentsPostRequestData = {
    body?: SegmentsPostRequest;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/segments';
};
export type SegmentsPostRequestErrors = {
    409: SegmentsPostRequestRequestConflictError;
    422: SegmentsWithErrorsResponse;
};
export type SegmentsPostRequestError = SegmentsPostRequestErrors[keyof SegmentsPostRequestErrors];
export type SegmentsPostRequestResponses = {
    201: SegmentsResponse;
};
export type SegmentsPostRequestResponse = SegmentsPostRequestResponses[keyof SegmentsPostRequestResponses];
export type PutSegmentObjectsData = {
    body?: SegmentsPutRequest;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/segments';
};
export type PutSegmentObjectsErrors = {
    422: SegmentsWithErrorsResponse;
};
export type PutSegmentObjectsError = PutSegmentObjectsErrors[keyof PutSegmentObjectsErrors];
export type PutSegmentObjectsResponses = {
    201: SegmentsResponse;
};
export type PutSegmentObjectsResponse = PutSegmentObjectsResponses[keyof PutSegmentObjectsResponses];
export type GetListShopperProfileData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        shopperProfileId: string;
    };
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/shopper-profiles/{shopperProfileId}/segments';
};
export type GetListShopperProfileResponses = {
    200: SegmentCollectionResponse;
};
export type GetListShopperProfileResponse = GetListShopperProfileResponses[keyof GetListShopperProfileResponses];
export type DeleteStoreShopperProfileData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'id:in'?: Array<string>;
    };
    url: '/shopper-profiles';
};
export type DeleteStoreShopperProfileErrors = {
    422: ShopperProfilesRemoveWithErrorsResponse;
};
export type DeleteStoreShopperProfileError = DeleteStoreShopperProfileErrors[keyof DeleteStoreShopperProfileErrors];
export type DeleteStoreShopperProfileResponses = {
    200: ShopperProfilesRemoveResponse;
};
export type DeleteStoreShopperProfileResponse = DeleteStoreShopperProfileResponses[keyof DeleteStoreShopperProfileResponses];
export type GetShopperListData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/shopper-profiles';
};
export type GetShopperListResponses = {
    200: ShopperProfilesCollectionResponse;
};
export type GetShopperListResponse = GetShopperListResponses[keyof GetShopperListResponses];
export type ShopperProfilesRequestData = {
    body?: ShopperProfilesPostRequest;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/shopper-profiles';
};
export type ShopperProfilesRequestErrors = {
    422: ShopperProfilesWithErrorsResponse;
};
export type ShopperProfilesRequestError = ShopperProfilesRequestErrors[keyof ShopperProfilesRequestErrors];
export type ShopperProfilesRequestResponses = {
    201: ShopperProfilesResponse;
};
export type ShopperProfilesRequestResponse = ShopperProfilesRequestResponses[keyof ShopperProfilesRequestResponses];
export type DeleteShopperProfileData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        segmentId: string;
    };
    query?: {
        'id:in'?: Array<string>;
    };
    url: '/segments/{segmentId}/shopper-profiles';
};
export type DeleteShopperProfileErrors = {
    422: ShopperProfilesRemoveWithErrorsResponse;
};
export type DeleteShopperProfileError = DeleteShopperProfileErrors[keyof DeleteShopperProfileErrors];
export type DeleteShopperProfileResponses = {
    200: ShopperProfilesRemoveResponse;
};
export type DeleteShopperProfileResponse = DeleteShopperProfileResponses[keyof DeleteShopperProfileResponses];
export type GetSegmentProfilesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        segmentId: string;
    };
    query?: {
        page?: number;
        limit?: number;
    };
    url: '/segments/{segmentId}/shopper-profiles';
};
export type GetSegmentProfilesResponses = {
    200: ShopperProfilesGetResponse;
};
export type GetSegmentProfilesResponse = GetSegmentProfilesResponses[keyof GetSegmentProfilesResponses];
export type PostShopperProfileData = {
    body?: ShopperProfilesAddRequest;
    headers: {
        Accept: string;
    };
    path: {
        segmentId: string;
    };
    query?: never;
    url: '/segments/{segmentId}/shopper-profiles';
};
export type PostShopperProfileErrors = {
    409: PostShopperProfileRequestConflictError;
    422: ShopperProfilesAddWithErrorsResponse;
};
export type PostShopperProfileError = PostShopperProfileErrors[keyof PostShopperProfileErrors];
export type PostShopperProfileResponses = {
    201: ShopperProfilesAddResponse;
};
export type PostShopperProfileResponse = PostShopperProfileResponses[keyof PostShopperProfileResponses];
