import RequestService from '../helpers/request/request-service';
import * as MarketingV2ApiSpecs from '../generated/marketing-v2';

export default class MarketingV2Api {
    private readonly request: RequestService;

    constructor(request: RequestService) {
        this.request = request;
    }

    /**
     * Get All Coupons
     *
     * Returns a list of *Coupons*. Default sorting is by coupon/discount id, from lowest to highest. You can pass in optional filter parameters. We recommended using `?min_id=x&limit=y` to paginate through a large set of data because it offers better performance.

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
    getCoupons(
        query?: MarketingV2ApiSpecs.GetCouponsData['query'],
    ) {
        return this.request.get<MarketingV2ApiSpecs.GetCouponsResponse, any>({
            path: 'v2/coupons',
            query,
        });
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
    createCoupon(
        requestBody: MarketingV2ApiSpecs.CreateCouponData['body'],
    ) {
        return this.request.post<any, any>({
            path: 'v2/coupons',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete All Coupons
     *
     * ## Usage Notes
     * Deleting a coupon via this endpoint will delete the coupon but not the promotion it is attached to

     */
    deleteCoupons(
        query?: MarketingV2ApiSpecs.DeleteCouponsData['query'],
    ) {
        return this.request.delete<any, any>({
            path: 'v2/coupons',
            query,
        });
    }

    /**
     * Get a Count of Coupons
     *
     * Returns a count of all *Coupons* in the store.
     */
    getCouponsCount(
    ) {
        return this.request.get<MarketingV2ApiSpecs.GetCouponsCountResponse, any>({
            path: 'v2/coupons/count',
        });
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
    updateCoupon(
        id: MarketingV2ApiSpecs.UpdateCouponData['path']['id'],
        requestBody: MarketingV2ApiSpecs.UpdateCouponData['body'],
    ) {
        return this.request.put<MarketingV2ApiSpecs.UpdateCouponResponse, any>({
            path: `v2/coupons/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Coupon
     *
     * Deletes a *Coupon*.
     */
    deleteCoupon(
        id: MarketingV2ApiSpecs.DeleteCouponData['path']['id'],
    ) {
        return this.request.delete<any, any>({
            path: `v2/coupons/${id}`,
        });
    }

    /**
     * Get All Banners
     *
     * Returns a list of *Banners*. Default sorting is by banner id, from lowest to highest.
     */
    getBanners(
        query?: MarketingV2ApiSpecs.GetBannersData['query'],
    ) {
        return this.request.get<MarketingV2ApiSpecs.GetBannersResponse, any>({
            path: 'v2/banners',
            query,
        });
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
    createBanner(
        requestBody: MarketingV2ApiSpecs.CreateBannerData['body'],
    ) {
        return this.request.post<MarketingV2ApiSpecs.CreateBannerResponse, any>({
            path: 'v2/banners',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete All Banners
     *
     * By default, it deletes all *Banners*.
     */
    deleteBanners(
    ) {
        return this.request.delete<any, any>({
            path: 'v2/banners',
        });
    }

    /**
     * Get a Banner
     *
     * Returns a single *Banner*
     */
    getBanner(
        id: MarketingV2ApiSpecs.GetBannerData['path']['id'],
    ) {
        return this.request.get<MarketingV2ApiSpecs.GetBannerResponse, any>({
            path: `v2/banners/${id}`,
        });
    }

    /**
     * Update a Banner
     *
     * Updates a *Banner*.

     **Read Only Fields**
     * date_created
     * id
     */
    updateBanner(
        id: MarketingV2ApiSpecs.UpdateBannerData['path']['id'],
        requestBody: MarketingV2ApiSpecs.UpdateBannerData['body'],
    ) {
        return this.request.put<MarketingV2ApiSpecs.UpdateBannerResponse, any>({
            path: `v2/banners/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Banner
     *
     * Deletes a *Banner*.
     */
    deleteBanner(
        id: MarketingV2ApiSpecs.DeleteBannerData['path']['id'],
    ) {
        return this.request.delete<any, any>({
            path: `v2/banners/${id}`,
        });
    }

    /**
     * Get a Count of Store Banners
     *
     * Returns a count of *Banners*.
     */
    getBannersCount(
    ) {
        return this.request.get<MarketingV2ApiSpecs.GetBannersCountResponse, any>({
            path: 'v2/banners/count',
        });
    }

    /**
     * Get a Gift Certificate
     *
     * Returns a single *Gift Certificate*.
     */
    getGiftCertificate(
        id: MarketingV2ApiSpecs.GetGiftCertificateData['path']['id'],
    ) {
        return this.request.get<MarketingV2ApiSpecs.GetGiftCertificateResponse, any>({
            path: `v2/gift_certificates/${id}`,
        });
    }

    /**
     * Update a Gift Certificate
     *
     * Updates a *Gift Certificate*.

     **Read Only Fields**
     * id
     * order_id
     */
    updateGiftCertificate(
        id: MarketingV2ApiSpecs.UpdateGiftCertificateData['path']['id'],
        requestBody: MarketingV2ApiSpecs.UpdateGiftCertificateData['body'],
    ) {
        return this.request.put<MarketingV2ApiSpecs.UpdateGiftCertificateResponse, any>({
            path: `v2/gift_certificates/${id}`,
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete a Gift Certificate
     *
     * Deletes a *Gift Certificate*.
     */
    deleteGiftCertificate(
        id: MarketingV2ApiSpecs.DeleteGiftCertificateData['path']['id'],
    ) {
        return this.request.delete<any, any>({
            path: `v2/gift_certificates/${id}`,
        });
    }

    /**
     * Get All Gift Certificates
     *
     * Returns a list of *Gift Certificates*. Optional filter parameters can be passed in.

     Default sorting is by gift-certificate id, from lowest to highest.

     The maximum limit is 250. If a limit isn’t provided, up to 50 gift_certificates are returned by default.
     */
    getGiftCertificates(
        query?: MarketingV2ApiSpecs.GetGiftCertificatesData['query'],
    ) {
        return this.request.get<MarketingV2ApiSpecs.GetGiftCertificatesResponse, any>({
            path: 'v2/gift_certificates',
            query,
        });
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
    createGiftCertificate(
        requestBody: MarketingV2ApiSpecs.CreateGiftCertificateData['body'],
    ) {
        return this.request.post<any, any>({
            path: 'v2/gift_certificates',
            contentType: 'application/json',
            body: requestBody,
        });
    }

    /**
     * Delete All Gift Certificates
     *
     * By default, it deletes all *Gift Certificates*.
     */
    deleteGiftCertificates(
    ) {
        return this.request.delete<any, any>({
            path: 'v2/gift_certificates',
        });
    }
}
