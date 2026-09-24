import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as MarketingV2ApiSpecs from '../generated/marketing-v2';
export * as MarketingV2ApiSpecs from '../generated/marketing-v2';
export declare class MarketingV2Api {
    private readonly request;
    constructor(request: RequestService);
    getBanners(query?: MarketingV2ApiSpecs.GetBannersData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, MarketingV2ApiSpecs.BannerFull[]>>;
    createBanner(requestBody: MarketingV2ApiSpecs.CreateBannerData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.BannerFull>>>;
    deleteBanners(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getBanner(id: MarketingV2ApiSpecs.GetBannerData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.BannerFull>>>;
    updateBanner(id: MarketingV2ApiSpecs.UpdateBannerData['path']['id'], requestBody: MarketingV2ApiSpecs.UpdateBannerData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.BannerFull>>>;
    deleteBanner(id: MarketingV2ApiSpecs.DeleteBannerData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getBannersCount(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.BannersGetBannersCountResponse200>>>;
    getCoupons(query?: MarketingV2ApiSpecs.GetCouponsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, MarketingV2ApiSpecs.CouponFull[]>>;
    createCoupon(requestBody: MarketingV2ApiSpecs.CreateCouponData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<MarketingV2ApiSpecs.CouponFull>>>;
    deleteCoupons(query?: MarketingV2ApiSpecs.DeleteCouponsData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getCouponsCount(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.CouponsGetCouponsCountResponse200>>>;
    updateCoupon(id: MarketingV2ApiSpecs.UpdateCouponData['path']['id'], requestBody: MarketingV2ApiSpecs.UpdateCouponData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.CouponFull>>>;
    deleteCoupon(id: MarketingV2ApiSpecs.DeleteCouponData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getGiftCertificate(id: MarketingV2ApiSpecs.GetGiftCertificateData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.GiftCertificateFull>>>;
    updateGiftCertificate(id: MarketingV2ApiSpecs.UpdateGiftCertificateData['path']['id'], requestBody: MarketingV2ApiSpecs.UpdateGiftCertificateData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.GiftCertificateFull>>>;
    deleteGiftCertificate(id: MarketingV2ApiSpecs.DeleteGiftCertificateData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getGiftCertificates(query?: MarketingV2ApiSpecs.GetGiftCertificatesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, MarketingV2ApiSpecs.GiftCertificateFull[]>>;
    createGiftCertificate(requestBody: MarketingV2ApiSpecs.CreateGiftCertificateData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<MarketingV2ApiSpecs.GiftCertificateFull>>>;
    deleteGiftCertificates(): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
}
