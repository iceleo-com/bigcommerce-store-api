export type ClientOptions = {
    baseUrl: 'https://api.bigcommerce.com/stores/{store_hash}/v3/stores/{store_hash}/v3/stores/{store_hash}/v3' | (string & {});
};
export type HarmonizedSystemCodes = {
    [key: string]: unknown;
};
export type CustomsInformation = {
    product_id?: number;
    country_of_origin?: string;
    commodity_description?: string;
    international_shipping?: boolean;
    hs_codes?: HarmonizedSystemCodes;
    created_at?: string;
    updated_at?: string;
};
export type MetaCollectionPaginationLinks = {
    previous?: string;
    next?: string;
    current?: string;
};
export type MetaCollectionPagination = {
    total?: number;
    count?: number;
    per_page?: number;
    current_page?: number;
    total_page?: number;
    links?: MetaCollectionPaginationLinks;
};
export type MetaCollection = {
    pagination?: MetaCollectionPagination;
};
export type CustomsInformationGetCustomsInformationResponse200 = {
    data?: Array<CustomsInformation>;
    meta?: MetaCollection;
};
export type ErrorResponse = {
    status?: number;
    title?: string;
    type?: string;
    errors?: {
        [key: string]: string;
    };
};
export type CustomsInformationRequest = {
    product_id: number;
    country_of_origin: string;
    commodity_description: string;
    international_shipping: boolean;
    hs_codes: HarmonizedSystemCodes;
};
export type CustomsInformationUpdateCustomsInformationResponse200 = {
    data?: Array<CustomsInformation>;
};
export type ShippingSettingsCheckoutCountryListStrategy = 'DISPLAY_ALL_COUNTRIES' | 'DISPLAY_ONLY_SHIPPABLE_COUNTRIES';
export type ShippingSettingsCheckout = {
    country_list_strategy?: ShippingSettingsCheckoutCountryListStrategy;
    out_of_delivery_zone_message?: string;
};
export type ShippingSettings = {
    checkout?: ShippingSettingsCheckout;
};
export type ShippingSettingsGetResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type ShippingSettingsGetShippingSettingsResponse200 = {
    data?: ShippingSettings;
    meta?: ShippingSettingsGetResponsesContentApplicationJsonSchemaMeta;
};
export type ShippingSettingsPutResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type ShippingSettingsUpdateShippingSettingsResponse200 = {
    data?: ShippingSettings;
    meta?: ShippingSettingsPutResponsesContentApplicationJsonSchemaMeta;
};
export type UpdateShippingSettingsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type UpdateShippingSettingsRequestUnprocessableEntityError = {
    status?: number;
    title?: string;
    type?: string;
};
export type ChannelShippingSettingsCheckout = {
    out_of_delivery_zone_message?: string;
};
export type ChannelShippingSettings = {
    checkout?: ChannelShippingSettingsCheckout;
};
export type ShippingSettingsChannelsChannelIdGetResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type ShippingSettingsGetChannelShippingSettingsResponse200 = {
    data?: ChannelShippingSettings;
    meta?: ShippingSettingsChannelsChannelIdGetResponsesContentApplicationJsonSchemaMeta;
};
export type ShippingSettingsChannelsChannelIdPutResponsesContentApplicationJsonSchemaMeta = {
    [key: string]: unknown;
};
export type ShippingSettingsUpdateChannelShippingSettingsResponse200 = {
    data?: ChannelShippingSettings;
    meta?: ShippingSettingsChannelsChannelIdPutResponsesContentApplicationJsonSchemaMeta;
};
export type UpdateChannelShippingSettingsRequestBadRequestError = {
    status?: number;
    title?: string;
    type?: string;
    detail?: string;
};
export type UpdateChannelShippingSettingsRequestUnprocessableEntityError = {
    status?: number;
    title?: string;
    type?: string;
};
export type DeleteCustomsInformationData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query: {
        'product_id:in': Array<number>;
    };
    url: '/shipping/products/customs-information';
};
export type DeleteCustomsInformationErrors = {
    400: ErrorResponse;
};
export type DeleteCustomsInformationError = DeleteCustomsInformationErrors[keyof DeleteCustomsInformationErrors];
export type DeleteCustomsInformationResponses = {
    204: {
        [key: string]: unknown;
    };
};
export type DeleteCustomsInformationResponse = DeleteCustomsInformationResponses[keyof DeleteCustomsInformationResponses];
export type GetCustomsInformationData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: {
        'product_id:in'?: Array<number>;
        page?: number;
        limit?: number;
    };
    url: '/shipping/products/customs-information';
};
export type GetCustomsInformationErrors = {
    400: ErrorResponse;
};
export type GetCustomsInformationError = GetCustomsInformationErrors[keyof GetCustomsInformationErrors];
export type GetCustomsInformationResponses = {
    200: CustomsInformationGetCustomsInformationResponse200;
};
export type GetCustomsInformationResponse = GetCustomsInformationResponses[keyof GetCustomsInformationResponses];
export type UpdateCustomsInformationData = {
    body?: Array<CustomsInformationRequest>;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/shipping/products/customs-information';
};
export type UpdateCustomsInformationErrors = {
    400: ErrorResponse;
    413: ErrorResponse;
    422: ErrorResponse;
};
export type UpdateCustomsInformationError = UpdateCustomsInformationErrors[keyof UpdateCustomsInformationErrors];
export type UpdateCustomsInformationResponses = {
    200: CustomsInformationUpdateCustomsInformationResponse200;
};
export type UpdateCustomsInformationResponse = UpdateCustomsInformationResponses[keyof UpdateCustomsInformationResponses];
export type GetShippingSettingsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/shipping/settings';
};
export type GetShippingSettingsResponses = {
    200: ShippingSettingsGetShippingSettingsResponse200;
};
export type GetShippingSettingsResponse = GetShippingSettingsResponses[keyof GetShippingSettingsResponses];
export type UpdateShippingSettingsData = {
    body?: ShippingSettings;
    headers: {
        Accept: string;
    };
    path?: never;
    query?: never;
    url: '/shipping/settings';
};
export type UpdateShippingSettingsErrors = {
    400: UpdateShippingSettingsRequestBadRequestError;
    422: UpdateShippingSettingsRequestUnprocessableEntityError;
};
export type UpdateShippingSettingsError = UpdateShippingSettingsErrors[keyof UpdateShippingSettingsErrors];
export type UpdateShippingSettingsResponses = {
    200: ShippingSettingsUpdateShippingSettingsResponse200;
};
export type UpdateShippingSettingsResponse = UpdateShippingSettingsResponses[keyof UpdateShippingSettingsResponses];
export type GetChannelShippingSettingsData = {
    body?: never;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/shipping/settings/channels/{channel_id}';
};
export type GetChannelShippingSettingsErrors = {
    400: ErrorResponse;
};
export type GetChannelShippingSettingsError = GetChannelShippingSettingsErrors[keyof GetChannelShippingSettingsErrors];
export type GetChannelShippingSettingsResponses = {
    200: ShippingSettingsGetChannelShippingSettingsResponse200;
};
export type GetChannelShippingSettingsResponse = GetChannelShippingSettingsResponses[keyof GetChannelShippingSettingsResponses];
export type UpdateChannelShippingSettingsData = {
    body?: ChannelShippingSettings;
    headers: {
        Accept: string;
    };
    path: {
        channel_id: number;
    };
    query?: never;
    url: '/shipping/settings/channels/{channel_id}';
};
export type UpdateChannelShippingSettingsErrors = {
    400: UpdateChannelShippingSettingsRequestBadRequestError;
    422: UpdateChannelShippingSettingsRequestUnprocessableEntityError;
};
export type UpdateChannelShippingSettingsError = UpdateChannelShippingSettingsErrors[keyof UpdateChannelShippingSettingsErrors];
export type UpdateChannelShippingSettingsResponses = {
    200: ShippingSettingsUpdateChannelShippingSettingsResponse200;
};
export type UpdateChannelShippingSettingsResponse = UpdateChannelShippingSettingsResponses[keyof UpdateChannelShippingSettingsResponses];
