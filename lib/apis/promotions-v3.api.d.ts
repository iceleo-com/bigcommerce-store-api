import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PromotionsV3ApiSpecs from '../generated/promotions-v3';
export * as PromotionsV3ApiSpecs from '../generated/promotions-v3';
export declare class PromotionsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPromotions(query?: PromotionsV3ApiSpecs.GetPromotionsData['query']): Promise<RequestSuccessResponse<200, Required<{
        data: Array<PromotionsV3ApiSpecs.SavedAutomaticPromotion | PromotionsV3ApiSpecs.SavedCouponPromotion>;
        meta: PromotionsV3ApiSpecs.CollectionMeta;
    }>> | RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.ErrorResponse>>>;
    createPromotion(requestBody: PromotionsV3ApiSpecs.CreatePromotionData['body']): Promise<RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<201, Required<{
        data?: PromotionsV3ApiSpecs.SavedCouponPromotion | PromotionsV3ApiSpecs.SavedAutomaticPromotion;
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<400, Required<PromotionsV3ApiSpecs.ErrorResponse400>> | RequestErrorResponse<403, Required<PromotionsV3ApiSpecs.ErrorResponse403>>>;
    deletePromotions(query?: PromotionsV3ApiSpecs.DeletePromotionsData['query']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<422, Required<{
        errors?: Array<PromotionsV3ApiSpecs.BulkActionResponseError>;
        meta?: PromotionsV3ApiSpecs.BulkActionResponseMeta;
    }>>>;
    getPromotion(id: PromotionsV3ApiSpecs.GetPromotionData['path']['id']): Promise<RequestSuccessResponse<200, Required<{
        data?: PromotionsV3ApiSpecs.SavedCouponPromotion | PromotionsV3ApiSpecs.SavedAutomaticPromotion;
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<404, Required<PromotionsV3ApiSpecs.ErrorResponse>>>;
    updatePromotion(id: PromotionsV3ApiSpecs.UpdatePromotionData['path']['id'], requestBody: PromotionsV3ApiSpecs.UpdatePromotionData['body']): Promise<RequestErrorResponse<404, Required<PromotionsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<{
        data?: PromotionsV3ApiSpecs.SavedCouponPromotion | PromotionsV3ApiSpecs.SavedAutomaticPromotion;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    deletePromotion(id: PromotionsV3ApiSpecs.DeletePromotionData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    getPromotionCodes(promotionId: PromotionsV3ApiSpecs.GetPromotionCodesData['path']['promotion_id'], query?: PromotionsV3ApiSpecs.GetPromotionCodesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<PromotionsV3ApiSpecs.CouponCode>;
        meta?: PromotionsV3ApiSpecs.OptionalCursorCollectionMeta;
    }>>>;
    createPromotionCode(promotionId: PromotionsV3ApiSpecs.CreatePromotionCodeData['path']['promotion_id'], requestBody: PromotionsV3ApiSpecs.CreatePromotionCodeData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<{
        data?: PromotionsV3ApiSpecs.CouponCode;
        meta?: {
            [key: string]: unknown;
        };
    }>>>;
    deleteCouponCodes(promotionId: PromotionsV3ApiSpecs.DeleteCouponCodesData['path']['promotion_id'], query?: PromotionsV3ApiSpecs.DeleteCouponCodesData['query']): Promise<RequestSuccessResponse<204, void> | RequestErrorResponse<422, Required<{
        errors?: Array<PromotionsV3ApiSpecs.BulkActionResponseError>;
        meta?: PromotionsV3ApiSpecs.BulkActionResponseMeta;
    }>>>;
    generatePromotionCodesBatch(promotionId: PromotionsV3ApiSpecs.GeneratePromotionCodesBatchData['path']['promotion_id'], requestBody: PromotionsV3ApiSpecs.GeneratePromotionCodesBatchData['body']): Promise<RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<400, Required<PromotionsV3ApiSpecs.ErrorResponse400>> | RequestErrorResponse<403, Required<PromotionsV3ApiSpecs.ErrorResponse403>> | RequestSuccessResponse<201, Required<{
        data?: {
            created?: string;
            max_uses?: number;
            max_uses_per_customer?: number;
            batch_size?: number;
            codes?: Array<PromotionsV3ApiSpecs.BulkCouponCode>;
        };
        meta?: {
            [key: string]: unknown;
        };
    }>> | RequestErrorResponse<405, Required<PromotionsV3ApiSpecs.ErrorResponse405>>>;
    getCouponCodeByCode(query?: PromotionsV3ApiSpecs.GetCouponCodeByCodeData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<{
        data?: Array<PromotionsV3ApiSpecs.CouponCode>;
        meta?: PromotionsV3ApiSpecs.OptionalCursorCollectionMeta;
    }>>>;
    deleteCouponCodeByCode(query?: PromotionsV3ApiSpecs.DeleteCouponCodeByCodeData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
    deleteCouponCode(promotionId: PromotionsV3ApiSpecs.DeleteCouponCodeData['path']['promotion_id'], codeId: PromotionsV3ApiSpecs.DeleteCouponCodeData['path']['code_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, void>>;
}
