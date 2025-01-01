"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PriceListsV3Api {
    constructor(request) {
        this.request = request;
    }
    getPriceLists(query) {
        return this.request.get({
            path: 'v3/pricelists',
            query,
        });
    }
    createPriceList(requestBody) {
        return this.request.post({
            path: 'v3/pricelists',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletePriceLists(query) {
        return this.request.delete({
            path: 'v3/pricelists',
            query,
        });
    }
    getPriceList() {
        return this.request.get({
            path: 'v3/pricelists/{price_list_id}',
        });
    }
    updatePriceList(requestBody) {
        return this.request.put({
            path: 'v3/pricelists/{price_list_id}',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletePriceList() {
        return this.request.delete({
            path: 'v3/pricelists/{price_list_id}',
        });
    }
    upsertPriceListsRecords(requestBody) {
        return this.request.put({
            path: 'v3/pricelists/records',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getPriceListRecords(query) {
        return this.request.get({
            path: 'v3/pricelists/{price_list_id}/records',
            query,
        });
    }
    upsertPriceListRecords(requestBody) {
        return this.request.put({
            path: 'v3/pricelists/{price_list_id}/records',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletePriceListRecords(query) {
        return this.request.delete({
            path: 'v3/pricelists/{price_list_id}/records',
            query,
        });
    }
    getPriceListRecordsByVariantId(query) {
        return this.request.get({
            path: 'v3/pricelists/{price_list_id}/records/{variant_id}',
            query,
        });
    }
    getPriceListRecord(query) {
        return this.request.get({
            path: 'v3/pricelists/{price_list_id}/records/{variant_id}/{currency_code}',
            query,
        });
    }
    setPriceListRecord(requestBody) {
        return this.request.put({
            path: 'v3/pricelists/{price_list_id}/records/{variant_id}/{currency_code}',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletePriceListRecord() {
        return this.request.delete({
            path: 'v3/pricelists/{price_list_id}/records/{variant_id}/{currency_code}',
        });
    }
    getListOfPriceListAssignments(query) {
        return this.request.get({
            path: 'v3/pricelists/assignments',
            query,
        });
    }
    createPriceListAssignments(requestBody) {
        return this.request.post({
            path: 'v3/pricelists/assignments',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletePriceListAssignments(query) {
        return this.request.delete({
            path: 'v3/pricelists/assignments',
            query,
        });
    }
    upsertPriceListAssignment(requestBody) {
        return this.request.put({
            path: 'v3/pricelists/{price_list_id}/assignments',
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.default = PriceListsV3Api;
