import RequestService from '../helpers/request/request-service';
import type { RequestSuccessResponse, RequestErrorResponse } from '../helpers/request/request-service.types';
import * as MarketingV2ApiSpecs from '../generated/marketing-v2';
export * as MarketingV2ApiSpecs from '../generated/marketing-v2';

export class MarketingV2Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Coupons
     *
     * Returns a list of *Coupons*. Default sorting is by coupon/discount id, from lowest to highest. Optional filter parameters can be passed in.

     ## Usage Notes

     Available types for `type` and `exclude_type` filters:

     |Type|
     |-|
     |`per_item_discount`|
     |`percentage_discount`|
     |`per_total_discount`|
     |`shipping_discount`|
     |`free_shipping`|
     |`promotion`|

     Coupons with `type=promotion` will not populate usable data for the following fields but instead be set to the following default values:

     ```json
     ...
     amount : 0.0000
     min_purchase: 0.0000
     applies_to
     restricted_to: []
     shipping_methods : null
     ...
     ```
     */
    getAllCoupons(
        query?: MarketingV2ApiSpecs.GetAllCouponsData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.GetAllCouponsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/coupons',
            query,
        });
    }

    /**
     * @deprecated Use `getAllCoupons` instead.
     */
    getCoupons(...args: Parameters<MarketingV2Api['getAllCoupons']>) {
        return this.getAllCoupons(...args);
    }

    /**
     * Create a New Coupon
     *
     * Creates a *Coupon*.

     **Required Fields**
     *   `name`
     *   `code`
     *   `type`
     *   `amount`
     *   `applies_to`

     **Read Only Fields**
     *   `id`
     *   `num_uses`

     **Notes**

     The coupon type can be one of the following:

     *   `per_item_discount`
     *   `per_total_discount`
     *   `shipping_discount`
     *   `free_shipping`
     *   `percentage_discount`

     Legacy coupon codes only work with the store's default currency. Applying a coupon with any other currency other than the store's default will result in the error: "Coupons only apply to default currency."
     */
    createAnewCoupon(
        requestBody: MarketingV2ApiSpecs.CreateANewCouponData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<201, Required<MarketingV2ApiSpecs.CreateANewCouponResponses[201]>>,RequestErrorResponse<400, void>>({
            path: 'v2/coupons',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createAnewCoupon` instead.
     */
    createCoupon(...args: Parameters<MarketingV2Api['createAnewCoupon']>) {
        return this.createAnewCoupon(...args);
    }

    /**
     * Delete All Coupons
     *
     * ## Usage Notes
     * Deleting a coupon via this endpoint will delete the coupon but not the promotion it is attached to

     */
    deleteAllCoupons(
        query?: MarketingV2ApiSpecs.DeleteAllCouponsData['query'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<MarketingV2ApiSpecs.DeleteAllCouponsResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v2/coupons',
            query,
        });
    }

    /**
     * @deprecated Use `deleteAllCoupons` instead.
     */
    deleteCoupons(...args: Parameters<MarketingV2Api['deleteAllCoupons']>) {
        return this.deleteAllCoupons(...args);
    }

    /**
     * Get a Count of Coupons
     *
     * Returns a count of all *Coupons* in the store.
     */
    getAcountOfCoupons(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.GetACountOfCouponsResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/coupons/count',
        });
    }

    /**
     * @deprecated Use `getAcountOfCoupons` instead.
     */
    getCouponsCount(...args: Parameters<MarketingV2Api['getAcountOfCoupons']>) {
        return this.getAcountOfCoupons(...args);
    }

    /**
     * Update a Coupon
     *
     * Updates a *Coupon*.

     **Read Only Fields**

     * `id`
     * `num_uses`
     * `date_created`

     **Notes**

     If the `applies_to` value is cleared, you can restore it to the coupon by reapplying the `applies_to` value in a new `PUT` request.
     */
    updateAcoupon(
        id: MarketingV2ApiSpecs.UpdateACouponData['path']['id'],
        requestBody: MarketingV2ApiSpecs.UpdateACouponData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.UpdateACouponResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/coupons/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateAcoupon` instead.
     */
    updateCoupon(...args: Parameters<MarketingV2Api['updateAcoupon']>) {
        return this.updateAcoupon(...args);
    }

    /**
     * Delete a Coupon
     *
     * Deletes a *Coupon*.
     */
    deleteAcoupon(
        id: MarketingV2ApiSpecs.DeleteACouponData['path']['id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<MarketingV2ApiSpecs.DeleteACouponResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v2/coupons/${id}`,
        });
    }

    /**
     * @deprecated Use `deleteAcoupon` instead.
     */
    deleteCoupon(...args: Parameters<MarketingV2Api['deleteAcoupon']>) {
        return this.deleteAcoupon(...args);
    }

    /**
     * Get All Banners
     *
     * Returns a list of *Banners*. Default sorting is by banner id, from lowest to highest.
     */
    getAllBanners(
        query?: MarketingV2ApiSpecs.GetAllBannersData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.GetAllBannersResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/banners',
            query,
        });
    }

    /**
     * @deprecated Use `getAllBanners` instead.
     */
    getBanners(...args: Parameters<MarketingV2Api['getAllBanners']>) {
        return this.getAllBanners(...args);
    }

    /**
     * Create a Banner
     *
     * Creates a *Banner*.

     **Required Fields**
     * name
     * content
     * page
     * location
     * date_type

     **Read Only Fields**
     * date_created
     * id
     */
    createAbanner(
        requestBody: MarketingV2ApiSpecs.CreateABannerData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.CreateABannerResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/banners',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createAbanner` instead.
     */
    createBanner(...args: Parameters<MarketingV2Api['createAbanner']>) {
        return this.createAbanner(...args);
    }

    /**
     * Delete All Banners
     *
     * By default, it deletes all *Banners*.
     */
    deleteAllBanners(
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<MarketingV2ApiSpecs.DeleteAllBannersResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v2/banners',
        });
    }

    /**
     * @deprecated Use `deleteAllBanners` instead.
     */
    deleteBanners(...args: Parameters<MarketingV2Api['deleteAllBanners']>) {
        return this.deleteAllBanners(...args);
    }

    /**
     * Get a Banner
     *
     * Returns a single *Banner*
     */
    getAbanner(
        id: MarketingV2ApiSpecs.GetABannerData['path']['id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.GetABannerResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/banners/${id}`,
        });
    }

    /**
     * @deprecated Use `getAbanner` instead.
     */
    getBanner(...args: Parameters<MarketingV2Api['getAbanner']>) {
        return this.getAbanner(...args);
    }

    /**
     * Update a Banner
     *
     * Updates a *Banner*.

     **Read Only Fields**
     * date_created
     * id
     */
    updateAbanner(
        id: MarketingV2ApiSpecs.UpdateABannerData['path']['id'],
        requestBody: MarketingV2ApiSpecs.UpdateABannerData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.UpdateABannerResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/banners/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateAbanner` instead.
     */
    updateBanner(...args: Parameters<MarketingV2Api['updateAbanner']>) {
        return this.updateAbanner(...args);
    }

    /**
     * Delete a Banner
     *
     * Deletes a *Banner*.
     */
    deleteAbanner(
        id: MarketingV2ApiSpecs.DeleteABannerData['path']['id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<MarketingV2ApiSpecs.DeleteABannerResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v2/banners/${id}`,
        });
    }

    /**
     * @deprecated Use `deleteAbanner` instead.
     */
    deleteBanner(...args: Parameters<MarketingV2Api['deleteAbanner']>) {
        return this.deleteAbanner(...args);
    }

    /**
     * Get a Count of Store Banners
     *
     * Returns a count of *Banners*.
     */
    getAcountOfBanners(
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.GetACountOfBannersResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/banners/count',
        });
    }

    /**
     * @deprecated Use `getAcountOfBanners` instead.
     */
    getBannersCount(...args: Parameters<MarketingV2Api['getAcountOfBanners']>) {
        return this.getAcountOfBanners(...args);
    }

    /**
     * Get a Gift Certificate
     *
     * Returns a single *Gift Certificate*.
     */
    getAgiftCertificate(
        id: MarketingV2ApiSpecs.GetAGiftCertificateData['path']['id'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.GetAGiftCertificateResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/gift_certificates/${id}`,
        });
    }

    /**
     * @deprecated Use `getAgiftCertificate` instead.
     */
    getGiftCertificate(...args: Parameters<MarketingV2Api['getAgiftCertificate']>) {
        return this.getAgiftCertificate(...args);
    }

    /**
     * Update a Gift Certificate
     *
     * Updates a *Gift Certificate*.

     **Read Only Fields**
     * id
     * order_id
     */
    updateAgiftCertificate(
        id: MarketingV2ApiSpecs.UpdateAGiftCertificateData['path']['id'],
        requestBody: MarketingV2ApiSpecs.UpdateAGiftCertificateData['body'],
    ) {
        return this.request.put<RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.UpdateAGiftCertificateResponses[200]>>,RequestErrorResponse<400, void>>({
            path: `v2/gift_certificates/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `updateAgiftCertificate` instead.
     */
    updateGiftCertificate(...args: Parameters<MarketingV2Api['updateAgiftCertificate']>) {
        return this.updateAgiftCertificate(...args);
    }

    /**
     * Delete a Gift Certificate
     *
     * Deletes a *Gift Certificate*.
     */
    deleteAgiftCertificate(
        id: MarketingV2ApiSpecs.DeleteAGiftCertificateData['path']['id'],
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<MarketingV2ApiSpecs.DeleteAGiftCertificateResponses[204]>>,RequestErrorResponse<400, void>>({
            path: `v2/gift_certificates/${id}`,
        });
    }

    /**
     * @deprecated Use `deleteAgiftCertificate` instead.
     */
    deleteGiftCertificate(...args: Parameters<MarketingV2Api['deleteAgiftCertificate']>) {
        return this.deleteAgiftCertificate(...args);
    }

    /**
     * Get All Gift Certificates
     *
     * Returns a list of *Gift Certificates*. Optional filter parameters can be passed in.

     Default sorting is by gift-certificate id, from lowest to highest.

     The maximum limit is 250. If a limit isn’t provided, up to 50 gift_certificates are returned by default.
     */
    getAllGiftCertificates(
        query?: MarketingV2ApiSpecs.GetAllGiftCertificatesData['query'],
    ) {
        return this.request.get<RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.GetAllGiftCertificatesResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/gift_certificates',
            query,
        });
    }

    /**
     * @deprecated Use `getAllGiftCertificates` instead.
     */
    getGiftCertificates(...args: Parameters<MarketingV2Api['getAllGiftCertificates']>) {
        return this.getAllGiftCertificates(...args);
    }

    /**
     * Create a Gift Certificate
     *
     * Creates a *Gift Certificate*.

     **Required Fields**
     * to_name
     * to_email
     * from_name
     * from_email
     * amount

     **Read Only Fields**
     * id
     * order_id

     **Notes**

     When a gift certificate is created through the API, no email notification is triggered to the specified recipient.
     */
    createAgiftCertificate(
        requestBody: MarketingV2ApiSpecs.CreateAGiftCertificateData['body'],
    ) {
        return this.request.post<RequestSuccessResponse<200, Required<MarketingV2ApiSpecs.CreateAGiftCertificateResponses[200]>>,RequestErrorResponse<400, void>>({
            path: 'v2/gift_certificates',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * @deprecated Use `createAgiftCertificate` instead.
     */
    createGiftCertificate(...args: Parameters<MarketingV2Api['createAgiftCertificate']>) {
        return this.createAgiftCertificate(...args);
    }

    /**
     * Delete All Gift Certificates
     *
     * By default, it deletes all *Gift Certificates*.
     */
    deleteAllGiftCertificates(
    ) {
        return this.request.delete<RequestSuccessResponse<204, Required<MarketingV2ApiSpecs.DeleteAllGiftCertificatesResponses[204]>>,RequestErrorResponse<400, void>>({
            path: 'v2/gift_certificates',
        });
    }

    /**
     * @deprecated Use `deleteAllGiftCertificates` instead.
     */
    deleteGiftCertificates(...args: Parameters<MarketingV2Api['deleteAllGiftCertificates']>) {
        return this.deleteAllGiftCertificates(...args);
    }
}
