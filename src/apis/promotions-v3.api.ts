import RequestService from '../helpers/request/request-service';
import * as PromotionsV3ApiSpecs from '../generated/promotions-v3';

export default class PromotionsV3Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Promotions
     *
     * Returns a list of *promotions*.

     The response includes the display name and other details about each promotion, and lists the promotions ordered by ID by default.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    getPromotions(
        query?: PromotionsV3ApiSpecs.GetPromotionsData['query'],
    ) {
        return this.request.get<any, PromotionsV3ApiSpecs.GetPromotionsError>({
            path: 'v3/promotions',
            query,
        });
    }

    /**
     * Create Promotion
     *
     * Creates a *promotion*.
     To learn more about how to create a *promotion*, read the [Promotions Overview](/docs/store-operations/promotions).
     For examples grouped by use case, see the [promotions examples](/docs/store-operations/promotions/examples/brand).

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    createPromotion(
        requestBody: PromotionsV3ApiSpecs.CreatePromotionData['body'],
    ) {
        return this.request.post<any, PromotionsV3ApiSpecs.CreatePromotionError>({
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
        return this.request.delete<any, PromotionsV3ApiSpecs.DeletePromotionsError>({
            path: 'v3/promotions',
            query,
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
    ) {
        return this.request.get<any, PromotionsV3ApiSpecs.GetPromotionError>({
            path: 'v3/promotions/{id}',
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
        requestBody: PromotionsV3ApiSpecs.UpdatePromotionData['body'],
    ) {
        return this.request.put<any, PromotionsV3ApiSpecs.UpdatePromotionError>({
            path: 'v3/promotions/{id}',
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
    ) {
        return this.request.delete<any, any>({
            path: 'v3/promotions/{id}',
        });
    }

    /**
     * Get Coupon Codes
     *
     * Get codes for a particular promotion.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    getPromotionCodes(
        query?: PromotionsV3ApiSpecs.GetPromotionCodesData['query'],
    ) {
        return this.request.get<any, any>({
            path: 'v3/promotions/{promotion_id}/codes',
            query,
        });
    }

    /**
     * Create A Coupon Code
     *
     * Create a new code for the promotion.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    createPromotionCode(
        requestBody: PromotionsV3ApiSpecs.CreatePromotionCodeData['body'],
    ) {
        return this.request.post<any, any>({
            path: 'v3/promotions/{promotion_id}/codes',
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
        query?: PromotionsV3ApiSpecs.DeleteCouponCodesData['query'],
    ) {
        return this.request.delete<any, PromotionsV3ApiSpecs.DeleteCouponCodesError>({
            path: 'v3/promotions/{promotion_id}/codes',
            query,
        });
    }

    /**
     * Delete A Coupon Code
     *
     * Deletes a coupon code.

     **Note:**
     The default rate limit for this endpoint is 40 concurrent requests.
     */
    deleteCouponCode(
    ) {
        return this.request.delete<any, any>({
            path: 'v3/promotions/{promotion_id}/codes/{code_id}',
        });
    }
}
