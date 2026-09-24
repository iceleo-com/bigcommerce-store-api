import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as SegmentsV3ApiSpecs from '../generated/segments-v3';
export * as SegmentsV3ApiSpecs from '../generated/segments-v3';
export declare class SegmentsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPaginatedSegmentsList(query?: SegmentsV3ApiSpecs.GetPaginatedSegmentsListData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<SegmentsV3ApiSpecs.SegmentCollectionResponse>>>;
    segmentsPostRequest(requestBody: SegmentsV3ApiSpecs.SegmentsPostRequestData['body']): Promise<RequestSuccessResponse<201, Required<SegmentsV3ApiSpecs.SegmentsResponse>> | RequestErrorResponse<409, Required<SegmentsV3ApiSpecs.SegmentsPostRequestRequestConflictError>> | RequestErrorResponse<422, Required<SegmentsV3ApiSpecs.SegmentsWithErrorsResponse>>>;
    putSegmentObjects(requestBody: SegmentsV3ApiSpecs.PutSegmentObjectsData['body']): Promise<RequestSuccessResponse<201, Required<SegmentsV3ApiSpecs.SegmentsResponse>> | RequestErrorResponse<422, Required<SegmentsV3ApiSpecs.SegmentsWithErrorsResponse>>>;
    deleteStoreSegment(query?: SegmentsV3ApiSpecs.DeleteStoreSegmentData['query']): Promise<RequestSuccessResponse<200, Required<SegmentsV3ApiSpecs.SegmentsRemoveResponse>> | RequestErrorResponse<422, Required<SegmentsV3ApiSpecs.SegmentsRemoveWithErrorsResponse>>>;
    getListShopperProfile(shopperProfileId: SegmentsV3ApiSpecs.GetListShopperProfileData['path']['shopperProfileId'], query?: SegmentsV3ApiSpecs.GetListShopperProfileData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<SegmentsV3ApiSpecs.SegmentCollectionResponse>>>;
    getShopperList(query?: SegmentsV3ApiSpecs.GetShopperListData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<SegmentsV3ApiSpecs.ShopperProfilesCollectionResponse>>>;
    shopperProfilesRequest(requestBody: SegmentsV3ApiSpecs.ShopperProfilesRequestData['body']): Promise<RequestSuccessResponse<201, Required<SegmentsV3ApiSpecs.ShopperProfilesResponse>> | RequestErrorResponse<422, Required<SegmentsV3ApiSpecs.ShopperProfilesWithErrorsResponse>>>;
    deleteStoreShopperProfile(query?: SegmentsV3ApiSpecs.DeleteStoreShopperProfileData['query']): Promise<RequestSuccessResponse<200, Required<SegmentsV3ApiSpecs.ShopperProfilesRemoveResponse>> | RequestErrorResponse<422, Required<SegmentsV3ApiSpecs.ShopperProfilesRemoveWithErrorsResponse>>>;
    getSegmentProfiles(segmentId: SegmentsV3ApiSpecs.GetSegmentProfilesData['path']['segmentId'], query?: SegmentsV3ApiSpecs.GetSegmentProfilesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<SegmentsV3ApiSpecs.ShopperProfilesGetResponse>>>;
    postShopperProfile(segmentId: SegmentsV3ApiSpecs.PostShopperProfileData['path']['segmentId'], requestBody: SegmentsV3ApiSpecs.PostShopperProfileData['body']): Promise<RequestSuccessResponse<201, Required<SegmentsV3ApiSpecs.ShopperProfilesAddResponse>> | RequestErrorResponse<409, Required<SegmentsV3ApiSpecs.PostShopperProfileRequestConflictError>> | RequestErrorResponse<422, Required<SegmentsV3ApiSpecs.ShopperProfilesAddWithErrorsResponse>>>;
    deleteShopperProfile(segmentId: SegmentsV3ApiSpecs.DeleteShopperProfileData['path']['segmentId'], query?: SegmentsV3ApiSpecs.DeleteShopperProfileData['query']): Promise<RequestSuccessResponse<200, Required<SegmentsV3ApiSpecs.ShopperProfilesRemoveResponse>> | RequestErrorResponse<422, Required<SegmentsV3ApiSpecs.ShopperProfilesRemoveWithErrorsResponse>>>;
}
