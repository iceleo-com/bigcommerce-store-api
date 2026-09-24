import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PromotionsV3ApiSpecs from '../generated/promotions-v3';
export * as PromotionsV3ApiSpecs from '../generated/promotions-v3';
export declare class PromotionsV3Api {
    private readonly request;
    constructor(request: RequestService);
    getPromotionCodes(promotionId: PromotionsV3ApiSpecs.GetPromotionCodesData['path']['promotion_id'], query?: PromotionsV3ApiSpecs.GetPromotionCodesData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<PromotionsV3ApiSpecs.CouponCodesBulkGetPromotionCodesResponse200>>>;
    createPromotionCode(promotionId: PromotionsV3ApiSpecs.CreatePromotionCodeData['path']['promotion_id'], requestBody: PromotionsV3ApiSpecs.CreatePromotionCodeData['body']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<201, Required<PromotionsV3ApiSpecs.CouponCodesSingleCreatePromotionCodeResponse201>>>;
    deleteCouponCodes(promotionId: PromotionsV3ApiSpecs.DeleteCouponCodesData['path']['promotion_id'], query?: PromotionsV3ApiSpecs.DeleteCouponCodesData['query']): Promise<RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.DeleteCouponCodesRequestUnprocessableEntityError>>>;
    generatePromotionCodesBatch(promotionId: PromotionsV3ApiSpecs.GeneratePromotionCodesBatchData['path']['promotion_id'], requestBody: PromotionsV3ApiSpecs.GeneratePromotionCodesBatchData['body']): Promise<RequestSuccessResponse<201, Required<PromotionsV3ApiSpecs.CouponCodesBulkGeneratePromotionCodesBatchResponse201>> | RequestErrorResponse<400, Required<PromotionsV3ApiSpecs.ErrorResponse400>> | RequestErrorResponse<403, Required<PromotionsV3ApiSpecs.ErrorResponse403>> | RequestErrorResponse<405, Required<PromotionsV3ApiSpecs.ErrorResponse405>> | RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.ErrorResponse>>>;
    reschedulePromotionCodes(promotionId: PromotionsV3ApiSpecs.ReschedulePromotionCodesData['path']['promotion_id'], requestBody: PromotionsV3ApiSpecs.ReschedulePromotionCodesData['body']): Promise<RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<404, Required<PromotionsV3ApiSpecs._Error>> | RequestErrorResponse<422, Required<PromotionsV3ApiSpecs._Error>>>;
    getCouponCodeByCode(query?: PromotionsV3ApiSpecs.GetCouponCodeByCodeData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<200, Required<PromotionsV3ApiSpecs.CouponCodesSingleGetCouponCodeByCodeResponse200>>>;
    deleteCouponCodeByCode(query?: PromotionsV3ApiSpecs.DeleteCouponCodeByCodeData['query']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    deleteCouponCode(promotionId: PromotionsV3ApiSpecs.DeleteCouponCodeData['path']['promotion_id'], codeId: PromotionsV3ApiSpecs.DeleteCouponCodeData['path']['code_id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getPromotions(query?: PromotionsV3ApiSpecs.GetPromotionsData['query']): Promise<RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<PromotionsV3ApiSpecs.PromotionsBulkGetPromotionsResponse200>>>;
    createPromotion(requestBody: PromotionsV3ApiSpecs.CreatePromotionData['body']): Promise<RequestErrorResponse<400, Required<PromotionsV3ApiSpecs.ErrorResponse400>> | RequestErrorResponse<403, Required<PromotionsV3ApiSpecs.ErrorResponse403>> | RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<201, Required<PromotionsV3ApiSpecs.PromotionsSingleCreatePromotionResponse201>>>;
    deletePromotions(query?: PromotionsV3ApiSpecs.DeletePromotionsData['query']): Promise<RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.DeletePromotionsRequestUnprocessableEntityError>>>;
    archivePromotions(requestBody: PromotionsV3ApiSpecs.ArchivePromotionsData['body']): Promise<RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>> | RequestErrorResponse<500, Required<PromotionsV3ApiSpecs.ErrorResponse>>>;
    unarchivePromotions(requestBody: PromotionsV3ApiSpecs.UnarchivePromotionsData['body']): Promise<RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.ErrorResponse>> | RequestErrorResponse<500, Required<PromotionsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
    getPromotion(id: PromotionsV3ApiSpecs.GetPromotionData['path']['id']): Promise<RequestSuccessResponse<200, Required<PromotionsV3ApiSpecs.PromotionsSingleGetPromotionResponse200>> | RequestErrorResponse<404, Required<PromotionsV3ApiSpecs.ErrorResponse>>>;
    updatePromotion(id: PromotionsV3ApiSpecs.UpdatePromotionData['path']['id'], requestBody: PromotionsV3ApiSpecs.UpdatePromotionData['body']): Promise<RequestErrorResponse<404, Required<PromotionsV3ApiSpecs.ErrorResponse>> | RequestSuccessResponse<200, Required<PromotionsV3ApiSpecs.PromotionsSingleUpdatePromotionResponse200>>>;
    deletePromotion(id: PromotionsV3ApiSpecs.DeletePromotionData['path']['id']): Promise<RequestErrorResponse<400, void> | RequestSuccessResponse<204, Required<{
        [key: string]: unknown;
    }>>>;
}
