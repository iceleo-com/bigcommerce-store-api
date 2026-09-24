import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as PromotionsV3ApiSpecs from '../generated/promotions-v3';
export * as PromotionsV3ApiSpecs from '../generated/promotions-v3';

export class PromotionsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * List Coupon Codes
     *
     * Get codes for a particular promotion.

     **Note:**
     The default rate limit for this endpoint is 10 concurrent requests.
     */
    getPromotionCodes(
        promotionId: PromotionsV3ApiSpecs.GetPromotionCodesData['path']['promotion_id'],
        query?: PromotionsV3ApiSpecs.GetPromotionCodesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<PromotionsV3ApiSpecs.GetPromotionCodesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v3/promotions/${promotionId}/codes`,
            query,
        });
    }

    /**
     * Create Coupon Code
     *
     * Create a new code for the promotion.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    createPromotionCode(
        promotionId: PromotionsV3ApiSpecs.CreatePromotionCodeData['path']['promotion_id'],
        requestBody: PromotionsV3ApiSpecs.CreatePromotionCodeData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<PromotionsV3ApiSpecs.CreatePromotionCodeResponses[201]>>,RequestErrorResponse<400, void>>({
            path: `v3/promotions/${promotionId}/codes`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Multiple Coupon Codes
     *
     * Deletes multiple coupon codes relating to the given promotion. Currently, batches are limited to 50 coupon codes.

     **Notes**
     * "id:in" query param is required to delete coupon codes. If not provided, or provided with the wrong data format, a 422 error code is returned.
     * The default rate limit for this endpoint is 40 concurrent requests.
     */
    deleteCouponCodes(
        promotionId: PromotionsV3ApiSpecs.DeleteCouponCodesData['path']['promotion_id'],
        query?: PromotionsV3ApiSpecs.DeleteCouponCodesData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<PromotionsV3ApiSpecs.DeleteCouponCodesResponses[204]>>,RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.DeleteCouponCodesErrors[422]>>>({
            path: `v3/promotions/${promotionId}/codes`,
            query,
        });
    }

    /**
     * Generate Multiple Coupon Codes
     *
     * Generate a batch of coupon codes for a particular bulk coupon promotion.

     **Note:**
     * batch_size (number of codes generated per request) is limited to 250. If batch_size is not an integer or larger than 250, it will return a 422 error code.
     * The default rate limit for this endpoint is 10 concurrent requests.
     */
    generatePromotionCodesBatch(
        promotionId: PromotionsV3ApiSpecs.GeneratePromotionCodesBatchData['path']['promotion_id'],
        requestBody: PromotionsV3ApiSpecs.GeneratePromotionCodesBatchData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<PromotionsV3ApiSpecs.GeneratePromotionCodesBatchResponses[201]>>,(RequestErrorResponse<400, Required<PromotionsV3ApiSpecs.GeneratePromotionCodesBatchErrors[400]>> | RequestErrorResponse<403, Required<PromotionsV3ApiSpecs.GeneratePromotionCodesBatchErrors[403]>> | RequestErrorResponse<405, Required<PromotionsV3ApiSpecs.GeneratePromotionCodesBatchErrors[405]>> | RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.GeneratePromotionCodesBatchErrors[422]>>)>({
            path: `v3/promotions/${promotionId}/codegen`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Reschedule Multiple Coupon Codes
     *
     * Sets or clears the custom validity window on up to 250 coupon codes of a bulk coupon promotion in a single atomic operation.

     **Notes**
     * Only supported for bulk coupon promotions (`coupon_type` of `BULK`); a 422 is returned otherwise.
     * `schedule: null` resets the selected codes to inherit the promotion's schedule.
     * Batches are limited to 250 coupon code ids; larger batches return a 422.
     * The operation is atomic — any invalid id (including ids that do not exist or belong to another promotion) fails the whole request with a 422.
     * Dates must be within the promotion's schedule, and `valid_until` must be after `valid_from`.
     * You cannot reschedule the codes of an archived promotion.
     */
    reschedulePromotionCodes(
        promotionId: PromotionsV3ApiSpecs.ReschedulePromotionCodesData['path']['promotion_id'],
        requestBody: PromotionsV3ApiSpecs.ReschedulePromotionCodesData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<204, Required<PromotionsV3ApiSpecs.ReschedulePromotionCodesResponses[204]>>,(RequestErrorResponse<404, Required<PromotionsV3ApiSpecs.ReschedulePromotionCodesErrors[404]>> | RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.ReschedulePromotionCodesErrors[422]>>)>({
            path: `v3/promotions/${promotionId}/reschedulecodes`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Coupon Code
     *
     * Get a coupon with a given coupon code.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    getCouponCodeByCode(
        query?: PromotionsV3ApiSpecs.GetCouponCodeByCodeData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<PromotionsV3ApiSpecs.GetCouponCodeByCodeResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v3/promotions/codes',
            query,
        });
    }

    /**
     * Delete Coupon Code
     *
     * Deletes a coupon with a given coupon code.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    deleteCouponCodeByCode(
        query?: PromotionsV3ApiSpecs.DeleteCouponCodeByCodeData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<PromotionsV3ApiSpecs.DeleteCouponCodeByCodeResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v3/promotions/codes',
            query,
        });
    }

    /**
     * Delete Coupon Code by ID
     *
     * Deletes a coupon code.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    deleteCouponCode(
        promotionId: PromotionsV3ApiSpecs.DeleteCouponCodeData['path']['promotion_id'],
        codeId: PromotionsV3ApiSpecs.DeleteCouponCodeData['path']['code_id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<PromotionsV3ApiSpecs.DeleteCouponCodeResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/promotions/${promotionId}/codes/${codeId}`,
        });
    }

    /**
     * List Promotions
     *
     * Returns a list of *promotions*.

     The response includes the display name and other details about each promotion, and lists the promotions ordered by ID by default.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    getPromotions(
        query?: PromotionsV3ApiSpecs.GetPromotionsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<PromotionsV3ApiSpecs.GetPromotionsResponses[200]>>,RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.GetPromotionsErrors[422]>>>({
            path: 'v3/promotions',
            query,
        });
    }

    /**
     * Create Promotion
     *
     * Creates a *promotion*.
     To learn more about how to create a *promotion*, read the [Promotions Overview](/developer/docs/admin/catalog-and-inventory/promotions).
     For examples grouped by use case, see the [promotions examples](/developer/docs/admin/catalog-and-inventory/promotions/examples/brand).

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    createPromotion(
        requestBody: PromotionsV3ApiSpecs.CreatePromotionData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<PromotionsV3ApiSpecs.CreatePromotionResponses[201]>>,(RequestErrorResponse<400, Required<PromotionsV3ApiSpecs.CreatePromotionErrors[400]>> | RequestErrorResponse<403, Required<PromotionsV3ApiSpecs.CreatePromotionErrors[403]>> | RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.CreatePromotionErrors[422]>>)>({
            path: 'v3/promotions',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Multiple Promotions
     *
     * Deletes multiple promotions. Currently, batches are limited to 50 promotions.

     **Notes**
     * "id:in" query param is required to delete promotions. If this parameter is not provided, or provided with the wrong data format, a 422 error code is returned.
     * You cannot delete promotions that still have coupon codes attached.
     * The default rate limit for this endpoint is 40 concurrent requests.
     */
    deletePromotions(
        query?: PromotionsV3ApiSpecs.DeletePromotionsData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<PromotionsV3ApiSpecs.DeletePromotionsResponses[204]>>,RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.DeletePromotionsErrors[422]>>>({
            path: 'v3/promotions',
            query,
        });
    }

    /**
     * Archive Multiple Promotions
     *
     * Archives multiple promotions. Accepts an array of promotion IDs to archive.

     Archiving a coupon-based promotion deletes all coupon codes created for that promotion before the time of archiving. Because a promotion can have a large number of codes, the deletion runs asynchronously and can take a few minutes to complete.

     Archiving a promotion also removes it from the featured list, freeing up a seat for another active promotion. Its priority is ignored by priority management operations on active promotions. If the promotion is later unarchived, it's placed at the bottom of the priority list.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    archivePromotions(
        requestBody: PromotionsV3ApiSpecs.ArchivePromotionsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<204, Required<PromotionsV3ApiSpecs.ArchivePromotionsResponses[204]>>,(RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.ArchivePromotionsErrors[422]>> | RequestErrorResponse<500, Required<PromotionsV3ApiSpecs.ArchivePromotionsErrors[500]>>)>({
            path: 'v3/promotions/archive',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Unarchive Multiple Promotions
     *
     * Unarchives multiple promotions. Accepts an array of promotion IDs to unarchive.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    unarchivePromotions(
        requestBody: PromotionsV3ApiSpecs.UnarchivePromotionsData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<204, Required<PromotionsV3ApiSpecs.UnarchivePromotionsResponses[204]>>,(RequestErrorResponse<422, Required<PromotionsV3ApiSpecs.UnarchivePromotionsErrors[422]>> | RequestErrorResponse<500, Required<PromotionsV3ApiSpecs.UnarchivePromotionsErrors[500]>>)>({
            path: 'v3/promotions/unarchive',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Get Promotion
     *
     * Returns a single *promotion*.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests
     */
    getPromotion(
        id: PromotionsV3ApiSpecs.GetPromotionData['path']['id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<PromotionsV3ApiSpecs.GetPromotionResponses[200]>>,RequestErrorResponse<404, Required<PromotionsV3ApiSpecs.GetPromotionErrors[404]>>>({
            path: `v3/promotions/${id}`,
        });
    }

    /**
     * Update Promotion
     *
     * Update a promotion.

     **Note:**
     The default rate limit for this request is 40 concurrent requests.
     */
    updatePromotion(
        id: PromotionsV3ApiSpecs.UpdatePromotionData['path']['id'],
        requestBody: PromotionsV3ApiSpecs.UpdatePromotionData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<PromotionsV3ApiSpecs.UpdatePromotionResponses[200]>>,RequestErrorResponse<404, Required<PromotionsV3ApiSpecs.UpdatePromotionErrors[404]>>>({
            path: `v3/promotions/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete Promotion
     *
     * Deletes a promotion.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    deletePromotion(
        id: PromotionsV3ApiSpecs.DeletePromotionData['path']['id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<PromotionsV3ApiSpecs.DeletePromotionResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v3/promotions/${id}`,
        });
    }
}
