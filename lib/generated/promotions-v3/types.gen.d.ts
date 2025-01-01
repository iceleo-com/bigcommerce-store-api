export type Action = CartValueAction | CartItemsAction | GiftItemAction | FixedPriceSetAction | ShippingAction;
export type AddressMatcher = CountryAddressMatcher | NotAddressMatcher;
export type AndCondition = {
    and?: Array<CartCondition>;
};
export type AndCustomerSegmentLimitation = {
    and: Array<CustomerSegmentLimitation2>;
};
export type AndCustomerSegmentLimitation2 = {
    and: Array<CustomerSegmentLimitation3>;
};
export type AndCustomerSegmentLimitation3 = {
    and: Array<CustomerSegmentIdLimitation>;
};
export type AndItemMatcher = {
    and?: Array<ItemMatcher2>;
};
export type AndItemMatcher2 = {
    and?: Array<ItemMatcher3>;
};
export type AndItemMatcher3 = {
    and?: Array<SimpleItemMatcher>;
};
export type AvailabilityByWeekDay = {
    week_frequency: number;
    week_days: Array<('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')>;
    daily_start_time: string;
    daily_end_time: string;
};
export type BrandsItemMatcher = {
    brands?: Array<(number)>;
};
export type BulkActionResponseError = {
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: unknown;
    };
};
export type BulkActionResponseMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type CartCondition = {
    cart?: {
        items?: ItemMatcher;
        minimum_spend?: Money;
        minimum_quantity?: number;
    };
};
export type CartItemsAction = {
    cart_items?: {
        discount: Discount;
        as_total?: boolean;
        items?: ItemMatcher;
        include_items_considered_by_condition?: boolean;
        exclude_items_on_sale?: boolean;
        strategy?: 'LEAST_EXPENSIVE' | 'LEAST_EXPENSIVE_ONLY' | 'MOST_EXPENSIVE' | 'MOST_EXPENSIVE_ONLY';
        quantity?: number;
        add_free_item?: boolean;
    };
};
export type strategy = 'LEAST_EXPENSIVE' | 'LEAST_EXPENSIVE_ONLY' | 'MOST_EXPENSIVE' | 'MOST_EXPENSIVE_ONLY';
export type CartValueAction = {
    cart_value?: {
        discount: Discount;
    };
};
export type CategoriesItemMatcher = {
    categories?: Array<(number)>;
};
export type Channel = {
    id: number;
};
export type CollectionMeta = {
    pagination?: Pagination;
};
export type Condition = CartCondition | AndCondition;
export type CountryAddressMatcher = {
    countries: Array<CountryRuleInfo>;
};
export type CountryRuleInfo = {
    iso2_country_code: string;
};
export type CouponCode = {
    id?: number;
    code: string;
    readonly current_uses?: number;
    max_uses?: number;
    max_uses_per_customer?: number;
    created?: string;
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
export type Customer = {
    group_ids?: Array<(number)>;
    minimum_order_count?: number;
    excluded_group_ids?: Array<(number)>;
    segments?: (CustomerSegmentLimitation);
};
export type CustomerSegmentIdLimitation = {
    id: Array<(string)>;
};
export type CustomerSegmentLimitation = CustomerSegmentIdLimitation | NotCustomerSegmentLimitation | AndCustomerSegmentLimitation | OrCustomerSegmentLimitation;
export type CustomerSegmentLimitation2 = CustomerSegmentIdLimitation | NotCustomerSegmentLimitation2 | AndCustomerSegmentLimitation2 | OrCustomerSegmentLimitation2;
export type CustomerSegmentLimitation3 = CustomerSegmentIdLimitation | NotCustomerSegmentLimitation3 | AndCustomerSegmentLimitation3 | OrCustomerSegmentLimitation3;
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
export type Discount = FixedDiscount | PercentageDiscount;
export type Error = {
    status?: number;
    title?: string;
};
export type ErrorResponse = {
    errors?: Array<Error>;
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
export type FixedDiscount = {
    fixed_amount?: Money;
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
export type GiftItemAction = {
    gift_item?: {
        quantity: number;
        product_id?: number;
        variant_id?: number;
    };
};
export type ItemMatcher = SimpleItemMatcher | NotItemMatcher | AndItemMatcher | OrItemMatcher;
export type ItemMatcher2 = SimpleItemMatcher | NotItemMatcher2 | AndItemMatcher2 | OrItemMatcher2;
export type ItemMatcher3 = SimpleItemMatcher | NotItemMatcher3 | AndItemMatcher3 | OrItemMatcher3;
export type Money = string;
export type NotAddressMatcher = {
    not: CountryAddressMatcher;
};
export type NotCustomerSegmentLimitation = {
    not: CustomerSegmentLimitation2;
};
export type NotCustomerSegmentLimitation2 = {
    not: CustomerSegmentLimitation3;
};
export type NotCustomerSegmentLimitation3 = {
    not: CustomerSegmentIdLimitation;
};
export type Notification = {
    content: string;
    type: 'UPSELL' | 'ELIGIBLE' | 'APPLIED';
    locations: Array<(string)>;
};
export type type = 'UPSELL' | 'ELIGIBLE' | 'APPLIED';
export type NotItemMatcher = {
    not?: ItemMatcher2;
};
export type NotItemMatcher2 = {
    not?: ItemMatcher3;
};
export type NotItemMatcher3 = {
    not?: SimpleItemMatcher;
};
export type OptionalCursorCollectionMeta = {
    pagination?: DeprecatedPagination;
    cursor_pagination?: CursorPagination;
};
export type OrCustomerSegmentLimitation = {
    or: Array<CustomerSegmentLimitation2>;
};
export type OrCustomerSegmentLimitation2 = {
    or: Array<CustomerSegmentLimitation3>;
};
export type OrCustomerSegmentLimitation3 = {
    or: Array<CustomerSegmentIdLimitation>;
};
export type OrItemMatcher = {
    or?: Array<ItemMatcher2>;
};
export type OrItemMatcher2 = {
    or?: Array<ItemMatcher3>;
};
export type OrItemMatcher3 = {
    or?: Array<SimpleItemMatcher>;
};
export type Pagination = {
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
export type ParameterAccept = string;
export type ParameterAfterCursorQuery = string;
export type ParameterBeforeCursorQuery = string;
export type ParameterChannelQuery = Array<(number)>;
export type ParameterCodeIdPath = string;
export type ParameterCodeQuery = string;
export type ParameterContentType = string;
export type ParameterCurrencyCodeQuery = string;
export type ParameterDeprecatedPageQuery = number;
export type ParameterDirectionQuery = 'asc' | 'desc';
export type ParameterIdInQuery = Array<(number)>;
export type ParameterIdPath = string;
export type ParameterIdQuery = number;
export type ParameterLimitQuery = number;
export type ParameterNameQuery = string;
export type ParameterPageQuery = number;
export type ParameterPromotionIdPath = string;
export type ParameterRedemptionTypeQuery = 'automatic' | 'coupon';
export type ParameterSortQuery = 'id' | 'name' | 'priority' | 'start_date';
export type ParameterStatusQuery = string;
export type PercentageDiscount = {
    percentage_amount?: string;
};
export type ProductCustomFieldMatcher = {
    product_custom_field?: {
        name: string;
        values: Array<(string)>;
    };
};
export type ProductOptionsItemMatcher = {
    product_option?: {
        type: string;
        name: string;
        values: Array<(string)>;
    };
};
export type ProductsItemMatcher = {
    products?: Array<(number)>;
};
export type PromotionAutomatic = PromotionBase;
export type PromotionBase = {
    readonly id?: number;
    readonly redemption_type?: 'AUTOMATIC' | 'COUPON';
    name: string;
    channels?: Array<Channel>;
    customer?: Customer;
    rules: Array<Rule>;
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
export type redemption_type = 'AUTOMATIC' | 'COUPON';
export type status = 'ENABLED' | 'DISABLED' | 'INVALID';
export type PromotionCoupon = PromotionBase & {
    coupon_overrides_automatic_when_offering_higher_discounts?: boolean;
};
export type Rule = {
    action: Action;
    apply_once?: boolean;
    stop?: boolean;
    condition?: Condition;
};
export type ShippingAction = {
    shipping?: {
        free_shipping?: boolean;
        zone_ids: ('*' | Array<(number)>);
    };
};
export type SimpleItemMatcher = BrandsItemMatcher | CategoriesItemMatcher | ProductsItemMatcher | VariantsItemMatcher | ProductOptionsItemMatcher | ProductCustomFieldMatcher;
export type VariantsItemMatcher = {
    variants?: Array<(number)>;
};
export type GetPromotionsData = {
    headers: {
        Accept: string;
    };
    query?: {
        channels?: Array<(number)>;
        code?: string;
        currency_code?: string;
        direction?: 'asc' | 'desc';
        id?: number;
        limit?: number;
        name?: string;
        page?: number;
        redemption_type?: 'automatic' | 'coupon';
        sort?: 'id' | 'name' | 'priority' | 'start_date';
        status?: string;
    };
};
export type GetPromotionsResponse = ({
    data?: Array<(PromotionAutomatic | PromotionCoupon)>;
    meta?: CollectionMeta;
});
export type GetPromotionsError = (ErrorResponse);
export type CreatePromotionData = {
    body?: (PromotionCoupon | PromotionAutomatic);
    headers: {
        Accept: string;
        'Content-Type': string;
    };
};
export type CreatePromotionResponse = ({
    data?: (PromotionCoupon | PromotionAutomatic);
    meta?: {
        [key: string]: unknown;
    };
});
export type CreatePromotionError = (ErrorResponse400 | ErrorResponse403 | ErrorResponse);
export type DeletePromotionsData = {
    headers: {
        Accept: string;
    };
    query: {
        'id:in': Array<(number)>;
    };
};
export type DeletePromotionsResponse = (void);
export type DeletePromotionsError = ({
    errors?: Array<BulkActionResponseError>;
    meta?: BulkActionResponseMeta;
});
export type GetPromotionData = {
    headers: {
        Accept: string;
    };
    path: {
        id: string;
    };
};
export type GetPromotionResponse = ({
    data?: (PromotionCoupon | PromotionAutomatic);
    meta?: {
        [key: string]: unknown;
    };
});
export type GetPromotionError = (ErrorResponse);
export type UpdatePromotionData = {
    body?: (PromotionCoupon | PromotionAutomatic);
    headers: {
        Accept: string;
        'Content-Type': string;
    };
    path: {
        id: string;
    };
};
export type UpdatePromotionResponse = ({
    data?: (PromotionCoupon | PromotionAutomatic);
    meta?: {
        [key: string]: unknown;
    };
});
export type UpdatePromotionError = (ErrorResponse);
export type DeletePromotionData = {
    headers: {
        Accept: string;
    };
    path: {
        id: string;
    };
};
export type DeletePromotionResponse = (void);
export type DeletePromotionError = unknown;
export type GetPromotionCodesData = {
    headers: {
        Accept: string;
    };
    path: {
        promotion_id: string;
    };
    query?: {
        after?: string;
        before?: string;
        limit?: number;
        page?: number;
    };
};
export type GetPromotionCodesResponse = ({
    data?: Array<CouponCode>;
    meta?: OptionalCursorCollectionMeta;
});
export type GetPromotionCodesError = unknown;
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
};
export type CreatePromotionCodeResponse = ({
    data?: CouponCode;
    meta?: {
        [key: string]: unknown;
    };
});
export type CreatePromotionCodeError = unknown;
export type DeleteCouponCodesData = {
    headers: {
        Accept: string;
    };
    path: {
        promotion_id: string;
    };
    query: {
        'id:in': Array<(number)>;
    };
};
export type DeleteCouponCodesResponse = (void);
export type DeleteCouponCodesError = ({
    errors?: Array<BulkActionResponseError>;
    meta?: BulkActionResponseMeta;
});
export type DeleteCouponCodeData = {
    headers: {
        Accept: string;
    };
    path: {
        code_id: string;
        promotion_id: string;
    };
};
export type DeleteCouponCodeResponse = (void);
export type DeleteCouponCodeError = unknown;
