import RequestService from '../helpers/request/request-service';
import * as SegmentsV3ApiSpecs from '../generated/segments-v3';
export default class SegmentsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPaginatedSegmentsList(query?: SegmentsV3ApiSpecs.GetPaginatedSegmentsListData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<SegmentsV3ApiSpecs.SegmentCollectionResponse, any>>;
    segmentsPostRequest(requestBody: SegmentsV3ApiSpecs.SegmentsPostRequestData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, SegmentsV3ApiSpecs.SegmentsPostRequestError>>;
    putSegmentObjects(requestBody: SegmentsV3ApiSpecs.PutSegmentObjectsData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, SegmentsV3ApiSpecs.ErrorResponse>>;
    deleteStoreSegment(query?: SegmentsV3ApiSpecs.DeleteStoreSegmentData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getSegmentProfiles(segmentId: SegmentsV3ApiSpecs.GetSegmentProfilesData['path']['segmentId'], query?: SegmentsV3ApiSpecs.GetSegmentProfilesData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<SegmentsV3ApiSpecs.ShopperProfilesGetResponse, any>>;
    postShopperProfile(segmentId: SegmentsV3ApiSpecs.PostShopperProfileData['path']['segmentId'], requestBody: SegmentsV3ApiSpecs.PostShopperProfileData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, SegmentsV3ApiSpecs.PostShopperProfileError>>;
    deleteShopperProfile(segmentId: SegmentsV3ApiSpecs.DeleteShopperProfileData['path']['segmentId'], query?: SegmentsV3ApiSpecs.DeleteShopperProfileData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getShopperList(query?: SegmentsV3ApiSpecs.GetShopperListData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<SegmentsV3ApiSpecs.ShopperProfilesCollectionResponse, any>>;
    shopperProfilesRequest(requestBody: SegmentsV3ApiSpecs.ShopperProfilesRequestData['body']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, SegmentsV3ApiSpecs.ErrorResponse>>;
    deleteStoreShopperProfile(query?: SegmentsV3ApiSpecs.DeleteStoreShopperProfileData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<any, any>>;
    getListShopperProfile(shopperProfileId: SegmentsV3ApiSpecs.GetListShopperProfileData['path']['shopperProfileId'], query?: SegmentsV3ApiSpecs.GetListShopperProfileData['query']): Promise<import("../helpers/request/request-service.types").RequestResponse<SegmentsV3ApiSpecs.SegmentCollectionResponse, any>>;
}
