export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3' | (string & {});
};
export type CreatedFrom = 'react_ui' | 'legacy_ui' | 'api';
export type PromotionBase = {
    readonly id?: number;
    redemption_type?: 'AUTOMATIC' | 'COUPON';
    name?: string;
    display_name?: string;
    channels?: Array<Channel>;
    customer?: Customer;
    rules?: Array<Rule>;
    readonly current_uses?: number;
    max_uses?: number;
    status?: 'ENABLED' | 'DISABLED' | 'INVALID';
    start_date?: string;
    end_date?: string;
    stop?: boolean;
    can_be_used_with_other_promotions?: boolean;
    currency_code?: string;
    notifications?: Array<Notification>;
    shipping_address?: AddressMatcher;
    schedule?: AvailabilityByWeekDay;
};
export type PatchCouponPromotion = PromotionBase & {
    codes?: CouponCode;
    coupon_overrides_automatic_when_offering_higher_discounts?: boolean;
    coupon_type?: 'SINGLE' | 'BULK';
};
export type DraftCouponPromotion = PromotionBase & {
    coupon_overrides_automatic_when_offering_higher_discounts?: boolean;
    redemption_type: 'COUPON';
    coupon_type?: 'SINGLE' | 'BULK';
};
export type SavedCouponPromotion = PromotionBase & {
    readonly id: number;
    created_from: CreatedFrom;
    codes?: CouponCode;
    coupon_overrides_automatic_when_offering_higher_discounts: boolean;
    redemption_type: 'COUPON';
    multiple_codes?: {
        has_multiple_codes?: boolean;
    };
    coupon_type: 'SINGLE' | 'BULK';
};
export type PatchAutomaticPromotion = PromotionBase;
export type DraftAutomaticPromotion = PromotionBase & {
    redemption_type: 'AUTOMATIC';
};
export type SavedAutomaticPromotion = PromotionBase & {
    redemption_type: 'AUTOMATIC';
    readonly id: number;
    created_from: CreatedFrom;
};
export type Customer = {
    group_ids?: Array<number>;
    minimum_order_count?: number;
    excluded_group_ids?: Array<number>;
    segments?: CustomerSegmentLimitation;
};
export type Rule = {
    action: Action;
    apply_once?: boolean;
    stop?: boolean;
    condition?: Condition;
};
export type Condition = CartCondition | AndCondition;
export type AndCondition = {
    and?: Array<CartCondition>;
};
export type CartCondition = {
    cart?: {
        items?: ItemMatcher;
        minimum_spend?: Money;
        minimum_quantity?: number;
    };
};
export type ItemMatcher = SimpleItemMatcher | NotItemMatcher | AndItemMatcher | OrItemMatcher;
export type AndItemMatcher = {
    and?: Array<ItemMatcher2>;
};
export type OrItemMatcher = {
    or?: Array<ItemMatcher2>;
};
export type NotItemMatcher = {
    not?: ItemMatcher2;
};
export type ItemMatcher2 = SimpleItemMatcher | NotItemMatcher2 | AndItemMatcher2 | OrItemMatcher2;
export type AndItemMatcher2 = {
    and?: Array<ItemMatcher3>;
};
export type OrItemMatcher2 = {
    or?: Array<ItemMatcher3>;
};
export type NotItemMatcher2 = {
    not?: ItemMatcher3;
};
export type ItemMatcher3 = SimpleItemMatcher | NotItemMatcher3 | AndItemMatcher3 | OrItemMatcher3;
export type AndItemMatcher3 = {
    and?: Array<SimpleItemMatcher>;
};
export type OrItemMatcher3 = {
    or?: Array<SimpleItemMatcher>;
};
export type NotItemMatcher3 = {
    not?: SimpleItemMatcher;
};
export type SimpleItemMatcher = BrandsItemMatcher | CategoriesItemMatcher | ProductsItemMatcher | VariantsItemMatcher | ProductOptionsItemMatcher | ProductCustomFieldMatcher;
export type BrandsItemMatcher = {
    brands?: Array<number>;
};
export type CategoriesItemMatcher = {
    categories?: Array<number>;
};
export type ProductsItemMatcher = {
    products?: Array<number>;
};
export type VariantsItemMatcher = {
    variants?: Array<number>;
};
export type CartValueAction = {
    cart_value?: {
        discount: Discount;
        maximum_allowed_discount_amount?: MaximumAllowedDiscountAmount;
    };
};
export type GiftItemAction = {
    gift_item?: {
        quantity: number;
        product_id?: number;
        variant_id?: number;
    };
};
export type FixedPriceSetAction = {
    fixed_price_set?: {
        quantity: number;
        fixed_price: Money;
        items?: ItemMatcher;
        strategy?: 'LEAST_EXPENSIVE' | 'LEAST_EXPENSIVE_ONLY' | 'MOST_EXPENSIVE' | 'MOST_EXPENSIVE_ONLY';
        exclude_items_on_sale?: boolean;
        include_items_considered_by_condition?: boolean;
    };
};
export type CartItemsAction = {
    cart_items?: {
        discount: Discount;
        maximum_allowed_discount_amount?: MaximumAllowedDiscountAmount;
        as_total?: boolean;
        items?: ItemMatcher;
        include_items_considered_by_condition?: boolean;
        exclude_items_on_sale?: boolean;
        strategy?: 'LEAST_EXPENSIVE' | 'LEAST_EXPENSIVE_ONLY' | 'MOST_EXPENSIVE' | 'MOST_EXPENSIVE_ONLY';
        quantity?: number;
        add_free_item?: boolean;
    };
};
export type ShippingAction = {
    shipping?: {
        free_shipping?: boolean;
        zone_ids: '*' | Array<number>;
    };
};
export type Discount = FixedDiscount | PercentageDiscount;
export type PercentageDiscount = {
    percentage_amount: string;
};
export type FixedDiscount = {
    fixed_amount: Money;
};
export type Money = string;
export type MaximumAllowedDiscountAmount = string | null;
export type OptionalCursorCollectionMeta = {
    pagination?: DeprecatedPagination;
    cursor_pagination?: CursorPagination;
};
export type CollectionMeta = {
    pagination: Pagination;
};
export type Pagination = {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links: {
        previous?: string;
        current?: string;
        next?: string;
    };
};
export type DeprecatedPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: {
        previous?: string;
        current?: string;
        next?: string;
    };
};
export type CursorPagination = {
    count: number;
    per_page: number;
    start_cursor?: string;
    end_cursor?: string;
    links: {
        previous?: string;
        next?: string;
    };
};
export type ErrorResponse = {
    errors?: Array<_Error>;
};
export type _Error = {
    status?: number;
    title?: string;
};
export type ErrorResponse400 = {
    status?: string;
    title?: string;
    type?: string;
    detail?: string;
};
export type ErrorResponse403 = {
    status?: string;
    title?: string;
    error?: string;
};
export type ErrorResponse405 = {
    status?: string;
    title?: string;
    error?: string;
};
export type Notification = {
    content: string;
    type: 'UPSELL' | 'ELIGIBLE' | 'APPLIED';
    locations: Array<string>;
};
export type Action = CartValueAction | CartItemsAction | GiftItemAction | FixedPriceSetAction | ShippingAction;
export type ProductOptionsItemMatcher = {
    product_option?: {
        type: string;
        name: string;
        values: Array<string>;
    };
};
export type ProductCustomFieldMatcher = {
    product_custom_field?: {
        name: string;
        values: Array<string>;
    };
};
export type CouponCode = {
    id: number;
    code: string;
    readonly current_uses: number;
    max_uses?: number;
    max_uses_per_customer?: number;
    created: string;
};
export type BulkCouponCode = {
    code?: string;
};
export type BulkActionResponseMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type BulkActionResponseError = {
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
    };
};
export type CountryAddressMatcher = {
    countries: Array<CountryRuleInfo>;
};
export type AddressMatcher = CountryAddressMatcher | NotAddressMatcher;
export type NotAddressMatcher = {
    not: CountryAddressMatcher;
};
export type CountryRuleInfo = {
    iso2_country_code: string;
};
export type AvailabilityByWeekDay = {
    week_frequency: number;
    week_days: Array<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'>;
    daily_start_time: string;
    daily_end_time: string;
};
export type CustomerSegmentLimitation = CustomerSegmentIdLimitation | NotCustomerSegmentLimitation | AndCustomerSegmentLimitation | OrCustomerSegmentLimitation;
export type CustomerSegmentIdLimitation = {
    id: Array<string>;
};
export type AndCustomerSegmentLimitation = {
    and: Array<CustomerSegmentLimitation2>;
};
export type OrCustomerSegmentLimitation = {
    or: Array<CustomerSegmentLimitation2>;
};
export type NotCustomerSegmentLimitation = {
    not: CustomerSegmentLimitation2;
};
export type CustomerSegmentLimitation2 = CustomerSegmentIdLimitation | NotCustomerSegmentLimitation2 | AndCustomerSegmentLimitation2 | OrCustomerSegmentLimitation2;
export type AndCustomerSegmentLimitation2 = {
    and: Array<CustomerSegmentLimitation3>;
};
export type OrCustomerSegmentLimitation2 = {
    or: Array<CustomerSegmentLimitation3>;
};
export type NotCustomerSegmentLimitation2 = {
    not: CustomerSegmentLimitation3;
};
export type CustomerSegmentLimitation3 = CustomerSegmentIdLimitation | NotCustomerSegmentLimitation3 | AndCustomerSegmentLimitation3 | OrCustomerSegmentLimitation3;
export type AndCustomerSegmentLimitation3 = {
    and: Array<CustomerSegmentIdLimitation>;
};
export type OrCustomerSegmentLimitation3 = {
    or: Array<CustomerSegmentIdLimitation>;
};
export type NotCustomerSegmentLimitation3 = {
    not: CustomerSegmentIdLimitation;
};
export type Channel = {
    id: number;
};
export type PromotionBaseWritable = {
    name?: string;
    display_name?: string;
    channels?: Array<Channel>;
    customer?: Customer;
    rules?: Array<Rule>;
    max_uses?: number;
    status?: 'ENABLED' | 'DISABLED' | 'INVALID';
    start_date?: string;
    end_date?: string;
    stop?: boolean;
    can_be_used_with_other_promotions?: boolean;
    currency_code?: string;
    notifications?: Array<Notification>;
    shipping_address?: AddressMatcher;
    schedule?: AvailabilityByWeekDay;
};
export type SavedCouponPromotionWritable = PromotionBaseWritable & {
    codes?: CouponCodeWritable;
    coupon_overrides_automatic_when_offering_higher_discounts: boolean;
    redemption_type: 'COUPON';
    multiple_codes?: {
        has_multiple_codes?: boolean;
    };
    coupon_type: 'SINGLE' | 'BULK';
};
export type SavedAutomaticPromotionWritable = PromotionBaseWritable & {
    redemption_type: 'AUTOMATIC';
};
export type CouponCodeWritable = {
    id: number;
    code: string;
    max_uses?: number;
    max_uses_per_customer?: number;
    created: string;
};
export type Accept = string;
export type ContentType = string;
export type IdPath = string;
export type CodeIdPath = string;
export type IdQuery = number;
export type IdInQuery = Array<number>;
export type PageQuery = number;
export type DeprecatedPageQuery = number;
export type LimitQuery = number;
export type NameQuery = string;
export type Query = string;
export type CodeQuery = string;
export type CodeQueryRequired = string;
export type CurrencyCodeQuery = string;
export type RedemptionTypeQuery = 'automatic' | 'coupon';
export type StatusQuery = string;
export type SortQuery = 'id' | 'name' | 'priority' | 'start_date';
export type DirectionQuery = 'asc' | 'desc';
export type PromotionIdPath = string;
export type BeforeCursorQuery = string;
export type AfterCursorQuery = string;
export type ChannelQuery = Array<number>;
export type DeletePromotionsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        'id:in': Array<number>;
    };
    url: '/promotions';
};
export type DeletePromotionsErrors = {
    422: {
        errors?: Array<BulkActionResponseError>;
        meta?: BulkActionResponseMeta;
    };
};
export type DeletePromotionsError = DeletePromotionsErrors[keyof DeletePromotionsErrors];
export type DeletePromotionsResponses = {
    204: void;
};
export type DeletePromotionsResponse = DeletePromotionsResponses[keyof DeletePromotionsResponses];
export type GetPromotionsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        id?: number;
        name?: string;
        code?: string;
        currency_code?: string;
        redemption_type?: 'automatic' | 'coupon';
        status?: string;
        page?: number;
        limit?: number;
        sort?: 'id' | 'name' | 'priority' | 'start_date';
        direction?: 'asc' | 'desc';
        channels?: Array<number>;
        query?: string;
    };
    url: '/promotions';
};
export type GetPromotionsErrors = {
    422: ErrorResponse;
};
export type GetPromotionsError = GetPromotionsErrors[keyof GetPromotionsErrors];
export type GetPromotionsResponses = {
    200: {
        data: Array<SavedAutomaticPromotion | SavedCouponPromotion>;
        meta: CollectionMeta;
    };
};
export type GetPromotionsResponse = GetPromotionsResponses[keyof GetPromotionsResponses];
export type CreatePromotionData = {
    body?: DraftCouponPromotion | DraftAutomaticPromotion;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path?: never;
    query?: never;
    url: '/promotions';
};
export type CreatePromotionErrors = {
    400: ErrorResponse400;
    403: ErrorResponse403;
    422: ErrorResponse;
};
export type CreatePromotionError = CreatePromotionErrors[keyof CreatePromotionErrors];
export type CreatePromotionResponses = {
    201: {
        data?: SavedCouponPromotion | SavedAutomaticPromotion;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type CreatePromotionResponse = CreatePromotionResponses[keyof CreatePromotionResponses];
export type DeletePromotionData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: string;
    };
    query?: never;
    url: '/promotions/{id}';
};
export type DeletePromotionResponses = {
    204: void;
};
export type DeletePromotionResponse = DeletePromotionResponses[keyof DeletePromotionResponses];
export type GetPromotionData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        id: string;
    };
    query?: never;
    url: '/promotions/{id}';
};
export type GetPromotionErrors = {
    404: ErrorResponse;
};
export type GetPromotionError = GetPromotionErrors[keyof GetPromotionErrors];
export type GetPromotionResponses = {
    200: {
        data?: SavedCouponPromotion | SavedAutomaticPromotion;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type GetPromotionResponse = GetPromotionResponses[keyof GetPromotionResponses];
export type UpdatePromotionData = {
    body?: PatchCouponPromotion | PatchAutomaticPromotion;
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: string;
    };
    query?: never;
    url: '/promotions/{id}';
};
export type UpdatePromotionErrors = {
    404: ErrorResponse;
};
export type UpdatePromotionError = UpdatePromotionErrors[keyof UpdatePromotionErrors];
export type UpdatePromotionResponses = {
    200: {
        data?: SavedCouponPromotion | SavedAutomaticPromotion;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type UpdatePromotionResponse = UpdatePromotionResponses[keyof UpdatePromotionResponses];
export type DeleteCouponCodesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        promotion_id: string;
    };
    query: {
        'id:in': Array<number>;
        code?: string;
    };
    url: '/promotions/{promotion_id}/codes';
};
export type DeleteCouponCodesErrors = {
    422: {
        errors?: Array<BulkActionResponseError>;
        meta?: BulkActionResponseMeta;
    };
};
export type DeleteCouponCodesError = DeleteCouponCodesErrors[keyof DeleteCouponCodesErrors];
export type DeleteCouponCodesResponses = {
    204: void;
};
export type DeleteCouponCodesResponse = DeleteCouponCodesResponses[keyof DeleteCouponCodesResponses];
export type GetPromotionCodesData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        promotion_id: string;
    };
    query?: {
        before?: string;
        after?: string;
        page?: number;
        limit?: number;
        code?: string;
    };
    url: '/promotions/{promotion_id}/codes';
};
export type GetPromotionCodesResponses = {
    200: {
        data?: Array<CouponCode>;
        meta?: OptionalCursorCollectionMeta;
    };
};
export type GetPromotionCodesResponse = GetPromotionCodesResponses[keyof GetPromotionCodesResponses];
export type CreatePromotionCodeData = {
    body: {
        code: string;
        max_uses?: number;
        max_uses_per_customer?: number;
    };
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        promotion_id: string;
    };
    query?: never;
    url: '/promotions/{promotion_id}/codes';
};
export type CreatePromotionCodeResponses = {
    201: {
        data?: CouponCode;
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type CreatePromotionCodeResponse = CreatePromotionCodeResponses[keyof CreatePromotionCodeResponses];
export type GeneratePromotionCodesBatchData = {
    body: {
        batch_size: number;
        max_uses?: number;
        max_uses_per_customer?: number;
    };
    headers: {
        'Content-Type': string;
        Accept: string;
    };
    path: {
        promotion_id: string;
    };
    query?: never;
    url: '/promotions/{promotion_id}/codegen';
};
export type GeneratePromotionCodesBatchErrors = {
    400: ErrorResponse400;
    403: ErrorResponse403;
    405: ErrorResponse405;
    422: ErrorResponse;
};
export type GeneratePromotionCodesBatchError = GeneratePromotionCodesBatchErrors[keyof GeneratePromotionCodesBatchErrors];
export type GeneratePromotionCodesBatchResponses = {
    201: {
        data?: {
            created?: string;
            max_uses?: number;
            max_uses_per_customer?: number;
            batch_size?: number;
            codes?: Array<BulkCouponCode>;
        };
        meta?: {
            [key: string]: unknown;
        };
    };
};
export type GeneratePromotionCodesBatchResponse = GeneratePromotionCodesBatchResponses[keyof GeneratePromotionCodesBatchResponses];
export type DeleteCouponCodeByCodeData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        code: string;
    };
    url: '/promotions/codes';
};
export type DeleteCouponCodeByCodeResponses = {
    204: void;
};
export type DeleteCouponCodeByCodeResponse = DeleteCouponCodeByCodeResponses[keyof DeleteCouponCodeByCodeResponses];
export type GetCouponCodeByCodeData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        code: string;
    };
    url: '/promotions/codes';
};
export type GetCouponCodeByCodeResponses = {
    200: {
        data?: Array<CouponCode>;
        meta?: OptionalCursorCollectionMeta;
    };
};
export type GetCouponCodeByCodeResponse = GetCouponCodeByCodeResponses[keyof GetCouponCodeByCodeResponses];
export type DeleteCouponCodeData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        promotion_id: string;
        code_id: string;
    };
    query?: never;
    url: '/promotions/{promotion_id}/codes/{code_id}';
};
export type DeleteCouponCodeResponses = {
    204: void;
};
export type DeleteCouponCodeResponse = DeleteCouponCodeResponses[keyof DeleteCouponCodeResponses];
