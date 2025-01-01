"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StoreInformationV2Api {
    constructor(request) {
        this.request = request;
    }
    getStoreInformation() {
        return this.request.get({
            path: 'v2/store',
        });
    }
    getStoreMetafields(query) {
        return this.request.get({
            path: 'v2/store/metafields',
            query,
        });
    }
    createStoresMetafields(requestBody) {
        return this.request.post({
            path: 'v2/store/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateStoreMetafields(requestBody) {
        return this.request.put({
            path: 'v2/store/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteStoreMetafields(requestBody) {
        return this.request.delete({
            path: 'v2/store/metafields',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getStoreMetafield(metafieldId) {
        return this.request.get({
            path: `v2/store/metafields/${metafieldId}`,
        });
    }
    updateStoreMetafield(metafieldId, requestBody) {
        return this.request.put({
            path: `v2/store/metafields/${metafieldId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteStoreMetafield(metafieldId) {
        return this.request.delete({
            path: `v2/store/metafields/${metafieldId}`,
        });
    }
    getSystemTimestamp() {
        return this.request.get({
            path: 'v2/time',
        });
    }
}
exports.default = StoreInformationV2Api;
