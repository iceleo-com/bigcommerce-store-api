export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2/stores/{store_hash}/v2' | (string & {});
};
export type BannerBasePage = 'home_page' | 'category_page' | 'brand_page' | 'search_page';
export type BannerBaseLocation = 'top' | 'bottom';
export type BannerBaseDateType = 'always' | 'custom';
export type BannerFull = {
    name: string;
    content: string;
    page: BannerBasePage;
    location: BannerBaseLocation;
    date_type: BannerBaseDateType;
    date_from?: string;
    date_to?: string;
    visible?: string;
    item_id?: string;
    id?: number;
    date_created?: string;
};
export type BannerBase = {
    name: string;
    content: string;
    page: BannerBasePage;
    location: BannerBaseLocation;
    date_type: BannerBaseDateType;
    date_from?: string;
    date_to?: string;
    visible?: string;
    item_id?: string;
};
export type BannerPut = {
    name: string;
    content: string;
    page: BannerBasePage;
    location: BannerBaseLocation;
    date_type: BannerBaseDateType;
    date_from?: string;
    date_to?: string;
    visible?: string;
    item_id?: string;
};
export type BannersGetBannersCountResponse200 = {
    count?: number;
};
export type CouponsGetParametersType = 'per_item_discount' | 'percentage_discount' | 'per_total_discount' | 'shipping_discount' | 'free_shipping' | 'promotion';
export type CouponsGetParametersExcludeType = 'per_item_discount' | 'percentage_discount' | 'per_total_discount' | 'shipping_discount' | 'free_shipping' | 'promotion';
export type CouponBaseType = 'per_item_discount' | 'per_total_discount' | 'shipping_discount' | 'free_shipping' | 'percentage_discount' | 'promotion';
export type CouponBaseAppliesTo = {
    ids?: Array<number>;
    entity?: string;
};
export type CouponBaseRestrictedTo = {
    countries?: string;
};
export type CouponFull = {
    name: string;
    type: CouponBaseType;
    amount: string;
    min_purchase?: string;
    expires?: string;
    enabled?: boolean;
    code: string;
    applies_to: CouponBaseAppliesTo;
    max_uses?: number;
    max_uses_per_customer?: number;
    restricted_to?: CouponBaseRestrictedTo | [];
    shipping_methods?: Array<string> | null;
    id: number;
    date_created?: string;
    num_uses?: number;
};
export type CouponBase = {
    name: string;
    type: CouponBaseType;
    amount: string;
    min_purchase?: string;
    expires?: string;
    enabled?: boolean;
    code: string;
    applies_to: CouponBaseAppliesTo;
    max_uses?: number;
    max_uses_per_customer?: number;
    restricted_to?: CouponBaseRestrictedTo;
    shipping_methods?: Array<string>;
};
export type CouponsGetCouponsCountResponse200 = {
    count?: number;
};
export type GiftCertificateFullTemplate = 'birthday.html' | 'girl.html' | 'boy.html' | 'celebration.html' | 'christmas.html' | 'general.html' | 'Birthday.html' | 'Girl.html' | 'Boy.html' | 'Celebration.html' | 'Christmas.html' | 'General.html';
export type GiftCertificateFullStatus = 'active' | 'pending' | 'disabled' | 'expired';
export type GiftCertificateFull = {
    to_name: string;
    to_email: string;
    from_name: string;
    from_email: string;
    amount: string;
    id?: number;
    customer_id?: string;
    order_id?: string;
    balance?: string;
    purchase_date?: string;
    expiry_date?: string;
    template?: GiftCertificateFullTemplate;
    message?: string;
    code?: string;
    status?: GiftCertificateFullStatus;
    currency_code?: string;
};
export type GiftCertificatePutTemplate = 'birthday.html' | 'boy.html' | 'girl.html' | 'celebration.html' | 'christmas.html' | 'general.html';
export type GiftCertificatePutStatus = 'active' | 'pending' | 'expired' | 'disabled';
export type GiftCertificatePut = {
    to_name: string;
    to_email: string;
    from_name: string;
    from_email: string;
    amount: string;
    balance?: string;
    purchase_date?: string;
    expiry_date?: string;
    customer_id?: number;
    template?: GiftCertificatePutTemplate;
    message?: string;
    code?: string;
    status?: GiftCertificatePutStatus;
    currency_code?: string;
};
export type GiftCertificatesGetParametersSort = 'id';
export type GiftCertificatesGetParametersDirection = 'asc' | 'desc';
export type GiftCertificatePostTemplate = 'birthday.html' | 'boy.html' | 'girl.html' | 'celebration.html' | 'christmas.html' | 'general.html';
export type GiftCertificatePostStatus = 'active' | 'pending' | 'expired' | 'disabled';
export type GiftCertificatePost = {
    to_name: string;
    to_email: string;
    from_name: string;
    from_email: string;
    amount: string;
    balance?: string;
    purchase_date?: string;
    expiry_date?: string;
    customer_id?: number;
    template?: GiftCertificatePostTemplate;
    message?: string;
    code?: string;
    status?: GiftCertificatePostStatus;
    currency_code?: string;
};
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
    204: {
        [key: string]: unknown;
    };
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
    body?: BannerBase;
    headers: {
        Accept: string;
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
    204: {
        [key: string]: unknown;
    };
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
    body?: BannerPut;
    headers: {
        Accept: string;
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
    200: BannersGetBannersCountResponse200;
};
export type GetBannersCountResponse = GetBannersCountResponses[keyof GetBannersCountResponses];
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
    204: {
        [key: string]: unknown;
    };
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
        type?: CouponsGetParametersType;
        min_id?: number;
        max_id?: number;
        page?: number;
        limit?: number;
        exclude_type?: CouponsGetParametersExcludeType;
    };
    url: '/coupons';
};
export type GetCouponsResponses = {
    200: Array<CouponFull>;
};
export type GetCouponsResponse = GetCouponsResponses[keyof GetCouponsResponses];
export type CreateCouponData = {
    body?: CouponBase;
    headers: {
        Accept: string;
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
    200: CouponsGetCouponsCountResponse200;
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
    204: {
        [key: string]: unknown;
    };
};
export type DeleteCouponResponse = DeleteCouponResponses[keyof DeleteCouponResponses];
export type UpdateCouponData = {
    body?: CouponBase;
    headers: {
        Accept: string;
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
    204: {
        [key: string]: unknown;
    };
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
        sort?: GiftCertificatesGetParametersSort;
        direction?: GiftCertificatesGetParametersDirection;
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
    };
    path?: never;
    query?: never;
    url: '/gift_certificates';
};
export type CreateGiftCertificateResponses = {
    201: GiftCertificateFull;
};
export type CreateGiftCertificateResponse = CreateGiftCertificateResponses[keyof CreateGiftCertificateResponses];
