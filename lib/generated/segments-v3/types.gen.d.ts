export type BaseError = {
    status?: number;
    title?: string;
    type?: string;
    instance?: string;
};
export type CollectionMeta = {
    pagination?: Pagination;
};
export type DetailedErrors = {
    [key: string]: (string);
};
export type ErrorResponse = BaseError & {
    errors?: DetailedErrors;
};
export type Pagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type ParameterFilterIdParam = Array<(string)>;
export type ParameterFilterLimitParam = number;
export type ParameterFilterPageParam = number;
export type ParameterSegmentIdPathParam = string;
export type ParameterShopperIdPathParam = string;
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
export type SegmentPost = {
    name: string;
    description?: string;
};
export type SegmentPut = {
    id: string;
    name?: string;
    description?: string;
};
export type SegmentsPostRequest = Array<SegmentPost>;
export type SegmentsPutRequest = Array<SegmentPut>;
export type SegmentsResponse = {
    data?: Array<Segment>;
    meta?: {
        [key: string]: unknown;
    };
};
export type ShopperProfile = {
    id?: string;
    customer_id?: number;
    created_at?: string;
    updated_at?: string;
};
export type ShopperProfilePost = {
    customer_id?: number;
};
export type ShopperProfilesAddRequest = Array<(string)>;
export type ShopperProfilesAddResponse = {
    data?: Array<ShopperProfile>;
};
export type ShopperProfilesCollectionResponse = {
    data?: Array<ShopperProfile>;
    meta?: CollectionMeta;
};
export type ShopperProfilesGetResponse = {
    data?: Array<ShopperProfile>;
    meta?: CollectionMeta;
};
export type ShopperProfilesPostRequest = Array<ShopperProfilePost>;
export type ShopperProfilesResponse = {
    data?: Array<ShopperProfile>;
    meta?: {
        [key: string]: unknown;
    };
};
export type GetPaginatedSegmentsListData = {
    headers: {
        Accept: string;
    };
    query?: {
        'id:in'?: Array<(string)>;
        limit?: number;
        page?: number;
    };
};
export type GetPaginatedSegmentsListResponse = (SegmentCollectionResponse);
export type GetPaginatedSegmentsListError = unknown;
export type SegmentsPostRequestData = {
    body: SegmentsPostRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type SegmentsPostRequestResponse = (SegmentsResponse);
export type SegmentsPostRequestError = (ErrorResponse | {
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
});
export type PutSegmentObjectsData = {
    body: SegmentsPutRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type PutSegmentObjectsResponse = (SegmentsResponse);
export type PutSegmentObjectsError = (ErrorResponse);
export type DeleteStoreSegmentData = {
    headers: {
        Accept: string;
    };
    query?: {
        'id:in'?: Array<(string)>;
    };
};
export type DeleteStoreSegmentResponse = (void);
export type DeleteStoreSegmentError = unknown;
export type GetSegmentProfilesData = {
    headers: {
        Accept: string;
    };
    path: {
        segmentId: string;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type GetSegmentProfilesResponse = (ShopperProfilesGetResponse);
export type GetSegmentProfilesError = unknown;
export type PostShopperProfileData = {
    body?: ShopperProfilesAddRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        segmentId: string;
    };
};
export type PostShopperProfileResponse = (ShopperProfilesAddResponse);
export type PostShopperProfileError = ({
    data: Array<{
        [key: string]: unknown;
    }>;
    errors: Array<{
        status?: number;
        title?: string;
        type?: string;
        errors?: {
            '0'?: string;
        };
    }>;
    meta: {
        total: number;
        success: number;
        failed: number;
    };
});
export type DeleteShopperProfileData = {
    headers: {
        Accept: string;
    };
    path: {
        segmentId: string;
    };
    query?: {
        'id:in'?: Array<(string)>;
    };
};
export type DeleteShopperProfileResponse = (void);
export type DeleteShopperProfileError = unknown;
export type GetShopperListData = {
    headers: {
        Accept: string;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type GetShopperListResponse = (ShopperProfilesCollectionResponse);
export type GetShopperListError = unknown;
export type ShopperProfilesRequestData = {
    body: ShopperProfilesPostRequest;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type ShopperProfilesRequestResponse = (ShopperProfilesResponse);
export type ShopperProfilesRequestError = (ErrorResponse);
export type DeleteStoreShopperProfileData = {
    headers: {
        Accept: string;
    };
    query?: {
        'id:in'?: Array<(string)>;
    };
};
export type DeleteStoreShopperProfileResponse = (void);
export type DeleteStoreShopperProfileError = unknown;
export type GetListShopperProfileData = {
    headers: {
        Accept: string;
    };
    path: {
        shopperProfileId: string;
    };
    query?: {
        limit?: number;
        page?: number;
    };
};
export type GetListShopperProfileResponse = (SegmentCollectionResponse);
export type GetListShopperProfileError = unknown;
