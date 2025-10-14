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
exports.MarketingV2Api = MarketingV2Api;
