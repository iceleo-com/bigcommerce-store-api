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
    getPriceListCollection(query) {
        return this.request.get({
            path: 'v3/pricelists',
            query,
        });
    }
    getPriceLists(...args) {
        return this.getPriceListCollection(...args);
    }
    createPriceList(requestBody) {
        return this.request.post({
            path: 'v3/pricelists',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletePriceListsByFilter(query) {
        return this.request.delete({
            path: 'v3/pricelists',
            query,
        });
    }
    deletePriceLists(...args) {
        return this.deletePriceListsByFilter(...args);
    }
    getPriceList(priceListId, query) {
        return this.request.get({
            path: `v3/pricelists/${priceListId}`,
            query,
        });
    }
    updatePriceList(priceListId, requestBody) {
        return this.request.put({
            path: `v3/pricelists/${priceListId}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletePriceList(priceListId) {
        return this.request.delete({
            path: `v3/pricelists/${priceListId}`,
        });
    }
    upsertPriceListRecords(requestBody) {
        return this.request.put({
            path: 'v3/pricelists/records',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    upsertPriceListsRecords(...args) {
        return this.upsertPriceListRecords(...args);
    }
    getPriceListRecordCollection(priceListId, query) {
        return this.request.get({
            path: `v3/pricelists/${priceListId}/records`,
            query,
        });
    }
    getPriceListRecords(...args) {
        return this.getPriceListRecordCollection(...args);
    }
    setPriceListRecordCollection(priceListId, requestBody) {
        return this.request.put({
            path: `v3/pricelists/${priceListId}/records`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletePriceListRecordsByFilter(priceListId, query) {
        return this.request.delete({
            path: `v3/pricelists/${priceListId}/records`,
            query,
        });
    }
    deletePriceListRecords(...args) {
        return this.deletePriceListRecordsByFilter(...args);
    }
    getPriceListRecordsByVariantId(priceListId, variantId) {
        return this.request.get({
            path: `v3/pricelists/${priceListId}/records/${variantId}`,
        });
    }
    getPriceListRecord(priceListId, variantId, currencyCode, query) {
        return this.request.get({
            path: `v3/pricelists/${priceListId}/records/${variantId}/${currencyCode}`,
            query,
        });
    }
    setPriceListRecord(priceListId, variantId, currencyCode, requestBody) {
        return this.request.put({
            path: `v3/pricelists/${priceListId}/records/${variantId}/${currencyCode}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletePriceListRecord(priceListId, variantId, currencyCode) {
        return this.request.delete({
            path: `v3/pricelists/${priceListId}/records/${variantId}/${currencyCode}`,
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
    deletePriceListAssignmentsByFilter(query) {
        return this.request.delete({
            path: 'v3/pricelists/assignments',
            query,
        });
    }
    deletePriceListAssignments(...args) {
        return this.deletePriceListAssignmentsByFilter(...args);
    }
    upsertPriceListAssignment(priceListId, requestBody) {
        return this.request.put({
            path: `v3/pricelists/${priceListId}/assignments`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
}
exports.PriceListsV3Api = PriceListsV3Api;
