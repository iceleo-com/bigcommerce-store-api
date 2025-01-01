export type banner_Base = {
    name: string;
    content: string;
    page: 'home_page' | 'category_page' | 'brand_page' | 'search_page';
    location: 'top' | 'bottom';
    date_type: 'always' | 'custom';
    date_from?: string;
    date_to?: string;
    visible?: string;
    item_id?: string;
};
export type page = 'home_page' | 'category_page' | 'brand_page' | 'search_page';
export type location = 'top' | 'bottom';
export type date_type = 'always' | 'custom';
export type banner_Full = {
    id?: number;
    date_created?: string;
} & banner_Base;
export type banner_Put = banner_Base;
export type coupon_Base = {
    name: string;
    type: 'per_item_discount' | 'per_total_discount' | 'shipping_discount' | 'free_shipping' | 'percentage_discount' | 'promotion';
    amount: string;
    min_purchase?: string;
    expires?: string;
    enabled?: boolean;
    code: string;
    applies_to: {
        ids?: Array<(number)>;
        entity?: string;
    };
    max_uses?: number;
    max_uses_per_customer?: number;
    restricted_to?: {
        countries?: string;
    };
    shipping_methods?: Array<(string)>;
};
export type type = 'per_item_discount' | 'per_total_discount' | 'shipping_discount' | 'free_shipping' | 'percentage_discount' | 'promotion';
export type coupon_Full = {
    id: number;
    date_created?: string;
    num_uses?: number;
} & coupon_Base;
export type CouponsResource = {
    url?: string;
    resource?: string;
};
export type giftCertificate_Base = {
    to_name: string;
    to_email: string;
    from_name: string;
    from_email: string;
    amount: string;
};
export type giftCertificate_Full = giftCertificate_Base & {
    id?: number;
    customer_id?: number;
    order_id?: number;
    balance?: string;
    purchase_date?: string;
    expiry_date?: string;
    template?: 'birthday.html' | 'girl.html' | 'boy.html' | 'celebration.html' | 'christmas.html' | 'general.html';
    message?: string;
    code?: string;
    status?: 'active' | 'pending' | 'disabled' | 'expired';
    currency_code?: string;
};
export type template = 'birthday.html' | 'girl.html' | 'boy.html' | 'celebration.html' | 'christmas.html' | 'general.html';
export type status = 'active' | 'pending' | 'disabled' | 'expired';
export type giftCertificate_Post = giftCertificate_Base & {
    balance?: string;
    purchase_date?: string;
    expiry_date?: string;
    customer_id?: number;
    template?: 'birthday.html' | 'boy.html' | 'girl.html' | 'celebration.html' | 'christmas.html' | 'general.html';
    message?: string;
    code?: string;
    status?: 'active' | 'pending' | 'expired' | 'disabled';
    currency_code?: string;
};
export type giftCertificate_Put = giftCertificate_Base & {
    balance?: string;
    purchase_date?: string;
    expiry_date?: string;
    customer_id?: number;
    template?: 'birthday.html' | 'boy.html' | 'girl.html' | 'celebration.html' | 'christmas.html' | 'general.html';
    message?: string;
    code?: string;
    status?: 'active' | 'pending' | 'expired' | 'disabled';
    currency_code?: string;
};
export type ParameterAccept = string;
export type ParameterContentType = string;
export type GetCouponsData = {
    headers: {
        Accept: string;
    };
    query?: {
        code?: string;
        exclude_type?: 'per_item_discount' | 'percentage_discount' | 'per_total_discount' | 'shipping_discount' | 'free_shipping' | 'promotion';
        id?: string;
        limit?: number;
        max_id?: number;
        min_id?: number;
        name?: string;
        page?: number;
        type?: 'per_item_discount' | 'percentage_discount' | 'per_total_discount' | 'shipping_discount' | 'free_shipping' | 'promotion';
    };
};
export type GetCouponsResponse = (Array<coupon_Full>);
export type GetCouponsError = unknown;
export type CreateCouponData = {
    body: coupon_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateCouponResponse = (coupon_Full);
export type CreateCouponError = unknown;
export type DeleteCouponsData = {
    headers: {
        Accept: string;
    };
    query?: {
        'id:in'?: Array<(number)>;
    };
};
export type DeleteCouponsResponse = (void);
export type DeleteCouponsError = unknown;
export type GetCouponsCountData = {
    headers: {
        Accept: string;
    };
};
export type GetCouponsCountResponse = ({
    count?: number;
});
export type GetCouponsCountError = unknown;
export type UpdateCouponData = {
    body: coupon_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
};
export type UpdateCouponResponse = (coupon_Full);
export type UpdateCouponError = unknown;
export type DeleteCouponData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
};
export type DeleteCouponResponse = (void);
export type DeleteCouponError = unknown;
export type GetBannersData = {
    headers: {
        Accept: string;
    };
    query?: {
        limit?: number;
        max_id?: number;
        min_id?: number;
        page?: number;
    };
};
export type GetBannersResponse = (Array<banner_Full>);
export type GetBannersError = unknown;
export type CreateBannerData = {
    body: banner_Base;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateBannerResponse = (banner_Full);
export type CreateBannerError = unknown;
export type DeleteBannersData = {
    headers: {
        Accept: string;
    };
};
export type DeleteBannersResponse = (void);
export type DeleteBannersError = unknown;
export type GetBannerData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
};
export type GetBannerResponse = (banner_Full);
export type GetBannerError = unknown;
export type UpdateBannerData = {
    body: banner_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
};
export type UpdateBannerResponse = (banner_Full);
export type UpdateBannerError = unknown;
export type DeleteBannerData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
};
export type DeleteBannerResponse = (void);
export type DeleteBannerError = unknown;
export type GetBannersCountData = {
    headers: {
        Accept: string;
    };
};
export type GetBannersCountResponse = ({
    count?: number;
});
export type GetBannersCountError = unknown;
export type GetGiftCertificateData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
};
export type GetGiftCertificateResponse = (giftCertificate_Full);
export type GetGiftCertificateError = unknown;
export type UpdateGiftCertificateData = {
    body?: giftCertificate_Put;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
};
export type UpdateGiftCertificateResponse = (giftCertificate_Full);
export type UpdateGiftCertificateError = unknown;
export type DeleteGiftCertificateData = {
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
};
export type DeleteGiftCertificateResponse = (void);
export type DeleteGiftCertificateError = unknown;
export type GetGiftCertificatesData = {
    headers: {
        Accept: string;
    };
    query?: {
        code?: string;
        from_email?: string;
        from_name?: string;
        limit?: number;
        max_id?: number;
        min_id?: number;
        order_id?: number;
        page?: number;
        to_email?: string;
        to_name?: string;
    };
};
export type GetGiftCertificatesResponse = (Array<giftCertificate_Full>);
export type GetGiftCertificatesError = unknown;
export type CreateGiftCertificateData = {
    body?: giftCertificate_Post;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreateGiftCertificateResponse = (giftCertificate_Full);
export type CreateGiftCertificateError = unknown;
export type DeleteGiftCertificatesData = {
    headers: {
        Accept: string;
    };
};
export type DeleteGiftCertificatesResponse = ({
    [key: string]: unknown;
});
export type DeleteGiftCertificatesError = unknown;
