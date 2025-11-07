export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type SegmentsResponse = {
    data?: Array<Segment>;
    meta?: {
        [key: string]: unknown;
    };
};
export type SegmentsPostRequest = Array<SegmentPost>;
export type SegmentsPutRequest = Array<SegmentPut>;
export type SegmentPost = {
    name: string;
    description?: string;
};
export type SegmentPut = {
    id: string;
    name?: string;
    description?: string;
};
export type Pagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
};
export type CollectionMeta = {
    pagination?: Pagination;
};
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};
export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type DetailedErrors = {
    [key: string]: string;
};
export type Segment = {
    id?: string;
    name?: string;
    description?: string;
    created_at?: string;
    updated_at?: string;
};
export type SegmentCollectionResponse = {
    data?: Array<Segment>;
    meta?: CollectionMeta;
};
export type ShopperProfile = {
    id?: string;
    customer_id?: number;
    created_at?: string;
    updated_at?: string;
};
export type ShopperProfilesAddRequest = Array<string>;
export type ShopperProfilesAddResponse = {
    data?: Array<ShopperProfile>;
};
export type ShopperProfilesGetResponse = {
    data?: Array<ShopperProfile>;
    meta?: CollectionMeta;
};
export type ShopperProfilesCollectionResponse = {
    data?: Array<ShopperProfile>;
    meta?: CollectionMeta;
};
export type ShopperProfilesPostRequest = Array<ShopperProfilePost>;
export type ShopperProfilePost = {
    customer_id?: number;
};
export type ShopperProfilesResponse = {
    data?: Array<ShopperProfile>;
    meta?: {
        [key: string]: unknown;
    };
};
export type Accept = string;
export type ContentType = string;
export type SegmentIdPathParam = string;
export type ShopperIdPathParam = string;
export type FilterIdParam = Array<string>;
export type FilterPageParam = number;
export type FilterLimitParam = number;
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
export type DeleteStoreSegmentResponses = {
    204: void;
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
    body: SegmentsPostRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/segments';
};
export type SegmentsPostRequestErrors = {
    400: ErrorResponse;
    409: {
        data: Array<{
            [key: string]: unknown;
        }>;
        errors: Array<{
            status: number;
            title?: string;
            type?: string;
            errors?: {
                [key: string]: unknown;
            };
        }>;
        meta: {
            total?: number;
            success?: number;
            failed?: number;
        };
    };
};
export type SegmentsPostRequestError = SegmentsPostRequestErrors[keyof SegmentsPostRequestErrors];
export type SegmentsPostRequestResponses = {
    201: SegmentsResponse;
};
export type SegmentsPostRequestResponse = SegmentsPostRequestResponses[keyof SegmentsPostRequestResponses];
export type PutSegmentObjectsData = {
    body: SegmentsPutRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/segments';
};
export type PutSegmentObjectsErrors = {
    400: ErrorResponse;
};
export type PutSegmentObjectsError = PutSegmentObjectsErrors[keyof PutSegmentObjectsErrors];
export type PutSegmentObjectsResponses = {
    201: SegmentsResponse;
};
export type PutSegmentObjectsResponse = PutSegmentObjectsResponses[keyof PutSegmentObjectsResponses];
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
export type DeleteShopperProfileResponses = {
    204: void;
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
        'Content-Type': string;
    };
    path: {
        segmentId: string;
    };
    query?: never;
    url: '/segments/{segmentId}/shopper-profiles';
};
export type PostShopperProfileErrors = {
    409: {
        data: Array<{
            [key: string]: unknown;
        }>;
        errors: Array<{
            status?: number;
            title?: string;
            type?: string;
            errors?: {
                0?: string;
            };
        }>;
        meta: {
            total: number;
            success: number;
            failed: number;
        };
    };
};
export type PostShopperProfileError = PostShopperProfileErrors[keyof PostShopperProfileErrors];
export type PostShopperProfileResponses = {
    201: ShopperProfilesAddResponse;
};
export type PostShopperProfileResponse = PostShopperProfileResponses[keyof PostShopperProfileResponses];
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
export type DeleteStoreShopperProfileResponses = {
    204: void;
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
    body: ShopperProfilesPostRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/shopper-profiles';
};
export type ShopperProfilesRequestErrors = {
    400: ErrorResponse;
};
export type ShopperProfilesRequestError = ShopperProfilesRequestErrors[keyof ShopperProfilesRequestErrors];
export type ShopperProfilesRequestResponses = {
    201: ShopperProfilesResponse;
};
export type ShopperProfilesRequestResponse = ShopperProfilesRequestResponses[keyof ShopperProfilesRequestResponses];
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
