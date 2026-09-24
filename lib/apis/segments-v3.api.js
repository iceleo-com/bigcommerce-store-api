"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentsV3Api = exports.SegmentsV3ApiSpecs = void 0;
exports.SegmentsV3ApiSpecs = __importStar(require("../generated/segments-v3"));
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
    getListShopperProfile(shopperProfileId, query) {
        return this.request.get({
            path: `v3/shopper-profiles/${shopperProfileId}/segments`,
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
}
exports.SegmentsV3Api = SegmentsV3Api;
