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
exports.MarketingV2Api = exports.MarketingV2ApiSpecs = void 0;
exports.MarketingV2ApiSpecs = __importStar(require("../generated/marketing-v2"));
class MarketingV2Api {
    constructor(request) {
        this.request = request;
    }
    getAllCoupons(query) {
        return this.request.get({
            path: 'v2/coupons',
            query,
        });
    }
    getCoupons(...args) {
        return this.getAllCoupons(...args);
    }
    createAnewCoupon(requestBody) {
        return this.request.post({
            path: 'v2/coupons',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createCoupon(...args) {
        return this.createAnewCoupon(...args);
    }
    deleteAllCoupons(query) {
        return this.request.delete({
            path: 'v2/coupons',
            query,
        });
    }
    deleteCoupons(...args) {
        return this.deleteAllCoupons(...args);
    }
    getAcountOfCoupons() {
        return this.request.get({
            path: 'v2/coupons/count',
        });
    }
    getCouponsCount(...args) {
        return this.getAcountOfCoupons(...args);
    }
    updateAcoupon(id, requestBody) {
        return this.request.put({
            path: `v2/coupons/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateCoupon(...args) {
        return this.updateAcoupon(...args);
    }
    deleteAcoupon(id) {
        return this.request.delete({
            path: `v2/coupons/${id}`,
        });
    }
    deleteCoupon(...args) {
        return this.deleteAcoupon(...args);
    }
    getAllBanners(query) {
        return this.request.get({
            path: 'v2/banners',
            query,
        });
    }
    getBanners(...args) {
        return this.getAllBanners(...args);
    }
    createAbanner(requestBody) {
        return this.request.post({
            path: 'v2/banners',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createBanner(...args) {
        return this.createAbanner(...args);
    }
    deleteAllBanners() {
        return this.request.delete({
            path: 'v2/banners',
        });
    }
    deleteBanners(...args) {
        return this.deleteAllBanners(...args);
    }
    getAbanner(id) {
        return this.request.get({
            path: `v2/banners/${id}`,
        });
    }
    getBanner(...args) {
        return this.getAbanner(...args);
    }
    updateAbanner(id, requestBody) {
        return this.request.put({
            path: `v2/banners/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateBanner(...args) {
        return this.updateAbanner(...args);
    }
    deleteAbanner(id) {
        return this.request.delete({
            path: `v2/banners/${id}`,
        });
    }
    deleteBanner(...args) {
        return this.deleteAbanner(...args);
    }
    getAcountOfBanners() {
        return this.request.get({
            path: 'v2/banners/count',
        });
    }
    getBannersCount(...args) {
        return this.getAcountOfBanners(...args);
    }
    getAgiftCertificate(id) {
        return this.request.get({
            path: `v2/gift_certificates/${id}`,
        });
    }
    getGiftCertificate(...args) {
        return this.getAgiftCertificate(...args);
    }
    updateAgiftCertificate(id, requestBody) {
        return this.request.put({
            path: `v2/gift_certificates/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }
    updateGiftCertificate(...args) {
        return this.updateAgiftCertificate(...args);
    }
    deleteAgiftCertificate(id) {
        return this.request.delete({
            path: `v2/gift_certificates/${id}`,
        });
    }
    deleteGiftCertificate(...args) {
        return this.deleteAgiftCertificate(...args);
    }
    getAllGiftCertificates(query) {
        return this.request.get({
            path: 'v2/gift_certificates',
            query,
        });
    }
    getGiftCertificates(...args) {
        return this.getAllGiftCertificates(...args);
    }
    createAgiftCertificate(requestBody) {
        return this.request.post({
            path: 'v2/gift_certificates',
            contentType: 'application/json',
            body: requestBody,
        });
    }
    createGiftCertificate(...args) {
        return this.createAgiftCertificate(...args);
    }
    deleteAllGiftCertificates() {
        return this.request.delete({
            path: 'v2/gift_certificates',
        });
    }
    deleteGiftCertificates(...args) {
        return this.deleteAllGiftCertificates(...args);
    }
}
exports.MarketingV2Api = MarketingV2Api;
