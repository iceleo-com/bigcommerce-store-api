"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = PromotionsV3Api;
