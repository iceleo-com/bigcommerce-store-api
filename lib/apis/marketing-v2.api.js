"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MarketingV2Api {
    constructor(request) {
        this.request = request;
    }
    getCoupons(query) {
        return this.request.get({
            path: 'v2/coupons',
            query,
        });
    }
    createCoupon(requestBody) {
        return this.request.post({
            path: 'v2/coupons',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCoupons(query) {
        return this.request.delete({
            path: 'v2/coupons',
            query,
        });
    }
    getCouponsCount() {
        return this.request.get({
            path: 'v2/coupons/count',
        });
    }
    updateCoupon(id, requestBody) {
        return this.request.put({
            path: `v2/coupons/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteCoupon(id) {
        return this.request.delete({
            path: `v2/coupons/${id}`,
        });
    }
    getBanners(query) {
        return this.request.get({
            path: 'v2/banners',
            query,
        });
    }
    createBanner(requestBody) {
        return this.request.post({
            path: 'v2/banners',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteBanners() {
        return this.request.delete({
            path: 'v2/banners',
        });
    }
    getBanner(id) {
        return this.request.get({
            path: `v2/banners/${id}`,
        });
    }
    updateBanner(id, requestBody) {
        return this.request.put({
            path: `v2/banners/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteBanner(id) {
        return this.request.delete({
            path: `v2/banners/${id}`,
        });
    }
    getBannersCount() {
        return this.request.get({
            path: 'v2/banners/count',
        });
    }
    getGiftCertificate(id) {
        return this.request.get({
            path: `v2/gift_certificates/${id}`,
        });
    }
    updateGiftCertificate(id, requestBody) {
        return this.request.put({
            path: `v2/gift_certificates/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteGiftCertificate(id) {
        return this.request.delete({
            path: `v2/gift_certificates/${id}`,
        });
    }
    getGiftCertificates(query) {
        return this.request.get({
            path: 'v2/gift_certificates',
            query,
        });
    }
    createGiftCertificate(requestBody) {
        return this.request.post({
            path: 'v2/gift_certificates',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    deleteGiftCertificates() {
        return this.request.delete({
            path: 'v2/gift_certificates',
        });
    }
}
exports.default = MarketingV2Api;
