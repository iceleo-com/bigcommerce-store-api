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
export type BannerPut = {
    [key: string]: unknown;
} & BannerBase;
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
export type DeleteAllCouponsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'id:in'?: string;
    };
    url: '/coupons';
};
export type DeleteAllCouponsResponses = {
    204: void;
};
export type DeleteAllCouponsResponse = DeleteAllCouponsResponses[keyof DeleteAllCouponsResponses];
export type GetAllCouponsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        id?: string;
        code?: string;
        name?: string;
        type?: string;
        min_id?: number;
        max_id?: number;
        page?: number;
        limit?: number;
        exclude_type?: string;
    };
    url: '/coupons';
};
export type GetAllCouponsResponses = {
    200: Array<CouponFull>;
};
export type GetAllCouponsResponse = GetAllCouponsResponses[keyof GetAllCouponsResponses];
export type CreateANewCouponData = {
    body: CouponBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/coupons';
};
export type CreateANewCouponResponses = {
    201: CouponFull;
};
export type CreateANewCouponResponse = CreateANewCouponResponses[keyof CreateANewCouponResponses];
export type GetACountOfCouponsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/coupons/count';
};
export type GetACountOfCouponsResponses = {
    200: {
        count?: number;
    };
};
export type GetACountOfCouponsResponse = GetACountOfCouponsResponses[keyof GetACountOfCouponsResponses];
export type DeleteACouponData = {
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
export type DeleteACouponResponses = {
    204: void;
};
export type DeleteACouponResponse = DeleteACouponResponses[keyof DeleteACouponResponses];
export type UpdateACouponData = {
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
export type UpdateACouponResponses = {
    200: CouponFull;
};
export type UpdateACouponResponse = UpdateACouponResponses[keyof UpdateACouponResponses];
export type DeleteAllBannersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/banners';
};
export type DeleteAllBannersResponses = {
    204: void;
};
export type DeleteAllBannersResponse = DeleteAllBannersResponses[keyof DeleteAllBannersResponses];
export type GetAllBannersData = {
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
export type GetAllBannersResponses = {
    200: Array<BannerFull>;
};
export type GetAllBannersResponse = GetAllBannersResponses[keyof GetAllBannersResponses];
export type CreateABannerData = {
    body: BannerBase;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/banners';
};
export type CreateABannerResponses = {
    200: BannerFull;
};
export type CreateABannerResponse = CreateABannerResponses[keyof CreateABannerResponses];
export type DeleteABannerData = {
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
export type DeleteABannerResponses = {
    204: void;
};
export type DeleteABannerResponse = DeleteABannerResponses[keyof DeleteABannerResponses];
export type GetABannerData = {
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
export type GetABannerResponses = {
    200: BannerFull;
};
export type GetABannerResponse = GetABannerResponses[keyof GetABannerResponses];
export type UpdateABannerData = {
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
export type UpdateABannerResponses = {
    200: BannerFull;
};
export type UpdateABannerResponse = UpdateABannerResponses[keyof UpdateABannerResponses];
export type GetACountOfBannersData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/banners/count';
};
export type GetACountOfBannersResponses = {
    200: {
        count?: number;
    };
};
export type GetACountOfBannersResponse = GetACountOfBannersResponses[keyof GetACountOfBannersResponses];
export type DeleteAGiftCertificateData = {
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
export type DeleteAGiftCertificateResponses = {
    204: void;
};
export type DeleteAGiftCertificateResponse = DeleteAGiftCertificateResponses[keyof DeleteAGiftCertificateResponses];
export type GetAGiftCertificateData = {
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
export type GetAGiftCertificateResponses = {
    200: GiftCertificateFull;
};
export type GetAGiftCertificateResponse = GetAGiftCertificateResponses[keyof GetAGiftCertificateResponses];
export type UpdateAGiftCertificateData = {
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
export type UpdateAGiftCertificateResponses = {
    200: GiftCertificateFull;
};
export type UpdateAGiftCertificateResponse = UpdateAGiftCertificateResponses[keyof UpdateAGiftCertificateResponses];
export type DeleteAllGiftCertificatesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/gift_certificates';
};
export type DeleteAllGiftCertificatesResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteAllGiftCertificatesResponse = DeleteAllGiftCertificatesResponses[keyof DeleteAllGiftCertificatesResponses];
export type GetAllGiftCertificatesData = {
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
    };
    url: '/gift_certificates';
};
export type GetAllGiftCertificatesResponses = {
    200: Array<GiftCertificateFull>;
};
export type GetAllGiftCertificatesResponse = GetAllGiftCertificatesResponses[keyof GetAllGiftCertificatesResponses];
export type CreateAGiftCertificateData = {
    body?: GiftCertificatePost;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/gift_certificates';
};
export type CreateAGiftCertificateResponses = {
    200: GiftCertificateFull;
};
export type CreateAGiftCertificateResponse = CreateAGiftCertificateResponses[keyof CreateAGiftCertificateResponses];
