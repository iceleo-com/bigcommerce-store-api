"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SegmentsV3Api {
    constructor(request) {
        this.request = request;
    }
    getPaginatedSegmentsList(query) {
        return this.request.get({
            path: 'v3/segments',
            query,
        });
    }
    segmentsPostRequest(requestBody) {
        return this.request.post({
            path: 'v3/segments',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    putSegmentObjects(requestBody) {
        return this.request.put({
            path: 'v3/segments',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteStoreSegment(query) {
        return this.request.delete({
            path: 'v3/segments',
            query,
        });
    }
    getSegmentProfiles(segmentId, query) {
        return this.request.get({
            path: `v3/segments/${segmentId}/shopper-profiles`,
            query,
        });
    }
    postShopperProfile(segmentId, requestBody) {
        return this.request.post({
            path: `v3/segments/${segmentId}/shopper-profiles`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteShopperProfile(segmentId, query) {
        return this.request.delete({
            path: `v3/segments/${segmentId}/shopper-profiles`,
            query,
        });
    }
    getShopperList(query) {
        return this.request.get({
            path: 'v3/shopper-profiles',
            query,
        });
    }
    shopperProfilesRequest(requestBody) {
        return this.request.post({
            path: 'v3/shopper-profiles',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteStoreShopperProfile(query) {
        return this.request.delete({
            path: 'v3/shopper-profiles',
            query,
        });
    }
    getListShopperProfile(shopperProfileId, query) {
        return this.request.get({
            path: `v3/shopper-profiles/${shopperProfileId}/segments`,
            query,
        });
    }
}
exports.default = SegmentsV3Api;
