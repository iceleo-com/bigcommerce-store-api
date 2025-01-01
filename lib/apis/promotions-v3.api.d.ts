import RequestService from '../helpers/request/request-service';
import * as PromotionsV3ApiSpecs from '../generated/promotions-v3';
export default class PromotionsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPromotions(query?: PromotionsV3ApiSpecs.GetPromotionsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, PromotionsV3ApiSpecs.ErrorResponse>>;
    createPromotion(requestBody: PromotionsV3ApiSpecs.CreatePromotionData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, PromotionsV3ApiSpecs.CreatePromotionError>>;
    deletePromotions(query?: PromotionsV3ApiSpecs.DeletePromotionsData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, PromotionsV3ApiSpecs.DeletePromotionsError>>;
    getPromotion(): Promise<import("../helpers/request/request-service.type").RequestResponse<any, PromotionsV3ApiSpecs.ErrorResponse>>;
    updatePromotion(requestBody: PromotionsV3ApiSpecs.UpdatePromotionData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, PromotionsV3ApiSpecs.ErrorResponse>>;
    deletePromotion(): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    getPromotionCodes(query?: PromotionsV3ApiSpecs.GetPromotionCodesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    createPromotionCode(requestBody: PromotionsV3ApiSpecs.CreatePromotionCodeData['body']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
    deleteCouponCodes(query?: PromotionsV3ApiSpecs.DeleteCouponCodesData['query']): Promise<import("../helpers/request/request-service.type").RequestResponse<any, PromotionsV3ApiSpecs.DeleteCouponCodesError>>;
    deleteCouponCode(): Promise<import("../helpers/request/request-service.type").RequestResponse<any, any>>;
}
