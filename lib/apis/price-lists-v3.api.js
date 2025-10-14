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
exports.PriceListsV3Api = exports.PriceListsV3ApiSpecs = void 0;
exports.PriceListsV3ApiSpecs = __importStar(require("../generated/price-lists-v3"));
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
exports.PriceListsV3Api = PriceListsV3Api;
