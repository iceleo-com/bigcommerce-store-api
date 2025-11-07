export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2' | (string & {});
};
export type CouponsResource = {
    url?: string;
    resource?: string;
};
export type CouponFull = {
    id: number;
    date_created?: string;
    num_uses?: number;
} & CouponBase;
export type CouponBase = {
    name: string;
    type: 'per_item_discount' | 'per_total_discount' | 'shipping_discount' | 'free_shipping' | 'percentage_discount' | 'promotion';
    amount: string;
    min_purchase?: string;
    expires?: string;
    enabled?: boolean;
    code: string;
    applies_to: {
        ids?: Array<number>;
        entity?: string;
    };
    max_uses?: number;
    max_uses_per_customer?: number;
    restricted_to?: {
        countries?: string;
    };
    shipping_methods?: Array<string>;
};
export type BannerBase = {
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
export type BannerFull = {
    id?: number;
    date_created?: string;
} & BannerBase;
export type BannerPut = BannerBase;
export type GiftCertificateBase = {
    to_name: string;
    to_email: string;
    from_name: string;
    from_email: string;
    amount: string;
};
export type GiftCertificateFull = GiftCertificateBase & {
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
export type GiftCertificatePut = GiftCertificateBase & {
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
export type GiftCertificatePost = GiftCertificateBase & {
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
export type Accept = string;
export type ContentType = string;
export type DeleteCouponsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'id:in'?: Array<number>;
    };
    url: '/coupons';
};
export type DeleteCouponsResponses = {
    204: void;
};
export type DeleteCouponsResponse = DeleteCouponsResponses[keyof DeleteCouponsResponses];
export type GetCouponsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        id?: string;
        code?: string;
        name?: string;
        type?: 'per_item_discount' | 'percentage_discount' | 'per_total_discount' | 'shipping_discount' | 'free_shipping' | 'promotion';
        min_id?: number;
        max_id?: number;
        page?: number;
        limit?: number;
        exclude_type?: 'per_item_discount' | 'percentage_discount' | 'per_total_discount' | 'shipping_discount' | 'free_shipping' | 'promotion';
    };
    url: '/coupons';
};
export type GetCouponsResponses = {
    200: Array<CouponFull>;
};
export type GetCouponsResponse = GetCouponsResponses[keyof GetCouponsResponses];
export type CreateCouponData = {
    body: CouponBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/coupons';
};
export type CreateCouponResponses = {
    201: CouponFull;
};
export type CreateCouponResponse = CreateCouponResponses[keyof CreateCouponResponses];
export type GetCouponsCountData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/coupons/count';
};
export type GetCouponsCountResponses = {
    200: {
        count?: number;
    };
};
export type GetCouponsCountResponse = GetCouponsCountResponses[keyof GetCouponsCountResponses];
export type DeleteCouponData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/coupons/{id}';
};
export type DeleteCouponResponses = {
    204: void;
};
export type DeleteCouponResponse = DeleteCouponResponses[keyof DeleteCouponResponses];
export type UpdateCouponData = {
    body: CouponBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/coupons/{id}';
};
export type UpdateCouponResponses = {
    200: CouponFull;
};
export type UpdateCouponResponse = UpdateCouponResponses[keyof UpdateCouponResponses];
export type DeleteBannersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/banners';
};
export type DeleteBannersResponses = {
    204: void;
};
export type DeleteBannersResponse = DeleteBannersResponses[keyof DeleteBannersResponses];
export type GetBannersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        min_id?: number;
        max_id?: number;
        page?: number;
        limit?: number;
    };
    url: '/banners';
};
export type GetBannersResponses = {
    200: Array<BannerFull>;
};
export type GetBannersResponse = GetBannersResponses[keyof GetBannersResponses];
export type CreateBannerData = {
    body: BannerBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/banners';
};
export type CreateBannerResponses = {
    200: BannerFull;
};
export type CreateBannerResponse = CreateBannerResponses[keyof CreateBannerResponses];
export type DeleteBannerData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/banners/{id}';
};
export type DeleteBannerResponses = {
    204: void;
};
export type DeleteBannerResponse = DeleteBannerResponses[keyof DeleteBannerResponses];
export type GetBannerData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/banners/{id}';
};
export type GetBannerResponses = {
    200: BannerFull;
};
export type GetBannerResponse = GetBannerResponses[keyof GetBannerResponses];
export type UpdateBannerData = {
    body: BannerPut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/banners/{id}';
};
export type UpdateBannerResponses = {
    200: BannerFull;
};
export type UpdateBannerResponse = UpdateBannerResponses[keyof UpdateBannerResponses];
export type GetBannersCountData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/banners/count';
};
export type GetBannersCountResponses = {
    200: {
        count?: number;
    };
};
export type GetBannersCountResponse = GetBannersCountResponses[keyof GetBannersCountResponses];
export type DeleteGiftCertificateData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/gift_certificates/{id}';
};
export type DeleteGiftCertificateResponses = {
    204: void;
};
export type DeleteGiftCertificateResponse = DeleteGiftCertificateResponses[keyof DeleteGiftCertificateResponses];
export type GetGiftCertificateData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/gift_certificates/{id}';
};
export type GetGiftCertificateResponses = {
    200: GiftCertificateFull;
};
export type GetGiftCertificateResponse = GetGiftCertificateResponses[keyof GetGiftCertificateResponses];
export type UpdateGiftCertificateData = {
    body?: GiftCertificatePut;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: number;
    };
    query?: never;
    url: '/gift_certificates/{id}';
};
export type UpdateGiftCertificateResponses = {
    200: GiftCertificateFull;
};
export type UpdateGiftCertificateResponse = UpdateGiftCertificateResponses[keyof UpdateGiftCertificateResponses];
export type DeleteGiftCertificatesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/gift_certificates';
};
export type DeleteGiftCertificatesResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteGiftCertificatesResponse = DeleteGiftCertificatesResponses[keyof DeleteGiftCertificatesResponses];
export type GetGiftCertificatesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        min_id?: number;
        max_id?: number;
        code?: string;
        order_id?: number;
        to_name?: string;
        to_email?: string;
        from_name?: string;
        from_email?: string;
        page?: number;
        limit?: number;
        sort?: 'id';
        direction?: 'asc' | 'desc';
    };
    url: '/gift_certificates';
};
export type GetGiftCertificatesResponses = {
    200: Array<GiftCertificateFull>;
};
export type GetGiftCertificatesResponse = GetGiftCertificatesResponses[keyof GetGiftCertificatesResponses];
export type CreateGiftCertificateData = {
    body?: GiftCertificatePost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/gift_certificates';
};
export type CreateGiftCertificateResponses = {
    201: GiftCertificateFull;
};
export type CreateGiftCertificateResponse = CreateGiftCertificateResponses[keyof CreateGiftCertificateResponses];
