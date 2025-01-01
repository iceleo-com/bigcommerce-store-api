import RequestService from '../helpers/request/request-service';
import * as SegmentsV3ApiSpecs from '../generated/segments-v3';

export default class SegmentsV3Api {
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
        return this.request.get<SegmentsV3ApiSpecs.GetPaginatedSegmentsListResponse, any>({
            path: 'v3/segments',
            query,
        });
    }

    /**
     * Create Segments
     *
     * Creates *Segments*.

     */
    segmentsPostRequest(
        requestBody: SegmentsV3ApiSpecs.SegmentsPostRequestData['body'],
    ) {
        return this.request.post<any, SegmentsV3ApiSpecs.SegmentsPostRequestError>({
            path: 'v3/segments',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Update Segments
     *
     * Updates *Segments*.

     */
    putSegmentObjects(
        requestBody: SegmentsV3ApiSpecs.PutSegmentObjectsData['body'],
    ) {
        return this.request.put<any, SegmentsV3ApiSpecs.PutSegmentObjectsError>({
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
        return this.request.delete<any, any>({
            path: 'v3/segments',
            query,
        });
    }

    /**
     * Get All Shopper Profiles in a Segment
     *
     * Returns a list of *Shopper Profiles* that are associated with a given *Segment*.
     */
    getSegmentProfiles(
        segmentId: SegmentsV3ApiSpecs.GetSegmentProfilesData['path']['segmentId'],
        query?: SegmentsV3ApiSpecs.GetSegmentProfilesData['query'],
    ) {
        return this.request.get<SegmentsV3ApiSpecs.GetSegmentProfilesResponse, any>({
            path: `v3/segments/${segmentId}/shopper-profiles`,
            query,
        });
    }

    /**
     * Add Shopper Profiles to a Segment
     *
     * Add *Shopper Profiles* to a specific *Segment*. 
     A maximum number of *Shopper Profiles* per request is `50`, and up to three concurrent requests are allowed.
     */
    postShopperProfile(
        segmentId: SegmentsV3ApiSpecs.PostShopperProfileData['path']['segmentId'],
        requestBody: SegmentsV3ApiSpecs.PostShopperProfileData['body'],
    ) {
        return this.request.post<any, SegmentsV3ApiSpecs.PostShopperProfileError>({
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
        return this.request.delete<any, any>({
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
        return this.request.get<SegmentsV3ApiSpecs.GetShopperListResponse, any>({
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
        return this.request.post<any, SegmentsV3ApiSpecs.ShopperProfilesRequestError>({
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
        return this.request.delete<any, any>({
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
        return this.request.get<SegmentsV3ApiSpecs.GetListShopperProfileResponse, any>({
            path: `v3/shopper-profiles/${shopperProfileId}/segments`,
            query,
        });
    }
}
