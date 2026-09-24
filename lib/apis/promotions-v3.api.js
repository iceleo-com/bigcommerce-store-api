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
exports.PromotionsV3Api = exports.PromotionsV3ApiSpecs = void 0;
exports.PromotionsV3ApiSpecs = __importStar(require("../generated/promotions-v3"));
class PromotionsV3Api {
    constructor(request) {
        this.request = request;
    }
    getPromotionCodes(promotionId, query) {
        return this.request.get({
            path: `v3/promotions/${promotionId}/codes`,
            query,
        });
    }
    createPromotionCode(promotionId, requestBody) {
        return this.request.post({
            path: `v3/promotions/${promotionId}/codes`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCouponCodes(promotionId, query) {
        return this.request.delete({
            path: `v3/promotions/${promotionId}/codes`,
            query,
        });
    }
    generatePromotionCodesBatch(promotionId, requestBody) {
        return this.request.post({
            path: `v3/promotions/${promotionId}/codegen`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    reschedulePromotionCodes(promotionId, requestBody) {
        return this.request.put({
            path: `v3/promotions/${promotionId}/reschedulecodes`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getCouponCodeByCode(query) {
        return this.request.get({
            path: 'v3/promotions/codes',
            query,
        });
    }
    deleteCouponCodeByCode(query) {
        return this.request.delete({
            path: 'v3/promotions/codes',
            query,
        });
    }
    deleteCouponCode(promotionId, codeId) {
        return this.request.delete({
            path: `v3/promotions/${promotionId}/codes/${codeId}`,
        });
    }
    getPromotions(query) {
        return this.request.get({
            path: 'v3/promotions',
            query,
        });
    }
    createPromotion(requestBody) {
        return this.request.post({
            path: 'v3/promotions',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletePromotions(query) {
        return this.request.delete({
            path: 'v3/promotions',
            query,
        });
    }
    archivePromotions(requestBody) {
        return this.request.post({
            path: 'v3/promotions/archive',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    unarchivePromotions(requestBody) {
        return this.request.post({
            path: 'v3/promotions/unarchive',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    getPromotion(id) {
        return this.request.get({
            path: `v3/promotions/${id}`,
        });
    }
    updatePromotion(id, requestBody) {
        return this.request.put({
            path: `v3/promotions/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletePromotion(id) {
        return this.request.delete({
            path: `v3/promotions/${id}`,
        });
    }
}
exports.PromotionsV3Api = PromotionsV3Api;
