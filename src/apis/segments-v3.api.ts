import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as SegmentsV3ApiSpecs from '../generated/segments-v3';
export * as SegmentsV3ApiSpecs from '../generated/segments-v3';

export class SegmentsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Segments
     *
     * Returns a paginated *Segments List*.
     */
    getPaginatedSegmentsList(
        query?: SegmentsV3ApiSpecs.GetPaginatedSegmentsListData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SegmentsV3ApiSpecs.GetPaginatedSegmentsListResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/segments',
            query,
        });
    }

    /**
     * Create Segments
     *
     * Creates *Segments*.

     **Limits**
     * Limit of 10 concurrent requests.

     */
    segmentsPostRequest(
        requestBody: SegmentsV3ApiSpecs.SegmentsPostRequestData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<SegmentsV3ApiSpecs.SegmentsPostRequestResponses[201]>>,(RequestErrorResponse<400, Required<SegmentsV3ApiSpecs.SegmentsPostRequestErrors[400]>> | RequestErrorResponse<409, Required<SegmentsV3ApiSpecs.SegmentsPostRequestErrors[409]>>)>({
            path: 'v3/segments',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Segments
     *
     * Updates *Segments*.

      **Limits**
      * Limit of 10 concurrent requests.

     */
    putSegmentObjects(
        requestBody: SegmentsV3ApiSpecs.PutSegmentObjectsData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<201, Required<SegmentsV3ApiSpecs.PutSegmentObjectsResponses[201]>>,RequestErrorResponse<400, Required<SegmentsV3ApiSpecs.PutSegmentObjectsErrors[400]>>>({
            path: 'v3/segments',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Segments
     *
     * Deletes one or more *Segments* from a store. This will not delete any associated *Shopper Profiles*.

     */
    deleteStoreSegment(
        query?: SegmentsV3ApiSpecs.DeleteStoreSegmentData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<SegmentsV3ApiSpecs.DeleteStoreSegmentResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/segments',
            query,
        });
    }

    /**
     * Get All Shopper Profiles in a Segment
     *
     * Returns a list of *Shopper Profiles* that are associated with a given *Segment*.

     **NOTE**: The `modify` Customers OAuth scope is a requirement for this endpoint.

     */
    getSegmentProfiles(
        segmentId: SegmentsV3ApiSpecs.GetSegmentProfilesData['path']['segmentId'],
        query?: SegmentsV3ApiSpecs.GetSegmentProfilesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SegmentsV3ApiSpecs.GetSegmentProfilesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/segments/${segmentId}/shopper-profiles`,
            query,
        });
    }

    /**
     * Add Shopper Profiles to a Segment
     *
     * Add *Shopper Profiles* to a specific *Segment*. 

     **Limits**
     * Limit of *Shopper Profiles* per request is `50`.
     * Limit of 10 concurrent requests.
     */
    postShopperProfile(
        segmentId: SegmentsV3ApiSpecs.PostShopperProfileData['path']['segmentId'],
        requestBody: SegmentsV3ApiSpecs.PostShopperProfileData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<SegmentsV3ApiSpecs.PostShopperProfileResponses[201]>>,RequestErrorResponse<409, Required<SegmentsV3ApiSpecs.PostShopperProfileErrors[409]>>>({
            path: `v3/segments/${segmentId}/shopper-profiles`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Remove Shopper Profiles from a Segment
     *
     * Remove one or more *Shopper Profiles* that are associated with a *Segment*. This operation only removes the association; it doesn't delete the *Shopper Profiles*.

     */
    deleteShopperProfile(
        segmentId: SegmentsV3ApiSpecs.DeleteShopperProfileData['path']['segmentId'],
        query?: SegmentsV3ApiSpecs.DeleteShopperProfileData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<SegmentsV3ApiSpecs.DeleteShopperProfileResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/segments/${segmentId}/shopper-profiles`,
            query,
        });
    }

    /**
     * Get All Shopper Profiles
     *
     * Returns a paginated *Shopper Profiles* list. 

     */
    getShopperList(
        query?: SegmentsV3ApiSpecs.GetShopperListData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SegmentsV3ApiSpecs.GetShopperListResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/shopper-profiles',
            query,
        });
    }

    /**
     * Create Shopper Profiles
     *
     * Creates a *Shopper Profile*.

     */
    shopperProfilesRequest(
        requestBody: SegmentsV3ApiSpecs.ShopperProfilesRequestData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<SegmentsV3ApiSpecs.ShopperProfilesRequestResponses[201]>>,RequestErrorResponse<400, Required<SegmentsV3ApiSpecs.ShopperProfilesRequestErrors[400]>>>({
            path: 'v3/shopper-profiles',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Shopper Profiles
     *
     * Deletes one or more *Shopper Profiles* from a store.

     */
    deleteStoreShopperProfile(
        query?: SegmentsV3ApiSpecs.DeleteStoreShopperProfileData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<SegmentsV3ApiSpecs.DeleteStoreShopperProfileResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/shopper-profiles',
            query,
        });
    }

    /**
     * Get All Segments for a Shopper Profile
     *
     * Returns a paginated *Segments* list for a *Shopper Profile*.
     */
    getListShopperProfile(
        shopperProfileId: SegmentsV3ApiSpecs.GetListShopperProfileData['path']['shopperProfileId'],
        query?: SegmentsV3ApiSpecs.GetListShopperProfileData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<SegmentsV3ApiSpecs.GetListShopperProfileResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/shopper-profiles/${shopperProfileId}/segments`,
            query,
        });
    }
}
