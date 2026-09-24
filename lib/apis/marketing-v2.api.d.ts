import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as MarketingV2ApiSpecs from '../generated/marketing-v2';
export * as MarketingV2ApiSpecs from '../generated/marketing-v2';
export declare class MarketingV2Api {
    private readonly request;
    constructor(request: RequestService);
    getAllCoupons(query?: MarketingV2ApiSpecs.GetAllCouponsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, MarketingV2ApiSpecs.CouponFull[]>>;
    getCoupons(...args: Parameters<MarketingV2Api['getAllCoupons']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, MarketingV2ApiSpecs.CouponFull[]>>;
    createAnewCoupon(requestBody: MarketingV2ApiSpecs.CreateANewCouponData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<MarketingV2ApiSpecs.CouponFull>>>;
    createCoupon(...args: Parameters<MarketingV2Api['createAnewCoupon']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<MarketingV2ApiSpecs.CouponFull>>>;
    deleteAllCoupons(query?: MarketingV2ApiSpecs.DeleteAllCouponsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteCoupons(...args: Parameters<MarketingV2Api['deleteAllCoupons']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getAcountOfCoupons(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        count?: number;
    }>>>;
    getCouponsCount(...args: Parameters<MarketingV2Api['getAcountOfCoupons']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        count?: number;
    }>>>;
    updateAcoupon(id: MarketingV2ApiSpecs.UpdateACouponData['path']['id'], requestBody: MarketingV2ApiSpecs.UpdateACouponData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.CouponFull>>>;
    updateCoupon(...args: Parameters<MarketingV2Api['updateAcoupon']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.CouponFull>>>;
    deleteAcoupon(id: MarketingV2ApiSpecs.DeleteACouponData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteCoupon(...args: Parameters<MarketingV2Api['deleteAcoupon']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getAllBanners(query?: MarketingV2ApiSpecs.GetAllBannersData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, MarketingV2ApiSpecs.BannerFull[]>>;
    getBanners(...args: Parameters<MarketingV2Api['getAllBanners']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, MarketingV2ApiSpecs.BannerFull[]>>;
    createAbanner(requestBody: MarketingV2ApiSpecs.CreateABannerData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.BannerFull>>>;
    createBanner(...args: Parameters<MarketingV2Api['createAbanner']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.BannerFull>>>;
    deleteAllBanners(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteBanners(...args: Parameters<MarketingV2Api['deleteAllBanners']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getAbanner(id: MarketingV2ApiSpecs.GetABannerData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.BannerFull>>>;
    getBanner(...args: Parameters<MarketingV2Api['getAbanner']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.BannerFull>>>;
    updateAbanner(id: MarketingV2ApiSpecs.UpdateABannerData['path']['id'], requestBody: MarketingV2ApiSpecs.UpdateABannerData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.BannerFull>>>;
    updateBanner(...args: Parameters<MarketingV2Api['updateAbanner']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.BannerFull>>>;
    deleteAbanner(id: MarketingV2ApiSpecs.DeleteABannerData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteBanner(...args: Parameters<MarketingV2Api['deleteAbanner']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getAcountOfBanners(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        count?: number;
    }>>>;
    getBannersCount(...args: Parameters<MarketingV2Api['getAcountOfBanners']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        count?: number;
    }>>>;
    getAgiftCertificate(id: MarketingV2ApiSpecs.GetAGiftCertificateData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.GiftCertificateFull>>>;
    getGiftCertificate(...args: Parameters<MarketingV2Api['getAgiftCertificate']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.GiftCertificateFull>>>;
    updateAgiftCertificate(id: MarketingV2ApiSpecs.UpdateAGiftCertificateData['path']['id'], requestBody: MarketingV2ApiSpecs.UpdateAGiftCertificateData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.GiftCertificateFull>>>;
    updateGiftCertificate(...args: Parameters<MarketingV2Api['updateAgiftCertificate']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.GiftCertificateFull>>>;
    deleteAgiftCertificate(id: MarketingV2ApiSpecs.DeleteAGiftCertificateData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteGiftCertificate(...args: Parameters<MarketingV2Api['deleteAgiftCertificate']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getAllGiftCertificates(query?: MarketingV2ApiSpecs.GetAllGiftCertificatesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, MarketingV2ApiSpecs.GiftCertificateFull[]>>;
    getGiftCertificates(...args: Parameters<MarketingV2Api['getAllGiftCertificates']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, MarketingV2ApiSpecs.GiftCertificateFull[]>>;
    createAgiftCertificate(requestBody: MarketingV2ApiSpecs.CreateAGiftCertificateData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.GiftCertificateFull>>>;
    createGiftCertificate(...args: Parameters<MarketingV2Api['createAgiftCertificate']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.GiftCertificateFull>>>;
    deleteAllGiftCertificates(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    deleteGiftCertificates(...args: Parameters<MarketingV2Api['deleteAllGiftCertificates']>): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
}
