export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type CouponCodeSchedule = {
    valid_from: string;
    valid_until: string | null;
};
export type CouponCode = {
    id: number;
    code: string;
    current_uses: number;
    max_uses?: number;
    max_uses_per_customer?: number;
    created: string;
    schedule?: CouponCodeSchedule | null;
};
export type DeprecatedPaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type DeprecatedPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_pages?: number;
    links?: DeprecatedPaginationLinks;
};
export type CursorPaginationLinks = {
    previous?: string;
    next?: string;
};
export type CursorPagination = {
    count: number;
    per_page: number;
    start_cursor?: string;
    end_cursor?: string;
    links: CursorPaginationLinks;
};
export type OptionalCursorCollectionMeta = {
    pagination?: DeprecatedPagination;
    cursor_pagination?: CursorPagination;
};
export type CouponCodesBulkGetPromotionCodesResponse200 = {
    data?: Array<CouponCode>;
    meta?: OptionalCursorCollectionMeta;
};
export type BulkActionResponseErrorErrors = {
    [key: string]: unknown;
};
export type BulkActionResponseError = {
    status?: number;
    title?: string;
    type?: string;
    errors?: BulkActionResponseErrorErrors;
};
export type BulkActionResponseMeta = {
    total?: number;
    success?: number;
    failed?: number;
};
export type DeleteCouponCodesRequestUnprocessableEntityError = {
    errors?: Array<BulkActionResponseError>;
    meta?: BulkActionResponseMeta;
};
export type BulkCouponCode = {
    code?: string;
};
export type PromotionsPromotionIdCodegenPostResponsesContentApplicationJsonSchemaData = {
    created?: string;
    max_uses?: number;
    max_uses_per_customer?: number;
    batch_size?: number;
    codes?: Array<BulkCouponCode>;
    schedule?: CouponCodeSchedule | null;
};
export type PromotionsPromotionIdCodegenPostResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type CouponCodesBulkGeneratePromotionCodesBatchResponse201 = {
    data: PromotionsPromotionIdCodegenPostResponsesContentApplicationJsonSchemaData;
    meta?: PromotionsPromotionIdCodegenPostResponsesContentApplicationJsonSchemaMeta;
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
export type _Error = {
    status?: number;
    title?: string;
    type?: string;
};
export type ErrorResponse = {
    errors?: Array<_Error>;
};
export type PromotionsPromotionIdCodesPostResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type CouponCodesSingleCreatePromotionCodeResponse201 = {
    data?: CouponCode;
    meta?: PromotionsPromotionIdCodesPostResponsesContentApplicationJsonSchemaMeta;
};
export type CouponCodesSingleGetCouponCodeByCodeResponse200 = {
    data?: Array<CouponCode>;
    meta?: OptionalCursorCollectionMeta;
};
export type PromotionsGetParametersRedemptionType = 'automatic' | 'coupon';
export type PromotionsGetParametersSort = 'id' | 'name' | 'priority' | 'start_date';
export type PromotionsGetParametersDirection = 'asc' | 'desc';
export type SavedAutomaticPromotionRedemptionType = 'AUTOMATIC';
export type Channel = {
    id: number;
};
export type CustomerSegmentIdLimitation = {
    id: Array<string>;
};
export type NotCustomerSegmentLimitation3 = {
    not: CustomerSegmentIdLimitation;
};
export type AndCustomerSegmentLimitation3 = {
    and: Array<CustomerSegmentIdLimitation>;
};
export type OrCustomerSegmentLimitation3 = {
    or: Array<CustomerSegmentIdLimitation>;
};
export type CustomerSegmentLimitation3 = CustomerSegmentIdLimitation | NotCustomerSegmentLimitation3 | AndCustomerSegmentLimitation3 | OrCustomerSegmentLimitation3;
export type NotCustomerSegmentLimitation2 = {
    not: CustomerSegmentLimitation3;
};
export type AndCustomerSegmentLimitation2 = {
    and: Array<CustomerSegmentLimitation3>;
};
export type OrCustomerSegmentLimitation2 = {
    or: Array<CustomerSegmentLimitation3>;
};
export type CustomerSegmentLimitation2 = CustomerSegmentIdLimitation | NotCustomerSegmentLimitation2 | AndCustomerSegmentLimitation2 | OrCustomerSegmentLimitation2;
export type NotCustomerSegmentLimitation = {
    not: CustomerSegmentLimitation2;
};
export type AndCustomerSegmentLimitation = {
    and: Array<CustomerSegmentLimitation2>;
};
export type OrCustomerSegmentLimitation = {
    or: Array<CustomerSegmentLimitation2>;
};
export type CustomerSegmentLimitation = CustomerSegmentIdLimitation | NotCustomerSegmentLimitation | AndCustomerSegmentLimitation | OrCustomerSegmentLimitation;
export type CustomerSegments = CustomerSegmentLimitation;
export type Customer = {
    group_ids?: Array<number>;
    minimum_order_count?: number;
    excluded_group_ids?: Array<number>;
    segments?: CustomerSegments;
};
export type Money = string;
export type FixedDiscount = {
    fixed_amount: Money;
};
export type PercentageDiscount = {
    percentage_amount: string;
};
export type Discount = FixedDiscount | PercentageDiscount;
export type MaximumAllowedDiscountAmount = string;
export type CartValueActionCartValue = {
    discount: Discount;
    maximum_allowed_discount_amount?: MaximumAllowedDiscountAmount;
};
export type CartValueAction = {
    cart_value?: CartValueActionCartValue;
};
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
export type ProductOptionsItemMatcherProductOption = {
    type: string;
    name: string;
    values: Array<string>;
};
export type ProductOptionsItemMatcher = {
    product_option?: ProductOptionsItemMatcherProductOption;
};
export type ProductCustomFieldMatcherProductCustomField = {
    name: string;
    values: Array<string>;
};
export type ProductCustomFieldMatcher = {
    product_custom_field?: ProductCustomFieldMatcherProductCustomField;
};
export type SimpleItemMatcher = BrandsItemMatcher | CategoriesItemMatcher | ProductsItemMatcher | VariantsItemMatcher | ProductOptionsItemMatcher | ProductCustomFieldMatcher;
export type NotItemMatcher3 = {
    not?: SimpleItemMatcher;
};
export type AndItemMatcher3 = {
    and?: Array<SimpleItemMatcher>;
};
export type OrItemMatcher3 = {
    or?: Array<SimpleItemMatcher>;
};
export type ItemMatcher3 = SimpleItemMatcher | NotItemMatcher3 | AndItemMatcher3 | OrItemMatcher3;
export type NotItemMatcher2 = {
    not?: ItemMatcher3;
};
export type AndItemMatcher2 = {
    and?: Array<ItemMatcher3>;
};
export type OrItemMatcher2 = {
    or?: Array<ItemMatcher3>;
};
export type ItemMatcher2 = SimpleItemMatcher | NotItemMatcher2 | AndItemMatcher2 | OrItemMatcher2;
export type NotItemMatcher = {
    not?: ItemMatcher2;
};
export type AndItemMatcher = {
    and?: Array<ItemMatcher2>;
};
export type OrItemMatcher = {
    or?: Array<ItemMatcher2>;
};
export type ItemMatcher = SimpleItemMatcher | NotItemMatcher | AndItemMatcher | OrItemMatcher;
export type CartItemsActionCartItemsStrategy = 'LEAST_EXPENSIVE' | 'LEAST_EXPENSIVE_ONLY' | 'MOST_EXPENSIVE' | 'MOST_EXPENSIVE_ONLY';
export type CartItemsActionCartItems = {
    discount: Discount;
    maximum_allowed_discount_amount?: MaximumAllowedDiscountAmount;
    as_total?: boolean;
    items?: ItemMatcher;
    include_items_considered_by_condition?: boolean;
    exclude_items_on_sale?: boolean;
    strategy?: CartItemsActionCartItemsStrategy;
    quantity?: number;
    add_free_item?: boolean;
};
export type CartItemsAction = {
    cart_items?: CartItemsActionCartItems;
};
export type GiftItemActionGiftItem = {
    quantity: number;
    product_id?: number;
    variant_id?: number;
};
export type GiftItemAction = {
    gift_item?: GiftItemActionGiftItem;
};
export type FixedPriceSetActionFixedPriceSetStrategy = 'LEAST_EXPENSIVE' | 'LEAST_EXPENSIVE_ONLY' | 'MOST_EXPENSIVE' | 'MOST_EXPENSIVE_ONLY';
export type FixedPriceSetActionFixedPriceSet = {
    quantity: number;
    fixed_price: Money;
    items?: ItemMatcher;
    strategy?: FixedPriceSetActionFixedPriceSetStrategy;
    exclude_items_on_sale?: boolean;
    include_items_considered_by_condition?: boolean;
};
export type FixedPriceSetAction = {
    fixed_price_set?: FixedPriceSetActionFixedPriceSet;
};
export type ShippingActionShippingZoneIds0 = '*';
export type ShippingActionShippingZoneIds = ShippingActionShippingZoneIds0 | Array<number>;
export type ShippingActionShipping = {
    free_shipping?: boolean;
    zone_ids: ShippingActionShippingZoneIds;
};
export type ShippingAction = {
    shipping?: ShippingActionShipping;
};
export type ShippingDiscountActionShippingDiscountMethodIds0 = '*';
export type ShippingDiscountActionShippingDiscountMethodIds = ShippingDiscountActionShippingDiscountMethodIds0 | Array<number>;
export type ShippingDiscountActionShippingDiscount = {
    discount: Discount;
    maximum_allowed_discount_amount?: MaximumAllowedDiscountAmount;
    method_ids: ShippingDiscountActionShippingDiscountMethodIds;
};
export type ShippingDiscountAction = {
    shipping_discount?: ShippingDiscountActionShippingDiscount;
};
export type Action = CartValueAction | CartItemsAction | GiftItemAction | FixedPriceSetAction | ShippingAction | ShippingDiscountAction;
export type CartConditionCart = {
    items?: ItemMatcher;
    minimum_spend?: Money;
    minimum_quantity?: number;
};
export type CartCondition = {
    cart?: CartConditionCart;
};
export type AndCondition = {
    and?: Array<CartCondition>;
};
export type Condition = CartCondition | AndCondition;
export type Rule = {
    action: Action;
    apply_once?: boolean;
    stop?: boolean;
    condition?: Condition;
};
export type SavedAutomaticPromotionStatus = 'ENABLED' | 'DISABLED' | 'INVALID';
export type NotificationType = 'UPSELL' | 'ELIGIBLE' | 'APPLIED';
export type Notification = {
    content: string;
    type: NotificationType;
    locations: Array<string>;
};
export type CountryRuleInfo = {
    iso2_country_code: string;
};
export type CountryAddressMatcher = {
    countries: Array<CountryRuleInfo>;
};
export type NotAddressMatcher = {
    not: CountryAddressMatcher;
};
export type AddressMatcher = CountryAddressMatcher | NotAddressMatcher;
export type AvailabilityByWeekDayWeekDaysItems = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
export type AvailabilityByWeekDay = {
    week_frequency: number;
    week_days: Array<AvailabilityByWeekDayWeekDaysItems>;
    daily_start_time: string;
    daily_end_time: string;
};
export type SavedAutomaticPromotionPromotionCategory = 'cart' | 'shipping';
export type CreatedFrom = 'react_ui' | 'legacy_ui' | 'api';
export type SavedAutomaticPromotion = {
    id: number;
    redemption_type: SavedAutomaticPromotionRedemptionType;
    name: string;
    display_name?: string;
    channels: Array<Channel>;
    customer: Customer;
    rules: Array<Rule>;
    current_uses: number;
    max_uses?: number;
    status: SavedAutomaticPromotionStatus;
    start_date: string;
    end_date?: string;
    stop: boolean;
    can_be_used_with_other_promotions: boolean;
    currency_code: string;
    notifications: Array<Notification>;
    shipping_address?: AddressMatcher;
    schedule?: AvailabilityByWeekDay;
    promotion_category?: SavedAutomaticPromotionPromotionCategory;
    is_featured_promotion: boolean;
    featured_promotion_callout_message: string;
    created_from: CreatedFrom;
};
export type SavedCouponPromotionRedemptionType = 'COUPON';
export type SavedCouponPromotionStatus = 'ENABLED' | 'DISABLED' | 'INVALID';
export type SavedCouponPromotionPromotionCategory = 'cart' | 'shipping';
export type SavedCouponPromotionMultipleCodes = {
    has_multiple_codes?: boolean;
};
export type SavedCouponPromotionCouponType = 'SINGLE' | 'BULK';
export type SavedCouponPromotion = {
    id: number;
    redemption_type: SavedCouponPromotionRedemptionType;
    name: string;
    display_name?: string;
    channels: Array<Channel>;
    customer: Customer;
    rules: Array<Rule>;
    current_uses: number;
    max_uses?: number;
    status: SavedCouponPromotionStatus;
    start_date: string;
    end_date?: string;
    stop: boolean;
    can_be_used_with_other_promotions: boolean;
    currency_code: string;
    notifications: Array<Notification>;
    shipping_address?: AddressMatcher;
    schedule?: AvailabilityByWeekDay;
    promotion_category?: SavedCouponPromotionPromotionCategory;
    is_featured_promotion: boolean;
    featured_promotion_callout_message: string;
    created_from: CreatedFrom;
    codes?: CouponCode;
    coupon_overrides_automatic_when_offering_higher_discounts: boolean;
    multiple_codes?: SavedCouponPromotionMultipleCodes;
    coupon_type: SavedCouponPromotionCouponType;
};
export type PromotionsGetResponsesContentApplicationJsonSchemaDataItems = SavedAutomaticPromotion | SavedCouponPromotion;
export type PaginationLinks = {
    previous?: string;
    current?: string;
    next?: string;
};
export type Pagination = {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
    links: PaginationLinks;
};
export type CollectionMeta = {
    pagination: Pagination;
};
export type PromotionsBulkGetPromotionsResponse200 = {
    data: Array<PromotionsGetResponsesContentApplicationJsonSchemaDataItems>;
    meta: CollectionMeta;
};
export type DeletePromotionsRequestUnprocessableEntityError = {
    errors?: Array<BulkActionResponseError>;
    meta?: BulkActionResponseMeta;
};
export type DraftCouponPromotionRedemptionType = 'COUPON';
export type DraftCouponPromotionStatus = 'ENABLED' | 'DISABLED' | 'INVALID';
export type DraftCouponPromotionPromotionCategory = 'cart' | 'shipping';
export type DraftCouponPromotionCouponType = 'SINGLE' | 'BULK';
export type DraftCouponPromotion = {
    id?: number;
    redemption_type: DraftCouponPromotionRedemptionType;
    name: string;
    display_name?: string;
    channels?: Array<Channel>;
    customer?: Customer;
    rules: Array<Rule>;
    current_uses?: number;
    max_uses?: number;
    status?: DraftCouponPromotionStatus;
    start_date?: string;
    end_date?: string;
    stop?: boolean;
    can_be_used_with_other_promotions?: boolean;
    currency_code?: string;
    notifications?: Array<Notification>;
    shipping_address?: AddressMatcher;
    schedule?: AvailabilityByWeekDay;
    promotion_category?: DraftCouponPromotionPromotionCategory;
    is_featured_promotion?: boolean;
    featured_promotion_callout_message?: string;
    coupon_overrides_automatic_when_offering_higher_discounts?: boolean;
    coupon_type?: DraftCouponPromotionCouponType;
};
export type DraftAutomaticPromotionRedemptionType = 'AUTOMATIC';
export type DraftAutomaticPromotionStatus = 'ENABLED' | 'DISABLED' | 'INVALID';
export type DraftAutomaticPromotionPromotionCategory = 'cart' | 'shipping';
export type DraftAutomaticPromotion = {
    id?: number;
    redemption_type: DraftAutomaticPromotionRedemptionType;
    name: string;
    display_name?: string;
    channels?: Array<Channel>;
    customer?: Customer;
    rules: Array<Rule>;
    current_uses?: number;
    max_uses?: number;
    status?: DraftAutomaticPromotionStatus;
    start_date?: string;
    end_date?: string;
    stop?: boolean;
    can_be_used_with_other_promotions?: boolean;
    currency_code?: string;
    notifications?: Array<Notification>;
    shipping_address?: AddressMatcher;
    schedule?: AvailabilityByWeekDay;
    promotion_category?: DraftAutomaticPromotionPromotionCategory;
    is_featured_promotion?: boolean;
    featured_promotion_callout_message?: string;
};
export type PromotionsSingleCreatePromotionRequest = DraftCouponPromotion | DraftAutomaticPromotion;
export type PromotionsPostResponsesContentApplicationJsonSchemaData = SavedCouponPromotion | SavedAutomaticPromotion;
export type PromotionsPostResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type PromotionsSingleCreatePromotionResponse201 = {
    data?: PromotionsPostResponsesContentApplicationJsonSchemaData;
    meta?: PromotionsPostResponsesContentApplicationJsonSchemaMeta;
};
export type PromotionsIdGetResponsesContentApplicationJsonSchemaData = SavedCouponPromotion | SavedAutomaticPromotion;
export type PromotionsIdGetResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type PromotionsSingleGetPromotionResponse200 = {
    data?: PromotionsIdGetResponsesContentApplicationJsonSchemaData;
    meta?: PromotionsIdGetResponsesContentApplicationJsonSchemaMeta;
};
export type PatchCouponPromotionRedemptionType = 'AUTOMATIC' | 'COUPON';
export type PatchCouponPromotionStatus = 'ENABLED' | 'DISABLED' | 'INVALID';
export type PatchCouponPromotionPromotionCategory = 'cart' | 'shipping';
export type PatchCouponPromotionCouponType = 'SINGLE' | 'BULK';
export type PatchCouponPromotion = {
    id?: number;
    redemption_type?: PatchCouponPromotionRedemptionType;
    name?: string;
    display_name?: string;
    channels?: Array<Channel>;
    customer?: Customer;
    rules?: Array<Rule>;
    current_uses?: number;
    max_uses?: number;
    status?: PatchCouponPromotionStatus;
    start_date?: string;
    end_date?: string;
    stop?: boolean;
    can_be_used_with_other_promotions?: boolean;
    currency_code?: string;
    notifications?: Array<Notification>;
    shipping_address?: AddressMatcher;
    schedule?: AvailabilityByWeekDay;
    promotion_category?: PatchCouponPromotionPromotionCategory;
    is_featured_promotion?: boolean;
    featured_promotion_callout_message?: string;
    codes?: CouponCode;
    coupon_overrides_automatic_when_offering_higher_discounts?: boolean;
    coupon_type?: PatchCouponPromotionCouponType;
};
export type PatchAutomaticPromotionRedemptionType = 'AUTOMATIC' | 'COUPON';
export type PatchAutomaticPromotionStatus = 'ENABLED' | 'DISABLED' | 'INVALID';
export type PatchAutomaticPromotionPromotionCategory = 'cart' | 'shipping';
export type PatchAutomaticPromotion = {
    id?: number;
    redemption_type?: PatchAutomaticPromotionRedemptionType;
    name?: string;
    display_name?: string;
    channels?: Array<Channel>;
    customer?: Customer;
    rules?: Array<Rule>;
    current_uses?: number;
    max_uses?: number;
    status?: PatchAutomaticPromotionStatus;
    start_date?: string;
    end_date?: string;
    stop?: boolean;
    can_be_used_with_other_promotions?: boolean;
    currency_code?: string;
    notifications?: Array<Notification>;
    shipping_address?: AddressMatcher;
    schedule?: AvailabilityByWeekDay;
    promotion_category?: PatchAutomaticPromotionPromotionCategory;
    is_featured_promotion?: boolean;
    featured_promotion_callout_message?: string;
};
export type PromotionsSingleUpdatePromotionRequest = PatchCouponPromotion | PatchAutomaticPromotion;
export type PromotionsIdPutResponsesContentApplicationJsonSchemaData = SavedCouponPromotion | SavedAutomaticPromotion;
export type PromotionsIdPutResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type PromotionsSingleUpdatePromotionResponse200 = {
    data?: PromotionsIdPutResponsesContentApplicationJsonSchemaData;
    meta?: PromotionsIdPutResponsesContentApplicationJsonSchemaMeta;
};
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
    422: DeleteCouponCodesRequestUnprocessableEntityError;
};
export type DeleteCouponCodesError = DeleteCouponCodesErrors[keyof DeleteCouponCodesErrors];
export type DeleteCouponCodesResponses = {
    204: {
        [key: string]: unknown;
    };
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
        'valid_from:min'?: number;
        'valid_until:max'?: number;
    };
    url: '/promotions/{promotion_id}/codes';
};
export type GetPromotionCodesResponses = {
    200: CouponCodesBulkGetPromotionCodesResponse200;
};
export type GetPromotionCodesResponse = GetPromotionCodesResponses[keyof GetPromotionCodesResponses];
export type CreatePromotionCodeData = {
    body?: {
        code: string;
        max_uses?: number;
        max_uses_per_customer?: number;
    };
    headers: {
        Accept: string;
    };
    path: {
        promotion_id: string;
    };
    query?: never;
    url: '/promotions/{promotion_id}/codes';
};
export type CreatePromotionCodeResponses = {
    201: CouponCodesSingleCreatePromotionCodeResponse201;
};
export type CreatePromotionCodeResponse = CreatePromotionCodeResponses[keyof CreatePromotionCodeResponses];
export type GeneratePromotionCodesBatchData = {
    body?: {
        batch_size: number;
        max_uses?: number;
        max_uses_per_customer?: number;
        prefix?: string;
        suffix?: string;
        delimiter?: string;
        exclude_characters?: Array<string>;
        code_length?: number;
        schedule?: CouponCodeSchedule | null;
    };
    headers: {
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
    201: CouponCodesBulkGeneratePromotionCodesBatchResponse201;
};
export type GeneratePromotionCodesBatchResponse = GeneratePromotionCodesBatchResponses[keyof GeneratePromotionCodesBatchResponses];
export type ReschedulePromotionCodesData = {
    body?: {
        ids: Array<number>;
        schedule: CouponCodeSchedule | null;
    };
    headers: {
        Accept: string;
    };
    path: {
        promotion_id: string;
    };
    query?: never;
    url: '/promotions/{promotion_id}/reschedulecodes';
};
export type ReschedulePromotionCodesErrors = {
    404: _Error;
    422: _Error;
};
export type ReschedulePromotionCodesError = ReschedulePromotionCodesErrors[keyof ReschedulePromotionCodesErrors];
export type ReschedulePromotionCodesResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type ReschedulePromotionCodesResponse = ReschedulePromotionCodesResponses[keyof ReschedulePromotionCodesResponses];
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
    204: {
        [key: string]: unknown;
    };
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
    200: CouponCodesSingleGetCouponCodeByCodeResponse200;
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
    204: {
        [key: string]: unknown;
    };
};
export type DeleteCouponCodeResponse = DeleteCouponCodeResponses[keyof DeleteCouponCodeResponses];
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
    422: DeletePromotionsRequestUnprocessableEntityError;
};
export type DeletePromotionsError = DeletePromotionsErrors[keyof DeletePromotionsErrors];
export type DeletePromotionsResponses = {
    204: {
        [key: string]: unknown;
    };
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
        redemption_type?: PromotionsGetParametersRedemptionType;
        status?: string;
        page?: number;
        limit?: number;
        sort?: PromotionsGetParametersSort;
        direction?: PromotionsGetParametersDirection;
        channels?: Array<number>;
        is_featured?: boolean;
        query?: string;
    };
    url: '/promotions';
};
export type GetPromotionsErrors = {
    422: ErrorResponse;
};
export type GetPromotionsError = GetPromotionsErrors[keyof GetPromotionsErrors];
export type GetPromotionsResponses = {
    200: PromotionsBulkGetPromotionsResponse200;
};
export type GetPromotionsResponse = GetPromotionsResponses[keyof GetPromotionsResponses];
export type CreatePromotionData = {
    body?: PromotionsSingleCreatePromotionRequest;
    headers: {
        Accept: string;
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
    201: PromotionsSingleCreatePromotionResponse201;
};
export type CreatePromotionResponse = CreatePromotionResponses[keyof CreatePromotionResponses];
export type ArchivePromotionsData = {
    body?: Array<number>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/promotions/archive';
};
export type ArchivePromotionsErrors = {
    422: ErrorResponse;
    500: ErrorResponse;
};
export type ArchivePromotionsError = ArchivePromotionsErrors[keyof ArchivePromotionsErrors];
export type ArchivePromotionsResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type ArchivePromotionsResponse = ArchivePromotionsResponses[keyof ArchivePromotionsResponses];
export type UnarchivePromotionsData = {
    body?: Array<number>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/promotions/unarchive';
};
export type UnarchivePromotionsErrors = {
    422: ErrorResponse;
    500: ErrorResponse;
};
export type UnarchivePromotionsError = UnarchivePromotionsErrors[keyof UnarchivePromotionsErrors];
export type UnarchivePromotionsResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type UnarchivePromotionsResponse = UnarchivePromotionsResponses[keyof UnarchivePromotionsResponses];
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
    204: {
        [key: string]: unknown;
    };
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
    200: PromotionsSingleGetPromotionResponse200;
};
export type GetPromotionResponse = GetPromotionResponses[keyof GetPromotionResponses];
export type UpdatePromotionData = {
    body?: PromotionsSingleUpdatePromotionRequest;
    headers: {
        Accept: string;
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
    200: PromotionsSingleUpdatePromotionResponse200;
};
export type UpdatePromotionResponse = UpdatePromotionResponses[keyof UpdatePromotionResponses];
