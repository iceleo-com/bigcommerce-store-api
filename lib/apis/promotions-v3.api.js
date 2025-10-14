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
    getPromotion() {
        return this.request.get({
            path: 'v3/promotions/{id}',
        });
    }
    updatePromotion(requestBody) {
        return this.request.put({
            path: 'v3/promotions/{id}',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deletePromotion() {
        return this.request.delete({
            path: 'v3/promotions/{id}',
        });
    }
    getPromotionCodes(query) {
        return this.request.get({
            path: 'v3/promotions/{promotion_id}/codes',
            query,
        });
    }
    createPromotionCode(requestBody) {
        return this.request.post({
            path: 'v3/promotions/{promotion_id}/codes',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCouponCodes(query) {
        return this.request.delete({
            path: 'v3/promotions/{promotion_id}/codes',
            query,
        });
    }
    deleteCouponCode() {
        return this.request.delete({
            path: 'v3/promotions/{promotion_id}/codes/{code_id}',
        });
    }
}
exports.PromotionsV3Api = PromotionsV3Api;
