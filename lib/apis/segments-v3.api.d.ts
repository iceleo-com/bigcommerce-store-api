import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as SegmentsV3ApiSpecs from '../generated/segments-v3';
export * as SegmentsV3ApiSpecs from '../generated/segments-v3';
export declare class SegmentsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPaginatedSegmentsList(query?: SegmentsV3ApiSpecs.GetPaginatedSegmentsListData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<SegmentsV3ApiSpecs.SegmentCollectionResponse>>>;
    segmentsPostRequest(requestBody: SegmentsV3ApiSpecs.SegmentsPostRequestData['body']): Promise<RequestSuccessResponse<201, Required<SegmentsV3ApiSpecs.SegmentsResponse>> | RequestErrorResponse<400, Required<SegmentsV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<409, Required<{
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
    }>>>;
    putSegmentObjects(requestBody: SegmentsV3ApiSpecs.PutSegmentObjectsData['body']): Promise<RequestSuccessResponse<201, Required<SegmentsV3ApiSpecs.SegmentsResponse>> | RequestErrorResponse<400, Required<SegmentsV3ApiSpecs.ErrorResponse>>>;
    deleteStoreSegment(query?: SegmentsV3ApiSpecs.DeleteStoreSegmentData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getSegmentProfiles(segmentId: SegmentsV3ApiSpecs.GetSegmentProfilesData['path']['segmentId'], query?: SegmentsV3ApiSpecs.GetSegmentProfilesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<SegmentsV3ApiSpecs.ShopperProfilesGetResponse>>>;
    postShopperProfile(segmentId: SegmentsV3ApiSpecs.PostShopperProfileData['path']['segmentId'], requestBody: SegmentsV3ApiSpecs.PostShopperProfileData['body']): Promise<RequestSuccessResponse<201, Required<SegmentsV3ApiSpecs.ShopperProfilesAddResponse>> | RequestErrorResponse<409, Required<{
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
    }>>>;
    deleteShopperProfile(segmentId: SegmentsV3ApiSpecs.DeleteShopperProfileData['path']['segmentId'], query?: SegmentsV3ApiSpecs.DeleteShopperProfileData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getShopperList(query?: SegmentsV3ApiSpecs.GetShopperListData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<SegmentsV3ApiSpecs.ShopperProfilesCollectionResponse>>>;
    shopperProfilesRequest(requestBody: SegmentsV3ApiSpecs.ShopperProfilesRequestData['body']): Promise<RequestErrorResponse<400, Required<SegmentsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<201, Required<SegmentsV3ApiSpecs.ShopperProfilesResponse>>>;
    deleteStoreShopperProfile(query?: SegmentsV3ApiSpecs.DeleteStoreShopperProfileData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getListShopperProfile(shopperProfileId: SegmentsV3ApiSpecs.GetListShopperProfileData['path']['shopperProfileId'], query?: SegmentsV3ApiSpecs.GetListShopperProfileData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<SegmentsV3ApiSpecs.SegmentCollectionResponse>>>;
}
