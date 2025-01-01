import RequestService from '../helpers/request/request-service';
import * as MarketingV2ApiSpecs from '../generated/marketing-v2';
export default class MarketingV2Api {
    private readonly request;
    constructor(request: RequestService);
    getCoupons(query?: MarketingV2ApiSpecs.GetCouponsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<MarketingV2ApiSpecs.GetCouponsResponse, any>>;
    createCoupon(requestBody: MarketingV2ApiSpecs.CreateCouponData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    deleteCoupons(query?: MarketingV2ApiSpecs.DeleteCouponsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getCouponsCount(): Promise<import("../helpers/request/request-service.type").RequestResponse<MarketingV2ApiSpecs.GetCouponsCountResponse, any>>;
    updateCoupon(id: MarketingV2ApiSpecs.UpdateCouponData['path']['id'], requestBody: MarketingV2ApiSpecs.UpdateCouponData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<MarketingV2ApiSpecs.coupon_Full, any>>;
    deleteCoupon(id: MarketingV2ApiSpecs.DeleteCouponData['path']['id']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getBanners(query?: MarketingV2ApiSpecs.GetBannersData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<MarketingV2ApiSpecs.GetBannersResponse, any>>;
    createBanner(requestBody: MarketingV2ApiSpecs.CreateBannerData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<MarketingV2ApiSpecs.banner_Full, any>>;
    deleteBanners(): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getBanner(id: MarketingV2ApiSpecs.GetBannerData['path']['id']): Promise<import("../helpers/request/request-service.type").RequestResponse<MarketingV2ApiSpecs.banner_Full, any>>;
    updateBanner(id: MarketingV2ApiSpecs.UpdateBannerData['path']['id'], requestBody: MarketingV2ApiSpecs.UpdateBannerData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<MarketingV2ApiSpecs.banner_Full, any>>;
    deleteBanner(id: MarketingV2ApiSpecs.DeleteBannerData['path']['id']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getBannersCount(): Promise<import("../helpers/request/request-service.type").RequestResponse<MarketingV2ApiSpecs.GetBannersCountResponse, any>>;
    getGiftCertificate(id: MarketingV2ApiSpecs.GetGiftCertificateData['path']['id']): Promise<import("../helpers/request/request-service.type").RequestResponse<MarketingV2ApiSpecs.giftCertificate_Full, any>>;
    updateGiftCertificate(id: MarketingV2ApiSpecs.UpdateGiftCertificateData['path']['id'], requestBody: MarketingV2ApiSpecs.UpdateGiftCertificateData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<MarketingV2ApiSpecs.giftCertificate_Full, any>>;
    deleteGiftCertificate(id: MarketingV2ApiSpecs.DeleteGiftCertificateData['path']['id']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getGiftCertificates(query?: MarketingV2ApiSpecs.GetGiftCertificatesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<MarketingV2ApiSpecs.GetGiftCertificatesResponse, any>>;
    createGiftCertificate(requestBody: MarketingV2ApiSpecs.CreateGiftCertificateData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    deleteGiftCertificates(): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
}
